const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200283,
  '引っ込み思案',
  '自分と同じ作戦のウマ娘が多いと\n能力を少し発揮しにくい',
  20028,
  1,
  0,
  -129,
  [() => true, () => true],
  [(args) => args.running_style_count_same_rate >= 40, () => true],
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
    [-400000, 0, 0],
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
  [-30, 0],
  0,
);
