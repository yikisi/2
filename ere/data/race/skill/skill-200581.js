const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200581,
  '速度之星',
  '在最终弯道上容易突围＜作战・先行＞',
  20058,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.is_finalcorner_random === 1 &&
      args.order_rate <= 50,
    () => false,
  ],
  [1.8, 0],
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
    [0.35, 0, 0],
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
  false,
);
