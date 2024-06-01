const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106803111,
  '惊叹！卧龙出山',
  '在比赛终盘初段若余力十足则向前突进，并之后在最终直线处稍微再向前突进＜领放・长距离＞',
  10680311,
  6,
  26,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 1 &&
      args.phase_firsthalf_random === 2 &&
      args.lastspurt === 2,
    (args) =>
      args.is_activate_other_skill_detail === 1 && args.is_last_straight === 1,
  ],
  [3, 3],
  [500, 500],
  [
    [22, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0, 0],
    [0.15, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
  true,
);
