const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200632,
  '机能拔群',
  '在比赛终盘位于后方时，最后冲刺阶段的中段，速度稍微提升＜作战・追赶＞',
  20063,
  1,
  2,
  217,
  [(args) => args.phase === 2 && args.distance_diff_rate >= 50, () => true],
  [
    (args) =>
      args.running_style === 4 &&
      args.phase_firsthalf_random === 3 &&
      args.is_lastspurt === 1,
    () => false,
  ],
  [3, 0],
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
    [0.15, 0, 0],
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
  [20, 0],
  1,
  false,
);
