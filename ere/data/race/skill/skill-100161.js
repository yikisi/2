const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100161,
  'Shadow Break',
  '最終コーナー以降に中団で外から\n追い抜くと怪物的な力で速度を上げる\n中盤競り合っていた場合はすごく上げる',
  10016,
  5,
  18,
  340,
  [
    (args) => args.phase === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [
    (args) =>
      args.is_finalcorner === 1 &&
      args.order >= 2 &&
      args.order_rate <= 75 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
    (args) =>
      args.is_finalcorner === 1 &&
      args.order >= 2 &&
      args.order_rate <= 75 &&
      args.is_behind_in === 1 &&
      args.change_order_onetime < 0,
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
