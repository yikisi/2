const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110411,
  '樱桃色☆飞天流',
  '比赛剩余400m处位于前三名，则短时间内略微提升加速度，在中盘竞争持续时间越长，则技能效果越好，技能持续时间越长',
  11041,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.order <= 3 &&
      args.remain_distance <= 401 &&
      args.remain_distance >= 399,
    () => false,
  ],
  [1, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [20, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.1, 0, 0],
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
  [3, 0],
  [60, 0],
  0,
  false,
);
