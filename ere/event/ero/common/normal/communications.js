const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroCommunications = require('#/event/ero/common/interface/ero-communications');

const { i18n } = require('#/i18n/selector');

class EroNormalCommunications extends EroCommunications {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async kiss(attacker, defender, hook) {
    await i18n().timon.ero_c.kiss(
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
    await i18n().timon.ero_c.french_kiss(attacker, defender, hook.arg);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async lure(attacker, defender, hook) {
    await i18n().timon.ero_c.lure(
      attacker,
      defender,
      (hook.arg = EroNormalCommunications.check_lure_success(
        attacker.id,
        defender.id,
      )),
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async talk(attacker, defender, hook) {
    await i18n().timon.ero_c.talk(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async switch(attacker, defender) {
    if (
      defender.id > 0 ||
      (!era.get(`tcvar:${defender.id}:脱力`) &&
        !era.get(`tcvar:${defender.id}:失神`))
    ) {
      await i18n().timon.ero_c.switch(
        attacker,
        defender,
        sys_get_colored_callname(defender.id, attacker.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{[success]:boolean}} extra
   */
  async resist(attacker, defender, hook, extra) {
    extra.success = EroCommunications.check_resist_success(
      attacker.id,
      defender.id,
    );
    await i18n().timon.ero_c.resist(
      attacker,
      defender,
      hook.arg,
      extra.success,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async gargle(attacker, defender, hook) {
    await i18n().timon.ero_c.gargle(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async wipe_body(attacker, defender, hook) {
    await i18n().timon.ero_c.wipe_body(attacker, defender);
  }
}

module.exports = EroNormalCommunications;
