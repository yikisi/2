const era = require('#/era-electron');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

module.exports = {
  /**
   * @param {number} id
   * @param {CharaInmon} inmon
   */
  sys_check_cuckold(id, inmon = CharaInmon.get(id)) {
    return era.get(`talent:${id}:绿帽癖`) > 0 || inmon.on(plugin_enum.ntr);
  },
  /**
   * @param {number} id
   * @param {function(number):boolean} [cb]
   * @param {CharaInmon} [inmon]
   */
  sys_check_yandere(id, cb = (e) => e > 0, inmon = CharaInmon.get(id)) {
    return (
      cb(era.get(`talent:${id}:病娇`)) &&
      !inmon.on(plugin_enum.no_yand) &&
      !inmon.on(plugin_enum.ntr)
    );
  },
};
