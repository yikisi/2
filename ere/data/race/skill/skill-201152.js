const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201152,
  '束缚',
  '在比赛终盘位于后方时，略微降低前方赛马娘的速度＜中距离＞',
  20115,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-0.15, 0, 0],
    [0, 0, 0],
  ],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [10, 10],
  1,
  false,
);
