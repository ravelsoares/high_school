const express = require('express')
const path = require('path')
const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'))
})

server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/../home.html'))
})

server.get('/materias', (req, res) => {
    res.sendFile(path.join(__dirname + '/../materias.html'))
})

server.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/../register.html'))
})

server.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname + '/../user.html'))
})


server.listen(3000)