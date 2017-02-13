var express = require('express');

var loginHandlers = require('../handlers/loginHandlers');

var ROLES = require('../constants').ROLES;

var router = express.Router();

router.post('/auth/google', loginHandlers.callback);

module.exports = router;
