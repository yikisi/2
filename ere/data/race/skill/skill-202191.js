const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202191,
  '一意専心',
  '出遅れずにスタートを切れると\n中盤始めの方で持久力をすごく回復する\n＜先行・長距離＞',
  20219,
  2,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.is_badstart === 0 &&
      args.running_style === 2 &&
      args.distance_type === 4 &&
      args.phase_firsthalf_random === 1,
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
    [750, 0, 0],
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
  [60, 0],
  1,
);
