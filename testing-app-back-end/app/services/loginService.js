var vow  = require('vow'),
    guid = require('guid');

var db = require('../controls/database.js');

var DB_ERRORS = require('../constants').DB_ERRORS;

var crypto = require('crypto');
var googleapis = require('googleapis');
var express = require('express');

function generateStateToken() {
    return crypto.randomBytes(16).toString('hex');
}

// Generates a OAuth2 client based on the current configuration.
// This client is ready to be loaded with credentials and used.
function getClient(config) {
    return new googleapis.auth.OAuth2(
        config.clientId,
        config.clientSecret,
        config.redirectUrl
    );
}

function getUserProfile(client, cb) {
    var plus = googleapis.plus('v1');
    plus.people.get({
      userId: 'me',
      auth: client
    }, cb);
}

var service = {
      getUserProfile: getUserProfile,
      getClient: getClient,
      generateStateToken: generateStateToken
};

module.exports = service;
