const era = require('#/era-electron');

/** @returns {{chara:number,cost:number}} */
function sys_get_star_premium_draw() {
  return era.get('flag:超得') || era.set('flag:超得', { chara: 0, cost: 0 });
}

module.exports = sys_get_star_premium_draw;
