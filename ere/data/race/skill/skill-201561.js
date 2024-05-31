const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201561,
  'スーパーラッキーセブン',
  '枠番が7の時に\n良いことが起きる場合がある',
  20156,
  2,
  8,
  334,
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
    [60, 60, 60],
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
  [30, 30],
  1,
  false,
);
