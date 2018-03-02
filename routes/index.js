'use strict'
const express = require('express');
const DbConnector = require('./modules/dbConnector.js');
const config = require('./modules/config.js');
const connector = new DbConnector();
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render("main.ejs");
});




module.exports = router;
