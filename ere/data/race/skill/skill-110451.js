const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110451,
  'ぐるぐるマミートリック♡',
  '最終直線を好位置で走行中\n前のウマ娘との距離が近いと\n抜け出しやすくなる',
  11045,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.is_last_straight === 1 &&
      args.order <= 4 &&
      args.bashin_diff_infront <= 1,
    () => true,
  ],
  [5, 0],
  [500, 500],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 3000, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
