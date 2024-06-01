const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202241,
  '小弯道◎',
  '擅长小弯道的比赛',
  20224,
  1,
  0,
  174,
  [() => true, () => true],
  [
    (args) =>
      args.track_id === 10001 ||
      args.track_id === 10002 ||
      args.track_id === 10004 ||
      args.track_id === 10010 ||
      args.track_id === 10103 ||
      args.track_id === 10104,
    () => false,
  ],
  [-0.0001, 0],
  [0, 0],
  [
    [5, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [60, 0, 0],
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
  [5, 0],
  [45, 0],
  0,
  false,
);
