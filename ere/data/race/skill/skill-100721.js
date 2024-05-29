const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100721,
  '烈火繚乱、無敵之舞',
  '最終コーナー以降に追い抜いていた場合\n残り300mを切って先団にいるとき\n烈火の如き闘争心で速度が上がる',
  10072,
  5,
  340,
  [
    (args) => args.is_finalcorner === 1 && args.change_order_onetime < 0,
    () => true,
  ],
  [(args) => args.remain_distance <= 300 && args.order_rate <= 40, () => true],
  [5, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
