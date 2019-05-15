const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { HistorijaPromjena } = require("../models");
//const HistorijaPromjena = require('../models').HistorijaPromjena;

router.post("/historijapromjena", (req, res, next) => {
  const { naziv } = req.body;
  HistorijaPromjena.create({ naziv })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/historijapromjena", (req, res, next) => {
  HistorijaPromjena.findAll({ where: {}, attributes: ["naziv"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/historijapromjena/:id", (req, res, next) => {
  let id = req.params.id;
  HistorijaPromjena.findOne({
    where: { id },
    attributes: ["naziv"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/historijapromjena/:id", (req, res, next) => {
  let id = req.params.id;
  const { naziv } = req.body;
  HistorijaPromjena.update(
    { naziv },
    { where: { id }, attributes: ["naziv"], raw: true }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/historijapromjena/:id", (req, res, next) => {
  const id = req.params.id;
  User.destroy({ where: { id }, attributes: ["naziv"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
