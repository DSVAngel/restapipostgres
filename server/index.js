const cors = require('cors');
const express = require('express');
const routes = require('../routes');
const path = require('path');

// Crear servidor primero
const server = express();

// Configurar middleware
server.use(cors());
server.options('*', cors());
server.use(express.json());

// Rutas de la API
server.use('/api', routes);


module.exports = server;