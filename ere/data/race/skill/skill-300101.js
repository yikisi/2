const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  300101,
  '憧れのエール',
  'レース後半のコーナーで思いっきりの\n応援が届くとサイレンススズカの\n持久力が回復する',
  30010,
  2,
  4,
  0,
  [() => true, () => true],
  [
    (args) =>
      args.is_exist_chara_id === 1002 &&
      args.remain_distance_viewer_id >= 800 &&
      args.remain_distance_viewer_id <= 850,
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
    [550, 0, 0],
    [0, 0, 0],
  ],
  [
    [22, 0, 0],
    [0, 0, 0],
  ],
  [
    [1002, 0, 0],
    [0, 0, 0],
  ],
  [0, 0],
  [0, 0],
  0,
);
