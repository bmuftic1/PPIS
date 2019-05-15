const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { StatusPromjene } = require("../models");
//const StatusPromjene = require('../models').StatusPromjene;

router.post("/statuspromjene", (req, res, next) => {
  const { status } = req.body;
  StatusPromjene.create({ status })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/statuspromjene", (req, res, next) => {
  StatusPromjene.findAll({ where: {}, attributes: ["status"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/statuspromjene/:id", (req, res, next) => {
  let id = req.params.id;
  StatusPromjene.findOne({
    where: { id },
    attributes: ["status"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/statuspromjene/:id", (req, res, next) => {
  let id = req.params.id;
  const { status } = req.body;
  StatusPromjene.update(
    { status },
    { where: { id }, attributes: ["status"], raw: true }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/statuspromjene/:id", (req, res, next) => {
  const id = req.params.id;
  User.destroy({ where: { id }, attributes: ["status"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
