const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200781,
  '诡计（后）',
  '比赛中盘位于后方时，使前方焦躁的马娘变得略微疲劳',
  20078,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.order_rate > 50 &&
      args.temptation_opponent_count_infront >= 1,
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
    [-0.01, 0, 0],
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
  false,
);
