const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200061,
  '京都レース場◎',
  '京都レース場が得意になる',
  20006,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.track_id === 10008, () => false],
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
