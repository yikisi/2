const { get, set } = require('#/era-electron');

/** @returns {Record<string,number>[]} */
function sys_get_grand_lives() {
  return get('flag:大舞台') || set('flag:大舞台', [{}]);
}

module.exports = sys_get_grand_lives;
