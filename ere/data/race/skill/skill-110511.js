const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110511,
  'Flowering Dreams',
  '在剩余200m的地点自身位于第二名与中间队伍之间的位置时，速度提升，且附近赛马娘数量达3人以上时再稍微向前突进',
  11051,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order >= 2 &&
      args.order_rate <= 70 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199 &&
      args.near_count >= 3,
    (args) =>
      args.order >= 2 &&
      args.order_rate <= 70 &&
      args.remain_distance <= 201 &&
      args.remain_distance >= 199,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 22, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.15, 0],
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
