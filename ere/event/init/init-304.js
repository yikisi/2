const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set('callname:304:-2', '桐生院训练员');
  }
};
