const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110311,
  'フレッシュ☆パーラー',
  'レース中盤始めの方に前の方にいると\n速度を少し上げ続け\nおまけに持久力を少し回復する',
  11031,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.phase_firsthalf_random === 1 && args.order_rate <= 30,
    () => false,
  ],
  [6, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.035, 0],
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
  0,
);
