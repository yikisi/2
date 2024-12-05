const era = require('#/era-electron');

const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');

const { log_7 } = require('#/utils/value-utils');

class EroCommunications {
  /** @type {EroCommandLines} */
  root;

  /**
   * @param {number} attacker
   * @param {number} defender
   */
  static check_lure_success(attacker, defender) {
    return (
      (!defender || era.get(`love:${defender}`) >= 50) &&
      !era.get(`tcvar:${defender}:发情`) &&
      Math.random() < Math.log(era.get(`abl:${attacker}:甜言蜜语`) + 2) / log_7
    );
  }

  /**
   * @param {number} attacker
   * @param {number} defender
   */
  static check_resist_success(attacker, defender) {
    const ratio = sys_get_strength_ratio_in_fight(attacker, defender);
    era.logger.debug(`角色 ${attacker} 逆推概率：${(ratio * 100).toFixed(2)}%`);
    return ratio >= 1 || (ratio > 0 && Math.random() < ratio);
  }

  /** @param {EroCommandLines} root */
  constructor(root) {
    this.root = root;
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  // eslint-disable-next-line no-unused-vars
  async go_on(attacker, defender) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async kiss(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async french_kiss(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async relax(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async lure(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async talk(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  // eslint-disable-next-line no-unused-vars
  async switch(attacker, defender) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{[success]:boolean}} extra_flag
   */
  // eslint-disable-next-line no-unused-vars
  async resist(attacker, defender, hook, extra_flag) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async gargle(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async wipe_body(attacker, defender, hook) {}
}

module.exports = EroCommunications;
