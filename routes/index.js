var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });
/* Страница Burn*/
router.get('/burn', function(req, res, next) {
  res.send("<h1>Страница Burn</h1>")
  });
/* Страница Tornado */
router.get('/tornado', function(req, res, next) {
  res.send("<h1>Страница Tornado</h1>")
  });
  /* Страница Gorilla */
  router.get('/gorilla', function(req, res, next) {
  res.send("<h1>Страница Gorilla</h1>")
  });
  
module.exports = router;
