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
    return (
      era.get(`cflag:${this.#id}:特殊事件标识`) ||
      era.set(`cflag:${this.#id}:特殊事件标识`, {})
    );
  }

  /** @param {number} chara_id */
  constructor(chara_id) {
    this.#id = chara_id;
  }

  /** @param {number|string} hook */
  check(...hook) {
    return this.get(...hook) > 0;
  }

  count() {
    return (
      Object.entries(this.#obj)
        .filter(([k]) => Number(k) !== event_hooks.week_start)
        .map((e) => e[1])
        .reduce((p, c) => p + c, 0) +
      era.get(`cflag:${this.#id}:节日事件标记`) +
      (era.get(`status:${this.#id}:生日`) === 2)
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
}

module.exports = EventMarks;
