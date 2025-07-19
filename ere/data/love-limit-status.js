const era = require('#/era-electron');

const dict = {};

class LoveLimitStatus {
  static get(id) {
    return dict[id] || (dict[id] = new LoveLimitStatus(id));
  }

  /** @type {number} */
  #id;

  /** @returns {{cache:number,limit:number}|{}} */
  get #status() {
    return era.get(`status:${this.#id}:抑制药`) || {};
  }

  /** @returns {number} */
  get cache() {
    return this.#status.cache || 0;
  }

  /** @returns {number} */
  get limit() {
    return this.#status.limit || 0;
  }

  constructor(id) {
    this.#id = id;
  }

  clear() {
    era.set(`status:${this.#id}:抑制药`, 0);
  }

  is_empty() {
    return this.limit === 0;
  }

  set(cache, limit) {
    era.set(`status:${this.#id}:抑制药`, {
      cache,
      limit,
    });
  }
}

module.exports = LoveLimitStatus;
