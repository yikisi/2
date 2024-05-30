const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201562,
  'ラッキーセブン',
  '枠番が7の時に少し\n良いことが起きる場合がある',
  20156,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.random_lot <= 50 && args.post_number === 7, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [1, 2, 3],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 40, 40],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [15, 15],
  1,
);
