const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Energy = require('./models/energy.js').Energy
var energy = new Energy({
title: "Жестянка", nick: "shestyanka",
})
energy.save();

    