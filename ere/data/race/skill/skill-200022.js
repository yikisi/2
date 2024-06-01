const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200022,
  '逆时针○',
  '稍微擅长逆时针赛道',
  20002,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.rotation === 2, () => false],
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
  false,
);
