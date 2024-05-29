const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202111,
  '破竹の勢い',
  '最終コーナーで後ろの方にいると\n速度が上がる＜マイル＞',
  20211,
  2,
  3,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [1.8, 0],
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
