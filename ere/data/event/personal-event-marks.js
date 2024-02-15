const era = require('#/era-electron');

/** 用于专属事件标记的工具类 */
class PersonalEventMarks {
  chara_id;
  obj;

  static register_marks(obj) {
    Object.keys(obj)
      .slice(2)
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

  /**
   * @param {number} chara_id
   * @param {string} param_name
   */
  constructor(chara_id, param_name) {
    this.chara_id = chara_id;
    this.obj =
      era.get(`cflag:${chara_id}:${param_name}`) ||
      era.set(`cflag:${chara_id}:${param_name}`, {});
  }

  /** @param {string} param */
  add(param) {
    return (this.obj[param] = this.get(param) + 1);
  }

  /** @param {string} param */
  get(param) {
    return this.obj[param] || 0;
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
  }
}

module.exports = PersonalEventMarks;
