const { get, set } = require('#/era-electron');

const { action_type_enum } = require('#/data/basement-const');
const BasementAction = require('#/data/event/basement-action');

/** @type {BasementAction[]} */
let queue;

/**
 * @param {BasementAction} action
 * @return {number}
 */
function get_added_action_index(action) {
  return queue.findIndex(
    (e, i, l) =>
      e.timer <= action.timer &&
      (i === l.length - 1 || l[i + 1].timer > action.timer),
  );
}

/** @return {number} */
function get_popped_action_index() {
  return queue.findIndex((e, _, l) => e.timer !== l[0].timer);
}

module.exports = {
  /**
   * @param {BasementAction} action
   * @param {boolean} [from_init]
   */
  add_action(action, from_init) {
    if (!from_init && action.type === action_type_enum.rescue) {
      return;
    }
    let index;
    try {
      index = get_added_action_index(action);
    } catch (_) {
      queue = set(
        'flag:地下室行动',
        queue.filter((e) => e),
      );
      index = get_added_action_index(action);
    }
    queue.splice(index + 1, 0, action);
  },
  /**
   * @param {function(BasementAction):boolean} filter_cb
   * @returns {BasementAction[]}
   */
  clean_actions(filter_cb) {
    const ret = [],
      rest = [];
    queue.forEach((e) => (filter_cb(e) ? ret : rest).push(e));
    queue = set('flag:地下室行动', rest);
    return ret;
  },
  /** @param {function(BasementAction):boolean} filter_cb */
  find_action(filter_cb) {
    return queue.find(filter_cb);
  },
  get_action() {
    let pop_count;
    try {
      pop_count = get_popped_action_index();
    } catch (_) {
      queue = set(
        'flag:地下室行动',
        queue.filter((e) => e),
      );
      pop_count = get_popped_action_index();
    }
    if (pop_count === -1) {
      pop_count = queue.length;
    }
    return queue.splice(0, pop_count);
  },
  init() {
    queue = set(
      'flag:地下室行动',
      (get('flag:地下室行动') || [])
        .filter((e) => e)
        .map(BasementAction.create_from_object),
    );
  },
};
