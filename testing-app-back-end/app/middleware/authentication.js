var jwt     = require('jsonwebtoken');
var config  = require('../config');
var ERRORS  = require('../constants').ERRORS;

function checkToken(req, res, next) {
    //TO DO: make check
    if (!req.token) {
       return res.sendStatus(401);
    } else {
       next();
    }
}

var auth = {
    checkToken : checkToken
};

module.exports = auth;
