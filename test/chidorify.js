import assert from 'power-assert';
import { Chidorify } from '../src/chidorify';

describe('Chidorify', () => {

  let chidorify;

  before(() => {

    const design = [
      [0, 1, 1, 0, 0, 1, 1, 0],
      [1, 1, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 1, 1],
      [0, 1, 1, 0, 0, 1, 1, 0],
      [1, 1, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 1, 1]
    ];

    const deepColors  = ['ff1493', '191970', '556b2f', 'cd5c5c'];
    const lightColors = ['eee8aa', 'fafad2', 'ffe4e1', 'ffff00'];

    chidorify = new Chidorify(design, deepColors, lightColors);

  });

  it('run', () => {

    chidorify.run();

  });

});