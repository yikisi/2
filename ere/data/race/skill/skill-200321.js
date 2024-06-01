const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200321,
  '胆小鬼',
  '对成为人气第一感到棘手',
  20032,
  1,
  4,
  -129,
  [() => true, () => true],
  [(args) => args.popularity === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [2, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-40, 0, 0],
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
  [2, 0],
  [-30, 0],
  0,
  false,
);
