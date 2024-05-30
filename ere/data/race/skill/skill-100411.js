const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100411,
  '優等生×バクシン＝大勝利ッ',
  'レース後半に前の方で競り合うと\nバクシン力（？）を発揮、速度が上がる',
  10041,
  4,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.order <= 3 &&
      args.blocked_side_continuetime >= 2,
    () => false,
  ],
  [5, 0],
  [500, 0],
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
  0,
);
