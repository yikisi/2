const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202372,
  '进攻的姿势',
  '比赛中盘速度稍微提升＜作战・先行＞',
  20237,
  1,
  2,
  217,
  [() => true, () => true],
  [(args) => args.phase_random === 1 && args.running_style === 2, () => false],
  [2.4, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [1, 0],
  [20, 0],
  1,
  false,
);
