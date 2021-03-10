(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tts"] = factory();
	else
		root["Tts"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tts/index.js");
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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "./src/tts/index.js":
/*!**************************!*\
  !*** ./src/tts/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tts */ "./src/tts/tts.js");



/**
 * 合成对象,所有的合成业务都基于此对象
 * @example
 * let tts = new Tts()
 */

var Tts =
/*#__PURE__*/
function () {
  /**
   * 构造函数
   * @param {function} audioProcFunc - 接收合成音频回调函数function(isEnd: boolean, audio: string)
   */
  function Tts(audioProcFunc) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Tts);

    this._tts = new _tts__WEBPACK_IMPORTED_MODULE_2__["default"](audioProcFunc);
  }
  /**
   * 注册合成错误回调
   * @param {function} callback - 合成错误处理回调function(msg: string)
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tts, [{
    key: "onError",
    value: function onError(callback) {
      this._tts.onError(callback);
    }
    /**
     * 开始合成
     * @param {string} url - 代理路由的nginx地址(http(s)://ip:port/tts/)
     * @param {Object} params - 合成参数, 如果开启鉴权,需要appid,token/area,ability,auth_id(本次合成任务唯一标识)
     * @param {string} text - 需要合成的文本
     * @param {boolean} [bAuth=false] - 是否主动鉴权, 开启则主动请求鉴权, 否则直接请求服务路由,由服务路由决定是否鉴权
     * @example
     * let tts = new Tts()
     * tts.start(url, params, text)
     * @example
     * let tts = new Tts()
     * tts.start(url, params, text, false)
     */

  }, {
    key: "start",
    value: function start(url, params, text, bAuth) {
      this._tts.start(url, params, text, bAuth);
    }
    /**
     * 停止合成
     */

  }, {
    key: "stop",
    value: function stop() {
      this._tts.abortSession();
    }
  }]);

  return Tts;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tts);

/***/ }),

/***/ "./src/tts/tts.js":
/*!************************!*\
  !*** ./src/tts/tts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_httpnet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/httpnet */ "./src/utils/httpnet.js");
/* harmony import */ var _tts_cmd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tts_cmd */ "./src/tts/tts_cmd.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");








var ttsStatus = {
  "idle": "idle",
  //空闲
  "sessionBegin": "ssb",
  //session begin 会话开始
  "textPut": "txtw",
  //text put 写入文本
  "getResult": "grs",
  //get result 获取结果
  "sessionEnd": "sse" //session end 会话结束

};

var tts_ =
/*#__PURE__*/
function () {
  function tts_(audioProcFunc) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, tts_);

    this.net = null;
    this.text = null;
    this.url = null;
    this.serverParams = null;
    this.extendParams = null;
    this.Status = null;
    this.session = {
      id: null
    };

    if (typeof audioProcFunc === 'function') {
      this.audioProc = audioProcFunc;
    } else {
      this.audioProc = function () {
        console.log('audioProc undefined');
      };
    }

    this.syncid = 0;
    this.header = [{
      header: "content-type",
      value: "application/json-rpc"
    }];
    this.bAuth = false;
    this.Auth = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(tts_, [{
    key: "onError",
    value: function onError(callback) {
      if (typeof callback === 'function') {
        this.onError = callback;
      }
    }
  }, {
    key: "start",
    value: function start(url, params, text, bAuth) {
      this.text = text;
      this.syncid = 0;

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(params) === 'object') {
        this.serverParams = params;
        this.extendParams = params.extend_params;
      }

      if (!this.net) {
        this.net = new _utils_httpnet__WEBPACK_IMPORTED_MODULE_3__["default"]();
      }

      this.bAuth = bAuth === true ? bAuth : false;

      if (this.bAuth) {
        var that = this;

        if (!this.Auth) {
          this.Auth = new _utils_auth__WEBPACK_IMPORTED_MODULE_5__["default"]('tts', function (e) {
            if (e.status === 'onError') {
              if (that.onError) {
                that.onError(e.msg);
              }

              return;
            }

            that.url = e.msg;
            that.net.connect(that.processServerMsg.bind(that));
            var data = _tts_cmd__WEBPACK_IMPORTED_MODULE_4__["sessionBegin"](that.serverParams);
            that.net.send('POST', that.url, JSON.stringify(data), that.header);
            that.Status = ttsStatus.sessionBegin;
            that.syncid++;
          });
        }

        this.Auth.authStart(url, params);
      } else {
        this.url = url;
        this.net.connect(this.processServerMsg.bind(this));
        var data = _tts_cmd__WEBPACK_IMPORTED_MODULE_4__["sessionBegin"](this.serverParams);
        this.net.send('POST', this.url, JSON.stringify(data), this.header);
        this.Status = ttsStatus.sessionBegin;
        this.syncid++;
      }
    }
  }, {
    key: "abortSession",
    value: function abortSession() {
      this.audioProc(true);

      if (!this.Status || this.Status === ttsStatus.sessionEnd || this.Status === ttsStatus.idle) {
        return;
      }

      if (this.session.id != null) {
        var data = {
          syncid: this.syncid.toString(),
          auth_id: this.serverParams.auth_id,
          extend_params: this.extendParams
        };
        this.net.send('POST', this.url, JSON.stringify(_tts_cmd__WEBPACK_IMPORTED_MODULE_4__["seesionEnd"](this.session.id, data, this.serverParams.appid)), this.header);
      }

      this.Status = ttsStatus.sessionEnd;

      if (this.bAuth) {
        this.Auth.authEnd();
        this.bAuth = false;
      }
    } // 状态机

  }, {
    key: "processServerMsg",
    value: function processServerMsg(msg) {
      if (msg === undefined) {
        console.log('response error');

        if (this.onError) {
          this.onError('response error');
        }

        this.abortSession();
        return;
      }

      var jsonRet = JSON.parse(js_base64__WEBPACK_IMPORTED_MODULE_6__["Base64"].atob(msg));
      console.log('[' + _utils_tools__WEBPACK_IMPORTED_MODULE_7__["__getDateTimeString"]() + ']:', jsonRet);
      var result = jsonRet.result;
      this.syncid++;

      if (result == null) {
        console.log(jsonRet.error);

        if (this.onError) {
          this.onError(jsonRet.error);
        }

        this.abortSession();
        return;
      }

      if (result.ret !== 0) {
        if (this.onError) {
          this.onError(result.ret);
        }

        this.abortSession();
        return;
      }

      switch (this.Status) {
        case ttsStatus.sessionBegin:
          {
            this.session.id = result.sid;
            var data = {
              data: js_base64__WEBPACK_IMPORTED_MODULE_6__["Base64"].encode(this.text),
              syncid: this.syncid.toString(),
              extend_params: this.extendParams
            };
            this.net.send('POST', this.url, JSON.stringify(_tts_cmd__WEBPACK_IMPORTED_MODULE_4__["textPut"](this.session.id, data, this.serverParams.appid)), this.header);
            this.Status = ttsStatus.textPut;
            break;
          }

        case ttsStatus.textPut:
          {
            var _data = {
              syncid: this.syncid.toString(),
              extend_params: this.extendParams
            };
            this.net.send('POST', this.url, JSON.stringify(_tts_cmd__WEBPACK_IMPORTED_MODULE_4__["getResult"](this.session.id, _data, this.serverParams.appid)), this.header);
            this.Status = ttsStatus.getResult;
            break;
          }

        case ttsStatus.getResult:
          {
            var _data2 = {
              syncid: this.syncid.toString(),
              extend_params: this.extendParams
            };
            var audio = result.data;

            if (audio !== undefined && audio !== "") {
              this.audioProc(false, js_base64__WEBPACK_IMPORTED_MODULE_6__["Base64"].atob(audio));
            }

            if (result.ttsStatus !== 0) {
              this.net.send('POST', this.url, JSON.stringify(_tts_cmd__WEBPACK_IMPORTED_MODULE_4__["getResult"](this.session.id, _data2, this.serverParams.appid)), this.header);
            } else {
              this.abortSession();
            }

            break;
          }

        case ttsStatus.sessionEnd:
          {
            this.Status = ttsStatus.idle;
            break;
          }
      }
    }
  }]);

  return tts_;
}();

