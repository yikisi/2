const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  300101,
  '憧憬的应援',
  '在比赛后段的弯道上，无声铃鹿感受到众人的祈愿，因此恢复耐力。',
  30010,
  2,
  9,
  0,
  [() => true, () => true],
  [
    (args) =>
      args.is_exist_chara_id === 1002 &&
      args.remain_distance_viewer_id >= 800 &&
      args.remain_distance_viewer_id <= 850,
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
    [0.055, 0, 0],
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
  false,
);
