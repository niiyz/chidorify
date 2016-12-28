'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YarnFactory = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _yarn = require('./yarn.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YarnFactory = exports.YarnFactory = function () {
  function YarnFactory() {
    (0, _classCallCheck3.default)(this, YarnFactory);
  }

  (0, _createClass3.default)(YarnFactory, null, [{
    key: 'make',
    value: function make(color, thickness) {

      if (thickness === 'N') {
        thickness = 1;
      } else if (thickness === 'W') {
        thickness = 2;
      }

      return new _yarn.Yarn(color, thickness);
    }
  }, {
    key: 'normal',
    value: function normal(color) {
      return new _yarn.Yarn(color);
    }
  }, {
    key: 'wide',
    value: function wide(color) {
      return new _yarn.Yarn(color, 2);
    }
  }]);
  return YarnFactory;
}();