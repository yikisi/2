const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50212,
  '不知疲倦',
  502,
  2,
  14,
  '不会疲惫及伤病。',
  (args) => args.id > 0 && args.chara !== undefined,
  820,
);
