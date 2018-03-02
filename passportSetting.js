const DbConnector = require('./modules/dbConnector.js');
const NaverStrategy = require('passport-naver').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('./modules/config.js');



passport.serializeUser(function (user, done) {
  console.log('serializedUser');
  // console.log(user);
  done(null, user)
});
passport.deserializeUser(function (user, done) {
  console.log('deserializedUser');
  // console.log(user);
  done(null, user);
});


passport.use(new NaverStrategy({
    clientID: config.thirdApp.naver.client_id,
    clientSecret: config.thirdApp.naver.secret_id,
    callbackURL: config.thirdApp.naver.callback_url
  },
  function (accessToken, refreshToken, profile, done) {

    var _profile = profile._json;
    console.log('$$$$$$$$$$$$$$$$$$$$$$$');
    console.log(_profile);
    loginByThirdparty({
      'type': 'naver',
      'id': _profile.id,
      'name':null,
      'nick_nm': _profile.nickname,
      'email': _profile.email,
      'gender':null
    }, done);
  }
));
//
passport.use(new KakaoStrategy({
    clientID: config.thirdApp.kakao.client_id,
    callbackURL: config.thirdApp.kakao.callback_url
  },
  function (accessToken, refreshToken, profile, done) {
    var _profile = profile._json;
    console.log('$$$$$$$$$$$$$$$$$$$$$$$');
    console.log(_profile);
    loginByThirdparty({
      'type': 'kakao',
      'id': _profile.id,
      'nick_nm': _profile.properties.nickname,
      'email': _profile.kaccount_email,
      'gender':null
    }, done);
  }
));


// accessToken - 앱 사용자의 액세스 토큰이 포함되어 있습니다.
// expiresIn - 토큰이 만료되어 갱신해야 하는 UNIX 시간을 표시합니다.
// signedRequest - 앱 사용자에 대한 정보를 포함하는 서명된 매개변수입니다.
// userID - 앱 사용자의 ID입니다

passport.use(new FacebookStrategy({
    clientID: config.thirdApp.facebook.client_id,
    clientSecret: config.thirdApp.facebook.secret_id,
    callbackURL: config.thirdApp.facebook.callback_url,
    profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone',
      'updated_time', 'verified', 'displayName']
  }, function (accessToken, refreshToken, profile, done) {
    var _profile = profile._json;
    console.log('$$$$$$$$$$$$$$$$$$$$$$$');
    console.log(_profile);
    loginByThirdparty({
      'type': 'facebook',
      'id': _profile.id,
      'name': _profile.name,
      'nick_nm': null,
      'email': _profile.id,
      'gender' :null,
    }, done);
  }
));

passport.use(new GoogleStrategy({
      clientID: config.thirdApp.google.client_id,
      clientSecret: config.thirdApp.google.secret_id,
      callbackURL: config.thirdApp.google.callback_url
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        console.log('$$$$$$$$$$$$$$$$$$$$$$$');
        console.log(profile._json)
        var _profile = profile._json;
        loginByThirdparty({
          'type': 'google',
          'id': _profile.id,
          'name': _profile.displayName,
          'nick_nm': _profile.displayName,
          'email': _profile.emails[0].value,
          'gender' : _profile.gender,
        }, done);
      });
    }
));
