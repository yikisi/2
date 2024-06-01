const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200272,
  '独自一人○',
  '没有其他马娘选择与自己相同的战术时能力稍微更容易发挥',
  20027,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.running_style_count_same <= 1, () => false],
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
  [1, 0],
  [30, 0],
  0,
  false,
);
