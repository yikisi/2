const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalSm = require('#/event/ero/common/normal/sm');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = class extends EroNormalSm {
  async insult(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.insult(attacker, defender, hook);
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
  }

  async ask_insult(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
      return;
    }
    return super.insult(defender, attacker, hook);
  }

  async hit_anal(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.hit_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await attacker.print_and_wait([
        '手掌拍击在屁股上，丰满的肥臀在手中传来阵阵的波荡。',
      ]);
      await attacker.print_and_wait([
        '原本白皙的屁股如今已是通红一片，即便只是单纯的碰触，也能使一旁的小穴无意识的抽搐。',
      ]);
      await attacker.print_and_wait([
        '啪！又是一声拍击的声响，光洁的阴唇随之抽搐，晶莹的汁液与放浪的叫声一同滴出——',
      ]);
      await defender.say_and_wait([
        '齁呼呼～❤️不要❤️要变成只是被打屁股就会高潮的变态了❤️弱点被发现了❤️，要彻底变成雌性了～❤️',
      ]);
    } else {
      await attacker.print_and_wait([
        '明明已经红肿不堪了，屁股却仍是高高的翘起。',
      ]);
      await attacker.print_and_wait([
        '就好像还未满足一般，丰满的臀部特意朝向这边左右摇晃。',
      ]);
      await defender.say_and_wait([
        '呐❤️',
        sys_get_colored_callname(defender.id, attacker.id),
        '，你还没有满足吧？',
      ]);
      await defender.say_and_wait([
        '我呐，看的出来，你平时背负着不少的压力呢……所以呐，尽情的把压力发泄在这里吧～❤️',
      ]);
      await defender.say_and_wait(['因为我的身体，是你的东西嘛❤️～']);
    }
  }

  async ask_hit_anal(attacker, defender, hook) {
    if (hook.arg && (await ask_action(attacker.id))) {
      await (
        get_random_value(0, 1)
          ? after_refusing_by_attacker
          : after_refusing_by_defender
      )(attacker, defender, hook);
      return;
    }
    return super.hit_anal(defender, attacker, hook);
  }

  async hit_anal_hard(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.hit_anal_hard(attacker, defender, hook);
    }
    await defender.print_and_wait(['越是痛苦，就越是兴奋。']);
    await defender.print_and_wait([
      '明明臀部已经失去了知觉，但每次拍打之后，却仍能感到下体的震撼。',
    ]);
    await defender.print_and_wait([
      '就像是机械装置一般，每当拍击丰满的臀部，光滑的小穴就会滴落下淫靡的汁液。',
    ]);
    await defender.print_and_wait([
      '而趴伏在地面之上温和的五官，此刻却也被快感所破坏，一面两眼上翻，一面伸出舌头，伴随着拍击着节奏发出对应的呻吟。',
    ]);
    await defender.print_and_wait([
      '可在这呻吟中，却也夹杂着已然支零破碎的语句——',
    ]);
    await defender.say_and_wait([
      '齁～呼呼～',
      sys_get_colored_callname(defender.id, attacker.id),
      '……好幸福❤️～',
    ]);
  }

  async hit_face_by_penis(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.hit_face_by_penis(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '顶在脸颊之上，那是散发着「阳气」的肉棒。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 一动也不动，只是盯着肉棒，任由着它将耻垢与污物在自己的脸颊上涂抹。',
      ]);
      await defender.say_and_wait(['好精神的气味呢……这是要做什——']);
      await attacker.print_and_wait([
        '还没等 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 说完，在脸颊上擦干净了的肉棒，径直给了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 一耳光。',
      ]);
      await attacker.print_and_wait([
        '脸部的疼痛，兴许给',
        defender.sex,
        '带来了些许的惊讶。但是很快，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 便从惊讶中解脱了出来，似乎明白了什么似的，露出了温和的微笑。',
      ]);
      await defender.say_and_wait(['原来如此……真是『精神』的肉棒呢❤️']);
    } else if (defender.sex_code !== 1) {
      await attacker.say_and_wait([
        '接下来要用肉棒打耳光，打到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 哭出来为止。',
      ]);
      await defender.print_and_wait(['朝向自己的肉棒，做出了如此的宣告。']);
      await defender.say_and_wait(['哭出来为止……吗？']);
      await defender.print_and_wait([
        '仅仅只是听到了这样的发言，下腹便传来一阵骚热，',
      ]);
      await defender.print_and_wait([
        '更不要说自己的脸颊被肉棒所擦拭、抽弄、打耳光之下，嗅觉已全然被阳气所占领的情况下了。',
      ]);
      await defender.say_and_wait(
        ['在哭出来前，一直都会被肉棒抽耳光吗……'],
        true,
      );
      await defender.say_and_wait(['糟糕……感觉完全，哭不出来呢❤️'], true);
    }
  }
};
