'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chidorify = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _twotone = require('./twotone');

var _weaveRepeat = require('./weave-repeat');

var _plan = require('./plan');

var _weaver = require('./weaver');

var _makeSample = require('./make-sample');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chidorify = exports.Chidorify = function () {
  function Chidorify(design, deepColors, lightColors) {
    (0, _classCallCheck3.default)(this, Chidorify);


    this.repeat = new _weaveRepeat.WeaveRepeat();

    this.design = design;
    this.deepColors = deepColors;
    this.lightColors = lightColors;
  }

  (0, _createClass3.default)(Chidorify, [{
    key: 'run',
    value: function run() {

      var textures = [];

      var colorSets = (0, _twotone.twoTone)(this.deepColors, this.lightColors);

      var colorSet = colorSets.next();

      while (!colorSet.done) {

        var deep = colorSet.value.deep;
        var light = colorSet.value.light;

        this.repeat.design(this.design);
        this.repeat.setWrapPlan(new _plan.Plan(8, ['N'], [deep, light]));
        this.repeat.setWeftPlan(new _plan.Plan(8, ['N'], [deep, light]));

        var texture = (0, _weaver.weave)(this.repeat.data());
        textures.push(texture);

        this.repeat.resetYarn();

        colorSet = colorSets.next();
      }

      return (0, _makeSample.makeSample)(textures);
    }
  }]);
  return Chidorify;
}();