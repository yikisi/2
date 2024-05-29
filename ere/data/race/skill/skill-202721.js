const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202721,
  'ネバーギブアップ',
  'レース中盤のコーナーで\nしばらくの間速度が少し上がる',
  20272,
  2,
  508,
  [() => true, () => true],
  [(args) => args.phase_corner_random === 1, () => true],
  [4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 0, 0],
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
