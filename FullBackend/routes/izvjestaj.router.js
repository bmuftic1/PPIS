var db = require('../db'); 
const express = require("express");
const router = express.Router();
const mysql = require('mysql');

router.get("/promjeneUser/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM Promjenas where prijavio = ' + mysql.escape(id);
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});

router.get("/promjeneDev/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM Promjenas where izvrsitelj = ' + mysql.escape(id);
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
router.get("/promjeneKomitet/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM Promjenas where odobrio = ' + mysql.escape(id);
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});

router.get("/promjeneZadnja/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM HistorijaPromjenas where datumOd = (SELECT max(h.datumOd) FROM HistorijaPromjenas h where h.promjenaId =' + mysql.escape(id) + ') and promjenaId =' + mysql.escape(id);
 
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
router.get("/promjenePrva/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM HistorijaPromjenas where datumOd = (SELECT min(h.datumOd) FROM HistorijaPromjenas h where h.promjenaId =' + mysql.escape(id) + ') and promjenaId =' + mysql.escape(id);
 
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
module.exports = router;