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

```
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

save('public/test1.html', viewBoxW, viewBoxH, texture)
```
