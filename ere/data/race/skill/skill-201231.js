const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201231,
  '奇術師',
  'レース終盤で前方のウマ娘の\n視野が狭くなる＜長距離＞',
  20123,
  2,
  11,
  334,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 2, () => true],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-10, 0, 0],
    [0, 0, 0],
  ],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [3, 5],
  [30, 30],
  1,
);
