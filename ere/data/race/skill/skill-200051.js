const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200051,
  '阪神レース場◎',
  '阪神レース場が得意になる',
  20005,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.track_id === 10009, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [2, 0, 0],
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
  [2, 0],
  [45, 0],
  0,
  false,
);
