const express = require('express')
const path = require('path')
const fs = require('fs')
const puppeteer = require('puppeteer')
const mustache = require('mustache')

let app = express()

app.use(express.static(__dirname + '/dist'))

const port = 2024;

app.get('/', (req, res) => {
  res.writeHead(200, {"Content-Type":"text/html"})
  res.write(fs.readFileSync("./index.html"))
  res.end()
})

console.log("Server running at: localhost:" + port)

let io = require('socket.io').listen(app.listen(port))

io.sockets.on("connection", (socket) => {

  socket.on("startup", () => {
    let content = {
      html: fs.readFileSync('./templates/main.html').toString(),
      css: fs.readFileSync('./templates/main.css').toString()
    }

    socket.emit("loadfiles", content)
  })

  socket.on("renderpdf", (document) => {
    (async () => {
      //save file to filesystem
      await fs.writeFile('./templates/main.html', document.html, (err) => {
        if(!err) {
          console.log("HTML file successfully saved.")
        } else {
          console.log("There was an error saving the HTML file.")
        }
      })

      await fs.writeFile('./templates/main.css', document.css, (err) => {
        if(!err) {
          console.log("CSS file successfully saved.")
        } else {
          console.log("There was an error saving the CSS file.")
        }
      })

      const htmltemplate = fs.readFileSync('./templates/index.mst').toString()
      const html = mustache.render(htmltemplate, {css: document.css, html: document.html})

      const browser = await puppeteer.launch()
      const page = await browser.newPage()

      await page.setViewport({isLandscape: true, width: 2200, height: 1700, deviceScaleFactor: 2})
      await page.setContent(html)
      //await page.emulateMedia('screen');
      await page.pdf({
        path: 'temp.pdf',
        format: 'Letter',
        printBackground: true,
        landscape: true,
        margin: {
          top: "20px",
          bottom: "20px",
          left: "20px",
          right: "20px"
        }
      })
      await browser.close()

      await fs.readFile(__dirname + '/temp.pdf', (err, buf) => {
        if(err) {
          console.log("Error loading pdf file from server.")
        } else {
          socket.emit('generatepdf', { buffer: buf.toString('base64') })
        }
      })
    })();
  })
})
