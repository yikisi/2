const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202461,
  '踏ませぬ影',
  '最終直線で先頭のとき後ろ1バ身以内に\nウマ娘がいると速度がすごく上がる\n＜作戦・逃げ＞',
  20246,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.is_last_straight === 1 &&
      args.order === 1 &&
      args.bashin_diff_behind <= 1,
    () => false,
  ],
  [2.4, 0],
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
    [0.45, 0, 0],
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
