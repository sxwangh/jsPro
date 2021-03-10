(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("adapter"));
	else if(typeof define === 'function' && define.amd)
		define(["adapter"], factory);
	else if(typeof exports === 'object')
		exports["Iat"] = factory(require("adapter"));
	else
		root["Iat"] = factory(root["adapter"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_webrtc_adapter__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/iat/index.js");
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

/***/ "./src/iat/audioProc.js":
/*!******************************!*\
  !*** ./src/iat/audioProc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webrtc_adapter */ "webrtc_adapter");
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webrtc_adapter__WEBPACK_IMPORTED_MODULE_2__);



window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
window.URL = window.URL || window.webkitURL;

var recordWorkerCode = function recordWorkerCode() {
  return window.URL.createObjectURL(new Blob(['var sampleRate,outputBufferLength;var recBuffers=[];onmessage=function(a){switch(a.data.command){case"init":init(a.data.config);break;case"record":record(a.data.buffer);break;case"reset":reset();break}};function init(a){sampleRate=a.sampleRate;outputBufferLength=a.outputBufferLength}function reset(){recBuffers=[]}function record(f){var h=new Resampler(sampleRate,16000,1,outputBufferLength,true);var d;var j=[];for(d=0;d<f.length;d++){j.push(f[d])}var b=h.resampler(j);var a=new Float32Array(b);for(d=0;d<b;d++){a[d]=h.outputBuffer[d]}var c=floatTo16BitPCM(a);for(d=0;d<c.length;d++){recBuffers.push(c[d])}while(recBuffers.length>320){var g=recBuffers.splice(0,320);var k=new Int16Array(g);var e=getVolume(k);this.postMessage({"volume":e,"buffer":k})}}var getVolume=function(d){var b=[329,421,543,694,895,1146,1476,1890,2433,3118,4011,5142,6612,8478,10900,13982,17968,23054,29620,38014,48828,62654,80491,103294,132686,170366,218728,280830];var a=function(e){var f=30;b.every(function(h,g){if(e<h){f=g;return false}return true});return f};var c=function(g){if(g==null||g.byteLength<=2){return 0}var h=0;var e;for(e=0;e<g.length;e++){h+=g[e]}h/=g.length;var f=0;for(e=0;e<g.length;e++){f+=parseInt(Math.pow(g[e]-h,2))>>9}f/=g.length;return parseInt(f)};return a(c(d))};function floatTo16BitPCM(b){var a=new Int16Array(b.length);for(var c=0;c<b.length;c++){var d=Math.max(-1,Math.min(1,b[c]));if(d<0){a[c]=d*32768}else{a[c]=d*32767}}return a}function Resampler(c,e,b,d,a){this.fromSampleRate=c;this.toSampleRate=e;this.channels=b|0;this.outputBufferSize=d;this.noReturn=!!a;this.initialize()}Resampler.prototype.initialize=function(){if(this.fromSampleRate>0&&this.toSampleRate>0&&this.channels>0){if(this.fromSampleRate==this.toSampleRate){this.resampler=this.bypassResampler;this.ratioWeight=1}else{if(this.fromSampleRate<this.toSampleRate){this.lastWeight=1;this.resampler=this.compileLinearInterpolation}else{this.tailExists=false;this.lastWeight=0;this.resampler=this.compileMultiTap}this.ratioWeight=this.fromSampleRate/this.toSampleRate;this.initializeBuffers()}}else{throw (new Error("Invalid settings specified for the resampler."))}};Resampler.prototype.compileLinearInterpolation=function(g){var a=g.length;var f=this.outputBufferSize;if((a%this.channels)==0){if(a>0){var e=this.ratioWeight;var h=this.lastWeight;var j=0;var d=0;var c=0;var b=this.outputBuffer;var i;for(;h<1;h+=e){d=h%1;j=1-d;for(i=0;i<this.channels;++i){b[c++]=(this.lastOutput[i]*j)+(g[i]*d)}}h--;for(a-=this.channels,sourceOffset=Math.floor(h)*this.channels;c<f&&sourceOffset<a;){d=h%1;j=1-d;for(i=0;i<this.channels;++i){b[c++]=(g[sourceOffset+i]*j)+(g[sourceOffset+this.channels+i]*d)}h+=e;sourceOffset=Math.floor(h)*this.channels}for(i=0;i<this.channels;++i){this.lastOutput[i]=g[sourceOffset++]}this.lastWeight=h%1;return this.bufferSlice(c)}else{return(this.noReturn)?0:[]}}else{throw (new Error("Buffer was of incorrect sample length."))}};Resampler.prototype.compileMultiTap=function(i){var e=[];var a=i.length;var h=this.outputBufferSize;if((a%this.channels)==0){if(a>0){var g=this.ratioWeight;var j=0;for(var k=0;k<this.channels;++k){e[k]=0}var l=0;var m=0;var d=!this.tailExists;this.tailExists=false;var c=this.outputBuffer;var b=0;var f=0;do{if(d){j=g;for(k=0;k<this.channels;++k){e[k]=0}}else{j=this.lastWeight;for(k=0;k<this.channels;++k){e[k]+=this.lastOutput[k]}d=true}while(j>0&&l<a){m=1+l-f;if(j>=m){for(k=0;k<this.channels;++k){e[k]+=i[l++]*m}f=l;j-=m}else{for(k=0;k<this.channels;++k){e[k]+=i[l+k]*j}f+=j;j=0;break}}if(j==0){for(k=0;k<this.channels;++k){c[b++]=e[k]/g}}else{this.lastWeight=j;for(k=0;k<this.channels;++k){this.lastOutput[k]=e[k]}this.tailExists=true;break}}while(l<a&&b<h);return this.bufferSlice(b)}else{return(this.noReturn)?0:[]}}else{throw (new Error("Buffer was of incorrect sample length."))}};Resampler.prototype.bypassResampler=function(a){if(this.noReturn){this.outputBuffer=a;return a.length}else{return a}};Resampler.prototype.bufferSlice=function(a){if(this.noReturn){return a}else{try{return this.outputBuffer.subarray(0,a)}catch(b){try{this.outputBuffer.length=a;return this.outputBuffer}catch(b){return this.outputBuffer.slice(0,a)}}}};Resampler.prototype.initializeBuffers=function(){try{this.outputBuffer=new Float32Array(this.outputBufferSize);this.lastOutput=new Float32Array(this.channels)}catch(a){this.outputBuffer=[];this.lastOutput=[]}};'], {
    type: "text/javascript"
  }));
};

var speexWorkCode = function speexWorkCode() {
  return window.URL.createObjectURL(new Blob(['onmessage=function(b){switch(b.data.command){case"init":SpeexEncoder(BandMode.Wide);encoder.Quality=5;break;case"encode":var a=[];Encode(b.data.inData,b.data.inOffset,b.data.inCount,a,b.data.outOffset,b.data.outCount);break}};function log(a){postMessage({type:"debug",message:a})}var encoder;var bits;var rawData;var FrameSize;var speexWbFrameLen=[10,15,20,25,32,42,52,60,70,86,106];var speex_quality=5;function SpeexEncoder(a){bits=new Bits();switch(a){case BandMode.Narrow:encoder=new NbEncoder();break;case BandMode.Wide:encoder=new SbEncoder(false);break;case BandMode.UltraWide:encoder=new SbEncoder(true);break;default:break}FrameSize=320;rawData=new Array()}function Encode(d,b,l,j,e,g){var a=l/FrameSize;var k=[];for(var h=0;h<a;h++){bits.Reset();var f=0;var m=0;while(f<l){for(var c=0;c<FrameSize;c++){rawData[c]=d[b+c+f]}m+=encoder.Encode(bits,rawData);f+=FrameSize}bits.Write(j,e,g);k[h*(speexWbFrameLen[speex_quality]+1)]=speexWbFrameLen[speex_quality];ArrayCopy(j,0,k,h*(speexWbFrameLen[speex_quality]+1)+1,speexWbFrameLen[speex_quality])}postMessage({command:"encode",buffer:k})}function Inner_prod(j,b,h,k,g){var f;var e=0,d=0,c=0,a=0;for(f=0;f<g;){e+=j[b+f]*h[k+f];d+=j[b+f+1]*h[k+f+1];c+=j[b+f+2]*h[k+f+2];a+=j[b+f+3]*h[k+f+3];f+=4}return e+d+c+a}function Open_loop_nbest_pitch(o,n,c,b,t,h,f,d){var r,q,p;var l;var e;var m,v,s;l=new Array();m=new Array();v=new Array();s=new Array();for(r=0;r<d;r++){l[r]=-1;f[r]=0;h[r]=c}v[0]=Inner_prod(o,n-c,o,n-c,t);e=Inner_prod(o,n,o,n,t);for(r=c;r<=b;r++){v[r-c+1]=v[r-c]+o[n-r-1]*o[n-r-1]-o[n-r+t-1]*o[n-r+t-1];if(v[r-c+1]<1){v[r-c+1]=1}}for(r=c;r<=b;r++){m[r-c]=0;s[r-c]=0}for(r=c;r<=b;r++){m[r-c]=Inner_prod(o,n,o,n-r,t);s[r-c]=m[r-c]*m[r-c]/(v[r-c]+1)}for(r=c;r<=b;r++){if(s[r-c]>l[d-1]){var a,u;a=m[r-c]/(v[r-c]+10);u=Math.sqrt(a*m[r-c]/(e+10));if(u>a){u=a}if(u<0){u=0}for(q=0;q<d;q++){if(s[r-c]>l[q]){for(p=d-1;p>q;p--){l[p]=l[p-1];h[p]=h[p-1];f[p]=f[p-1]}l[q]=s[r-c];h[q]=r;f[q]=u;break}}}}}function CreateJaggedArray(d,c){var a=new Array();for(var b=0;b<d;b++){a[b]=[]}return a}var Ltp3Tap=function(b,f,a){var k=new Array();k[0]=k[1]=k[1]=0;var g=b;var c=f;var h=a;var d=CreateJaggedArray(3,128);this.Quant=function(Q,E,I,L,H,G,D,P,u,t,o,F,O,J,m,z,C,A){var M,K;var B=new Array();B[0]=0;var y=0,s=0;var x=new Array();for(var M=0;M<O;M++){x[M]=0}var q=0;var v,l=-1;var w;var e=new Array();var n=new Array();w=A;if(w>10){w=10}for(var M=0;M<w;M++){e[M]=0;n[M]=0}if(w==0||t<u){J.Pack(0,h);J.Pack(0,c);for(M=0;M<O;M++){D[P+M]=0}return u}if(w>t-u+1){w=t-u+1}Open_loop_nbest_pitch(E,I,u,t,O,e,n,w);for(M=0;M<w;M++){y=e[M];for(K=0;K<O;K++){D[P+K]=0}v=j(Q,L,H,G,D,P,y,F,O,J,m,z,C,B);if(v<l||l<0){for(K=0;K<O;K++){x[K]=D[P+K]}l=v;q=y;s=B[0]}}J.Pack(q-u,h);J.Pack(s,c);for(M=0;M<O;M++){D[P+M]=x[M]}return y};function j(T,L,I,H,F,S,s,G,O,J,n,u,D,z){var N,M;var t;var y=new Array();var E=CreateJaggedArray(3,3);var w;var Q,P;w=1<<c;t=CreateJaggedArray(3,O);d=CreateJaggedArray(3,O);for(N=2;N>=0;N--){var K=s+1-N;for(M=0;M<O;M++){if(M-K<0){d[N][M]=n[u+M-K]}else{if(M-K-s<0){d[N][M]=n[u+M-K-s]}else{d[N][M]=0}}}if(N==2){Filters.Syn_percep_zero(d[N],0,L,I,H,t[N],O,G)}else{for(M=0;M<O-1;M++){t[N][M+1]=t[N+1][M]}t[N][0]=0;for(M=0;M<O;M++){t[N][M]+=d[N][0]*D[M]}}}for(N=0;N<3;N++){y[N]=Inner_prod(t[N],0,T,0,O)}for(N=0;N<3;N++){for(M=0;M<=N;M++){E[N][M]=E[M][N]=Inner_prod(t[N],0,t[M],0,O)}}var B=new Array();var l=0;var q=0;var R=0;B[0]=y[2];B[1]=y[1];B[2]=y[0];B[3]=E[1][2];B[4]=E[0][1];B[5]=E[0][2];B[6]=E[2][2];B[7]=E[1][1];B[8]=E[0][0];for(N=0;N<w;N++){var o=0;var m,e,U;l=3*N;m=0.015625*g[l]+0.5;e=0.015625*g[l+1]+0.5;U=0.015625*g[l+2]+0.5;o+=B[0]*m;o+=B[1]*e;o+=B[2]*U;o-=B[3]*m*e;o-=B[4]*U*e;o-=B[5]*U*m;o-=0.5*B[6]*m*m;o-=0.5*B[7]*e*e;o-=0.5*B[8]*U*U;if(false){var v=Math.abs(g[l+1]);if(g[l]>0){v+=g[l]}if(g[l+2]>0){v+=g[l+2]}if(v>1){continue}}if(o>R||N==0){R=o;q=N}}k[0]=0.015625*g[q*3]+0.5;k[1]=0.015625*g[q*3+1]+0.5;k[2]=0.015625*g[q*3+2]+0.5;z[0]=q;for(N=0;N<O;N++){F[S+N]=k[0]*d[2][N]+k[1]*d[1][N]+k[2]*d[0][N]}Q=0;P=0;for(N=0;N<O;N++){Q+=T[N]*T[N]}for(N=0;N<O;N++){P+=(T[N]-k[2]*t[0][N]-k[1]*t[1][N]-k[0]*t[2][N])*(T[N]-k[2]*t[0][N]-k[1]*t[1][N]-k[0]*t[2][N])}return P}};var LtpForcedPitch=function(){};var Filters=function(){};var last_pitch=0;var last_pitch_gain=new Array();last_pitch_gain[0]=last_pitch_gain[1]=last_pitch_gain[2]=0;var smooth_gain=1;var xx=new Array();for(var i=0;i<1024;i++){xx[i]=0}Filters.prototype.Residue_percep_zero=Filters.Residue_percep_zero=function(h,d,f,c,b,j,g,a){var e;var k=new Array();for(var l=0;l<a;l++){k[l]=0}Filters.Filter_mem2_b(h,d,f,c,j,0,g,a,k,0);for(e=0;e<a;e++){k[e]=0}Filters.Fir_mem2(j,0,b,j,0,g,a,k)};Filters.prototype.Fir_mem_up=Filters.Fir_mem_up=function(q,p,n,h,k,s){var g,f;for(g=0;g<h/2;g++){xx[2*g]=q[h/2-1-g]}for(g=0;g<k-1;g+=2){xx[h+g]=s[g+1]}for(g=0;g<h;g+=4){var r,o,m,l,e;r=o=m=l=0;e=xx[h-4-g];for(f=0;f<k;f+=4){var c,d,b;d=p[f];b=p[f+1];c=xx[h-2+f-g];r+=d*c;o+=b*c;m+=d*e;l+=b*e;d=p[f+2];b=p[f+3];e=xx[h+f-g];r+=d*e;o+=b*e;m+=d*c;l+=b*c}n[g]=r;n[g+1]=o;n[g+2]=m;n[g+3]=l}for(g=0;g<k-1;g+=2){s[g+1]=xx[g]}};Filters.prototype.Syn_percep_zero=Filters.Syn_percep_zero=function(h,d,f,c,b,j,g,a){var e;var k=new Array();for(var l=0;l<a;l++){k[l]=0}Filters.Filter_mem2_b(h,d,c,f,j,0,g,a,k,0);for(e=0;e<a;e++){k[e]=0}Filters.Iir_mem2(j,0,b,j,0,g,a,k)};Filters.prototype.Qmf_decomp=Filters.Qmf_decomp=function(m,c,q,n,h,l,r){var g,f,e,b;var p;var o;var d;p=new Array();o=new Array();d=l-1;b=l>>1;for(g=0;g<l;g++){p[l-g-1]=c[g]}for(g=0;g<l-1;g++){o[g]=r[l-g-2]}for(g=0;g<h;g++){o[g+l-1]=m[g]}for(g=0,e=0;g<h;g+=2,e++){q[e]=0;n[e]=0;for(f=0;f<b;f++){q[e]+=p[f]*(o[g+f]+o[d+g-f]);n[e]-=p[f]*(o[g+f]-o[d+g-f]);f++;q[e]+=p[f]*(o[g+f]+o[d+g-f]);n[e]+=p[f]*(o[g+f]-o[d+g-f])}}for(g=0;g<l-1;g++){r[g]=m[h-g-1]}};Filters.prototype.Iir_mem2=Filters.Iir_mem2=function(g,b,h,f,l,e,a,k){var d,c;for(d=0;d<e;d++){f[l+d]=g[b+d]+k[0];for(c=0;c<a-1;c++){k[c]=k[c+1]-h[c+1]*f[l+d]}k[a-1]=-h[a]*f[l+d]}};Filters.prototype.Fir_mem2=Filters.Fir_mem2=function(k,b,e,h,m,f,a,l){var d,c;var g;for(d=0;d<f;d++){g=k[b+d];h[m+d]=e[0]*g+l[0];for(c=0;c<a-1;c++){l[c]=l[c+1]+e[c+1]*g}l[a-1]=e[a]*g}};Filters.prototype.Filter_mem2_b=Filters.Filter_mem2_b=function(m,c,g,o,l,p,h,b,n,a){var f,e;var k,d;for(f=0;f<h;f++){k=m[c+f];l[p+f]=g[0]*k+n[0];d=l[p+f];for(e=0;e<b-1;e++){n[a+e]=n[a+e+1]+g[e+1]*k-o[e+1]*d}n[a+b-1]=g[b]*k-o[b]*d}};Filters.prototype.Bw_lpc=Filters.Bw_lpc=function(b,f,c,a){var e=1;for(var d=0;d<a+1;d++){c[d]=e*f[d];e*=b}};function NoiseSearch(){}var VQ=function(){};VQ.prototype.Index_s=VQ.Index_s=function(g,d,a){var c;var b=0;var e=0;for(c=0;c<a;c++){var f=g-d[c];f=f*f;if(c==0||f<b){b=f;e=c}}return e};VQ.prototype.Nbest=VQ.Nbest=function(f,d,n,h,g,s,m,q,o){var e,c,b,a=0,r=0;for(e=0;e<g;e++){var p=0.5*s[e];for(c=0;c<h;c++){p-=f[d+c]*n[a++]}if(e<m||p<o[m-1]){for(b=m-1;(b>=1)&&(b>r||p<o[b-1]);b--){o[b]=o[b-1];q[b]=q[b-1]}o[b]=p;q[b]=e;r++}}};function SplitShapeSearch(A,g,a,k,j,n){var w=10;var q=A;var y=g;var b=a;var f=k;var p=1<<j;var z=j;var c=n;var h=new Array();var o=new Array();for(var s=0;s<a;s++){h[s]=0;o[s]=0}var d=[];var B=[];var x=[];var u=[];for(var s=0;s<w;s++){d[s]=[];B[s]=[];x[s]=[];u[s]=[]}var m=new Array();var v=new Array();var r=new Array();var l=new Array();this.Quantify=function(e,G,O,L,Y,Q,D,aa,W,t,T){var ag,af,ae,ac,ab,X;var K;var C,V;var I;var al;var ad;var ak;var F=T;if(F>10){F=10}K=new Array();I=new Array();al=new Array();C=new Array();V=new Array();ad=new Array();ak=new Array();for(var ag=0;ag<F;ag++){I[ag]=0;ad[ag]=0;ak[ag]=0}for(ag=0;ag<F;ag++){for(af=0;af<b;af++){u[ag][af]=x[ag][af]=-1}}for(af=0;af<F;af++){for(ag=0;ag<Q;ag++){d[af][ag]=e[ag]}}for(ag=0;ag<p;ag++){var P;var J;P=ag*y;J=ag*y;for(af=0;af<y;af++){K[P+af]=0;for(ae=0;ae<=af;ae++){K[P+af]+=0.03125*f[J+ae]*W[af-ae]}}l[ag]=0;for(af=0;af<y;af++){l[ag]+=K[P+af]*K[P+af]}}for(af=0;af<F;af++){V[af]=0}for(ag=0;ag<b;ag++){var U=ag*y;var S=2147483647;for(af=0;af<F;af++){C[af]=S}for(af=0;af<F;af++){ad[af]=ak[af]=0}for(af=0;af<F;af++){var Z=0;for(ac=U;ac<U+y;ac++){Z+=d[af][ac]*d[af][ac]}Z*=0.5;if(c!=0){VQ.Nbest_sign(d[af],U,K,y,p,l,F,I,al)}else{VQ.Nbest(d[af],U,K,y,p,l,F,I,al)}for(ae=0;ae<F;ae++){var ah=V[af]+al[ae]+Z;if(ah<C[F-1]){for(ac=0;ac<F;ac++){if(ah<C[ac]){for(ab=F-1;ab>ac;ab--){C[ab]=C[ab-1];ad[ab]=ad[ab-1];ak[ab]=ak[ab-1]}C[ac]=ah;ad[ab]=I[ae];ak[ab]=af;break}}}}if(ag==0){break}}for(af=0;af<F;af++){for(ac=(ag+1)*y;ac<Q;ac++){B[af][ac]=d[ak[af]][ac]}for(ac=0;ac<y;ac++){var ai;var R;var H=1;R=ad[af];if(R>=p){H=-1;R-=p}X=y-ac;ai=H*0.03125*f[R*y+ac];var am;for(ab=0,am=U+y;ab<Q-y*(ag+1);ab++,am++){B[af][am]-=(ai*W[ab+X])}}for(X=0;X<b;X++){u[af][X]=x[ak[af]][X]}u[af][ag]=ad[af]}var aj;aj=d;d=B;B=aj;for(af=0;af<F;af++){for(ac=0;ac<b;ac++){x[af][ac]=u[af][ac]}}for(af=0;af<F;af++){V[af]=C[af]}}for(ag=0;ag<b;ag++){h[ag]=u[0][ag];t.Pack(h[ag],z+c)}for(ag=0;ag<b;ag++){var E;var M=1;E=h[ag];if(E>=p){M=-1;E-=p}for(af=0;af<y;af++){v[y*ag+af]=M*0.03125*f[E*y+af]}}for(af=0;af<Q;af++){D[aa+af]+=v[af]}Filters.Syn_percep_zero(v,0,G,O,L,r,Q,Y);for(af=0;af<Q;af++){e[af]-=r[af]}}}function LspQuant(){}LspQuant.MAX_LSP_SIZE=20;LspQuant.prototype.Lsp_quant=LspQuant.Lsp_quant=function(n,d,c,b,e){var h,f;var m,g;var l=0;var k=0;var a=0;for(h=0;h<b;h++){m=0;for(f=0;f<e;f++){g=(n[d+f]-c[a++]);m+=g*g}if(m<l||h==0){l=m;k=h}}for(f=0;f<e;f++){n[d+f]-=c[k*e+f]}return k};LspQuant.prototype.Lsp_weight_quant=LspQuant.Lsp_weight_quant=function(p,d,k,m,c,b,f){var h,e;var o,g;var n=0;var l=0;var a=0;for(h=0;h<b;h++){o=0;for(e=0;e<f;e++){g=(p[d+e]-c[a++]);o+=k[m+e]*g*g}if(o<n||h==0){n=o;l=h}}for(e=0;e<f;e++){p[d+e]-=c[l*f+e]}return l};var Codebook_Constants=new function(){};Codebook_Constants.exc_20_32_table=[12,32,25,46,36,33,9,14,-3,6,1,-8,0,-10,-5,-7,-7,-7,-5,-5,31,-27,24,-32,-4,10,-11,21,-3,19,23,-9,22,24,-10,-1,-10,-13,-7,-11,42,-33,31,19,-8,0,-10,-16,1,-21,-17,10,-8,14,8,4,11,-2,5,-2,-33,11,-16,33,11,-4,9,-4,11,2,6,-5,8,-5,11,-4,-6,26,-36,-16,0,4,-2,-8,12,6,-1,34,-46,-22,9,9,21,9,5,-66,-5,26,2,10,13,2,19,9,12,-81,3,13,13,0,-14,22,-35,6,-7,-4,6,-6,10,-6,-31,38,-33,0,-10,-11,5,-12,12,-17,5,0,-6,13,-9,10,8,25,33,2,-12,8,-6,10,-2,21,7,17,43,5,11,-7,-9,-20,-36,-20,-23,-4,-4,-3,27,-9,-9,-49,-39,-38,-11,-9,6,5,23,25,5,3,3,4,1,2,-3,-1,87,39,17,-21,-9,-19,-9,-15,-13,-14,-17,-11,-10,-11,-8,-6,-1,-3,-3,-1,-54,-34,-27,-8,-11,-4,-5,0,0,4,8,6,9,7,9,7,6,5,5,5,48,10,19,-10,12,-1,9,-3,2,5,-3,2,-2,-2,0,-2,-26,6,9,-7,-16,-9,2,7,7,-5,-43,11,22,-11,-9,34,37,-15,-13,-6,1,-1,1,1,-64,56,52,-11,-27,5,4,3,1,2,1,3,-1,-4,-4,-10,-7,-4,-4,2,-1,-7,-7,-12,-10,-15,-9,-5,-5,-11,-16,-13,6,16,4,-13,-16,-10,-4,2,-47,-13,25,47,19,-14,-20,-8,-17,0,-3,-13,1,6,-17,-14,15,1,10,6,-24,0,-10,19,-69,-8,14,49,17,-5,33,-29,3,-4,0,2,-8,5,-6,2,120,-56,-12,-47,23,-9,6,-5,1,2,-5,1,-10,4,-1,-1,4,-1,0,-3,30,-52,-67,30,22,11,-1,-4,3,0,7,2,0,1,-10,-4,-8,-13,5,1,1,-1,5,13,-9,-3,-10,-62,22,48,-4,-6,2,3,5,1,1,4,1,13,3,-20,10,-9,13,-2,-4,9,-20,44,-1,20,-32,-67,19,0,28,11,8,2,-11,15,-19,-53,31,2,34,10,6,-4,-58,8,10,13,14,1,12,2,0,0,-128,37,-8,44,-9,26,-3,18,2,6,11,-1,9,1,5,3,0,1,1,2,12,3,-2,-3,7,25,9,18,-6,-37,3,-8,-16,3,-10,-7,17,-34,-44,11,17,-15,-3,-16,-1,-13,11,-46,-65,-2,8,13,2,4,4,5,15,5,9,6,8,2,8,3,10,-1,3,-3,6,-2,3,3,-5,10,-11,7,6,-2,6,-2,-9,19,-12,12,-28,38,29,-1,12,2,5,23,-10,3,4,-15,21,-4,3,3,6,17,-9,-4,-8,-20,26,5,-10,6,1,-19,18,-15,-12,47,-6,-2,-7,-9,-1,-17,-2,-2,-14,30,-14,2,-7,-4,-1,-12,11,-25,16,-3,-12,11,-7,7,-17,1,19,-28,31,-7,-10,7,-10,3,12,5,-16,6,24,41,-29,-54,0,1,7,-1,5,-6,13,10,-4,-8,8,-9,-27,-53,-38,-1,10,19,17,16,12,12,0,3,-7,-4,13,12,-31,-14,6,-5,3,5,17,43,50,25,10,1,-6,-2];Codebook_Constants.exc_10_16_table=[22,39,14,44,11,35,-2,23,-4,6,46,-28,13,-27,-23,12,4,20,-5,9,37,-18,-23,23,0,9,-6,-20,4,-1,-17,-5,-4,17,0,1,9,-2,1,2,2,-12,8,-25,39,15,9,16,-55,-11,9,11,5,10,-2,-60,8,13,-6,11,-16,27,-47,-12,11,1,16,-7,9,-3,-29,9,-14,25,-19,34,36,12,40,-10,-3,-24,-14,-37,-21,-35,-2,-36,3,-6,67,28,6,-17,-3,-12,-16,-15,-17,-7,-59,-36,-13,1,7,1,2,10,2,11,13,10,8,-2,7,3,5,4,2,2,-3,-8,4,-5,6,7,-42,15,35,-2,-46,38,28,-20,-9,1,7,-3,0,-2,-5,-4,-2,-4,-8,-3,-8,-5,-7,-4,-15,-28,52,32,5,-5,-17,-20,-10,-1];Codebook_Constants.exc_10_32_table=[7,17,17,27,25,22,12,4,-3,0,28,-36,39,-24,-15,3,-9,15,-5,10,31,-28,11,31,-21,9,-11,-11,-2,-7,-25,14,-22,31,4,-14,19,-12,14,-5,4,-7,4,-5,9,0,-2,42,-47,-16,1,8,0,9,23,-57,0,28,-11,6,-31,55,-45,3,-5,4,2,-2,4,-7,-3,6,-2,7,-3,12,5,8,54,-10,8,-7,-8,-24,-25,-27,-14,-5,8,5,44,23,5,-9,-11,-11,-13,-9,-12,-8,-29,-8,-22,6,-15,3,-12,-1,-5,-3,34,-1,29,-16,17,-4,12,2,1,4,-2,-4,2,-1,11,-3,-52,28,30,-9,-32,25,44,-20,-24,4,6,-1,0,0,-3,7,-4,-4,-7,-6,-9,-2,-10,-7,-25,-10,22,29,13,-13,-22,-13,-4,0,-4,-16,10,15,-36,-24,28,25,-1,-3,66,-33,-11,-15,6,0,3,4,-2,5,24,-20,-47,29,19,-2,-4,-1,0,-1,-2,3,1,8,-11,5,5,-57,28,28,0,-16,4,-4,12,-6,-1,2,-20,61,-9,24,-22,-42,29,6,17,8,4,2,-65,15,8,10,5,6,5,3,2,-2,-3,5,-9,4,-5,23,13,23,-3,-63,3,-5,-4,-6,0,-3,23,-36,-46,9,5,5,8,4,9,-5,1,-3,10,1,-6,10,-11,24,-47,31,22,-12,14,-10,6,11,-7,-7,7,-31,51,-12,-6,7,6,-17,9,-11,-20,52,-19,3,-6,-6,-8,-5,23,-41,37,1,-21,10,-14,8,7,5,-15,-15,23,39,-26,-33,7,2,-32,-30,-21,-8,4,12,17,15,14,11];Codebook_Constants.exc_5_256_table=[-8,-37,5,-43,5,73,61,39,12,-3,-61,-32,2,42,30,-3,17,-27,9,34,20,-1,-5,2,23,-7,-46,26,53,-47,20,-2,-33,-89,-51,-64,27,11,15,-34,-5,-56,25,-9,-1,-29,1,40,67,-23,-16,16,33,19,7,14,85,22,-10,-10,-12,-7,-1,52,89,29,11,-20,-37,-46,-15,17,-24,-28,24,2,1,0,23,-101,23,14,-1,-23,-18,9,5,-13,38,1,-28,-28,4,27,51,-26,34,-40,35,47,54,38,-54,-26,-6,42,-25,13,-30,-36,18,41,-4,-33,23,-32,-7,-4,51,-3,17,-52,56,-47,36,-2,-21,36,10,8,-33,31,19,9,-5,-40,10,-9,-21,19,18,-78,-18,-5,0,-26,-36,-47,-51,-44,18,40,27,-2,29,49,-26,2,32,-54,30,-73,54,3,-5,36,22,53,10,-1,-84,-53,-29,-5,3,-44,53,-51,4,22,71,-35,-1,33,-5,-27,-7,36,17,-23,-39,16,-9,-55,-15,-20,39,-35,6,-39,-14,18,48,-64,-17,-15,9,39,81,37,-68,37,47,-21,-6,-104,13,6,9,-2,35,8,-23,18,42,45,21,33,-5,-49,9,-6,-43,-56,39,2,-16,-25,87,1,-3,-9,17,-25,-11,-9,-1,10,2,-14,-14,4,-1,-10,28,-23,40,-32,26,-9,26,4,-27,-23,3,42,-60,1,49,-3,27,10,-52,-40,-2,18,45,-23,17,-44,3,-3,17,-46,52,-40,-47,25,75,31,-49,53,30,-30,-32,-36,38,-6,-15,-16,54,-27,-48,3,38,-29,-32,-22,-14,-4,-23,-13,32,-39,9,8,-45,-13,34,-16,49,40,32,31,28,23,23,32,47,59,-68,8,62,44,25,-14,-24,-65,-16,36,67,-25,-38,-21,4,-33,-2,42,5,-63,40,11,26,-42,-23,-61,79,-31,23,-20,10,-32,53,-25,-36,10,-26,-5,3,0,-71,5,-10,-37,1,-24,21,-54,-17,1,-29,-25,-15,-27,32,68,45,-16,-37,-18,-5,1,0,-77,71,-6,3,-20,71,-67,29,-35,10,-30,19,4,16,17,5,0,-14,19,2,28,26,59,3,2,24,39,55,-50,-45,-18,-17,33,-35,14,-1,1,8,87,-35,-29,0,-27,13,-7,23,-13,37,-40,50,-35,14,19,-7,-14,49,54,-5,22,-2,-29,-8,-27,38,13,27,48,12,-41,-21,-15,28,7,-16,-24,-19,-20,11,-20,9,2,13,23,-20,11,27,-27,71,-69,8,2,-6,22,12,16,16,9,-16,-8,-17,1,25,1,40,-37,-33,66,94,53,4,-22,-25,-41,-42,25,35,-16,-15,57,31,-29,-32,21,16,-60,45,15,-1,7,57,-26,-47,-29,11,8,15,19,-105,-8,54,27,10,-17,6,-12,-1,-10,4,0,23,-10,31,13,11,10,12,-64,23,-3,-8,-19,16,52,24,-40,16,10,40,5,9,0,-13,-7,-21,-8,-6,-7,-21,59,16,-53,18,-60,11,-47,14,-18,25,-13,-24,4,-39,16,-28,54,26,-67,30,27,-20,-52,20,-12,55,12,18,-16,39,-14,-6,-26,56,-88,-55,12,25,26,-37,6,75,0,-34,-81,54,-30,1,-7,49,-23,-14,21,10,-62,-58,-57,-47,-34,15,-4,34,-78,31,25,-11,7,50,-10,42,-63,14,-36,-4,57,55,57,53,42,-42,-1,15,40,37,15,25,-11,6,1,31,-2,-6,-1,-7,-64,34,28,30,-1,3,21,0,-88,-12,-56,25,-28,40,8,-28,-14,9,12,2,-6,-17,22,49,-6,-26,14,28,-20,4,-12,50,35,40,13,-38,-58,-29,17,30,22,60,26,-54,-39,-12,58,-28,-63,10,-21,-8,-12,26,-62,6,-10,-11,-22,-6,-7,4,1,18,2,-70,11,14,4,13,19,-24,-34,24,67,17,51,-21,13,23,54,-30,48,1,-13,80,26,-16,-2,13,-4,6,-30,29,-24,73,-58,30,-27,20,-2,-21,41,45,30,-27,-3,-5,-18,-20,-49,-3,-35,10,42,-19,-67,-53,-11,9,13,-15,-33,-51,-30,15,7,25,-30,4,28,-22,-34,54,-29,39,-46,20,16,34,-4,47,75,1,-44,-55,-24,7,-1,9,-42,50,-8,-36,41,68,0,-4,-10,-23,-15,-50,64,36,-9,-27,12,25,-38,-47,-37,32,-49,51,-36,2,-4,69,-26,19,7,45,67,46,13,-63,46,15,-47,4,-41,13,-6,5,-21,37,26,-55,-7,33,-1,-28,10,-17,-64,-14,0,-36,-17,93,-3,-9,-66,44,-21,3,-12,38,-6,-13,-12,19,13,43,-43,-10,-12,6,-5,9,-49,32,-5,2,4,5,15,-16,10,-21,8,-62,-8,64,8,79,-1,-66,-49,-18,5,40,-5,-30,-45,1,-6,21,-32,93,-18,-30,-21,32,21,-18,22,8,5,-41,-54,80,22,-10,-7,-8,-23,-64,66,56,-14,-30,-41,-46,-14,-29,-37,27,-14,42,-2,-9,-29,34,14,33,-14,22,4,10,26,26,28,32,23,-72,-32,3,0,-14,35,-42,-78,-32,6,29,-18,-45,-5,7,-33,-45,-3,-22,-34,8,-8,4,-51,-25,-9,59,-78,21,-5,-25,-48,66,-15,-17,-24,-49,-13,25,-23,-64,-6,40,-24,-19,-11,57,-33,-8,1,10,-52,-54,28,39,49,34,-11,-61,-41,-43,10,15,-15,51,30,15,-51,32,-34,-2,-34,14,18,16,1,1,-3,-3,1,1,-18,6,16,48,12,-5,-42,7,36,48,7,-20,-10,7,12,2,54,39,-38,37,54,4,-11,-8,-46,-10,5,-10,-34,46,-12,29,-37,39,36,-11,24,56,17,14,20,25,0,-25,-28,55,-7,-5,27,3,9,-26,-8,6,-24,-10,-30,-31,-34,18,4,22,21,40,-1,-29,-37,-8,-21,92,-29,11,-3,11,73,23,22,7,4,-44,-9,-11,21,-13,11,9,-78,-1,47,114,-12,-37,-19,-5,-11,-22,19,12,-30,7,38,45,-21,-8,-9,55,-45,56,-21,7,17,46,-57,-87,-6,27,31,31,7,-56,-12,46,21,-5,-12,36,3,3,-21,43,19,12,-7,9,-14,0,-9,-33,-91,7,26,3,-11,64,83,-31,-46,25,2,9,5,2,2,-1,20,-17,10,-5,-27,-8,20,8,-19,16,-21,-13,-31,5,5,42,24,9,34,-20,28,-61,22,11,-39,64,-20,-1,-30,-9,-20,24,-25,-24,-29,22,-60,6,-5,41,-9,-87,14,34,15,-57,52,69,15,-3,-102,58,16,3,6,60,-75,-32,26,7,-57,-27,-32,-24,-21,-29,-16,62,-46,31,30,-27,-15,7,15];Codebook_Constants.exc_5_64_table=[1,5,-15,49,-66,-48,-4,50,-44,7,37,16,-18,25,-26,-26,-15,19,19,-27,-47,28,57,5,-17,-32,-41,68,21,-2,64,56,8,-16,-13,-26,-9,-16,11,6,-39,25,-19,22,-31,20,-45,55,-43,10,-16,47,-40,40,-20,-51,3,-17,-14,-15,-24,53,-20,-46,46,27,-68,32,3,-18,-5,9,-31,16,-9,-10,-1,-23,48,95,47,25,-41,-32,-3,15,-25,-55,36,41,-27,20,5,13,14,-22,5,2,-23,18,46,-15,17,-18,-34,-5,-8,27,-55,73,16,2,-1,-17,40,-78,33,0,2,19,4,53,-16,-15,-16,-28,-3,-13,49,8,-7,-29,27,-13,32,20,32,-61,16,14,41,44,40,24,20,7,4,48,-60,-77,17,-6,-48,65,-15,32,-30,-71,-10,-3,-6,10,-2,-7,-29,-56,67,-30,7,-5,86,-6,-10,0,5,-31,60,34,-38,-3,24,10,-2,30,23,24,-41,12,70,-43,15,-17,6,13,16,-13,8,30,-15,-8,5,23,-34,-98,-4,-13,13,-48,-31,70,12,31,25,24,-24,26,-7,33,-16,8,5,-11,-14,-8,-65,13,10,-2,-9,0,-3,-68,5,35,7,0,-31,-1,-17,-9,-9,16,-37,-18,-1,69,-48,-28,22,-21,-11,5,49,55,23,-86,-36,16,2,13,63,-51,30,-11,13,24,-18,-6,14,-19,1,41,9,-5,27,-36,-44,-34,-37,-21,-26,31,-39,15,43,5,-8,29,20,-8,-20,-52,-28,-1,13,26,-34,-10,-9,27,-8,8,27,-66,4,12,-22,49,10,-77,32,-18,3,-38,12,-3,-1,2,2,0];Codebook_Constants.exc_8_128_table=[-14,9,13,-32,2,-10,31,-10,-8,-8,6,-4,-1,10,-64,23,6,20,13,6,8,-22,16,34,7,42,-49,-28,5,26,4,-15,41,34,41,32,33,24,23,14,8,40,34,4,-24,-41,-19,-15,13,-13,33,-54,24,27,-44,33,27,-15,-15,24,-19,14,-36,14,-9,24,-12,-4,37,-5,16,-34,5,10,33,-15,-54,-16,12,25,12,1,2,0,3,-1,-4,-4,11,2,-56,54,27,-20,13,-6,-46,-41,-33,-11,-5,7,12,14,-14,-5,8,20,6,3,4,-8,-5,-42,11,8,-14,25,-2,2,13,11,-22,39,-9,9,5,-45,-9,7,-9,12,-7,34,-17,-102,7,2,-42,18,35,-9,-34,11,-5,-2,3,22,46,-52,-25,-9,-94,8,11,-5,-5,-5,4,-7,-35,-7,54,5,-32,3,24,-9,-22,8,65,37,-1,-12,-23,-6,-9,-28,55,-33,14,-3,2,18,-60,41,-17,8,-16,17,-11,0,-11,29,-28,37,9,-53,33,-14,-9,7,-25,-7,-11,26,-32,-8,24,-21,22,-19,19,-10,29,-14,-10,-4,-3,-2,3,-1,-4,-4,-5,-52,10,41,6,-30,-4,16,32,22,-27,-22,32,-3,-28,-3,3,-35,6,17,23,21,8,2,4,-45,-17,14,23,-4,-31,-11,-3,14,1,19,-11,2,61,-8,9,-12,7,-10,12,-3,-24,99,-48,23,50,-37,-5,-23,0,8,-14,35,-64,-5,46,-25,13,-1,-49,-19,-15,9,34,50,25,11,-6,-9,-16,-20,-32,-33,-32,-27,10,-8,12,-15,56,-14,-32,33,3,-9,1,65,-9,-9,-10,-2,-6,-23,9,17,3,-28,13,-32,4,-2,-10,4,-16,76,12,-52,6,13,33,-6,4,-14,-9,-3,1,-15,-16,28,1,-15,11,16,9,4,-21,-37,-40,-6,22,12,-15,-23,-14,-17,-16,-9,-10,-9,13,-39,41,5,-9,16,-38,25,46,-47,4,49,-14,17,-2,6,18,5,-6,-33,-22,44,50,-2,1,3,-6,7,7,-3,-21,38,-18,34,-14,-41,60,-13,6,16,-24,35,19,-13,-36,24,3,-17,-14,-10,36,44,-44,-29,-3,3,-54,-8,12,55,26,4,-2,-5,2,-11,22,-23,2,22,1,-25,-39,66,-49,21,-8,-2,10,-14,-60,25,6,10,27,-25,16,5,-2,-9,26,-13,-20,58,-2,7,52,-9,2,5,-4,-15,23,-1,-38,23,8,27,-6,0,-27,-7,39,-10,-14,26,11,-45,-12,9,-5,34,4,-35,10,43,-22,-11,56,-7,20,1,10,1,-26,9,94,11,-27,-14,-13,1,-11,0,14,-5,-6,-10,-4,-15,-8,-41,21,-5,1,-28,-8,22,-9,33,-23,-4,-4,-12,39,4,-7,3,-60,80,8,-17,2,-6,12,-5,1,9,15,27,31,30,27,23,61,47,26,10,-5,-8,-12,-13,5,-18,25,-15,-4,-15,-11,12,-2,-2,-16,-2,-6,24,12,11,-4,9,1,-9,14,-45,57,12,20,-35,26,11,-64,32,-10,-10,42,-4,-9,-16,32,24,7,10,52,-11,-57,29,0,8,0,-6,17,-17,-56,-40,7,20,18,12,-6,16,5,7,-1,9,1,10,29,12,16,13,-2,23,7,9,-3,-4,-5,18,-64,13,55,-25,9,-9,24,14,-25,15,-11,-40,-30,37,1,-19,22,-5,-31,13,-2,0,7,-4,16,-67,12,66,-36,24,-8,18,-15,-23,19,0,-45,-7,4,3,-13,13,35,5,13,33,10,27,23,0,-7,-11,43,-74,36,-12,2,5,-8,6,-33,11,-16,-14,-5,-7,-3,17,-34,27,-16,11,-9,15,33,-31,8,-16,7,-6,-7,63,-55,-17,11,-1,20,-46,34,-30,6,9,19,28,-9,5,-24,-8,-23,-2,31,-19,-16,-5,-15,-18,0,26,18,37,-5,-15,-2,17,5,-27,21,-33,44,12,-27,-9,17,11,25,-21,-31,-7,13,33,-8,-25,-7,7,-10,4,-6,-9,48,-82,-23,-8,6,11,-23,3,-3,49,-29,25,31,4,14,16,9,-4,-18,10,-26,3,5,-44,-9,9,-47,-55,15,9,28,1,4,-3,46,6,-6,-38,-29,-31,-15,-6,3,0,14,-6,8,-54,-50,33,-5,1,-14,33,-48,26,-4,-5,-3,-5,-3,-5,-28,-22,77,55,-1,2,10,10,-9,-14,-66,-49,11,-36,-6,-20,10,-10,16,12,4,-1,-16,45,-44,-50,31,-2,25,42,23,-32,-22,0,11,20,-40,-35,-40,-36,-32,-26,-21,-13,52,-22,6,-24,-20,17,-5,-8,36,-25,-11,21,-26,6,34,-8,7,20,-3,5,-25,-8,18,-5,-9,-4,1,-9,20,20,39,48,-24,9,5,-65,22,29,4,3,-43,-11,32,-6,9,19,-27,-10,-47,-14,24,10,-7,-36,-7,-1,-4,-5,-5,16,53,25,-26,-29,-4,-12,45,-58,-34,33,-5,2,-1,27,-48,31,-15,22,-5,4,7,7,-25,-3,11,-22,16,-12,8,-3,7,-11,45,14,-73,-19,56,-46,24,-20,28,-12,-2,-1,-36,-3,-33,19,-6,7,2,-15,5,-31,-45,8,35,13,20,0,-9,48,-13,-43,-3,-13,2,-5,72,-68,-27,2,1,-2,-7,5,36,33,-40,-12,-4,-5,23,19];Codebook_Constants.gain_cdbk_nb=[-32,-32,-32,-28,-67,-5,-42,-6,-32,-57,-10,-54,-16,27,-41,19,-19,-40,-45,24,-21,-8,-14,-18,1,14,-58,-18,-88,-39,-38,21,-18,-19,20,-43,10,17,-48,-52,-58,-13,-44,-1,-11,-12,-11,-34,14,0,-46,-37,-35,-34,-25,44,-30,6,-4,-63,-31,43,-41,-23,30,-43,-43,26,-14,-33,1,-13,-13,18,-37,-46,-73,-45,-36,24,-25,-36,-11,-20,-25,12,-18,-36,-69,-59,-45,6,8,-22,-14,-24,-1,13,-44,-39,-48,-26,-32,31,-37,-33,15,-46,-24,30,-36,-41,31,-23,-50,22,-4,-22,2,-21,-17,30,-34,-7,-60,-28,-38,42,-28,-44,-11,21,-16,8,-44,-39,-55,-43,-11,-35,26,-9,0,-34,-8,121,-81,7,-16,-22,-37,33,-31,-27,-7,-36,-34,70,-57,-37,-11,-48,-40,17,-1,-33,6,-6,-9,0,-20,-21,69,-33,-29,33,-31,-55,12,-1,-33,27,-22,-50,-33,-47,-50,54,51,-1,-5,-44,-4,22,-40,-39,-66,-25,-33,1,-26,-24,-23,-25,-11,21,-45,-25,-45,-19,-43,105,-16,5,-21,1,-16,11,-33,-13,-99,-4,-37,33,-15,-25,37,-63,-36,24,-31,-53,-56,-38,-41,-4,4,-33,13,-30,49,52,-94,-5,-30,-15,1,38,-40,-23,12,-36,-17,40,-47,-37,-41,-39,-49,34,0,-18,-7,-4,-16,17,-27,30,5,-62,4,48,-68,-43,11,-11,-18,19,-15,-23,-62,-39,-42,10,-2,-21,-13,-13,-9,13,-47,-23,-62,-24,-44,60,-21,-18,-3,-52,-22,22,-36,-75,57,16,-19,3,10,-29,23,-38,-5,-62,-51,-51,40,-18,-42,13,-24,-34,14,-20,-56,-75,-26,-26,32,15,-26,17,-29,-7,28,-52,-12,-30,5,-5,-48,-5,2,2,-43,21,16,16,-25,-45,-32,-43,18,-10,9,0,-1,-1,7,-30,19,-48,-4,-28,25,-29,-22,0,-31,-32,17,-10,-64,-41,-62,-52,15,16,-30,-22,-32,-7,9,-38];Codebook_Constants.gain_cdbk_lbr=[-32,-32,-32,-31,-58,-16,-41,-24,-43,-56,-22,-55,-13,33,-41,-4,-39,-9,-41,15,-12,-8,-15,-12,1,2,-44,-22,-66,-42,-38,28,-23,-21,14,-37,0,21,-50,-53,-71,-27,-37,-1,-19,-19,-5,-28,6,65,-44,-33,-48,-33,-40,57,-14,-17,4,-45,-31,38,-33,-23,28,-40,-43,29,-12,-34,13,-23,-16,15,-27,-14,-82,-15,-31,25,-32,-21,5,-5,-47,-63,-51,-46,12,3,-28,-17,-29,-10,14,-40];Codebook_Constants.hexc_10_32_table=[-3,-2,-1,0,-4,5,35,-40,-9,13,-44,5,-27,-1,-7,6,-11,7,-8,7,19,-14,15,-4,9,-10,10,-8,10,-9,-1,1,0,0,2,5,-18,22,-53,50,1,-23,50,-36,15,3,-13,14,-10,6,1,5,-3,4,-2,5,-32,25,5,-2,-1,-4,1,11,-29,26,-6,-15,30,-18,0,15,-17,40,-41,3,9,-2,-2,3,-3,-1,-5,2,21,-6,-16,-21,23,2,60,15,16,-16,-9,14,9,-1,7,-9,0,1,1,0,-1,-6,17,-28,54,-45,-1,1,-1,-6,-6,2,11,26,-29,-2,46,-21,34,12,-23,32,-23,16,-10,3,66,19,-20,24,7,11,-3,0,-3,-1,-50,-46,2,-18,-3,4,-1,-2,3,-3,-19,41,-36,9,11,-24,21,-16,9,-3,-25,-3,10,18,-9,-2,-5,-1,-5,6,-4,-3,2,-26,21,-19,35,-15,7,-13,17,-19,39,-43,48,-31,16,-9,7,-2,-5,3,-4,9,-19,27,-55,63,-35,10,26,-44,-2,9,4,1,-6,8,-9,5,-8,-1,-3,-16,45,-42,5,15,-16,10,0,0,0,0,0,0,0,0,0,0,-16,24,-55,47,-38,27,-19,7,-3,1,16,27,20,-19,18,5,-7,1,-5,2,-6,8,-22,0,-3,-3,8,-1,7,-8,1,-3,5,0,17,-48,58,-52,29,-7,-2,3,-10,6,-26,58,-31,1,-6,3,93,-29,39,3,17,5,6,-1,-1,-1,27,13,10,19,-7,-34,12,10,-4,9,-76,9,8,-28,-2,-11,2,-1,3,1,-83,38,-39,4,-16,-6,-2,-5,5,-2];Codebook_Constants.hexc_table=[-24,21,-20,5,-5,-7,14,-10,2,-27,16,-20,0,-32,26,19,8,-11,-41,31,28,-27,-32,34,42,34,-17,22,-10,13,-29,18,-12,-26,-24,11,22,5,-5,-5,54,-68,-43,57,-25,24,4,4,26,-8,-12,-17,54,30,-45,1,10,-15,18,-41,11,68,-67,37,-16,-24,-16,38,-22,6,-29,30,66,-27,5,7,-16,13,2,-12,-7,-3,-20,36,4,-28,9,3,32,48,26,39,3,0,7,-21,-13,5,-82,-7,73,-20,34,-9,-5,1,-1,10,-5,-10,-1,9,1,-9,10,0,-14,11,-1,-2,-1,11,20,96,-81,-22,-12,-9,-58,9,24,-30,26,-35,27,-12,13,-18,56,-59,15,-7,23,-15,-1,6,-25,14,-22,-20,47,-11,16,2,38,-23,-19,-30,-9,40,-11,5,4,-6,8,26,-21,-11,127,4,1,6,-9,2,-7,-2,-3,7,-5,10,-19,7,-106,91,-3,9,-4,21,-8,26,-80,8,1,-2,-10,-17,-17,-27,32,71,6,-29,11,-23,54,-38,29,-22,39,87,-31,-12,-20,3,-2,-2,2,20,0,-1,-35,27,9,-6,-12,3,-12,-6,13,1,14,-22,-59,-15,-17,-25,13,-7,7,3,0,1,-7,6,-3,61,-37,-23,-23,-29,38,-31,27,1,-8,2,-27,23,-26,36,-34,5,24,-24,-6,7,3,-59,78,-62,44,-16,1,6,0,17,8,45,0,-110,6,14,-2,32,-77,-56,62,-3,3,-13,4,-16,102,-15,-36,-1,9,-113,6,23,0,9,9,5,-8,-1,-14,5,-12,121,-53,-27,-8,-9,22,-13,3,2,-3,1,-2,-71,95,38,-19,15,-16,-5,71,10,2,-32,-13,-5,15,-1,-2,-14,-85,30,29,6,3,2,0,0,0,0,0,0,0,0,2,-65,-56,-9,18,18,23,-14,-2,0,12,-29,26,-12,1,2,-12,-64,90,-6,4,1,5,-5,-110,-3,-31,22,-29,9,0,8,-40,-5,21,-5,-5,13,10,-18,40,1,35,-20,30,-28,11,-6,19,7,14,18,-64,9,-6,16,51,68,8,16,12,-8,0,-9,20,-22,25,7,-4,-13,41,-35,93,-18,-54,11,-1,1,-9,4,-66,66,-31,20,-22,25,-23,11,10,9,19,15,11,-5,-31,-10,-23,-28,-6,-6,-3,-4,5,3,-28,22,-11,-42,25,-25,-16,41,34,47,-6,2,42,-19,-22,5,-39,32,6,-35,22,17,-30,8,-26,-11,-11,3,-12,33,33,-37,21,-1,6,-4,3,0,-5,5,12,-12,57,27,-61,-3,20,-17,2,0,4,0,-2,-33,-58,81,-23,39,-10,-5,2,6,-7,5,4,-3,-2,-13,-23,-72,107,15,-5,0,-7,-3,-6,5,-4,15,47,12,-31,25,-16,8,22,-25,-62,-56,-18,14,28,12,2,-11,74,-66,41,-20,-7,16,-20,16,-8,0,-16,4,-19,92,12,-59,-14,-39,49,-25,-16,23,-27,19,-3,-33,19,85,-29,6,-7,-10,16,-7,-12,1,-6,2,4,-2,64,10,-25,41,-2,-31,15,0,110,50,69,35,28,19,-10,2,-43,-49,-56,-15,-16,10,3,12,-1,-8,1,26,-12,-1,7,-11,-27,41,25,1,-11,-18,22,-7,-1,-47,-8,23,-3,-17,-7,18,-125,59,-5,3,18,1,2,3,27,-35,65,-53,50,-46,37,-21,-28,7,14,-37,-5,-5,12,5,-8,78,-19,21,-6,-16,8,-7,5,2,7,2,10,-6,12,-60,44,11,-36,-32,31,0,2,-2,2,1,-3,7,-10,17,-21,10,6,-2,19,-2,59,-38,-86,38,8,-41,-30,-45,-33,7,15,28,29,-7,24,-40,7,7,5,-2,9,24,-23,-18,6,-29,30,2,28,49,-11,-46,10,43,-13,-9,-1,-3,-7,-7,-17,-6,97,-33,-21,3,5,1,12,-43,-8,28,7,-43,-7,17,-20,19,-1,2,-13,9,54,34,9,-28,-11,-9,-17,110,-59,44,-26,0,3,-12,-47,73,-34,-43,38,-33,16,-5,-46,-4,-6,-2,-25,19,-29,28,-13,5,14,27,-40,-43,4,32,-13,-2,-35,-4,112,-42,9,-12,37,-28,17,14,-19,35,-39,23,3,-14,-1,-57,-5,94,-9,3,-39,5,30,-10,-32,42,-13,-14,-97,-63,30,-9,1,-7,12,5,20,17,-9,-36,-30,25,47,-9,-15,12,-22,98,-8,-50,15,-27,21,-16,-11,2,12,-10,10,-3,33,36,-96,0,-17,31,-9,9,3,-20,13,-11,8,-4,10,-10,9,1,112,-70,-27,5,-21,2,-57,-3,-29,10,19,-21,21,-10,-66,-3,91,-35,30,-12,0,-7,59,-28,26,2,14,-18,1,1,11,17,20,-54,-59,27,4,29,32,5,19,12,-4,1,7,-10,5,-2,10,0,23,-5,28,-104,46,11,16,3,29,1,-8,-14,1,7,-50,88,-62,26,8,-17,-14,50,0,32,-12,-3,-27,18,-8,-5,8,3,-20,-11,37,-12,9,33,46,-101,-1,-4,1,6,-1,28,-42,-15,16,5,-1,-2,-55,85,38,-9,-4,11,-2,-9,-6,3,-20,-10,-77,89,24,-3,-104,-57,-26,-31,-20,-6,-9,14,20,-23,46,-15,-31,28,1,-15,-2,6,-2,31,45,-76,23,-25];Codebook_Constants.high_lsp_cdbk=[39,12,-14,-20,-29,-61,-67,-76,-32,-71,-67,68,77,46,34,5,-13,-48,-46,-72,-81,-84,-60,-58,-40,-28,82,93,68,45,29,3,-19,-47,-28,-43,-35,-30,-8,-13,-39,-91,-91,-123,-96,10,10,-6,-18,-55,-60,-91,-56,-36,-27,-16,-48,-75,40,28,-10,-28,35,9,37,19,1,-20,-31,-41,-18,-25,-35,-68,-80,45,27,-1,47,13,0,-29,-35,-57,-50,-79,-73,-38,-19,5,35,14,-10,-23,16,-8,5,-24,-40,-62,-23,-27,-22,-16,-18,-46,-72,-77,43,21,33,1,-80,-70,-70,-64,-56,-52,-39,-33,-31,-38,-19,-19,-15,32,33,-2,7,-15,-15,-24,-23,-33,-41,-56,-24,-57,5,89,64,41,27,5,-9,-47,-60,-97,-97,-124,-20,-9,-44,-73,31,29,-4,64,48,7,-35,-57,0,-3,-26,-47,-3,-6,-40,-76,-79,-48,12,81,55,10,9,-24,-43,-73,-57,-69,16,5,-28,-53,18,29,20,0,-4,-11,6,-13,23,7,-17,-35,-37,-37,-30,-68,-63,6,24,-9,-14,3,21,-13,-27,-57,-49,-80,-24,-41,-5,-16,-5,1,45,25,12,-7,3,-15,-6,-16,-15,-8,6,-13,-42,-81,-80,-87,14,1,-10,-3,-43,-69,-46,-24,-28,-29,36,6,-43,-56,-12,12,54,79,43,9,54,22,2,8,-12,-43,-46,-52,-38,-69,-89,-5,75,38,33,5,-13,-53,-62,-87,-89,-113,-99,-55,-34,-37,62,55,33,16,21,-2,-17,-46,-29,-38,-38,-48,-39,-42,-36,-75,-72,-88,-48,-30,21,2,-15,-57,-64,-98,-84,-76,25,1,-46,-80,-12,18,-7,3,34,6,38,31,23,4,-1,20,14,-15,-43,-78,-91,-24,14,-3,54,16,0,-27,-28,-44,-56,-83,-92,-89,-3,34,56,41,36,22,20,-8,-7,-35,-42,-62,-49,3,12,-10,-50,-87,-96,-66,92,70,38,9,-70,-71,-62,-42,-39,-43,-11,-7,-50,-79,-58,-50,-31,32,31,-6,-4,-25,7,-17,-38,-70,-58,-27,-43,-83,-28,59,36,20,31,2,-27,-71,-80,-109,-98,-75,-33,-32,-31,-2,33,15,-6,43,33,-5,0,-22,-10,-27,-34,-49,-11,-20,-41,-91,-100,-121,-39,57,41,10,-19,-50,-38,-59,-60,-70,-18,-20,-8,-31,-8,-15,1,-14,-26,-25,33,21,32,17,1,-19,-19,-26,-58,-81,-35,-22,45,30,11,-11,3,-26,-48,-87,-67,-83,-58,3,-1,-26,-20,44,10,25,39,5,-9,-35,-27,-38,7,10,4,-9,-42,-85,-102,-127,52,44,28,10,-47,-61,-40,-39,-17,-1,-10,-33,-42,-74,-48,21,-4,70,52,10];Codebook_Constants.high_lsp_cdbk2=[-36,-62,6,-9,-10,-14,-56,23,1,-26,23,-48,-17,12,8,-7,23,29,-36,-28,-6,-29,-17,-5,40,23,10,10,-46,-13,36,6,4,-30,-29,62,32,-32,-1,22,-14,1,-4,-22,-45,2,54,4,-30,-57,-59,-12,27,-3,-31,8,-9,5,10,-14,32,66,19,9,2,-25,-37,23,-15,18,-38,-31,5,-9,-21,15,0,22,62,30,15,-12,-14,-46,77,21,33,3,34,29,-19,50,2,11,9,-38,-12,-37,62,1,-15,54,32,6,2,-24,20,35,-21,2,19,24,-13,55,4,9,39,-19,30,-1,-21,73,54,33,8,18,3,15,6,-19,-47,6,-3,-48,-50,1,26,20,8,-23,-50,65,-14,-55,-17,-31,-37,-28,53,-1,-17,-53,1,57,11,-8,-25,-30,-37,64,5,-52,-45,15,23,31,15,14,-25,24,33,-2,-44,-56,-18,6,-21,-43,4,-12,17,-37,20,-10,34,15,2,15,55,21,-11,-31,-6,46,25,16,-9,-25,-8,-62,28,17,20,-32,-29,26,30,25,-19,2,-16,-17,26,-51,2,50,42,19,-66,23,29,-2,3,19,-19,-37,32,15,6,30,-34,13,11,-5,40,31,10,-42,4,-9,26,-9,-70,17,-2,-23,20,-22,-55,51,-24,-31,22,-22,15,-13,3,-10,-28,-16,56,4,-63,11,-18,-15,-18,-38,-35,16,-7,34,-1,-21,-49,-47,9,-37,7,8,69,55,20,6,-33,-45,-10,-9,6,-9,12,71,15,-3,-42,-7,-24,32,-35,-2,-42,-17,-5,0,-2,-33,-54,13,-12,-34,47,23,19,55,7,-8,74,31,14,16,-23,-26,19,12,-18,-49,-28,-31,-20,2,-14,-20,-47,78,40,13,-23,-11,21,-6,18,1,47,5,38,35,32,46,22,8,13,16,-14,18,51,19,40,39,11,-26,-1,-17,47,2,-53,-15,31,-22,38,21,-15,-16,5,-33,53,15,-38,86,11,-3,-24,49,13,-4,-11,-18,28,20,-12,-27,-26,35,-25,-35,-3,-20,-61,30,10,-55,-12,-22,-52,-54,-14,19,-32,-12,45,15,-8,-48,-9,11,-32,8,-16,-34,-13,51,18,38,-2,-32,-17,22,-2,-18,-28,-70,59,27,-28,-19,-10,-20,-9,-9,-8,-21,21,-8,35,-2,45,-3,-9,12,0,30,7,-39,43,27,-38,-91,30,26,19,-55,-4,63,14,-17,13,9,13,2,7,4,6,61,72,-1,-17,29,-1,-22,-17,8,-28,-37,63,44,41,3,2,14,9,-6,75,-8,-7,-12,-15,-12,13,9,-4,30,-22,-65,15,0,-45,4,-4,1,5,22,11,23];Codebook_Constants.NB_CDBK_SIZE=64;Codebook_Constants.NB_CDBK_SIZE_LOW1=64;Codebook_Constants.NB_CDBK_SIZE_LOW2=64;Codebook_Constants.NB_CDBK_SIZE_HIGH1=64;Codebook_Constants.NB_CDBK_SIZE_HIGH2=64;Codebook_Constants.cdbk_nb=[30,19,38,34,40,32,46,43,58,43,5,-18,-25,-40,-33,-55,-52,20,34,28,-20,-63,-97,-92,61,53,47,49,53,75,-14,-53,-77,-79,0,-3,-5,19,22,26,-9,-53,-55,66,90,72,85,68,74,52,-4,-41,-58,-31,-18,-31,27,32,30,18,24,3,8,5,-12,-3,26,28,74,63,-2,-39,-67,-77,-106,-74,59,59,73,65,44,40,71,72,82,83,98,88,89,60,-6,-31,-47,-48,-13,-39,-9,7,2,79,-1,-39,-60,-17,87,81,65,50,45,19,-21,-67,-91,-87,-41,-50,7,18,39,74,10,-31,-28,39,24,13,23,5,56,45,29,10,-5,-13,-11,-35,-18,-8,-10,-8,-25,-71,-77,-21,2,16,50,63,87,87,5,-32,-40,-51,-68,0,12,6,54,34,5,-12,32,52,68,64,69,59,65,45,14,-16,-31,-40,-65,-67,41,49,47,37,-11,-52,-75,-84,-4,57,48,42,42,33,-11,-51,-68,-6,13,0,8,-8,26,32,-23,-53,0,36,56,76,97,105,111,97,-1,-28,-39,-40,-43,-54,-44,-40,-18,35,16,-20,-19,-28,-42,29,47,38,74,45,3,-29,-48,-62,-80,-104,-33,56,59,59,10,17,46,72,84,101,117,123,123,106,-7,-33,-49,-51,-70,-67,-27,-31,70,67,-16,-62,-85,-20,82,71,86,80,85,74,-19,-58,-75,-45,-29,-33,-18,-25,45,57,-12,-42,-5,12,28,36,52,64,81,82,13,-9,-27,-28,22,3,2,22,26,6,-6,-44,-51,2,15,10,48,43,49,34,-19,-62,-84,-89,-102,-24,8,17,61,68,39,24,23,19,16,-5,12,15,27,15,-8,-44,-49,-60,-18,-32,-28,52,54,62,-8,-48,-77,-70,66,101,83,63,61,37,-12,-50,-75,-64,33,17,13,25,15,77,1,-42,-29,72,64,46,49,31,61,44,-8,-47,-54,-46,-30,19,20,-1,-16,0,16,-12,-18,-9,-26,-27,-10,-22,53,45,-10,-47,-75,-82,-105,-109,8,25,49,77,50,65,114,117,124,118,115,96,90,61,-9,-45,-63,-60,-75,-57,8,11,20,29,0,-35,-49,-43,40,47,35,40,55,38,-24,-76,-103,-112,-27,3,23,34,52,75,8,-29,-43,12,63,38,35,29,24,8,25,11,1,-15,-18,-43,-7,37,40,21,-20,-56,-19,-19,-4,-2,11,29,51,63,-2,-44,-62,-75,-89,30,57,51,74,51,50,46,68,64,65,52,63,55,65,43,18,-9,-26,-35,-55,-69,3,6,8,17,-15,-61,-86,-97,1,86,93,74,78,67,-1,-38,-66,-48,48,39,29,25,17,-1,13,13,29,39,50,51,69,82,97,98,-2,-36,-46,-27,-16,-30,-13,-4,-7,-4,25,-5,-11,-6,-25,-21,33,12,31,29,-8,-38,-52,-63,-68,-89,-33,-1,10,74,-2,-15,59,91,105,105,101,87,84,62,-7,-33,-50,-35,-54,-47,25,17,82,81,-13,-56,-83,21,58,31,42,25,72,65,-24,-66,-91,-56,9,-2,21,10,69,75,2,-24,11,22,25,28,38,34,48,33,7,-29,-26,17,15,-1,14,0,-2,0,-6,-41,-67,6,-2,-9,19,2,85,74,-22,-67,-84,-71,-50,3,11,-9,2,62];Codebook_Constants.cdbk_nb_low1=[-34,-52,-15,45,2,23,21,52,24,-33,-9,-1,9,-44,-41,-13,-17,44,22,-17,-6,-4,-1,22,38,26,16,2,50,27,-35,-34,-9,-41,6,0,-16,-34,51,8,-14,-31,-49,15,-33,45,49,33,-11,-37,-62,-54,45,11,-5,-72,11,-1,-12,-11,24,27,-11,-43,46,43,33,-12,-9,-1,1,-4,-23,-57,-71,11,8,16,17,-8,-20,-31,-41,53,48,-16,3,65,-24,-8,-23,-32,-37,-32,-49,-10,-17,6,38,5,-9,-17,-46,8,52,3,6,45,40,39,-7,-6,-34,-74,31,8,1,-16,43,68,-11,-19,-31,4,6,0,-6,-17,-16,-38,-16,-30,2,9,-39,-16,-1,43,-10,48,3,3,-16,-31,-3,62,68,43,13,3,-10,8,20,-56,12,12,-2,-18,22,-15,-40,-36,1,7,41,0,1,46,-6,-62,-4,-12,-2,-11,-83,-13,-2,91,33,-10,0,4,-11,-16,79,32,37,14,9,51,-21,-28,-56,-34,0,21,9,-26,11,28,-42,-54,-23,-2,-15,31,30,8,-39,-66,-39,-36,31,-28,-40,-46,35,40,22,24,33,48,23,-34,14,40,32,17,27,-3,25,26,-13,-61,-17,11,4,31,60,-6,-26,-41,-64,13,16,-26,54,31,-11,-23,-9,-11,-34,-71,-21,-34,-35,55,50,29,-22,-27,-50,-38,57,33,42,57,48,26,11,0,-49,-31,26,-4,-14,5,78,37,17,0,-49,-12,-23,26,14,2,2,-43,-17,-12,10,-8,-4,8,18,12,-6,20,-12,-6,-13,-25,34,15,40,49,7,8,13,20,20,-19,-22,-2,-8,2,51,-51];Codebook_Constants.cdbk_nb_low2=[-6,53,-21,-24,4,26,17,-4,-37,25,17,-36,-13,31,3,-6,27,15,-10,31,28,26,-10,-10,-40,16,-7,15,13,41,-9,0,-4,50,-6,-7,14,38,22,0,-48,2,1,-13,-19,32,-3,-60,11,-17,-1,-24,-34,-1,35,-5,-27,28,44,13,25,15,42,-11,15,51,35,-36,20,8,-4,-12,-29,19,-47,49,-15,-4,16,-29,-39,14,-30,4,25,-9,-5,-51,-14,-3,-40,-32,38,5,-9,-8,-4,-1,-22,71,-3,14,26,-18,-22,24,-41,-25,-24,6,23,19,-10,39,-26,-27,65,45,2,-7,-26,-8,22,-12,16,15,16,-35,-5,33,-21,-8,0,23,33,34,6,21,36,6,-7,-22,8,-37,-14,31,38,11,-4,-3,-39,-32,-8,32,-23,-6,-12,16,20,-28,-4,23,13,-52,-1,22,6,-33,-40,-6,4,-62,13,5,-26,35,39,11,2,57,-11,9,-20,-28,-33,52,-5,-6,-2,22,-14,-16,-48,35,1,-58,20,13,33,-1,-74,56,-18,-22,-31,12,6,-14,4,-2,-9,-47,10,-3,29,-17,-5,61,14,47,-12,2,72,-39,-17,92,64,-53,-51,-15,-30,-38,-41,-29,-28,27,9,36,9,-35,-42,81,-21,20,25,-16,-5,-17,-35,21,15,-28,48,2,-2,9,-19,29,-40,30,-18,-18,18,-16,-57,15,-20,-12,-15,-37,-15,33,-39,21,-22,-13,35,11,13,-38,-63,29,23,-27,32,18,3,-26,42,33,-64,-66,-17,16,56,2,36,3,31,21,-41,-39,8,-57,14,37,-2,19,-36,-19,-23,-29,-16,1,-3,-8,-10,31,64,-65];Codebook_Constants.cdbk_nb_high1=[-26,-8,29,21,4,19,-39,33,-7,-36,56,54,48,40,29,-4,-24,-42,-66,-43,-60,19,-2,37,41,-10,-37,-60,-64,18,-22,77,73,40,25,4,19,-19,-66,-2,11,5,21,14,26,-25,-86,-4,18,1,26,-37,10,37,-1,24,-12,-59,-11,20,-6,34,-16,-16,42,19,-28,-51,53,32,4,10,62,21,-12,-34,27,4,-48,-48,-50,-49,31,-7,-21,-42,-25,-4,-43,-22,59,2,27,12,-9,-6,-16,-8,-32,-58,-16,-29,-5,41,23,-30,-33,-46,-13,-10,-38,52,52,1,-17,-9,10,26,-25,-6,33,-20,53,55,25,-32,-5,-42,23,21,66,5,-28,20,9,75,29,-7,-42,-39,15,3,-23,21,6,11,1,-29,14,63,10,54,26,-24,-51,-49,7,-23,-51,15,-66,1,60,25,10,0,-30,-4,-15,17,19,59,40,4,-5,33,6,-22,-58,-70,-5,23,-6,60,44,-29,-16,-47,-29,52,-19,50,28,16,35,31,36,0,-21,6,21,27,22,42,7,-66,-40,-8,7,19,46,0,-4,60,36,45,-7,-29,-6,-32,-39,2,6,-9,33,20,-51,-34,18,-6,19,6,11,5,-19,-29,-2,42,-11,-45,-21,-55,57,37,2,-14,-67,-16,-27,-38,69,48,19,2,-17,20,-20,-16,-34,-17,-25,-61,10,73,45,16,-40,-64,-17,-29,-22,56,17,-39,8,-11,8,-25,-18,-13,-19,8,54,57,36,-17,-26,-4,6,-21,40,42,-4,20,31,53,10,-34,-53,31,-17,35,0,15,-6,-20,-63,-73,22,25,29,17,8,-29,-39,-69,18,15,-15,-5];Codebook_Constants.cdbk_nb_high2=[11,47,16,-9,-46,-32,26,-64,34,-5,38,-7,47,20,2,-73,-99,-3,-45,20,70,-52,15,-6,-7,-82,31,21,47,51,39,-3,9,0,-41,-7,-15,-54,2,0,27,-31,9,-45,-22,-38,-24,-24,8,-33,23,5,50,-36,-17,-18,-51,-2,13,19,43,12,-15,-12,61,38,38,7,13,0,6,-1,3,62,9,27,22,-33,38,-35,-9,30,-43,-9,-32,-1,4,-4,1,-5,-11,-8,38,31,11,-10,-42,-21,-37,1,43,15,-13,-35,-19,-18,15,23,-26,59,1,-21,53,8,-41,-50,-14,-28,4,21,25,-28,-40,5,-40,-41,4,51,-33,-8,-8,1,17,-60,12,25,-41,17,34,43,19,45,7,-37,24,-15,56,-2,35,-10,48,4,-47,-2,5,-5,-54,5,-3,-33,-10,30,-2,-44,-24,-38,9,-9,42,4,6,-56,44,-16,9,-40,-26,18,-20,10,28,-41,-21,-4,13,-18,32,-30,-3,37,15,22,28,50,-40,3,-29,-64,7,51,-19,-11,17,-27,-40,-64,24,-12,-7,-27,3,37,48,-1,2,-9,-38,-34,46,1,27,-6,19,-13,26,10,34,20,25,40,50,-6,-7,30,9,-24,0,-23,71,-61,22,58,-34,-4,2,-49,-33,25,30,-8,-6,-16,77,2,38,-8,-35,-6,-30,56,78,31,33,-20,13,-39,20,22,4,21,-8,4,-6,10,-83,-41,9,-25,-43,15,-7,-12,-34,-39,-37,-33,19,30,16,-33,42,-25,25,-68,44,-15,-11,-4,23,50,14,4,-39,-43,20,-30,60,9,-20,7,16,19,-33,37,29,16,-35,7,38,-27];Codebook_Constants.h0=[0.00003596189,-0.0001123515,-0.0001104587,0.0002790277,0.0002298438,-0.0005953563,-0.0003823631,0.00113826,0.0005308539,-0.001986177,-0.0006243724,0.003235877,0.0005743159,-0.004989147,-0.0002584767,0.007367171,-0.0004857935,-0.01050689,0.001894714,0.01459396,-0.004313674,-0.01994365,0.00828756,0.02716055,-0.01485397,-0.03764973,0.026447,0.05543245,-0.05095487,-0.09779096,0.1382363,0.4600981,0.4600981,0.1382363,-0.09779096,-0.05095487,0.05543245,0.026447,-0.03764973,-0.01485397,0.02716055,0.00828756,-0.01994365,-0.004313674,0.01459396,0.001894714,-0.01050689,-0.0004857935,0.007367171,-0.0002584767,-0.004989147,0.0005743159,0.003235877,-0.0006243724,-0.001986177,0.0005308539,0.00113826,-0.0003823631,-0.0005953563,0.0002298438,0.0002790277,-0.0001104587,-0.0001123515,0.00003596189];Codebook_Constants.h1=[0.00003596189,0.0001123515,-0.0001104587,-0.0002790277,0.0002298438,0.0005953563,-0.0003823631,-0.00113826,0.0005308539,0.001986177,-0.0006243724,-0.003235877,0.0005743159,0.004989147,-0.0002584767,-0.007367171,-0.0004857935,0.01050689,0.001894714,-0.01459396,-0.004313674,0.01994365,0.00828756,-0.02716055,-0.01485397,0.03764973,0.026447,-0.05543245,-0.05095487,0.09779096,0.1382363,-0.4600981,0.4600981,-0.1382363,-0.09779096,0.05095487,0.05543245,-0.026447,-0.03764973,0.01485397,0.02716055,-0.00828756,-0.01994365,0.004313674,0.01459396,-0.001894714,-0.01050689,0.0004857935,0.007367171,0.0002584767,-0.004989147,-0.0005743159,0.003235877,0.0006243724,-0.001986177,-0.0005308539,0.00113826,0.0003823631,-0.0005953563,-0.0002298438,0.0002790277,0.0001104587,-0.0001123515,-0.00003596189];var Bits=function(){var h=1024;var c;var g;var e;var a;c=new Array();g=0;e=0;this.getBytes=function(){return c};this.Pack=function(k,j){b(k,j)};function b(k,j){var m=k;while(j>0){var l;l=(m>>(j-1))&1;c[g]|=(l<<(7-e));e++;if(e==8){e=0;g++}j--}}function f(){if(e>0){b(0,1)}while(e!=0){b(1,1)}}this.Write=function(j,m,k){f();var l=d();k=l;ArrayCopy(c,0,j,m,k);return k};this.Reset=function(){c=[];g=0;e=0};function d(){return g+((e>0)?1:0)}};function LbrLspQuant(){}function SubMode(h,e,l,j,f,b,a,d,c,g,k){this.LbrPitch=h;this.ForcedPitchGain=e;this.HaveSubframeGain=l;this.DoubleCodebook=j;this.LsqQuant=f;this.Ltp=b;this.Innovation=a;this.LpcEnhK1=d;this.LpcEnhK2=c;this.CombGain=g;this.BitsPerFrame=k}function NbLspQuant(){this.Quant=function(h,c,d,j){var g;var f,e;var b;var a=new Array();for(var g=0;g<LspQuant.MAX_LSP_SIZE;g++){a[g]=0}for(g=0;g<d;g++){c[g]=h[g]}a[0]=1/(c[1]-c[0]);a[d-1]=1/(c[d-1]-c[d-2]);for(g=1;g<d-1;g++){f=1/((0.15+c[g]-c[g-1])*(0.15+c[g]-c[g-1]));e=1/((0.15+c[g+1]-c[g])*(0.15+c[g+1]-c[g]));a[g]=(f>e)?f:e}for(g=0;g<d;g++){c[g]-=0.25*g+0.25}for(g=0;g<d;g++){c[g]*=256}b=LspQuant.Lsp_quant(c,0,Codebook_Constants.cdbk_nb,Codebook_Constants.NB_CDBK_SIZE,d);j.Pack(b,6);for(g=0;g<d;g++){c[g]*=2}b=LspQuant.Lsp_weight_quant(c,0,a,0,Codebook_Constants.cdbk_nb_low1,Codebook_Constants.NB_CDBK_SIZE_LOW1,5);j.Pack(b,6);for(g=0;g<5;g++){c[g]*=2}b=LspQuant.Lsp_weight_quant(c,0,a,0,Codebook_Constants.cdbk_nb_low2,Codebook_Constants.NB_CDBK_SIZE_LOW2,5);j.Pack(b,6);b=LspQuant.Lsp_weight_quant(c,5,a,5,Codebook_Constants.cdbk_nb_high1,Codebook_Constants.NB_CDBK_SIZE_HIGH1,5);j.Pack(b,6);for(g=5;g<10;g++){c[g]*=2}b=LspQuant.Lsp_weight_quant(c,5,a,5,Codebook_Constants.cdbk_nb_high2,Codebook_Constants.NB_CDBK_SIZE_HIGH2,5);j.Pack(b,6);for(g=0;g<d;g++){c[g]*=0.00097656}for(g=0;g<d;g++){c[g]=h[g]-c[g]}}}var VERY_SMALL=0;var NB_FRAME_SIZE=[5,43,119,160,220,300,364,492,79,1,1,1,1,1,1,1];var NB_SUBMODES=16;var NB_SUBMODE_BITS=4;var exc_gain_quant_scal1=[-0.35,0.05];var exc_gain_quant_scal3=[-2.79475,-1.81066,-1.16985,-0.848119,-0.58719,-0.329818,-0.063266,0.282826];var m_lsp;var filters;var submodes;var submodeID;var first;var frameSize;var subframeSize;var nbSubframes;var windowSize;var lpcSize;var bufSize;var min_pitch;var max_pitch;var gamma1;var gamma2;var lag_factor;var lpc_floor;var preemph;var pre_mem;var frmBuf;var frmIdx;var excBuf;var wbexcBuf;var excIdx;var innov;var lpc;var qlsp;var old_qlsp;var interp_qlsp;var interp_qlpc;var mem_sp;var pi_gain;var awk1,awk2,awk3;var voc_m1;var voc_m2;var voc_mean;var voc_offset;var dtx_enabled;this.m_lsp=new Lsp();this.filters=new Filters();Nbinit();function Nbinit(){submodes=BuildNbSubModes();submodeID=5;NbCodec_init(160,40,10,640)}function NbCodec_init(a,e,d,c){first=1;this.frameSize=a;this.windowSize=a*3/2;this.subframeSize=e;this.nbSubframes=a/e;this.lpcSize=d;this.bufSize=c;min_pitch=17;max_pitch=144;preemph=0;pre_mem=0;gamma1=0.9;gamma2=0.6;lag_factor=0.01;lpc_floor=1.0001;frmBuf=new Array();frmIdx=c-windowSize;excBuf=new Array();wbexcBuf=new Array();for(var b=0;b<c;b++){frmBuf[b]=0;excBuf[b]=0;wbexcBuf[b]=0}excIdx=c-windowSize;innov=new Array();for(var b=0;b<a;b++){innov[b]=0}lpc=new Array();for(var b=0;b<d+1;b++){lpc[b]=0}qlsp=new Array();old_qlsp=new Array();interp_qlsp=new Array();for(var b=0;b<d;b++){qlsp[b]=0;old_qlsp[b]=0;interp_qlsp[b]=0}interp_qlpc=new Array();for(var b=0;b<d+1;b++){interp_qlpc[b]=0}mem_sp=new Array();for(var b=0;b<5*d;b++){mem_sp[b]=0}pi_gain=new Array();for(var b=0;b<nbSubframes;b++){pi_gain[b]=0}awk1=new Array();awk2=new Array();awk3=new Array();for(var b=0;b<d+1;b++){awk1[b]=0;awk2[b]=0;awk3[b]=0}voc_m1=voc_m2=voc_mean=0;voc_offset=0;dtx_enabled=0}function BuildNbSubModes(){var f=new Ltp3Tap(Codebook_Constants.gain_cdbk_nb,7,7);var j=new Ltp3Tap(Codebook_Constants.gain_cdbk_lbr,5,0);var e=new Ltp3Tap(Codebook_Constants.gain_cdbk_lbr,5,7);var a=new Ltp3Tap(Codebook_Constants.gain_cdbk_lbr,5,7);var o=new LtpForcedPitch();var k=new NoiseSearch();var l=new SplitShapeSearch(40,10,4,Codebook_Constants.exc_10_16_table,4,0);var n=new SplitShapeSearch(40,10,4,Codebook_Constants.exc_10_32_table,5,0);var d=new SplitShapeSearch(40,5,8,Codebook_Constants.exc_5_64_table,6,0);var b=new SplitShapeSearch(40,8,5,Codebook_Constants.exc_8_128_table,7,0);var g=new SplitShapeSearch(40,5,8,Codebook_Constants.exc_5_256_table,8,0);var h=new SplitShapeSearch(40,20,2,Codebook_Constants.exc_20_32_table,5,0);var p=new NbLspQuant();var m=new LbrLspQuant();var c=new Array();c[1]=new SubMode(0,1,0,0,m,o,k,0.7,0.7,-1,43);c[2]=new SubMode(0,0,0,0,m,j,l,0.7,0.5,0.55,119);c[3]=new SubMode(-1,0,1,0,m,e,n,0.7,0.55,0.45,160);c[4]=new SubMode(-1,0,1,0,m,a,b,0.7,0.63,0.35,220);c[5]=new SubMode(-1,0,3,0,p,f,d,0.7,0.65,0.25,300);c[6]=new SubMode(-1,0,3,0,p,f,g,0.68,0.65,0.1,364);c[7]=new SubMode(-1,0,3,1,p,f,d,0.65,0.65,-1,492);c[8]=new SubMode(0,1,0,0,m,o,h,0.7,0.5,0.65,79);return c}var FrameSize;var BandMode=function(){};BandMode.Narrow=0;BandMode.Wide=1;BandMode.UltraWide=2;var HighLspQuant=function(){this.Quant=function(d,e,a,f){var c;var g;var b=new Array();for(c=0;c<a;c++){e[c]=d[c]}b[0]=1/(e[1]-e[0]);b[a-1]=1/(e[a-1]-e[a-2]);for(c=1;c<a-1;c++){b[c]=Math.max(1/(e[c]-e[c-1]),1/(e[c+1]-e[c]))}for(c=0;c<a;c++){e[c]-=0.3125*c+0.75}for(c=0;c<a;c++){e[c]*=256}g=LspQuant.Lsp_quant(e,0,Codebook_Constants.high_lsp_cdbk,64,a);f.Pack(g,6);for(c=0;c<a;c++){e[c]*=2}g=LspQuant.Lsp_weight_quant(e,0,b,0,Codebook_Constants.high_lsp_cdbk2,64,a);f.Pack(g,6);for(c=0;c<a;c++){e[c]*=0.0019531}for(c=0;c<a;c++){e[c]=d[c]-e[c]}}};var Lpc=new function(){this.Wld=function(c,k,h,b){var f,d;var a,g=k[0];if(k[0]==0){for(f=0;f<b;f++){h[f]=0}return 0}for(f=0;f<b;f++){a=-k[f+1];for(d=0;d<f;d++){a-=c[d]*k[f-d]}h[f]=a/=g;c[f]=a;for(d=0;d<Math.floor(f/2);d++){var e=c[d];c[d]+=a*c[f-1-d];c[f-1-d]+=a*e}if((f%2)!=0){c[d]+=c[d]*a}g*=1-a*a}return g};this.Autocorr=function(a,c,g,f){var e;var b;while(g-->0){for(b=g,e=0;b<f;b++){e+=a[b]*a[b-g]}c[g]=e}}};function Lsp(){var a;a=new Array();this.Lsp2lpc=function(c,r,s){var h,g;var p,n,d,b;var q,o,l,k=0;var e=s/2;for(h=0;h<4*e+2;h++){a[h]=0}d=1;b=1;for(g=0;g<=s;g++){var f=0;for(h=0;h<e;h++,f+=2){q=h*4;o=q+1;l=o+1;k=l+1;p=d-2*(c[f])*a[q]+a[o];n=b-2*(c[f+1])*a[l]+a[k];a[o]=a[q];a[k]=a[l];a[q]=d;a[l]=b;d=p;b=n}p=d+a[k+1];n=b-a[k+2];r[g]=(p+n)*0.5;a[k+1]=d;a[k+2]=b;d=0;b=0}}}var pw;pw=new Array();function Cheb_poly_eva(g,b,a){var e;var f;var d;var c=a>>1;d=new Array();d[0]=1;d[1]=b;f=g[c]+g[c-1]*b;b*=2;for(e=2;e<=c;e++){d[e]=b*d[e-1]-d[e-2];f+=g[c-e]*d[e]}return f}Lsp.prototype.Enforce_margin=Lsp.Enforce_margin=function(c,a,d){var b;if(c[0]<d){c[0]=d}if(c[a-1]>Math.PI-d){c[a-1]=Math.PI-d}for(b=1;b<a-1;b++){if(c[b]<c[b-1]+d){c[b]=c[b-1]+d}if(c[b]>c[b+1]-d){c[b]=0.5*(c[b]+c[b+1]-d)}}};Lsp.prototype.Lpc2lsp=Lsp.Lpc2lsp=function(G,z,b,f,F){var C,s,x,B,l,g,h=0;var H;var A,w,u,y,v;var c;var d;var n;var E;var r;var o;var t;var e=0;y=1;u=z/2;c=new Array();d=new Array();n=0;E=0;r=n;o=E;d[n++]=1;c[E++]=1;for(A=1;A<=u;A++){d[n++]=G[A]+G[z+1-A]-d[r++];c[E++]=G[A]-G[z+1-A]+c[o++]}n=0;E=0;for(A=0;A<u;A++){d[n]=2*d[n];c[E]=2*c[E];n++;E++}n=0;E=0;g=0;l=1;for(w=0;w<z;w++){if(w%2!=0){t=c}else{t=d}C=Cheb_poly_eva(t,l,z);y=1;while((y==1)&&(g>=-1)){var D=F*(1-0.9*l*l);if(Math.abs(C)<0.2){D*=0.5}g=l-D;s=Cheb_poly_eva(t,g,z);H=s;B=g;if((s*C)<0){e++;x=C;for(v=0;v<=f;v++){h=(l+g)/2;x=Cheb_poly_eva(t,h,z);if(x*C>0){C=x;l=h}else{s=x;g=h}}b[w]=h;l=h;y=0}else{C=H;l=B}}}return e};function Vbr(){var s=5;var e=6000;var q=0.3;var t=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3.5,2.5,2,1.2,0.5,0,-0.5,-0.7,-0.8,-0.9,-1],[10,6.5,5.2,4.5,3.9,3.5,3,2.5,2.3,1.8,1],[11,8.8,7.5,6.5,5,3.9,3.9,3.9,3.5,3,1],[11,11,9.9,9,8,7,6.5,6,5,4,2],[11,11,11,11,9.5,9,8,7,6.5,5,3],[11,11,11,11,11,11,9.5,8.5,8,6.5,4],[11,11,11,11,11,11,11,11,9.8,7.5,5.5],[8,5,3.7,3,2.5,2,1.8,1.5,1,0,0]];var l=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[11,11,9.5,8.5,7.5,6,5,3.9,3,2,1],[11,11,11,11,11,9.5,8.7,7.8,7,6.5,4],[11,11,11,11,11,11,11,11,9.8,7.5,5.5]];var j=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[3.9,2.5,0,0,0,0,0,0,0,0,-1]];var a;var c;var h;var g;var o;var d;var r;var n;var m;var k;var b;var f;c=0;h=1;o=0;a=0.1;r=0;d=0;n=0;k=0.05*Math.pow(e,q);b=0.05;m=k/b;f=0;g=new Array();for(var p=0;p<s;p++){g[p]=Math.log(e)}}var SB_FRAME_SIZE=[4,36,112,192,352,-1,-1,-1];var SB_SUBMODES=8;var SB_SUBMODE_BITS=3;var QMF_ORDER=64;var fullFrameSize;var foldingGain;var high;var y0,y1;var x0d;var g0_mem,g1_mem;var wbmodes;var wbmodeID;function SbCodec_init(a,f,e,c,d){wbmodes=BuildWbSubModes();wbmodeID=3;fullFrameSize=2*a;foldingGain=d;lag_factor=0.002;high=new Array();y0=new Array();y1=new Array();x0d=new Array();g0_mem=new Array();g1_mem=new Array();for(var b=0;b<fullFrameSize;b++){high[b]=0;y0[b]=0;y1[b]=0}for(var b=0;b<a;b++){x0d[b]=0}for(var b=0;b<QMF_ORDER;b++){g0_mem[b]=0;g1_mem[b]=0}}function BuildWbSubModes(){var a=new HighLspQuant();var d=new SplitShapeSearch(40,10,4,Codebook_Constants.hexc_10_32_table,5,0);var b=new SplitShapeSearch(40,8,5,Codebook_Constants.hexc_table,7,1);var c=new Array();c[1]=new SubMode(0,0,1,0,a,null,null,0.75,0.75,-1,36);c[2]=new SubMode(0,0,1,0,a,null,d,0.85,0.6,-1,112);c[3]=new SubMode(0,0,1,0,a,null,b,0.75,0.7,-1,192);c[4]=new SubMode(0,0,1,1,a,null,b,0.75,0.75,-1,352);return c}function BuildUwbSubModes(){var a=new HighLspQuant();var b=new Array();b[1]=new SubMode(0,0,1,0,a,null,null,0.75,0.75,-1,2);return b}function NbEncoder(){var p=[1,8,2,3,3,4,4,5,5,6,7];var H;var x;var k;var z;var q;var u;var b;var E;var I;var D;var h;var F;var t;var K;var g;var o;var m;var C;var w;var n;var y;var l;var G;var r;var A;var e;var J;var c;var v;var f;var s;var j;var a;var d;B(160,40,10,640);function B(L,P,O,N){NbCodec_init(L,P,O,N);A=3;e=0;vad_enabled=0;J=0;c=8;submodeSelect=5;k=0;H=1;z=new Array();q=N-windowSize;u=new Array();b=N-windowSize;for(var M=0;M<N;M++){z[M]=0;u[M]=0}E=Window(windowSize,P);h=LagWindow(O,lag_factor);D=new Array();for(var M=0;M<O+1;M++){D[M]=0}I=new Array();for(var M=0;M<windowSize;M++){I[M]=0}g=new Array();interp_qlpc=new Array();o=new Array();m=new Array();for(var M=0;M<O+1;M++){g[M]=0;interp_qlpc[M]=0;o[M]=0;m[M]=0}F=new Array();qlsp=new Array();t=new Array();old_qlsp=new Array();K=new Array();interp_qlsp=new Array();for(var M=0;M<O;M++){F[M]=0;qlsp[M]=0;t[M]=0;old_qlsp[M]=0;K[M]=0;interp_qlsp[M]=0}C=new Array();mem_sp=new Array();w=new Array();n=new Array();y=new Array();for(var M=0;M<O;M++){C[M]=0;mem_sp[M]=0;w[M]=0;n[M]=0;y[M]=0}l=new Vbr();G=0;j=0;a=8000;awk1=new Array();awk2=new Array();awk3=new Array();for(var M=0;M<O+1;M++){awk1[M]=0;awk2[M]=0;awk3[M]=0}r=new Array();for(var M=0;M<40;M++){r[M]=0}x=new Array();for(var M=0;M<nbSubframes;M++){x[M]=0}}this.Encode=function(ag,ad){var ai;var ap,am,V;var W;var Q;ArrayCopy(frmBuf,frameSize,frmBuf,0,bufSize-frameSize);frmBuf[bufSize-frameSize]=ad[0]-preemph*pre_mem;for(ai=1;ai<frameSize;ai++){frmBuf[bufSize-frameSize+ai]=ad[ai]-preemph*ad[ai-1]}pre_mem=ad[frameSize-1];ArrayCopy(z,frameSize,z,0,bufSize-frameSize);ArrayCopy(excBuf,frameSize,excBuf,0,bufSize-frameSize);ArrayCopy(u,frameSize,u,0,bufSize-frameSize);for(ai=0;ai<windowSize;ai++){I[ai]=frmBuf[ai+frmIdx]*E[ai]}Lpc.Autocorr(I,D,lpcSize+1,windowSize);D[0]+=10;D[0]*=lpc_floor;for(ai=0;ai<lpcSize+1;ai++){D[ai]*=h[ai]}Lpc.Wld(lpc,D,C,lpcSize);ArrayCopy(lpc,0,lpc,1,lpcSize);lpc[0]=1;var T=Lsp.Lpc2lsp(lpc,lpcSize,F,15,0.2);if(T==lpcSize){for(ai=0;ai<lpcSize;ai++){F[ai]=Math.acos(F[ai])}}else{if(A>1){T=Lsp.Lpc2lsp(lpc,lpcSize,F,11,0.05)}if(T==lpcSize){for(ai=0;ai<lpcSize;ai++){F[ai]=Math.acos(F[ai])}}else{for(ai=0;ai<lpcSize;ai++){F[ai]=t[ai]}}}var L=0;for(ai=0;ai<lpcSize;ai++){L+=(t[ai]-F[ai])*(t[ai]-F[ai])}var O;var Y;var af;if(first!=0){for(ai=0;ai<lpcSize;ai++){K[ai]=F[ai]}}else{for(ai=0;ai<lpcSize;ai++){K[ai]=0.375*t[ai]+0.625*F[ai]}}Lsp.Enforce_margin(K,lpcSize,0.002);for(ai=0;ai<lpcSize;ai++){K[ai]=Math.cos(K[ai])}m_lsp.Lsp2lpc(K,g,lpcSize);Y=0;af=0;Filters.Fir_mem2(frmBuf,frmIdx,g,excBuf,excIdx,frameSize,lpcSize,y);O=0;for(ai=0;ai<frameSize;ai++){O+=excBuf[excIdx+ai]*excBuf[excIdx+ai]}O=Math.sqrt(1+O/frameSize);v=-1;ag.Pack(0,1);ag.Pack(submodeID,NB_SUBMODE_BITS);if(first!=0){for(ai=0;ai<lpcSize;ai++){t[ai]=F[ai]}}submodes[submodeID].LsqQuant.Quant(F,qlsp,lpcSize,ag);if(submodes[submodeID].LbrPitch!=-1){ag.Pack(Y-min_pitch,7)}var U=Math.floor(0.5+3.5*Math.log(O));if(U<0){U=0}if(U>31){U=31}O=Math.exp(U/3.5);ag.Pack(U,5);if(first!=0){for(ai=0;ai<lpcSize;ai++){old_qlsp[ai]=qlsp[ai]}}ap=new Array();am=new Array();W=new Array();for(var ai=0;ai<subframeSize;ai++){ap[ai]=0;am[ai]=0;W[ai]=0}V=new Array();for(var ai=0;ai<lpcSize;ai++){V[ai]=0}Q=new Array();for(var ai=0;ai<frameSize;ai++){Q[ai]=0}for(ai=0;ai<frameSize;ai++){Q[ai]=frmBuf[frmIdx+ai]}for(var X=0;X<nbSubframes;X++){var al;var S;var ah,ac,ab,N;var ao;S=subframeSize*X;ah=frmIdx+S;ab=excIdx+S;ac=b+S;N=q+S;al=(1+X)/nbSubframes;for(ai=0;ai<lpcSize;ai++){K[ai]=(1-al)*t[ai]+al*F[ai]}for(ai=0;ai<lpcSize;ai++){interp_qlsp[ai]=(1-al)*old_qlsp[ai]+al*qlsp[ai]}Lsp.Enforce_margin(K,lpcSize,0.002);Lsp.Enforce_margin(interp_qlsp,lpcSize,0.002);for(ai=0;ai<lpcSize;ai++){K[ai]=Math.cos(K[ai])}m_lsp.Lsp2lpc(K,g,lpcSize);for(ai=0;ai<lpcSize;ai++){interp_qlsp[ai]=Math.cos(interp_qlsp[ai])}m_lsp.Lsp2lpc(interp_qlsp,interp_qlpc,lpcSize);al=1;pi_gain[X]=0;for(ai=0;ai<=lpcSize;ai++){pi_gain[X]+=al*interp_qlpc[ai];al=-al}Filters.Bw_lpc(gamma1,g,o,lpcSize);if(gamma2>=0){Filters.Bw_lpc(gamma2,g,m,lpcSize)}else{m[0]=1;m[1]=-preemph;for(ai=2;ai<=lpcSize;ai++){m[ai]=0}}for(ai=0;ai<subframeSize;ai++){excBuf[ab+ai]=0}excBuf[ab]=1;Filters.Syn_percep_zero(excBuf,ab,interp_qlpc,o,m,W,subframeSize,lpcSize);for(ai=0;ai<subframeSize;ai++){excBuf[ab+ai]=0}for(ai=0;ai<subframeSize;ai++){z[N+ai]=0}for(ai=0;ai<lpcSize;ai++){V[ai]=mem_sp[ai]}Filters.Iir_mem2(excBuf,ab,interp_qlpc,excBuf,ab,subframeSize,lpcSize,V);for(ai=0;ai<lpcSize;ai++){V[ai]=w[ai]}Filters.Filter_mem2_b(excBuf,ab,o,m,ap,0,subframeSize,lpcSize,V,0);for(ai=0;ai<lpcSize;ai++){V[ai]=w[ai]}Filters.Filter_mem2_b(frmBuf,ah,o,m,u,ac,subframeSize,lpcSize,V,0);for(ai=0;ai<subframeSize;ai++){am[ai]=u[ac+ai]-ap[ai]}for(ai=0;ai<subframeSize;ai++){excBuf[ab+ai]=z[N+ai]=0}var M,P;M=min_pitch;P=max_pitch;if(H!=0&&P>S){P=S}ao=submodes[submodeID].Ltp.Quant(am,u,ac,interp_qlpc,o,m,excBuf,ab,M,P,af,lpcSize,subframeSize,ag,z,N,W,A);x[X]=ao;Filters.Syn_percep_zero(excBuf,ab,interp_qlpc,o,m,ap,subframeSize,lpcSize);for(ai=0;ai<subframeSize;ai++){am[ai]-=ap[ai]}var ak;var aj=0,aa;ak=X*subframeSize;for(ai=0;ai<subframeSize;ai++){innov[ak+ai]=0}Filters.Residue_percep_zero(am,0,interp_qlpc,o,m,I,subframeSize,lpcSize);for(ai=0;ai<subframeSize;ai++){aj+=I[ai]*I[ai]}aj=Math.sqrt(0.1+aj/subframeSize);aj/=O;if(submodes[submodeID].HaveSubframeGain!=0){var an;aj=Math.log(aj);if(submodes[submodeID].HaveSubframeGain==3){an=VQ.Index_s(aj,exc_gain_quant_scal3,8);ag.Pack(an,3);aj=exc_gain_quant_scal3[an]}else{an=VQ.Index_s(aj,exc_gain_quant_scal1,2);ag.Pack(an,1);aj=exc_gain_quant_scal1[an]}aj=Math.exp(aj)}else{aj=1}aj*=O;aa=1/aj;for(ai=0;ai<subframeSize;ai++){am[ai]*=aa}submodes[submodeID].Innovation.Quantify(am,interp_qlpc,o,m,lpcSize,subframeSize,innov,ak,W,ag,A);for(ai=0;ai<subframeSize;ai++){innov[ak+ai]*=aj}for(ai=0;ai<subframeSize;ai++){excBuf[ab+ai]+=innov[ak+ai]}for(ai=0;ai<subframeSize;ai++){am[ai]*=aj}for(ai=0;ai<lpcSize;ai++){V[ai]=mem_sp[ai]}Filters.Iir_mem2(excBuf,ab,interp_qlpc,frmBuf,ah,subframeSize,lpcSize,mem_sp);Filters.Filter_mem2_b(frmBuf,ah,o,m,u,ac,subframeSize,lpcSize,w,0);for(ai=0;ai<subframeSize;ai++){z[N+ai]=excBuf[ab+ai]}}if(submodeID>=1){for(ai=0;ai<lpcSize;ai++){t[ai]=F[ai]}for(ai=0;ai<lpcSize;ai++){old_qlsp[ai]=qlsp[ai]}}first=0;var Z=0,R=0;var ae;for(ai=0;ai<frameSize;ai++){Z+=frmBuf[frmIdx+ai]*frmBuf[frmIdx+ai];R+=(frmBuf[frmIdx+ai]-Q[ai])*(frmBuf[frmIdx+ai]-Q[ai])}ae=10*Math.log((Z+1)/(R+1));ad[0]=frmBuf[frmIdx]+preemph*k;for(ai=1;ai<frameSize;ai++){ad[ai]=frmBuf[frmIdx+ai]+preemph*ad[ai-1]}k=ad[frameSize-1];if(submodes[submodeID].constructor===NoiseSearch||submodeID==0){H=1}else{H=0}return 1};this.getPiGain=function(){var L=[];ArrayCopy(pi_gain,0,L,0,pi_gain.length);return L};this.getExc=function(){var M=new Array();for(var L=0;L<frameSize;L++){M[L]=0}ArrayCopy(excBuf,excIdx,M,0,frameSize);return M};this.getInnov=function(){return innov};this.getMode=function(){if(d<0){d=0}var L=submodeID;if(d!=undefined){submodeID=submodeSelect=d}return L}}function Window(a,f){var b;var e=f*7/2;var d=f*5/2;var c=new Array();for(b=0;b<e;b++){c[b]=0.54-0.46*Math.cos(Math.PI*b/e)}for(b=0;b<d;b++){c[e+b]=0.54+0.46*Math.cos(Math.PI*b/d)}return c}function LagWindow(d,b){var c=new Array();for(var a=0;a<d+1;a++){c[a]=Math.exp(-0.5*(2*Math.PI*b*a)*(2*Math.PI*b*a))}return c}function SbEncoder(K){var r=[1,8,2,3,4,5,5,6,6,7,7];var P=[1,1,1,1,1,1,2,2,3,3,4];var N=[0,1,1,1,1,1,1,1,1,1,1];var C;var e;var T;var u;var x;var H;var a;var R;var l;var M;var O;var w;var Q;var S;var aa;var h;var q;var p;var m;var E;var W;var n;var v;var F;var A,z;var d;var U,D;var G;var j;var o;var y;var V;var ab;var I;var f;var X;var Y;var c;var B;var g;var s;var k;var b;var J;var t;if(K){Uwbinit()}else{Z()}function Z(){C=new NbEncoder();L(160,40,8,640,0.9);F=false;W=5;b=16000}function L(ac,ah,ag,ae,af){SbCodec_init(ac,ah,ag,ae,af);t=ag;I=3;f=0;X=0;Y=0;c=8;J=wbmodeID;e=[];T=[];u=[];x=[];H=[];a=[];Q=[];n=[];v=[];A=[];z=[];d=[];U=[];D=[];G=[];o=[];for(var ad=0;ad<5*t;ad++){o[ad]=0}for(var ad=0;ad<t+1;ad++){G[ad]=0}for(var ad=0;ad<fullFrameSize;ad++){v[ad]=0;A[ad]=0;z[ad]=0}for(var ad=0;ad<t;ad++){Q[ad]=0;n[ad]=0}for(var ad=0;ad<ac;ad++){e[ad]=0;d[ad]=0}for(var ad=0;ad<QMF_ORDER;ad++){T[ad]=0;U[ad]=0;D[ad]=0}for(var ad=0;ad<windowSize;ad++){u[ad]=0}for(var ad=0;ad<ac;ad++){x[ad]=0;H[ad]=0}for(var ad=0;ad<ah;ad++){a[ad]=0}R=Window(windowSize,ah);l=LagWindow(t,lag_factor);M=[];O=[];w=[];S=[];aa=[];h=[];q=[];p=[];m=[];E=[];V=[];y=[];ab=[];for(var ad=0;ad<t;ad++){M[ad]=0;w[ad]=0;S[ad]=0;m[ad]=0;E[ad]=0;y[ad]=0;V[ad]=0}for(var ad=0;ad<t+1;ad++){O[ad]=0;q[ad]=0;p[ad]=0;ab[ad]=0}k=0;j=1}this.Encode=function(ax,aw){var ay;var am,an;var aD,al,ae;var ai;wbmodeID=1;Filters.Qmf_decomp(aw,Codebook_Constants.h0,d,e,fullFrameSize,QMF_ORDER,T);C.Encode(ax,d);for(ay=0;ay<windowSize-frameSize;ay++){v[ay]=v[frameSize+ay]}for(ay=0;ay<frameSize;ay++){v[windowSize-frameSize+ay]=e[ay]}ArrayCopy(wbexcBuf,frameSize,wbexcBuf,0,bufSize-frameSize);aD=C.getPiGain();al=C.getExc();ae=C.getInnov();var aq=C.getMode();if(aq==0){ai=1}else{ai=0}for(ay=0;ay<windowSize;ay++){u[ay]=v[ay]*R[ay]}Lpc.Autocorr(u,O,t+1,windowSize);O[0]+=1;O[0]*=lpc_floor;for(ay=0;ay<t+1;ay++){O[ay]*=l[ay]}Lpc.Wld(lpc,O,M,t);ArrayCopy(lpc,0,lpc,1,t);var ak=Lsp.Lpc2lsp(lpc,t,w,15,0.2);if(ak!=t){ak=Lsp.Lpc2lsp(lpc,t,w,11,0.02);if(ak!=t){for(ay=0;ay<t;ay++){w[ay]=Math.cos(Math.PI*((ay+1))/(t+1))}}}for(ay=0;ay<t;ay++){w[ay]=Math.acos(w[ay])}var ac=0;for(ay=0;ay<t;ay++){ac+=(S[ay]-w[ay])*(S[ay]-w[ay])}ax.Pack(1,1);if(ai!=0){ax.Pack(0,SB_SUBMODE_BITS)}else{ax.Pack(wbmodeID,SB_SUBMODE_BITS)}wbmodes[wbmodeID].LsqQuant.Quant(w,Q,t,ax);if(j!=0){for(ay=0;ay<t;ay++){S[ay]=w[ay]}for(ay=0;ay<t;ay++){n[ay]=Q[ay]}}am=new Array();an=new Array();innov=new Array();for(var ay=0;ay<lpcSize;ay++){am[ay]=0}for(var ay=0;ay<lpcSize;ay++){an[ay]=0;innov[ay]=0}for(var ao=0;ao<nbSubframes;ao++){var aC,ag;var av,az,au,at;var aj;var ap,ar,af=0,ad=0;var ah;aj=subframeSize*ao;az=aj;av=excIdx+aj;at=aj;au=aj;aC=(1+ao)/nbSubframes;for(ay=0;ay<t;ay++){V[ay]=(1-aC)*S[ay]+aC*w[ay]}for(ay=0;ay<t;ay++){y[ay]=(1-aC)*n[ay]+aC*Q[ay]}Lsp.Enforce_margin(V,t,0.05);Lsp.Enforce_margin(y,t,0.05);for(ay=0;ay<t;ay++){V[ay]=Math.cos(V[ay])}for(ay=0;ay<t;ay++){y[ay]=Math.cos(y[ay])}m_lsp.Lsp2lpc(V,ab,t);m_lsp.Lsp2lpc(y,G,t);Filters.Bw_lpc(gamma1,ab,q,t);Filters.Bw_lpc(gamma2,ab,p,t);ap=ar=0;aC=1;pi_gain[ao]=0;for(ay=0;ay<=t;ay++){ar+=aC*G[ay];aC=-aC;pi_gain[ao]+=G[ay]}ap=aD[ao];ap=1/(Math.abs(ap)+0.01);ar=1/(Math.abs(ar)+0.01);ag=Math.abs(0.01+ar)/(0.01+Math.abs(ap));ah=(ag<5)?1:0;ah=0;Filters.Fir_mem2(v,az,G,wbexcBuf,av,subframeSize,t,m);for(ay=0;ay<subframeSize;ay++){af+=wbexcBuf[av+ay]*wbexcBuf[av+ay]}if(wbmodes[wbmodeID].Innovation==null){var aB;for(ay=0;ay<subframeSize;ay++){ad+=ae[aj+ay]*ae[aj+ay]}aB=af/(0.01+ad);aB=Math.sqrt(aB);aB*=ag;var aA=Math.floor(0.5+10+8*Math.log((aB+0.0001)));if(aA<0){aA=0}if(aA>31){aA=31}ax.Pack(aA,5);aB=0.1*Math.exp(aA/9.4);aB/=ag}for(ay=0;ay<lpcSize;ay++){am[ay]=o[ay]}Filters.Iir_mem2(wbexcBuf,av,G,v,az,subframeSize,t,o);Filters.Filter_mem2_b(v,az,q,p,x,au,subframeSize,t,E,0)}filters.Fir_mem_up(d,Codebook_Constants.h0,A,fullFrameSize,QMF_ORDER,U);filters.Fir_mem_up(v,Codebook_Constants.h1,z,fullFrameSize,QMF_ORDER,D);for(ay=0;ay<fullFrameSize;ay++){aw[ay]=2*(A[ay]-z[ay])}for(ay=0;ay<t;ay++){S[ay]=w[ay]}for(ay=0;ay<t;ay++){n[ay]=Q[ay]}j=0;return 1}}function ArrayCopy(f,a,g,b,e){var c=f.slice(a,a+e);for(var d=0;d<e;d++){g[b+d]=c[d]}};'], {
    type: "text/javascript"
  }));
};

var speexPath = speexWorkCode();
var recordPath = recordWorkerCode();

var AudioProc =
/*#__PURE__*/
function () {
  function AudioProc(audioProc, volumeProc, saveWavProc) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AudioProc);

    this.speexWorker = new Worker(speexPath);
    this.recorderWorker = new Worker(recordPath);
    this.recording = false;
    this.audioCallback = audioProc;

    if (typeof saveWavProc === 'function') {
      this.saveWave = saveWavProc;
    }

    this.audioStream = null;
    this.isSpeex = false;
    this.audioNode = {
      "source": null,
      "scriptNode": null
    };
    var that = this;

    this.speexWorker.onmessage = function (e) {
      if (that.recording === false) return;

      if (e.data.command === "encode") {
        var buffer = e.data.buffer;
        var result = new Int8Array(buffer);
        that.audioCallback(result);
      }
    };

    this.recorderWorker.onmessage = function (e) {
      if (typeof volumeProc === 'function') {
        volumeProc(e.data.volume);
      }

      var buffer = e.data.buffer;
      var data = new Int16Array(buffer);

      if (that.saveWave) {
        that.saveWave(data);
      } // 是否speex压缩


      if (that.isSpeex) {
        var output = new Int8Array();
        that.speexWorker.postMessage({
          command: 'encode',
          inData: data,
          inOffset: 0,
          inCount: data.length,
          outData: output,
          outOffset: 0
        });
      } else {
        if (that.recording === false) {
          return;
        }

        var result = new Int8Array(data.buffer);
        that.audioCallback(result);
      }
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AudioProc, [{
    key: "init",
    value: function init() {
      var that = this;
      var audioCtx = new window.AudioContext();
      console.log(webrtc_adapter__WEBPACK_IMPORTED_MODULE_2___default.a.browserDetails.browser);
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(function (stream) {
        that.audioStream = stream;
        that.audioNode.source = audioCtx.createMediaStreamSource(stream);
        that.audioNode.scriptNode = audioCtx.createScriptProcessor(0, 1, 1);
        that.recorderWorker.postMessage({
          command: 'init',
          config: {
            sampleRate: audioCtx.sampleRate,
            outputBufferLength: that.audioNode.scriptNode.bufferSize
          }
        });

        that.audioNode.scriptNode.onaudioprocess = function (e) {
          if (!that.recording) {
            console.log('exit record');
            return;
          }

          that.sendData(e.inputBuffer.getChannelData(0));
        };

        that.audioNode.source.connect(that.audioNode.scriptNode);
        that.audioNode.scriptNode.connect(audioCtx.destination);
      })["catch"](function (e) {
        console.log(e.name + "," + e.message);
        alert("getUserMedia error: " + e.name);
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.speexWorker.postMessage({
        command: 'init'
      });
      this.recording = true;
    }
  }, {
    key: "setSpeex",
    value: function setSpeex(isSpeex) {
      this.isSpeex = isSpeex;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.recorderWorker.postMessage({
        command: 'reset'
      });
    }
  }, {
    key: "sendData",
    value: function sendData(data) {
      this.recorderWorker.postMessage({
        command: 'record',
        buffer: data
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.recording = false;

      if (this.audioStream != null) {
        var tracks = this.audioStream.getAudioTracks();

        for (var i = 0; i < tracks.length; i++) {
          tracks[i].stop();
        }

        this.audioStream = null;
      }

      if (this.audioNode.source != null) {
        this.audioNode.source.disconnect();
        this.audioNode.scriptNode.disconnect();
        this.audioNode.source = null;
        this.audioNode.scriptNode = null;
      }
    }
  }, {
    key: "kill",
    value: function kill() {
      this.stop();
      this.speexWorker.terminate();
      this.recorderWorker.terminate();
    }
  }]);

  return AudioProc;
}();

/* harmony default export */ __webpack_exports__["default"] = (AudioProc);

/***/ }),

/***/ "./src/iat/iat.js":
/*!************************!*\
  !*** ./src/iat/iat.js ***!
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
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_wsnet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/wsnet */ "./src/utils/wsnet.js");
/* harmony import */ var _audioProc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audioProc */ "./src/iat/audioProc.js");
/* harmony import */ var _iat_cmd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iat_cmd */ "./src/iat/iat_cmd.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.js");









var recorderStatus = {
  "idle": "idle",
  //空闲
  "sessionBegin": "ssb",
  //session begin 会话开始
  "audioWrite": "auw",
  //audio write 写入音频
  "getResult": "grs",
  //get result 获取结果
  "sessionEnd": "sse" //session end 会话结束

};

var Iat_ =
/*#__PURE__*/
function () {
  function Iat_() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Iat_);

    this.url = null;
    this.audioProc = null;
    this.iatState = "";
    this.serverParam = null;
    this.session = {
      id: null,
      synId: 0,
      audiostatus: 1
    };
    this.frameCnt = 0;
    this.frameSend = 6; // 默认6帧发送一次

    this.recorderBuffer = [];
    this.net = null;
    this.bAuth = false;
    this.Auth = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Iat_, [{
    key: "onStart",
    value: function onStart(callback) {
      if (typeof callback === 'function') {
        this.onStart = callback;
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
    key: "onEnd",
    value: function onEnd(callback) {
      if (typeof callback === 'function') {
        this.onEnd = callback;
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
    key: "start",
    value: function start(url, params, isSpeex, volumeCallback, bAuth, saveWaveCallback) {
      var _this = this;

      if (this.audioProc == null) {
        // 启动麦克风
        this.audioProc = new _audioProc__WEBPACK_IMPORTED_MODULE_5__["default"](this.audioSender.bind(this), volumeCallback, saveWaveCallback);
      }

      this.audioProc.init(); // 设置是否压缩音频

      this.audioProc.setSpeex(isSpeex);

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(params) === 'object') {
        this.serverParam = params;
        this.serverParam.rse = "utf8";
        this.serverParam.auf = 'audio/L16;rate=16000';
        this.serverParam.aue = isSpeex ? 'speex-wb' : 'raw';
      } // init websocket


      var wsCallBack = {
        "onclose": function onclose(e) {
          console.log('websocket close');

          _this.abortSession();
        },
        "onopen": function onopen() {
          _this.net.send(_iat_cmd__WEBPACK_IMPORTED_MODULE_6__["sessionBegin"](_this.serverParam));
        },
        "onmessage": function onmessage(obj) {
          var json = JSON.parse(obj.data);

          _this.processServerMsg.call(_this, json);
        },
        "onerror": function onerror(e) {
          alert('connect server failed: ' + e);
        },
        "defaultOp": function defaultOp() {
          _this.net.send(_iat_cmd__WEBPACK_IMPORTED_MODULE_6__["sessionBegin"](_this.serverParam));
        }
      };
      this.bAuth = bAuth === true ? bAuth : false;

      if (this.bAuth) {
        var that = this;

        if (!this.Auth) {
          this.Auth = new _utils_auth__WEBPACK_IMPORTED_MODULE_7__["default"]('iat', function (e) {
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

            if (that.net == null || that.url !== realUrl) {
              if (that.net != null) {
                that.net.disconnect();
              }

              that.net = new _utils_wsnet__WEBPACK_IMPORTED_MODULE_4__["default"]();
              that.url = realUrl;
            }

            try {
              that.net.connect(that.url, wsCallBack);
            } catch (e) {
              alert(e);

              if (that.onError) {
                that.onError({
                  errCode: -1,
                  msg: e
                });
              }

              that.net = null;
            }
          });
        }

        this.Auth.authStart(url, this.serverParam);
      } else {
        if (this.net == null || this.url !== url) {
          if (this.net != null) {
            this.net.disconnect();
          }

          this.net = new _utils_wsnet__WEBPACK_IMPORTED_MODULE_4__["default"]();
          this.url = url;
        }

        try {
          this.net.connect(url, wsCallBack);
        } catch (e) {
          alert(e);

          if (this.onError) {
            this.onError({
              errCode: -1,
              msg: e
            });
          }

          this.net = null;
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.getResult();
    }
  }, {
    key: "cancle",
    value: function cancle() {
      this.abortSession();

      if (this.onEnd) {
        this.onEnd();
      }
    }
  }, {
    key: "kill",
    value: function kill() {
      this.cancle();
      this.audioProc.kill();
      this.audioProc = null;
    }
  }, {
    key: "setFrameCount",
    value: function setFrameCount(count) {
      this.frameSend = count;
    }
  }, {
    key: "sendData",
    value: function sendData() {
      if (this.recorderBuffer.length === 0) {
        return;
      }

      var output = this.recorderBuffer.splice(0, this.recorderBuffer.length);
      var str = "";
      var audioLength = 0;

      for (var i = 0; i < output.length; i++) {
        audioLength += output[i].length;

        for (var j = 0; j < output[i].length; j++) {
          str += String.fromCharCode(output[i][j]);
        }
      }

      this.session.synId++;
      var data = {
        "synid": "" + this.session.synId,
        "audiolen": "" + audioLength,
        "data": js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].btoa(str)
      };

      if (this.session.audiostatus === 1) {
        this.session.audiostatus = 2;
        data.audioStatus = "1";
      } else {
        data.audioStatus = "2";
      }

      this.net.send(_iat_cmd__WEBPACK_IMPORTED_MODULE_6__["audioWrite"](this.session.id, data, this.serverParam.appid));
      this.frameCnt = 0;
    }
  }, {
    key: "audioSender",
    value: function audioSender(data) {
      if (this.iatState === recorderStatus.getResult || this.session.id == null) return;
      this.iatState = recorderStatus.audioWrite;

      if (this.frameCnt < this.frameSend) {
        this.recorderBuffer.push(new Uint8Array(data.buffer));
        this.frameCnt++;
        return;
      }

      this.sendData();
      this.recorderBuffer.push(new Uint8Array(data.buffer));
      this.frameCnt++;
    }
  }, {
    key: "sendEnd",
    value: function sendEnd() {
      this.session.synId++;
      var data = {
        "synid": "" + this.session.synId,
        "audiolen": "0",
        "audiostatu": "4",
        "data": ""
      };
      this.net.send(_iat_cmd__WEBPACK_IMPORTED_MODULE_6__["audioWrite"](this.session.id, data, this.serverParam.appid));
      this.session.synId = 0;
      this.session.audiostatus = 1;
      this.recorderBuffer = [];
    }
  }, {
    key: "getResult",
    value: function getResult() {
      this.audioProc.stop();

      if (this.iatState === recorderStatus.audioWrite) {
        // 将缓冲区内的音频全部发送后,再发送表示音频结束标志
        this.sendData();
        this.sendEnd();
        this.iatState = recorderStatus.getResult;
      }

      if (this.iatState === recorderStatus.getResult) {
        this.net.send(_iat_cmd__WEBPACK_IMPORTED_MODULE_6__["getResult"](this.session.id, this.serverParam.appid));
      } else {
        this.abortSession();
      }
    }
  }, {
    key: "sessionEnd",
    value: function sessionEnd() {
      if (this.iatState === recorderStatus.sessionEnd && this.session.id != null) {
        this.net.send(_iat_cmd__WEBPACK_IMPORTED_MODULE_6__["sessionEnd"](this.session.id, this.serverParam.appid));
      }

      this.iatState = recorderStatus.idle;
    }
  }, {
    key: "abortSession",
    value: function abortSession() {
      this.audioProc.stop();
      this.iatState = recorderStatus.sessionEnd;
      this.sessionEnd();

      if (this.Auth) {
        this.Auth.authEnd();
        this.bAuth = false;
      }
    }
  }, {
    key: "processServerMsg",
    value: function processServerMsg(jsonObj) {
      var result = jsonObj.result;

      if (result == null) {
        console.log("result null");
        return;
      }

      console.log('[' + _utils_tools__WEBPACK_IMPORTED_MODULE_8__["__getDateTimeString"]() + ']:', jsonObj);

      switch (result.cmd) {
        case "ssb":
          {
            if (result.ret === 0) {
              this.session.id = result.sid; // 获取到sid, 才开启录音

              this.audioProc.reset();
              this.audioProc.start();

              if (this.onStart) {
                this.onStart();
              }
            } else {
              this.abortSession();

              if (this.onError) {
                this.onError({
                  errCode: result.ret,
                  msg: 'ssb error'
                });
              }
            }

            break;
          }

        case "auw":
          {
            var ret = result.ret;

            if (ret !== 0) {
              this.abortSession();

              if (this.onError) {
                this.onError({
                  errCode: ret,
                  msg: 'auw error'
                });
              }

              return;
            }

            var recStatus = result.recStatus;
            var iatrst = result.iatrst;
            var iatpgs = result.pgs;
            var isEnd = recStatus === 5;

            if (!isEnd) {
              if (recStatus === 0) {
                if (this.onMessage) {
                  this.onMessage({
                    end: false,
                    pgs: iatpgs,
                    result: iatrst
                  });
                }
              }
            } else {
              if (this.onMessage) {
                this.onMessage({
                  end: true,
                  pgs: iatpgs,
                  result: iatrst
                });
              }

              this.abortSession();
            }

            break;
          }

        case "grs":
          {
            if (this.iatState !== recorderStatus.getResult) {
              console.log('get reuslt error');
              return;
            }

            var _ret = result.ret;

            if (_ret !== 0) {
              this.abortSession();

              if (this.onError) {
                this.onError({
                  errCode: _ret,
                  msg: 'grs error'
                });
              }

              return;
            }

            var rltStatus = result.resultStatus;
            var _iatrst = result.iatrst;
            var _iatpgs = result.pgs;

            var _isEnd = rltStatus === 5;

            if (this.onMessage) {
              this.onMessage({
                end: _isEnd,
                pgs: _iatpgs,
                result: _iatrst
              });
            }

            if (!_isEnd) {
              this.getResult();
            } else {
              this.abortSession();
            }

            break;
          }

        case "sse":
          {
            this.session.id = null;

            if (this.onEnd) {
              this.onEnd();
            }

            break;
          }

        default:
          {
            if (this.onError) {
              this.onError({
                errCode: result.ret
              });
            }

            this.abortSession();
            break;
          }
      }
    }
  }]);

  return Iat_;
}();

/* harmony default export */ __webpack_exports__["default"] = (Iat_);

/***/ }),

/***/ "./src/iat/iat_cmd.js":
/*!****************************!*\
  !*** ./src/iat/iat_cmd.js ***!
  \****************************/
/*! exports provided: sessionBegin, audioWrite, getResult, sessionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionBegin", function() { return sessionBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "audioWrite", function() { return audioWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResult", function() { return getResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionEnd", function() { return sessionEnd; });
var base = {
  "jsonrpc": "2.0",
  "method": "request",
  "id": 1
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function checkAppid(appid) {
  if (appid != null && appid != undefined) {
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
  data.svc = "iat";
  msg.params = data;
  return msg;
}
function audioWrite(sessionId, data, appid) {
  var msg = clone(base);
  var param = clone(data);
  param.sid = sessionId;
  param.appid = checkAppid(appid);
  param.cmd = "auw";
  param.svc = "iat";
  msg.params = param;
  return msg;
}
function getResult(sessionId, appid) {
  var msg = clone(base);
  var data = {
    "sid": sessionId,
    "appid": checkAppid(appid),
    "svc": "iat",
    "cmd": "grs"
  };
  msg.params = data;
  return msg;
}
function sessionEnd(sessionId, appid) {
  var msg = clone(base);
  var data = {
    "sid": sessionId,
    "appid": checkAppid(appid),
    "svc": "iat",
    "cmd": "sse"
  };
  msg.params = data;
  return msg;
}

/***/ }),

/***/ "./src/iat/index.js":
/*!**************************!*\
  !*** ./src/iat/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iat */ "./src/iat/iat.js");



/**
 * 识别对象,所有的识别业务都基于此对象
 * @example
 * let iat = new Iat()
 */

var Iat =
/*#__PURE__*/
function () {
  /**
   * 构造函数
   */
  function Iat() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Iat);

    this._iat = new _iat__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
  /**
   * 注册识别开始回调函数
   * @param {function()} callback - function
   * @example
   * let iat = new Iat()
   * iat.onStart(() => {
   *     // do something
   * })
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Iat, [{
    key: "onStart",
    value: function onStart(callback) {
      this._iat.onStart(callback);
    }
    /**
     * 注册接收识别结果回调函数, 此回调函数会被多次回调
     * @param {function(msg: Object)} callback - 回调函数接收一个对象作为参数,对象有2个属性pgs和result
     * @example
     * let iat = new Iat()
     * iat.onMessage(msg => {
     *     // msg.pgs 结果是否是临时值,1表示是确定结果，0表示是临时结果
     *     // msg.result 识别结果
     * })
     */

  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      this._iat.onMessage(callback);
    }
    /**
     * 注册识别结束回调函数
     * @param {function()} callback
     */

  }, {
    key: "onEnd",
    value: function onEnd(callback) {
      this._iat.onEnd(callback);
    }
    /**
     * 注册识别错误回调函数
     * @param {function(msg: Object)} callback - 回调函数接收一个对象作为参数,对象有2个属性errCode和msg
     * @example
     * let iat = new Iat()
     * iat.onError(obj => {
     *     //obj.errCode 错误码
     *     //obj.msg 错误信息
     * })
     */

  }, {
    key: "onError",
    value: function onError(callback) {
      this._iat.onError(callback);
    }
    /**
     * 启动识别
     * @param {string} url 服务路由或代理路由的nginx地址地址(wss://ip:port/iat/)
     * @param {Object} params 识别参数, 如果开启主动鉴权,需要appid,token/area,ability,auth_id(本次识别任务唯一标识)
     * @param {boolean} isSpeex - 是否开启speex压缩
     * @param {function(val: number)} [volumeCallback] - 返回实时音量
     * @param {boolean} [bAuth=false] - 是否开启鉴权, 可以选择主动请求鉴权(true),或者不主动请求鉴权(false)由服务路由决定是否鉴权
     * @param {function(buffer: ArrayBuffer)} [saveWaveCallback] - 接收录音回调函数
     * @example
     * let iat = new Iat()
     * iat.start(url, params, isSpeex)
     * @example
     * let iat = new Iat()
     * iat.start(url, params, isSpeex, function(value) {
     *     // 实时音量
     * }, false, function (buffer) {
     *     // buffer 保存录音的二进制字节流
     * })
     */

  }, {
    key: "start",
    value: function start(url, params, isSpeex, volumeCallback, bAuth, saveWaveCallback) {
      this._iat.start(url, params, isSpeex, volumeCallback, bAuth, saveWaveCallback);
    }
    /**
     * 停止录音获取识别结果
     */

  }, {
    key: "stop",
    value: function stop() {
      this._iat.stop();
    }
    /**
     * 取消本次识别
     */

  }, {
    key: "cancle",
    value: function cancle() {
      this._iat.cancle();
    }
    /**
     * 放弃识别,并关闭录音机
     */

  }, {
    key: "kill",
    value: function kill() {
      this._iat.kill();
    }
    /**
     * 设置发送频率,多少帧发送一次
     * @param {number} count
     */

  }, {
    key: "setFrameCount",
    value: function setFrameCount(count) {
      this._iat.setFrameCount(count);
    }
  }]);

  return Iat;
}();

/* harmony default export */ __webpack_exports__["default"] = (Iat);

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

/***/ }),

/***/ "./src/utils/wsnet.js":
/*!****************************!*\
  !*** ./src/utils/wsnet.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ "./src/utils/tools.js");




var WSNet =
/*#__PURE__*/
function () {
  function WSNet() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WSNet);

    this.instance = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WSNet, [{
    key: "connect",
    value: function connect(url, callback) {
      if (this.instance == null || this.instance.readyState !== WebSocket.OPEN) {
        this.instance = new WebSocket(url);
        this.instance.onclose = callback.onclose;
        this.instance.onopen = callback.onopen;
        this.instance.onmessage = callback.onmessage;
        this.instance.onerror = callback.onerror;
      } else {
        callback.defaultOp();
      }
    }
  }, {
    key: "send",
    value: function send(msg) {
      console.log('[' + _tools__WEBPACK_IMPORTED_MODULE_2__["__getDateTimeString"]() + ']:', msg);

      if (this.instance.readyState === WebSocket.CLOSED || this.instance.readyState === WebSocket.CLOSING) {
        console.log("websocket has closed");
        return;
      }

      this.instance.send(JSON.stringify(msg));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.instance.readyState === WebSocket.CLOSED || this.instance.readyState === WebSocket.CLOSING) {
        console.log("websocket has closed");
        return;
      }

      this.instance.close();
    }
  }]);

  return WSNet;
}();

/* harmony default export */ __webpack_exports__["default"] = (WSNet);

/***/ }),

/***/ "webrtc_adapter":
/*!**************************!*\
  !*** external "adapter" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_webrtc_adapter__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JYXQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0lhdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JYXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9JYXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9JYXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vSWF0Ly4vbm9kZV9tb2R1bGVzL2pzLWJhc2U2NC9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vSWF0Lyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9JYXQvLi9zcmMvaWF0L2F1ZGlvUHJvYy5qcyIsIndlYnBhY2s6Ly9JYXQvLi9zcmMvaWF0L2lhdC5qcyIsIndlYnBhY2s6Ly9JYXQvLi9zcmMvaWF0L2lhdF9jbWQuanMiLCJ3ZWJwYWNrOi8vSWF0Ly4vc3JjL2lhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9JYXQvLi9zcmMvdXRpbHMvYXV0aC5qcyIsIndlYnBhY2s6Ly9JYXQvLi9zcmMvdXRpbHMvaHR0cG5ldC5qcyIsIndlYnBhY2s6Ly9JYXQvLi9zcmMvdXRpbHMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vSWF0Ly4vc3JjL3V0aWxzL3dzbmV0LmpzIiwid2VicGFjazovL0lhdC9leHRlcm5hbCBcImFkYXB0ZXJcIiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJtb3pBdWRpb0NvbnRleHQiLCJtc0F1ZGlvQ29udGV4dCIsIlVSTCIsIndlYmtpdFVSTCIsInJlY29yZFdvcmtlckNvZGUiLCJjcmVhdGVPYmplY3RVUkwiLCJCbG9iIiwidHlwZSIsInNwZWV4V29ya0NvZGUiLCJzcGVleFBhdGgiLCJyZWNvcmRQYXRoIiwiQXVkaW9Qcm9jIiwiYXVkaW9Qcm9jIiwidm9sdW1lUHJvYyIsInNhdmVXYXZQcm9jIiwic3BlZXhXb3JrZXIiLCJXb3JrZXIiLCJyZWNvcmRlcldvcmtlciIsInJlY29yZGluZyIsImF1ZGlvQ2FsbGJhY2siLCJzYXZlV2F2ZSIsImF1ZGlvU3RyZWFtIiwiaXNTcGVleCIsImF1ZGlvTm9kZSIsInRoYXQiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsImNvbW1hbmQiLCJidWZmZXIiLCJyZXN1bHQiLCJJbnQ4QXJyYXkiLCJ2b2x1bWUiLCJJbnQxNkFycmF5Iiwib3V0cHV0IiwicG9zdE1lc3NhZ2UiLCJpbkRhdGEiLCJpbk9mZnNldCIsImluQ291bnQiLCJsZW5ndGgiLCJvdXREYXRhIiwib3V0T2Zmc2V0IiwiYXVkaW9DdHgiLCJjb25zb2xlIiwibG9nIiwiYWRhcHRlciIsImJyb3dzZXJEZXRhaWxzIiwiYnJvd3NlciIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsInN0cmVhbSIsInNvdXJjZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwic2NyaXB0Tm9kZSIsImNyZWF0ZVNjcmlwdFByb2Nlc3NvciIsImNvbmZpZyIsInNhbXBsZVJhdGUiLCJvdXRwdXRCdWZmZXJMZW5ndGgiLCJidWZmZXJTaXplIiwib25hdWRpb3Byb2Nlc3MiLCJzZW5kRGF0YSIsImlucHV0QnVmZmVyIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJuYW1lIiwibWVzc2FnZSIsImFsZXJ0IiwidHJhY2tzIiwiZ2V0QXVkaW9UcmFja3MiLCJpIiwic3RvcCIsImRpc2Nvbm5lY3QiLCJ0ZXJtaW5hdGUiLCJyZWNvcmRlclN0YXR1cyIsIklhdF8iLCJ1cmwiLCJpYXRTdGF0ZSIsInNlcnZlclBhcmFtIiwic2Vzc2lvbiIsImlkIiwic3luSWQiLCJhdWRpb3N0YXR1cyIsImZyYW1lQ250IiwiZnJhbWVTZW5kIiwicmVjb3JkZXJCdWZmZXIiLCJuZXQiLCJiQXV0aCIsIkF1dGgiLCJjYWxsYmFjayIsIm9uU3RhcnQiLCJvbk1lc3NhZ2UiLCJvbkVuZCIsIm9uRXJyb3IiLCJwYXJhbXMiLCJ2b2x1bWVDYWxsYmFjayIsInNhdmVXYXZlQ2FsbGJhY2siLCJhdWRpb1NlbmRlciIsImJpbmQiLCJpbml0Iiwic2V0U3BlZXgiLCJyc2UiLCJhdWYiLCJhdWUiLCJ3c0NhbGxCYWNrIiwiYWJvcnRTZXNzaW9uIiwic2VuZCIsIm9iaiIsImpzb24iLCJKU09OIiwicGFyc2UiLCJwcm9jZXNzU2VydmVyTXNnIiwiY2FsbCIsInN0YXR1cyIsImVyckNvZGUiLCJtc2ciLCJyZWFsVXJsIiwiTmV0IiwiYXV0aFN0YXJ0IiwiZ2V0UmVzdWx0IiwiY2FuY2xlIiwia2lsbCIsImNvdW50Iiwic3BsaWNlIiwic3RyIiwiYXVkaW9MZW5ndGgiLCJqIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiQmFzZTY0IiwiYnRvYSIsImF1ZGlvU3RhdHVzIiwiYXBwaWQiLCJhdWRpb1dyaXRlIiwicHVzaCIsIlVpbnQ4QXJyYXkiLCJzZW5kRW5kIiwic2Vzc2lvbkVuZCIsImlkbGUiLCJhdXRoRW5kIiwianNvbk9iaiIsInRvb2xzIiwiY21kIiwicmV0Iiwic2lkIiwicmVzZXQiLCJzdGFydCIsInJlY1N0YXR1cyIsImlhdHJzdCIsImlhdHBncyIsInBncyIsImlzRW5kIiwiZW5kIiwicmx0U3RhdHVzIiwicmVzdWx0U3RhdHVzIiwiYmFzZSIsImNsb25lIiwic3RyaW5naWZ5IiwiY2hlY2tBcHBpZCIsInVuZGVmaW5lZCIsInNlc3Npb25CZWdpbiIsInNlcnZlclBhcmFtcyIsInN2YyIsInNlc3Npb25JZCIsInBhcmFtIiwiSWF0IiwiX2lhdCIsInNldEZyYW1lQ291bnQiLCJhdXRoVXJsIiwiYlN0YXJ0IiwiaGVhZGVyIiwidmFsdWUiLCJhdXRoQ2FsbGJhY2siLCJoZWFydCIsImhiSW5mbyIsImJIQiIsImF1dGhNc2ciLCJ0b2tlbiIsImFyZWEiLCJhYmlsaXR5IiwiZXh0ZW5kX3BhcmFtcyIsImV4dCIsImV4dEFycmF5Iiwic3BsaXQiLCJhcnIiLCJhdXRoSWQiLCJhdXRoX2lkIiwicHJvY2Vzc0F1dGhNc2ciLCJhdXRoQmVnaW5Nc2ciLCJhdXRoRW5kTXNnIiwiY2xlYXJJbnRlcnZhbCIsImF1dGhIQk1zZyIsIkRhdGUiLCJiYXRjaEhlYXJ0QmVhdCIsImpzb25SZXQiLCJhdG9iIiwiZXJyb3IiLCJzZXRJbnRlcnZhbCIsImhlYXJ0QmVhdCIsIkh0dHBOZXQiLCJpbnN0YW5jZSIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZXZlbnQiLCJyZWFkeVN0YXRlIiwiRE9ORSIsInJlc3BvbnNlVGV4dCIsIm1ldGhvZCIsIlVOU0VOVCIsIm9wZW4iLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiX19nZXREYXRlVGltZVN0cmluZyIsInRpbWUiLCJub3ciLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbGlzZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJXU05ldCIsIldlYlNvY2tldCIsIk9QRU4iLCJvbmNsb3NlIiwib25vcGVuIiwib25lcnJvciIsImRlZmF1bHRPcCIsIkNMT1NFRCIsIkNMT1NJTkciLCJjbG9zZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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dC5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhZGFwdGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImFkYXB0ZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSWF0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYWRhcHRlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSWF0XCJdID0gZmFjdG9yeShyb290W1wiYWRhcHRlclwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd2VicnRjX2FkYXB0ZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2lhdC9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLypcbiAqICBiYXNlNjQuanNcbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEJTRCAzLUNsYXVzZSBMaWNlbnNlLlxuICogICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICpcbiAqICBSZWZlcmVuY2VzOlxuICogICAgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjRcbiAqL1xuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KGdsb2JhbClcbiAgICAgICAgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWRcbiAgICAgICAgPyBkZWZpbmUoZmFjdG9yeSkgOiBmYWN0b3J5KGdsb2JhbClcbn0oKFxuICAgIHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGZcbiAgICAgICAgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvd1xuICAgICAgICA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsXG46IHRoaXNcbiksIGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICAvLyBleGlzdGluZyB2ZXJzaW9uIGZvciBub0NvbmZsaWN0KClcbiAgICBnbG9iYWwgPSBnbG9iYWwgfHwge307XG4gICAgdmFyIF9CYXNlNjQgPSBnbG9iYWwuQmFzZTY0O1xuICAgIHZhciB2ZXJzaW9uID0gXCIyLjUuMVwiO1xuICAgIC8vIGlmIG5vZGUuanMgYW5kIE5PVCBSZWFjdCBOYXRpdmUsIHdlIHVzZSBCdWZmZXJcbiAgICB2YXIgYnVmZmVyO1xuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYnVmZmVyID0gZXZhbChcInJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlclwiKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBidWZmZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc3RhbnRzXG4gICAgdmFyIGI2NGNoYXJzXG4gICAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuICAgIHZhciBiNjR0YWIgPSBmdW5jdGlvbihiaW4pIHtcbiAgICAgICAgdmFyIHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBiaW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB0W2Jpbi5jaGFyQXQoaSldID0gaTtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfShiNjRjaGFycyk7XG4gICAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG4gICAgLy8gZW5jb2RlciBzdHVmZlxuICAgIHZhciBjYl91dG9iID0gZnVuY3Rpb24oYykge1xuICAgICAgICBpZiAoYy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB2YXIgY2MgPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICByZXR1cm4gY2MgPCAweDgwID8gY1xuICAgICAgICAgICAgICAgIDogY2MgPCAweDgwMCA/IChmcm9tQ2hhckNvZGUoMHhjMCB8IChjYyA+Pj4gNikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSkpXG4gICAgICAgICAgICAgICAgOiAoZnJvbUNoYXJDb2RlKDB4ZTAgfCAoKGNjID4+PiAxMikgJiAweDBmKSlcbiAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKChjYyA+Pj4gIDYpICYgMHgzZikpXG4gICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICggY2MgICAgICAgICAmIDB4M2YpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2MgPSAweDEwMDAwXG4gICAgICAgICAgICAgICAgKyAoYy5jaGFyQ29kZUF0KDApIC0gMHhEODAwKSAqIDB4NDAwXG4gICAgICAgICAgICAgICAgKyAoYy5jaGFyQ29kZUF0KDEpIC0gMHhEQzAwKTtcbiAgICAgICAgICAgIHJldHVybiAoZnJvbUNoYXJDb2RlKDB4ZjAgfCAoKGNjID4+PiAxOCkgJiAweDA3KSlcbiAgICAgICAgICAgICAgICAgICAgKyBmcm9tQ2hhckNvZGUoMHg4MCB8ICgoY2MgPj4+IDEyKSAmIDB4M2YpKVxuICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgweDgwIHwgKChjYyA+Pj4gIDYpICYgMHgzZikpXG4gICAgICAgICAgICAgICAgICAgICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoIGNjICAgICAgICAgJiAweDNmKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVfdXRvYiA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZGXXxbXlxceDAwLVxceDdGXS9nO1xuICAgIHZhciB1dG9iID0gZnVuY3Rpb24odSkge1xuICAgICAgICByZXR1cm4gdS5yZXBsYWNlKHJlX3V0b2IsIGNiX3V0b2IpO1xuICAgIH07XG4gICAgdmFyIGNiX2VuY29kZSA9IGZ1bmN0aW9uKGNjYykge1xuICAgICAgICB2YXIgcGFkbGVuID0gWzAsIDIsIDFdW2NjYy5sZW5ndGggJSAzXSxcbiAgICAgICAgb3JkID0gY2NjLmNoYXJDb2RlQXQoMCkgPDwgMTZcbiAgICAgICAgICAgIHwgKChjY2MubGVuZ3RoID4gMSA/IGNjYy5jaGFyQ29kZUF0KDEpIDogMCkgPDwgOClcbiAgICAgICAgICAgIHwgKChjY2MubGVuZ3RoID4gMiA/IGNjYy5jaGFyQ29kZUF0KDIpIDogMCkpLFxuICAgICAgICBjaGFycyA9IFtcbiAgICAgICAgICAgIGI2NGNoYXJzLmNoYXJBdCggb3JkID4+PiAxOCksXG4gICAgICAgICAgICBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gMTIpICYgNjMpLFxuICAgICAgICAgICAgcGFkbGVuID49IDIgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gNikgJiA2MyksXG4gICAgICAgICAgICBwYWRsZW4gPj0gMSA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdChvcmQgJiA2MylcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICAgIH07XG4gICAgdmFyIGJ0b2EgPSBnbG9iYWwuYnRvYSA/IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5idG9hKGIpO1xuICAgIH0gOiBmdW5jdGlvbihiKSB7XG4gICAgICAgIHJldHVybiBiLnJlcGxhY2UoL1tcXHNcXFNdezEsM30vZywgY2JfZW5jb2RlKTtcbiAgICB9O1xuICAgIHZhciBfZW5jb2RlID0gYnVmZmVyID9cbiAgICAgICAgYnVmZmVyLmZyb20gJiYgVWludDhBcnJheSAmJiBidWZmZXIuZnJvbSAhPT0gVWludDhBcnJheS5mcm9tXG4gICAgICAgID8gZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgICAgIHJldHVybiAodS5jb25zdHJ1Y3RvciA9PT0gYnVmZmVyLmNvbnN0cnVjdG9yID8gdSA6IGJ1ZmZlci5mcm9tKHUpKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0JylcbiAgICAgICAgfVxuICAgICAgICA6ICBmdW5jdGlvbiAodSkge1xuICAgICAgICAgICAgcmV0dXJuICh1LmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3IgPyB1IDogbmV3ICBidWZmZXIodSkpXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKHUpIHsgcmV0dXJuIGJ0b2EodXRvYih1KSkgfVxuICAgIDtcbiAgICB2YXIgZW5jb2RlID0gZnVuY3Rpb24odSwgdXJpc2FmZSkge1xuICAgICAgICByZXR1cm4gIXVyaXNhZmVcbiAgICAgICAgICAgID8gX2VuY29kZShTdHJpbmcodSkpXG4gICAgICAgICAgICA6IF9lbmNvZGUoU3RyaW5nKHUpKS5yZXBsYWNlKC9bK1xcL10vZywgZnVuY3Rpb24obTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbTAgPT0gJysnID8gJy0nIDogJ18nO1xuICAgICAgICAgICAgfSkucmVwbGFjZSgvPS9nLCAnJyk7XG4gICAgfTtcbiAgICB2YXIgZW5jb2RlVVJJID0gZnVuY3Rpb24odSkgeyByZXR1cm4gZW5jb2RlKHUsIHRydWUpIH07XG4gICAgLy8gZGVjb2RlciBzdHVmZlxuICAgIHZhciByZV9idG91ID0gbmV3IFJlZ0V4cChbXG4gICAgICAgICdbXFx4QzAtXFx4REZdW1xceDgwLVxceEJGXScsXG4gICAgICAgICdbXFx4RTAtXFx4RUZdW1xceDgwLVxceEJGXXsyfScsXG4gICAgICAgICdbXFx4RjAtXFx4RjddW1xceDgwLVxceEJGXXszfSdcbiAgICBdLmpvaW4oJ3wnKSwgJ2cnKTtcbiAgICB2YXIgY2JfYnRvdSA9IGZ1bmN0aW9uKGNjY2MpIHtcbiAgICAgICAgc3dpdGNoKGNjY2MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHZhciBjcCA9ICgoMHgwNyAmIGNjY2MuY2hhckNvZGVBdCgwKSkgPDwgMTgpXG4gICAgICAgICAgICAgICAgfCAgICAoKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMSkpIDw8IDEyKVxuICAgICAgICAgICAgICAgIHwgICAgKCgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDIpKSA8PCAgNilcbiAgICAgICAgICAgICAgICB8ICAgICAoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgzKSksXG4gICAgICAgICAgICBvZmZzZXQgPSBjcCAtIDB4MTAwMDA7XG4gICAgICAgICAgICByZXR1cm4gKGZyb21DaGFyQ29kZSgob2Zmc2V0ICA+Pj4gMTApICsgMHhEODAwKVxuICAgICAgICAgICAgICAgICAgICArIGZyb21DaGFyQ29kZSgob2Zmc2V0ICYgMHgzRkYpICsgMHhEQzAwKSk7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBmcm9tQ2hhckNvZGUoXG4gICAgICAgICAgICAgICAgKCgweDBmICYgY2NjYy5jaGFyQ29kZUF0KDApKSA8PCAxMilcbiAgICAgICAgICAgICAgICAgICAgfCAoKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMSkpIDw8IDYpXG4gICAgICAgICAgICAgICAgICAgIHwgICgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDIpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAgZnJvbUNoYXJDb2RlKFxuICAgICAgICAgICAgICAgICgoMHgxZiAmIGNjY2MuY2hhckNvZGVBdCgwKSkgPDwgNilcbiAgICAgICAgICAgICAgICAgICAgfCAgKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMSkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgYnRvdSA9IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIGIucmVwbGFjZShyZV9idG91LCBjYl9idG91KTtcbiAgICB9O1xuICAgIHZhciBjYl9kZWNvZGUgPSBmdW5jdGlvbihjY2NjKSB7XG4gICAgICAgIHZhciBsZW4gPSBjY2NjLmxlbmd0aCxcbiAgICAgICAgcGFkbGVuID0gbGVuICUgNCxcbiAgICAgICAgbiA9IChsZW4gPiAwID8gYjY0dGFiW2NjY2MuY2hhckF0KDApXSA8PCAxOCA6IDApXG4gICAgICAgICAgICB8IChsZW4gPiAxID8gYjY0dGFiW2NjY2MuY2hhckF0KDEpXSA8PCAxMiA6IDApXG4gICAgICAgICAgICB8IChsZW4gPiAyID8gYjY0dGFiW2NjY2MuY2hhckF0KDIpXSA8PCAgNiA6IDApXG4gICAgICAgICAgICB8IChsZW4gPiAzID8gYjY0dGFiW2NjY2MuY2hhckF0KDMpXSAgICAgICA6IDApLFxuICAgICAgICBjaGFycyA9IFtcbiAgICAgICAgICAgIGZyb21DaGFyQ29kZSggbiA+Pj4gMTYpLFxuICAgICAgICAgICAgZnJvbUNoYXJDb2RlKChuID4+PiAgOCkgJiAweGZmKSxcbiAgICAgICAgICAgIGZyb21DaGFyQ29kZSggbiAgICAgICAgICYgMHhmZilcbiAgICAgICAgXTtcbiAgICAgICAgY2hhcnMubGVuZ3RoIC09IFswLCAwLCAyLCAxXVtwYWRsZW5dO1xuICAgICAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gICAgfTtcbiAgICB2YXIgX2F0b2IgPSBnbG9iYWwuYXRvYiA/IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5hdG9iKGEpO1xuICAgIH0gOiBmdW5jdGlvbihhKXtcbiAgICAgICAgcmV0dXJuIGEucmVwbGFjZSgvXFxTezEsNH0vZywgY2JfZGVjb2RlKTtcbiAgICB9O1xuICAgIHZhciBhdG9iID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gX2F0b2IoU3RyaW5nKGEpLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXS9nLCAnJykpO1xuICAgIH07XG4gICAgdmFyIF9kZWNvZGUgPSBidWZmZXIgP1xuICAgICAgICBidWZmZXIuZnJvbSAmJiBVaW50OEFycmF5ICYmIGJ1ZmZlci5mcm9tICE9PSBVaW50OEFycmF5LmZyb21cbiAgICAgICAgPyBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEuY29uc3RydWN0b3IgPT09IGJ1ZmZlci5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICA/IGEgOiBidWZmZXIuZnJvbShhLCAnYmFzZTY0JykpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICByZXR1cm4gKGEuY29uc3RydWN0b3IgPT09IGJ1ZmZlci5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICA/IGEgOiBuZXcgYnVmZmVyKGEsICdiYXNlNjQnKSkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGJ0b3UoX2F0b2IoYSkpIH07XG4gICAgdmFyIGRlY29kZSA9IGZ1bmN0aW9uKGEpe1xuICAgICAgICByZXR1cm4gX2RlY29kZShcbiAgICAgICAgICAgIFN0cmluZyhhKS5yZXBsYWNlKC9bLV9dL2csIGZ1bmN0aW9uKG0wKSB7IHJldHVybiBtMCA9PSAnLScgPyAnKycgOiAnLycgfSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9dL2csICcnKVxuICAgICAgICApO1xuICAgIH07XG4gICAgdmFyIG5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIEJhc2U2NCA9IGdsb2JhbC5CYXNlNjQ7XG4gICAgICAgIGdsb2JhbC5CYXNlNjQgPSBfQmFzZTY0O1xuICAgICAgICByZXR1cm4gQmFzZTY0O1xuICAgIH07XG4gICAgLy8gZXhwb3J0IEJhc2U2NFxuICAgIGdsb2JhbC5CYXNlNjQgPSB7XG4gICAgICAgIFZFUlNJT046IHZlcnNpb24sXG4gICAgICAgIGF0b2I6IGF0b2IsXG4gICAgICAgIGJ0b2E6IGJ0b2EsXG4gICAgICAgIGZyb21CYXNlNjQ6IGRlY29kZSxcbiAgICAgICAgdG9CYXNlNjQ6IGVuY29kZSxcbiAgICAgICAgdXRvYjogdXRvYixcbiAgICAgICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgICAgIGVuY29kZVVSSTogZW5jb2RlVVJJLFxuICAgICAgICBidG91OiBidG91LFxuICAgICAgICBkZWNvZGU6IGRlY29kZSxcbiAgICAgICAgbm9Db25mbGljdDogbm9Db25mbGljdCxcbiAgICAgICAgX19idWZmZXJfXzogYnVmZmVyXG4gICAgfTtcbiAgICAvLyBpZiBFUzUgaXMgYXZhaWxhYmxlLCBtYWtlIEJhc2U2NC5leHRlbmRTdHJpbmcoKSBhdmFpbGFibGVcbiAgICBpZiAodHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbm9FbnVtID0gZnVuY3Rpb24odil7XG4gICAgICAgICAgICByZXR1cm4ge3ZhbHVlOnYsZW51bWVyYWJsZTpmYWxzZSx3cml0YWJsZTp0cnVlLGNvbmZpZ3VyYWJsZTp0cnVlfTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2xvYmFsLkJhc2U2NC5leHRlbmRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZSwgJ2Zyb21CYXNlNjQnLCBub0VudW0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHRoaXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUsICd0b0Jhc2U2NCcsIG5vRW51bShmdW5jdGlvbiAodXJpc2FmZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlKHRoaXMsIHVyaXNhZmUpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICAgICAgICAgIFN0cmluZy5wcm90b3R5cGUsICd0b0Jhc2U2NFVSSScsIG5vRW51bShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGUodGhpcywgdHJ1ZSlcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vXG4gICAgLy8gZXhwb3J0IEJhc2U2NCB0byB0aGUgbmFtZXNwYWNlXG4gICAgLy9cbiAgICBpZiAoZ2xvYmFsWydNZXRlb3InXSkgeyAvLyBNZXRlb3IuanNcbiAgICAgICAgQmFzZTY0ID0gZ2xvYmFsLkJhc2U2NDtcbiAgICB9XG4gICAgLy8gbW9kdWxlLmV4cG9ydHMgYW5kIEFNRCBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlxuICAgIC8vIG1vZHVsZS5leHBvcnRzIGhhcyBwcmVjZWRlbmNlLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cy5CYXNlNjQgPSBnbG9iYWwuQmFzZTY0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCl7IHJldHVybiBnbG9iYWwuQmFzZTY0IH0pO1xuICAgIH1cbiAgICAvLyB0aGF0J3MgaXQhXG4gICAgcmV0dXJuIHtCYXNlNjQ6IGdsb2JhbC5CYXNlNjR9XG59KSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgYWRhcHRlciBmcm9tIFwid2VicnRjX2FkYXB0ZXJcIlxyXG5cclxud2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCB8fCB3aW5kb3cubW96QXVkaW9Db250ZXh0IHx8IHdpbmRvdy5tc0F1ZGlvQ29udGV4dFxyXG53aW5kb3cuVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMXHJcblxyXG5sZXQgcmVjb3JkV29ya2VyQ29kZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoWyd2YXIgc2FtcGxlUmF0ZSxvdXRwdXRCdWZmZXJMZW5ndGg7dmFyIHJlY0J1ZmZlcnM9W107b25tZXNzYWdlPWZ1bmN0aW9uKGEpe3N3aXRjaChhLmRhdGEuY29tbWFuZCl7Y2FzZVwiaW5pdFwiOmluaXQoYS5kYXRhLmNvbmZpZyk7YnJlYWs7Y2FzZVwicmVjb3JkXCI6cmVjb3JkKGEuZGF0YS5idWZmZXIpO2JyZWFrO2Nhc2VcInJlc2V0XCI6cmVzZXQoKTticmVha319O2Z1bmN0aW9uIGluaXQoYSl7c2FtcGxlUmF0ZT1hLnNhbXBsZVJhdGU7b3V0cHV0QnVmZmVyTGVuZ3RoPWEub3V0cHV0QnVmZmVyTGVuZ3RofWZ1bmN0aW9uIHJlc2V0KCl7cmVjQnVmZmVycz1bXX1mdW5jdGlvbiByZWNvcmQoZil7dmFyIGg9bmV3IFJlc2FtcGxlcihzYW1wbGVSYXRlLDE2MDAwLDEsb3V0cHV0QnVmZmVyTGVuZ3RoLHRydWUpO3ZhciBkO3ZhciBqPVtdO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKyspe2oucHVzaChmW2RdKX12YXIgYj1oLnJlc2FtcGxlcihqKTt2YXIgYT1uZXcgRmxvYXQzMkFycmF5KGIpO2ZvcihkPTA7ZDxiO2QrKyl7YVtkXT1oLm91dHB1dEJ1ZmZlcltkXX12YXIgYz1mbG9hdFRvMTZCaXRQQ00oYSk7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKyl7cmVjQnVmZmVycy5wdXNoKGNbZF0pfXdoaWxlKHJlY0J1ZmZlcnMubGVuZ3RoPjMyMCl7dmFyIGc9cmVjQnVmZmVycy5zcGxpY2UoMCwzMjApO3ZhciBrPW5ldyBJbnQxNkFycmF5KGcpO3ZhciBlPWdldFZvbHVtZShrKTt0aGlzLnBvc3RNZXNzYWdlKHtcInZvbHVtZVwiOmUsXCJidWZmZXJcIjprfSl9fXZhciBnZXRWb2x1bWU9ZnVuY3Rpb24oZCl7dmFyIGI9WzMyOSw0MjEsNTQzLDY5NCw4OTUsMTE0NiwxNDc2LDE4OTAsMjQzMywzMTE4LDQwMTEsNTE0Miw2NjEyLDg0NzgsMTA5MDAsMTM5ODIsMTc5NjgsMjMwNTQsMjk2MjAsMzgwMTQsNDg4MjgsNjI2NTQsODA0OTEsMTAzMjk0LDEzMjY4NiwxNzAzNjYsMjE4NzI4LDI4MDgzMF07dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIGY9MzA7Yi5ldmVyeShmdW5jdGlvbihoLGcpe2lmKGU8aCl7Zj1nO3JldHVybiBmYWxzZX1yZXR1cm4gdHJ1ZX0pO3JldHVybiBmfTt2YXIgYz1mdW5jdGlvbihnKXtpZihnPT1udWxsfHxnLmJ5dGVMZW5ndGg8PTIpe3JldHVybiAwfXZhciBoPTA7dmFyIGU7Zm9yKGU9MDtlPGcubGVuZ3RoO2UrKyl7aCs9Z1tlXX1oLz1nLmxlbmd0aDt2YXIgZj0wO2ZvcihlPTA7ZTxnLmxlbmd0aDtlKyspe2YrPXBhcnNlSW50KE1hdGgucG93KGdbZV0taCwyKSk+Pjl9Zi89Zy5sZW5ndGg7cmV0dXJuIHBhcnNlSW50KGYpfTtyZXR1cm4gYShjKGQpKX07ZnVuY3Rpb24gZmxvYXRUbzE2Qml0UENNKGIpe3ZhciBhPW5ldyBJbnQxNkFycmF5KGIubGVuZ3RoKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9TWF0aC5tYXgoLTEsTWF0aC5taW4oMSxiW2NdKSk7aWYoZDwwKXthW2NdPWQqMzI3Njh9ZWxzZXthW2NdPWQqMzI3Njd9fXJldHVybiBhfWZ1bmN0aW9uIFJlc2FtcGxlcihjLGUsYixkLGEpe3RoaXMuZnJvbVNhbXBsZVJhdGU9Yzt0aGlzLnRvU2FtcGxlUmF0ZT1lO3RoaXMuY2hhbm5lbHM9YnwwO3RoaXMub3V0cHV0QnVmZmVyU2l6ZT1kO3RoaXMubm9SZXR1cm49ISFhO3RoaXMuaW5pdGlhbGl6ZSgpfVJlc2FtcGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe2lmKHRoaXMuZnJvbVNhbXBsZVJhdGU+MCYmdGhpcy50b1NhbXBsZVJhdGU+MCYmdGhpcy5jaGFubmVscz4wKXtpZih0aGlzLmZyb21TYW1wbGVSYXRlPT10aGlzLnRvU2FtcGxlUmF0ZSl7dGhpcy5yZXNhbXBsZXI9dGhpcy5ieXBhc3NSZXNhbXBsZXI7dGhpcy5yYXRpb1dlaWdodD0xfWVsc2V7aWYodGhpcy5mcm9tU2FtcGxlUmF0ZTx0aGlzLnRvU2FtcGxlUmF0ZSl7dGhpcy5sYXN0V2VpZ2h0PTE7dGhpcy5yZXNhbXBsZXI9dGhpcy5jb21waWxlTGluZWFySW50ZXJwb2xhdGlvbn1lbHNle3RoaXMudGFpbEV4aXN0cz1mYWxzZTt0aGlzLmxhc3RXZWlnaHQ9MDt0aGlzLnJlc2FtcGxlcj10aGlzLmNvbXBpbGVNdWx0aVRhcH10aGlzLnJhdGlvV2VpZ2h0PXRoaXMuZnJvbVNhbXBsZVJhdGUvdGhpcy50b1NhbXBsZVJhdGU7dGhpcy5pbml0aWFsaXplQnVmZmVycygpfX1lbHNle3Rocm93IChuZXcgRXJyb3IoXCJJbnZhbGlkIHNldHRpbmdzIHNwZWNpZmllZCBmb3IgdGhlIHJlc2FtcGxlci5cIikpfX07UmVzYW1wbGVyLnByb3RvdHlwZS5jb21waWxlTGluZWFySW50ZXJwb2xhdGlvbj1mdW5jdGlvbihnKXt2YXIgYT1nLmxlbmd0aDt2YXIgZj10aGlzLm91dHB1dEJ1ZmZlclNpemU7aWYoKGEldGhpcy5jaGFubmVscyk9PTApe2lmKGE+MCl7dmFyIGU9dGhpcy5yYXRpb1dlaWdodDt2YXIgaD10aGlzLmxhc3RXZWlnaHQ7dmFyIGo9MDt2YXIgZD0wO3ZhciBjPTA7dmFyIGI9dGhpcy5vdXRwdXRCdWZmZXI7dmFyIGk7Zm9yKDtoPDE7aCs9ZSl7ZD1oJTE7aj0xLWQ7Zm9yKGk9MDtpPHRoaXMuY2hhbm5lbHM7KytpKXtiW2MrK109KHRoaXMubGFzdE91dHB1dFtpXSpqKSsoZ1tpXSpkKX19aC0tO2ZvcihhLT10aGlzLmNoYW5uZWxzLHNvdXJjZU9mZnNldD1NYXRoLmZsb29yKGgpKnRoaXMuY2hhbm5lbHM7YzxmJiZzb3VyY2VPZmZzZXQ8YTspe2Q9aCUxO2o9MS1kO2ZvcihpPTA7aTx0aGlzLmNoYW5uZWxzOysraSl7YltjKytdPShnW3NvdXJjZU9mZnNldCtpXSpqKSsoZ1tzb3VyY2VPZmZzZXQrdGhpcy5jaGFubmVscytpXSpkKX1oKz1lO3NvdXJjZU9mZnNldD1NYXRoLmZsb29yKGgpKnRoaXMuY2hhbm5lbHN9Zm9yKGk9MDtpPHRoaXMuY2hhbm5lbHM7KytpKXt0aGlzLmxhc3RPdXRwdXRbaV09Z1tzb3VyY2VPZmZzZXQrK119dGhpcy5sYXN0V2VpZ2h0PWglMTtyZXR1cm4gdGhpcy5idWZmZXJTbGljZShjKX1lbHNle3JldHVybih0aGlzLm5vUmV0dXJuKT8wOltdfX1lbHNle3Rocm93IChuZXcgRXJyb3IoXCJCdWZmZXIgd2FzIG9mIGluY29ycmVjdCBzYW1wbGUgbGVuZ3RoLlwiKSl9fTtSZXNhbXBsZXIucHJvdG90eXBlLmNvbXBpbGVNdWx0aVRhcD1mdW5jdGlvbihpKXt2YXIgZT1bXTt2YXIgYT1pLmxlbmd0aDt2YXIgaD10aGlzLm91dHB1dEJ1ZmZlclNpemU7aWYoKGEldGhpcy5jaGFubmVscyk9PTApe2lmKGE+MCl7dmFyIGc9dGhpcy5yYXRpb1dlaWdodDt2YXIgaj0wO2Zvcih2YXIgaz0wO2s8dGhpcy5jaGFubmVsczsrK2spe2Vba109MH12YXIgbD0wO3ZhciBtPTA7dmFyIGQ9IXRoaXMudGFpbEV4aXN0czt0aGlzLnRhaWxFeGlzdHM9ZmFsc2U7dmFyIGM9dGhpcy5vdXRwdXRCdWZmZXI7dmFyIGI9MDt2YXIgZj0wO2Rve2lmKGQpe2o9Zztmb3Ioaz0wO2s8dGhpcy5jaGFubmVsczsrK2spe2Vba109MH19ZWxzZXtqPXRoaXMubGFzdFdlaWdodDtmb3Ioaz0wO2s8dGhpcy5jaGFubmVsczsrK2spe2Vba10rPXRoaXMubGFzdE91dHB1dFtrXX1kPXRydWV9d2hpbGUoaj4wJiZsPGEpe209MStsLWY7aWYoaj49bSl7Zm9yKGs9MDtrPHRoaXMuY2hhbm5lbHM7KytrKXtlW2tdKz1pW2wrK10qbX1mPWw7ai09bX1lbHNle2ZvcihrPTA7azx0aGlzLmNoYW5uZWxzOysrayl7ZVtrXSs9aVtsK2tdKmp9Zis9ajtqPTA7YnJlYWt9fWlmKGo9PTApe2ZvcihrPTA7azx0aGlzLmNoYW5uZWxzOysrayl7Y1tiKytdPWVba10vZ319ZWxzZXt0aGlzLmxhc3RXZWlnaHQ9ajtmb3Ioaz0wO2s8dGhpcy5jaGFubmVsczsrK2spe3RoaXMubGFzdE91dHB1dFtrXT1lW2tdfXRoaXMudGFpbEV4aXN0cz10cnVlO2JyZWFrfX13aGlsZShsPGEmJmI8aCk7cmV0dXJuIHRoaXMuYnVmZmVyU2xpY2UoYil9ZWxzZXtyZXR1cm4odGhpcy5ub1JldHVybik/MDpbXX19ZWxzZXt0aHJvdyAobmV3IEVycm9yKFwiQnVmZmVyIHdhcyBvZiBpbmNvcnJlY3Qgc2FtcGxlIGxlbmd0aC5cIikpfX07UmVzYW1wbGVyLnByb3RvdHlwZS5ieXBhc3NSZXNhbXBsZXI9ZnVuY3Rpb24oYSl7aWYodGhpcy5ub1JldHVybil7dGhpcy5vdXRwdXRCdWZmZXI9YTtyZXR1cm4gYS5sZW5ndGh9ZWxzZXtyZXR1cm4gYX19O1Jlc2FtcGxlci5wcm90b3R5cGUuYnVmZmVyU2xpY2U9ZnVuY3Rpb24oYSl7aWYodGhpcy5ub1JldHVybil7cmV0dXJuIGF9ZWxzZXt0cnl7cmV0dXJuIHRoaXMub3V0cHV0QnVmZmVyLnN1YmFycmF5KDAsYSl9Y2F0Y2goYil7dHJ5e3RoaXMub3V0cHV0QnVmZmVyLmxlbmd0aD1hO3JldHVybiB0aGlzLm91dHB1dEJ1ZmZlcn1jYXRjaChiKXtyZXR1cm4gdGhpcy5vdXRwdXRCdWZmZXIuc2xpY2UoMCxhKX19fX07UmVzYW1wbGVyLnByb3RvdHlwZS5pbml0aWFsaXplQnVmZmVycz1mdW5jdGlvbigpe3RyeXt0aGlzLm91dHB1dEJ1ZmZlcj1uZXcgRmxvYXQzMkFycmF5KHRoaXMub3V0cHV0QnVmZmVyU2l6ZSk7dGhpcy5sYXN0T3V0cHV0PW5ldyBGbG9hdDMyQXJyYXkodGhpcy5jaGFubmVscyl9Y2F0Y2goYSl7dGhpcy5vdXRwdXRCdWZmZXI9W107dGhpcy5sYXN0T3V0cHV0PVtdfX07J10sXHJcbiAgICAgICAge3R5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCJ9KSlcclxufVxyXG5cclxubGV0IHNwZWV4V29ya0NvZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFsnb25tZXNzYWdlPWZ1bmN0aW9uKGIpe3N3aXRjaChiLmRhdGEuY29tbWFuZCl7Y2FzZVwiaW5pdFwiOlNwZWV4RW5jb2RlcihCYW5kTW9kZS5XaWRlKTtlbmNvZGVyLlF1YWxpdHk9NTticmVhaztjYXNlXCJlbmNvZGVcIjp2YXIgYT1bXTtFbmNvZGUoYi5kYXRhLmluRGF0YSxiLmRhdGEuaW5PZmZzZXQsYi5kYXRhLmluQ291bnQsYSxiLmRhdGEub3V0T2Zmc2V0LGIuZGF0YS5vdXRDb3VudCk7YnJlYWt9fTtmdW5jdGlvbiBsb2coYSl7cG9zdE1lc3NhZ2Uoe3R5cGU6XCJkZWJ1Z1wiLG1lc3NhZ2U6YX0pfXZhciBlbmNvZGVyO3ZhciBiaXRzO3ZhciByYXdEYXRhO3ZhciBGcmFtZVNpemU7dmFyIHNwZWV4V2JGcmFtZUxlbj1bMTAsMTUsMjAsMjUsMzIsNDIsNTIsNjAsNzAsODYsMTA2XTt2YXIgc3BlZXhfcXVhbGl0eT01O2Z1bmN0aW9uIFNwZWV4RW5jb2RlcihhKXtiaXRzPW5ldyBCaXRzKCk7c3dpdGNoKGEpe2Nhc2UgQmFuZE1vZGUuTmFycm93OmVuY29kZXI9bmV3IE5iRW5jb2RlcigpO2JyZWFrO2Nhc2UgQmFuZE1vZGUuV2lkZTplbmNvZGVyPW5ldyBTYkVuY29kZXIoZmFsc2UpO2JyZWFrO2Nhc2UgQmFuZE1vZGUuVWx0cmFXaWRlOmVuY29kZXI9bmV3IFNiRW5jb2Rlcih0cnVlKTticmVhaztkZWZhdWx0OmJyZWFrfUZyYW1lU2l6ZT0zMjA7cmF3RGF0YT1uZXcgQXJyYXkoKX1mdW5jdGlvbiBFbmNvZGUoZCxiLGwsaixlLGcpe3ZhciBhPWwvRnJhbWVTaXplO3ZhciBrPVtdO2Zvcih2YXIgaD0wO2g8YTtoKyspe2JpdHMuUmVzZXQoKTt2YXIgZj0wO3ZhciBtPTA7d2hpbGUoZjxsKXtmb3IodmFyIGM9MDtjPEZyYW1lU2l6ZTtjKyspe3Jhd0RhdGFbY109ZFtiK2MrZl19bSs9ZW5jb2Rlci5FbmNvZGUoYml0cyxyYXdEYXRhKTtmKz1GcmFtZVNpemV9Yml0cy5Xcml0ZShqLGUsZyk7a1toKihzcGVleFdiRnJhbWVMZW5bc3BlZXhfcXVhbGl0eV0rMSldPXNwZWV4V2JGcmFtZUxlbltzcGVleF9xdWFsaXR5XTtBcnJheUNvcHkoaiwwLGssaCooc3BlZXhXYkZyYW1lTGVuW3NwZWV4X3F1YWxpdHldKzEpKzEsc3BlZXhXYkZyYW1lTGVuW3NwZWV4X3F1YWxpdHldKX1wb3N0TWVzc2FnZSh7Y29tbWFuZDpcImVuY29kZVwiLGJ1ZmZlcjprfSl9ZnVuY3Rpb24gSW5uZXJfcHJvZChqLGIsaCxrLGcpe3ZhciBmO3ZhciBlPTAsZD0wLGM9MCxhPTA7Zm9yKGY9MDtmPGc7KXtlKz1qW2IrZl0qaFtrK2ZdO2QrPWpbYitmKzFdKmhbaytmKzFdO2MrPWpbYitmKzJdKmhbaytmKzJdO2ErPWpbYitmKzNdKmhbaytmKzNdO2YrPTR9cmV0dXJuIGUrZCtjK2F9ZnVuY3Rpb24gT3Blbl9sb29wX25iZXN0X3BpdGNoKG8sbixjLGIsdCxoLGYsZCl7dmFyIHIscSxwO3ZhciBsO3ZhciBlO3ZhciBtLHYscztsPW5ldyBBcnJheSgpO209bmV3IEFycmF5KCk7dj1uZXcgQXJyYXkoKTtzPW5ldyBBcnJheSgpO2ZvcihyPTA7cjxkO3IrKyl7bFtyXT0tMTtmW3JdPTA7aFtyXT1jfXZbMF09SW5uZXJfcHJvZChvLG4tYyxvLG4tYyx0KTtlPUlubmVyX3Byb2QobyxuLG8sbix0KTtmb3Iocj1jO3I8PWI7cisrKXt2W3ItYysxXT12W3ItY10rb1tuLXItMV0qb1tuLXItMV0tb1tuLXIrdC0xXSpvW24tcit0LTFdO2lmKHZbci1jKzFdPDEpe3Zbci1jKzFdPTF9fWZvcihyPWM7cjw9YjtyKyspe21bci1jXT0wO3Nbci1jXT0wfWZvcihyPWM7cjw9YjtyKyspe21bci1jXT1Jbm5lcl9wcm9kKG8sbixvLG4tcix0KTtzW3ItY109bVtyLWNdKm1bci1jXS8odltyLWNdKzEpfWZvcihyPWM7cjw9YjtyKyspe2lmKHNbci1jXT5sW2QtMV0pe3ZhciBhLHU7YT1tW3ItY10vKHZbci1jXSsxMCk7dT1NYXRoLnNxcnQoYSptW3ItY10vKGUrMTApKTtpZih1PmEpe3U9YX1pZih1PDApe3U9MH1mb3IocT0wO3E8ZDtxKyspe2lmKHNbci1jXT5sW3FdKXtmb3IocD1kLTE7cD5xO3AtLSl7bFtwXT1sW3AtMV07aFtwXT1oW3AtMV07ZltwXT1mW3AtMV19bFtxXT1zW3ItY107aFtxXT1yO2ZbcV09dTticmVha319fX19ZnVuY3Rpb24gQ3JlYXRlSmFnZ2VkQXJyYXkoZCxjKXt2YXIgYT1uZXcgQXJyYXkoKTtmb3IodmFyIGI9MDtiPGQ7YisrKXthW2JdPVtdfXJldHVybiBhfXZhciBMdHAzVGFwPWZ1bmN0aW9uKGIsZixhKXt2YXIgaz1uZXcgQXJyYXkoKTtrWzBdPWtbMV09a1sxXT0wO3ZhciBnPWI7dmFyIGM9Zjt2YXIgaD1hO3ZhciBkPUNyZWF0ZUphZ2dlZEFycmF5KDMsMTI4KTt0aGlzLlF1YW50PWZ1bmN0aW9uKFEsRSxJLEwsSCxHLEQsUCx1LHQsbyxGLE8sSixtLHosQyxBKXt2YXIgTSxLO3ZhciBCPW5ldyBBcnJheSgpO0JbMF09MDt2YXIgeT0wLHM9MDt2YXIgeD1uZXcgQXJyYXkoKTtmb3IodmFyIE09MDtNPE87TSsrKXt4W01dPTB9dmFyIHE9MDt2YXIgdixsPS0xO3ZhciB3O3ZhciBlPW5ldyBBcnJheSgpO3ZhciBuPW5ldyBBcnJheSgpO3c9QTtpZih3PjEwKXt3PTEwfWZvcih2YXIgTT0wO008dztNKyspe2VbTV09MDtuW01dPTB9aWYodz09MHx8dDx1KXtKLlBhY2soMCxoKTtKLlBhY2soMCxjKTtmb3IoTT0wO008TztNKyspe0RbUCtNXT0wfXJldHVybiB1fWlmKHc+dC11KzEpe3c9dC11KzF9T3Blbl9sb29wX25iZXN0X3BpdGNoKEUsSSx1LHQsTyxlLG4sdyk7Zm9yKE09MDtNPHc7TSsrKXt5PWVbTV07Zm9yKEs9MDtLPE87SysrKXtEW1ArS109MH12PWooUSxMLEgsRyxELFAseSxGLE8sSixtLHosQyxCKTtpZih2PGx8fGw8MCl7Zm9yKEs9MDtLPE87SysrKXt4W0tdPURbUCtLXX1sPXY7cT15O3M9QlswXX19Si5QYWNrKHEtdSxoKTtKLlBhY2socyxjKTtmb3IoTT0wO008TztNKyspe0RbUCtNXT14W01dfXJldHVybiB5fTtmdW5jdGlvbiBqKFQsTCxJLEgsRixTLHMsRyxPLEosbix1LEQseil7dmFyIE4sTTt2YXIgdDt2YXIgeT1uZXcgQXJyYXkoKTt2YXIgRT1DcmVhdGVKYWdnZWRBcnJheSgzLDMpO3ZhciB3O3ZhciBRLFA7dz0xPDxjO3Q9Q3JlYXRlSmFnZ2VkQXJyYXkoMyxPKTtkPUNyZWF0ZUphZ2dlZEFycmF5KDMsTyk7Zm9yKE49MjtOPj0wO04tLSl7dmFyIEs9cysxLU47Zm9yKE09MDtNPE87TSsrKXtpZihNLUs8MCl7ZFtOXVtNXT1uW3UrTS1LXX1lbHNle2lmKE0tSy1zPDApe2RbTl1bTV09blt1K00tSy1zXX1lbHNle2RbTl1bTV09MH19fWlmKE49PTIpe0ZpbHRlcnMuU3luX3BlcmNlcF96ZXJvKGRbTl0sMCxMLEksSCx0W05dLE8sRyl9ZWxzZXtmb3IoTT0wO008Ty0xO00rKyl7dFtOXVtNKzFdPXRbTisxXVtNXX10W05dWzBdPTA7Zm9yKE09MDtNPE87TSsrKXt0W05dW01dKz1kW05dWzBdKkRbTV19fX1mb3IoTj0wO048MztOKyspe3lbTl09SW5uZXJfcHJvZCh0W05dLDAsVCwwLE8pfWZvcihOPTA7TjwzO04rKyl7Zm9yKE09MDtNPD1OO00rKyl7RVtOXVtNXT1FW01dW05dPUlubmVyX3Byb2QodFtOXSwwLHRbTV0sMCxPKX19dmFyIEI9bmV3IEFycmF5KCk7dmFyIGw9MDt2YXIgcT0wO3ZhciBSPTA7QlswXT15WzJdO0JbMV09eVsxXTtCWzJdPXlbMF07QlszXT1FWzFdWzJdO0JbNF09RVswXVsxXTtCWzVdPUVbMF1bMl07Qls2XT1FWzJdWzJdO0JbN109RVsxXVsxXTtCWzhdPUVbMF1bMF07Zm9yKE49MDtOPHc7TisrKXt2YXIgbz0wO3ZhciBtLGUsVTtsPTMqTjttPTAuMDE1NjI1KmdbbF0rMC41O2U9MC4wMTU2MjUqZ1tsKzFdKzAuNTtVPTAuMDE1NjI1KmdbbCsyXSswLjU7bys9QlswXSptO28rPUJbMV0qZTtvKz1CWzJdKlU7by09QlszXSptKmU7by09Qls0XSpVKmU7by09Qls1XSpVKm07by09MC41KkJbNl0qbSptO28tPTAuNSpCWzddKmUqZTtvLT0wLjUqQls4XSpVKlU7aWYoZmFsc2Upe3ZhciB2PU1hdGguYWJzKGdbbCsxXSk7aWYoZ1tsXT4wKXt2Kz1nW2xdfWlmKGdbbCsyXT4wKXt2Kz1nW2wrMl19aWYodj4xKXtjb250aW51ZX19aWYobz5SfHxOPT0wKXtSPW87cT1OfX1rWzBdPTAuMDE1NjI1KmdbcSozXSswLjU7a1sxXT0wLjAxNTYyNSpnW3EqMysxXSswLjU7a1syXT0wLjAxNTYyNSpnW3EqMysyXSswLjU7elswXT1xO2ZvcihOPTA7TjxPO04rKyl7RltTK05dPWtbMF0qZFsyXVtOXStrWzFdKmRbMV1bTl0ra1syXSpkWzBdW05dfVE9MDtQPTA7Zm9yKE49MDtOPE87TisrKXtRKz1UW05dKlRbTl19Zm9yKE49MDtOPE87TisrKXtQKz0oVFtOXS1rWzJdKnRbMF1bTl0ta1sxXSp0WzFdW05dLWtbMF0qdFsyXVtOXSkqKFRbTl0ta1syXSp0WzBdW05dLWtbMV0qdFsxXVtOXS1rWzBdKnRbMl1bTl0pfXJldHVybiBQfX07dmFyIEx0cEZvcmNlZFBpdGNoPWZ1bmN0aW9uKCl7fTt2YXIgRmlsdGVycz1mdW5jdGlvbigpe307dmFyIGxhc3RfcGl0Y2g9MDt2YXIgbGFzdF9waXRjaF9nYWluPW5ldyBBcnJheSgpO2xhc3RfcGl0Y2hfZ2FpblswXT1sYXN0X3BpdGNoX2dhaW5bMV09bGFzdF9waXRjaF9nYWluWzJdPTA7dmFyIHNtb290aF9nYWluPTE7dmFyIHh4PW5ldyBBcnJheSgpO2Zvcih2YXIgaT0wO2k8MTAyNDtpKyspe3h4W2ldPTB9RmlsdGVycy5wcm90b3R5cGUuUmVzaWR1ZV9wZXJjZXBfemVybz1GaWx0ZXJzLlJlc2lkdWVfcGVyY2VwX3plcm89ZnVuY3Rpb24oaCxkLGYsYyxiLGosZyxhKXt2YXIgZTt2YXIgaz1uZXcgQXJyYXkoKTtmb3IodmFyIGw9MDtsPGE7bCsrKXtrW2xdPTB9RmlsdGVycy5GaWx0ZXJfbWVtMl9iKGgsZCxmLGMsaiwwLGcsYSxrLDApO2ZvcihlPTA7ZTxhO2UrKyl7a1tlXT0wfUZpbHRlcnMuRmlyX21lbTIoaiwwLGIsaiwwLGcsYSxrKX07RmlsdGVycy5wcm90b3R5cGUuRmlyX21lbV91cD1GaWx0ZXJzLkZpcl9tZW1fdXA9ZnVuY3Rpb24ocSxwLG4saCxrLHMpe3ZhciBnLGY7Zm9yKGc9MDtnPGgvMjtnKyspe3h4WzIqZ109cVtoLzItMS1nXX1mb3IoZz0wO2c8ay0xO2crPTIpe3h4W2grZ109c1tnKzFdfWZvcihnPTA7ZzxoO2crPTQpe3ZhciByLG8sbSxsLGU7cj1vPW09bD0wO2U9eHhbaC00LWddO2ZvcihmPTA7ZjxrO2YrPTQpe3ZhciBjLGQsYjtkPXBbZl07Yj1wW2YrMV07Yz14eFtoLTIrZi1nXTtyKz1kKmM7bys9YipjO20rPWQqZTtsKz1iKmU7ZD1wW2YrMl07Yj1wW2YrM107ZT14eFtoK2YtZ107cis9ZCplO28rPWIqZTttKz1kKmM7bCs9YipjfW5bZ109cjtuW2crMV09bztuW2crMl09bTtuW2crM109bH1mb3IoZz0wO2c8ay0xO2crPTIpe3NbZysxXT14eFtnXX19O0ZpbHRlcnMucHJvdG90eXBlLlN5bl9wZXJjZXBfemVybz1GaWx0ZXJzLlN5bl9wZXJjZXBfemVybz1mdW5jdGlvbihoLGQsZixjLGIsaixnLGEpe3ZhciBlO3ZhciBrPW5ldyBBcnJheSgpO2Zvcih2YXIgbD0wO2w8YTtsKyspe2tbbF09MH1GaWx0ZXJzLkZpbHRlcl9tZW0yX2IoaCxkLGMsZixqLDAsZyxhLGssMCk7Zm9yKGU9MDtlPGE7ZSsrKXtrW2VdPTB9RmlsdGVycy5JaXJfbWVtMihqLDAsYixqLDAsZyxhLGspfTtGaWx0ZXJzLnByb3RvdHlwZS5RbWZfZGVjb21wPUZpbHRlcnMuUW1mX2RlY29tcD1mdW5jdGlvbihtLGMscSxuLGgsbCxyKXt2YXIgZyxmLGUsYjt2YXIgcDt2YXIgbzt2YXIgZDtwPW5ldyBBcnJheSgpO289bmV3IEFycmF5KCk7ZD1sLTE7Yj1sPj4xO2ZvcihnPTA7ZzxsO2crKyl7cFtsLWctMV09Y1tnXX1mb3IoZz0wO2c8bC0xO2crKyl7b1tnXT1yW2wtZy0yXX1mb3IoZz0wO2c8aDtnKyspe29bZytsLTFdPW1bZ119Zm9yKGc9MCxlPTA7ZzxoO2crPTIsZSsrKXtxW2VdPTA7bltlXT0wO2ZvcihmPTA7ZjxiO2YrKyl7cVtlXSs9cFtmXSoob1tnK2ZdK29bZCtnLWZdKTtuW2VdLT1wW2ZdKihvW2crZl0tb1tkK2ctZl0pO2YrKztxW2VdKz1wW2ZdKihvW2crZl0rb1tkK2ctZl0pO25bZV0rPXBbZl0qKG9bZytmXS1vW2QrZy1mXSl9fWZvcihnPTA7ZzxsLTE7ZysrKXtyW2ddPW1baC1nLTFdfX07RmlsdGVycy5wcm90b3R5cGUuSWlyX21lbTI9RmlsdGVycy5JaXJfbWVtMj1mdW5jdGlvbihnLGIsaCxmLGwsZSxhLGspe3ZhciBkLGM7Zm9yKGQ9MDtkPGU7ZCsrKXtmW2wrZF09Z1tiK2RdK2tbMF07Zm9yKGM9MDtjPGEtMTtjKyspe2tbY109a1tjKzFdLWhbYysxXSpmW2wrZF19a1thLTFdPS1oW2FdKmZbbCtkXX19O0ZpbHRlcnMucHJvdG90eXBlLkZpcl9tZW0yPUZpbHRlcnMuRmlyX21lbTI9ZnVuY3Rpb24oayxiLGUsaCxtLGYsYSxsKXt2YXIgZCxjO3ZhciBnO2ZvcihkPTA7ZDxmO2QrKyl7Zz1rW2IrZF07aFttK2RdPWVbMF0qZytsWzBdO2ZvcihjPTA7YzxhLTE7YysrKXtsW2NdPWxbYysxXStlW2MrMV0qZ31sW2EtMV09ZVthXSpnfX07RmlsdGVycy5wcm90b3R5cGUuRmlsdGVyX21lbTJfYj1GaWx0ZXJzLkZpbHRlcl9tZW0yX2I9ZnVuY3Rpb24obSxjLGcsbyxsLHAsaCxiLG4sYSl7dmFyIGYsZTt2YXIgayxkO2ZvcihmPTA7ZjxoO2YrKyl7az1tW2MrZl07bFtwK2ZdPWdbMF0qaytuWzBdO2Q9bFtwK2ZdO2ZvcihlPTA7ZTxiLTE7ZSsrKXtuW2ErZV09blthK2UrMV0rZ1tlKzFdKmstb1tlKzFdKmR9blthK2ItMV09Z1tiXSprLW9bYl0qZH19O0ZpbHRlcnMucHJvdG90eXBlLkJ3X2xwYz1GaWx0ZXJzLkJ3X2xwYz1mdW5jdGlvbihiLGYsYyxhKXt2YXIgZT0xO2Zvcih2YXIgZD0wO2Q8YSsxO2QrKyl7Y1tkXT1lKmZbZF07ZSo9Yn19O2Z1bmN0aW9uIE5vaXNlU2VhcmNoKCl7fXZhciBWUT1mdW5jdGlvbigpe307VlEucHJvdG90eXBlLkluZGV4X3M9VlEuSW5kZXhfcz1mdW5jdGlvbihnLGQsYSl7dmFyIGM7dmFyIGI9MDt2YXIgZT0wO2ZvcihjPTA7YzxhO2MrKyl7dmFyIGY9Zy1kW2NdO2Y9ZipmO2lmKGM9PTB8fGY8Yil7Yj1mO2U9Y319cmV0dXJuIGV9O1ZRLnByb3RvdHlwZS5OYmVzdD1WUS5OYmVzdD1mdW5jdGlvbihmLGQsbixoLGcscyxtLHEsbyl7dmFyIGUsYyxiLGE9MCxyPTA7Zm9yKGU9MDtlPGc7ZSsrKXt2YXIgcD0wLjUqc1tlXTtmb3IoYz0wO2M8aDtjKyspe3AtPWZbZCtjXSpuW2ErK119aWYoZTxtfHxwPG9bbS0xXSl7Zm9yKGI9bS0xOyhiPj0xKSYmKGI+cnx8cDxvW2ItMV0pO2ItLSl7b1tiXT1vW2ItMV07cVtiXT1xW2ItMV19b1tiXT1wO3FbYl09ZTtyKyt9fX07ZnVuY3Rpb24gU3BsaXRTaGFwZVNlYXJjaChBLGcsYSxrLGosbil7dmFyIHc9MTA7dmFyIHE9QTt2YXIgeT1nO3ZhciBiPWE7dmFyIGY9azt2YXIgcD0xPDxqO3ZhciB6PWo7dmFyIGM9bjt2YXIgaD1uZXcgQXJyYXkoKTt2YXIgbz1uZXcgQXJyYXkoKTtmb3IodmFyIHM9MDtzPGE7cysrKXtoW3NdPTA7b1tzXT0wfXZhciBkPVtdO3ZhciBCPVtdO3ZhciB4PVtdO3ZhciB1PVtdO2Zvcih2YXIgcz0wO3M8dztzKyspe2Rbc109W107QltzXT1bXTt4W3NdPVtdO3Vbc109W119dmFyIG09bmV3IEFycmF5KCk7dmFyIHY9bmV3IEFycmF5KCk7dmFyIHI9bmV3IEFycmF5KCk7dmFyIGw9bmV3IEFycmF5KCk7dGhpcy5RdWFudGlmeT1mdW5jdGlvbihlLEcsTyxMLFksUSxELGFhLFcsdCxUKXt2YXIgYWcsYWYsYWUsYWMsYWIsWDt2YXIgSzt2YXIgQyxWO3ZhciBJO3ZhciBhbDt2YXIgYWQ7dmFyIGFrO3ZhciBGPVQ7aWYoRj4xMCl7Rj0xMH1LPW5ldyBBcnJheSgpO0k9bmV3IEFycmF5KCk7YWw9bmV3IEFycmF5KCk7Qz1uZXcgQXJyYXkoKTtWPW5ldyBBcnJheSgpO2FkPW5ldyBBcnJheSgpO2FrPW5ldyBBcnJheSgpO2Zvcih2YXIgYWc9MDthZzxGO2FnKyspe0lbYWddPTA7YWRbYWddPTA7YWtbYWddPTB9Zm9yKGFnPTA7YWc8RjthZysrKXtmb3IoYWY9MDthZjxiO2FmKyspe3VbYWddW2FmXT14W2FnXVthZl09LTF9fWZvcihhZj0wO2FmPEY7YWYrKyl7Zm9yKGFnPTA7YWc8UTthZysrKXtkW2FmXVthZ109ZVthZ119fWZvcihhZz0wO2FnPHA7YWcrKyl7dmFyIFA7dmFyIEo7UD1hZyp5O0o9YWcqeTtmb3IoYWY9MDthZjx5O2FmKyspe0tbUCthZl09MDtmb3IoYWU9MDthZTw9YWY7YWUrKyl7S1tQK2FmXSs9MC4wMzEyNSpmW0orYWVdKldbYWYtYWVdfX1sW2FnXT0wO2ZvcihhZj0wO2FmPHk7YWYrKyl7bFthZ10rPUtbUCthZl0qS1tQK2FmXX19Zm9yKGFmPTA7YWY8RjthZisrKXtWW2FmXT0wfWZvcihhZz0wO2FnPGI7YWcrKyl7dmFyIFU9YWcqeTt2YXIgUz0yMTQ3NDgzNjQ3O2ZvcihhZj0wO2FmPEY7YWYrKyl7Q1thZl09U31mb3IoYWY9MDthZjxGO2FmKyspe2FkW2FmXT1ha1thZl09MH1mb3IoYWY9MDthZjxGO2FmKyspe3ZhciBaPTA7Zm9yKGFjPVU7YWM8VSt5O2FjKyspe1orPWRbYWZdW2FjXSpkW2FmXVthY119Wio9MC41O2lmKGMhPTApe1ZRLk5iZXN0X3NpZ24oZFthZl0sVSxLLHkscCxsLEYsSSxhbCl9ZWxzZXtWUS5OYmVzdChkW2FmXSxVLEsseSxwLGwsRixJLGFsKX1mb3IoYWU9MDthZTxGO2FlKyspe3ZhciBhaD1WW2FmXSthbFthZV0rWjtpZihhaDxDW0YtMV0pe2ZvcihhYz0wO2FjPEY7YWMrKyl7aWYoYWg8Q1thY10pe2ZvcihhYj1GLTE7YWI+YWM7YWItLSl7Q1thYl09Q1thYi0xXTthZFthYl09YWRbYWItMV07YWtbYWJdPWFrW2FiLTFdfUNbYWNdPWFoO2FkW2FiXT1JW2FlXTtha1thYl09YWY7YnJlYWt9fX19aWYoYWc9PTApe2JyZWFrfX1mb3IoYWY9MDthZjxGO2FmKyspe2ZvcihhYz0oYWcrMSkqeTthYzxRO2FjKyspe0JbYWZdW2FjXT1kW2FrW2FmXV1bYWNdfWZvcihhYz0wO2FjPHk7YWMrKyl7dmFyIGFpO3ZhciBSO3ZhciBIPTE7Uj1hZFthZl07aWYoUj49cCl7SD0tMTtSLT1wfVg9eS1hYzthaT1IKjAuMDMxMjUqZltSKnkrYWNdO3ZhciBhbTtmb3IoYWI9MCxhbT1VK3k7YWI8US15KihhZysxKTthYisrLGFtKyspe0JbYWZdW2FtXS09KGFpKldbYWIrWF0pfX1mb3IoWD0wO1g8YjtYKyspe3VbYWZdW1hdPXhbYWtbYWZdXVtYXX11W2FmXVthZ109YWRbYWZdfXZhciBhajthaj1kO2Q9QjtCPWFqO2ZvcihhZj0wO2FmPEY7YWYrKyl7Zm9yKGFjPTA7YWM8YjthYysrKXt4W2FmXVthY109dVthZl1bYWNdfX1mb3IoYWY9MDthZjxGO2FmKyspe1ZbYWZdPUNbYWZdfX1mb3IoYWc9MDthZzxiO2FnKyspe2hbYWddPXVbMF1bYWddO3QuUGFjayhoW2FnXSx6K2MpfWZvcihhZz0wO2FnPGI7YWcrKyl7dmFyIEU7dmFyIE09MTtFPWhbYWddO2lmKEU+PXApe009LTE7RS09cH1mb3IoYWY9MDthZjx5O2FmKyspe3ZbeSphZythZl09TSowLjAzMTI1KmZbRSp5K2FmXX19Zm9yKGFmPTA7YWY8UTthZisrKXtEW2FhK2FmXSs9dlthZl19RmlsdGVycy5TeW5fcGVyY2VwX3plcm8odiwwLEcsTyxMLHIsUSxZKTtmb3IoYWY9MDthZjxRO2FmKyspe2VbYWZdLT1yW2FmXX19fWZ1bmN0aW9uIExzcFF1YW50KCl7fUxzcFF1YW50Lk1BWF9MU1BfU0laRT0yMDtMc3BRdWFudC5wcm90b3R5cGUuTHNwX3F1YW50PUxzcFF1YW50LkxzcF9xdWFudD1mdW5jdGlvbihuLGQsYyxiLGUpe3ZhciBoLGY7dmFyIG0sZzt2YXIgbD0wO3ZhciBrPTA7dmFyIGE9MDtmb3IoaD0wO2g8YjtoKyspe209MDtmb3IoZj0wO2Y8ZTtmKyspe2c9KG5bZCtmXS1jW2ErK10pO20rPWcqZ31pZihtPGx8fGg9PTApe2w9bTtrPWh9fWZvcihmPTA7ZjxlO2YrKyl7bltkK2ZdLT1jW2sqZStmXX1yZXR1cm4ga307THNwUXVhbnQucHJvdG90eXBlLkxzcF93ZWlnaHRfcXVhbnQ9THNwUXVhbnQuTHNwX3dlaWdodF9xdWFudD1mdW5jdGlvbihwLGQsayxtLGMsYixmKXt2YXIgaCxlO3ZhciBvLGc7dmFyIG49MDt2YXIgbD0wO3ZhciBhPTA7Zm9yKGg9MDtoPGI7aCsrKXtvPTA7Zm9yKGU9MDtlPGY7ZSsrKXtnPShwW2QrZV0tY1thKytdKTtvKz1rW20rZV0qZypnfWlmKG88bnx8aD09MCl7bj1vO2w9aH19Zm9yKGU9MDtlPGY7ZSsrKXtwW2QrZV0tPWNbbCpmK2VdfXJldHVybiBsfTt2YXIgQ29kZWJvb2tfQ29uc3RhbnRzPW5ldyBmdW5jdGlvbigpe307Q29kZWJvb2tfQ29uc3RhbnRzLmV4Y18yMF8zMl90YWJsZT1bMTIsMzIsMjUsNDYsMzYsMzMsOSwxNCwtMyw2LDEsLTgsMCwtMTAsLTUsLTcsLTcsLTcsLTUsLTUsMzEsLTI3LDI0LC0zMiwtNCwxMCwtMTEsMjEsLTMsMTksMjMsLTksMjIsMjQsLTEwLC0xLC0xMCwtMTMsLTcsLTExLDQyLC0zMywzMSwxOSwtOCwwLC0xMCwtMTYsMSwtMjEsLTE3LDEwLC04LDE0LDgsNCwxMSwtMiw1LC0yLC0zMywxMSwtMTYsMzMsMTEsLTQsOSwtNCwxMSwyLDYsLTUsOCwtNSwxMSwtNCwtNiwyNiwtMzYsLTE2LDAsNCwtMiwtOCwxMiw2LC0xLDM0LC00NiwtMjIsOSw5LDIxLDksNSwtNjYsLTUsMjYsMiwxMCwxMywyLDE5LDksMTIsLTgxLDMsMTMsMTMsMCwtMTQsMjIsLTM1LDYsLTcsLTQsNiwtNiwxMCwtNiwtMzEsMzgsLTMzLDAsLTEwLC0xMSw1LC0xMiwxMiwtMTcsNSwwLC02LDEzLC05LDEwLDgsMjUsMzMsMiwtMTIsOCwtNiwxMCwtMiwyMSw3LDE3LDQzLDUsMTEsLTcsLTksLTIwLC0zNiwtMjAsLTIzLC00LC00LC0zLDI3LC05LC05LC00OSwtMzksLTM4LC0xMSwtOSw2LDUsMjMsMjUsNSwzLDMsNCwxLDIsLTMsLTEsODcsMzksMTcsLTIxLC05LC0xOSwtOSwtMTUsLTEzLC0xNCwtMTcsLTExLC0xMCwtMTEsLTgsLTYsLTEsLTMsLTMsLTEsLTU0LC0zNCwtMjcsLTgsLTExLC00LC01LDAsMCw0LDgsNiw5LDcsOSw3LDYsNSw1LDUsNDgsMTAsMTksLTEwLDEyLC0xLDksLTMsMiw1LC0zLDIsLTIsLTIsMCwtMiwtMjYsNiw5LC03LC0xNiwtOSwyLDcsNywtNSwtNDMsMTEsMjIsLTExLC05LDM0LDM3LC0xNSwtMTMsLTYsMSwtMSwxLDEsLTY0LDU2LDUyLC0xMSwtMjcsNSw0LDMsMSwyLDEsMywtMSwtNCwtNCwtMTAsLTcsLTQsLTQsMiwtMSwtNywtNywtMTIsLTEwLC0xNSwtOSwtNSwtNSwtMTEsLTE2LC0xMyw2LDE2LDQsLTEzLC0xNiwtMTAsLTQsMiwtNDcsLTEzLDI1LDQ3LDE5LC0xNCwtMjAsLTgsLTE3LDAsLTMsLTEzLDEsNiwtMTcsLTE0LDE1LDEsMTAsNiwtMjQsMCwtMTAsMTksLTY5LC04LDE0LDQ5LDE3LC01LDMzLC0yOSwzLC00LDAsMiwtOCw1LC02LDIsMTIwLC01NiwtMTIsLTQ3LDIzLC05LDYsLTUsMSwyLC01LDEsLTEwLDQsLTEsLTEsNCwtMSwwLC0zLDMwLC01MiwtNjcsMzAsMjIsMTEsLTEsLTQsMywwLDcsMiwwLDEsLTEwLC00LC04LC0xMyw1LDEsMSwtMSw1LDEzLC05LC0zLC0xMCwtNjIsMjIsNDgsLTQsLTYsMiwzLDUsMSwxLDQsMSwxMywzLC0yMCwxMCwtOSwxMywtMiwtNCw5LC0yMCw0NCwtMSwyMCwtMzIsLTY3LDE5LDAsMjgsMTEsOCwyLC0xMSwxNSwtMTksLTUzLDMxLDIsMzQsMTAsNiwtNCwtNTgsOCwxMCwxMywxNCwxLDEyLDIsMCwwLC0xMjgsMzcsLTgsNDQsLTksMjYsLTMsMTgsMiw2LDExLC0xLDksMSw1LDMsMCwxLDEsMiwxMiwzLC0yLC0zLDcsMjUsOSwxOCwtNiwtMzcsMywtOCwtMTYsMywtMTAsLTcsMTcsLTM0LC00NCwxMSwxNywtMTUsLTMsLTE2LC0xLC0xMywxMSwtNDYsLTY1LC0yLDgsMTMsMiw0LDQsNSwxNSw1LDksNiw4LDIsOCwzLDEwLC0xLDMsLTMsNiwtMiwzLDMsLTUsMTAsLTExLDcsNiwtMiw2LC0yLC05LDE5LC0xMiwxMiwtMjgsMzgsMjksLTEsMTIsMiw1LDIzLC0xMCwzLDQsLTE1LDIxLC00LDMsMyw2LDE3LC05LC00LC04LC0yMCwyNiw1LC0xMCw2LDEsLTE5LDE4LC0xNSwtMTIsNDcsLTYsLTIsLTcsLTksLTEsLTE3LC0yLC0yLC0xNCwzMCwtMTQsMiwtNywtNCwtMSwtMTIsMTEsLTI1LDE2LC0zLC0xMiwxMSwtNyw3LC0xNywxLDE5LC0yOCwzMSwtNywtMTAsNywtMTAsMywxMiw1LC0xNiw2LDI0LDQxLC0yOSwtNTQsMCwxLDcsLTEsNSwtNiwxMywxMCwtNCwtOCw4LC05LC0yNywtNTMsLTM4LC0xLDEwLDE5LDE3LDE2LDEyLDEyLDAsMywtNywtNCwxMywxMiwtMzEsLTE0LDYsLTUsMyw1LDE3LDQzLDUwLDI1LDEwLDEsLTYsLTJdO0NvZGVib29rX0NvbnN0YW50cy5leGNfMTBfMTZfdGFibGU9WzIyLDM5LDE0LDQ0LDExLDM1LC0yLDIzLC00LDYsNDYsLTI4LDEzLC0yNywtMjMsMTIsNCwyMCwtNSw5LDM3LC0xOCwtMjMsMjMsMCw5LC02LC0yMCw0LC0xLC0xNywtNSwtNCwxNywwLDEsOSwtMiwxLDIsMiwtMTIsOCwtMjUsMzksMTUsOSwxNiwtNTUsLTExLDksMTEsNSwxMCwtMiwtNjAsOCwxMywtNiwxMSwtMTYsMjcsLTQ3LC0xMiwxMSwxLDE2LC03LDksLTMsLTI5LDksLTE0LDI1LC0xOSwzNCwzNiwxMiw0MCwtMTAsLTMsLTI0LC0xNCwtMzcsLTIxLC0zNSwtMiwtMzYsMywtNiw2NywyOCw2LC0xNywtMywtMTIsLTE2LC0xNSwtMTcsLTcsLTU5LC0zNiwtMTMsMSw3LDEsMiwxMCwyLDExLDEzLDEwLDgsLTIsNywzLDUsNCwyLDIsLTMsLTgsNCwtNSw2LDcsLTQyLDE1LDM1LC0yLC00NiwzOCwyOCwtMjAsLTksMSw3LC0zLDAsLTIsLTUsLTQsLTIsLTQsLTgsLTMsLTgsLTUsLTcsLTQsLTE1LC0yOCw1MiwzMiw1LC01LC0xNywtMjAsLTEwLC0xXTtDb2RlYm9va19Db25zdGFudHMuZXhjXzEwXzMyX3RhYmxlPVs3LDE3LDE3LDI3LDI1LDIyLDEyLDQsLTMsMCwyOCwtMzYsMzksLTI0LC0xNSwzLC05LDE1LC01LDEwLDMxLC0yOCwxMSwzMSwtMjEsOSwtMTEsLTExLC0yLC03LC0yNSwxNCwtMjIsMzEsNCwtMTQsMTksLTEyLDE0LC01LDQsLTcsNCwtNSw5LDAsLTIsNDIsLTQ3LC0xNiwxLDgsMCw5LDIzLC01NywwLDI4LC0xMSw2LC0zMSw1NSwtNDUsMywtNSw0LDIsLTIsNCwtNywtMyw2LC0yLDcsLTMsMTIsNSw4LDU0LC0xMCw4LC03LC04LC0yNCwtMjUsLTI3LC0xNCwtNSw4LDUsNDQsMjMsNSwtOSwtMTEsLTExLC0xMywtOSwtMTIsLTgsLTI5LC04LC0yMiw2LC0xNSwzLC0xMiwtMSwtNSwtMywzNCwtMSwyOSwtMTYsMTcsLTQsMTIsMiwxLDQsLTIsLTQsMiwtMSwxMSwtMywtNTIsMjgsMzAsLTksLTMyLDI1LDQ0LC0yMCwtMjQsNCw2LC0xLDAsMCwtMyw3LC00LC00LC03LC02LC05LC0yLC0xMCwtNywtMjUsLTEwLDIyLDI5LDEzLC0xMywtMjIsLTEzLC00LDAsLTQsLTE2LDEwLDE1LC0zNiwtMjQsMjgsMjUsLTEsLTMsNjYsLTMzLC0xMSwtMTUsNiwwLDMsNCwtMiw1LDI0LC0yMCwtNDcsMjksMTksLTIsLTQsLTEsMCwtMSwtMiwzLDEsOCwtMTEsNSw1LC01NywyOCwyOCwwLC0xNiw0LC00LDEyLC02LC0xLDIsLTIwLDYxLC05LDI0LC0yMiwtNDIsMjksNiwxNyw4LDQsMiwtNjUsMTUsOCwxMCw1LDYsNSwzLDIsLTIsLTMsNSwtOSw0LC01LDIzLDEzLDIzLC0zLC02MywzLC01LC00LC02LDAsLTMsMjMsLTM2LC00Niw5LDUsNSw4LDQsOSwtNSwxLC0zLDEwLDEsLTYsMTAsLTExLDI0LC00NywzMSwyMiwtMTIsMTQsLTEwLDYsMTEsLTcsLTcsNywtMzEsNTEsLTEyLC02LDcsNiwtMTcsOSwtMTEsLTIwLDUyLC0xOSwzLC02LC02LC04LC01LDIzLC00MSwzNywxLC0yMSwxMCwtMTQsOCw3LDUsLTE1LC0xNSwyMywzOSwtMjYsLTMzLDcsMiwtMzIsLTMwLC0yMSwtOCw0LDEyLDE3LDE1LDE0LDExXTtDb2RlYm9va19Db25zdGFudHMuZXhjXzVfMjU2X3RhYmxlPVstOCwtMzcsNSwtNDMsNSw3Myw2MSwzOSwxMiwtMywtNjEsLTMyLDIsNDIsMzAsLTMsMTcsLTI3LDksMzQsMjAsLTEsLTUsMiwyMywtNywtNDYsMjYsNTMsLTQ3LDIwLC0yLC0zMywtODksLTUxLC02NCwyNywxMSwxNSwtMzQsLTUsLTU2LDI1LC05LC0xLC0yOSwxLDQwLDY3LC0yMywtMTYsMTYsMzMsMTksNywxNCw4NSwyMiwtMTAsLTEwLC0xMiwtNywtMSw1Miw4OSwyOSwxMSwtMjAsLTM3LC00NiwtMTUsMTcsLTI0LC0yOCwyNCwyLDEsMCwyMywtMTAxLDIzLDE0LC0xLC0yMywtMTgsOSw1LC0xMywzOCwxLC0yOCwtMjgsNCwyNyw1MSwtMjYsMzQsLTQwLDM1LDQ3LDU0LDM4LC01NCwtMjYsLTYsNDIsLTI1LDEzLC0zMCwtMzYsMTgsNDEsLTQsLTMzLDIzLC0zMiwtNywtNCw1MSwtMywxNywtNTIsNTYsLTQ3LDM2LC0yLC0yMSwzNiwxMCw4LC0zMywzMSwxOSw5LC01LC00MCwxMCwtOSwtMjEsMTksMTgsLTc4LC0xOCwtNSwwLC0yNiwtMzYsLTQ3LC01MSwtNDQsMTgsNDAsMjcsLTIsMjksNDksLTI2LDIsMzIsLTU0LDMwLC03Myw1NCwzLC01LDM2LDIyLDUzLDEwLC0xLC04NCwtNTMsLTI5LC01LDMsLTQ0LDUzLC01MSw0LDIyLDcxLC0zNSwtMSwzMywtNSwtMjcsLTcsMzYsMTcsLTIzLC0zOSwxNiwtOSwtNTUsLTE1LC0yMCwzOSwtMzUsNiwtMzksLTE0LDE4LDQ4LC02NCwtMTcsLTE1LDksMzksODEsMzcsLTY4LDM3LDQ3LC0yMSwtNiwtMTA0LDEzLDYsOSwtMiwzNSw4LC0yMywxOCw0Miw0NSwyMSwzMywtNSwtNDksOSwtNiwtNDMsLTU2LDM5LDIsLTE2LC0yNSw4NywxLC0zLC05LDE3LC0yNSwtMTEsLTksLTEsMTAsMiwtMTQsLTE0LDQsLTEsLTEwLDI4LC0yMyw0MCwtMzIsMjYsLTksMjYsNCwtMjcsLTIzLDMsNDIsLTYwLDEsNDksLTMsMjcsMTAsLTUyLC00MCwtMiwxOCw0NSwtMjMsMTcsLTQ0LDMsLTMsMTcsLTQ2LDUyLC00MCwtNDcsMjUsNzUsMzEsLTQ5LDUzLDMwLC0zMCwtMzIsLTM2LDM4LC02LC0xNSwtMTYsNTQsLTI3LC00OCwzLDM4LC0yOSwtMzIsLTIyLC0xNCwtNCwtMjMsLTEzLDMyLC0zOSw5LDgsLTQ1LC0xMywzNCwtMTYsNDksNDAsMzIsMzEsMjgsMjMsMjMsMzIsNDcsNTksLTY4LDgsNjIsNDQsMjUsLTE0LC0yNCwtNjUsLTE2LDM2LDY3LC0yNSwtMzgsLTIxLDQsLTMzLC0yLDQyLDUsLTYzLDQwLDExLDI2LC00MiwtMjMsLTYxLDc5LC0zMSwyMywtMjAsMTAsLTMyLDUzLC0yNSwtMzYsMTAsLTI2LC01LDMsMCwtNzEsNSwtMTAsLTM3LDEsLTI0LDIxLC01NCwtMTcsMSwtMjksLTI1LC0xNSwtMjcsMzIsNjgsNDUsLTE2LC0zNywtMTgsLTUsMSwwLC03Nyw3MSwtNiwzLC0yMCw3MSwtNjcsMjksLTM1LDEwLC0zMCwxOSw0LDE2LDE3LDUsMCwtMTQsMTksMiwyOCwyNiw1OSwzLDIsMjQsMzksNTUsLTUwLC00NSwtMTgsLTE3LDMzLC0zNSwxNCwtMSwxLDgsODcsLTM1LC0yOSwwLC0yNywxMywtNywyMywtMTMsMzcsLTQwLDUwLC0zNSwxNCwxOSwtNywtMTQsNDksNTQsLTUsMjIsLTIsLTI5LC04LC0yNywzOCwxMywyNyw0OCwxMiwtNDEsLTIxLC0xNSwyOCw3LC0xNiwtMjQsLTE5LC0yMCwxMSwtMjAsOSwyLDEzLDIzLC0yMCwxMSwyNywtMjcsNzEsLTY5LDgsMiwtNiwyMiwxMiwxNiwxNiw5LC0xNiwtOCwtMTcsMSwyNSwxLDQwLC0zNywtMzMsNjYsOTQsNTMsNCwtMjIsLTI1LC00MSwtNDIsMjUsMzUsLTE2LC0xNSw1NywzMSwtMjksLTMyLDIxLDE2LC02MCw0NSwxNSwtMSw3LDU3LC0yNiwtNDcsLTI5LDExLDgsMTUsMTksLTEwNSwtOCw1NCwyNywxMCwtMTcsNiwtMTIsLTEsLTEwLDQsMCwyMywtMTAsMzEsMTMsMTEsMTAsMTIsLTY0LDIzLC0zLC04LC0xOSwxNiw1MiwyNCwtNDAsMTYsMTAsNDAsNSw5LDAsLTEzLC03LC0yMSwtOCwtNiwtNywtMjEsNTksMTYsLTUzLDE4LC02MCwxMSwtNDcsMTQsLTE4LDI1LC0xMywtMjQsNCwtMzksMTYsLTI4LDU0LDI2LC02NywzMCwyNywtMjAsLTUyLDIwLC0xMiw1NSwxMiwxOCwtMTYsMzksLTE0LC02LC0yNiw1NiwtODgsLTU1LDEyLDI1LDI2LC0zNyw2LDc1LDAsLTM0LC04MSw1NCwtMzAsMSwtNyw0OSwtMjMsLTE0LDIxLDEwLC02MiwtNTgsLTU3LC00NywtMzQsMTUsLTQsMzQsLTc4LDMxLDI1LC0xMSw3LDUwLC0xMCw0MiwtNjMsMTQsLTM2LC00LDU3LDU1LDU3LDUzLDQyLC00MiwtMSwxNSw0MCwzNywxNSwyNSwtMTEsNiwxLDMxLC0yLC02LC0xLC03LC02NCwzNCwyOCwzMCwtMSwzLDIxLDAsLTg4LC0xMiwtNTYsMjUsLTI4LDQwLDgsLTI4LC0xNCw5LDEyLDIsLTYsLTE3LDIyLDQ5LC02LC0yNiwxNCwyOCwtMjAsNCwtMTIsNTAsMzUsNDAsMTMsLTM4LC01OCwtMjksMTcsMzAsMjIsNjAsMjYsLTU0LC0zOSwtMTIsNTgsLTI4LC02MywxMCwtMjEsLTgsLTEyLDI2LC02Miw2LC0xMCwtMTEsLTIyLC02LC03LDQsMSwxOCwyLC03MCwxMSwxNCw0LDEzLDE5LC0yNCwtMzQsMjQsNjcsMTcsNTEsLTIxLDEzLDIzLDU0LC0zMCw0OCwxLC0xMyw4MCwyNiwtMTYsLTIsMTMsLTQsNiwtMzAsMjksLTI0LDczLC01OCwzMCwtMjcsMjAsLTIsLTIxLDQxLDQ1LDMwLC0yNywtMywtNSwtMTgsLTIwLC00OSwtMywtMzUsMTAsNDIsLTE5LC02NywtNTMsLTExLDksMTMsLTE1LC0zMywtNTEsLTMwLDE1LDcsMjUsLTMwLDQsMjgsLTIyLC0zNCw1NCwtMjksMzksLTQ2LDIwLDE2LDM0LC00LDQ3LDc1LDEsLTQ0LC01NSwtMjQsNywtMSw5LC00Miw1MCwtOCwtMzYsNDEsNjgsMCwtNCwtMTAsLTIzLC0xNSwtNTAsNjQsMzYsLTksLTI3LDEyLDI1LC0zOCwtNDcsLTM3LDMyLC00OSw1MSwtMzYsMiwtNCw2OSwtMjYsMTksNyw0NSw2Nyw0NiwxMywtNjMsNDYsMTUsLTQ3LDQsLTQxLDEzLC02LDUsLTIxLDM3LDI2LC01NSwtNywzMywtMSwtMjgsMTAsLTE3LC02NCwtMTQsMCwtMzYsLTE3LDkzLC0zLC05LC02Niw0NCwtMjEsMywtMTIsMzgsLTYsLTEzLC0xMiwxOSwxMyw0MywtNDMsLTEwLC0xMiw2LC01LDksLTQ5LDMyLC01LDIsNCw1LDE1LC0xNiwxMCwtMjEsOCwtNjIsLTgsNjQsOCw3OSwtMSwtNjYsLTQ5LC0xOCw1LDQwLC01LC0zMCwtNDUsMSwtNiwyMSwtMzIsOTMsLTE4LC0zMCwtMjEsMzIsMjEsLTE4LDIyLDgsNSwtNDEsLTU0LDgwLDIyLC0xMCwtNywtOCwtMjMsLTY0LDY2LDU2LC0xNCwtMzAsLTQxLC00NiwtMTQsLTI5LC0zNywyNywtMTQsNDIsLTIsLTksLTI5LDM0LDE0LDMzLC0xNCwyMiw0LDEwLDI2LDI2LDI4LDMyLDIzLC03MiwtMzIsMywwLC0xNCwzNSwtNDIsLTc4LC0zMiw2LDI5LC0xOCwtNDUsLTUsNywtMzMsLTQ1LC0zLC0yMiwtMzQsOCwtOCw0LC01MSwtMjUsLTksNTksLTc4LDIxLC01LC0yNSwtNDgsNjYsLTE1LC0xNywtMjQsLTQ5LC0xMywyNSwtMjMsLTY0LC02LDQwLC0yNCwtMTksLTExLDU3LC0zMywtOCwxLDEwLC01MiwtNTQsMjgsMzksNDksMzQsLTExLC02MSwtNDEsLTQzLDEwLDE1LC0xNSw1MSwzMCwxNSwtNTEsMzIsLTM0LC0yLC0zNCwxNCwxOCwxNiwxLDEsLTMsLTMsMSwxLC0xOCw2LDE2LDQ4LDEyLC01LC00Miw3LDM2LDQ4LDcsLTIwLC0xMCw3LDEyLDIsNTQsMzksLTM4LDM3LDU0LDQsLTExLC04LC00NiwtMTAsNSwtMTAsLTM0LDQ2LC0xMiwyOSwtMzcsMzksMzYsLTExLDI0LDU2LDE3LDE0LDIwLDI1LDAsLTI1LC0yOCw1NSwtNywtNSwyNywzLDksLTI2LC04LDYsLTI0LC0xMCwtMzAsLTMxLC0zNCwxOCw0LDIyLDIxLDQwLC0xLC0yOSwtMzcsLTgsLTIxLDkyLC0yOSwxMSwtMywxMSw3MywyMywyMiw3LDQsLTQ0LC05LC0xMSwyMSwtMTMsMTEsOSwtNzgsLTEsNDcsMTE0LC0xMiwtMzcsLTE5LC01LC0xMSwtMjIsMTksMTIsLTMwLDcsMzgsNDUsLTIxLC04LC05LDU1LC00NSw1NiwtMjEsNywxNyw0NiwtNTcsLTg3LC02LDI3LDMxLDMxLDcsLTU2LC0xMiw0NiwyMSwtNSwtMTIsMzYsMywzLC0yMSw0MywxOSwxMiwtNyw5LC0xNCwwLC05LC0zMywtOTEsNywyNiwzLC0xMSw2NCw4MywtMzEsLTQ2LDI1LDIsOSw1LDIsMiwtMSwyMCwtMTcsMTAsLTUsLTI3LC04LDIwLDgsLTE5LDE2LC0yMSwtMTMsLTMxLDUsNSw0MiwyNCw5LDM0LC0yMCwyOCwtNjEsMjIsMTEsLTM5LDY0LC0yMCwtMSwtMzAsLTksLTIwLDI0LC0yNSwtMjQsLTI5LDIyLC02MCw2LC01LDQxLC05LC04NywxNCwzNCwxNSwtNTcsNTIsNjksMTUsLTMsLTEwMiw1OCwxNiwzLDYsNjAsLTc1LC0zMiwyNiw3LC01NywtMjcsLTMyLC0yNCwtMjEsLTI5LC0xNiw2MiwtNDYsMzEsMzAsLTI3LC0xNSw3LDE1XTtDb2RlYm9va19Db25zdGFudHMuZXhjXzVfNjRfdGFibGU9WzEsNSwtMTUsNDksLTY2LC00OCwtNCw1MCwtNDQsNywzNywxNiwtMTgsMjUsLTI2LC0yNiwtMTUsMTksMTksLTI3LC00NywyOCw1Nyw1LC0xNywtMzIsLTQxLDY4LDIxLC0yLDY0LDU2LDgsLTE2LC0xMywtMjYsLTksLTE2LDExLDYsLTM5LDI1LC0xOSwyMiwtMzEsMjAsLTQ1LDU1LC00MywxMCwtMTYsNDcsLTQwLDQwLC0yMCwtNTEsMywtMTcsLTE0LC0xNSwtMjQsNTMsLTIwLC00Niw0NiwyNywtNjgsMzIsMywtMTgsLTUsOSwtMzEsMTYsLTksLTEwLC0xLC0yMyw0OCw5NSw0NywyNSwtNDEsLTMyLC0zLDE1LC0yNSwtNTUsMzYsNDEsLTI3LDIwLDUsMTMsMTQsLTIyLDUsMiwtMjMsMTgsNDYsLTE1LDE3LC0xOCwtMzQsLTUsLTgsMjcsLTU1LDczLDE2LDIsLTEsLTE3LDQwLC03OCwzMywwLDIsMTksNCw1MywtMTYsLTE1LC0xNiwtMjgsLTMsLTEzLDQ5LDgsLTcsLTI5LDI3LC0xMywzMiwyMCwzMiwtNjEsMTYsMTQsNDEsNDQsNDAsMjQsMjAsNyw0LDQ4LC02MCwtNzcsMTcsLTYsLTQ4LDY1LC0xNSwzMiwtMzAsLTcxLC0xMCwtMywtNiwxMCwtMiwtNywtMjksLTU2LDY3LC0zMCw3LC01LDg2LC02LC0xMCwwLDUsLTMxLDYwLDM0LC0zOCwtMywyNCwxMCwtMiwzMCwyMywyNCwtNDEsMTIsNzAsLTQzLDE1LC0xNyw2LDEzLDE2LC0xMyw4LDMwLC0xNSwtOCw1LDIzLC0zNCwtOTgsLTQsLTEzLDEzLC00OCwtMzEsNzAsMTIsMzEsMjUsMjQsLTI0LDI2LC03LDMzLC0xNiw4LDUsLTExLC0xNCwtOCwtNjUsMTMsMTAsLTIsLTksMCwtMywtNjgsNSwzNSw3LDAsLTMxLC0xLC0xNywtOSwtOSwxNiwtMzcsLTE4LC0xLDY5LC00OCwtMjgsMjIsLTIxLC0xMSw1LDQ5LDU1LDIzLC04NiwtMzYsMTYsMiwxMyw2MywtNTEsMzAsLTExLDEzLDI0LC0xOCwtNiwxNCwtMTksMSw0MSw5LC01LDI3LC0zNiwtNDQsLTM0LC0zNywtMjEsLTI2LDMxLC0zOSwxNSw0Myw1LC04LDI5LDIwLC04LC0yMCwtNTIsLTI4LC0xLDEzLDI2LC0zNCwtMTAsLTksMjcsLTgsOCwyNywtNjYsNCwxMiwtMjIsNDksMTAsLTc3LDMyLC0xOCwzLC0zOCwxMiwtMywtMSwyLDIsMF07Q29kZWJvb2tfQ29uc3RhbnRzLmV4Y184XzEyOF90YWJsZT1bLTE0LDksMTMsLTMyLDIsLTEwLDMxLC0xMCwtOCwtOCw2LC00LC0xLDEwLC02NCwyMyw2LDIwLDEzLDYsOCwtMjIsMTYsMzQsNyw0MiwtNDksLTI4LDUsMjYsNCwtMTUsNDEsMzQsNDEsMzIsMzMsMjQsMjMsMTQsOCw0MCwzNCw0LC0yNCwtNDEsLTE5LC0xNSwxMywtMTMsMzMsLTU0LDI0LDI3LC00NCwzMywyNywtMTUsLTE1LDI0LC0xOSwxNCwtMzYsMTQsLTksMjQsLTEyLC00LDM3LC01LDE2LC0zNCw1LDEwLDMzLC0xNSwtNTQsLTE2LDEyLDI1LDEyLDEsMiwwLDMsLTEsLTQsLTQsMTEsMiwtNTYsNTQsMjcsLTIwLDEzLC02LC00NiwtNDEsLTMzLC0xMSwtNSw3LDEyLDE0LC0xNCwtNSw4LDIwLDYsMyw0LC04LC01LC00MiwxMSw4LC0xNCwyNSwtMiwyLDEzLDExLC0yMiwzOSwtOSw5LDUsLTQ1LC05LDcsLTksMTIsLTcsMzQsLTE3LC0xMDIsNywyLC00MiwxOCwzNSwtOSwtMzQsMTEsLTUsLTIsMywyMiw0NiwtNTIsLTI1LC05LC05NCw4LDExLC01LC01LC01LDQsLTcsLTM1LC03LDU0LDUsLTMyLDMsMjQsLTksLTIyLDgsNjUsMzcsLTEsLTEyLC0yMywtNiwtOSwtMjgsNTUsLTMzLDE0LC0zLDIsMTgsLTYwLDQxLC0xNyw4LC0xNiwxNywtMTEsMCwtMTEsMjksLTI4LDM3LDksLTUzLDMzLC0xNCwtOSw3LC0yNSwtNywtMTEsMjYsLTMyLC04LDI0LC0yMSwyMiwtMTksMTksLTEwLDI5LC0xNCwtMTAsLTQsLTMsLTIsMywtMSwtNCwtNCwtNSwtNTIsMTAsNDEsNiwtMzAsLTQsMTYsMzIsMjIsLTI3LC0yMiwzMiwtMywtMjgsLTMsMywtMzUsNiwxNywyMywyMSw4LDIsNCwtNDUsLTE3LDE0LDIzLC00LC0zMSwtMTEsLTMsMTQsMSwxOSwtMTEsMiw2MSwtOCw5LC0xMiw3LC0xMCwxMiwtMywtMjQsOTksLTQ4LDIzLDUwLC0zNywtNSwtMjMsMCw4LC0xNCwzNSwtNjQsLTUsNDYsLTI1LDEzLC0xLC00OSwtMTksLTE1LDksMzQsNTAsMjUsMTEsLTYsLTksLTE2LC0yMCwtMzIsLTMzLC0zMiwtMjcsMTAsLTgsMTIsLTE1LDU2LC0xNCwtMzIsMzMsMywtOSwxLDY1LC05LC05LC0xMCwtMiwtNiwtMjMsOSwxNywzLC0yOCwxMywtMzIsNCwtMiwtMTAsNCwtMTYsNzYsMTIsLTUyLDYsMTMsMzMsLTYsNCwtMTQsLTksLTMsMSwtMTUsLTE2LDI4LDEsLTE1LDExLDE2LDksNCwtMjEsLTM3LC00MCwtNiwyMiwxMiwtMTUsLTIzLC0xNCwtMTcsLTE2LC05LC0xMCwtOSwxMywtMzksNDEsNSwtOSwxNiwtMzgsMjUsNDYsLTQ3LDQsNDksLTE0LDE3LC0yLDYsMTgsNSwtNiwtMzMsLTIyLDQ0LDUwLC0yLDEsMywtNiw3LDcsLTMsLTIxLDM4LC0xOCwzNCwtMTQsLTQxLDYwLC0xMyw2LDE2LC0yNCwzNSwxOSwtMTMsLTM2LDI0LDMsLTE3LC0xNCwtMTAsMzYsNDQsLTQ0LC0yOSwtMywzLC01NCwtOCwxMiw1NSwyNiw0LC0yLC01LDIsLTExLDIyLC0yMywyLDIyLDEsLTI1LC0zOSw2NiwtNDksMjEsLTgsLTIsMTAsLTE0LC02MCwyNSw2LDEwLDI3LC0yNSwxNiw1LC0yLC05LDI2LC0xMywtMjAsNTgsLTIsNyw1MiwtOSwyLDUsLTQsLTE1LDIzLC0xLC0zOCwyMyw4LDI3LC02LDAsLTI3LC03LDM5LC0xMCwtMTQsMjYsMTEsLTQ1LC0xMiw5LC01LDM0LDQsLTM1LDEwLDQzLC0yMiwtMTEsNTYsLTcsMjAsMSwxMCwxLC0yNiw5LDk0LDExLC0yNywtMTQsLTEzLDEsLTExLDAsMTQsLTUsLTYsLTEwLC00LC0xNSwtOCwtNDEsMjEsLTUsMSwtMjgsLTgsMjIsLTksMzMsLTIzLC00LC00LC0xMiwzOSw0LC03LDMsLTYwLDgwLDgsLTE3LDIsLTYsMTIsLTUsMSw5LDE1LDI3LDMxLDMwLDI3LDIzLDYxLDQ3LDI2LDEwLC01LC04LC0xMiwtMTMsNSwtMTgsMjUsLTE1LC00LC0xNSwtMTEsMTIsLTIsLTIsLTE2LC0yLC02LDI0LDEyLDExLC00LDksMSwtOSwxNCwtNDUsNTcsMTIsMjAsLTM1LDI2LDExLC02NCwzMiwtMTAsLTEwLDQyLC00LC05LC0xNiwzMiwyNCw3LDEwLDUyLC0xMSwtNTcsMjksMCw4LDAsLTYsMTcsLTE3LC01NiwtNDAsNywyMCwxOCwxMiwtNiwxNiw1LDcsLTEsOSwxLDEwLDI5LDEyLDE2LDEzLC0yLDIzLDcsOSwtMywtNCwtNSwxOCwtNjQsMTMsNTUsLTI1LDksLTksMjQsMTQsLTI1LDE1LC0xMSwtNDAsLTMwLDM3LDEsLTE5LDIyLC01LC0zMSwxMywtMiwwLDcsLTQsMTYsLTY3LDEyLDY2LC0zNiwyNCwtOCwxOCwtMTUsLTIzLDE5LDAsLTQ1LC03LDQsMywtMTMsMTMsMzUsNSwxMywzMywxMCwyNywyMywwLC03LC0xMSw0MywtNzQsMzYsLTEyLDIsNSwtOCw2LC0zMywxMSwtMTYsLTE0LC01LC03LC0zLDE3LC0zNCwyNywtMTYsMTEsLTksMTUsMzMsLTMxLDgsLTE2LDcsLTYsLTcsNjMsLTU1LC0xNywxMSwtMSwyMCwtNDYsMzQsLTMwLDYsOSwxOSwyOCwtOSw1LC0yNCwtOCwtMjMsLTIsMzEsLTE5LC0xNiwtNSwtMTUsLTE4LDAsMjYsMTgsMzcsLTUsLTE1LC0yLDE3LDUsLTI3LDIxLC0zMyw0NCwxMiwtMjcsLTksMTcsMTEsMjUsLTIxLC0zMSwtNywxMywzMywtOCwtMjUsLTcsNywtMTAsNCwtNiwtOSw0OCwtODIsLTIzLC04LDYsMTEsLTIzLDMsLTMsNDksLTI5LDI1LDMxLDQsMTQsMTYsOSwtNCwtMTgsMTAsLTI2LDMsNSwtNDQsLTksOSwtNDcsLTU1LDE1LDksMjgsMSw0LC0zLDQ2LDYsLTYsLTM4LC0yOSwtMzEsLTE1LC02LDMsMCwxNCwtNiw4LC01NCwtNTAsMzMsLTUsMSwtMTQsMzMsLTQ4LDI2LC00LC01LC0zLC01LC0zLC01LC0yOCwtMjIsNzcsNTUsLTEsMiwxMCwxMCwtOSwtMTQsLTY2LC00OSwxMSwtMzYsLTYsLTIwLDEwLC0xMCwxNiwxMiw0LC0xLC0xNiw0NSwtNDQsLTUwLDMxLC0yLDI1LDQyLDIzLC0zMiwtMjIsMCwxMSwyMCwtNDAsLTM1LC00MCwtMzYsLTMyLC0yNiwtMjEsLTEzLDUyLC0yMiw2LC0yNCwtMjAsMTcsLTUsLTgsMzYsLTI1LC0xMSwyMSwtMjYsNiwzNCwtOCw3LDIwLC0zLDUsLTI1LC04LDE4LC01LC05LC00LDEsLTksMjAsMjAsMzksNDgsLTI0LDksNSwtNjUsMjIsMjksNCwzLC00MywtMTEsMzIsLTYsOSwxOSwtMjcsLTEwLC00NywtMTQsMjQsMTAsLTcsLTM2LC03LC0xLC00LC01LC01LDE2LDUzLDI1LC0yNiwtMjksLTQsLTEyLDQ1LC01OCwtMzQsMzMsLTUsMiwtMSwyNywtNDgsMzEsLTE1LDIyLC01LDQsNyw3LC0yNSwtMywxMSwtMjIsMTYsLTEyLDgsLTMsNywtMTEsNDUsMTQsLTczLC0xOSw1NiwtNDYsMjQsLTIwLDI4LC0xMiwtMiwtMSwtMzYsLTMsLTMzLDE5LC02LDcsMiwtMTUsNSwtMzEsLTQ1LDgsMzUsMTMsMjAsMCwtOSw0OCwtMTMsLTQzLC0zLC0xMywyLC01LDcyLC02OCwtMjcsMiwxLC0yLC03LDUsMzYsMzMsLTQwLC0xMiwtNCwtNSwyMywxOV07Q29kZWJvb2tfQ29uc3RhbnRzLmdhaW5fY2Ria19uYj1bLTMyLC0zMiwtMzIsLTI4LC02NywtNSwtNDIsLTYsLTMyLC01NywtMTAsLTU0LC0xNiwyNywtNDEsMTksLTE5LC00MCwtNDUsMjQsLTIxLC04LC0xNCwtMTgsMSwxNCwtNTgsLTE4LC04OCwtMzksLTM4LDIxLC0xOCwtMTksMjAsLTQzLDEwLDE3LC00OCwtNTIsLTU4LC0xMywtNDQsLTEsLTExLC0xMiwtMTEsLTM0LDE0LDAsLTQ2LC0zNywtMzUsLTM0LC0yNSw0NCwtMzAsNiwtNCwtNjMsLTMxLDQzLC00MSwtMjMsMzAsLTQzLC00MywyNiwtMTQsLTMzLDEsLTEzLC0xMywxOCwtMzcsLTQ2LC03MywtNDUsLTM2LDI0LC0yNSwtMzYsLTExLC0yMCwtMjUsMTIsLTE4LC0zNiwtNjksLTU5LC00NSw2LDgsLTIyLC0xNCwtMjQsLTEsMTMsLTQ0LC0zOSwtNDgsLTI2LC0zMiwzMSwtMzcsLTMzLDE1LC00NiwtMjQsMzAsLTM2LC00MSwzMSwtMjMsLTUwLDIyLC00LC0yMiwyLC0yMSwtMTcsMzAsLTM0LC03LC02MCwtMjgsLTM4LDQyLC0yOCwtNDQsLTExLDIxLC0xNiw4LC00NCwtMzksLTU1LC00MywtMTEsLTM1LDI2LC05LDAsLTM0LC04LDEyMSwtODEsNywtMTYsLTIyLC0zNywzMywtMzEsLTI3LC03LC0zNiwtMzQsNzAsLTU3LC0zNywtMTEsLTQ4LC00MCwxNywtMSwtMzMsNiwtNiwtOSwwLC0yMCwtMjEsNjksLTMzLC0yOSwzMywtMzEsLTU1LDEyLC0xLC0zMywyNywtMjIsLTUwLC0zMywtNDcsLTUwLDU0LDUxLC0xLC01LC00NCwtNCwyMiwtNDAsLTM5LC02NiwtMjUsLTMzLDEsLTI2LC0yNCwtMjMsLTI1LC0xMSwyMSwtNDUsLTI1LC00NSwtMTksLTQzLDEwNSwtMTYsNSwtMjEsMSwtMTYsMTEsLTMzLC0xMywtOTksLTQsLTM3LDMzLC0xNSwtMjUsMzcsLTYzLC0zNiwyNCwtMzEsLTUzLC01NiwtMzgsLTQxLC00LDQsLTMzLDEzLC0zMCw0OSw1MiwtOTQsLTUsLTMwLC0xNSwxLDM4LC00MCwtMjMsMTIsLTM2LC0xNyw0MCwtNDcsLTM3LC00MSwtMzksLTQ5LDM0LDAsLTE4LC03LC00LC0xNiwxNywtMjcsMzAsNSwtNjIsNCw0OCwtNjgsLTQzLDExLC0xMSwtMTgsMTksLTE1LC0yMywtNjIsLTM5LC00MiwxMCwtMiwtMjEsLTEzLC0xMywtOSwxMywtNDcsLTIzLC02MiwtMjQsLTQ0LDYwLC0yMSwtMTgsLTMsLTUyLC0yMiwyMiwtMzYsLTc1LDU3LDE2LC0xOSwzLDEwLC0yOSwyMywtMzgsLTUsLTYyLC01MSwtNTEsNDAsLTE4LC00MiwxMywtMjQsLTM0LDE0LC0yMCwtNTYsLTc1LC0yNiwtMjYsMzIsMTUsLTI2LDE3LC0yOSwtNywyOCwtNTIsLTEyLC0zMCw1LC01LC00OCwtNSwyLDIsLTQzLDIxLDE2LDE2LC0yNSwtNDUsLTMyLC00MywxOCwtMTAsOSwwLC0xLC0xLDcsLTMwLDE5LC00OCwtNCwtMjgsMjUsLTI5LC0yMiwwLC0zMSwtMzIsMTcsLTEwLC02NCwtNDEsLTYyLC01MiwxNSwxNiwtMzAsLTIyLC0zMiwtNyw5LC0zOF07Q29kZWJvb2tfQ29uc3RhbnRzLmdhaW5fY2Ria19sYnI9Wy0zMiwtMzIsLTMyLC0zMSwtNTgsLTE2LC00MSwtMjQsLTQzLC01NiwtMjIsLTU1LC0xMywzMywtNDEsLTQsLTM5LC05LC00MSwxNSwtMTIsLTgsLTE1LC0xMiwxLDIsLTQ0LC0yMiwtNjYsLTQyLC0zOCwyOCwtMjMsLTIxLDE0LC0zNywwLDIxLC01MCwtNTMsLTcxLC0yNywtMzcsLTEsLTE5LC0xOSwtNSwtMjgsNiw2NSwtNDQsLTMzLC00OCwtMzMsLTQwLDU3LC0xNCwtMTcsNCwtNDUsLTMxLDM4LC0zMywtMjMsMjgsLTQwLC00MywyOSwtMTIsLTM0LDEzLC0yMywtMTYsMTUsLTI3LC0xNCwtODIsLTE1LC0zMSwyNSwtMzIsLTIxLDUsLTUsLTQ3LC02MywtNTEsLTQ2LDEyLDMsLTI4LC0xNywtMjksLTEwLDE0LC00MF07Q29kZWJvb2tfQ29uc3RhbnRzLmhleGNfMTBfMzJfdGFibGU9Wy0zLC0yLC0xLDAsLTQsNSwzNSwtNDAsLTksMTMsLTQ0LDUsLTI3LC0xLC03LDYsLTExLDcsLTgsNywxOSwtMTQsMTUsLTQsOSwtMTAsMTAsLTgsMTAsLTksLTEsMSwwLDAsMiw1LC0xOCwyMiwtNTMsNTAsMSwtMjMsNTAsLTM2LDE1LDMsLTEzLDE0LC0xMCw2LDEsNSwtMyw0LC0yLDUsLTMyLDI1LDUsLTIsLTEsLTQsMSwxMSwtMjksMjYsLTYsLTE1LDMwLC0xOCwwLDE1LC0xNyw0MCwtNDEsMyw5LC0yLC0yLDMsLTMsLTEsLTUsMiwyMSwtNiwtMTYsLTIxLDIzLDIsNjAsMTUsMTYsLTE2LC05LDE0LDksLTEsNywtOSwwLDEsMSwwLC0xLC02LDE3LC0yOCw1NCwtNDUsLTEsMSwtMSwtNiwtNiwyLDExLDI2LC0yOSwtMiw0NiwtMjEsMzQsMTIsLTIzLDMyLC0yMywxNiwtMTAsMyw2NiwxOSwtMjAsMjQsNywxMSwtMywwLC0zLC0xLC01MCwtNDYsMiwtMTgsLTMsNCwtMSwtMiwzLC0zLC0xOSw0MSwtMzYsOSwxMSwtMjQsMjEsLTE2LDksLTMsLTI1LC0zLDEwLDE4LC05LC0yLC01LC0xLC01LDYsLTQsLTMsMiwtMjYsMjEsLTE5LDM1LC0xNSw3LC0xMywxNywtMTksMzksLTQzLDQ4LC0zMSwxNiwtOSw3LC0yLC01LDMsLTQsOSwtMTksMjcsLTU1LDYzLC0zNSwxMCwyNiwtNDQsLTIsOSw0LDEsLTYsOCwtOSw1LC04LC0xLC0zLC0xNiw0NSwtNDIsNSwxNSwtMTYsMTAsMCwwLDAsMCwwLDAsMCwwLDAsMCwtMTYsMjQsLTU1LDQ3LC0zOCwyNywtMTksNywtMywxLDE2LDI3LDIwLC0xOSwxOCw1LC03LDEsLTUsMiwtNiw4LC0yMiwwLC0zLC0zLDgsLTEsNywtOCwxLC0zLDUsMCwxNywtNDgsNTgsLTUyLDI5LC03LC0yLDMsLTEwLDYsLTI2LDU4LC0zMSwxLC02LDMsOTMsLTI5LDM5LDMsMTcsNSw2LC0xLC0xLC0xLDI3LDEzLDEwLDE5LC03LC0zNCwxMiwxMCwtNCw5LC03Niw5LDgsLTI4LC0yLC0xMSwyLC0xLDMsMSwtODMsMzgsLTM5LDQsLTE2LC02LC0yLC01LDUsLTJdO0NvZGVib29rX0NvbnN0YW50cy5oZXhjX3RhYmxlPVstMjQsMjEsLTIwLDUsLTUsLTcsMTQsLTEwLDIsLTI3LDE2LC0yMCwwLC0zMiwyNiwxOSw4LC0xMSwtNDEsMzEsMjgsLTI3LC0zMiwzNCw0MiwzNCwtMTcsMjIsLTEwLDEzLC0yOSwxOCwtMTIsLTI2LC0yNCwxMSwyMiw1LC01LC01LDU0LC02OCwtNDMsNTcsLTI1LDI0LDQsNCwyNiwtOCwtMTIsLTE3LDU0LDMwLC00NSwxLDEwLC0xNSwxOCwtNDEsMTEsNjgsLTY3LDM3LC0xNiwtMjQsLTE2LDM4LC0yMiw2LC0yOSwzMCw2NiwtMjcsNSw3LC0xNiwxMywyLC0xMiwtNywtMywtMjAsMzYsNCwtMjgsOSwzLDMyLDQ4LDI2LDM5LDMsMCw3LC0yMSwtMTMsNSwtODIsLTcsNzMsLTIwLDM0LC05LC01LDEsLTEsMTAsLTUsLTEwLC0xLDksMSwtOSwxMCwwLC0xNCwxMSwtMSwtMiwtMSwxMSwyMCw5NiwtODEsLTIyLC0xMiwtOSwtNTgsOSwyNCwtMzAsMjYsLTM1LDI3LC0xMiwxMywtMTgsNTYsLTU5LDE1LC03LDIzLC0xNSwtMSw2LC0yNSwxNCwtMjIsLTIwLDQ3LC0xMSwxNiwyLDM4LC0yMywtMTksLTMwLC05LDQwLC0xMSw1LDQsLTYsOCwyNiwtMjEsLTExLDEyNyw0LDEsNiwtOSwyLC03LC0yLC0zLDcsLTUsMTAsLTE5LDcsLTEwNiw5MSwtMyw5LC00LDIxLC04LDI2LC04MCw4LDEsLTIsLTEwLC0xNywtMTcsLTI3LDMyLDcxLDYsLTI5LDExLC0yMyw1NCwtMzgsMjksLTIyLDM5LDg3LC0zMSwtMTIsLTIwLDMsLTIsLTIsMiwyMCwwLC0xLC0zNSwyNyw5LC02LC0xMiwzLC0xMiwtNiwxMywxLDE0LC0yMiwtNTksLTE1LC0xNywtMjUsMTMsLTcsNywzLDAsMSwtNyw2LC0zLDYxLC0zNywtMjMsLTIzLC0yOSwzOCwtMzEsMjcsMSwtOCwyLC0yNywyMywtMjYsMzYsLTM0LDUsMjQsLTI0LC02LDcsMywtNTksNzgsLTYyLDQ0LC0xNiwxLDYsMCwxNyw4LDQ1LDAsLTExMCw2LDE0LC0yLDMyLC03NywtNTYsNjIsLTMsMywtMTMsNCwtMTYsMTAyLC0xNSwtMzYsLTEsOSwtMTEzLDYsMjMsMCw5LDksNSwtOCwtMSwtMTQsNSwtMTIsMTIxLC01MywtMjcsLTgsLTksMjIsLTEzLDMsMiwtMywxLC0yLC03MSw5NSwzOCwtMTksMTUsLTE2LC01LDcxLDEwLDIsLTMyLC0xMywtNSwxNSwtMSwtMiwtMTQsLTg1LDMwLDI5LDYsMywyLDAsMCwwLDAsMCwwLDAsMCwyLC02NSwtNTYsLTksMTgsMTgsMjMsLTE0LC0yLDAsMTIsLTI5LDI2LC0xMiwxLDIsLTEyLC02NCw5MCwtNiw0LDEsNSwtNSwtMTEwLC0zLC0zMSwyMiwtMjksOSwwLDgsLTQwLC01LDIxLC01LC01LDEzLDEwLC0xOCw0MCwxLDM1LC0yMCwzMCwtMjgsMTEsLTYsMTksNywxNCwxOCwtNjQsOSwtNiwxNiw1MSw2OCw4LDE2LDEyLC04LDAsLTksMjAsLTIyLDI1LDcsLTQsLTEzLDQxLC0zNSw5MywtMTgsLTU0LDExLC0xLDEsLTksNCwtNjYsNjYsLTMxLDIwLC0yMiwyNSwtMjMsMTEsMTAsOSwxOSwxNSwxMSwtNSwtMzEsLTEwLC0yMywtMjgsLTYsLTYsLTMsLTQsNSwzLC0yOCwyMiwtMTEsLTQyLDI1LC0yNSwtMTYsNDEsMzQsNDcsLTYsMiw0MiwtMTksLTIyLDUsLTM5LDMyLDYsLTM1LDIyLDE3LC0zMCw4LC0yNiwtMTEsLTExLDMsLTEyLDMzLDMzLC0zNywyMSwtMSw2LC00LDMsMCwtNSw1LDEyLC0xMiw1NywyNywtNjEsLTMsMjAsLTE3LDIsMCw0LDAsLTIsLTMzLC01OCw4MSwtMjMsMzksLTEwLC01LDIsNiwtNyw1LDQsLTMsLTIsLTEzLC0yMywtNzIsMTA3LDE1LC01LDAsLTcsLTMsLTYsNSwtNCwxNSw0NywxMiwtMzEsMjUsLTE2LDgsMjIsLTI1LC02MiwtNTYsLTE4LDE0LDI4LDEyLDIsLTExLDc0LC02Niw0MSwtMjAsLTcsMTYsLTIwLDE2LC04LDAsLTE2LDQsLTE5LDkyLDEyLC01OSwtMTQsLTM5LDQ5LC0yNSwtMTYsMjMsLTI3LDE5LC0zLC0zMywxOSw4NSwtMjksNiwtNywtMTAsMTYsLTcsLTEyLDEsLTYsMiw0LC0yLDY0LDEwLC0yNSw0MSwtMiwtMzEsMTUsMCwxMTAsNTAsNjksMzUsMjgsMTksLTEwLDIsLTQzLC00OSwtNTYsLTE1LC0xNiwxMCwzLDEyLC0xLC04LDEsMjYsLTEyLC0xLDcsLTExLC0yNyw0MSwyNSwxLC0xMSwtMTgsMjIsLTcsLTEsLTQ3LC04LDIzLC0zLC0xNywtNywxOCwtMTI1LDU5LC01LDMsMTgsMSwyLDMsMjcsLTM1LDY1LC01Myw1MCwtNDYsMzcsLTIxLC0yOCw3LDE0LC0zNywtNSwtNSwxMiw1LC04LDc4LC0xOSwyMSwtNiwtMTYsOCwtNyw1LDIsNywyLDEwLC02LDEyLC02MCw0NCwxMSwtMzYsLTMyLDMxLDAsMiwtMiwyLDEsLTMsNywtMTAsMTcsLTIxLDEwLDYsLTIsMTksLTIsNTksLTM4LC04NiwzOCw4LC00MSwtMzAsLTQ1LC0zMyw3LDE1LDI4LDI5LC03LDI0LC00MCw3LDcsNSwtMiw5LDI0LC0yMywtMTgsNiwtMjksMzAsMiwyOCw0OSwtMTEsLTQ2LDEwLDQzLC0xMywtOSwtMSwtMywtNywtNywtMTcsLTYsOTcsLTMzLC0yMSwzLDUsMSwxMiwtNDMsLTgsMjgsNywtNDMsLTcsMTcsLTIwLDE5LC0xLDIsLTEzLDksNTQsMzQsOSwtMjgsLTExLC05LC0xNywxMTAsLTU5LDQ0LC0yNiwwLDMsLTEyLC00Nyw3MywtMzQsLTQzLDM4LC0zMywxNiwtNSwtNDYsLTQsLTYsLTIsLTI1LDE5LC0yOSwyOCwtMTMsNSwxNCwyNywtNDAsLTQzLDQsMzIsLTEzLC0yLC0zNSwtNCwxMTIsLTQyLDksLTEyLDM3LC0yOCwxNywxNCwtMTksMzUsLTM5LDIzLDMsLTE0LC0xLC01NywtNSw5NCwtOSwzLC0zOSw1LDMwLC0xMCwtMzIsNDIsLTEzLC0xNCwtOTcsLTYzLDMwLC05LDEsLTcsMTIsNSwyMCwxNywtOSwtMzYsLTMwLDI1LDQ3LC05LC0xNSwxMiwtMjIsOTgsLTgsLTUwLDE1LC0yNywyMSwtMTYsLTExLDIsMTIsLTEwLDEwLC0zLDMzLDM2LC05NiwwLC0xNywzMSwtOSw5LDMsLTIwLDEzLC0xMSw4LC00LDEwLC0xMCw5LDEsMTEyLC03MCwtMjcsNSwtMjEsMiwtNTcsLTMsLTI5LDEwLDE5LC0yMSwyMSwtMTAsLTY2LC0zLDkxLC0zNSwzMCwtMTIsMCwtNyw1OSwtMjgsMjYsMiwxNCwtMTgsMSwxLDExLDE3LDIwLC01NCwtNTksMjcsNCwyOSwzMiw1LDE5LDEyLC00LDEsNywtMTAsNSwtMiwxMCwwLDIzLC01LDI4LC0xMDQsNDYsMTEsMTYsMywyOSwxLC04LC0xNCwxLDcsLTUwLDg4LC02MiwyNiw4LC0xNywtMTQsNTAsMCwzMiwtMTIsLTMsLTI3LDE4LC04LC01LDgsMywtMjAsLTExLDM3LC0xMiw5LDMzLDQ2LC0xMDEsLTEsLTQsMSw2LC0xLDI4LC00MiwtMTUsMTYsNSwtMSwtMiwtNTUsODUsMzgsLTksLTQsMTEsLTIsLTksLTYsMywtMjAsLTEwLC03Nyw4OSwyNCwtMywtMTA0LC01NywtMjYsLTMxLC0yMCwtNiwtOSwxNCwyMCwtMjMsNDYsLTE1LC0zMSwyOCwxLC0xNSwtMiw2LC0yLDMxLDQ1LC03NiwyMywtMjVdO0NvZGVib29rX0NvbnN0YW50cy5oaWdoX2xzcF9jZGJrPVszOSwxMiwtMTQsLTIwLC0yOSwtNjEsLTY3LC03NiwtMzIsLTcxLC02Nyw2OCw3Nyw0NiwzNCw1LC0xMywtNDgsLTQ2LC03MiwtODEsLTg0LC02MCwtNTgsLTQwLC0yOCw4Miw5Myw2OCw0NSwyOSwzLC0xOSwtNDcsLTI4LC00MywtMzUsLTMwLC04LC0xMywtMzksLTkxLC05MSwtMTIzLC05NiwxMCwxMCwtNiwtMTgsLTU1LC02MCwtOTEsLTU2LC0zNiwtMjcsLTE2LC00OCwtNzUsNDAsMjgsLTEwLC0yOCwzNSw5LDM3LDE5LDEsLTIwLC0zMSwtNDEsLTE4LC0yNSwtMzUsLTY4LC04MCw0NSwyNywtMSw0NywxMywwLC0yOSwtMzUsLTU3LC01MCwtNzksLTczLC0zOCwtMTksNSwzNSwxNCwtMTAsLTIzLDE2LC04LDUsLTI0LC00MCwtNjIsLTIzLC0yNywtMjIsLTE2LC0xOCwtNDYsLTcyLC03Nyw0MywyMSwzMywxLC04MCwtNzAsLTcwLC02NCwtNTYsLTUyLC0zOSwtMzMsLTMxLC0zOCwtMTksLTE5LC0xNSwzMiwzMywtMiw3LC0xNSwtMTUsLTI0LC0yMywtMzMsLTQxLC01NiwtMjQsLTU3LDUsODksNjQsNDEsMjcsNSwtOSwtNDcsLTYwLC05NywtOTcsLTEyNCwtMjAsLTksLTQ0LC03MywzMSwyOSwtNCw2NCw0OCw3LC0zNSwtNTcsMCwtMywtMjYsLTQ3LC0zLC02LC00MCwtNzYsLTc5LC00OCwxMiw4MSw1NSwxMCw5LC0yNCwtNDMsLTczLC01NywtNjksMTYsNSwtMjgsLTUzLDE4LDI5LDIwLDAsLTQsLTExLDYsLTEzLDIzLDcsLTE3LC0zNSwtMzcsLTM3LC0zMCwtNjgsLTYzLDYsMjQsLTksLTE0LDMsMjEsLTEzLC0yNywtNTcsLTQ5LC04MCwtMjQsLTQxLC01LC0xNiwtNSwxLDQ1LDI1LDEyLC03LDMsLTE1LC02LC0xNiwtMTUsLTgsNiwtMTMsLTQyLC04MSwtODAsLTg3LDE0LDEsLTEwLC0zLC00MywtNjksLTQ2LC0yNCwtMjgsLTI5LDM2LDYsLTQzLC01NiwtMTIsMTIsNTQsNzksNDMsOSw1NCwyMiwyLDgsLTEyLC00MywtNDYsLTUyLC0zOCwtNjksLTg5LC01LDc1LDM4LDMzLDUsLTEzLC01MywtNjIsLTg3LC04OSwtMTEzLC05OSwtNTUsLTM0LC0zNyw2Miw1NSwzMywxNiwyMSwtMiwtMTcsLTQ2LC0yOSwtMzgsLTM4LC00OCwtMzksLTQyLC0zNiwtNzUsLTcyLC04OCwtNDgsLTMwLDIxLDIsLTE1LC01NywtNjQsLTk4LC04NCwtNzYsMjUsMSwtNDYsLTgwLC0xMiwxOCwtNywzLDM0LDYsMzgsMzEsMjMsNCwtMSwyMCwxNCwtMTUsLTQzLC03OCwtOTEsLTI0LDE0LC0zLDU0LDE2LDAsLTI3LC0yOCwtNDQsLTU2LC04MywtOTIsLTg5LC0zLDM0LDU2LDQxLDM2LDIyLDIwLC04LC03LC0zNSwtNDIsLTYyLC00OSwzLDEyLC0xMCwtNTAsLTg3LC05NiwtNjYsOTIsNzAsMzgsOSwtNzAsLTcxLC02MiwtNDIsLTM5LC00MywtMTEsLTcsLTUwLC03OSwtNTgsLTUwLC0zMSwzMiwzMSwtNiwtNCwtMjUsNywtMTcsLTM4LC03MCwtNTgsLTI3LC00MywtODMsLTI4LDU5LDM2LDIwLDMxLDIsLTI3LC03MSwtODAsLTEwOSwtOTgsLTc1LC0zMywtMzIsLTMxLC0yLDMzLDE1LC02LDQzLDMzLC01LDAsLTIyLC0xMCwtMjcsLTM0LC00OSwtMTEsLTIwLC00MSwtOTEsLTEwMCwtMTIxLC0zOSw1Nyw0MSwxMCwtMTksLTUwLC0zOCwtNTksLTYwLC03MCwtMTgsLTIwLC04LC0zMSwtOCwtMTUsMSwtMTQsLTI2LC0yNSwzMywyMSwzMiwxNywxLC0xOSwtMTksLTI2LC01OCwtODEsLTM1LC0yMiw0NSwzMCwxMSwtMTEsMywtMjYsLTQ4LC04NywtNjcsLTgzLC01OCwzLC0xLC0yNiwtMjAsNDQsMTAsMjUsMzksNSwtOSwtMzUsLTI3LC0zOCw3LDEwLDQsLTksLTQyLC04NSwtMTAyLC0xMjcsNTIsNDQsMjgsMTAsLTQ3LC02MSwtNDAsLTM5LC0xNywtMSwtMTAsLTMzLC00MiwtNzQsLTQ4LDIxLC00LDcwLDUyLDEwXTtDb2RlYm9va19Db25zdGFudHMuaGlnaF9sc3BfY2RiazI9Wy0zNiwtNjIsNiwtOSwtMTAsLTE0LC01NiwyMywxLC0yNiwyMywtNDgsLTE3LDEyLDgsLTcsMjMsMjksLTM2LC0yOCwtNiwtMjksLTE3LC01LDQwLDIzLDEwLDEwLC00NiwtMTMsMzYsNiw0LC0zMCwtMjksNjIsMzIsLTMyLC0xLDIyLC0xNCwxLC00LC0yMiwtNDUsMiw1NCw0LC0zMCwtNTcsLTU5LC0xMiwyNywtMywtMzEsOCwtOSw1LDEwLC0xNCwzMiw2NiwxOSw5LDIsLTI1LC0zNywyMywtMTUsMTgsLTM4LC0zMSw1LC05LC0yMSwxNSwwLDIyLDYyLDMwLDE1LC0xMiwtMTQsLTQ2LDc3LDIxLDMzLDMsMzQsMjksLTE5LDUwLDIsMTEsOSwtMzgsLTEyLC0zNyw2MiwxLC0xNSw1NCwzMiw2LDIsLTI0LDIwLDM1LC0yMSwyLDE5LDI0LC0xMyw1NSw0LDksMzksLTE5LDMwLC0xLC0yMSw3Myw1NCwzMyw4LDE4LDMsMTUsNiwtMTksLTQ3LDYsLTMsLTQ4LC01MCwxLDI2LDIwLDgsLTIzLC01MCw2NSwtMTQsLTU1LC0xNywtMzEsLTM3LC0yOCw1MywtMSwtMTcsLTUzLDEsNTcsMTEsLTgsLTI1LC0zMCwtMzcsNjQsNSwtNTIsLTQ1LDE1LDIzLDMxLDE1LDE0LC0yNSwyNCwzMywtMiwtNDQsLTU2LC0xOCw2LC0yMSwtNDMsNCwtMTIsMTcsLTM3LDIwLC0xMCwzNCwxNSwyLDE1LDU1LDIxLC0xMSwtMzEsLTYsNDYsMjUsMTYsLTksLTI1LC04LC02MiwyOCwxNywyMCwtMzIsLTI5LDI2LDMwLDI1LC0xOSwyLC0xNiwtMTcsMjYsLTUxLDIsNTAsNDIsMTksLTY2LDIzLDI5LC0yLDMsMTksLTE5LC0zNywzMiwxNSw2LDMwLC0zNCwxMywxMSwtNSw0MCwzMSwxMCwtNDIsNCwtOSwyNiwtOSwtNzAsMTcsLTIsLTIzLDIwLC0yMiwtNTUsNTEsLTI0LC0zMSwyMiwtMjIsMTUsLTEzLDMsLTEwLC0yOCwtMTYsNTYsNCwtNjMsMTEsLTE4LC0xNSwtMTgsLTM4LC0zNSwxNiwtNywzNCwtMSwtMjEsLTQ5LC00Nyw5LC0zNyw3LDgsNjksNTUsMjAsNiwtMzMsLTQ1LC0xMCwtOSw2LC05LDEyLDcxLDE1LC0zLC00MiwtNywtMjQsMzIsLTM1LC0yLC00MiwtMTcsLTUsMCwtMiwtMzMsLTU0LDEzLC0xMiwtMzQsNDcsMjMsMTksNTUsNywtOCw3NCwzMSwxNCwxNiwtMjMsLTI2LDE5LDEyLC0xOCwtNDksLTI4LC0zMSwtMjAsMiwtMTQsLTIwLC00Nyw3OCw0MCwxMywtMjMsLTExLDIxLC02LDE4LDEsNDcsNSwzOCwzNSwzMiw0NiwyMiw4LDEzLDE2LC0xNCwxOCw1MSwxOSw0MCwzOSwxMSwtMjYsLTEsLTE3LDQ3LDIsLTUzLC0xNSwzMSwtMjIsMzgsMjEsLTE1LC0xNiw1LC0zMyw1MywxNSwtMzgsODYsMTEsLTMsLTI0LDQ5LDEzLC00LC0xMSwtMTgsMjgsMjAsLTEyLC0yNywtMjYsMzUsLTI1LC0zNSwtMywtMjAsLTYxLDMwLDEwLC01NSwtMTIsLTIyLC01MiwtNTQsLTE0LDE5LC0zMiwtMTIsNDUsMTUsLTgsLTQ4LC05LDExLC0zMiw4LC0xNiwtMzQsLTEzLDUxLDE4LDM4LC0yLC0zMiwtMTcsMjIsLTIsLTE4LC0yOCwtNzAsNTksMjcsLTI4LC0xOSwtMTAsLTIwLC05LC05LC04LC0yMSwyMSwtOCwzNSwtMiw0NSwtMywtOSwxMiwwLDMwLDcsLTM5LDQzLDI3LC0zOCwtOTEsMzAsMjYsMTksLTU1LC00LDYzLDE0LC0xNywxMyw5LDEzLDIsNyw0LDYsNjEsNzIsLTEsLTE3LDI5LC0xLC0yMiwtMTcsOCwtMjgsLTM3LDYzLDQ0LDQxLDMsMiwxNCw5LC02LDc1LC04LC03LC0xMiwtMTUsLTEyLDEzLDksLTQsMzAsLTIyLC02NSwxNSwwLC00NSw0LC00LDEsNSwyMiwxMSwyM107Q29kZWJvb2tfQ29uc3RhbnRzLk5CX0NEQktfU0laRT02NDtDb2RlYm9va19Db25zdGFudHMuTkJfQ0RCS19TSVpFX0xPVzE9NjQ7Q29kZWJvb2tfQ29uc3RhbnRzLk5CX0NEQktfU0laRV9MT1cyPTY0O0NvZGVib29rX0NvbnN0YW50cy5OQl9DREJLX1NJWkVfSElHSDE9NjQ7Q29kZWJvb2tfQ29uc3RhbnRzLk5CX0NEQktfU0laRV9ISUdIMj02NDtDb2RlYm9va19Db25zdGFudHMuY2Ria19uYj1bMzAsMTksMzgsMzQsNDAsMzIsNDYsNDMsNTgsNDMsNSwtMTgsLTI1LC00MCwtMzMsLTU1LC01MiwyMCwzNCwyOCwtMjAsLTYzLC05NywtOTIsNjEsNTMsNDcsNDksNTMsNzUsLTE0LC01MywtNzcsLTc5LDAsLTMsLTUsMTksMjIsMjYsLTksLTUzLC01NSw2Niw5MCw3Miw4NSw2OCw3NCw1MiwtNCwtNDEsLTU4LC0zMSwtMTgsLTMxLDI3LDMyLDMwLDE4LDI0LDMsOCw1LC0xMiwtMywyNiwyOCw3NCw2MywtMiwtMzksLTY3LC03NywtMTA2LC03NCw1OSw1OSw3Myw2NSw0NCw0MCw3MSw3Miw4Miw4Myw5OCw4OCw4OSw2MCwtNiwtMzEsLTQ3LC00OCwtMTMsLTM5LC05LDcsMiw3OSwtMSwtMzksLTYwLC0xNyw4Nyw4MSw2NSw1MCw0NSwxOSwtMjEsLTY3LC05MSwtODcsLTQxLC01MCw3LDE4LDM5LDc0LDEwLC0zMSwtMjgsMzksMjQsMTMsMjMsNSw1Niw0NSwyOSwxMCwtNSwtMTMsLTExLC0zNSwtMTgsLTgsLTEwLC04LC0yNSwtNzEsLTc3LC0yMSwyLDE2LDUwLDYzLDg3LDg3LDUsLTMyLC00MCwtNTEsLTY4LDAsMTIsNiw1NCwzNCw1LC0xMiwzMiw1Miw2OCw2NCw2OSw1OSw2NSw0NSwxNCwtMTYsLTMxLC00MCwtNjUsLTY3LDQxLDQ5LDQ3LDM3LC0xMSwtNTIsLTc1LC04NCwtNCw1Nyw0OCw0Miw0MiwzMywtMTEsLTUxLC02OCwtNiwxMywwLDgsLTgsMjYsMzIsLTIzLC01MywwLDM2LDU2LDc2LDk3LDEwNSwxMTEsOTcsLTEsLTI4LC0zOSwtNDAsLTQzLC01NCwtNDQsLTQwLC0xOCwzNSwxNiwtMjAsLTE5LC0yOCwtNDIsMjksNDcsMzgsNzQsNDUsMywtMjksLTQ4LC02MiwtODAsLTEwNCwtMzMsNTYsNTksNTksMTAsMTcsNDYsNzIsODQsMTAxLDExNywxMjMsMTIzLDEwNiwtNywtMzMsLTQ5LC01MSwtNzAsLTY3LC0yNywtMzEsNzAsNjcsLTE2LC02MiwtODUsLTIwLDgyLDcxLDg2LDgwLDg1LDc0LC0xOSwtNTgsLTc1LC00NSwtMjksLTMzLC0xOCwtMjUsNDUsNTcsLTEyLC00MiwtNSwxMiwyOCwzNiw1Miw2NCw4MSw4MiwxMywtOSwtMjcsLTI4LDIyLDMsMiwyMiwyNiw2LC02LC00NCwtNTEsMiwxNSwxMCw0OCw0Myw0OSwzNCwtMTksLTYyLC04NCwtODksLTEwMiwtMjQsOCwxNyw2MSw2OCwzOSwyNCwyMywxOSwxNiwtNSwxMiwxNSwyNywxNSwtOCwtNDQsLTQ5LC02MCwtMTgsLTMyLC0yOCw1Miw1NCw2MiwtOCwtNDgsLTc3LC03MCw2NiwxMDEsODMsNjMsNjEsMzcsLTEyLC01MCwtNzUsLTY0LDMzLDE3LDEzLDI1LDE1LDc3LDEsLTQyLC0yOSw3Miw2NCw0Niw0OSwzMSw2MSw0NCwtOCwtNDcsLTU0LC00NiwtMzAsMTksMjAsLTEsLTE2LDAsMTYsLTEyLC0xOCwtOSwtMjYsLTI3LC0xMCwtMjIsNTMsNDUsLTEwLC00NywtNzUsLTgyLC0xMDUsLTEwOSw4LDI1LDQ5LDc3LDUwLDY1LDExNCwxMTcsMTI0LDExOCwxMTUsOTYsOTAsNjEsLTksLTQ1LC02MywtNjAsLTc1LC01Nyw4LDExLDIwLDI5LDAsLTM1LC00OSwtNDMsNDAsNDcsMzUsNDAsNTUsMzgsLTI0LC03NiwtMTAzLC0xMTIsLTI3LDMsMjMsMzQsNTIsNzUsOCwtMjksLTQzLDEyLDYzLDM4LDM1LDI5LDI0LDgsMjUsMTEsMSwtMTUsLTE4LC00MywtNywzNyw0MCwyMSwtMjAsLTU2LC0xOSwtMTksLTQsLTIsMTEsMjksNTEsNjMsLTIsLTQ0LC02MiwtNzUsLTg5LDMwLDU3LDUxLDc0LDUxLDUwLDQ2LDY4LDY0LDY1LDUyLDYzLDU1LDY1LDQzLDE4LC05LC0yNiwtMzUsLTU1LC02OSwzLDYsOCwxNywtMTUsLTYxLC04NiwtOTcsMSw4Niw5Myw3NCw3OCw2NywtMSwtMzgsLTY2LC00OCw0OCwzOSwyOSwyNSwxNywtMSwxMywxMywyOSwzOSw1MCw1MSw2OSw4Miw5Nyw5OCwtMiwtMzYsLTQ2LC0yNywtMTYsLTMwLC0xMywtNCwtNywtNCwyNSwtNSwtMTEsLTYsLTI1LC0yMSwzMywxMiwzMSwyOSwtOCwtMzgsLTUyLC02MywtNjgsLTg5LC0zMywtMSwxMCw3NCwtMiwtMTUsNTksOTEsMTA1LDEwNSwxMDEsODcsODQsNjIsLTcsLTMzLC01MCwtMzUsLTU0LC00NywyNSwxNyw4Miw4MSwtMTMsLTU2LC04MywyMSw1OCwzMSw0MiwyNSw3Miw2NSwtMjQsLTY2LC05MSwtNTYsOSwtMiwyMSwxMCw2OSw3NSwyLC0yNCwxMSwyMiwyNSwyOCwzOCwzNCw0OCwzMyw3LC0yOSwtMjYsMTcsMTUsLTEsMTQsMCwtMiwwLC02LC00MSwtNjcsNiwtMiwtOSwxOSwyLDg1LDc0LC0yMiwtNjcsLTg0LC03MSwtNTAsMywxMSwtOSwyLDYyXTtDb2RlYm9va19Db25zdGFudHMuY2Ria19uYl9sb3cxPVstMzQsLTUyLC0xNSw0NSwyLDIzLDIxLDUyLDI0LC0zMywtOSwtMSw5LC00NCwtNDEsLTEzLC0xNyw0NCwyMiwtMTcsLTYsLTQsLTEsMjIsMzgsMjYsMTYsMiw1MCwyNywtMzUsLTM0LC05LC00MSw2LDAsLTE2LC0zNCw1MSw4LC0xNCwtMzEsLTQ5LDE1LC0zMyw0NSw0OSwzMywtMTEsLTM3LC02MiwtNTQsNDUsMTEsLTUsLTcyLDExLC0xLC0xMiwtMTEsMjQsMjcsLTExLC00Myw0Niw0MywzMywtMTIsLTksLTEsMSwtNCwtMjMsLTU3LC03MSwxMSw4LDE2LDE3LC04LC0yMCwtMzEsLTQxLDUzLDQ4LC0xNiwzLDY1LC0yNCwtOCwtMjMsLTMyLC0zNywtMzIsLTQ5LC0xMCwtMTcsNiwzOCw1LC05LC0xNywtNDYsOCw1MiwzLDYsNDUsNDAsMzksLTcsLTYsLTM0LC03NCwzMSw4LDEsLTE2LDQzLDY4LC0xMSwtMTksLTMxLDQsNiwwLC02LC0xNywtMTYsLTM4LC0xNiwtMzAsMiw5LC0zOSwtMTYsLTEsNDMsLTEwLDQ4LDMsMywtMTYsLTMxLC0zLDYyLDY4LDQzLDEzLDMsLTEwLDgsMjAsLTU2LDEyLDEyLC0yLC0xOCwyMiwtMTUsLTQwLC0zNiwxLDcsNDEsMCwxLDQ2LC02LC02MiwtNCwtMTIsLTIsLTExLC04MywtMTMsLTIsOTEsMzMsLTEwLDAsNCwtMTEsLTE2LDc5LDMyLDM3LDE0LDksNTEsLTIxLC0yOCwtNTYsLTM0LDAsMjEsOSwtMjYsMTEsMjgsLTQyLC01NCwtMjMsLTIsLTE1LDMxLDMwLDgsLTM5LC02NiwtMzksLTM2LDMxLC0yOCwtNDAsLTQ2LDM1LDQwLDIyLDI0LDMzLDQ4LDIzLC0zNCwxNCw0MCwzMiwxNywyNywtMywyNSwyNiwtMTMsLTYxLC0xNywxMSw0LDMxLDYwLC02LC0yNiwtNDEsLTY0LDEzLDE2LC0yNiw1NCwzMSwtMTEsLTIzLC05LC0xMSwtMzQsLTcxLC0yMSwtMzQsLTM1LDU1LDUwLDI5LC0yMiwtMjcsLTUwLC0zOCw1NywzMyw0Miw1Nyw0OCwyNiwxMSwwLC00OSwtMzEsMjYsLTQsLTE0LDUsNzgsMzcsMTcsMCwtNDksLTEyLC0yMywyNiwxNCwyLDIsLTQzLC0xNywtMTIsMTAsLTgsLTQsOCwxOCwxMiwtNiwyMCwtMTIsLTYsLTEzLC0yNSwzNCwxNSw0MCw0OSw3LDgsMTMsMjAsMjAsLTE5LC0yMiwtMiwtOCwyLDUxLC01MV07Q29kZWJvb2tfQ29uc3RhbnRzLmNkYmtfbmJfbG93Mj1bLTYsNTMsLTIxLC0yNCw0LDI2LDE3LC00LC0zNywyNSwxNywtMzYsLTEzLDMxLDMsLTYsMjcsMTUsLTEwLDMxLDI4LDI2LC0xMCwtMTAsLTQwLDE2LC03LDE1LDEzLDQxLC05LDAsLTQsNTAsLTYsLTcsMTQsMzgsMjIsMCwtNDgsMiwxLC0xMywtMTksMzIsLTMsLTYwLDExLC0xNywtMSwtMjQsLTM0LC0xLDM1LC01LC0yNywyOCw0NCwxMywyNSwxNSw0MiwtMTEsMTUsNTEsMzUsLTM2LDIwLDgsLTQsLTEyLC0yOSwxOSwtNDcsNDksLTE1LC00LDE2LC0yOSwtMzksMTQsLTMwLDQsMjUsLTksLTUsLTUxLC0xNCwtMywtNDAsLTMyLDM4LDUsLTksLTgsLTQsLTEsLTIyLDcxLC0zLDE0LDI2LC0xOCwtMjIsMjQsLTQxLC0yNSwtMjQsNiwyMywxOSwtMTAsMzksLTI2LC0yNyw2NSw0NSwyLC03LC0yNiwtOCwyMiwtMTIsMTYsMTUsMTYsLTM1LC01LDMzLC0yMSwtOCwwLDIzLDMzLDM0LDYsMjEsMzYsNiwtNywtMjIsOCwtMzcsLTE0LDMxLDM4LDExLC00LC0zLC0zOSwtMzIsLTgsMzIsLTIzLC02LC0xMiwxNiwyMCwtMjgsLTQsMjMsMTMsLTUyLC0xLDIyLDYsLTMzLC00MCwtNiw0LC02MiwxMyw1LC0yNiwzNSwzOSwxMSwyLDU3LC0xMSw5LC0yMCwtMjgsLTMzLDUyLC01LC02LC0yLDIyLC0xNCwtMTYsLTQ4LDM1LDEsLTU4LDIwLDEzLDMzLC0xLC03NCw1NiwtMTgsLTIyLC0zMSwxMiw2LC0xNCw0LC0yLC05LC00NywxMCwtMywyOSwtMTcsLTUsNjEsMTQsNDcsLTEyLDIsNzIsLTM5LC0xNyw5Miw2NCwtNTMsLTUxLC0xNSwtMzAsLTM4LC00MSwtMjksLTI4LDI3LDksMzYsOSwtMzUsLTQyLDgxLC0yMSwyMCwyNSwtMTYsLTUsLTE3LC0zNSwyMSwxNSwtMjgsNDgsMiwtMiw5LC0xOSwyOSwtNDAsMzAsLTE4LC0xOCwxOCwtMTYsLTU3LDE1LC0yMCwtMTIsLTE1LC0zNywtMTUsMzMsLTM5LDIxLC0yMiwtMTMsMzUsMTEsMTMsLTM4LC02MywyOSwyMywtMjcsMzIsMTgsMywtMjYsNDIsMzMsLTY0LC02NiwtMTcsMTYsNTYsMiwzNiwzLDMxLDIxLC00MSwtMzksOCwtNTcsMTQsMzcsLTIsMTksLTM2LC0xOSwtMjMsLTI5LC0xNiwxLC0zLC04LC0xMCwzMSw2NCwtNjVdO0NvZGVib29rX0NvbnN0YW50cy5jZGJrX25iX2hpZ2gxPVstMjYsLTgsMjksMjEsNCwxOSwtMzksMzMsLTcsLTM2LDU2LDU0LDQ4LDQwLDI5LC00LC0yNCwtNDIsLTY2LC00MywtNjAsMTksLTIsMzcsNDEsLTEwLC0zNywtNjAsLTY0LDE4LC0yMiw3Nyw3Myw0MCwyNSw0LDE5LC0xOSwtNjYsLTIsMTEsNSwyMSwxNCwyNiwtMjUsLTg2LC00LDE4LDEsMjYsLTM3LDEwLDM3LC0xLDI0LC0xMiwtNTksLTExLDIwLC02LDM0LC0xNiwtMTYsNDIsMTksLTI4LC01MSw1MywzMiw0LDEwLDYyLDIxLC0xMiwtMzQsMjcsNCwtNDgsLTQ4LC01MCwtNDksMzEsLTcsLTIxLC00MiwtMjUsLTQsLTQzLC0yMiw1OSwyLDI3LDEyLC05LC02LC0xNiwtOCwtMzIsLTU4LC0xNiwtMjksLTUsNDEsMjMsLTMwLC0zMywtNDYsLTEzLC0xMCwtMzgsNTIsNTIsMSwtMTcsLTksMTAsMjYsLTI1LC02LDMzLC0yMCw1Myw1NSwyNSwtMzIsLTUsLTQyLDIzLDIxLDY2LDUsLTI4LDIwLDksNzUsMjksLTcsLTQyLC0zOSwxNSwzLC0yMywyMSw2LDExLDEsLTI5LDE0LDYzLDEwLDU0LDI2LC0yNCwtNTEsLTQ5LDcsLTIzLC01MSwxNSwtNjYsMSw2MCwyNSwxMCwwLC0zMCwtNCwtMTUsMTcsMTksNTksNDAsNCwtNSwzMyw2LC0yMiwtNTgsLTcwLC01LDIzLC02LDYwLDQ0LC0yOSwtMTYsLTQ3LC0yOSw1MiwtMTksNTAsMjgsMTYsMzUsMzEsMzYsMCwtMjEsNiwyMSwyNywyMiw0Miw3LC02NiwtNDAsLTgsNywxOSw0NiwwLC00LDYwLDM2LDQ1LC03LC0yOSwtNiwtMzIsLTM5LDIsNiwtOSwzMywyMCwtNTEsLTM0LDE4LC02LDE5LDYsMTEsNSwtMTksLTI5LC0yLDQyLC0xMSwtNDUsLTIxLC01NSw1NywzNywyLC0xNCwtNjcsLTE2LC0yNywtMzgsNjksNDgsMTksMiwtMTcsMjAsLTIwLC0xNiwtMzQsLTE3LC0yNSwtNjEsMTAsNzMsNDUsMTYsLTQwLC02NCwtMTcsLTI5LC0yMiw1NiwxNywtMzksOCwtMTEsOCwtMjUsLTE4LC0xMywtMTksOCw1NCw1NywzNiwtMTcsLTI2LC00LDYsLTIxLDQwLDQyLC00LDIwLDMxLDUzLDEwLC0zNCwtNTMsMzEsLTE3LDM1LDAsMTUsLTYsLTIwLC02MywtNzMsMjIsMjUsMjksMTcsOCwtMjksLTM5LC02OSwxOCwxNSwtMTUsLTVdO0NvZGVib29rX0NvbnN0YW50cy5jZGJrX25iX2hpZ2gyPVsxMSw0NywxNiwtOSwtNDYsLTMyLDI2LC02NCwzNCwtNSwzOCwtNyw0NywyMCwyLC03MywtOTksLTMsLTQ1LDIwLDcwLC01MiwxNSwtNiwtNywtODIsMzEsMjEsNDcsNTEsMzksLTMsOSwwLC00MSwtNywtMTUsLTU0LDIsMCwyNywtMzEsOSwtNDUsLTIyLC0zOCwtMjQsLTI0LDgsLTMzLDIzLDUsNTAsLTM2LC0xNywtMTgsLTUxLC0yLDEzLDE5LDQzLDEyLC0xNSwtMTIsNjEsMzgsMzgsNywxMywwLDYsLTEsMyw2Miw5LDI3LDIyLC0zMywzOCwtMzUsLTksMzAsLTQzLC05LC0zMiwtMSw0LC00LDEsLTUsLTExLC04LDM4LDMxLDExLC0xMCwtNDIsLTIxLC0zNywxLDQzLDE1LC0xMywtMzUsLTE5LC0xOCwxNSwyMywtMjYsNTksMSwtMjEsNTMsOCwtNDEsLTUwLC0xNCwtMjgsNCwyMSwyNSwtMjgsLTQwLDUsLTQwLC00MSw0LDUxLC0zMywtOCwtOCwxLDE3LC02MCwxMiwyNSwtNDEsMTcsMzQsNDMsMTksNDUsNywtMzcsMjQsLTE1LDU2LC0yLDM1LC0xMCw0OCw0LC00NywtMiw1LC01LC01NCw1LC0zLC0zMywtMTAsMzAsLTIsLTQ0LC0yNCwtMzgsOSwtOSw0Miw0LDYsLTU2LDQ0LC0xNiw5LC00MCwtMjYsMTgsLTIwLDEwLDI4LC00MSwtMjEsLTQsMTMsLTE4LDMyLC0zMCwtMywzNywxNSwyMiwyOCw1MCwtNDAsMywtMjksLTY0LDcsNTEsLTE5LC0xMSwxNywtMjcsLTQwLC02NCwyNCwtMTIsLTcsLTI3LDMsMzcsNDgsLTEsMiwtOSwtMzgsLTM0LDQ2LDEsMjcsLTYsMTksLTEzLDI2LDEwLDM0LDIwLDI1LDQwLDUwLC02LC03LDMwLDksLTI0LDAsLTIzLDcxLC02MSwyMiw1OCwtMzQsLTQsMiwtNDksLTMzLDI1LDMwLC04LC02LC0xNiw3NywyLDM4LC04LC0zNSwtNiwtMzAsNTYsNzgsMzEsMzMsLTIwLDEzLC0zOSwyMCwyMiw0LDIxLC04LDQsLTYsMTAsLTgzLC00MSw5LC0yNSwtNDMsMTUsLTcsLTEyLC0zNCwtMzksLTM3LC0zMywxOSwzMCwxNiwtMzMsNDIsLTI1LDI1LC02OCw0NCwtMTUsLTExLC00LDIzLDUwLDE0LDQsLTM5LC00MywyMCwtMzAsNjAsOSwtMjAsNywxNiwxOSwtMzMsMzcsMjksMTYsLTM1LDcsMzgsLTI3XTtDb2RlYm9va19Db25zdGFudHMuaDA9WzAuMDAwMDM1OTYxODksLTAuMDAwMTEyMzUxNSwtMC4wMDAxMTA0NTg3LDAuMDAwMjc5MDI3NywwLjAwMDIyOTg0MzgsLTAuMDAwNTk1MzU2MywtMC4wMDAzODIzNjMxLDAuMDAxMTM4MjYsMC4wMDA1MzA4NTM5LC0wLjAwMTk4NjE3NywtMC4wMDA2MjQzNzI0LDAuMDAzMjM1ODc3LDAuMDAwNTc0MzE1OSwtMC4wMDQ5ODkxNDcsLTAuMDAwMjU4NDc2NywwLjAwNzM2NzE3MSwtMC4wMDA0ODU3OTM1LC0wLjAxMDUwNjg5LDAuMDAxODk0NzE0LDAuMDE0NTkzOTYsLTAuMDA0MzEzNjc0LC0wLjAxOTk0MzY1LDAuMDA4Mjg3NTYsMC4wMjcxNjA1NSwtMC4wMTQ4NTM5NywtMC4wMzc2NDk3MywwLjAyNjQ0NywwLjA1NTQzMjQ1LC0wLjA1MDk1NDg3LC0wLjA5Nzc5MDk2LDAuMTM4MjM2MywwLjQ2MDA5ODEsMC40NjAwOTgxLDAuMTM4MjM2MywtMC4wOTc3OTA5NiwtMC4wNTA5NTQ4NywwLjA1NTQzMjQ1LDAuMDI2NDQ3LC0wLjAzNzY0OTczLC0wLjAxNDg1Mzk3LDAuMDI3MTYwNTUsMC4wMDgyODc1NiwtMC4wMTk5NDM2NSwtMC4wMDQzMTM2NzQsMC4wMTQ1OTM5NiwwLjAwMTg5NDcxNCwtMC4wMTA1MDY4OSwtMC4wMDA0ODU3OTM1LDAuMDA3MzY3MTcxLC0wLjAwMDI1ODQ3NjcsLTAuMDA0OTg5MTQ3LDAuMDAwNTc0MzE1OSwwLjAwMzIzNTg3NywtMC4wMDA2MjQzNzI0LC0wLjAwMTk4NjE3NywwLjAwMDUzMDg1MzksMC4wMDExMzgyNiwtMC4wMDAzODIzNjMxLC0wLjAwMDU5NTM1NjMsMC4wMDAyMjk4NDM4LDAuMDAwMjc5MDI3NywtMC4wMDAxMTA0NTg3LC0wLjAwMDExMjM1MTUsMC4wMDAwMzU5NjE4OV07Q29kZWJvb2tfQ29uc3RhbnRzLmgxPVswLjAwMDAzNTk2MTg5LDAuMDAwMTEyMzUxNSwtMC4wMDAxMTA0NTg3LC0wLjAwMDI3OTAyNzcsMC4wMDAyMjk4NDM4LDAuMDAwNTk1MzU2MywtMC4wMDAzODIzNjMxLC0wLjAwMTEzODI2LDAuMDAwNTMwODUzOSwwLjAwMTk4NjE3NywtMC4wMDA2MjQzNzI0LC0wLjAwMzIzNTg3NywwLjAwMDU3NDMxNTksMC4wMDQ5ODkxNDcsLTAuMDAwMjU4NDc2NywtMC4wMDczNjcxNzEsLTAuMDAwNDg1NzkzNSwwLjAxMDUwNjg5LDAuMDAxODk0NzE0LC0wLjAxNDU5Mzk2LC0wLjAwNDMxMzY3NCwwLjAxOTk0MzY1LDAuMDA4Mjg3NTYsLTAuMDI3MTYwNTUsLTAuMDE0ODUzOTcsMC4wMzc2NDk3MywwLjAyNjQ0NywtMC4wNTU0MzI0NSwtMC4wNTA5NTQ4NywwLjA5Nzc5MDk2LDAuMTM4MjM2MywtMC40NjAwOTgxLDAuNDYwMDk4MSwtMC4xMzgyMzYzLC0wLjA5Nzc5MDk2LDAuMDUwOTU0ODcsMC4wNTU0MzI0NSwtMC4wMjY0NDcsLTAuMDM3NjQ5NzMsMC4wMTQ4NTM5NywwLjAyNzE2MDU1LC0wLjAwODI4NzU2LC0wLjAxOTk0MzY1LDAuMDA0MzEzNjc0LDAuMDE0NTkzOTYsLTAuMDAxODk0NzE0LC0wLjAxMDUwNjg5LDAuMDAwNDg1NzkzNSwwLjAwNzM2NzE3MSwwLjAwMDI1ODQ3NjcsLTAuMDA0OTg5MTQ3LC0wLjAwMDU3NDMxNTksMC4wMDMyMzU4NzcsMC4wMDA2MjQzNzI0LC0wLjAwMTk4NjE3NywtMC4wMDA1MzA4NTM5LDAuMDAxMTM4MjYsMC4wMDAzODIzNjMxLC0wLjAwMDU5NTM1NjMsLTAuMDAwMjI5ODQzOCwwLjAwMDI3OTAyNzcsMC4wMDAxMTA0NTg3LC0wLjAwMDExMjM1MTUsLTAuMDAwMDM1OTYxODldO3ZhciBCaXRzPWZ1bmN0aW9uKCl7dmFyIGg9MTAyNDt2YXIgYzt2YXIgZzt2YXIgZTt2YXIgYTtjPW5ldyBBcnJheSgpO2c9MDtlPTA7dGhpcy5nZXRCeXRlcz1mdW5jdGlvbigpe3JldHVybiBjfTt0aGlzLlBhY2s9ZnVuY3Rpb24oayxqKXtiKGssail9O2Z1bmN0aW9uIGIoayxqKXt2YXIgbT1rO3doaWxlKGo+MCl7dmFyIGw7bD0obT4+KGotMSkpJjE7Y1tnXXw9KGw8PCg3LWUpKTtlKys7aWYoZT09OCl7ZT0wO2crK31qLS19fWZ1bmN0aW9uIGYoKXtpZihlPjApe2IoMCwxKX13aGlsZShlIT0wKXtiKDEsMSl9fXRoaXMuV3JpdGU9ZnVuY3Rpb24oaixtLGspe2YoKTt2YXIgbD1kKCk7az1sO0FycmF5Q29weShjLDAsaixtLGspO3JldHVybiBrfTt0aGlzLlJlc2V0PWZ1bmN0aW9uKCl7Yz1bXTtnPTA7ZT0wfTtmdW5jdGlvbiBkKCl7cmV0dXJuIGcrKChlPjApPzE6MCl9fTtmdW5jdGlvbiBMYnJMc3BRdWFudCgpe31mdW5jdGlvbiBTdWJNb2RlKGgsZSxsLGosZixiLGEsZCxjLGcsayl7dGhpcy5MYnJQaXRjaD1oO3RoaXMuRm9yY2VkUGl0Y2hHYWluPWU7dGhpcy5IYXZlU3ViZnJhbWVHYWluPWw7dGhpcy5Eb3VibGVDb2RlYm9vaz1qO3RoaXMuTHNxUXVhbnQ9Zjt0aGlzLkx0cD1iO3RoaXMuSW5ub3ZhdGlvbj1hO3RoaXMuTHBjRW5oSzE9ZDt0aGlzLkxwY0VuaEsyPWM7dGhpcy5Db21iR2Fpbj1nO3RoaXMuQml0c1BlckZyYW1lPWt9ZnVuY3Rpb24gTmJMc3BRdWFudCgpe3RoaXMuUXVhbnQ9ZnVuY3Rpb24oaCxjLGQsail7dmFyIGc7dmFyIGYsZTt2YXIgYjt2YXIgYT1uZXcgQXJyYXkoKTtmb3IodmFyIGc9MDtnPExzcFF1YW50Lk1BWF9MU1BfU0laRTtnKyspe2FbZ109MH1mb3IoZz0wO2c8ZDtnKyspe2NbZ109aFtnXX1hWzBdPTEvKGNbMV0tY1swXSk7YVtkLTFdPTEvKGNbZC0xXS1jW2QtMl0pO2ZvcihnPTE7ZzxkLTE7ZysrKXtmPTEvKCgwLjE1K2NbZ10tY1tnLTFdKSooMC4xNStjW2ddLWNbZy0xXSkpO2U9MS8oKDAuMTUrY1tnKzFdLWNbZ10pKigwLjE1K2NbZysxXS1jW2ddKSk7YVtnXT0oZj5lKT9mOmV9Zm9yKGc9MDtnPGQ7ZysrKXtjW2ddLT0wLjI1KmcrMC4yNX1mb3IoZz0wO2c8ZDtnKyspe2NbZ10qPTI1Nn1iPUxzcFF1YW50LkxzcF9xdWFudChjLDAsQ29kZWJvb2tfQ29uc3RhbnRzLmNkYmtfbmIsQ29kZWJvb2tfQ29uc3RhbnRzLk5CX0NEQktfU0laRSxkKTtqLlBhY2soYiw2KTtmb3IoZz0wO2c8ZDtnKyspe2NbZ10qPTJ9Yj1Mc3BRdWFudC5Mc3Bfd2VpZ2h0X3F1YW50KGMsMCxhLDAsQ29kZWJvb2tfQ29uc3RhbnRzLmNkYmtfbmJfbG93MSxDb2RlYm9va19Db25zdGFudHMuTkJfQ0RCS19TSVpFX0xPVzEsNSk7ai5QYWNrKGIsNik7Zm9yKGc9MDtnPDU7ZysrKXtjW2ddKj0yfWI9THNwUXVhbnQuTHNwX3dlaWdodF9xdWFudChjLDAsYSwwLENvZGVib29rX0NvbnN0YW50cy5jZGJrX25iX2xvdzIsQ29kZWJvb2tfQ29uc3RhbnRzLk5CX0NEQktfU0laRV9MT1cyLDUpO2ouUGFjayhiLDYpO2I9THNwUXVhbnQuTHNwX3dlaWdodF9xdWFudChjLDUsYSw1LENvZGVib29rX0NvbnN0YW50cy5jZGJrX25iX2hpZ2gxLENvZGVib29rX0NvbnN0YW50cy5OQl9DREJLX1NJWkVfSElHSDEsNSk7ai5QYWNrKGIsNik7Zm9yKGc9NTtnPDEwO2crKyl7Y1tnXSo9Mn1iPUxzcFF1YW50LkxzcF93ZWlnaHRfcXVhbnQoYyw1LGEsNSxDb2RlYm9va19Db25zdGFudHMuY2Ria19uYl9oaWdoMixDb2RlYm9va19Db25zdGFudHMuTkJfQ0RCS19TSVpFX0hJR0gyLDUpO2ouUGFjayhiLDYpO2ZvcihnPTA7ZzxkO2crKyl7Y1tnXSo9MC4wMDA5NzY1Nn1mb3IoZz0wO2c8ZDtnKyspe2NbZ109aFtnXS1jW2ddfX19dmFyIFZFUllfU01BTEw9MDt2YXIgTkJfRlJBTUVfU0laRT1bNSw0MywxMTksMTYwLDIyMCwzMDAsMzY0LDQ5Miw3OSwxLDEsMSwxLDEsMSwxXTt2YXIgTkJfU1VCTU9ERVM9MTY7dmFyIE5CX1NVQk1PREVfQklUUz00O3ZhciBleGNfZ2Fpbl9xdWFudF9zY2FsMT1bLTAuMzUsMC4wNV07dmFyIGV4Y19nYWluX3F1YW50X3NjYWwzPVstMi43OTQ3NSwtMS44MTA2NiwtMS4xNjk4NSwtMC44NDgxMTksLTAuNTg3MTksLTAuMzI5ODE4LC0wLjA2MzI2NiwwLjI4MjgyNl07dmFyIG1fbHNwO3ZhciBmaWx0ZXJzO3ZhciBzdWJtb2Rlczt2YXIgc3VibW9kZUlEO3ZhciBmaXJzdDt2YXIgZnJhbWVTaXplO3ZhciBzdWJmcmFtZVNpemU7dmFyIG5iU3ViZnJhbWVzO3ZhciB3aW5kb3dTaXplO3ZhciBscGNTaXplO3ZhciBidWZTaXplO3ZhciBtaW5fcGl0Y2g7dmFyIG1heF9waXRjaDt2YXIgZ2FtbWExO3ZhciBnYW1tYTI7dmFyIGxhZ19mYWN0b3I7dmFyIGxwY19mbG9vcjt2YXIgcHJlZW1waDt2YXIgcHJlX21lbTt2YXIgZnJtQnVmO3ZhciBmcm1JZHg7dmFyIGV4Y0J1Zjt2YXIgd2JleGNCdWY7dmFyIGV4Y0lkeDt2YXIgaW5ub3Y7dmFyIGxwYzt2YXIgcWxzcDt2YXIgb2xkX3Fsc3A7dmFyIGludGVycF9xbHNwO3ZhciBpbnRlcnBfcWxwYzt2YXIgbWVtX3NwO3ZhciBwaV9nYWluO3ZhciBhd2sxLGF3azIsYXdrMzt2YXIgdm9jX20xO3ZhciB2b2NfbTI7dmFyIHZvY19tZWFuO3ZhciB2b2Nfb2Zmc2V0O3ZhciBkdHhfZW5hYmxlZDt0aGlzLm1fbHNwPW5ldyBMc3AoKTt0aGlzLmZpbHRlcnM9bmV3IEZpbHRlcnMoKTtOYmluaXQoKTtmdW5jdGlvbiBOYmluaXQoKXtzdWJtb2Rlcz1CdWlsZE5iU3ViTW9kZXMoKTtzdWJtb2RlSUQ9NTtOYkNvZGVjX2luaXQoMTYwLDQwLDEwLDY0MCl9ZnVuY3Rpb24gTmJDb2RlY19pbml0KGEsZSxkLGMpe2ZpcnN0PTE7dGhpcy5mcmFtZVNpemU9YTt0aGlzLndpbmRvd1NpemU9YSozLzI7dGhpcy5zdWJmcmFtZVNpemU9ZTt0aGlzLm5iU3ViZnJhbWVzPWEvZTt0aGlzLmxwY1NpemU9ZDt0aGlzLmJ1ZlNpemU9YzttaW5fcGl0Y2g9MTc7bWF4X3BpdGNoPTE0NDtwcmVlbXBoPTA7cHJlX21lbT0wO2dhbW1hMT0wLjk7Z2FtbWEyPTAuNjtsYWdfZmFjdG9yPTAuMDE7bHBjX2Zsb29yPTEuMDAwMTtmcm1CdWY9bmV3IEFycmF5KCk7ZnJtSWR4PWMtd2luZG93U2l6ZTtleGNCdWY9bmV3IEFycmF5KCk7d2JleGNCdWY9bmV3IEFycmF5KCk7Zm9yKHZhciBiPTA7YjxjO2IrKyl7ZnJtQnVmW2JdPTA7ZXhjQnVmW2JdPTA7d2JleGNCdWZbYl09MH1leGNJZHg9Yy13aW5kb3dTaXplO2lubm92PW5ldyBBcnJheSgpO2Zvcih2YXIgYj0wO2I8YTtiKyspe2lubm92W2JdPTB9bHBjPW5ldyBBcnJheSgpO2Zvcih2YXIgYj0wO2I8ZCsxO2IrKyl7bHBjW2JdPTB9cWxzcD1uZXcgQXJyYXkoKTtvbGRfcWxzcD1uZXcgQXJyYXkoKTtpbnRlcnBfcWxzcD1uZXcgQXJyYXkoKTtmb3IodmFyIGI9MDtiPGQ7YisrKXtxbHNwW2JdPTA7b2xkX3Fsc3BbYl09MDtpbnRlcnBfcWxzcFtiXT0wfWludGVycF9xbHBjPW5ldyBBcnJheSgpO2Zvcih2YXIgYj0wO2I8ZCsxO2IrKyl7aW50ZXJwX3FscGNbYl09MH1tZW1fc3A9bmV3IEFycmF5KCk7Zm9yKHZhciBiPTA7Yjw1KmQ7YisrKXttZW1fc3BbYl09MH1waV9nYWluPW5ldyBBcnJheSgpO2Zvcih2YXIgYj0wO2I8bmJTdWJmcmFtZXM7YisrKXtwaV9nYWluW2JdPTB9YXdrMT1uZXcgQXJyYXkoKTthd2syPW5ldyBBcnJheSgpO2F3azM9bmV3IEFycmF5KCk7Zm9yKHZhciBiPTA7YjxkKzE7YisrKXthd2sxW2JdPTA7YXdrMltiXT0wO2F3azNbYl09MH12b2NfbTE9dm9jX20yPXZvY19tZWFuPTA7dm9jX29mZnNldD0wO2R0eF9lbmFibGVkPTB9ZnVuY3Rpb24gQnVpbGROYlN1Yk1vZGVzKCl7dmFyIGY9bmV3IEx0cDNUYXAoQ29kZWJvb2tfQ29uc3RhbnRzLmdhaW5fY2Ria19uYiw3LDcpO3ZhciBqPW5ldyBMdHAzVGFwKENvZGVib29rX0NvbnN0YW50cy5nYWluX2NkYmtfbGJyLDUsMCk7dmFyIGU9bmV3IEx0cDNUYXAoQ29kZWJvb2tfQ29uc3RhbnRzLmdhaW5fY2Ria19sYnIsNSw3KTt2YXIgYT1uZXcgTHRwM1RhcChDb2RlYm9va19Db25zdGFudHMuZ2Fpbl9jZGJrX2xiciw1LDcpO3ZhciBvPW5ldyBMdHBGb3JjZWRQaXRjaCgpO3ZhciBrPW5ldyBOb2lzZVNlYXJjaCgpO3ZhciBsPW5ldyBTcGxpdFNoYXBlU2VhcmNoKDQwLDEwLDQsQ29kZWJvb2tfQ29uc3RhbnRzLmV4Y18xMF8xNl90YWJsZSw0LDApO3ZhciBuPW5ldyBTcGxpdFNoYXBlU2VhcmNoKDQwLDEwLDQsQ29kZWJvb2tfQ29uc3RhbnRzLmV4Y18xMF8zMl90YWJsZSw1LDApO3ZhciBkPW5ldyBTcGxpdFNoYXBlU2VhcmNoKDQwLDUsOCxDb2RlYm9va19Db25zdGFudHMuZXhjXzVfNjRfdGFibGUsNiwwKTt2YXIgYj1uZXcgU3BsaXRTaGFwZVNlYXJjaCg0MCw4LDUsQ29kZWJvb2tfQ29uc3RhbnRzLmV4Y184XzEyOF90YWJsZSw3LDApO3ZhciBnPW5ldyBTcGxpdFNoYXBlU2VhcmNoKDQwLDUsOCxDb2RlYm9va19Db25zdGFudHMuZXhjXzVfMjU2X3RhYmxlLDgsMCk7dmFyIGg9bmV3IFNwbGl0U2hhcGVTZWFyY2goNDAsMjAsMixDb2RlYm9va19Db25zdGFudHMuZXhjXzIwXzMyX3RhYmxlLDUsMCk7dmFyIHA9bmV3IE5iTHNwUXVhbnQoKTt2YXIgbT1uZXcgTGJyTHNwUXVhbnQoKTt2YXIgYz1uZXcgQXJyYXkoKTtjWzFdPW5ldyBTdWJNb2RlKDAsMSwwLDAsbSxvLGssMC43LDAuNywtMSw0Myk7Y1syXT1uZXcgU3ViTW9kZSgwLDAsMCwwLG0saixsLDAuNywwLjUsMC41NSwxMTkpO2NbM109bmV3IFN1Yk1vZGUoLTEsMCwxLDAsbSxlLG4sMC43LDAuNTUsMC40NSwxNjApO2NbNF09bmV3IFN1Yk1vZGUoLTEsMCwxLDAsbSxhLGIsMC43LDAuNjMsMC4zNSwyMjApO2NbNV09bmV3IFN1Yk1vZGUoLTEsMCwzLDAscCxmLGQsMC43LDAuNjUsMC4yNSwzMDApO2NbNl09bmV3IFN1Yk1vZGUoLTEsMCwzLDAscCxmLGcsMC42OCwwLjY1LDAuMSwzNjQpO2NbN109bmV3IFN1Yk1vZGUoLTEsMCwzLDEscCxmLGQsMC42NSwwLjY1LC0xLDQ5Mik7Y1s4XT1uZXcgU3ViTW9kZSgwLDEsMCwwLG0sbyxoLDAuNywwLjUsMC42NSw3OSk7cmV0dXJuIGN9dmFyIEZyYW1lU2l6ZTt2YXIgQmFuZE1vZGU9ZnVuY3Rpb24oKXt9O0JhbmRNb2RlLk5hcnJvdz0wO0JhbmRNb2RlLldpZGU9MTtCYW5kTW9kZS5VbHRyYVdpZGU9Mjt2YXIgSGlnaExzcFF1YW50PWZ1bmN0aW9uKCl7dGhpcy5RdWFudD1mdW5jdGlvbihkLGUsYSxmKXt2YXIgYzt2YXIgZzt2YXIgYj1uZXcgQXJyYXkoKTtmb3IoYz0wO2M8YTtjKyspe2VbY109ZFtjXX1iWzBdPTEvKGVbMV0tZVswXSk7YlthLTFdPTEvKGVbYS0xXS1lW2EtMl0pO2ZvcihjPTE7YzxhLTE7YysrKXtiW2NdPU1hdGgubWF4KDEvKGVbY10tZVtjLTFdKSwxLyhlW2MrMV0tZVtjXSkpfWZvcihjPTA7YzxhO2MrKyl7ZVtjXS09MC4zMTI1KmMrMC43NX1mb3IoYz0wO2M8YTtjKyspe2VbY10qPTI1Nn1nPUxzcFF1YW50LkxzcF9xdWFudChlLDAsQ29kZWJvb2tfQ29uc3RhbnRzLmhpZ2hfbHNwX2NkYmssNjQsYSk7Zi5QYWNrKGcsNik7Zm9yKGM9MDtjPGE7YysrKXtlW2NdKj0yfWc9THNwUXVhbnQuTHNwX3dlaWdodF9xdWFudChlLDAsYiwwLENvZGVib29rX0NvbnN0YW50cy5oaWdoX2xzcF9jZGJrMiw2NCxhKTtmLlBhY2soZyw2KTtmb3IoYz0wO2M8YTtjKyspe2VbY10qPTAuMDAxOTUzMX1mb3IoYz0wO2M8YTtjKyspe2VbY109ZFtjXS1lW2NdfX19O3ZhciBMcGM9bmV3IGZ1bmN0aW9uKCl7dGhpcy5XbGQ9ZnVuY3Rpb24oYyxrLGgsYil7dmFyIGYsZDt2YXIgYSxnPWtbMF07aWYoa1swXT09MCl7Zm9yKGY9MDtmPGI7ZisrKXtoW2ZdPTB9cmV0dXJuIDB9Zm9yKGY9MDtmPGI7ZisrKXthPS1rW2YrMV07Zm9yKGQ9MDtkPGY7ZCsrKXthLT1jW2RdKmtbZi1kXX1oW2ZdPWEvPWc7Y1tmXT1hO2ZvcihkPTA7ZDxNYXRoLmZsb29yKGYvMik7ZCsrKXt2YXIgZT1jW2RdO2NbZF0rPWEqY1tmLTEtZF07Y1tmLTEtZF0rPWEqZX1pZigoZiUyKSE9MCl7Y1tkXSs9Y1tkXSphfWcqPTEtYSphfXJldHVybiBnfTt0aGlzLkF1dG9jb3JyPWZ1bmN0aW9uKGEsYyxnLGYpe3ZhciBlO3ZhciBiO3doaWxlKGctLT4wKXtmb3IoYj1nLGU9MDtiPGY7YisrKXtlKz1hW2JdKmFbYi1nXX1jW2ddPWV9fX07ZnVuY3Rpb24gTHNwKCl7dmFyIGE7YT1uZXcgQXJyYXkoKTt0aGlzLkxzcDJscGM9ZnVuY3Rpb24oYyxyLHMpe3ZhciBoLGc7dmFyIHAsbixkLGI7dmFyIHEsbyxsLGs9MDt2YXIgZT1zLzI7Zm9yKGg9MDtoPDQqZSsyO2grKyl7YVtoXT0wfWQ9MTtiPTE7Zm9yKGc9MDtnPD1zO2crKyl7dmFyIGY9MDtmb3IoaD0wO2g8ZTtoKyssZis9Mil7cT1oKjQ7bz1xKzE7bD1vKzE7az1sKzE7cD1kLTIqKGNbZl0pKmFbcV0rYVtvXTtuPWItMiooY1tmKzFdKSphW2xdK2Fba107YVtvXT1hW3FdO2Fba109YVtsXTthW3FdPWQ7YVtsXT1iO2Q9cDtiPW59cD1kK2FbaysxXTtuPWItYVtrKzJdO3JbZ109KHArbikqMC41O2FbaysxXT1kO2FbaysyXT1iO2Q9MDtiPTB9fX12YXIgcHc7cHc9bmV3IEFycmF5KCk7ZnVuY3Rpb24gQ2hlYl9wb2x5X2V2YShnLGIsYSl7dmFyIGU7dmFyIGY7dmFyIGQ7dmFyIGM9YT4+MTtkPW5ldyBBcnJheSgpO2RbMF09MTtkWzFdPWI7Zj1nW2NdK2dbYy0xXSpiO2IqPTI7Zm9yKGU9MjtlPD1jO2UrKyl7ZFtlXT1iKmRbZS0xXS1kW2UtMl07Zis9Z1tjLWVdKmRbZV19cmV0dXJuIGZ9THNwLnByb3RvdHlwZS5FbmZvcmNlX21hcmdpbj1Mc3AuRW5mb3JjZV9tYXJnaW49ZnVuY3Rpb24oYyxhLGQpe3ZhciBiO2lmKGNbMF08ZCl7Y1swXT1kfWlmKGNbYS0xXT5NYXRoLlBJLWQpe2NbYS0xXT1NYXRoLlBJLWR9Zm9yKGI9MTtiPGEtMTtiKyspe2lmKGNbYl08Y1tiLTFdK2Qpe2NbYl09Y1tiLTFdK2R9aWYoY1tiXT5jW2IrMV0tZCl7Y1tiXT0wLjUqKGNbYl0rY1tiKzFdLWQpfX19O0xzcC5wcm90b3R5cGUuTHBjMmxzcD1Mc3AuTHBjMmxzcD1mdW5jdGlvbihHLHosYixmLEYpe3ZhciBDLHMseCxCLGwsZyxoPTA7dmFyIEg7dmFyIEEsdyx1LHksdjt2YXIgYzt2YXIgZDt2YXIgbjt2YXIgRTt2YXIgcjt2YXIgbzt2YXIgdDt2YXIgZT0wO3k9MTt1PXovMjtjPW5ldyBBcnJheSgpO2Q9bmV3IEFycmF5KCk7bj0wO0U9MDtyPW47bz1FO2RbbisrXT0xO2NbRSsrXT0xO2ZvcihBPTE7QTw9dTtBKyspe2RbbisrXT1HW0FdK0dbeisxLUFdLWRbcisrXTtjW0UrK109R1tBXS1HW3orMS1BXStjW28rK119bj0wO0U9MDtmb3IoQT0wO0E8dTtBKyspe2Rbbl09MipkW25dO2NbRV09MipjW0VdO24rKztFKyt9bj0wO0U9MDtnPTA7bD0xO2Zvcih3PTA7dzx6O3crKyl7aWYodyUyIT0wKXt0PWN9ZWxzZXt0PWR9Qz1DaGViX3BvbHlfZXZhKHQsbCx6KTt5PTE7d2hpbGUoKHk9PTEpJiYoZz49LTEpKXt2YXIgRD1GKigxLTAuOSpsKmwpO2lmKE1hdGguYWJzKEMpPDAuMil7RCo9MC41fWc9bC1EO3M9Q2hlYl9wb2x5X2V2YSh0LGcseik7SD1zO0I9ZztpZigocypDKTwwKXtlKys7eD1DO2Zvcih2PTA7djw9Zjt2Kyspe2g9KGwrZykvMjt4PUNoZWJfcG9seV9ldmEodCxoLHopO2lmKHgqQz4wKXtDPXg7bD1ofWVsc2V7cz14O2c9aH19Ylt3XT1oO2w9aDt5PTB9ZWxzZXtDPUg7bD1CfX19cmV0dXJuIGV9O2Z1bmN0aW9uIFZicigpe3ZhciBzPTU7dmFyIGU9NjAwMDt2YXIgcT0wLjM7dmFyIHQ9W1stMSwtMSwtMSwtMSwtMSwtMSwtMSwtMSwtMSwtMSwtMV0sWzMuNSwyLjUsMiwxLjIsMC41LDAsLTAuNSwtMC43LC0wLjgsLTAuOSwtMV0sWzEwLDYuNSw1LjIsNC41LDMuOSwzLjUsMywyLjUsMi4zLDEuOCwxXSxbMTEsOC44LDcuNSw2LjUsNSwzLjksMy45LDMuOSwzLjUsMywxXSxbMTEsMTEsOS45LDksOCw3LDYuNSw2LDUsNCwyXSxbMTEsMTEsMTEsMTEsOS41LDksOCw3LDYuNSw1LDNdLFsxMSwxMSwxMSwxMSwxMSwxMSw5LjUsOC41LDgsNi41LDRdLFsxMSwxMSwxMSwxMSwxMSwxMSwxMSwxMSw5LjgsNy41LDUuNV0sWzgsNSwzLjcsMywyLjUsMiwxLjgsMS41LDEsMCwwXV07dmFyIGw9W1stMSwtMSwtMSwtMSwtMSwtMSwtMSwtMSwtMSwtMSwtMV0sWy0xLC0xLC0xLC0xLC0xLC0xLC0xLC0xLC0xLC0xLC0xXSxbMTEsMTEsOS41LDguNSw3LjUsNiw1LDMuOSwzLDIsMV0sWzExLDExLDExLDExLDExLDkuNSw4LjcsNy44LDcsNi41LDRdLFsxMSwxMSwxMSwxMSwxMSwxMSwxMSwxMSw5LjgsNy41LDUuNV1dO3ZhciBqPVtbLTEsLTEsLTEsLTEsLTEsLTEsLTEsLTEsLTEsLTEsLTFdLFszLjksMi41LDAsMCwwLDAsMCwwLDAsMCwtMV1dO3ZhciBhO3ZhciBjO3ZhciBoO3ZhciBnO3ZhciBvO3ZhciBkO3ZhciByO3ZhciBuO3ZhciBtO3ZhciBrO3ZhciBiO3ZhciBmO2M9MDtoPTE7bz0wO2E9MC4xO3I9MDtkPTA7bj0wO2s9MC4wNSpNYXRoLnBvdyhlLHEpO2I9MC4wNTttPWsvYjtmPTA7Zz1uZXcgQXJyYXkoKTtmb3IodmFyIHA9MDtwPHM7cCsrKXtnW3BdPU1hdGgubG9nKGUpfX12YXIgU0JfRlJBTUVfU0laRT1bNCwzNiwxMTIsMTkyLDM1MiwtMSwtMSwtMV07dmFyIFNCX1NVQk1PREVTPTg7dmFyIFNCX1NVQk1PREVfQklUUz0zO3ZhciBRTUZfT1JERVI9NjQ7dmFyIGZ1bGxGcmFtZVNpemU7dmFyIGZvbGRpbmdHYWluO3ZhciBoaWdoO3ZhciB5MCx5MTt2YXIgeDBkO3ZhciBnMF9tZW0sZzFfbWVtO3ZhciB3Ym1vZGVzO3ZhciB3Ym1vZGVJRDtmdW5jdGlvbiBTYkNvZGVjX2luaXQoYSxmLGUsYyxkKXt3Ym1vZGVzPUJ1aWxkV2JTdWJNb2RlcygpO3dibW9kZUlEPTM7ZnVsbEZyYW1lU2l6ZT0yKmE7Zm9sZGluZ0dhaW49ZDtsYWdfZmFjdG9yPTAuMDAyO2hpZ2g9bmV3IEFycmF5KCk7eTA9bmV3IEFycmF5KCk7eTE9bmV3IEFycmF5KCk7eDBkPW5ldyBBcnJheSgpO2cwX21lbT1uZXcgQXJyYXkoKTtnMV9tZW09bmV3IEFycmF5KCk7Zm9yKHZhciBiPTA7YjxmdWxsRnJhbWVTaXplO2IrKyl7aGlnaFtiXT0wO3kwW2JdPTA7eTFbYl09MH1mb3IodmFyIGI9MDtiPGE7YisrKXt4MGRbYl09MH1mb3IodmFyIGI9MDtiPFFNRl9PUkRFUjtiKyspe2cwX21lbVtiXT0wO2cxX21lbVtiXT0wfX1mdW5jdGlvbiBCdWlsZFdiU3ViTW9kZXMoKXt2YXIgYT1uZXcgSGlnaExzcFF1YW50KCk7dmFyIGQ9bmV3IFNwbGl0U2hhcGVTZWFyY2goNDAsMTAsNCxDb2RlYm9va19Db25zdGFudHMuaGV4Y18xMF8zMl90YWJsZSw1LDApO3ZhciBiPW5ldyBTcGxpdFNoYXBlU2VhcmNoKDQwLDgsNSxDb2RlYm9va19Db25zdGFudHMuaGV4Y190YWJsZSw3LDEpO3ZhciBjPW5ldyBBcnJheSgpO2NbMV09bmV3IFN1Yk1vZGUoMCwwLDEsMCxhLG51bGwsbnVsbCwwLjc1LDAuNzUsLTEsMzYpO2NbMl09bmV3IFN1Yk1vZGUoMCwwLDEsMCxhLG51bGwsZCwwLjg1LDAuNiwtMSwxMTIpO2NbM109bmV3IFN1Yk1vZGUoMCwwLDEsMCxhLG51bGwsYiwwLjc1LDAuNywtMSwxOTIpO2NbNF09bmV3IFN1Yk1vZGUoMCwwLDEsMSxhLG51bGwsYiwwLjc1LDAuNzUsLTEsMzUyKTtyZXR1cm4gY31mdW5jdGlvbiBCdWlsZFV3YlN1Yk1vZGVzKCl7dmFyIGE9bmV3IEhpZ2hMc3BRdWFudCgpO3ZhciBiPW5ldyBBcnJheSgpO2JbMV09bmV3IFN1Yk1vZGUoMCwwLDEsMCxhLG51bGwsbnVsbCwwLjc1LDAuNzUsLTEsMik7cmV0dXJuIGJ9ZnVuY3Rpb24gTmJFbmNvZGVyKCl7dmFyIHA9WzEsOCwyLDMsMyw0LDQsNSw1LDYsN107dmFyIEg7dmFyIHg7dmFyIGs7dmFyIHo7dmFyIHE7dmFyIHU7dmFyIGI7dmFyIEU7dmFyIEk7dmFyIEQ7dmFyIGg7dmFyIEY7dmFyIHQ7dmFyIEs7dmFyIGc7dmFyIG87dmFyIG07dmFyIEM7dmFyIHc7dmFyIG47dmFyIHk7dmFyIGw7dmFyIEc7dmFyIHI7dmFyIEE7dmFyIGU7dmFyIEo7dmFyIGM7dmFyIHY7dmFyIGY7dmFyIHM7dmFyIGo7dmFyIGE7dmFyIGQ7QigxNjAsNDAsMTAsNjQwKTtmdW5jdGlvbiBCKEwsUCxPLE4pe05iQ29kZWNfaW5pdChMLFAsTyxOKTtBPTM7ZT0wO3ZhZF9lbmFibGVkPTA7Sj0wO2M9ODtzdWJtb2RlU2VsZWN0PTU7az0wO0g9MTt6PW5ldyBBcnJheSgpO3E9Ti13aW5kb3dTaXplO3U9bmV3IEFycmF5KCk7Yj1OLXdpbmRvd1NpemU7Zm9yKHZhciBNPTA7TTxOO00rKyl7eltNXT0wO3VbTV09MH1FPVdpbmRvdyh3aW5kb3dTaXplLFApO2g9TGFnV2luZG93KE8sbGFnX2ZhY3Rvcik7RD1uZXcgQXJyYXkoKTtmb3IodmFyIE09MDtNPE8rMTtNKyspe0RbTV09MH1JPW5ldyBBcnJheSgpO2Zvcih2YXIgTT0wO008d2luZG93U2l6ZTtNKyspe0lbTV09MH1nPW5ldyBBcnJheSgpO2ludGVycF9xbHBjPW5ldyBBcnJheSgpO289bmV3IEFycmF5KCk7bT1uZXcgQXJyYXkoKTtmb3IodmFyIE09MDtNPE8rMTtNKyspe2dbTV09MDtpbnRlcnBfcWxwY1tNXT0wO29bTV09MDttW01dPTB9Rj1uZXcgQXJyYXkoKTtxbHNwPW5ldyBBcnJheSgpO3Q9bmV3IEFycmF5KCk7b2xkX3Fsc3A9bmV3IEFycmF5KCk7Sz1uZXcgQXJyYXkoKTtpbnRlcnBfcWxzcD1uZXcgQXJyYXkoKTtmb3IodmFyIE09MDtNPE87TSsrKXtGW01dPTA7cWxzcFtNXT0wO3RbTV09MDtvbGRfcWxzcFtNXT0wO0tbTV09MDtpbnRlcnBfcWxzcFtNXT0wfUM9bmV3IEFycmF5KCk7bWVtX3NwPW5ldyBBcnJheSgpO3c9bmV3IEFycmF5KCk7bj1uZXcgQXJyYXkoKTt5PW5ldyBBcnJheSgpO2Zvcih2YXIgTT0wO008TztNKyspe0NbTV09MDttZW1fc3BbTV09MDt3W01dPTA7bltNXT0wO3lbTV09MH1sPW5ldyBWYnIoKTtHPTA7aj0wO2E9ODAwMDthd2sxPW5ldyBBcnJheSgpO2F3azI9bmV3IEFycmF5KCk7YXdrMz1uZXcgQXJyYXkoKTtmb3IodmFyIE09MDtNPE8rMTtNKyspe2F3azFbTV09MDthd2syW01dPTA7YXdrM1tNXT0wfXI9bmV3IEFycmF5KCk7Zm9yKHZhciBNPTA7TTw0MDtNKyspe3JbTV09MH14PW5ldyBBcnJheSgpO2Zvcih2YXIgTT0wO008bmJTdWJmcmFtZXM7TSsrKXt4W01dPTB9fXRoaXMuRW5jb2RlPWZ1bmN0aW9uKGFnLGFkKXt2YXIgYWk7dmFyIGFwLGFtLFY7dmFyIFc7dmFyIFE7QXJyYXlDb3B5KGZybUJ1ZixmcmFtZVNpemUsZnJtQnVmLDAsYnVmU2l6ZS1mcmFtZVNpemUpO2ZybUJ1ZltidWZTaXplLWZyYW1lU2l6ZV09YWRbMF0tcHJlZW1waCpwcmVfbWVtO2ZvcihhaT0xO2FpPGZyYW1lU2l6ZTthaSsrKXtmcm1CdWZbYnVmU2l6ZS1mcmFtZVNpemUrYWldPWFkW2FpXS1wcmVlbXBoKmFkW2FpLTFdfXByZV9tZW09YWRbZnJhbWVTaXplLTFdO0FycmF5Q29weSh6LGZyYW1lU2l6ZSx6LDAsYnVmU2l6ZS1mcmFtZVNpemUpO0FycmF5Q29weShleGNCdWYsZnJhbWVTaXplLGV4Y0J1ZiwwLGJ1ZlNpemUtZnJhbWVTaXplKTtBcnJheUNvcHkodSxmcmFtZVNpemUsdSwwLGJ1ZlNpemUtZnJhbWVTaXplKTtmb3IoYWk9MDthaTx3aW5kb3dTaXplO2FpKyspe0lbYWldPWZybUJ1ZlthaStmcm1JZHhdKkVbYWldfUxwYy5BdXRvY29ycihJLEQsbHBjU2l6ZSsxLHdpbmRvd1NpemUpO0RbMF0rPTEwO0RbMF0qPWxwY19mbG9vcjtmb3IoYWk9MDthaTxscGNTaXplKzE7YWkrKyl7RFthaV0qPWhbYWldfUxwYy5XbGQobHBjLEQsQyxscGNTaXplKTtBcnJheUNvcHkobHBjLDAsbHBjLDEsbHBjU2l6ZSk7bHBjWzBdPTE7dmFyIFQ9THNwLkxwYzJsc3AobHBjLGxwY1NpemUsRiwxNSwwLjIpO2lmKFQ9PWxwY1NpemUpe2ZvcihhaT0wO2FpPGxwY1NpemU7YWkrKyl7RlthaV09TWF0aC5hY29zKEZbYWldKX19ZWxzZXtpZihBPjEpe1Q9THNwLkxwYzJsc3AobHBjLGxwY1NpemUsRiwxMSwwLjA1KX1pZihUPT1scGNTaXplKXtmb3IoYWk9MDthaTxscGNTaXplO2FpKyspe0ZbYWldPU1hdGguYWNvcyhGW2FpXSl9fWVsc2V7Zm9yKGFpPTA7YWk8bHBjU2l6ZTthaSsrKXtGW2FpXT10W2FpXX19fXZhciBMPTA7Zm9yKGFpPTA7YWk8bHBjU2l6ZTthaSsrKXtMKz0odFthaV0tRlthaV0pKih0W2FpXS1GW2FpXSl9dmFyIE87dmFyIFk7dmFyIGFmO2lmKGZpcnN0IT0wKXtmb3IoYWk9MDthaTxscGNTaXplO2FpKyspe0tbYWldPUZbYWldfX1lbHNle2ZvcihhaT0wO2FpPGxwY1NpemU7YWkrKyl7S1thaV09MC4zNzUqdFthaV0rMC42MjUqRlthaV19fUxzcC5FbmZvcmNlX21hcmdpbihLLGxwY1NpemUsMC4wMDIpO2ZvcihhaT0wO2FpPGxwY1NpemU7YWkrKyl7S1thaV09TWF0aC5jb3MoS1thaV0pfW1fbHNwLkxzcDJscGMoSyxnLGxwY1NpemUpO1k9MDthZj0wO0ZpbHRlcnMuRmlyX21lbTIoZnJtQnVmLGZybUlkeCxnLGV4Y0J1ZixleGNJZHgsZnJhbWVTaXplLGxwY1NpemUseSk7Tz0wO2ZvcihhaT0wO2FpPGZyYW1lU2l6ZTthaSsrKXtPKz1leGNCdWZbZXhjSWR4K2FpXSpleGNCdWZbZXhjSWR4K2FpXX1PPU1hdGguc3FydCgxK08vZnJhbWVTaXplKTt2PS0xO2FnLlBhY2soMCwxKTthZy5QYWNrKHN1Ym1vZGVJRCxOQl9TVUJNT0RFX0JJVFMpO2lmKGZpcnN0IT0wKXtmb3IoYWk9MDthaTxscGNTaXplO2FpKyspe3RbYWldPUZbYWldfX1zdWJtb2Rlc1tzdWJtb2RlSURdLkxzcVF1YW50LlF1YW50KEYscWxzcCxscGNTaXplLGFnKTtpZihzdWJtb2Rlc1tzdWJtb2RlSURdLkxiclBpdGNoIT0tMSl7YWcuUGFjayhZLW1pbl9waXRjaCw3KX12YXIgVT1NYXRoLmZsb29yKDAuNSszLjUqTWF0aC5sb2coTykpO2lmKFU8MCl7VT0wfWlmKFU+MzEpe1U9MzF9Tz1NYXRoLmV4cChVLzMuNSk7YWcuUGFjayhVLDUpO2lmKGZpcnN0IT0wKXtmb3IoYWk9MDthaTxscGNTaXplO2FpKyspe29sZF9xbHNwW2FpXT1xbHNwW2FpXX19YXA9bmV3IEFycmF5KCk7YW09bmV3IEFycmF5KCk7Vz1uZXcgQXJyYXkoKTtmb3IodmFyIGFpPTA7YWk8c3ViZnJhbWVTaXplO2FpKyspe2FwW2FpXT0wO2FtW2FpXT0wO1dbYWldPTB9Vj1uZXcgQXJyYXkoKTtmb3IodmFyIGFpPTA7YWk8bHBjU2l6ZTthaSsrKXtWW2FpXT0wfVE9bmV3IEFycmF5KCk7Zm9yKHZhciBhaT0wO2FpPGZyYW1lU2l6ZTthaSsrKXtRW2FpXT0wfWZvcihhaT0wO2FpPGZyYW1lU2l6ZTthaSsrKXtRW2FpXT1mcm1CdWZbZnJtSWR4K2FpXX1mb3IodmFyIFg9MDtYPG5iU3ViZnJhbWVzO1grKyl7dmFyIGFsO3ZhciBTO3ZhciBhaCxhYyxhYixOO3ZhciBhbztTPXN1YmZyYW1lU2l6ZSpYO2FoPWZybUlkeCtTO2FiPWV4Y0lkeCtTO2FjPWIrUztOPXErUzthbD0oMStYKS9uYlN1YmZyYW1lcztmb3IoYWk9MDthaTxscGNTaXplO2FpKyspe0tbYWldPSgxLWFsKSp0W2FpXSthbCpGW2FpXX1mb3IoYWk9MDthaTxscGNTaXplO2FpKyspe2ludGVycF9xbHNwW2FpXT0oMS1hbCkqb2xkX3Fsc3BbYWldK2FsKnFsc3BbYWldfUxzcC5FbmZvcmNlX21hcmdpbihLLGxwY1NpemUsMC4wMDIpO0xzcC5FbmZvcmNlX21hcmdpbihpbnRlcnBfcWxzcCxscGNTaXplLDAuMDAyKTtmb3IoYWk9MDthaTxscGNTaXplO2FpKyspe0tbYWldPU1hdGguY29zKEtbYWldKX1tX2xzcC5Mc3AybHBjKEssZyxscGNTaXplKTtmb3IoYWk9MDthaTxscGNTaXplO2FpKyspe2ludGVycF9xbHNwW2FpXT1NYXRoLmNvcyhpbnRlcnBfcWxzcFthaV0pfW1fbHNwLkxzcDJscGMoaW50ZXJwX3Fsc3AsaW50ZXJwX3FscGMsbHBjU2l6ZSk7YWw9MTtwaV9nYWluW1hdPTA7Zm9yKGFpPTA7YWk8PWxwY1NpemU7YWkrKyl7cGlfZ2FpbltYXSs9YWwqaW50ZXJwX3FscGNbYWldO2FsPS1hbH1GaWx0ZXJzLkJ3X2xwYyhnYW1tYTEsZyxvLGxwY1NpemUpO2lmKGdhbW1hMj49MCl7RmlsdGVycy5Cd19scGMoZ2FtbWEyLGcsbSxscGNTaXplKX1lbHNle21bMF09MTttWzFdPS1wcmVlbXBoO2ZvcihhaT0yO2FpPD1scGNTaXplO2FpKyspe21bYWldPTB9fWZvcihhaT0wO2FpPHN1YmZyYW1lU2l6ZTthaSsrKXtleGNCdWZbYWIrYWldPTB9ZXhjQnVmW2FiXT0xO0ZpbHRlcnMuU3luX3BlcmNlcF96ZXJvKGV4Y0J1ZixhYixpbnRlcnBfcWxwYyxvLG0sVyxzdWJmcmFtZVNpemUsbHBjU2l6ZSk7Zm9yKGFpPTA7YWk8c3ViZnJhbWVTaXplO2FpKyspe2V4Y0J1ZlthYithaV09MH1mb3IoYWk9MDthaTxzdWJmcmFtZVNpemU7YWkrKyl7eltOK2FpXT0wfWZvcihhaT0wO2FpPGxwY1NpemU7YWkrKyl7VlthaV09bWVtX3NwW2FpXX1GaWx0ZXJzLklpcl9tZW0yKGV4Y0J1ZixhYixpbnRlcnBfcWxwYyxleGNCdWYsYWIsc3ViZnJhbWVTaXplLGxwY1NpemUsVik7Zm9yKGFpPTA7YWk8bHBjU2l6ZTthaSsrKXtWW2FpXT13W2FpXX1GaWx0ZXJzLkZpbHRlcl9tZW0yX2IoZXhjQnVmLGFiLG8sbSxhcCwwLHN1YmZyYW1lU2l6ZSxscGNTaXplLFYsMCk7Zm9yKGFpPTA7YWk8bHBjU2l6ZTthaSsrKXtWW2FpXT13W2FpXX1GaWx0ZXJzLkZpbHRlcl9tZW0yX2IoZnJtQnVmLGFoLG8sbSx1LGFjLHN1YmZyYW1lU2l6ZSxscGNTaXplLFYsMCk7Zm9yKGFpPTA7YWk8c3ViZnJhbWVTaXplO2FpKyspe2FtW2FpXT11W2FjK2FpXS1hcFthaV19Zm9yKGFpPTA7YWk8c3ViZnJhbWVTaXplO2FpKyspe2V4Y0J1ZlthYithaV09eltOK2FpXT0wfXZhciBNLFA7TT1taW5fcGl0Y2g7UD1tYXhfcGl0Y2g7aWYoSCE9MCYmUD5TKXtQPVN9YW89c3VibW9kZXNbc3VibW9kZUlEXS5MdHAuUXVhbnQoYW0sdSxhYyxpbnRlcnBfcWxwYyxvLG0sZXhjQnVmLGFiLE0sUCxhZixscGNTaXplLHN1YmZyYW1lU2l6ZSxhZyx6LE4sVyxBKTt4W1hdPWFvO0ZpbHRlcnMuU3luX3BlcmNlcF96ZXJvKGV4Y0J1ZixhYixpbnRlcnBfcWxwYyxvLG0sYXAsc3ViZnJhbWVTaXplLGxwY1NpemUpO2ZvcihhaT0wO2FpPHN1YmZyYW1lU2l6ZTthaSsrKXthbVthaV0tPWFwW2FpXX12YXIgYWs7dmFyIGFqPTAsYWE7YWs9WCpzdWJmcmFtZVNpemU7Zm9yKGFpPTA7YWk8c3ViZnJhbWVTaXplO2FpKyspe2lubm92W2FrK2FpXT0wfUZpbHRlcnMuUmVzaWR1ZV9wZXJjZXBfemVybyhhbSwwLGludGVycF9xbHBjLG8sbSxJLHN1YmZyYW1lU2l6ZSxscGNTaXplKTtmb3IoYWk9MDthaTxzdWJmcmFtZVNpemU7YWkrKyl7YWorPUlbYWldKklbYWldfWFqPU1hdGguc3FydCgwLjErYWovc3ViZnJhbWVTaXplKTthai89TztpZihzdWJtb2Rlc1tzdWJtb2RlSURdLkhhdmVTdWJmcmFtZUdhaW4hPTApe3ZhciBhbjthaj1NYXRoLmxvZyhhaik7aWYoc3VibW9kZXNbc3VibW9kZUlEXS5IYXZlU3ViZnJhbWVHYWluPT0zKXthbj1WUS5JbmRleF9zKGFqLGV4Y19nYWluX3F1YW50X3NjYWwzLDgpO2FnLlBhY2soYW4sMyk7YWo9ZXhjX2dhaW5fcXVhbnRfc2NhbDNbYW5dfWVsc2V7YW49VlEuSW5kZXhfcyhhaixleGNfZ2Fpbl9xdWFudF9zY2FsMSwyKTthZy5QYWNrKGFuLDEpO2FqPWV4Y19nYWluX3F1YW50X3NjYWwxW2FuXX1haj1NYXRoLmV4cChhail9ZWxzZXthaj0xfWFqKj1PO2FhPTEvYWo7Zm9yKGFpPTA7YWk8c3ViZnJhbWVTaXplO2FpKyspe2FtW2FpXSo9YWF9c3VibW9kZXNbc3VibW9kZUlEXS5Jbm5vdmF0aW9uLlF1YW50aWZ5KGFtLGludGVycF9xbHBjLG8sbSxscGNTaXplLHN1YmZyYW1lU2l6ZSxpbm5vdixhayxXLGFnLEEpO2ZvcihhaT0wO2FpPHN1YmZyYW1lU2l6ZTthaSsrKXtpbm5vdlthaythaV0qPWFqfWZvcihhaT0wO2FpPHN1YmZyYW1lU2l6ZTthaSsrKXtleGNCdWZbYWIrYWldKz1pbm5vdlthaythaV19Zm9yKGFpPTA7YWk8c3ViZnJhbWVTaXplO2FpKyspe2FtW2FpXSo9YWp9Zm9yKGFpPTA7YWk8bHBjU2l6ZTthaSsrKXtWW2FpXT1tZW1fc3BbYWldfUZpbHRlcnMuSWlyX21lbTIoZXhjQnVmLGFiLGludGVycF9xbHBjLGZybUJ1ZixhaCxzdWJmcmFtZVNpemUsbHBjU2l6ZSxtZW1fc3ApO0ZpbHRlcnMuRmlsdGVyX21lbTJfYihmcm1CdWYsYWgsbyxtLHUsYWMsc3ViZnJhbWVTaXplLGxwY1NpemUsdywwKTtmb3IoYWk9MDthaTxzdWJmcmFtZVNpemU7YWkrKyl7eltOK2FpXT1leGNCdWZbYWIrYWldfX1pZihzdWJtb2RlSUQ+PTEpe2ZvcihhaT0wO2FpPGxwY1NpemU7YWkrKyl7dFthaV09RlthaV19Zm9yKGFpPTA7YWk8bHBjU2l6ZTthaSsrKXtvbGRfcWxzcFthaV09cWxzcFthaV19fWZpcnN0PTA7dmFyIFo9MCxSPTA7dmFyIGFlO2ZvcihhaT0wO2FpPGZyYW1lU2l6ZTthaSsrKXtaKz1mcm1CdWZbZnJtSWR4K2FpXSpmcm1CdWZbZnJtSWR4K2FpXTtSKz0oZnJtQnVmW2ZybUlkeCthaV0tUVthaV0pKihmcm1CdWZbZnJtSWR4K2FpXS1RW2FpXSl9YWU9MTAqTWF0aC5sb2coKForMSkvKFIrMSkpO2FkWzBdPWZybUJ1Zltmcm1JZHhdK3ByZWVtcGgqaztmb3IoYWk9MTthaTxmcmFtZVNpemU7YWkrKyl7YWRbYWldPWZybUJ1Zltmcm1JZHgrYWldK3ByZWVtcGgqYWRbYWktMV19az1hZFtmcmFtZVNpemUtMV07aWYoc3VibW9kZXNbc3VibW9kZUlEXS5jb25zdHJ1Y3Rvcj09PU5vaXNlU2VhcmNofHxzdWJtb2RlSUQ9PTApe0g9MX1lbHNle0g9MH1yZXR1cm4gMX07dGhpcy5nZXRQaUdhaW49ZnVuY3Rpb24oKXt2YXIgTD1bXTtBcnJheUNvcHkocGlfZ2FpbiwwLEwsMCxwaV9nYWluLmxlbmd0aCk7cmV0dXJuIEx9O3RoaXMuZ2V0RXhjPWZ1bmN0aW9uKCl7dmFyIE09bmV3IEFycmF5KCk7Zm9yKHZhciBMPTA7TDxmcmFtZVNpemU7TCsrKXtNW0xdPTB9QXJyYXlDb3B5KGV4Y0J1ZixleGNJZHgsTSwwLGZyYW1lU2l6ZSk7cmV0dXJuIE19O3RoaXMuZ2V0SW5ub3Y9ZnVuY3Rpb24oKXtyZXR1cm4gaW5ub3Z9O3RoaXMuZ2V0TW9kZT1mdW5jdGlvbigpe2lmKGQ8MCl7ZD0wfXZhciBMPXN1Ym1vZGVJRDtpZihkIT11bmRlZmluZWQpe3N1Ym1vZGVJRD1zdWJtb2RlU2VsZWN0PWR9cmV0dXJuIEx9fWZ1bmN0aW9uIFdpbmRvdyhhLGYpe3ZhciBiO3ZhciBlPWYqNy8yO3ZhciBkPWYqNS8yO3ZhciBjPW5ldyBBcnJheSgpO2ZvcihiPTA7YjxlO2IrKyl7Y1tiXT0wLjU0LTAuNDYqTWF0aC5jb3MoTWF0aC5QSSpiL2UpfWZvcihiPTA7YjxkO2IrKyl7Y1tlK2JdPTAuNTQrMC40NipNYXRoLmNvcyhNYXRoLlBJKmIvZCl9cmV0dXJuIGN9ZnVuY3Rpb24gTGFnV2luZG93KGQsYil7dmFyIGM9bmV3IEFycmF5KCk7Zm9yKHZhciBhPTA7YTxkKzE7YSsrKXtjW2FdPU1hdGguZXhwKC0wLjUqKDIqTWF0aC5QSSpiKmEpKigyKk1hdGguUEkqYiphKSl9cmV0dXJuIGN9ZnVuY3Rpb24gU2JFbmNvZGVyKEspe3ZhciByPVsxLDgsMiwzLDQsNSw1LDYsNiw3LDddO3ZhciBQPVsxLDEsMSwxLDEsMSwyLDIsMywzLDRdO3ZhciBOPVswLDEsMSwxLDEsMSwxLDEsMSwxLDFdO3ZhciBDO3ZhciBlO3ZhciBUO3ZhciB1O3ZhciB4O3ZhciBIO3ZhciBhO3ZhciBSO3ZhciBsO3ZhciBNO3ZhciBPO3ZhciB3O3ZhciBRO3ZhciBTO3ZhciBhYTt2YXIgaDt2YXIgcTt2YXIgcDt2YXIgbTt2YXIgRTt2YXIgVzt2YXIgbjt2YXIgdjt2YXIgRjt2YXIgQSx6O3ZhciBkO3ZhciBVLEQ7dmFyIEc7dmFyIGo7dmFyIG87dmFyIHk7dmFyIFY7dmFyIGFiO3ZhciBJO3ZhciBmO3ZhciBYO3ZhciBZO3ZhciBjO3ZhciBCO3ZhciBnO3ZhciBzO3ZhciBrO3ZhciBiO3ZhciBKO3ZhciB0O2lmKEspe1V3YmluaXQoKX1lbHNle1ooKX1mdW5jdGlvbiBaKCl7Qz1uZXcgTmJFbmNvZGVyKCk7TCgxNjAsNDAsOCw2NDAsMC45KTtGPWZhbHNlO1c9NTtiPTE2MDAwfWZ1bmN0aW9uIEwoYWMsYWgsYWcsYWUsYWYpe1NiQ29kZWNfaW5pdChhYyxhaCxhZyxhZSxhZik7dD1hZztJPTM7Zj0wO1g9MDtZPTA7Yz04O0o9d2Jtb2RlSUQ7ZT1bXTtUPVtdO3U9W107eD1bXTtIPVtdO2E9W107UT1bXTtuPVtdO3Y9W107QT1bXTt6PVtdO2Q9W107VT1bXTtEPVtdO0c9W107bz1bXTtmb3IodmFyIGFkPTA7YWQ8NSp0O2FkKyspe29bYWRdPTB9Zm9yKHZhciBhZD0wO2FkPHQrMTthZCsrKXtHW2FkXT0wfWZvcih2YXIgYWQ9MDthZDxmdWxsRnJhbWVTaXplO2FkKyspe3ZbYWRdPTA7QVthZF09MDt6W2FkXT0wfWZvcih2YXIgYWQ9MDthZDx0O2FkKyspe1FbYWRdPTA7blthZF09MH1mb3IodmFyIGFkPTA7YWQ8YWM7YWQrKyl7ZVthZF09MDtkW2FkXT0wfWZvcih2YXIgYWQ9MDthZDxRTUZfT1JERVI7YWQrKyl7VFthZF09MDtVW2FkXT0wO0RbYWRdPTB9Zm9yKHZhciBhZD0wO2FkPHdpbmRvd1NpemU7YWQrKyl7dVthZF09MH1mb3IodmFyIGFkPTA7YWQ8YWM7YWQrKyl7eFthZF09MDtIW2FkXT0wfWZvcih2YXIgYWQ9MDthZDxhaDthZCsrKXthW2FkXT0wfVI9V2luZG93KHdpbmRvd1NpemUsYWgpO2w9TGFnV2luZG93KHQsbGFnX2ZhY3Rvcik7TT1bXTtPPVtdO3c9W107Uz1bXTthYT1bXTtoPVtdO3E9W107cD1bXTttPVtdO0U9W107Vj1bXTt5PVtdO2FiPVtdO2Zvcih2YXIgYWQ9MDthZDx0O2FkKyspe01bYWRdPTA7d1thZF09MDtTW2FkXT0wO21bYWRdPTA7RVthZF09MDt5W2FkXT0wO1ZbYWRdPTB9Zm9yKHZhciBhZD0wO2FkPHQrMTthZCsrKXtPW2FkXT0wO3FbYWRdPTA7cFthZF09MDthYlthZF09MH1rPTA7aj0xfXRoaXMuRW5jb2RlPWZ1bmN0aW9uKGF4LGF3KXt2YXIgYXk7dmFyIGFtLGFuO3ZhciBhRCxhbCxhZTt2YXIgYWk7d2Jtb2RlSUQ9MTtGaWx0ZXJzLlFtZl9kZWNvbXAoYXcsQ29kZWJvb2tfQ29uc3RhbnRzLmgwLGQsZSxmdWxsRnJhbWVTaXplLFFNRl9PUkRFUixUKTtDLkVuY29kZShheCxkKTtmb3IoYXk9MDtheTx3aW5kb3dTaXplLWZyYW1lU2l6ZTtheSsrKXt2W2F5XT12W2ZyYW1lU2l6ZStheV19Zm9yKGF5PTA7YXk8ZnJhbWVTaXplO2F5Kyspe3Zbd2luZG93U2l6ZS1mcmFtZVNpemUrYXldPWVbYXldfUFycmF5Q29weSh3YmV4Y0J1ZixmcmFtZVNpemUsd2JleGNCdWYsMCxidWZTaXplLWZyYW1lU2l6ZSk7YUQ9Qy5nZXRQaUdhaW4oKTthbD1DLmdldEV4YygpO2FlPUMuZ2V0SW5ub3YoKTt2YXIgYXE9Qy5nZXRNb2RlKCk7aWYoYXE9PTApe2FpPTF9ZWxzZXthaT0wfWZvcihheT0wO2F5PHdpbmRvd1NpemU7YXkrKyl7dVtheV09dltheV0qUltheV19THBjLkF1dG9jb3JyKHUsTyx0KzEsd2luZG93U2l6ZSk7T1swXSs9MTtPWzBdKj1scGNfZmxvb3I7Zm9yKGF5PTA7YXk8dCsxO2F5Kyspe09bYXldKj1sW2F5XX1McGMuV2xkKGxwYyxPLE0sdCk7QXJyYXlDb3B5KGxwYywwLGxwYywxLHQpO3ZhciBhaz1Mc3AuTHBjMmxzcChscGMsdCx3LDE1LDAuMik7aWYoYWshPXQpe2FrPUxzcC5McGMybHNwKGxwYyx0LHcsMTEsMC4wMik7aWYoYWshPXQpe2ZvcihheT0wO2F5PHQ7YXkrKyl7d1theV09TWF0aC5jb3MoTWF0aC5QSSooKGF5KzEpKS8odCsxKSl9fX1mb3IoYXk9MDtheTx0O2F5Kyspe3dbYXldPU1hdGguYWNvcyh3W2F5XSl9dmFyIGFjPTA7Zm9yKGF5PTA7YXk8dDtheSsrKXthYys9KFNbYXldLXdbYXldKSooU1theV0td1theV0pfWF4LlBhY2soMSwxKTtpZihhaSE9MCl7YXguUGFjaygwLFNCX1NVQk1PREVfQklUUyl9ZWxzZXtheC5QYWNrKHdibW9kZUlELFNCX1NVQk1PREVfQklUUyl9d2Jtb2Rlc1t3Ym1vZGVJRF0uTHNxUXVhbnQuUXVhbnQodyxRLHQsYXgpO2lmKGohPTApe2ZvcihheT0wO2F5PHQ7YXkrKyl7U1theV09d1theV19Zm9yKGF5PTA7YXk8dDtheSsrKXtuW2F5XT1RW2F5XX19YW09bmV3IEFycmF5KCk7YW49bmV3IEFycmF5KCk7aW5ub3Y9bmV3IEFycmF5KCk7Zm9yKHZhciBheT0wO2F5PGxwY1NpemU7YXkrKyl7YW1bYXldPTB9Zm9yKHZhciBheT0wO2F5PGxwY1NpemU7YXkrKyl7YW5bYXldPTA7aW5ub3ZbYXldPTB9Zm9yKHZhciBhbz0wO2FvPG5iU3ViZnJhbWVzO2FvKyspe3ZhciBhQyxhZzt2YXIgYXYsYXosYXUsYXQ7dmFyIGFqO3ZhciBhcCxhcixhZj0wLGFkPTA7dmFyIGFoO2FqPXN1YmZyYW1lU2l6ZSphbzthej1hajthdj1leGNJZHgrYWo7YXQ9YWo7YXU9YWo7YUM9KDErYW8pL25iU3ViZnJhbWVzO2ZvcihheT0wO2F5PHQ7YXkrKyl7VltheV09KDEtYUMpKlNbYXldK2FDKndbYXldfWZvcihheT0wO2F5PHQ7YXkrKyl7eVtheV09KDEtYUMpKm5bYXldK2FDKlFbYXldfUxzcC5FbmZvcmNlX21hcmdpbihWLHQsMC4wNSk7THNwLkVuZm9yY2VfbWFyZ2luKHksdCwwLjA1KTtmb3IoYXk9MDtheTx0O2F5Kyspe1ZbYXldPU1hdGguY29zKFZbYXldKX1mb3IoYXk9MDtheTx0O2F5Kyspe3lbYXldPU1hdGguY29zKHlbYXldKX1tX2xzcC5Mc3AybHBjKFYsYWIsdCk7bV9sc3AuTHNwMmxwYyh5LEcsdCk7RmlsdGVycy5Cd19scGMoZ2FtbWExLGFiLHEsdCk7RmlsdGVycy5Cd19scGMoZ2FtbWEyLGFiLHAsdCk7YXA9YXI9MDthQz0xO3BpX2dhaW5bYW9dPTA7Zm9yKGF5PTA7YXk8PXQ7YXkrKyl7YXIrPWFDKkdbYXldO2FDPS1hQztwaV9nYWluW2FvXSs9R1theV19YXA9YURbYW9dO2FwPTEvKE1hdGguYWJzKGFwKSswLjAxKTthcj0xLyhNYXRoLmFicyhhcikrMC4wMSk7YWc9TWF0aC5hYnMoMC4wMSthcikvKDAuMDErTWF0aC5hYnMoYXApKTthaD0oYWc8NSk/MTowO2FoPTA7RmlsdGVycy5GaXJfbWVtMih2LGF6LEcsd2JleGNCdWYsYXYsc3ViZnJhbWVTaXplLHQsbSk7Zm9yKGF5PTA7YXk8c3ViZnJhbWVTaXplO2F5Kyspe2FmKz13YmV4Y0J1ZlthditheV0qd2JleGNCdWZbYXYrYXldfWlmKHdibW9kZXNbd2Jtb2RlSURdLklubm92YXRpb249PW51bGwpe3ZhciBhQjtmb3IoYXk9MDtheTxzdWJmcmFtZVNpemU7YXkrKyl7YWQrPWFlW2FqK2F5XSphZVthaitheV19YUI9YWYvKDAuMDErYWQpO2FCPU1hdGguc3FydChhQik7YUIqPWFnO3ZhciBhQT1NYXRoLmZsb29yKDAuNSsxMCs4Kk1hdGgubG9nKChhQiswLjAwMDEpKSk7aWYoYUE8MCl7YUE9MH1pZihhQT4zMSl7YUE9MzF9YXguUGFjayhhQSw1KTthQj0wLjEqTWF0aC5leHAoYUEvOS40KTthQi89YWd9Zm9yKGF5PTA7YXk8bHBjU2l6ZTtheSsrKXthbVtheV09b1theV19RmlsdGVycy5JaXJfbWVtMih3YmV4Y0J1ZixhdixHLHYsYXosc3ViZnJhbWVTaXplLHQsbyk7RmlsdGVycy5GaWx0ZXJfbWVtMl9iKHYsYXoscSxwLHgsYXUsc3ViZnJhbWVTaXplLHQsRSwwKX1maWx0ZXJzLkZpcl9tZW1fdXAoZCxDb2RlYm9va19Db25zdGFudHMuaDAsQSxmdWxsRnJhbWVTaXplLFFNRl9PUkRFUixVKTtmaWx0ZXJzLkZpcl9tZW1fdXAodixDb2RlYm9va19Db25zdGFudHMuaDEseixmdWxsRnJhbWVTaXplLFFNRl9PUkRFUixEKTtmb3IoYXk9MDtheTxmdWxsRnJhbWVTaXplO2F5Kyspe2F3W2F5XT0yKihBW2F5XS16W2F5XSl9Zm9yKGF5PTA7YXk8dDtheSsrKXtTW2F5XT13W2F5XX1mb3IoYXk9MDtheTx0O2F5Kyspe25bYXldPVFbYXldfWo9MDtyZXR1cm4gMX19ZnVuY3Rpb24gQXJyYXlDb3B5KGYsYSxnLGIsZSl7dmFyIGM9Zi5zbGljZShhLGErZSk7Zm9yKHZhciBkPTA7ZDxlO2QrKyl7Z1tiK2RdPWNbZF19fTsnXSxcclxuICAgICAgICB7dHlwZTogXCJ0ZXh0L2phdmFzY3JpcHRcIn0pKVxyXG59XHJcblxyXG5sZXQgc3BlZXhQYXRoID0gc3BlZXhXb3JrQ29kZSgpXHJcbmxldCByZWNvcmRQYXRoID0gcmVjb3JkV29ya2VyQ29kZSgpXHJcblxyXG5jbGFzcyBBdWRpb1Byb2Mge1xyXG4gICAgY29uc3RydWN0b3IoYXVkaW9Qcm9jLCB2b2x1bWVQcm9jLCBzYXZlV2F2UHJvYykge1xyXG4gICAgICAgIHRoaXMuc3BlZXhXb3JrZXIgPSBuZXcgV29ya2VyKHNwZWV4UGF0aClcclxuICAgICAgICB0aGlzLnJlY29yZGVyV29ya2VyID0gbmV3IFdvcmtlcihyZWNvcmRQYXRoKVxyXG4gICAgICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgdGhpcy5hdWRpb0NhbGxiYWNrID0gYXVkaW9Qcm9jXHJcbiAgICAgICAgaWYgKHR5cGVvZiBzYXZlV2F2UHJvYyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmVXYXZlID0gc2F2ZVdhdlByb2NcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdWRpb1N0cmVhbSA9IG51bGxcclxuICAgICAgICB0aGlzLmlzU3BlZXggPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXVkaW9Ob2RlID0ge1xyXG4gICAgICAgICAgICBcInNvdXJjZVwiOm51bGwsXHJcbiAgICAgICAgICAgIFwic2NyaXB0Tm9kZVwiOm51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG5cclxuICAgICAgICB0aGlzLnNwZWV4V29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGF0LnJlY29yZGluZyA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgaWYgKGUuZGF0YS5jb21tYW5kID09PSBcImVuY29kZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyID0gZS5kYXRhLmJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBJbnQ4QXJyYXkoYnVmZmVyKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5hdWRpb0NhbGxiYWNrKHJlc3VsdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZWNvcmRlcldvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZvbHVtZVByb2MgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHZvbHVtZVByb2MoZS5kYXRhLnZvbHVtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYnVmZmVyID0gZS5kYXRhLmJ1ZmZlclxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBJbnQxNkFycmF5KGJ1ZmZlcilcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGF0LnNhdmVXYXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNhdmVXYXZlKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5piv5ZCmc3BlZXjljovnvKlcclxuICAgICAgICAgICAgaWYgKHRoYXQuaXNTcGVleCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG91dHB1dCA9IG5ldyBJbnQ4QXJyYXkoKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5zcGVleFdvcmtlci5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZDogJ2VuY29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5EYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGluT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGluQ291bnQ6IGRhdGEubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dERhdGE6IG91dHB1dCxcclxuICAgICAgICAgICAgICAgICAgICBvdXRPZmZzZXQ6IDBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5yZWNvcmRpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEludDhBcnJheShkYXRhLmJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIHRoYXQuYXVkaW9DYWxsYmFjayhyZXN1bHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgICBsZXQgYXVkaW9DdHggPSBuZXcgd2luZG93LkF1ZGlvQ29udGV4dCgpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkYXB0ZXIuYnJvd3NlckRldGFpbHMuYnJvd3NlcilcclxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7YXVkaW86IHRydWV9KS50aGVuKGZ1bmN0aW9uKHN0cmVhbSl7XHJcbiAgICAgICAgICAgIHRoYXQuYXVkaW9TdHJlYW0gPSBzdHJlYW1cclxuICAgICAgICAgICAgdGhhdC5hdWRpb05vZGUuc291cmNlID0gYXVkaW9DdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxyXG4gICAgICAgICAgICB0aGF0LmF1ZGlvTm9kZS5zY3JpcHROb2RlID0gYXVkaW9DdHguY3JlYXRlU2NyaXB0UHJvY2Vzc29yKDAsIDEsIDEpXHJcblxyXG4gICAgICAgICAgICB0aGF0LnJlY29yZGVyV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbml0JyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVJhdGU6IGF1ZGlvQ3R4LnNhbXBsZVJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0QnVmZmVyTGVuZ3RoOiB0aGF0LmF1ZGlvTm9kZS5zY3JpcHROb2RlLmJ1ZmZlclNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoYXQuYXVkaW9Ob2RlLnNjcmlwdE5vZGUub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGF0LnJlY29yZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGl0IHJlY29yZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNlbmREYXRhKGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhhdC5hdWRpb05vZGUuc291cmNlLmNvbm5lY3QodGhhdC5hdWRpb05vZGUuc2NyaXB0Tm9kZSlcclxuICAgICAgICAgICAgdGhhdC5hdWRpb05vZGUuc2NyaXB0Tm9kZS5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKVxyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLm5hbWUgKyBcIixcIiArIGUubWVzc2FnZSlcclxuICAgICAgICAgICAgYWxlcnQoXCJnZXRVc2VyTWVkaWEgZXJyb3I6IFwiICsgZS5uYW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVleFdvcmtlci5wb3N0TWVzc2FnZSh7Y29tbWFuZDogJ2luaXQnfSlcclxuICAgICAgICB0aGlzLnJlY29yZGluZyA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVleChpc1NwZWV4KSB7XHJcbiAgICAgICAgdGhpcy5pc1NwZWV4ID0gaXNTcGVleFxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMucmVjb3JkZXJXb3JrZXIucG9zdE1lc3NhZ2Uoe2NvbW1hbmQ6ICdyZXNldCd9KVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnJlY29yZGVyV29ya2VyLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgY29tbWFuZDogJ3JlY29yZCcsXHJcbiAgICAgICAgICAgIGJ1ZmZlcjogZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnJlY29yZGluZyA9IGZhbHNlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvU3RyZWFtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHRyYWNrcyA9IHRoaXMuYXVkaW9TdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJhY2tzW2ldLnN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9TdHJlYW0gPSBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hdWRpb05vZGUuc291cmNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb05vZGUuc291cmNlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb05vZGUuc2NyaXB0Tm9kZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Ob2RlLnNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Ob2RlLnNjcmlwdE5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpXHJcbiAgICAgICAgdGhpcy5zcGVleFdvcmtlci50ZXJtaW5hdGUoKVxyXG4gICAgICAgIHRoaXMucmVjb3JkZXJXb3JrZXIudGVybWluYXRlKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXVkaW9Qcm9jIiwiaW1wb3J0IHtCYXNlNjR9IGZyb20gJ2pzLWJhc2U2NCdcclxuaW1wb3J0IE5ldCBmcm9tICcuLi91dGlscy93c25ldCdcclxuaW1wb3J0IEF1ZGlvUHJvYyBmcm9tICcuL2F1ZGlvUHJvYydcclxuaW1wb3J0ICogYXMgY29tbWFuZCBmcm9tICcuL2lhdF9jbWQnXHJcbmltcG9ydCBBdXRoIGZyb20gJy4uL3V0aWxzL2F1dGgnXHJcbmltcG9ydCAqIGFzIHRvb2xzIGZyb20gJy4uL3V0aWxzL3Rvb2xzJ1xyXG5cclxubGV0IHJlY29yZGVyU3RhdHVzID0ge1xyXG4gICAgXCJpZGxlXCI6IFwiaWRsZVwiLC8v56m66ZeyXHJcbiAgICBcInNlc3Npb25CZWdpblwiOiBcInNzYlwiLC8vc2Vzc2lvbiBiZWdpbiDkvJror53lvIDlp4tcclxuICAgIFwiYXVkaW9Xcml0ZVwiOiBcImF1d1wiLC8vYXVkaW8gd3JpdGUg5YaZ5YWl6Z+z6aKRXHJcbiAgICBcImdldFJlc3VsdFwiOiBcImdyc1wiLC8vZ2V0IHJlc3VsdCDojrflj5bnu5PmnpxcclxuICAgIFwic2Vzc2lvbkVuZFwiOiBcInNzZVwiLy9zZXNzaW9uIGVuZCDkvJror53nu5PmnZ9cclxufTtcclxuXHJcbmNsYXNzIElhdF8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSBudWxsXHJcbiAgICAgICAgdGhpcy5hdWRpb1Byb2MgPSBudWxsXHJcbiAgICAgICAgdGhpcy5pYXRTdGF0ZSA9IFwiXCJcclxuICAgICAgICB0aGlzLnNlcnZlclBhcmFtID0gbnVsbFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHtcclxuICAgICAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgICAgIHN5bklkOiAwLFxyXG4gICAgICAgICAgICBhdWRpb3N0YXR1czogMVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZyYW1lQ250ID0gMFxyXG4gICAgICAgIHRoaXMuZnJhbWVTZW5kID0gNiAvLyDpu5jorqQ25bin5Y+R6YCB5LiA5qyhXHJcbiAgICAgICAgdGhpcy5yZWNvcmRlckJ1ZmZlciA9IFtdXHJcbiAgICAgICAgdGhpcy5uZXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5iQXV0aCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5BdXRoID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnQoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TdGFydCA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTWVzc2FnZShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2UgPSBjYWxsYmFja1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVuZCA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvciA9IGNhbGxiYWNrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHVybCwgcGFyYW1zLCBpc1NwZWV4LCB2b2x1bWVDYWxsYmFjaywgYkF1dGgsIHNhdmVXYXZlQ2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodGhpcy5hdWRpb1Byb2MgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyDlkK/liqjpuqblhYvpo45cclxuICAgICAgICAgICAgdGhpcy5hdWRpb1Byb2MgPSBuZXcgQXVkaW9Qcm9jKHRoaXMuYXVkaW9TZW5kZXIuYmluZCh0aGlzKSwgdm9sdW1lQ2FsbGJhY2ssIHNhdmVXYXZlQ2FsbGJhY2spXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXVkaW9Qcm9jLmluaXQoKVxyXG4gICAgICAgIC8vIOiuvue9ruaYr+WQpuWOi+e8qemfs+mikVxyXG4gICAgICAgIHRoaXMuYXVkaW9Qcm9jLnNldFNwZWV4KGlzU3BlZXgpXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlclBhcmFtID0gcGFyYW1zXHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyUGFyYW0ucnNlID0gXCJ1dGY4XCJcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJQYXJhbS5hdWYgPSAnYXVkaW8vTDE2O3JhdGU9MTYwMDAnXHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyUGFyYW0uYXVlID0gaXNTcGVleCA/ICdzcGVleC13YicgOiAncmF3J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5pdCB3ZWJzb2NrZXRcclxuICAgICAgICBsZXQgd3NDYWxsQmFjayA9IHtcclxuICAgICAgICAgICAgXCJvbmNsb3NlXCI6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2Vic29ja2V0IGNsb3NlJylcclxuICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRTZXNzaW9uKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJvbm9wZW5cIjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXQuc2VuZChjb21tYW5kLnNlc3Npb25CZWdpbih0aGlzLnNlcnZlclBhcmFtKSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJvbm1lc3NhZ2VcIjogKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKG9iai5kYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2VydmVyTXNnLmNhbGwodGhpcywganNvbilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJvbmVycm9yXCI6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnY29ubmVjdCBzZXJ2ZXIgZmFpbGVkOiAnICsgZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkZWZhdWx0T3BcIjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXQuc2VuZChjb21tYW5kLnNlc3Npb25CZWdpbih0aGlzLnNlcnZlclBhcmFtKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iQXV0aCA9IChiQXV0aCA9PT0gdHJ1ZSA/IGJBdXRoIDogZmFsc2UpXHJcbiAgICAgICAgaWYgKHRoaXMuYkF1dGgpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5BdXRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkF1dGggPSBuZXcgQXV0aCgnaWF0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5zdGF0dXMgPT09ICdvbkVycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uRXJyb3Ioe2VyckNvZGU6IC0xLCBtc2c6IGUubXNnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYWxVcmwgPSBlLm1zZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0Lm5ldCA9PSBudWxsIHx8IHRoYXQudXJsICE9PSByZWFsVXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGF0Lm5ldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ldC5kaXNjb25uZWN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm5ldCA9IG5ldyBOZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVybCA9IHJlYWxVcmxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubmV0LmNvbm5lY3QodGhhdC51cmwsIHdzQ2FsbEJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uRXJyb3Ioe2VyckNvZGU6IC0xLCBtc2c6IGV9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQubmV0ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5BdXRoLmF1dGhTdGFydCh1cmwsIHRoaXMuc2VydmVyUGFyYW0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmV0ID09IG51bGwgfHwgdGhpcy51cmwgIT09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmV0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ldC5kaXNjb25uZWN0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubmV0ID0gbmV3IE5ldCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXQuY29ubmVjdCh1cmwsIHdzQ2FsbEJhY2spXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHtlcnJDb2RlOiAtMSwgbXNnOiBlfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubmV0ID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSZXN1bHQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNhbmNsZSgpIHtcclxuICAgICAgICB0aGlzLmFib3J0U2Vzc2lvbigpXHJcbiAgICAgICAgaWYgKHRoaXMub25FbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVuZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jbGUoKVxyXG4gICAgICAgIHRoaXMuYXVkaW9Qcm9jLmtpbGwoKVxyXG4gICAgICAgIHRoaXMuYXVkaW9Qcm9jID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHNldEZyYW1lQ291bnQoY291bnQpIHtcclxuICAgICAgICB0aGlzLmZyYW1lU2VuZCA9IGNvdW50XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZERhdGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkZXJCdWZmZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG91dHB1dCA9IHRoaXMucmVjb3JkZXJCdWZmZXIuc3BsaWNlKDAsIHRoaXMucmVjb3JkZXJCdWZmZXIubGVuZ3RoKVxyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiXHJcbiAgICAgICAgbGV0IGF1ZGlvTGVuZ3RoID0gMFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvTGVuZ3RoICs9IG91dHB1dFtpXS5sZW5ndGhcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvdXRwdXRbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG91dHB1dFtpXVtqXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnN5bklkKytcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJzeW5pZFwiOiBcIlwiICsgdGhpcy5zZXNzaW9uLnN5bklkLFxyXG4gICAgICAgICAgICBcImF1ZGlvbGVuXCI6IFwiXCIgKyBhdWRpb0xlbmd0aCxcclxuICAgICAgICAgICAgXCJkYXRhXCI6IEJhc2U2NC5idG9hKHN0cilcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24uYXVkaW9zdGF0dXMgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uLmF1ZGlvc3RhdHVzID0gMlxyXG4gICAgICAgICAgICBkYXRhLmF1ZGlvU3RhdHVzID0gXCIxXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmF1ZGlvU3RhdHVzID0gXCIyXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmV0LnNlbmQoY29tbWFuZC5hdWRpb1dyaXRlKHRoaXMuc2Vzc2lvbi5pZCwgZGF0YSwgdGhpcy5zZXJ2ZXJQYXJhbS5hcHBpZCkpXHJcbiAgICAgICAgdGhpcy5mcmFtZUNudCA9IDBcclxuICAgIH1cclxuXHJcbiAgICBhdWRpb1NlbmRlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWF0U3RhdGUgPT09IHJlY29yZGVyU3RhdHVzLmdldFJlc3VsdCB8fCB0aGlzLnNlc3Npb24uaWQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMuaWF0U3RhdGUgPSByZWNvcmRlclN0YXR1cy5hdWRpb1dyaXRlXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVDbnQgPCB0aGlzLmZyYW1lU2VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29yZGVyQnVmZmVyLnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIpKVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ250KytcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VuZERhdGEoKVxyXG4gICAgICAgIHRoaXMucmVjb3JkZXJCdWZmZXIucHVzaChuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlcikpXHJcbiAgICAgICAgdGhpcy5mcmFtZUNudCsrXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbmRFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnN5bklkKytcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgXCJzeW5pZFwiOiBcIlwiICsgdGhpcy5zZXNzaW9uLnN5bklkLFxyXG4gICAgICAgICAgICBcImF1ZGlvbGVuXCI6IFwiMFwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvc3RhdHVcIjogXCI0XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmV0LnNlbmQoY29tbWFuZC5hdWRpb1dyaXRlKHRoaXMuc2Vzc2lvbi5pZCwgZGF0YSwgdGhpcy5zZXJ2ZXJQYXJhbS5hcHBpZCkpXHJcbiAgICAgICAgdGhpcy5zZXNzaW9uLnN5bklkID0gMFxyXG4gICAgICAgIHRoaXMuc2Vzc2lvbi5hdWRpb3N0YXR1cyA9IDFcclxuICAgICAgICB0aGlzLnJlY29yZGVyQnVmZmVyID0gW11cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXN1bHQoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1Byb2Muc3RvcCgpXHJcbiAgICAgICAgaWYgKHRoaXMuaWF0U3RhdGUgPT09IHJlY29yZGVyU3RhdHVzLmF1ZGlvV3JpdGUpIHtcclxuICAgICAgICAgICAgLy8g5bCG57yT5Yay5Yy65YaF55qE6Z+z6aKR5YWo6YOo5Y+R6YCB5ZCOLOWGjeWPkemAgeihqOekuumfs+mikee7k+adn+agh+W/l1xyXG4gICAgICAgICAgICB0aGlzLnNlbmREYXRhKClcclxuICAgICAgICAgICAgdGhpcy5zZW5kRW5kKClcclxuICAgICAgICAgICAgdGhpcy5pYXRTdGF0ZSA9IHJlY29yZGVyU3RhdHVzLmdldFJlc3VsdFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pYXRTdGF0ZSA9PT0gcmVjb3JkZXJTdGF0dXMuZ2V0UmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV0LnNlbmQoY29tbWFuZC5nZXRSZXN1bHQodGhpcy5zZXNzaW9uLmlkLCB0aGlzLnNlcnZlclBhcmFtLmFwcGlkKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFib3J0U2Vzc2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlc3Npb25FbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWF0U3RhdGUgPT09IHJlY29yZGVyU3RhdHVzLnNlc3Npb25FbmQgJiYgdGhpcy5zZXNzaW9uLmlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXQuc2VuZChjb21tYW5kLnNlc3Npb25FbmQodGhpcy5zZXNzaW9uLmlkLCB0aGlzLnNlcnZlclBhcmFtLmFwcGlkKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pYXRTdGF0ZSA9IHJlY29yZGVyU3RhdHVzLmlkbGVcclxuICAgIH1cclxuXHJcbiAgICBhYm9ydFNlc3Npb24oKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1Byb2Muc3RvcCgpXHJcbiAgICAgICAgdGhpcy5pYXRTdGF0ZSA9IHJlY29yZGVyU3RhdHVzLnNlc3Npb25FbmRcclxuICAgICAgICB0aGlzLnNlc3Npb25FbmQoKVxyXG4gICAgICAgIGlmICh0aGlzLkF1dGgpIHtcclxuICAgICAgICAgICAgdGhpcy5BdXRoLmF1dGhFbmQoKVxyXG4gICAgICAgICAgICB0aGlzLmJBdXRoID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc1NlcnZlck1zZyhqc29uT2JqKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGpzb25PYmoucmVzdWx0XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IG51bGxcIilcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbJyArIHRvb2xzLl9fZ2V0RGF0ZVRpbWVTdHJpbmcoKSArICddOicsIGpzb25PYmopXHJcbiAgICAgICAgc3dpdGNoKHJlc3VsdC5jbWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNzYlwiOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJldCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5pZCA9IHJlc3VsdC5zaWRcclxuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLBzaWQsIOaJjeW8gOWQr+W9lemfs1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Qcm9jLnJlc2V0KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvUHJvYy5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hYm9ydFNlc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHtlcnJDb2RlOiByZXN1bHQucmV0LCBtc2c6ICdzc2IgZXJyb3InfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJhdXdcIjoge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IHJlc3VsdC5yZXRcclxuICAgICAgICAgICAgICAgIGlmIChyZXQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0U2Vzc2lvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRXJyb3Ioe2VyckNvZGU6IHJldCwgbXNnOiAnYXV3IGVycm9yJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlY1N0YXR1cyA9IHJlc3VsdC5yZWNTdGF0dXNcclxuICAgICAgICAgICAgICAgIGxldCBpYXRyc3QgPSByZXN1bHQuaWF0cnN0XHJcbiAgICAgICAgICAgICAgICBsZXQgaWF0cGdzID0gcmVzdWx0LnBnc1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRW5kID0gKHJlY1N0YXR1cyA9PT0gNSlcclxuICAgICAgICAgICAgICAgIGlmICghaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjU3RhdHVzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2Uoe2VuZDogZmFsc2UsIHBnczogaWF0cGdzLCByZXN1bHQ6IGlhdHJzdH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTWVzc2FnZSh7ZW5kOiB0cnVlLCBwZ3M6IGlhdHBncywgcmVzdWx0OiBpYXRyc3R9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0U2Vzc2lvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJncnNcIjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWF0U3RhdGUgIT09IHJlY29yZGVyU3RhdHVzLmdldFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgcmV1c2x0IGVycm9yJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCByZXQgPSByZXN1bHQucmV0XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hYm9ydFNlc3Npb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHtlcnJDb2RlOiByZXQsIG1zZzogJ2dycyBlcnJvcid9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBybHRTdGF0dXMgPSByZXN1bHQucmVzdWx0U3RhdHVzXHJcbiAgICAgICAgICAgICAgICBsZXQgaWF0cnN0ID0gcmVzdWx0LmlhdHJzdFxyXG4gICAgICAgICAgICAgICAgbGV0IGlhdHBncyA9IHJlc3VsdC5wZ3NcclxuICAgICAgICAgICAgICAgIGxldCBpc0VuZCA9IChybHRTdGF0dXMgPT09IDUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbk1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTWVzc2FnZSh7ZW5kOiBpc0VuZCwgcGdzOiBpYXRwZ3MsIHJlc3VsdDogaWF0cnN0fSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFJlc3VsdCgpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRTZXNzaW9uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInNzZVwiOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb24uaWQgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FbmQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVycm9yKHtlcnJDb2RlOiByZXN1bHQucmV0fSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRTZXNzaW9uKClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJYXRfIiwiXHJcbnZhciBiYXNlID0ge1xyXG4gICAgXCJqc29ucnBjXCI6IFwiMi4wXCIsXHJcbiAgICBcIm1ldGhvZFwiOiBcInJlcXVlc3RcIixcclxuICAgIFwiaWRcIjogMVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQXBwaWQoYXBwaWQpIHtcclxuICAgIGlmIChhcHBpZCAhPSBudWxsICYmIGFwcGlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBhcHBpZFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJwYzIwb25saVwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXNzaW9uQmVnaW4oc2VydmVyUGFyYW1zKSB7XHJcbiAgICB2YXIgbXNnID0gY2xvbmUoYmFzZSlcclxuICAgIHZhciBkYXRhID0gY2xvbmUoc2VydmVyUGFyYW1zKVxyXG4gICAgZGF0YS5hcHBpZCA9IGNoZWNrQXBwaWQoc2VydmVyUGFyYW1zLmFwcGlkKVxyXG4gICAgZGF0YS5jbWQgPSBcInNzYlwiXHJcbiAgICBkYXRhLnN2YyA9IFwiaWF0XCJcclxuICAgIG1zZy5wYXJhbXMgPSBkYXRhXHJcbiAgICByZXR1cm4gbXNnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhdWRpb1dyaXRlKHNlc3Npb25JZCwgZGF0YSwgYXBwaWQpIHtcclxuICAgIHZhciBtc2cgPSBjbG9uZShiYXNlKVxyXG4gICAgdmFyIHBhcmFtID0gY2xvbmUoZGF0YSlcclxuICAgIHBhcmFtLnNpZCA9IHNlc3Npb25JZFxyXG4gICAgcGFyYW0uYXBwaWQgPSBjaGVja0FwcGlkKGFwcGlkKVxyXG4gICAgcGFyYW0uY21kID0gXCJhdXdcIlxyXG4gICAgcGFyYW0uc3ZjID0gXCJpYXRcIlxyXG4gICAgbXNnLnBhcmFtcyA9IHBhcmFtXHJcbiAgICByZXR1cm4gbXNnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXN1bHQoc2Vzc2lvbklkLCBhcHBpZCkge1xyXG4gICAgdmFyIG1zZyA9IGNsb25lKGJhc2UpXHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBcInNpZFwiOiBzZXNzaW9uSWQsXHJcbiAgICAgICAgXCJhcHBpZFwiOiBjaGVja0FwcGlkKGFwcGlkKSxcclxuICAgICAgICBcInN2Y1wiOiBcImlhdFwiLFxyXG4gICAgICAgIFwiY21kXCI6IFwiZ3JzXCJcclxuICAgIH1cclxuICAgIG1zZy5wYXJhbXMgPSBkYXRhXHJcbiAgICByZXR1cm4gbXNnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXNzaW9uRW5kKHNlc3Npb25JZCwgYXBwaWQpIHtcclxuICAgIHZhciBtc2cgPSBjbG9uZShiYXNlKVxyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgXCJzaWRcIjogc2Vzc2lvbklkLFxyXG4gICAgICAgIFwiYXBwaWRcIjogY2hlY2tBcHBpZChhcHBpZCksXHJcbiAgICAgICAgXCJzdmNcIjogXCJpYXRcIixcclxuICAgICAgICBcImNtZFwiOiBcInNzZVwiXHJcbiAgICB9XHJcbiAgICBtc2cucGFyYW1zID0gZGF0YVxyXG4gICAgcmV0dXJuIG1zZ1xyXG59IiwiaW1wb3J0IElhdF8gZnJvbSAnLi9pYXQnXHJcblxyXG4vKipcclxuICog6K+G5Yir5a+56LGhLOaJgOacieeahOivhuWIq+S4muWKoemDveWfuuS6juatpOWvueixoVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBsZXQgaWF0ID0gbmV3IElhdCgpXHJcbiAqL1xyXG5cclxuY2xhc3MgSWF0IHtcclxuICAgIC8qKlxyXG4gICAgICog5p6E6YCg5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2lhdCA9IG5ldyBJYXRfKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOivhuWIq+W8gOWni+Wbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbigpfSBjYWxsYmFjayAtIGZ1bmN0aW9uXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogbGV0IGlhdCA9IG5ldyBJYXQoKVxyXG4gICAgICogaWF0Lm9uU3RhcnQoKCkgPT4ge1xyXG4gICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xyXG4gICAgICogfSlcclxuICAgICAqL1xyXG4gICAgb25TdGFydChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2lhdC5vblN0YXJ0KGNhbGxiYWNrKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YaM5o6l5pS26K+G5Yir57uT5p6c5Zue6LCD5Ye95pWwLCDmraTlm57osIPlh73mlbDkvJrooqvlpJrmrKHlm57osINcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24obXNnOiBPYmplY3QpfSBjYWxsYmFjayAtIOWbnuiwg+WHveaVsOaOpeaUtuS4gOS4quWvueixoeS9nOS4uuWPguaVsCzlr7nosaHmnIky5Liq5bGe5oCncGdz5ZKMcmVzdWx0XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogbGV0IGlhdCA9IG5ldyBJYXQoKVxyXG4gICAgICogaWF0Lm9uTWVzc2FnZShtc2cgPT4ge1xyXG4gICAgICogICAgIC8vIG1zZy5wZ3Mg57uT5p6c5piv5ZCm5piv5Li05pe25YC8LDHooajnpLrmmK/noa7lrprnu5PmnpzvvIww6KGo56S65piv5Li05pe257uT5p6cXHJcbiAgICAgKiAgICAgLy8gbXNnLnJlc3VsdCDor4bliKvnu5PmnpxcclxuICAgICAqIH0pXHJcbiAgICAgKi9cclxuICAgIG9uTWVzc2FnZShjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2lhdC5vbk1lc3NhZ2UoY2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozor4bliKvnu5PmnZ/lm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKX0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgb25FbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9pYXQub25FbmQoY2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozor4bliKvplJnor6/lm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24obXNnOiBPYmplY3QpfSBjYWxsYmFjayAtIOWbnuiwg+WHveaVsOaOpeaUtuS4gOS4quWvueixoeS9nOS4uuWPguaVsCzlr7nosaHmnIky5Liq5bGe5oCnZXJyQ29kZeWSjG1zZ1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGxldCBpYXQgPSBuZXcgSWF0KClcclxuICAgICAqIGlhdC5vbkVycm9yKG9iaiA9PiB7XHJcbiAgICAgKiAgICAgLy9vYmouZXJyQ29kZSDplJnor6/noIFcclxuICAgICAqICAgICAvL29iai5tc2cg6ZSZ6K+v5L+h5oGvXHJcbiAgICAgKiB9KVxyXG4gICAgICovXHJcbiAgICBvbkVycm9yKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5faWF0Lm9uRXJyb3IoY2FsbGJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlkK/liqjor4bliKtcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwg5pyN5Yqh6Lev55Sx5oiW5Luj55CG6Lev55Sx55qEbmdpbnjlnLDlnYDlnLDlnYAod3NzOi8vaXA6cG9ydC9pYXQvKVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyDor4bliKvlj4LmlbAsIOWmguaenOW8gOWQr+S4u+WKqOmJtOadgyzpnIDopoFhcHBpZCx0b2tlbi9hcmVhLGFiaWxpdHksYXV0aF9pZCjmnKzmrKHor4bliKvku7vliqHllK/kuIDmoIfor4YpXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3BlZXggLSDmmK/lkKblvIDlkK9zcGVleOWOi+e8qVxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbih2YWw6IG51bWJlcil9IFt2b2x1bWVDYWxsYmFja10gLSDov5Tlm57lrp7ml7bpn7Pph49cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JBdXRoPWZhbHNlXSAtIOaYr+WQpuW8gOWQr+mJtOadgywg5Y+v5Lul6YCJ5oup5Li75Yqo6K+35rGC6Ym05p2DKHRydWUpLOaIluiAheS4jeS4u+WKqOivt+axgumJtOadgyhmYWxzZSnnlLHmnI3liqHot6/nlLHlhrPlrprmmK/lkKbpibTmnYNcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oYnVmZmVyOiBBcnJheUJ1ZmZlcil9IFtzYXZlV2F2ZUNhbGxiYWNrXSAtIOaOpeaUtuW9lemfs+Wbnuiwg+WHveaVsFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGxldCBpYXQgPSBuZXcgSWF0KClcclxuICAgICAqIGlhdC5zdGFydCh1cmwsIHBhcmFtcywgaXNTcGVleClcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBsZXQgaWF0ID0gbmV3IElhdCgpXHJcbiAgICAgKiBpYXQuc3RhcnQodXJsLCBwYXJhbXMsIGlzU3BlZXgsIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgKiAgICAgLy8g5a6e5pe26Z+z6YePXHJcbiAgICAgKiB9LCBmYWxzZSwgZnVuY3Rpb24gKGJ1ZmZlcikge1xyXG4gICAgICogICAgIC8vIGJ1ZmZlciDkv53lrZjlvZXpn7PnmoTkuozov5vliLblrZfoioLmtYFcclxuICAgICAqIH0pXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KHVybCwgcGFyYW1zLCBpc1NwZWV4LCB2b2x1bWVDYWxsYmFjaywgYkF1dGgsIHNhdmVXYXZlQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9pYXQuc3RhcnQodXJsLCBwYXJhbXMsIGlzU3BlZXgsIHZvbHVtZUNhbGxiYWNrLCBiQXV0aCwgc2F2ZVdhdmVDYWxsYmFjaylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouW9lemfs+iOt+WPluivhuWIq+e7k+aenFxyXG4gICAgICovXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuX2lhdC5zdG9wKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPlua2iOacrOasoeivhuWIq1xyXG4gICAgICovXHJcbiAgICBjYW5jbGUoKSB7XHJcbiAgICAgICAgdGhpcy5faWF0LmNhbmNsZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlL7lvIPor4bliKss5bm25YWz6Zet5b2V6Z+z5py6XHJcbiAgICAgKi9cclxuICAgIGtpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5faWF0LmtpbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5Y+R6YCB6aKR546HLOWkmuWwkeW4p+WPkemAgeS4gOasoVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKi9cclxuICAgIHNldEZyYW1lQ291bnQoY291bnQpIHtcclxuICAgICAgICB0aGlzLl9pYXQuc2V0RnJhbWVDb3VudChjb3VudClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWF0IiwiaW1wb3J0IE5ldCBmcm9tICcuL2h0dHBuZXQnXHJcbmltcG9ydCB7QmFzZTY0fSBmcm9tICdqcy1iYXNlNjQnXHJcblxyXG5sZXQgYmFzZSA9IHtcclxuICAgIFwiaWRcIjogMSxcclxuICAgIFwibWV0aG9kXCI6IFwiZGVhbF9yZXF1ZXN0XCIsXHJcbiAgICBcImpzb25ycGNcIjogXCIyLjBcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZShvYmopIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpXHJcbn1cclxuXHJcbmNsYXNzIEF1dGgge1xyXG4gICAgY29uc3RydWN0b3Ioc3ZjLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMucmVhbFVybCA9IG51bGxcclxuICAgICAgICB0aGlzLmF1dGhVcmwgPSBudWxsXHJcbiAgICAgICAgdGhpcy5uZXQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5iU3RhcnQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gW3toZWFkZXI6IFwiY29udGVudC10eXBlXCIsIHZhbHVlOiBcImFwcGxpY2F0aW9uL2pzb24tcnBjXCJ9XVxyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3R0c0NhbGxiYWNrIHVuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oZWFydCA9IG51bGxcclxuICAgICAgICB0aGlzLmhiSW5mbyA9IHt9XHJcbiAgICAgICAgdGhpcy5zdmMgPSBzdmNcclxuICAgIH1cclxuXHJcbiAgICBhdXRoU3RhcnQoYXV0aFVybCwgbXNnLCBiSEIpIHtcclxuICAgICAgICB0aGlzLnJlYWxVcmwgPSBudWxsXHJcbiAgICAgICAgdGhpcy5hdXRoVXJsID0gYXV0aFVybFxyXG4gICAgICAgIGlmICghdGhpcy5uZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXQgPSBuZXcgTmV0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iSEIgPSBiSEIgPT09IGZhbHNlID8gYkhCIDogdHJ1ZVxyXG4gICAgICAgIHRoaXMuYXV0aE1zZyA9IG1zZ1xyXG5cclxuICAgICAgICB0aGlzLmhiSW5mby50b2tlbiA9IG1zZy50b2tlblxyXG4gICAgICAgIHRoaXMuaGJJbmZvLmFyZWEgPSBtc2cuYXJlYVxyXG4gICAgICAgIHRoaXMuaGJJbmZvLmFiaWxpdHkgPSBtc2cuYWJpbGl0eVxyXG4gICAgICAgIC8vIOacieaJqeWxleWPguaVsCzkvJjlhYjkvb/nlKjmianlsZXlj4LmlbDlhoXnmoRcclxuICAgICAgICBpZiAodGhpcy5hdXRoTXNnLmV4dGVuZF9wYXJhbXMpIHtcclxuICAgICAgICAgICAgbGV0IGV4dCA9IEpTT04ucGFyc2UodGhpcy5hdXRoTXNnLmV4dGVuZF9wYXJhbXMpXHJcbiAgICAgICAgICAgIGxldCBleHRBcnJheSA9IGV4dC5wYXJhbXMuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4dEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gZXh0QXJyYXlbaV0uc3BsaXQoJz0nKVxyXG4gICAgICAgICAgICAgICAgaWYgKGFyclswXSA9PT0gJ3Rva2VuJyB8fCBhcnJbMF0gPT09ICdhcmVhJyB8fCBhcnJbMF0gPT09ICdhYmlsaXR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGJJbmZvW2FyclswXV0gPSBhcnJbMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhiSW5mby5hcHBpZCA9IG1zZy5hcHBpZFxyXG4gICAgICAgIHRoaXMuaGJJbmZvLmF1dGhJZCA9IG1zZy5hdXRoX2lkXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJzc2JcIlxyXG4gICAgICAgIHRoaXMubmV0LmNvbm5lY3QodGhpcy5wcm9jZXNzQXV0aE1zZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5hdXRoQmVnaW5Nc2coKVxyXG4gICAgICAgIHRoaXMubmV0LnNlbmQoJ1BPU1QnLCBhdXRoVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5oZWFkZXIpXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aEVuZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubmV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV0ID0gbmV3IE5ldCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJzc2VcIlxyXG4gICAgICAgIHRoaXMubmV0LmNvbm5lY3QodGhpcy5wcm9jZXNzQXV0aE1zZy5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5hdXRoRW5kTXNnKClcclxuICAgICAgICB0aGlzLm5ldC5zZW5kKCdQT1NUJywgdGhpcy5hdXRoVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5oZWFkZXIpXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhlYXJ0KVxyXG4gICAgICAgIHRoaXMuaGVhcnQgPSBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgaGVhcnRCZWF0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5iU3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMubmV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV0ID0gbmV3IE5ldCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuYXV0aEhCTXNnKClcclxuICAgICAgICB0aGlzLm5ldC5jb25uZWN0KHRoaXMucHJvY2Vzc0F1dGhNc2cuYmluZCh0aGlzKSlcclxuICAgICAgICB0aGlzLm5ldC5zZW5kKCdQT1NUJywgdGhpcy5hdXRoVXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5oZWFkZXIpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlYXJ0IGJlYXQgc2VuZCcsIG5ldyBEYXRlKCkpXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aEJlZ2luTXNnKCkge1xyXG4gICAgICAgIGxldCBtc2cgPSBjbG9uZShiYXNlKVxyXG4gICAgICAgIGxldCBkYXRhID0gY2xvbmUodGhpcy5hdXRoTXNnKVxyXG5cclxuICAgICAgICBkYXRhLmFwcGlkID0gdGhpcy5hdXRoTXNnLmFwcGlkXHJcbiAgICAgICAgZGF0YS5jbWQgPSBcInNzYlwiXHJcbiAgICAgICAgZGF0YS5zdmMgPSB0aGlzLnN2Y1xyXG4gICAgICAgIG1zZy5wYXJhbXMgPSBkYXRhXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhFbmRNc2coKSB7XHJcbiAgICAgICAgbGV0IG1zZyA9IGNsb25lKGJhc2UpXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IGNsb25lKHRoaXMuYXV0aE1zZylcclxuXHJcbiAgICAgICAgcGFyYW1zLmFwcGlkID0gdGhpcy5hdXRoTXNnLmFwcGlkXHJcbiAgICAgICAgcGFyYW1zLmNtZCA9IFwic3NlXCJcclxuICAgICAgICBwYXJhbXMuc3ZjID0gdGhpcy5zdmNcclxuICAgICAgICBtc2cucGFyYW1zID0gcGFyYW1zXHJcbiAgICAgICAgcmV0dXJuIG1zZ1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhIQk1zZygpIHtcclxuICAgICAgICBsZXQgbXNnID0gY2xvbmUoYmFzZSlcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBiYXRjaEhlYXJ0QmVhdDogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyYW1zLmJhdGNoSGVhcnRCZWF0LnB1c2godGhpcy5oYkluZm8pXHJcbiAgICAgICAgbXNnLnBhcmFtcyA9IHBhcmFtc1xyXG4gICAgICAgIHJldHVybiBtc2dcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzQXV0aE1zZyhtc2cpIHtcclxuICAgICAgICBpZiAobXNnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBcImhiXCIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oZWFydClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnQgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dGggcmVzcG9uc2UgZXJyb3InKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGpzb25SZXQgPSBKU09OLnBhcnNlKEJhc2U2NC5hdG9iKG1zZykpXHJcbiAgICAgICAgY29uc29sZS5sb2coanNvblJldClcclxuICAgICAgICBsZXQgcmVzdWx0ID0ganNvblJldC5yZXN1bHRcclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coanNvblJldC5lcnJvcilcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2soe3N0YXR1czogXCJvbkVycm9yXCIsIG1zZzoganNvblJldC5lcnJvcn0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gXCJoYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0ID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5yZXQgIT09IDAgJiYgcmVzdWx0LnJldCAhPT0gMzAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgdGhpcy5hdXRoQ2FsbGJhY2soe3N0YXR1czogXCJvbkVycm9yXCIsIG1zZzogcmVzdWx0LnJldH0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gXCJoYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaGVhcnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0ID0gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBcInNzYlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYlN0YXJ0ID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnJlYWxVcmwgPSByZXN1bHQudXJsXHJcbiAgICAgICAgICAgIHRoaXMuYXV0aENhbGxiYWNrKHtzdGF0dXM6IFwib25SZXN1bHRcIiwgbXNnOiB0aGlzLnJlYWxVcmx9KVxyXG4gICAgICAgICAgICBpZiAodGhpcy5iSEIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnQgPSBzZXRJbnRlcnZhbCh0aGlzLmhlYXJ0QmVhdC5iaW5kKHRoaXMpLCAzMDAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBcImhiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT09IFwic3NlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5iU3RhcnQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aCIsImltcG9ydCAqIGFzIHRvb2xzIGZyb20gXCIuL3Rvb2xzXCJcclxuXHJcbmNsYXNzIEh0dHBOZXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25uZWN0KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnJlc3BvbnNlVGV4dClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmQobWV0aG9kLCB1cmwsIGRhdGEsIGhlYWRlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LlVOU0VOVCB8fCB0aGlzLmluc3RhbmNlLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1snICsgdG9vbHMuX19nZXREYXRlVGltZVN0cmluZygpICsgJ106JywgSlNPTi5wYXJzZShkYXRhKSlcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vcGVuKG1ldGhvZCwgdXJsKVxyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLndpdGhDcmVkZW50aWFscyA9IHRydWVcclxuICAgICAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWFkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyW2ldLmhlYWRlciwgaGVhZGVyW2ldLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2VuZChkYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdodHRwIHJlcXVlc3Qgbm90IHJlYWR5LCByZWFkeVN0YXRlOiAnICsgdGhpcy5pbnN0YW5jZS5yZWFkeVN0YXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSHR0cE5ldCIsImV4cG9ydCBmdW5jdGlvbiBfX2dldERhdGVUaW1lU3RyaW5nKHRpbWUpIHtcclxuICAgIGxldCBub3cgPSAodGltZSA9PSBudWxsID8gbmV3IERhdGUoKSA6IHRpbWUpXHJcblxyXG4gICAgbGV0IHllYXIgPSBTdHJpbmcobm93LmdldEZ1bGxZZWFyKCkpXHJcbiAgICBsZXQgbW9udGggPSBTdHJpbmcobm93LmdldE1vbnRoKCkgKyAxKVxyXG4gICAgaWYgKG1vbnRoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIG1vbnRoID0gYDAke21vbnRofWBcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF5ID0gU3RyaW5nKG5vdy5nZXREYXRlKCkpO1xyXG4gICAgaWYgKGRheS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBkYXkgPSBgMCR7ZGF5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGhvdXIgPSBTdHJpbmcobm93LmdldEhvdXJzKCkpO1xyXG4gICAgaWYgKGhvdXIubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgaG91ciA9IGAwJHtob3VyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1pbnV0ZSA9IFN0cmluZyhub3cuZ2V0TWludXRlcygpKTtcclxuICAgIGlmIChtaW51dGUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWludXRlID0gYDAke21pbnV0ZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzZWNvbmQgPSBTdHJpbmcobm93LmdldFNlY29uZHMoKSk7XHJcbiAgICBpZiAoc2Vjb25kLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHNlY29uZCA9IGAwJHtzZWNvbmR9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWlsbGlzZWNvbmQgPSBTdHJpbmcobm93LmdldE1pbGxpc2Vjb25kcygpKTtcclxuICAgIGlmIChtaWxsaXNlY29uZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBtaWxsaXNlY29uZCA9IGAwMCR7bWlsbGlzZWNvbmR9YDtcclxuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgbWlsbGlzZWNvbmQgPSBgMCR7bWlsbGlzZWNvbmR9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9ICR7aG91cn06JHttaW51dGV9OiR7c2Vjb25kfS4ke21pbGxpc2Vjb25kfWBcclxufSIsImltcG9ydCAqIGFzIHRvb2xzIGZyb20gJy4vdG9vbHMnXHJcblxyXG5jbGFzcyBXU05ldCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3QodXJsLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwgfHwgdGhpcy5pbnN0YW5jZS5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdlYlNvY2tldCh1cmwpXHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub25jbG9zZSA9IGNhbGxiYWNrLm9uY2xvc2VcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbm9wZW4gPSBjYWxsYmFjay5vbm9wZW5cclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbm1lc3NhZ2UgPSBjYWxsYmFjay5vbm1lc3NhZ2VcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbmVycm9yID0gY2FsbGJhY2sub25lcnJvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmRlZmF1bHRPcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbmQobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgdG9vbHMuX19nZXREYXRlVGltZVN0cmluZygpICsgJ106JywgbXNnKVxyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQgfHwgdGhpcy5pbnN0YW5jZS5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0lORykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlYnNvY2tldCBoYXMgY2xvc2VkXCIpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc3RhbmNlLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnKSlcclxuICAgIH1cclxuXHJcbiAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5DTE9TRUQgfHwgdGhpcy5pbnN0YW5jZS5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuQ0xPU0lORykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlYnNvY2tldCBoYXMgY2xvc2VkXCIpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluc3RhbmNlLmNsb3NlKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV1NOZXQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd2VicnRjX2FkYXB0ZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9