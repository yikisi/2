const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} _
   * @param {{item:number,[owner]:number,part:number,[stay]:number}} extra_flag
   */
  handlers[ero_hooks.use_item] = async (attacker, defender, _, extra_flag) => {
    if (
      attacker.id === 0 &&
      defender.id === 32 &&
      extra_flag.stay === undefined &&
      extra_flag.item === item_enum.love_eggs &&
      extra_flag.part === part_enum.anal
    ) {
      await defender.say_and_wait('喔喔喔❤️屁穴❤️不可以❤️');
      era.println();
      await attacker.print_and_wait([
        '塞入跳蛋的瞬间，带给肠内的震动就让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 不住仰起头来。',
      ]);
      era.println();
      await defender.say_and_wait('不可以❤️身体❤️要变得奇怪了❤️');
    }
    throw new Error();
  };
};
