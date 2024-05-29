const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202772,
  '狙いを定めて',
  'レース終盤始めの方早めに\n前の方にいると加速力がわずかに上がる\n＜先行・長距離＞',
  20277,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 4 &&
      args.phase_firstquarter_random === 2 &&
      args.order_rate <= 50,
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
