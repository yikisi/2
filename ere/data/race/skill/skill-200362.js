const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200362,
  '直線巧者',
  '直線で速度がわずかに上がる',
  20036,
  1,
  217,
  [() => true, () => true],
  [(args) => args.straight_random === 1, () => true],
  [3, 0],
  [30, 30],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 0, 0],
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
);
