// import express from 'express';
const express = require('express');
const router = express.Router();

//Importar el modelo de base de datos
const  primerBd = require('../models/primerBd');
// import primerBd from '../models/primerBd';

//Agregar un registro
router.post('/nuevo-registro', async(req,res)=>{
    const body = req.body;

    try {
        const primerDB = await primerBd.create(body);
        res.status(200).json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió algo inesperado',
            error
        })
    }
});

//Obtener registro mediante Get con único id
router.get('/registro/:id', async(req, res)=>{
    const _id = req.params.id;

    try {
        const primerDB = await primerBd.findOne({_id});
        res.json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió algo inesperado',
            error
        })
    }
});

//Obtener registros mediante Get para todos los registros
router.get('/registro', async(req, res)=>{
    try {
        const primerDB = await primerBd.find();
        res.json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió algo inesperado',
            error
        })
    }
});

//Eliminar
router.delete('/registro/:id', async (req, res)=>{
    const _id = req.params.id;
    try {
        const primerDB = await primerBd.findByIdAndDelete({_id});
        if (!primerDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })    
        }
        res.json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió algo inesperado',
            error
        })
    }
});

//Actualización
router.put('/registro/:id', async (req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const primerDB = await primerBd.findByIdAndUpdate(
            _id,
            body,
            {new: true});
        res.json(primerDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió algo inesperado',
            error
        })
    }
});

//Exportar la configuración de express
module.exports = router;