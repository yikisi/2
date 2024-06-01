const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100441,
  '我赢定啦☆Strelitzia！',
  '进入最终弯道前能一直保持冷静在后方等待机会的话，会在距离终点剩余300m处发动加速魔法，速度持续上升',
  10044,
  5,
  18,
  340,
  [
    (args) =>
      args.order_rate_out50_continue === 1 &&
      args.temptation_count === 0 &&
      args.is_finalcorner === 1,
    () => true,
  ],
  [(args) => args.remain_distance <= 300, () => false],
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
