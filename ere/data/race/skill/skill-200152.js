const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200152,
  '良バ場○',
  '「良」のバ場状態が少し得意になる',
  20015,
  1,
  129,
  [() => true, () => true],
  [(args) => args.ground_condition === 1, () => true],
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
