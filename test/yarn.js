import assert from 'power-assert';
import { Yarn } from '../src/yarn';

describe('Yarn Class', () => {

  it('Construct', () => {

    const yarn = new Yarn('#222222', 2);

    assert('#222222' === yarn.color);
    assert(2         === yarn.thickness);

  });

  it('wide', () => {

    const yarn = new Yarn('#222222');

    assert(1 === yarn.thickness);

    yarn.wide();

    assert(2 === yarn.thickness);

  });
});