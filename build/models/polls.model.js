"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongodb = require("mongodb");
var _dbConfig = require("../config/db.config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PollModel = /*#__PURE__*/function () {
  function PollModel() {
    _classCallCheck(this, PollModel);
  }
  return _createClass(PollModel, [{
    key: "getAllPolls",
    value: function () {
      var _getAllPolls = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, limit) {
        var db, polls, startIndex, endIndex, paginatedPolls, formattedPolls;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(page <= 0 || limit <= 0)) {
                _context.next = 2;
                break;
              }
              throw new Error('Page and limit must be positive integers');
            case 2:
              _context.prev = 2;
              _context.next = 5;
              return (0, _dbConfig.getDB)();
            case 5:
              db = _context.sent;
              _context.next = 8;
              return db.collection('polls').find().toArray();
            case 8:
              polls = _context.sent;
              console.log('Polls from DB:', polls);

              // Phân trang, giới hạn số lượng kết quả trả về
              startIndex = (page - 1) * limit;
              endIndex = startIndex + limit;
              paginatedPolls = polls.slice(startIndex, endIndex); // Định dạng lại dữ liệu để trả về
              formattedPolls = paginatedPolls.map(function (poll) {
                return _objectSpread(_objectSpread({
                  id: poll._id.toString()
                }, poll), {}, {
                  _id: undefined
                });
              }); // Đổi options thành mảng các đối tượng với id và text
              formattedPolls.forEach(function (poll) {
                poll.options = poll.options.map(function (option) {
                  return {
                    id: option.id.toString(),
                    text: option.text
                  };
                });
              });
              formattedPolls.total = formattedPolls.length;
              return _context.abrupt("return", formattedPolls);
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](2);
              console.error('Error fetching polls:', _context.t0);
              throw new Error('Failed to fetch polls');
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 19]]);
      }));
      function getAllPolls(_x, _x2) {
        return _getAllPolls.apply(this, arguments);
      }
      return getAllPolls;
    }()
  }, {
    key: "getPollById",
    value: function () {
      var _getPollById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
        var db, poll, formattedPoll;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context2.sent;
              _context2.next = 6;
              return db.collection('polls').findOne({
                _id: new _mongodb.ObjectId(id)
              });
            case 6:
              poll = _context2.sent;
              if (poll) {
                _context2.next = 9;
                break;
              }
              throw new Error('Poll not found');
            case 9:
              formattedPoll = _objectSpread({
                id: poll._id.toString()
              }, poll);
              delete formattedPoll._id;
              return _context2.abrupt("return", formattedPoll);
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              console.error("Error fetching poll ".concat(id, ":"), _context2.t0);
              throw new Error('Invalid poll ID or poll not found');
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 14]]);
      }));
      function getPollById(_x3) {
        return _getPollById.apply(this, arguments);
      }
      return getPollById;
    }()
  }, {
    key: "createPoll",
    value: function () {
      var _createPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(pollData, user) {
        var options, newPoll, db, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              // Tạo một object mới cho các tùy chọn
              options = pollData.options.map(function (option) {
                return {
                  id: new _mongodb.ObjectId(),
                  text: option,
                  votes: 0,
                  userVote: []
                };
              }); // Tạo một đối tượng mới cho Poll
              newPoll = {
                title: pollData.title,
                description: pollData.description,
                options: options,
                creator: {
                  id: user.id,
                  email: user.email
                },
                isLocked: pollData.isLocked || false,
                createdAt: new Date(),
                expiresAt: pollData.expiresAt ? new Date(pollData.expiresAt) : null,
                totalVotes: 0
              };
              _context3.next = 5;
              return (0, _dbConfig.getDB)();
            case 5:
              db = _context3.sent;
              _context3.next = 8;
              return db.collection('polls').insertOne(newPoll);
            case 8:
              result = _context3.sent;
              if (result.acknowledged) {
                _context3.next = 11;
                break;
              }
              throw new Error('Poll already exists');
            case 11:
              console.log('Poll created successfully:', result);
              return _context3.abrupt("return", _objectSpread({
                id: result.insertedId
              }, newPoll));
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              console.error('Error creating poll:', _context3.t0);
              throw new Error('Failed to create poll');
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 15]]);
      }));
      function createPoll(_x4, _x5) {
        return _createPoll.apply(this, arguments);
      }
      return createPoll;
    }()
  }, {
    key: "updatePoll",
    value: function () {
      var _updatePoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id, updateData) {
        var db, result, updatedPoll;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context4.sent;
              _context4.next = 6;
              return db.collection('polls').updateOne({
                _id: new _mongodb.ObjectId(id)
              }, {
                $set: updateData
              });
            case 6:
              result = _context4.sent;
              if (!(result.matchedCount === 0)) {
                _context4.next = 9;
                break;
              }
              throw new Error('Poll not found');
            case 9:
              _context4.next = 11;
              return db.collection('polls').findOne({
                _id: new _mongodb.ObjectId(id)
              });
            case 11:
              updatedPoll = _context4.sent;
              return _context4.abrupt("return", updatedPoll);
            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              console.error("Error updating poll ".concat(id, ":"), _context4.t0);
              throw new Error(_context4.t0.message || 'Failed to update poll');
            case 19:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 15]]);
      }));
      function updatePoll(_x6, _x7) {
        return _updatePoll.apply(this, arguments);
      }
      return updatePoll;
    }()
  }, {
    key: "deletePoll",
    value: function () {
      var _deletePoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
        var db, result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context5.sent;
              _context5.next = 6;
              return db.collection('polls').deleteOne({
                _id: new _mongodb.ObjectId(id)
              });
            case 6:
              result = _context5.sent;
              if (!(result.deletedCount === 0)) {
                _context5.next = 9;
                break;
              }
              throw new Error('Poll not found');
            case 9:
              return _context5.abrupt("return", {
                message: 'Poll deleted successfully'
              });
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              console.error("Error deleting poll ".concat(id, ":"), _context5.t0);
              throw new Error(_context5.t0.message || 'Failed to delete poll');
            case 16:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 12]]);
      }));
      function deletePoll(_x8) {
        return _deletePoll.apply(this, arguments);
      }
      return deletePoll;
    }()
  }, {
    key: "lockPoll",
    value: function () {
      var _lockPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id) {
        var db, result, updatedPoll;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context6.sent;
              _context6.next = 6;
              return db.collection('polls').updateOne({
                _id: new _mongodb.ObjectId(id)
              }, {
                $set: {
                  isLocked: true
                }
              });
            case 6:
              result = _context6.sent;
              if (!(result.matchedCount === 0)) {
                _context6.next = 9;
                break;
              }
              throw new Error('Poll not found or already locked');
            case 9:
              _context6.next = 11;
              return db.collection('polls').findOne({
                _id: new _mongodb.ObjectId(id)
              });
            case 11:
              updatedPoll = _context6.sent;
              return _context6.abrupt("return", updatedPoll);
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](0);
              console.error("Error locking poll ".concat(id, ":"), _context6.t0);
              throw new Error(_context6.t0.message || 'Failed to lock poll');
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 15]]);
      }));
      function lockPoll(_x9) {
        return _lockPoll.apply(this, arguments);
      }
      return lockPoll;
    }()
  }, {
    key: "unlockPoll",
    value: function () {
      var _unlockPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id) {
        var db, result;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context7.sent;
              _context7.next = 6;
              return db.collection('polls').updateOne({
                _id: new _mongodb.ObjectId(id)
              }, {
                $set: {
                  isLocked: false
                }
              });
            case 6:
              result = _context7.sent;
              if (!(result.matchedCount === 0)) {
                _context7.next = 9;
                break;
              }
              throw new Error('Poll not found or already unlocked');
            case 9:
              return _context7.abrupt("return", {
                message: 'Poll unlocked successfully'
              });
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              console.error("Error unlocking poll ".concat(id, ":"), _context7.t0);
              throw new Error(_context7.t0.message || 'Failed to unlock poll');
            case 16:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 12]]);
      }));
      function unlockPoll(_x10) {
        return _unlockPoll.apply(this, arguments);
      }
      return unlockPoll;
    }()
  }, {
    key: "addOption",
    value: function () {
      var _addOption = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(pollId, optionText) {
        var db, option, result;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context8.sent;
              option = {
                id: new _mongodb.ObjectId(),
                text: optionText,
                votes: 0,
                userVote: []
              };
              _context8.next = 7;
              return db.collection('polls').updateOne({
                _id: new _mongodb.ObjectId(pollId)
              }, {
                $push: {
                  options: option
                }
              });
            case 7:
              result = _context8.sent;
              if (!(result.matchedCount === 0)) {
                _context8.next = 10;
                break;
              }
              throw new Error('Poll not found');
            case 10:
              return _context8.abrupt("return", _objectSpread({
                id: option.id.toString()
              }, option));
            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](0);
              console.error("Error adding option to poll ".concat(pollId, ":"), _context8.t0);
              throw new Error('Failed to add option to poll');
            case 17:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 13]]);
      }));
      function addOption(_x11, _x12) {
        return _addOption.apply(this, arguments);
      }
      return addOption;
    }()
  }, {
    key: "removeOption",
    value: function () {
      var _removeOption = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(pollId, optionId) {
        var db, result;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context9.sent;
              _context9.next = 6;
              return db.collection('polls').updateOne({
                _id: new _mongodb.ObjectId(pollId)
              }, {
                $pull: {
                  options: {
                    id: new _mongodb.ObjectId(optionId)
                  }
                }
              });
            case 6:
              result = _context9.sent;
              if (!(result.matchedCount === 0)) {
                _context9.next = 9;
                break;
              }
              throw new Error('Poll not found');
            case 9:
              return _context9.abrupt("return", {
                message: 'Option removed successfully'
              });
            case 12:
              _context9.prev = 12;
              _context9.t0 = _context9["catch"](0);
              console.error("Error removing option from poll ".concat(pollId, ":"), _context9.t0);
              throw new Error('Failed to remove option from poll');
            case 16:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 12]]);
      }));
      function removeOption(_x13, _x14) {
        return _removeOption.apply(this, arguments);
      }
      return removeOption;
    }()
  }, {
    key: "votePoll",
    value: function () {
      var _votePoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(pollId, optionId, user) {
        var db, poll, option, updatedPoll;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context10.sent;
              _context10.next = 6;
              return db.collection('polls').findOne({
                _id: new _mongodb.ObjectId(pollId)
              });
            case 6:
              poll = _context10.sent;
              if (poll) {
                _context10.next = 9;
                break;
              }
              throw new Error('Poll not found');
            case 9:
              option = poll.options.find(function (opt) {
                return opt.id.toString() === optionId;
              });
              if (option) {
                _context10.next = 12;
                break;
              }
              throw new Error('Option not found');
            case 12:
              if (!poll.isLocked) {
                _context10.next = 14;
                break;
              }
              throw new Error('Poll is locked, cannot vote');
            case 14:
              if (!option.userVote.some(function (voted) {
                return voted.id === user.id;
              })) {
                _context10.next = 16;
                break;
              }
              throw new Error('User has already voted for this option');
            case 16:
              _context10.next = 18;
              return db.collection('polls').updateOne({
                _id: new _mongodb.ObjectId(pollId),
                'options.id': new _mongodb.ObjectId(optionId)
              }, {
                $inc: {
                  'options.$.votes': 1,
                  totalVotes: 1
                },
                $push: {
                  'options.$.userVote': {
                    id: user.id,
                    email: user.email
                  }
                }
              });
            case 18:
              _context10.next = 20;
              return this.getPollById(pollId);
            case 20:
              updatedPoll = _context10.sent;
              return _context10.abrupt("return", updatedPoll);
            case 24:
              _context10.prev = 24;
              _context10.t0 = _context10["catch"](0);
              console.error("Error voting on poll ".concat(pollId, ":"), _context10.t0);
              throw new Error(_context10.t0.message || 'Failed to vote on poll');
            case 28:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[0, 24]]);
      }));
      function votePoll(_x15, _x16, _x17) {
        return _votePoll.apply(this, arguments);
      }
      return votePoll;
    }()
  }, {
    key: "unvotePoll",
    value: function () {
      var _unvotePoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(pollId, optionId, user) {
        var db, poll, option, userVoteIndex, updatedPoll;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _context11.next = 3;
              return (0, _dbConfig.getDB)();
            case 3:
              db = _context11.sent;
              _context11.next = 6;
              return db.collection('polls').findOne({
                _id: new _mongodb.ObjectId(pollId)
              });
            case 6:
              poll = _context11.sent;
              if (poll) {
                _context11.next = 9;
                break;
              }
              throw new Error('Poll not found');
            case 9:
              option = poll.options.find(function (opt) {
                return opt.id.toString() === optionId;
              });
              if (option) {
                _context11.next = 12;
                break;
              }
              throw new Error('Option not found');
            case 12:
              if (!poll.isLocked) {
                _context11.next = 14;
                break;
              }
              throw new Error('Poll is locked, cannot unvote');
            case 14:
              // Kiểm tra nếu người dùng đã bỏ phiếu cho tùy chọn này
              userVoteIndex = option.userVote.findIndex(function (voted) {
                return voted.id === user.id;
              });
              if (!(userVoteIndex === -1)) {
                _context11.next = 17;
                break;
              }
              throw new Error('User has not voted for this option');
            case 17:
              _context11.next = 19;
              return db.collection('polls').updateOne({
                _id: new _mongodb.ObjectId(pollId),
                'options.id': new _mongodb.ObjectId(optionId)
              }, {
                $inc: {
                  'options.$.votes': -1,
                  totalVotes: -1
                },
                $pull: {
                  'options.$.userVote': {
                    id: user.id,
                    email: user.email
                  }
                }
              });
            case 19:
              _context11.next = 21;
              return this.getPollById(pollId);
            case 21:
              updatedPoll = _context11.sent;
              return _context11.abrupt("return", updatedPoll);
            case 25:
              _context11.prev = 25;
              _context11.t0 = _context11["catch"](0);
              console.error("Error unvoting on poll ".concat(pollId, ":"), _context11.t0);
              throw new Error(_context11.t0.message || 'Failed to unvote on poll');
            case 29:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[0, 25]]);
      }));
      function unvotePoll(_x18, _x19, _x20) {
        return _unvotePoll.apply(this, arguments);
      }
      return unvotePoll;
    }()
  }]);
}();
var _default = exports["default"] = new PollModel();