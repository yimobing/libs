function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e22) { throw _e22; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e23) { didErr = true; err = _e23; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import e from "stream";
import t from "events";
import r from "buffer";
import n from "util";
var a,
  i,
  s,
  o,
  l,
  u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
  c = {
    exports: {}
  },
  h = {},
  d = {},
  f = {},
  p = {
    exports: {}
  },
  m = {
    exports: {}
  };
function g() {
  if (a) return m.exports;
  return a = 1, "undefined" == typeof process || !process.version || 0 === process.version.indexOf("v0.") || 0 === process.version.indexOf("v1.") && 0 !== process.version.indexOf("v1.8.") ? m.exports = {
    nextTick: function nextTick(e, t, r, n) {
      if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
      var a,
        i,
        s = arguments.length;
      switch (s) {
        case 0:
        case 1:
          return process.nextTick(e);
        case 2:
          return process.nextTick(function () {
            e.call(null, t);
          });
        case 3:
          return process.nextTick(function () {
            e.call(null, t, r);
          });
        case 4:
          return process.nextTick(function () {
            e.call(null, t, r, n);
          });
        default:
          for (a = new Array(s - 1), i = 0; i < a.length;) a[i++] = arguments[i];
          return process.nextTick(function () {
            e.apply(null, a);
          });
      }
    }
  } : m.exports = process, m.exports;
}
function b() {
  return l ? o : (l = 1, o = e);
}
var y,
  v = {
    exports: {}
  };
function _() {
  return y || (y = 1, function (e, t) {
    var n = r,
      a = n.Buffer;
    function i(e, t) {
      for (var r in e) t[r] = e[r];
    }
    function s(e, t, r) {
      return a(e, t, r);
    }
    a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = n : (i(n, t), t.Buffer = s), i(a, s), s.from = function (e, t, r) {
      if ("number" == typeof e) throw new TypeError("Argument must not be a number");
      return a(e, t, r);
    }, s.alloc = function (e, t, r) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      var n = a(e);
      return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
    }, s.allocUnsafe = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return a(e);
    }, s.allocUnsafeSlow = function (e) {
      if ("number" != typeof e) throw new TypeError("Argument must be a number");
      return n.SlowBuffer(e);
    };
  }(v, v.exports)), v.exports;
}
var w,
  k = {};
function S() {
  if (w) return k;
  function e(e) {
    return Object.prototype.toString.call(e);
  }
  return w = 1, k.isArray = function (t) {
    return Array.isArray ? Array.isArray(t) : "[object Array]" === e(t);
  }, k.isBoolean = function (e) {
    return "boolean" == typeof e;
  }, k.isNull = function (e) {
    return null === e;
  }, k.isNullOrUndefined = function (e) {
    return null == e;
  }, k.isNumber = function (e) {
    return "number" == typeof e;
  }, k.isString = function (e) {
    return "string" == typeof e;
  }, k.isSymbol = function (e) {
    return "symbol" == _typeof(e);
  }, k.isUndefined = function (e) {
    return void 0 === e;
  }, k.isRegExp = function (t) {
    return "[object RegExp]" === e(t);
  }, k.isObject = function (e) {
    return "object" == _typeof(e) && null !== e;
  }, k.isDate = function (t) {
    return "[object Date]" === e(t);
  }, k.isError = function (t) {
    return "[object Error]" === e(t) || t instanceof Error;
  }, k.isFunction = function (e) {
    return "function" == typeof e;
  }, k.isPrimitive = function (e) {
    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == _typeof(e) || void 0 === e;
  }, k.isBuffer = r.Buffer.isBuffer, k;
}
var x,
  A,
  C = {
    exports: {}
  },
  P = {
    exports: {}
  };
function T() {
  if (A) return C.exports;
  A = 1;
  try {
    var e = require("util");
    if ("function" != typeof e.inherits) throw "";
    C.exports = e.inherits;
  } catch (e) {
    C.exports = (x || (x = 1, "function" == typeof Object.create ? P.exports = function (e, t) {
      t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }));
    } : P.exports = function (e, t) {
      if (t) {
        e.super_ = t;
        var r = function r() {};
        r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
      }
    }), P.exports);
  }
  return C.exports;
}
var E,
  D,
  N,
  B,
  R,
  O,
  M,
  I,
  z,
  F = {
    exports: {}
  };
