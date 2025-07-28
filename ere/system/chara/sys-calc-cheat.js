const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

module.exports = {
  /**
   * @param {number} cid
   * @param {CharaInmon} inmon
   * @returns {boolean}
   */
  sys_check_cuckold(cid, inmon = CharaInmon.get(cid)) {
    return era.get(`talent:${cid}:绿帽癖`) > 0 || inmon.on(plugin_enum.ntr);
  },
  /**
   * @param {number} cid
   * @param {function(number):boolean} [cb]
   * @param {CharaInmon} [inmon]
   * @returns {boolean}
   */
  sys_check_yandere(cid, cb = (e) => e > 0, inmon = CharaInmon.get(cid)) {
    return (
      cb(era.get(`talent:${cid}:病娇`)) &&
      era.get(`talent:${cid}:绿帽癖`) === 0 &&
      !inmon.on(plugin_enum.no_yand) &&
      !inmon.on(plugin_enum.ntr)
    );
  },
};
