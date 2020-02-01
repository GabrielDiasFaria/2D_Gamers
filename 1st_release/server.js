//const express = require("express");
//const http = require("http");

// ctrl+c => desliga servidor
// npx nodemon => nodemon deixa o server com hotReload
// npm install nodemon
// npx serve => servidor temporário para rodar projeto
// nvm install node => Instala versão mais nova para os imports
// node --experimental-modules my-app.mjs

import express from 'express'
import http from 'http'
import createGame from './public/createGame.js'
import socketio from 'socket.io'

const app     = express()
const server  = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

const game = createGame()

game.subscribe((command) => {
    console.log(`Emmiting ${command.type}`)
    sockets.emit(command.type, command)
})

sockets.on('connection', (socket) => {
    const playerId = socket.id
    console.log(`Jogador conectado: ${playerId}`)

    game.addPlayer({ playerId: playerId, playerColor: "black"  });

    socket.on('disconnect', () => {
        game.removePlayer({ playerId: playerId })
        console.log(`Jogador desconectado: ${playerId}`)
    })

    socket.on('move-player', (command) => {
        command.playerId = playerId
        command.type = 'move-player'
        
        game.movePlayer(command)
    })

    socket.emit('setup', game.state)
})

server.listen(3000, () => {
    console.log("Servidor iniciado, porta: 3000")
})
