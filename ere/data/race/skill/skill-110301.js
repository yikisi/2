const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110301,
  'Drain for rose',
  'レース中盤で好位置だと\n前方のウマ娘から持久力を吸い取り\n自分の速度を少し上げる',
  11030,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) => args.phase === 1 && args.order >= 2 && args.order_rate <= 50,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [9, 9, 27],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, -0.005, 0.25],
    [0, 0, 0],
  ],
  [
    [1, 9, 1],
    [0, 0, 0],
  ],
  [
    [0, 18, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [60, 0],
  0,
);
