/**
 * @file 春乌拉拉 - 调教
 *
 * @author 99
 */
const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @type {Record<string, function(hook:HookArg,extra_flag:*):Promise<*>>} */
const handlers = {};

handlers[ero_hooks.zero_stamina] = async () => {
  const me = get_chara_talk(0),
    urara = get_chara_talk(52);
  if (Math.random() < 0.5) {
    await urara.say_and_wait('……啊……啊……');
    await era.printAndWait([
      '仿佛被玩坏的洋娃娃，昏迷的 ',
      urara.get_colored_name(),
      ...(!era.get('flag:主导权')
        ? ['在 ', me.get_colored_name(), ' 怀中']
        : []),
      '不住地痉挛着',
    ]);
  } else {
    await urara.say_and_wait('……');
    await era.printAndWait([
      '全身都瘫软着，',
      ...(!era.get('flag:主导权')
        ? ['被 ', me.get_colored_name(), ' 一番折磨后的 ']
        : []),
      urara.get_colored_name(),
      ' 似乎已经彻底晕过去了',
    ]);
  }
};

/**
 * @param {HookArg} hook
 * @param extra_flag
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported hook!');
  }
  return await handlers[hook.hook](hook, extra_flag);
};
