const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202872,
  '浑身解数',
  '在终盘的最终弯道处若位于中后方，稍微提升加速度＜追赶・中距离＞',
  20287,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 3 &&
      args.running_style === 4 &&
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.order_rate >= 40,
    () => false,
  ],
  [0.9, 0],
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
