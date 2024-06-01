const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202951,
  '砂之开拓者',
  '临近中盘若位于前方，则提升速度＜沙土＞',
  20295,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_laterhalf_random === 0 &&
      args.order_rate <= 50,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
