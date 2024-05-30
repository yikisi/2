const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  10631,
  '打ち、鍛えて',
  'レースを冷静に運ぶことができると\nラストスパートの最中に\n速度をわずかに上げ続ける',
  1063,
  3,
  18,
  240,
  [() => true, () => true],
  [
    (args) =>
      args.is_lastspurt === 1 &&
      args.phase === 3 &&
      args.temptation_count === 0,
    () => false,
  ],
  [6, 0],
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
  [30, 0],
  0,
);
