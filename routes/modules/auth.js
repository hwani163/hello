const logger = require('morgan');
var express = require('express');
const DbConnector = require('./dbConnector.js');
const config = require('./config.js');
const connector = new DbConnector();
var router = express.Router();


function isvalidToken(token){
  if (typeof token == "undefined") {
    return false;
  }else{
    //토큰 유효성 인증
    return true;
  }
}

function login(id,password){
  if (id=="test") {
    return true;
  }else{
    return false;
  }
}



exports.isvalidToken = isvalidToken;
exports.login = login;
