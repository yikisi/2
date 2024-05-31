const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10521,
  'ワクワクよーいドン',
  '最終コーナーで後ろの方にいると近くの\nウマ娘を見て持久力を少し回復する',
  1052,
  3,
  17,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate > 50 &&
      args.near_count >= 1,
    () => false,
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
    [0.035, 0, 0],
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
  [30, 0],
  0,
  false,
);
