export function*  twoTone(deepColors = [], lightColors = []) {
  for (let i = 0;i < lightColors.length;i ++) {
    const light = lightColors[i];
    for (let j = 0;j < deepColors.length;j ++) {
      const deep = deepColors[j];
      yield {deep, light};
    }
  }
}
