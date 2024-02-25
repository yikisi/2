const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set('callname:32:0', '豚鼠君');
  }
};
