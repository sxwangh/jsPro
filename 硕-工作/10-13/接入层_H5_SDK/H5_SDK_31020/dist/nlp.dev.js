(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Nlp"] = factory();
	else
		root["Nlp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/nlp/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.5.1";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if ( true && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(_atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if ( true && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/nlp/index.js":
/*!**************************!*\
  !*** ./src/nlp/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nlp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nlp */ "./src/nlp/nlp.js");



/**
 * 语义对象,所有语义业务都基于此对象
 * @example
 * let nlp = new Nlp()
 */

var Nlp =
/*#__PURE__*/
function () {
  /**
   * 构造函数
   */
  function Nlp() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Nlp);

    this._nlp = new _nlp__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
  /**
   * 执行语义任务
   * @param {string} url - 代理路由的nginx地址(http(s)://ip:port/tts/)
   * @param {Object} params - 语义参数, 如果开启鉴权,需要appid,token/area,ability,auth_id(本次合成任务唯一标识)
   * @param {string} text - 语义文本
   * @param {boolean} [bAuth=false] - 是否主动鉴权, 开启则主动请求鉴权, 否则直接请求服务路由,由服务路由决定是否鉴权
   * @example
   * let nlp = new Nlp()
   * nlp.start(url, params, text)
   * @example
   * let nlp = new Nlp()
   * nlp.start(url, params, text, false)
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Nlp, [{
    key: "start",
    value: function start(url, params, text, bAuth) {
      this._nlp.start(url, params, text, bAuth);
    }
    /**
     * 注册语义结果回调
     * @param {function(msg: Object)} callback - 语义结果回调
     */

  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      this._nlp.onMessage(callback);
    }
    /**
     * 注册语义错误回调
     * @param {function(msg: Object)} callback - 语义错误回调
     */

  }, {
    key: "onError",
    value: function onError(callback) {
      this._nlp.onError(callback);
    }
  }]);

  return Nlp;
}();

/* harmony default export */ __webpack_exports__["default"] = (Nlp);

/***/ }),

/***/ "./src/nlp/nlp.js":
/*!************************!*\
  !*** ./src/nlp/nlp.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_httpnet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/httpnet */ "./src/utils/httpnet.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_4__);





var base = {
  "id": 1,
  "method": "deal_request",
  "jsonrpc": "2.0"
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

var Nlp_ =
/*#__PURE__*/
function () {
  function Nlp_() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Nlp_);

    this.net = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Nlp_, [{
    key: "start",
    value: function start(url, params, text, bAuth) {
      if (!this.net) {
        this.net = new _utils_httpnet__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }

      var auth = bAuth === true ? bAuth : false;

      if (auth) {
        var that = this;
        var authNlp = new _utils_auth__WEBPACK_IMPORTED_MODULE_3__["default"]('nlp', function (e) {
          if (e.status === 'onError') {
            if (that.onError) {
              that.onError({
                errCode: -1,
                msg: e.msg
              });
            }

            return;
          }

          var realUrl = e.msg;
          that.net.connect(that.processServerMsg.bind(that));
          var data = that.packageRequest(params, text);
          that.net.send('POST', realUrl, JSON.stringify(data));
        });
        authNlp.authStart(url, params, false);
      } else {
        this.net.connect(this.processServerMsg.bind(this));
        var data = this.packageRequest(params, text);
        this.net.send('POST', url, JSON.stringify(data));
      }
    }
  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      if (typeof callback === 'function') {
        this.onMessage = callback;
      }
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      if (typeof callback === 'function') {
        this.onError = callback;
      }
    }
  }, {
    key: "processServerMsg",
    value: function processServerMsg(msg) {
      if (!msg) {
        console.log('nlp response error');
        return;
      } // base64 -> utf8


      var jsonRet = JSON.parse(js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].decode(msg));
      console.log(jsonRet);

      if (!jsonRet.result) {
        if (this.onError) {
          this.onError({
            errCode: -1,
            msg: 'server error'
          });
        }
      }

      if (jsonRet.result.ret !== 0) {
        if (this.onError) {
          this.onError({
            errCode: jsonRet.result.ret,
            msg: 'error'
          });
        }
      }

      if (this.onMessage) {
        this.onMessage(jsonRet.result.ism_result);
      }
    }
  }, {
    key: "packageRequest",
    value: function packageRequest(params, text) {
      var msg = clone(base);
      var data = clone(params);
      data.txt = js_base64__WEBPACK_IMPORTED_MODULE_4__["Base64"].encode(text);
      data.svc = 'nlp';
      msg.params = data;
      return msg;
    }
  }]);

  return Nlp_;
}();

/* harmony default export */ __webpack_exports__["default"] = (Nlp_);

/***/ }),

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _httpnet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpnet */ "./src/utils/httpnet.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_3__);




