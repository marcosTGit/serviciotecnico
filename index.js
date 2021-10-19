const express = require('express'); //import express from 'express'
const routes = require('./routes'); // incluimos el archivo que contine elas rutas
const path = require('path'); // libreria parta movernos entre archivos
const bodyParser = require('body-parser') // para manipular variabkes a traves del requiere
const {body} = require('express-validator');
const flash = require('connect-flash'); 
const session = require('express-session'); 
const cookieParser = require('cookie-parser')(session); 
// const passport = require('./config/passport'); 
const helpers = require('./helpers'); 
// variable de entorno


// conectando a bases de datos
// const db= require('./config/db');
// const { nextTick } = require('process');
// db.authenticate()
//     .then(()=>console.log('============     conectado al servidor ============='))
//     .catch((error)=>console.log(error))
// // importando modelo
// require('./models/Proyectos');
// require('./models/Tareas');
// require('./models/Usuarios');
// db.sync()
//     .then(()=>console.log('============      los modelos se importaron Exito     ==================='))
//     .catch((error)=>console.log(error))


// //crear una app
const app = express();


// //cargar public
app.use(express.static('public'));
// // habilitar pug
app.set('view engine','pug');
// // configuramos carpetas views
app.set('views', path.join(__dirname,'./views'));

// //habilitamos el bodyparser
app.use(express.urlencoded({ extended: false }));

// //flash messages
app.use(flash());

// /// llamamosa cookie parser ==> 1
// app.use(cookieParser());
//app.use(bodyParser.json())

// seteamos las sesiones ==> 2
app.use(session({
    secret: 'soportecat1024',
    resave: false,
    saveUninitialized: false
    
}));


// app.use(passport.initialize());// ==> 3 
// app.use(passport.session());  // ==> 4

//habilitar funciones del helpers
app.use((req, res, next)=>{
    res.locals.vardump = helpers.vardump;
    res.locals.mensaje = req.flash();
    res.locals.usuario = {...req.user} || null;
    //console.log(res.locals.usuario);
     next();
    });
    
    
    
app.use('/',routes());
 
// const host=process.env.HOST || '0.0.0.0';
// const port=process.env.PORT || 3000;
require('dotenv').config({path: 'var.env'})

    app.listen(process.env.PORT || 3000, ()=>{
        console.log("SERVIDOR EN LINEA");
    });