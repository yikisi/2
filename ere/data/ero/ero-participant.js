class EroParticipant {
  /** @type {number} */
  id;
  /** @type {number} */
  part;
  /** @type {number} */
  times;

  /**
   * @param {number} id character id
   * @param {number} part character part
   * @param {number} [buff] extra buff of attack
   */
  constructor(id, part, buff = 0) {
    this.id = id;
    this.part = part;
    this.times = Math.max(1 + buff, 0.01);
  }
}

module.exports = EroParticipant;
