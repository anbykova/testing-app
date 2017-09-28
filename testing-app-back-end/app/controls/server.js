var express          = require('express'),
    expressValidator = require('express-validator'),
    bodyParser       = require('body-parser'),
    methodOverride   = require('method-override');

var path = require('path');
var session = require('cookie-session');
var cors = require('cors');

var config          = require('../config'),
    loginRouter     = require('../routers/loginRouter'),
    errorHandlers   = require('../handlers/errorHandlers'),
    testsRouter     = require('../routers/testsRouter'),
    groupsRouter     = require('../routers/groupsRouter'),
    log             = require('../logger');

var setHeader = require('../middleware/setHeader').setHeader;

var app         = express(),
    PORT        = config.get('PORT'),
    PATH_IMAGES = config.get('PATH_IMAGES'),
    URL         = config.get('URL');

function start(){
    app.use(methodOverride());  //create a new middleware function to override the req.method property with a new value.
    app.use(bodyParser.json()); //parse application/json
    app.use(expressValidator());//this line must be immediately after bodyParser

    app.listen(PORT, function () {
        log.info('Express server listening on port ' + PORT);
    });

    app.use(cors());
    //register routes
    app.use(loginRouter);
    app.use(testsRouter);
    app.use(groupsRouter);

    //register error
    app.use (errorHandlers.internalServerErrorHandler);
    app.use (errorHandlers.notFoundHandler);
}

var server = {
    start : start
};

module.exports = server;
