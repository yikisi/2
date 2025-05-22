const InmonPlugin = require('#/data/ero/inmon-plugin');

module.exports = new InmonPlugin(
  60211,
  '性爱训练法',
  602,
  1,
  6,
  '通过性爱获取的基础属性+400%，可以获取技能点数，全训练加成-50%。',
  (args) => args.edu,
  360,
);
