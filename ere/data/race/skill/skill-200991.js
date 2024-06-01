const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200991,
  'X计划',
  '临近比赛终盘并在前方时，容易实现赶超＜短距离＞',
  20099,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_laterhalf_random === 1 &&
      args.order >= 2 &&
      args.order_rate <= 50,
    () => false,
  ],
  [3, 0],
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
  false,
);
