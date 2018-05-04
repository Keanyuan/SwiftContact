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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(107)
)

/* script */
__vue_exports__ = __webpack_require__(108)

/* template */
var __vue_template__ = __webpack_require__(109)
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
__vue_options__.__file = "/Users/qizhiyuan/Desktop/WeexProject/weextest1/src/components/MyList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-36ccac9c"
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

/***/ 107:
/***/ (function(module, exports) {

module.exports = {
  "divContent": {
    "width": "750",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "panel": {
    "width": "600",
    "height": "300",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderStyle": "solid",
    "borderWidth": "2",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "image": {
    "width": "600",
    "height": "300",
    "display": "-webkit-flex",
    "justifyContent": "center"
  },
  "text": {
    "position": "absolute",
    "fontSize": "16wx",
    "right": "10",
    "marginBottom": "20",
    "color": "#41B883"
  },
  "header": {
    "position": "absolute",
    "width": "750",
    "height": "400",
    "backgroundColor": "#ff22cc"
  },
  "headerText": {
    "width": "750",
    "paddingTop": "10",
    "fontSize": "16wx",
    "color": "#41B883",
    "textAlign": "left",
    "fontWeight": "bold"
  },
  "lineTop": {
    "width": "750",
    "height": "1",
    "backgroundColor": "#888888",
    "paddingTop": "0"
  },
  "lineBottom": {
    "width": "750",
    "height": "1",
    "backgroundColor": "#888888",
    "paddingBottom": "0",
    "paddingLeft": "40",
    "paddingRight": "10",
    "marginLeft": "40"
  },
  "refresh": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "14wx",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#FFA91C"
  },
  "loading": {
    "width": "750",
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "sliderSize": {
    "width": "750",
    "height": "400",
    "justifyContent": "center"
  },
  "sliderIndicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "height": "60",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "itemColor": "#DDDDDD",
    "itemSelectedColor": "rgb(0,180,255)"
  },
  "fixedItem": {
    "position": "fixed",
    "width": "120",
    "height": "120",
    "backgroundColor": "#00cc99",
    "left": "32",
    "top": "32",
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

/***/ 108:
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

function translateRule(dp) {
	return dp * 750 / (deviceWidth / scale);
}
var LOADMORE_COUNT = 9;
var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
function showToast(value) {
	modal.toast({
		message: value,
		duration: 2
	});
}
function showAlert() {
	modal.alert({
		message: 'this is a alert',
		duration: 0.5,
		okTitle: '确定',
		cancelTitle: '取消'
	}, function (value) {
		showToast(value);
	});
}

function showConfirm() {
	modal.confirm({
		message: 'Do you Conform?',
		duration: 0.3
	}, function (value) {
		if (value == 'OK') {
			showToast("确定");
		} else {
			showToast("取消");
		}
	});
}

function showPrompt() {
	modal.prompt({
		message: "This is a  prompt",
		duration: 0.3
	}, function (value) {
		if (value['result'] == 'OK') {
			showToast(value["data"]);
		} else {
			showToast("取消");
		}
	});
}

exports.default = {
	data: function data() {
		return {
			refreshing: false,
			loading: false,
			list: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'],
			refreshText: "下拉刷新……",
			loadingText: "加载更多……",
			posters: ['https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg', 'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg', 'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg', 'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg', 'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg'],
			headerMessage: "headerMessage",
			scrollHnadlerCallCount: 0
		};
	},

	methods: {
		didSelectItem: function didSelectItem(value) {
			// if (this.list.length > 10) {
			// 	const el = this.$refs.item10[0]
			// 			dom.scrollToElement(el, {})
			// } else {
			// 	const el = this.$refs.item9[0]
			// 			dom.scrollToElement(el, {})
			// }

			showToast(value);
		},
		onRefresh: function onRefresh(event) {
			var _this = this;

			showToast("Refreshing");
			this.refreshing = true;
			this.refreshText = "加载中……";
			setTimeout(function () {
				_this.refreshing = false;
				_this.refreshText = "下拉刷新……";
				_this.loadingText = "加载更多……";
				_this.list = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
			}, 2000);
		},
		onPullingdown: function onPullingdown(event) {},
		onloading: function onloading(event) {
			var _this2 = this;

			showToast("loading");
			if (this.list.length > 30) {
				showToast("没有更多数据");
				this.loadingText = "没有更多数据";
				return;
			}
			this.loading = true;
			this.loadingText = "加载中……";
			setTimeout(function () {
				var length = _this2.list.length;
				for (var i = length; i < length + LOADMORE_COUNT; ++i) {
					_this2.list.push(_this2.list[length + LOADMORE_COUNT - i]);
				}
				_this2.loading = false;
				_this2.loadingText = "加载更多……";
			}, 2000);
		},

		changeHandler: function changeHandler(e) {
			this.headerMessage = "当前显示" + e.index;
		},
		scrollHandler: function scrollHandler(e) {
			// this.scrollHnadlerCallCount = this.scrollHnadlerCallCount + 1;
			// this.topbarStyle = -e.offsetXRatio*750
			// this.headerMessage = "当前scrollHandler" + this.topbarStyle
		},
		sliderClick: function sliderClick(e) {
			this.headerMessage = "当前点击" + e;
		},
		scrollToNext: function scrollToNext() {
			navigator.pop({
				animated: "true"
			}, function (event) {
				// modal.toast({ message: 'callback: ' + event })
			});
		}
	}

};

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["divContent"]
  }, [_c('list', {
    staticClass: ["list"]
  }, [_c('refresh', {
    staticClass: ["refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onRefresh
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v(_vm._s(_vm.refreshText))]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })]), _c('header', {
    staticClass: ["header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["lineTop"]
  }), _c('div', {
    staticClass: ["sliderSize"]
  }, [_c('slider', {
    staticClass: ["sliderSize"],
    attrs: {
      "autoPlay": "true",
      "interval": "2000"
    },
    on: {
      "change": _vm.changeHandler,
      "scroll": _vm.scrollHandler
    }
  }, [_vm._l((_vm.posters), function(src, i) {
    return _c('div', {
      key: i,
      on: {
        "click": function($event) {
          _vm.sliderClick(i)
        }
      }
    }, [_c('image', {
      staticClass: ["sliderSize"],
      attrs: {
        "resize": "cover",
        "src": src
      }
    })])
  }), _c('indicator', {
    staticClass: ["sliderIndicator"]
  })], 2)]), _c('div', {
    staticClass: ["lineBottom"]
  })]), _vm._l((_vm.list), function(v, i) {
    return _c('cell', {
      key: v,
      ref: 'item' + i,
      refInFor: true,
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"],
      on: {
        "click": function($event) {
          _vm.didSelectItem(v)
        }
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": "../../assets/image1.jpg"
      }
    }), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(v) + _vm._s(i) + "\n\t\t\t\t\t")])]), _c('div', {
      staticClass: ["lineBottom"]
    })])
  }), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loading ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v(_vm._s(_vm.loadingText))]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })])], 2), _c('div', {
    ref: "fixed",
    staticClass: ["fixedItem"],
    on: {
      "click": _vm.scrollToNext
    }
  }, [_c('text', {
    staticClass: ["fixedText"]
  }, [_vm._v("<pop")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });