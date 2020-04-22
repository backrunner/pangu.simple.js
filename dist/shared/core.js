"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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