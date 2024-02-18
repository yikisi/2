const era = require('#/era-electron');

/** @returns {{chara:number,time:number}} */
function sys_get_star_premium_draw() {
  return era.get('flag:超得') || era.set('flag:超得', { chara: 0, time: 1 });
}

module.exports = sys_get_star_premium_draw;
