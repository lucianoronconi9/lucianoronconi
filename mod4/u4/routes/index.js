var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/saludo', function(req,res,next){
    var nombre = req.body.nombre || "";

    var saludo = "Hola " + nombre;

    res.send(saludo);
})

module.exports = router;
