import { YarnFactory } from './yarn-factory';

export class Plan {

  constructor(max, thickness, colors) {
    this.max       = max;
    this.thickness = thickness;
    this.colors    = colors;
    this.yarns     = [];
  }

  make() {

    let thicknessTotal = 0;
    let thicknessList = [], colorList = [];

    while (this.max > thicknessTotal) {
      if (!thicknessList.length) {
        thicknessList = [].concat(this.thickness);
      }

      if (!colorList.length) {
        colorList = [].concat(this.colors);
      }

      const thickness = thicknessList.shift();
      const color     = colorList.shift();

      const yarn      = YarnFactory.make(color, thickness);

      this.yarns.push(yarn);

      thicknessTotal += yarn.thickness;

    }

    return this.yarns;

  }

}
