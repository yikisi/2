const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202001,
  '砂の玄人',
  'レース中盤に後方にいると\n持久力が回復し速度が上がる＜ダート＞',
  20200,
  2,
  9,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase_random === 1 &&
      args.order_rate >= 50,
    () => true,
  ],
  [1.8, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.35, 0],
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
  [1, 2],
  [30, 30],
  1,
);
