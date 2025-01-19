var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });
/* Страница Burn*/
router.get('/burn', function(req, res, next) {
  res.render('energy', {
    title: "Burn",
    picture: "images/burn.png",
    desc: "Burn — это энергетический напиток, который производится компанией Coca-Cola. Он был запущен в 2001 году и стал популярным благодаря своему агрессивному маркетингу и мощному энергетическому эффекту. Burn позиционируется как напиток для молодых, активных людей, ведущих динамичный образ жизни. "
  });
});

    /* Страница Tornado */

router.get('/tornado', function(req, res, next) {
  res.render('energy', {
    title: "Tornado",
    picture: "images/tornado.png",
    desc: "Tornado — это энергетический напиток, который позиционируется как доступный и эффективный источник энергии. Он часто встречается на рынке и, как правило, стоит дешевле многих других популярных энергетиков. Tornado нацелен на тех, кому нужен заряд бодрости и энергии для учебы, работы или физической активности."
  });
});
  /* Страница Gorilla */
  router.get('/gorilla', function(req, res, next) {
    res.render('energy', {
      title: "Gorilla",
      picture: "images/gorilla.png",
      desc: "Gorilla Energy — это энергетический напиток, который позиционируется как напиток для активных, целеустремленных людей, которым нужна энергия для достижения своих целей. Он известен своим ярким дизайном с изображением гориллы и мощным энергетическим эффектом."
    });
  });
module.exports = router;
