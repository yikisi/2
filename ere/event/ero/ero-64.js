/**
 * @file 目白善信 - 调教
 *
 * @author KUN
 */
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @type {Record<string,function>} */
const handlers = {};

/**
 * @param _
 * @param {GetMarkParams} extra_flag
 */
handlers[ero_hooks.get_mark] = async (_, extra_flag) => {
  if (!sys_check_awake(64)) {
    throw new Error();
  }
  const pama = get_chara_talk(64);
  switch (extra_flag.name) {
    case '欢愉':
      switch (extra_flag.level) {
        case 1:
          await pama.say_and_wait('明明只是肉体关系，我却……停不下来……');
          break;
        case 2:
          await pama.say_and_wait('逃不掉❤️️已经没法从这个❤️️逃掉了❤️');
          break;
        case 3:
          await pama.say_and_wait(
            '哈啊❤️️已经无法逃走了❤️没有就不行了❤️我已经是……这个人的所有物了❤️',
          );
      }
      break;
    case '同心':
      switch (extra_flag.level) {
        case 1:
          await pama.say_and_wait('事到如今，我们已经……哎嘿嘿……');
          break;
        case 2:
          await pama.say_and_wait('这就是所谓的一心同体……');
          break;
        case 3:
          await pama.say_and_wait('果然，只有你能做到这个❤️️只有你❤️️……');
      }
      break;
    default:
      throw new Error();
  }
};

/**
 * @param {HookArg} hook
 * @param extra_flag
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error();
  }
  return await handlers[hook.hook](hook, extra_flag);
};
