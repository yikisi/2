const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200751,
  '内在体验',
  '在最终弯道处于内侧的话速度会上升＜长距离＞',
  20075,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.is_finalcorner === 1 &&
      args.corner !== 0 &&
      args.lane_type === 0,
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
