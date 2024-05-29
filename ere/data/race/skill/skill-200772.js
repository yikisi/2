const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200772,
  '見惚れるトリック',
  'レース中盤に前の方にいると後ろの\n掛かったウマ娘が疲れる',
  20077,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.order_rate <= 50 &&
      args.temptation_opponent_count_behind >= 1,
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
    [-300, 0, 0],
    [0, 0, 0],
  ],
  [
    [20, 0, 0],
    [0, 0, 0],
  ],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [30, 30],
  1,
);
