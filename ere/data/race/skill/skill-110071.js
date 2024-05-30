const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  110071,
  'Adventure of 564',
  'レース後半どっかで速度をわずかに上げ\nついでに使えそうなレアスキルを2つ\n条件を無視して発動させる',
  11007,
  5,
  18,
  340,
  [() => true, () => true],
  [(args) => args.distance_rate_after_random === 50, () => false],
  [5, 0],
  [500, 0],
  [
    [27, 37, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [0.15, 2, 0],
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
  [1, 0],
  [60, 0],
  0,
);
