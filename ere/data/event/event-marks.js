const era = require('#/era-electron');

const event_hooks = require('#/data/event/event-hooks');

/**
 * 用于在界面标记是否有事件的工具类
 * 比如外出有特殊事件的话，在主界面的外出按键会显示为红色
 */
class EventMarks {
  /** @param {number} chara_id */
  constructor(chara_id) {
    this.chara_id = chara_id || 0;
    this.obj = era.get(`cflag:${this.chara_id}:特殊事件标识`);
    if (!this.obj) {
      this.obj = era.set(`cflag:${this.chara_id}:特殊事件标识`, {});
    }
  }

  count() {
    return (
      Object.entries(this.obj)
        .map((e) => (Number(e[0]) === event_hooks.week_start ? 0 : e[1]))
        .reduce((p, c) => p + c, 0) +
      era.get(`cflag:${this.chara_id}:节日事件标记`)
    );
  }

  /** @param {number|string} hook */
  get(hook) {
    return this.obj[hook] || 0;
  }

  /** @param {number|string} hook */
  add(hook) {
    this.obj[hook] = this.get(hook) + 1;
    return this;
  }

  /** @param {number|string} hook */
  sub(hook) {
    this.obj[hook] = Math.max(this.get(hook) - 1, 0);
    return this;
  }
}

module.exports = EventMarks;
