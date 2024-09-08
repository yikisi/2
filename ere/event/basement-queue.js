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
  get_action() {
    let pop_count = queue.findIndex((e, _, l) => e.timer !== l[0].timer);
    if (pop_count === -1) {
      pop_count = queue.length;
    }
    return queue.splice(0, pop_count);
  },
  init() {
    queue =
      get('flag:地下室行动') ||
      set('flag:地下室行动', [])
        .filter((e) => e)
        .map(BasementAction.create_from_object);
  },
};
