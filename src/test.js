'use strict'

import fs from 'fs'
import data from '../weaver.json';
import { weave } from './weaver';

fs.writeFile('index.html', weave(data, 800, 800))
