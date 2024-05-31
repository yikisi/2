const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200481,
  'どこ吹く風',
  'レース中盤に囲まれると\n持久力が回復する',
  20048,
  2,
  9,
  508,
  [() => true, () => true],
  [(args) => args.phase === 1 && args.is_surrounded === 1, () => false],
  [0, 0],
  [500, 0],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.055, 0, 0],
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
  [2, 0],
  [60, 0],
  1,
  false,
);
