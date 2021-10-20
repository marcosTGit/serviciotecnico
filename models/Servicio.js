const Sequelize = require('sequelize');
const db = require('../config/db');
const slug =require('slug');
// const shortid = require('shortid');
const Marca = require('./Marca');
const Tipo_Equipo = require('./Tipo_Equipo');



const Servicio = db.define('servicio',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cliente: Sequelize.STRING(50),
    problema: Sequelize.STRING,
    diagnostico: Sequelize.STRING,
    reparacion: Sequelize.STRING,
    estado: Sequelize.STRING(20)
});

Marca.belongsTo(Marca);// una tarea pertenece a un proyecto
Tipo_Equipo.belongsTo(Tipo_Equipo);// una tarea pertenece a un proyecto


module.exports=Servicio;