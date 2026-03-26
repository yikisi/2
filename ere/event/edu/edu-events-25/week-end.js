const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { base_attr_list } = require('#/data/train-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[47 + 31] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:25:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('朋友', coffee);
    await coffee.say_and_wait([callname, '……是关于朋友的事……对吗？']);
    era.printButton('「嗯，我想要详细地了解。」', 1);
    await era.input();
    await era.printAndWait([
      '夏季合宿的某个晚上，',
      me.get_colored_name(),
      ' 向 ',
      coffee.get_colored_name(),
      ' 询问了关于在',
      coffee.sex,
      '心中特殊的存在——朋友的事情。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 记得之前曾在偶然的情况下听',
      coffee.sex,
      '说过，朋友似乎是从',
      coffee.sex,
      '小时候开始就伴',
      coffee.sex,
      '左右，一直跑在',
      coffee.sex,
      '的前方引导着',
      coffee.sex,
      '的存在。',
    ]);
    await era.printAndWait('但所谓的引导，到底指的是什么呢？');
    await coffee.say_and_wait('你想要……知道什么呢？');
    era.printButton('「你说朋友会引导你，是什么意思呢？」', 1);
    await era.input();
    await coffee.say_and_wait('引导就是……一直『跑在我前面』的意思。');
    await coffee.say_and_wait('不，这么说不太对，并非只有这样而已……');
    await coffee.say_and_wait('『朋友』会将我……带去幸福的地方……');
    await coffee.say_as_unknown_and_wait('呵呵呵、呵呵呵呵呵……♪');
    await era.printAndWait('四周传来了似有若无的嬉笑声。');
    await coffee.say_and_wait('像是偷偷带我去一些没有人知道的、安静的场所……');
    await coffee.say_as_unknown_and_wait('呵呵呵、呵呵呵呵呵……♪');
    await era.printAndWait([
      '仿佛就是从 ',
      me.get_colored_name(),
      ' 耳边发出般，戏弄着 ',
      me.get_colored_name(),
      ' 的感官。',
    ]);
    await coffee.say_and_wait(
      '去游乐园的时候……朋友就坐在摩天轮的最上面。当时我为了追上朋友而坐进了摩天轮的车厢……就看见了一片很美的景色……',
    );
    await coffee.say_and_wait('只要追着朋友，总是会发生快乐的事……');
    await coffee.say_and_wait('若我希望，朋友也总是会告诉我该往哪里去……');
    await coffee.say_and_wait('其他人……从来……没给过我什么……但只有朋友不一样。');
    await coffee.say_and_wait('是唯一……会带给我快乐时光……独一无二的存在……');
    era.printButton('「……就算现在也是如此吗？」', 1);
    await era.input();
    await coffee.say_and_wait(['……', callname, '，感觉也跟朋友有点相似。']);
    await coffee.say_and_wait([
      '但我们之所以能相遇，也是因为朋友把我引导到遇到危险的 ',
      callname,
      ' 面前的关系……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 有点明白了，对于 ',
      coffee.get_colored_name(),
      ' 来说，朋友不仅仅是比赛时跑在前方的存在……',
    ]);
    await era.printAndWait([
      '对 ',
      coffee.get_colored_name(),
      ' 来说，或许更像是将',
      coffee.sex,
      '带往幸福的领航员。',
    ]);
    await coffee.say_and_wait(
      '现在也是，只要我希望，朋友就会带我到任何地方。譬如说……',
    );
    await coffee.say_and_wait([
      callname,
      '，你可以帮我想一个『现在这种地方绝对不可能有的东西』吗？',
    ]);
    await era.printAndWait([
      '这里不可能有的东西……在 ',
      me.get_colored_name(),
      ' 脑海里，浮现的是——',
    ]);
    era.printButton('「……薰衣草。」（力量+20）', 1);
    era.printButton('「……球藻。」（根性+20）', 2);
    era.printButton('「四条腿的……马。」', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await coffee.say_and_wait(
          '薰衣草……是吗。唇形科薰衣草属……是不会生长在这里的花……',
        );
        await coffee.say_and_wait('但是，只要我由衷地希望……');
        await era.printAndWait('——碰！');
        await era.printAndWait([
          me.get_colored_name(),
          ' 的背……突然被某种强大的力量推了一下。',
        ]);
        await era.printAndWait([
          '是朋友吗！？在 ',
          me.get_colored_name(),
          ' 出现这样的念头时，身体已经像是被人催促似地朝被推的方向前进了。',
        ]);
        await era.printAndWait('而最后抵达的是……');
        await coffee.say_and_wait('这是……岩石呢。一起把它给移开吧。');
        await coffee.say_and_wait('一～二……嘿咻……');
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 以',
          coffee.sex,
          '那纤细的手臂使劲将岩石移开，而岩石底下的是……一大堆海草一样的东西。',
        ]);
        await coffee.say_and_wait(
          '每一根的前端都有像花苞的东西……是用这个，来代替薰衣草的意思吗……',
        );
        break;
      case 2:
        await coffee.say_and_wait(
          '球藻……是吗。生长在北海道阿寒湖等处的，球状藻类……',
        );
        await coffee.say_and_wait(
          '虽然这附近应该不可能找得到，但是，只要我由衷地希望……',
        );
        await era.printAndWait('——碰！');
        await era.printAndWait([
          me.get_colored_name(),
          ' 的背……突然被某种强大的力量推了一下。',
        ]);
        await era.printAndWait([
          '是朋友吗！？在 ',
          me.get_colored_name(),
          ' 出现这样的念头时，身体已经像是被人催促似地朝被推的方向前进了。',
        ]);
        await era.printAndWait('而最后抵达的是……');
        await coffee.say_and_wait('哈啊、哈啊，我们……走了很远呢。');
        await coffee.say_and_wait([
          '啊，',
          callname,
          '……那个被浪打到沙滩上的东西是……',
        ]);
        await coffee.say_and_wait('藻类的块状物，吗。');
        await era.printAndWait(
          '那里的，是吸收了大量海里的污水后，打结成一块的植物残骸……',
        );
        await coffee.say_and_wait(
          '虽然外观不是很讨喜……但这是用来……代替球藻的意思吗？',
        );
        break;
      case 3:
        await coffee.say_and_wait([
          '马……是指',
          coffee.uma_sex_title,
          '吗？……但四条腿是指……',
        ]);
        new CoffeeEduMarks().horse = 1;
    }
    if (ret < 3) {
      await era.printAndWait(
        '或许这就是朋友能做到的极限了吧，看来也并非是万能的。',
      );
      await era.printAndWait('也许是类似于会尽力帮忙的守护灵吧。');
      await coffee.say_and_wait('朋友总是会像这样，引导我笔直地走向幸福。');
      await coffee.say_and_wait(
        '一直在我身边，帮助着我……是非常重要的……『朋友』……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 能有今天，或许都是这位守护灵的功劳也不一定。',
      ]);
      await coffee.say_and_wait([
        '……啊，',
        callname,
        ' 你看。海上有一座小岛……',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 望向远处的海上……的确有一座小岛。但既没有通往岛上的桥和船，也不是游泳能到达的距离。',
      ]);
      await coffee.say_and_wait(
        '我有点想要去看看呢……想必…会是个安静又美丽的地方吧。',
      );
      await era.printAndWait('但要是真想去到那座岛上的话……');
      await era.printAndWait('——碰、碰、碰！');
      await era.printAndWait([
        '没来由地，',
        me.get_colored_name(),
        ' 的背上被连续戳了几下……！像是在告诉说「不要犹豫，去吧」。',
      ]);
      await coffee.say_and_wait(
        '啊，『朋友』……在跟我招手……在海的另一边招手说『来这里』……',
      );
      await era.printAndWait([
        '朋友，对 ',
        coffee.get_colored_name(),
        ' 来说像是守护灵般的存在。',
      ]);
      await era.printAndWait([
        '但却让人搞不清楚究竟有没有心要守护',
        coffee.sex,
        '。',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        25,
        ret === 1 ? [0, 0, 20] : [0, 0, 0, 20],
        0,
        undefined,
        true,
      );
    } else {
      era.println();
    }
    flags.wait_flag = sys_like_chara(25, 0, 25) || flags.wait_flag;
  };

  handlers[47 + 32] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:25:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('夏季合宿（经典年）结束', coffee);
    await era.printAndWait('夏季合宿的全部日程结束了。');
    await coffee.say_and_wait([
      callname,
      '……多亏了你，我的身体才能恢复得这么好……',
    ]);
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await era.printAndWait([
        '一整个夏天的拼命护理得到了成功，',
        coffee.get_colored_name(),
        ' 的身体状况得到了显著改善。',
      ]);
      await tachyon.say_and_wait([
        '呀，',
        sys_get_callname(32, 0),
        '。这个夏天和 ',
        t_call_c,
        ' 的进展如何？',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的顾问，',
        tachyon.get_colored_name(),
        ' 也凑了过来。',
      ]);
      era.printButton('「……也算是了解到了一些。」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 共享了在合宿中了解到的情报，以及有关朋友的事。',
      ]);
      await tachyon.say_and_wait([
        '原来如此。虽说做了些意义不明的事情，但总体上还是挺有趣……不，对 ',
        t_call_c,
        ' 有利的嘛。',
      ]);
      await tachyon.say_and_wait(
        '也就是说——不不不，等一下，外压性，或者是自伤冲动。从各种各样的方向考虑的话……',
      );
      await era.printAndWait([
        '在那之后，',
        tachyon.get_colored_name(),
        ' 就沉浸在了思考的海洋中。',
      ]);
    }
    await era.printAndWait([
      '夏天已经过去，而在即将到来的秋天，想必 ',
      coffee.get_colored_name(),
      ' 也一定能开花结果。',
    ]);
    new CoffeeEduMarks().horse &&
      (await era.printAndWait([
        '……只是，那个漆黑的奇异兽类，却始终在 ',
        me.get_colored_name(),
        ' 脑海中挥之不去。',
      ]));
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(base_attr_list, 3).forEach((e) => (attr_change[e] = 10));
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 10 : 0)),
      35,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(25, 0, 20, true, 3) || flags.wait_flag;
  };

  handlers[95 + 32] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:25:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('夏季合宿（资深年）结束', coffee);
    await era.printAndWait('为期两个月的夏季合宿结束了。');
    await era.printAndWait([
      '在这一整个夏天中并没有发生什么特别的事，',
      me.get_colored_name(),
      ' 与 ',
      coffee.get_colored_name(),
      ' 每天一起在沙滩上训练，',
      coffee.get_colored_name(),
      ' 的身体状况得到了充分的调整。',
    ]);
    await coffee.say_and_wait('平平淡淡的夏季合宿……这样也不错呢……');
    await era.printAndWait([
      '在回特雷森的大巴上，',
      coffee.get_colored_name(),
      ' 看着窗外流逝的景色，发出了这样的感叹。',
    ]);
    era.printButton('「平淡的生活也不错啊……」', 1);
    await era.input();
    await era.printAndWait([
      '但赛',
      coffee.uma_sex_title,
      '的生涯是不可能一直平淡下去的。在回到特雷森后，你们便要开始紧张的 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 备战工作了。',
    ]);
    if (new CoffeeEduMarks().horse) {
      era.println();
      await era.printAndWait([
        '沉重的氛围围绕着 ',
        me.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 二人，异界的赛马之魂、神秘的朋友，种种因素交织在 ',
        coffee.get_colored_name(),
        ' 身上，使',
        coffee.sex,
        '一时间变得迷茫。',
      ]);
      await era.printAndWait([
        '而 ',
        coffee.get_colored_name(),
        ' 的目标——追上朋友，究竟是否为',
        coffee.sex,
        '自己的愿望？',
      ]);
    }
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(base_attr_list, 3).forEach((e) => (attr_change[e] = 10));
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      attr_change,
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(25, 0, 20, true, 3) || flags.wait_flag;
  };

  /**
   * @this CustomizedEdu
   * @author Mr.E.
   */
  handlers.scared = async function (coffee, me, callname) {
    await print_event_name(['怕黑'], coffee);
    await era.printAndWait([
      '深夜，一片漆黑，校园里似乎有哭声，好像是个孩子？',
    ]);
    era.println();
    era.printButton('还是赶紧回宿舍吧……', 1);
    era.printButton('得赶紧过去，希望没出什么大问题……', 2);
    if ((await era.input()) === 1) {
      era.println();
      for (let i = 0; i < 5; ++i) {
        await era.delay(500);
        era.replaceText('…'.repeat(i + 1));
      }
      await era.printAndWait([
        me.get_colored_name(),
        ' 再次寻找着离开这里的路，但四处伸手不见五指，怎么也无法走出去。',
      ]);
      era.println();
      const random_colors = Object.values(chara_colors).map((e) =>
        Array.isArray(e) ? e[0] : e,
      );
      const buffer = [];
      buffer.push({ content: '？？？', fontWeight: 'bold' }, '「');
      const content = '我讨厌讨厌';
      for (let i = 0; i < content.length; ++i) {
        buffer.push({
          content: content[i],
          color: get_random_entry(random_colors),
        });
      }
      buffer.push('你！」');
      await era.printAndWait(buffer);
      era.println();
      await me.say_and_wait(['啊！']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 猛地坐起来，看了看四周。',
      ]);
      era.println();
      await me.say_and_wait(['原来是……梦？']);
      era.println();
      await era.printAndWait([
        '枕在 ',
        coffee.get_colored_name(),
        ' 的腿上，',
        coffee.get_colored_name(),
        ' 正在给 ',
        me.get_colored_name(),
        ' 按摩。',
      ]);
      era.println();
      await coffee.say_and_wait([
        '没关系，',
        callname,
        '，已经结束了，那孩子只是比较孤单而已。',
      ]);
      era.println();
      await era.printAndWait([
        '为了怕吵到 ',
        me.get_colored_name(),
        '，',
        coffee.get_colored_name(),
        ' 的声音更加柔和，低沉',
      ]);
      era.println();
      await coffee.say_and_wait(['以后不用害怕这种事了，我会一直陪在您身边的']);
      get_attr_and_print_in_event(0, undefined, 0, [
        0,
        era.get('maxbase:0:精力') * 0.3,
      ]) && (await era.waitAnyKey());
      sys_love_uma(25, get_random_value(1, 5)) && (await era.waitAnyKey());
    } else {
      await era.printAndWait([
        '不知道为什么，在 ',
        me.get_colored_name(),
        ' 提起精神寻找孩子的时候， ',
        me.get_colored_name(),
        ' 的速度越来越快，越来越快，带着亮光的宿舍门离 ',
        me.get_colored_name(),
        ' 也越来越近，脑海中的哭声反而越来越小',
      ]);
      era.println();
      await me.say_and_wait(['真是累了一天啊，赶紧休息吧。']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 一边这样想，一边打开了宿舍的门。',
      ]);
      era.println();
      await me.say_and_wait(['我是不是忘了点什么？']);
      era.println();
      await era.printAndWait([
        '带着疑惑，',
        me.get_colored_name(),
        ' 沉沉睡去。',
      ]);
      get_attr_and_print_in_event(0, [20], 0) && (await era.waitAnyKey());
    }
  };
};
