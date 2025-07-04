"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.votePoll = exports.updatePoll = exports.unvotePoll = exports.unlockPoll = exports.removeOption = exports.lockPoll = exports.getPollById = exports.getAllPolls = exports.deletePoll = exports.createPoll = exports.addOption = void 0;
var pollsService = _interopRequireWildcard(require("../services/polls.service.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var getAllPolls = exports.getAllPolls = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$query, page, limit, polls;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$query = req.query, page = _req$query.page, limit = _req$query.limit; // Kiểm tra giá trị page và limit
          page = parseInt(page, 10) || 1;
          limit = parseInt(limit, 10) || 10;
          if (!(page <= 0 || limit <= 0)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: "Page and limit must be positive integers"
          }));
        case 6:
          _context.next = 8;
          return pollsService.getAllPolls(page, limit);
        case 8:
          polls = _context.sent;
          res.status(200).json({
            success: true,
            message: "Get all Poll successfully",
            data: polls,
            total: polls.total,
            page: page,
            limit: limit
          });
          _context.next = 21;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          if (!_context.t0.message.includes("Page and limit must be positive integers")) {
            _context.next = 18;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            success: false,
            message: _context.t0.message
          }));
        case 18:
          if (!_context.t0.message.includes("Failed to get polls")) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", res.status(500).json({
            success: false,
            message: _context.t0.message
          }));
        case 20:
          res.status(500).json({
            error: _context.t0.message
          });
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function getAllPolls(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getPollById = exports.getPollById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var pollId, poll;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          pollId = req.params.id;
          _context2.next = 4;
          return pollsService.getPollById(pollId);
        case 4:
          poll = _context2.sent;
          if (poll) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found"
          }));
        case 7:
          res.status(200).json({
            success: true,
            message: "Get Poll successfully",
            data: poll
          });
          _context2.next = 23;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          if (!_context2.t0.message.includes("not found")) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            success: false,
            message: _context2.t0.message
          }));
        case 16:
          if (!_context2.t0.message.includes("Invalid poll ID")) {
            _context2.next = 20;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            success: false,
            message: _context2.t0.message
          }));
        case 20:
          if (!_context2.t0.message.includes("Failed to get polls")) {
            _context2.next = 22;
            break;
          }
          return _context2.abrupt("return", res.status(500).json({
            success: false,
            message: _context2.t0.message
          }));
        case 22:
          res.status(500).json({
            error: _context2.t0.message
          });
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getPollById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createPoll = exports.createPoll = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var pollData, user, newPoll;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          pollData = req.body;
          user = req.user;
          _context3.next = 5;
          return pollsService.createPoll(pollData, user);
        case 5:
          newPoll = _context3.sent;
          res.status(201).json({
            success: true,
            message: "Poll created successfully",
            data: newPoll
          });
          _context3.next = 21;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          if (!_context3.t0.message.includes("already exists")) {
            _context3.next = 15;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            success: false,
            message: _context3.t0.message
          }));
        case 15:
          if (!_context3.t0.message.includes("not found")) {
            _context3.next = 19;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            success: false,
            message: _context3.t0.message
          }));
        case 19:
          if (!_context3.t0.message.includes("Failed to create poll")) {
            _context3.next = 21;
            break;
          }
          return _context3.abrupt("return", res.status(500).json({
            success: false,
            message: _context3.t0.message
          }));
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function createPoll(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updatePoll = exports.updatePoll = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var pollId, pollData, updatedPoll;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          pollId = req.params.id;
          pollData = req.body;
          _context4.next = 5;
          return pollsService.updatePoll(pollId, pollData);
        case 5:
          updatedPoll = _context4.sent;
          if (updatedPoll) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found"
          }));
        case 8:
          res.status(200).json({
            success: true,
            message: "Poll updated successfully",
            data: updatedPoll
          });
          _context4.next = 16;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          if (!_context4.t0.message.includes("not found")) {
            _context4.next = 15;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            success: false,
            message: _context4.t0.message
          }));
        case 15:
          res.status(500).json({
            error: _context4.t0.message
          });
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function updatePoll(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deletePoll = exports.deletePoll = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pollId, deletedPoll;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          pollId = req.params.id;
          _context5.next = 4;
          return pollsService.deletePoll(pollId);
        case 4:
          deletedPoll = _context5.sent;
          if (deletedPoll) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found"
          }));
        case 7:
          res.status(200).json({
            success: true,
            message: "Poll deleted successfully"
          });
          _context5.next = 15;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          if (!_context5.t0.message.includes("not found")) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            success: false,
            message: _context5.t0.message
          }));
        case 14:
          res.status(500).json({
            error: _context5.t0.message
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function deletePoll(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var lockPoll = exports.lockPoll = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var pollId, lockedPoll;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          pollId = req.params.id;
          _context6.next = 4;
          return pollsService.lockPoll(pollId);
        case 4:
          lockedPoll = _context6.sent;
          if (lockedPoll) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found"
          }));
        case 7:
          res.status(200).json({
            success: true,
            message: "Poll locked successfully",
            data: lockedPoll
          });
          _context6.next = 23;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          if (!_context6.t0.message.includes("not found")) {
            _context6.next = 16;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            success: false,
            message: _context6.t0.message
          }));
        case 16:
          if (!_context6.t0.message.includes("is locked")) {
            _context6.next = 20;
            break;
          }
          return _context6.abrupt("return", res.status(403).json({
            success: false,
            message: _context6.t0.message
          }));
        case 20:
          if (!_context6.t0.message.includes("already locked")) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", res.status(500).json({
            success: false,
            message: _context6.t0.message
          }));
        case 22:
          res.status(500).json({
            error: _context6.t0.message
          });
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function lockPoll(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var unlockPoll = exports.unlockPoll = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var pollId, unlockedPoll;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          pollId = req.params.id;
          _context7.next = 4;
          return pollsService.unlockPoll(pollId);
        case 4:
          unlockedPoll = _context7.sent;
          if (unlockedPoll) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found"
          }));
        case 7:
          res.status(200).json({
            success: true,
            message: "Poll unlocked successfully",
            data: unlockedPoll
          });
          _context7.next = 19;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          if (!_context7.t0.message.includes("not found")) {
            _context7.next = 16;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            success: false,
            message: _context7.t0.message
          }));
        case 16:
          if (!_context7.t0.message.includes("is locked")) {
            _context7.next = 18;
            break;
          }
          return _context7.abrupt("return", res.status(403).json({
            success: false,
            message: _context7.t0.message
          }));
        case 18:
          res.status(500).json({
            error: _context7.t0.message
          });
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function unlockPoll(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var addOption = exports.addOption = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var pollId, optionData, updatedPoll;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          pollId = req.params.id;
          optionData = req.body;
          _context8.next = 5;
          return pollsService.addOption(pollId, optionData);
        case 5:
          updatedPoll = _context8.sent;
          if (updatedPoll) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found"
          }));
        case 8:
          res.status(200).json({
            success: true,
            message: "Option added successfully",
            data: updatedPoll
          });
          _context8.next = 16;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          if (!_context8.t0.message.includes("not found")) {
            _context8.next = 15;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            success: false,
            message: _context8.t0.message
          }));
        case 15:
          res.status(500).json({
            error: _context8.t0.message
          });
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }));
  return function addOption(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var removeOption = exports.removeOption = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var pollId, optionId, updatedPoll;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          pollId = req.params.id;
          optionId = req.body.optionId;
          _context9.next = 5;
          return pollsService.removeOption(pollId, optionId);
        case 5:
          updatedPoll = _context9.sent;
          if (updatedPoll) {
            _context9.next = 8;
            break;
          }
          return _context9.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found"
          }));
        case 8:
          res.status(200).json({
            success: true,
            message: "Option removed successfully",
            data: updatedPoll
          });
          _context9.next = 16;
          break;
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](0);
          if (!_context9.t0.message.includes("not found")) {
            _context9.next = 15;
            break;
          }
          return _context9.abrupt("return", res.status(404).json({
            success: false,
            message: _context9.t0.message
          }));
        case 15:
          res.status(500).json({
            error: _context9.t0.message
          });
        case 16:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 11]]);
  }));
  return function removeOption(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var votePoll = exports.votePoll = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var pollId, user, optionId, voteResult;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          pollId = req.params.id;
          user = req.user;
          optionId = req.body.optionId;
          _context10.next = 6;
          return pollsService.votePoll(pollId, optionId, user);
        case 6:
          voteResult = _context10.sent;
          if (voteResult) {
            _context10.next = 9;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found or already voted"
          }));
        case 9:
          res.status(200).json({
            success: true,
            message: "Vote recorded successfully",
            data: voteResult
          });
          _context10.next = 25;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          if (!_context10.t0.message.includes("not found")) {
            _context10.next = 18;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            success: false,
            message: _context10.t0.message
          }));
        case 18:
          if (!_context10.t0.message.includes("already voted")) {
            _context10.next = 22;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            success: false,
            message: _context10.t0.message
          }));
        case 22:
          if (!_context10.t0.message.includes("is locked")) {
            _context10.next = 24;
            break;
          }
          return _context10.abrupt("return", res.status(403).json({
            success: false,
            message: _context10.t0.message
          }));
        case 24:
          res.status(500).json({
            error: _context10.t0.message
          });
        case 25:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function votePoll(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var unvotePoll = exports.unvotePoll = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var pollId, user, optionId, unvoteResult;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          pollId = req.params.id;
          user = req.user;
          optionId = req.body.optionId;
          _context11.next = 6;
          return pollsService.unvotePoll(pollId, optionId, user);
        case 6:
          unvoteResult = _context11.sent;
          if (unvoteResult) {
            _context11.next = 9;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            success: false,
            message: "Poll not found or vote not found"
          }));
        case 9:
          res.status(200).json({
            success: true,
            message: "Vote removed successfully",
            data: unvoteResult
          });
          _context11.next = 25;
          break;
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](0);
          if (!_context11.t0.message.includes("not found")) {
            _context11.next = 18;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            success: false,
            message: _context11.t0.message
          }));
        case 18:
          if (!_context11.t0.message.includes("not voted")) {
            _context11.next = 22;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            success: false,
            message: _context11.t0.message
          }));
        case 22:
          if (!_context11.t0.message.includes("is locked")) {
            _context11.next = 24;
            break;
          }
          return _context11.abrupt("return", res.status(403).json({
            success: false,
            message: _context11.t0.message
          }));
        case 24:
          res.status(500).json({
            error: _context11.t0.message
          });
        case 25:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 12]]);
  }));
  return function unvotePoll(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();