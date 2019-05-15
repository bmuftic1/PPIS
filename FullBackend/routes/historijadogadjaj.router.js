const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { HistorijaDogadjaj } = require("../models");
//const HistorijaDogadjaj = require('../models').HistorijaDogadjaj;

router.post("/historijadogadjaj", (req, res, next) => {
  const { naziv } = req.body;
  HistorijaDogadjaj.create({ naziv })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/historijadogadjaj", (req, res, next) => {
  HistorijaDogadjaj.findAll({ where: {}, attributes: ["naziv"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/historijadogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  HistorijaDogadjaj.findOne({
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

router.put("/historijadogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  const { naziv } = req.body;
  HistorijaDogadjaj.update(
    { naziv },
    { where: { id }, attributes: ["naziv"], raw: true }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/historijadogadjaj/:id", (req, res, next) => {
  const id = req.params.id;
  User.destroy({ where: { id }, attributes: ["naziv"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
