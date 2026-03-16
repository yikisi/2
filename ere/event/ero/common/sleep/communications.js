const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroCommunications = require('#/event/ero/common/interface/ero-communications');

const { i18n } = require('#/i18n/selector');

class EroSleepCommunications extends EroCommunications {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async kiss(attacker, defender, hook) {
    await i18n().timon.ero_s.kiss(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async french_kiss(attacker, defender, hook) {
    await i18n().timon.ero_s.french_kiss(
      attacker,
      defender,
      hook.arg,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }
}

module.exports = EroSleepCommunications;
