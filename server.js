'use strict';

const express = require('express');
const cors = require('cors');
// const getBooksHandler = require('./Module/book')

require('dotenv').config();

const server = express();
server.use(cors());
const PORT = process.env.PORT;
server.use(express.json());
const bookModule = require('./Module/book');
const addBookHandler = bookModule.addBookHandler;
const getBooksHandler = bookModule.getBooksHandler;
const deleteBookHandler = bookModule.deleteBookHandler;

server.get('/', homeHandler);
server.get('/getbooks', getBooksHandler)
server.post('/addBook', addBookHandler);
server.delete('/deletebook', deleteBookHandler);

function homeHandler(req, res) {
    res.send('all good')
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});

server.get('*', notFoundHandler);

function notFoundHandler(req, res) {
    res.status(404).send('not found 404')
}