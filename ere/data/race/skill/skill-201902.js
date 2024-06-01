const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201902,
  '正面决斗',
  '比赛终盘开始时若位于前方，稍微提升加速度＜作战・先行＞',
  20190,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_firsthalf_random === 2 &&
      args.order_rate <= 50,
    () => false,
  ],
  [1.8, 0],
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
