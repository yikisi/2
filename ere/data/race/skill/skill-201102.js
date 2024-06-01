const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201102,
  '中距离直线○',
  '在直线上的速度略微加快＜中距离＞',
  20110,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) => args.distance_type === 3 && args.straight_random === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
