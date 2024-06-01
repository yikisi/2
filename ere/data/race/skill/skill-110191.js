const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110191,
  '萌到让我活过来了！',
  '在中盘的弯道位于中间集团往后的位置，且附近有3名及以上的马娘酱时，因萌之力量而提升速度',
  11019,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.near_count >= 3 &&
      args.phase === 1 &&
      args.corner !== 0 &&
      args.order_rate >= 40,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 1],
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
