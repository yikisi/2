const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201631,
  'シンパシー',
  'シンパシーの心を持つウマ娘が多い\nレースだと少し能力が上がる',
  20163,
  1,
  129,
  [() => true, () => true],
  [(args) => args.same_skill_horse_count >= 5, () => true],
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
