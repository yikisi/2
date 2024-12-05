const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalItems = require('#/event/ero/common-lines/normal/items');

const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends EroNormalItems {
  async use_item(attacker, defender, hook, extra_flag) {
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
    return await super.use_item(attacker, defender, hook, extra_flag);
  }
};
