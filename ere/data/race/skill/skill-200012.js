const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200012,
  '顺时针○',
  '稍微擅长顺时针赛道',
  20001,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.rotation === 1, () => false],
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
