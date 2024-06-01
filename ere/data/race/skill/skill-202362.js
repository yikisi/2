const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202362,
  '压迫感',
  '比赛后半时，使体力回复的赛马娘稍微畏缩＜沙土＞',
  20236,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.distance_rate >= 50 &&
      args.is_other_character_activate_advantage_skill === 9,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.15, 0, 0],
    [0, 0, 0],
  ],
  [
    [23, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
  false,
);
