const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110391,
  '快なる剛力',
  'レース中盤以降の上り坂で中団にいると\n坂を上りきった後、優雅にぶちかまして\n速度を上げる',
  11039,
  5,
  18,
  340,
  [
    (args) =>
      args.phase >= 1 &&
      args.slope === 1 &&
      args.order_rate >= 40 &&
      args.order_rate <= 80,
    () => true,
  ],
  [(args) => args.slope === 0 || args.slope === 2, () => false],
  [5, 0],
  [500, 0],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
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
  0,
);
