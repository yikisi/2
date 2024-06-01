const UmaSkill = require('#/data/race/model/uma-skill');

module.exports = new UmaSkill(
  200292,
  '彻底标记○',
  '与人气第一的马娘选择相同战术时能力稍微更容易发挥',
  20029,
  1,
  0,
  129,
  [() => true, () => true],
  [(args) => args.running_style_equal_popularity_one === 1, () => false],
  [-0.0001, 0],
  [0, 0],
  [
    [4, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [40, 0, 0],
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
  [4, 0],
  [30, 0],
  0,
  false,
);
