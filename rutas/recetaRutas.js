const express = require('express');
const rutas = express.Router();
const RecetaModel = require('../models/Receta');

//endpoint traer todas las recetas
rutas.get('/traerRecetas', async (req, res) => {
    try {
        const receta = await RecetaModel.find();
        res.json(receta);
    } catch (error){
        res.status(500).json({mensaje: error.messege});
    }
});
module.exports = rutas;
