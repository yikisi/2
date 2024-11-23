/**
 * @file 鲁铎象征皇帝形态的爱慕事件
 * 除转向露娜形态爱慕事件外无其他作用
 */
const { add_event } = require('#/event/queue');

const CustomizedLove = require('#/event/love/love-common');

module.exports = class extends CustomizedLove {
  async run(stage, extra_flag, event_object) {
    event_object.chara_id = 17;
    add_event(stage, event_object);
  }
};
