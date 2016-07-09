export class TwoTone {

  constructor(deepColors = [], lightColors = []) {
    this.deepColors  = deepColors;
    this.lightColors = lightColors;
  }

  colorSets() {
    this.colorSets = [];
    for (let i = 0;i < this.lightColors.length;i ++) {
      const lightColor = this.lightColors[i];
      for (let j = 0;j < this.deepColors.length;j ++) {
        const deepColor = this.deepColors[j];
        this.colorSets.push([deepColor, lightColor]);
      }
    }
    return this.colorSets;
  }
}
