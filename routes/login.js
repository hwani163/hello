'use strict'
const express = require('express');
const DbConnector = require('../customModules/dbConnector.js');
const dbconnector = new DbConnector();
const router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
    res.render("login.ejs");
});
router.post('/', function(req, res, next) {
    res.render("login.ejs");
});


//  네이버
router.get('/naver',
  passport.authenticate('naver')
);
// naver 로그인 연동 콜백
router.get('/naver/callback',
  passport.authenticate('naver', {
    successRedirect: '/main',
    failureRedirect: '/login'
  })
);

// // kakao 로그인
router.get('/kakao',
  passport.authenticate('kakao')
);
// kakao 로그인 연동 콜백
router.get('/kakao/callback',
  passport.authenticate('kakao', {
    successRedirect: '/main',
    failureRedirect: '/login'
  })
);


router.get('/google',
  passport.authenticate('google',{ scope: ['openid', 'email'] })
);
// google 로그인 연동 콜백
router.get('/google/callback',
  passport.authenticate('google',{
    successRedirect: '/main',
    failureRedirect: '/login'
  })
);

// facebook 로그인
router.get('/facebook',
  passport.authenticate('facebook')
);
// facebook 로그인 연동 콜백
router.get('/login/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);




module.exports = router;
