const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200781,
  'トリック（後）',
  'レース中盤に後ろの方にいると前の\n掛かったウマ娘がわずかに疲れる',
  20078,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.order_rate > 50 &&
      args.temptation_opponent_count_infront >= 1,
    () => true,
  ],
  [0, 0],
  [500, 500],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-100, 0, 0],
    [0, 0, 0],
  ],
  [
    [19, 0, 0],
    [0, 0, 0],
  ],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
);
