class HookArg {
  /** @type {number} */
  hook;
  /** @type {*} */
  arg;
  /** @type {boolean} */
  override;

  /**
   * @param {number} stage_id
   */
  constructor(stage_id) {
    this.hook = stage_id;
    this.arg = undefined;
    this.override = false;
  }
}

module.exports = HookArg;
