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
  // eslint-disable-next-line no-unused-vars
  async use_lubricating_fluid(attacker, defender, hook, extra_flag) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param {number} extra_flag.item
   * @param {number} extra_flag.user
   */
  // eslint-disable-next-line no-unused-vars
  async use_medicine(attacker, defender, hook, extra_flag) {}

  /** @param {CharaTalk} attacker */
  // eslint-disable-next-line no-unused-vars
  async condom(attacker) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  // eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line no-unused-vars
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
  // eslint-disable-next-line no-unused-vars
  async ask_use_item(attacker, defender, hook, extra_flag) {}
}

module.exports = EroItems;
