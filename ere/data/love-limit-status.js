const era = require('#/era-electron');

class LoveLimitStatus {
  /** @type {number} */
  cache;
  /** @type {number} */
  limit;

  constructor(id) {
    this.id = id;
    const tmp = era.get(`status:${this.id}:抑制药`);
    this.cache = tmp?.cache || 0;
    this.limit = tmp?.limit || 0;
  }

  clear() {
    era.set(`status:${this.id}:抑制药`, 0);
    this.cache = 0;
    this.limit = 0;
  }

  is_empty() {
    return this.limit === 0;
  }

  set(cache, limit) {
    era.set(`status:${this.id}:抑制药`, {
      cache,
      limit,
    });
    this.cache = cache;
    this.limit = limit;
  }
}

module.exports = LoveLimitStatus;
