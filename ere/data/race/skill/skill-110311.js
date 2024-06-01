const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110311,
  '清新☆茶室',
  '比赛中盘开头位于前方时，速度少量持续上升，并少量回复持久力',
  11031,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) => args.phase_firsthalf_random === 1 && args.order_rate <= 30,
    () => false,
  ],
  [6, 0],
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
    [0.25, 0.035, 0],
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
  0,
  false,
);
