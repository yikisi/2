const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.prepare_virgin] = async (attacker, defender) => {
    if (defender.id !== 32) {
      throw new Error();
    }
    if (era.get('mark:32:同心') <= 1) {
      await defender.say_and_wait('……过分……');
      era.println();
      await attacker.print_and_wait([
        '虽然羞红着脸，但没有拒绝就能看出 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的口是心非了吧？',
      ]);
      await attacker.print_and_wait('但是，只是这样也不太好玩……');
      await attacker.print_and_wait('要不，说些恳求的话吧？');
      era.println();
      await defender.say_and_wait('真是恶趣味的玩法啊……');
      await defender.say_and_wait([
        '请……为了让 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 专属的淫穴，能够为 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 服务……',
      ]);
      await defender.say_and_wait('尽情玩弄……我的骚穴吧❤️');
      era.println();
      await attacker.print_and_wait('明明是因为自己的要求才说出口……');
      await attacker.print_and_wait([
        '但看 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的反应，似乎也因为这样的淫语而兴奋起来了……',
      ]);
    } else {
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️',
      ]);
      era.println();
      await attacker.print_and_wait('挂满了此时还在不断滴落的淫液。');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 张开了自己下体娇嫩的小嘴。',
      ]);
      await attacker.print_and_wait('等待着期待已久的某物进入……');
    }
  };
};
