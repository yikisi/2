const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202481,
  '怪物',
  'レース終盤目前に先頭か先頭から4バ身\n以内につけると、レース終盤に\n加速力が上がる＜先行・長距離＞',
  20248,
  2,
  508,
  [
    (args) =>
      args.distance_diff_top <= 10 &&
      args.distance_rate >= 60 &&
      args.phase === 1,
    () => true,
  ],
  [
    (args) =>
      args.distance_type === 4 && args.running_style === 2 && args.phase === 2,
    () => true,
  ],
  [1.2, 0],
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
    [4000, 0, 0],
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
