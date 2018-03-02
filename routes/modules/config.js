module.exports = {
  'secret' :  '씨발',
  'db_info': {
    // local: { // localhost
    // ...
    // },
    // real: { // real
    // ...
    // },
    // dev: { // dev
    // ...
    // }
  },
  'thirdApp' : {
    'naver' : {
      'client_id' : 'fcBMtFY7dfOVM8uD9Ced',
      'secret_id' : 'PbVfcLTSjh',
      'callback_url' : '/login/naver/callback'
    },
    'facebook' : {
      'client_id' : '1810324712365733',
      'secret_id' : '8e9a84366b4b481fa949eda57653bd41',
      'callback_url' : '/login/facebook/callback'
    },
    'kakao' : {
      'client_id' : '6a12b6da75cc56029f9e93ea7c8ecff2',
      'callback_url' : '/login/kakao/callback'
    },
    'google' : {
      'client_id' : '1098350443428-5mo25hiedi5jbpjqutagmpbfisvdlgrj.apps.googleusercontent.com',
      'secret_id' : 'pVkTKRWj7ru3O8xzB6KxFUbY',
      'callback_url' : '/login/google/callback'
    }
  }
};
