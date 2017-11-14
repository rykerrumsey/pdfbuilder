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

  socket.on("renderpdf", (document) => {
    (async () => {
      const htmltemplate = fs.readFileSync('./templates/index.mst').toString()
      const html = mustache.render(htmltemplate, {css: document.css, html: document.html})

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(html);
      await page.pdf({
        path: 'temp.pdf',
        format: 'Letter',
        landscape: true,
        margin: {
          top: "20px",
          bottom: "20px",
          left: "20px",
          right: "20px"
        }
      });
      await browser.close();

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
