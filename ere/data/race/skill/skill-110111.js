const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110111,
  'Gainheal・Superior',
  '在比赛中盘处于后方且名次下降时，以温柔的治愈之光回复持久力',
  11011,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase === 1 &&
      args.change_order_onetime > 0 &&
      args.order_rate >= 40,
    () => false,
  ],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.075, 0, 0],
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
  [2, 0],
  [60, 0],
  0,
  false,
);
