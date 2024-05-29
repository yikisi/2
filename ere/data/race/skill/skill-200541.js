const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200541,
  '脱出術',
  'レース中盤に前方にいると\n速度が上がる＜作戦・逃げ＞',
  20054,
  2,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.phase_random === 1 &&
      args.order_rate <= 50,
    () => true,
  ],
  [3, 0],
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
    [3500, 0, 0],
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
);
