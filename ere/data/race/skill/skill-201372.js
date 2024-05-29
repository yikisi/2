const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201372,
  'かく乱',
  'レース終盤に前の方にいると後方の\n視野がわずかに狭くなる＜作戦・先行＞',
  20137,
  1,
  85,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_random === 2 &&
      args.order_rate <= 50,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-30000, 0, 0],
    [0, 0, 0],
  ],
  [
    [10, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [3, 5],
  [10, 10],
  1,
);
