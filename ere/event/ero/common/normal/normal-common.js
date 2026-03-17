const EroCommandLines = require('#/event/ero/common/ero-command-lines');
const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const EroNormalItems = require('#/event/ero/common/normal/items');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');
const EroNormalOrgy = require('#/event/ero/common/normal/orgy');
const EroNormalSm = require('#/event/ero/common/normal/sm');

class NormalCommandLines extends EroCommandLines {
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
      this.communications = new EroNormalCommunications(this);
    }
    if (!exclude?.making_outs) {
      this.making_outs = new EroNormalMakingOuts(this);
    }
    if (!exclude?.fucking) {
      this.fucking = new EroNormalFucking(this);
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
}

module.exports = NormalCommandLines;
