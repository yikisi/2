const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  407051,
  '破竹の筋肉',
  '最終コーナーで中団以降にいると\n速度がすごく上がる＜マイル＞',
  40705,
  6,
  3,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner_random === 1 &&
      args.order_rate >= 25,
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
    [4500, 0, 0],
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
