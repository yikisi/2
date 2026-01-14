const EroLinesCommon = require('#/event/ero/common/interface/ero-lines-common');

class EroItems extends EroLinesCommon {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.part
   * @param {number} extra_flag.user
   */
  async use_lubricating_fluid(attacker, defender, hook, extra_flag) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.item
   * @param {number} extra_flag.user
   */
  async use_medicine(attacker, defender, hook, extra_flag) {}

  /** @param {CharaTalk} attacker */
  async condom(attacker) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async other_condom(attacker, defender) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.item
   * @param {number} extra_flag.[owner]
   * @param {number} extra_flag.part
   * @param {number} extra_flag.[stay]
   */
  async use_item(attacker, defender, hook, extra_flag) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.item
   * @param {number} extra_flag.owner
   * @param {number|string} extra_flag.part
   * @param {number} extra_flag.user
   */
  async take_off_item(attacker, defender, hook, extra_flag) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.item
   * @param {number} extra_flag.owner
   * @param {number|string} extra_flag.part
   * @param {number} extra_flag.user
   */
  async ask_use_item(attacker, defender, hook, extra_flag) {}
}

module.exports = EroItems;
