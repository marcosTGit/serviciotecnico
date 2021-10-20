const Sequelize = require('sequelize');
const db = require('../config/db');
const Etiqueta = require('./Etiqueta');



const Red = db.define('red',{
    id:{
        type: Sequelize.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    ip: Sequelize.STRING(16),
    mac: Sequelize.STRING(17),
    equipo: Sequelize.STRING(50),
    fecha: Sequelize.DATE, //DATEONLY
    nota: Sequelize.STRING(50),
    estado: Sequelize.INTEGER
});
// definimos llave foraneas o relacion con otra tabla

Red.belongsTo(Etiqueta);// una tarea pertenece a una etiqueta
//Proyectos.hasMany(Tareas);

module.exports=Red;