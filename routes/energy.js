var express = require('express');
var router = express.Router();
var Energy = require('../models/energy').Energy;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с energy');
});
/* Страница 'энергетиков' */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
    });
    
    /* Страница 'енергетиков' */
router.get("/:nick", async function(req, res, next) {
    var energys = await Energy.find({nick: req.params.nick});
    console.log(energys)
    if(!energys.length) return next(new Error("Нет такого энергетика на моем сайте"))
    var energy = energys[0];
    res.render('energy', {
        title: energy.title,
        picture: energy.avatar,
        desc: energy.desc
    })
});
module.exports = router;
