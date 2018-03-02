'use strict'
const express = require('express');
const DbConnector = require('../customModules/dbConnector.js');
const connector = new DbConnector();
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render("main.ejs");
});




module.exports = router;
