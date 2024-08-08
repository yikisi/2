const era = require('#/era-electron');

class BasementOwners {
  /** @type {number[]} */
  obj;

  constructor() {
    this.obj = era.get('flag:地下室之主') || era.set('flag:地下室之主', []);
  }

  clean() {
    this.obj = era.set(
      'flag:地下室之主',
      this.obj.filter((e) => e),
    );
  }

  clear() {
    this.obj = era.set('flag:地下室之主', []);
  }

  /** @param {function(number)} cb */
  for_each(cb) {
    this.obj.forEach(cb);
    return this;
  }

  /**
   * @param {number} [index]
   * @returns {number|number[]}
   */
  get(index) {
    if (index !== undefined) {
      return this.obj[index];
    }
    return this.obj;
  }

  is_empty() {
    return this.obj.length === 0;
  }

  length() {
    return this.obj.length;
  }

  /** @param {number} chara_id */
  push(chara_id) {
    this.obj.push(chara_id);
  }
}

module.exports = BasementOwners;
