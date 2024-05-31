const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200442,
  '隠れ蓑',
  'レース序盤または中盤に前が詰まると\n隠れて持久力がわずかに回復し\nコース取りがわずかにうまくなる',
  20044,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.phase <= 1 &&
      args.accumulatetime >= 5 &&
      args.blocked_front_continuetime >= 1,
    () => false,
  ],
  [2, 0],
  [500, 0],
  [
    [9, 28, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.015, 0.015, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [2, 0],
  [20, 0],
  1,
  false,
);
