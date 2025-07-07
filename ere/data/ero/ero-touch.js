const era = require('#/era-electron');

const { part_touch } = require('#/data/ero/part-const');

class EroTouch {
  /** @type {number} */
  #id;
  /** @type {string} */
  #part;

  get #obj() {
    return (
      era.get(`tcvar:${this.#id}:${this.#part}接触部位`) ||
      era.set(`tcvar:${this.#id}:${this.#part}接触部位`, -1)
    );
  }

  /** @type {number|undefined} */
  get owner() {
    return this.#obj.owner;
  }

  /** @type {number|undefined} */
  get part() {
    return this.#obj.part;
  }

  /** @type {number|undefined} */
  get item() {
    return this.#obj.item;
  }

  /**
   * @param {number} id
   * @param {number} part
   */
  constructor(id, part) {
    this.#id = id;
    this.#part = part_touch[part];
  }

  /**
   * @param {number} owner
   * @param {number} part
   * @param {number} [item]
   */
  set(owner, part, item) {
    era.set(`tcvar:${this.#id}:${this.#part}接触部位`, {
      item,
      owner,
      part,
    });
  }

  clean() {
    era.set(`tcvar:${this.#id}:${this.#part}接触部位`, -1);
  }
}

module.exports = EroTouch;
