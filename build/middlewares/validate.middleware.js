"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidateMiddleware = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ValidateMiddleware = exports.ValidateMiddleware = /*#__PURE__*/_createClass(function ValidateMiddleware() {
  _classCallCheck(this, ValidateMiddleware);
});
// Middleware để xác thực ID
_defineProperty(ValidateMiddleware, "validateId", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          schema = _joi["default"].object({
            id: _joi["default"].string().hex().length(24).required().messages({
              "string.int": "ID phải là số nguyên hợp lệ",
              "string.length": "ID phải có đúng 24 ký tự",
              "any.required": "ID là bắt buộc"
            })
          });
          _context.next = 4;
          return schema.validateAsync(req.params);
        case 4:
          next();
          _context.next = 11;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          errors = _context.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
// Middleware để xác thực dữ liệu khi đăng ký người dùng
_defineProperty(ValidateMiddleware, "validateEmail", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          schema = _joi["default"].object({
            email: _joi["default"].string().email().required().messages({
              "string.email": "Email không hợp lệ",
              "any.required": "Email là bắt buộc"
            })
          });
          _context2.next = 4;
          return schema.validateAsync(req.body);
        case 4:
          next();
          _context2.next = 11;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          errors = _context2.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context2.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
// Middleware để xác thực dữ liệu khi reset mật khẩu
_defineProperty(ValidateMiddleware, "validateResetPassword", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          schema = _joi["default"].object({
            email: _joi["default"].string().email().required().messages({
              "string.email": "Email không hợp lệ",
              "any.required": "Email là bắt buộc"
            }),
            password: _joi["default"].string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required().messages({
              "string.min": "Mật khẩu phải có ít nhất 8 ký tự",
              "string.pattern.base": "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số",
              "any.required": "Mật khẩu là bắt buộc"
            }),
            token: _joi["default"].string().required().messages({
              "any.required": "Token là bắt buộc"
            })
          });
          _context3.next = 4;
          return schema.validateAsync(req.body);
        case 4:
          next();
          _context3.next = 11;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          errors = _context3.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context3.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
// Middleware để xác thực người dùng có quyền admin
_defineProperty(ValidateMiddleware, "validateAdmin", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          if (!(!req.user || !req.user.role || req.user.role !== "admin")) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(403).json({
            success: false,
            message: "You do not have permission to perform this action"
          }));
        case 3:
          next();
          _context4.next = 9;
          break;
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            success: false,
            message: "Error validating admin role",
            error: _context4.t0.message
          }));
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
_defineProperty(ValidateMiddleware, "validateUser", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          if (!(!req.user || !req.user.role || req.user.role !== "user")) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", res.status(403).json({
            success: false,
            message: "You do not have permission to perform this action"
          }));
        case 3:
          next();
          _context5.next = 9;
          break;
        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            success: false,
            message: "Error validating user role",
            error: _context5.t0.message
          }));
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 6]]);
  }));
  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}());
// Validate dữ liệu khi tạo user mới
_defineProperty(ValidateMiddleware, "validateCreateUser", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          schema = _joi["default"].object({
            password: _joi["default"].string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required().messages({
              "string.min": "Mật khẩu phải có ít nhất 8 ký tự",
              "string.pattern.base": "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường và 1 số",
              "any.required": "Mật khẩu là bắt buộc"
            }),
            email: _joi["default"].string().email().required().messages({
              "string.email": "Email không hợp lệ",
              "any.required": "Email là bắt buộc"
            })
          });
          _context6.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context6.next = 11;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          errors = _context6.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context6.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}());
// Validate dữ liệu khi cập nhật user
_defineProperty(ValidateMiddleware, "validateUpdateUser", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          schema = _joi["default"].object({
            name: _joi["default"].string().min(3).max(30).pattern(/^[a-zA-Z\s]+$/),
            password: _joi["default"].string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
            email: _joi["default"].string().email()
          }).min(1);
          _context7.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context7.next = 11;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          errors = _context7.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context7.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function (_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}());
