const era = require('#/era-electron');

/** @type {Record<string,number>} */
let global_object = {};

const sys_personal_achievement = {
  /**
   * @param {number} chara_id
   * @returns {number}
   */
  get(chara_id) {
    return global_object[chara_id] || 0;
  },
  /**
   * @param {number} chara_id
   * @param {number} _val
   */
  set(chara_id, _val) {
    return (global_object[chara_id] = _val);
  },
  init() {
    return (global_object =
      era.get('global:角色成就') || era.set('global:角色成就', {}));
  },
  list() {
    return Object.entries(global_object)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
  },
};

module.exports = sys_personal_achievement;
