const era = require('#/era-electron');

class ExtraBase {
  /** @returns {[number,number,number]} */
  get #obj() {
    // FLAGNAME:额外资源
    return era.get('flag:9') || era.set('flag:9', [0, 0, 0]);
  }

  /** @returns {number} */
  get stamina() {
    return this.#obj[0];
  }

  /** @param {number} v */
  set stamina(v) {
    this.#obj[0] = v;
  }

  /** @returns {number} */
  get time() {
    return this.#obj[1];
  }

  /** @param {number} v */
  set time(v) {
    this.#obj[1] = v;
  }

  /** @returns {number} */
  get skill() {
    return this.#obj[2] || 0;
  }

  /** @param {number} v */
  set skill(v) {
    this.#obj[2] = v;
  }
}

const extra_base = new ExtraBase();

module.exports = extra_base;
