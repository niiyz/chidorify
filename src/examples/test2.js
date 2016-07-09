'use strict'

import { YarnFactory } from '../yarn-factory';
import { WeaveRepeat } from '../weave-repeat';
import { weave } from '../weaver';
import { save } from '../svg-test';

const repeat = new WeaveRepeat();

repeat.design([
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 1, 0, 0, 0, 1, 0]
]);

const textures = [];

const green = YarnFactory.wide('EFEFEF');
const gray  = YarnFactory.wide('CCCCCC');

repeat.orderWarp(green);
repeat.orderWeft(gray);
textures.push(weave(repeat.data()));

repeat.resetYarn()

const pink   = YarnFactory.nomal('FF6E8C');
const black  = YarnFactory.nomal('111111');

repeat.orderWarp(pink);
repeat.orderWeft(black);

textures.push(weave(repeat.data()));

repeat.resetYarn()

const blue   = YarnFactory.nomal('0000FF');
const white  = YarnFactory.nomal('FFFFFF');

repeat.orderWarp(white);
repeat.orderWeft(blue);

textures.push(weave(repeat.data()));

repeat.resetYarn()

const violet  = YarnFactory.wide('6600FF');
const orange  = YarnFactory.wide('FFCC99');

repeat.orderWarp(violet);
repeat.orderWeft(orange);

textures.push(weave(repeat.data()));

save('public/test2.html', textures);
