const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { Korisnik } = require("../models");
//const Korisnik = require('../models').Korisnik;

router.post("/korisnik", (req, res, next) => {
  const { firstName, lastName, username, password, uloga } = req.body;
  Korisnik.create({ firstName, lastName, username, password, uloga })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/korisnik", (req, res, next) => {
  Korisnik.findAll({
    where: {},
    attributes: ["firstName", "lastName", "username", "password", "uloga"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/korisnik/:id", (req, res, next) => {
  let id = req.params.id;
  Korisnik.findOne({
    where: { id },
    attributes: ["firstName", "lastName", "username", "password", "uloga"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/korisnik/:id", (req, res, next) => {
  let id = req.params.id;
  const { firstName, lastName, username, password, uloga } = req.body;
  Korisnik.update(
    { firstName, lastName, username, password, uloga },
    {
      where: { id },
      attributes: ["firstName", "lastName", "username", "password", "uloga"],
      raw: true
    }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/korisnik/:id", (req, res, next) => {
  const id = req.params.id;
  User.destroy({
    where: { id },
    attributes: ["firstName", "lastName", "username", "password", "uloga"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
