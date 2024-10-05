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

/**
 * @param {function(EventObject):boolean} condition
 * @returns {Record<string,number>}
 */
function filter_event_object(condition) {
  const ret_map = {};
  Object.keys(queue).forEach(
    (stage_id) =>
      (queue[stage_id] = (queue[stage_id] || []).filter((e) => {
        const ret = condition(e);
        if (!ret) {
          new EventMarks(e.chara_id).sub(stage_id);
          ret_map[e.chara_id] = (ret_map[e.chara_id] || 0) + 1;
        }
        return ret;
      })),
  );
  return ret_map;
}

module.exports = {
  /**
   * @param {number} stage
   * @param {EventObject} event_object
   */
  add_event(stage, event_object) {
    if (
      !event_object ||
      event_object.chara_id === undefined ||
      event_object.type === undefined
    ) {
      era.logger.error('null EventObject!');
      return;
    }
    if (!queue) {
      this.init();
    }
    if (!queue[stage]) {
      queue[stage] = [];
    }
    (temp_queue[stage] || queue[stage]).push(event_object);
    new EventMarks(event_object.chara_id).add(stage);
  },
  cb_enum,
  /**
   * get a random event from stage's queue
   * @param {number} stage
   * @param {boolean} [random]
   * @returns {EventObject}
   */
  get_random_event_object(stage, random) {
    if (queue && queue[stage] && queue[stage].length) {
      const id =
        queue[stage].length === 1 || random
          ? 0
          : get_random_value(0, queue[stage].length - 1);
      const event_object = queue[stage].splice(id, 1)[0];
      new EventMarks(event_object.chara_id).sub(stage);
      return event_object;
    }
  },
  /**
   * get a random event from stage's queue
   * @param {number} stage
   * @param {number} [chara_id]
   * @returns {EventObject}
   */
  get_chara_event_object(stage, chara_id) {
    if (queue && queue[stage]) {
      const index = queue[stage].findIndex((e) => e.chara_id === chara_id);
      if (index >= 0) {
        new EventMarks(chara_id).sub(stage);
        return queue[stage].splice(index, 1)[0];
      }
    }
  },
  /** 事件队列的初始化函数，必须在new game或者load game的时候调用 */
  init() {
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
  },
  /**
   * 删除某角色的所有育成事件
   * @param {number} chara_id
   */
  remove_edu_events: (chara_id) =>
    filter_event_object(
      (e) => e.type !== cb_enum.edu || e.chara_id !== chara_id,
    ),
  /** 删除所有节日事件 */
  remove_special_events: () => filter_event_object((e) => !e.special),
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
