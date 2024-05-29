const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202112,
  '気合十分',
  '最終コーナーで後ろの方にいると\n速度がわずかに上がる＜マイル＞',
  20211,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [1.8, 0],
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
    [1500, 0, 0],
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
);
