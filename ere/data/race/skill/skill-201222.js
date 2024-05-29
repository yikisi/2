const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201222,
  'スタミナイーター',
  'レース中盤で後ろの方にいると\n前方の持久力をちょっと奪う＜長距離＞',
  20122,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 && args.phase_random === 1 && args.order >= 5,
    () => true,
  ],
  [0, 0],
  [500, 500],
  [
    [9, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-50, 150, 0],
    [0, 0, 0],
  ],
  [
    [9, 1, 0],
    [0, 0, 0],
  ],
  [
    [5, 0, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [25, 0],
  1,
);
