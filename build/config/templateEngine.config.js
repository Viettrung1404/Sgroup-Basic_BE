"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _dirname = _path["default"].dirname((0, _url.fileURLToPath)(import.meta.url));
var templateEngineConfig = function templateEngineConfig(app) {
  app.set('views engine', 'ejs');
  app.set('views', _path["default"].join(_dirname, '../views'));
};
var _default = exports["default"] = templateEngineConfig;