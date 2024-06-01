const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  100871,
  'Silent letter',
  '剩余400米，位于前方并被后方马娘紧追时，跑法让粉丝心中留下深刻印象，使自身更容易突围',
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
    () => false,
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
  false,
);
