"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeaveRepeat = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeaveRepeat = exports.WeaveRepeat = function () {
  function WeaveRepeat() {
    (0, _classCallCheck3.default)(this, WeaveRepeat);

    this.resetYarn();
  }

  (0, _createClass3.default)(WeaveRepeat, [{
    key: "design",
    value: function design(diagram) {
      this.diagram = diagram;
    }
  }, {
    key: "warping",
    value: function warping(yarn) {
      this.warp.push(yarn);
    }
  }, {
    key: "pick",
    value: function pick(yarn) {
      this.weft.push(yarn);
    }
  }, {
    key: "setWrapPlan",
    value: function setWrapPlan(plan) {

      var yarns = plan.make();

      var yarnsLen = yarns.length;

      for (var i = 0; i < yarnsLen; i++) {
        var yarn = yarns[i];
        this.warp.push(yarn);
      }
    }
  }, {
    key: "setWeftPlan",
    value: function setWeftPlan(plan) {

      var yarns = plan.make();

      var yarnsLen = yarns.length;

      for (var i = 0; i < yarnsLen; i++) {
        var yarn = yarns[i];
        this.weft.push(yarn);
      }
    }
  }, {
    key: "resetYarn",
    value: function resetYarn() {
      this.warp = [];
      this.weft = [];
    }
  }, {
    key: "data",
    value: function data() {
      var json = {};
      json.warp = this.warp;
      json.weft = this.weft;
      json.diagram = this.diagram;
      return json;
    }
  }]);
  return WeaveRepeat;
}();