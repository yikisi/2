const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201901,
  '鍔迫り合い',
  'レース終盤始めの方で前方にいると\n加速力が上がる＜作戦・先行＞',
  20190,
  2,
  10,
  508,
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
    [0.4, 0, 0],
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
  [60, 0],
  1,
);
