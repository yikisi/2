const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106801111,
  '庆典开始Wasshoi！',
  '比赛开始时，加速度大幅提升＜作战・领放＞',
  10680111,
  6,
  26,
  394,
  [() => true, () => true],
  [(args) => args.running_style === 1 && args.phase === 0, () => false],
  [1.2, 0],
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
    [0.5, 0, 0],
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
