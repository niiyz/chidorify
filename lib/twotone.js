"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.twoTone = twoTone;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [twoTone].map(_regenerator2.default.mark);

function twoTone() {
  var deepColors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var lightColors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var i, light, j, deep;
  return _regenerator2.default.wrap(function twoTone$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < lightColors.length)) {
            _context.next = 14;
            break;
          }

          light = lightColors[i];
          j = 0;

        case 4:
          if (!(j < deepColors.length)) {
            _context.next = 11;
            break;
          }

          deep = deepColors[j];
          _context.next = 8;
          return { deep: deep, light: light };

        case 8:
          j++;
          _context.next = 4;
          break;

        case 11:
          i++;
          _context.next = 1;
          break;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}