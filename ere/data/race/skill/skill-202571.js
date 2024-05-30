const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202571,
  '未来を拓く奇跡',
  '更なる奇跡を起こすべく\nレース終盤に加速力が上がる＜短距離＞',
  20257,
  2,
  10,
  508,
  [() => true, () => true],
  [(args) => args.distance_type === 1 && args.phase_random === 2, () => false],
  [1.8, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [60, 0],
  1,
);
