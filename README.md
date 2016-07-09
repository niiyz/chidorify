# chidorify

chidorify is japanese check pattern maker.

# Install

```
git clone https://github.com/niiyz/chidorify.git
cd chidorify
npm install
npm test
npm start # Browser access to http://127.0.0.1:8080/
```

# Example

![screenshot](https://github.com/niiyz/chidorify/blob/master/screenshot.png "screenshot")

# Test

``` js
'use strict'

import { Yean } from '../yean'
import { WeaveRepeat } from '../weave-repeat'
import { weave } from '../weaver';
import { save } from '../svg-test'

const repeat = new WeaveRepeat();

// Diagram
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

// Yean Color and Thickness
const green = new Yean('66FF00')
const gray  = new Yean('CCCCCC')

// Warp
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)
repeat.warping(green)

// Weft
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)
repeat.pick(gray)

// Weave
const texture = weave(repeat.data())

// Test Output
const viewBoxW = 800;
const viewBoxH = 800;

save('public/test1.html', [texture], viewBoxW, viewBoxH)
```

``` js
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

repeat.orderWarp(green, 8);
repeat.orderWeft(gray,  8);
textures.push(weave(repeat.data()));

repeat.resetYarn()

const pink   = YarnFactory.nomal('FF6E8C');
const black  = YarnFactory.nomal('111111');

repeat.orderWarp(pink,  8);
repeat.orderWeft(black, 8);

textures.push(weave(repeat.data()));

repeat.resetYarn()

const blue   = YarnFactory.nomal('0000FF');
const white  = YarnFactory.nomal('FFFFFF');

repeat.orderWarp(white,  8);
repeat.orderWeft(blue,   8);

textures.push(weave(repeat.data()));

repeat.resetYarn()

const violet  = YarnFactory.wide('6600FF');
const orange  = YarnFactory.wide('FFCC99');

repeat.orderWarp(violet,  8);
repeat.orderWeft(orange,  8);

textures.push(weave(repeat.data()));

save('public/test2.html', textures);
```
