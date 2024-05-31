const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201261,
  'シックスセンス',
  'レース序盤に前が詰まるか競り合うと\nコース取りが上手くなり\nバ場の真ん中に向かって移動する\n＜作戦・逃げ＞',
  20126,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 1 &&
        args.phase === 0 &&
        args.blocked_front_continuetime >= 1) ||
      (args.running_style === 1 &&
        args.phase === 0 &&
        args.blocked_side_continuetime >= 1),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [28, 35, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.035, 0.5, 0],
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
  [3, 0],
  [60, 0],
  1,
  false,
);
