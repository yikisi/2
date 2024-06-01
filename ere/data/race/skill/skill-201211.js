const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201211,
  '怒涛般的追击',
  '在比赛终盘完成超越时，速度提升，并且加速力微幅提升＜长距离＞',
  20121,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.phase === 2 &&
      args.change_order_onetime < 0,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
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
  [1, 0],
  [60, 0],
  1,
  false,
);
