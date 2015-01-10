'use strict';

var express = require('express');
var router = express.Router();
var handler = function(req, res) {
  res.render('index');
}

/* GET home page. */
router.get('/', handler);
router.get('/login', handler);
router.get('/download-price', handler);

module.exports = router;