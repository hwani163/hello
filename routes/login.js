'use strict'
const express = require('express');
const DbConnector = require('./modules/dbConnector.js');
const config = require('./modules/config.js');
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

function loginByThirdparty(profile, done) {
  console.log(profile);

  (async function () {
    let query = "SELECT EMAIL,USER_NM,NICK_NM FROM USER_INFO WHERE EMAIL=?";
    const result = await dbconnector.query(query,[profile.email]);


    if (result.length === 0) {
      // 신규 유저는 회원 가입 이후 로그인 처리
      let insertParams = [profile.email,profile.id,profile.type,profile.name,profile.nick_nm,profile.gender,''];
      await dbconnector.query("INSERT INTO USER_INFO VALUES(?,?,?,?,?,?,?)",insertParams);
          done(null, {
            'email': profile.email,
            'nickname': profile.nick_nm
          });
    } else {
      //기존유저 로그인 처리
      console.log('이미 가입된 유져 입니다.');
      done(null, {
        'email': result[0].EMAIL,
        'nickname': result[0].NICK_NM
      });
    }


    }());


}


module.exports = router;
