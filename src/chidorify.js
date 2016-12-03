'use strict';

import { twoTone } from './twotone';
import { YarnFactory } from './yarn-factory';
import { WeaveRepeat } from './weave-repeat';
import { weave } from './weaver';
import { save } from './svg-test';

export class Chidorify {

    constructor(design, deepColors, lightColors) {

        this.repeat = new WeaveRepeat();
        this.repeat.design(design);

        this.deepColors  = deepColors;
        this.lightColors = lightColors;

    }

    run() {

        const textures = [];

        const colorSets = twoTone(this.deepColors, this.lightColors);

        let colorSet = colorSets.next();

        while (!colorSet.done) {

            const deep   = YarnFactory.wide(colorSet.value.deep);
            const light  = YarnFactory.wide(colorSet.value.light);

            this.repeat.orderWarp(light, 4);
            this.repeat.orderWarp(deep,  4);

            this.repeat.orderWeft(light, 4);
            this.repeat.orderWeft(deep,  4);

            const texture = weave(this.repeat.data());
            textures.push(texture);

            this.repeat.resetYarn();

            colorSet = colorSets.next();

        }

        return save(textures);

    }
}