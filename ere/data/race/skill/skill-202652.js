const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202652,
  '自信者',
  '速度和力量都十分强劲时，稍微提升速度和力量＜英里/中距离＞',
  20265,
  1,
  0,
  217,
  [() => true, () => true],
  [
    (args) =>
      (args.base_speed >= 1000 &&
        args.base_power >= 1000 &&
        args.distance_type === 2) ||
      (args.base_speed >= 1000 &&
        args.base_power >= 1000 &&
        args.distance_type === 3),
    () => false,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 3, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [20, 20, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [10, 10],
  0,
  false,
);
