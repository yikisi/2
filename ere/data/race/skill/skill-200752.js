const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200752,
  '弯里横',
  '在最终弯道处于内侧的话速度会略微上升＜长距离＞',
  20075,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
