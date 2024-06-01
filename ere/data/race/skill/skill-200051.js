const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200051,
  '阪神竞马场◎',
  '擅长阪神竞马场的比赛',
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
