const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  70112,
  '温顺',
  701,
  3,
  10,
  '不再主动求爱，调教时也不再做出反应。',
  (args) => args.id > 0,
  680,
);
