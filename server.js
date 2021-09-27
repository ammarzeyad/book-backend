'use strict';

const express = require('express');
const cors = require('cors');
const getBooksHandler = require('./Module/book')

require('dotenv').config();

const server = express();
server.use(cors());
const PORT = process.env.PORT;


server.get('/', homeHandler);
server.get('/books', getBooksHandler)

function homeHandler(req, res) {
    res.send('all good')
}

server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`)
});

server.get('*', notFoundHandler);

function notFoundHandler(req, res) {
    res.status(404).send('not found 404')
}