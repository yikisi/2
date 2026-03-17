const EroItems = require('#/event/ero/common/interface/ero-items');

const { i18n } = require('#/i18n/selector');

class EroNormalItems extends EroItems {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra
   * @param {number} extra.item
   * @param {number} extra.user
   */
  async use_medicine(attacker, defender, hook, extra) {
    await i18n().timon.ero_c.use_medicine(
      extra.user === defender.id ? defender : attacker,
      extra.item,
    );
  }
}

module.exports = EroNormalItems;
