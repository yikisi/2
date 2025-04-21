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
 * @param {number} without_me
 * @param {boolean} [shown]
 */
function change_master(without_me, shown) {
  const master = era.get('tflag:主导权');
  const candidate = get_characters_in_train().filter((e) => {
    const inmon = CharaInmon.get(e);
    return (
      e !== without_me &&
      sys_check_awake(e) &&
      check_satisfied(e) < 2 &&
      (master === e || (inmon.slave === 0 && inmon.on(plugin_enum.tuna)))
    );
  });
  let new_master = master;
  if (!candidate.length) {
    new_master = 0;
  } else if (candidate.indexOf(master) === -1) {
    new_master = get_random_entry(candidate);
  }
  if (master !== new_master) {
    change_ero_master(new_master);
    if (shown !== false) {
      era.print([
        get_chara_talk(new_master).get_colored_name(),
        ' 取得了主导权……',
      ]);
    }
  }
}

module.exports = change_master;
