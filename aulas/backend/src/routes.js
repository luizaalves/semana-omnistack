//importar uma dependencia externa;
const express = require('express');
const SessionControllers = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionControllers.store);

//exportando as rotas daqui de dentro
module.exports = routes;
 