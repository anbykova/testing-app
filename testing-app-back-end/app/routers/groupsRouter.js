var express = require('express');

var groupsHandlers = require('../handlers/groupsHandlers');

var router = express.Router();

router.get('/groups', groupsHandlers.getGroups);

module.exports = router;
