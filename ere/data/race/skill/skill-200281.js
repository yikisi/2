const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200281,
  '対抗意識◎',
  '自分と同じ作戦のウマ娘が多いと\n能力を発揮しやすい',
  20028,
  1,
  0,
  174,
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
  [3, 0],
  [45, 0],
  0,
  false,
);
