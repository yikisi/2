const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110131,
  '赌上最强之名',
  '比赛终盘最终弯道处于前方时被超越时，速度持续上升',
  11013,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.phase >= 2 &&
      args.is_finalcorner === 1 &&
      args.order <= 4 &&
      args.overtake_target_time >= 1,
    () => false,
  ],
  [6, 0],
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
  false,
);
