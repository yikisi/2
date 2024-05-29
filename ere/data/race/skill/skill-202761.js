const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202761,
  'かっとばせ！',
  'レース中盤に前の方にいると\nしばらくの間速度が少し上がる\n＜作戦・先行＞',
  20276,
  2,
  10,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 2 &&
      args.phase_random === 1 &&
      args.order_rate <= 50,
    () => true,
  ],
  [4, 0],
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
    [0.25, 0, 0],
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
