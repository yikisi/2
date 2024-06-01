const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  103502111,
  '千万马力！！！',
  '身处上坡时，一段时间内速度持续提升＜作战・居中＞',
  10350211,
  6,
  26,
  394,
  [() => true, () => true],
  [
    (args) => args.running_style === 3 && args.up_slope_random === 1,
    () => false,
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
    [0.35, 0, 0],
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
  false,
);
