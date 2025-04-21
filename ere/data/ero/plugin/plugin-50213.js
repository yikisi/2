const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50213,
  '欢愉之骨',
  502,
  3,
  32,
  '不会疲惫、伤病或怀孕。',
  (args) => args.id > 0 && args.sex !== 1 && args.pregnant === false,
  1780,
);
