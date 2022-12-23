const express = require('express')
const path = require('path')
const server = express();

server.use(express.static('public'));


server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/home.html'))
})

server.get('/materias', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/materias.html'))
})

server.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/register.html'))
})

server.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/user.html'))
})


server.listen(3000)