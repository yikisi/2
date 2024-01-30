const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

/**
 * 初始化模版，该文件的作用是初始化角色的事件链，将角色的事件挂在相应的钩子上
 * <br>需要命名为init-(角色id).js才会发挥作用
 *
 * @param {boolean} is_reset 是否是在重新开始殿堂角色的育成，招募事件链在重新育成时是不会被重置的，所以要区分开
 */
module.exports = (is_reset) => {
  if (!is_reset) {
    // 只有在角色第一次初始化时的设置（整场游戏只会运行一次）写在这里
  }
  // 在重新开始殿堂角色育成时的设置写在这里
};
