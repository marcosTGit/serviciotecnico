const Sequelize = require('sequelize');
const db = require('../config/db');
// const slug =require('slug');
// const shortid = require('shortid');



const Tipo_Equipo = db.define('tipo_equipo',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
        },
    tipo: Sequelize.STRING(20),
    }
);
module.exports=Tipo_Equipo;