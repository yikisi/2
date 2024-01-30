class EroParticipant {
  id;
  part;
  times;

  /**
   * @param {number} id character id
   * @param {number} part character part
   * @param {number} [buff] extra buff of attack
   */
  constructor(id, part, buff) {
    this.id = id;
    this.part = part;
    this.times = 1 + (buff || 0);
    if (this.times < 0) {
      this.times = 0;
    }
  }
}

module.exports = EroParticipant;
