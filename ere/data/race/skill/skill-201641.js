const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201641,
  '一匹狼',
  '自分だけが一匹狼の心を持つレースで\n少し能力が上がる',
  20164,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.same_skill_horse_count === 1, () => true],
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
    [400000, 0, 0],
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
