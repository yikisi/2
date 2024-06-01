const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200121,
  '小仓竞马场◎',
  '擅长小仓竞马场的比赛',
  20012,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.track_id === 10010, () => false],
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
