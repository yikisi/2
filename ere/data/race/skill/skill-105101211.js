const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105101211,
  '大輪の決意',
  '下り坂で加速力が上がる\n＜作戦・先行＞',
  10510121,
  6,
  26,
  394,
  [() => true, () => true],
  [
    (args) => args.running_style === 2 && args.down_slope_random === 1,
    () => true,
  ],
  [3, 0],
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
  [40, 0],
  1,
);
