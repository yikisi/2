const era = require('#/era-electron');

const event_hooks = require('#/data/event/event-hooks');

/**
 * 招募脚本模版，招募事件口上写在这里
 * <br>需要命名为rec-(角色id).js才会发挥作用
 */
module.exports = {
  // 重载标志，该标志为true时表明跳过通用的招募确认选项
  override: false,
  /**
   * @param {number} stage_id 触发招募事件的行动阶段，在将招募事件挂到相应钩子上之后被调用时传入，一般情况下只会是recruit（招募）
   * 所有的行动阶段见eventHooks
   * @param {any} extra_flag 相应行动阶段传入的额外参数，如果是招募行动阶段，传入的是选择招募还是直接离开了（对需要在遇到后转身离开才会触发招募的马娘）
   * <br>对外出等阶段，传入的是同行者的id
   * @param {EventObject} event_object 事件对象，只能成功执行一次的事件记得在结束后从事件队列里去掉
   * @return {Promise<boolean>} 返回值表示是否跳过本次行动，比如黄金船招募事件发生在招募的开始，事件结束后会跳过招募；
   * <br>卡莲的招募事件发生在外出开始，事件结束后会跳过外出
   */
  async run(stage_id, extra_flag, event_object) {
    switch (stage_id) {
      // 一般情况下只需要实现招募钩子的对应行为，否则就要实现对应的钩子
      case event_hooks.recruit:
      default:
        break;
    }
    return false;
  },
};
