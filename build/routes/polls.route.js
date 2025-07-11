"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var pollController = _interopRequireWildcard(require("../controllers/polls.controller.js"));
var _validateMiddleware = require("../middlewares/validate.middleware.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = (0, _express.Router)();
router.get("/", pollController.getAllPolls);
router.get("/:id", _validateMiddleware.ValidateMiddleware.validateId, pollController.getPollById);
router.post("/", _validateMiddleware.ValidateMiddleware.validateAdmin, _validateMiddleware.ValidateMiddleware.validateCreatePoll, pollController.createPoll);
router.put("/:id", _validateMiddleware.ValidateMiddleware.validateAdmin, _validateMiddleware.ValidateMiddleware.validateId, _validateMiddleware.ValidateMiddleware.validateUpdatePoll, pollController.updatePoll);
router["delete"]("/:id", _validateMiddleware.ValidateMiddleware.validateAdmin, _validateMiddleware.ValidateMiddleware.validateId, pollController.deletePoll);
router.put("/:id/lock", _validateMiddleware.ValidateMiddleware.validateAdmin, _validateMiddleware.ValidateMiddleware.validateId, pollController.lockPoll);
router.put("/:id/unlock", _validateMiddleware.ValidateMiddleware.validateAdmin, _validateMiddleware.ValidateMiddleware.validateId, pollController.unlockPoll);
router.post("/:id/add-option", _validateMiddleware.ValidateMiddleware.validateAdmin, _validateMiddleware.ValidateMiddleware.validateId, _validateMiddleware.ValidateMiddleware.validateCreateOption, pollController.addOption);
router["delete"]("/:id/remove-option", _validateMiddleware.ValidateMiddleware.validateAdmin, _validateMiddleware.ValidateMiddleware.validateId, _validateMiddleware.ValidateMiddleware.validateRemoveOption, pollController.removeOption);
var _default = exports["default"] = router;