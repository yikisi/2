const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200272,
  'おひとり様○',
  '自分と同じ作戦のウマ娘がいないと\n能力を発揮しやすい',
  20027,
  1,
  129,
  [() => true, () => true],
  [(args) => args.running_style_count_same <= 1, () => true],
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
    [600000, 0, 0],
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
);
