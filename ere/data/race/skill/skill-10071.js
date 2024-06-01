const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10071,
  '小心波澜炮！',
  '从比赛中段进行长距离冲刺，速度略微加快',
  1007,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 60 &&
      args.order_rate > 50,
    () => false,
  ],
  [6, 0],
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
  [30, 0],
  0,
  false,
);