var base = {
  "id": 1,
  "method": "deal_request",
  "jsonrpc": "2.0"
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

var Auth =
/*#__PURE__*/
function () {
  function Auth(svc, callback) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Auth);

    this.realUrl = null;
    this.authUrl = null;
    this.net = null;
    this.bStart = false;
    this.header = [{
      header: "content-type",
      value: "application/json-rpc"
    }];

    if (typeof callback === 'function') {
      this.authCallback = callback;
    } else {
      this.authCallback = function () {
        console.log('ttsCallback undefined');
      };
    }

    this.heart = null;
    this.hbInfo = {};
    this.svc = svc;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Auth, [{
    key: "authStart",
    value: function authStart(authUrl, msg, bHB) {
      this.realUrl = null;
      this.authUrl = authUrl;

      if (!this.net) {
        this.net = new _httpnet__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }

      this.bHB = bHB === false ? bHB : true;
      this.authMsg = msg;
      this.hbInfo.token = msg.token;
      this.hbInfo.area = msg.area;
      this.hbInfo.ability = msg.ability; // 有扩展参数,优先使用扩展参数内的

      if (this.authMsg.extend_params) {
        var ext = JSON.parse(this.authMsg.extend_params);
        var extArray = ext.params.split(',');

        for (var i = 0; i < extArray.length; i++) {
          var arr = extArray[i].split('=');

          if (arr[0] === 'token' || arr[0] === 'area' || arr[0] === 'ability') {
            this.hbInfo[arr[0]] = arr[1];
          }
        }
      }

      this.hbInfo.appid = msg.appid;
      this.hbInfo.authId = msg.auth_id;
      this.status = "ssb";
      this.net.connect(this.processAuthMsg.bind(this));
      var data = this.authBeginMsg();
      this.net.send('POST', authUrl, JSON.stringify(data), this.header);
    }
  }, {
    key: "authEnd",
    value: function authEnd() {
      if (!this.net) {
        this.net = new _httpnet__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }

      this.status = "sse";
      this.net.connect(this.processAuthMsg.bind(this));
      var data = this.authEndMsg();
      this.net.send('POST', this.authUrl, JSON.stringify(data), this.header);
      clearInterval(this.heart);
      this.heart = null;
    }
  }, {
    key: "heartBeat",
    value: function heartBeat() {
      if (!this.bStart) {
        return;
      }

      if (!this.net) {
        this.net = new _httpnet__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }

      var data = this.authHBMsg();
      this.net.connect(this.processAuthMsg.bind(this));
      this.net.send('POST', this.authUrl, JSON.stringify(data), this.header);
      console.log('heart beat send', new Date());
    }
  }, {
    key: "authBeginMsg",
    value: function authBeginMsg() {
      var msg = clone(base);
      var data = clone(this.authMsg);
      data.appid = this.authMsg.appid;
      data.cmd = "ssb";
      data.svc = this.svc;
      msg.params = data;
      return msg;
    }
  }, {
    key: "authEndMsg",
    value: function authEndMsg() {
      var msg = clone(base);
      var params = clone(this.authMsg);
      params.appid = this.authMsg.appid;
      params.cmd = "sse";
      params.svc = this.svc;
      msg.params = params;
      return msg;
    }
  }, {
    key: "authHBMsg",
    value: function authHBMsg() {
      var msg = clone(base);
      var params = {
        batchHeartBeat: []
      };
      params.batchHeartBeat.push(this.hbInfo);
      msg.params = params;
      return msg;
    }
  }, {
    key: "processAuthMsg",
    value: function processAuthMsg(msg) {
      if (msg === undefined) {
        if (this.status === "hb") {
          clearInterval(this.heart);
          this.heart = null;
        }

        console.log('auth response error');
        return;
      }

      var jsonRet = JSON.parse(js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].atob(msg));
      console.log(jsonRet);
      var result = jsonRet.result;

      if (result == null) {
        console.log(jsonRet.error);
        this.authCallback({
          status: "onError",
          msg: jsonRet.error
        });

        if (this.status === "hb") {
          clearInterval(this.heart);
          this.heart = null;
        }

        return;
      }

      if (result.ret !== 0 && result.ret !== 302) {
        console.log(result);
        this.authCallback({
          status: "onError",
          msg: result.ret
        });

        if (this.status === "hb") {
          clearInterval(this.heart);
          this.heart = null;
        }

        return;
      }

      if (this.status === "ssb") {
        this.bStart = true;
        this.realUrl = result.url;
        this.authCallback({
          status: "onResult",
          msg: this.realUrl
        });

        if (this.bHB) {
          this.heart = setInterval(this.heartBeat.bind(this), 3000);
          this.status = "hb";
        }
      } else if (this.status === "sse") {
        this.bStart = false;
      }
    }
  }]);

  return Auth;
}();

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./src/utils/httpnet.js":
/*!******************************!*\
  !*** ./src/utils/httpnet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./src/utils/tools.js");




var HttpNet =
/*#__PURE__*/
function () {
  function HttpNet() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HttpNet);

    this.instance = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HttpNet, [{
    key: "connect",
    value: function connect(callback) {
      this.instance = new XMLHttpRequest();

      this.instance.onreadystatechange = function (event) {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            callback(this.responseText);
          } else {
            callback();
          }
        }
      };
    }
  }, {
    key: "send",
    value: function send(method, url, data, header) {
      if (this.instance.readyState === XMLHttpRequest.UNSENT || this.instance.readyState === XMLHttpRequest.DONE) {
        console.log('[' + _tools__WEBPACK_IMPORTED_MODULE_2__["__getDateTimeString"]() + ']:', JSON.parse(data));
        this.instance.open(method, url);
        this.instance.withCredentials = true;

        if (header) {
          for (var i = 0; i < header.length; i++) {
            this.instance.setRequestHeader(header[i].header, header[i].value);
          }
        }

        this.instance.send(data);
      } else {
        console.log('http request not ready, readyState: ' + this.instance.readyState);
      }
    }
  }]);

  return HttpNet;
}();

/* harmony default export */ __webpack_exports__["default"] = (HttpNet);

/***/ }),

/***/ "./src/utils/tools.js":
/*!****************************!*\
  !*** ./src/utils/tools.js ***!
  \****************************/
