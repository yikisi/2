const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202942,
  '鬼気迫って',
  'レース中盤に後方にいると\n前の速度をほんのわずかに下げ\n自分の速度がわずかに上がる\n＜追込・中距離＞',
  20294,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 4 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [1.8, 0],
  [500, 0],
  [
    [27, 21, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, -350, 0],
    [0, 0, 0],
  ],
  [
    [1, 9, 0],
    [0, 0, 0],
  ],
  [
    [0, 5, 0],
    [0, 0, 0],
  ],
  [1, 0],
  [20, 0],
  1,
);
