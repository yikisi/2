const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100341,
  '快走かな、快走かな！',
  'レース前半中団以降に控え続けており\n追い比べをしていると\n江戸っ子の底力を見せつけて\n速度をすごく上げる',
  10034,
  5,
  340,
  [
    (args) => args.distance_rate >= 50 && args.order_rate_out40_continue === 1,
    () => true,
  ],
  [(args) => args.compete_fight_count > 0, () => true],
  [5, 0],
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
  0,
);
