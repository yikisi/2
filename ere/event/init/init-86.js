const { set } = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    set('callname:86:17', ['鲁铎', '露娜']);
  }
};
