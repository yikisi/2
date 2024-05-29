const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200162,
  '道悪○',
  '「稍重」「重」「不良」のバ場状態が\n少し得意になる',
  20016,
  1,
  0,
  129,
  [() => true, () => true],
  [
    (args) =>
      args.ground_condition === 2 ||
      args.ground_condition === 3 ||
      args.ground_condition === 4,
    () => true,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    [3, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [400000, 0, 0],
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
  [3, 0],
  [30, 0],
  0,
);