function j() {
  return E || (E = 1, function (e) {
    var t = _().Buffer,
      r = n;
    e.exports = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.head = null, this.tail = null, this.length = 0;
      }
      return e.prototype.push = function (e) {
        var t = {
          data: e,
          next: null
        };
        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
      }, e.prototype.unshift = function (e) {
        var t = {
          data: e,
          next: this.head
        };
        0 === this.length && (this.tail = t), this.head = t, ++this.length;
      }, e.prototype.shift = function () {
        if (0 !== this.length) {
          var e = this.head.data;
          return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
        }
      }, e.prototype.clear = function () {
        this.head = this.tail = null, this.length = 0;
      }, e.prototype.join = function (e) {
        if (0 === this.length) return "";
        for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
        return r;
      }, e.prototype.concat = function (e) {
        if (0 === this.length) return t.alloc(0);
        for (var r, n, a, i = t.allocUnsafe(e >>> 0), s = this.head, o = 0; s;) r = s.data, n = i, a = o, r.copy(n, a), o += s.data.length, s = s.next;
        return i;
      }, e;
    }(), r && r.inspect && r.inspect.custom && (e.exports.prototype[r.inspect.custom] = function () {
      var e = r.inspect({
        length: this.length
      });
      return this.constructor.name + " " + e;
    });
  }(F)), F.exports;
}
function L() {
  if (N) return D;
  N = 1;
  var e = g();
  function t(e, t) {
    e.emit("error", t);
  }
  return D = {
    destroy: function destroy(r, n) {
      var a = this,
        i = this._readableState && this._readableState.destroyed,
        s = this._writableState && this._writableState.destroyed;
      return i || s ? (n ? n(r) : r && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, e.nextTick(t, this, r)) : e.nextTick(t, this, r)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(r || null, function (r) {
        !n && r ? a._writableState ? a._writableState.errorEmitted || (a._writableState.errorEmitted = !0, e.nextTick(t, a, r)) : e.nextTick(t, a, r) : n && n(r);
      }), this);
    },
    undestroy: function undestroy() {
      this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
    }
  };
}
function U() {
  if (M) return O;
  M = 1;
  var e = g();
  function t(e) {
    var t = this;
    this.next = null, this.entry = null, this.finish = function () {
      !function (e, t, r) {
        var n = e.entry;
        e.entry = null;
        for (; n;) {
          var a = n.callback;
          t.pendingcb--, a(r), n = n.next;
        }
        t.corkedRequestsFree.next = e;
      }(t, e);
    };
  }
  O = m;
  var r,
    a = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : e.nextTick;
  m.WritableState = p;
  var i = Object.create(S());
  i.inherits = T();
  var s = {
      deprecate: R ? B : (R = 1, B = n.deprecate)
    },
    o = b(),
    l = _().Buffer,
    c = (void 0 !== u ? u : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function () {};
  var h,
    d = L();
  function f() {}
  function p(n, i) {
    r = r || W(), n = n || {};
    var s = i instanceof r;
    this.objectMode = !!n.objectMode, s && (this.objectMode = this.objectMode || !!n.writableObjectMode);
    var o = n.highWaterMark,
      l = n.writableHighWaterMark,
      u = this.objectMode ? 16 : 16384;
    this.highWaterMark = o || 0 === o ? o : s && (l || 0 === l) ? l : u, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var c = !1 === n.decodeStrings;
    this.decodeStrings = !c, this.defaultEncoding = n.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
      !function (t, r) {
        var n = t._writableState,
          i = n.sync,
          s = n.writecb;
        if (function (e) {
          e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
        }(n), r) !function (t, r, n, a, i) {
          --r.pendingcb, n ? (e.nextTick(i, a), e.nextTick(A, t, r), t._writableState.errorEmitted = !0, t.emit("error", a)) : (i(a), t._writableState.errorEmitted = !0, t.emit("error", a), A(t, r));
        }(t, n, i, r, s);else {
          var o = k(n);
          o || n.corked || n.bufferProcessing || !n.bufferedRequest || w(t, n), i ? a(v, t, n, o, s) : v(t, n, o, s);
        }
      }(i, t);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new t(this);
  }
  function m(e) {
    if (r = r || W(), !(h.call(m, this) || this instanceof r)) return new m(e);
    this._writableState = new p(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e["final"] && (this._final = e["final"])), o.call(this);
  }
  function y(e, t, r, n, a, i, s) {
    t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, r ? e._writev(a, t.onwrite) : e._write(a, i, t.onwrite), t.sync = !1;
  }
  function v(e, t, r, n) {
    r || function (e, t) {
      0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
    }(e, t), t.pendingcb--, n(), A(e, t);
  }
  function w(e, r) {
    r.bufferProcessing = !0;
    var n = r.bufferedRequest;
    if (e._writev && n && n.next) {
      var a = r.bufferedRequestCount,
        i = new Array(a),
        s = r.corkedRequestsFree;
      s.entry = n;
      for (var o = 0, l = !0; n;) i[o] = n, n.isBuf || (l = !1), n = n.next, o += 1;
      i.allBuffers = l, y(e, r, !0, r.length, i, "", s.finish), r.pendingcb++, r.lastBufferedRequest = null, s.next ? (r.corkedRequestsFree = s.next, s.next = null) : r.corkedRequestsFree = new t(r), r.bufferedRequestCount = 0;
    } else {
      for (; n;) {
        var u = n.chunk,
          c = n.encoding,
          h = n.callback;
        if (y(e, r, !1, r.objectMode ? 1 : u.length, u, c, h), n = n.next, r.bufferedRequestCount--, r.writing) break;
      }
      null === n && (r.lastBufferedRequest = null);
    }
    r.bufferedRequest = n, r.bufferProcessing = !1;
  }
  function k(e) {
    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
  }
  function x(e, t) {
    e._final(function (r) {
      t.pendingcb--, r && e.emit("error", r), t.prefinished = !0, e.emit("prefinish"), A(e, t);
    });
  }
  function A(t, r) {
    var n = k(r);
    return n && (!function (t, r) {
      r.prefinished || r.finalCalled || ("function" == typeof t._final ? (r.pendingcb++, r.finalCalled = !0, e.nextTick(x, t, r)) : (r.prefinished = !0, t.emit("prefinish")));
    }(t, r), 0 === r.pendingcb && (r.finished = !0, t.emit("finish"))), n;
  }
  return i.inherits(m, o), p.prototype.getBuffer = function () {
    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
    return t;
  }, function () {
    try {
      Object.defineProperty(p.prototype, "buffer", {
        get: s.deprecate(function () {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (e) {}
  }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (h = Function.prototype[Symbol.hasInstance], Object.defineProperty(m, Symbol.hasInstance, {
    value: function value(e) {
      return !!h.call(this, e) || this === m && e && e._writableState instanceof p;
    }
  })) : h = function h(e) {
    return e instanceof this;
  }, m.prototype.pipe = function () {
    this.emit("error", new Error("Cannot pipe, not readable"));
  }, m.prototype.write = function (t, r, n) {
    var a,
      i = this._writableState,
      s = !1,
      o = !i.objectMode && (a = t, l.isBuffer(a) || a instanceof c);
    return o && !l.isBuffer(t) && (t = function (e) {
      return l.from(e);
    }(t)), "function" == typeof r && (n = r, r = null), o ? r = "buffer" : r || (r = i.defaultEncoding), "function" != typeof n && (n = f), i.ended ? function (t, r) {
      var n = new Error("write after end");
      t.emit("error", n), e.nextTick(r, n);
    }(this, n) : (o || function (t, r, n, a) {
      var i = !0,
        s = !1;
      return null === n ? s = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || r.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")), s && (t.emit("error", s), e.nextTick(a, s), i = !1), i;
    }(this, i, t, n)) && (i.pendingcb++, s = function (e, t, r, n, a, i) {
      if (!r) {
        var s = function (e, t, r) {
          e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = l.from(t, r));
          return t;
        }(t, n, a);
        n !== s && (r = !0, a = "buffer", n = s);
      }
      var o = t.objectMode ? 1 : n.length;
      t.length += o;
      var u = t.length < t.highWaterMark;
      u || (t.needDrain = !0);
      if (t.writing || t.corked) {
        var c = t.lastBufferedRequest;
        t.lastBufferedRequest = {
          chunk: n,
          encoding: a,
          isBuf: r,
          callback: i,
          next: null
        }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
      } else y(e, t, !1, o, n, a, i);
      return u;
    }(this, i, o, t, r, n)), s;
  }, m.prototype.cork = function () {
    this._writableState.corked++;
  }, m.prototype.uncork = function () {
    var e = this._writableState;
    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || w(this, e));
  }, m.prototype.setDefaultEncoding = function (e) {
    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
    return this._writableState.defaultEncoding = e, this;
  }, Object.defineProperty(m.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  }), m.prototype._write = function (e, t, r) {
    r(new Error("_write() is not implemented"));
  }, m.prototype._writev = null, m.prototype.end = function (t, r, n) {
    var a = this._writableState;
    "function" == typeof t ? (n = t, t = null, r = null) : "function" == typeof r && (n = r, r = null), null != t && this.write(t, r), a.corked && (a.corked = 1, this.uncork()), a.ending || function (t, r, n) {
      r.ending = !0, A(t, r), n && (r.finished ? e.nextTick(n) : t.once("finish", n));
      r.ended = !0, t.writable = !1;
    }(this, a, n);
  }, Object.defineProperty(m.prototype, "destroyed", {
    get: function get() {
      return void 0 !== this._writableState && this._writableState.destroyed;
    },
    set: function set(e) {
      this._writableState && (this._writableState.destroyed = e);
    }
  }), m.prototype.destroy = d.destroy, m.prototype._undestroy = d.undestroy, m.prototype._destroy = function (e, t) {
    this.end(), t(e);
  }, O;
}
function W() {
  if (z) return I;
  z = 1;
  var e = g(),
    t = Object.keys || function (e) {
      var t = [];
      for (var r in e) t.push(r);
      return t;
    };
  I = l;
  var r = Object.create(S());
  r.inherits = T();
  var n = ee(),
    a = U();
  r.inherits(l, n);
  for (var i = t(a.prototype), s = 0; s < i.length; s++) {
    var o = i[s];
    l.prototype[o] || (l.prototype[o] = a.prototype[o]);
  }
  function l(e) {
    if (!(this instanceof l)) return new l(e);
    n.call(this, e), a.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", u);
  }
  function u() {
    this.allowHalfOpen || this._writableState.ended || e.nextTick(c, this);
  }
  function c(e) {
    e.end();
  }
  return Object.defineProperty(l.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(l.prototype, "destroyed", {
    get: function get() {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(e) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
    }
  }), l.prototype._destroy = function (t, r) {
    this.push(null), this.end(), e.nextTick(r, t);
  }, I;
}
var H,
  $,
  Z,
  V,
  q,
  X,
  K,
  Y,
  J,
  G = {};
function Q() {
  if (H) return G;
  H = 1;
  var e = _().Buffer,
    t = e.isEncoding || function (e) {
      switch ((e = "" + e) && e.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return !0;
        default:
          return !1;
      }
    };
  function r(r) {
    var n;
    switch (this.encoding = function (r) {
      var n = function (e) {
        if (!e) return "utf8";
        for (var t;;) switch (e) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e;
          default:
            if (t) return;
            e = ("" + e).toLowerCase(), t = !0;
        }
      }(r);
      if ("string" != typeof n && (e.isEncoding === t || !t(r))) throw new Error("Unknown encoding: " + r);
      return n || r;
    }(r), this.encoding) {
      case "utf16le":
        this.text = i, this.end = s, n = 4;
        break;
      case "utf8":
        this.fillLast = a, n = 4;
        break;
      case "base64":
        this.text = o, this.end = l, n = 3;
        break;
      default:
        return this.write = u, void (this.end = c);
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(n);
  }
  function n(e) {
    return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
  }
  function a(e) {
    var t = this.lastTotal - this.lastNeed,
      r = function (e, t, r) {
        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
        if (e.lastNeed > 1 && t.length > 1) {
          if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
          if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�";
        }
      }(this, e);
    return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length));
  }
  function i(e, t) {
    if ((e.length - t) % 2 == 0) {
      var r = e.toString("utf16le", t);
      if (r) {
        var n = r.charCodeAt(r.length - 1);
        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1);
      }
      return r;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
  }
  function s(e) {
    var t = e && e.length ? this.write(e) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return t + this.lastChar.toString("utf16le", 0, r);
    }
    return t;
  }
  function o(e, t) {
    var r = (e.length - t) % 3;
    return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
  }
  function l(e) {
    var t = e && e.length ? this.write(e) : "";
    return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
  }
  function u(e) {
    return e.toString(this.encoding);
  }
  function c(e) {
    return e && e.length ? this.write(e) : "";
  }
  return G.StringDecoder = r, r.prototype.write = function (e) {
    if (0 === e.length) return "";
    var t, r;
    if (this.lastNeed) {
      if (void 0 === (t = this.fillLast(e))) return "";
      r = this.lastNeed, this.lastNeed = 0;
    } else r = 0;
    return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
  }, r.prototype.end = function (e) {
    var t = e && e.length ? this.write(e) : "";
    return this.lastNeed ? t + "�" : t;
  }, r.prototype.text = function (e, t) {
    var r = function (e, t, r) {
      var a = t.length - 1;
      if (a < r) return 0;
      var i = n(t[a]);
      if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
      if (--a < r || -2 === i) return 0;
      if (i = n(t[a]), i >= 0) return i > 0 && (e.lastNeed = i - 2), i;
      if (--a < r || -2 === i) return 0;
      if (i = n(t[a]), i >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
      return 0;
    }(this, e, t);
    if (!this.lastNeed) return e.toString("utf8", t);
    this.lastTotal = r;
    var a = e.length - (r - this.lastNeed);
    return e.copy(this.lastChar, 0, a), e.toString("utf8", t, a);
  }, r.prototype.fillLast = function (e) {
    if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
  }, G;
}
function ee() {
  if (Z) return $;
  Z = 1;
  var e = g();
  $ = x;
  var r,
    a = function () {
      if (s) return i;
      s = 1;
      var e = {}.toString;
      return i = Array.isArray || function (t) {
        return "[object Array]" == e.call(t);
      };
    }();
  x.ReadableState = k, t.EventEmitter;
  var o = function o(e, t) {
      return e.listeners(t).length;
    },
    l = b(),
    c = _().Buffer,
    h = (void 0 !== u ? u : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function () {};
  var d = Object.create(S());
  d.inherits = T();
  var f = n,
    p = void 0;
  p = f && f.debuglog ? f.debuglog("stream") : function () {};
  var m,
    y = j(),
    v = L();
  d.inherits(x, l);
  var w = ["error", "close", "destroy", "pause", "resume"];
  function k(e, t) {
    e = e || {};
    var n = t instanceof (r = r || W());
    this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode);
    var a = e.highWaterMark,
      i = e.readableHighWaterMark,
      s = this.objectMode ? 16 : 16384;
    this.highWaterMark = a || 0 === a ? a : n && (i || 0 === i) ? i : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new y(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (m || (m = Q().StringDecoder), this.decoder = new m(e.encoding), this.encoding = e.encoding);
  }
  function x(e) {
    if (r = r || W(), !(this instanceof x)) return new x(e);
    this._readableState = new k(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), l.call(this);
  }
  function A(e, t, r, n, a) {
    var i,
      s = e._readableState;
    null === t ? (s.reading = !1, function (e, t) {
      if (t.ended) return;
      if (t.decoder) {
        var r = t.decoder.end();
        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length);
      }
      t.ended = !0, D(e);
    }(e, s)) : (a || (i = function (e, t) {
      var r;
      n = t, c.isBuffer(n) || n instanceof h || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
      var n;
      return r;
    }(s, t)), i ? e.emit("error", i) : s.objectMode || t && t.length > 0 ? ("string" == typeof t || s.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
      return c.from(e);
    }(t)), n ? s.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : C(e, s, t, !0) : s.ended ? e.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1, s.decoder && !r ? (t = s.decoder.write(t), s.objectMode || 0 !== t.length ? C(e, s, t, !1) : B(e, s)) : C(e, s, t, !1))) : n || (s.reading = !1));
    return function (e) {
      return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
    }(s);
  }
  function C(e, t, r, n) {
    t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && D(e)), B(e, t);
  }
  Object.defineProperty(x.prototype, "destroyed", {
    get: function get() {
      return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function set(e) {
      this._readableState && (this._readableState.destroyed = e);
    }
  }), x.prototype.destroy = v.destroy, x.prototype._undestroy = v.undestroy, x.prototype._destroy = function (e, t) {
    this.push(null), t(e);
  }, x.prototype.push = function (e, t) {
    var r,
      n = this._readableState;
    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = c.from(e, t), t = ""), r = !0), A(this, e, t, !1, r);
  }, x.prototype.unshift = function (e) {
    return A(this, e, null, !0, !1);
  }, x.prototype.isPaused = function () {
    return !1 === this._readableState.flowing;
  }, x.prototype.setEncoding = function (e) {
    return m || (m = Q().StringDecoder), this._readableState.decoder = new m(e), this._readableState.encoding = e, this;
  };
  var P = 8388608;
  function E(e, t) {
    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
      return e >= P ? e = P : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
    }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
  }
  function D(t) {
    var r = t._readableState;
    r.needReadable = !1, r.emittedReadable || (p("emitReadable", r.flowing), r.emittedReadable = !0, r.sync ? e.nextTick(N, t) : N(t));
  }
  function N(e) {
    p("emit readable"), e.emit("readable"), I(e);
  }
  function B(t, r) {
    r.readingMore || (r.readingMore = !0, e.nextTick(R, t, r));
  }
  function R(e, t) {
    for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (p("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
    t.readingMore = !1;
  }
  function O(e) {
    p("readable nexttick read 0"), e.read(0);
  }
  function M(e, t) {
    t.reading || (p("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), I(e), t.flowing && !t.reading && e.read(0);
  }
  function I(e) {
    var t = e._readableState;
    for (p("flow", t.flowing); t.flowing && null !== e.read(););
  }
  function z(e, t) {
    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function (e, t, r) {
      var n;
      e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
        var r = t.head,
          n = 1,
          a = r.data;
        e -= a.length;
        for (; r = r.next;) {
          var i = r.data,
            s = e > i.length ? i.length : e;
          if (s === i.length ? a += i : a += i.slice(0, e), 0 === (e -= s)) {
            s === i.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = i.slice(s));
            break;
          }
          ++n;
        }
        return t.length -= n, a;
      }(e, t) : function (e, t) {
        var r = c.allocUnsafe(e),
          n = t.head,
          a = 1;
        n.data.copy(r), e -= n.data.length;
        for (; n = n.next;) {
          var i = n.data,
            s = e > i.length ? i.length : e;
          if (i.copy(r, r.length - e, 0, s), 0 === (e -= s)) {
            s === i.length ? (++a, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = i.slice(s));
            break;
          }
          ++a;
        }
        return t.length -= a, r;
      }(e, t);
      return n;
    }(e, t.buffer, t.decoder), r);
    var r;
  }
  function F(t) {
    var r = t._readableState;
    if (r.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    r.endEmitted || (r.ended = !0, e.nextTick(U, r, t));
  }
  function U(e, t) {
    e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"));
  }
  function H(e, t) {
    for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
    return -1;
  }
  return x.prototype.read = function (e) {
    p("read", e), e = parseInt(e, 10);
    var t = this._readableState,
      r = e;
    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return p("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? F(this) : D(this), null;
    if (0 === (e = E(e, t)) && t.ended) return 0 === t.length && F(this), null;
    var n,
      a = t.needReadable;
    return p("need readable", a), (0 === t.length || t.length - e < t.highWaterMark) && p("length less than watermark", a = !0), t.ended || t.reading ? p("reading or ended", a = !1) : a && (p("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = E(r, t))), null === (n = e > 0 ? z(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && F(this)), null !== n && this.emit("data", n), n;
  }, x.prototype._read = function (e) {
    this.emit("error", new Error("_read() is not implemented"));
  }, x.prototype.pipe = function (t, r) {
    var n = this,
      i = this._readableState;
    switch (i.pipesCount) {
      case 0:
        i.pipes = t;
        break;
      case 1:
        i.pipes = [i.pipes, t];
        break;
      default:
        i.pipes.push(t);
    }
    i.pipesCount += 1, p("pipe count=%d opts=%j", i.pipesCount, r);
    var s = (!r || !1 !== r.end) && t !== process.stdout && t !== process.stderr ? u : y;
    function l(e, r) {
      p("onunpipe"), e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, p("cleanup"), t.removeListener("close", g), t.removeListener("finish", b), t.removeListener("drain", c), t.removeListener("error", m), t.removeListener("unpipe", l), n.removeListener("end", u), n.removeListener("end", y), n.removeListener("data", f), h = !0, !i.awaitDrain || t._writableState && !t._writableState.needDrain || c());
    }
    function u() {
      p("onend"), t.end();
    }
    i.endEmitted ? e.nextTick(s) : n.once("end", s), t.on("unpipe", l);
    var c = function (e) {
      return function () {
        var t = e._readableState;
        p("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, I(e));
      };
    }(n);
    t.on("drain", c);
    var h = !1;
    var d = !1;
    function f(e) {
      p("ondata"), d = !1, !1 !== t.write(e) || d || ((1 === i.pipesCount && i.pipes === t || i.pipesCount > 1 && -1 !== H(i.pipes, t)) && !h && (p("false write response, pause", i.awaitDrain), i.awaitDrain++, d = !0), n.pause());
    }
    function m(e) {
      p("onerror", e), y(), t.removeListener("error", m), 0 === o(t, "error") && t.emit("error", e);
    }
    function g() {
      t.removeListener("finish", b), y();
    }
    function b() {
      p("onfinish"), t.removeListener("close", g), y();
    }
    function y() {
      p("unpipe"), n.unpipe(t);
    }
    return n.on("data", f), function (e, t, r) {
      if ("function" == typeof e.prependListener) return e.prependListener(t, r);
      e._events && e._events[t] ? a(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r);
    }(t, "error", m), t.once("close", g), t.once("finish", b), t.emit("pipe", n), i.flowing || (p("pipe resume"), n.resume()), t;
  }, x.prototype.unpipe = function (e) {
    var t = this._readableState,
      r = {
        hasUnpiped: !1
      };
    if (0 === t.pipesCount) return this;
    if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
    if (!e) {
      var n = t.pipes,
        a = t.pipesCount;
      t.pipes = null, t.pipesCount = 0, t.flowing = !1;
      for (var i = 0; i < a; i++) n[i].emit("unpipe", this, {
        hasUnpiped: !1
      });
      return this;
    }
    var s = H(t.pipes, e);
    return -1 === s || (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this;
  }, x.prototype.on = function (t, r) {
    var n = l.prototype.on.call(this, t, r);
    if ("data" === t) !1 !== this._readableState.flowing && this.resume();else if ("readable" === t) {
      var a = this._readableState;
      a.endEmitted || a.readableListening || (a.readableListening = a.needReadable = !0, a.emittedReadable = !1, a.reading ? a.length && D(this) : e.nextTick(O, this));
    }
    return n;
  }, x.prototype.addListener = x.prototype.on, x.prototype.resume = function () {
    var t = this._readableState;
    return t.flowing || (p("resume"), t.flowing = !0, function (t, r) {
      r.resumeScheduled || (r.resumeScheduled = !0, e.nextTick(M, t, r));
    }(this, t)), this;
  }, x.prototype.pause = function () {
    return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
  }, x.prototype.wrap = function (e) {
    var t = this,
      r = this._readableState,
      n = !1;
    for (var a in e.on("end", function () {
      if (p("wrapped end"), r.decoder && !r.ended) {
        var e = r.decoder.end();
        e && e.length && t.push(e);
      }
      t.push(null);
    }), e.on("data", function (a) {
      (p("wrapped data"), r.decoder && (a = r.decoder.write(a)), r.objectMode && null == a) || (r.objectMode || a && a.length) && (t.push(a) || (n = !0, e.pause()));
    }), e) void 0 === this[a] && "function" == typeof e[a] && (this[a] = function (t) {
      return function () {
        return e[t].apply(e, arguments);
      };
    }(a));
    for (var i = 0; i < w.length; i++) e.on(w[i], this.emit.bind(this, w[i]));
    return this._read = function (t) {
      p("wrapped _read", t), n && (n = !1, e.resume());
    }, this;
  }, Object.defineProperty(x.prototype, "readableHighWaterMark", {
    enumerable: !1,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  }), x._fromList = z, $;
}
function te() {
  if (q) return V;
  q = 1, V = n;
  var e = W(),
    t = Object.create(S());
  function r(e, t) {
    var r = this._transformState;
    r.transforming = !1;
    var n = r.writecb;
    if (!n) return this.emit("error", new Error("write callback called multiple times"));
    r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
    var a = this._readableState;
    a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
  }
  function n(t) {
    if (!(this instanceof n)) return new n(t);
    e.call(this, t), this._transformState = {
      afterTransform: r.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", a);
  }
  function a() {
    var e = this;
    "function" == typeof this._flush ? this._flush(function (t, r) {
      i(e, t, r);
    }) : i(this, null, null);
  }
  function i(e, t, r) {
    if (t) return e.emit("error", t);
    if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return e.push(null);
  }
  return t.inherits = T(), t.inherits(n, e), n.prototype.push = function (t, r) {
    return this._transformState.needTransform = !1, e.prototype.push.call(this, t, r);
  }, n.prototype._transform = function (e, t, r) {
    throw new Error("_transform() is not implemented");
  }, n.prototype._write = function (e, t, r) {
    var n = this._transformState;
    if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
      var a = this._readableState;
      (n.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark);
    }
  }, n.prototype._read = function (e) {
    var t = this._transformState;
    null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
  }, n.prototype._destroy = function (t, r) {
    var n = this;
    e.prototype._destroy.call(this, t, function (e) {
      r(e), n.emit("close");
    });
  }, V;
}
function re() {
  return Y || (Y = 1, t = p, r = p.exports, n = e, "disable" === process.env.READABLE_STREAM && n ? (t.exports = n, (r = t.exports = n.Readable).Readable = n.Readable, r.Writable = n.Writable, r.Duplex = n.Duplex, r.Transform = n.Transform, r.PassThrough = n.PassThrough, r.Stream = n) : ((r = t.exports = ee()).Stream = n || r, r.Readable = r, r.Writable = U(), r.Duplex = W(), r.Transform = te(), r.PassThrough = function () {
    if (K) return X;
    K = 1, X = r;
    var e = te(),
      t = Object.create(S());
    function r(t) {
      if (!(this instanceof r)) return new r(t);
      e.call(this, t);
    }
    return t.inherits = T(), t.inherits(r, e), r.prototype._transform = function (e, t, r) {
      r(null, e);
    }, X;
  }())), p.exports;
  var t, r, n;
}
function ne() {
  if (J) return f;
  if (J = 1, f.base64 = !0, f.array = !0, f.string = !0, f.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, f.nodebuffer = "undefined" != typeof Buffer, f.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) f.blob = !1;else {
    var e = new ArrayBuffer(0);
    try {
      f.blob = 0 === new Blob([e], {
        type: "application/zip"
      }).size;
    } catch (r) {
      try {
        var t = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
        t.append(e), f.blob = 0 === t.getBlob("application/zip").size;
      } catch (e) {
        f.blob = !1;
      }
    }
  }
  try {
    f.nodestream = !!re().Readable;
  } catch (e) {
    f.nodestream = !1;
  }
  return f;
}
var ae,
  ie,
  se,
  oe,
  le,
  ue,
  ce,
  he,
  de,
  fe = {};
function pe() {
  if (ae) return fe;
  ae = 1;
  var e = Ne(),
    t = ne(),
    r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return fe.encode = function (t) {
    for (var n, a, i, s, o, l, u, c = [], h = 0, d = t.length, f = d, p = "string" !== e.getTypeOf(t); h < t.length;) f = d - h, p ? (n = t[h++], a = h < d ? t[h++] : 0, i = h < d ? t[h++] : 0) : (n = t.charCodeAt(h++), a = h < d ? t.charCodeAt(h++) : 0, i = h < d ? t.charCodeAt(h++) : 0), s = n >> 2, o = (3 & n) << 4 | a >> 4, l = f > 1 ? (15 & a) << 2 | i >> 6 : 64, u = f > 2 ? 63 & i : 64, c.push(r.charAt(s) + r.charAt(o) + r.charAt(l) + r.charAt(u));
    return c.join("");
  }, fe.decode = function (e) {
    var n,
      a,
      i,
      s,
      o,
      l,
      u = 0,
      c = 0,
      h = "data:";
    if (e.substr(0, 5) === h) throw new Error("Invalid base64 input, it looks like a data url.");
    var d,
      f = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
    if (e.charAt(e.length - 1) === r.charAt(64) && f--, e.charAt(e.length - 2) === r.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
    for (d = t.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); u < e.length;) n = r.indexOf(e.charAt(u++)) << 2 | (s = r.indexOf(e.charAt(u++))) >> 4, a = (15 & s) << 4 | (o = r.indexOf(e.charAt(u++))) >> 2, i = (3 & o) << 6 | (l = r.indexOf(e.charAt(u++))), d[c++] = n, 64 !== o && (d[c++] = a), 64 !== l && (d[c++] = i);
    return d;
  }, fe;
}
function me() {
  return se ? ie : (se = 1, ie = {
    isNode: "undefined" != typeof Buffer,
    newBufferFrom: function newBufferFrom(e, t) {
      if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
      if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
      return new Buffer(e, t);
    },
    allocBuffer: function allocBuffer(e) {
      if (Buffer.alloc) return Buffer.alloc(e);
      var t = new Buffer(e);
      return t.fill(0), t;
    },
    isBuffer: function isBuffer(e) {
      return Buffer.isBuffer(e);
    },
    isStream: function isStream(e) {
      return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume;
    }
  });
}
function ge() {
  if (ce) return ue;
  ce = 1;
  var e = function () {
    if (le) return oe;
    le = 1;
    var e,
      t,
      r = u.MutationObserver || u.WebKitMutationObserver;
    if (process.browser) {
      if (r) {
        var n = 0,
          a = new r(l),
          i = u.document.createTextNode("");
        a.observe(i, {
          characterData: !0
        }), e = function e() {
          i.data = n = ++n % 2;
        };
      } else if (u.setImmediate || void 0 === u.MessageChannel) e = "document" in u && "onreadystatechange" in u.document.createElement("script") ? function () {
        var e = u.document.createElement("script");
        e.onreadystatechange = function () {
          l(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null;
        }, u.document.documentElement.appendChild(e);
      } : function () {
        setTimeout(l, 0);
      };else {
        var s = new u.MessageChannel();
        s.port1.onmessage = l, e = function e() {
          s.port2.postMessage(0);
        };
      }
    } else e = function e() {
      process.nextTick(l);
    };
    var o = [];
    function l() {
      var e, r;
      t = !0;
      for (var n = o.length; n;) {
        for (r = o, o = [], e = -1; ++e < n;) r[e]();
        n = o.length;
      }
      t = !1;
    }
    return oe = function oe(r) {
      1 !== o.push(r) || t || e();
    };
  }();
  function t() {}
  var r = {},
    n = ["REJECTED"],
    a = ["FULFILLED"],
    i = ["PENDING"];
  if (!process.browser) var s = ["UNHANDLED"];
  function o(e) {
    if ("function" != typeof e) throw new TypeError("resolver must be a function");
    this.state = i, this.queue = [], this.outcome = void 0, process.browser || (this.handled = s), e !== t && d(this, e);
  }
  function l(e, t, r) {
    this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
  }
  function c(t, n, a) {
    e(function () {
      var e;
      try {
        e = n(a);
      } catch (e) {
        return r.reject(t, e);
      }
      e === t ? r.reject(t, new TypeError("Cannot resolve promise with itself")) : r.resolve(t, e);
    });
  }
  function h(e) {
    var t = e && e.then;
    if (e && ("object" == _typeof(e) || "function" == typeof e) && "function" == typeof t) return function () {
      t.apply(e, arguments);
    };
  }
  function d(e, t) {
    var n = !1;
    function a(t) {
      n || (n = !0, r.reject(e, t));
    }
    function i(t) {
      n || (n = !0, r.resolve(e, t));
    }
    var s = f(function () {
      t(i, a);
    });
    "error" === s.status && a(s.value);
  }
  function f(e, t) {
    var r = {};
    try {
      r.value = e(t), r.status = "success";
    } catch (e) {
      r.status = "error", r.value = e;
    }
    return r;
  }
  return ue = o, o.prototype["finally"] = function (e) {
    if ("function" != typeof e) return this;
    var t = this.constructor;
    return this.then(function (r) {
      return t.resolve(e()).then(function () {
        return r;
      });
    }, function (r) {
      return t.resolve(e()).then(function () {
        throw r;
      });
    });
  }, o.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, o.prototype.then = function (e, r) {
    if ("function" != typeof e && this.state === a || "function" != typeof r && this.state === n) return this;
    var o = new this.constructor(t);
    (process.browser || this.handled === s && (this.handled = null), this.state !== i) ? c(o, this.state === a ? e : r, this.outcome) : this.queue.push(new l(o, e, r));
    return o;
  }, l.prototype.callFulfilled = function (e) {
    r.resolve(this.promise, e);
  }, l.prototype.otherCallFulfilled = function (e) {
    c(this.promise, this.onFulfilled, e);
  }, l.prototype.callRejected = function (e) {
    r.reject(this.promise, e);
  }, l.prototype.otherCallRejected = function (e) {
    c(this.promise, this.onRejected, e);
  }, r.resolve = function (e, t) {
    var n = f(h, t);
    if ("error" === n.status) return r.reject(e, n.value);
    var i = n.value;
    if (i) d(e, i);else {
      e.state = a, e.outcome = t;
      for (var s = -1, o = e.queue.length; ++s < o;) e.queue[s].callFulfilled(t);
    }
    return e;
  }, r.reject = function (t, r) {
    t.state = n, t.outcome = r, process.browser || t.handled === s && e(function () {
      t.handled === s && process.emit("unhandledRejection", r, t);
    });
    for (var a = -1, i = t.queue.length; ++a < i;) t.queue[a].callRejected(r);
    return t;
  }, o.resolve = function (e) {
    if (e instanceof this) return e;
    return r.resolve(new this(t), e);
  }, o.reject = function (e) {
    var n = new this(t);
    return r.reject(n, e);
  }, o.all = function (e) {
    var n = this;
    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
    var a = e.length,
      i = !1;
    if (!a) return this.resolve([]);
    var s = new Array(a),
      o = 0,
      l = -1,
      u = new this(t);
    for (; ++l < a;) c(e[l], l);
    return u;
    function c(e, t) {
      n.resolve(e).then(function (e) {
        s[t] = e, ++o !== a || i || (i = !0, r.resolve(u, s));
      }, function (e) {
        i || (i = !0, r.reject(u, e));
      });
    }
  }, o.race = function (e) {
    var n = this;
    if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
    var a = e.length,
      i = !1;
    if (!a) return this.resolve([]);
    var s = -1,
      o = new this(t);
    for (; ++s < a;) l = e[s], n.resolve(l).then(function (e) {
      i || (i = !0, r.resolve(o, e));
    }, function (e) {
      i || (i = !0, r.reject(o, e));
    });
    var l;
    return o;
  }, ue;
}
function be() {
  if (de) return he;
  de = 1;
  var e = null;
  return e = "undefined" != typeof Promise ? Promise : ge(), he = {
    Promise: e
  };
}
var ye,
  ve,
  _e,
  we,
  ke,
  Se,
  xe,
  Ae,
  Ce,
  Pe,
  Te,
  Ee = {};
function De() {
  return ye || (ye = 1, function (e, t) {
    if (!e.setImmediate) {
      var r,
        n,
        a,
        i,
        s,
        o = 1,
        l = {},
        u = !1,
        c = e.document,
        h = Object.getPrototypeOf && Object.getPrototypeOf(e);
      h = h && h.setTimeout ? h : e, "[object process]" === {}.toString.call(e.process) ? r = function r(e) {
        process.nextTick(function () {
          f(e);
        });
      } : !function () {
        if (e.postMessage && !e.importScripts) {
          var t = !0,
            r = e.onmessage;
          return e.onmessage = function () {
            t = !1;
          }, e.postMessage("", "*"), e.onmessage = r, t;
        }
      }() ? e.MessageChannel ? ((a = new MessageChannel()).port1.onmessage = function (e) {
        f(e.data);
      }, r = function r(e) {
        a.port2.postMessage(e);
      }) : c && "onreadystatechange" in c.createElement("script") ? (n = c.documentElement, r = function r(e) {
        var t = c.createElement("script");
        t.onreadystatechange = function () {
          f(e), t.onreadystatechange = null, n.removeChild(t), t = null;
        }, n.appendChild(t);
      }) : r = function r(e) {
        setTimeout(f, 0, e);
      } : (i = "setImmediate$" + Math.random() + "$", s = function s(t) {
        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && f(+t.data.slice(i.length));
      }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), r = function r(t) {
        e.postMessage(i + t, "*");
      }), h.setImmediate = function (e) {
        "function" != typeof e && (e = new Function("" + e));
        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
        var a = {
          callback: e,
          args: t
        };
        return l[o] = a, r(o), o++;
      }, h.clearImmediate = d;
    }
    function d(e) {
      delete l[e];
    }
    function f(e) {
      if (u) setTimeout(f, 0, e);else {
        var r = l[e];
        if (r) {
          u = !0;
          try {
            !function (e) {
              var r = e.callback,
                n = e.args;
              switch (n.length) {
                case 0:
                  r();
                  break;
                case 1:
                  r(n[0]);
                  break;
                case 2:
                  r(n[0], n[1]);
                  break;
                case 3:
                  r(n[0], n[1], n[2]);
                  break;
                default:
                  r.apply(t, n);
              }
            }(r);
          } finally {
            d(e), u = !1;
          }
        }
      }
    }
  }("undefined" == typeof self ? u : self)), Ee;
}
function Ne() {
  return ve || (ve = 1, function (e) {
    var t = ne(),
      r = pe(),
      n = me(),
      a = be();
    function i(e) {
      return e;
    }
    function s(e, t) {
      for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
      return t;
    }
    De(), e.newBlob = function (t, r) {
      e.checkSupport("blob");
      try {
        return new Blob([t], {
          type: r
        });
      } catch (e) {
        try {
          var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
          return n.append(t), n.getBlob(r);
        } catch (e) {
          throw new Error("Bug : can't construct the Blob.");
        }
      }
    };
    var o = {
      stringifyByChunk: function stringifyByChunk(e, t, r) {
        var n = [],
          a = 0,
          i = e.length;
        if (i <= r) return String.fromCharCode.apply(null, e);
        for (; a < i;) "array" === t || "nodebuffer" === t ? n.push(String.fromCharCode.apply(null, e.slice(a, Math.min(a + r, i)))) : n.push(String.fromCharCode.apply(null, e.subarray(a, Math.min(a + r, i)))), a += r;
        return n.join("");
      },
      stringifyByChar: function stringifyByChar(e) {
        for (var t = "", r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
        return t;
      },
      applyCanBeUsed: {
        uint8array: function () {
          try {
            return t.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e) {
            return !1;
          }
        }(),
        nodebuffer: function () {
          try {
            return t.nodebuffer && 1 === String.fromCharCode.apply(null, n.allocBuffer(1)).length;
          } catch (e) {
            return !1;
          }
        }()
      }
    };
    function l(t) {
      var r = 65536,
        n = e.getTypeOf(t),
        a = !0;
      if ("uint8array" === n ? a = o.applyCanBeUsed.uint8array : "nodebuffer" === n && (a = o.applyCanBeUsed.nodebuffer), a) for (; r > 1;) try {
        return o.stringifyByChunk(t, n, r);
      } catch (e) {
        r = Math.floor(r / 2);
      }
      return o.stringifyByChar(t);
    }
    function u(e, t) {
      for (var r = 0; r < e.length; r++) t[r] = e[r];
      return t;
    }
    e.applyFromCharCode = l;
    var c = {};
    c.string = {
      string: i,
      array: function array(e) {
        return s(e, new Array(e.length));
      },
      arraybuffer: function arraybuffer(e) {
        return c.string.uint8array(e).buffer;
      },
      uint8array: function uint8array(e) {
        return s(e, new Uint8Array(e.length));
      },
      nodebuffer: function nodebuffer(e) {
        return s(e, n.allocBuffer(e.length));
      }
    }, c.array = {
      string: l,
      array: i,
      arraybuffer: function arraybuffer(e) {
        return new Uint8Array(e).buffer;
      },
      uint8array: function uint8array(e) {
        return new Uint8Array(e);
      },
      nodebuffer: function nodebuffer(e) {
        return n.newBufferFrom(e);
      }
    }, c.arraybuffer = {
      string: function string(e) {
        return l(new Uint8Array(e));
      },
      array: function array(e) {
        return u(new Uint8Array(e), new Array(e.byteLength));
      },
      arraybuffer: i,
      uint8array: function uint8array(e) {
        return new Uint8Array(e);
      },
      nodebuffer: function nodebuffer(e) {
        return n.newBufferFrom(new Uint8Array(e));
      }
    }, c.uint8array = {
      string: l,
      array: function array(e) {
        return u(e, new Array(e.length));
      },
      arraybuffer: function arraybuffer(e) {
        return e.buffer;
      },
      uint8array: i,
      nodebuffer: function nodebuffer(e) {
        return n.newBufferFrom(e);
      }
    }, c.nodebuffer = {
      string: l,
      array: function array(e) {
        return u(e, new Array(e.length));
      },
      arraybuffer: function arraybuffer(e) {
        return c.nodebuffer.uint8array(e).buffer;
      },
      uint8array: function uint8array(e) {
        return u(e, new Uint8Array(e.length));
      },
      nodebuffer: i
    }, e.transformTo = function (t, r) {
      if (r || (r = ""), !t) return r;
      e.checkSupport(t);
      var n = e.getTypeOf(r);
      return c[n][t](r);
    }, e.resolve = function (e) {
      for (var t = e.split("/"), r = [], n = 0; n < t.length; n++) {
        var a = t[n];
        "." === a || "" === a && 0 !== n && n !== t.length - 1 || (".." === a ? r.pop() : r.push(a));
      }
      return r.join("/");
    }, e.getTypeOf = function (e) {
      return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : t.nodebuffer && n.isBuffer(e) ? "nodebuffer" : t.uint8array && e instanceof Uint8Array ? "uint8array" : t.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
    }, e.checkSupport = function (e) {
      if (!t[e.toLowerCase()]) throw new Error(e + " is not supported by this platform");
    }, e.MAX_VALUE_16BITS = 65535, e.MAX_VALUE_32BITS = -1, e.pretty = function (e) {
      var t,
        r,
        n = "";
      for (r = 0; r < (e || "").length; r++) n += "\\x" + ((t = e.charCodeAt(r)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
      return n;
    }, e.delay = function (e, t, r) {
      setImmediate(function () {
        e.apply(r || null, t || []);
      });
    }, e.inherits = function (e, t) {
      var r = function r() {};
      r.prototype = t.prototype, e.prototype = new r();
    }, e.extend = function () {
      var e,
        t,
        r = {};
      for (e = 0; e < arguments.length; e++) for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && void 0 === r[t] && (r[t] = arguments[e][t]);
      return r;
    }, e.prepareContent = function (n, i, o, l, u) {
      return a.Promise.resolve(i).then(function (e) {
        return t.blob && (e instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e))) && "undefined" != typeof FileReader ? new a.Promise(function (t, r) {
          var n = new FileReader();
          n.onload = function (e) {
            t(e.target.result);
          }, n.onerror = function (e) {
            r(e.target.error);
          }, n.readAsArrayBuffer(e);
        }) : e;
      }).then(function (i) {
        var c,
          h = e.getTypeOf(i);
        return h ? ("arraybuffer" === h ? i = e.transformTo("uint8array", i) : "string" === h && (u ? i = r.decode(i) : o && !0 !== l && (i = s(c = i, t.uint8array ? new Uint8Array(c.length) : new Array(c.length)))), i) : a.Promise.reject(new Error("Can't read the data of '" + n + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
      });
    };
  }(d)), d;
}
function Be() {
  if (we) return _e;
  function e(e) {
    this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
      data: [],
      end: [],
      error: []
    }, this.previous = null;
  }
  return we = 1, e.prototype = {
    push: function push(e) {
      this.emit("data", e);
    },
    end: function end() {
      if (this.isFinished) return !1;
      this.flush();
      try {
        this.emit("end"), this.cleanUp(), this.isFinished = !0;
      } catch (e) {
        this.emit("error", e);
      }
      return !0;
    },
    error: function error(e) {
      return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
    },
    on: function on(e, t) {
      return this._listeners[e].push(t), this;
    },
    cleanUp: function cleanUp() {
      this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
    },
    emit: function emit(e, t) {
      if (this._listeners[e]) for (var r = 0; r < this._listeners[e].length; r++) this._listeners[e][r].call(this, t);
    },
    pipe: function pipe(e) {
      return e.registerPrevious(this);
    },
    registerPrevious: function registerPrevious(e) {
      if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
      this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
      var t = this;
      return e.on("data", function (e) {
        t.processChunk(e);
      }), e.on("end", function () {
        t.end();
      }), e.on("error", function (e) {
        t.error(e);
      }), this;
    },
    pause: function pause() {
      return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
    },
    resume: function resume() {
      if (!this.isPaused || this.isFinished) return !1;
      this.isPaused = !1;
      var e = !1;
      return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
    },
    flush: function flush() {},
    processChunk: function processChunk(e) {
      this.push(e);
    },
    withStreamInfo: function withStreamInfo(e, t) {
      return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
    },
    mergeStreamInfo: function mergeStreamInfo() {
      for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
    },
    lock: function lock() {
      if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
      this.isLocked = !0, this.previous && this.previous.lock();
    },
    toString: function toString() {
      var e = "Worker " + this.name;
      return this.previous ? this.previous + " -> " + e : e;
    }
  }, _e = e;
}
function Re() {
  return ke || (ke = 1, function (e) {
    for (var t = Ne(), r = ne(), n = me(), a = Be(), i = new Array(256), s = 0; s < 256; s++) i[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
    i[254] = i[254] = 1;
    function o() {
      a.call(this, "utf-8 decode"), this.leftOver = null;
    }
    function l() {
      a.call(this, "utf-8 encode");
    }
    e.utf8encode = function (e) {
      return r.nodebuffer ? n.newBufferFrom(e, "utf-8") : function (e) {
        var t,
          n,
          a,
          i,
          s,
          o = e.length,
          l = 0;
        for (i = 0; i < o; i++) 55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (a - 56320), i++), l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
        for (t = r.uint8array ? new Uint8Array(l) : new Array(l), s = 0, i = 0; s < l; i++) 55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (a - 56320), i++), n < 128 ? t[s++] = n : n < 2048 ? (t[s++] = 192 | n >>> 6, t[s++] = 128 | 63 & n) : n < 65536 ? (t[s++] = 224 | n >>> 12, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n) : (t[s++] = 240 | n >>> 18, t[s++] = 128 | n >>> 12 & 63, t[s++] = 128 | n >>> 6 & 63, t[s++] = 128 | 63 & n);
        return t;
      }(e);
    }, e.utf8decode = function (e) {
      return r.nodebuffer ? t.transformTo("nodebuffer", e).toString("utf-8") : function (e) {
        var r,
          n,
          a,
          s,
          o = e.length,
          l = new Array(2 * o);
        for (n = 0, r = 0; r < o;) if ((a = e[r++]) < 128) l[n++] = a;else if ((s = i[a]) > 4) l[n++] = 65533, r += s - 1;else {
          for (a &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && r < o;) a = a << 6 | 63 & e[r++], s--;
          s > 1 ? l[n++] = 65533 : a < 65536 ? l[n++] = a : (a -= 65536, l[n++] = 55296 | a >> 10 & 1023, l[n++] = 56320 | 1023 & a);
        }
        return l.length !== n && (l.subarray ? l = l.subarray(0, n) : l.length = n), t.applyFromCharCode(l);
      }(e = t.transformTo(r.uint8array ? "uint8array" : "array", e));
    }, t.inherits(o, a), o.prototype.processChunk = function (n) {
      var a = t.transformTo(r.uint8array ? "uint8array" : "array", n.data);
      if (this.leftOver && this.leftOver.length) {
        if (r.uint8array) {
          var s = a;
          (a = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), a.set(s, this.leftOver.length);
        } else a = this.leftOver.concat(a);
        this.leftOver = null;
      }
      var o = function (e, t) {
          var r;
          for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; r >= 0 && 128 == (192 & e[r]);) r--;
          return r < 0 || 0 === r ? t : r + i[e[r]] > t ? r : t;
        }(a),
        l = a;
      o !== a.length && (r.uint8array ? (l = a.subarray(0, o), this.leftOver = a.subarray(o, a.length)) : (l = a.slice(0, o), this.leftOver = a.slice(o, a.length))), this.push({
        data: e.utf8decode(l),
        meta: n.meta
      });
    }, o.prototype.flush = function () {
      this.leftOver && this.leftOver.length && (this.push({
        data: e.utf8decode(this.leftOver),
        meta: {}
      }), this.leftOver = null);
    }, e.Utf8DecodeWorker = o, t.inherits(l, a), l.prototype.processChunk = function (t) {
      this.push({
        data: e.utf8encode(t.data),
        meta: t.meta
      });
    }, e.Utf8EncodeWorker = l;
  }(h)), h;
}
function Oe() {
  if (Te) return Pe;
  Te = 1;
  var e = Ne(),
    t = function () {
      if (xe) return Se;
      xe = 1;
      var e = Be(),
        t = Ne();
      function r(t) {
        e.call(this, "ConvertWorker to " + t), this.destType = t;
      }
      return t.inherits(r, e), r.prototype.processChunk = function (e) {
        this.push({
          data: t.transformTo(this.destType, e.data),
          meta: e.meta
        });
      }, Se = r;
    }(),
    r = Be(),
    n = pe(),
    a = ne(),
    i = be(),
    s = null;
  if (a.nodestream) try {
    s = function () {
      if (Ce) return Ae;
      Ce = 1;
      var e = re().Readable;
      function t(t, r, n) {
        e.call(this, r), this._helper = t;
        var a = this;
        t.on("data", function (e, t) {
          a.push(e) || a._helper.pause(), n && n(t);
        }).on("error", function (e) {
          a.emit("error", e);
        }).on("end", function () {
          a.push(null);
        });
      }
      return Ne().inherits(t, e), t.prototype._read = function () {
        this._helper.resume();
      }, Ae = t;
    }();
  } catch (e) {}
  function o(t, r) {
    return new i.Promise(function (a, i) {
      var s = [],
        o = t._internalType,
        l = t._outputType,
        u = t._mimeType;
      t.on("data", function (e, t) {
        s.push(e), r && r(t);
      }).on("error", function (e) {
        s = [], i(e);
      }).on("end", function () {
        try {
          var t = function (t, r, a) {
            switch (t) {
              case "blob":
                return e.newBlob(e.transformTo("arraybuffer", r), a);
              case "base64":
                return n.encode(r);
              default:
                return e.transformTo(t, r);
            }
          }(l, function (e, t) {
            var r,
              n = 0,
              a = null,
              i = 0;
            for (r = 0; r < t.length; r++) i += t[r].length;
            switch (e) {
              case "string":
                return t.join("");
              case "array":
                return Array.prototype.concat.apply([], t);
              case "uint8array":
                for (a = new Uint8Array(i), r = 0; r < t.length; r++) a.set(t[r], n), n += t[r].length;
                return a;
              case "nodebuffer":
                return Buffer.concat(t);
              default:
                throw new Error("concat : unsupported type '" + e + "'");
            }
          }(o, s), u);
          a(t);
        } catch (e) {
          i(e);
        }
        s = [];
      }).resume();
    });
  }
  function l(n, a, i) {
    var s = a;
    switch (a) {
      case "blob":
      case "arraybuffer":
        s = "uint8array";
        break;
      case "base64":
        s = "string";
    }
    try {
      this._internalType = s, this._outputType = a, this._mimeType = i, e.checkSupport(s), this._worker = n.pipe(new t(s)), n.lock();
    } catch (e) {
      this._worker = new r("error"), this._worker.error(e);
    }
  }
  return l.prototype = {
    accumulate: function accumulate(e) {
      return o(this, e);
    },
    on: function on(t, r) {
      var n = this;
      return "data" === t ? this._worker.on(t, function (e) {
        r.call(n, e.data, e.meta);
      }) : this._worker.on(t, function () {
        e.delay(r, arguments, n);
      }), this;
    },
    resume: function resume() {
      return e.delay(this._worker.resume, [], this._worker), this;
    },
    pause: function pause() {
      return this._worker.pause(), this;
    },
    toNodejsStream: function toNodejsStream(t) {
      if (e.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
      return new s(this, {
        objectMode: "nodebuffer" !== this._outputType
      }, t);
    }
  }, Pe = l;
}
var Me,
  Ie,
  ze,
  Fe,
  je,
  Le,
  Ue,
  We,
  He,
  $e,
  Ze,
  Ve,
  qe,
  Xe = {};
function Ke() {
  return Me || (Me = 1, Xe.base64 = !1, Xe.binary = !1, Xe.dir = !1, Xe.createFolders = !0, Xe.date = null, Xe.compression = null, Xe.compressionOptions = null, Xe.comment = null, Xe.unixPermissions = null, Xe.dosPermissions = null), Xe;
}
function Ye() {
  if (ze) return Ie;
  ze = 1;
  var e = Ne(),
    t = Be();
  function r(r) {
    t.call(this, "DataWorker");
    var n = this;
    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, r.then(function (t) {
      n.dataIsReady = !0, n.data = t, n.max = t && t.length || 0, n.type = e.getTypeOf(t), n.isPaused || n._tickAndRepeat();
    }, function (e) {
      n.error(e);
    });
  }
  return e.inherits(r, t), r.prototype.cleanUp = function () {
    t.prototype.cleanUp.call(this), this.data = null;
  }, r.prototype.resume = function () {
    return !!t.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, e.delay(this._tickAndRepeat, [], this)), !0);
  }, r.prototype._tickAndRepeat = function () {
    this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (e.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
  }, r.prototype._tick = function () {
    if (this.isPaused || this.isFinished) return !1;
    var e = null,
      t = Math.min(this.max, this.index + 16384);
    if (this.index >= this.max) return this.end();
    switch (this.type) {
      case "string":
        e = this.data.substring(this.index, t);
        break;
      case "uint8array":
        e = this.data.subarray(this.index, t);
        break;
      case "array":
      case "nodebuffer":
        e = this.data.slice(this.index, t);
    }
    return this.index = t, this.push({
      data: e,
      meta: {
        percent: this.max ? this.index / this.max * 100 : 0
      }
    });
  }, Ie = r;
}
function Je() {
  if (je) return Fe;
  je = 1;
  var e = Ne();
  var t = function () {
    for (var e, t = [], r = 0; r < 256; r++) {
      e = r;
      for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
      t[r] = e;
    }
    return t;
  }();
  return Fe = function Fe(r, n) {
    return void 0 !== r && r.length ? "string" !== e.getTypeOf(r) ? function (e, r, n, a) {
      var i = t,
        s = a + n;
      e ^= -1;
      for (var o = a; o < s; o++) e = e >>> 8 ^ i[255 & (e ^ r[o])];
      return -1 ^ e;
    }(0 | n, r, r.length, 0) : function (e, r, n, a) {
      var i = t,
        s = a + n;
      e ^= -1;
      for (var o = a; o < s; o++) e = e >>> 8 ^ i[255 & (e ^ r.charCodeAt(o))];
      return -1 ^ e;
    }(0 | n, r, r.length, 0) : 0;
  };
}
function Ge() {
  if (Ue) return Le;
  Ue = 1;
  var e = Be(),
    t = Je();
  function r() {
    e.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
  }
  return Ne().inherits(r, e), r.prototype.processChunk = function (e) {
    this.streamInfo.crc32 = t(e.data, this.streamInfo.crc32 || 0), this.push(e);
  }, Le = r;
}
function Qe() {
  if (Ze) return $e;
  Ze = 1;
  var e = be(),
    t = Ye(),
    r = Ge(),
    n = function () {
      if (He) return We;
      He = 1;
      var e = Ne(),
        t = Be();
      function r(e) {
        t.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
      }
      return e.inherits(r, t), r.prototype.processChunk = function (e) {
        if (e) {
          var r = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = r + e.data.length;
        }
        t.prototype.processChunk.call(this, e);
      }, We = r;
    }();
  function a(e, t, r, n, a) {
    this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r, this.compression = n, this.compressedContent = a;
  }
  return a.prototype = {
    getContentWorker: function getContentWorker() {
      var r = new t(e.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new n("data_length")),
        a = this;
      return r.on("end", function () {
        if (this.streamInfo.data_length !== a.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
      }), r;
    },
    getCompressedWorker: function getCompressedWorker() {
      return new t(e.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
    }
  }, a.createWorkerFrom = function (e, t, a) {
    return e.pipe(new r()).pipe(new n("uncompressedSize")).pipe(t.compressWorker(a)).pipe(new n("compressedSize")).withStreamInfo("compression", t);
  }, $e = a;
}
var et,
  tt = {},
  rt = {},
  nt = {},
  at = {};
function it() {
  return et || (et = 1, function (e) {
    var t = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.assign = function (e) {
      for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
        var n = t.shift();
        if (n) {
          if ("object" != _typeof(n)) throw new TypeError(n + "must be non-object");
          for (var a in n) r(n, a) && (e[a] = n[a]);
        }
      }
      return e;
    }, e.shrinkBuf = function (e, t) {
      return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
    };
    var n = {
        arraySet: function arraySet(e, t, r, n, a) {
          if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), a);else for (var i = 0; i < n; i++) e[a + i] = t[r + i];
        },
        flattenChunks: function flattenChunks(e) {
          var t, r, n, a, i, s;
          for (n = 0, t = 0, r = e.length; t < r; t++) n += e[t].length;
          for (s = new Uint8Array(n), a = 0, t = 0, r = e.length; t < r; t++) i = e[t], s.set(i, a), a += i.length;
          return s;
        }
      },
      a = {
        arraySet: function arraySet(e, t, r, n, a) {
          for (var i = 0; i < n; i++) e[a + i] = t[r + i];
        },
        flattenChunks: function flattenChunks(e) {
          return [].concat.apply([], e);
        }
      };
    e.setTyped = function (t) {
      t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, n)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, a));
    }, e.setTyped(t);
  }(at)), at;
}
var st,
  ot,
  lt,
  ut,
  ct,
  ht,
  dt,
  ft,
  pt = {},
  mt = {},
  gt = {};
function bt() {
  if (st) return gt;
  st = 1;
  var e = it(),
    t = 0,
    r = 1;
  function n(e) {
    for (var t = e.length; --t >= 0;) e[t] = 0;
  }
  var a = 0,
    i = 29,
    s = 256,
    o = s + 1 + i,
    l = 30,
    u = 19,
    c = 2 * o + 1,
    h = 15,
    d = 16,
    f = 7,
    p = 256,
    m = 16,
    g = 17,
    b = 18,
    y = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
    v = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    _ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    w = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    k = new Array(2 * (o + 2));
  n(k);
  var S = new Array(2 * l);
  n(S);
  var x = new Array(512);
  n(x);
  var A = new Array(256);
  n(A);
  var C = new Array(i);
  n(C);
  var P,
    T,
    E,
    D = new Array(l);
  function N(e, t, r, n, a) {
    this.static_tree = e, this.extra_bits = t, this.extra_base = r, this.elems = n, this.max_length = a, this.has_stree = e && e.length;
  }
  function B(e, t) {
    this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
  }
  function R(e) {
    return e < 256 ? x[e] : x[256 + (e >>> 7)];
  }
  function O(e, t) {
    e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
  }
  function M(e, t, r) {
    e.bi_valid > d - r ? (e.bi_buf |= t << e.bi_valid & 65535, O(e, e.bi_buf), e.bi_buf = t >> d - e.bi_valid, e.bi_valid += r - d) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r);
  }
  function I(e, t, r) {
    M(e, r[2 * t], r[2 * t + 1]);
  }
  function z(e, t) {
    var r = 0;
    do {
      r |= 1 & e, e >>>= 1, r <<= 1;
    } while (--t > 0);
    return r >>> 1;
  }
  function F(e, t, r) {
    var n,
      a,
      i = new Array(h + 1),
      s = 0;
    for (n = 1; n <= h; n++) i[n] = s = s + r[n - 1] << 1;
    for (a = 0; a <= t; a++) {
      var o = e[2 * a + 1];
      0 !== o && (e[2 * a] = z(i[o]++, o));
    }
  }
  function j(e) {
    var t;
    for (t = 0; t < o; t++) e.dyn_ltree[2 * t] = 0;
    for (t = 0; t < l; t++) e.dyn_dtree[2 * t] = 0;
    for (t = 0; t < u; t++) e.bl_tree[2 * t] = 0;
    e.dyn_ltree[2 * p] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
  }
  function L(e) {
    e.bi_valid > 8 ? O(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
  }
  function U(e, t, r, n) {
    var a = 2 * t,
      i = 2 * r;
    return e[a] < e[i] || e[a] === e[i] && n[t] <= n[r];
  }
  function W(e, t, r) {
    for (var n = e.heap[r], a = r << 1; a <= e.heap_len && (a < e.heap_len && U(t, e.heap[a + 1], e.heap[a], e.depth) && a++, !U(t, n, e.heap[a], e.depth));) e.heap[r] = e.heap[a], r = a, a <<= 1;
    e.heap[r] = n;
  }
  function H(e, t, r) {
    var n,
      a,
      i,
      o,
      l = 0;
    if (0 !== e.last_lit) do {
      n = e.pending_buf[e.d_buf + 2 * l] << 8 | e.pending_buf[e.d_buf + 2 * l + 1], a = e.pending_buf[e.l_buf + l], l++, 0 === n ? I(e, a, t) : (I(e, (i = A[a]) + s + 1, t), 0 !== (o = y[i]) && M(e, a -= C[i], o), I(e, i = R(--n), r), 0 !== (o = v[i]) && M(e, n -= D[i], o));
    } while (l < e.last_lit);
    I(e, p, t);
  }
  function $(e, t) {
    var r,
      n,
      a,
      i = t.dyn_tree,
      s = t.stat_desc.static_tree,
      o = t.stat_desc.has_stree,
      l = t.stat_desc.elems,
      u = -1;
    for (e.heap_len = 0, e.heap_max = c, r = 0; r < l; r++) 0 !== i[2 * r] ? (e.heap[++e.heap_len] = u = r, e.depth[r] = 0) : i[2 * r + 1] = 0;
    for (; e.heap_len < 2;) i[2 * (a = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1, e.depth[a] = 0, e.opt_len--, o && (e.static_len -= s[2 * a + 1]);
    for (t.max_code = u, r = e.heap_len >> 1; r >= 1; r--) W(e, i, r);
    a = l;
    do {
      r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], W(e, i, 1), n = e.heap[1], e.heap[--e.heap_max] = r, e.heap[--e.heap_max] = n, i[2 * a] = i[2 * r] + i[2 * n], e.depth[a] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1, i[2 * r + 1] = i[2 * n + 1] = a, e.heap[1] = a++, W(e, i, 1);
    } while (e.heap_len >= 2);
    e.heap[--e.heap_max] = e.heap[1], function (e, t) {
      var r,
        n,
        a,
        i,
        s,
        o,
        l = t.dyn_tree,
        u = t.max_code,
        d = t.stat_desc.static_tree,
        f = t.stat_desc.has_stree,
        p = t.stat_desc.extra_bits,
        m = t.stat_desc.extra_base,
        g = t.stat_desc.max_length,
        b = 0;
      for (i = 0; i <= h; i++) e.bl_count[i] = 0;
      for (l[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < c; r++) (i = l[2 * l[2 * (n = e.heap[r]) + 1] + 1] + 1) > g && (i = g, b++), l[2 * n + 1] = i, n > u || (e.bl_count[i]++, s = 0, n >= m && (s = p[n - m]), o = l[2 * n], e.opt_len += o * (i + s), f && (e.static_len += o * (d[2 * n + 1] + s)));
      if (0 !== b) {
        do {
          for (i = g - 1; 0 === e.bl_count[i];) i--;
          e.bl_count[i]--, e.bl_count[i + 1] += 2, e.bl_count[g]--, b -= 2;
        } while (b > 0);
        for (i = g; 0 !== i; i--) for (n = e.bl_count[i]; 0 !== n;) (a = e.heap[--r]) > u || (l[2 * a + 1] !== i && (e.opt_len += (i - l[2 * a + 1]) * l[2 * a], l[2 * a + 1] = i), n--);
      }
    }(e, t), F(i, u, e.bl_count);
  }
  function Z(e, t, r) {
    var n,
      a,
      i = -1,
      s = t[1],
      o = 0,
      l = 7,
      u = 4;
    for (0 === s && (l = 138, u = 3), t[2 * (r + 1) + 1] = 65535, n = 0; n <= r; n++) a = s, s = t[2 * (n + 1) + 1], ++o < l && a === s || (o < u ? e.bl_tree[2 * a] += o : 0 !== a ? (a !== i && e.bl_tree[2 * a]++, e.bl_tree[2 * m]++) : o <= 10 ? e.bl_tree[2 * g]++ : e.bl_tree[2 * b]++, o = 0, i = a, 0 === s ? (l = 138, u = 3) : a === s ? (l = 6, u = 3) : (l = 7, u = 4));
  }
  function V(e, t, r) {
    var n,
      a,
      i = -1,
      s = t[1],
      o = 0,
      l = 7,
      u = 4;
    for (0 === s && (l = 138, u = 3), n = 0; n <= r; n++) if (a = s, s = t[2 * (n + 1) + 1], !(++o < l && a === s)) {
      if (o < u) do {
        I(e, a, e.bl_tree);
      } while (0 != --o);else 0 !== a ? (a !== i && (I(e, a, e.bl_tree), o--), I(e, m, e.bl_tree), M(e, o - 3, 2)) : o <= 10 ? (I(e, g, e.bl_tree), M(e, o - 3, 3)) : (I(e, b, e.bl_tree), M(e, o - 11, 7));
      o = 0, i = a, 0 === s ? (l = 138, u = 3) : a === s ? (l = 6, u = 3) : (l = 7, u = 4);
    }
  }
  n(D);
  var q = !1;
  function X(t, r, n, i) {
    M(t, (a << 1) + (i ? 1 : 0), 3), function (t, r, n, a) {
      L(t), a && (O(t, n), O(t, ~n)), e.arraySet(t.pending_buf, t.window, r, n, t.pending), t.pending += n;
    }(t, r, n, !0);
  }
  return gt._tr_init = function (e) {
    q || (!function () {
      var e,
        t,
        r,
        n,
        a,
        c = new Array(h + 1);
      for (r = 0, n = 0; n < i - 1; n++) for (C[n] = r, e = 0; e < 1 << y[n]; e++) A[r++] = n;
      for (A[r - 1] = n, a = 0, n = 0; n < 16; n++) for (D[n] = a, e = 0; e < 1 << v[n]; e++) x[a++] = n;
      for (a >>= 7; n < l; n++) for (D[n] = a << 7, e = 0; e < 1 << v[n] - 7; e++) x[256 + a++] = n;
      for (t = 0; t <= h; t++) c[t] = 0;
      for (e = 0; e <= 143;) k[2 * e + 1] = 8, e++, c[8]++;
      for (; e <= 255;) k[2 * e + 1] = 9, e++, c[9]++;
      for (; e <= 279;) k[2 * e + 1] = 7, e++, c[7]++;
      for (; e <= 287;) k[2 * e + 1] = 8, e++, c[8]++;
      for (F(k, o + 1, c), e = 0; e < l; e++) S[2 * e + 1] = 5, S[2 * e] = z(e, 5);
      P = new N(k, y, s + 1, o, h), T = new N(S, v, 0, l, h), E = new N(new Array(0), _, 0, u, f);
    }(), q = !0), e.l_desc = new B(e.dyn_ltree, P), e.d_desc = new B(e.dyn_dtree, T), e.bl_desc = new B(e.bl_tree, E), e.bi_buf = 0, e.bi_valid = 0, j(e);
  }, gt._tr_stored_block = X, gt._tr_flush_block = function (e, n, a, i) {
    var o,
      l,
      c = 0;
    e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function (e) {
      var n,
        a = 4093624447;
      for (n = 0; n <= 31; n++, a >>>= 1) if (1 & a && 0 !== e.dyn_ltree[2 * n]) return t;
      if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return r;
      for (n = 32; n < s; n++) if (0 !== e.dyn_ltree[2 * n]) return r;
      return t;
    }(e)), $(e, e.l_desc), $(e, e.d_desc), c = function (e) {
      var t;
      for (Z(e, e.dyn_ltree, e.l_desc.max_code), Z(e, e.dyn_dtree, e.d_desc.max_code), $(e, e.bl_desc), t = u - 1; t >= 3 && 0 === e.bl_tree[2 * w[t] + 1]; t--);
      return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
    }(e), o = e.opt_len + 3 + 7 >>> 3, (l = e.static_len + 3 + 7 >>> 3) <= o && (o = l)) : o = l = a + 5, a + 4 <= o && -1 !== n ? X(e, n, a, i) : 4 === e.strategy || l === o ? (M(e, 2 + (i ? 1 : 0), 3), H(e, k, S)) : (M(e, 4 + (i ? 1 : 0), 3), function (e, t, r, n) {
      var a;
      for (M(e, t - 257, 5), M(e, r - 1, 5), M(e, n - 4, 4), a = 0; a < n; a++) M(e, e.bl_tree[2 * w[a] + 1], 3);
      V(e, e.dyn_ltree, t - 1), V(e, e.dyn_dtree, r - 1);
    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), H(e, e.dyn_ltree, e.dyn_dtree)), j(e), i && L(e);
  }, gt._tr_tally = function (e, t, r) {
    return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & r, e.last_lit++, 0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++, t--, e.dyn_ltree[2 * (A[r] + s + 1)]++, e.dyn_dtree[2 * R(t)]++), e.last_lit === e.lit_bufsize - 1;
  }, gt._tr_align = function (e) {
    M(e, 2, 3), I(e, p, k), function (e) {
      16 === e.bi_valid ? (O(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
    }(e);
  }, gt;
}
function yt() {
  if (lt) return ot;
  return lt = 1, ot = function ot(e, t, r, n) {
    for (var a = 65535 & e | 0, i = e >>> 16 & 65535 | 0, s = 0; 0 !== r;) {
      r -= s = r > 2e3 ? 2e3 : r;
      do {
        i = i + (a = a + t[n++] | 0) | 0;
      } while (--s);
      a %= 65521, i %= 65521;
    }
    return a | i << 16 | 0;
  };
}
function vt() {
  if (ct) return ut;
  ct = 1;
  var e = function () {
    for (var e, t = [], r = 0; r < 256; r++) {
      e = r;
      for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
      t[r] = e;
    }
    return t;
  }();
  return ut = function ut(t, r, n, a) {
    var i = e,
      s = a + n;
    t ^= -1;
    for (var o = a; o < s; o++) t = t >>> 8 ^ i[255 & (t ^ r[o])];
    return -1 ^ t;
  };
}
function _t() {
  return dt ? ht : (dt = 1, ht = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  });
}
function wt() {
  if (ft) return mt;
  ft = 1;
  var e,
    t = it(),
    r = bt(),
    n = yt(),
    a = vt(),
    i = _t(),
    s = 0,
    o = 4,
    l = 0,
    u = -2,
    c = -1,
    h = 4,
    d = 2,
    f = 8,
    p = 9,
    m = 286,
    g = 30,
    b = 19,
    y = 2 * m + 1,
    v = 15,
    _ = 3,
    w = 258,
    k = w + _ + 1,
    S = 42,
    x = 103,
    A = 113,
    C = 666,
    P = 1,
    T = 2,
    E = 3,
    D = 4;
  function N(e, t) {
    return e.msg = i[t], t;
  }
  function B(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
  }
  function R(e) {
    for (var t = e.length; --t >= 0;) e[t] = 0;
  }
  function O(e) {
    var r = e.state,
      n = r.pending;
    n > e.avail_out && (n = e.avail_out), 0 !== n && (t.arraySet(e.output, r.pending_buf, r.pending_out, n, e.next_out), e.next_out += n, r.pending_out += n, e.total_out += n, e.avail_out -= n, r.pending -= n, 0 === r.pending && (r.pending_out = 0));
  }
  function M(e, t) {
    r._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, O(e.strm);
  }
  function I(e, t) {
    e.pending_buf[e.pending++] = t;
  }
  function z(e, t) {
    e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
  }
  function F(e, t) {
    var r,
      n,
      a = e.max_chain_length,
      i = e.strstart,
      s = e.prev_length,
      o = e.nice_match,
      l = e.strstart > e.w_size - k ? e.strstart - (e.w_size - k) : 0,
      u = e.window,
      c = e.w_mask,
      h = e.prev,
      d = e.strstart + w,
      f = u[i + s - 1],
      p = u[i + s];
    e.prev_length >= e.good_match && (a >>= 2), o > e.lookahead && (o = e.lookahead);
    do {
      if (u[(r = t) + s] === p && u[r + s - 1] === f && u[r] === u[i] && u[++r] === u[i + 1]) {
        i += 2, r++;
        do {} while (u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && i < d);
        if (n = w - (d - i), i = d - w, n > s) {
          if (e.match_start = t, s = n, n >= o) break;
          f = u[i + s - 1], p = u[i + s];
        }
      }
    } while ((t = h[t & c]) > l && 0 != --a);
    return s <= e.lookahead ? s : e.lookahead;
  }
  function j(e) {
    var r,
      i,
      s,
      o,
      l,
      u,
      c,
      h,
      d,
      f,
      p = e.w_size;
    do {
      if (o = e.window_size - e.lookahead - e.strstart, e.strstart >= p + (p - k)) {
        t.arraySet(e.window, e.window, p, p, 0), e.match_start -= p, e.strstart -= p, e.block_start -= p, r = i = e.hash_size;
        do {
          s = e.head[--r], e.head[r] = s >= p ? s - p : 0;
        } while (--i);
        r = i = p;
        do {
          s = e.prev[--r], e.prev[r] = s >= p ? s - p : 0;
        } while (--i);
        o += p;
      }
      if (0 === e.strm.avail_in) break;
      if (u = e.strm, c = e.window, h = e.strstart + e.lookahead, d = o, f = void 0, (f = u.avail_in) > d && (f = d), i = 0 === f ? 0 : (u.avail_in -= f, t.arraySet(c, u.input, u.next_in, f, h), 1 === u.state.wrap ? u.adler = n(u.adler, c, f, h) : 2 === u.state.wrap && (u.adler = a(u.adler, c, f, h)), u.next_in += f, u.total_in += f, f), e.lookahead += i, e.lookahead + e.insert >= _) for (l = e.strstart - e.insert, e.ins_h = e.window[l], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + _ - 1]) & e.hash_mask, e.prev[l & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = l, l++, e.insert--, !(e.lookahead + e.insert < _)););
    } while (e.lookahead < k && 0 !== e.strm.avail_in);
  }
  function L(e, t) {
    for (var n, a;;) {
      if (e.lookahead < k) {
        if (j(e), e.lookahead < k && t === s) return P;
        if (0 === e.lookahead) break;
      }
      if (n = 0, e.lookahead >= _ && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + _ - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== n && e.strstart - n <= e.w_size - k && (e.match_length = F(e, n)), e.match_length >= _) {
        if (a = r._tr_tally(e, e.strstart - e.match_start, e.match_length - _), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= _) {
          e.match_length--;
          do {
            e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + _ - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
          } while (0 != --e.match_length);
          e.strstart++;
        } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
      } else a = r._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
      if (a && (M(e, !1), 0 === e.strm.avail_out)) return P;
    }
    return e.insert = e.strstart < _ - 1 ? e.strstart : _ - 1, t === o ? (M(e, !0), 0 === e.strm.avail_out ? E : D) : e.last_lit && (M(e, !1), 0 === e.strm.avail_out) ? P : T;
  }
  function U(e, t) {
    for (var n, a, i;;) {
      if (e.lookahead < k) {
        if (j(e), e.lookahead < k && t === s) return P;
        if (0 === e.lookahead) break;
      }
      if (n = 0, e.lookahead >= _ && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + _ - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = _ - 1, 0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - k && (e.match_length = F(e, n), e.match_length <= 5 && (1 === e.strategy || e.match_length === _ && e.strstart - e.match_start > 4096) && (e.match_length = _ - 1)), e.prev_length >= _ && e.match_length <= e.prev_length) {
        i = e.strstart + e.lookahead - _, a = r._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - _), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
        do {
          ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + _ - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
        } while (0 != --e.prev_length);
        if (e.match_available = 0, e.match_length = _ - 1, e.strstart++, a && (M(e, !1), 0 === e.strm.avail_out)) return P;
      } else if (e.match_available) {
        if ((a = r._tr_tally(e, 0, e.window[e.strstart - 1])) && M(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return P;
      } else e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (a = r._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < _ - 1 ? e.strstart : _ - 1, t === o ? (M(e, !0), 0 === e.strm.avail_out ? E : D) : e.last_lit && (M(e, !1), 0 === e.strm.avail_out) ? P : T;
  }
  function W(e, t, r, n, a) {
    this.good_length = e, this.max_lazy = t, this.nice_length = r, this.max_chain = n, this.func = a;
  }
  function H() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = f, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new t.Buf16(2 * y), this.dyn_dtree = new t.Buf16(2 * (2 * g + 1)), this.bl_tree = new t.Buf16(2 * (2 * b + 1)), R(this.dyn_ltree), R(this.dyn_dtree), R(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new t.Buf16(v + 1), this.heap = new t.Buf16(2 * m + 1), R(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new t.Buf16(2 * m + 1), R(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function $(e) {
    var t;
    return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = d, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? S : A, e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = s, r._tr_init(t), l) : N(e, u);
  }
  function Z(t) {
    var r,
      n = $(t);
    return n === l && ((r = t.state).window_size = 2 * r.w_size, R(r.head), r.max_lazy_match = e[r.level].max_lazy, r.good_match = e[r.level].good_length, r.nice_match = e[r.level].nice_length, r.max_chain_length = e[r.level].max_chain, r.strstart = 0, r.block_start = 0, r.lookahead = 0, r.insert = 0, r.match_length = r.prev_length = _ - 1, r.match_available = 0, r.ins_h = 0), n;
  }
  function V(e, r, n, a, i, s) {
    if (!e) return u;
    var o = 1;
    if (r === c && (r = 6), a < 0 ? (o = 0, a = -a) : a > 15 && (o = 2, a -= 16), i < 1 || i > p || n !== f || a < 8 || a > 15 || r < 0 || r > 9 || s < 0 || s > h) return N(e, u);
    8 === a && (a = 9);
    var l = new H();
    return e.state = l, l.strm = e, l.wrap = o, l.gzhead = null, l.w_bits = a, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = i + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + _ - 1) / _), l.window = new t.Buf8(2 * l.w_size), l.head = new t.Buf16(l.hash_size), l.prev = new t.Buf16(l.w_size), l.lit_bufsize = 1 << i + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new t.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = r, l.strategy = s, l.method = n, Z(e);
  }
  return e = [new W(0, 0, 0, 0, function (e, t) {
    var r = 65535;
    for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
      if (e.lookahead <= 1) {
        if (j(e), 0 === e.lookahead && t === s) return P;
        if (0 === e.lookahead) break;
      }
      e.strstart += e.lookahead, e.lookahead = 0;
      var n = e.block_start + r;
      if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n, e.strstart = n, M(e, !1), 0 === e.strm.avail_out)) return P;
      if (e.strstart - e.block_start >= e.w_size - k && (M(e, !1), 0 === e.strm.avail_out)) return P;
    }
    return e.insert = 0, t === o ? (M(e, !0), 0 === e.strm.avail_out ? E : D) : (e.strstart > e.block_start && (M(e, !1), e.strm.avail_out), P);
  }), new W(4, 4, 8, 4, L), new W(4, 5, 16, 8, L), new W(4, 6, 32, 32, L), new W(4, 4, 16, 16, U), new W(8, 16, 32, 32, U), new W(8, 16, 128, 128, U), new W(8, 32, 128, 256, U), new W(32, 128, 258, 1024, U), new W(32, 258, 258, 4096, U)], mt.deflateInit = function (e, t) {
    return V(e, t, f, 15, 8, 0);
  }, mt.deflateInit2 = V, mt.deflateReset = Z, mt.deflateResetKeep = $, mt.deflateSetHeader = function (e, t) {
    return e && e.state ? 2 !== e.state.wrap ? u : (e.state.gzhead = t, l) : u;
  }, mt.deflate = function (t, n) {
    var i, c, h, d;
    if (!t || !t.state || n > 5 || n < 0) return t ? N(t, u) : u;
    if (c = t.state, !t.output || !t.input && 0 !== t.avail_in || c.status === C && n !== o) return N(t, 0 === t.avail_out ? -5 : u);
    if (c.strm = t, i = c.last_flush, c.last_flush = n, c.status === S) if (2 === c.wrap) t.adler = 0, I(c, 31), I(c, 139), I(c, 8), c.gzhead ? (I(c, (c.gzhead.text ? 1 : 0) + (c.gzhead.hcrc ? 2 : 0) + (c.gzhead.extra ? 4 : 0) + (c.gzhead.name ? 8 : 0) + (c.gzhead.comment ? 16 : 0)), I(c, 255 & c.gzhead.time), I(c, c.gzhead.time >> 8 & 255), I(c, c.gzhead.time >> 16 & 255), I(c, c.gzhead.time >> 24 & 255), I(c, 9 === c.level ? 2 : c.strategy >= 2 || c.level < 2 ? 4 : 0), I(c, 255 & c.gzhead.os), c.gzhead.extra && c.gzhead.extra.length && (I(c, 255 & c.gzhead.extra.length), I(c, c.gzhead.extra.length >> 8 & 255)), c.gzhead.hcrc && (t.adler = a(t.adler, c.pending_buf, c.pending, 0)), c.gzindex = 0, c.status = 69) : (I(c, 0), I(c, 0), I(c, 0), I(c, 0), I(c, 0), I(c, 9 === c.level ? 2 : c.strategy >= 2 || c.level < 2 ? 4 : 0), I(c, 3), c.status = A);else {
      var p = f + (c.w_bits - 8 << 4) << 8;
      p |= (c.strategy >= 2 || c.level < 2 ? 0 : c.level < 6 ? 1 : 6 === c.level ? 2 : 3) << 6, 0 !== c.strstart && (p |= 32), p += 31 - p % 31, c.status = A, z(c, p), 0 !== c.strstart && (z(c, t.adler >>> 16), z(c, 65535 & t.adler)), t.adler = 1;
    }
    if (69 === c.status) if (c.gzhead.extra) {
      for (h = c.pending; c.gzindex < (65535 & c.gzhead.extra.length) && (c.pending !== c.pending_buf_size || (c.gzhead.hcrc && c.pending > h && (t.adler = a(t.adler, c.pending_buf, c.pending - h, h)), O(t), h = c.pending, c.pending !== c.pending_buf_size));) I(c, 255 & c.gzhead.extra[c.gzindex]), c.gzindex++;
      c.gzhead.hcrc && c.pending > h && (t.adler = a(t.adler, c.pending_buf, c.pending - h, h)), c.gzindex === c.gzhead.extra.length && (c.gzindex = 0, c.status = 73);
    } else c.status = 73;
    if (73 === c.status) if (c.gzhead.name) {
      h = c.pending;
      do {
        if (c.pending === c.pending_buf_size && (c.gzhead.hcrc && c.pending > h && (t.adler = a(t.adler, c.pending_buf, c.pending - h, h)), O(t), h = c.pending, c.pending === c.pending_buf_size)) {
          d = 1;
          break;
        }
        d = c.gzindex < c.gzhead.name.length ? 255 & c.gzhead.name.charCodeAt(c.gzindex++) : 0, I(c, d);
      } while (0 !== d);
      c.gzhead.hcrc && c.pending > h && (t.adler = a(t.adler, c.pending_buf, c.pending - h, h)), 0 === d && (c.gzindex = 0, c.status = 91);
    } else c.status = 91;
    if (91 === c.status) if (c.gzhead.comment) {
      h = c.pending;
      do {
        if (c.pending === c.pending_buf_size && (c.gzhead.hcrc && c.pending > h && (t.adler = a(t.adler, c.pending_buf, c.pending - h, h)), O(t), h = c.pending, c.pending === c.pending_buf_size)) {
          d = 1;
          break;
        }
        d = c.gzindex < c.gzhead.comment.length ? 255 & c.gzhead.comment.charCodeAt(c.gzindex++) : 0, I(c, d);
      } while (0 !== d);
      c.gzhead.hcrc && c.pending > h && (t.adler = a(t.adler, c.pending_buf, c.pending - h, h)), 0 === d && (c.status = x);
    } else c.status = x;
    if (c.status === x && (c.gzhead.hcrc ? (c.pending + 2 > c.pending_buf_size && O(t), c.pending + 2 <= c.pending_buf_size && (I(c, 255 & t.adler), I(c, t.adler >> 8 & 255), t.adler = 0, c.status = A)) : c.status = A), 0 !== c.pending) {
      if (O(t), 0 === t.avail_out) return c.last_flush = -1, l;
    } else if (0 === t.avail_in && B(n) <= B(i) && n !== o) return N(t, -5);
    if (c.status === C && 0 !== t.avail_in) return N(t, -5);
    if (0 !== t.avail_in || 0 !== c.lookahead || n !== s && c.status !== C) {
      var m = 2 === c.strategy ? function (e, t) {
        for (var n;;) {
          if (0 === e.lookahead && (j(e), 0 === e.lookahead)) {
            if (t === s) return P;
            break;
          }
          if (e.match_length = 0, n = r._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (M(e, !1), 0 === e.strm.avail_out)) return P;
        }
        return e.insert = 0, t === o ? (M(e, !0), 0 === e.strm.avail_out ? E : D) : e.last_lit && (M(e, !1), 0 === e.strm.avail_out) ? P : T;
      }(c, n) : 3 === c.strategy ? function (e, t) {
        for (var n, a, i, l, u = e.window;;) {
          if (e.lookahead <= w) {
            if (j(e), e.lookahead <= w && t === s) return P;
            if (0 === e.lookahead) break;
          }
          if (e.match_length = 0, e.lookahead >= _ && e.strstart > 0 && (a = u[i = e.strstart - 1]) === u[++i] && a === u[++i] && a === u[++i]) {
            l = e.strstart + w;
            do {} while (a === u[++i] && a === u[++i] && a === u[++i] && a === u[++i] && a === u[++i] && a === u[++i] && a === u[++i] && a === u[++i] && i < l);
            e.match_length = w - (l - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
          }
          if (e.match_length >= _ ? (n = r._tr_tally(e, 1, e.match_length - _), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = r._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (M(e, !1), 0 === e.strm.avail_out)) return P;
        }
        return e.insert = 0, t === o ? (M(e, !0), 0 === e.strm.avail_out ? E : D) : e.last_lit && (M(e, !1), 0 === e.strm.avail_out) ? P : T;
      }(c, n) : e[c.level].func(c, n);
      if (m !== E && m !== D || (c.status = C), m === P || m === E) return 0 === t.avail_out && (c.last_flush = -1), l;
      if (m === T && (1 === n ? r._tr_align(c) : 5 !== n && (r._tr_stored_block(c, 0, 0, !1), 3 === n && (R(c.head), 0 === c.lookahead && (c.strstart = 0, c.block_start = 0, c.insert = 0))), O(t), 0 === t.avail_out)) return c.last_flush = -1, l;
    }
    return n !== o ? l : c.wrap <= 0 ? 1 : (2 === c.wrap ? (I(c, 255 & t.adler), I(c, t.adler >> 8 & 255), I(c, t.adler >> 16 & 255), I(c, t.adler >> 24 & 255), I(c, 255 & t.total_in), I(c, t.total_in >> 8 & 255), I(c, t.total_in >> 16 & 255), I(c, t.total_in >> 24 & 255)) : (z(c, t.adler >>> 16), z(c, 65535 & t.adler)), O(t), c.wrap > 0 && (c.wrap = -c.wrap), 0 !== c.pending ? l : 1);
  }, mt.deflateEnd = function (e) {
    var t;
    return e && e.state ? (t = e.state.status) !== S && 69 !== t && 73 !== t && 91 !== t && t !== x && t !== A && t !== C ? N(e, u) : (e.state = null, t === A ? N(e, -3) : l) : u;
  }, mt.deflateSetDictionary = function (e, r) {
    var a,
      i,
      s,
      o,
      c,
      h,
      d,
      f,
      p = r.length;
    if (!e || !e.state) return u;
    if (2 === (o = (a = e.state).wrap) || 1 === o && a.status !== S || a.lookahead) return u;
    for (1 === o && (e.adler = n(e.adler, r, p, 0)), a.wrap = 0, p >= a.w_size && (0 === o && (R(a.head), a.strstart = 0, a.block_start = 0, a.insert = 0), f = new t.Buf8(a.w_size), t.arraySet(f, r, p - a.w_size, a.w_size, 0), r = f, p = a.w_size), c = e.avail_in, h = e.next_in, d = e.input, e.avail_in = p, e.next_in = 0, e.input = r, j(a); a.lookahead >= _;) {
      i = a.strstart, s = a.lookahead - (_ - 1);
      do {
        a.ins_h = (a.ins_h << a.hash_shift ^ a.window[i + _ - 1]) & a.hash_mask, a.prev[i & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = i, i++;
      } while (--s);
      a.strstart = i, a.lookahead = _ - 1, j(a);
    }
    return a.strstart += a.lookahead, a.block_start = a.strstart, a.insert = a.lookahead, a.lookahead = 0, a.match_length = a.prev_length = _ - 1, a.match_available = 0, e.next_in = h, e.input = d, e.avail_in = c, a.wrap = o, l;
  }, mt.deflateInfo = "pako deflate (from Nodeca project)", mt;
}
var kt,
  St,
  xt,
  At,
  Ct = {};
function Pt() {
  if (kt) return Ct;
  kt = 1;
  var e = it(),
    t = !0,
    r = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (e) {
    t = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (e) {
    r = !1;
  }
  for (var n = new e.Buf8(256), a = 0; a < 256; a++) n[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
  function i(n, a) {
    if (a < 65534 && (n.subarray && r || !n.subarray && t)) return String.fromCharCode.apply(null, e.shrinkBuf(n, a));
    for (var i = "", s = 0; s < a; s++) i += String.fromCharCode(n[s]);
    return i;
  }
  return n[254] = n[254] = 1, Ct.string2buf = function (t) {
    var r,
      n,
      a,
      i,
      s,
      o = t.length,
      l = 0;
    for (i = 0; i < o; i++) 55296 == (64512 & (n = t.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (a = t.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (a - 56320), i++), l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    for (r = new e.Buf8(l), s = 0, i = 0; s < l; i++) 55296 == (64512 & (n = t.charCodeAt(i))) && i + 1 < o && 56320 == (64512 & (a = t.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (a - 56320), i++), n < 128 ? r[s++] = n : n < 2048 ? (r[s++] = 192 | n >>> 6, r[s++] = 128 | 63 & n) : n < 65536 ? (r[s++] = 224 | n >>> 12, r[s++] = 128 | n >>> 6 & 63, r[s++] = 128 | 63 & n) : (r[s++] = 240 | n >>> 18, r[s++] = 128 | n >>> 12 & 63, r[s++] = 128 | n >>> 6 & 63, r[s++] = 128 | 63 & n);
    return r;
  }, Ct.buf2binstring = function (e) {
    return i(e, e.length);
  }, Ct.binstring2buf = function (t) {
    for (var r = new e.Buf8(t.length), n = 0, a = r.length; n < a; n++) r[n] = t.charCodeAt(n);
    return r;
  }, Ct.buf2string = function (e, t) {
    var r,
      a,
      s,
      o,
      l = t || e.length,
      u = new Array(2 * l);
    for (a = 0, r = 0; r < l;) if ((s = e[r++]) < 128) u[a++] = s;else if ((o = n[s]) > 4) u[a++] = 65533, r += o - 1;else {
      for (s &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < l;) s = s << 6 | 63 & e[r++], o--;
      o > 1 ? u[a++] = 65533 : s < 65536 ? u[a++] = s : (s -= 65536, u[a++] = 55296 | s >> 10 & 1023, u[a++] = 56320 | 1023 & s);
    }
    return i(u, a);
  }, Ct.utf8border = function (e, t) {
    var r;
    for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; r >= 0 && 128 == (192 & e[r]);) r--;
    return r < 0 || 0 === r ? t : r + n[e[r]] > t ? r : t;
  }, Ct;
}
function Tt() {
  if (xt) return St;
  return xt = 1, St = function St() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  };
}
var Et,
  Dt,
  Nt,
  Bt,
  Rt,
  Ot,
  Mt,
  It,
  zt,
  Ft,
  jt,
  Lt,
  Ut,
  Wt,
  Ht = {},
  $t = {};
function Zt() {
  if (Rt) return $t;
  Rt = 1;
  var e = it(),
    t = yt(),
    r = vt(),
    n = Dt ? Et : (Dt = 1, Et = function Et(e, t) {
      var r, n, a, i, s, o, l, u, c, h, d, f, p, m, g, b, y, v, _, w, k, S, x, A, C;
      r = e.state, n = e.next_in, A = e.input, a = n + (e.avail_in - 5), i = e.next_out, C = e.output, s = i - (t - e.avail_out), o = i + (e.avail_out - 257), l = r.dmax, u = r.wsize, c = r.whave, h = r.wnext, d = r.window, f = r.hold, p = r.bits, m = r.lencode, g = r.distcode, b = (1 << r.lenbits) - 1, y = (1 << r.distbits) - 1;
      e: do {
        p < 15 && (f += A[n++] << p, p += 8, f += A[n++] << p, p += 8), v = m[f & b];
        t: for (;;) {
          if (f >>>= _ = v >>> 24, p -= _, 0 == (_ = v >>> 16 & 255)) C[i++] = 65535 & v;else {
            if (!(16 & _)) {
              if (0 == (64 & _)) {
                v = m[(65535 & v) + (f & (1 << _) - 1)];
                continue t;
              }
              if (32 & _) {
                r.mode = 12;
                break e;
              }
              e.msg = "invalid literal/length code", r.mode = 30;
              break e;
            }
            w = 65535 & v, (_ &= 15) && (p < _ && (f += A[n++] << p, p += 8), w += f & (1 << _) - 1, f >>>= _, p -= _), p < 15 && (f += A[n++] << p, p += 8, f += A[n++] << p, p += 8), v = g[f & y];
            r: for (;;) {
              if (f >>>= _ = v >>> 24, p -= _, !(16 & (_ = v >>> 16 & 255))) {
                if (0 == (64 & _)) {
                  v = g[(65535 & v) + (f & (1 << _) - 1)];
                  continue r;
                }
                e.msg = "invalid distance code", r.mode = 30;
                break e;
              }
              if (k = 65535 & v, p < (_ &= 15) && (f += A[n++] << p, (p += 8) < _ && (f += A[n++] << p, p += 8)), (k += f & (1 << _) - 1) > l) {
                e.msg = "invalid distance too far back", r.mode = 30;
                break e;
              }
              if (f >>>= _, p -= _, k > (_ = i - s)) {
                if ((_ = k - _) > c && r.sane) {
                  e.msg = "invalid distance too far back", r.mode = 30;
                  break e;
                }
                if (S = 0, x = d, 0 === h) {
                  if (S += u - _, _ < w) {
                    w -= _;
                    do {
                      C[i++] = d[S++];
                    } while (--_);
                    S = i - k, x = C;
                  }
                } else if (h < _) {
                  if (S += u + h - _, (_ -= h) < w) {
                    w -= _;
                    do {
                      C[i++] = d[S++];
                    } while (--_);
                    if (S = 0, h < w) {
                      w -= _ = h;
                      do {
                        C[i++] = d[S++];
                      } while (--_);
                      S = i - k, x = C;
                    }
                  }
                } else if (S += h - _, _ < w) {
                  w -= _;
                  do {
                    C[i++] = d[S++];
                  } while (--_);
                  S = i - k, x = C;
                }
                for (; w > 2;) C[i++] = x[S++], C[i++] = x[S++], C[i++] = x[S++], w -= 3;
                w && (C[i++] = x[S++], w > 1 && (C[i++] = x[S++]));
              } else {
                S = i - k;
                do {
                  C[i++] = C[S++], C[i++] = C[S++], C[i++] = C[S++], w -= 3;
                } while (w > 2);
                w && (C[i++] = C[S++], w > 1 && (C[i++] = C[S++]));
              }
              break;
            }
          }
          break;
        }
      } while (n < a && i < o);
      n -= w = p >> 3, f &= (1 << (p -= w << 3)) - 1, e.next_in = n, e.next_out = i, e.avail_in = n < a ? a - n + 5 : 5 - (n - a), e.avail_out = i < o ? o - i + 257 : 257 - (i - o), r.hold = f, r.bits = p;
    }),
    a = function () {
      if (Bt) return Nt;
      Bt = 1;
      var e = it(),
        t = 15,
        r = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        i = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      return Nt = function Nt(s, o, l, u, c, h, d, f) {
        var p,
          m,
          g,
          b,
          y,
          v,
          _,
          w,
          k,
          S = f.bits,
          x = 0,
          A = 0,
          C = 0,
          P = 0,
          T = 0,
          E = 0,
          D = 0,
          N = 0,
          B = 0,
          R = 0,
          O = null,
          M = 0,
          I = new e.Buf16(16),
          z = new e.Buf16(16),
          F = null,
          j = 0;
        for (x = 0; x <= t; x++) I[x] = 0;
        for (A = 0; A < u; A++) I[o[l + A]]++;
        for (T = S, P = t; P >= 1 && 0 === I[P]; P--);
        if (T > P && (T = P), 0 === P) return c[h++] = 20971520, c[h++] = 20971520, f.bits = 1, 0;
        for (C = 1; C < P && 0 === I[C]; C++);
        for (T < C && (T = C), N = 1, x = 1; x <= t; x++) if (N <<= 1, (N -= I[x]) < 0) return -1;
        if (N > 0 && (0 === s || 1 !== P)) return -1;
        for (z[1] = 0, x = 1; x < t; x++) z[x + 1] = z[x] + I[x];
        for (A = 0; A < u; A++) 0 !== o[l + A] && (d[z[o[l + A]]++] = A);
        if (0 === s ? (O = F = d, v = 19) : 1 === s ? (O = r, M -= 257, F = n, j -= 257, v = 256) : (O = a, F = i, v = -1), R = 0, A = 0, x = C, y = h, E = T, D = 0, g = -1, b = (B = 1 << T) - 1, 1 === s && B > 852 || 2 === s && B > 592) return 1;
        for (;;) {
          _ = x - D, d[A] < v ? (w = 0, k = d[A]) : d[A] > v ? (w = F[j + d[A]], k = O[M + d[A]]) : (w = 96, k = 0), p = 1 << x - D, C = m = 1 << E;
          do {
            c[y + (R >> D) + (m -= p)] = _ << 24 | w << 16 | k | 0;
          } while (0 !== m);
          for (p = 1 << x - 1; R & p;) p >>= 1;
          if (0 !== p ? (R &= p - 1, R += p) : R = 0, A++, 0 == --I[x]) {
            if (x === P) break;
            x = o[l + d[A]];
          }
          if (x > T && (R & b) !== g) {
            for (0 === D && (D = T), y += C, N = 1 << (E = x - D); E + D < P && !((N -= I[E + D]) <= 0);) E++, N <<= 1;
            if (B += 1 << E, 1 === s && B > 852 || 2 === s && B > 592) return 1;
            c[g = R & b] = T << 24 | E << 16 | y - h | 0;
          }
        }
        return 0 !== R && (c[y + R] = x - D << 24 | 64 << 16 | 0), f.bits = T, 0;
      };
    }(),
    i = 1,
    s = 2,
    o = 0,
    l = -2,
    u = 1,
    c = 12,
    h = 30,
    d = 852,
    f = 592;
  function p(e) {
    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
  }
  function m() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new e.Buf16(320), this.work = new e.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function g(t) {
    var r;
    return t && t.state ? (r = t.state, t.total_in = t.total_out = r.total = 0, t.msg = "", r.wrap && (t.adler = 1 & r.wrap), r.mode = u, r.last = 0, r.havedict = 0, r.dmax = 32768, r.head = null, r.hold = 0, r.bits = 0, r.lencode = r.lendyn = new e.Buf32(d), r.distcode = r.distdyn = new e.Buf32(f), r.sane = 1, r.back = -1, o) : l;
  }
  function b(e) {
    var t;
    return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, g(e)) : l;
  }
  function y(e, t) {
    var r, n;
    return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? l : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, b(e))) : l;
  }
  function v(e, t) {
    var r, n;
    return e ? (n = new m(), e.state = n, n.window = null, (r = y(e, t)) !== o && (e.state = null), r) : l;
  }
  var _,
    w,
    k = !0;
  function S(t) {
    if (k) {
      var r;
      for (_ = new e.Buf32(512), w = new e.Buf32(32), r = 0; r < 144;) t.lens[r++] = 8;
      for (; r < 256;) t.lens[r++] = 9;
      for (; r < 280;) t.lens[r++] = 7;
      for (; r < 288;) t.lens[r++] = 8;
      for (a(i, t.lens, 0, 288, _, 0, t.work, {
        bits: 9
      }), r = 0; r < 32;) t.lens[r++] = 5;
      a(s, t.lens, 0, 32, w, 0, t.work, {
        bits: 5
      }), k = !1;
    }
    t.lencode = _, t.lenbits = 9, t.distcode = w, t.distbits = 5;
  }
  function x(t, r, n, a) {
    var i,
      s = t.state;
    return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new e.Buf8(s.wsize)), a >= s.wsize ? (e.arraySet(s.window, r, n - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : ((i = s.wsize - s.wnext) > a && (i = a), e.arraySet(s.window, r, n - a, i, s.wnext), (a -= i) ? (e.arraySet(s.window, r, n - a, a, 0), s.wnext = a, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0;
  }
  return $t.inflateReset = b, $t.inflateReset2 = y, $t.inflateResetKeep = g, $t.inflateInit = function (e) {
    return v(e, 15);
  }, $t.inflateInit2 = v, $t.inflate = function (d, f) {
    var m,
      g,
      b,
      y,
      v,
      _,
      w,
      k,
      A,
      C,
      P,
      T,
      E,
      D,
      N,
      B,
      R,
      O,
      M,
      I,
      z,
      F,
      j,
      L,
      U = 0,
      W = new e.Buf8(4),
      H = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    if (!d || !d.state || !d.output || !d.input && 0 !== d.avail_in) return l;
    (m = d.state).mode === c && (m.mode = 13), v = d.next_out, b = d.output, w = d.avail_out, y = d.next_in, g = d.input, _ = d.avail_in, k = m.hold, A = m.bits, C = _, P = w, F = o;
    e: for (;;) switch (m.mode) {
      case u:
        if (0 === m.wrap) {
          m.mode = 13;
          break;
        }
        for (; A < 16;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        if (2 & m.wrap && 35615 === k) {
          m.check = 0, W[0] = 255 & k, W[1] = k >>> 8 & 255, m.check = r(m.check, W, 2, 0), k = 0, A = 0, m.mode = 2;
          break;
        }
        if (m.flags = 0, m.head && (m.head.done = !1), !(1 & m.wrap) || (((255 & k) << 8) + (k >> 8)) % 31) {
          d.msg = "incorrect header check", m.mode = h;
          break;
        }
        if (8 != (15 & k)) {
          d.msg = "unknown compression method", m.mode = h;
          break;
        }
        if (A -= 4, z = 8 + (15 & (k >>>= 4)), 0 === m.wbits) m.wbits = z;else if (z > m.wbits) {
          d.msg = "invalid window size", m.mode = h;
          break;
        }
        m.dmax = 1 << z, d.adler = m.check = 1, m.mode = 512 & k ? 10 : c, k = 0, A = 0;
        break;
      case 2:
        for (; A < 16;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        if (m.flags = k, 8 != (255 & m.flags)) {
          d.msg = "unknown compression method", m.mode = h;
          break;
        }
        if (57344 & m.flags) {
          d.msg = "unknown header flags set", m.mode = h;
          break;
        }
        m.head && (m.head.text = k >> 8 & 1), 512 & m.flags && (W[0] = 255 & k, W[1] = k >>> 8 & 255, m.check = r(m.check, W, 2, 0)), k = 0, A = 0, m.mode = 3;
      case 3:
        for (; A < 32;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        m.head && (m.head.time = k), 512 & m.flags && (W[0] = 255 & k, W[1] = k >>> 8 & 255, W[2] = k >>> 16 & 255, W[3] = k >>> 24 & 255, m.check = r(m.check, W, 4, 0)), k = 0, A = 0, m.mode = 4;
      case 4:
        for (; A < 16;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        m.head && (m.head.xflags = 255 & k, m.head.os = k >> 8), 512 & m.flags && (W[0] = 255 & k, W[1] = k >>> 8 & 255, m.check = r(m.check, W, 2, 0)), k = 0, A = 0, m.mode = 5;
      case 5:
        if (1024 & m.flags) {
          for (; A < 16;) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          m.length = k, m.head && (m.head.extra_len = k), 512 & m.flags && (W[0] = 255 & k, W[1] = k >>> 8 & 255, m.check = r(m.check, W, 2, 0)), k = 0, A = 0;
        } else m.head && (m.head.extra = null);
        m.mode = 6;
      case 6:
        if (1024 & m.flags && ((T = m.length) > _ && (T = _), T && (m.head && (z = m.head.extra_len - m.length, m.head.extra || (m.head.extra = new Array(m.head.extra_len)), e.arraySet(m.head.extra, g, y, T, z)), 512 & m.flags && (m.check = r(m.check, g, T, y)), _ -= T, y += T, m.length -= T), m.length)) break e;
        m.length = 0, m.mode = 7;
      case 7:
        if (2048 & m.flags) {
          if (0 === _) break e;
          T = 0;
          do {
            z = g[y + T++], m.head && z && m.length < 65536 && (m.head.name += String.fromCharCode(z));
          } while (z && T < _);
          if (512 & m.flags && (m.check = r(m.check, g, T, y)), _ -= T, y += T, z) break e;
        } else m.head && (m.head.name = null);
        m.length = 0, m.mode = 8;
      case 8:
        if (4096 & m.flags) {
          if (0 === _) break e;
          T = 0;
          do {
            z = g[y + T++], m.head && z && m.length < 65536 && (m.head.comment += String.fromCharCode(z));
          } while (z && T < _);
          if (512 & m.flags && (m.check = r(m.check, g, T, y)), _ -= T, y += T, z) break e;
        } else m.head && (m.head.comment = null);
        m.mode = 9;
      case 9:
        if (512 & m.flags) {
          for (; A < 16;) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          if (k !== (65535 & m.check)) {
            d.msg = "header crc mismatch", m.mode = h;
            break;
          }
          k = 0, A = 0;
        }
        m.head && (m.head.hcrc = m.flags >> 9 & 1, m.head.done = !0), d.adler = m.check = 0, m.mode = c;
        break;
      case 10:
        for (; A < 32;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        d.adler = m.check = p(k), k = 0, A = 0, m.mode = 11;
      case 11:
        if (0 === m.havedict) return d.next_out = v, d.avail_out = w, d.next_in = y, d.avail_in = _, m.hold = k, m.bits = A, 2;
        d.adler = m.check = 1, m.mode = c;
      case c:
        if (5 === f || 6 === f) break e;
      case 13:
        if (m.last) {
          k >>>= 7 & A, A -= 7 & A, m.mode = 27;
          break;
        }
        for (; A < 3;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        switch (m.last = 1 & k, A -= 1, 3 & (k >>>= 1)) {
          case 0:
            m.mode = 14;
            break;
          case 1:
            if (S(m), m.mode = 20, 6 === f) {
              k >>>= 2, A -= 2;
              break e;
            }
            break;
          case 2:
            m.mode = 17;
            break;
          case 3:
            d.msg = "invalid block type", m.mode = h;
        }
        k >>>= 2, A -= 2;
        break;
      case 14:
        for (k >>>= 7 & A, A -= 7 & A; A < 32;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        if ((65535 & k) != (k >>> 16 ^ 65535)) {
          d.msg = "invalid stored block lengths", m.mode = h;
          break;
        }
        if (m.length = 65535 & k, k = 0, A = 0, m.mode = 15, 6 === f) break e;
      case 15:
        m.mode = 16;
      case 16:
        if (T = m.length) {
          if (T > _ && (T = _), T > w && (T = w), 0 === T) break e;
          e.arraySet(b, g, y, T, v), _ -= T, y += T, w -= T, v += T, m.length -= T;
          break;
        }
        m.mode = c;
        break;
      case 17:
        for (; A < 14;) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        if (m.nlen = 257 + (31 & k), k >>>= 5, A -= 5, m.ndist = 1 + (31 & k), k >>>= 5, A -= 5, m.ncode = 4 + (15 & k), k >>>= 4, A -= 4, m.nlen > 286 || m.ndist > 30) {
          d.msg = "too many length or distance symbols", m.mode = h;
          break;
        }
        m.have = 0, m.mode = 18;
      case 18:
        for (; m.have < m.ncode;) {
          for (; A < 3;) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          m.lens[H[m.have++]] = 7 & k, k >>>= 3, A -= 3;
        }
        for (; m.have < 19;) m.lens[H[m.have++]] = 0;
        if (m.lencode = m.lendyn, m.lenbits = 7, j = {
          bits: m.lenbits
        }, F = a(0, m.lens, 0, 19, m.lencode, 0, m.work, j), m.lenbits = j.bits, F) {
          d.msg = "invalid code lengths set", m.mode = h;
          break;
        }
        m.have = 0, m.mode = 19;
      case 19:
        for (; m.have < m.nlen + m.ndist;) {
          for (; B = (U = m.lencode[k & (1 << m.lenbits) - 1]) >>> 16 & 255, R = 65535 & U, !((N = U >>> 24) <= A);) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          if (R < 16) k >>>= N, A -= N, m.lens[m.have++] = R;else {
            if (16 === R) {
              for (L = N + 2; A < L;) {
                if (0 === _) break e;
                _--, k += g[y++] << A, A += 8;
              }
              if (k >>>= N, A -= N, 0 === m.have) {
                d.msg = "invalid bit length repeat", m.mode = h;
                break;
              }
              z = m.lens[m.have - 1], T = 3 + (3 & k), k >>>= 2, A -= 2;
            } else if (17 === R) {
              for (L = N + 3; A < L;) {
                if (0 === _) break e;
                _--, k += g[y++] << A, A += 8;
              }
              A -= N, z = 0, T = 3 + (7 & (k >>>= N)), k >>>= 3, A -= 3;
            } else {
              for (L = N + 7; A < L;) {
                if (0 === _) break e;
                _--, k += g[y++] << A, A += 8;
              }
              A -= N, z = 0, T = 11 + (127 & (k >>>= N)), k >>>= 7, A -= 7;
            }
            if (m.have + T > m.nlen + m.ndist) {
              d.msg = "invalid bit length repeat", m.mode = h;
              break;
            }
            for (; T--;) m.lens[m.have++] = z;
          }
        }
        if (m.mode === h) break;
        if (0 === m.lens[256]) {
          d.msg = "invalid code -- missing end-of-block", m.mode = h;
          break;
        }
        if (m.lenbits = 9, j = {
          bits: m.lenbits
        }, F = a(i, m.lens, 0, m.nlen, m.lencode, 0, m.work, j), m.lenbits = j.bits, F) {
          d.msg = "invalid literal/lengths set", m.mode = h;
          break;
        }
        if (m.distbits = 6, m.distcode = m.distdyn, j = {
          bits: m.distbits
        }, F = a(s, m.lens, m.nlen, m.ndist, m.distcode, 0, m.work, j), m.distbits = j.bits, F) {
          d.msg = "invalid distances set", m.mode = h;
          break;
        }
        if (m.mode = 20, 6 === f) break e;
      case 20:
        m.mode = 21;
      case 21:
        if (_ >= 6 && w >= 258) {
          d.next_out = v, d.avail_out = w, d.next_in = y, d.avail_in = _, m.hold = k, m.bits = A, n(d, P), v = d.next_out, b = d.output, w = d.avail_out, y = d.next_in, g = d.input, _ = d.avail_in, k = m.hold, A = m.bits, m.mode === c && (m.back = -1);
          break;
        }
        for (m.back = 0; B = (U = m.lencode[k & (1 << m.lenbits) - 1]) >>> 16 & 255, R = 65535 & U, !((N = U >>> 24) <= A);) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        if (B && 0 == (240 & B)) {
          for (O = N, M = B, I = R; B = (U = m.lencode[I + ((k & (1 << O + M) - 1) >> O)]) >>> 16 & 255, R = 65535 & U, !(O + (N = U >>> 24) <= A);) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          k >>>= O, A -= O, m.back += O;
        }
        if (k >>>= N, A -= N, m.back += N, m.length = R, 0 === B) {
          m.mode = 26;
          break;
        }
        if (32 & B) {
          m.back = -1, m.mode = c;
          break;
        }
        if (64 & B) {
          d.msg = "invalid literal/length code", m.mode = h;
          break;
        }
        m.extra = 15 & B, m.mode = 22;
      case 22:
        if (m.extra) {
          for (L = m.extra; A < L;) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          m.length += k & (1 << m.extra) - 1, k >>>= m.extra, A -= m.extra, m.back += m.extra;
        }
        m.was = m.length, m.mode = 23;
      case 23:
        for (; B = (U = m.distcode[k & (1 << m.distbits) - 1]) >>> 16 & 255, R = 65535 & U, !((N = U >>> 24) <= A);) {
          if (0 === _) break e;
          _--, k += g[y++] << A, A += 8;
        }
        if (0 == (240 & B)) {
          for (O = N, M = B, I = R; B = (U = m.distcode[I + ((k & (1 << O + M) - 1) >> O)]) >>> 16 & 255, R = 65535 & U, !(O + (N = U >>> 24) <= A);) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          k >>>= O, A -= O, m.back += O;
        }
        if (k >>>= N, A -= N, m.back += N, 64 & B) {
          d.msg = "invalid distance code", m.mode = h;
          break;
        }
        m.offset = R, m.extra = 15 & B, m.mode = 24;
      case 24:
        if (m.extra) {
          for (L = m.extra; A < L;) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          m.offset += k & (1 << m.extra) - 1, k >>>= m.extra, A -= m.extra, m.back += m.extra;
        }
        if (m.offset > m.dmax) {
          d.msg = "invalid distance too far back", m.mode = h;
          break;
        }
        m.mode = 25;
      case 25:
        if (0 === w) break e;
        if (T = P - w, m.offset > T) {
          if ((T = m.offset - T) > m.whave && m.sane) {
            d.msg = "invalid distance too far back", m.mode = h;
            break;
          }
          T > m.wnext ? (T -= m.wnext, E = m.wsize - T) : E = m.wnext - T, T > m.length && (T = m.length), D = m.window;
        } else D = b, E = v - m.offset, T = m.length;
        T > w && (T = w), w -= T, m.length -= T;
        do {
          b[v++] = D[E++];
        } while (--T);
        0 === m.length && (m.mode = 21);
        break;
      case 26:
        if (0 === w) break e;
        b[v++] = m.length, w--, m.mode = 21;
        break;
      case 27:
        if (m.wrap) {
          for (; A < 32;) {
            if (0 === _) break e;
            _--, k |= g[y++] << A, A += 8;
          }
          if (P -= w, d.total_out += P, m.total += P, P && (d.adler = m.check = m.flags ? r(m.check, b, P, v - P) : t(m.check, b, P, v - P)), P = w, (m.flags ? k : p(k)) !== m.check) {
            d.msg = "incorrect data check", m.mode = h;
            break;
          }
          k = 0, A = 0;
        }
        m.mode = 28;
      case 28:
        if (m.wrap && m.flags) {
          for (; A < 32;) {
            if (0 === _) break e;
            _--, k += g[y++] << A, A += 8;
          }
          if (k !== (4294967295 & m.total)) {
            d.msg = "incorrect length check", m.mode = h;
            break;
          }
          k = 0, A = 0;
        }
        m.mode = 29;
      case 29:
        F = 1;
        break e;
      case h:
        F = -3;
        break e;
      case 31:
        return -4;
      default:
        return l;
    }
    return d.next_out = v, d.avail_out = w, d.next_in = y, d.avail_in = _, m.hold = k, m.bits = A, (m.wsize || P !== d.avail_out && m.mode < h && (m.mode < 27 || 4 !== f)) && x(d, d.output, d.next_out, P - d.avail_out), C -= d.avail_in, P -= d.avail_out, d.total_in += C, d.total_out += P, m.total += P, m.wrap && P && (d.adler = m.check = m.flags ? r(m.check, b, P, d.next_out - P) : t(m.check, b, P, d.next_out - P)), d.data_type = m.bits + (m.last ? 64 : 0) + (m.mode === c ? 128 : 0) + (20 === m.mode || 15 === m.mode ? 256 : 0), (0 === C && 0 === P || 4 === f) && F === o && (F = -5), F;
  }, $t.inflateEnd = function (e) {
    if (!e || !e.state) return l;
    var t = e.state;
    return t.window && (t.window = null), e.state = null, o;
  }, $t.inflateGetHeader = function (e, t) {
    var r;
    return e && e.state ? 0 == (2 & (r = e.state).wrap) ? l : (r.head = t, t.done = !1, o) : l;
  }, $t.inflateSetDictionary = function (e, r) {
    var n,
      a = r.length;
    return e && e.state ? 0 !== (n = e.state).wrap && 11 !== n.mode ? l : 11 === n.mode && t(1, r, a, 0) !== n.check ? -3 : x(e, r, a, a) ? (n.mode = 31, -4) : (n.havedict = 1, o) : l;
  }, $t.inflateInfo = "pako inflate (from Nodeca project)", $t;
}
function Vt() {
  return Mt ? Ot : (Mt = 1, Ot = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  });
}
function qt() {
  if (Ft) return Ht;
  Ft = 1;
  var e = Zt(),
    t = it(),
    r = Pt(),
    n = Vt(),
    a = _t(),
    i = Tt(),
    s = zt ? It : (zt = 1, It = function It() {
      this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
    }),
    o = Object.prototype.toString;
  function l(u) {
    if (!(this instanceof l)) return new l(u);
    this.options = t.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, u || {});
    var c = this.options;
    c.raw && c.windowBits >= 0 && c.windowBits < 16 && (c.windowBits = -c.windowBits, 0 === c.windowBits && (c.windowBits = -15)), !(c.windowBits >= 0 && c.windowBits < 16) || u && u.windowBits || (c.windowBits += 32), c.windowBits > 15 && c.windowBits < 48 && 0 == (15 & c.windowBits) && (c.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
    var h = e.inflateInit2(this.strm, c.windowBits);
    if (h !== n.Z_OK) throw new Error(a[h]);
    if (this.header = new s(), e.inflateGetHeader(this.strm, this.header), c.dictionary && ("string" == typeof c.dictionary ? c.dictionary = r.string2buf(c.dictionary) : "[object ArrayBuffer]" === o.call(c.dictionary) && (c.dictionary = new Uint8Array(c.dictionary)), c.raw && (h = e.inflateSetDictionary(this.strm, c.dictionary)) !== n.Z_OK)) throw new Error(a[h]);
  }
  function u(e, t) {
    var r = new l(t);
    if (r.push(e, !0), r.err) throw r.msg || a[r.err];
    return r.result;
  }
  return l.prototype.push = function (a, i) {
    var s,
      l,
      u,
      c,
      h,
      d = this.strm,
      f = this.options.chunkSize,
      p = this.options.dictionary,
      m = !1;
    if (this.ended) return !1;
    l = i === ~~i ? i : !0 === i ? n.Z_FINISH : n.Z_NO_FLUSH, "string" == typeof a ? d.input = r.binstring2buf(a) : "[object ArrayBuffer]" === o.call(a) ? d.input = new Uint8Array(a) : d.input = a, d.next_in = 0, d.avail_in = d.input.length;
    do {
      if (0 === d.avail_out && (d.output = new t.Buf8(f), d.next_out = 0, d.avail_out = f), (s = e.inflate(d, n.Z_NO_FLUSH)) === n.Z_NEED_DICT && p && (s = e.inflateSetDictionary(this.strm, p)), s === n.Z_BUF_ERROR && !0 === m && (s = n.Z_OK, m = !1), s !== n.Z_STREAM_END && s !== n.Z_OK) return this.onEnd(s), this.ended = !0, !1;
      d.next_out && (0 !== d.avail_out && s !== n.Z_STREAM_END && (0 !== d.avail_in || l !== n.Z_FINISH && l !== n.Z_SYNC_FLUSH) || ("string" === this.options.to ? (u = r.utf8border(d.output, d.next_out), c = d.next_out - u, h = r.buf2string(d.output, u), d.next_out = c, d.avail_out = f - c, c && t.arraySet(d.output, d.output, u, c, 0), this.onData(h)) : this.onData(t.shrinkBuf(d.output, d.next_out)))), 0 === d.avail_in && 0 === d.avail_out && (m = !0);
    } while ((d.avail_in > 0 || 0 === d.avail_out) && s !== n.Z_STREAM_END);
    return s === n.Z_STREAM_END && (l = n.Z_FINISH), l === n.Z_FINISH ? (s = e.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, s === n.Z_OK) : l !== n.Z_SYNC_FLUSH || (this.onEnd(n.Z_OK), d.avail_out = 0, !0);
  }, l.prototype.onData = function (e) {
    this.chunks.push(e);
  }, l.prototype.onEnd = function (e) {
    e === n.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = t.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
  }, Ht.Inflate = l, Ht.inflate = u, Ht.inflateRaw = function (e, t) {
    return (t = t || {}).raw = !0, u(e, t);
  }, Ht.ungzip = u, Ht;
}
function Xt() {
  if (Lt) return jt;
  Lt = 1;
  var e = it().assign,
    t = function () {
      if (At) return pt;
      At = 1;
      var e = wt(),
        t = it(),
        r = Pt(),
        n = _t(),
        a = Tt(),
        i = Object.prototype.toString,
        s = 0,
        o = -1,
        l = 0,
        u = 8;
      function c(h) {
        if (!(this instanceof c)) return new c(h);
        this.options = t.assign({
          level: o,
          method: u,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: l,
          to: ""
        }, h || {});
        var d = this.options;
        d.raw && d.windowBits > 0 ? d.windowBits = -d.windowBits : d.gzip && d.windowBits > 0 && d.windowBits < 16 && (d.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new a(), this.strm.avail_out = 0;
        var f = e.deflateInit2(this.strm, d.level, d.method, d.windowBits, d.memLevel, d.strategy);
        if (f !== s) throw new Error(n[f]);
        if (d.header && e.deflateSetHeader(this.strm, d.header), d.dictionary) {
          var p;
          if (p = "string" == typeof d.dictionary ? r.string2buf(d.dictionary) : "[object ArrayBuffer]" === i.call(d.dictionary) ? new Uint8Array(d.dictionary) : d.dictionary, (f = e.deflateSetDictionary(this.strm, p)) !== s) throw new Error(n[f]);
          this._dict_set = !0;
        }
      }
      function h(e, t) {
        var r = new c(t);
        if (r.push(e, !0), r.err) throw r.msg || n[r.err];
        return r.result;
      }
      return c.prototype.push = function (n, a) {
        var o,
          l,
          u = this.strm,
          c = this.options.chunkSize;
        if (this.ended) return !1;
        l = a === ~~a ? a : !0 === a ? 4 : 0, "string" == typeof n ? u.input = r.string2buf(n) : "[object ArrayBuffer]" === i.call(n) ? u.input = new Uint8Array(n) : u.input = n, u.next_in = 0, u.avail_in = u.input.length;
        do {
          if (0 === u.avail_out && (u.output = new t.Buf8(c), u.next_out = 0, u.avail_out = c), 1 !== (o = e.deflate(u, l)) && o !== s) return this.onEnd(o), this.ended = !0, !1;
          0 !== u.avail_out && (0 !== u.avail_in || 4 !== l && 2 !== l) || ("string" === this.options.to ? this.onData(r.buf2binstring(t.shrinkBuf(u.output, u.next_out))) : this.onData(t.shrinkBuf(u.output, u.next_out)));
        } while ((u.avail_in > 0 || 0 === u.avail_out) && 1 !== o);
        return 4 === l ? (o = e.deflateEnd(this.strm), this.onEnd(o), this.ended = !0, o === s) : 2 !== l || (this.onEnd(s), u.avail_out = 0, !0);
      }, c.prototype.onData = function (e) {
        this.chunks.push(e);
      }, c.prototype.onEnd = function (e) {
        e === s && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = t.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
      }, pt.Deflate = c, pt.deflate = h, pt.deflateRaw = function (e, t) {
        return (t = t || {}).raw = !0, h(e, t);
      }, pt.gzip = function (e, t) {
        return (t = t || {}).gzip = !0, h(e, t);
      }, pt;
    }(),
    r = {};
  return e(r, t, qt(), Vt()), jt = r;
}
function Kt() {
  if (Wt) return rt;
  Wt = 1;
  var e = Be();
  return rt.STORE = {
    magic: "\0\0",
    compressWorker: function compressWorker() {
      return new e("STORE compression");
    },
    uncompressWorker: function uncompressWorker() {
      return new e("STORE decompression");
    }
  }, rt.DEFLATE = function () {
    if (Ut) return nt;
    Ut = 1;
    var e = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
      t = Xt(),
      r = Ne(),
      n = Be(),
      a = e ? "uint8array" : "array";
    function i(e, t) {
      n.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
    }
    return nt.magic = "\b\0", r.inherits(i, n), i.prototype.processChunk = function (e) {
      this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(r.transformTo(a, e.data), !1);
    }, i.prototype.flush = function () {
      n.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
    }, i.prototype.cleanUp = function () {
      n.prototype.cleanUp.call(this), this._pako = null;
    }, i.prototype._createPako = function () {
      this._pako = new t[this._pakoAction]({
        raw: !0,
        level: this._pakoOptions.level || -1
      });
      var e = this;
      this._pako.onData = function (t) {
        e.push({
          data: t,
          meta: e.meta
        });
      };
    }, nt.compressWorker = function (e) {
      return new i("Deflate", e);
    }, nt.uncompressWorker = function () {
      return new i("Inflate", {});
    }, nt;
  }(), rt;
}
var Yt,
  Jt,
  Gt,
  Qt,
  er,
  tr,
  rr,
  nr,
  ar,
  ir,
  sr,
  or,
  lr,
  ur,
  cr,
  hr,
  dr,
  fr,
  pr,
  mr,
  gr,
  br,
  yr,
  vr,
  _r,
  wr,
  kr,
  Sr,
  xr = {};
function Ar() {
  return Yt || (Yt = 1, xr.LOCAL_FILE_HEADER = "PK", xr.CENTRAL_FILE_HEADER = "PK", xr.CENTRAL_DIRECTORY_END = "PK", xr.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", xr.ZIP64_CENTRAL_DIRECTORY_END = "PK", xr.DATA_DESCRIPTOR = "PK\b"), xr;
}
function Cr() {
  if (Gt) return Jt;
  Gt = 1;
  var e = Ne(),
    t = Be(),
    r = Re(),
    n = Je(),
    a = Ar(),
    i = function i(e, t) {
      var r,
        n = "";
      for (r = 0; r < t; r++) n += String.fromCharCode(255 & e), e >>>= 8;
      return n;
    },
    s = function s(t, _s, o, l, u, c) {
      var h,
        d,
        f = t.file,
        p = t.compression,
        m = c !== r.utf8encode,
        g = e.transformTo("string", c(f.name)),
        b = e.transformTo("string", r.utf8encode(f.name)),
        y = f.comment,
        v = e.transformTo("string", c(y)),
        _ = e.transformTo("string", r.utf8encode(y)),
        w = b.length !== f.name.length,
        k = _.length !== y.length,
        S = "",
        x = "",
        A = "",
        C = f.dir,
        P = f.date,
        T = {
          crc32: 0,
          compressedSize: 0,
          uncompressedSize: 0
        };
      _s && !o || (T.crc32 = t.crc32, T.compressedSize = t.compressedSize, T.uncompressedSize = t.uncompressedSize);
      var E = 0;
      _s && (E |= 8), m || !w && !k || (E |= 2048);
      var D,
        N,
        B,
        R = 0,
        O = 0;
      C && (R |= 16), "UNIX" === u ? (O = 798, R |= (D = f.unixPermissions, N = C, B = D, D || (B = N ? 16893 : 33204), (65535 & B) << 16)) : (O = 20, R |= 63 & (f.dosPermissions || 0)), h = P.getUTCHours(), h <<= 6, h |= P.getUTCMinutes(), h <<= 5, h |= P.getUTCSeconds() / 2, d = P.getUTCFullYear() - 1980, d <<= 4, d |= P.getUTCMonth() + 1, d <<= 5, d |= P.getUTCDate(), w && (x = i(1, 1) + i(n(g), 4) + b, S += "up" + i(x.length, 2) + x), k && (A = i(1, 1) + i(n(v), 4) + _, S += "uc" + i(A.length, 2) + A);
      var M = "";
      return M += "\n\0", M += i(E, 2), M += p.magic, M += i(h, 2), M += i(d, 2), M += i(T.crc32, 4), M += i(T.compressedSize, 4), M += i(T.uncompressedSize, 4), M += i(g.length, 2), M += i(S.length, 2), {
        fileRecord: a.LOCAL_FILE_HEADER + M + g + S,
        dirRecord: a.CENTRAL_FILE_HEADER + i(O, 2) + M + i(v.length, 2) + "\0\0\0\0" + i(R, 4) + i(l, 4) + g + S + v
      };
    },
    o = function o(e) {
      return a.DATA_DESCRIPTOR + i(e.crc32, 4) + i(e.compressedSize, 4) + i(e.uncompressedSize, 4);
    };
  function l(e, r, n, a) {
    t.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = r, this.zipPlatform = n, this.encodeFileName = a, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
  }
  return e.inherits(l, t), l.prototype.push = function (e) {
    var r = e.meta.percent || 0,
      n = this.entriesCount,
      a = this._sources.length;
    this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, t.prototype.push.call(this, {
      data: e.data,
      meta: {
        currentFile: this.currentFile,
        percent: n ? (r + 100 * (n - a - 1)) / n : 100
      }
    }));
  }, l.prototype.openedSource = function (e) {
    this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
    var t = this.streamFiles && !e.file.dir;
    if (t) {
      var r = s(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.push({
        data: r.fileRecord,
        meta: {
          percent: 0
        }
      });
    } else this.accumulate = !0;
  }, l.prototype.closedSource = function (e) {
    this.accumulate = !1;
    var t = this.streamFiles && !e.file.dir,
      r = s(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    if (this.dirRecords.push(r.dirRecord), t) this.push({
      data: o(e),
      meta: {
        percent: 100
      }
    });else for (this.push({
      data: r.fileRecord,
      meta: {
        percent: 0
      }
    }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
    this.currentFile = null;
  }, l.prototype.flush = function () {
    for (var t = this.bytesWritten, r = 0; r < this.dirRecords.length; r++) this.push({
      data: this.dirRecords[r],
      meta: {
        percent: 100
      }
    });
    var n = this.bytesWritten - t,
      s = function (t, r, n, s, o) {
        var l = e.transformTo("string", o(s));
        return a.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(t, 2) + i(t, 2) + i(r, 4) + i(n, 4) + i(l.length, 2) + l;
      }(this.dirRecords.length, n, t, this.zipComment, this.encodeFileName);
    this.push({
      data: s,
      meta: {
        percent: 100
      }
    });
  }, l.prototype.prepareNextSource = function () {
    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
  }, l.prototype.registerPrevious = function (e) {
    this._sources.push(e);
    var t = this;
    return e.on("data", function (e) {
      t.processChunk(e);
    }), e.on("end", function () {
      t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
    }), e.on("error", function (e) {
      t.error(e);
    }), this;
  }, l.prototype.resume = function () {
    return !!t.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
  }, l.prototype.error = function (e) {
    var r = this._sources;
    if (!t.prototype.error.call(this, e)) return !1;
    for (var n = 0; n < r.length; n++) try {
      r[n].error(e);
    } catch (e) {}
    return !0;
  }, l.prototype.lock = function () {
    t.prototype.lock.call(this);
    for (var e = this._sources, r = 0; r < e.length; r++) e[r].lock();
  }, Jt = l;
}
function Pr() {
  if (Qt) return tt;
  Qt = 1;
  var e = Kt(),
    t = Cr();
  return tt.generateWorker = function (r, n, a) {
    var i = new t(n.streamFiles, a, n.platform, n.encodeFileName),
      s = 0;
    try {
      r.forEach(function (t, r) {
        s++;
        var a = function (t, r) {
            var n = t || r,
              a = e[n];
            if (!a) throw new Error(n + " is not a valid compression method !");
            return a;
          }(r.options.compression, n.compression),
          o = r.options.compressionOptions || n.compressionOptions || {},
          l = r.dir,
          u = r.date;
        r._compressWorker(a, o).withStreamInfo("file", {
          name: t,
          dir: l,
          date: u,
          comment: r.comment || "",
          unixPermissions: r.unixPermissions,
          dosPermissions: r.dosPermissions
        }).pipe(i);
      }), i.entriesCount = s;
    } catch (e) {
      i.error(e);
    }
    return i;
  }, tt;
}
function Tr() {
  if (nr) return rr;
  nr = 1;
  var e = Re(),
    t = Ne(),
    r = Be(),
    n = Oe(),
    a = Ke(),
    i = Qe(),
    s = function () {
      if (qe) return Ve;
      qe = 1;
      var e = Oe(),
        t = Ye(),
        r = Re(),
        n = Qe(),
        a = Be(),
        i = function i(e, t, r) {
          this.name = e, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = t, this._dataBinary = r.binary, this.options = {
            compression: r.compression,
            compressionOptions: r.compressionOptions
          };
        };
      i.prototype = {
        internalStream: function internalStream(t) {
          var n = null,
            i = "string";
          try {
            if (!t) throw new Error("No output type specified.");
            var s = "string" === (i = t.toLowerCase()) || "text" === i;
            "binarystring" !== i && "text" !== i || (i = "string"), n = this._decompressWorker();
            var o = !this._dataBinary;
            o && !s && (n = n.pipe(new r.Utf8EncodeWorker())), !o && s && (n = n.pipe(new r.Utf8DecodeWorker()));
          } catch (e) {
            (n = new a("error")).error(e);
          }
          return new e(n, i, "");
        },
        async: function async(e, t) {
          return this.internalStream(e).accumulate(t);
        },
        nodeStream: function nodeStream(e, t) {
          return this.internalStream(e || "nodebuffer").toNodejsStream(t);
        },
        _compressWorker: function _compressWorker(e, t) {
          if (this._data instanceof n && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
          var a = this._decompressWorker();
          return this._dataBinary || (a = a.pipe(new r.Utf8EncodeWorker())), n.createWorkerFrom(a, e, t);
        },
        _decompressWorker: function _decompressWorker() {
          return this._data instanceof n ? this._data.getContentWorker() : this._data instanceof a ? this._data : new t(this._data);
        }
      };
      for (var s = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], o = function o() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, l = 0; l < s.length; l++) i.prototype[s[l]] = o;
      return Ve = i;
    }(),
    o = Pr(),
    l = me(),
    u = function () {
      if (tr) return er;
      tr = 1;
      var e = Ne(),
        t = Be();
      function r(e, r) {
        t.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(r);
      }
      return e.inherits(r, t), r.prototype._bindStream = function (e) {
        var t = this;
        this._stream = e, e.pause(), e.on("data", function (e) {
          t.push({
            data: e,
            meta: {
              percent: 0
            }
          });
        }).on("error", function (e) {
          t.isPaused ? this.generatedError = e : t.error(e);
        }).on("end", function () {
          t.isPaused ? t._upstreamEnded = !0 : t.end();
        });
      }, r.prototype.pause = function () {
        return !!t.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, r.prototype.resume = function () {
        return !!t.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, er = r;
    }(),
    c = function c(e, n, o) {
      var c,
        p = t.getTypeOf(n),
        m = t.extend(o || {}, a);
      m.date = m.date || new Date(), null !== m.compression && (m.compression = m.compression.toUpperCase()), "string" == typeof m.unixPermissions && (m.unixPermissions = parseInt(m.unixPermissions, 8)), m.unixPermissions && 16384 & m.unixPermissions && (m.dir = !0), m.dosPermissions && 16 & m.dosPermissions && (m.dir = !0), m.dir && (e = d(e)), m.createFolders && (c = h(e)) && f.call(this, c, !0);
      var g = "string" === p && !1 === m.binary && !1 === m.base64;
      o && void 0 !== o.binary || (m.binary = !g), (n instanceof i && 0 === n.uncompressedSize || m.dir || !n || 0 === n.length) && (m.base64 = !1, m.binary = !0, n = "", m.compression = "STORE", p = "string");
      var b = null;
      b = n instanceof i || n instanceof r ? n : l.isNode && l.isStream(n) ? new u(e, n) : t.prepareContent(e, n, m.binary, m.optimizedBinaryString, m.base64);
      var y = new s(e, b, m);
      this.files[e] = y;
    },
    h = function h(e) {
      "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
      var t = e.lastIndexOf("/");
      return t > 0 ? e.substring(0, t) : "";
    },
    d = function d(e) {
      return "/" !== e.slice(-1) && (e += "/"), e;
    },
    f = function f(e, t) {
      return t = void 0 !== t ? t : a.createFolders, e = d(e), this.files[e] || c.call(this, e, null, {
        dir: !0,
        createFolders: t
      }), this.files[e];
    };
  function p(e) {
    return "[object RegExp]" === Object.prototype.toString.call(e);
  }
  var m = {
    load: function load() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    forEach: function forEach(e) {
      var t, r, n;
      for (t in this.files) n = this.files[t], (r = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(r, n);
    },
    filter: function filter(e) {
      var t = [];
      return this.forEach(function (r, n) {
        e(r, n) && t.push(n);
      }), t;
    },
    file: function file(e, t, r) {
      if (1 === arguments.length) {
        if (p(e)) {
          var n = e;
          return this.filter(function (e, t) {
            return !t.dir && n.test(e);
          });
        }
        var a = this.files[this.root + e];
        return a && !a.dir ? a : null;
      }
      return e = this.root + e, c.call(this, e, t, r), this;
    },
    folder: function folder(e) {
      if (!e) return this;
      if (p(e)) return this.filter(function (t, r) {
        return r.dir && e.test(t);
      });
      var t = this.root + e,
        r = f.call(this, t),
        n = this.clone();
      return n.root = r.name, n;
    },
    remove: function remove(e) {
      e = this.root + e;
      var t = this.files[e];
      if (t || ("/" !== e.slice(-1) && (e += "/"), t = this.files[e]), t && !t.dir) delete this.files[e];else for (var r = this.filter(function (t, r) {
          return r.name.slice(0, e.length) === e;
        }), n = 0; n < r.length; n++) delete this.files[r[n].name];
      return this;
    },
    generate: function generate() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    generateInternalStream: function generateInternalStream(a) {
      var i,
        s = {};
      try {
        if ((s = t.extend(a || {}, {
          streamFiles: !1,
          compression: "STORE",
          compressionOptions: null,
          type: "",
          platform: "DOS",
          comment: null,
          mimeType: "application/zip",
          encodeFileName: e.utf8encode
        })).type = s.type.toLowerCase(), s.compression = s.compression.toUpperCase(), "binarystring" === s.type && (s.type = "string"), !s.type) throw new Error("No output type specified.");
        t.checkSupport(s.type), "darwin" !== s.platform && "freebsd" !== s.platform && "linux" !== s.platform && "sunos" !== s.platform || (s.platform = "UNIX"), "win32" === s.platform && (s.platform = "DOS");
        var l = s.comment || this.comment || "";
        i = o.generateWorker(this, s, l);
      } catch (e) {
        (i = new r("error")).error(e);
      }
      return new n(i, s.type || "string", s.mimeType);
    },
    generateAsync: function generateAsync(e, t) {
      return this.generateInternalStream(e).accumulate(t);
    },
    generateNodeStream: function generateNodeStream(e, t) {
      return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
    }
  };
  return rr = m;
}
function Er() {
  if (ir) return ar;
  ir = 1;
  var e = Ne();
  function t(e) {
    this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
  }
  return t.prototype = {
    checkOffset: function checkOffset(e) {
      this.checkIndex(this.index + e);
    },
    checkIndex: function checkIndex(e) {
      if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
    },
    setIndex: function setIndex(e) {
      this.checkIndex(e), this.index = e;
    },
    skip: function skip(e) {
      this.setIndex(this.index + e);
    },
    byteAt: function byteAt() {},
    readInt: function readInt(e) {
      var t,
        r = 0;
      for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) r = (r << 8) + this.byteAt(t);
      return this.index += e, r;
    },
    readString: function readString(t) {
      return e.transformTo("string", this.readData(t));
    },
    readData: function readData() {},
    lastIndexOfSignature: function lastIndexOfSignature() {},
    readAndCheckSignature: function readAndCheckSignature() {},
    readDate: function readDate() {
      var e = this.readInt(4);
      return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
    }
  }, ar = t;
}
function Dr() {
  if (or) return sr;
  or = 1;
  var e = Er();
  function t(t) {
    e.call(this, t);
    for (var r = 0; r < this.data.length; r++) t[r] = 255 & t[r];
  }
  return Ne().inherits(t, e), t.prototype.byteAt = function (e) {
    return this.data[this.zero + e];
  }, t.prototype.lastIndexOfSignature = function (e) {
    for (var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2), a = e.charCodeAt(3), i = this.length - 4; i >= 0; --i) if (this.data[i] === t && this.data[i + 1] === r && this.data[i + 2] === n && this.data[i + 3] === a) return i - this.zero;
    return -1;
  }, t.prototype.readAndCheckSignature = function (e) {
    var t = e.charCodeAt(0),
      r = e.charCodeAt(1),
      n = e.charCodeAt(2),
      a = e.charCodeAt(3),
      i = this.readData(4);
    return t === i[0] && r === i[1] && n === i[2] && a === i[3];
  }, t.prototype.readData = function (e) {
    if (this.checkOffset(e), 0 === e) return [];
    var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
    return this.index += e, t;
  }, sr = t;
}
function Nr() {
  if (hr) return cr;
  hr = 1;
  var e = Dr();
  function t(t) {
    e.call(this, t);
  }
  return Ne().inherits(t, e), t.prototype.readData = function (e) {
    if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
    var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
    return this.index += e, t;
  }, cr = t;
}
function Br() {
  if (mr) return pr;
  mr = 1;
  var e = Ne(),
    t = ne(),
    r = Dr(),
    n = function () {
      if (ur) return lr;
      ur = 1;
      var e = Er();
      function t(t) {
        e.call(this, t);
      }
      return Ne().inherits(t, e), t.prototype.byteAt = function (e) {
        return this.data.charCodeAt(this.zero + e);
      }, t.prototype.lastIndexOfSignature = function (e) {
        return this.data.lastIndexOf(e) - this.zero;
      }, t.prototype.readAndCheckSignature = function (e) {
        return e === this.readData(4);
      }, t.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, lr = t;
    }(),
    a = function () {
      if (fr) return dr;
      fr = 1;
      var e = Nr();
      function t(t) {
        e.call(this, t);
      }
      return Ne().inherits(t, e), t.prototype.readData = function (e) {
        this.checkOffset(e);
        var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t;
      }, dr = t;
    }(),
    i = Nr();
  return pr = function pr(s) {
    var o = e.getTypeOf(s);
    return e.checkSupport(o), "string" !== o || t.uint8array ? "nodebuffer" === o ? new a(s) : t.uint8array ? new i(e.transformTo("uint8array", s)) : new r(e.transformTo("array", s)) : new n(s);
  };
}
function Rr() {
  if (br) return gr;
  br = 1;
  var e = Br(),
    t = Ne(),
    r = Qe(),
    n = Je(),
    a = Re(),
    i = Kt(),
    s = ne();
  function o(e, t) {
    this.options = e, this.loadOptions = t;
  }
  return o.prototype = {
    isEncrypted: function isEncrypted() {
      return 1 == (1 & this.bitFlag);
    },
    useUTF8: function useUTF8() {
      return 2048 == (2048 & this.bitFlag);
    },
    readLocalPart: function readLocalPart(e) {
      var n, a;
      if (e.skip(22), this.fileNameLength = e.readInt(2), a = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(a), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
      if (null === (n = function (e) {
        for (var t in i) if (Object.prototype.hasOwnProperty.call(i, t) && i[t].magic === e) return i[t];
        return null;
      }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + t.pretty(this.compressionMethod) + " unknown (inner file : " + t.transformTo("string", this.fileName) + ")");
      this.decompressed = new r(this.compressedSize, this.uncompressedSize, this.crc32, n, e.readData(this.compressedSize));
    },
    readCentralPart: function readCentralPart(e) {
      this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
      var t = e.readInt(2);
      if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
      e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
    },
    processAttributes: function processAttributes() {
      this.unixPermissions = null, this.dosPermissions = null;
      var e = this.versionMadeBy >> 8;
      this.dir = !!(16 & this.externalFileAttributes), 0 === e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 === e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
    },
    parseZIP64ExtraField: function parseZIP64ExtraField() {
      if (this.extraFields[1]) {
        var r = e(this.extraFields[1].value);
        this.uncompressedSize === t.MAX_VALUE_32BITS && (this.uncompressedSize = r.readInt(8)), this.compressedSize === t.MAX_VALUE_32BITS && (this.compressedSize = r.readInt(8)), this.localHeaderOffset === t.MAX_VALUE_32BITS && (this.localHeaderOffset = r.readInt(8)), this.diskNumberStart === t.MAX_VALUE_32BITS && (this.diskNumberStart = r.readInt(4));
      }
    },
    readExtraFields: function readExtraFields(e) {
      var t,
        r,
        n,
        a = e.index + this.extraFieldsLength;
      for (this.extraFields || (this.extraFields = {}); e.index + 4 < a;) t = e.readInt(2), r = e.readInt(2), n = e.readData(r), this.extraFields[t] = {
        id: t,
        length: r,
        value: n
      };
      e.setIndex(a);
    },
    handleUTF8: function handleUTF8() {
      var e = s.uint8array ? "uint8array" : "array";
      if (this.useUTF8()) this.fileNameStr = a.utf8decode(this.fileName), this.fileCommentStr = a.utf8decode(this.fileComment);else {
        var r = this.findExtraFieldUnicodePath();
        if (null !== r) this.fileNameStr = r;else {
          var n = t.transformTo(e, this.fileName);
          this.fileNameStr = this.loadOptions.decodeFileName(n);
        }
        var i = this.findExtraFieldUnicodeComment();
        if (null !== i) this.fileCommentStr = i;else {
          var o = t.transformTo(e, this.fileComment);
          this.fileCommentStr = this.loadOptions.decodeFileName(o);
        }
      }
    },
    findExtraFieldUnicodePath: function findExtraFieldUnicodePath() {
      var t = this.extraFields[28789];
      if (t) {
        var r = e(t.value);
        return 1 !== r.readInt(1) || n(this.fileName) !== r.readInt(4) ? null : a.utf8decode(r.readData(t.length - 5));
      }
      return null;
    },
    findExtraFieldUnicodeComment: function findExtraFieldUnicodeComment() {
      var t = this.extraFields[25461];
      if (t) {
        var r = e(t.value);
        return 1 !== r.readInt(1) || n(this.fileComment) !== r.readInt(4) ? null : a.utf8decode(r.readData(t.length - 5));
      }
      return null;
    }
  }, gr = o;
}
function Or() {
  if (wr) return _r;
  wr = 1;
  var e = Ne(),
    t = be(),
    r = Re(),
    n = function () {
      if (vr) return yr;
      vr = 1;
      var e = Br(),
        t = Ne(),
        r = Ar(),
        n = Rr(),
        a = ne();
      function i(e) {
        this.files = [], this.loadOptions = e;
      }
      return i.prototype = {
        checkSignature: function checkSignature(e) {
          if (!this.reader.readAndCheckSignature(e)) {
            this.reader.index -= 4;
            var r = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + t.pretty(r) + ", expected " + t.pretty(e) + ")");
          }
        },
        isSignature: function isSignature(e, t) {
          var r = this.reader.index;
          this.reader.setIndex(e);
          var n = this.reader.readString(4) === t;
          return this.reader.setIndex(r), n;
        },
        readBlockEndOfCentral: function readBlockEndOfCentral() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e = this.reader.readData(this.zipCommentLength),
            r = a.uint8array ? "uint8array" : "array",
            n = t.transformTo(r, e);
          this.zipComment = this.loadOptions.decodeFileName(n);
        },
        readBlockZip64EndOfCentral: function readBlockZip64EndOfCentral() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n;) e = this.reader.readInt(2), t = this.reader.readInt(4), r = this.reader.readData(t), this.zip64ExtensibleData[e] = {
            id: e,
            length: t,
            value: r
          };
        },
        readBlockZip64EndOfCentralLocator: function readBlockZip64EndOfCentralLocator() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported");
        },
        readLocalFiles: function readLocalFiles() {
          var e, t;
          for (e = 0; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(r.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
        },
        readCentralDir: function readCentralDir() {
          var e;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER);) (e = new n({
            zip64: this.zip64
          }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        },
        readEndOfCentral: function readEndOfCentral() {
          var e = this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);
          if (e < 0) throw this.isSignature(0, r.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(e);
          var n = e;
          if (this.checkSignature(r.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === t.MAX_VALUE_16BITS || this.diskWithCentralDirStart === t.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === t.MAX_VALUE_16BITS || this.centralDirRecords === t.MAX_VALUE_16BITS || this.centralDirSize === t.MAX_VALUE_32BITS || this.centralDirOffset === t.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e), this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, r.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var a = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (a += 20, a += 12 + this.zip64EndOfCentralSize);
          var i = n - a;
          if (i > 0) this.isSignature(n, r.CENTRAL_FILE_HEADER) || (this.reader.zero = i);else if (i < 0) throw new Error("Corrupted zip: missing " + Math.abs(i) + " bytes.");
        },
        prepareReader: function prepareReader(t) {
          this.reader = e(t);
        },
        load: function load(e) {
          this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        }
      }, yr = i;
    }(),
    a = Ge(),
    i = me();
  function s(e) {
    return new t.Promise(function (t, r) {
      var n = e.decompressed.getContentWorker().pipe(new a());
      n.on("error", function (e) {
        r(e);
      }).on("end", function () {
        n.streamInfo.crc32 !== e.decompressed.crc32 ? r(new Error("Corrupted zip : CRC32 mismatch")) : t();
      }).resume();
    });
  }
  return _r = function _r(a, o) {
    var l = this;
    return o = e.extend(o || {}, {
      base64: !1,
      checkCRC32: !1,
      optimizedBinaryString: !1,
      createFolders: !1,
      decodeFileName: r.utf8decode
    }), i.isNode && i.isStream(a) ? t.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : e.prepareContent("the loaded zip file", a, !0, o.optimizedBinaryString, o.base64).then(function (e) {
      var t = new n(o);
      return t.load(e), t;
    }).then(function (e) {
      var r = [t.Promise.resolve(e)],
        n = e.files;
      if (o.checkCRC32) for (var a = 0; a < n.length; a++) r.push(s(n[a]));
      return t.Promise.all(r);
    }).then(function (t) {
      for (var r = t.shift(), n = r.files, a = 0; a < n.length; a++) {
        var i = n[a],
          s = i.fileNameStr,
          u = e.resolve(i.fileNameStr);
        l.file(u, i.decompressed, {
          binary: !0,
          optimizedBinaryString: !0,
          date: i.date,
          dir: i.dir,
          comment: i.fileCommentStr.length ? i.fileCommentStr : null,
          unixPermissions: i.unixPermissions,
          dosPermissions: i.dosPermissions,
          createFolders: o.createFolders
        }), i.dir || (l.file(u).unsafeOriginalName = s);
      }
      return r.zipComment.length && (l.comment = r.zipComment), l;
    });
  }, _r;
}
globalThis;
var Mr = c.exports = function (e) {
  return function () {
    var t = {
        438: function _(e, t, r) {
          r.r(t), r.d(t, {
            "default": function _default() {
              return d;
            }
          });
          var n = r(537),
            a = r.n(n),
            i = r(645),
            s = r.n(i),
            o = r(806),
            l = r.n(o),
            u = new URL(r(583), r.b),
            c = s()(a()),
            h = l()(u);
          c.push([e.id, "@namespace \"http://www.w3.org/1998/Math/MathML\";math{display:inline-block;line-height:initial}mfrac{display:inline-block;vertical-align:-50%;text-align:center}mfrac>:first-child{border-bottom:solid thin currentColor}mfrac>*{display:block}msub>:nth-child(2){font-size:smaller;vertical-align:sub}msup>:nth-child(2){font-size:smaller;vertical-align:super}munder,mover,munderover{display:inline-flex;flex-flow:column nowrap;vertical-align:middle;text-align:center}munder>:not(:first-child),mover>:not(:first-child),munderover>:not(:first-child){font-size:smaller}munderover>:last-child{order:-1}mroot,msqrt{position:relative;display:inline-block;border-top:solid thin currentColor;margin-top:.5px;vertical-align:middle;margin-left:1ch}mroot:before,msqrt:before{content:\"\";display:inline-block;position:absolute;width:1ch;left:-1ch;top:-1px;bottom:0;background-image:url(".concat(h, ")}"), "", {
            version: 3,
            sources: ["webpack://./src/mathml.scss"],
            names: [],
            mappings: "AAAA,+CAAA,CAEA,KACI,oBAAA,CACA,mBAAA,CAGJ,MACI,oBAAA,CACA,mBAAA,CACA,iBAAA,CAEA,mBACI,qCAAA,CAGJ,QACI,aAAA,CAKJ,mBACI,iBAAA,CACA,kBAAA,CAKJ,mBACI,iBAAA,CACA,oBAAA,CAIR,wBACI,mBAAA,CACA,uBAAA,CACA,qBAAA,CACA,iBAAA,CAEA,iFACI,iBAAA,CAKJ,uBAAA,QAAA,CAGJ,YACI,iBAAA,CACA,oBAAA,CACA,kCAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CAEA,0BACI,UAAA,CACA,oBAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA,CACA,QAAA,CACA,wDAAA",
            sourcesContent: ["@namespace \"http://www.w3.org/1998/Math/MathML\";\r\n\r\nmath {\r\n    display: inline-block;\r\n    line-height: initial;\r\n}\r\n\r\nmfrac {\r\n    display: inline-block;\r\n    vertical-align: -50%;\r\n    text-align: center;\r\n\r\n    &>:first-child {\r\n        border-bottom: solid thin currentColor;\r\n    }\r\n\r\n    &>* {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmsub {\r\n    &>:nth-child(2) {\r\n        font-size: smaller;\r\n        vertical-align: sub;\r\n    }\r\n}\r\n\r\nmsup {\r\n    &>:nth-child(2) {\r\n        font-size: smaller;\r\n        vertical-align: super;\r\n    }\r\n}\r\n\r\nmunder, mover, munderover {\r\n    display: inline-flex;\r\n    flex-flow: column nowrap;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n\r\n    &>:not(:first-child) {\r\n        font-size: smaller;\r\n    }\r\n}\r\n\r\nmunderover {\r\n    &>:last-child { order: -1; }\r\n}\r\n\r\nmroot, msqrt {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-top: solid thin currentColor;  \r\n    margin-top: 0.5px;\r\n    vertical-align: middle;  \r\n    margin-left: 1ch; \r\n\r\n    &:before {\r\n        content: \"\";\r\n        display: inline-block;\r\n        position: absolute;\r\n        width: 1ch;\r\n        left: -1ch;\r\n        top: -1px;\r\n        bottom: 0;\r\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath d='m0,75 l5,0 l5,25 l10,-100' stroke='black' fill='none' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E\");\r\n    }\r\n}"],
            sourceRoot: ""
          }]);
          var d = c.toString();
        },
        645: function _(e) {
          e.exports = function (e) {
            var t = [];
            return t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), n && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), n && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r;
              }).join("");
            }, t.i = function (e, r, n, a, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (n) for (var o = 0; o < this.length; o++) {
                var l = this[o][0];
                null != l && (s[l] = !0);
              }
              for (var u = 0; u < e.length; u++) {
                var c = [].concat(e[u]);
                n && s[c[0]] || (void 0 !== i && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = i), r && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = r) : c[2] = r), a && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = a) : c[4] = "".concat(a)), t.push(c));
              }
            }, t;
          };
        },
        806: function _(e) {
          e.exports = function (e, t) {
            return t || (t = {}), e ? (e = String(e.__esModule ? e["default"] : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e;
          };
        },
        537: function _(e) {
          e.exports = function (e) {
            var t = e[1],
              r = e[3];
            if (!r) return t;
            if ("function" == typeof btoa) {
              var n = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),
                i = "/*# ".concat(a, " */");
              return [t].concat([i]).join("\n");
            }
            return [t].join("\n");
          };
        },
        522: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.OpenXmlPackage = void 0;
          var n = r(626),
            a = r(472),
            i = r(593),
            s = r(461);
          var o = /*#__PURE__*/function () {
            function o(e, t) {
              _classCallCheck(this, o);
              this._zip = e, this.options = t, this.xmlParser = new a.XmlParser();
            }
            _createClass(o, [{
              key: "get",
              value: function get(e) {
                return this._zip.files[function (e) {
                  return e.startsWith("/") ? e.substr(1) : e;
                }(e)];
              }
            }, {
              key: "update",
              value: function update(e, t) {
                this._zip.file(e, t);
              }
            }, {
              key: "save",
              value: function save() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blob";
                return this._zip.generateAsync({
                  type: e
                });
              }
            }, {
              key: "load",
              value: function load(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "string";
                var r, n;
                return null !== (n = null === (r = this.get(e)) || void 0 === r ? void 0 : r.async(t)) && void 0 !== n ? n : Promise.resolve(null);
              }
            }, {
              key: "loadRelationships",
              value: function () {
                var _loadRelationships = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var e,
                    t,
                    _ref,
                    _ref2,
                    _r2,
                    _n2,
                    r,
                    _args = arguments;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        e = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                        t = "_rels/.rels";
                        if (null != e) {
                          _ref = (0, i.splitPath)(e), _ref2 = _slicedToArray(_ref, 2), _r2 = _ref2[0], _n2 = _ref2[1];
                          t = "".concat(_r2, "_rels/").concat(_n2, ".rels");
                        }
                        _context.next = 5;
                        return this.load(t);
                      case 5:
                        r = _context.sent;
                        return _context.abrupt("return", r ? (0, s.parseRelationships)(this.parseXmlDocument(r).firstElementChild, this.xmlParser) : null);
                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, this);
                }));
                function loadRelationships() {
                  return _loadRelationships.apply(this, arguments);
                }
                return loadRelationships;
              }()
            }, {
              key: "parseXmlDocument",
              value: function parseXmlDocument(e) {
                return (0, a.parseXmlString)(e, this.options.trimXmlDeclaration);
              }
            }], [{
              key: "load",
              value: function () {
                var _load = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, t) {
                  var r;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return n.loadAsync(e);
                      case 2:
                        r = _context2.sent;
                        return _context2.abrupt("return", new o(r, t));
                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                function load(_x2, _x3) {
                  return _load.apply(this, arguments);
                }
                return load;
              }()
            }]);
            return o;
          }();
          t.OpenXmlPackage = o;
        },
        530: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.Part = void 0;
          var n = r(472);
          t.Part = /*#__PURE__*/function () {
            function _class(e, t) {
              _classCallCheck(this, _class);
              this._package = e, this.path = t;
            }
            _createClass(_class, [{
              key: "load",
              value: function () {
                var _load2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  var e, t;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return this._package.loadRelationships(this.path);
                      case 2:
                        this.rels = _context3.sent;
                        _context3.next = 5;
                        return this._package.load(this.path);
                      case 5:
                        e = _context3.sent;
                        t = this._package.parseXmlDocument(e);
                        this._package.options.keepOrigin && (this._xmlDocument = t), this.parseXml(t.firstElementChild);
                      case 8:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, this);
                }));
                function load() {
                  return _load2.apply(this, arguments);
                }
                return load;
              }()
            }, {
              key: "save",
              value: function save() {
                this._package.update(this.path, (0, n.serializeXmlString)(this._xmlDocument));
              }
            }, {
              key: "parseXml",
              value: function parseXml(e) {}
            }]);
            return _class;
          }();
        },
        461: function _(e, t) {
          var r;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseRelationships = t.RelationshipTypes = void 0, function (e) {
            e.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", e.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", e.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", e.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", e.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", e.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", e.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", e.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", e.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", e.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", e.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", e.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", e.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", e.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", e.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", e.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", e.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties";
          }(r || (t.RelationshipTypes = r = {})), t.parseRelationships = function (e, t) {
            return t.elements(e).map(function (e) {
              return {
                id: t.attr(e, "Id"),
                type: t.attr(e, "Type"),
                target: t.attr(e, "Target"),
                targetMode: t.attr(e, "TargetMode")
              };
            });
          };
        },
        168: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.DocumentParser = t.autos = void 0;
          var n = r(120),
            a = r(109),
            i = r(59),
            s = r(472),
            o = r(488),
            l = r(172),
            u = r(149),
            c = r(320);
          t.autos = {
            shd: "inherit",
            color: "black",
            borderColor: "black",
            highlight: "transparent"
          };
          var h = [],
            d = {
              oMath: n.DomType.MmlMath,
              oMathPara: n.DomType.MmlMathParagraph,
              f: n.DomType.MmlFraction,
              num: n.DomType.MmlNumerator,
              den: n.DomType.MmlDenominator,
              rad: n.DomType.MmlRadical,
              deg: n.DomType.MmlDegree,
              e: n.DomType.MmlBase,
              sSup: n.DomType.MmlSuperscript,
              sSub: n.DomType.MmlSubscript,
              sup: n.DomType.MmlSuperArgument,
              sub: n.DomType.MmlSubArgument,
              d: n.DomType.MmlDelimiter,
              nary: n.DomType.MmlNary
            };
          t.DocumentParser = /*#__PURE__*/function () {
            function _class2(e) {
              _classCallCheck(this, _class2);
              this.options = Object.assign({
                ignoreWidth: !1,
                debug: !1
              }, e);
            }
            _createClass(_class2, [{
              key: "parseNotes",
              value: function parseNotes(e, t, r) {
                var n = [];
                var _iterator = _createForOfIteratorHelper(s["default"].elements(e, t)),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _a = _step.value;
                    var _e2 = new r();
                    _e2.id = s["default"].attr(_a, "id"), _e2.noteType = s["default"].attr(_a, "type"), _e2.children = this.parseBodyElements(_a), n.push(_e2);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                return n;
              }
            }, {
              key: "parseDocumentFile",
              value: function parseDocumentFile(e) {
                var t = s["default"].element(e, "body"),
                  r = s["default"].element(e, "background"),
                  a = s["default"].element(t, "sectPr");
                return {
                  type: n.DomType.Document,
                  children: this.parseBodyElements(t),
                  props: a ? (0, i.parseSectionProperties)(a, s["default"]) : {},
                  cssStyle: r ? this.parseBackground(r) : {}
                };
              }
            }, {
              key: "parseBackground",
              value: function parseBackground(e) {
                var t = {},
                  r = p.colorAttr(e, "color");
                return r && (t["background-color"] = r), t;
              }
            }, {
              key: "parseBodyElements",
              value: function parseBodyElements(e) {
                var _this = this;
                var t = [];
                var _iterator2 = _createForOfIteratorHelper(s["default"].elements(e)),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _r3 = _step2.value;
                    switch (_r3.localName) {
                      case "p":
                        t.push(this.parseParagraph(_r3));
                        break;
                      case "tbl":
                        t.push(this.parseTable(_r3));
                        break;
                      case "sdt":
                        t.push.apply(t, _toConsumableArray(this.parseSdt(_r3, function (e) {
                          return _this.parseBodyElements(e);
                        })));
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                return t;
              }
            }, {
              key: "parseStylesFile",
              value: function parseStylesFile(e) {
                var _this2 = this;
                var t = [];
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "style":
                      t.push(_this2.parseStyle(e));
                      break;
                    case "docDefaults":
                      t.push(_this2.parseDefaultStyles(e));
                  }
                }), t;
              }
            }, {
              key: "parseDefaultStyles",
              value: function parseDefaultStyles(e) {
                var _this3 = this;
                var t = {
                  id: null,
                  name: null,
                  target: null,
                  basedOn: null,
                  styles: []
                };
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "rPrDefault":
                      var r = s["default"].element(e, "rPr");
                      r && t.styles.push({
                        target: "span",
                        values: _this3.parseDefaultProperties(r, {})
                      });
                      break;
                    case "pPrDefault":
                      var n = s["default"].element(e, "pPr");
                      n && t.styles.push({
                        target: "p",
                        values: _this3.parseDefaultProperties(n, {})
                      });
                  }
                }), t;
              }
            }, {
              key: "parseStyle",
              value: function parseStyle(e) {
                var _this4 = this;
                var t = {
                  id: s["default"].attr(e, "styleId"),
                  isDefault: s["default"].boolAttr(e, "default"),
                  name: null,
                  target: null,
                  basedOn: null,
                  styles: [],
                  linked: null
                };
                switch (s["default"].attr(e, "type")) {
                  case "paragraph":
                    t.target = "p";
                    break;
                  case "table":
                    t.target = "table";
                    break;
                  case "character":
                    t.target = "span";
                }
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "basedOn":
                      t.basedOn = s["default"].attr(e, "val");
                      break;
                    case "name":
                      t.name = s["default"].attr(e, "val");
                      break;
                    case "link":
                      t.linked = s["default"].attr(e, "val");
                      break;
                    case "next":
                      t.next = s["default"].attr(e, "val");
                      break;
                    case "aliases":
                      t.aliases = s["default"].attr(e, "val").split(",");
                      break;
                    case "pPr":
                      t.styles.push({
                        target: "p",
                        values: _this4.parseDefaultProperties(e, {})
                      }), t.paragraphProps = (0, a.parseParagraphProperties)(e, s["default"]);
                      break;
                    case "rPr":
                      t.styles.push({
                        target: "span",
                        values: _this4.parseDefaultProperties(e, {})
                      }), t.runProps = (0, o.parseRunProperties)(e, s["default"]);
                      break;
                    case "tblPr":
                    case "tcPr":
                      t.styles.push({
                        target: "td",
                        values: _this4.parseDefaultProperties(e, {})
                      });
                      break;
                    case "tblStylePr":
                      var _iterator3 = _createForOfIteratorHelper(_this4.parseTableStyle(e)),
                        _step3;
                      try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                          var _r4 = _step3.value;
                          t.styles.push(_r4);
                        }
                      } catch (err) {
                        _iterator3.e(err);
                      } finally {
                        _iterator3.f();
                      }
                      break;
                    case "rsid":
                    case "qFormat":
                    case "hidden":
                    case "semiHidden":
                    case "unhideWhenUsed":
                    case "autoRedefine":
                    case "uiPriority":
                      break;
                    default:
                      _this4.options.debug && console.warn("DOCX: Unknown style element: ".concat(e.localName));
                  }
                }), t;
              }
            }, {
              key: "parseTableStyle",
              value: function parseTableStyle(e) {
                var _this5 = this;
                var t = [],
                  r = s["default"].attr(e, "type"),
                  n = "",
                  a = "";
                switch (r) {
                  case "firstRow":
                    a = ".first-row", n = "tr.first-row td";
                    break;
                  case "lastRow":
                    a = ".last-row", n = "tr.last-row td";
                    break;
                  case "firstCol":
                    a = ".first-col", n = "td.first-col";
                    break;
                  case "lastCol":
                    a = ".last-col", n = "td.last-col";
                    break;
                  case "band1Vert":
                    a = ":not(.no-vband)", n = "td.odd-col";
                    break;
                  case "band2Vert":
                    a = ":not(.no-vband)", n = "td.even-col";
                    break;
                  case "band1Horz":
                    a = ":not(.no-hband)", n = "tr.odd-row";
                    break;
                  case "band2Horz":
                    a = ":not(.no-hband)", n = "tr.even-row";
                    break;
                  default:
                    return [];
                }
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "pPr":
                      t.push({
                        target: "".concat(n, " p"),
                        mod: a,
                        values: _this5.parseDefaultProperties(e, {})
                      });
                      break;
                    case "rPr":
                      t.push({
                        target: "".concat(n, " span"),
                        mod: a,
                        values: _this5.parseDefaultProperties(e, {})
                      });
                      break;
                    case "tblPr":
                    case "tcPr":
                      t.push({
                        target: n,
                        mod: a,
                        values: _this5.parseDefaultProperties(e, {})
                      });
                  }
                }), t;
              }
            }, {
              key: "parseNumberingFile",
              value: function parseNumberingFile(e) {
                var _this6 = this;
                var t = [],
                  r = {},
                  n = [];
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "abstractNum":
                      _this6.parseAbstractNumbering(e, n).forEach(function (e) {
                        return t.push(e);
                      });
                      break;
                    case "numPicBullet":
                      n.push(_this6.parseNumberingPicBullet(e));
                      break;
                    case "num":
                      var a = s["default"].attr(e, "numId"),
                        i = s["default"].elementAttr(e, "abstractNumId", "val");
                      r[i] = a;
                  }
                }), t.forEach(function (e) {
                  return e.id = r[e.id];
                }), t;
              }
            }, {
              key: "parseNumberingPicBullet",
              value: function parseNumberingPicBullet(e) {
                var t = s["default"].element(e, "pict"),
                  r = t && s["default"].element(t, "shape"),
                  n = r && s["default"].element(r, "imagedata");
                return n ? {
                  id: s["default"].intAttr(e, "numPicBulletId"),
                  src: s["default"].attr(n, "id"),
                  style: s["default"].attr(r, "style")
                } : null;
              }
            }, {
              key: "parseAbstractNumbering",
              value: function parseAbstractNumbering(e, t) {
                var _this7 = this;
                var r = [],
                  n = s["default"].attr(e, "abstractNumId");
                return p.foreach(e, function (e) {
                  "lvl" === e.localName && r.push(_this7.parseNumberingLevel(n, e, t));
                }), r;
              }
            }, {
              key: "parseNumberingLevel",
              value: function parseNumberingLevel(e, t, r) {
                var _this8 = this;
                var n = {
                  id: e,
                  level: s["default"].intAttr(t, "ilvl"),
                  pStyleName: void 0,
                  pStyle: {},
                  rStyle: {},
                  suff: "tab"
                };
                return p.foreach(t, function (e) {
                  switch (e.localName) {
                    case "pPr":
                      _this8.parseDefaultProperties(e, n.pStyle);
                      break;
                    case "rPr":
                      _this8.parseDefaultProperties(e, n.rStyle);
                      break;
                    case "lvlPicBulletId":
                      var t = s["default"].intAttr(e, "val");
                      n.bullet = r.find(function (e) {
                        return e.id == t;
                      });
                      break;
                    case "lvlText":
                      n.levelText = s["default"].attr(e, "val");
                      break;
                    case "pStyle":
                      n.pStyleName = s["default"].attr(e, "val");
                      break;
                    case "numFmt":
                      n.format = s["default"].attr(e, "val");
                      break;
                    case "suff":
                      n.suff = s["default"].attr(e, "val");
                  }
                }), n;
              }
            }, {
              key: "parseSdt",
              value: function parseSdt(e, t) {
                var r = s["default"].element(e, "sdtContent");
                return r ? t(r) : [];
              }
            }, {
              key: "parseInserted",
              value: function parseInserted(e, t) {
                var r, a;
                return {
                  type: n.DomType.Inserted,
                  children: null !== (a = null === (r = t(e)) || void 0 === r ? void 0 : r.children) && void 0 !== a ? a : []
                };
              }
            }, {
              key: "parseDeleted",
              value: function parseDeleted(e, t) {
                var r, a;
                return {
                  type: n.DomType.Deleted,
                  children: null !== (a = null === (r = t(e)) || void 0 === r ? void 0 : r.children) && void 0 !== a ? a : []
                };
              }
            }, {
              key: "parseParagraph",
              value: function parseParagraph(e) {
                var _t$children,
                  _this9 = this;
                var t = {
                  type: n.DomType.Paragraph,
                  children: []
                };
                var _iterator4 = _createForOfIteratorHelper(s["default"].elements(e)),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _r5 = _step4.value;
                    switch (_r5.localName) {
                      case "pPr":
                        this.parseParagraphProperties(_r5, t);
                        break;
                      case "r":
                        t.children.push(this.parseRun(_r5, t));
                        break;
                      case "hyperlink":
                        t.children.push(this.parseHyperlink(_r5, t));
                        break;
                      case "bookmarkStart":
                        t.children.push((0, l.parseBookmarkStart)(_r5, s["default"]));
                        break;
                      case "bookmarkEnd":
                        t.children.push((0, l.parseBookmarkEnd)(_r5, s["default"]));
                        break;
                      case "oMath":
                      case "oMathPara":
                        t.children.push(this.parseMathElement(_r5));
                        break;
                      case "sdt":
                        (_t$children = t.children).push.apply(_t$children, _toConsumableArray(this.parseSdt(_r5, function (e) {
                          return _this9.parseParagraph(e).children;
                        })));
                        break;
                      case "ins":
                        t.children.push(this.parseInserted(_r5, function (e) {
                          return _this9.parseParagraph(e);
                        }));
                        break;
                      case "del":
                        t.children.push(this.parseDeleted(_r5, function (e) {
                          return _this9.parseParagraph(e);
                        }));
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                return t;
              }
            }, {
              key: "parseParagraphProperties",
              value: function parseParagraphProperties(e, t) {
                var _this10 = this;
                this.parseDefaultProperties(e, t.cssStyle = {}, null, function (e) {
                  if ((0, a.parseParagraphProperty)(e, t, s["default"])) return !0;
                  switch (e.localName) {
                    case "pStyle":
                      t.styleName = s["default"].attr(e, "val");
                      break;
                    case "cnfStyle":
                      t.className = m.classNameOfCnfStyle(e);
                      break;
                    case "framePr":
                      _this10.parseFrame(e, t);
                      break;
                    case "rPr":
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
            }, {
              key: "parseFrame",
              value: function parseFrame(e, t) {
                "drop" == s["default"].attr(e, "dropCap") && (t.cssStyle["float"] = "left");
              }
            }, {
              key: "parseHyperlink",
              value: function parseHyperlink(e, t) {
                var _this11 = this;
                var r = {
                    type: n.DomType.Hyperlink,
                    parent: t,
                    children: []
                  },
                  a = s["default"].attr(e, "anchor"),
                  i = s["default"].attr(e, "id");
                return a && (r.href = "#" + a), i && (r.id = i), p.foreach(e, function (e) {
                  "r" === e.localName && r.children.push(_this11.parseRun(e, r));
                }), r;
              }
            }, {
              key: "parseRun",
              value: function parseRun(e, t) {
                var _this12 = this;
                var r = {
                  type: n.DomType.Run,
                  parent: t,
                  children: []
                };
                return p.foreach(e, function (e) {
                  switch ((e = _this12.checkAlternateContent(e)).localName) {
                    case "t":
                      r.children.push({
                        type: n.DomType.Text,
                        text: e.textContent
                      });
                      break;
                    case "delText":
                      r.children.push({
                        type: n.DomType.DeletedText,
                        text: e.textContent
                      });
                      break;
                    case "fldSimple":
                      r.children.push({
                        type: n.DomType.SimpleField,
                        instruction: s["default"].attr(e, "instr"),
                        lock: s["default"].boolAttr(e, "lock", !1),
                        dirty: s["default"].boolAttr(e, "dirty", !1)
                      });
                      break;
                    case "instrText":
                      r.fieldRun = !0, r.children.push({
                        type: n.DomType.Instruction,
                        text: e.textContent
                      });
                      break;
                    case "fldChar":
                      r.fieldRun = !0, r.children.push({
                        type: n.DomType.ComplexField,
                        charType: s["default"].attr(e, "fldCharType"),
                        lock: s["default"].boolAttr(e, "lock", !1),
                        dirty: s["default"].boolAttr(e, "dirty", !1)
                      });
                      break;
                    case "noBreakHyphen":
                      r.children.push({
                        type: n.DomType.NoBreakHyphen
                      });
                      break;
                    case "br":
                      r.children.push({
                        type: n.DomType.Break,
                        "break": s["default"].attr(e, "type") || "textWrapping"
                      });
                      break;
                    case "lastRenderedPageBreak":
                      r.children.push({
                        type: n.DomType.Break,
                        "break": "lastRenderedPageBreak"
                      });
                      break;
                    case "sym":
                      r.children.push({
                        type: n.DomType.Symbol,
                        font: s["default"].attr(e, "font"),
                        "char": s["default"].attr(e, "char")
                      });
                      break;
                    case "tab":
                      r.children.push({
                        type: n.DomType.Tab
                      });
                      break;
                    case "footnoteReference":
                      r.children.push({
                        type: n.DomType.FootnoteReference,
                        id: s["default"].attr(e, "id")
                      });
                      break;
                    case "endnoteReference":
                      r.children.push({
                        type: n.DomType.EndnoteReference,
                        id: s["default"].attr(e, "id")
                      });
                      break;
                    case "drawing":
                      var _t2 = _this12.parseDrawing(e);
                      _t2 && (r.children = [_t2]);
                      break;
                    case "pict":
                      r.children.push(_this12.parseVmlPicture(e));
                      break;
                    case "rPr":
                      _this12.parseRunProperties(e, r);
                  }
                }), r;
              }
            }, {
              key: "parseMathElement",
              value: function parseMathElement(e) {
                var t = "".concat(e.localName, "Pr"),
                  r = {
                    type: d[e.localName],
                    children: []
                  };
                var _iterator5 = _createForOfIteratorHelper(s["default"].elements(e)),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _i2 = _step5.value;
                    if (d[_i2.localName]) r.children.push(this.parseMathElement(_i2));else if ("r" == _i2.localName) {
                      var a = this.parseRun(_i2);
                      a.type = n.DomType.MmlRun, r.children.push(a);
                    } else _i2.localName == t && (r.props = this.parseMathProperies(_i2));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                return r;
              }
            }, {
              key: "parseMathProperies",
              value: function parseMathProperies(e) {
                var t = {};
                var _iterator6 = _createForOfIteratorHelper(s["default"].elements(e)),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _r6 = _step6.value;
                    switch (_r6.localName) {
                      case "chr":
                        t["char"] = s["default"].attr(_r6, "val");
                        break;
                      case "degHide":
                        t.hideDegree = s["default"].boolAttr(_r6, "val");
                        break;
                      case "begChr":
                        t.beginChar = s["default"].attr(_r6, "val");
                        break;
                      case "endChr":
                        t.endChar = s["default"].attr(_r6, "val");
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                return t;
              }
            }, {
              key: "parseRunProperties",
              value: function parseRunProperties(e, t) {
                this.parseDefaultProperties(e, t.cssStyle = {}, null, function (e) {
                  switch (e.localName) {
                    case "rStyle":
                      t.styleName = s["default"].attr(e, "val");
                      break;
                    case "vertAlign":
                      t.verticalAlign = m.valueOfVertAlign(e, !0);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
            }, {
              key: "parseVmlPicture",
              value: function parseVmlPicture(e) {
                var t = {
                  type: n.DomType.VmlPicture,
                  children: []
                };
                var _iterator7 = _createForOfIteratorHelper(s["default"].elements(e)),
                  _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var _r7 = _step7.value;
                    var _e3 = (0, c.parseVmlElement)(_r7);
                    _e3 && t.children.push(_e3);
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
                return t;
              }
            }, {
              key: "checkAlternateContent",
              value: function checkAlternateContent(e) {
                var t;
                if ("AlternateContent" != e.localName) return e;
                var r = s["default"].element(e, "Choice");
                if (r) {
                  var n = s["default"].attr(r, "Requires"),
                    a = e.lookupNamespaceURI(n);
                  if (h.includes(a)) return r.firstElementChild;
                }
                return null === (t = s["default"].element(e, "Fallback")) || void 0 === t ? void 0 : t.firstElementChild;
              }
            }, {
              key: "parseDrawing",
              value: function parseDrawing(e) {
                var _iterator8 = _createForOfIteratorHelper(s["default"].elements(e)),
                  _step8;
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var t = _step8.value;
                    switch (t.localName) {
                      case "inline":
                      case "anchor":
                        return this.parseDrawingWrapper(t);
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            }, {
              key: "parseDrawingWrapper",
              value: function parseDrawingWrapper(e) {
                var t,
                  r = {
                    type: n.DomType.Drawing,
                    children: [],
                    cssStyle: {}
                  },
                  a = "anchor" == e.localName;
                var i = null,
                  o = s["default"].boolAttr(e, "simplePos"),
                  l = {
                    relative: "page",
                    align: "left",
                    offset: "0"
                  },
                  c = {
                    relative: "page",
                    align: "top",
                    offset: "0"
                  };
                var _iterator9 = _createForOfIteratorHelper(s["default"].elements(e)),
                  _step9;
                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var h = _step9.value;
                    switch (h.localName) {
                      case "simplePos":
                        o && (l.offset = s["default"].lengthAttr(h, "x", u.LengthUsage.Emu), c.offset = s["default"].lengthAttr(h, "y", u.LengthUsage.Emu));
                        break;
                      case "extent":
                        r.cssStyle.width = s["default"].lengthAttr(h, "cx", u.LengthUsage.Emu), r.cssStyle.height = s["default"].lengthAttr(h, "cy", u.LengthUsage.Emu);
                        break;
                      case "positionH":
                      case "positionV":
                        if (!o) {
                          var _e4 = "positionH" == h.localName ? l : c;
                          var d = s["default"].element(h, "align"),
                            f = s["default"].element(h, "posOffset");
                          _e4.relative = null !== (t = s["default"].attr(h, "relativeFrom")) && void 0 !== t ? t : _e4.relative, d && (_e4.align = d.textContent), f && (_e4.offset = p.sizeValue(f, u.LengthUsage.Emu));
                        }
                        break;
                      case "wrapTopAndBottom":
                        i = "wrapTopAndBottom";
                        break;
                      case "wrapNone":
                        i = "wrapNone";
                        break;
                      case "graphic":
                        var m = this.parseGraphic(h);
                        m && r.children.push(m);
                    }
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
                return "wrapTopAndBottom" == i ? (r.cssStyle.display = "block", l.align && (r.cssStyle["text-align"] = l.align, r.cssStyle.width = "100%")) : "wrapNone" == i ? (r.cssStyle.display = "block", r.cssStyle.position = "relative", r.cssStyle.width = "0px", r.cssStyle.height = "0px", l.offset && (r.cssStyle.left = l.offset), c.offset && (r.cssStyle.top = c.offset)) : !a || "left" != l.align && "right" != l.align || (r.cssStyle["float"] = l.align), r;
              }
            }, {
              key: "parseGraphic",
              value: function parseGraphic(e) {
                var t = s["default"].element(e, "graphicData");
                var _iterator10 = _createForOfIteratorHelper(s["default"].elements(t)),
                  _step10;
                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var _e5 = _step10.value;
                    if ("pic" === _e5.localName) return this.parsePicture(_e5);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
                return null;
              }
            }, {
              key: "parsePicture",
              value: function parsePicture(e) {
                var t = {
                    type: n.DomType.Image,
                    src: "",
                    cssStyle: {}
                  },
                  r = s["default"].element(e, "blipFill"),
                  a = s["default"].element(r, "blip");
                t.src = s["default"].attr(a, "embed");
                var i = s["default"].element(e, "spPr"),
                  o = s["default"].element(i, "xfrm");
                var _iterator11 = _createForOfIteratorHelper((t.cssStyle.position = "relative", s["default"].elements(o))),
                  _step11;
                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var l = _step11.value;
                    switch (l.localName) {
                      case "ext":
                        t.cssStyle.width = s["default"].lengthAttr(l, "cx", u.LengthUsage.Emu), t.cssStyle.height = s["default"].lengthAttr(l, "cy", u.LengthUsage.Emu);
                        break;
                      case "off":
                        t.cssStyle.left = s["default"].lengthAttr(l, "x", u.LengthUsage.Emu), t.cssStyle.top = s["default"].lengthAttr(l, "y", u.LengthUsage.Emu);
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
                return t;
              }
            }, {
              key: "parseTable",
              value: function parseTable(e) {
                var _this13 = this;
                var t = {
                  type: n.DomType.Table,
                  children: []
                };
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "tr":
                      t.children.push(_this13.parseTableRow(e));
                      break;
                    case "tblGrid":
                      t.columns = _this13.parseTableColumns(e);
                      break;
                    case "tblPr":
                      _this13.parseTableProperties(e, t);
                  }
                }), t;
              }
            }, {
              key: "parseTableColumns",
              value: function parseTableColumns(e) {
                var t = [];
                return p.foreach(e, function (e) {
                  "gridCol" === e.localName && t.push({
                    width: s["default"].lengthAttr(e, "w")
                  });
                }), t;
              }
            }, {
              key: "parseTableProperties",
              value: function parseTableProperties(e, t) {
                var _this14 = this;
                switch (t.cssStyle = {}, t.cellStyle = {}, this.parseDefaultProperties(e, t.cssStyle, t.cellStyle, function (e) {
                  switch (e.localName) {
                    case "tblStyle":
                      t.styleName = s["default"].attr(e, "val");
                      break;
                    case "tblLook":
                      t.className = m.classNameOftblLook(e);
                      break;
                    case "tblpPr":
                      _this14.parseTablePosition(e, t);
                      break;
                    case "tblStyleColBandSize":
                      t.colBandSize = s["default"].intAttr(e, "val");
                      break;
                    case "tblStyleRowBandSize":
                      t.rowBandSize = s["default"].intAttr(e, "val");
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                }), t.cssStyle["text-align"]) {
                  case "center":
                    delete t.cssStyle["text-align"], t.cssStyle["margin-left"] = "auto", t.cssStyle["margin-right"] = "auto";
                    break;
                  case "right":
                    delete t.cssStyle["text-align"], t.cssStyle["margin-left"] = "auto";
                }
              }
            }, {
              key: "parseTablePosition",
              value: function parseTablePosition(e, t) {
                var r = s["default"].lengthAttr(e, "topFromText"),
                  n = s["default"].lengthAttr(e, "bottomFromText"),
                  a = s["default"].lengthAttr(e, "rightFromText"),
                  i = s["default"].lengthAttr(e, "leftFromText");
                t.cssStyle["float"] = "left", t.cssStyle["margin-bottom"] = m.addSize(t.cssStyle["margin-bottom"], n), t.cssStyle["margin-left"] = m.addSize(t.cssStyle["margin-left"], i), t.cssStyle["margin-right"] = m.addSize(t.cssStyle["margin-right"], a), t.cssStyle["margin-top"] = m.addSize(t.cssStyle["margin-top"], r);
              }
            }, {
              key: "parseTableRow",
              value: function parseTableRow(e) {
                var _this15 = this;
                var t = {
                  type: n.DomType.Row,
                  children: []
                };
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "tc":
                      t.children.push(_this15.parseTableCell(e));
                      break;
                    case "trPr":
                      _this15.parseTableRowProperties(e, t);
                  }
                }), t;
              }
            }, {
              key: "parseTableRowProperties",
              value: function parseTableRowProperties(e, t) {
                t.cssStyle = this.parseDefaultProperties(e, {}, null, function (e) {
                  switch (e.localName) {
                    case "cnfStyle":
                      t.className = m.classNameOfCnfStyle(e);
                      break;
                    case "tblHeader":
                      t.isHeader = s["default"].boolAttr(e, "val");
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
            }, {
              key: "parseTableCell",
              value: function parseTableCell(e) {
                var _this16 = this;
                var t = {
                  type: n.DomType.Cell,
                  children: []
                };
                return p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "tbl":
                      t.children.push(_this16.parseTable(e));
                      break;
                    case "p":
                      t.children.push(_this16.parseParagraph(e));
                      break;
                    case "tcPr":
                      _this16.parseTableCellProperties(e, t);
                  }
                }), t;
              }
            }, {
              key: "parseTableCellProperties",
              value: function parseTableCellProperties(e, t) {
                t.cssStyle = this.parseDefaultProperties(e, {}, null, function (e) {
                  var r;
                  switch (e.localName) {
                    case "gridSpan":
                      t.span = s["default"].intAttr(e, "val", null);
                      break;
                    case "vMerge":
                      t.verticalMerge = null !== (r = s["default"].attr(e, "val")) && void 0 !== r ? r : "continue";
                      break;
                    case "cnfStyle":
                      t.className = m.classNameOfCnfStyle(e);
                      break;
                    default:
                      return !1;
                  }
                  return !0;
                });
              }
            }, {
              key: "parseDefaultProperties",
              value: function parseDefaultProperties(e) {
                var _this17 = this;
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                return r = r || {}, p.foreach(e, function (i) {
                  if (!(null == a ? void 0 : a(i))) switch (i.localName) {
                    case "jc":
                      r["text-align"] = m.valueOfJc(i);
                      break;
                    case "textAlignment":
                      r["vertical-align"] = m.valueOfTextAlignment(i);
                      break;
                    case "color":
                      r.color = p.colorAttr(i, "val", null, t.autos.color);
                      break;
                    case "sz":
                      r["font-size"] = r["min-height"] = s["default"].lengthAttr(i, "val", u.LengthUsage.FontSize);
                      break;
                    case "shd":
                      r["background-color"] = p.colorAttr(i, "fill", null, t.autos.shd);
                      break;
                    case "highlight":
                      r["background-color"] = p.colorAttr(i, "val", null, t.autos.highlight);
                      break;
                    case "vertAlign":
                      break;
                    case "position":
                      r.verticalAlign = s["default"].lengthAttr(i, "val", u.LengthUsage.FontSize);
                      break;
                    case "tcW":
                      if (_this17.options.ignoreWidth) break;
                    case "tblW":
                      r.width = m.valueOfSize(i, "w");
                      break;
                    case "trHeight":
                      _this17.parseTrHeight(i, r);
                      break;
                    case "strike":
                      r["text-decoration"] = s["default"].boolAttr(i, "val", !0) ? "line-through" : "none";
                      break;
                    case "b":
                      r["font-weight"] = s["default"].boolAttr(i, "val", !0) ? "bold" : "normal";
                      break;
                    case "i":
                      r["font-style"] = s["default"].boolAttr(i, "val", !0) ? "italic" : "normal";
                      break;
                    case "caps":
                      r["text-transform"] = s["default"].boolAttr(i, "val", !0) ? "uppercase" : "none";
                      break;
                    case "smallCaps":
                      r["text-transform"] = s["default"].boolAttr(i, "val", !0) ? "lowercase" : "none";
                      break;
                    case "u":
                      _this17.parseUnderline(i, r);
                      break;
                    case "ind":
                    case "tblInd":
                      _this17.parseIndentation(i, r);
                      break;
                    case "rFonts":
                      _this17.parseFont(i, r);
                      break;
                    case "tblBorders":
                      _this17.parseBorderProperties(i, n || r);
                      break;
                    case "tblCellSpacing":
                      r["border-spacing"] = m.valueOfMargin(i), r["border-collapse"] = "separate";
                      break;
                    case "pBdr":
                      _this17.parseBorderProperties(i, r);
                      break;
                    case "bdr":
                      r.border = m.valueOfBorder(i);
                      break;
                    case "tcBorders":
                      _this17.parseBorderProperties(i, r);
                      break;
                    case "vanish":
                      s["default"].boolAttr(i, "val", !0) && (r.display = "none");
                      break;
                    case "kern":
                    case "noWrap":
                      break;
                    case "tblCellMar":
                    case "tcMar":
                      _this17.parseMarginProperties(i, n || r);
                      break;
                    case "tblLayout":
                      r["table-layout"] = m.valueOfTblLayout(i);
                      break;
                    case "vAlign":
                      r["vertical-align"] = m.valueOfTextAlignment(i);
                      break;
                    case "spacing":
                      "pPr" == e.localName && _this17.parseSpacing(i, r);
                      break;
                    case "wordWrap":
                      s["default"].boolAttr(i, "val") && (r["overflow-wrap"] = "break-word");
                      break;
                    case "bCs":
                    case "iCs":
                    case "szCs":
                    case "tabs":
                    case "outlineLvl":
                    case "contextualSpacing":
                    case "tblStyleColBandSize":
                    case "tblStyleRowBandSize":
                    case "webHidden":
                    case "pageBreakBefore":
                    case "suppressLineNumbers":
                    case "keepLines":
                    case "keepNext":
                    case "lang":
                    case "widowControl":
                    case "bidi":
                    case "rtl":
                    case "noProof":
                      break;
                    default:
                      _this17.options.debug && console.warn("DOCX: Unknown document element: ".concat(e.localName, ".").concat(i.localName));
                  }
                }), r;
              }
            }, {
              key: "parseUnderline",
              value: function parseUnderline(e, t) {
                var r = s["default"].attr(e, "val");
                if (null != r) {
                  switch (r) {
                    case "dash":
                    case "dashDotDotHeavy":
                    case "dashDotHeavy":
                    case "dashedHeavy":
                    case "dashLong":
                    case "dashLongHeavy":
                    case "dotDash":
                    case "dotDotDash":
                      t["text-decoration-style"] = "dashed";
                      break;
                    case "dotted":
                    case "dottedHeavy":
                      t["text-decoration-style"] = "dotted";
                      break;
                    case "double":
                      t["text-decoration-style"] = "double";
                      break;
                    case "single":
                    case "thick":
                    case "words":
                      t["text-decoration"] = "underline";
                      break;
                    case "wave":
                    case "wavyDouble":
                    case "wavyHeavy":
                      t["text-decoration-style"] = "wavy";
                      break;
                    case "none":
                      t["text-decoration"] = "none";
                  }
                  var n = p.colorAttr(e, "color");
                  n && (t["text-decoration-color"] = n);
                }
              }
            }, {
              key: "parseFont",
              value: function parseFont(e, t) {
                var r = [s["default"].attr(e, "ascii"), m.themeValue(e, "asciiTheme")].filter(function (e) {
                  return e;
                }).join(", ");
                r.length > 0 && (t["font-family"] = r);
              }
            }, {
              key: "parseIndentation",
              value: function parseIndentation(e, t) {
                var r = s["default"].lengthAttr(e, "firstLine"),
                  n = s["default"].lengthAttr(e, "hanging"),
                  a = s["default"].lengthAttr(e, "left"),
                  i = s["default"].lengthAttr(e, "start"),
                  o = s["default"].lengthAttr(e, "right"),
                  l = s["default"].lengthAttr(e, "end");
                r && (t["text-indent"] = r), n && (t["text-indent"] = "-".concat(n)), (a || i) && (t["margin-left"] = a || i), (o || l) && (t["margin-right"] = o || l);
              }
            }, {
              key: "parseSpacing",
              value: function parseSpacing(e, t) {
                var r = s["default"].lengthAttr(e, "before"),
                  n = s["default"].lengthAttr(e, "after"),
                  a = s["default"].intAttr(e, "line", null),
                  i = s["default"].attr(e, "lineRule");
                if (r && (t["margin-top"] = r), n && (t["margin-bottom"] = n), null !== a) switch (i) {
                  case "auto":
                    t["line-height"] = "".concat((a / 240).toFixed(2));
                    break;
                  case "atLeast":
                    t["line-height"] = "calc(100% + ".concat(a / 20, "pt)");
                    break;
                  default:
                    t["line-height"] = t["min-height"] = a / 20 + "pt";
                }
              }
            }, {
              key: "parseMarginProperties",
              value: function parseMarginProperties(e, t) {
                p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "left":
                      t["padding-left"] = m.valueOfMargin(e);
                      break;
                    case "right":
                      t["padding-right"] = m.valueOfMargin(e);
                      break;
                    case "top":
                      t["padding-top"] = m.valueOfMargin(e);
                      break;
                    case "bottom":
                      t["padding-bottom"] = m.valueOfMargin(e);
                  }
                });
              }
            }, {
              key: "parseTrHeight",
              value: function parseTrHeight(e, t) {
                s["default"].attr(e, "hRule"), t.height = s["default"].lengthAttr(e, "val");
              }
            }, {
              key: "parseBorderProperties",
              value: function parseBorderProperties(e, t) {
                p.foreach(e, function (e) {
                  switch (e.localName) {
                    case "start":
                    case "left":
                      t["border-left"] = m.valueOfBorder(e);
                      break;
                    case "end":
                    case "right":
                      t["border-right"] = m.valueOfBorder(e);
                      break;
                    case "top":
                      t["border-top"] = m.valueOfBorder(e);
                      break;
                    case "bottom":
                      t["border-bottom"] = m.valueOfBorder(e);
                  }
                });
              }
            }]);
            return _class2;
          }();
          var f = ["black", "blue", "cyan", "darkBlue", "darkCyan", "darkGray", "darkGreen", "darkMagenta", "darkRed", "darkYellow", "green", "lightGray", "magenta", "none", "red", "white", "yellow"];
          var p = /*#__PURE__*/function () {
            function p() {
              _classCallCheck(this, p);
            }
            _createClass(p, null, [{
              key: "foreach",
              value: function foreach(e, t) {
                for (var r = 0; r < e.childNodes.length; r++) {
                  var _n3 = e.childNodes[r];
                  _n3.nodeType == Node.ELEMENT_NODE && t(_n3);
                }
              }
            }, {
              key: "colorAttr",
              value: function colorAttr(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
                var a = s["default"].attr(e, t);
                if (a) return "auto" == a ? n : f.includes(a) ? a : "#".concat(a);
                var i = s["default"].attr(e, "themeColor");
                return i ? "var(--docx-".concat(i, "-color)") : r;
              }
            }, {
              key: "sizeValue",
              value: function sizeValue(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : u.LengthUsage.Dxa;
                return (0, u.convertLength)(e.textContent, t);
              }
            }]);
            return p;
          }();
          var m = /*#__PURE__*/function () {
            function m() {
              _classCallCheck(this, m);
            }
            _createClass(m, null, [{
              key: "themeValue",
              value: function themeValue(e, t) {
                var r = s["default"].attr(e, t);
                return r ? "var(--docx-".concat(r, "-font)") : null;
              }
            }, {
              key: "valueOfSize",
              value: function valueOfSize(e, t) {
                var r = u.LengthUsage.Dxa;
                switch (s["default"].attr(e, "type")) {
                  case "dxa":
                    break;
                  case "pct":
                    r = u.LengthUsage.Percent;
                    break;
                  case "auto":
                    return "auto";
                }
                return s["default"].lengthAttr(e, t, r);
              }
            }, {
              key: "valueOfMargin",
              value: function valueOfMargin(e) {
                return s["default"].lengthAttr(e, "w");
              }
            }, {
              key: "valueOfBorder",
              value: function valueOfBorder(e) {
                if ("nil" == s["default"].attr(e, "val")) return "none";
                var r = p.colorAttr(e, "color");
                return "".concat(s["default"].lengthAttr(e, "sz", u.LengthUsage.Border), " solid ").concat("auto" == r ? t.autos.borderColor : r);
              }
            }, {
              key: "valueOfTblLayout",
              value: function valueOfTblLayout(e) {
                return "fixed" == s["default"].attr(e, "val") ? "fixed" : "auto";
              }
            }, {
              key: "classNameOfCnfStyle",
              value: function classNameOfCnfStyle(e) {
                var t = s["default"].attr(e, "val");
                return ["first-row", "last-row", "first-col", "last-col", "odd-col", "even-col", "odd-row", "even-row", "ne-cell", "nw-cell", "se-cell", "sw-cell"].filter(function (e, r) {
                  return "1" == t[r];
                }).join(" ");
              }
            }, {
              key: "valueOfJc",
              value: function valueOfJc(e) {
                var t = s["default"].attr(e, "val");
                switch (t) {
                  case "start":
                  case "left":
                    return "left";
                  case "center":
                    return "center";
                  case "end":
                  case "right":
                    return "right";
                  case "both":
                    return "justify";
                }
                return t;
              }
            }, {
              key: "valueOfVertAlign",
              value: function valueOfVertAlign(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                var r = s["default"].attr(e, "val");
                switch (r) {
                  case "subscript":
                    return "sub";
                  case "superscript":
                    return t ? "sup" : "super";
                }
                return t ? null : r;
              }
            }, {
              key: "valueOfTextAlignment",
              value: function valueOfTextAlignment(e) {
                var t = s["default"].attr(e, "val");
                switch (t) {
                  case "auto":
                  case "baseline":
                    return "baseline";
                  case "top":
                    return "top";
                  case "center":
                    return "middle";
                  case "bottom":
                    return "bottom";
                }
                return t;
              }
            }, {
              key: "addSize",
              value: function addSize(e, t) {
                return null == e ? t : null == t ? e : "calc(".concat(e, " + ").concat(t, ")");
              }
            }, {
              key: "classNameOftblLook",
              value: function classNameOftblLook(e) {
                var t = s["default"].hexAttr(e, "val", 0);
                var r = "";
                return (s["default"].boolAttr(e, "firstRow") || 32 & t) && (r += " first-row"), (s["default"].boolAttr(e, "lastRow") || 64 & t) && (r += " last-row"), (s["default"].boolAttr(e, "firstColumn") || 128 & t) && (r += " first-col"), (s["default"].boolAttr(e, "lastColumn") || 256 & t) && (r += " last-col"), (s["default"].boolAttr(e, "noHBand") || 512 & t) && (r += " no-hband"), (s["default"].boolAttr(e, "noVBand") || 1024 & t) && (r += " no-vband"), r.trim();
              }
            }]);
            return m;
          }();
        },
        162: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.CorePropsPart = void 0;
          var n = r(530),
            a = r(614);
          var i = /*#__PURE__*/function (_n$Part) {
            _inherits(i, _n$Part);
            var _super = _createSuper(i);
            function i() {
              _classCallCheck(this, i);
              return _super.apply(this, arguments);
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.props = (0, a.parseCoreProps)(e, this._package.xmlParser);
              }
            }]);
            return i;
          }(n.Part);
          t.CorePropsPart = i;
        },
        614: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseCoreProps = void 0, t.parseCoreProps = function (e, t) {
            var r = {};
            var _iterator12 = _createForOfIteratorHelper(t.elements(e)),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _n4 = _step12.value;
                switch (_n4.localName) {
                  case "title":
                    r.title = _n4.textContent;
                    break;
                  case "description":
                    r.description = _n4.textContent;
                    break;
                  case "subject":
                    r.subject = _n4.textContent;
                    break;
                  case "creator":
                    r.creator = _n4.textContent;
                    break;
                  case "keywords":
                    r.keywords = _n4.textContent;
                    break;
                  case "language":
                    r.language = _n4.textContent;
                    break;
                  case "lastModifiedBy":
                    r.lastModifiedBy = _n4.textContent;
                    break;
                  case "revision":
                    _n4.textContent && (r.revision = parseInt(_n4.textContent));
                }
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
            return r;
          };
        },
        177: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.CustomPropsPart = void 0;
          var n = r(530),
            a = r(821);
          var i = /*#__PURE__*/function (_n$Part2) {
            _inherits(i, _n$Part2);
            var _super2 = _createSuper(i);
            function i() {
              _classCallCheck(this, i);
              return _super2.apply(this, arguments);
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.props = (0, a.parseCustomProps)(e, this._package.xmlParser);
              }
            }]);
            return i;
          }(n.Part);
          t.CustomPropsPart = i;
        },
        821: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseCustomProps = void 0, t.parseCustomProps = function (e, t) {
            return t.elements(e, "property").map(function (e) {
              var r = e.firstChild;
              return {
                formatId: t.attr(e, "fmtid"),
                name: t.attr(e, "name"),
                type: r.nodeName,
                value: r.textContent
              };
            });
          };
        },
        665: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ExtendedPropsPart = void 0;
          var n = r(530),
            a = r(668);
          var i = /*#__PURE__*/function (_n$Part3) {
            _inherits(i, _n$Part3);
            var _super3 = _createSuper(i);
            function i() {
              _classCallCheck(this, i);
              return _super3.apply(this, arguments);
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.props = (0, a.parseExtendedProps)(e, this._package.xmlParser);
              }
            }]);
            return i;
          }(n.Part);
          t.ExtendedPropsPart = i;
        },
        668: function _(e, t) {
          function r(e) {
            if (void 0 !== e) return parseInt(e);
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseExtendedProps = void 0, t.parseExtendedProps = function (e, t) {
            var n = {};
            var _iterator13 = _createForOfIteratorHelper(t.elements(e)),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _a2 = _step13.value;
                switch (_a2.localName) {
                  case "Template":
                    n.template = _a2.textContent;
                    break;
                  case "Pages":
                    n.pages = r(_a2.textContent);
                    break;
                  case "Words":
                    n.words = r(_a2.textContent);
                    break;
                  case "Characters":
                    n.characters = r(_a2.textContent);
                    break;
                  case "Application":
                    n.application = _a2.textContent;
                    break;
                  case "Lines":
                    n.lines = r(_a2.textContent);
                    break;
                  case "Paragraphs":
                    n.paragraphs = r(_a2.textContent);
                    break;
                  case "Company":
                    n.company = _a2.textContent;
                    break;
                  case "AppVersion":
                    n.appVersion = _a2.textContent;
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
            return n;
          };
        },
        172: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseBookmarkEnd = t.parseBookmarkStart = void 0;
          var n = r(120);
          t.parseBookmarkStart = function (e, t) {
            return {
              type: n.DomType.BookmarkStart,
              id: t.attr(e, "id"),
              name: t.attr(e, "name"),
              colFirst: t.intAttr(e, "colFirst"),
              colLast: t.intAttr(e, "colLast")
            };
          }, t.parseBookmarkEnd = function (e, t) {
            return {
              type: n.DomType.BookmarkEnd,
              id: t.attr(e, "id")
            };
          };
        },
        191: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseBorders = t.parseBorder = void 0;
          var n = r(149);
          function a(e, t) {
            return {
              type: t.attr(e, "val"),
              color: t.attr(e, "color"),
              size: t.lengthAttr(e, "sz", n.LengthUsage.Border),
              offset: t.lengthAttr(e, "space", n.LengthUsage.Point),
              frame: t.boolAttr(e, "frame"),
              shadow: t.boolAttr(e, "shadow")
            };
          }
          t.parseBorder = a, t.parseBorders = function (e, t) {
            var r = {};
            var _iterator14 = _createForOfIteratorHelper(t.elements(e)),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _n5 = _step14.value;
                switch (_n5.localName) {
                  case "left":
                    r.left = a(_n5, t);
                    break;
                  case "top":
                    r.top = a(_n5, t);
                    break;
                  case "right":
                    r.right = a(_n5, t);
                    break;
                  case "bottom":
                    r.bottom = a(_n5, t);
                }
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
            return r;
          };
        },
        149: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseCommonProperty = t.convertPercentage = t.convertBoolean = t.convertLength = t.LengthUsage = t.ns = void 0, t.ns = {
            wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
            drawingml: "http://schemas.openxmlformats.org/drawingml/2006/main",
            picture: "http://schemas.openxmlformats.org/drawingml/2006/picture",
            compatibility: "http://schemas.openxmlformats.org/markup-compatibility/2006",
            math: "http://schemas.openxmlformats.org/officeDocument/2006/math"
          }, t.LengthUsage = {
            Dxa: {
              mul: .05,
              unit: "pt"
            },
            Emu: {
              mul: 1 / 12700,
              unit: "pt"
            },
            FontSize: {
              mul: .5,
              unit: "pt"
            },
            Border: {
              mul: .125,
              unit: "pt"
            },
            Point: {
              mul: 1,
              unit: "pt"
            },
            Percent: {
              mul: .02,
              unit: "%"
            },
            LineHeight: {
              mul: 1 / 240,
              unit: ""
            },
            VmlEmu: {
              mul: 1 / 12700,
              unit: ""
            }
          }, t.convertLength = function (e) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t.LengthUsage.Dxa;
            return null == e || /.+(p[xt]|[%])$/.test(e) ? e : "".concat((parseInt(e) * r.mul).toFixed(2)).concat(r.unit);
          }, t.convertBoolean = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            switch (e) {
              case "1":
              case "on":
              case "true":
                return !0;
              case "0":
              case "off":
              case "false":
                return !1;
              default:
                return t;
            }
          }, t.convertPercentage = function (e) {
            return e ? parseInt(e) / 100 : null;
          }, t.parseCommonProperty = function (e, r, n) {
            if (e.namespaceURI != t.ns.wordml) return !1;
            switch (e.localName) {
              case "color":
                r.color = n.attr(e, "val");
                break;
              case "sz":
                r.fontSize = n.lengthAttr(e, "val", t.LengthUsage.FontSize);
                break;
              default:
                return !1;
            }
            return !0;
          };
        },
        448: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.DocumentPart = void 0;
          var n = r(530);
          var a = /*#__PURE__*/function (_n$Part4) {
            _inherits(a, _n$Part4);
            var _super4 = _createSuper(a);
            function a(e, t, r) {
              var _this18;
              _classCallCheck(this, a);
              _this18 = _super4.call(this, e, t), _this18._documentParser = r;
              return _this18;
            }
            _createClass(a, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.body = this._documentParser.parseDocumentFile(e);
              }
            }]);
            return a;
          }(n.Part);
          t.DocumentPart = a;
        },
        120: function _(e, t) {
          var r;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.DomType = void 0, function (e) {
            e.Document = "document", e.Paragraph = "paragraph", e.Run = "run", e.Break = "break", e.NoBreakHyphen = "noBreakHyphen", e.Table = "table", e.Row = "row", e.Cell = "cell", e.Hyperlink = "hyperlink", e.Drawing = "drawing", e.Image = "image", e.Text = "text", e.Tab = "tab", e.Symbol = "symbol", e.BookmarkStart = "bookmarkStart", e.BookmarkEnd = "bookmarkEnd", e.Footer = "footer", e.Header = "header", e.FootnoteReference = "footnoteReference", e.EndnoteReference = "endnoteReference", e.Footnote = "footnote", e.Endnote = "endnote", e.SimpleField = "simpleField", e.ComplexField = "complexField", e.Instruction = "instruction", e.VmlPicture = "vmlPicture", e.MmlMath = "mmlMath", e.MmlMathParagraph = "mmlMathParagraph", e.MmlFraction = "mmlFraction", e.MmlNumerator = "mmlNumerator", e.MmlDenominator = "mmlDenominator", e.MmlRadical = "mmlRadical", e.MmlBase = "mmlBase", e.MmlDegree = "mmlDegree", e.MmlSuperscript = "mmlSuperscript", e.MmlSubscript = "mmlSubscript", e.MmlSubArgument = "mmlSubArgument", e.MmlSuperArgument = "mmlSuperArgument", e.MmlNary = "mmlNary", e.MmlDelimiter = "mmlDelimiter", e.MmlRun = "mmlRun", e.VmlElement = "vmlElement", e.Inserted = "inserted", e.Deleted = "deleted", e.DeletedText = "deletedText";
          }(r || (t.DomType = r = {}));
        },
        931: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseLineSpacing = void 0, t.parseLineSpacing = function (e, t) {
            return {
              before: t.lengthAttr(e, "before"),
              after: t.lengthAttr(e, "after"),
              line: t.intAttr(e, "line"),
              lineRule: t.attr(e, "lineRule")
            };
          };
        },
        109: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseNumbering = t.parseTabs = t.parseParagraphProperty = t.parseParagraphProperties = void 0;
          var n = r(149),
            a = r(59),
            i = r(931),
            s = r(488);
          function o(e, t, r) {
            if (e.namespaceURI != n.ns.wordml) return !1;
            if ((0, n.parseCommonProperty)(e, t, r)) return !0;
            switch (e.localName) {
              case "tabs":
                t.tabs = l(e, r);
                break;
              case "sectPr":
                t.sectionProps = (0, a.parseSectionProperties)(e, r);
                break;
              case "numPr":
                t.numbering = u(e, r);
                break;
              case "spacing":
                return t.lineSpacing = (0, i.parseLineSpacing)(e, r), !1;
              case "textAlignment":
                return t.textAlignment = r.attr(e, "val"), !1;
              case "keepNext":
                t.keepLines = r.boolAttr(e, "val", !0);
                break;
              case "keepNext":
                t.keepNext = r.boolAttr(e, "val", !0);
                break;
              case "pageBreakBefore":
                t.pageBreakBefore = r.boolAttr(e, "val", !0);
                break;
              case "outlineLvl":
                t.outlineLevel = r.intAttr(e, "val");
                break;
              case "pStyle":
                t.styleName = r.attr(e, "val");
                break;
              case "rPr":
                t.runProps = (0, s.parseRunProperties)(e, r);
                break;
              default:
                return !1;
            }
            return !0;
          }
          function l(e, t) {
            return t.elements(e, "tab").map(function (e) {
              return {
                position: t.lengthAttr(e, "pos"),
                leader: t.attr(e, "leader"),
                style: t.attr(e, "val")
              };
            });
          }
          function u(e, t) {
            var r = {};
            var _iterator15 = _createForOfIteratorHelper(t.elements(e)),
              _step15;
            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var _n6 = _step15.value;
                switch (_n6.localName) {
                  case "numId":
                    r.id = t.attr(_n6, "val");
                    break;
                  case "ilvl":
                    r.level = t.intAttr(_n6, "val");
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
            return r;
          }
          t.parseParagraphProperties = function (e, t) {
            var r = {};
            var _iterator16 = _createForOfIteratorHelper(t.elements(e)),
              _step16;
            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _n7 = _step16.value;
                o(_n7, r, t);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
            return r;
          }, t.parseParagraphProperty = o, t.parseTabs = l, t.parseNumbering = u;
        },
        488: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseRunProperty = t.parseRunProperties = void 0;
          var n = r(149);
          function a(e, t, r) {
            return !!(0, n.parseCommonProperty)(e, t, r);
          }
          t.parseRunProperties = function (e, t) {
            var r = {};
            var _iterator17 = _createForOfIteratorHelper(t.elements(e)),
              _step17;
            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _n8 = _step17.value;
                a(_n8, r, t);
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
            return r;
          }, t.parseRunProperty = a;
        },
        59: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseSectionProperties = t.SectionType = void 0;
          var n = r(472),
            a = r(191);
          var i;
          function s(e, t) {
            return {
              numberOfColumns: t.intAttr(e, "num"),
              space: t.lengthAttr(e, "space"),
              separator: t.boolAttr(e, "sep"),
              equalWidth: t.boolAttr(e, "equalWidth", !0),
              columns: t.elements(e, "col").map(function (e) {
                return {
                  width: t.lengthAttr(e, "w"),
                  space: t.lengthAttr(e, "space")
                };
              })
            };
          }
          function o(e, t) {
            return {
              chapSep: t.attr(e, "chapSep"),
              chapStyle: t.attr(e, "chapStyle"),
              format: t.attr(e, "fmt"),
              start: t.intAttr(e, "start")
            };
          }
          function l(e, t) {
            return {
              id: t.attr(e, "id"),
              type: t.attr(e, "type")
            };
          }
          !function (e) {
            e.Continuous = "continuous", e.NextPage = "nextPage", e.NextColumn = "nextColumn", e.EvenPage = "evenPage", e.OddPage = "oddPage";
          }(i || (t.SectionType = i = {})), t.parseSectionProperties = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n["default"];
            var r,
              i,
              u = {};
            var _iterator18 = _createForOfIteratorHelper(t.elements(e)),
              _step18;
            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var _n9 = _step18.value;
                switch (_n9.localName) {
                  case "pgSz":
                    u.pageSize = {
                      width: t.lengthAttr(_n9, "w"),
                      height: t.lengthAttr(_n9, "h"),
                      orientation: t.attr(_n9, "orient")
                    };
                    break;
                  case "type":
                    u.type = t.attr(_n9, "val");
                    break;
                  case "pgMar":
                    u.pageMargins = {
                      left: t.lengthAttr(_n9, "left"),
                      right: t.lengthAttr(_n9, "right"),
                      top: t.lengthAttr(_n9, "top"),
                      bottom: t.lengthAttr(_n9, "bottom"),
                      header: t.lengthAttr(_n9, "header"),
                      footer: t.lengthAttr(_n9, "footer"),
                      gutter: t.lengthAttr(_n9, "gutter")
                    };
                    break;
                  case "cols":
                    u.columns = s(_n9, t);
                    break;
                  case "headerReference":
                    (null !== (r = u.headerRefs) && void 0 !== r ? r : u.headerRefs = []).push(l(_n9, t));
                    break;
                  case "footerReference":
                    (null !== (i = u.footerRefs) && void 0 !== i ? i : u.footerRefs = []).push(l(_n9, t));
                    break;
                  case "titlePg":
                    u.titlePage = t.boolAttr(_n9, "val", !0);
                    break;
                  case "pgBorders":
                    u.pageBorders = (0, a.parseBorders)(_n9, t);
                    break;
                  case "pgNumType":
                    u.pageNumber = o(_n9, t);
                }
              }
            } catch (err) {
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }
            return u;
          };
        },
        667: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.renderAsync = t.praseAsync = t.defaultOptions = void 0;
          var n = r(213),
            a = r(168),
            i = r(932);
          t.defaultOptions = {
            ignoreHeight: !1,
            ignoreWidth: !1,
            ignoreFonts: !1,
            breakPages: !0,
            debug: !1,
            experimental: !1,
            className: "docx",
            inWrapper: !0,
            trimXmlDeclaration: !0,
            ignoreLastRenderedPageBreak: !0,
            renderHeaders: !0,
            renderFooters: !0,
            renderFootnotes: !0,
            renderEndnotes: !0,
            useBase64URL: !1,
            useMathMLPolyfill: !1,
            renderChanges: !1
          }, t.praseAsync = function (e) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var i = Object.assign(Object.assign({}, t.defaultOptions), r);
            return n.WordDocument.load(e, new a.DocumentParser(i), i);
          }, t.renderAsync = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e, r) {
              var s,
                o,
                l,
                u,
                c,
                _args4 = arguments;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    s = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : null;
                    o = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : null;
                    l = Object.assign(Object.assign({}, t.defaultOptions), o);
                    u = new i.HtmlRenderer(window.document);
                    _context4.next = 6;
                    return n.WordDocument.load(e, new a.DocumentParser(l), l);
                  case 6:
                    c = _context4.sent;
                    return _context4.abrupt("return", (u.render(c, r, s, l), c));
                  case 8:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x4, _x5) {
              return _ref3.apply(this, arguments);
            };
          }();
        },
        380: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.FontTablePart = void 0;
          var n = r(530),
            a = r(512);
          var i = /*#__PURE__*/function (_n$Part5) {
            _inherits(i, _n$Part5);
            var _super5 = _createSuper(i);
            function i() {
              _classCallCheck(this, i);
              return _super5.apply(this, arguments);
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.fonts = (0, a.parseFonts)(e, this._package.xmlParser);
              }
            }]);
            return i;
          }(n.Part);
          t.FontTablePart = i;
        },
        512: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseEmbedFontRef = t.parseFont = t.parseFonts = void 0;
          var r = {
            embedRegular: "regular",
            embedBold: "bold",
            embedItalic: "italic",
            embedBoldItalic: "boldItalic"
          };
          function n(e, t) {
            var r = {
              name: t.attr(e, "name"),
              embedFontRefs: []
            };
            var _iterator19 = _createForOfIteratorHelper(t.elements(e)),
              _step19;
            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                var _n10 = _step19.value;
                switch (_n10.localName) {
                  case "family":
                    r.family = t.attr(_n10, "val");
                    break;
                  case "altName":
                    r.altName = t.attr(_n10, "val");
                    break;
                  case "embedRegular":
                  case "embedBold":
                  case "embedItalic":
                  case "embedBoldItalic":
                    r.embedFontRefs.push(a(_n10, t));
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }
            return r;
          }
          function a(e, t) {
            return {
              id: t.attr(e, "id"),
              key: t.attr(e, "fontKey"),
              type: r[e.localName]
            };
          }
          t.parseFonts = function (e, t) {
            return t.elements(e).map(function (e) {
              return n(e, t);
            });
          }, t.parseFont = n, t.parseEmbedFontRef = a;
        },
        984: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.WmlFooter = t.WmlHeader = void 0;
          var n = r(120);
          t.WmlHeader = /*#__PURE__*/function () {
            function _class3() {
              _classCallCheck(this, _class3);
              this.type = n.DomType.Header, this.children = [], this.cssStyle = {};
            }
            return _createClass(_class3);
          }(), t.WmlFooter = /*#__PURE__*/function () {
            function _class4() {
              _classCallCheck(this, _class4);
              this.type = n.DomType.Footer, this.children = [], this.cssStyle = {};
            }
            return _createClass(_class4);
          }();
        },
        985: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.FooterPart = t.HeaderPart = t.BaseHeaderFooterPart = void 0;
          var n = r(530),
            a = r(984);
          var i = /*#__PURE__*/function (_n$Part6) {
            _inherits(i, _n$Part6);
            var _super6 = _createSuper(i);
            function i(e, t, r) {
              var _this19;
              _classCallCheck(this, i);
              _this19 = _super6.call(this, e, t), _this19._documentParser = r;
              return _this19;
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.rootElement = this.createRootElement(), this.rootElement.children = this._documentParser.parseBodyElements(e);
              }
            }]);
            return i;
          }(n.Part);
          t.BaseHeaderFooterPart = i, t.HeaderPart = /*#__PURE__*/function (_i3) {
            _inherits(_class5, _i3);
            var _super7 = _createSuper(_class5);
            function _class5() {
              _classCallCheck(this, _class5);
              return _super7.apply(this, arguments);
            }
            _createClass(_class5, [{
              key: "createRootElement",
              value: function createRootElement() {
                return new a.WmlHeader();
              }
            }]);
            return _class5;
          }(i), t.FooterPart = /*#__PURE__*/function (_i4) {
            _inherits(_class6, _i4);
            var _super8 = _createSuper(_class6);
            function _class6() {
              _classCallCheck(this, _class6);
              return _super8.apply(this, arguments);
            }
            _createClass(_class6, [{
              key: "createRootElement",
              value: function createRootElement() {
                return new a.WmlFooter();
              }
            }]);
            return _class6;
          }(i);
        },
        932: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.HtmlRenderer = void 0;
          var n = r(120),
            a = r(593),
            i = r(630),
            s = r(438),
            o = "http://www.w3.org/1998/Math/MathML";
          function l(e, t, r) {
            return c(void 0, e, t, r);
          }
          function u(e, t, r) {
            return c("http://www.w3.org/2000/svg", e, t, r);
          }
          function c(e, t, r, n) {
            var a = e ? document.createElementNS(e, t) : document.createElement(t);
            return Object.assign(a, r), n && d(a, n), a;
          }
          function h(e) {
            e.innerHTML = "";
          }
          function d(e, t) {
            t.forEach(function (t) {
              return e.appendChild((0, a.isString)(t) ? document.createTextNode(t) : t);
            });
          }
          function f(e) {
            return l("style", {
              innerHTML: e
            });
          }
          function p(e, t) {
            e.appendChild(document.createComment(t));
          }
          t.HtmlRenderer = /*#__PURE__*/function () {
            function _class7(e) {
              _classCallCheck(this, _class7);
              this.htmlDocument = e, this.className = "docx", this.styleMap = {}, this.currentPart = null, this.tableVerticalMerges = [], this.currentVerticalMerge = null, this.tableCellPositions = [], this.currentCellPosition = null, this.footnoteMap = {}, this.endnoteMap = {}, this.currentEndnoteIds = [], this.usedHederFooterParts = [], this.currentTabs = [], this.tabsTimeout = 0, this.createElement = l;
            }
            _createClass(_class7, [{
              key: "render",
              value: function render(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n = arguments.length > 3 ? arguments[3] : undefined;
                var i;
                this.document = e, this.options = n, this.className = n.className, this.rootSelector = n.inWrapper ? ".".concat(this.className, "-wrapper") : ":root", this.styleMap = null, h(r = r || t), h(t), p(r, "docxjs library predefined styles"), r.appendChild(this.renderDefaultStyle()), !window.MathMLElement && n.useMathMLPolyfill && (p(r, "docxjs mathml polyfill styles"), r.appendChild(f(s["default"]))), e.themePart && (p(r, "docxjs document theme values"), this.renderTheme(e.themePart, r)), null != e.stylesPart && (this.styleMap = this.processStyles(e.stylesPart.styles), p(r, "docxjs document styles"), r.appendChild(this.renderStyles(e.stylesPart.styles))), e.numberingPart && (this.prodessNumberings(e.numberingPart.domNumberings), p(r, "docxjs document numbering styles"), r.appendChild(this.renderNumbering(e.numberingPart.domNumberings, r))), e.footnotesPart && (this.footnoteMap = (0, a.keyBy)(e.footnotesPart.notes, function (e) {
                  return e.id;
                })), e.endnotesPart && (this.endnoteMap = (0, a.keyBy)(e.endnotesPart.notes, function (e) {
                  return e.id;
                })), e.settingsPart && (this.defaultTabSize = null === (i = e.settingsPart.settings) || void 0 === i ? void 0 : i.defaultTabStop), !n.ignoreFonts && e.fontTablePart && this.renderFontTable(e.fontTablePart, r);
                var o = this.renderSections(e.documentPart.body);
                this.options.inWrapper ? t.appendChild(this.renderWrapper(o)) : d(t, o), this.refreshTabStops();
              }
            }, {
              key: "renderTheme",
              value: function renderTheme(e, t) {
                var r, n;
                var a = {},
                  i = null === (r = e.theme) || void 0 === r ? void 0 : r.fontScheme;
                i && (i.majorFont && (a["--docx-majorHAnsi-font"] = i.majorFont.latinTypeface), i.minorFont && (a["--docx-minorHAnsi-font"] = i.minorFont.latinTypeface));
                var s = null === (n = e.theme) || void 0 === n ? void 0 : n.colorScheme;
                if (s) for (var _i5 = 0, _Object$entries = Object.entries(s.colors); _i5 < _Object$entries.length; _i5++) {
                  var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2),
                    _e6 = _Object$entries$_i[0],
                    _t3 = _Object$entries$_i[1];
                  a["--docx-".concat(_e6, "-color")] = "#".concat(_t3);
                }
                var o = this.styleToString(".".concat(this.className), a);
                t.appendChild(f(o));
              }
            }, {
              key: "renderFontTable",
              value: function renderFontTable(e, t) {
                var _this20 = this;
                var _iterator20 = _createForOfIteratorHelper(e.fonts),
                  _step20;
                try {
                  var _loop = function _loop() {
                    var r = _step20.value;
                    var _iterator21 = _createForOfIteratorHelper(r.embedFontRefs),
                      _step21;
                    try {
                      var _loop2 = function _loop2() {
                        var e = _step21.value;
                        _this20.document.loadFont(e.id, e.key).then(function (n) {
                          var a = {
                            "font-family": r.name,
                            src: "url(".concat(n, ")")
                          };
                          "bold" != e.type && "boldItalic" != e.type || (a["font-weight"] = "bold"), "italic" != e.type && "boldItalic" != e.type || (a["font-style"] = "italic"), p(t, "docxjs ".concat(r.name, " font"));
                          var i = _this20.styleToString("@font-face", a);
                          t.appendChild(f(i)), _this20.refreshTabStops();
                        });
                      };
                      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                        _loop2();
                      }
                    } catch (err) {
                      _iterator21.e(err);
                    } finally {
                      _iterator21.f();
                    }
                  };
                  for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    _loop();
                  }
                } catch (err) {
                  _iterator20.e(err);
                } finally {
                  _iterator20.f();
                }
              }
            }, {
              key: "processStyleName",
              value: function processStyleName(e) {
                return e ? "".concat(this.className, "_").concat((0, a.escapeClassName)(e)) : this.className;
              }
            }, {
              key: "processStyles",
              value: function processStyles(e) {
                var _this21 = this;
                var t = (0, a.keyBy)(e.filter(function (e) {
                  return null != e.id;
                }), function (e) {
                  return e.id;
                });
                var _iterator22 = _createForOfIteratorHelper(e.filter(function (e) {
                    return e.basedOn;
                  })),
                  _step22;
                try {
                  for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var _n11 = _step22.value;
                    var r = t[_n11.basedOn];
                    if (r) {
                      _n11.paragraphProps = (0, a.mergeDeep)(_n11.paragraphProps, r.paragraphProps), _n11.runProps = (0, a.mergeDeep)(_n11.runProps, r.runProps);
                      var _iterator24 = _createForOfIteratorHelper(r.styles),
                        _step24;
                      try {
                        var _loop3 = function _loop3() {
                          var e = _step24.value;
                          var t = _n11.styles.find(function (t) {
                            return t.target == e.target;
                          });
                          t ? _this21.copyStyleProperties(e.values, t.values) : _n11.styles.push(Object.assign(Object.assign({}, e), {
                            values: Object.assign({}, e.values)
                          }));
                        };
                        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                          _loop3();
                        }
                      } catch (err) {
                        _iterator24.e(err);
                      } finally {
                        _iterator24.f();
                      }
                    } else this.options.debug && console.warn("Can't find base style ".concat(_n11.basedOn));
                  }
                } catch (err) {
                  _iterator22.e(err);
                } finally {
                  _iterator22.f();
                }
                var _iterator23 = _createForOfIteratorHelper(e),
                  _step23;
                try {
                  for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                    var _t4 = _step23.value;
                    _t4.cssName = this.processStyleName(_t4.id);
                  }
                } catch (err) {
                  _iterator23.e(err);
                } finally {
                  _iterator23.f();
                }
                return t;
              }
            }, {
              key: "prodessNumberings",
              value: function prodessNumberings(e) {
                var t;
                var _iterator25 = _createForOfIteratorHelper(e.filter(function (e) {
                    return e.pStyleName;
                  })),
                  _step25;
                try {
                  for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                    var _r8 = _step25.value;
                    var _e7 = this.findStyle(_r8.pStyleName);
                    (null === (t = null == _e7 ? void 0 : _e7.paragraphProps) || void 0 === t ? void 0 : t.numbering) && (_e7.paragraphProps.numbering.level = _r8.level);
                  }
                } catch (err) {
                  _iterator25.e(err);
                } finally {
                  _iterator25.f();
                }
              }
            }, {
              key: "processElement",
              value: function processElement(e) {
                if (e.children) {
                  var _iterator26 = _createForOfIteratorHelper(e.children),
                    _step26;
                  try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                      var t = _step26.value;
                      t.parent = e, t.type == n.DomType.Table ? this.processTable(t) : this.processElement(t);
                    }
                  } catch (err) {
                    _iterator26.e(err);
                  } finally {
                    _iterator26.f();
                  }
                }
              }
            }, {
              key: "processTable",
              value: function processTable(e) {
                var _iterator27 = _createForOfIteratorHelper(e.children),
                  _step27;
                try {
                  for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                    var t = _step27.value;
                    var _iterator28 = _createForOfIteratorHelper(t.children),
                      _step28;
                    try {
                      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                        var r = _step28.value;
                        r.cssStyle = this.copyStyleProperties(e.cellStyle, r.cssStyle, ["border-left", "border-right", "border-top", "border-bottom", "padding-left", "padding-right", "padding-top", "padding-bottom"]), this.processElement(r);
                      }
                    } catch (err) {
                      _iterator28.e(err);
                    } finally {
                      _iterator28.f();
                    }
                  }
                } catch (err) {
                  _iterator27.e(err);
                } finally {
                  _iterator27.f();
                }
              }
            }, {
              key: "copyStyleProperties",
              value: function copyStyleProperties(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (!e) return t;
                var _iterator29 = _createForOfIteratorHelper((null == t && (t = {}), null == r && (r = Object.getOwnPropertyNames(e)), r)),
                  _step29;
                try {
                  for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                    var n = _step29.value;
                    e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n]);
                  }
                } catch (err) {
                  _iterator29.e(err);
                } finally {
                  _iterator29.f();
                }
                return t;
              }
            }, {
              key: "createSection",
              value: function createSection(e, t) {
                var r = this.createElement("section", {
                  className: e
                });
                return t && (t.pageMargins && (r.style.paddingLeft = t.pageMargins.left, r.style.paddingRight = t.pageMargins.right, r.style.paddingTop = t.pageMargins.top, r.style.paddingBottom = t.pageMargins.bottom), t.pageSize && (this.options.ignoreWidth || (r.style.width = t.pageSize.width), this.options.ignoreHeight || (r.style.minHeight = t.pageSize.height)), t.columns && t.columns.numberOfColumns && (r.style.columnCount = "".concat(t.columns.numberOfColumns), r.style.columnGap = t.columns.space, t.columns.separator && (r.style.columnRule = "1px solid black"))), r;
              }
            }, {
              key: "renderSections",
              value: function renderSections(e) {
                var t = [];
                this.processElement(e);
                var r = this.splitBySection(e.children);
                var n = null;
                for (var _i6 = 0, _s2 = r.length; _i6 < _s2; _i6++) {
                  this.currentFootnoteIds = [];
                  var _o = r[_i6],
                    _l = _o.sectProps || e.props,
                    _u = this.createSection(this.className, _l);
                  this.renderStyleValues(e.cssStyle, _u), this.options.renderHeaders && this.renderHeaderFooter(_l.headerRefs, _l, t.length, n != _l, _u);
                  var a = this.createElement("article");
                  this.renderElements(_o.elements, a), _u.appendChild(a), this.options.renderFootnotes && this.renderNotes(this.currentFootnoteIds, this.footnoteMap, _u), this.options.renderEndnotes && _i6 == _s2 - 1 && this.renderNotes(this.currentEndnoteIds, this.endnoteMap, _u), this.options.renderFooters && this.renderHeaderFooter(_l.footerRefs, _l, t.length, n != _l, _u), t.push(_u), n = _l;
                }
                return t;
              }
            }, {
              key: "renderHeaderFooter",
              value: function renderHeaderFooter(e, t, r, n, a) {
                var i, s;
                if (e) {
                  var o = null !== (s = null !== (i = t.titlePage && n ? e.find(function (e) {
                      return "first" == e.type;
                    }) : null) && void 0 !== i ? i : r % 2 == 1 ? e.find(function (e) {
                      return "even" == e.type;
                    }) : null) && void 0 !== s ? s : e.find(function (e) {
                      return "default" == e.type;
                    }),
                    l = o && this.document.findPartByRelId(o.id, this.document.documentPart);
                  l && (this.currentPart = l, this.usedHederFooterParts.includes(l.path) || (this.processElement(l.rootElement), this.usedHederFooterParts.push(l.path)), this.renderElements([l.rootElement], a), this.currentPart = null);
                }
              }
            }, {
              key: "isPageBreakElement",
              value: function isPageBreakElement(e) {
                return e.type == n.DomType.Break && ("lastRenderedPageBreak" == e["break"] ? !this.options.ignoreLastRenderedPageBreak : "page" == e["break"]);
              }
            }, {
              key: "splitBySection",
              value: function splitBySection(e) {
                var _this22 = this;
                var t,
                  r = {
                    sectProps: null,
                    elements: []
                  },
                  a = [r];
                var _iterator30 = _createForOfIteratorHelper(e),
                  _step30;
                try {
                  for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                    var _c = _step30.value;
                    if (_c.type == n.DomType.Paragraph) {
                      var _e9 = this.findStyle(_c.styleName);
                      (null === (t = null == _e9 ? void 0 : _e9.paragraphProps) || void 0 === t ? void 0 : t.pageBreakBefore) && (r.sectProps = i, r = {
                        sectProps: null,
                        elements: []
                      }, a.push(r));
                    }
                    if (r.elements.push(_c), _c.type == n.DomType.Paragraph) {
                      var _e10 = _c;
                      var i = _e10.sectionProps,
                        s = -1,
                        o = -1;
                      if (this.options.breakPages && _e10.children && (s = _e10.children.findIndex(function (e) {
                        var t, r;
                        return -1 != (o = null !== (r = null === (t = e.children) || void 0 === t ? void 0 : t.findIndex(_this22.isPageBreakElement.bind(_this22))) && void 0 !== r ? r : -1);
                      })), (i || -1 != s) && (r.sectProps = i, r = {
                        sectProps: null,
                        elements: []
                      }, a.push(r)), -1 != s) {
                        var _t5 = _e10.children[s],
                          _n12 = o < _t5.children.length - 1;
                        if (s < _e10.children.length - 1 || _n12) {
                          var l = _c.children,
                            u = Object.assign(Object.assign({}, _c), {
                              children: l.slice(s)
                            });
                          if (_c.children = l.slice(0, s), r.elements.push(u), _n12) {
                            var _e11 = _t5.children,
                              _r9 = Object.assign(Object.assign({}, _t5), {
                                children: _e11.slice(0, o)
                              });
                            _c.children.push(_r9), _t5.children = _e11.slice(o);
                          }
                        }
                      }
                    }
                  }
                } catch (err) {
                  _iterator30.e(err);
                } finally {
                  _iterator30.f();
                }
                var c = null;
                for (var _e8 = a.length - 1; _e8 >= 0; _e8--) null == a[_e8].sectProps ? a[_e8].sectProps = c : c = a[_e8].sectProps;
                return a;
              }
            }, {
              key: "renderWrapper",
              value: function renderWrapper(e) {
                return this.createElement("div", {
                  className: "".concat(this.className, "-wrapper")
                }, e);
              }
            }, {
              key: "renderDefaultStyle",
              value: function renderDefaultStyle() {
                var e = this.className;
                return f("\n.".concat(e, "-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } \n.").concat(e, "-wrapper>section.").concat(e, " { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }\n.").concat(e, " { color: black; }\nsection.").concat(e, " { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }\nsection.").concat(e, ">article { margin-bottom: auto; }\n.").concat(e, " table { border-collapse: collapse; }\n.").concat(e, " table td, .").concat(e, " table th { vertical-align: top; }\n.").concat(e, " p { margin: 0pt; min-height: 1em; }\n.").concat(e, " span { white-space: pre-wrap; overflow-wrap: break-word; }\n.").concat(e, " a { color: inherit; text-decoration: inherit; }\n"));
              }
            }, {
              key: "renderNumbering",
              value: function renderNumbering(e, t) {
                var _this23 = this;
                var r = "",
                  n = [];
                var _iterator31 = _createForOfIteratorHelper(e),
                  _step31;
                try {
                  var _loop4 = function _loop4() {
                    a = _step31.value;
                    i = "p.".concat(_this23.numberingClass(a.id, a.level)), s = "none";
                    if (a.bullet) {
                      var _e12 = "--".concat(_this23.className, "-").concat(a.bullet.src).toLowerCase();
                      r += _this23.styleToString("".concat(i, ":before"), {
                        content: "' '",
                        display: "inline-block",
                        background: "var(".concat(_e12, ")")
                      }, a.bullet.style), _this23.document.loadNumberingImage(a.bullet.src).then(function (r) {
                        var n = "".concat(_this23.rootSelector, " { ").concat(_e12, ": url(").concat(r, ") }");
                        t.appendChild(f(n));
                      });
                    } else if (a.levelText) {
                      var _e13 = _this23.numberingCounter(a.id, a.level);
                      a.level > 0 ? r += _this23.styleToString("p.".concat(_this23.numberingClass(a.id, a.level - 1)), {
                        "counter-reset": _e13
                      }) : n.push(_e13), r += _this23.styleToString("".concat(i, ":before"), Object.assign({
                        content: _this23.levelTextToContent(a.levelText, a.suff, a.id, _this23.numFormatToCssValue(a.format)),
                        "counter-increment": _e13
                      }, a.rStyle));
                    } else s = _this23.numFormatToCssValue(a.format);
                    r += _this23.styleToString(i, Object.assign({
                      display: "list-item",
                      "list-style-position": "inside",
                      "list-style-type": s
                    }, a.pStyle));
                  };
                  for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                    var a, i, s;
                    _loop4();
                  }
                } catch (err) {
                  _iterator31.e(err);
                } finally {
                  _iterator31.f();
                }
                return n.length > 0 && (r += this.styleToString(this.rootSelector, {
                  "counter-reset": n.join(" ")
                })), f(r);
              }
            }, {
              key: "renderStyles",
              value: function renderStyles(e) {
                var t,
                  r = "";
                var n = this.styleMap,
                  i = (0, a.keyBy)(e.filter(function (e) {
                    return e.isDefault;
                  }), function (e) {
                    return e.target;
                  });
                var _iterator32 = _createForOfIteratorHelper(e),
                  _step32;
                try {
                  for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                    var _a3 = _step32.value;
                    var s = _a3.styles;
                    if (_a3.linked) {
                      var o = _a3.linked && n[_a3.linked];
                      o ? s = s.concat(o.styles) : this.options.debug && console.warn("Can't find linked style ".concat(_a3.linked));
                    }
                    var _iterator33 = _createForOfIteratorHelper(s),
                      _step33;
                    try {
                      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                        var _e14 = _step33.value;
                        var l = "".concat(null !== (t = _a3.target) && void 0 !== t ? t : "", ".").concat(_a3.cssName);
                        _a3.target != _e14.target && (l += " ".concat(_e14.target)), i[_a3.target] == _a3 && (l = ".".concat(this.className, " ").concat(_a3.target, ", ") + l), r += this.styleToString(l, _e14.values);
                      }
                    } catch (err) {
                      _iterator33.e(err);
                    } finally {
                      _iterator33.f();
                    }
                  }
                } catch (err) {
                  _iterator32.e(err);
                } finally {
                  _iterator32.f();
                }
                return f(r);
              }
            }, {
              key: "renderNotes",
              value: function renderNotes(e, t, r) {
                var n = e.map(function (e) {
                  return t[e];
                }).filter(function (e) {
                  return e;
                });
                if (n.length > 0) {
                  var a = this.createElement("ol", null, this.renderElements(n));
                  r.appendChild(a);
                }
              }
            }, {
              key: "renderElement",
              value: function renderElement(e) {
                switch (e.type) {
                  case n.DomType.Paragraph:
                    return this.renderParagraph(e);
                  case n.DomType.BookmarkStart:
                    return this.renderBookmarkStart(e);
                  case n.DomType.BookmarkEnd:
                    return null;
                  case n.DomType.Run:
                    return this.renderRun(e);
                  case n.DomType.Table:
                    return this.renderTable(e);
                  case n.DomType.Row:
                    return this.renderTableRow(e);
                  case n.DomType.Cell:
                    return this.renderTableCell(e);
                  case n.DomType.Hyperlink:
                    return this.renderHyperlink(e);
                  case n.DomType.Drawing:
                    return this.renderDrawing(e);
                  case n.DomType.Image:
                    return this.renderImage(e);
                  case n.DomType.Text:
                  case n.DomType.Text:
                    return this.renderText(e);
                  case n.DomType.DeletedText:
                    return this.renderDeletedText(e);
                  case n.DomType.Tab:
                    return this.renderTab(e);
                  case n.DomType.Symbol:
                    return this.renderSymbol(e);
                  case n.DomType.Break:
                    return this.renderBreak(e);
                  case n.DomType.Footer:
                    return this.renderContainer(e, "footer");
                  case n.DomType.Header:
                    return this.renderContainer(e, "header");
                  case n.DomType.Footnote:
                  case n.DomType.Endnote:
                    return this.renderContainer(e, "li");
                  case n.DomType.FootnoteReference:
                    return this.renderFootnoteReference(e);
                  case n.DomType.EndnoteReference:
                    return this.renderEndnoteReference(e);
                  case n.DomType.NoBreakHyphen:
                    return this.createElement("wbr");
                  case n.DomType.VmlPicture:
                    return this.renderVmlPicture(e);
                  case n.DomType.VmlElement:
                    return this.renderVmlElement(e);
                  case n.DomType.MmlMath:
                    return this.renderContainerNS(e, o, "math", {
                      xmlns: o
                    });
                  case n.DomType.MmlMathParagraph:
                    return this.renderContainer(e, "span");
                  case n.DomType.MmlFraction:
                    return this.renderContainerNS(e, o, "mfrac");
                  case n.DomType.MmlNumerator:
                  case n.DomType.MmlDenominator:
                    return this.renderContainerNS(e, o, "mrow");
                  case n.DomType.MmlRadical:
                    return this.renderMmlRadical(e);
                  case n.DomType.MmlDegree:
                    return this.renderContainerNS(e, o, "mn");
                  case n.DomType.MmlSuperscript:
                    return this.renderContainerNS(e, o, "msup");
                  case n.DomType.MmlSubscript:
                    return this.renderContainerNS(e, o, "msub");
                  case n.DomType.MmlBase:
                    return this.renderContainerNS(e, o, "mrow");
                  case n.DomType.MmlSuperArgument:
                  case n.DomType.MmlSubArgument:
                    return this.renderContainerNS(e, o, "mn");
                  case n.DomType.MmlDelimiter:
                    return this.renderMmlDelimiter(e);
                  case n.DomType.MmlRun:
                    return this.renderMmlRun(e);
                  case n.DomType.MmlNary:
                    return this.renderMmlNary(e);
                  case n.DomType.Inserted:
                    return this.renderInserted(e);
                  case n.DomType.Deleted:
                    return this.renderDeleted(e);
                }
                return null;
              }
            }, {
              key: "renderChildren",
              value: function renderChildren(e, t) {
                return this.renderElements(e.children, t);
              }
            }, {
              key: "renderElements",
              value: function renderElements(e, t) {
                var _this24 = this;
                if (null == e) return null;
                var r = e.flatMap(function (e) {
                  return _this24.renderElement(e);
                }).filter(function (e) {
                  return null != e;
                });
                return t && d(t, r), r;
              }
            }, {
              key: "renderContainer",
              value: function renderContainer(e, t, r) {
                return this.createElement(t, r, this.renderChildren(e));
              }
            }, {
              key: "renderContainerNS",
              value: function renderContainerNS(e, t, r, n) {
                return c(t, r, n, this.renderChildren(e));
              }
            }, {
              key: "renderParagraph",
              value: function renderParagraph(e) {
                var t,
                  r,
                  n,
                  a,
                  i = this.createElement("p");
                var s = this.findStyle(e.styleName);
                null !== (t = e.tabs) && void 0 !== t || (e.tabs = null === (r = null == s ? void 0 : s.paragraphProps) || void 0 === r ? void 0 : r.tabs), this.renderClass(e, i), this.renderChildren(e, i), this.renderStyleValues(e.cssStyle, i), this.renderCommonProperties(i.style, e);
                var o = null !== (n = e.numbering) && void 0 !== n ? n : null === (a = null == s ? void 0 : s.paragraphProps) || void 0 === a ? void 0 : a.numbering;
                return o && i.classList.add(this.numberingClass(o.id, o.level)), i;
              }
            }, {
              key: "renderRunProperties",
              value: function renderRunProperties(e, t) {
                this.renderCommonProperties(e, t);
              }
            }, {
              key: "renderCommonProperties",
              value: function renderCommonProperties(e, t) {
                null != t && (t.color && (e.color = t.color), t.fontSize && (e["font-size"] = t.fontSize));
              }
            }, {
              key: "renderHyperlink",
              value: function renderHyperlink(e) {
                var t = this.createElement("a");
                if (this.renderChildren(e, t), this.renderStyleValues(e.cssStyle, t), e.href) t.href = e.href;else if (e.id) {
                  var _r10 = this.document.documentPart.rels.find(function (t) {
                    return t.id == e.id && "External" === t.targetMode;
                  });
                  t.href = null == _r10 ? void 0 : _r10.target;
                }
                return t;
              }
            }, {
              key: "renderDrawing",
              value: function renderDrawing(e) {
                var t = this.createElement("div");
                return t.style.display = "inline-block", t.style.position = "relative", t.style.textIndent = "0px", this.renderChildren(e, t), this.renderStyleValues(e.cssStyle, t), t;
              }
            }, {
              key: "renderImage",
              value: function renderImage(e) {
                var t = this.createElement("img");
                return this.renderStyleValues(e.cssStyle, t), this.document && this.document.loadDocumentImage(e.src, this.currentPart).then(function (e) {
                  t.src = e;
                }), t;
              }
            }, {
              key: "renderText",
              value: function renderText(e) {
                return this.htmlDocument.createTextNode(e.text);
              }
            }, {
              key: "renderDeletedText",
              value: function renderDeletedText(e) {
                return this.options.renderEndnotes ? this.htmlDocument.createTextNode(e.text) : null;
              }
            }, {
              key: "renderBreak",
              value: function renderBreak(e) {
                return "textWrapping" == e["break"] ? this.createElement("br") : null;
              }
            }, {
              key: "renderInserted",
              value: function renderInserted(e) {
                return this.options.renderChanges ? this.renderContainer(e, "ins") : this.renderChildren(e);
              }
            }, {
              key: "renderDeleted",
              value: function renderDeleted(e) {
                return this.options.renderChanges ? this.renderContainer(e, "del") : null;
              }
            }, {
              key: "renderSymbol",
              value: function renderSymbol(e) {
                var t = this.createElement("span");
                return t.style.fontFamily = e.font, t.innerHTML = "&#x".concat(e["char"], ";"), t;
              }
            }, {
              key: "renderFootnoteReference",
              value: function renderFootnoteReference(e) {
                var t = this.createElement("sup");
                return this.currentFootnoteIds.push(e.id), t.textContent = "".concat(this.currentFootnoteIds.length), t;
              }
            }, {
              key: "renderEndnoteReference",
              value: function renderEndnoteReference(e) {
                var t = this.createElement("sup");
                return this.currentEndnoteIds.push(e.id), t.textContent = "".concat(this.currentEndnoteIds.length), t;
              }
            }, {
              key: "renderTab",
              value: function renderTab(e) {
                var t,
                  r = this.createElement("span");
                if (r.innerHTML = "&emsp;", this.options.experimental) {
                  r.className = this.tabStopClass();
                  var a = null === (t = function (e, t) {
                    for (var r = e.parent; null != r && r.type != t;) r = r.parent;
                    return r;
                  }(e, n.DomType.Paragraph)) || void 0 === t ? void 0 : t.tabs;
                  this.currentTabs.push({
                    stops: a,
                    span: r
                  });
                }
                return r;
              }
            }, {
              key: "renderBookmarkStart",
              value: function renderBookmarkStart(e) {
                var t = this.createElement("span");
                return t.id = e.name, t;
              }
            }, {
              key: "renderRun",
              value: function renderRun(e) {
                if (e.fieldRun) return null;
                var t = this.createElement("span");
                if (e.id && (t.id = e.id), this.renderClass(e, t), this.renderStyleValues(e.cssStyle, t), e.verticalAlign) {
                  var _r11 = this.createElement(e.verticalAlign);
                  this.renderChildren(e, _r11), t.appendChild(_r11);
                } else this.renderChildren(e, t);
                return t;
              }
            }, {
              key: "renderTable",
              value: function renderTable(e) {
                var t = this.createElement("table");
                return this.tableCellPositions.push(this.currentCellPosition), this.tableVerticalMerges.push(this.currentVerticalMerge), this.currentVerticalMerge = {}, this.currentCellPosition = {
                  col: 0,
                  row: 0
                }, e.columns && t.appendChild(this.renderTableColumns(e.columns)), this.renderClass(e, t), this.renderChildren(e, t), this.renderStyleValues(e.cssStyle, t), this.currentVerticalMerge = this.tableVerticalMerges.pop(), this.currentCellPosition = this.tableCellPositions.pop(), t;
              }
            }, {
              key: "renderTableColumns",
              value: function renderTableColumns(e) {
                var t = this.createElement("colgroup");
                var _iterator34 = _createForOfIteratorHelper(e),
                  _step34;
                try {
                  for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                    var _r12 = _step34.value;
                    var _e15 = this.createElement("col");
                    _r12.width && (_e15.style.width = _r12.width), t.appendChild(_e15);
                  }
                } catch (err) {
                  _iterator34.e(err);
                } finally {
                  _iterator34.f();
                }
                return t;
              }
            }, {
              key: "renderTableRow",
              value: function renderTableRow(e) {
                var t = this.createElement("tr");
                return this.currentCellPosition.col = 0, this.renderClass(e, t), this.renderChildren(e, t), this.renderStyleValues(e.cssStyle, t), this.currentCellPosition.row++, t;
              }
            }, {
              key: "renderTableCell",
              value: function renderTableCell(e) {
                var t = this.createElement("td");
                var r = this.currentCellPosition.col;
                return e.verticalMerge ? "restart" == e.verticalMerge ? (this.currentVerticalMerge[r] = t, t.rowSpan = 1) : this.currentVerticalMerge[r] && (this.currentVerticalMerge[r].rowSpan += 1, t.style.display = "none") : this.currentVerticalMerge[r] = null, this.renderClass(e, t), this.renderChildren(e, t), this.renderStyleValues(e.cssStyle, t), e.span && (t.colSpan = e.span), this.currentCellPosition.col += t.colSpan, t;
              }
            }, {
              key: "renderVmlPicture",
              value: function renderVmlPicture(e) {
                var t = l("div");
                return this.renderChildren(e, t), t;
              }
            }, {
              key: "renderVmlElement",
              value: function renderVmlElement(e) {
                var t,
                  r,
                  n = u("svg");
                n.setAttribute("style", e.cssStyleText);
                var a = u(e.tagName);
                return Object.entries(e.attrs).forEach(function (_ref4) {
                  var _ref5 = _slicedToArray(_ref4, 2),
                    e = _ref5[0],
                    t = _ref5[1];
                  return a.setAttribute(e, t);
                }), (null === (t = e.imageHref) || void 0 === t ? void 0 : t.id) && (null === (r = this.document) || void 0 === r || r.loadDocumentImage(e.imageHref.id, this.currentPart).then(function (e) {
                  return a.setAttribute("href", e);
                })), n.appendChild(a), requestAnimationFrame(function () {
                  var e = n.firstElementChild.getBBox();
                  n.setAttribute("width", "".concat(Math.ceil(e.x + e.width))), n.setAttribute("height", "".concat(Math.ceil(e.y + e.height)));
                }), n;
              }
            }, {
              key: "renderMmlRadical",
              value: function renderMmlRadical(e) {
                var t;
                var r = e.children.find(function (e) {
                  return e.type == n.DomType.MmlBase;
                });
                if (null === (t = e.props) || void 0 === t ? void 0 : t.hideDegree) return c(o, "msqrt", null, this.renderElements([r]));
                var a = e.children.find(function (e) {
                  return e.type == n.DomType.MmlDegree;
                });
                return c(o, "mroot", null, this.renderElements([r, a]));
              }
            }, {
              key: "renderMmlDelimiter",
              value: function renderMmlDelimiter(e) {
                var t, r;
                var n = [];
                return n.push(c(o, "mo", null, [null !== (t = e.props.beginChar) && void 0 !== t ? t : "("])), n.push.apply(n, _toConsumableArray(this.renderElements(e.children))), n.push(c(o, "mo", null, [null !== (r = e.props.endChar) && void 0 !== r ? r : ")"])), c(o, "mrow", null, n);
              }
            }, {
              key: "renderMmlNary",
              value: function renderMmlNary(e) {
                var t;
                var r = [],
                  i = (0, a.keyBy)(e.children, function (e) {
                    return e.type;
                  }),
                  s = i[n.DomType.MmlSuperArgument],
                  l = i[n.DomType.MmlSubArgument],
                  u = s ? c(o, "mo", null, (0, a.asArray)(this.renderElement(s))) : null,
                  h = l ? c(o, "mo", null, (0, a.asArray)(this.renderElement(l))) : null;
                if (null === (t = e.props) || void 0 === t ? void 0 : t["char"]) {
                  var _t6 = c(o, "mo", null, [e.props["char"]]);
                  u || h ? r.push(c(o, "munderover", null, [_t6, h, u])) : u ? r.push(c(o, "mover", null, [_t6, u])) : h ? r.push(c(o, "munder", null, [_t6, h])) : r.push(_t6);
                }
                return r.push.apply(r, _toConsumableArray(this.renderElements(i[n.DomType.MmlBase].children))), c(o, "mrow", null, r);
              }
            }, {
              key: "renderMmlRun",
              value: function renderMmlRun(e) {
                var t = c(o, "ms");
                return this.renderClass(e, t), this.renderStyleValues(e.cssStyle, t), this.renderChildren(e, t), t;
              }
            }, {
              key: "renderStyleValues",
              value: function renderStyleValues(e, t) {
                Object.assign(t.style, e);
              }
            }, {
              key: "renderClass",
              value: function renderClass(e, t) {
                e.className && (t.className = e.className), e.styleName && t.classList.add(this.processStyleName(e.styleName));
              }
            }, {
              key: "findStyle",
              value: function findStyle(e) {
                var t;
                return e && (null === (t = this.styleMap) || void 0 === t ? void 0 : t[e]);
              }
            }, {
              key: "numberingClass",
              value: function numberingClass(e, t) {
                return "".concat(this.className, "-num-").concat(e, "-").concat(t);
              }
            }, {
              key: "tabStopClass",
              value: function tabStopClass() {
                return "".concat(this.className, "-tab-stop");
              }
            }, {
              key: "styleToString",
              value: function styleToString(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n = "".concat(e, " {\r\n");
                for (var _e16 in t) n += "  ".concat(_e16, ": ").concat(t[_e16], ";\r\n");
                return r && (n += r), n + "}\r\n";
              }
            }, {
              key: "numberingCounter",
              value: function numberingCounter(e, t) {
                return "".concat(this.className, "-num-").concat(e, "-").concat(t);
              }
            }, {
              key: "levelTextToContent",
              value: function levelTextToContent(e, t, r, n) {
                var _this25 = this;
                var a;
                return "\"".concat(e.replace(/%\d*/g, function (e) {
                  var t = parseInt(e.substring(1), 10) - 1;
                  return "\"counter(".concat(_this25.numberingCounter(r, t), ", ").concat(n, ")\"");
                })).concat(null !== (a = {
                  tab: "\\9",
                  space: "\\a0"
                }[t]) && void 0 !== a ? a : "", "\"");
              }
            }, {
              key: "numFormatToCssValue",
              value: function numFormatToCssValue(e) {
                var t;
                return null !== (t = {
                  none: "none",
                  bullet: "disc",
                  decimal: "decimal",
                  lowerLetter: "lower-alpha",
                  upperLetter: "upper-alpha",
                  lowerRoman: "lower-roman",
                  upperRoman: "upper-roman",
                  decimalZero: "decimal-leading-zero",
                  aiueo: "katakana",
                  aiueoFullWidth: "katakana",
                  chineseCounting: "simp-chinese-informal",
                  chineseCountingThousand: "simp-chinese-informal",
                  chineseLegalSimplified: "simp-chinese-formal",
                  chosung: "hangul-consonant",
                  ideographDigital: "cjk-ideographic",
                  ideographTraditional: "cjk-heavenly-stem",
                  ideographLegalTraditional: "trad-chinese-formal",
                  ideographZodiac: "cjk-earthly-branch",
                  iroha: "katakana-iroha",
                  irohaFullWidth: "katakana-iroha",
                  japaneseCounting: "japanese-informal",
                  japaneseDigitalTenThousand: "cjk-decimal",
                  japaneseLegal: "japanese-formal",
                  thaiNumbers: "thai",
                  koreanCounting: "korean-hangul-formal",
                  koreanDigital: "korean-hangul-formal",
                  koreanDigital2: "korean-hanja-informal",
                  hebrew1: "hebrew",
                  hebrew2: "hebrew",
                  hindiNumbers: "devanagari",
                  ganada: "hangul",
                  taiwaneseCounting: "cjk-ideographic",
                  taiwaneseCountingThousand: "cjk-ideographic",
                  taiwaneseDigital: "cjk-decimal"
                }[e]) && void 0 !== t ? t : e;
              }
            }, {
              key: "refreshTabStops",
              value: function refreshTabStops() {
                var _this26 = this;
                this.options.experimental && (clearTimeout(this.tabsTimeout), this.tabsTimeout = setTimeout(function () {
                  var e = (0, i.computePixelToPoint)();
                  var _iterator35 = _createForOfIteratorHelper(_this26.currentTabs),
                    _step35;
                  try {
                    for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                      var _t7 = _step35.value;
                      (0, i.updateTabStop)(_t7.span, _t7.stops, _this26.defaultTabSize, e);
                    }
                  } catch (err) {
                    _iterator35.e(err);
                  } finally {
                    _iterator35.f();
                  }
                }, 500));
              }
            }]);
            return _class7;
          }();
        },
        630: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.updateTabStop = t.computePixelToPoint = void 0;
          var r = {
            pos: 0,
            leader: "none",
            style: "left"
          };
          function n(e) {
            return parseFloat(e);
          }
          t.computePixelToPoint = function () {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
            var t = document.createElement("div");
            t.style.width = "100pt", e.appendChild(t);
            var r = 100 / t.offsetWidth;
            return e.removeChild(t), r;
          }, t.updateTabStop = function (e, t, a) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : .75;
            var s = e.closest("p"),
              o = e.getBoundingClientRect(),
              l = s.getBoundingClientRect(),
              u = getComputedStyle(s),
              c = (null == t ? void 0 : t.length) > 0 ? t.map(function (e) {
                return {
                  pos: n(e.position),
                  leader: e.leader,
                  style: e.style
                };
              }).sort(function (e, t) {
                return e.pos - t.pos;
              }) : [r],
              h = c[c.length - 1],
              d = l.width * i,
              f = n(a);
            var p = h.pos + f;
            if (p < d) for (; p < d && c.length < 50; p += f) c.push(Object.assign(Object.assign({}, r), {
              pos: p
            }));
            var m = parseFloat(u.marginLeft),
              g = l.left + m,
              b = (o.left - g) * i,
              y = c.find(function (e) {
                return "clear" != e.style && e.pos > b;
              });
            if (null == y) return;
            var v = 1;
            if ("right" == y.style || "center" == y.style) {
              var _t8 = Array.from(s.querySelectorAll(".".concat(e.className))),
                _r13 = _t8.indexOf(e) + 1,
                _n13 = document.createRange();
              _n13.setStart(e, 1), _r13 < _t8.length ? _n13.setEndBefore(_t8[_r13]) : _n13.setEndAfter(s);
              var _a4 = "center" == y.style ? .5 : 1,
                _o2 = _n13.getBoundingClientRect(),
                _u2 = _o2.left + _a4 * _o2.width - (l.left - m);
              v = y.pos - _u2 * i;
            } else v = y.pos - b;
            switch (e.innerHTML = "&nbsp;", e.style.textDecoration = "inherit", e.style.wordSpacing = "".concat(v.toFixed(0), "pt"), y.leader) {
              case "dot":
              case "middleDot":
                e.style.textDecoration = "underline", e.style.textDecorationStyle = "dotted";
                break;
              case "hyphen":
              case "heavy":
              case "underscore":
                e.style.textDecoration = "underline";
            }
          };
        },
        881: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.WmlEndnote = t.WmlFootnote = t.WmlBaseNote = void 0;
          var n = r(120);
          var a = /*#__PURE__*/_createClass(function a() {
            _classCallCheck(this, a);
            this.children = [], this.cssStyle = {};
          });
          t.WmlBaseNote = a, t.WmlFootnote = /*#__PURE__*/function (_a5) {
            _inherits(_class8, _a5);
            var _super9 = _createSuper(_class8);
            function _class8() {
              var _this27;
              _classCallCheck(this, _class8);
              _this27 = _super9.apply(this, arguments), _this27.type = n.DomType.Footnote;
              return _this27;
            }
            return _createClass(_class8);
          }(a), t.WmlEndnote = /*#__PURE__*/function (_a6) {
            _inherits(_class9, _a6);
            var _super10 = _createSuper(_class9);
            function _class9() {
              var _this28;
              _classCallCheck(this, _class9);
              _this28 = _super10.apply(this, arguments), _this28.type = n.DomType.Endnote;
              return _this28;
            }
            return _createClass(_class9);
          }(a);
        },
        735: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.EndnotesPart = t.FootnotesPart = t.BaseNotePart = void 0;
          var n = r(530),
            a = r(881);
          var i = /*#__PURE__*/function (_n$Part7) {
            _inherits(i, _n$Part7);
            var _super11 = _createSuper(i);
            function i(e, t, r) {
              var _this29;
              _classCallCheck(this, i);
              _this29 = _super11.call(this, e, t), _this29._documentParser = r;
              return _this29;
            }
            return _createClass(i);
          }(n.Part);
          t.BaseNotePart = i, t.FootnotesPart = /*#__PURE__*/function (_i7) {
            _inherits(_class10, _i7);
            var _super12 = _createSuper(_class10);
            function _class10(e, t, r) {
              _classCallCheck(this, _class10);
              return _super12.call(this, e, t, r);
            }
            _createClass(_class10, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.notes = this._documentParser.parseNotes(e, "footnote", a.WmlFootnote);
              }
            }]);
            return _class10;
          }(i), t.EndnotesPart = /*#__PURE__*/function (_i8) {
            _inherits(_class11, _i8);
            var _super13 = _createSuper(_class11);
            function _class11(e, t, r) {
              _classCallCheck(this, _class11);
              return _super13.call(this, e, t, r);
            }
            _createClass(_class11, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.notes = this._documentParser.parseNotes(e, "endnote", a.WmlEndnote);
              }
            }]);
            return _class11;
          }(i);
        },
        527: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.NumberingPart = void 0;
          var n = r(530),
            a = r(682);
          var i = /*#__PURE__*/function (_n$Part8) {
            _inherits(i, _n$Part8);
            var _super14 = _createSuper(i);
            function i(e, t, r) {
              var _this30;
              _classCallCheck(this, i);
              _this30 = _super14.call(this, e, t), _this30._documentParser = r;
              return _this30;
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                Object.assign(this, (0, a.parseNumberingPart)(e, this._package.xmlParser)), this.domNumberings = this._documentParser.parseNumberingFile(e);
              }
            }]);
            return i;
          }(n.Part);
          t.NumberingPart = i;
        },
        682: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseNumberingBulletPicture = t.parseNumberingLevelOverrride = t.parseNumberingLevel = t.parseAbstractNumbering = t.parseNumbering = t.parseNumberingPart = void 0;
          var n = r(109),
            a = r(488);
          function i(e, t) {
            var r = {
              id: t.attr(e, "numId"),
              overrides: []
            };
            var _iterator36 = _createForOfIteratorHelper(t.elements(e)),
              _step36;
            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var _n14 = _step36.value;
                switch (_n14.localName) {
                  case "abstractNumId":
                    r.abstractId = t.attr(_n14, "val");
                    break;
                  case "lvlOverride":
                    r.overrides.push(l(_n14, t));
                }
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
            return r;
          }
          function s(e, t) {
            var r = {
              id: t.attr(e, "abstractNumId"),
              levels: []
            };
            var _iterator37 = _createForOfIteratorHelper(t.elements(e)),
              _step37;
            try {
              for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var _n15 = _step37.value;
                switch (_n15.localName) {
                  case "name":
                    r.name = t.attr(_n15, "val");
                    break;
                  case "multiLevelType":
                    r.multiLevelType = t.attr(_n15, "val");
                    break;
                  case "numStyleLink":
                    r.numberingStyleLink = t.attr(_n15, "val");
                    break;
                  case "styleLink":
                    r.styleLink = t.attr(_n15, "val");
                    break;
                  case "lvl":
                    r.levels.push(o(_n15, t));
                }
              }
            } catch (err) {
              _iterator37.e(err);
            } finally {
              _iterator37.f();
            }
            return r;
          }
          function o(e, t) {
            var r = {
              level: t.intAttr(e, "ilvl")
            };
            var _iterator38 = _createForOfIteratorHelper(t.elements(e)),
              _step38;
            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _i9 = _step38.value;
                switch (_i9.localName) {
                  case "start":
                    r.start = t.attr(_i9, "val");
                    break;
                  case "lvlRestart":
                    r.restart = t.intAttr(_i9, "val");
                    break;
                  case "numFmt":
                    r.format = t.attr(_i9, "val");
                    break;
                  case "lvlText":
                    r.text = t.attr(_i9, "val");
                    break;
                  case "lvlJc":
                    r.justification = t.attr(_i9, "val");
                    break;
                  case "lvlPicBulletId":
                    r.bulletPictureId = t.attr(_i9, "val");
                    break;
                  case "pStyle":
                    r.paragraphStyle = t.attr(_i9, "val");
                    break;
                  case "pPr":
                    r.paragraphProps = (0, n.parseParagraphProperties)(_i9, t);
                    break;
                  case "rPr":
                    r.runProps = (0, a.parseRunProperties)(_i9, t);
                }
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
            return r;
          }
          function l(e, t) {
            var r = {
              level: t.intAttr(e, "ilvl")
            };
            var _iterator39 = _createForOfIteratorHelper(t.elements(e)),
              _step39;
            try {
              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                var _n16 = _step39.value;
                switch (_n16.localName) {
                  case "startOverride":
                    r.start = t.intAttr(_n16, "val");
                    break;
                  case "lvl":
                    r.numberingLevel = o(_n16, t);
                }
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }
            return r;
          }
          function u(e, t) {
            var r = t.element(e, "pict"),
              n = r && t.element(r, "shape"),
              a = n && t.element(n, "imagedata");
            return a ? {
              id: t.attr(e, "numPicBulletId"),
              referenceId: t.attr(a, "id"),
              style: t.attr(n, "style")
            } : null;
          }
          t.parseNumberingPart = function (e, t) {
            var r = {
              numberings: [],
              abstractNumberings: [],
              bulletPictures: []
            };
            var _iterator40 = _createForOfIteratorHelper(t.elements(e)),
              _step40;
            try {
              for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                var _n17 = _step40.value;
                switch (_n17.localName) {
                  case "num":
                    r.numberings.push(i(_n17, t));
                    break;
                  case "abstractNum":
                    r.abstractNumberings.push(s(_n17, t));
                    break;
                  case "numPicBullet":
                    r.bulletPictures.push(u(_n17, t));
                }
              }
            } catch (err) {
              _iterator40.e(err);
            } finally {
              _iterator40.f();
            }
            return r;
          }, t.parseNumbering = i, t.parseAbstractNumbering = s, t.parseNumberingLevel = o, t.parseNumberingLevelOverrride = l, t.parseNumberingBulletPicture = u;
        },
        472: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.XmlParser = t.serializeXmlString = t.parseXmlString = void 0;
          var n = r(149);
          t.parseXmlString = function (e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var r;
            t && (e = e.replace(/<[?].*[?]>/, "")), e = 65279 === (r = e).charCodeAt(0) ? r.substring(1) : r;
            var n = new DOMParser().parseFromString(e, "application/xml"),
              a = null === (i = n.getElementsByTagName("parsererror")[0]) || void 0 === i ? void 0 : i.textContent;
            var i;
            if (a) throw new Error(a);
            return n;
          }, t.serializeXmlString = function (e) {
            return new XMLSerializer().serializeToString(e);
          };
          var a = /*#__PURE__*/function () {
            function a() {
              _classCallCheck(this, a);
            }
            _createClass(a, [{
              key: "elements",
              value: function elements(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var r = [];
                for (var _n18 = 0, _a9 = e.childNodes.length; _n18 < _a9; _n18++) {
                  var _a8 = e.childNodes.item(_n18);
                  1 != _a8.nodeType || null != t && _a8.localName != t || r.push(_a8);
                }
                return r;
              }
            }, {
              key: "element",
              value: function element(e, t) {
                for (var _r14 = 0, _n19 = e.childNodes.length; _r14 < _n19; _r14++) {
                  var _n20 = e.childNodes.item(_r14);
                  if (1 == _n20.nodeType && _n20.localName == t) return _n20;
                }
                return null;
              }
            }, {
              key: "elementAttr",
              value: function elementAttr(e, t, r) {
                var n = this.element(e, t);
                return n ? this.attr(n, r) : void 0;
              }
            }, {
              key: "attrs",
              value: function attrs(e) {
                return Array.from(e.attributes);
              }
            }, {
              key: "attr",
              value: function attr(e, t) {
                for (var _r15 = 0, _n21 = e.attributes.length; _r15 < _n21; _r15++) {
                  var _n22 = e.attributes.item(_r15);
                  if (_n22.localName == t) return _n22.value;
                }
                return null;
              }
            }, {
              key: "intAttr",
              value: function intAttr(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n = this.attr(e, t);
                return n ? parseInt(n) : r;
              }
            }, {
              key: "hexAttr",
              value: function hexAttr(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n = this.attr(e, t);
                return n ? parseInt(n, 16) : r;
              }
            }, {
              key: "floatAttr",
              value: function floatAttr(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var n = this.attr(e, t);
                return n ? parseFloat(n) : r;
              }
            }, {
              key: "boolAttr",
              value: function boolAttr(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                return (0, n.convertBoolean)(this.attr(e, t), r);
              }
            }, {
              key: "lengthAttr",
              value: function lengthAttr(e, t) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n.LengthUsage.Dxa;
                return (0, n.convertLength)(this.attr(e, t), r);
              }
            }]);
            return a;
          }();
          t.XmlParser = a;
          var i = new a();
          t["default"] = i;
        },
        287: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.SettingsPart = void 0;
          var n = r(530),
            a = r(846);
          var i = /*#__PURE__*/function (_n$Part9) {
            _inherits(i, _n$Part9);
            var _super15 = _createSuper(i);
            function i(e, t) {
              _classCallCheck(this, i);
              return _super15.call(this, e, t);
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.settings = (0, a.parseSettings)(e, this._package.xmlParser);
              }
            }]);
            return i;
          }(n.Part);
          t.SettingsPart = i;
        },
        846: function _(e, t) {
          function r(e, t) {
            var r = {
              defaultNoteIds: []
            };
            var _iterator41 = _createForOfIteratorHelper(t.elements(e)),
              _step41;
            try {
              for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                var _n23 = _step41.value;
                switch (_n23.localName) {
                  case "numFmt":
                    r.nummeringFormat = t.attr(_n23, "val");
                    break;
                  case "footnote":
                  case "endnote":
                    r.defaultNoteIds.push(t.attr(_n23, "id"));
                }
              }
            } catch (err) {
              _iterator41.e(err);
            } finally {
              _iterator41.f();
            }
            return r;
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseNoteProperties = t.parseSettings = void 0, t.parseSettings = function (e, t) {
            var n = {};
            var _iterator42 = _createForOfIteratorHelper(t.elements(e)),
              _step42;
            try {
              for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                var _a10 = _step42.value;
                switch (_a10.localName) {
                  case "defaultTabStop":
                    n.defaultTabStop = t.lengthAttr(_a10, "val");
                    break;
                  case "footnotePr":
                    n.footnoteProps = r(_a10, t);
                    break;
                  case "endnotePr":
                    n.endnoteProps = r(_a10, t);
                    break;
                  case "autoHyphenation":
                    n.autoHyphenation = t.boolAttr(_a10, "val");
                }
              }
            } catch (err) {
              _iterator42.e(err);
            } finally {
              _iterator42.f();
            }
            return n;
          }, t.parseNoteProperties = r;
        },
        240: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.StylesPart = void 0;
          var n = r(530);
          var a = /*#__PURE__*/function (_n$Part10) {
            _inherits(a, _n$Part10);
            var _super16 = _createSuper(a);
            function a(e, t, r) {
              var _this31;
              _classCallCheck(this, a);
              _this31 = _super16.call(this, e, t), _this31._documentParser = r;
              return _this31;
            }
            _createClass(a, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.styles = this._documentParser.parseStylesFile(e);
              }
            }]);
            return a;
          }(n.Part);
          t.StylesPart = a;
        },
        893: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ThemePart = void 0;
          var n = r(530),
            a = r(55);
          var i = /*#__PURE__*/function (_n$Part11) {
            _inherits(i, _n$Part11);
            var _super17 = _createSuper(i);
            function i(e, t) {
              _classCallCheck(this, i);
              return _super17.call(this, e, t);
            }
            _createClass(i, [{
              key: "parseXml",
              value: function parseXml(e) {
                this.theme = (0, a.parseTheme)(e, this._package.xmlParser);
              }
            }]);
            return i;
          }(n.Part);
          t.ThemePart = i;
        },
        55: function _(e, t) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseFontInfo = t.parseFontScheme = t.parseColorScheme = t.parseTheme = t.DmlTheme = void 0;
          var r = /*#__PURE__*/_createClass(function r() {
            _classCallCheck(this, r);
          });
          function n(e, t) {
            var r = {
              name: t.attr(e, "name"),
              colors: {}
            };
            var _iterator43 = _createForOfIteratorHelper(t.elements(e)),
              _step43;
            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var _i10 = _step43.value;
                var n = t.element(_i10, "srgbClr"),
                  a = t.element(_i10, "sysClr");
                n ? r.colors[_i10.localName] = t.attr(n, "val") : a && (r.colors[_i10.localName] = t.attr(a, "lastClr"));
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
            }
            return r;
          }
          function a(e, t) {
            var r = {
              name: t.attr(e, "name")
            };
            var _iterator44 = _createForOfIteratorHelper(t.elements(e)),
              _step44;
            try {
              for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var _n24 = _step44.value;
                switch (_n24.localName) {
                  case "majorFont":
                    r.majorFont = i(_n24, t);
                    break;
                  case "minorFont":
                    r.minorFont = i(_n24, t);
                }
              }
            } catch (err) {
              _iterator44.e(err);
            } finally {
              _iterator44.f();
            }
            return r;
          }
          function i(e, t) {
            return {
              latinTypeface: t.elementAttr(e, "latin", "typeface"),
              eaTypeface: t.elementAttr(e, "ea", "typeface"),
              csTypeface: t.elementAttr(e, "cs", "typeface")
            };
          }
          t.DmlTheme = r, t.parseTheme = function (e, t) {
            var i = new r(),
              s = t.element(e, "themeElements");
            var _iterator45 = _createForOfIteratorHelper(t.elements(s)),
              _step45;
            try {
              for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                var _e17 = _step45.value;
                switch (_e17.localName) {
                  case "clrScheme":
                    i.colorScheme = n(_e17, t);
                    break;
                  case "fontScheme":
                    i.fontScheme = a(_e17, t);
                }
              }
            } catch (err) {
              _iterator45.e(err);
            } finally {
              _iterator45.f();
            }
            return i;
          }, t.parseColorScheme = n, t.parseFontScheme = a, t.parseFontInfo = i;
        },
        593: function _(e, t) {
          function r(e) {
            return e && "object" == _typeof(e) && !Array.isArray(e);
          }
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.asArray = t.formatCssRules = t.parseCssRules = t.mergeDeep = t.isString = t.isObject = t.blobToBase64 = t.keyBy = t.resolvePath = t.splitPath = t.escapeClassName = void 0, t.escapeClassName = function (e) {
            return null == e ? void 0 : e.replace(/[ .]+/g, "-").replace(/[&]+/g, "and").toLowerCase();
          }, t.splitPath = function (e) {
            var t = e.lastIndexOf("/") + 1;
            return [0 == t ? "" : e.substring(0, t), 0 == t ? e : e.substring(t)];
          }, t.resolvePath = function (e, t) {
            try {
              var _r16 = "http://docx/";
              return new URL(e, _r16 + t).toString().substring(_r16.length);
            } catch (r) {
              return "".concat(t).concat(e);
            }
          }, t.keyBy = function (e, t) {
            return e.reduce(function (e, r) {
              return e[t(r)] = r, e;
            }, {});
          }, t.blobToBase64 = function (e) {
            return new Promise(function (t, r) {
              var n = new FileReader();
              n.onloadend = function () {
                return t(n.result);
              }, n.onerror = function () {
                return r();
              }, n.readAsDataURL(e);
            });
          }, t.isObject = r, t.isString = function (e) {
            return e && "string" == typeof e || e instanceof String;
          }, t.mergeDeep = function e(t) {
            var a;
            for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              n[_key - 1] = arguments[_key];
            }
            if (!n.length) return t;
            var i = n.shift();
            if (r(t) && r(i)) for (var _n25 in i) r(i[_n25]) ? e(null !== (a = t[_n25]) && void 0 !== a ? a : t[_n25] = {}, i[_n25]) : t[_n25] = i[_n25];
            return e.apply(void 0, [t].concat(n));
          }, t.parseCssRules = function (e) {
            var t = {};
            var _iterator46 = _createForOfIteratorHelper(e.split(";")),
              _step46;
            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var _r17 = _step46.value;
                var _r17$split = _r17.split(":"),
                  _r17$split2 = _slicedToArray(_r17$split, 2),
                  _e18 = _r17$split2[0],
                  _n26 = _r17$split2[1];
                t[_e18] = _n26;
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }
            return t;
          }, t.formatCssRules = function (e) {
            return Object.entries(e).map(function (e, t) {
              return "".concat(e, ": ").concat(t);
            }).join(";");
          }, t.asArray = function (e) {
            return Array.isArray(e) ? e : [e];
          };
        },
        320: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.parseVmlElement = t.VmlElement = void 0;
          var n = r(149),
            a = r(120),
            i = r(472);
          var s = /*#__PURE__*/_createClass(function s() {
            _classCallCheck(this, s);
            this.type = a.DomType.VmlElement, this.attrs = {}, this.chidren = [];
          });
          function o(e) {
            var t;
            return {
              stroke: i["default"].attr(e, "color"),
              "stroke-width": null !== (t = i["default"].lengthAttr(e, "weight", n.LengthUsage.Emu)) && void 0 !== t ? t : "1px"
            };
          }
          function l(e) {
            return e.split(",");
          }
          t.VmlElement = s, t.parseVmlElement = function e(t) {
            var r = new s();
            switch (t.localName) {
              case "rect":
                r.tagName = "rect", Object.assign(r.attrs, {
                  width: "100%",
                  height: "100%"
                });
                break;
              case "oval":
                r.tagName = "ellipse", Object.assign(r.attrs, {
                  cx: "50%",
                  cy: "50%",
                  rx: "50%",
                  ry: "50%"
                });
                break;
              case "line":
                r.tagName = "line";
                break;
              case "shape":
                r.tagName = "g";
                break;
              default:
                return null;
            }
            var _iterator47 = _createForOfIteratorHelper(i["default"].attrs(t)),
              _step47;
            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var _e19 = _step47.value;
                switch (_e19.localName) {
                  case "style":
                    r.cssStyleText = _e19.value;
                    break;
                  case "fillcolor":
                    r.attrs.fill = _e19.value;
                    break;
                  case "from":
                    var _l2 = l(_e19.value),
                      _l3 = _slicedToArray(_l2, 2),
                      _t9 = _l3[0],
                      _n27 = _l3[1];
                    Object.assign(r.attrs, {
                      x1: _t9,
                      y1: _n27
                    });
                    break;
                  case "to":
                    var _l4 = l(_e19.value),
                      _l5 = _slicedToArray(_l4, 2),
                      _a11 = _l5[0],
                      _i11 = _l5[1];
                    Object.assign(r.attrs, {
                      x2: _a11,
                      y2: _i11
                    });
                }
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }
            var _iterator48 = _createForOfIteratorHelper(i["default"].elements(t)),
              _step48;
            try {
              for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
                var _n28 = _step48.value;
                switch (_n28.localName) {
                  case "stroke":
                    Object.assign(r.attrs, o(_n28));
                    break;
                  case "fill":
                    Object.assign(r.attrs, {});
                    break;
                  case "imagedata":
                    r.tagName = "image", Object.assign(r.attrs, {
                      width: "100%",
                      height: "100%"
                    }), r.imageHref = {
                      id: i["default"].attr(_n28, "id"),
                      title: i["default"].attr(_n28, "title")
                    };
                    break;
                  default:
                    var _t10 = e(_n28);
                    _t10 && r.chidren.push(_t10);
                }
              }
            } catch (err) {
              _iterator48.e(err);
            } finally {
              _iterator48.f();
            }
            return r;
          };
        },
        213: function _(e, t, r) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.deobfuscate = t.WordDocument = void 0;
          var n = r(461),
            a = r(380),
            i = r(522),
            s = r(448),
            o = r(593),
            l = r(527),
            u = r(240),
            c = r(985),
            h = r(665),
            d = r(162),
            f = r(893),
            p = r(735),
            m = r(287),
            g = r(177),
            b = [{
              type: n.RelationshipTypes.OfficeDocument,
              target: "word/document.xml"
            }, {
              type: n.RelationshipTypes.ExtendedProperties,
              target: "docProps/app.xml"
            }, {
              type: n.RelationshipTypes.CoreProperties,
              target: "docProps/core.xml"
            }, {
              type: n.RelationshipTypes.CustomProperties,
              target: "docProps/custom.xml"
            }];
          var y = /*#__PURE__*/function () {
            function y() {
              _classCallCheck(this, y);
              this.parts = [], this.partsMap = {};
            }
            _createClass(y, [{
              key: "save",
              value: function save() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blob";
                return this._package.save(e);
              }
            }, {
              key: "loadRelationshipPart",
              value: function () {
                var _loadRelationshipPart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e, t) {
                  var _this32 = this;
                  var r, i, _ref6, _ref7, _e20;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!this.partsMap[e]) {
                          _context5.next = 2;
                          break;
                        }
                        return _context5.abrupt("return", this.partsMap[e]);
                      case 2:
                        if (this._package.get(e)) {
                          _context5.next = 4;
                          break;
                        }
                        return _context5.abrupt("return", null);
                      case 4:
                        i = null;
                        _context5.t0 = t;
                        _context5.next = _context5.t0 === n.RelationshipTypes.OfficeDocument ? 8 : _context5.t0 === n.RelationshipTypes.FontTable ? 10 : _context5.t0 === n.RelationshipTypes.Numbering ? 12 : _context5.t0 === n.RelationshipTypes.Styles ? 14 : _context5.t0 === n.RelationshipTypes.Theme ? 16 : _context5.t0 === n.RelationshipTypes.Footnotes ? 18 : _context5.t0 === n.RelationshipTypes.Endnotes ? 20 : _context5.t0 === n.RelationshipTypes.Footer ? 22 : _context5.t0 === n.RelationshipTypes.Header ? 24 : _context5.t0 === n.RelationshipTypes.CoreProperties ? 26 : _context5.t0 === n.RelationshipTypes.ExtendedProperties ? 28 : _context5.t0 === n.RelationshipTypes.CustomProperties ? 30 : _context5.t0 === n.RelationshipTypes.Settings ? 32 : 33;
                        break;
                      case 8:
                        this.documentPart = i = new s.DocumentPart(this._package, e, this._parser);
                        return _context5.abrupt("break", 33);
                      case 10:
                        this.fontTablePart = i = new a.FontTablePart(this._package, e);
                        return _context5.abrupt("break", 33);
                      case 12:
                        this.numberingPart = i = new l.NumberingPart(this._package, e, this._parser);
                        return _context5.abrupt("break", 33);
                      case 14:
                        this.stylesPart = i = new u.StylesPart(this._package, e, this._parser);
                        return _context5.abrupt("break", 33);
                      case 16:
                        this.themePart = i = new f.ThemePart(this._package, e);
                        return _context5.abrupt("break", 33);
                      case 18:
                        this.footnotesPart = i = new p.FootnotesPart(this._package, e, this._parser);
                        return _context5.abrupt("break", 33);
                      case 20:
                        this.endnotesPart = i = new p.EndnotesPart(this._package, e, this._parser);
                        return _context5.abrupt("break", 33);
                      case 22:
                        i = new c.FooterPart(this._package, e, this._parser);
                        return _context5.abrupt("break", 33);
                      case 24:
                        i = new c.HeaderPart(this._package, e, this._parser);
                        return _context5.abrupt("break", 33);
                      case 26:
                        this.corePropsPart = i = new d.CorePropsPart(this._package, e);
                        return _context5.abrupt("break", 33);
                      case 28:
                        this.extendedPropsPart = i = new h.ExtendedPropsPart(this._package, e);
                        return _context5.abrupt("break", 33);
                      case 30:
                        i = new g.CustomPropsPart(this._package, e);
                        return _context5.abrupt("break", 33);
                      case 32:
                        this.settingsPart = i = new m.SettingsPart(this._package, e);
                      case 33:
                        if (!(null == i)) {
                          _context5.next = 35;
                          break;
                        }
                        return _context5.abrupt("return", Promise.resolve(null));
                      case 35:
                        this.partsMap[e] = i;
                        this.parts.push(i);
                        _context5.next = 39;
                        return i.load();
                      case 39:
                        if (!((null === (r = i.rels) || void 0 === r ? void 0 : r.length) > 0)) {
                          _context5.next = 43;
                          break;
                        }
                        _ref6 = (0, o.splitPath)(i.path), _ref7 = _slicedToArray(_ref6, 1), _e20 = _ref7[0];
                        _context5.next = 43;
                        return Promise.all(i.rels.map(function (t) {
                          return _this32.loadRelationshipPart((0, o.resolvePath)(t.target, _e20), t.type);
                        }));
                      case 43:
                        return _context5.abrupt("return", i);
                      case 44:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5, this);
                }));
                function loadRelationshipPart(_x6, _x7) {
                  return _loadRelationshipPart.apply(this, arguments);
                }
                return loadRelationshipPart;
              }()
            }, {
              key: "loadDocumentImage",
              value: function () {
                var _loadDocumentImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e, t) {
                  var r;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return this.loadResource(null != t ? t : this.documentPart, e, "blob");
                      case 2:
                        r = _context6.sent;
                        return _context6.abrupt("return", this.blobToURL(r));
                      case 4:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6, this);
                }));
                function loadDocumentImage(_x8, _x9) {
                  return _loadDocumentImage.apply(this, arguments);
                }
                return loadDocumentImage;
              }()
            }, {
              key: "loadNumberingImage",
              value: function () {
                var _loadNumberingImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e) {
                  var t;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this.loadResource(this.numberingPart, e, "blob");
                      case 2:
                        t = _context7.sent;
                        return _context7.abrupt("return", this.blobToURL(t));
                      case 4:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7, this);
                }));
                function loadNumberingImage(_x10) {
                  return _loadNumberingImage.apply(this, arguments);
                }
                return loadNumberingImage;
              }()
            }, {
              key: "loadFont",
              value: function () {
                var _loadFont = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e, t) {
                  var r;
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.loadResource(this.fontTablePart, e, "uint8array");
                      case 2:
                        r = _context8.sent;
                        return _context8.abrupt("return", r ? this.blobToURL(new Blob([v(r, t)])) : r);
                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8, this);
                }));
                function loadFont(_x11, _x12) {
                  return _loadFont.apply(this, arguments);
                }
                return loadFont;
              }()
            }, {
              key: "blobToURL",
              value: function blobToURL(e) {
                return e ? this._options.useBase64URL ? (0, o.blobToBase64)(e) : URL.createObjectURL(e) : null;
              }
            }, {
              key: "findPartByRelId",
              value: function findPartByRelId(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var r,
                  n = (null !== (r = t.rels) && void 0 !== r ? r : this.rels).find(function (t) {
                    return t.id == e;
                  });
                var a = t ? (0, o.splitPath)(t.path)[0] : "";
                return n ? this.partsMap[(0, o.resolvePath)(n.target, a)] : null;
              }
            }, {
              key: "getPathById",
              value: function getPathById(e, t) {
                var r = e.rels.find(function (e) {
                    return e.id == t;
                  }),
                  _ref8 = (0, o.splitPath)(e.path),
                  _ref9 = _slicedToArray(_ref8, 1),
                  n = _ref9[0];
                return r ? (0, o.resolvePath)(r.target, n) : null;
              }
            }, {
              key: "loadResource",
              value: function loadResource(e, t, r) {
                var n = this.getPathById(e, t);
                return n ? this._package.load(n, r) : Promise.resolve(null);
              }
            }], [{
              key: "load",
              value: function () {
                var _load3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e, t, r) {
                  var n;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        n = new y();
                        n._options = r;
                        n._parser = t;
                        _context9.next = 5;
                        return i.OpenXmlPackage.load(e, r);
                      case 5:
                        n._package = _context9.sent;
                        _context9.next = 8;
                        return n._package.loadRelationships();
                      case 8:
                        n.rels = _context9.sent;
                        _context9.next = 11;
                        return Promise.all(b.map(function (e) {
                          var t;
                          var r = null !== (t = n.rels.find(function (t) {
                            return t.type === e.type;
                          })) && void 0 !== t ? t : e;
                          return n.loadRelationshipPart(r.target, r.type);
                        }));
                      case 11:
                        return _context9.abrupt("return", n);
                      case 12:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }));
                function load(_x13, _x14, _x15) {
                  return _load3.apply(this, arguments);
                }
                return load;
              }()
            }]);
            return y;
          }();
          function v(e, t) {
            var r = t.replace(/{|}|-/g, ""),
              n = new Array(16);
            for (var _e21 = 0; _e21 < 16; _e21++) n[16 - _e21 - 1] = parseInt(r.substr(2 * _e21, 2), 16);
            for (var _t11 = 0; _t11 < 32; _t11++) e[_t11] = e[_t11] ^ n[_t11 % 16];
            return e;
          }
          t.WordDocument = y, t.deobfuscate = v;
        },
        583: function _(e) {
          e.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E";
        },
        626: function _(t) {
          t.exports = e;
        }
      },
      r = {};
    function n(e) {
      var a = r[e];
      if (void 0 !== a) return a.exports;
      var i = r[e] = {
        id: e,
        exports: {}
      };
      return t[e](i, i.exports, n), i.exports;
    }
    return n.m = t, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, {
        a: t
      }), t;
    }, n.d = function (e, t) {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
        enumerable: !0,
        get: t[r]
      });
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.b = document.baseURI || self.location.href, n(667);
  }();
}(function () {
  if (Sr) return kr;
  function e() {
    if (!(this instanceof e)) return new e();
    if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function () {
      var t = new e();
      for (var r in this) "function" != typeof this[r] && (t[r] = this[r]);
      return t;
    };
  }
  return Sr = 1, e.prototype = Tr(), e.prototype.loadAsync = Or(), e.support = ne(), e.defaults = Ke(), e.version = "3.10.1", e.loadAsync = function (t, r) {
    return new e().loadAsync(t, r);
  }, e.external = be(), kr = e;
}());
var Ir = {
  ignoreLastRenderedPageBreak: !1
};
var zr = {
  getData: function getData(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return "string" == typeof e ? function (e, t) {
      return fetch(e, t).then(function (e) {
        return 200 !== e.status ? Promise.reject(e) : e;
      });
    }(e, t) : Promise.resolve(e);
  },
  render: function render(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!e) return t.innerHTML = "", Promise.resolve();
    var n;
    return e instanceof Blob ? n = e : e instanceof Response ? n = e.blob() : e instanceof ArrayBuffer && (n = new Blob([e])), Mr.renderAsync(n, t, t, _objectSpread(_objectSpread({}, Ir), r));
  },
  getBlob: function () {
    var _getBlob = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e) {
      var t;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (!(e instanceof Blob)) {
              _context10.next = 4;
              break;
            }
            t = e;
            _context10.next = 11;
            break;
          case 4:
            if (!(e instanceof Response)) {
              _context10.next = 10;
              break;
            }
            _context10.next = 7;
            return e.blob();
          case 7:
            t = _context10.sent;
            _context10.next = 11;
            break;
          case 10:
            e instanceof ArrayBuffer && (t = new Blob([e]));
          case 11:
            return _context10.abrupt("return", t);
          case 12:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    function getBlob(_x16) {
      return _getBlob.apply(this, arguments);
    }
    return getBlob;
  }()
};
function Fr(_x17, _x18) {
  return _Fr.apply(this, arguments);
}
function _Fr() {
  _Fr = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e, t) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          t && (t instanceof ArrayBuffer && (t = new Blob([t])), function (e, t) {
            var r = document.createElement("a");
            r.download = e, r.style.display = "none", r.href = t, document.body.appendChild(r), r.click(), document.body.removeChild(r);
          }(e, URL.createObjectURL(t)));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _Fr.apply(this, arguments);
}
var jr = /*#__PURE__*/function () {
  function jr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, jr);
    _defineProperty(this, "container", null);
    _defineProperty(this, "wrapper", null);
    _defineProperty(this, "wrapperMain", null);
    _defineProperty(this, "options", {});
    _defineProperty(this, "requestOptions", {});
    _defineProperty(this, "fileData", null);
    this.container = e, this.options = t, this.requestOptions = r, this.createWrapper();
  }
  _createClass(jr, [{
    key: "createWrapper",
    value: function createWrapper() {
      this.wrapper = document.createElement("div"), this.wrapper.className = "vue-office-docx", this.wrapperMain = document.createElement("div"), this.wrapperMain.className = "vue-office-docx-main", this.wrapper.appendChild(this.wrapperMain), this.container.appendChild(this.wrapper);
    }
  }, {
    key: "setOptions",
    value: function setOptions(e) {
      this.options = e;
    }
  }, {
    key: "setRequestOptions",
    value: function setRequestOptions(e) {
      this.requestOptions = e;
    }
  }, {
    key: "preview",
    value: function preview(e) {
      var _this33 = this;
      return new Promise(function (t, r) {
        zr.getData(e, _this33.requestOptions).then( /*#__PURE__*/function () {
          var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return zr.getBlob(e);
                case 2:
                  _this33.fileData = _context11.sent;
                  zr.render(_this33.fileData, _this33.wrapperMain, _this33.options).then(function () {
                    t();
                  })["catch"](function (e) {
                    zr.render("", _this33.wrapperMain, _this33.options), r(e);
                  });
                case 4:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          }));
          return function (_x19) {
            return _ref10.apply(this, arguments);
          };
        }())["catch"](function (e) {
          zr.render("", _this33.wrapperMain, _this33.options), r(e);
        });
      });
    }
  }, {
    key: "save",
    value: function save(e) {
      Fr(e || "js-preview-docx-".concat(new Date().getTime(), ".docx"), this.fileData);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.container.removeChild(this.wrapper), this.container = null, this.wrapper = null, this.wrapperMain = null, this.options = null, this.requestOptions = null;
    }
  }]);
  return jr;
}();
var Lr = {
  init: function init(e, t, r) {
    return new jr(e, t, r);
  }
};
export { Lr as default };
