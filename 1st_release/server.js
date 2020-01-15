//const express = require("express");
//const http = require("http");

// ctrl+c => desliga servidor
// npx nodemon => nodemon deixa o server com hotReload
// npx serve => servidor temporário para rodar projeto

import express from 'express'
import http from 'http'
import createGame from './public/createGame.js'

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))

const game = createGame()

game.addPlayer({ playerId: "player1", playerX: 1, playerY: 2, playerColor: "black" });
game.addPlayer({ playerId: "player2", playerX: 1, playerY: 4, playerColor: "black"  });

game.addFruit({ fruitId: "fruit1", fruitX: 4, fruitY: 3, fruitColor: 'green' });

server.listen(3000, () => {
    console.log("Servidor iniciado, porta: 3000")
})