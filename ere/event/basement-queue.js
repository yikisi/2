const { get, set } = require('#/era-electron');

const BasementAction = require('#/data/event/basement-action');

/** @type {BasementAction[]} */
let queue;

module.exports = {
  /** @param {BasementAction} action */
  add_action(action) {
    let index = queue.findIndex(
      (e, i, l) =>
        e.timer <= action.timer &&
        (i === l.length - 1 || l[i + 1].timer > action.timer),
    );
    queue.splice(index + 1, 0, action);
  },
  /**
   * @param {function(BasementAction):boolean} filter_cb
   * @returns {BasementAction[]}
   */
  clean_actions(filter_cb) {
    const ret = [],
      rest = [];
    queue.forEach((e) => (filter_cb(e) ? rest : ret).push(e));
    queue = set('flag:地下室行动', rest);
    return ret;
  },
  /** @param {function(BasementAction):boolean} filter_cb */
  find_action(filter_cb) {
    return queue.find(filter_cb);
  },
  get_action() {
    let pop_count = queue.findIndex((e, _, l) => e.timer !== l[0].timer);
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
