const era = require('#/era-electron');

const { get_random_value } = require('#/utils/value-utils');

const EventMarks = require('#/data/event/event-marks');
const { create_from_object } = require('#/data/event/event-object');

/** @type {Record<string,EventObject[]>} */
let queue;

/** @type {Record<string,EventObject[]>} */
const temp_queue = {};

const cb_enum = { daily: 0, edu: 0, recruit: 0, love: 0 };
Object.keys(cb_enum).forEach((k, i) => (cb_enum[k] = i));

/** 事件队列的初始化函数，必须在 new game 或者 load game 的时候调用 */
function init() {
  queue = era.get('flag:事件队列');
  if (!queue) {
    queue = era.set('flag:事件队列', {});
  }
  for (const key of Object.keys(queue)) {
    if (queue[key].length === 0) {
      delete queue[key];
    } else {
      queue[key] = queue[key].map(create_from_object);
    }
  }
}

/**
 * @param {function(EventObject):boolean} cb
 * @returns {Record<string,number>}
 */
function filter_event_object(cb) {
  const ret_map = {};
  Object.keys(queue).forEach(
    (stage) =>
      (queue[stage] = (queue[stage] || []).filter((e) => {
        const ret = cb(e);
        if (!ret) {
          EventMarks.get(e.chara_id).sub(stage);
          ret_map[e.chara_id] = (ret_map[e.chara_id] || 0) + 1;
        }
        return ret;
      })),
  );
  return ret_map;
}

/**
 * get a random event from stage's queue
 * @param {number} stage
 * @param {boolean} [random]
 * @returns {EventObject}
 */
function get_random_event_object(stage, random = false) {
  if (queue && queue[stage] && queue[stage].length) {
    const index =
      queue[stage].length === 1 || !random
        ? 0
        : get_random_value(0, queue[stage].length - 1);
    const event_object = queue[stage].splice(index, 1)[0];
    EventMarks.get(event_object.chara_id).sub(stage);
    return event_object;
  }
}

module.exports = {
  /**
   * @param {number} stage
   * @param {EventObject} event
   */
  add_event(stage, event) {
    if (!event || event.chara_id === undefined || event.type === undefined) {
      era.logger.error('无效的事件对象！');
      return;
    }
    if (!queue) {
      init();
    }
    if (!queue[stage]) {
      queue[stage] = [];
    }
    (temp_queue[stage] || queue[stage]).push(event);
    EventMarks.get(event.chara_id).add(stage);
  },
  cb_enum,
  get() {
    return queue;
  },
  /**
   * get a random event from stage's queue
   * @param {number} stage
   * @param {number} [cid]
   * @returns {EventObject}
   */
  get_chara_event_object(stage, cid) {
    if (queue && queue[stage]) {
      const index = queue[stage].findIndex((e) => e.chara_id === cid);
      if (index >= 0) {
        EventMarks.get(cid).sub(stage);
        return queue[stage].splice(index, 1)[0];
      }
    }
    return get_random_event_object(stage);
  },
  get_random_event_object,
  init,
  /**
   * 删除某角色的所有育成事件
   * @param {number} cid
   */
  remove_edu_events: (cid) =>
    filter_event_object((e) => e.type !== cb_enum.edu || e.chara_id !== cid),
  /** 删除所有节日事件 */
  remove_special_events: () => filter_event_object((e) => !e.special),
  /**
   * @param {function(EventObject):boolean} cb
   * @returns {Record<string,number>}
   */
  count_events(cb) {
    const ret = {};
    Object.values(queue).forEach((q) =>
      (q || []).forEach((e) => {
        if (cb[e]) {
          ret[e.chara_id] = (ret[e.chara_id] ?? 0) + 1;
        }
      }),
    );
    return ret;
  },
  /** @param {number} hook */
  start_machine_gun(hook) {
    temp_queue[hook] = [];
  },
  /** @param {number} hook */
  stop_machine_gun(hook) {
    queue[hook] = temp_queue[hook];
    delete temp_queue[hook];
  },
};
