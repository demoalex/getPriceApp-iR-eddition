'use strict';

var express = require('express');
var router = express.Router();
var Pricelist = require('./PricelistSchema');

/* GET /pricelists listing. */
router.get('/', function(req, res, next) {
  Pricelist.find(function (err, pricelists) {
    if (err) return next(err);
    res.json(pricelists);
  });
});

/* POST /pricelists */
router.post('/', function(req, res, next) {
  Pricelist.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /pricelists/id */
router.get('/:id', function(req, res, next) {
  Pricelist.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /pricelists/:id */
router.put('/:id', function(req, res, next) {
  Pricelist.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /pricelists/:id */
router.delete('/:id', function(req, res, next) {
  Pricelist.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;