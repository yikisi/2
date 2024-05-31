const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100821,
  'Shining Runway',
  '最終コーナーで好位置にいると\n少しの間速度が上がる\nマイルレースなら効果時間が増える',
  10082,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.order_rate >= 20,
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate <= 50 &&
      args.order_rate >= 20,
  ],
  [5, 4],
  [500, 500],
  [
    [27, 0, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  0,
  false,
);
