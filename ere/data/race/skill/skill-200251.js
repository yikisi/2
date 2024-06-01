const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200251,
  '擅长内枠◎',
  '擅长1~3号枠号的比赛',
  20025,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.post_number <= 3, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [5, 0, 0],
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
  [5, 0],
  [45, 0],
  0,
  false,
);
