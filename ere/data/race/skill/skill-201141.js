const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201141,
  '神赐步伐',
  '左右移动不容易产生疲劳＜中距离＞',
  20114,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      (args.distance_type === 3 &&
        args.is_move_lane === 1 &&
        args.accumulatetime >= 10) ||
      (args.distance_type === 3 &&
        args.is_move_lane === 2 &&
        args.accumulatetime >= 10),
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
    [0.055, 0, 0],
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
  1,
  false,
);
