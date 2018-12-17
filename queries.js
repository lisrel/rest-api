var promise = require('bluebird');
var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:admin@127.0.0.1:5432/mdcb';
var db = pgp(connectionString);

module.exports ={
	getAllParcels: getAllParcels,
	getAllRoads: getAllRoads,
	getSingleParcels: getSingleParcels

};

function getAllParcels(req, res, next) {
	db.any('select * from bdt1664_parcels')
		.then(function (data){
			res.status(200)
				.json({

					data
					
				});
		})
		.catch(function (err){
			return next(err);
		});
}


function getSingleParcels(req, res, next) {

	  var stand_no = parseInt(req.params.id);

	db.one('select * from bdt1664_parcels where stand_no = $1', stand_no)
		.then(function (data){
			res.status(200)
				.json({

					data
					
				});
		})
		.catch(function (err){
			return next(err);
		});
}


function getAllRoads(req, res, next) {

	db.any('select * from mahatshula_roads')
		.then(function (data){
			res.status(200)
				.json({

					data
					
				});
		})
		.catch(function (err){
			return next(err);
		});
}
