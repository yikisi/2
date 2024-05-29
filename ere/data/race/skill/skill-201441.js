const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201441,
  '八方にらみ',
  'レース終盤に他のウマ娘が\n動揺する＜作戦・差し＞',
  20144,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.running_style === 3 &&
      args.phase_random === 2 &&
      args.order_rate > 50,
    () => true,
  ],
  [0, 0],
  [500, 500],
  [
    [9, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-300, 0, 0],
    [0, 0, 0],
  ],
  [
    [4, 0, 0],
    [0, 0, 0],
  ],
  [
    [18, 0, 0],
    [0, 0, 0],
  ],
  [2, 5],
  [30, 30],
  1,
);
