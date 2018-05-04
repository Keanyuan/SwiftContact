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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ (Array(49).concat([
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(50)
)
__vue_styles__.push(__webpack_require__(51)
)
__vue_styles__.push(__webpack_require__(52)
)
__vue_styles__.push(__webpack_require__(53)
)
__vue_styles__.push(__webpack_require__(54)
)
__vue_styles__.push(__webpack_require__(55)
)
__vue_styles__.push(__webpack_require__(56)
)
__vue_styles__.push(__webpack_require__(57)
)
__vue_styles__.push(__webpack_require__(58)
)
__vue_styles__.push(__webpack_require__(59)
)
__vue_styles__.push(__webpack_require__(60)
)
__vue_styles__.push(__webpack_require__(61)
)
__vue_styles__.push(__webpack_require__(62)
)
__vue_styles__.push(__webpack_require__(63)
)
__vue_styles__.push(__webpack_require__(64)
)
__vue_styles__.push(__webpack_require__(65)
)
__vue_styles__.push(__webpack_require__(66)
)
__vue_styles__.push(__webpack_require__(67)
)
__vue_styles__.push(__webpack_require__(68)
)
__vue_styles__.push(__webpack_require__(69)
)
__vue_styles__.push(__webpack_require__(70)
)
__vue_styles__.push(__webpack_require__(71)
)
__vue_styles__.push(__webpack_require__(72)
)
__vue_styles__.push(__webpack_require__(73)
)
__vue_styles__.push(__webpack_require__(74)
)
__vue_styles__.push(__webpack_require__(75)
)
__vue_styles__.push(__webpack_require__(76)
)
__vue_styles__.push(__webpack_require__(77)
)
__vue_styles__.push(__webpack_require__(78)
)
__vue_styles__.push(__webpack_require__(79)
)
__vue_styles__.push(__webpack_require__(80)
)
__vue_styles__.push(__webpack_require__(81)
)
__vue_styles__.push(__webpack_require__(82)
)
__vue_styles__.push(__webpack_require__(83)
)
__vue_styles__.push(__webpack_require__(84)
)
__vue_styles__.push(__webpack_require__(85)
)
__vue_styles__.push(__webpack_require__(86)
)
__vue_styles__.push(__webpack_require__(87)
)
__vue_styles__.push(__webpack_require__(88)
)
__vue_styles__.push(__webpack_require__(89)
)
__vue_styles__.push(__webpack_require__(90)
)
__vue_styles__.push(__webpack_require__(91)
)
__vue_styles__.push(__webpack_require__(92)
)
__vue_styles__.push(__webpack_require__(93)
)
__vue_styles__.push(__webpack_require__(94)
)
__vue_styles__.push(__webpack_require__(95)
)
__vue_styles__.push(__webpack_require__(96)
)
__vue_styles__.push(__webpack_require__(97)
)
__vue_styles__.push(__webpack_require__(98)
)
__vue_styles__.push(__webpack_require__(99)
)
__vue_styles__.push(__webpack_require__(100)
)
__vue_styles__.push(__webpack_require__(101)
)
__vue_styles__.push(__webpack_require__(102)
)
__vue_styles__.push(__webpack_require__(103)
)

/* script */
__vue_exports__ = __webpack_require__(104)

/* template */
var __vue_template__ = __webpack_require__(105)
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
__vue_options__.__file = "/Users/qizhiyuan/Desktop/WeexProject/weextest1/src/components/MyDiv.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-36ef21ad"
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
/* 50 */
/***/ (function(module, exports) {

module.exports = {
  "center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "box": {
    "backgroundColor": "rgba(0,180,255,0.4)"
  },
  "A": {
    "width": "700",
    "height": "700"
  },
  "B": {
    "width": "500",
    "height": "500"
  },
  "C": {
    "width": "300",
    "height": "300"
  },
  "D": {
    "width": "100",
    "height": "100"
  },
  "weapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "graph": {
    "position": "relative",
    "width": "700",
    "height": "700",
    "backgroundColor": "#FFFF00"
  },
  "circle": {
    "position": "absolute",
    "width": "500",
    "height": "500",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderRadius": "250"
  },
  "red": {
    "top": 0,
    "left": "100",
    "backgroundColor": "rgba(255,88,88,0.5)",
    "borderColor": "rgba(255,88,88,0.7)"
  },
  "green": {
    "left": 0,
    "bottom": 0,
    "backgroundColor": "rgba(106,230,106,0.5)",
    "borderColor": "rgba(59,195,59,0.7)"
  },
  "blue": {
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(53,143,255,0.5)",
    "borderColor": "rgba(53,143,255,0.7)"
  },
  "graph1": {
    "width": "700",
    "height": "700",
    "backgroundColor": "rgba(110,110,110,1)"
  },
  "text": {
    "textAlign": "center",
    "width": "300",
    "marginLeft": "75",
    "marginTop": "75",
    "paddingTop": "12",
    "paddingBottom": "12",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#DDDDDD",
    "fontSize": "36",
    "color": "#FF6600"
  },
  "freestyle": {
    "color": "#43B212",
    "textAlign": "center",
    "fontSize": "100"
  },
  "weapper1": {
    "flexDirection": "column",
    "justifyContent": "center",
    "backgroundColor": "#FFFF00"
  },
  "panel": {
    "width": "600",
    "marginLeft": "75",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#BBBBBB",
    "paddingTop": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "paddingRight": "15",
    "marginBottom": "30"
  },
  "text1": {
    "lines": 3,
    "color": "#34de32",
    "fontSize": "32"
  },
  "text2": {
    "width": "600",
    "paddingTop": "15",
    "paddingBottom": "15",
    "marginLeft": "75",
    "marginTop": "100",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#BBBBBB",
    "color": "#666666",
    "fontSize": "30"
  },
  "unicode": {
    "fontSize": "180",
    "textAlign": "center"
  },
  "image": {
    "width": "750",
    "height": "1000"
  },
  "weapper2": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title": {
    "width": "500",
    "textAlign": "center",
    "fontSize": "60",
    "color": "#666666"
  },
  "image1": {
    "width": "500",
    "height": "280",
    "borderColor": "#41B883",
    "borderStyle": "solid",
    "borderWidth": "2",
    "backgroundColor": "#666666"
  },
  "weapper3": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "screen": {
    "position": "relative",
    "left": "41"
  },
  "image2": {
    "width": "668",
    "height": "752"
  },
  "title2": {
    "position": "absolute",
    "bottom": "20",
    "left": "34",
    "width": "600",
    "fontSize": "50",
    "paddingTop": "20",
    "paddingBottom": "20",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "textAlign": "center",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750",
    "height": "1000"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "height": "60"
  },
  "button": {
    "width": "200",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "40",
    "marginLeft": "30",
    "marginRight": "30",
    "textAlign": "center",
    "color": "#41B883",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "panel": {
    "width": "600",
    "height": "250",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "text": {
    "fontSize": "100",
    "textAlign": "center",
    "color": "#41B883"
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "cell": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "panel": {
    "width": "600",
    "height": "900",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50",
    "justifyContent": "center",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.4)"
  },
  "text": {
    "fontSize": "200",
    "textAlign": "center",
    "color": "#41B883"
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {
  "body": {
    "backgroundColor": "#ffffff"
  },
  "image": {
    "width": "600",
    "backgroundColor": "#FFFFDF",
    "height": "400"
  },
  "scroller": {
    "width": "600",
    "height": "800"
  },
  "hint": {
    "position": "absolute",
    "width": "750",
    "height": "150",
    "top": "900",
    "left": "0"
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "750",
    "flexDirection": "row",
    "height": "400"
  },
  "scroller1": {
    "width": "750",
    "flexDirection": "row",
    "marginTop": "40",
    "height": "400"
  },
  "panel": {
    "width": "600",
    "height": "300",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.4)",
    "justifyContent": "center"
  },
  "text": {
    "fontSize": "100",
    "textAlign": "center",
    "color": "#41B883"
  },
  "hint": {
    "position": "absolute",
    "width": "750",
    "height": "150",
    "top": "900",
    "left": "0"
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {
  "ccDiv": {
    "width": "750",
    "height": "600"
  },
  "size": {
    "width": "750",
    "height": "600",
    "justifyContent": "center"
  },
  "indicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "60",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "itemColor": "#DDDDDD",
    "itemSelectedColor": "rgb(0,180,255)"
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {
  "divcss": {
    "flexDirection": "row",
    "marginBottom": "16",
    "justifyContent": "space-between"
  },
  "button": {
    "fontSize": 36,
    "width": "150",
    "color": "#41B883",
    "textAlign": "center",
    "paddingTop": 10,
    "paddingBottom": 10,
    "borderWidth": 2,
    "borderStyle": "solid",
    "marginRight": 20,
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "input": {
    "placeholderColor": "#C1DFD2",
    "fontSize": "16wx",
    "width": "600",
    "height": "40wx",
    "marginTop": "50",
    "marginLeft": "75",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "20wx",
    "borderColor": "#41B883"
  },
  "text": {
    "fontSize": "16wx",
    "width": "600",
    "height": "150wx",
    "marginTop": "50",
    "marginLeft": "75",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "20wx",
    "borderColor": "#41B883"
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "16wx",
    "width": "600",
    "height": "150wx",
    "marginTop": "50",
    "marginLeft": "75",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "20wx",
    "borderColor": "#41B883"
  },
  "input": {
    "placeholderColor": "#C1DFD2",
    "fontSize": "16wx",
    "width": "600",
    "height": "40wx",
    "marginTop": "50",
    "marginLeft": "75",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "20wx",
    "borderColor": "#41B883"
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "alignItems": "center"
  },
  "scroller": {
    "width": "600",
    "height": "150wx"
  },
  "text": {
    "fontSize": "16wx",
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "20wx",
    "borderColor": "#41B883"
  },
  "textarea": {
    "fontSize": "20wx",
    "width": "650",
    "marginTop": "20",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderColor": "#41B883",
    "borderStyle": "solid"
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "list": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "marginBottom": "20",
    "marginTop": "20"
  },
  "label": {
    "fontSize": "30",
    "lineHeight": "60",
    "color": "#BBBBBB",
    "marginLeft": "10"
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "video": {
    "width": "640",
    "height": "360",
    "marginTop": "60",
    "marginLeft": "60"
  },
  "info": {
    "marginTop": "40",
    "fontSize": "40",
    "textAlign": "center"
  }
}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  "info": {
    "marginTop": "40",
    "fontSize": "40",
    "textAlign": "center"
  },
  "web": {
    "marginTop": "40",
    "width": "750",
    "height": "600"
  },
  "divcss": {
    "marginTop": "40",
    "flexDirection": "row",
    "marginBottom": "16",
    "justifyContent": "space-between"
  },
  "button": {
    "fontSize": "36",
    "width": "150",
    "color": "#41B883",
    "textAlign": "center",
    "paddingTop": 10,
    "paddingBottom": 10,
    "borderWidth": 2,
    "borderStyle": "solid",
    "marginRight": 20,
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "backgroundColor": "#EFEFEF"
  },
  "refresh": {
    "height": 128,
    "width": 750,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refreshText": {
    "color": "#888888",
    "fontWeight": "bold"
  },
  "indicator": {
    "color": "#888888",
    "height": "40",
    "width": "40",
    "marginRight": "30"
  },
  "absolute": {
    "position": "absolute",
    "top": "0",
    "width": "750",
    "height": "377"
  },
  "banner": {
    "height": "377",
    "flexDirection": "row"
  },
  "bannerInfo": {
    "width": "270",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "avatar": {
    "width": "148",
    "height": "108",
    "borderRadius": "54",
    "borderWidth": "4",
    "borderColor": "#FFFFFF",
    "borderBottom": "14"
  },
  "name": {
    "fontWeight": "bold",
    "fontSize": "32",
    "color": "#FFFFFF",
    "lineHeight": "32",
    "textAlign": "center",
    "marginBottom": "16"
  },
  "titleWrap": {
    "width": "100",
    "height": "24",
    "marginBottom": "10",
    "backgroundColor": "rgba(255,255,255,0.8)",
    "borderRadius": 12,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title": {
    "fontSize": 20,
    "color": "#000000"
  },
  "bannerPhotoWrap": {
    "width": "449",
    "height": "305",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "12",
    "marginTop": "35",
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "flexWrap": "wrap"
  },
  "bannerPhoto": {
    "width": "137",
    "height": "137",
    "marginBottom": "6"
  },
  "stickyHeader": {
    "position": "sticky",
    "height": "94",
    "flexDirection": "row",
    "paddingBottom": "6"
  },
  "stickyWrapper": {
    "width": "750",
    "flexDirection": "row",
    "backgroundColor": "#00cc99",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "stickyTextImageWrapper": {
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "stickyText": {
    "color": "#FFFFFF",
    "fontWeight": "bold",
    "fontSize": "32",
    "marginRight": "12"
  },
  "stickyImage": {
    "width": "64",
    "height": "64",
    "borderRadius": "32"
  },
  "cell": {
    "paddingTop": "6",
    "paddingBottom": "6"
  },
  "item": {
    "backgroundColor": "#FFFFFF",
    "alignItems": "center"
  },
  "itemName": {
    "fontSize": "28",
    "color": "#333333",
    "lineHeight": "42",
    "textAlign": "left",
    "marginTop": "24"
  },
  "itemPhoto": {
    "marginTop": "18",
    "width": "220",
    "height": "220",
    "marginBottom": 18
  },
  "itemDesc": {
    "fontSize": "24",
    "marginTop": "12",
    "marginRight": "12",
    "marginBottom": "12",
    "marginLeft": "12",
    "color": "#999999",
    "lineHeight": "36",
    "textAlign": "left"
  },
  "itemClickBehaviour": {
    "fontSize": "36",
    "color": "#00cc99",
    "lineHeight": "36",
    "textAlign": "center",
    "marginTop": "6",
    "marginLeft": "24",
    "marginRight": "24",
    "marginBottom": "30"
  },
  "footer": {
    "height": "94",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#00cc99"
  },
  "fixedItem": {
    "position": "fixed",
    "width": "120",
    "height": "120",
    "backgroundColor": "#00cc99",
    "right": "32",
    "bottom": "32",
    "borderRadius": "60",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "fixedText": {
    "fontSize": "32",
    "color": "#FFFFFF",
    "lineHeight": "32"
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750"
  },
  "text": {
    "textAlign": "center",
    "fontSize": "50",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#606060",
    "backgroundColor": "#E8E8E8"
  },
  "card": {
    "width": "650",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "#E8E8E8",
    "borderRadius": "20",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50"
  },
  "card-title": {
    "textAlign": "center",
    "fontSize": "40",
    "color": "#888888",
    "backgroundColor": "#F5F5F5",
    "paddingTop": "12",
    "paddingRight": "12",
    "paddingBottom": "12",
    "paddingLeft": "12",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#E0E0E0"
  },
  "card-bordy": {
    "height": "200",
    "justifyContent": "center"
  },
  "card-label": {
    "textAlign": "center",
    "fontSize": "100",
    "color": "#1FB5FC"
  }
}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
  "title": {
    "textAlign": "center",
    "fontSize": "40",
    "color": "#888888",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "backgroundColor": "#EEEEEE"
  },
  "image": {
    "width": "750",
    "height": "235"
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750",
    "backgroundColor": "#F5F5F5"
  },
  "floor": {
    "marginBottom": "15",
    "backgroundColor": "#FFFFFF"
  },
  "title": {
    "fontSize": "40",
    "textAlign": "center",
    "paddingTop": "35",
    "paddingBottom": "25"
  },
  "desc": {
    "lines": 2,
    "color": "#999999",
    "fontSize": "30",
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "image-section": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "20",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "image": {
    "width": "230",
    "height": "230"
  },
  "comment": {
    "color": "#52bfe6",
    "fontSize": "32",
    "textAlign": "right",
    "paddingRight": "50",
    "marginTop": "25",
    "marginBottom": "20"
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750"
  },
  "row": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "column": {
    "flexDirection": "column",
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "box": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(79,192,141)",
    "backgroundColor": "rgba(79,192,141,0.2)"
  },
  "large": {
    "width": "700",
    "height": "350",
    "marginTop": "25",
    "marginRight": "25",
    "marginBottom": "25",
    "marginLeft": "25"
  },
  "medium": {
    "width": "180",
    "height": "300"
  },
  "small": {
    "width": "100",
    "height": "100"
  },
  "text": {
    "color": "rgb(79,192,141)",
    "fontSize": "50"
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {
  "center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "card": {
    "width": "600",
    "height": "200",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#E8E8E8",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50",
    "backgroundColor": "#F5F5F5"
  },
  "title": {
    "textAlign": "center",
    "fontSize": "120",
    "color": "#888888"
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750"
  },
  "counter": {
    "position": "relative",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#DDDDDD",
    "marginBottom": "80"
  },
  "index": {
    "position": "absolute",
    "top": "10",
    "left": "20",
    "color": "#ff26c9",
    "fontSize": "30"
  },
  "output": {
    "fontSize": "150",
    "textAlign": "center",
    "paddingTop": "50",
    "paddingRight": "50",
    "paddingBottom": "50",
    "paddingLeft": "50",
    "backgroundColor": "#FBFBFB"
  },
  "button": {
    "borderWidth": "2",
    "borderColor": "#DDDDDD",
    "fontSize": "100",
    "textAlign": "center",
    "backgroundColor": "#F5F5F5"
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = {
  "counter": {
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#DDDDDD",
    "marginBottom": "80"
  },
  "output": {
    "fontSize": "150",
    "textAlign": "center",
    "paddingTop": "50",
    "paddingRight": "50",
    "paddingBottom": "50",
    "paddingLeft": "50",
    "backgroundColor": "#FBFBFB"
  },
  "button": {
    "borderWidth": "2",
    "borderColor": "#DDDDDD",
    "fontSize": "100",
    "textAlign": "center",
    "backgroundColor": "#F5F5F5"
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "width": "750",
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0",
    "flexDirection": "column",
    "justifyContent": "space-around"
  },
  "content": {
    "width": "750",
    "height": "600",
    "backgroundColor": "#F5F5F5",
    "flexDirection": "row"
  },
  "list": {
    "width": "750"
  },
  "center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "box": {
    "width": "50",
    "height": "50",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50"
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "width": "750",
    "backgroundColor": "#EFEFEF"
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "textAlign": "center",
    "fontSize": "50",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#606060",
    "backgroundColor": "#E8E8E8"
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "width": "750",
    "justifyContent": "center"
  },
  "header": {
    "width": "750",
    "height": "0"
  },
  "text1": {
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20",
    "borderWidth": "2",
    "borderColor": "#FF0000"
  },
  "box": {
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50",
    "position": "relative"
  },
  "btn": {
    "position": "absolute",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "width": "80",
    "fontSize": "60",
    "right": "0",
    "top": "0",
    "color": "#41B883"
  },
  "text": {
    "textAlign": "center",
    "fontSize": "50",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#606060",
    "backgroundColor": "#E8E8E8"
  }
}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "width": "700",
    "height": "700",
    "borderWidth": "3",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "marginLeft": "25"
  },
  "row": {
    "height": "100",
    "flexDirection": "column",
    "justifyContent": "center",
    "paddingLeft": "30",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DDDDDD"
  },
  "text": {
    "fontSize": "45",
    "color": "#666666"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "60"
  },
  "button": {
    "width": "200",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "40",
    "marginLeft": "30",
    "marginRight": "30",
    "textAlign": "center",
    "color": "#41B883",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {
  "title1": {
    "color": "#FF0000",
    "fontSize": 36,
    "fontFamily": "iconfont1"
  },
  "title2": {
    "color": "#808080",
    "fontSize": 36,
    "fontFamily": "iconfont2"
  },
  "title3": {
    "color": "#FFC0CB",
    "fontSize": 36,
    "fontFamily": "iconfont3"
  },
  "title4": {
    "color": "#FF0000",
    "fontSize": 36,
    "fontFamily": "iconfont4"
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = {
  "scroll": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "justifyContent": "flex-start"
  },
  "label": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "60"
  },
  "count": {
    "color": "#41B883",
    "textAlign": "center",
    "fontSize": "20",
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20"
  }
}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "width": "250",
    "height": "250",
    "backgroundColor": "#DDDDDD"
  }
}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "button": {
    "fontSize": "60",
    "width": "450",
    "textAlign": "center",
    "marginTop": "30",
    "marginLeft": "150",
    "paddingTop": "20",
    "paddingBottom": "20",
    "borderWidth": "2",
    "borderStyle": "solid",
    "color": "#666666",
    "borderColor": "#DDDDDD",
    "backgroundColor": "#F5F5F5"
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {
  "panel": {
    "height": "100",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "width": "650",
    "marginLeft": "50",
    "marginTop": "50",
    "marginBottom": "50"
  },
  "center": {
    "justifyContent": "center"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "paddingLeft": "25",
    "paddingRight": "25",
    "color": "#41B883"
  },
  "small": {
    "fontSize": "32",
    "paddingLeft": "35",
    "paddingRight": "35",
    "color": "#41B883"
  },
  "div": {
    "alignItems": "center",
    "width": "750",
    "height": "90",
    "paddingLeft": "30",
    "paddingRight": "30",
    "borderBottomWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#DDDDDD"
  },
  "textC": {
    "width": "750",
    "height": "90"
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = {
  "label": {
    "color": "#666666",
    "textAlign": "center",
    "borderColor": "#FF26C9",
    "borderWidth": "1",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "fontSize": "20"
  },
  "count": {
    "color": "#41B883",
    "textAlign": "center",
    "fontSize": "100",
    "marginTop": "80",
    "marginBottom": "100"
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {
  "label": {
    "color": "#666666",
    "textAlign": "center",
    "borderColor": "#FF26C9",
    "borderWidth": "1",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "fontSize": "20"
  },
  "count": {
    "color": "#41B883"
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {
  "stty": {
    "borderColor": "#ff26c9",
    "borderWidth": "1",
    "width": "750"
  },
  "text": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "backgroundColor": "#dcdcdc"
  }
}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
  "text": {
    "fontSize": "16wx",
    "width": "600",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "20wx",
    "borderColor": "#41B883"
  },
  "input": {
    "placeholderColor": "#C1DFD2",
    "fontSize": "16wx",
    "width": "600",
    "height": "40wx",
    "marginTop": "50",
    "marginLeft": "75",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderRadius": "20wx",
    "borderColor": "#41B883"
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {
  "freestyle": {
    "color": "#41B883",
    "textAlign": "center",
    "fontSize": "150"
  }
}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "robot": {
    "position": "relative",
    "width": "700",
    "height": "600"
  },
  "face": {
    "position": "absolute",
    "top": "194",
    "left": "100",
    "width": "500",
    "height": "260",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgba(241,209,121,0.9)",
    "backgroundColor": "rgba(241,209,121,0.5)"
  },
  "left-eye": {
    "position": "absolute",
    "top": "45",
    "left": "70"
  },
  "right-eye": {
    "position": "absolute",
    "top": "45",
    "right": "70"
  },
  "eye": {
    "width": "90",
    "height": "90",
    "borderRadius": "45",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgba(255,88,88,0.7)",
    "backgroundColor": "rgba(255,88,88,0.5)"
  },
  "mouse": {
    "position": "absolute",
    "bottom": "30",
    "left": "140",
    "width": "220",
    "height": "40",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgba(255,88,88,0.7)",
    "backgroundColor": "rgba(255,88,88,0.5)"
  },
  "left-tentacle": {
    "position": "absolute",
    "top": 0,
    "left": "220"
  },
  "right-tentacle": {
    "position": "absolute",
    "top": 0,
    "right": "220"
  },
  "tentacle": {
    "width": "50",
    "height": "200"
  },
  "stick": {
    "position": "absolute",
    "top": "46",
    "left": "18",
    "width": "14",
    "height": "150",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgba(53,143,255,0.7)",
    "backgroundColor": "rgba(53,143,255,0.5)"
  },
  "ball": {
    "position": "absolute",
    "top": 0,
    "width": "50",
    "height": "50",
    "borderRadius": "30",
    "borderWidth": "4",
    "borderStyle": "solid",
    "borderColor": "rgba(53,143,255,0.7)",
    "backgroundColor": "rgba(53,143,255,0.5)"
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {
  "bg": {
    "backgroundImage": "linear-gradient(to top, red, blue)"
  }
}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "space-around"
  },
  "section": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "box": {
    "width": "500",
    "height": "300",
    "backgroundColor": "#F0F0F0"
  },
  "shadow": {
    "boxShadow": "0 15px 30px rgba(0, 0, 0, 0.5)",
    "MsTransform": "rotate(7deg)",
    "WebkitTransform": "rotate(7deg)",
    "transform": "rotate(8deg)"
  },
  "inset-shadow": {
    "boxShadow": "inset 0 8px 20px rgba(0, 0, 0, 0.4)",
    "MsTransform": "rotate(-8deg)",
    "WebkitTransform": "rotate(-8deg)",
    "transform": "rotate(-8deg)"
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "space-around"
  },
  "section": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "box": {
    "width": "500",
    "height": "300",
    "backgroundColor": "#F0F0F0"
  },
  "shadow": {
    "boxShadow": "0 15px 70px rgba(0, 0, 0, 0.6)",
    "width:active": "600",
    "height:active": "400",
    "boxShadow:active": "0 5px 10px rgba(0, 0, 0, 0.2)"
  },
  "inset-shadow": {
    "boxShadow": "inset 0 8px 20px rgba(0, 0, 0, 0.2)",
    "boxShadow:active": "inset 0 15px 40px rgba(0, 0, 0, 0.2)"
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = {
  "screen": {
    "position": "absolute",
    "width": "750",
    "top": 0,
    "bottom": 0,
    "backgroundColor": "#F5F5F5",
    "overflow": "hidden"
  },
  "row": {
    "width": "750",
    "height": "125",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#E0E0E0",
    "flexDirection": "row"
  },
  "column": {
    "width": "125",
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#E0E0E0"
  },
  "bold": {
    "borderBottomColor": "#CFCFCF",
    "borderRightColor": "#CFCFCF"
  }
}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = {
  "screen": {
    "position": "absolute",
    "width": "750",
    "top": 0,
    "bottom": 0,
    "overflow": "hidden"
  },
  "row": {
    "width": "750",
    "height": "25",
    "flexDirection": "row"
  },
  "column": {
    "width": "25"
  },
  "grey": {
    "backgroundColor": "#EEEEEE"
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "position": "relative",
    "width": "600",
    "height": "520",
    "marginTop": "50",
    "backgroundColor": "#FFFFFF"
  },
  "v": {
    "position": "absolute",
    "width": "0",
    "height": "0",
    "borderStyle": "solid",
    "borderLeftColor": "rgba(0,0,0,0)",
    "borderRightColor": "rgba(0,0,0,0)",
    "borderBottom": 0
  },
  "outer": {
    "borderLeftWidth": "300",
    "borderRightWidth": "300",
    "borderTopWidth": "520",
    "borderTopColor": "#41B883"
  },
  "inner": {
    "top": 0,
    "left": "120",
    "borderLeftWidth": "180",
    "borderRightWidth": "180",
    "borderTopWidth": "310",
    "borderTopColor": "#35495e"
  },
  "blank": {
    "top": 0,
    "left": "230",
    "borderLeftWidth": "70",
    "borderRightWidth": "70",
    "borderTopWidth": "118",
    "borderTopColor": "#FFFFFF"
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "watermelon": {
    "width": "400",
    "height": "200",
    "borderColor": "#F3ECBB",
    "borderWidth": "8",
    "borderTopWidth": 0,
    "borderBottomLeftRadius": "200",
    "borderBottomRightRadius": "200",
    "backgroundColor": "#FF6666",
    "boxShadow": "0px 12px 0px 12px #008B00"
  },
  "seeds": {
    "fontSize": "100",
    "textAlign": "center"
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "120",
    "backgroundColor": "#00B4FF",
    "justifyContent": "center",
    "marginBottom": "60"
  },
  "title": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#ffffff",
    "fontFamily": "monospace"
  },
  "row": {
    "flexDirection": "row"
  },
  "example-panel": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "50"
  },
  "tips": {
    "fontSize": "30",
    "color": "#888888",
    "paddingBottom": "10",
    "fontFamily": "monospace"
  },
  "border": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#888888"
  },
  "container": {
    "width": "600",
    "height": "200"
  },
  "vertical-container": {
    "width": "300",
    "height": "450"
  },
  "box": {
    "height": "120",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "A": {
    "width": "120",
    "backgroundColor": "#ff7070"
  },
  "B": {
    "width": "80",
    "backgroundColor": "#66b966"
  },
  "C": {
    "width": "180",
    "backgroundColor": "#519fff"
  },
  "label": {
    "fontSize": "66",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "120",
    "backgroundColor": "#00B4FF",
    "justifyContent": "center",
    "marginBottom": "60"
  },
  "title": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#ffffff",
    "fontFamily": "monospace"
  },
  "row": {
    "flexDirection": "row"
  },
  "example-panel": {
    "alignItems": "center",
    "marginBottom": "50"
  },
  "tips": {
    "fontSize": "30",
    "color": "#888888",
    "paddingBottom": "10",
    "fontFamily": "monospace"
  },
  "container": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#888888",
    "width": "600",
    "height": "300"
  },
  "box": {
    "height": "120",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "A": {
    "width": "120",
    "backgroundColor": "#ff7070"
  },
  "B": {
    "width": "80",
    "backgroundColor": "#66b966"
  },
  "C": {
    "width": "180",
    "backgroundColor": "#519fff"
  },
  "D": {
    "width": "120",
    "backgroundColor": "#ffb37d"
  },
  "E": {
    "width": "150",
    "backgroundColor": "#c477ff"
  },
  "F": {
    "width": "100",
    "backgroundColor": "#67d9fb"
  },
  "G": {
    "width": "120",
    "backgroundColor": "#dcde64"
  },
  "label": {
    "fontSize": "66",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "120",
    "backgroundColor": "#00B4FF",
    "justifyContent": "center",
    "marginBottom": "60"
  },
  "title": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#ffffff",
    "fontFamily": "monospace"
  },
  "row": {
    "flexDirection": "row"
  },
  "example-panel": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "50"
  },
  "tips": {
    "fontSize": "30",
    "color": "#888888",
    "paddingBottom": "10",
    "fontFamily": "monospace"
  },
  "border": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#888888"
  },
  "container": {
    "width": "600",
    "height": "300",
    "overflow": "hidden"
  },
  "vertical-container": {
    "width": "400",
    "height": "550",
    "overflow": "hidden"
  },
  "box": {
    "height": "120",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "A": {
    "width": "120",
    "backgroundColor": "#ff7070"
  },
  "B": {
    "width": "80",
    "backgroundColor": "#66b966"
  },
  "C": {
    "width": "180",
    "backgroundColor": "#519fff"
  },
  "D": {
    "width": "120",
    "backgroundColor": "#ffb37d"
  },
  "E": {
    "width": "150",
    "backgroundColor": "#c477ff"
  },
  "F": {
    "width": "100",
    "backgroundColor": "#67d9fb"
  },
  "G": {
    "width": "120",
    "backgroundColor": "#dcde64"
  },
  "label": {
    "fontSize": "66",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "120",
    "backgroundColor": "#00B4FF",
    "justifyContent": "center",
    "marginBottom": "60"
  },
  "title": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#ffffff",
    "fontFamily": "monospace"
  },
  "row": {
    "flexDirection": "row"
  },
  "example-panel": {
    "alignItems": "center",
    "justifyContent": "center",
    "marginBottom": "50"
  },
  "tips": {
    "fontSize": "30",
    "color": "#888888",
    "paddingBottom": "10",
    "fontFamily": "monospace"
  },
  "border": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#888888"
  },
  "container": {
    "width": "600",
    "height": "160"
  },
  "vertical-container": {
    "width": "300",
    "height": "450"
  },
  "box": {
    "height": "120",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "A": {
    "width": "120",
    "backgroundColor": "#ff7070"
  },
  "B": {
    "width": "80",
    "backgroundColor": "#66b966"
  },
  "C": {
    "width": "160",
    "backgroundColor": "#519fff"
  },
  "D": {
    "width": "120",
    "backgroundColor": "#ffb37d"
  },
  "E": {
    "width": "100",
    "backgroundColor": "#c477ff"
  },
  "label": {
    "fontSize": "66",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "120",
    "backgroundColor": "#00B4FF",
    "justifyContent": "center",
    "marginBottom": "60"
  },
  "title": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#ffffff",
    "fontFamily": "monospace"
  },
  "row": {
    "flexDirection": "row",
    "alignItems": "flex-start"
  },
  "example-panel": {
    "alignItems": "center",
    "marginBottom": "50"
  },
  "tips": {
    "fontSize": "30",
    "color": "#888888",
    "paddingBottom": "10",
    "fontFamily": "monospace"
  },
  "container": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#888888",
    "width": "600",
    "height": "250"
  },
  "box": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "A": {
    "backgroundColor": "#ff7070"
  },
  "B": {
    "backgroundColor": "#66b966"
  },
  "C": {
    "backgroundColor": "#519fff"
  },
  "D": {
    "backgroundColor": "#ffb37d"
  },
  "E": {
    "backgroundColor": "#c477ff"
  },
  "F": {
    "backgroundColor": "#67d9fb"
  },
  "G": {
    "backgroundColor": "#dcde64"
  },
  "label": {
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "10",
    "paddingRight": "10",
    "fontSize": "28",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "tabbar": {
    "flexDirection": "row",
    "backgroundColor": "#FF4563"
  },
  "tab": {
    "height": "120",
    "width": "150",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "active": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "backgroundColor": "rgb(218,59,85)",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "active": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    },
    "tab-panels": {
      "property": "left",
      "duration": 200,
      "timingFunction": "ease-in-out"
    }
  },
  "icon": {
    "width": "45",
    "height": "45"
  },
  "title": {
    "fontSize": "28",
    "color": "#FFFFFF",
    "marginTop": "10"
  },
  "tab-panels": {
    "position": "relative",
    "width": 3750,
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "stretch",
    "backgroundColor": "#F5F5F5",
    "transitionProperty": "left",
    "transitionDuration": 200,
    "transitionTimingFunction": "ease-in-out"
  },
  "panel": {
    "width": "750",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "content": {
    "fontSize": "100",
    "color": "#707070"
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "space-between"
  },
  "todo-list": {
    "flex": 1,
    "backgroundColor": "#F3F3F3"
  },
  "tips": {
    "textAlign": "center",
    "color": "#CCCCCC",
    "fontSize": "60",
    "marginTop": "200"
  },
  "todo-filter": {
    "height": "90",
    "backgroundColor": "#FFFFFF",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "todo-card": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginTop": "12",
    "marginBottom": "12",
    "marginLeft": "25",
    "marginRight": "25",
    "paddingTop": "45",
    "paddingBottom": "45",
    "paddingLeft": "10",
    "paddingRight": "10",
    "borderRadius": "10",
    "backgroundColor": "#FFFFFF"
  },
  "first-todo-card": {
    "marginTop": "50"
  },
  "btn-delete": {
    "width": "80"
  },
  "btn-delete-text": {
    "fontFamily": "iconfont",
    "fontSize": "50"
  },
  "todo-title": {
    "fontSize": "42",
    "color": "#606060",
    "paddingLeft": "50"
  },
  "todo-title-completed": {
    "color": "#BBBBBB",
    "textDecoration": "line-through"
  },
  "operations": {
    "height": "120",
    "flex": 0,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "stretch",
    "borderTopWidth": "2",
    "borderTopStyle": "solid",
    "borderTopColor": "#DDDDDD",
    "backgroundColor": "#FFFFFF"
  },
  "input": {
    "width": "500",
    "height": "120",
    "paddingLeft": "30",
    "color": "#606060",
    "fontSize": "40"
  },
  "btn": {
    "justifyContent": "center"
  },
  "btn-text": {
    "textAlign": "center",
    "fontSize": "34",
    "color": "#808080"
  },
  "btn-filter": {
    "width": "180",
    "height": "60",
    "borderRadius": "12",
    "marginLeft": "25",
    "marginRight": "25",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgba(0,0,0,0)"
  },
  "btn-filter-selected": {
    "borderColor": "#DDDDDD",
    "backgroundColor": "#F5F5F5",
    "backgroundColor:active": "#E0E0E0"
  },
  "btn-filter-text": {
    "color": "#808080",
    "fontSize": "30"
  },
  "btn-filter-text-selected": {
    "color": "#606060",
    "fontWeight": "bold"
  },
  "btn-send": {
    "width": "120",
    "borderLeftWidth": "2",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#DDDDDD",
    "backgroundColor": "#F5F5F5",
    "backgroundColor:active": "#E0E0E0"
  },
  "btn-send-text": {
    "color": "#808080",
    "fontSize": "70"
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = {
  "screen": {
    "justifyContent": "space-around",
    "alignItems": "center"
  },
  "title": {
    "fontSize": "60",
    "color": "rgb(214,111,30)",
    "textAlign": "center",
    "fontWeight": "bold"
  },
  "subtitle": {
    "fontSize": "26",
    "color": "rgba(214,111,30,0.8)",
    "textAlign": "center"
  },
  "tips": {
    "width": "600",
    "fontSize": "30",
    "color": "rgba(214,111,30,0.8)",
    "textAlign": "center"
  },
  "board": {
    "position": "relative",
    "borderColor": "#B37E47",
    "backgroundColor": "#EEDDCC"
  },
  "stick": {
    "position": "absolute",
    "backgroundColor": "#EEDDCC"
  },
  "result": {
    "position": "absolute",
    "backgroundColor": "rgba(26,25,31,0.75)",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "win": {
    "fontSize": "100",
    "fontWeight": "bold",
    "color": "#FF6666",
    "textAlign": "center"
  },
  "block": {
    "position": "absolute",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "borderStyle": "solid",
    "borderRadius": "10",
    "boxShadow": "0 2px 6px rgba(0, 0, 0, 0.3)",
    "transitionProperty": "top,left",
    "transitionDuration": 150,
    "transitionTimingFunction": "ease-in-out"
  },
  "@TRANSITION": {
    "block": {
      "property": "top,left",
      "duration": 150,
      "timingFunction": "ease-in-out"
    }
  },
  "block-normal": {
    "borderColor": "#B37E47",
    "backgroundColor": "#D5A471"
  },
  "block-boss": {
    "borderColor": "#BB3D3D",
    "backgroundColor": "#DE6457"
  },
  "operations": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "button": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "width": "160",
    "textAlign": "center"
  },
  "label": {
    "color": "#FFFFFF",
    "fontSize": "30",
    "borderWidth": "4",
    "borderRadius": "8",
    "borderColor": "#DE6457",
    "backgroundColor": "#EA7E72"
  },
  "step": {
    "fontSize": "42",
    "color": "#DE6457"
  },
  "name": {
    "textAlign": "center",
    "fontSize": "50",
    "color": "#FFEFE0"
  }
}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = {
  "result": {
    "textAlign": "right",
    "backgroundColor": "#666666",
    "fontSize": "40",
    "color": "#FFFFFF",
    "height": "120",
    "paddingTop": "35",
    "paddingRight": "35",
    "paddingBottom": "35",
    "paddingLeft": "35",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "row": {
    "flexDirection": "row"
  },
  "btn": {
    "flex": 1,
    "textAlign": "center",
    "color": "#333333",
    "backgroundColor": "#eeeeee",
    "fontSize": "46",
    "backgroundColor:active": "#BFBFBF",
    "height": "120",
    "paddingTop": "35",
    "paddingRight": "35",
    "paddingBottom": "35",
    "paddingLeft": "35",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "btn1": {
    "backgroundColor:active": "#BFBFBF",
    "width": "370",
    "backgroundColor": "#FFFFFF"
  },
  "btn2": {
    "lineHeight": "120",
    "textAlign": "center",
    "color": "#333333",
    "fontSize": "46",
    "backgroundColor": "#eeeeee",
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5"
  },
  "btn-operator": {
    "backgroundColor": "#666699",
    "fontSize": "50",
    "color": "#FFFFFF"
  }
}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "backgroundColor": "#FFFFFF"
  },
  "center": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "750",
    "height": "318"
  },
  "btn": {
    "width": "450",
    "height": "160",
    "marginTop": "50",
    "marginRight": "50",
    "marginBottom": "50",
    "marginLeft": "50",
    "opacity": 0.7,
    "opacity:active": 1
  },
  "scan-bg": {
    "width": "450",
    "height": "160",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "btn-text": {
    "color": "#505050",
    "fontSize": "64",
    "textAlign": "center"
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {
  "moreInfo": {
    "left": "10",
    "top": "10",
    "color": "#5E7EC2",
    "marginBottom": "20"
  },
  "location": {
    "fontSize": "20"
  },
  "divContent": {
    "width": "750",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "screenPictore": {
    "width": "750",
    "marginTop": "1000",
    "marginRight": "1000",
    "marginBottom": "1000",
    "marginLeft": "1000"
  },
  "text": {
    "position": "fixed",
    "bottom": "20",
    "color": "#FFFFFF",
    "left": "20",
    "width": "120",
    "height": "60",
    "backgroundColor": "#00FFFF",
    "textAlign": "center",
    "lineHeight": "60"
  },
  "fixedItem": {
    "position": "fixed",
    "width": "750",
    "marginTop": "0",
    "marginRight": "0",
    "marginBottom": "0",
    "marginLeft": "0",
    "backgroundColor": "rgba(0,0,0,1)",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "header": {
    "height": "600"
  },
  "poster": {
    "width": "750",
    "height": "520",
    "backgroundColor": "#BBBBBB"
  },
  "profile": {
    "position": "absolute",
    "width": "185",
    "height": "185",
    "right": "40",
    "bottom": 0,
    "backgroundColor": "#AAAAAA",
    "borderWidth": "4",
    "borderColor": "#F5F5F5"
  },
  "name": {
    "position": "absolute",
    "right": "250",
    "bottom": "105",
    "fontSize": "36",
    "color": "#FFFFFF"
  },
  "moment": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#DDDDDD",
    "paddingTop": "20",
    "paddingBottom": "20",
    "flexDirection": "row"
  },
  "author-profile": {
    "width": "95",
    "height": "95",
    "backgroundColor": "#D4D4D4",
    "marginLeft": "25",
    "marginRight": "15"
  },
  "link-text": {
    "color": "#576B95"
  },
  "author-name": {
    "fontSize": "30",
    "paddingTop": "8",
    "paddingBottom": "8"
  },
  "moment-content": {
    "width": "580",
    "fontSize": "30",
    "lineHeight": "40",
    "paddingTop": "5",
    "paddingBottom": "18",
    "color": "#353535",
    "lines": 3,
    "textOverflow": "ellipsis"
  },
  "moment-pictures": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingBottom": "5",
    "paddingRight": "5",
    "width": "600"
  },
  "picture": {
    "width": "180",
    "marginRight": "5",
    "height": "180",
    "marginBottom": "5"
  },
  "moment-share": {
    "width": "580",
    "flexDirection": "row",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "8",
    "paddingBottom": "8",
    "backgroundColor": "#EEEEEE"
  },
  "share-thumbnail": {
    "width": "85",
    "height": "85",
    "backgroundColor": "#DDDDDD"
  },
  "share-title": {
    "fontSize": "28",
    "color": "#232323",
    "marginTop": "25",
    "marginLeft": "15"
  },
  "moment-info": {
    "position": "relative",
    "paddingTop": "20",
    "height": "50",
    "width": "580",
    "flexDirection": "row"
  },
  "moment-time": {
    "color": "#999999",
    "fontSize": "24"
  },
  "moment-operation": {
    "marginLeft": "20",
    "fontSize": "24"
  },
  "moment-feedback": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "45",
    "height": "32"
  },
  "moment-arrow": {
    "width": "30",
    "height": "12",
    "marginTop": "20",
    "marginLeft": "30"
  },
  "moment-likes": {
    "width": "580",
    "backgroundColor": "#F2F2F2",
    "paddingLeft": "20",
    "paddingRight": "10"
  },
  "like-list": {
    "paddingTop": "10",
    "paddingBottom": "10",
    "fontSize": "28",
    "lineHeight": "38"
  },
  "comment-list": {
    "width": "580",
    "borderTopWidth": "1",
    "borderTopColor": "#DDDDDD",
    "backgroundColor": "#F2F2F2",
    "paddingLeft": "20",
    "paddingRight": "10",
    "paddingTop": "5",
    "paddingBottom": "15"
  },
  "moment-comment": {
    "paddingTop": "6"
  },
  "comment-text": {
    "fontSize": "28",
    "lineHeight": "40",
    "color": "#454545"
  }
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var mockMoments = [{
  author: {
    profile: 'http://img.qqzhi.com/upload/img_0_264028261D222908825_23.jpg',
    name: '孔明'
  },
  content: '精心整理，大家帮忙点个赞！',
  media: {
    share: {
      link: 'xxx',
      title: '手把手教你制作孔明灯，五分钟学会！',
      thumbnail: 'http://d9.yihaodianimg.com/N01/M08/1D/63/CgQCrlKsgAWAbKvCAAG6a3qH_po82600_380x380.jpg'
    }
  },
  location: '北京环洋大厦',
  time: '37 分钟前',
  from: '微博',
  likes: ['刘备', '黄月英', '孙尚香', '关羽', '大乔', '小乔', '貂蝉', '甄宓', '曹植', '蔡文姬', '吕布', '张春华', '赵云'],
  comments: [{
    author: '赵云',
    content: '丞相，有好多妹子给你点赞啊'
  }]
}, {
  author: {
    profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
    name: '刘备'
  },
  content: '‘电子围栏’简单理解就是圈出了一个个虚拟的停车框，用户必须将车辆停在指定区域内，否则无法锁车结束行程。如果用户不将车停到规定区域，车辆就无法归还，手机app将一直计价。电子围栏”简单理解就是圈出了一个个虚拟的停车框，用户必须将车辆停在指定区域内，否则无法锁车结束行程。如果用户不将车停到规定区域，车辆就无法归还，手机app将一直计价。‘电子围栏’简单理解就是圈出了一个个虚拟的停车框，用户必须将车辆停在指定区域内，否则无法锁车结束行程。如果用户不将车停到规定区域，车辆就无法归还，手机app将一直计价。',
  location: '上海国家会展中心',
  media: {
    pictures: ['http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg', 'http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg', 'http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg', 'http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg', 'http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg']
  },
  time: '1 小时前',
  likes: ['刘禅', '孔明', '云长', '翼德', '孙权', '马超'],
  comments: [{
    author: '刘禅',
    content: '爸比，你说的太好啦，这是我的人生格言！'
  }, {
    author: '尚香♥',
    content: '哇塞好帅，图是我拍的 (ღˇ◡ˇღ)'
  }, {
    author: '刘备',
    reply: '刘禅',
    content: '以后每天早上抄十遍'
  }, {
    author: '孔明',
    content: '主公微言大义，定会被后人广为传颂 👍'
  }]
}, {
  author: {
    profile: 'http://img307.ph.126.net/TcF7wq1cxoyqq54ubF-rXg%3D%3D/3783868111921385084.jpg',
    name: '云长'
  },
  content: '还是大哥见多识广，这些年来跟着大哥学到了很多东西，开阔了视野，感恩。',
  media: {
    pictures: ['http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg']
  },
  time: '2 小时前',
  from: '微博',
  likes: ['刘备', '孔明', '赵云'],
  comments: [{
    author: '翼德',
    content: '这是什么东西，为什么大哥没给我看过？！'
  }, {
    author: '刘备',
    reply: '翼德',
    content: '快来看，我们在三号帐篷附近'
  }]
}];
var modal = weex.requireModule('modal');
var nativeApi = weex.requireModule('swifter');

exports.default = {
  data: function data() {
    return {
      currentUser: {
        name: '刘备',
        profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
        poster: 'http://pic.fayi.com.cn/Upload/origin/123/62123.jpg'
      },
      moments: mockMoments,
      screenPicSrc: '',
      isAccording: false,
      height: '1000px',
      moreInfo: '全文',
      lines: 3

    };
  },

  methods: {
    onImageClick: function onImageClick(src) {
      this.isAccording = true;
      this.screenPicSrc = src;
    },
    onhidden: function onhidden() {
      this.isAccording = false;
    },
    onresize: function onresize(event) {
      this.height = this.$getConfig().env.deviceHeight;
    },
    onSave: function onSave() {
      var $image = this.$refs['img'];
      $image.save(function (result) {
        if (result.success) {
          modal.toast({ message: '保存成功' });
        } else {
          modal.toast({ message: '保存失败' });
        }
      });
    },
    onmoreInfo: function onmoreInfo(event) {
      if (this.lines === 3) {
        this.moreInfo = '收起';
        this.lines = 100;
      } else {
        this.moreInfo = '全文';
        this.lines = 3;
      }
    },
    ondelete: function ondelete(index) {
      nativeApi.printSome("这是我的一个方法", function (param) {
        modal.toast({ message: param.toString() });
      });
    },
    oncommentInput: function oncommentInput(index) {
      modal.toast({ message: nativeApi.getNativeUrl() + '' });
    }
  }
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('list', {
    staticClass: ["wrapper"]
  }, [_c('cell', {
    staticClass: ["header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('image', {
    staticClass: ["poster"],
    attrs: {
      "resize": "cover",
      "src": _vm.currentUser.poster
    }
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.currentUser.name))]), _c('image', {
    staticClass: ["profile"],
    attrs: {
      "resize": "cover",
      "src": _vm.currentUser.profile
    }
  })]), _vm._l((_vm.moments), function(moment, i) {
    return _c('cell', {
      key: i,
      staticClass: ["moment"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('image', {
      staticClass: ["author-profile"],
      attrs: {
        "resize": "cover",
        "src": moment.author.profile
      }
    }), _c('div', {
      staticClass: ["main"]
    }, [_c('text', {
      staticClass: ["author-name", "link-text"]
    }, [_vm._v(_vm._s(moment.author.name))]), _c('text', {
      staticClass: ["moment-content"],
      style: {
        lines: _vm.lines
      }
    }, [_vm._v(_vm._s(moment.content))]), (moment.content.length > 50) ? _c('text', {
      staticClass: ["moreInfo"],
      on: {
        "click": _vm.onmoreInfo
      }
    }, [_vm._v(_vm._s(_vm.moreInfo))]) : _vm._e(), (moment.media) ? _c('div', {
      staticClass: ["moment-media"]
    }, [(moment.media.pictures && moment.media.pictures.length) ? _c('div', {
      staticClass: ["moment-pictures"]
    }, _vm._l((moment.media.pictures), function(src, p) {
      return _c('image', {
        key: p,
        staticClass: ["picture"],
        attrs: {
          "resize": "cover",
          "src": src
        },
        on: {
          "click": function($event) {
            _vm.onImageClick(src)
          }
        }
      })
    })) : _vm._e(), (moment.media.share) ? _c('div', {
      staticClass: ["moment-share"]
    }, [_c('image', {
      staticClass: ["share-thumbnail"],
      attrs: {
        "src": moment.media.share.thumbnail
      }
    }), _c('text', {
      staticClass: ["share-title"]
    }, [_vm._v(_vm._s(moment.media.share.title))])]) : _vm._e()]) : _vm._e(), (moment.location) ? _c('text', {
      staticClass: ["moreInfo", "location"]
    }, [_vm._v(_vm._s(moment.location))]) : _vm._e(), _c('div', {
      staticClass: ["moment-info"]
    }, [(moment.time) ? _c('text', {
      staticClass: ["moment-time"]
    }, [_vm._v(_vm._s(moment.time))]) : _vm._e(), (moment.author.name === _vm.currentUser.name) ? _c('text', {
      staticClass: ["moment-operation", "link-text"],
      on: {
        "click": function($event) {
          _vm.ondelete(i)
        }
      }
    }, [_vm._v("删除")]) : _vm._e(), _c('image', {
      staticClass: ["moment-feedback"],
      attrs: {
        "src": "https://gw.alicdn.com/tfs/TB1_POLc3MPMeJjy1XcXXXpppXa-66-46.png"
      },
      on: {
        "click": function($event) {
          _vm.oncommentInput(i)
        }
      }
    })]), (moment.likes || moment.comments) ? _c('image', {
      staticClass: ["moment-arrow"],
      attrs: {
        "src": "https://gw.alicdn.com/tfs/TB1F0OLc3oQMeJjy0FnXXb8gFXa-30-12.png"
      }
    }) : _vm._e(), (moment.likes && moment.likes.length) ? _c('div', {
      staticClass: ["moment-likes"]
    }, [_c('text', {
      staticClass: ["like-list", "link-text"]
    }, [_vm._v("♡ " + _vm._s(moment.likes.join(', ')))])]) : _vm._e(), (moment.comments && moment.comments.length) ? _c('div', {
      staticClass: ["comment-list"]
    }, _vm._l((moment.comments), function(comment, x) {
      return _c('richtext', {
        key: x,
        staticClass: ["moment-comment"]
      }, [_c('span', {
        staticClass: ["comment-text", "link-text"]
      }, [_vm._v(_vm._s(comment.author))]), (comment.reply) ? _c('span', {
        staticClass: ["comment-text"]
      }, [_vm._v("@")]) : _vm._e(), (comment.reply) ? _c('span', {
        staticClass: ["comment-text", "link-text"]
      }, [_vm._v(_vm._s(comment.reply))]) : _vm._e(), _c('span', {
        staticClass: ["comment-text"]
      }, [_vm._v(":  ")]), _c('span', {
        staticClass: ["comment-text"]
      }, [_vm._v(_vm._s(comment.content))])])
    })) : _vm._e()])])
  })], 2), (_vm.isAccording) ? _c('div', {
    ref: "fixed",
    staticClass: ["fixedItem"]
  }, [_c('image', {
    ref: "img",
    staticClass: ["screenPictore"],
    style: {
      height: _vm.height
    },
    attrs: {
      "src": _vm.screenPicSrc,
      "resize": "contain"
    },
    on: {
      "load": _vm.onresize,
      "click": function($event) {
        _vm.onhidden()
      }
    }
  }), _c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.onSave
    }
  }, [_vm._v("save")])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]));