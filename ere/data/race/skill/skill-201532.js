const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  201532,
  '先行のコツ○',
  '良い位置に少しつきやすくなる\n＜作戦・先行＞',
  20153,
  1,
  0,
  174,
  [() => true, () => true],
  [(args) => args.running_style === 2, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [5, 8, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 5, 0],
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
  [3, 5],
  [10, 20],
  0,
  false,
);
