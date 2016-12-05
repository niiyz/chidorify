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

    const planLen = plan.length;

    for (let i = 0;i < planLen;i ++) {
      let yarn = plan[i];
      this.warp.push(yarn);
    }

  }

  setWeftPlan(plan) {

    const planLen = plan.length;

    for (let i = 0;i < planLen;i ++) {
      let yarn = plan[i];
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
