const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110721,
  '剛勇果断、烈火之刀',
  'レース中間付近で競り合っていると\nレース後半のどこかで速度が上がる\nスキル発動時、内ラチ側にいると\n効果が増える',
  11072,
  5,
  340,
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
    (args) =>
      args.distance_rate >= 40 &&
      args.distance_rate <= 50 &&
      args.blocked_side_continuetime >= 2,
  ],
  [
    (args) => args.distance_rate_after_random === 50 && args.lane_type === 0,
    (args) => args.distance_rate_after_random === 50,
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
    [4500, 0, 0],
    [3500, 0, 0],
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
);
