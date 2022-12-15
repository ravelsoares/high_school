const express = require('express')

const server = express();

server.get('/index', () => {
    console.log('Você está acessando a página inicial...')
})

server.get('/home', () => {
    console.log('Você está acessando a página home...')
})

server.get('/materias', () => {
    console.log('Você está acessando a página materias...')
})

server.get('/register', () => {
    console.log('Você está acessando a página register...')
})

server.get('/user', () => {
    console.log('Você está acessando a página user...')
})


server.listen(3000)