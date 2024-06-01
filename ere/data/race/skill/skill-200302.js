const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200302,
  '伏兵○',
  '人气第四以下时能力稍微更容易发挥',
  20030,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.popularity >= 4, () => false],
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
