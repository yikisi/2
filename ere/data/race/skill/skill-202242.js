const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  202242,
  '小回り○',
  '小回りのコースが少し得意になる',
  20224,
  1,
  0,
  129,
  [() => true, () => true],
  [
    (args) =>
      args.track_id === 10001 ||
      args.track_id === 10002 ||
      args.track_id === 10004 ||
      args.track_id === 10010 ||
      args.track_id === 10103 ||
      args.track_id === 10104,
    () => true,
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
    [400000, 0, 0],
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
  [30, 0],
  0,
);
