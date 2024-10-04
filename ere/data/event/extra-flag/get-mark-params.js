const EroExtraFlagCommon = require('#/data/event/extra-flag/ero-extra-common');

class GetMarkParams extends EroExtraFlagCommon {
  /**
   * @param {number} level
   * @param {string} name
   * @param {boolean} _new
   */
  constructor(level, name, _new) {
    super();
    this.level = level;
    this.name = name;
    this.new = _new;
  }
}

module.exports = GetMarkParams;
