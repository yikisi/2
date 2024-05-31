const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110441,
  'とっておきmaterialize',
  'レース中盤以降の下り坂で後方にいると\n持久力を少し使って短い間前に出る\nその後やる気が好調か絶好調だと\n終盤の最終直線で短い間速度が上がる',
  11044,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.phase >= 1 && args.slope === 2 && args.order_rate >= 50,
    (args) =>
      args.is_activate_other_skill_detail === 1 &&
      args.phase >= 2 &&
      args.is_last_straight === 1 &&
      args.motivation >= 4,
  ],
  [3, 3],
  [500, 500],
  [
    [22, 9, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, -0.02, 0],
    [0.35, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  0,
  true,
);
