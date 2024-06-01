const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201631,
  '同理心',
  '比赛中有很多持有同理心属性的马娘则自己能力少许上升',
  20163,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.same_skill_horse_count >= 5, () => false],
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
