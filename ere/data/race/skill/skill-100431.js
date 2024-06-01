const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100431,
  '噔！咚！！砰！！！',
  '名次争夺时，速度稍稍上升。若是身处沙土比赛，则会以要噬咬前方选手般的气势进一步提升加速度',
  10043,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.compete_fight_count > 0 && args.ground_type === 2,
    (args) => args.compete_fight_count > 0,
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
    [0.25, 0.4, 0],
    [0.25, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
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
