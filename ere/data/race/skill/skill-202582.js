const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202582,
  '脇目も振らず',
  'レース中盤に持久力を\nわずかに回復しさらに速度が\nちょっと上がる＜長距離＞',
  20258,
  1,
  263,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => true],
  [2.4, 0],
  [500, 500],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [150, 500, 0],
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
  [10, 10],
  1,
);
