import { Yarn } from './yarn.js';

export class YarnFactory {

  static make(color, thickness) {

    if (thickness === 'N') {
      thickness = 1;
    } else if (thickness === 'W') {
      thickness = 2;
    }

    return new Yarn(color, thickness);
  }

  static normal(color) {
    return new Yarn(color);
  }

  static wide(color) {
    return new Yarn(color, 2);
  }

}
