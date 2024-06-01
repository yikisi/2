const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202922,
  '不惜一切',
  '比赛中盘消耗少量体力，使速度少量提升＜作战・追赶＞',
  20292,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.running_style === 4 && args.phase_random === 1, () => false],
  [2.4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, -0.02, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  1,
  false,
);
