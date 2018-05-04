// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                                * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
                                                                                                                                                                                                                                                                                * Created by Tw93 on 17/11/01
                                                                                                                                                                                                                                                                                */

var _urlParse = __webpack_require__(1);

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Utils = {
  UrlParser: _urlParse2.default,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && (typeof item === 'undefined' ? 'undefined' : _typeof2(item)) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();
    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }
          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }
    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;

      return 'http' + (/^https:/.test(bundleUrl) ? 's' : '') + ':' + url;
    }
    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new _urlParse2.default(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },

  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;

      return (/(tb|taobao|淘宝)/i.test(appName)
      );
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;

      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;

      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;

      return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812;
      }
      return Utils.env.isIOS() && deviceHeight === 2436;
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;

      return platform.toLowerCase() === 'android';
    },
    isAlipay: function isAlipay() {
      var appName = weex.config.env.appName;

      return appName === 'AP';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;

      return (/(tm|tmall|天猫)/i.test(appName)
      );
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;

      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;

      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * console.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';

    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);
    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];
      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }
    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    var groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }
    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;
    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = "";
    for (var key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};
    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      console.log(e);
    }
    return obj;
  },

  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300, // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms
      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }
      return {};
    }
  }
};

exports.default = Utils;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var required = __webpack_require__(2),
    qs = __webpack_require__(3),
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @api public
 */
function lolcation(loc) {
  loc = loc || global.location || {};

  var finaldestination = {},
      type = typeof loc === 'undefined' ? 'undefined' : _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new URL(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new URL(loc, {});
    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @api private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @api private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @api public
 */
function URL(address, location, parser) {
  if (!(this instanceof URL)) {
    return new URL(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location === 'undefined' ? 'undefined' : _typeof(location),
      url = this,
      i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];
    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL}
 * @api public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String}
 * @api public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query,
      url = this,
      protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;

  if (url.hash) result += url.hash;

  return result;
}

URL.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
URL.extractProtocol = extractProtocol;
URL.location = lolcation;
URL.qs = qs;

module.exports = URL;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal');
var stream = weex.requireModule('stream');
var nativeApi = weex.requireModule('swifter');
var navigator = weex.requireModule('navigator');

var baseUrl = nativeApi.getNativeUrl();
var utilFunc = {
  test: function test(params) {
    modal.alert({
      message: params
    });
  },
  POST: function POST(api, params, callback) {
    // this.test(params)

    return stream.fetch({
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      type: 'json',
      timeout: 20000, // 超时时间设置为20妙
      url: baseUrl + api,
      body: this.handleJson(params)
    }, function (result) {
      // modal.alert({
      //        message: baseUrl
      //    })
      // 状态码为-1，超时处理

      if (result.status == -1) {
        modal.toast({ 'message': '请求超时', 'duration': 1 });
        callback(result);
      }
      modal.toast({ 'message': result, 'duration': 1 });
      if (result.data.repCode != '0000') {
        modal.toast({ 'message': result.data.repMsg, 'duration': 1 });
        callback(result);
      } else {
        callback(result);
      }
    }, function (response) {
      // modal.toast({ 'message': '111', 'duration': 1 })

    });
  },

  // 处理一下参数中的reqData，把他从jsonString变成json
  handleJson: function handleJson(params) {
    var a = JSON.parse(params);
    var b = a.reqData;
    a.reqData = JSON.parse(b);

    return a;
  },
  pushToVC: function pushToVC(url, title, renderFinishParams) {
    if (_utils2.default.env.isIOS) {
      nativeApi.openURLStr(url, title, renderFinishParams, function (ret) {
        //回调执行
        modal.toast({ message: ret.toString(), duration: 1 });
      });
    } else {
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        // modal.toast({ message: 'callback: ' + event })
      });
    }
  },
  popVC: function popVC() {
    navigator.pop({}, function (e) {});
  }
};

