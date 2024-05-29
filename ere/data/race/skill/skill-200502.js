const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200502,
  '臨機応変',
  'レース終盤にコース取りが\n少しうまくなる',
  20050,
  1,
  129,
  [() => true, () => true],
  [(args) => args.phase_random === 2, () => true],
  [3, 0],
  [500, 500],
  [
    [28, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [250, 0, 0],
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
  [3, 0],
  [25, 0],
  1,
);
