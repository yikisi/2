const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201302,
  'リスタート',
  'レース序盤にハナを取れていないと\n前のウマ娘の動きをわずかに鈍くする\n＜作戦・逃げ＞',
  20130,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 1 &&
      args.phase_random === 0 &&
      args.order >= 2 &&
      args.accumulatetime >= 5,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-1000, 0, 0],
    [0, 0, 0],
  ],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [3, 5],
  [10, 10],
  1,
);
