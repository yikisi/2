const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200352,
  'コーナー回復○',
  '無駄のないコーナリングで\n持久力がわずかに回復する',
  20035,
  1,
  4,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.corner_random === 1 ||
      args.corner_random === 2 ||
      args.corner_random === 3 ||
      args.corner_random === 4,
    () => true,
  ],
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
    [150, 0, 0],
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
  [20, 0],
  1,
);
