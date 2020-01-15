const express = require("express");
const http = require("http");

//import express from 'express'
//import http from 'http'

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))

server.listen(3000, () => {
    console.log("Servidor iniciado, porta: 3000")
})