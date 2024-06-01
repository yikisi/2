const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200641,
  '迫近的阴影',
  '在最后冲刺阶段的直线上加速度提升＜作战・追赶＞',
  20064,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 && args.is_lastspurt === 1 && args.corner === 0,
    () => false,
  ],
  [0.9, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
  false,
);
