const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110061,
  '圣夜的奇迹奔跑！',
  '使用技能恢复3次以上的持久力后会在比赛后半部分调整呼吸奋力向胜利迈进',
  11006,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.activate_count_heal >= 3 && args.distance_rate >= 50,
    () => false,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 9],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.3, 0.035],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
  false,
);
