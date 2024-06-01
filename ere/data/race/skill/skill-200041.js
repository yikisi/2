const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200041,
  '中山竞马场◎',
  '擅长中山竞马场的比赛',
  20004,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.track_id === 10005, () => false],
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
