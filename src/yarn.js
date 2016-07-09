export class Yarn {

  constructor(color = '#000', thickness = 1) {
    this.color = color;
    this.thickness = thickness;
  }

  wide() {
    this.thickness = 2;
  }
}
