# chidorify [![Build Status](https://api.travis-ci.org/niiyz/chidorify.svg?branch=master)](http://travis-ci.org/niiyz/chidorify) [![npm version](https://badge.fury.io/js/chidorify.svg)](https://badge.fury.io/js/chidorify)


chidorify is check pattern maker.

![screenshot](screenshot.png)

# Install

```
npm install chidorify --save
```

## Example

``` js
'use strict';

import { Chidorify } from 'chidorify';

const design = [
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 1],
    [0, 0, 1, 1, 0, 0, 1, 1]
];

const deepColors  = ['ff1493', '191970', '556b2f', 'cd5c5c'];
const lightColors = ['eee8aa', 'fafad2', 'ffe4e1', 'ffff00'];

const chidorify = new Chidorify(design, deepColors, lightColors);
const svg = chidorify.run();
```

### Output SVG
https://jsfiddle.net/niiyz/duc9ffg7/
