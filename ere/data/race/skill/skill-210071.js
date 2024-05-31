const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210071,
  'キミと勝ちたい',
  'レース後半に前の方だと速度が上がり\nさらに加速力がわずかに上がる\nファンが多いほど効果が高まる',
  21007,
  2,
  10,
  633,
  [() => true, () => true],
  [
    (args) => args.distance_rate_after_random === 50 && args.order_rate <= 65,
    () => false,
  ],
  [1.2, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [12, 12, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.2, 0],
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
  [1, 3],
  [30, 30],
  1,
  false,
);
