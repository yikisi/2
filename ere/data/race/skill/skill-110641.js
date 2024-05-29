const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110641,
  'jingle all the way',
  'レース中間付近以降の直線で先頭だと\n長めに速度を少し上げ続ける、さらに\n中山レース場で「大逃げ」が発動してい\nると長めに加速力をちょっと上げ続ける',
  11064,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 40 &&
      args.corner === 0 &&
      args.order === 1 &&
      args.track_id === 10005 &&
      args.is_used_skill_id === 202051,
    (args) => args.distance_rate >= 40 && args.corner === 0 && args.order === 1,
  ],
  [7, 7],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.1, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
