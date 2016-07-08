export class WeaveRepeat {

  constructor() {
    this.warp = [];
    this.weft = [];
  }

  warping(yean) {
    this.warp.push(yean)
  }

  pick(yean) {
    this.weft.push(yean)
  }

  design(diagram) {
    this.diagram = diagram
  }

  data() {
    const json = {};
    json.warp = this.warp;
    json.weft = this.weft;
    json.diagram = this.diagram;
    return json;
  }

}
