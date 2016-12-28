export class WeaveRepeat {

  constructor(diagram) {
    this.diagram = diagram;
  }

  warping(yarn) {
    this.warp.push(yarn);
  }

  pick(yarn) {
    this.weft.push(yarn);
  }

  setWrapPlan(plan) {

    const yarns = plan.make();

    const yarnsLen = yarns.length;

    for (let i = 0;i < yarnsLen;i ++) {
      let yarn = yarns[i];
      this.warp.push(yarn);
    }

  }

  setWeftPlan(plan) {

    const yarns = plan.make();

    const yarnsLen = yarns.length;

    for (let i = 0;i < yarnsLen;i ++) {
      let yarn = yarns[i];
      this.weft.push(yarn);
    }

  }

  resetYarn() {
    this.warp = [];
    this.weft = [];
  }

  data() {
    const json = {};
    json.warp = this.warp;
    json.weft = this.weft;
    json.diagram = this.diagram;
    return json;
  }

}
