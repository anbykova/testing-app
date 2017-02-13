var express = require('express');

var testsHandlers = require('../handlers/testsHandlers');

var router = express.Router();

router.get('/tests', testsHandlers.getTests);

module.exports = router;
