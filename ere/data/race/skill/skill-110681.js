const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110681,
  'あっぱれ大盤振る舞い！',
  '終盤のコーナーで前の方にいる時\nゴールまでが遠いと少しの間前に出て\nさらに加速力がちょっと上がる',
  11068,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.corner !== 0 &&
      args.remain_distance >= 600 &&
      args.order <= 3,
    () => false,
  ],
  [4, 0],
  [500, 0],
  [
    [22, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.1, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
