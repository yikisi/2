const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100581,
  'I Never Goof Up!',
  'レース終盤に追い抜くと\nあきらめない心を発揮して前を目指す',
  10058,
  5,
  18,
  340,
  [() => true, () => true],
  [(args) => args.phase >= 2 && args.change_order_onetime < 0, () => true],
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
);
