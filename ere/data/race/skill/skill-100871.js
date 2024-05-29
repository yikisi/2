const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100871,
  'Silent letter',
  '残り400mを切って前の方で\n詰め寄られるとファンの心に残る走りで\n抜け出しやすくなる',
  10087,
  5,
  18,
  340,
  [() => true, () => true],
  [
    (args) =>
      args.remain_distance <= 400 &&
      args.order <= 2 &&
      args.overtake_target_time >= 1,
    () => true,
  ],
  [5, 0],
  [500, 0],
  [
    [27, 31, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.25, 0.3, 0],
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
  [1, 3],
  [30, 30],
  0,
);
