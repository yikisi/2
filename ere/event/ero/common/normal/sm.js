const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroSm = require('#/event/ero/common/interface/ero-sm');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { part_enum } = require('#/data/ero/part-const');

const { i18n } = require('#/i18n/selector');

class EroNormalSm extends EroSm {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async insult(attacker, defender, hook) {
    await i18n().timon.ero_c.insult(attacker, defender);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_insult(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() > 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
      return;
    }
    await this.insult(defender, attacker, hook);
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hit_anal(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() > 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hit_breast(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() > 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hit_face_by_penis(attacker, defender, hook) {
    await i18n().timon.ero_c.hit_face_by_penis(
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
  async ask_hit_face(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        Math.random() > 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_virgin_foot_job(attacker, defender, hook) {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.clitoris,
        part_enum.foot,
      ))
    ) {
      await (
        Math.random() > 0.5
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
    }
  }
}

module.exports = EroNormalSm;
