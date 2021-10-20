const Sequelize = require('sequelize');
const db = require('../config/db');
// const slug =require('slug');
// const shortid = require('shortid');



const Etiqueta = db.define('etiquetas',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
        },
    nombre: Sequelize.STRING(20),
    }
);
module.exports=Etiqueta;