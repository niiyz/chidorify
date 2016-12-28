import assert from 'power-assert';
import {Plan} from '../src/plan';

describe('Plan', () => {

  let yarns;

  before(() => {
    const plan = new Plan(8, ['N'], ['#000000', '#999999']);
    yarns = plan.make();

  });

  it('yarns count is max', () => {
    assert(8 === yarns.length);
  });

  it('yarn thickness is normal', () => {
    for (let i = 0; i < yarns.length; i++) {
      const thickness = yarns[i].thickness;
      assert(1 === thickness);
    }
  });

  it('yarn color is cross', () => {
    for (let i = 0; i < yarns.length; i++) {
      const colors = yarns[i].color;
      if (i % 2 === 0) {
        assert('#000000' === colors);
      } else {
        assert('#999999' === colors);
      }
    }
  });


});