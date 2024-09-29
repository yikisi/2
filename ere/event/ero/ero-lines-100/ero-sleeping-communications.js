const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    await attacker.print_and_wait([
      '安详的躺握着的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，小口小口的呼吸。',
    ]);
    await attacker.print_and_wait('粉嫩的嘴唇一张一合，似是在期待着什么。');
    await attacker.print_and_wait('靠近上去，悄悄地吻上那粉嫩的嘴唇——');
    await attacker.print_and_wait(
      '抬起头，那仍在一张一合的粉嫩的嘴唇已被自己的痕迹所标记。',
    );
  };

  handlers[ero_hooks.french_kiss] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    await attacker.print_and_wait([
      '仅仅只是玷污粉唇并不能满足，还想要触碰 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的舌头。',
    ]);
    await attacker.print_and_wait(
      '伸入口腔内的斥候并未遭到牙齿的阻碍，反而很顺利的叩开了关门，来到了舌头的所在。',
    );
    await attacker.print_and_wait([
      '趁着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 仍在沉睡，来回的翻弄、纠缠，在深处留下自己的印迹。',
    ]);
    await attacker.print_and_wait('分开时，唾液的丝线连接着彼此的舌尖。');
    await attacker.print_and_wait([
      '——看啊，',
      sys_get_colored_callname(attacker.id, defender.id),
      '，我在舌吻上赢了你。',
    ]);
    await attacker.print_and_wait([
      '……虽然很想要这样大声的疾呼，但这却毕竟是不能告诉 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的事。',
    ]);
  };
};
