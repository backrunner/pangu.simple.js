/*!
 * pangu.simple.js
 * --------
 * @version: 1.1.0
 * @homepage: https://github.com/backrunner/pangu.simple.js
 * @license: MIT
 * @author: BackRunner
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pangu", [], factory);
	else if(typeof exports === 'object')
		exports["pangu"] = factory();
	else
		root["pangu"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var _require = __webpack_require__(1),
      Pangu = _require.Pangu;

  function once(func) {
    var _arguments = arguments,
        _this = this;

    var executed = false;
    return function () {
      if (executed) {
        return;
      }

      var self = _this;
      executed = true;
      func.apply(self, _arguments);
    };
  }

  function debounce(func, delay, mustRunDelay) {
    var _arguments2 = arguments,
        _this2 = this;

    var timer = null;
    var startTime = null;
    return function () {
      var self = _this2;
      var args = _arguments2;
      var currentTime = +new Date();
      clearTimeout(timer);

      if (!startTime) {
        startTime = currentTime;
      }

      if (currentTime - startTime >= mustRunDelay) {
        func.apply(self, args);
        startTime = currentTime;
      } else {
        timer = setTimeout(function () {
          func.apply(self, args);
        }, delay);
      }
    };
  }

  var BrowserPangu = function (_Pangu) {
    _inherits(BrowserPangu, _Pangu);

    var _super = _createSuper(BrowserPangu);

    function BrowserPangu() {
      var _this3;

      _classCallCheck(this, BrowserPangu);

      _this3 = _super.call(this);
      _this3.blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i;
      _this3.ignoredTags = /^(script|code|pre|textarea)$/i;
      _this3.presentationalTags = /^(b|code|del|em|i|s|strong|kbd)$/i;
      _this3.spaceLikeTags = /^(br|hr|i|img|pangu)$/i;
      _this3.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i;
      _this3.isAutoSpacingPageExecuted = false;
      return _this3;
    }

    _createClass(BrowserPangu, [{
      key: "isContentEditable",
      value: function isContentEditable(node) {
        return node.isContentEditable || node.getAttribute && node.getAttribute('g_editable') === 'true';
      }
    }, {
      key: "isSpecificTag",
      value: function isSpecificTag(node, tagRegex) {
        return node && node.nodeName && node.nodeName.search(tagRegex) >= 0;
      }
    }, {
      key: "isInsideSpecificTag",
      value: function isInsideSpecificTag(node, tagRegex) {
        var checkCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var currentNode = node;

        if (checkCurrent) {
          if (this.isSpecificTag(currentNode, tagRegex)) {
            return true;
          }
        }

        while (currentNode.parentNode) {
          currentNode = currentNode.parentNode;

          if (this.isSpecificTag(currentNode, tagRegex)) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "canIgnoreNode",
      value: function canIgnoreNode(node) {
        var currentNode = node;

        if (currentNode && (this.isSpecificTag(currentNode, this.ignoredTags) || this.isContentEditable(currentNode))) {
          return true;
        }

        while (currentNode.parentNode) {
          currentNode = currentNode.parentNode;

          if (currentNode && (this.isSpecificTag(currentNode, this.ignoredTags) || this.isContentEditable(currentNode))) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "isFirstTextChild",
      value: function isFirstTextChild(parentNode, targetNode) {
        var childNodes = parentNode.childNodes;

        for (var i = 0; i < childNodes.length; i++) {
          var childNode = childNodes[i];

          if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
            return childNode === targetNode;
          }
        }

        return false;
      }
    }, {
      key: "isLastTextChild",
      value: function isLastTextChild(parentNode, targetNode) {
        var childNodes = parentNode.childNodes;

        for (var i = childNodes.length - 1; i > -1; i--) {
          var childNode = childNodes[i];

          if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
            return childNode === targetNode;
          }
        }

        return false;
      }
    }, {
      key: "spacingNodeByXPath",
      value: function spacingNodeByXPath(xPathQuery, contextNode) {
        if (!(contextNode instanceof Node) || contextNode instanceof DocumentFragment) {
          return;
        }

        var textNodes = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        var currentTextNode;
        var nextTextNode;

        for (var i = textNodes.snapshotLength - 1; i > -1; --i) {
          currentTextNode = textNodes.snapshotItem(i);

          if (this.isSpecificTag(currentTextNode.parentNode, this.presentationalTags) && !this.isInsideSpecificTag(currentTextNode.parentNode, this.ignoredTags)) {
            var elementNode = currentTextNode.parentNode;

            if (elementNode.previousSibling) {
              var previousSibling = elementNode.previousSibling;

              if (previousSibling.nodeType === Node.TEXT_NODE) {
                var testText = previousSibling.data.substr(-1) + currentTextNode.data.toString().charAt(0);
                var testNewText = this.spacing(testText);

                if (testText !== testNewText) {
                  previousSibling.data = "".concat(previousSibling.data, " ");
                }
              }
            }

            if (elementNode.nextSibling) {
              var nextSibling = elementNode.nextSibling;

              if (nextSibling.nodeType === Node.TEXT_NODE) {
                var _testText = currentTextNode.data.substr(-1) + nextSibling.data.toString().charAt(0);

                var _testNewText = this.spacing(_testText);

                if (_testText !== _testNewText) {
                  nextSibling.data = " ".concat(nextSibling.data);
                }
              }
            }
          }

          var newText = this.spacing(currentTextNode.data);

          if (currentTextNode.data !== newText) {
            currentTextNode.data = newText;
          }

          if (nextTextNode) {
            if (currentTextNode.nextSibling && currentTextNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
              nextTextNode = currentTextNode;
              continue;
            }

            var _testText2 = currentTextNode.data.toString().substr(-1) + nextTextNode.data.toString().substr(0, 1);

            var _testNewText2 = this.spacing(_testText2);

            if (_testNewText2 !== _testText2) {
              var nextNode = nextTextNode;

              while (nextNode.parentNode && nextNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(nextNode.parentNode, nextNode)) {
                nextNode = nextNode.parentNode;
              }

              var currentNode = currentTextNode;

              while (currentNode.parentNode && currentNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isLastTextChild(currentNode.parentNode, currentNode)) {
                currentNode = currentNode.parentNode;
              }

              if (currentNode.nextSibling) {
                if (currentNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                  nextTextNode = currentTextNode;
                  continue;
                }
              }

              if (currentNode.nodeName.search(this.blockTags) === -1) {
                if (nextNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                  if (nextNode.nodeName.search(this.ignoredTags) === -1 && nextNode.nodeName.search(this.blockTags) === -1) {
                    if (nextTextNode.previousSibling) {
                      if (nextTextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                        nextTextNode.data = " ".concat(nextTextNode.data);
                      }
                    } else {
                      if (!this.canIgnoreNode(nextTextNode)) {
                        nextTextNode.data = " ".concat(nextTextNode.data);
                      }
                    }
                  }
                } else if (currentNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                  currentTextNode.data = "".concat(currentTextNode.data, " ");
                } else {
                  var panguSpace = document.createElement('pangu');
                  panguSpace.innerHTML = ' ';

                  if (nextNode.previousSibling) {
                    if (nextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                      nextNode.parentNode.insertBefore(panguSpace, nextNode);
                    }
                  } else {
                    nextNode.parentNode.insertBefore(panguSpace, nextNode);
                  }

                  if (!panguSpace.previousElementSibling) {
                    if (panguSpace.parentNode) {
                      panguSpace.parentNode.removeChild(panguSpace);
                    }
                  }
                }
              }
            }
          }

          nextTextNode = currentTextNode;
        }
      }
    }, {
      key: "spacingNode",
      value: function spacingNode(contextNode) {
        var xPathQuery = './/*/text()[normalize-space(.)]';

        if (contextNode.children && contextNode.children.length === 0) {
          xPathQuery = './/text()[normalize-space(.)]';
        }

        this.spacingNodeByXPath(xPathQuery, contextNode);
      }
    }, {
      key: "spacingElementById",
      value: function spacingElementById(idName) {
        var xPathQuery = "id(\"".concat(idName, "\")//text()");
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingElementByClassName",
      value: function spacingElementByClassName(className) {
        var xPathQuery = "//*[contains(concat(\" \", normalize-space(@class), \" \"), \"".concat(className, "\")]//text()");
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingElementByTagName",
      value: function spacingElementByTagName(tagName) {
        var xPathQuery = "//".concat(tagName, "//text()");
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingPageTitle",
      value: function spacingPageTitle() {
        var xPathQuery = '/html/head/title/text()';
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingPageBody",
      value: function spacingPageBody() {
        var xPathQuery = '/html/body//*/text()[normalize-space(.)]';
        ['script', 'style', 'textarea'].forEach(function (tag) {
          xPathQuery = "".concat(xPathQuery, "[translate(name(..),\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\"abcdefghijklmnopqrstuvwxyz\")!=\"").concat(tag, "\"]");
        });
        this.spacingNodeByXPath(xPathQuery, document);
      }
    }, {
      key: "spacingPage",
      value: function spacingPage() {
        this.spacingPageTitle();
        this.spacingPageBody();
      }
    }, {
      key: "autoSpacingPage",
      value: function autoSpacingPage() {
        var pageDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        var nodeDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var nodeMaxWait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

        if (!(document.body instanceof Node)) {
          return;
        }

        if (this.isAutoSpacingPageExecuted) {
          return;
        }

        this.isAutoSpacingPageExecuted = true;
        var self = this;
        var onceSpacingPage = once(function () {
          self.spacingPage();
        });
        var videos = document.getElementsByTagName('video');

        if (videos.length === 0) {
          setTimeout(function () {
            onceSpacingPage();
          }, pageDelay);
        } else {
          for (var i = 0; i < videos.length; i++) {
            var video = videos[i];

            if (video.readyState === 4) {
              setTimeout(function () {
                onceSpacingPage();
              }, 3000);
              break;
            }

            video.addEventListener('loadeddata', function () {
              setTimeout(function () {
                onceSpacingPage();
              }, 4000);
            });
          }
        }

        var queue = [];
        var debouncedSpacingNodes = debounce(function () {
          while (queue.length) {
            var node = queue.shift();

            if (node) {
              self.spacingNode(node);
            }
          }
        }, nodeDelay, {
          'maxWait': nodeMaxWait
        });
        var mutationObserver = new MutationObserver(function (mutations, observer) {
          mutations.forEach(function (mutation) {
            switch (mutation.type) {
              case 'childList':
                mutation.addedNodes.forEach(function (node) {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                    queue.push(node);
                  } else if (node.nodeType === Node.TEXT_NODE) {
                    queue.push(node.parentNode);
                  }
                });
                break;

              case 'characterData':
                var node = mutation.target;

                if (node.nodeType === Node.TEXT_NODE) {
                  queue.push(node.parentNode);
                }

                break;

              default:
                break;
            }
          });
          debouncedSpacingNodes();
        });
        mutationObserver.observe(document.body, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }
    }]);

    return BrowserPangu;
  }(Pangu);

  var pangu = new BrowserPangu();
  module.exports = pangu;
  module.exports["default"] = pangu;
  module.exports.Pangu = BrowserPangu;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  var CJK = "\u2E80-\u2EFF\u2F00-\u2FDF\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\u3100-\u312F\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF";
  var ANY_CJK = new RegExp("[".concat(CJK, "]"));
  var SYMBOL_WIDE = '`~!@#$%*^&()/\\-+=<>?:"{}|,.;\'[\\]·~￥%——|\\\\';
  var SYMBOL = '`~!@#$%^&()/\\-+=<>?:"{}|,.;\'[\\]·~￥%——|\\\\';
  var SYMBOL_LEFT = '`~!@#$%^&(/\\-+=<>?:"{|,.;\'[·~￥%——|\\\\';
  var SYMBOL_RIGHT = '`~!@#$%^&)/\\-+=<>?:"}|,.;\'\\]·~￥%——|\\\\';
  var SYMBOL_SAFE = '`~!#$%^&/+=<>?:"|,;\'·~￥%——|\\\\';
  var ALPHA_CJK = new RegExp("([A-Za-z_])([".concat(CJK, "]+)"), 'g');
  var CJK_ALPHA = new RegExp("([".concat(CJK, "]+)([A-Za-z_])"), 'g');
  var NUMBER_CJK = new RegExp("([0-9_])([".concat(CJK, "]+)"), 'g');
  var CJK_NUMBER = new RegExp("([".concat(CJK, "]+)([0-9_])"), 'g');
  var CJK_AND_ALPHA = new RegExp("([".concat(CJK, "]+)(&)([A-Za-z_])"), 'g');
  var ALPHA_AND_CJK = new RegExp("([A-Za-z_])(&)([".concat(CJK, "]+)"), 'g');
  var ALPHA_SYMBOL_CJK = new RegExp("([A-Za-z_])([".concat(SYMBOL_RIGHT, "])([").concat(CJK, "])"), 'g');
  var CJK_SYMBOL_ALPHA = new RegExp("([".concat(CJK, "])([").concat(SYMBOL_LEFT, "])([A-Za-z_])"), 'g');
  var NUMBER_SYMBOL_CJK = new RegExp("([0-9_])([".concat(SYMBOL, "])([").concat(CJK, "])"), 'g');
  var CJK_SYMBOL_NUMBER = new RegExp("([".concat(CJK, "])([").concat(SYMBOL, "])([0-9_])"), 'g');
  var CJK_BRACKET = new RegExp("([".concat(CJK, "])([<\\[{\\(])"), 'g');
  var BRACKET_CJK = new RegExp("([>\\]\\)}])([".concat(CJK, "])"), 'g');
  var ALPHA_NUMBER_CJK = new RegExp("([A-Za-z_])([0-9_])([".concat(CJK, "])"), 'g');
  var CJK_SYMBOL_SYMBOL = new RegExp("([".concat(CJK, "])([").concat(SYMBOL_WIDE, "])([").concat(SYMBOL_WIDE, "])"), 'g');
  var SYMBOL_SYMBOL_CJK = new RegExp("([".concat(SYMBOL_WIDE, "])([").concat(SYMBOL_WIDE, "])([").concat(CJK, "])"), 'g');
  var CJK_SYMBOL_CJK_SYMBOL_CJK = new RegExp("([".concat(CJK, "])([").concat(SYMBOL_SAFE, "])([").concat(CJK, "])([").concat(SYMBOL_SAFE, "])([").concat(CJK, "])"), 'g');
  var CJK_SYMBOL_CJK = new RegExp("([".concat(CJK, "])([").concat(SYMBOL_SAFE, "])([").concat(CJK, "])"), 'g');
  var CJK_ACCOUNT_CJK = new RegExp("([".concat(CJK, "])(\\s*)(@[A-za-z0-9_]*)(\\s*)([").concat(CJK, "]+)(\\s*)([A-za-z0-9_]+)(\\s*)([").concat(CJK, "])"));

  var Pangu = function () {
    function Pangu() {
      _classCallCheck(this, Pangu);

      this.version = '1.0.0';
    }

    _createClass(Pangu, [{
      key: "spacing",
      value: function spacing(text) {
        if (typeof text !== 'string') {
          console.warn("spacing(text) only accepts string but got ".concat(_typeof(text)));
          return text;
        }

        if (text.length <= 1 || !ANY_CJK.test(text)) {
          return text;
        }

        var self = this;
        var newText = text;
        newText = newText.replace(ALPHA_NUMBER_CJK, '$1$2 $3');
        newText = newText.replace(ALPHA_CJK, '$1 $2');
        newText = newText.replace(CJK_ALPHA, '$1 $2');
        newText = newText.replace(NUMBER_CJK, '$1 $2');
        newText = newText.replace(CJK_NUMBER, '$1 $2');
        newText = newText.replace(CJK_AND_ALPHA, '$1 $2 $3');
        newText = newText.replace(ALPHA_AND_CJK, '$1 $2 $3');
        newText = newText.replace(ALPHA_SYMBOL_CJK, '$1$2 $3');
        newText = newText.replace(CJK_SYMBOL_ALPHA, '$1 $2$3');
        newText = newText.replace(NUMBER_SYMBOL_CJK, '$1$2 $3');
        newText = newText.replace(CJK_SYMBOL_NUMBER, '$1 $2$3');
        newText = newText.replace(CJK_SYMBOL_SYMBOL, '$1 $2$3');
        newText = newText.replace(SYMBOL_SYMBOL_CJK, '$1$2 $3');
        newText = newText.replace(BRACKET_CJK, '$1 $2');
        newText = newText.replace(CJK_BRACKET, '$1 $2');
        newText = newText.replace(CJK_SYMBOL_CJK_SYMBOL_CJK, '$1 $2 $3 $4 $5');
        newText = newText.replace(CJK_SYMBOL_CJK, '$1 $2 $3');
        newText = newText.replace(CJK_ACCOUNT_CJK, '$1 $3$5$7 $9');
        return newText;
      }
    }, {
      key: "spacingText",
      value: function spacingText(text) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var newText;

        try {
          newText = this.spacing(text);
        } catch (err) {
          callback(err);
          return;
        }

        callback(null, newText);
      }
    }, {
      key: "spacingTextSync",
      value: function spacingTextSync(text) {
        return this.spacing(text);
      }
    }]);

    return Pangu;
  }();

  var pangu = new Pangu();
  module.exports = pangu;
  module.exports["default"] = pangu;
  module.exports.Pangu = Pangu;
});

/***/ })
/******/ ]);
});