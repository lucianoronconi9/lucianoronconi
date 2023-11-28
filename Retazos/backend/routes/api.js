var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var nodemailer = require('nodemailer');

router.get('/novedades', async function( req, res ) {

    let novedades = await novedadesModel.getNovedades();

    res.json(novedades);
});

router.post('/contacto', async ( req, res ) => {
    
    const mail = {
        to: 'lucianoronconi9@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contactó a traves de la web con el correo ${req.body.email} <br> Dejó el siguiente comentario: <br> ${req.body.mensaje} `
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })
});


module.exports = router;