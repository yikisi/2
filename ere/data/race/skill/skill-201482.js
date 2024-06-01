const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201482,
  '放学后的乐趣',
  '下坡的时略微不容变得疲劳＜作战・追赶＞',
  20148,
  1,
  1,
  217,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 4 && args.slope === 2 && args.accumulatetime >= 10,
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
    [0.015, 0, 0],
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
  [20, 0],
  1,
  false,
);
