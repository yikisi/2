class EroBodyPart {
  owner;
  part;
  item;

  /**
   * @param {number} owner
   * @param {number} part
   * @param {number} item
   */
  constructor(owner, part, item) {
    this.owner = owner;
    this.part = part;
    this.item = item;
  }
}

module.exports = EroBodyPart;
