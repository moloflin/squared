var express = require('express');
var router = express.Router();
const Pool = require('pg');
const Client = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Squared BJJ' });
  
  const pool = new Pool({
	  user: 'mike',
	  host: '142.93.73.235',
	  database: 'squared',
	  password: 'poopmike',
	  port: 5432,
  })
  console.log('here!')
  pool.query('SELECT NOW()', (err, res) => {
  	console.log(err, res)
  	console.log('Processing user data!')
  	for (var i = 0; i <= res.rowCount; i++) {
  		console.log(res.fields[i].id)
  		console.log(res.fields[i].name)
  		console.log(res.fields[i].email)
  	}
  pool.end()
  })

  const client = new Client({
	  user: 'mike',
	  host: '142.93.73.235',
	  database: 'squared',
	  password: 'poopmike',
	  port: 5432,
  })
  client.connect()

  client.query('SELECT NOW()', (err, res) => {
  	console.log(err, res)
  client.end()
  res.render('index', {users: res.rows})
  })
 });

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Squared BJJ' });
});
module.exports = router;
