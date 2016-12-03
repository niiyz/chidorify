'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Yarn = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Yarn = exports.Yarn = function () {
  function Yarn() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000';
    var thickness = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    (0, _classCallCheck3.default)(this, Yarn);

    this.color = color;
    this.thickness = thickness;
  }

  (0, _createClass3.default)(Yarn, [{
    key: 'wide',
    value: function wide() {
      this.thickness = 2;
    }
  }]);
  return Yarn;
}();