// Validate cho api polls
_defineProperty(ValidateMiddleware, "validateCreatePoll", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          schema = _joi["default"].object({
            title: _joi["default"].string().min(3).max(100).required().messages({
              "string.min": "Tiêu đề phải có ít nhất 3 ký tự",
              "string.max": "Tiêu đề không quá 100 ký tự",
              "any.required": "Tiêu đề là bắt buộc"
            }),
            description: _joi["default"].string().max(500).optional(),
            options: _joi["default"].array().items(_joi["default"].string().required().messages({
              "any.required": "Nội dung lựa chọn là bắt buộc"
            })).min(2).required().messages({
              "array.min": "Cần ít nhất 2 lựa chọn",
              "any.required": "Lựa chọn là bắt buộc"
            }),
            expiresAt: _joi["default"].date().optional(),
            isLocked: _joi["default"]["boolean"]().optional().messages({
              "boolean.base": "Trạng thái khóa phải là true hoặc false"
            })
          });
          _context8.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context8.next = 11;
          break;
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          errors = _context8.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context8.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function (_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}());
_defineProperty(ValidateMiddleware, "validateUpdatePoll", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          schema = _joi["default"].object({
            title: _joi["default"].string().min(3).max(100).optional().messages({
              "string.min": "Tiêu đề phải có ít nhất 3 ký tự",
              "string.max": "Tiêu đề không quá 100 ký tự"
            }),
            description: _joi["default"].string().max(500).optional(),
            options: _joi["default"].array().items(_joi["default"].string().required().messages({
              "any.required": "Nội dung lựa chọn là bắt buộc"
            })).min(2).optional().messages({
              "array.min": "Cần ít nhất 2 lựa chọn"
            }),
            expiresAt: _joi["default"].date().optional()
          });
          _context9.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context9.next = 11;
          break;
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          errors = _context9.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context9.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function (_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}());
_defineProperty(ValidateMiddleware, "validateVotePoll", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          schema = _joi["default"].object({
            optionId: _joi["default"].string().hex().length(24).required().messages({
              "string.hex": "ID lựa chọn phải là chuỗi hex hợp lệ",
              "string.length": "ID lựa chọn phải có đúng 24 ký tự",
              "any.required": "ID lựa chọn là bắt buộc"
            })
          });
          _context10.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context10.next = 11;
          break;
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          errors = _context10.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context10.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function (_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}());
_defineProperty(ValidateMiddleware, "validateCreateOption", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          schema = _joi["default"].object({
            text: _joi["default"].string().required().messages({
              "any.required": "Nội dung lựa chọn là bắt buộc"
            })
          });
          _context11.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context11.next = 11;
          break;
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          errors = _context11.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context11.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function (_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}());
_defineProperty(ValidateMiddleware, "validateUpdateOption", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          schema = _joi["default"].object({
            text: _joi["default"].string().required().messages({
              "any.required": "Nội dung lựa chọn là bắt buộc"
            })
          });
          _context12.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context12.next = 11;
          break;
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          errors = _context12.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context12.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function (_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}());
_defineProperty(ValidateMiddleware, "validateRemoveOption", /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          schema = _joi["default"].object({
            optionId: _joi["default"].string().hex().length(24).required().messages({
              "string.hex": "ID lựa chọn phải là chuỗi hex hợp lệ",
              "string.length": "ID lựa chọn phải có đúng 24 ký tự",
              "any.required": "ID lựa chọn là bắt buộc"
            })
          });
          _context13.next = 4;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 4:
          next();
          _context13.next = 11;
          break;
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          errors = _context13.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context13.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 11:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function (_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}());
_defineProperty(ValidateMiddleware, "validateVote", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res, next) {
    var schema, errors;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          if (!(!req.body || !req.body.optionId)) {
            _context14.next = 3;
            break;
          }
          return _context14.abrupt("return", res.status(400).json({
            errors: [{
              field: "optionId",
              message: "Field optionId need to be provided in the request body"
            }]
          }));
        case 3:
          schema = _joi["default"].object({
            optionId: _joi["default"].string().hex().length(24).required().messages({
              "string.hex": "ID lựa chọn phải là chuỗi hex hợp lệ",
              "string.length": "ID lựa chọn phải có đúng 24 ký tự",
              "any.required": "ID lựa chọn là bắt buộc"
            })
          });
          _context14.next = 6;
          return schema.validateAsync(req.body, {
            abortEarly: false
          });
        case 6:
          next();
          _context14.next = 13;
          break;
        case 9:
          _context14.prev = 9;
          _context14.t0 = _context14["catch"](0);
          errors = _context14.t0.details.map(function (err) {
            return {
              field: err.context.key,
              message: err.message
            };
          });
          return _context14.abrupt("return", res.status(400).json({
            errors: errors
          }));
        case 13:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 9]]);
  }));
  return function (_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}());