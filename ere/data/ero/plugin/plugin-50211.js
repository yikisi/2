const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50211,
  '金身不坏',
  502,
  1,
  6,
  '不会伤病。',
  (args) => args.id > 0 && args.chara !== undefined,
  360,
);
