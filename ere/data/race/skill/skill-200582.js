const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200582,
  '准备突围',
  '在最终弯道上略微容易突围＜作战・先行＞',
  20058,
  1,
  2,
  217,
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
  [20, 0],
  1,
  false,
);
