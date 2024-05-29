const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200171,
  '春ウマ娘◎',
  '春のレースが得意になる',
  20017,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.season === 1 || args.season === 5, () => true],
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
  [45, 0],
  0,
);
