var express = require('express');
var router = express.Router();
const sql = require('mssql');

/*DB Connecton info*/  
var dbConfig = {
	server: "den1.mssql8.gear.host",
	database: "squared",
	user: "squared",
	password: "Go6i4jfnaX!_",
	port: 1433
}

/*Try DB Connection*/
function getInfo(){
	var conn = new sql.ConnectionPool(dbConfig);
	var req = new sql.Request(conn);

	conn.connect(function (err) {
		if (err){
			console.log(err);
			return;
		}
		req.query("SELECT * FROM info", function (err, recordset) {
			if (err){
				console.log(err);
			}
			else{
				console.log(recordset);
			}
			conn.close();
		});
	});
}

getInfo();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Squared BJJ' });
 });

module.exports = router;
