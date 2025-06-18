const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  50221,
  '无暇思考',
  502,
  1,
  2,
  '不再有不应期。',
  (args) => args.sex > 0,
  160,
);
