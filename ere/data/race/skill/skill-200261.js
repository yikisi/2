const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200261,
  '擅长外枠◎',
  '擅长6~8号枠号的比赛',
  20026,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.post_number >= 6, () => false],
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
  [1, 0],
  [45, 0],
  0,
  false,
);
