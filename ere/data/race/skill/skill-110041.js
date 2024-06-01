const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110041,
  '直击心脏♪Chu',
  '赛程后半位于前方时如果通过技能回复了持久力，LET’S GO！速度加快',
  11004,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.distance_rate >= 50 &&
      args.activate_count_heal >= 1 &&
      args.order <= 3,
    () => false,
  ],
  [5, 0],
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
    [0.35, 0, 0],
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
  [60, 0],
  0,
  false,
);
