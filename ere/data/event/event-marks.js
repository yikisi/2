const era = require('#/era-electron');

const event_hooks = require('#/data/event/event-hooks');

const dict = {};

/**
 * 用于在界面标记是否有事件的工具类
 * 比如外出有特殊事件的话，在主界面的外出按键会显示为红色
 */
class EventMarks {
  /** @returns {EventMarks} */
  static get(id) {
    return dict[id] || (dict[id] = new EventMarks(id));
  }

  /** @type {number} */
  #id;

  /** @returns {Record<string,number>} */
  get #obj() {
    // CFLAGNAME:51 = 特殊事件标识
    return (
      era.get(`cflag:${this.#id}:51`) || era.set(`cflag:${this.#id}:51`, {})
    );
  }

  /** @param {number} chara_id */
  constructor(chara_id) {
    this.#id = chara_id;
  }

  raw() {
    return this.#obj;
  }

  /** @param {number|string} hook */
  check(...hook) {
    return this.get(...hook) > 0;
  }

  /*** @returns {number} */
  count() {
    return (
      Object.entries(this.#obj)
        .filter(([k]) => Number(k) !== event_hooks.week_start)
        .map((e) => e[1])
        .reduce((p, c) => p + c, 0) +
      // CFLAGNAME:56 = 节日事件标记
      era.get(`cflag:${this.#id}:56`) +
      // STATUSNAME:17 = 生日
      (era.get(`status:${this.#id}:17`) === 2)
    );
  }

  /** @param {number|string} hook */
  get(...hook) {
    const obj = this.#obj;
    return hook.reduce((p, c) => p + (obj[c] || 0), 0);
  }

  /** @param {number|string} hook */
  add(hook) {
    const obj = this.#obj;
    obj[hook] = (obj[hook] || 0) + 1;
    return this;
  }

  /** @param {number|string} hook */
  sub(hook) {
    const obj = this.#obj;
    obj[hook] = Math.max((obj[hook] || 0) - 1, 0);
    if (!obj[hook]) {
      delete obj[hook];
    }
    return this;
  }

  /**
   * @param {number|string} hook
   * @param {number} val
   */
  set(hook, val) {
    const obj = this.#obj;
    if (!val) {
      delete obj[hook];
    } else {
      obj[hook] = val;
    }
  }
}

module.exports = EventMarks;
