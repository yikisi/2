const { get } = require('#/era-electron');

const EroCommandLines = require('#/event/ero/common/ero-command-lines');
const EroNormalItems = require('#/event/ero/common/normal/items');
const EroNormalOrgy = require('#/event/ero/common/normal/orgy');
const EroNormalSm = require('#/event/ero/common/normal/sm');
const EroRapeCommunications = require('#/event/ero/common/rape/communications');
const EroRapeFucking = require('#/event/ero/common/rape/fucking');
const EroRapeMakingOuts = require('#/event/ero/common/rape/making-outs');

class RapeCommandLines extends EroCommandLines {
  /**
   * @param {CustomizedEro} root
   * @param [exclude]
   * @param {boolean} exclude.[communications]
   * @param {boolean} exclude.[making_outs]
   * @param {boolean} exclude.[fucking]
   * @param {boolean} exclude.[sm]
   * @param {boolean} exclude.[orgy]
   * @param {boolean} exclude.[items]
   */
  constructor(root, exclude) {
    super(root);
    if (!exclude?.communications) {
      this.communications = new EroRapeCommunications(this);
    }
    if (!exclude?.making_outs) {
      this.making_outs = new EroRapeMakingOuts(this);
    }
    if (!exclude?.fucking) {
      this.fucking = new EroRapeFucking(this);
    }
    if (!exclude?.sm) {
      this.sm = new EroNormalSm(this);
    }
    if (!exclude?.orgy) {
      this.orgy = new EroNormalOrgy(this);
    }
    if (!exclude?.items) {
      this.items = new EroNormalItems(this);
    }
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   * @param this_param
   */
  async run(attacker, defender, hook, extra_flag, this_param) {
    return await super.run(
      attacker,
      defender,
      hook,
      extra_flag,
      attacker.id === get('tflag:强奸'),
    );
  }
}

module.exports = RapeCommandLines;
