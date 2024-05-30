const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202343,
  '泥遊び○',
  'バ場状態が重か不良のレースが\n得意になりスピードが少し上がる\n＜ダート＞',
  20234,
  1,
  0,
  129,
  [() => true, () => true],
  [
    (args) =>
      (args.ground_type === 2 && args.ground_condition === 3) ||
      (args.ground_type === 2 && args.ground_condition === 4),
    () => false,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 0, 0],
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
  [30, 0],
  0,
);
