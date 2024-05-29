const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201341,
  '決意の直滑降',
  '下り坂で加速力が少し上がる\n＜作戦・先行＞',
  20134,
  2,
  334,
  [() => true, () => true],
  [
    (args) => args.running_style === 2 && args.down_slope_random === 1,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3000, 0, 0],
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
  [40, 0],
  1,
);
