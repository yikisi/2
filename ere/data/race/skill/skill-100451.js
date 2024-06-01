const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100451,
  '纯粹之心',
  '在比赛中盘处于好位置时，持久力回复',
  10045,
  4,
  17,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase_random === 1 && args.order >= 2 && args.order_rate <= 40,
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
