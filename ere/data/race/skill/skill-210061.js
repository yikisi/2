const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  210061,
  '一番星',
  '赛程后半调整呼吸并向前迈进。育成中积累的胜利次数越多，速度、加速度、耐力回复量越高',
  21006,
  2,
  10,
  633,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => false],
  [1.2, 0],
  [500, 0],
  [
    [27, 31, 9],
    [0, 0, 0],
  ],
  [
    [10, 10, 10],
    [1, 1, 1],
  ],
  [
    [0.25, 0.3, 0.035],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  1,
  false,
);
