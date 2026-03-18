const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroFucking = require('#/event/ero/common/interface/ero-fucking');

const { i18n } = require('#/i18n/selector');

class EroSleepFucking extends EroFucking {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async missionary(attacker, defender, hook) {
    await i18n().timon.ero_s.missionary(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async missionary_anal_sex(attacker, defender, hook) {
    await i18n().timon.ero_s.missionary(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      false,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async doggy_style(attacker, defender, hook) {
    await i18n().timon.ero_s.doggy_style(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async doggy_style_anal_sex(attacker, defender, hook) {
    await i18n().timon.ero_s.doggy_style(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot(attacker, defender, hook) {
    await i18n().timon.ero_s.stimulate_g_spot(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_womb(attacker, defender, hook) {
    await i18n().timon.ero_s.stimulate_womb(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cowgirl(attacker, defender, hook) {
    await i18n().timon.ero_s.cowgirl(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cowgirl_anal_sex(attacker, defender, hook) {
    await i18n().timon.ero_s.cowgirl(
      attacker,
      defender,
      sys_get_colored_callname(attacker.id, defender.id),
      false,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_virgin(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_s.stimulate_glans_by_hole(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
      );
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_anal(attacker, defender, hook) {
    if (hook.arg) {
      await i18n().timon.ero_s.stimulate_glans_by_hole(
        attacker,
        defender,
        sys_get_colored_callname(attacker.id, defender.id),
        false,
      );
    }
  }
}

module.exports = EroSleepFucking;
