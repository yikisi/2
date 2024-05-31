const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100381,
  '#LookatCurren',
  'レース中間付近で好位置にいる時に\n追い抜くと勢いづき進出を開始する',
  10038,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.distance_rate <= 65 &&
      args.order >= 2 &&
      args.order_rate <= 50 &&
      args.change_order_onetime < 0,
    () => false,
  ],
  [5, 0],
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
    [0.25, 0.3, 0],
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
  false,
);
