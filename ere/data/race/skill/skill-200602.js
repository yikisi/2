const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200602,
  '差し切り体勢',
  'レース終盤始めの方に中団以降にいると\n加速力がわずかに上がる\n＜作戦・差し＞',
  20060,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate >= 40,
    () => true,
  ],
  [1.8, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2000, 0, 0],
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
  [3, 0],
  [20, 0],
  1,
);
