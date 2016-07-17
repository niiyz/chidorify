import { Yarn } from './yarn.js';

export class YarnFactory {

  static nomal(color) {
    return new Yarn(color);
  }

  static wide(color) {
    return new Yarn(color, 2);
  }

}
