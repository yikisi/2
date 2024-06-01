const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200462,
  '加快步伐',
  '比赛中盘超过别人时，速度略微加快',
  20046,
  1,
  2,
  217,
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
