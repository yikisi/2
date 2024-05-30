const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200151,
  '良バ場◎',
  '「良」のバ場状態が得意になる',
  20015,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.ground_condition === 1, () => false],
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
    [60, 0, 0],
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
  [45, 0],
  0,
);
