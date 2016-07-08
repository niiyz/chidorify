'use strict'

import { Yean } from '../yean'
import { WeaveRepeat } from '../weave-repeat'
import { weave } from '../weaver';
import { save } from '../svg-test'

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

const green = new Yean('66FF00')
const gray  = new Yean('CCCCCC')

repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)

repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)

const texture = weave(repeat.data())

const viewBoxW = 800;
const viewBoxH = 800;

save('public/test1.html', viewBoxW, viewBoxH, texture)
