const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201902,
  '真っ向勝負',
  'レース終盤始めの方で前方にいると\n加速力がわずかに上がる＜作戦・先行＞',
  20190,
  1,
  3,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate <= 50,
    () => true,
  ],
  [1.8, 0],
  [500, 0],
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
