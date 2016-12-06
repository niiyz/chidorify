import assert from 'power-assert';
import { twoTone } from '../src/twotone';

describe('twoTone', () => {

  it('Test colorSets', () => {

    const colorSets = twoTone(['#000000', '#999999'], ['#EFEFEF', '#FFFFFF']);

    const colorSet1 = colorSets.next();

    assert('#000000' === colorSet1.value.deep);
    assert('#EFEFEF' === colorSet1.value.light);

    const colorSet2 = colorSets.next();

    assert('#999999' === colorSet2.value.deep);
    assert('#EFEFEF' === colorSet2.value.light);

    const colorSet3 = colorSets.next();

    assert('#000000' === colorSet3.value.deep);
    assert('#FFFFFF' === colorSet3.value.light);

    const colorSet4 = colorSets.next();

    assert('#999999' === colorSet4.value.deep);
    assert('#FFFFFF' === colorSet4.value.light);

    const colorSet5 = colorSets.next();

    assert(undefined === colorSet5.value);
    assert(true === colorSet5.done);

  });

});