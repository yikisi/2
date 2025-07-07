const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60212,
  '禁果变强',
  602,
  3,
  16,
  '通过性爱获取的基础属性×16，可以获取技能点数，不再自主训练且全训练加成降到最低。',
  (args) => args.edu,
  980,
);
