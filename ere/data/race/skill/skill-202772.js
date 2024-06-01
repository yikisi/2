const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202772,
  '瞄准目标',
  '在终盘初段位于前方时，更早时间内稍微提升加速度＜先行・长距离＞',
  20277,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.distance_type === 4 &&
      args.phase_firstquarter_random === 2 &&
      args.order_rate <= 50,
    () => false,
  ],
  [1.2, 0],
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
    [0.2, 0, 0],
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
  false,
);
