const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set('callname:52:52', '乌拉拉');
    era.set('callname:52:61', '小圣王');
  }
};
