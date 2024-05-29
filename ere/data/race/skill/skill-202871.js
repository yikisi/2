const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202871,
  '君臨',
  '終盤の最終コーナーで中団以降にいると\n加速力が上がる\n＜追込・中距離＞',
  20287,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 4 &&
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate >= 40,
    () => true,
  ],
  [0.9, 0],
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
    [4000, 0, 0],
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
);
