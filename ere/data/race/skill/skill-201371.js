const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201371,
  '幻惑のかく乱',
  'レース終盤に前の方にいると後方の\n視野が少し狭くなる＜作戦・先行＞',
  20137,
  2,
  11,
  334,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_random === 2 &&
      args.order_rate <= 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-5, 0, 0],
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
  [30, 30],
  1,
  false,
);
