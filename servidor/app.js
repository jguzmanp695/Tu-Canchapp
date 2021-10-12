// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import path from 'path';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

// // const indexRoutes = require('../routes/primerBd');

//Conexión a BD
const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/primerBd'
mongoose.connect('mongodb+srv://root:toor@tucanchappdb.ifsjs.mongodb.net/TuCanchappDB?retryWrites=true&w=majority')
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url,options).then(
    () => {
        console.log('Conectado a mongo')
    },
    err => { err }
);

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Rutas
// app.get('/', function(req,res){
//     res.send("Hola mundo")
// });
app.use('/api',require('./routes/primerBd'));

//Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

//Puerto
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'),function(){
    console.log("Escuchando el puerto "+app.get('puerto'));
});