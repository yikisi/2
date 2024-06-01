const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  101041,
  '拂晓御旗『葛城荣主』！',
  '第三弯道位于领头时，速度少量提升并回复少量体力，若是东京竞马场中距离比赛则增加技能持续时间',
  10104,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.corner === 3 &&
      args.order === 1 &&
      args.track_id === 10006 &&
      args.distance_type === 3,
    (args) => args.corner === 3 && args.order === 1,
  ],
  [6, 5],
  [500, 500],
  [
    [27, 9, 0],
    [27, 9, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.035, 0],
    [0.25, 0.035, 0],
  ],
  [
    [1, 1, 0],
    [1, 1, 0],
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
