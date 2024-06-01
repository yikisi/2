const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200263,
  '不擅长外枠',
  '稍微不擅长6~8号枠号的比赛',
  20026,
  1,
  4,
  -129,
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
    [-40, 0, 0],
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
  [-30, 0],
  0,
  false,
);
