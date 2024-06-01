const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201341,
  '决意直滑降',
  '下坡变得稍微擅长＜作战・先行＞',
  20134,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) => args.running_style === 2 && args.down_slope_random === 1,
    () => false,
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
    [0.3, 0, 0],
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
  false,
);
