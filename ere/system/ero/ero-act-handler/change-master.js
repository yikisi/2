const era = require('#/era-electron');

const {
  change_ero_master,
  check_satisfied,
} = require('#/system/ero/sys-calc-ero-status');
const { get_characters_in_train } = require('#/system/ero/sys-prepare-ero');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/**
 * @param {number} without
 * @param {boolean} [shown=true]
 */
function change_master(without, shown = true) {
  const master = era.get('tflag:主导权');
  const candidate = get_characters_in_train().filter((e) => {
    const inmon = CharaInmon.get(e);
    return (
      e !== without &&
      sys_check_awake(e) &&
      check_satisfied(e) < 2 &&
      (master === e ||
        (inmon.slave === 0 &&
          (inmon.on(plugin_enum.tuna) || inmon.on(plugin_enum.meek))))
    );
  });
  let _new = master;
  if (!candidate.length) {
    _new = 0;
  } else if (candidate.indexOf(master) === -1) {
    _new = get_random_entry(candidate);
  }
  if (master !== _new) {
    change_ero_master(_new);
    if (shown) {
      era.print([get_chara_talk(_new).get_colored_name(), ' 取得了主导权……']);
    }
  }
}

module.exports = change_master;
