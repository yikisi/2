const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200772,
  '令人出神的诡计',
  '比赛中盘位于前方时，使后方焦躁的马娘变得很疲劳',
  20077,
  2,
  11,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.order_rate <= 50 &&
      args.temptation_opponent_count_behind >= 1,
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
    [-0.03, 0, 0],
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
  false,
);
