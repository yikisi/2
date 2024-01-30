const era = require('#/era-electron');

module.exports = (is_reset) => {
  if (!is_reset) {
    era.set('callname:306:-2', '㭴本代理理事长');
  }
};
