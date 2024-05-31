const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10451,
  'クリアハート',
  'レース中盤で好位置にいる時に\n持久力が回復する',
  1045,
  3,
  17,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.phase_random === 1 && args.order >= 2 && args.order_rate <= 40,
    () => false,
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
  [30, 0],
  0,
  false,
);
