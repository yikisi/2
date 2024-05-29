const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  106803111,
  'あっぱれ！臥竜勇往',
  'レース終盤始めの方で余力十分なら前に\n出る、その後最終直線でわずかに\n前に出る＜逃げ・長距離＞',
  10680311,
  6,
  633,
  [() => true, () => true],
  [
    (args) =>
      args.distance_type === 4 &&
      args.running_style === 1 &&
      args.phase_firsthalf_random === 2 &&
      args.lastspurt === 2,
    (args) =>
      args.is_activate_other_skill_detail === 1 && args.is_last_straight === 1,
  ],
  [3, 3],
  [500, 500],
  [
    [22, 0, 0],
    [22, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [3500, 0, 0],
    [1500, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  [3, 0],
  [60, 0],
  1,
);
