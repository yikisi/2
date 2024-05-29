const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200291,
  '徹底マーク◎',
  '1番人気のウマ娘と作戦が同じだと\n能力を発揮しやすい',
  20029,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.running_style_equal_popularity_one === 1, () => true],
  [-0.0001, 0],
  [0, 0],
  [
    [4, 0, 0],
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
  [4, 0],
  [45, 0],
  0,
);
