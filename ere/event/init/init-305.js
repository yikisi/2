const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set('callname:305:-2', '安心泽医生');
  }
};