/*! exports provided: __getDateTimeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getDateTimeString", function() { return __getDateTimeString; });
function __getDateTimeString(time) {
  var now = time == null ? new Date() : time;
  var year = String(now.getFullYear());
  var month = String(now.getMonth() + 1);

  if (month.length === 1) {
    month = "0".concat(month);
  }

  var day = String(now.getDate());

  if (day.length === 1) {
    day = "0".concat(day);
  }

  var hour = String(now.getHours());

  if (hour.length === 1) {
    hour = "0".concat(hour);
  }

  var minute = String(now.getMinutes());

  if (minute.length === 1) {
    minute = "0".concat(minute);
  }

  var second = String(now.getSeconds());

  if (second.length === 1) {
    second = "0".concat(second);
  }

  var millisecond = String(now.getMilliseconds());

  if (millisecond.length === 1) {
    millisecond = "00".concat(millisecond);
  } else if (millisecond.length === 2) {
    millisecond = "0".concat(millisecond);
  }

  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(second, ".").concat(millisecond);
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ObHAvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL05scC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ObHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9ObHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9ObHAvLi9ub2RlX21vZHVsZXMvanMtYmFzZTY0L2Jhc2U2NC5qcyIsIndlYnBhY2s6Ly9ObHAvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL05scC8uL3NyYy9ubHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTmxwLy4vc3JjL25scC9ubHAuanMiLCJ3ZWJwYWNrOi8vTmxwLy4vc3JjL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vTmxwLy4vc3JjL3V0aWxzL2h0dHBuZXQuanMiLCJ3ZWJwYWNrOi8vTmxwLy4vc3JjL3V0aWxzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbIk5scCIsIl9ubHAiLCJObHBfIiwidXJsIiwicGFyYW1zIiwidGV4dCIsImJBdXRoIiwic3RhcnQiLCJjYWxsYmFjayIsIm9uTWVzc2FnZSIsIm9uRXJyb3IiLCJiYXNlIiwiY2xvbmUiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuZXQiLCJOZXQiLCJhdXRoIiwidGhhdCIsImF1dGhObHAiLCJBdXRoIiwiZSIsInN0YXR1cyIsImVyckNvZGUiLCJtc2ciLCJyZWFsVXJsIiwiY29ubmVjdCIsInByb2Nlc3NTZXJ2ZXJNc2ciLCJiaW5kIiwiZGF0YSIsInBhY2thZ2VSZXF1ZXN0Iiwic2VuZCIsImF1dGhTdGFydCIsImNvbnNvbGUiLCJsb2ciLCJqc29uUmV0IiwiQmFzZTY0IiwiZGVjb2RlIiwicmVzdWx0IiwicmV0IiwiaXNtX3Jlc3VsdCIsInR4dCIsImVuY29kZSIsInN2YyIsImF1dGhVcmwiLCJiU3RhcnQiLCJoZWFkZXIiLCJ2YWx1ZSIsImF1dGhDYWxsYmFjayIsImhlYXJ0IiwiaGJJbmZvIiwiYkhCIiwiYXV0aE1zZyIsInRva2VuIiwiYXJlYSIsImFiaWxpdHkiLCJleHRlbmRfcGFyYW1zIiwiZXh0IiwiZXh0QXJyYXkiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJhcnIiLCJhcHBpZCIsImF1dGhJZCIsImF1dGhfaWQiLCJwcm9jZXNzQXV0aE1zZyIsImF1dGhCZWdpbk1zZyIsImF1dGhFbmRNc2ciLCJjbGVhckludGVydmFsIiwiYXV0aEhCTXNnIiwiRGF0ZSIsImNtZCIsImJhdGNoSGVhcnRCZWF0IiwicHVzaCIsInVuZGVmaW5lZCIsImF0b2IiLCJlcnJvciIsInNldEludGVydmFsIiwiaGVhcnRCZWF0IiwiSHR0cE5ldCIsImluc3RhbmNlIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJldmVudCIsInJlYWR5U3RhdGUiLCJET05FIiwicmVzcG9uc2VUZXh0IiwibWV0aG9kIiwiVU5TRU5UIiwidG9vbHMiLCJvcGVuIiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsIl9fZ2V0RGF0ZVRpbWVTdHJpbmciLCJ0aW1lIiwibm93IiwieWVhciIsIlN0cmluZyIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxpc2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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TW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk5scFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJObHBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL25scC9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiLypcbiAqICBiYXNlNjQuanNcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEJTRCAzLUNsYXVzZSBMaWNlbnNlLlxuICogICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICpcbiAqICBSZWZlcmVuY2VzOlxuICogICAgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjRcbiAqL1xuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGdsb2JhbClcbiAgICAgICAgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWRcbiAgICAgICAgPyBkZWZpbmUoZmFjdG9yeSkgOiBmYWN0b3J5KGdsb2JhbClcbn0oKFxuICAgIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGZcbiAgICAgICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1xuICAgICAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsXG46IHRoaXNcbiksIGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyBleGlzdGluZyB2ZXJzaW9uIGZvciBub0NvbmZsaWN0KClcbiAgICBnbG9iYWwgPSBnbG9iYWwgfHwge307XG4gICAgdmFyIF9CYXNlNjQgPSBnbG9iYWwuQmFzZTY0O1xuICAgIHZhciB2ZXJzaW9uID0gXCIyLjUuMVwiO1xuICAgIC8vIGlmIG5vZGUuanMgYW5kIE5PVCBSZWFjdCBOYXRpdmUsIHdlIHVzZSBCdWZmZXJcbiAgICB2YXIgYnVmZmVyO1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYnVmZmVyID0gZXZhbChcInJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclwiKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBidWZmZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc3RhbnRzXG4gICAgdmFyIGI2NGNoYXJzXG4gICAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuICAgIHZhciBiNjR0YWIgPSBmdW5jdGlvbihiaW4pIHtcbiAgICAgICAgdmFyIHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBiaW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB0W2Jpbi5jaGFyQXQoaSldID0gaTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfShiNjRjaGFycyk7XG4gICAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG4gICAgLy8gZW5jb2RlciBzdHVmZlxuICAgIHZhciBjYl91dG9iID0gZnVuY3Rpb24oYykge1xuICAgICAgICBpZiAoYy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB2YXIgY2MgPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICByZXR1cm4gY2MgPCAweDgwID8gY1xuICAgICAgICAgICAgICAgIDogY2MgPCAweDgwMCA/IChmcm9tQ2hhckNvZGUoMHhjMCB8IChjYyA+Pj4gNikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSkpXG4gICAgICAgICAgICAgICAgOiAoZnJvbUNoYXJDb2RlKDB4ZTAgfCAoKGNjID4+PiAxMikgJiAweDBmKSlcbiAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKChjYyA+Pj4gIDYpICYgMHgzZikpXG4gICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICggY2MgICAgICAgICAmIDB4M2YpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2MgPSAweDEwMDAwXG4gICAgICAgICAgICAgICAgKyAoYy5jaGFyQ29kZUF0KDApIC0gMHhEODAwKSAqIDB4NDAwXG4gICAgICAgICAgICAgICAgKyAoYy5jaGFyQ29kZUF0KDEpIC0gMHhEQzAwKTtcbiAgICAgICAgICAgIHJldHVybiAoZnJvbUNoYXJDb2RlKDB4ZjAgfCAoKGNjID4+PiAxOCkgJiAweDA3KSlcbiAgICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+IDEyKSAmIDB4M2YpKVxuICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKChjYyA+Pj4gIDYpICYgMHgzZikpXG4gICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoIGNjICAgICAgICAgJiAweDNmKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVfdXRvYiA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZGXXxbXlxceDAwLVxceDdGXS9nO1xuICAgIHZhciB1dG9iID0gZnVuY3Rpb24odSkge1xuICAgICAgICByZXR1cm4gdS5yZXBsYWNlKHJlX3V0b2IsIGNiX3V0b2IpO1xuICAgIH07XG4gICAgdmFyIGNiX2VuY29kZSA9IGZ1bmN0aW9uKGNjYykge1xuICAgICAgICB2YXIgcGFkbGVuID0gWzAsIDIsIDFdW2NjYy5sZW5ndGggJSAzXSxcbiAgICAgICAgb3JkID0gY2NjLmNoYXJDb2RlQXQoMCkgPDwgMTZcbiAgICAgICAgICAgIHwgKChjY2MubGVuZ3RoID4gMSA/IGNjYy5jaGFyQ29kZUF0KDEpIDogMCkgPDwgOClcbiAgICAgICAgICAgIHwgKChjY2MubGVuZ3RoID4gMiA/IGNjYy5jaGFyQ29kZUF0KDIpIDogMCkpLFxuICAgICAgICBjaGFycyA9IFtcbiAgICAgICAgICAgIGI2NGNoYXJzLmNoYXJBdCggb3JkID4+PiAxOCksXG4gICAgICAgICAgICBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gMTIpICYgNjMpLFxuICAgICAgICAgICAgcGFkbGVuID49IDIgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gNikgJiA2MyksXG4gICAgICAgICAgICBwYWRsZW4gPj0gMSA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdChvcmQgJiA2MylcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICAgIH07XG4gICAgdmFyIGJ0b2EgPSBnbG9iYWwuYnRvYSA/IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5idG9hKGIpO1xuICAgIH0gOiBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBiLnJlcGxhY2UoL1tcXHNcXFNdezEsM30vZywgY2JfZW5jb2RlKTtcbiAgICB9O1xuICAgIHZhciBfZW5jb2RlID0gYnVmZmVyID9cbiAgICAgICAgYnVmZmVyLmZyb20gJiYgVWludDhBcnJheSAmJiBidWZmZXIuZnJvbSAhPT0gVWludDhBcnJheS5mcm9tXG4gICAgICAgID8gZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgICAgIHJldHVybiAodS5jb25zdHJ1Y3RvciA9PT0gYnVmZmVyLmNvbnN0cnVjdG9yID8gdSA6IGJ1ZmZlci5mcm9tKHUpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgfVxuICAgICAgICA6ICBmdW5jdGlvbiAodSkge1xuICAgICAgICAgICAgcmV0dXJuICh1LmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3IgPyB1IDogbmV3ICBidWZmZXIodSkpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKHUpIHsgcmV0dXJuIGJ0b2EodXRvYih1KSkgfVxuICAgIDtcbiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24odSwgdXJpc2FmZSkge1xuICAgICAgICByZXR1cm4gIXVyaXNhZmVcbiAgICAgICAgICAgID8gX2VuY29kZShTdHJpbmcodSkpXG4gICAgICAgICAgICA6IF9lbmNvZGUoU3RyaW5nKHUpKS5yZXBsYWNlKC9bK1xcL10vZywgZnVuY3Rpb24obTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbTAgPT0gJysnID8gJy0nIDogJ18nO1xuICAgICAgICAgICAgfSkucmVwbGFjZSgvPS9nLCAnJyk7XG4gICAgfTtcbiAgICB2YXIgZW5jb2RlVVJJID0gZnVuY3Rpb24odSkgeyByZXR1cm4gZW5jb2RlKHUsIHRydWUpIH07XG4gICAgLy8gZGVjb2RlciBzdHVmZlxuICAgIHZhciByZV9idG91ID0gbmV3IFJlZ0V4cChbXG4gICAgICAgICdbXFx4QzAtXFx4REZdW1xceDgwLVxceEJGXScsXG4gICAgICAgICdbXFx4RTAtXFx4RUZdW1xceDgwLVxceEJGXXsyfScsXG4gICAgICAgICdbXFx4RjAtXFx4RjddW1xceDgwLVxceEJGXXszfSdcbiAgICBdLmpvaW4oJ3wnKSwgJ2cnKTtcbiAgICB2YXIgY2JfYnRvdSA9IGZ1bmN0aW9uKGNjY2MpIHtcbiAgICAgICAgc3dpdGNoKGNjY2MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHZhciBjcCA9ICgoMHgwNyAmIGNjY2MuY2hhckNvZGVBdCgwKSkgPDwgMTgpXG4gICAgICAgICAgICAgICAgfCAgICAoKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMSkpIDw8IDEyKVxuICAgICAgICAgICAgICAgIHwgICAgKCgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDIpKSA8PCAgNilcbiAgICAgICAgICAgICAgICB8ICAgICAoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgzKSksXG4gICAgICAgICAgICBvZmZzZXQgPSBjcCAtIDB4MTAwMDA7XG4gICAgICAgICAgICByZXR1cm4gKGZyb21DaGFyQ29kZSgob2Zmc2V0ICA+Pj4gMTApICsgMHhEODAwKVxuICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgob2Zmc2V0ICYgMHgzRkYpICsgMHhEQzAwKSk7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBmcm9tQ2hhckNvZGUoXG4gICAgICAgICAgICAgICAgKCgweDBmICYgY2NjYy5jaGFyQ29kZUF0KDApKSA8PCAxMilcbiAgICAgICAgICAgICAgICAgICAgfCAoKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMSkpIDw8IDYpXG4gICAgICAgICAgICAgICAgICAgIHwgICgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDIpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAgZnJvbUNoYXJDb2RlKFxuICAgICAgICAgICAgICAgICgoMHgxZiAmIGNjY2MuY2hhckNvZGVBdCgwKSkgPDwgNilcbiAgICAgICAgICAgICAgICAgICAgfCAgKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMSkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgYnRvdSA9IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIGIucmVwbGFjZShyZV9idG91LCBjYl9idG91KTtcbiAgICB9O1xuICAgIHZhciBjYl9kZWNvZGUgPSBmdW5jdGlvbihjY2NjKSB7XG4gICAgICAgIHZhciBsZW4gPSBjY2NjLmxlbmd0aCxcbiAgICAgICAgcGFkbGVuID0gbGVuICUgNCxcbiAgICAgICAgbiA9IChsZW4gPiAwID8gYjY0dGFiW2NjY2MuY2hhckF0KDApXSA8PCAxOCA6IDApXG4gICAgICAgICAgICB8IChsZW4gPiAxID8gYjY0dGFiW2NjY2MuY2hhckF0KDEpXSA8PCAxMiA6IDApXG4gICAgICAgICAgICB8IChsZW4gPiAyID8gYjY0dGFiW2NjY2MuY2hhckF0KDIpXSA8PCAgNiA6IDApXG4gICAgICAgICAgICB8IChsZW4gPiAzID8gYjY0dGFiW2NjY2MuY2hhckF0KDMpXSAgICAgICA6IDApLFxuICAgICAgICBjaGFycyA9IFtcbiAgICAgICAgICAgIGZyb21DaGFyQ29kZSggbiA+Pj4gMTYpLFxuICAgICAgICAgICAgZnJvbUNoYXJDb2RlKChuID4+PiAgOCkgJiAweGZmKSxcbiAgICAgICAgICAgIGZyb21DaGFyQ29kZSggbiAgICAgICAgICYgMHhmZilcbiAgICAgICAgXTtcbiAgICAgICAgY2hhcnMubGVuZ3RoIC09IFswLCAwLCAyLCAxXVtwYWRsZW5dO1xuICAgICAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gICAgfTtcbiAgICB2YXIgX2F0b2IgPSBnbG9iYWwuYXRvYiA/IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5hdG9iKGEpO1xuICAgIH0gOiBmdW5jdGlvbihhKXtcbiAgICAgICAgcmV0dXJuIGEucmVwbGFjZSgvXFxTezEsNH0vZywgY2JfZGVjb2RlKTtcbiAgICB9O1xuICAgIHZhciBhdG9iID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gX2F0b2IoU3RyaW5nKGEpLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXS9nLCAnJykpO1xuICAgIH07XG4gICAgdmFyIF9kZWNvZGUgPSBidWZmZXIgP1xuICAgICAgICBidWZmZXIuZnJvbSAmJiBVaW50OEFycmF5ICYmIGJ1ZmZlci5mcm9tICE9PSBVaW50OEFycmF5LmZyb21cbiAgICAgICAgPyBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEuY29uc3RydWN0b3IgPT09IGJ1ZmZlci5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICA/IGEgOiBidWZmZXIuZnJvbShhLCAnYmFzZTY0JykpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEuY29uc3RydWN0b3IgPT09IGJ1ZmZlci5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICA/IGEgOiBuZXcgYnVmZmVyKGEsICdiYXNlNjQnKSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGJ0b3UoX2F0b2IoYSkpIH07XG4gICAgdmFyIGRlY29kZSA9IGZ1bmN0aW9uKGEpe1xuICAgICAgICByZXR1cm4gX2RlY29kZShcbiAgICAgICAgICAgIFN0cmluZyhhKS5yZXBsYWNlKC9bLV9dL2csIGZ1bmN0aW9uKG0wKSB7IHJldHVybiBtMCA9PSAnLScgPyAnKycgOiAnLycgfSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9dL2csICcnKVxuICAgICAgICApO1xuICAgIH07XG4gICAgdmFyIG5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIEJhc2U2NCA9IGdsb2JhbC5CYXNlNjQ7XG4gICAgICAgIGdsb2JhbC5CYXNlNjQgPSBfQmFzZTY0O1xuICAgICAgICByZXR1cm4gQmFzZTY0O1xuICAgIH07XG4gICAgLy8gZXhwb3J0IEJhc2U2NFxuICAgIGdsb2JhbC5CYXNlNjQgPSB7XG4gICAgICAgIFZFUlNJT046IHZlcnNpb24sXG4gICAgICAgIGF0b2I6IGF0b2IsXG4gICAgICAgIGJ0b2E6IGJ0b2EsXG4gICAgICAgIGZyb21CYXNlNjQ6IGRlY29kZSxcbiAgICAgICAgdG9CYXNlNjQ6IGVuY29kZSxcbiAgICAgICAgdXRvYjogdXRvYixcbiAgICAgICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgICAgIGVuY29kZVVSSTogZW5jb2RlVVJJLFxuICAgICAgICBidG91OiBidG91LFxuICAgICAgICBkZWNvZGU6IGRlY29kZSxcbiAgICAgICAgbm9Db25mbGljdDogbm9Db25mbGljdCxcbiAgICAgICAgX19idWZmZXJfXzogYnVmZmVyXG4gICAgfTtcbiAgICAvLyBpZiBFUzUgaXMgYXZhaWxhYmxlLCBtYWtlIEJhc2U2NC5leHRlbmRTdHJpbmcoKSBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbm9FbnVtID0gZnVuY3Rpb24odil7XG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOnYsZW51bWVyYWJsZTpmYWxzZSx3cml0YWJsZTp0cnVlLGNvbmZpZ3VyYWJsZTp0cnVlfTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2xvYmFsLkJhc2U2NC5leHRlbmRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZSwgJ2Zyb21CYXNlNjQnLCBub0VudW0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHRoaXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUsICd0b0Jhc2U2NCcsIG5vRW51bShmdW5jdGlvbiAodXJpc2FmZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlKHRoaXMsIHVyaXNhZmUpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUsICd0b0Jhc2U2NFVSSScsIG5vRW51bShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGUodGhpcywgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vXG4gICAgLy8gZXhwb3J0IEJhc2U2NCB0byB0aGUgbmFtZXNwYWNlXG4gICAgLy9cbiAgICBpZiAoZ2xvYmFsWydNZXRlb3InXSkgeyAvLyBNZXRlb3IuanNcbiAgICAgICAgQmFzZTY0ID0gZ2xvYmFsLkJhc2U2NDtcbiAgICB9XG4gICAgLy8gbW9kdWxlLmV4cG9ydHMgYW5kIEFNRCBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlxuICAgIC8vIG1vZHVsZS5leHBvcnRzIGhhcyBwcmVjZWRlbmNlLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cy5CYXNlNjQgPSBnbG9iYWwuQmFzZTY0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCl7IHJldHVybiBnbG9iYWwuQmFzZTY0IH0pO1xuICAgIH1cbiAgICAvLyB0aGF0J3MgaXQhXG4gICAgcmV0dXJuIHtCYXNlNjQ6IGdsb2JhbC5CYXNlNjR9XG59KSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgTmxwXyBmcm9tICcuL25scCdcclxuXHJcbi8qKlxyXG4gKiDor63kuYnlr7nosaEs5omA5pyJ6K+t5LmJ5Lia5Yqh6YO95Z+65LqO5q2k5a+56LGhXHJcbiAqIEBleGFtcGxlXHJcbiAqIGxldCBubHAgPSBuZXcgTmxwKClcclxuICovXHJcbmNsYXNzIE5scCB7XHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9ubHAgPSBuZXcgTmxwXygpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiafooYzor63kuYnku7vliqFcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSDku6PnkIbot6/nlLHnmoRuZ2lueOWcsOWdgChodHRwKHMpOi8vaXA6cG9ydC90dHMvKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIOivreS5ieWPguaVsCwg5aaC5p6c5byA5ZCv6Ym05p2DLOmcgOimgWFwcGlkLHRva2VuL2FyZWEsYWJpbGl0eSxhdXRoX2lkKOacrOasoeWQiOaIkOS7u+WKoeWUr+S4gOagh+ivhilcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0g6K+t5LmJ5paH5pysXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtiQXV0aD1mYWxzZV0gLSDmmK/lkKbkuLvliqjpibTmnYMsIOW8gOWQr+WImeS4u+WKqOivt+axgumJtOadgywg5ZCm5YiZ55u05o6l6K+35rGC5pyN5Yqh6Lev55SxLOeUseacjeWKoei3r+eUseWGs+WumuaYr+WQpumJtOadg1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGxldCBubHAgPSBuZXcgTmxwKClcclxuICAgICAqIG5scC5zdGFydCh1cmwsIHBhcmFtcywgdGV4dClcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBsZXQgbmxwID0gbmV3IE5scCgpXHJcbiAgICAgKiBubHAuc3RhcnQodXJsLCBwYXJhbXMsIHRleHQsIGZhbHNlKVxyXG4gICAgICovXHJcbiAgICBzdGFydCh1cmwsIHBhcmFtcywgdGV4dCwgYkF1dGgpIHtcclxuICAgICAgICB0aGlzLl9ubHAuc3RhcnQodXJsLCBwYXJhbXMsIHRleHQsIGJBdXRoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM6K+t5LmJ57uT5p6c5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKG1zZzogT2JqZWN0KX0gY2FsbGJhY2sgLSDor63kuYnnu5Pmnpzlm57osINcclxuICAgICAqL1xyXG4gICAgb25NZXNzYWdlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fbmxwLm9uTWVzc2FnZShjYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOivreS5iemUmeivr+Wbnuiwg1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbihtc2c6IE9iamVjdCl9IGNhbGxiYWNrIC0g6K+t5LmJ6ZSZ6K+v5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIG9uRXJyb3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9ubHAub25FcnJvcihjYWxsYmFjaylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmxwIiwiaW1wb3J0IE5ldCBmcm9tICcuLi91dGlscy9odHRwbmV0J1xyXG5pbXBvcnQgQXV0aCBmcm9tICcuLi91dGlscy9hdXRoJ1xyXG5pbXBvcnQge0Jhc2U2NH0gZnJvbSAnanMtYmFzZTY0J1xyXG5cclxubGV0IGJhc2UgPSB7XHJcbiAgICBcImlkXCI6IDEsXHJcbiAgICBcIm1ldGhvZFwiOiBcImRlYWxfcmVxdWVzdFwiLFxyXG4gICAgXCJqc29ucnBjXCI6IFwiMi4wXCJcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmUob2JqKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxyXG59XHJcblxyXG5jbGFzcyBObHBfIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubmV0ID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHVybCwgcGFyYW1zLCB0ZXh0LCBiQXV0aCkge1xyXG4gICAgICAgIGlmICghdGhpcy5uZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXQgPSBuZXcgTmV0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhdXRoID0gYkF1dGggPT09IHRydWUgPyBiQXV0aCA6IGZhbHNlXHJcbiAgICAgICAgaWYgKGF1dGgpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgICAgIGxldCBhdXRoTmxwID0gbmV3IEF1dGgoJ25scCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnN0YXR1cyA9PT0gJ29uRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQub25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uRXJyb3Ioe2VyckNvZGU6IC0xLCBtc2c6IGUubXNnfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlYWxVcmwgPSBlLm1zZ1xyXG4gICAgICAgICAgICAgICAgdGhhdC5uZXQuY29ubmVjdCh0aGF0LnByb2Nlc3NTZXJ2ZXJNc2cuYmluZCh0aGF0KSlcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhhdC5wYWNrYWdlUmVxdWVzdChwYXJhbXMsIHRleHQpXHJcbiAgICAgICAgICAgICAgICB0aGF0Lm5ldC5zZW5kKCdQT1NUJywgcmVhbFVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF1dGhObHAuYXV0aFN0YXJ0KHVybCwgcGFyYW1zLCBmYWxzZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5ldC5jb25uZWN0KHRoaXMucHJvY2Vzc1NlcnZlck1zZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMucGFja2FnZVJlcXVlc3QocGFyYW1zLCB0ZXh0KVxyXG4gICAgICAgICAgICB0aGlzLm5ldC5zZW5kKCdQT1NUJywgdXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25NZXNzYWdlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZSA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvciA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NTZXJ2ZXJNc2cobXNnKSB7XHJcbiAgICAgICAgaWYgKCFtc2cpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25scCByZXNwb25zZSBlcnJvcicpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYmFzZTY0IC0+IHV0ZjhcclxuICAgICAgICBsZXQganNvblJldCA9IEpTT04ucGFyc2UoQmFzZTY0LmRlY29kZShtc2cpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGpzb25SZXQpXHJcblxyXG4gICAgICAgIGlmICghanNvblJldC5yZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHtlcnJDb2RlOiAtMSwgbXNnOiAnc2VydmVyIGVycm9yJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChqc29uUmV0LnJlc3VsdC5yZXQgIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHtlcnJDb2RlOiBqc29uUmV0LnJlc3VsdC5yZXQsIG1zZzogJ2Vycm9yJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9uTWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzc2FnZShqc29uUmV0LnJlc3VsdC5pc21fcmVzdWx0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYWNrYWdlUmVxdWVzdChwYXJhbXMsIHRleHQpIHtcclxuICAgICAgICBsZXQgbXNnID0gY2xvbmUoYmFzZSlcclxuICAgICAgICBsZXQgZGF0YSA9IGNsb25lKHBhcmFtcylcclxuICAgICAgICBkYXRhLnR4dCA9IEJhc2U2NC5lbmNvZGUodGV4dClcclxuICAgICAgICBkYXRhLnN2YyA9ICdubHAnXHJcbiAgICAgICAgbXNnLnBhcmFtcyA9IGRhdGFcclxuXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBObHBfIiwiaW1wb3J0IE5ldCBmcm9tICcuL2h0dHBuZXQnXHJcbmltcG9ydCB7QmFzZTY0fSBmcm9tICdqcy1iYXNlNjQnXHJcblxyXG5sZXQgYmFzZSA9IHtcclxuICAgIFwiaWRcIjogMSxcclxuICAgIFwibWV0aG9kXCI6IFwiZGVhbF9yZXF1ZXN0XCIsXHJcbiAgICBcImpzb25ycGNcIjogXCIyLjBcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbn1cclxuXHJcbmNsYXNzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3Ioc3ZjLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMucmVhbFVybCA9IG51bGxcclxuICAgICAgICB0aGlzLmF1dGhVcmwgPSBudWxsXHJcbiAgICAgICAgdGhpcy5uZXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5iU3RhcnQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gW3toZWFkZXI6IFwiY29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb24tcnBjXCJ9XVxyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R0c0NhbGxiYWNrIHVuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oZWFydCA9IG51bGxcclxuICAgICAgICB0aGlzLmhiSW5mbyA9IHt9XHJcbiAgICAgICAgdGhpcy5zdmMgPSBzdmNcclxuICAgIH1cclxuXHJcbiAgICBhdXRoU3RhcnQoYXV0aFVybCwgbXNnLCBiSEIpIHtcclxuICAgICAgICB0aGlzLnJlYWxVcmwgPSBudWxsXHJcbiAgICAgICAgdGhpcy5hdXRoVXJsID0gYXV0aFVybFxyXG4gICAgICAgIGlmICghdGhpcy5uZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXQgPSBuZXcgTmV0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iSEIgPSBiSEIgPT09IGZhbHNlID8gYkhCIDogdHJ1ZVxyXG4gICAgICAgIHRoaXMuYXV0aE1zZyA9IG1zZ1xyXG5cclxuICAgICAgICB0aGlzLmhiSW5mby50b2tlbiA9IG1zZy50b2tlblxyXG4gICAgICAgIHRoaXMuaGJJbmZvLmFyZWEgPSBtc2cuYXJlYVxyXG4gICAgICAgIHRoaXMuaGJJbmZvLmFiaWxpdHkgPSBtc2cuYWJpbGl0eVxyXG4gICAgICAgIC8vIOacieaJqeWxleWPguaVsCzkvJjlhYjkvb/nlKjmianlsZXlj4LmlbDlhoXnmoRcclxuICAgICAgICBpZiAodGhpcy5hdXRoTXNnLmV4dGVuZF9wYXJhbXMpIHtcclxuICAgICAgICAgICAgbGV0IGV4dCA9IEpTT04ucGFyc2UodGhpcy5hdXRoTXNnLmV4dGVuZF9wYXJhbXMpXHJcbiAgICAgICAgICAgIGxldCBleHRBcnJheSA9IGV4dC5wYXJhbXMuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gZXh0QXJyYXlbaV0uc3BsaXQoJz0nKVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyclswXSA9PT0gJ3Rva2VuJyB8fCBhcnJbMF0gPT09ICdhcmVhJyB8fCBhcnJbMF0gPT09ICdhYmlsaXR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGJJbmZvW2FyclswXV0gPSBhcnJbMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhiSW5mby5hcHBpZCA9IG1zZy5hcHBpZFxyXG4gICAgICAgIHRoaXMuaGJJbmZvLmF1dGhJZCA9IG1zZy5hdXRoX2lkXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJzc2JcIlxyXG4gICAgICAgIHRoaXMubmV0LmNvbm5lY3QodGhpcy5wcm9jZXNzQXV0aE1zZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5hdXRoQmVnaW5Nc2coKVxyXG4gICAgICAgIHRoaXMubmV0LnNlbmQoJ1BPU1QnLCBhdXRoVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5oZWFkZXIpXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aEVuZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubmV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV0ID0gbmV3IE5ldCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJzc2VcIlxyXG4gICAgICAgIHRoaXMubmV0LmNvbm5lY3QodGhpcy5wcm9jZXNzQXV0aE1zZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5hdXRoRW5kTXNnKClcclxuICAgICAgICB0aGlzLm5ldC5zZW5kKCdQT1NUJywgdGhpcy5hdXRoVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5oZWFkZXIpXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJ0KVxyXG4gICAgICAgIHRoaXMuaGVhcnQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaGVhcnRCZWF0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5iU3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubmV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV0ID0gbmV3IE5ldCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuYXV0aEhCTXNnKClcclxuICAgICAgICB0aGlzLm5ldC5jb25uZWN0KHRoaXMucHJvY2Vzc0F1dGhNc2cuYmluZCh0aGlzKSlcclxuICAgICAgICB0aGlzLm5ldC5zZW5kKCdQT1NUJywgdGhpcy5hdXRoVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5oZWFkZXIpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlYXJ0IGJlYXQgc2VuZCcsIG5ldyBEYXRlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aEJlZ2luTXNnKCkge1xyXG4gICAgICAgIGxldCBtc2cgPSBjbG9uZShiYXNlKVxyXG4gICAgICAgIGxldCBkYXRhID0gY2xvbmUodGhpcy5hdXRoTXNnKVxyXG5cclxuICAgICAgICBkYXRhLmFwcGlkID0gdGhpcy5hdXRoTXNnLmFwcGlkXHJcbiAgICAgICAgZGF0YS5jbWQgPSBcInNzYlwiXHJcbiAgICAgICAgZGF0YS5zdmMgPSB0aGlzLnN2Y1xyXG4gICAgICAgIG1zZy5wYXJhbXMgPSBkYXRhXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhFbmRNc2coKSB7XHJcbiAgICAgICAgbGV0IG1zZyA9IGNsb25lKGJhc2UpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IGNsb25lKHRoaXMuYXV0aE1zZylcclxuXHJcbiAgICAgICAgcGFyYW1zLmFwcGlkID0gdGhpcy5hdXRoTXNnLmFwcGlkXHJcbiAgICAgICAgcGFyYW1zLmNtZCA9IFwic3NlXCJcclxuICAgICAgICBwYXJhbXMuc3ZjID0gdGhpcy5zdmNcclxuICAgICAgICBtc2cucGFyYW1zID0gcGFyYW1zXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhIQk1zZygpIHtcclxuICAgICAgICBsZXQgbXNnID0gY2xvbmUoYmFzZSlcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBiYXRjaEhlYXJ0QmVhdDogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zLmJhdGNoSGVhcnRCZWF0LnB1c2godGhpcy5oYkluZm8pXHJcbiAgICAgICAgbXNnLnBhcmFtcyA9IHBhcmFtc1xyXG4gICAgICAgIHJldHVybiBtc2dcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzQXV0aE1zZyhtc2cpIHtcclxuICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBcImhiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oZWFydClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnQgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggcmVzcG9uc2UgZXJyb3InKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGpzb25SZXQgPSBKU09OLnBhcnNlKEJhc2U2NC5hdG9iKG1zZykpXHJcbiAgICAgICAgY29uc29sZS5sb2coanNvblJldClcclxuICAgICAgICBsZXQgcmVzdWx0ID0ganNvblJldC5yZXN1bHRcclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coanNvblJldC5lcnJvcilcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2soe3N0YXR1czogXCJvbkVycm9yXCIsIG1zZzoganNvblJldC5lcnJvcn0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gXCJoYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0ID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZXQgIT09IDAgJiYgcmVzdWx0LnJldCAhPT0gMzAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2soe3N0YXR1czogXCJvbkVycm9yXCIsIG1zZzogcmVzdWx0LnJldH0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gXCJoYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0ID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBcInNzYlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYlN0YXJ0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnJlYWxVcmwgPSByZXN1bHQudXJsXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aENhbGxiYWNrKHtzdGF0dXM6IFwib25SZXN1bHRcIiwgbXNnOiB0aGlzLnJlYWxVcmx9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5iSEIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnQgPSBzZXRJbnRlcnZhbCh0aGlzLmhlYXJ0QmVhdC5iaW5kKHRoaXMpLCAzMDAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBcImhiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IFwic3NlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iU3RhcnQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aCIsImltcG9ydCAqIGFzIHRvb2xzIGZyb20gXCIuL3Rvb2xzXCJcclxuXHJcbmNsYXNzIEh0dHBOZXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmQobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LlVOU0VOVCB8fCB0aGlzLmluc3RhbmNlLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgdG9vbHMuX19nZXREYXRlVGltZVN0cmluZygpICsgJ106JywgSlNPTi5wYXJzZShkYXRhKSlcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vcGVuKG1ldGhvZCwgdXJsKVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLndpdGhDcmVkZW50aWFscyA9IHRydWVcclxuICAgICAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyW2ldLmhlYWRlciwgaGVhZGVyW2ldLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2VuZChkYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdodHRwIHJlcXVlc3Qgbm90IHJlYWR5LCByZWFkeVN0YXRlOiAnICsgdGhpcy5pbnN0YW5jZS5yZWFkeVN0YXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHR0cE5ldCIsImV4cG9ydCBmdW5jdGlvbiBfX2dldERhdGVUaW1lU3RyaW5nKHRpbWUpIHtcclxuICAgIGxldCBub3cgPSAodGltZSA9PSBudWxsID8gbmV3IERhdGUoKSA6IHRpbWUpXHJcblxyXG4gICAgbGV0IHllYXIgPSBTdHJpbmcobm93LmdldEZ1bGxZZWFyKCkpXHJcbiAgICBsZXQgbW9udGggPSBTdHJpbmcobm93LmdldE1vbnRoKCkgKyAxKVxyXG4gICAgaWYgKG1vbnRoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIG1vbnRoID0gYDAke21vbnRofWBcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF5ID0gU3RyaW5nKG5vdy5nZXREYXRlKCkpO1xyXG4gICAgaWYgKGRheS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBkYXkgPSBgMCR7ZGF5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhvdXIgPSBTdHJpbmcobm93LmdldEhvdXJzKCkpO1xyXG4gICAgaWYgKGhvdXIubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgaG91ciA9IGAwJHtob3VyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1pbnV0ZSA9IFN0cmluZyhub3cuZ2V0TWludXRlcygpKTtcclxuICAgIGlmIChtaW51dGUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWludXRlID0gYDAke21pbnV0ZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZWNvbmQgPSBTdHJpbmcobm93LmdldFNlY29uZHMoKSk7XHJcbiAgICBpZiAoc2Vjb25kLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHNlY29uZCA9IGAwJHtzZWNvbmR9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWlsbGlzZWNvbmQgPSBTdHJpbmcobm93LmdldE1pbGxpc2Vjb25kcygpKTtcclxuICAgIGlmIChtaWxsaXNlY29uZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBtaWxsaXNlY29uZCA9IGAwMCR7bWlsbGlzZWNvbmR9YDtcclxuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgbWlsbGlzZWNvbmQgPSBgMCR7bWlsbGlzZWNvbmR9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9ICR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfS4ke21pbGxpc2Vjb25kfWBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=