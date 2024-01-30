const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');

/**
 * 鲁铎象征皇帝形态的爱慕事件
 * 除转向露娜形态爱慕事件外无其他作用
 */
module.exports = async (hook, _, event_object) => {
  if (event_object) {
    event_object.chara_id = 17;
    add_event(event_hooks.week_end, event_object);
  }
};
