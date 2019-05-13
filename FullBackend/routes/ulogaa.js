const express = require('express')
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.json');
const { Uloga } = require('../models');
//const Uloga = require('../models').Uloga;
router.post('/ulogaa', (req, res, next) => {
    const { naziv } = req.body;
    Uloga.create({ naziv })
    .then((result) => {
        
        res.status(201).json({
            success: true
        });
    }).catch((err) => {
        console.log(err);
    });

});

module.exports = router;