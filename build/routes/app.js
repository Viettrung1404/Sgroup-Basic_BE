"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _usersRoute = _interopRequireDefault(require("./users.route.js"));
var _authRoute = _interopRequireDefault(require("./auth.route.js"));
var _pollsRoute = _interopRequireDefault(require("./polls.route.js"));
var _voteRoute = _interopRequireDefault(require("./vote.route.js"));
var _express = require("express");
var _uploadProvider = _interopRequireDefault(require("../providers/upload.provider.js"));
var _validateMiddleware = require("../middlewares/validate.middleware.js");
var _verifyMiddleware = require("../middlewares/verify.middleware.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express.Router)();
router.use('/users', _usersRoute["default"]);
router.use('/auth', _authRoute["default"]);
router.use('/polls', _verifyMiddleware.VerifyMiddleware.validateToken, _pollsRoute["default"]);
router.use('/vote', _verifyMiddleware.VerifyMiddleware.validateToken, _validateMiddleware.ValidateMiddleware.validateUser, _voteRoute["default"]);
router.post('/uploadfile', _uploadProvider["default"].single('myFile'), function (req, res, next) {
  var file = req.file;
  if (!file) {
    var error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});
router.post('/uploadmultiple', _uploadProvider["default"].array('myFiles', 12), function (req, res, next) {
  var files = req.files;
  if (!files) {
    var error = new Error('Please choose files');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
});
var _default = exports["default"] = router;