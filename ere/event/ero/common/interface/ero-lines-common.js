class EroLinesCommon {
  /** @type {EroCommandLines} */
  root;

  /** @param {EroCommandLines} root */
  constructor(root) {
    this.root = root;
  }

  get id() {
    return this.root.id;
  }

  get_this() {
    return this;
  }
}

module.exports = EroLinesCommon;
