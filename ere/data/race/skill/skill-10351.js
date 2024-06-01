const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10351,
  '全力V字手势！',
  '最终弯道之后进行名次争夺，在最终直线位于前方时，涌现出不服输的强烈求胜心，速度少量加快',
  1035,
  3,
  18,
  240,
  [
    (args) => args.is_finalcorner === 1 && args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [(args) => args.is_last_straight === 1 && args.order <= 5, () => false],
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
    [0.25, 0, 0],
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
  [30, 0],
  0,
  false,
);
