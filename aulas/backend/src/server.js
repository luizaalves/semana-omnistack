//importar uma dependencia externa;
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack.q0cn4.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//dizendo pro express que utiliza o formato json
app.use(express.json());
app.use(routes);

//ouvindo no localhost na porta 3333
app.listen(3333);