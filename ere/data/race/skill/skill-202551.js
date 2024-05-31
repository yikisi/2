const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202551,
  '神速',
  'レース後半のどこかで前に出て\n持久力をわずかに回復する',
  20255,
  2,
  10,
  633,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => false],
  [3, 0],
  [500, 0],
  [
    [22, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.015, 0],
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
  [30, 30],
  1,
  false,
);
