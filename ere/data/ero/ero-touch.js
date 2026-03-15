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
    if (this.#id >= 0) {
      return this.#obj.owner;
    }
    return undefined;
  }

  /** @type {number|undefined} */
  get part() {
    if (this.#id >= 0) {
      return this.#obj.part;
    }
    return undefined;
  }

  /** @type {number|undefined} */
  get item() {
    if (this.#id >= 0) {
      return this.#obj.item;
    }
    return undefined;
  }

  /**
   * @param {number} id
   * @param {number} part
   */
  constructor(id, part) {
    this.#id = id;
    this.#part = part_touch[part];
  }

  is_empty() {
    return this.#obj === -1;
  }

  check(owner, part) {
    return this.owner === owner && this.part === part;
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
