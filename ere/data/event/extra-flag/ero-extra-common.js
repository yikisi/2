const ExtraFlagCommon = require('#/data/event/extra-flag/common');

class EroExtraFlagCommon extends ExtraFlagCommon {
  /** @type {boolean} */
  shown;

  /** @param {boolean} shown */
  set_shown(shown) {
    this.shown = shown;
    return this;
  }
}

module.exports = EroExtraFlagCommon;
