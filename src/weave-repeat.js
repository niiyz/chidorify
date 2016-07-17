export class WeaveRepeat {

  constructor() {
    this.resetAll();
  }

  warping(yarn) {
    this.warp.push(yarn);
  }

  pick(yarn) {
    this.weft.push(yarn);
  }

  orderWarp(yarn, n = 0) {
    if (n === 0) {
      n = this.warpNum();
    }
    for (let i = 0;i < n;i ++) {
      this.warp.push(yarn);
    }
  }

  orderWeft(yarn, n = 0) {
    if (n === 0) {
      n = this.weftNum();
    }
    for (let i = 0;i < n;i ++) {
      this.weft.push(yarn);
    }
  }

  design(diagram) {
    this.diagram = diagram;
  }

  warpNum() {
    if (this.diagram.length === 0) {
      return 0;
    }
    return this.diagram[0].length;
  }

  weftNum() {
    return this.diagram.length;
  }

  twoTone(deep, light) {
    this.deepColor  = deep;
    this.lightColor = light;
  }

  threadOne() {
    this.thread(1);
  }
  threadHerf() {
    this.thread(2);
  }
  threadQuareter() {
    this.thread(4);
  }

  thread(splitNum) {

    const warpNum = this.warpNum();
    const weftNum = this.weftNum();

    switch (splitNum) {
    case 1:
      this.orderWarp(this.deepColor, warpNum);
      this.orderWeft(this.lightColor, weftNum);
      break;
    }
  }

  resetYarn() {
    this.deepColor  = '';
    this.lightColor = '';
    this.warp = [];
    this.weft = [];
  }

  resetAll() {
    this.daiagram = [];
    this.resetYarn();
  }

  data() {
    const json = {};
    json.warp = this.warp;
    json.weft = this.weft;
    json.diagram = this.diagram;
    return json;
  }

}
