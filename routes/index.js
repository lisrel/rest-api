var express = require('express');
var router = express.Router();

var db = require('../queries.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/parcels', db.getAllParcels);
router.get('/api/parcels/:id', db.getSingleParcels);
router.get('/api/roads', db.getAllRoads);
module.exports = router;
