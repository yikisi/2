const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200271,
  'おひとり様◎',
  '自分と同じ作戦のウマ娘がいないと\n能力をすごく発揮しやすい',
  20027,
  1,
  0,
  174,
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
    [80, 0, 0],
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
  [45, 0],
  0,
);
