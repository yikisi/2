const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202541,
  '威风堂堂',
  '在最终弯道位于中间往后位置时，令前后各3名赛马娘的速度稍微下降，并提高自己的速度＜作战・居中＞',
  20254,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.order_rate >= 40 &&
      args.is_finalcorner_random === 1,
    () => false,
  ],
  [1.8, 0],
  [500, 0],
  [
    [27, 21, 21],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, -0.15, -0.15],
    [0, 0, 0],
  ],
  [
    [1, 9, 10],
    [0, 0, 0],
  ],
  [
    [0, 3, 3],
    [0, 0, 0],
  ],
  [1, 0],
  [60, 0],
  1,
  false,
);
