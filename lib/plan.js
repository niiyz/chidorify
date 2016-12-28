'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plan = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _yarnFactory = require('./yarn-factory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plan = exports.Plan = function () {
  function Plan(max, thickness, colors) {
    (0, _classCallCheck3.default)(this, Plan);

    this.max = max;
    this.thickness = thickness;
    this.colors = colors;
    this.yarns = [];
  }

  (0, _createClass3.default)(Plan, [{
    key: 'make',
    value: function make() {

      var thicknessTotal = 0;
      var thicknessList = [],
          colorList = [];

      while (thicknessTotal >= this.max) {

        if (!thicknessList.length) {
          thicknessList = [].concat(this.thickness);
        }

        if (!colorList.length) {
          colorList = [].concat(this.colors);
        }

        var thickness = thicknessList.shift();
        var color = colorList.shift();

        var yarn = _yarnFactory.YarnFactory.make(color, thickness);

        this.yarns.push(yarn);

        thicknessTotal += yarn.thickness;
      }

      return this.yarns;
    }
  }]);
  return Plan;
}();