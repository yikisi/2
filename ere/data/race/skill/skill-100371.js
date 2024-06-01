const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100371,
  'Schwarzes Schwert',
  '若是冷静地进行比赛，并在最终直线上位于第三名以后的话，速度提升。若是持续身处中团的话，变为大幅提升',
  10037,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.temptation_count === 0 &&
      args.order >= 3 &&
      args.is_last_straight === 1 &&
      args.order_rate_in80_continue === 1 &&
      args.order_rate_out40_continue === 1,
    (args) =>
      args.temptation_count === 0 &&
      args.order >= 3 &&
      args.is_last_straight === 1,
  ],
  [5, 5],
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
    [0.45, 0, 0],
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
