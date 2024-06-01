const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100641,
  '冠绝之路',
  '从起跑到比赛后半程一直保持在前列的话心情将变得超嗨回复持久力且速度逐渐上升',
  10064,
  5,
  17,
  340,
  [() => true, () => true],
  [
    (args) => args.distance_rate >= 50 && args.order_rate_in20_continue === 1,
    () => false,
  ],
  [6, 0],
  [500, 0],
  [
    [9, 27, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0.25, 0],
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
  [1, 2],
  [30, 30],
  0,
  false,
);
