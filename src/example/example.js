'use strict';

import { Chidorify } from '../chidorify';

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

document.querySelector('#chidorify').addEventListener('click', function () {
    document.body.insertAdjacentHTML('beforeend', svg);
});