exports.default = utilFunc;

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/qizhiyuan/Desktop/WeexProject/city_clint/src/components/aftermarket/AftermarketDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e143aa28"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = {
  "divContent": {
    "width": "750",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "panel": {
    "width": "600",
    "height": "330",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderStyle": "solid",
    "borderWidth": "2"
  },
  "image": {
    "width": "600",
    "height": "300",
    "display": "-webkit-flex",
    "justifyContent": "center"
  },
  "fixedItem": {
    "position": "fixed",
    "width": "750",
    "height": "200",
    "left": "0",
    "top": "0"
  },
  "indexdiv": {
    "position": "absolute",
    "height": "200",
    "width": "750",
    "zIndex": -1,
    "backgroundColor": "#ffffff",
    "opacity": 0.1
  },
  "shadowDiv": {
    "position": "absolute",
    "width": "750",
    "height": "3",
    "zIndex": 0,
    "backgroundColor": "#F6F6F6",
    "bottom": "0"
  },
  "topContent": {
    "width": "750",
    "top": "0",
    "height": "200"
  },
  "left-button": {
    "position": "absolute",
    "left": "20",
    "top": "40",
    "width": "60",
    "height": "60"
  },
  "center-image": {
    "position": "absolute",
    "left": "315",
    "top": "40",
    "width": "120",
    "height": "120"
  },
  "right-button": {
    "position": "absolute",
    "right": 20,
    "top": "40",
    "width": "60",
    "height": "60"
  },
  "rightButton": {
    "position": "absolute",
    "bottom": "0",
    "left": "0",
    "zIndex": -1,
    "width": "50",
    "height": "50"
  },
  "ioconNum": {
    "position": "absolute",
    "zIndex": -1,
    "right": "0",
    "top": "0",
    "width": "30",
    "height": "30",
    "backgroundColor": "#FF0000",
    "color": "#ffffff",
    "fontSize": "16",
    "borderRadius": "15",
    "textAlign": "center",
    "lineHeight": "30"
  },
  "bottom-content": {
    "position": "absolute",
    "width": "750",
    "bottom": "0",
    "height": "100"
  },
  "bottom": {
    "position": "absolute",
    "flexDirection": "row",
    "height": "72",
    "width": "150",
    "bottom": "0"
  },
  "contentleft": {
    "left": "145"
  },
  "contentright": {
    "right": "145"
  },
  "bottomImage": {
    "marginTop": "16",
    "height": "40"
  },
  "bottomText": {
    "textAlign": "center",
    "lineHeight": "72",
    "fontSize": "24"
  },
  "scroller": {
    "top": 0,
    "left": 0,
    "bottom": "100",
    "right": 0
  },
  "banner-div": {
    "width": "750",
    "height": "560",
    "alignItems": "center"
  },
  "slider": {
    "width": "750",
    "height": "560"
  },
  "banner": {
    "width": "750",
    "height": "560"
  },
  "indicator": {
    "position": "relative",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "120",
    "height": "55",
    "marginTop": "-100",
    "backgroundColor": "rgba(0,0,0,0.2)",
    "borderRadius": "50"
  },
  "indicator-text": {
    "color": "#FFFFFF"
  },
  "banner-detail": {
    "position": "absolute",
    "width": "100",
    "height": "100",
    "marginTop": "-100",
    "right": 30
  },
  "banner-detail-img": {
    "width": "100",
    "height": "100"
  },
  "price-div": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "price": {
    "color": "#FFA500",
    "fontSize": "50"
  },
  "discount-div": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "30"
  },
  "discount-img": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0",
    "width": "40",
    "height": "35"
  },
  "discount-tip": {
    "color": "#808080",
    "fontSize": "24",
    "marginLeft": "20"
  },
  "title-div": {
    "flexDirection": "row",
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "10",
    "paddingLeft": "30"
  },
  "title": {
    "color": "#4C4C4C",
    "fontSize": "30"
  },
  "title-color": {
    "color": "#FEA808",
    "fontSize": "30"
  },
  "background": {
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "display": "flex",
    "justifyContent": "center",
    "paddingTop": "5",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "arrow": {
    "marginLeft": "50",
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "0",
    "width": "20",
    "height": "25"
  },
  "text-background": {
    "backgroundColor": "#F0f0f0",
    "borderRadius": "5",
    "paddingTop": "20",
    "paddingRight": "5",
    "paddingBottom": "20",
    "paddingLeft": "5"
  },
  "desc": {
    "marginTop": "5",
    "marginRight": "0",
    "marginBottom": "5",
    "marginLeft": "20",
    "fontSize": "24",
    "color": "#727272"
  },
  "service-divContent": {
    "backgroundColor": "#E6E6E6"
  },
  "service-div": {
    "marginTop": "20",
    "marginRight": "0",
    "marginBottom": "20",
    "marginLeft": "0",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#FFFFFF"
  },
  "service": {
    "color": "#808080",
    "fontSize": "26"
  },
  "bottomLine-div": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "backgroundColor": "#FFFFFF"
  },
  "bottomLine": {
    "left": "0",
    "right": "0",
    "height": "1",
    "backgroundColor": "#E6E6E6"
  },
  "detail-div": {
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF"
  },
  "detail-img": {
    "width": "750",
    "height": "750"
  },
  "edit-group": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "750",
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "30",
    "alignItems": "center",
    "WebkitBoxShadow": "0 0 5px #E6E6E6",
    "MozBoxShadow": "0 0 5px #E6E6E6",
    "boxShadow": "0 0 5px #E6E6E6"
  },
  "btn-group": {
    "flexDirection": "row"
  },
  "button-service": {
    "width": "50",
    "height": "50"
  },
  "button-cart": {
    "width": "240",
    "paddingTop": "28",
    "paddingBottom": "28",
    "fontSize": "28",
    "textAlign": "center",
    "color": "#FFFFFF",
    "backgroundColor": "#FEAB25"
  },
  "button-order": {
    "width": "240",
    "paddingTop": "28",
    "paddingBottom": "28",
    "fontSize": "28",
    "textAlign": "center",
    "color": "#FFFFFF",
    "backgroundColor": "#FC4312"
  },
  "count-div": {
    "flexDirection": "row",
    "display": "flex",
    "justifyContent": "space-between",
    "paddingTop": "0",
    "paddingRight": "30",
    "paddingBottom": "20",
    "paddingLeft": "30",
    "marginBottom": "20",
    "backgroundColor": "#FFFFFF"
  },
  "count-tip1": {
    "color": "#7F7F7F",
    "fontSize": "26"
  },
  "count-tip2": {
    "textAlign": "center",
    "color": "#B3B3B3",
    "fontSize": "20"
  },
  "count-edit-div": {
    "flexDirection": "row",
    "alignItems": "center",
    "backgroundColor": "#FCFCFC",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#E5EAEE",
    "borderRadius": "5"
  },
  "count-edit-button": {
    "width": "50",
    "height": "50",
    "fontSize": "35",
    "alignItems": "center",
    "textAlign": "center",
    "color": "#808080",
    "backgroundColor": "#F5F5F5"
  },
  "count": {
    "width": "100",
    "fontSize": "25",
    "textAlign": "center",
    "color": "#808080"
  },
  "line-div": {
    "width": "750",
    "height": "20",
    "backgroundColor": "#E6E6E6"
  },
  "unit-price-div": {
    "paddingTop": "0",
    "paddingRight": "0",
    "paddingBottom": "0",
    "paddingLeft": "30",
    "backgroundColor": "#FFFFFF"
  },
  "unit-price-div2": {
    "flexDirection": "row",
    "width": "750",
    "backgroundColor": "#FFFFFF"
  },
  "text": {
    "marginTop": "30",
    "color": "#666666",
    "fontSize": "30"
  },
  "unit-price": {
    "flexDirection": "row",
    "display": "flex",
    "justifyContent": "flex-start",
    "flexWrap": "wrap"
  },
  "button-disable": {
    "width": "120",
    "paddingTop": "12",
    "paddingBottom": "12",
    "fontSize": "25",
    "marginTop": "20",
    "marginRight": "20",
    "textAlign": "center",
    "color": "#CFCFCF",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#CFCFCF",
    "borderRadius": "5",
    "backgroundColor": "#FFFFFF"
  },
  "button-unselected": {
    "width": "120",
    "paddingTop": "12",
    "paddingBottom": "12",
    "fontSize": "25",
    "marginTop": "20",
    "marginRight": "20",
    "textAlign": "center",
    "color": "#5E5E5E",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#E4E4E4",
    "borderRadius": "5",
    "backgroundColor": "#FFFFFF"
  },
  "button-selected": {
    "width": "120",
    "paddingTop": "12",
    "paddingBottom": "12",
    "fontSize": "25",
    "marginTop": "20",
    "marginRight": "20",
    "textAlign": "center",
    "color": "#FFFFFF",
    "borderRadius": "5",
    "backgroundColor": "#FFA71B"
  }
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _requestTools = __webpack_require__(12);

