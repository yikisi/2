const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200162,
  '路况不佳○',
  '稍微擅长「稍重」「重」「不良」的马场状态',
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
    () => false,
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
  [3, 0],
  [30, 0],
  0,
  false,
);
