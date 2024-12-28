const EroLinesCommon = require('#/event/ero/common-lines/interface/ero-lines-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

class EroOrgy extends EroLinesCommon {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_supporter_prepare_virgin(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_double_suck_nipple(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async double_suck_nipple(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_double_blow_job(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async double_blow_job(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_double_cunnilingus(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async double_cunnilingus(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_double_suck_virgin(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async double_suck_virgin(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_double_tit_job(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async double_tit_job(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_cunnilingus_with_fucking(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async fuck_69(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_double_fuck(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_double_penetration(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_spit_roast(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async ask_spit_roast_anal_sex(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async double_fuck(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async double_penetration(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async spit_roast(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async spit_roast_anal_sex(attacker, defender, supporter, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{supporter:number}} extra_flag
   */
  async run(attacker, defender, hook, extra_flag) {
    return await this[ero_hooks.keys[hook.hook]].call(
      this,
      attacker,
      defender,
      get_chara_talk(extra_flag.supporter),
      hook,
    );
  }
}

module.exports = EroOrgy;
