const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const EroOrgy = require('#/event/ero/common/interface/ero-orgy');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

class EroNormalOrgy extends EroOrgy {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_blow_job(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.ask_double_blow_job(
      attacker,
      defender,
      supporter,
      hook.arg,
      di18n.feature.n_penis[get_penis_size(attacker.id)],
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_fuck(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.ask_double_fuck(
      attacker,
      defender,
      supporter,
      hook.arg,
      di18n.feature.n_penis[get_penis_size(defender.id)],
      di18n.feature.n_penis[get_penis_size(supporter.id)],
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_penetration(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.ask_double_penetration(
      attacker,
      defender,
      supporter,
      hook.arg,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_spit_roast(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.ask_spit_roast(
      attacker,
      defender,
      supporter,
      hook.arg,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_spit_roast_anal_sex(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.ask_spit_roast(
      attacker,
      defender,
      supporter,
      hook.arg,
      false,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async fuck_69(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.fuck_69(
      attacker,
      defender,
      supporter,
      hook.arg,
      get_penis_size(defender.id) > 0,
      get_penis_size(supporter.id) > 0,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async double_fuck(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.double_fuck(
      attacker,
      defender,
      supporter,
      hook.arg,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async double_penetration(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.double_penetration(
      attacker,
      defender,
      supporter,
      hook.arg,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async spit_roast(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.spit_roast(
      attacker,
      defender,
      supporter,
      hook.arg,
    );
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async spit_roast_anal_sex(attacker, defender, supporter, hook) {
    await i18n().timon.ero_c.spit_roast(
      attacker,
      defender,
      supporter,
      hook.arg,
      false,
    );
  }
}

module.exports = EroNormalOrgy;
