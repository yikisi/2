const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202201,
  '川崎レース場◎',
  '川崎レース場が得意になる',
  20220,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.track_id === 10103, () => false],
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
