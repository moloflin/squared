var express = require('express');
var router = express.Router();
/*const Pool = require('pg');*/


const Client = require('pg');

/*Try DB connect*/  
const client = new Client({
  user: "mike",
  password: "poopmike",
  host: "142.93.73.235",
  port: 5432,
  database: "squared",
})
client.connect()
.then(() => console.log("Connected to DB successfully!"))
.catch(e => console.log)
.finally(() => client.end())

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Squared BJJ' });
 });

module.exports = router;
