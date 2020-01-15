import express from 'express'    // Importar Express
import http from 'http'          // Importar Http
import socketio from 'socket.io' // Socket.Io
import users from './private/Dbs/users.js'

const user = users()
const app     = express()
const server  = http.createServer(app)
const sockets = socketio(server)

app.use(express.static('public')) // Utilizar a Public

sockets.on('connection', (socket) => { // Aguarda Conexão de alguem!
    const playerId = socket.id
    console.log(`Socket Server: ${playerId}`)

    socket.on('emit_login', (command) => {                
        // check Login:
         socket.emit('return_login', {return: user.checkLogin(command), socketId: socket.id})
    })
})

server.listen(3000, () => {
    console.log("Servidor iniciado! > porta: 3000")
}) 
