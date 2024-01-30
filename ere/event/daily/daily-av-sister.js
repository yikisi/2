const era = require('#/era-electron');

const event_hooks = require('#/data/event/event-hooks');

const CharaTalk = require('#/utils/chara-talk');

/** @type {Record<string,function(HookArg,*):Promise<boolean>>} */
const handler_dict = {};

handler_dict[event_hooks.select] = function (hook, extra_flag) {
  if (era.get(`cflag:${extra_flag.chara_id}:成长阶段`) < 1) {
    throw new Error('unsupported!');
  }
  const father = era.get(`cflag:${extra_flag.chara_id}:父方角色`),
    mother = era.get(`cflag:${extra_flag.chara_id}:母方角色`);
  if (father && mother) {
    throw new Error('unsupported!');
  }
  new CharaTalk(extra_flag.chara_id).say(
    `今天也请多关照啦，${
      era.get('cflag:0:性别') - 1 ? '姐姐' : '哥哥'
    }……啊，应该是这个，${father ? '妈妈' : '爸爸'}～❤`,
  );
};

/**
 * 爱慕织姬产驹，爱慕彦星的日常口上
 * 设定是织姬的第一个产驹是妹妹
 * 示例用的日常事件口上，请不要上纲上线
 * 不满意的话请自己写口上
 *
 * @author 黑奴队长
 */
module.exports = {
  /**
   * @param {HookArg} hook
   * @param {any} [extra_flag]
   * @param {EventObject} [event_object]
   * @returns {Promise<boolean>}
   */
  async run(hook, extra_flag, event_object) {
    if (event_object) {
      throw new Error('unsupported hook!');
    }
    if (!handler_dict[hook.hook]) {
      throw new Error('unsupported hook!');
    }
    return !!(await handler_dict[hook.hook](hook, extra_flag));
  },
};
