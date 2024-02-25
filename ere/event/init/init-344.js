const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set(
      'callname:344:-2',
      `都留歧${era.get('cflag:344:性别') === 1 ? '先生' : '女士'}`,
    );
  }
};
