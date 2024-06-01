const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100721,
  '烈火缭乱，无敌之舞',
  '最终弯道后完成超车，且在最后300米位于前方集团时，会燃起烈焰般的斗争心，提升速度',
  10072,
  5,
  18,
  340,
  [
    (args) => args.is_finalcorner === 1 && args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.remain_distance <= 300 && args.order_rate <= 40, () => false],
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
  false,
);
