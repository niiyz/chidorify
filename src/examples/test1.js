'use strict'

import { YarnFactory } from '../yarn-factory'
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

const green = YarnFactory.nomal('66FF00')
const gray  = YarnFactory.nomal('CCCCCC')

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

save('public/test1.html', texture)
