const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10411,
  '学級委員長+速さ＝バクシン',
  'レース後半に前の方で競り合うとバク\nシン力（？）を発揮、速度が少し上がる',
  1041,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order <= 3 &&
      args.blocked_side_continuetime >= 2,
    () => true,
  ],
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
    [0.25, 0, 0],
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
  [30, 0],
  0,
);
