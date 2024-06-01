const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100691,
  '憧憬着跨越樱花！',
  '剩余300米处于有利位置且与前方赛马娘距离近时强烈的信念将绽放，提高速度',
  10069,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 300 &&
      args.order_rate <= 40 &&
      args.bashin_diff_infront <= 1,
    () => false,
  ],
  [5, 0],
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
  0,
  false,
);
