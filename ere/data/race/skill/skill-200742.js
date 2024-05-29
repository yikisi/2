const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200742,
  '深呼吸',
  'レース中盤に息を入れて\nわずかに疲れにくくなる＜長距離＞',
  20074,
  1,
  1,
  217,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => true],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0, 0],
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
  [2, 0],
  [20, 0],
  1,
);
