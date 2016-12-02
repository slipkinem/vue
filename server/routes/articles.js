/**
 * Created by slipkinem on 2016/11/28.
 */
'use strict';
const Article = require('../models/models').Article
const router = require('express').Router();


router.get('/', (req, res) => {
  Article.find((err, Atricles) => {
    if (err) return new Error('server bad')
    res.send(JSON.stringify(Atricles))
  })
})


module.exports = router