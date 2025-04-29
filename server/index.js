const cors = require('cors');
const express = require('express');
const routes = require('../routes');
const path = require('path');


const server = express();


server.use(cors());
server.options('*', cors());
server.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
server.use('/api', routes);


module.exports = server;