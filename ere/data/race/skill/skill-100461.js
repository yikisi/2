const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100461,
  'キラキラ☆STARDOM',
  'レース中盤の直線で前の方にいるとき\n後ろのウマ娘と距離が近いと\n譲らない想いが力になる',
  10046,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.corner === 0 &&
      args.order <= 2 &&
      args.bashin_diff_behind <= 1,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 3000, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
