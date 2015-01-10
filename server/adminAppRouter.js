'use strict';

var express = require('express');
var router = express.Router();
var handler = function(req, res) {
  res.render('admin');
}

/* GET admin page. */
router.get('/', handler);
router.get('/pricelists', handler);
router.get('/users', handler);

module.exports = router;