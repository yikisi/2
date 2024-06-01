const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200282,
  '对抗意识○',
  '很多马娘与自身同一战术时能力稍微容易发挥',
  20028,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.running_style_count_same_rate >= 40, () => false],
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
