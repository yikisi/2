const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202451,
  'トップギア',
  '最終直線で2番手以降で\n先頭から4バ身以内にいると\n速度がすごく上がる＜作戦・差し＞',
  20245,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.is_last_straight === 1 &&
      args.order >= 2 &&
      args.distance_diff_top <= 10,
    () => true,
  ],
  [2.4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [4500, 0, 0],
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
);
