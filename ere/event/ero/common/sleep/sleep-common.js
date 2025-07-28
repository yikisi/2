const EroCommandLines = require('#/event/ero/common/ero-command-lines');
const EroOrgy = require('#/event/ero/common/interface/ero-orgy');
const EroSm = require('#/event/ero/common/interface/ero-sm');
const EroNormalItems = require('#/event/ero/common/normal/items');
const EroSleepCommunications = require('#/event/ero/common/sleep/communications');
const EroSleepFucking = require('#/event/ero/common/sleep/fucking');
const EroSleepMakingOuts = require('#/event/ero/common/sleep/making-outs');

class SleepCommandLines extends EroCommandLines {
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
      this.communications = new EroSleepCommunications(this);
    }
    if (!exclude?.making_outs) {
      this.making_outs = new EroSleepMakingOuts(this);
    }
    if (!exclude?.fucking) {
      this.fucking = new EroSleepFucking(this);
    }
    if (!exclude?.sm) {
      this.sm = new EroSm(this);
    }
    if (!exclude?.orgy) {
      this.orgy = new EroOrgy(this);
    }
    if (!exclude?.items) {
      this.items = new EroNormalItems(this);
    }
  }
}

module.exports = SleepCommandLines;
