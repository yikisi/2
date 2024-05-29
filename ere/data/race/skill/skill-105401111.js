const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105401111,
  '急行！ヒーロー参上！',
  'レース中盤で中団以降にいると\n速度がすごく上がる\n＜作戦・差し＞',
  10540111,
  6,
  2,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 1 &&
      args.order_rate >= 40,
    () => true,
  ],
  [2.4, 0],
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
    [4500, 0, 0],
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
