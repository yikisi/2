const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201641,
  '单枪匹马',
  '比赛中只有自己抱有单枪匹马的觉悟时，能力少许上升',
  20164,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.same_skill_horse_count === 1, () => false],
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
