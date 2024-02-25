const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set(
      'callname:343:-2',
      `佐岳${era.get('cflag:343:性别') === 1 ? '先生' : '女士'}`,
    );
  }
};
