// $ npm init
// $ npm install express socket.io

// Initialize modules
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

// Serve static content from public folder
app.use(express.static('public'))

// What to do when a user connects
io.on('connection', socket => {
    console.log('Socket connected', socket.id)

    socket.on('send message', message => {
        io.emit('new message', message)
    })

    socket.emit('welcome message')
})

// Start server
http.listen(3000, () => {
    console.log('Server started!')
})