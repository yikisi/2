const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_random_entry } = require('#/utils/list-utils');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.insult] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    const message = [
      async () => {
        await attacker.say_and_wait('喜欢被辱骂的变态！');
        await defender.say_and_wait(
          '才没有喜欢哦？只是会有点小小的兴奋起来呢～',
        );
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
        ]);
        await attacker.print_and_wait('……那不就是喜欢嘛！');
      },
      async () => {
        await attacker.say_and_wait('明明战斗力超强，却非要当诱受的抖M！');
        await defender.say_and_wait('战斗力超强？才没有那回事啦～');
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
        ]);
        await attacker.print_and_wait([
          '……我恐怕迟早有一天会看到 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 参加拳王竞标赛。',
        ]);
      },
    ];
    if (attacker.sex_code > 0) {
      message.push(async () => {
        await attacker.say_and_wait('一插进去就不让我走的淫荡屁股！');
        await defender.say_and_wait([
          '嘿嘿～这里是淫荡屁股的 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 哦～',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
        ]);
        await attacker.print_and_wait('……别把这当做称号啊！');
      });
    }
    if (defender.sex_code !== 1) {
      message.push(
        async () => {
          await attacker.say_and_wait('你这头淫乱的母猪！');
          await defender.say_and_wait('不是母猪，只是普通的马娘呐❤️～');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await attacker.print_and_wait('……并没有否定「淫乱」这回事吗。');
        },
        async () => {
          await attacker.say_and_wait('擅自发情的雌畜！');
          await defender.say_and_wait('嗯……也不是会对所有人都发情的啦～');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await attacker.print_and_wait('……倒是反驳一下雌畜这点啊。');
        },
        async () => {
          await attacker.say_and_wait(
            '看起来成熟稳重但肯定是在平常训练的时候就在想着涩涩事情的废物奶奶！',
          );
          await defender.say_and_wait(
            '唔姆……训练的时候我还是很专注的啦～只有在枯树洞里的时候才偶尔会有涩涩的念头呢～',
          );
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await attacker.print_and_wait([
            '……',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 不为人知的一面被发现了！',
          ]);
        },
        async () => {
          await attacker.say_and_wait('好用的外卖小穴！');
          await defender.say_and_wait(
            '咕噜姆……外卖小穴？一直吃外卖对身体不好哦～',
          );
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await attacker.print_and_wait(
            '……至少这次是真的不知道「外卖小穴」是什么意思。',
          );
        },
        async () => {
          await attacker.say_and_wait('一拍屁股就会夹紧的废物小穴！');
          await defender.say_and_wait('嘛……毕竟太舒服啦，所以也没办法嘛～');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await attacker.print_and_wait('……这是没办法的事情吗？');
        },
      );
    }
    await get_random_entry(message)();
  };

  handlers[ero_hooks.ask_insult] = (attacker, defender) =>
    handlers[ero_hooks.insult](defender, attacker);
};
