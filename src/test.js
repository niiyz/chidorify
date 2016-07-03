'use strict'

import fs from 'fs'
import data from '../data/weaver4-1.json';
import { weave } from './weaver';

fs.writeFile('index.html', weave(data, 800, 800))
