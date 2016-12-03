'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeaveRepeat = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeaveRepeat = exports.WeaveRepeat = function () {
  function WeaveRepeat() {
    (0, _classCallCheck3.default)(this, WeaveRepeat);

    this.resetAll();
  }

  (0, _createClass3.default)(WeaveRepeat, [{
    key: 'warping',
    value: function warping(yarn) {
      this.warp.push(yarn);
    }
  }, {
    key: 'pick',
    value: function pick(yarn) {
      this.weft.push(yarn);
    }
  }, {
    key: 'orderWarp',
    value: function orderWarp(yarn) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (n === 0) {
        n = this.warpNum();
      }
      for (var i = 0; i < n; i++) {
        this.warp.push(yarn);
      }
    }
  }, {
    key: 'orderWeft',
    value: function orderWeft(yarn) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (n === 0) {
        n = this.weftNum();
      }
      for (var i = 0; i < n; i++) {
        this.weft.push(yarn);
      }
    }
  }, {
    key: 'design',
    value: function design(diagram) {
      this.diagram = diagram;
    }
  }, {
    key: 'warpNum',
    value: function warpNum() {
      if (this.diagram.length === 0) {
        return 0;
      }
      return this.diagram[0].length;
    }
  }, {
    key: 'weftNum',
    value: function weftNum() {
      return this.diagram.length;
    }
  }, {
    key: 'twoTone',
    value: function twoTone(deep, light) {
      this.deepColor = deep;
      this.lightColor = light;
    }
  }, {
    key: 'threadOne',
    value: function threadOne() {
      this.thread(1);
    }
  }, {
    key: 'threadHerf',
    value: function threadHerf() {
      this.thread(2);
    }
  }, {
    key: 'threadQuareter',
    value: function threadQuareter() {
      this.thread(4);
    }
  }, {
    key: 'thread',
    value: function thread(splitNum) {

      var warpNum = this.warpNum();
      var weftNum = this.weftNum();

      switch (splitNum) {
        case 1:
          this.orderWarp(this.deepColor, warpNum);
          this.orderWeft(this.lightColor, weftNum);
          break;
      }
    }
  }, {
    key: 'resetYarn',
    value: function resetYarn() {
      this.deepColor = '';
      this.lightColor = '';
      this.warp = [];
      this.weft = [];
    }
  }, {
    key: 'resetAll',
    value: function resetAll() {
      this.daiagram = [];
      this.resetYarn();
    }
  }, {
    key: 'data',
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