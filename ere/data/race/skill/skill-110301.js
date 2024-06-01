const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110301,
  'Drain for rose',
  '在比赛中盘身处好位置时，会吸取前方赛马娘的持久力，并且小幅提升速度',
  11030,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) => args.phase === 1 && args.order >= 2 && args.order_rate <= 50,
    () => false,
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
  false,
);
