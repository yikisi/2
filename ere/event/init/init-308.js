const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set(
      'callname:308:-2',
      `光辉${era.get('cflag:308:性别') === 1 ? '先生' : '小姐'}`,
    );
  }
};
