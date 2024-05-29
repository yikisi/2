const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10611,
  'Call me KING',
  'レースを冷静に運ぶことができると\n残り200mで中団にいるとき\n実力発揮、速度が上がる',
  1061,
  3,
  5,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.temptation_count === 0 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.order >= 4 &&
      args.order_rate <= 70,
    () => true,
  ],
  [5, 0],
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
    [3500, 0, 0],
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
);
