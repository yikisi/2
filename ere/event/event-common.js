const era = require('#/era-electron');

class CustomizedEvent {
  /** @type {number} */
  id;

  /** @type {CustomizedCheck[]} */
  instances;

  /** @param {number} cid */
  constructor(cid) {
    this.id = cid;
  }

  /** 用于切换多口上 */
  get this() {
    if (Array.isArray(this.instances)) {
      // CFLAGNAME:70 = 多口上
      return this.instances[era.get(`cflag:${this.id}:70`) ?? 0] ?? this;
    }
    return this;
  }
}

module.exports = CustomizedEvent;
