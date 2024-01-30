const era = require('#/era-electron');

/** 用于育成事件标记的工具类 */
class EduEventMarks {
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

  /** @param {number} chara_id */
  constructor(chara_id) {
    this.chara_id = chara_id;
    this.obj =
      era.get(`cflag:${chara_id}:育成用变量`) ||
      era.set(`cflag:${chara_id}:育成用变量`, {});
  }

  /** @param {string} param */
  add(param) {
    return (this.obj[param] = (this.obj[param] || 0) + 1);
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
    this.obj[param] = val;
    return val;
  }

  /** @param {string} param */
  sub(param) {
    this.obj[param]--;
  }
}

module.exports = EduEventMarks;
