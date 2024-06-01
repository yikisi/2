const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  105101211,
  '绽放的决心',
  '身处下坡时，加速力提升＜作战・先行＞',
  10510121,
  6,
  26,
  394,
  [() => true, () => true],
  [
    (args) => args.running_style === 2 && args.down_slope_random === 1,
    () => false,
  ],
  [3, 0],
  [500, 0],
  [
    [31, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.4, 0, 0],
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
  [40, 0],
  1,
  false,
);
