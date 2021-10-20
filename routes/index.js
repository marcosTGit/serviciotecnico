const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
// seteamos variable de session 
const session = require('express-session');

// por aqui los ocntroladores 
const MainController = require('../controllers/mainController');
const Scan_red_Controller = require('../controllers/Scan_red_Controller');
// const ProyectoController = require('../controllers/ProyectoController');
// const UsuarioController = require('../controllers/usuarioController');
// const autenticarController = require('../controllers/autenticarController');



// DEFINIMOS RUTAS
module.exports = ()=>{

    router.get('/',
        // autenticarController.SessionControl,
        MainController.index
        );

    router.get('/scan_red',
        // autenticarController.SessionControl,
        Scan_red_Controller.index
        );

//0000000000000000000000000000000    
    return router; 
}
