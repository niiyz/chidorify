export class WeaveRepeat {

  constructor() {
    this.resetAll()
  }

  warping(yarn) {
    this.warp.push(yarn)
  }

  pick(yarn) {
    this.weft.push(yarn)
  }

  orderWarp(yarn, n) {
    for (let i = 0;i < n;i ++) {
      this.warp.push(yarn)
    }
  }

  orderWeft(yarn, n) {
    for (let i = 0;i < n;i ++) {
      this.weft.push(yarn)
    }
  }

  design(diagram) {
    this.diagram = diagram
  }

  resetYarn() {
    this.warp = [];
    this.weft = [];
  }

  resetAll() {
    this.daiagram = [[]];
    this.resetYarn()
  }

  data() {
    const json = {};
    json.warp = this.warp;
    json.weft = this.weft;
    json.diagram = this.diagram;
    return json;
  }

}
