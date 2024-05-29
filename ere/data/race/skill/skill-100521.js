const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100521,
  'ワクワククライマックス',
  '最終コーナーで後ろの方にいると近くの\nウマ娘を見て持久力を回復する',
  10052,
  4,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate > 50 &&
      args.near_count >= 1,
    () => true,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [550, 0, 0],
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
  [2, 0],
  [60, 0],
  0,
);
