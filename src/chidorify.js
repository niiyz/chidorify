'use strict';

import { twoTone } from './twotone';
import { WeaveRepeat } from './weave-repeat';
import { Plan } from './plan';
import { weave } from './weaver';
import { makeSample } from './make-sample';

export class Chidorify {

  constructor(design, deepColors, lightColors) {

    this.repeat = new WeaveRepeat(design);

    this.deepColors  = deepColors;
    this.lightColors = lightColors;

  }

  run() {

    const textures = [];

    const colorSets = twoTone(this.deepColors, this.lightColors);

    let colorSet = colorSets.next();

    while (!colorSet.done) {

      const deep  = colorSet.value.deep;
      const light = colorSet.value.light;

      this.repeat.setWrapPlan(new Plan(8, ['N'], [deep, light]));
      this.repeat.setWeftPlan(new Plan(8, ['N'], [deep, light]));

      const texture = weave(this.repeat.data());
      textures.push(texture);

      this.repeat.resetYarn();

      colorSet = colorSets.next();

    }

    return makeSample(textures);

  }
}