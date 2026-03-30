const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.second_chance = async (tachyon, me, callname) => {
    await print_event_name('Eureka', tachyon);
    await era.printAndWait([
      '今天，',
      tachyon.get_colored_name(),
      ' 忽然兴高采烈的跑进了训练员室',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      '！',
      callname,
      '！我知道了（Eureka）……我知道（Eureka）了！',
    ]);
    era.println();

    await era.printAndWait([
      '听见这莫名耳熟的句式，',
      me.get_colored_name(),
      ' 紧张地看了看 ',
      tachyon.get_colored_name(),
      '，却见',
      tachyon.sex,
      '身上穿的并不是浴巾，也不像是刚洗完澡就跑出来的样子才稍微放下心来',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      '！我发现了……最大的可能性……没错……为什么，之前一直没注意到',
    ]);
    era.println();

    await era.printAndWait('究竟在说什么呢');
    await era.printAndWait([
      me.get_colored_name(),
      ' 一脸茫然的看着 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      '不知为何，',
      me.get_colored_name(),
      ' 忽然有种陌生的感觉',
    ]);
    await era.printAndWait(
      '明明已经一起经历了许多，好不容易才走过了最初的三年',
    );
    await era.printAndWait('彼此应该是知根知底的才对');
    await era.printAndWait('为什么，忽然会有一种难以言喻的陌生感');
    era.printButton('「你在说什么？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '哦呀，我还没说明吗？真是……太激动了，导致完全忘记了',
    );
    await tachyon.say_and_wait('嘛，简单来讲，就是所谓的————平行世界');
    await tachyon.say_and_wait(
      '如果将时间比喻成一条长河的话，在这条河上，有着各种不同的支流',
    );
    await tachyon.say_and_wait(
      '这些支流，大多都是极为细小，没有办法单成一河的分岔',
    );
    await tachyon.say_and_wait(
      '但是……在某些情况下，河流会在某些节点，会产生足够大的分支———这些节点，就是所谓的可能性',
    );
    await tachyon.say_and_wait(
      '这些分支，也会化作河流往下流动，而产生的这条支流，便是平行世界的存在',
    );
    era.println();

    await era.printAndWait('平行世界');
    await era.printAndWait('是在各种科幻或者玄幻小说中都经常出现的主题');
    await era.printAndWait([
      '但没想到 ',
      tachyon.get_colored_name(),
      ' 居然会相信这些',
    ]);
    era.printButton('「但说到底，这种东西也没有人能验证他的真假不是吗」', 1);
    await era.input();

    await tachyon.say_and_wait('嗯……你说的对');
    await tachyon.say_and_wait(
      '科学无论如何都是要小心求证的……虽然假设是这样，但到底该如何证明平行世界的存在与否……',
    );
    await tachyon.say_and_wait(
      '到底该怎么证明呢……果然，还是必须要有某个，可能穿越，有办法在世界中穿梭而不干涉原先记忆的人，到底哪里会有这种人呢……真是，苦恼呢',
    );
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 在讲的时候，不断将眼神朝向 ',
      me.get_colored_name(),
      ' 这边瞄着',
    ]);

    era.printButton('「……」', 1);
    era.printButton('「什么意思？」', 2);
    if ((await era.input()) === 1) {
      await tachyon.say_and_wait([
        '呵呵……看来你很清楚我在说的是什么啊，',
        callname,
        '……还是说，应该称呼你为……不，算了，我不管你在其他地方是谁，在这里，你就是我的',
        callname,
        '，除此之外没有其他身份',
      ]);
    } else {
      await tachyon.say_and_wait([
        '哦？真的不知道……还是在装傻？罢了，不重要，反正在这里你就是我的 ',
        callname,
        '，没有其他身份',
      ]);
    }
    era.println();

    await tachyon.say_and_wait(
      '不过，真是令人好奇啊……其他世界，具有其他可能性的爱丽速子，到底会是什么样……会不会有早就跨越了极限，又或者被困在原地，止步于可能性之前的爱丽速子……',
    );
    await tachyon.say_and_wait([
      callname,
      '，你一定要好好的留下记录啊，就当成你这次出差的研究课题了',
    ]);
    era.println();

    await me.say_and_wait('……欸？', true);
    await era.printAndWait('等一下，什么情况？');
    await era.printAndWait('为什么从刚刚开始，就一直在说些听不懂的话');
    await era.printAndWait([
      '虽说 ',
      tachyon.get_colored_name(),
      ' 本来就是这种自说自话的人，但今天也太过头了',
    ]);

    era.printButton(`「${sys_get_callname(0, 32)}？」`, 1);
    await era.input();

    await tachyon.say_and_wait('还有————哦呀，看来时间差不多了');
    era.println();

    await era.printAndWait('时间？');
    await era.printAndWait('什么时间？');
    await era.printAndWait([
      me.get_colored_name(),
      ' 回过头，忽然发现一切都消失了',
    ]);
    await era.printAndWait('只剩下一片空白');
    await era.printAndWait('一片苍白的空间中，只有前方，一扇古旧深桐的木门');
    await era.printAndWait([
      '印象中仿佛见过，踩着彩色光芒的',
      tachyon.uma_sex_title,
      '从门里跑出的画面',
    ]);
    await era.printAndWait([
      '转过头来，',
      tachyon.get_colored_name(),
      ' 不知何时已经不在，整个空间中仅剩 ',
      me.get_colored_name(),
      ' 一人和眼前的门',
    ]);
    await era.printAndWait([
      '空间中却还回荡着，',
      tachyon.get_colored_name(),
      ' 最后的一句话',
    ]);
    era.println();

    const love = era.get('love:32');
    if (love < 50) {
      await tachyon.say_and_wait('一定不要忘了，实验数据啊！');
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 那狂热的声音在 ',
        me.get_colored_name(),
        ' 耳边回荡',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 仿佛看见',
        tachyon.sex,
        '那因研究而陷入狂热的表情',
      ]);
    } else if (love < 90) {
      await tachyon.say_and_wait('一定，要把实验数据带回来哦');
      era.println();

      await era.printAndWait([
        '听见',
        tachyon.sex,
        '的最后一句话，',
        me.get_colored_name(),
        ' 愣了愣',
      ]);
      await era.printAndWait(['明面上是', tachyon.sex, '对实验数据的狂热']);
      await era.printAndWait([
        '但 ',
        me.get_colored_name(),
        ' 却听出了话中的另一层意思',
      ]);
      await tachyon.say_and_wait('一定，要回来哦', true);
    } else {
      await tachyon.say_and_wait([
        '真令人烦恼……那个世界的我一定也会爱上 ',
        callname,
        ' 吧，情敌增加了呢',
      ]);
      era.println();

      await era.printAndWait('最后的最后，说的却是这样仿佛无关紧要的闲话');
      await era.printAndWait('那是因为……除此之外的已经无须说明');
      await era.printAndWait([
        '实验数据？身为爱人，没有不满足',
        tachyon.sex,
        '的好奇心的理由',
      ]);
      await era.printAndWait([
        '一定要回来？哪怕不用',
        tachyon.sex,
        '来说，也一定会回来的',
      ]);
      await era.printAndWait(
        '整个过程就宛如自己只是要出门去打酱油一般稀松平常',
      );
    }
    era.println();

    await era.printAndWait('那么……');
    await era.printAndWait([me.get_colored_name(), ' 朝着大门伸手']);
    await era.printAndWait([
      '这一次遇到的，会是怎么样的 ',
      tachyon.get_colored_name(),
      ' 呢？',
    ]);
    if (era.get('cflag:32:育成次数') > 1) {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            '哦？',
            callname,
            '，又要去寻找新的可能性了吗？',
          ]),
        () =>
          tachyon.say_and_wait(
            '哦呀，既然回来了，那就赶快先把实验数据交出来！',
          ),
        () =>
          tachyon
            .say_and_wait('这样啊……听起来真不错呢')
            .then(() => tachyon.say_and_wait('那么时间也差不多了，对吧？'))
            .then(() => tachyon.say_and_wait(['下次再聊吧，', callname])),
      ];
      if (love >= 75) {
        buffer.push(() =>
          tachyon
            .say_and_wait(['早上好啊，', callname, '，或者说……好久不见？'])
            .then(() =>
              tachyon.say_and_wait('不，果然还是这样比较好吧……欢迎回来♡'),
            ),
        );
      }
      await get_random_entry(buffer)();
    }
  };

  handlers.drug_notice = async (tachyon, me) => {
    new TachyonLifeMarks().drug_notice = get_random_value(12, 36);
    const dice = Math.random();
    let effect;
    if (dice < 0.1) {
      effect = 0;
    } else if (dice < 0.5) {
      effect = 1;
    } else if (dice < 0.9 && era.get('flag:角色性别') === 1) {
      effect = 2;
    } else {
      effect = 3;
    }
    const in_team_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    );
    const ret = await print_title_with_kojo(
      i18n().timon.random_events,
      'drug_notice',
      tachyon,
      me,
      effect,
    );
    if (ret[0] === 1) {
      switch (effect) {
        case 0:
          in_team_list
            .filter((e) => era.get(`cflag:${e}:育成回合计时`) < 3 * 48)
            .forEach((e) =>
              era.set(
                `talent:${e}:练习X手`,
                Math.min(era.get(`talent:${e}:练习X手`) + 1, 2),
              ),
            );
          break;
        case 1:
          in_team_list.forEach((e) => era.set(`status:${e}:健康茶`, 1));
          break;
        case 2:
          in_team_list.forEach(
            (e) =>
              era.get(`talent:${e}:泌乳`) === 0 &&
              era.set(`talent:${e}:泌乳`, 2),
          );
          break;
        case 3:
          in_team_list.forEach((e) =>
            sys_change_lust(e, get_random_value(500, 1500)),
          );
      }
    }
  };
};
