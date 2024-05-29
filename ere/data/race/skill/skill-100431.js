const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100431,
  'Ding Dong Boo',
  '追い比べをしたとき、速度を少し上げる\nダートレースでは嚙みつかんばかりの\n気迫でさらに加速力を上げる',
  10043,
  5,
  340,
  [() => true, () => true],
  [
    (args) => args.compete_fight_count > 0 && args.ground_type === 2,
    (args) => args.compete_fight_count > 0,
  ],
  [5, 5],
  [500, 500],
  [
    [27, 31, 0],
    [27, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [2500, 4000, 0],
    [2500, 0, 0],
  ],
  [
    [1, 1, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [1, 3],
  [30, 30],
  0,
);
