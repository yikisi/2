const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200461,
  '冲过来了!',
  '比赛中盘超过别人时，速度加快',
  20046,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.change_order_onetime < 0, () => false],
  [1.8, 0],
  [30, 0],
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
  1,
  false,
);
