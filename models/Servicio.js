const Sequelize = require('sequelize');
const db = require('../config/db');
const slug =require('slug');
// const shortid = require('shortid');
const Marca = require('./Marca');
const Tipo_Equipo = require('./Tipo_equipo');



const Servicio = db.define('servicio',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    cliente: Sequelize.STRING(50),
    serie: Sequelize.STRING(50),
    modelo: Sequelize.STRING(50),
    fecha_ingreso: Sequelize.DATE, //DATEONLY
    fecha_reparacion: Sequelize.DATE, //DATEONLY
    fecha_salida: Sequelize.DATE, //DATEONLY
    problema: Sequelize.STRING,
    diagnostico: Sequelize.STRING,
    reparacion: Sequelize.STRING,
    estado: Sequelize.STRING(20)
});

Servicio.belongsTo(Marca);// una tarea pertenece a un proyecto
Servicio.belongsTo(Tipo_Equipo);// una tarea pertenece a un proyecto


module.exports=Servicio;