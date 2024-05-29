const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200461,
  'アガッてきた！',
  'レース中盤に追い抜くと\n速度が上がる',
  20046,
  2,
  508,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.change_order_onetime < 0, () => true],
  [1.8, 0],
  [30, 30],
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
  [60, 0],
  1,
);
