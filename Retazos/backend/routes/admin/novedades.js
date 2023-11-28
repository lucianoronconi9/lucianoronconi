var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')

/* GET novedades page. */
router.get('/', async function(req, res, next) {

    var novedades = await novedadesModel.getNovedades();

    res.render('admin/novedades', {
                layout: 'admin/layout',
                persona: req.session.nombre,
                novedades
            });
});

router.get('/agregar', async function(req, res, next) {

    res.render('admin/agregar', {
                layout: 'admin/layout'
            });
});

router.post('/agregar', async function(req, res, next) {

    try {
        if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertarNovedad(req.body);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: "Todos los campos son requeridos"
            });
        }

    } catch (exception) {
        console.log(exception);

        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: "No se pudo guardar la novedad"
        });
    }

});


router.get('/eliminar/:id', async function(req, res, next) {
    var id = req.params.id;

    await novedadesModel.eliminarNovedad(id);
    res.redirect('/admin/novedades');
});

router.get('/modificar/:id', async function(req, res, next) {
    var id = req.params.id;
    
    var novedad = await novedadesModel.getNovedadById(id);

    res.render('admin/modificar', {
            layout: 'admin/layout',
            novedad
        });
});

router.post('/modificar', async function(req, res, next) {

    try {

        var obj = {
            titulo : req.body.titulo,
            subtitulo : req.body.subtitulo,
            cuerpo : req.body.cuerpo
        }

        await novedadesModel.modificarNovedad(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch (exception) {
        console.log(exception);

        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: "No se pudo actualizar la novedad"
        });
    }

});

module.exports = router;
