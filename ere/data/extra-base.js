const era = require('#/era-electron');

class ExtraBase {
  obj;

  constructor() {
    this.obj = era.get('flag:额外资源') || era.set('flag:额外资源', [0, 0]);
  }

  /** @returns {number} */
  get stamina() {
    return this.obj[0];
  }

  /** @param {number} v */
  set stamina(v) {
    this.obj[0] = v;
  }

  /** @returns {number} */
  get time() {
    return this.obj[1];
  }

  /** @param {number} v */
  set time(v) {
    this.obj[1] = v;
  }
}

module.exports = ExtraBase;
