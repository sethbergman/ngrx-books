'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.exampleGET = function exampleGET (req, res, next) {
  Default.exampleGET(req.swagger.params, res, next);
};

module.exports.pingGET = function pingGET (req, res, next) {
  Default.pingGET(req.swagger.params, res, next);
};
