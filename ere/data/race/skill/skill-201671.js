const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201671,
  'チャート急上昇！',
  'レース中盤に競り合うと\n速度が上がる＜ダート＞',
  20167,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.phase === 1 &&
      args.blocked_side_continuetime >= 2,
    () => true,
  ],
  [2.4, 0],
  [500, 500],
  [
    [27, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
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
  1,
);
