const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202872,
  '渾身の足取り',
  '終盤の最終コーナーで中団以降にいると\n加速力がわずかに上がる\n＜追込・中距離＞',
  20287,
  1,
  2,
  217,
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
    [0.2, 0, 0],
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
  [20, 0],
  1,
);
