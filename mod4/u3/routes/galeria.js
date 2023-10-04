var express = require('express');
var router = express.Router();

/* GET imagenes. */
router.get('/', function(req, res, next) {
  res.send('obteniendo las imágenes');
});

router.put('/:galeria', function (req, res) {
    var imagen = req.imagen;
    imagen = _.extend(imagen, req.body);
    imagen.save(function(err) {
    if (err) {
        return res.send('/galeria', {
            errors: err.errors,
            imagen : imagen
        });
    } else {
        res.jsonp(imagen);
    }   
  })
});

module.exports = router;
