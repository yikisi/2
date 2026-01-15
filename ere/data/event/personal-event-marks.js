const era = require('#/era-electron');

/** 用于专属事件标记的工具类 */
class PersonalEventMarks {
  /**
   * @param {number} cid
   * @param {number} pid parameter id
   */
  constructor(cid, pid) {
    this.obj =
      era.get(`cflag:${cid}:${pid}`) ||
      era.set(`cflag:${cid}:${pid}`, {}) ||
      {};
  }

  static register_marks(obj) {
    Object.keys(obj)
      .filter((e) => e !== 'obj')
      .forEach((m) => {
        Object.defineProperty(obj, m, {
          get() {
            return obj.get(m);
          },
          set(val) {
            obj.set(m, val);
          },
        });
      });
  }

  /** @param {string} param */
  add(param) {
    return (this.obj[param] = this.get(param) + 1);
  }

  /** @param {string} param */
  get(param) {
    return this.obj[param] || 0;
  }

  reset() {
    Object.keys(this.obj).forEach((e) => delete this.obj[e]);
  }

  /**
   * @param {string} param
   * @param val
   * @returns {*}
   */
  set(param, val) {
    if (!val) {
      delete this.obj[param];
    } else {
      this.obj[param] = val;
    }
    return val;
  }

  /** @param {string} param */
  sub(param) {
    this.obj[param]--;
    if (!this.obj[param]) {
      delete this.obj[param];
    }
    return this.obj[param] || 0;
  }
}

module.exports = PersonalEventMarks;
