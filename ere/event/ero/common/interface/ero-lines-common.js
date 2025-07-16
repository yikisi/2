class EroLinesCommon {
  /** @type {EroCommandLines} */
  root;

  /** @param {EroCommandLines} root */
  constructor(root) {
    this.root = root;
  }

  get_this() {
    return this;
  }
}

module.exports = EroLinesCommon;
