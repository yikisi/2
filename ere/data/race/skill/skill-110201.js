const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110201,
  '来段霹雳舞吗!',
  '比赛终盘的直线身处前方时，会得意洋洋地提升速度。若这恰巧也是看台对面跑道时，还会一并稍微提升加速度',
  11020,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.corner === 0 &&
      args.order <= 2 &&
      args.straight_front_type === 2,
    (args) => args.phase >= 2 && args.corner === 0 && args.order <= 2,
  ],
  [5, 5],
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
    [0.35, 0.2, 0],
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
  [1, 0],
  [60, 0],
  0,
  false,
);