/* harmony default export */ __webpack_exports__["default"] = (tts_);

/***/ }),

/***/ "./src/tts/tts_cmd.js":
/*!****************************!*\
  !*** ./src/tts/tts_cmd.js ***!
  \****************************/
/*! exports provided: sessionBegin, textPut, getResult, seesionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionBegin", function() { return sessionBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textPut", function() { return textPut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResult", function() { return getResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seesionEnd", function() { return seesionEnd; });
var base = {
  "id": 1,
  "method": "deal_request",
  "jsonrpc": "2.0"
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function checkAppid(appid) {
  if (appid != null) {
    return appid;
  } else {
    return "pc20onli";
  }
}

function sessionBegin(serverParams) {
  var msg = clone(base);
  var data = clone(serverParams);
  data.appid = checkAppid(serverParams.appid);
  data.cmd = "ssb";
  data.svc = "tts";
  data.syncid = "0";
  msg.params = data;
  return msg;
}
function textPut(sessionId, data, appid) {
  var msg = clone(base);
  var params = clone(data);
  params.sid = sessionId;
  params.appid = checkAppid(appid);
  params.cmd = "txtw";
  params.svc = "tts";
  msg.params = params;
  return msg;
}
function getResult(sessionId, data, appid) {
  var msg = clone(base);
  var params = clone(data);
  params.sid = sessionId;
  params.appid = checkAppid(appid);
  params.cmd = "grs";
  params.svc = "tts";
  msg.params = params;
  return msg;
}
function seesionEnd(sessionId, data, appid) {
  var msg = clone(base);
  var params = clone(data);
  params.sid = sessionId;
  params.appid = checkAppid(appid);
  params.cmd = "sse";
  params.svc = "tts";
  msg.params = params;
  return msg;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UdHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1R0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UdHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9UdHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9UdHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vVHRzLy4vbm9kZV9tb2R1bGVzL2pzLWJhc2U2NC9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vVHRzLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9UdHMvLi9zcmMvdHRzL2luZGV4LmpzIiwid2VicGFjazovL1R0cy8uL3NyYy90dHMvdHRzLmpzIiwid2VicGFjazovL1R0cy8uL3NyYy90dHMvdHRzX2NtZC5qcyIsIndlYnBhY2s6Ly9UdHMvLi9zcmMvdXRpbHMvYXV0aC5qcyIsIndlYnBhY2s6Ly9UdHMvLi9zcmMvdXRpbHMvaHR0cG5ldC5qcyIsIndlYnBhY2s6Ly9UdHMvLi9zcmMvdXRpbHMvdG9vbHMuanMiXSwibmFtZXMiOlsiVHRzIiwiYXVkaW9Qcm9jRnVuYyIsIl90dHMiLCJ0dHNfIiwiY2FsbGJhY2siLCJvbkVycm9yIiwidXJsIiwicGFyYW1zIiwidGV4dCIsImJBdXRoIiwic3RhcnQiLCJhYm9ydFNlc3Npb24iLCJ0dHNTdGF0dXMiLCJuZXQiLCJzZXJ2ZXJQYXJhbXMiLCJleHRlbmRQYXJhbXMiLCJTdGF0dXMiLCJzZXNzaW9uIiwiaWQiLCJhdWRpb1Byb2MiLCJjb25zb2xlIiwibG9nIiwic3luY2lkIiwiaGVhZGVyIiwidmFsdWUiLCJBdXRoIiwiZXh0ZW5kX3BhcmFtcyIsIk5ldCIsInRoYXQiLCJlIiwic3RhdHVzIiwibXNnIiwiY29ubmVjdCIsInByb2Nlc3NTZXJ2ZXJNc2ciLCJiaW5kIiwiZGF0YSIsImNvbW1hbmQiLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlc3Npb25CZWdpbiIsImF1dGhTdGFydCIsInNlc3Npb25FbmQiLCJpZGxlIiwidG9TdHJpbmciLCJhdXRoX2lkIiwiYXBwaWQiLCJhdXRoRW5kIiwidW5kZWZpbmVkIiwianNvblJldCIsInBhcnNlIiwiQmFzZTY0IiwiYXRvYiIsInRvb2xzIiwicmVzdWx0IiwiZXJyb3IiLCJyZXQiLCJzaWQiLCJlbmNvZGUiLCJ0ZXh0UHV0IiwiZ2V0UmVzdWx0IiwiYXVkaW8iLCJiYXNlIiwiY2xvbmUiLCJvYmoiLCJjaGVja0FwcGlkIiwiY21kIiwic3ZjIiwic2Vzc2lvbklkIiwic2Vlc2lvbkVuZCIsInJlYWxVcmwiLCJhdXRoVXJsIiwiYlN0YXJ0IiwiYXV0aENhbGxiYWNrIiwiaGVhcnQiLCJoYkluZm8iLCJiSEIiLCJhdXRoTXNnIiwidG9rZW4iLCJhcmVhIiwiYWJpbGl0eSIsImV4dCIsImV4dEFycmF5Iiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYXJyIiwiYXV0aElkIiwicHJvY2Vzc0F1dGhNc2ciLCJhdXRoQmVnaW5Nc2ciLCJhdXRoRW5kTXNnIiwiY2xlYXJJbnRlcnZhbCIsImF1dGhIQk1zZyIsIkRhdGUiLCJiYXRjaEhlYXJ0QmVhdCIsInB1c2giLCJzZXRJbnRlcnZhbCIsImhlYXJ0QmVhdCIsIkh0dHBOZXQiLCJpbnN0YW5jZSIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZXZlbnQiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInJlc3BvbnNlVGV4dCIsIm1ldGhvZCIsIlVOU0VOVCIsIm9wZW4iLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiX19nZXREYXRlVGltZVN0cmluZyIsInRpbWUiLCJub3ciLCJ5ZWFyIiwiU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbGlzZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7QUNoQkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFB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QUFJRSxNQUFNLEdBQUdSLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDVyxVQUFKLEVBQUQsQ0FBbkI7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDdEMsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQnNDLFVBQU0sY0FBT0EsTUFBUCxDQUFOO0FBQ0g7O0FBRUQsTUFBSUUsTUFBTSxHQUFHVixNQUFNLENBQUNGLEdBQUcsQ0FBQ2EsVUFBSixFQUFELENBQW5COztBQUNBLE1BQUlELE1BQU0sQ0FBQ3hDLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJ3QyxVQUFNLGNBQU9BLE1BQVAsQ0FBTjtBQUNIOztBQUVELE1BQUlFLFdBQVcsR0FBR1osTUFBTSxDQUFDRixHQUFHLENBQUNlLGVBQUosRUFBRCxDQUF4Qjs7QUFDQSxNQUFJRCxXQUFXLENBQUMxQyxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCMEMsZUFBVyxlQUFRQSxXQUFSLENBQVg7QUFDSCxHQUZELE1BRU8sSUFBSUEsV0FBVyxDQUFDMUMsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUNqQzBDLGVBQVcsY0FBT0EsV0FBUCxDQUFYO0FBQ0g7O0FBRUQsbUJBQVViLElBQVYsY0FBa0JHLEtBQWxCLGNBQTJCRSxHQUEzQixjQUFrQ0UsSUFBbEMsY0FBMENFLE1BQTFDLGNBQW9ERSxNQUFwRCxjQUE4REUsV0FBOUQ7QUFDSCxDIiwiZmlsZSI6InR0cy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUdHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHRzXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90dHMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qXG4gKiAgYmFzZTY0LmpzXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBCU0QgMy1DbGF1c2UgTGljZW5zZS5cbiAqICAgIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqXG4gKiAgUmVmZXJlbmNlczpcbiAqICAgIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0XG4gKi9cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShnbG9iYWwpXG4gICAgICAgIDogdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kXG4gICAgICAgID8gZGVmaW5lKGZhY3RvcnkpIDogZmFjdG9yeShnbG9iYWwpXG59KChcbiAgICB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmXG4gICAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3dcbiAgICAgICAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFxuOiB0aGlzXG4pLCBmdW5jdGlvbihnbG9iYWwpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgLy8gZXhpc3RpbmcgdmVyc2lvbiBmb3Igbm9Db25mbGljdCgpXG4gICAgZ2xvYmFsID0gZ2xvYmFsIHx8IHt9O1xuICAgIHZhciBfQmFzZTY0ID0gZ2xvYmFsLkJhc2U2NDtcbiAgICB2YXIgdmVyc2lvbiA9IFwiMi41LjFcIjtcbiAgICAvLyBpZiBub2RlLmpzIGFuZCBOT1QgUmVhY3QgTmF0aXZlLCB3ZSB1c2UgQnVmZmVyXG4gICAgdmFyIGJ1ZmZlcjtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IGV2YWwoXCJyZXF1aXJlKCdidWZmZXInKS5CdWZmZXJcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYnVmZmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnN0YW50c1xuICAgIHZhciBiNjRjaGFyc1xuICAgICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcbiAgICB2YXIgYjY0dGFiID0gZnVuY3Rpb24oYmluKSB7XG4gICAgICAgIHZhciB0ID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYmluLmxlbmd0aDsgaSA8IGw7IGkrKykgdFtiaW4uY2hhckF0KGkpXSA9IGk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH0oYjY0Y2hhcnMpO1xuICAgIHZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIC8vIGVuY29kZXIgc3R1ZmZcbiAgICB2YXIgY2JfdXRvYiA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgaWYgKGMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdmFyIGNjID0gYy5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgcmV0dXJuIGNjIDwgMHg4MCA/IGNcbiAgICAgICAgICAgICAgICA6IGNjIDwgMHg4MDAgPyAoZnJvbUNoYXJDb2RlKDB4YzAgfCAoY2MgPj4+IDYpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpKVxuICAgICAgICAgICAgICAgIDogKGZyb21DaGFyQ29kZSgweGUwIHwgKChjYyA+Pj4gMTIpICYgMHgwZikpXG4gICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+ICA2KSAmIDB4M2YpKVxuICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoIGNjICAgICAgICAgJiAweDNmKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNjID0gMHgxMDAwMFxuICAgICAgICAgICAgICAgICsgKGMuY2hhckNvZGVBdCgwKSAtIDB4RDgwMCkgKiAweDQwMFxuICAgICAgICAgICAgICAgICsgKGMuY2hhckNvZGVBdCgxKSAtIDB4REMwMCk7XG4gICAgICAgICAgICByZXR1cm4gKGZyb21DaGFyQ29kZSgweGYwIHwgKChjYyA+Pj4gMTgpICYgMHgwNykpXG4gICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoKGNjID4+PiAxMikgJiAweDNmKSlcbiAgICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+ICA2KSAmIDB4M2YpKVxuICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKCBjYyAgICAgICAgICYgMHgzZikpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlX3V0b2IgPSAvW1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGRl18W15cXHgwMC1cXHg3Rl0vZztcbiAgICB2YXIgdXRvYiA9IGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgcmV0dXJuIHUucmVwbGFjZShyZV91dG9iLCBjYl91dG9iKTtcbiAgICB9O1xuICAgIHZhciBjYl9lbmNvZGUgPSBmdW5jdGlvbihjY2MpIHtcbiAgICAgICAgdmFyIHBhZGxlbiA9IFswLCAyLCAxXVtjY2MubGVuZ3RoICUgM10sXG4gICAgICAgIG9yZCA9IGNjYy5jaGFyQ29kZUF0KDApIDw8IDE2XG4gICAgICAgICAgICB8ICgoY2NjLmxlbmd0aCA+IDEgPyBjY2MuY2hhckNvZGVBdCgxKSA6IDApIDw8IDgpXG4gICAgICAgICAgICB8ICgoY2NjLmxlbmd0aCA+IDIgPyBjY2MuY2hhckNvZGVBdCgyKSA6IDApKSxcbiAgICAgICAgY2hhcnMgPSBbXG4gICAgICAgICAgICBiNjRjaGFycy5jaGFyQXQoIG9yZCA+Pj4gMTgpLFxuICAgICAgICAgICAgYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDEyKSAmIDYzKSxcbiAgICAgICAgICAgIHBhZGxlbiA+PSAyID8gJz0nIDogYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDYpICYgNjMpLFxuICAgICAgICAgICAgcGFkbGVuID49IDEgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQob3JkICYgNjMpXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICB9O1xuICAgIHZhciBidG9hID0gZ2xvYmFsLmJ0b2EgPyBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuYnRvYShiKTtcbiAgICB9IDogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gYi5yZXBsYWNlKC9bXFxzXFxTXXsxLDN9L2csIGNiX2VuY29kZSk7XG4gICAgfTtcbiAgICB2YXIgX2VuY29kZSA9IGJ1ZmZlciA/XG4gICAgICAgIGJ1ZmZlci5mcm9tICYmIFVpbnQ4QXJyYXkgJiYgYnVmZmVyLmZyb20gIT09IFVpbnQ4QXJyYXkuZnJvbVxuICAgICAgICA/IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgICAgICByZXR1cm4gKHUuY29uc3RydWN0b3IgPT09IGJ1ZmZlci5jb25zdHJ1Y3RvciA/IHUgOiBidWZmZXIuZnJvbSh1KSlcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICAgIH1cbiAgICAgICAgOiAgZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgICAgIHJldHVybiAodS5jb25zdHJ1Y3RvciA9PT0gYnVmZmVyLmNvbnN0cnVjdG9yID8gdSA6IG5ldyAgYnVmZmVyKHUpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uICh1KSB7IHJldHVybiBidG9hKHV0b2IodSkpIH1cbiAgICA7XG4gICAgdmFyIGVuY29kZSA9IGZ1bmN0aW9uKHUsIHVyaXNhZmUpIHtcbiAgICAgICAgcmV0dXJuICF1cmlzYWZlXG4gICAgICAgICAgICA/IF9lbmNvZGUoU3RyaW5nKHUpKVxuICAgICAgICAgICAgOiBfZW5jb2RlKFN0cmluZyh1KSkucmVwbGFjZSgvWytcXC9dL2csIGZ1bmN0aW9uKG0wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0wID09ICcrJyA/ICctJyA6ICdfJztcbiAgICAgICAgICAgIH0pLnJlcGxhY2UoLz0vZywgJycpO1xuICAgIH07XG4gICAgdmFyIGVuY29kZVVSSSA9IGZ1bmN0aW9uKHUpIHsgcmV0dXJuIGVuY29kZSh1LCB0cnVlKSB9O1xuICAgIC8vIGRlY29kZXIgc3R1ZmZcbiAgICB2YXIgcmVfYnRvdSA9IG5ldyBSZWdFeHAoW1xuICAgICAgICAnW1xceEMwLVxceERGXVtcXHg4MC1cXHhCRl0nLFxuICAgICAgICAnW1xceEUwLVxceEVGXVtcXHg4MC1cXHhCRl17Mn0nLFxuICAgICAgICAnW1xceEYwLVxceEY3XVtcXHg4MC1cXHhCRl17M30nXG4gICAgXS5qb2luKCd8JyksICdnJyk7XG4gICAgdmFyIGNiX2J0b3UgPSBmdW5jdGlvbihjY2NjKSB7XG4gICAgICAgIHN3aXRjaChjY2NjLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB2YXIgY3AgPSAoKDB4MDcgJiBjY2NjLmNoYXJDb2RlQXQoMCkpIDw8IDE4KVxuICAgICAgICAgICAgICAgIHwgICAgKCgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDEpKSA8PCAxMilcbiAgICAgICAgICAgICAgICB8ICAgICgoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgyKSkgPDwgIDYpXG4gICAgICAgICAgICAgICAgfCAgICAgKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMykpLFxuICAgICAgICAgICAgb2Zmc2V0ID0gY3AgLSAweDEwMDAwO1xuICAgICAgICAgICAgcmV0dXJuIChmcm9tQ2hhckNvZGUoKG9mZnNldCAgPj4+IDEwKSArIDB4RDgwMClcbiAgICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoKG9mZnNldCAmIDB4M0ZGKSArIDB4REMwMCkpO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gZnJvbUNoYXJDb2RlKFxuICAgICAgICAgICAgICAgICgoMHgwZiAmIGNjY2MuY2hhckNvZGVBdCgwKSkgPDwgMTIpXG4gICAgICAgICAgICAgICAgICAgIHwgKCgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDEpKSA8PCA2KVxuICAgICAgICAgICAgICAgICAgICB8ICAoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgyKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gIGZyb21DaGFyQ29kZShcbiAgICAgICAgICAgICAgICAoKDB4MWYgJiBjY2NjLmNoYXJDb2RlQXQoMCkpIDw8IDYpXG4gICAgICAgICAgICAgICAgICAgIHwgICgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDEpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGJ0b3UgPSBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBiLnJlcGxhY2UocmVfYnRvdSwgY2JfYnRvdSk7XG4gICAgfTtcbiAgICB2YXIgY2JfZGVjb2RlID0gZnVuY3Rpb24oY2NjYykge1xuICAgICAgICB2YXIgbGVuID0gY2NjYy5sZW5ndGgsXG4gICAgICAgIHBhZGxlbiA9IGxlbiAlIDQsXG4gICAgICAgIG4gPSAobGVuID4gMCA/IGI2NHRhYltjY2NjLmNoYXJBdCgwKV0gPDwgMTggOiAwKVxuICAgICAgICAgICAgfCAobGVuID4gMSA/IGI2NHRhYltjY2NjLmNoYXJBdCgxKV0gPDwgMTIgOiAwKVxuICAgICAgICAgICAgfCAobGVuID4gMiA/IGI2NHRhYltjY2NjLmNoYXJBdCgyKV0gPDwgIDYgOiAwKVxuICAgICAgICAgICAgfCAobGVuID4gMyA/IGI2NHRhYltjY2NjLmNoYXJBdCgzKV0gICAgICAgOiAwKSxcbiAgICAgICAgY2hhcnMgPSBbXG4gICAgICAgICAgICBmcm9tQ2hhckNvZGUoIG4gPj4+IDE2KSxcbiAgICAgICAgICAgIGZyb21DaGFyQ29kZSgobiA+Pj4gIDgpICYgMHhmZiksXG4gICAgICAgICAgICBmcm9tQ2hhckNvZGUoIG4gICAgICAgICAmIDB4ZmYpXG4gICAgICAgIF07XG4gICAgICAgIGNoYXJzLmxlbmd0aCAtPSBbMCwgMCwgMiwgMV1bcGFkbGVuXTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICAgIH07XG4gICAgdmFyIF9hdG9iID0gZ2xvYmFsLmF0b2IgPyBmdW5jdGlvbihhKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuYXRvYihhKTtcbiAgICB9IDogZnVuY3Rpb24oYSl7XG4gICAgICAgIHJldHVybiBhLnJlcGxhY2UoL1xcU3sxLDR9L2csIGNiX2RlY29kZSk7XG4gICAgfTtcbiAgICB2YXIgYXRvYiA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIF9hdG9iKFN0cmluZyhhKS5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL10vZywgJycpKTtcbiAgICB9O1xuICAgIHZhciBfZGVjb2RlID0gYnVmZmVyID9cbiAgICAgICAgYnVmZmVyLmZyb20gJiYgVWludDhBcnJheSAmJiBidWZmZXIuZnJvbSAhPT0gVWludDhBcnJheS5mcm9tXG4gICAgICAgID8gZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgcmV0dXJuIChhLmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgPyBhIDogYnVmZmVyLmZyb20oYSwgJ2Jhc2U2NCcpKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgcmV0dXJuIChhLmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgPyBhIDogbmV3IGJ1ZmZlcihhLCAnYmFzZTY0JykpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbihhKSB7IHJldHVybiBidG91KF9hdG9iKGEpKSB9O1xuICAgIHZhciBkZWNvZGUgPSBmdW5jdGlvbihhKXtcbiAgICAgICAgcmV0dXJuIF9kZWNvZGUoXG4gICAgICAgICAgICBTdHJpbmcoYSkucmVwbGFjZSgvWy1fXS9nLCBmdW5jdGlvbihtMCkgeyByZXR1cm4gbTAgPT0gJy0nID8gJysnIDogJy8nIH0pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXS9nLCAnJylcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIHZhciBub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBCYXNlNjQgPSBnbG9iYWwuQmFzZTY0O1xuICAgICAgICBnbG9iYWwuQmFzZTY0ID0gX0Jhc2U2NDtcbiAgICAgICAgcmV0dXJuIEJhc2U2NDtcbiAgICB9O1xuICAgIC8vIGV4cG9ydCBCYXNlNjRcbiAgICBnbG9iYWwuQmFzZTY0ID0ge1xuICAgICAgICBWRVJTSU9OOiB2ZXJzaW9uLFxuICAgICAgICBhdG9iOiBhdG9iLFxuICAgICAgICBidG9hOiBidG9hLFxuICAgICAgICBmcm9tQmFzZTY0OiBkZWNvZGUsXG4gICAgICAgIHRvQmFzZTY0OiBlbmNvZGUsXG4gICAgICAgIHV0b2I6IHV0b2IsXG4gICAgICAgIGVuY29kZTogZW5jb2RlLFxuICAgICAgICBlbmNvZGVVUkk6IGVuY29kZVVSSSxcbiAgICAgICAgYnRvdTogYnRvdSxcbiAgICAgICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgICAgIG5vQ29uZmxpY3Q6IG5vQ29uZmxpY3QsXG4gICAgICAgIF9fYnVmZmVyX186IGJ1ZmZlclxuICAgIH07XG4gICAgLy8gaWYgRVM1IGlzIGF2YWlsYWJsZSwgbWFrZSBCYXNlNjQuZXh0ZW5kU3RyaW5nKCkgYXZhaWxhYmxlXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIG5vRW51bSA9IGZ1bmN0aW9uKHYpe1xuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZTp2LGVudW1lcmFibGU6ZmFsc2Usd3JpdGFibGU6dHJ1ZSxjb25maWd1cmFibGU6dHJ1ZX07XG4gICAgICAgIH07XG4gICAgICAgIGdsb2JhbC5CYXNlNjQuZXh0ZW5kU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUsICdmcm9tQmFzZTY0Jywgbm9FbnVtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh0aGlzKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLCAndG9CYXNlNjQnLCBub0VudW0oZnVuY3Rpb24gKHVyaXNhZmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZSh0aGlzLCB1cmlzYWZlKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLCAndG9CYXNlNjRVUkknLCBub0VudW0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlKHRoaXMsIHRydWUpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvL1xuICAgIC8vIGV4cG9ydCBCYXNlNjQgdG8gdGhlIG5hbWVzcGFjZVxuICAgIC8vXG4gICAgaWYgKGdsb2JhbFsnTWV0ZW9yJ10pIHsgLy8gTWV0ZW9yLmpzXG4gICAgICAgIEJhc2U2NCA9IGdsb2JhbC5CYXNlNjQ7XG4gICAgfVxuICAgIC8vIG1vZHVsZS5leHBvcnRzIGFuZCBBTUQgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5cbiAgICAvLyBtb2R1bGUuZXhwb3J0cyBoYXMgcHJlY2VkZW5jZS5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMuQmFzZTY0ID0gZ2xvYmFsLkJhc2U2NDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpeyByZXR1cm4gZ2xvYmFsLkJhc2U2NCB9KTtcbiAgICB9XG4gICAgLy8gdGhhdCdzIGl0IVxuICAgIHJldHVybiB7QmFzZTY0OiBnbG9iYWwuQmFzZTY0fVxufSkpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHR0c18gZnJvbSAnLi90dHMnXHJcblxyXG4vKipcclxuICog5ZCI5oiQ5a+56LGhLOaJgOacieeahOWQiOaIkOS4muWKoemDveWfuuS6juatpOWvueixoVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBsZXQgdHRzID0gbmV3IFR0cygpXHJcbiAqL1xyXG5jbGFzcyBUdHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGF1ZGlvUHJvY0Z1bmMgLSDmjqXmlLblkIjmiJDpn7PpopHlm57osIPlh73mlbBmdW5jdGlvbihpc0VuZDogYm9vbGVhbiwgYXVkaW86IHN0cmluZylcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXVkaW9Qcm9jRnVuYykge1xyXG4gICAgICAgIHRoaXMuX3R0cyA9IG5ldyB0dHNfKGF1ZGlvUHJvY0Z1bmMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozlkIjmiJDplJnor6/lm57osINcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0g5ZCI5oiQ6ZSZ6K+v5aSE55CG5Zue6LCDZnVuY3Rpb24obXNnOiBzdHJpbmcpXHJcbiAgICAgKi9cclxuICAgIG9uRXJyb3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl90dHMub25FcnJvcihjYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+WQiOaIkFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIOS7o+eQhui3r+eUseeahG5naW545Zyw5Z2AKGh0dHAocyk6Ly9pcDpwb3J0L3R0cy8pXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIC0g5ZCI5oiQ5Y+C5pWwLCDlpoLmnpzlvIDlkK/pibTmnYMs6ZyA6KaBYXBwaWQsdG9rZW4vYXJlYSxhYmlsaXR5LGF1dGhfaWQo5pys5qyh5ZCI5oiQ5Lu75Yqh5ZSv5LiA5qCH6K+GKVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSDpnIDopoHlkIjmiJDnmoTmlofmnKxcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JBdXRoPWZhbHNlXSAtIOaYr+WQpuS4u+WKqOmJtOadgywg5byA5ZCv5YiZ5Li75Yqo6K+35rGC6Ym05p2DLCDlkKbliJnnm7TmjqXor7fmsYLmnI3liqHot6/nlLEs55Sx5pyN5Yqh6Lev55Sx5Yaz5a6a5piv5ZCm6Ym05p2DXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogbGV0IHR0cyA9IG5ldyBUdHMoKVxyXG4gICAgICogdHRzLnN0YXJ0KHVybCwgcGFyYW1zLCB0ZXh0KVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGxldCB0dHMgPSBuZXcgVHRzKClcclxuICAgICAqIHR0cy5zdGFydCh1cmwsIHBhcmFtcywgdGV4dCwgZmFsc2UpXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KHVybCwgcGFyYW1zLCB0ZXh0LCBiQXV0aCkge1xyXG4gICAgICAgIHRoaXMuX3R0cy5zdGFydCh1cmwsIHBhcmFtcywgdGV4dCwgYkF1dGgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLlkIjmiJBcclxuICAgICAqL1xyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLl90dHMuYWJvcnRTZXNzaW9uKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHRzIiwiaW1wb3J0IE5ldCBmcm9tICcuLi91dGlscy9odHRwbmV0J1xyXG5pbXBvcnQgKiBhcyBjb21tYW5kIGZyb20gJy4vdHRzX2NtZCdcclxuaW1wb3J0IEF1dGggZnJvbSAnLi4vdXRpbHMvYXV0aCdcclxuaW1wb3J0IHtCYXNlNjR9IGZyb20gJ2pzLWJhc2U2NCdcclxuaW1wb3J0ICogYXMgdG9vbHMgZnJvbSBcIi4uL3V0aWxzL3Rvb2xzXCJcclxuXHJcbmxldCB0dHNTdGF0dXMgPSB7XHJcbiAgICBcImlkbGVcIjogXCJpZGxlXCIsLy/nqbrpl7JcclxuICAgIFwic2Vzc2lvbkJlZ2luXCI6IFwic3NiXCIsLy9zZXNzaW9uIGJlZ2luIOS8muivneW8gOWni1xyXG4gICAgXCJ0ZXh0UHV0XCI6IFwidHh0d1wiLC8vdGV4dCBwdXQg5YaZ5YWl5paH5pysXHJcbiAgICBcImdldFJlc3VsdFwiOiBcImdyc1wiLC8vZ2V0IHJlc3VsdCDojrflj5bnu5PmnpxcclxuICAgIFwic2Vzc2lvbkVuZFwiOiBcInNzZVwiLy9zZXNzaW9uIGVuZCDkvJror53nu5PmnZ9cclxufVxyXG5cclxuY2xhc3MgdHRzXyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhdWRpb1Byb2NGdW5jKSB7XHJcbiAgICAgICAgdGhpcy5uZXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMudXJsID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc2VydmVyUGFyYW1zID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZXh0ZW5kUGFyYW1zID0gbnVsbFxyXG4gICAgICAgIHRoaXMuU3RhdHVzID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHtcclxuICAgICAgICAgICAgaWQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhdWRpb1Byb2NGdW5jID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jID0gYXVkaW9Qcm9jRnVuY1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1ZGlvUHJvYyB1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN5bmNpZCA9IDBcclxuICAgICAgICB0aGlzLmhlYWRlciA9IFt7aGVhZGVyOiBcImNvbnRlbnQtdHlwZVwiLCB2YWx1ZTogXCJhcHBsaWNhdGlvbi9qc29uLXJwY1wifV1cclxuXHJcbiAgICAgICAgdGhpcy5iQXV0aCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5BdXRoID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvciA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHVybCwgcGFyYW1zLCB0ZXh0LCBiQXV0aCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHRcclxuICAgICAgICB0aGlzLnN5bmNpZCA9IDBcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyUGFyYW1zID0gcGFyYW1zXHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5kUGFyYW1zID0gcGFyYW1zLmV4dGVuZF9wYXJhbXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5uZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXQgPSBuZXcgTmV0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYkF1dGggPSAoYkF1dGggPT09IHRydWUgPyBiQXV0aCA6IGZhbHNlKVxyXG4gICAgICAgIGlmICh0aGlzLmJBdXRoKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuQXV0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BdXRoID0gbmV3IEF1dGgoJ3R0cycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuc3RhdHVzID09PSAnb25FcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQub25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vbkVycm9yKGUubXNnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC51cmwgPSBlLm1zZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ldC5jb25uZWN0KHRoYXQucHJvY2Vzc1NlcnZlck1zZy5iaW5kKHRoYXQpKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gY29tbWFuZC5zZXNzaW9uQmVnaW4odGhhdC5zZXJ2ZXJQYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5uZXQuc2VuZCgnUE9TVCcsIHRoYXQudXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhhdC5oZWFkZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5TdGF0dXMgPSB0dHNTdGF0dXMuc2Vzc2lvbkJlZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zeW5jaWQrK1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkF1dGguYXV0aFN0YXJ0KHVybCwgcGFyYW1zKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gdXJsXHJcbiAgICAgICAgICAgIHRoaXMubmV0LmNvbm5lY3QodGhpcy5wcm9jZXNzU2VydmVyTXNnLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY29tbWFuZC5zZXNzaW9uQmVnaW4odGhpcy5zZXJ2ZXJQYXJhbXMpXHJcbiAgICAgICAgICAgIHRoaXMubmV0LnNlbmQoJ1BPU1QnLCB0aGlzLnVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHRoaXMuaGVhZGVyKVxyXG4gICAgICAgICAgICB0aGlzLlN0YXR1cyA9IHR0c1N0YXR1cy5zZXNzaW9uQmVnaW5cclxuICAgICAgICAgICAgdGhpcy5zeW5jaWQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhYm9ydFNlc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1Byb2ModHJ1ZSlcclxuICAgICAgICBpZiAoIXRoaXMuU3RhdHVzIHx8IHRoaXMuU3RhdHVzID09PSB0dHNTdGF0dXMuc2Vzc2lvbkVuZCB8fCB0aGlzLlN0YXR1cyA9PT0gdHRzU3RhdHVzLmlkbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXNzaW9uLmlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jaWQ6IHRoaXMuc3luY2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBhdXRoX2lkOiB0aGlzLnNlcnZlclBhcmFtcy5hdXRoX2lkLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kX3BhcmFtczogdGhpcy5leHRlbmRQYXJhbXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5ldC5zZW5kKCdQT1NUJywgdGhpcy51cmwsIEpTT04uc3RyaW5naWZ5KGNvbW1hbmQuc2Vlc2lvbkVuZCh0aGlzLnNlc3Npb24uaWQsIGRhdGEsIHRoaXMuc2VydmVyUGFyYW1zLmFwcGlkKSksIHRoaXMuaGVhZGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlN0YXR1cyA9IHR0c1N0YXR1cy5zZXNzaW9uRW5kXHJcbiAgICAgICAgaWYgKHRoaXMuYkF1dGgpIHtcclxuICAgICAgICAgICAgdGhpcy5BdXRoLmF1dGhFbmQoKVxyXG4gICAgICAgICAgICB0aGlzLmJBdXRoID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g54q25oCB5py6XHJcbiAgICBwcm9jZXNzU2VydmVyTXNnKG1zZykge1xyXG4gICAgICAgIGlmIChtc2cgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgZXJyb3InKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IoJ3Jlc3BvbnNlIGVycm9yJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFib3J0U2Vzc2lvbigpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQganNvblJldCA9IEpTT04ucGFyc2UoQmFzZTY0LmF0b2IobXNnKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnWycgKyB0b29scy5fX2dldERhdGVUaW1lU3RyaW5nKCkgKyAnXTonLCBqc29uUmV0KVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBqc29uUmV0LnJlc3VsdFxyXG4gICAgICAgIHRoaXMuc3luY2lkKytcclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coanNvblJldC5lcnJvcilcclxuICAgICAgICAgICAgaWYgKHRoaXMub25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKGpzb25SZXQuZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hYm9ydFNlc3Npb24oKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQucmV0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FcnJvcihyZXN1bHQucmV0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWJvcnRTZXNzaW9uKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHRzU3RhdHVzLnNlc3Npb25CZWdpbjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLmlkID0gcmVzdWx0LnNpZFxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogQmFzZTY0LmVuY29kZSh0aGlzLnRleHQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNpZDogdGhpcy5zeW5jaWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBleHRlbmRfcGFyYW1zOiB0aGlzLmV4dGVuZFBhcmFtc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXQuc2VuZCgnUE9TVCcsIHRoaXMudXJsLCBKU09OLnN0cmluZ2lmeShjb21tYW5kLnRleHRQdXQodGhpcy5zZXNzaW9uLmlkLCBkYXRhLCB0aGlzLnNlcnZlclBhcmFtcy5hcHBpZCkpLCB0aGlzLmhlYWRlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdHVzID0gdHRzU3RhdHVzLnRleHRQdXRcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0dHNTdGF0dXMudGV4dFB1dDoge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3luY2lkOiB0aGlzLnN5bmNpZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuZF9wYXJhbXM6IHRoaXMuZXh0ZW5kUGFyYW1zXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldC5zZW5kKCdQT1NUJywgdGhpcy51cmwsIEpTT04uc3RyaW5naWZ5KGNvbW1hbmQuZ2V0UmVzdWx0KHRoaXMuc2Vzc2lvbi5pZCwgZGF0YSwgdGhpcy5zZXJ2ZXJQYXJhbXMuYXBwaWQpKSwgdGhpcy5oZWFkZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IHR0c1N0YXR1cy5nZXRSZXN1bHRcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0dHNTdGF0dXMuZ2V0UmVzdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jaWQ6IHRoaXMuc3luY2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kX3BhcmFtczogdGhpcy5leHRlbmRQYXJhbXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBhdWRpbyA9IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgICAgICAgICBpZiAoYXVkaW8gIT09IHVuZGVmaW5lZCAmJiBhdWRpbyAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jKGZhbHNlLCBCYXNlNjQuYXRvYihhdWRpbykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnR0c1N0YXR1cyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV0LnNlbmQoJ1BPU1QnLCB0aGlzLnVybCwgSlNPTi5zdHJpbmdpZnkoY29tbWFuZC5nZXRSZXN1bHQodGhpcy5zZXNzaW9uLmlkLCBkYXRhLCB0aGlzLnNlcnZlclBhcmFtcy5hcHBpZCkpLCB0aGlzLmhlYWRlcilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hYm9ydFNlc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHR0c1N0YXR1cy5zZXNzaW9uRW5kOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXR1cyA9IHR0c1N0YXR1cy5pZGxlXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0dHNfIiwiXHJcbmxldCBiYXNlID0ge1xyXG4gICAgXCJpZFwiOiAxLFxyXG4gICAgXCJtZXRob2RcIjogXCJkZWFsX3JlcXVlc3RcIixcclxuICAgIFwianNvbnJwY1wiOiBcIjIuMFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lKG9iaikge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tBcHBpZChhcHBpZCkge1xyXG4gICAgaWYgKGFwcGlkICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gYXBwaWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwicGMyMG9ubGlcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2Vzc2lvbkJlZ2luKHNlcnZlclBhcmFtcykge1xyXG4gICAgbGV0IG1zZyA9IGNsb25lKGJhc2UpXHJcbiAgICBsZXQgZGF0YSA9IGNsb25lKHNlcnZlclBhcmFtcylcclxuXHJcbiAgICBkYXRhLmFwcGlkID0gY2hlY2tBcHBpZChzZXJ2ZXJQYXJhbXMuYXBwaWQpXHJcbiAgICBkYXRhLmNtZCA9IFwic3NiXCJcclxuICAgIGRhdGEuc3ZjID0gXCJ0dHNcIlxyXG4gICAgZGF0YS5zeW5jaWQgPSBcIjBcIlxyXG4gICAgbXNnLnBhcmFtcyA9IGRhdGFcclxuICAgIHJldHVybiBtc2dcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRleHRQdXQoc2Vzc2lvbklkLCBkYXRhLCBhcHBpZCkge1xyXG4gICAgbGV0IG1zZyA9IGNsb25lKGJhc2UpXHJcbiAgICBsZXQgcGFyYW1zID0gY2xvbmUoZGF0YSlcclxuXHJcbiAgICBwYXJhbXMuc2lkID0gc2Vzc2lvbklkXHJcbiAgICBwYXJhbXMuYXBwaWQgPSBjaGVja0FwcGlkKGFwcGlkKVxyXG4gICAgcGFyYW1zLmNtZCA9IFwidHh0d1wiXHJcbiAgICBwYXJhbXMuc3ZjID0gXCJ0dHNcIlxyXG4gICAgbXNnLnBhcmFtcyA9IHBhcmFtc1xyXG4gICAgcmV0dXJuIG1zZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzdWx0KHNlc3Npb25JZCwgZGF0YSwgYXBwaWQpIHtcclxuICAgIGxldCBtc2cgPSBjbG9uZShiYXNlKVxyXG4gICAgbGV0IHBhcmFtcyA9IGNsb25lKGRhdGEpXHJcblxyXG4gICAgcGFyYW1zLnNpZCA9IHNlc3Npb25JZFxyXG4gICAgcGFyYW1zLmFwcGlkID0gY2hlY2tBcHBpZChhcHBpZClcclxuICAgIHBhcmFtcy5jbWQgPSBcImdyc1wiXHJcbiAgICBwYXJhbXMuc3ZjID0gXCJ0dHNcIlxyXG4gICAgbXNnLnBhcmFtcyA9IHBhcmFtc1xyXG4gICAgcmV0dXJuIG1zZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2Vlc2lvbkVuZChzZXNzaW9uSWQsIGRhdGEsIGFwcGlkKSB7XHJcbiAgICBsZXQgbXNnID0gY2xvbmUoYmFzZSlcclxuICAgIGxldCBwYXJhbXMgPSBjbG9uZShkYXRhKVxyXG5cclxuICAgIHBhcmFtcy5zaWQgPSBzZXNzaW9uSWRcclxuICAgIHBhcmFtcy5hcHBpZCA9IGNoZWNrQXBwaWQoYXBwaWQpXHJcbiAgICBwYXJhbXMuY21kID0gXCJzc2VcIlxyXG4gICAgcGFyYW1zLnN2YyA9IFwidHRzXCJcclxuICAgIG1zZy5wYXJhbXMgPSBwYXJhbXNcclxuICAgIHJldHVybiBtc2dcclxufVxyXG4iLCJpbXBvcnQgTmV0IGZyb20gJy4vaHR0cG5ldCdcclxuaW1wb3J0IHtCYXNlNjR9IGZyb20gJ2pzLWJhc2U2NCdcclxuXHJcbmxldCBiYXNlID0ge1xyXG4gICAgXCJpZFwiOiAxLFxyXG4gICAgXCJtZXRob2RcIjogXCJkZWFsX3JlcXVlc3RcIixcclxuICAgIFwianNvbnJwY1wiOiBcIjIuMFwiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lKG9iaikge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSlcclxufVxyXG5cclxuY2xhc3MgQXV0aCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdmMsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5yZWFsVXJsID0gbnVsbFxyXG4gICAgICAgIHRoaXMuYXV0aFVybCA9IG51bGxcclxuICAgICAgICB0aGlzLm5ldCA9IG51bGxcclxuICAgICAgICB0aGlzLmJTdGFydCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBbe2hlYWRlcjogXCJjb250ZW50LXR5cGVcIiwgdmFsdWU6IFwiYXBwbGljYXRpb24vanNvbi1ycGNcIn1dXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndHRzQ2FsbGJhY2sgdW5kZWZpbmVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhlYXJ0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuaGJJbmZvID0ge31cclxuICAgICAgICB0aGlzLnN2YyA9IHN2Y1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhTdGFydChhdXRoVXJsLCBtc2csIGJIQikge1xyXG4gICAgICAgIHRoaXMucmVhbFVybCA9IG51bGxcclxuICAgICAgICB0aGlzLmF1dGhVcmwgPSBhdXRoVXJsXHJcbiAgICAgICAgaWYgKCF0aGlzLm5ldCkge1xyXG4gICAgICAgICAgICB0aGlzLm5ldCA9IG5ldyBOZXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJIQiA9IGJIQiA9PT0gZmFsc2UgPyBiSEIgOiB0cnVlXHJcbiAgICAgICAgdGhpcy5hdXRoTXNnID0gbXNnXHJcblxyXG4gICAgICAgIHRoaXMuaGJJbmZvLnRva2VuID0gbXNnLnRva2VuXHJcbiAgICAgICAgdGhpcy5oYkluZm8uYXJlYSA9IG1zZy5hcmVhXHJcbiAgICAgICAgdGhpcy5oYkluZm8uYWJpbGl0eSA9IG1zZy5hYmlsaXR5XHJcbiAgICAgICAgLy8g5pyJ5omp5bGV5Y+C5pWwLOS8mOWFiOS9v+eUqOaJqeWxleWPguaVsOWGheeahFxyXG4gICAgICAgIGlmICh0aGlzLmF1dGhNc2cuZXh0ZW5kX3BhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgZXh0ID0gSlNPTi5wYXJzZSh0aGlzLmF1dGhNc2cuZXh0ZW5kX3BhcmFtcylcclxuICAgICAgICAgICAgbGV0IGV4dEFycmF5ID0gZXh0LnBhcmFtcy5zcGxpdCgnLCcpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXh0QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBleHRBcnJheVtpXS5zcGxpdCgnPScpXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzBdID09PSAndG9rZW4nIHx8IGFyclswXSA9PT0gJ2FyZWEnIHx8IGFyclswXSA9PT0gJ2FiaWxpdHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYkluZm9bYXJyWzBdXSA9IGFyclsxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGJJbmZvLmFwcGlkID0gbXNnLmFwcGlkXHJcbiAgICAgICAgdGhpcy5oYkluZm8uYXV0aElkID0gbXNnLmF1dGhfaWRcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcInNzYlwiXHJcbiAgICAgICAgdGhpcy5uZXQuY29ubmVjdCh0aGlzLnByb2Nlc3NBdXRoTXNnLmJpbmQodGhpcykpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmF1dGhCZWdpbk1zZygpXHJcbiAgICAgICAgdGhpcy5uZXQuc2VuZCgnUE9TVCcsIGF1dGhVcmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB0aGlzLmhlYWRlcilcclxuICAgIH1cclxuXHJcbiAgICBhdXRoRW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5uZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXQgPSBuZXcgTmV0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcInNzZVwiXHJcbiAgICAgICAgdGhpcy5uZXQuY29ubmVjdCh0aGlzLnByb2Nlc3NBdXRoTXNnLmJpbmQodGhpcykpXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmF1dGhFbmRNc2coKVxyXG4gICAgICAgIHRoaXMubmV0LnNlbmQoJ1BPU1QnLCB0aGlzLmF1dGhVcmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB0aGlzLmhlYWRlcilcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcnQpXHJcbiAgICAgICAgdGhpcy5oZWFydCA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBoZWFydEJlYXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJTdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5uZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXQgPSBuZXcgTmV0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5hdXRoSEJNc2coKVxyXG4gICAgICAgIHRoaXMubmV0LmNvbm5lY3QodGhpcy5wcm9jZXNzQXV0aE1zZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgIHRoaXMubmV0LnNlbmQoJ1BPU1QnLCB0aGlzLmF1dGhVcmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCB0aGlzLmhlYWRlcilcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVhcnQgYmVhdCBzZW5kJywgbmV3IERhdGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBhdXRoQmVnaW5Nc2coKSB7XHJcbiAgICAgICAgbGV0IG1zZyA9IGNsb25lKGJhc2UpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBjbG9uZSh0aGlzLmF1dGhNc2cpXHJcblxyXG4gICAgICAgIGRhdGEuYXBwaWQgPSB0aGlzLmF1dGhNc2cuYXBwaWRcclxuICAgICAgICBkYXRhLmNtZCA9IFwic3NiXCJcclxuICAgICAgICBkYXRhLnN2YyA9IHRoaXMuc3ZjXHJcbiAgICAgICAgbXNnLnBhcmFtcyA9IGRhdGFcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aEVuZE1zZygpIHtcclxuICAgICAgICBsZXQgbXNnID0gY2xvbmUoYmFzZSlcclxuICAgICAgICBsZXQgcGFyYW1zID0gY2xvbmUodGhpcy5hdXRoTXNnKVxyXG5cclxuICAgICAgICBwYXJhbXMuYXBwaWQgPSB0aGlzLmF1dGhNc2cuYXBwaWRcclxuICAgICAgICBwYXJhbXMuY21kID0gXCJzc2VcIlxyXG4gICAgICAgIHBhcmFtcy5zdmMgPSB0aGlzLnN2Y1xyXG4gICAgICAgIG1zZy5wYXJhbXMgPSBwYXJhbXNcclxuICAgICAgICByZXR1cm4gbXNnXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aEhCTXNnKCkge1xyXG4gICAgICAgIGxldCBtc2cgPSBjbG9uZShiYXNlKVxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGJhdGNoSGVhcnRCZWF0OiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJhbXMuYmF0Y2hIZWFydEJlYXQucHVzaCh0aGlzLmhiSW5mbylcclxuICAgICAgICBtc2cucGFyYW1zID0gcGFyYW1zXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NBdXRoTXNnKG1zZykge1xyXG4gICAgICAgIGlmIChtc2cgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IFwiaGJcIikge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJ0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydCA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0aCByZXNwb25zZSBlcnJvcicpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQganNvblJldCA9IEpTT04ucGFyc2UoQmFzZTY0LmF0b2IobXNnKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhqc29uUmV0KVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBqc29uUmV0LnJlc3VsdFxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uUmV0LmVycm9yKVxyXG4gICAgICAgICAgICB0aGlzLmF1dGhDYWxsYmFjayh7c3RhdHVzOiBcIm9uRXJyb3JcIiwgbXNnOiBqc29uUmV0LmVycm9yfSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBcImhiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oZWFydClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnQgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0LnJldCAhPT0gMCAmJiByZXN1bHQucmV0ICE9PSAzMDIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICB0aGlzLmF1dGhDYWxsYmFjayh7c3RhdHVzOiBcIm9uRXJyb3JcIiwgbXNnOiByZXN1bHQucmV0fSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBcImhiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oZWFydClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnQgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IFwic3NiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iU3RhcnQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucmVhbFVybCA9IHJlc3VsdC51cmxcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2soe3N0YXR1czogXCJvblJlc3VsdFwiLCBtc2c6IHRoaXMucmVhbFVybH0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJIQikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydCA9IHNldEludGVydmFsKHRoaXMuaGVhcnRCZWF0LmJpbmQodGhpcyksIDMwMDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiaGJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gXCJzc2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLmJTdGFydCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoIiwiaW1wb3J0ICogYXMgdG9vbHMgZnJvbSBcIi4vdG9vbHNcIlxyXG5cclxuY2xhc3MgSHR0cE5ldCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3QoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcclxuICAgICAgICB0aGlzLmluc3RhbmNlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZChtZXRob2QsIHVybCwgZGF0YSwgaGVhZGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuVU5TRU5UIHx8IHRoaXMuaW5zdGFuY2UucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyB0b29scy5fX2dldERhdGVUaW1lU3RyaW5nKCkgKyAnXTonLCBKU09OLnBhcnNlKGRhdGEpKVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLm9wZW4obWV0aG9kLCB1cmwpXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxyXG4gICAgICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJbaV0uaGVhZGVyLCBoZWFkZXJbaV0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZW5kKGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2h0dHAgcmVxdWVzdCBub3QgcmVhZHksIHJlYWR5U3RhdGU6ICcgKyB0aGlzLmluc3RhbmNlLnJlYWR5U3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdHRwTmV0IiwiZXhwb3J0IGZ1bmN0aW9uIF9fZ2V0RGF0ZVRpbWVTdHJpbmcodGltZSkge1xyXG4gICAgbGV0IG5vdyA9ICh0aW1lID09IG51bGwgPyBuZXcgRGF0ZSgpIDogdGltZSlcclxuXHJcbiAgICBsZXQgeWVhciA9IFN0cmluZyhub3cuZ2V0RnVsbFllYXIoKSlcclxuICAgIGxldCBtb250aCA9IFN0cmluZyhub3cuZ2V0TW9udGgoKSArIDEpXHJcbiAgICBpZiAobW9udGgubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbW9udGggPSBgMCR7bW9udGh9YFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXkgPSBTdHJpbmcobm93LmdldERhdGUoKSk7XHJcbiAgICBpZiAoZGF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGRheSA9IGAwJHtkYXl9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaG91ciA9IFN0cmluZyhub3cuZ2V0SG91cnMoKSk7XHJcbiAgICBpZiAoaG91ci5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBob3VyID0gYDAke2hvdXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWludXRlID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpO1xyXG4gICAgaWYgKG1pbnV0ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBtaW51dGUgPSBgMCR7bWludXRlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlY29uZCA9IFN0cmluZyhub3cuZ2V0U2Vjb25kcygpKTtcclxuICAgIGlmIChzZWNvbmQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgc2Vjb25kID0gYDAke3NlY29uZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtaWxsaXNlY29uZCA9IFN0cmluZyhub3cuZ2V0TWlsbGlzZWNvbmRzKCkpO1xyXG4gICAgaWYgKG1pbGxpc2Vjb25kLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIG1pbGxpc2Vjb25kID0gYDAwJHttaWxsaXNlY29uZH1gO1xyXG4gICAgfSBlbHNlIGlmIChtaWxsaXNlY29uZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBtaWxsaXNlY29uZCA9IGAwJHttaWxsaXNlY29uZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9LiR7bWlsbGlzZWNvbmR9YFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==