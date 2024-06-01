const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201201,
  'VIP颜通行',
  '想要赶超的愿望在心底涌现，不容易变得疲劳＜长距离＞',
  20120,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.is_overtake === 1 &&
      args.accumulatetime >= 5,
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
