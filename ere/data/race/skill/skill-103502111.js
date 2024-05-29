const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  103502111,
  '千万バリキ！！！',
  '上り坂でしばらくの間速度が上がる\n＜作戦・差し＞',
  10350211,
  6,
  4,
  394,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.up_slope_random === 1,
    () => true,
  ],
  [4, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
  [60, 0],
  1,
);
