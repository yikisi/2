const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201022,
  '抜け駆け禁止',
  'レース序盤に後ろの方にいると\n前方のウマ娘をわずかに焦らせ\n動きをちょっと鈍くする＜短距離＞',
  20102,
  1,
  262,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 1 &&
      args.phase_random === 0 &&
      args.order_rate > 50 &&
      args.accumulatetime >= 5,
    () => true,
  ],
  [1.2, 0],
  [500, 500],
  [
    [9, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-100, -500, 0],
    [0, 0, 0],
  ],
  [
    [9, 9, 0],
    [0, 0, 0],
  ],
  [
    [18, 18, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [10, 10],
  1,
);
