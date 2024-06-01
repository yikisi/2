const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10411,
  '班长+速度=爆进',
  '比赛后半段处于前列进行名次争夺时，发挥爆进之力，速度加快',
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
    () => false,
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
  false,
);
