const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202361,
  '油断大敵',
  'レース後半に息を入れたウマ娘を\n萎縮させる＜ダート＞',
  20236,
  2,
  508,
  [() => true, () => true],
  [
    (args) =>
      args.ground_type === 2 &&
      args.distance_rate >= 50 &&
      args.is_other_character_activate_advantage_skill === 9,
    () => true,
  ],
  [3, 0],
  [500, 500],
  [
    [21, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [-2500, 0, 0],
    [0, 0, 0],
  ],
  [
    [23, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
  ],
  [1, 5],
  [30, 30],
  1,
);
