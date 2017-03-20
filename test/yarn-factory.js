import assert from 'power-assert';
import { YarnFactory } from '../src/yarn-factory';

describe('YarnFactory Class', () => {

  it('make', () => {

    const yarn =  YarnFactory.make('#EFEFEF', 1);

    assert('#EFEFEF' === yarn.color);
    assert(1         === yarn.thickness);

  });

  it('normal', () => {

    const yarn =  YarnFactory.normal('#EFEFEF');

    assert(1 === yarn.thickness);

  });

  it('wide', () => {

    const yarn =  YarnFactory.wide('#EFEFEF');

    assert(2 === yarn.thickness);

  });

});