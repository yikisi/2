const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210072,
  '夢の途中',
  'レース後半に前の方だと速度がわずかに\n上がり、加速力がほんのわずかに上がる\nファンが多いほど効果が高まる',
  21007,
  1,
  2,
  263,
  [() => true, () => true],
  [
    (args) => args.distance_rate_after_random === 50 && args.order_rate <= 65,
    () => true,
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
    [0.15, 0.07, 0],
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
  [15, 15],
  1,
);
