const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110411,
  'CHERRY☆スクランブル',
  '残り400m地点で3番手以内にいると\n短い間加速力がちょっと上がる\nレース中盤に連続して競り合い続けた\n時間が長いほど効果と時間が増える',
  11041,
  5,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order <= 3 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399,
    () => true,
  ],
  [1, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [20, 1, 1],
    [1, 1, 1],
  ],
  [
    [1000, 0, 0],
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
  0,
);
