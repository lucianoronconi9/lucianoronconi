var express = require('express');
var router = express.Router();

/* GET nodotros. */
router.get('/', function(req, res, next) {
  res.render('Obteniendo NOSOTROS');
});

module.exports = router;
