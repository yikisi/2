const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201471,
  '视野良好！没有异常！',
  '左右移动的时候能更好的把握状况，视野更加开阔＜作战・追赶＞',
  20147,
  2,
  10,
  334,
  [() => true, () => true],
  [
    (args) =>
      (args.running_style === 4 && args.is_move_lane === 1) ||
      (args.running_style === 4 && args.is_move_lane === 2),
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [8, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [10, 0, 0],
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
  [3, 0],
  [40, 0],
  1,
  false,
);
