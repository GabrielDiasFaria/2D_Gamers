//const express = require("express");
//const http = require("http");

// ctrl+c => desliga servidor
// npx nodemon => nodemon deixa o server com hotReload
// npx serve => servidor temporário para rodar projeto

import express from 'express'
import http from 'http'
import createGame from './public/createGame.js'
import socketio from 'socket.io'

const app     = express()
const server  = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public'))

const game = createGame()

game.addPlayer({ playerId: "player1", playerX: 1, playerY: 2, playerColor: "black" });
game.addPlayer({ playerId: "player2", playerX: 1, playerY: 4, playerColor: "black"  });

game.addFruit({ fruitId: "fruit1", fruitX: 4, fruitY: 3, fruitColor: 'green' });

sockets.on('connection', (socket) => {
    const playerId = socket.id
    console.log(`Jogador conectado: ${playerId}`)
})

server.listen(3000, () => {
    console.log("Servidor iniciado, porta: 3000")
})