const express = require('express')
const path = require('path')
const fs = require('fs')

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
  socket.emit("connect_me", "arrgggh")
})
