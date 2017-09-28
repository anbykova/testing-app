var loginService = require('../services/loginService'),
    log          = require('../logger');
var ERRORS  = require('../constants').ERRORS;

var config  = require('../config');
var OAUTH2  = config.get('OAUTH2');
var request = require('request');

function login(req, res, next) {
    var stateToken = loginService.generateStateToken();
    var authorizeUrl = loginService.getClient(OAUTH2).generateAuthUrl({
      access_type: 'offline',
      scope: OAUTH2.scopes || ['email', 'profile'],
      state: stateToken
    });
    res.redirect(authorizeUrl);
}

function callback(req, res, next) {
    console.log('callback');
    var params = {
        code: req.body.code,
        client_id: req.body.clientId,
        client_secret: OAUTH2.clientSecret,
        redirect_uri: req.body.redirectUri,
        grant_type: 'authorization_code'
    };

    // Exchange authorization code for access token.
    request.post(OAUTH2.accessTokenUrl, {json: true, form: params}, function (err, response, token) {
        var accessToken = token.access_token;
        var headers = {Authorization: 'Bearer ' + accessToken};

        request.get({url: OAUTH2.peopleApiUrl, headers: headers, json: true}, function (err, response, profile) {
            if (profile.error) {
                return res.status(500).send({message: profile.error.message});
            }

            var user = {};
            user.id = profile.sub;
            user.email = profile.email;
            user.avatarUrl = profile.picture.replace('sz=50', 'sz=200');
            user.fullName = profile.given_name + ' ' + profile.family_name;
            user.displayName = profile.name;
            console.log(user);

            //var token = createJWT(user);
            res.send({
                data: {
                    token: req.body.code,
                    user: user,
                    profile: profile
                }
            });
        });
    });
  }


var handler = {
    login : login,
    callback: callback
};

module.exports = handler;
