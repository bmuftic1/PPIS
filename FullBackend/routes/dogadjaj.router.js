const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { Dogadjaj } = require("../models");
//const Dogadjaj = require('../models').Dogadjaj;

router.post("/dogadjaj", (req, res, next) => {
  const { datumOd, datumDo, dogadjaj, statusDogadjaj } = req.body;
  Dogadjaj.create({ datumOd, datumDo, dogadjaj, statusDogadjaj })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/dogadjaj", (req, res, next) => {
  Dogadjaj.findAll({
    where: {},
    attributes: ["datumOd", "datumDo", "dogadjaj", "statusDogadjaj"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/dogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  Dogadjaj.findOne({
    where: { id },
    attributes: ["datumOd", "datumDo", "dogadjaj", "statusDogadjaj"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/dogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  const { datumOd, datumDo, dogadjaj, statusDogadjaj } = req.body;
  Dogadjaj.update(
    { datumOd, datumDo, dogadjaj, statusDogadjaj },
    {
      where: { id },
      attributes: ["datumOd", "datumDo", "dogadjaj", "statusDogadjaj"],
      raw: true
    }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/dogadjaj/:id", (req, res, next) => {
  const id = req.params.id;
  User.destroy({
    where: { id },
    attributes: ["datumOd", "datumDo", "dogadjaj", "statusDogadjaj"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
