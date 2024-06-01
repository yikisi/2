const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202422,
  '鲁莽',
  '若经过最后冲刺却仍处于队伍中部靠后则会稍微消耗持久力略微提高加速度＜居中・长距离＞',
  20242,
  1,
  2,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 3 &&
      args.is_lastspurt === 1 &&
      args.order_rate >= 40,
    () => false,
  ],
  [1.5, 0],
  [500, 0],
  [
    [31, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.2, -0.02, 0],
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
  [3, 0],
  [20, 0],
  1,
  false,
);
