const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202171,
  '至高のダウンヒラー',
  '下り坂で速度が上がる',
  20217,
  2,
  508,
  [() => true, () => true],
  [(args) => args.down_slope_random === 1, () => true],
  [2.4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
  [60, 0],
  1,
);