var _requestTools2 = _interopRequireDefault(_requestTools);

var _config = __webpack_require__(35);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');
var nativeApi = weex.requireModule('swifter');

exports.default = {
	created: function created() {},
	data: {
		lists: [],
		offsetY: 0,
		contentOffsetY: 0,
		topstyle: {
			opacity: 0.0
		},
		leftstyle: {
			width: '60px',
			height: '60px'
		},
		centerstyle: {
			opacity: 0.0
		},
		leftImageStyle: {
			width: '40px'
		},
		rightImageStyle: {
			width: '0px'
		},
		leftbottomTextStyle: {
			color: '#FFA91C'
		},
		rightbottomTextStyle: {
			color: '#b1b1b1'
		},
		bottomimage: '../../../assets/location.png',
		leftButton: '../../../assets/backLight.png',
		rightButton: '../../../assets/cartnormal.png',
		pictureUrl: '',
		pictureList: [],
		bannerCount: 0,
		currentPrice: '0',
		priceRange: '',
		offerDescription: '',
		currentProductName: '',
		productName: '',
		description: '',
		desc: '',
		productId: '',
		serviceSupport: '',
		resourceBaseUrl: '',
		imagelists: [],
		width: 750,
		height: 430,
		consumerHotlines: [],
		currentCount: 1,
		currentSelectedProduct: {},
		currentSelectedLimit: {},
		productDetailsVos: [],
		productSkus: []
	},
	mounted: function mounted() {
		this.resourceBaseUrl = nativeApi.getNativeDataUrl();
		this.setData();
	},
	computed: {
		isipx: function isipx() {
			return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
		}
	},
	methods: {
		setData: function setData() {
			var self = this;
			weex.requireModule('globalEvent').addEventListener("downLoadedFinish", function (e) {
				self.getListInfo(e.info);
			});
		},
		getListInfo: function getListInfo(info) {
			var _this = this;

			var params = nativeApi.getRequestBody(info);
			_requestTools2.default.POST(_config2.default.QUERY_PRODUCT_DETAIL, params, function (res) {
				// requestTools.test(JSON.stringify(res))
				if (res.data.repCode != '0000') {
					modal.toast({ message: '请求出错：' });
					return;
				}
				_this.initInfo(res.data.repData);
			});
		},
		initInfo: function initInfo(repData) {
			this.productDetailsVos = repData.productDetailsVos;
			this.productSkus = repData.productSkus;
			this.pictureList = repData.product.pictureList;
			this.priceRange = repData.product.priceRange;
			this.description = repData.product.description;
			this.desc = repData.product.description;
			this.serviceSupport = repData.product.serviceSupport;
			this.offerDescription = repData.product.offerDescription;
			this.productName = repData.product.productName;
			this.productId = repData.product.productId;
			this.pictureUrl = repData.product.pictureUrl;
			this.consumerHotlines = repData.consumerHotlines;
			if (this.pictureList.length > 0) {
				this.bannerCount = 1;
			}
			this.imagelists = [{
				path: this.resourceBaseUrl + 'img/bg.png'
			}];
			this.resetSelectedAble();
			this.currentPrice = this.priceRange;
		},
		scrollHandler: function scrollHandler(e) {
			this.offsetY = e.contentOffset.y;
			this.contentOffsetY = e.contentOffset.y;

			if (this.offsetY > -1148.0) {
				this.leftImageStyle.width = '40px';
				this.rightImageStyle.width = '0px';
				this.leftbottomTextStyle.color = '#FFA91C';
				this.rightbottomTextStyle.color = '#b1b1b1';
			} else {
				this.leftImageStyle.width = '0px';
				this.rightImageStyle.width = '40px';
				this.rightbottomTextStyle.color = '#FFA91C';
				this.leftbottomTextStyle.color = '#b1b1b1';
			}
			if (this.offsetY < -360) {
				this.offsetY = -360.0;
				this.leftButton = '../../../assets/back.png';
				this.rightButton = '../../../assets/cartlight.png';
				this.leftstyle.width = '45px';
				this.leftstyle.height = '45px';
			} else {
				this.leftButton = '../../../assets/backLight.png';
				this.rightButton = '../../../assets/cartnormal.png';
				this.leftstyle.width = '60px';
				this.leftstyle.height = '60px';
			}
			this.topstyle.opacity = this.offsetY * -1 / 360;
			this.centerstyle.opacity = this.offsetY * -1 / 360;
		},
		leftBottomClick: function leftBottomClick() {
			dom.scrollToElement(this.$refs.bannerref, {});
		},
		rightBottomClick: function rightBottomClick() {
			dom.scrollToElement(this.$refs.detail, {});
		},
		leftButtonClick: function leftButtonClick() {
			_requestTools2.default.popVC();
		},
		bannerChange: function bannerChange(event) {
			this.bannerCount = event.index + 1;
		},
		resize: function resize(event) {
			if (event.success) {
				var ratio = event.size.naturalHeight / event.size.naturalWidth;
				//    modal.alert({
				//     message: JSON.stringify(ratio)
				// })
				this.width = Math.min(event.size.naturalWidth, 750);
				this.height = this.width * ratio;
				// modal.toast({ message: '宽：'+this.width+",高"+this.height, duration: 10 })
			}
		},
		mackCall: function mackCall() {

			if (this.consumerHotlines.length == 1) {
				nativeApi.call(this.consumerHotlines[0]);
			} else if (this.consumerHotlines.length > 1) {
				nativeApi.calls(this.consumerHotlines);
			} else {
				modal.toast({ message: '暂无客服电话', duration: 2 });
			}
		},
		addToCart: function addToCart() {
			//添加购物车
			if (JSON.stringify(this.currentSelectedProduct) == '{}') {
				modal.toast({ message: '请选择套餐', duration: 1 });
			} else if (JSON.stringify(this.currentSelectedLimit) == '{}') {
				modal.toast({ message: '请选择合约期', duration: 1 });
			} else if (this.currentCount.toString() == '0') {
				modal.toast({ message: "数量不能为0", duration: 1 });
			} else if (!/^[0-9]*$/.test(this.currentCount) || this.currentCount.toString().indexOf("0") == 0 || this.currentCount.toString() == "") {
				modal.toast({ message: "请输入正确的数量", duration: 1 });
			} else {
				modal.toast({ message: '加入购物车' });
			}
		},
		getOrder: function getOrder() {
			//下单
			if (JSON.stringify(this.currentSelectedProduct) == '{}') {
				modal.toast({ message: '请选择套餐', duration: 1 });
			} else if (JSON.stringify(this.currentSelectedLimit) == '{}') {
				modal.toast({ message: '请选择合约期', duration: 1 });
			} else if (this.currentCount.toString() == '0') {
				modal.toast({ message: "数量不能为0", duration: 1 });
			} else if (!/^[0-9]*$/.test(this.currentCount) || this.currentCount.toString().indexOf("0") == 0 || this.currentCount.toString() == "") {
				modal.toast({ message: "请输入正确的数量", duration: 1 });
			} else {
				modal.toast({ message: JSON.stringify(this.currentSelectedSku) + '\ncurrentCount: ' + JSON.stringify(parseInt(this.currentCount)) });
			}
		},

		// 点击按钮编辑数量
		editCount: function editCount(type) {
			if (type == "reduce") {
				if (this.currentCount > 0) {
					this.currentCount--;
				}
			} else if (type == "plus") {
				if (this.currentCount < 999) {
					this.currentCount++;
				}
			}
		},
		onblur: function onblur() {},
		countInput: function countInput(event) {
			this.currentCount = event.value;
		},
		itemSelected: function itemSelected(object, groupNum, itemNum) {

			var needReset = true;
			if (groupNum == 0) {
				// 选择了套餐
				if (this.productDetailsVos[groupNum].attrList[itemNum].attrValueId == this.currentSelectedProduct.attrValueId) {
					this.currentSelectedProduct = {};
					this.resetSelectedAble();
				} else if (this.productDetailsVos[groupNum].attrList[itemNum].canChoose) {
					// 可以选择
					this.resetSelectedAble();
					this.currentSelectedProduct = this.productDetailsVos[groupNum].attrList[itemNum];
					if (JSON.stringify(this.currentSelectedLimit) != '{}') {
						needReset = false;
					}

					this.getSelectedAble(0, this.productDetailsVos[groupNum].attrList[itemNum].attrValueId, needReset);
				} else {}

				if (JSON.stringify(this.currentSelectedLimit) != '{}') {
					this.getSelectedAble(1, this.currentSelectedLimit.attrValueId, needReset);
				}
			}
			if (groupNum == 1) {
				// 选择了合约期
				if (this.productDetailsVos[groupNum].attrList[itemNum].attrValueId == this.currentSelectedLimit.attrValueId) {
					this.currentSelectedLimit = {};
					this.resetSelectedAble();
				} else if (this.productDetailsVos[groupNum].attrList[itemNum].canChoose) {
					// 可以选择
					this.resetSelectedAble();
					this.currentSelectedLimit = this.productDetailsVos[groupNum].attrList[itemNum];
					if (JSON.stringify(this.currentSelectedProduct) != '{}') {
						needReset = false;
					}
					this.getSelectedAble(1, this.productDetailsVos[groupNum].attrList[itemNum].attrValueId, needReset);
				} else {}

				if (JSON.stringify(this.currentSelectedProduct) != '{}') {
					this.getSelectedAble(0, this.currentSelectedProduct.attrValueId, needReset);
				}
			}

			this.getPrice();
		},

		// 重制是否可选
		resetSelectedAble: function resetSelectedAble() {
			for (var i = this.productDetailsVos.length - 1; i >= 0; i--) {
				for (var j = this.productDetailsVos[i].attrList.length - 1; j >= 0; j--) {
					this.productDetailsVos[i].attrList[j].canChoose = true;
				}
			}
		},

		// 计算所选的项对应的其他项是否可选
		// * index: 查attrValueIds中的第几个数
		// * attrValueId：查询的ID
		getSelectedAble: function getSelectedAble(index, attrValueId, needReset) {
			if (needReset) {
				// this.resetSelectedAble()
			}

			for (var i = 0; i < this.productSkus.length; i++) {
				var skuArr = this.productSkus[i].attrValueIds.split(',');

				if (skuArr[index] == attrValueId) {
					if (this.productSkus[i].itemStatus == '1100') {
						if (index == 0) {
							for (var j = this.productDetailsVos[1].attrList.length - 1; j >= 0; j--) {
								if (this.productDetailsVos[1].attrList[j].attrValueId == skuArr[1]) {
									this.productDetailsVos[1].attrList[j].canChoose = false;
								}
							}
						} else if (index == 1) {
							for (var j = this.productDetailsVos[0].attrList.length - 1; j >= 0; j--) {
								if (this.productDetailsVos[0].attrList[j].attrValueId == skuArr[0]) {
									this.productDetailsVos[0].attrList[j].canChoose = false;
								}
							}
						}
					}
				}
			}
		},
		getPrice: function getPrice() {
			if (JSON.stringify(this.currentSelectedProduct) != '{}' && JSON.stringify(this.currentSelectedLimit) != '{}') {
				// requestTools.test(JSON.stringify(this.currentSelectedProduct) + '\n' + JSON.stringify(this.currentSelectedLimit))
				var selectedIds = this.currentSelectedProduct.attrValueId + "," + this.currentSelectedLimit.attrValueId;

				for (var i = this.productSkus.length - 1; i >= 0; i--) {
					if (this.productSkus[i].attrValueIds == selectedIds) {
						this.currentPrice = this.productSkus[i].price;
						this.currentProductName = '【' + this.currentSelectedProduct.attrValueName + '】';
						this.currentSelectedSku = this.productSkus[i];
					}
				}
				this.description = this.currentSelectedProduct.description;
			} else {
				if (JSON.stringify(this.currentSelectedProduct) != '{}' && JSON.stringify(this.currentSelectedLimit) == '{}') {
					this.description = this.currentSelectedProduct.description;
				} else {
					this.description = this.desc;
				}

				this.currentPrice = this.priceRange;
				this.currentProductName = '';
			}
		}
	}

};

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["divContent"]
  }, [_c('div', {
    ref: "fixed",
    staticClass: ["fixedItem"],
    on: {
      "click": _vm.scrollToNext
    }
  }, [_c('div', {
    staticClass: ["indexdiv"],
    style: _vm.topstyle
  }, [_c('div', {
    staticClass: ["shadowDiv"]
  })]), _c('div', {
    staticClass: ["topContent"]
  }, [_c('text', {
    staticStyle: {
      marginLeft: "120px"
    }
  }, [_vm._v(_vm._s(this.contentOffsetY))]), _c('image', {
    staticClass: ["left-button"],
    style: _vm.leftstyle,
    attrs: {
      "src": _vm.leftButton
    },
    on: {
      "click": _vm.leftButtonClick
    }
  }), _c('image', {
    staticClass: ["center-image"],
    style: _vm.centerstyle,
    attrs: {
      "src": _vm.pictureUrl
    }
  }), _c('div', {
    staticClass: ["right-button"]
  }, [_c('image', {
    staticClass: ["rightButton"],
    attrs: {
      "src": _vm.rightButton
    }
  }), _c('text', {
    staticClass: ["ioconNum"]
  }, [_vm._v("100")])]), _c('div', {
    staticClass: ["bottom-content"],
    style: _vm.centerstyle
  }, [_c('div', {
    staticClass: ["bottom", "contentleft"],
    on: {
      "click": _vm.leftBottomClick
    }
  }, [_c('image', {
    staticClass: ["bottomImage"],
    style: _vm.leftImageStyle,
    attrs: {
      "src": _vm.bottomimage
    }
  }), _c('text', {
    staticClass: ["bottomText"],
    style: _vm.leftbottomTextStyle
  }, [_vm._v("产品")])]), _c('div', {
    staticClass: ["bottom", "contentright"],
    on: {
      "click": _vm.rightBottomClick
    }
  }, [_c('image', {
    staticClass: ["bottomImage"],
    style: _vm.rightImageStyle,
    attrs: {
      "src": _vm.bottomimage
    }
  }), _c('text', {
    staticClass: ["bottomText"],
    style: _vm.rightbottomTextStyle
  }, [_vm._v("详情")])])])])]), _c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "showScrollbar": "false"
    },
    on: {
      "scroll": _vm.scrollHandler
    }
  }, [_c('div', {
    staticClass: ["banner-div"]
  }, [_c('slider', {
    ref: "bannerref",
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "false"
    },
    on: {
      "change": _vm.bannerChange
    }
  }, _vm._l((_vm.pictureList), function(banner) {
    return _c('div', [_c('image', {
      staticClass: ["banner"],
      attrs: {
        "resize": "cover",
        "src": banner
      }
    })])
  })), _c('div', {
    staticClass: ["indicator"]
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v(_vm._s(_vm.bannerCount + '/' + this.pictureList.length))])]), _c('div', {
    staticClass: ["banner-detail"],
    on: {
      "click": _vm.rightBottomClick
    }
  }, [_c('image', {
    staticClass: ["banner-detail-img"],
    attrs: {
      "src": "../../../assets/imgInfo.png"
    }
  })])]), _c('div', {
    staticClass: ["price-div"]
  }, [_c('text', {
    staticClass: ["price"]
  }, [_vm._v(_vm._s('¥' + _vm.currentPrice))])]), _c('div', {
    staticClass: ["discount-div"]
  }, [_c('image', {
    staticClass: ["discount-img"],
    attrs: {
      "src": '../../../assets/discount.png',
      "resize": "contain"
    }
  }), _c('text', {
    staticClass: ["discount-tip"]
  }, [_vm._v(_vm._s(_vm.offerDescription))])]), _c('div', {
    staticClass: ["title-div"]
  }, [_c('text', {
    staticClass: ["title-color"]
  }, [_vm._v(_vm._s(_vm.currentProductName))]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.productName))])]), _c('div', {
    staticClass: ["background"]
  }, [_c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": '../../../assets/arrow-up1.png',
      "resize": "cover"
    }
  }), _c('div', {
    staticClass: ["text-background"]
  }, [_c('text', {
    staticClass: ["desc"],
    attrs: {
      "lines": "10"
    }
  }, [_vm._v(_vm._s(_vm.description))])])]), _c('div', {
    staticClass: ["service-divContent"]
  }, [_c('div', {
    ref: "detail",
    staticClass: ["service-div"],
    on: {
      "appear": function($event) {
        _vm.scrollTo('product')
      },
      "disappear": function($event) {
        _vm.scrollTo('detail')
      }
    }
  }, [_c('text', {
    staticClass: ["service"]
  }, [_vm._v(_vm._s('系统服务：' + _vm.serviceSupport))])])]), _vm._l((_vm.productDetailsVos), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["unit-price-div"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item.attrName))]), _c('div', {
      staticClass: ["unit-price-div2"]
    }, _vm._l((_vm.productDetailsVos[i].attrList), function(obj, j) {
      return (i == 0) ? _c('div', {
        key: j,
        staticClass: ["unit-price"]
      }, [(JSON.stringify(_vm.currentSelectedProduct) != '{}' && _vm.currentSelectedProduct.attrValueId == obj.attrValueId && obj.canChoose == true) ? _c('text', {
        staticClass: ["button-selected"],
        on: {
          "click": function($event) {
            _vm.itemSelected(obj, i, j)
          }
        }
      }, [_vm._v(_vm._s(obj.attrValueName))]) : (_vm.productDetailsVos[i].attrList[j].canChoose == false) ? _c('text', {
        staticClass: ["button-disable"],
        on: {
          "click": function($event) {
            _vm.itemSelected(obj, i, j)
          }
        }
      }, [_vm._v(_vm._s(obj.attrValueName))]) : _c('text', {
        staticClass: ["button-unselected"],
        on: {
          "click": function($event) {
            _vm.itemSelected(obj, i, j)
          }
        }
      }, [_vm._v(_vm._s(obj.attrValueName))])]) : _vm._e()
    })), _c('div', {
      staticClass: ["unit-price-div2"]
    }, _vm._l((_vm.productDetailsVos[i].attrList), function(obj, j) {
      return (i == 1) ? _c('div', {
        key: j,
        staticClass: ["unit-price"]
      }, [(JSON.stringify(_vm.currentSelectedLimit) != '{}' && _vm.currentSelectedLimit.attrValueId == obj.attrValueId && obj.canChoose == true) ? _c('text', {
        staticClass: ["button-selected"],
        on: {
          "click": function($event) {
            _vm.itemSelected(obj, i, j)
          }
        }
      }, [_vm._v(_vm._s(obj.attrValueName))]) : (_vm.productDetailsVos[i].attrList[j].canChoose == false) ? _c('text', {
        staticClass: ["button-disable"],
        on: {
          "click": function($event) {
            _vm.itemSelected(obj, i, j)
          }
        }
      }, [_vm._v(_vm._s(obj.attrValueName))]) : _c('text', {
        staticClass: ["button-unselected"],
        on: {
          "click": function($event) {
            _vm.itemSelected(obj, i, j)
          }
        }
      }, [_vm._v(_vm._s(obj.attrValueName))])]) : _vm._e()
    }))])
  }), _c('div', {
    ref: "detail",
    staticClass: ["bottomLine-div"]
  }, [_c('div', {
    staticClass: ["bottomLine"]
  })]), _c('div', {
    staticClass: ["count-div"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["count-edit-div"]
  }, [_c('text', {
    staticClass: ["count-edit-button"],
    on: {
      "click": function($event) {
        _vm.editCount('reduce')
      }
    }
  }, [_vm._v("-")]), _c('input', {
    ref: "CInput",
    staticClass: ["count"],
    attrs: {
      "maxlength": "3",
      "type": "number",
      "value": this.currentCount
    },
    on: {
      "input": _vm.countInput,
      "blur": _vm.onblur
    }
  }), _c('text', {
    staticClass: ["count-edit-button"],
    on: {
      "click": function($event) {
        _vm.editCount('plus')
      }
    }
  }, [_vm._v("+")])])]), _c('div', {
    staticClass: ["line-div"]
  }), _vm._l((_vm.imagelists), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: ["detail-div"]
    }, [_c('image', {
      style: {
        width: _vm.width,
        height: _vm.height
      },
      attrs: {
        "src": item.path,
        "placeholder": _vm.resourceBaseUrl + 'assets/placeholderImge.png'
      },
      on: {
        "load": _vm.resize
      }
    })])
  })], 2), _c('div', {
    staticClass: ["edit-group"],
    style: {
      paddingBottom: _vm.isipx ? '50px' : '0px'
    }
  }, [_c('image', {
    staticClass: ["button-service"],
    attrs: {
      "src": _vm.resourceBaseUrl + 'assets/service.png',
      "resize": "cover"
    },
    on: {
      "click": function($event) {
        _vm.mackCall()
      }
    }
  }), _c('div', {
    staticClass: ["btn-group"]
  }, [_c('text', {
    staticClass: ["button-cart"],
    on: {
      "click": function($event) {
        _vm.addToCart()
      }
    }
  }, [_vm._v("加入购物车")]), _c('text', {
    staticClass: ["button-order"],
    on: {
      "click": function($event) {
        _vm.getOrder()
      }
    }
  }, [_vm._v("立即下单")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["count-tip-div"]
  }, [_c('text', {
    staticClass: ["count-tip1"]
  }, [_vm._v("购车数量")]), _c('text', {
    staticClass: ["count-tip2"]
  }, [_vm._v("（最多999辆）")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // 网络接口配置
  QUERY_PRODUCTS_LIST: 'ecommerce/product/open/queryProducts', // 获取banner接口
  QUERY_PRODUCT_DETAIL: 'ecommerce/product/open/queryProductDetails'
};

/***/ })

/******/ });