const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202552,
  '快速',
  'レース後半のどこかでわずかに前に出て\n持久力をほんのわずかに回復する',
  20255,
  1,
  263,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => true],
  [3, 0],
  [500, 500],
  [
    [22, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1500, 35, 0],
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
  [2, 3],
  [10, 10],
  1,
);
