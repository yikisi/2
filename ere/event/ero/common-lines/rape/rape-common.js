const EroCommandLines = require('#/event/ero/common-lines/ero-command-lines');
const EroCommunications = require('#/event/ero/common-lines/interface/ero-communications');
const EroFucking = require('#/event/ero/common-lines/interface/ero-fucking');
const EroMakingOuts = require('#/event/ero/common-lines/interface/ero-making-outs');
const EroNormalItems = require('#/event/ero/common-lines/normal/items');
const EroNormalOrgy = require('#/event/ero/common-lines/normal/orgy');
const EroNormalSm = require('#/event/ero/common-lines/normal/sm');

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
      this.communications = new EroCommunications(this);
    }
    if (!exclude?.making_outs) {
      this.making_outs = new EroMakingOuts(this);
    }
    if (!exclude?.fucking) {
      this.fucking = new EroFucking(this);
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

module.exports = RapeCommandLines;
