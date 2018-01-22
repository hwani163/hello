'user strict'
var express = require('express');
const DbConnector = require('./modules/dbConnector.js');
const config = require('./modules/config.js');
const auth = require('./modules/auth.js');
const connector = new DbConnector();
var router = express.Router();


router.get('/', function(req, res, next) {
  let islogined = auth.isvalidToken(req.body.token);


  //토큰값이 있을 경우.
  if (islogined) {
    res.render("index.ejs");
  }else{
    //없을경우 로그인 페이지로
    res.render("login.ejs");
  }

});


module.exports = router;
