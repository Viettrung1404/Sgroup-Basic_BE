"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var router = (0, _express.Router)();
router.use(function (err, req, res, next) {
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  var errorResponse = {
    status: err.statusCode,
    message: err.message || 'Internal server error',
    stack: err.stack
  };
  res.status(err.statusCode).json(errorResponse);
});
var _default = exports["default"] = router;