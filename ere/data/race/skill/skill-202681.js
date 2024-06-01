const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202681,
  '气☆氛↑嗨起来',
  '在比赛中盘少量提升速度，并少量回复体力＜长距离＞',
  20268,
  2,
  10,
  633,
  [() => true, () => true],
  [(args) => args.distance_type === 4 && args.phase_random === 1, () => false],
  [2.4, 0],
  [500, 0],
  [
    [27, 9, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.35, 0.035, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 2],
  [30, 30],
  1,
  false,
);
