const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {number} stamina_ratio
 */
module.exports = async (tachyon, me, callname, hook, stamina_ratio) => {
  const buffer = [];
  const love = era.get('love:32');
  const relation = era.get('relation:32:0');
  era.print([tachyon.get_colored_name(), ' 的训练顺利结束了！']);
  era.println();
  if (
    new TachyonEduMarks().plan_b &&
    era.get('cflag:32:育成回合计时') < 95 + race_infos[race_enum.tenn_spr].date
  ) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          '为了让 ',
          sys_get_colored_callname(32, 25),
          '……能够更上一层',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 格外努力的结束了训练，但',
          tachyon.sex,
          '口中喊着的口号却令人不知该如何面对',
        ]);
      },
      async () => {
        await tachyon.say_and_wait([
          '要是我不努力，去追赶 ',
          sys_get_colored_callname(32, 25),
          ' 的话……',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 结束了训练']);
        await era.printAndWait('跑的依旧那么绚烂');
        await era.printAndWait('但总让人感觉，缺少了什么');
      },
      async () => {
        await tachyon.say_and_wait('为了实验的成功……哪怕是我也……');
        era.println();
        await era.printAndWait([
          '结束训练的 ',
          tachyon.get_colored_name(),
          ' 低语着，虽然内容如此，但',
          tachyon.sex,
          '的口气中仿佛带着一抹犹豫',
        ]);
        await era.printAndWait([
          '……不，那或许也只是 ',
          me.get_colored_name(),
          ' 自己的脑补而已吧',
        ]);
      },
    );
  } else if (love >= 75) {
    if (stamina_ratio > 0.45) {
      buffer.push(async () => {
        await tachyon.say_and_wait([callname, '！']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 结束训练后不顾身上大汗满身，朝着 ',
          me.get_colored_name(),
          ' 扑了过来',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 慌忙想把',
          tachyon.sex,
          '推开',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '有什么关系嘛，不过是爱人的体液而已……大不了晚上你把你的体液还给我不就好了♡',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 不顾 ',
          me.get_colored_name(),
          ' 的反对，将 ',
          me.get_colored_name(),
          ' 抱住，在 ',
          me.get_colored_name(),
          ' 耳旁低语着',
        ]);
      });
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait('呼……训练结束了吗……终于');
        await tachyon.say_and_wait(
          '真是……运动的话，比起单纯的跑步，我更喜欢晚上的那种啊……',
        );
        await tachyon.say_and_wait(['如何？', callname, '，你会满足我的吧♡']);
      });
    }
  } else if (love >= 50) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait('哼哼，怎么样');
        await tachyon.say_and_wait('再度为我着迷了？呵呵，真是浮夸的说法');
        await tachyon.say_and_wait('不过，我很喜欢哦♡');
      },
      async () => {
        await tachyon.say_and_wait([callname, '！', callname, '………啊']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 正想向往常一样朝着 ',
          me.get_colored_name(),
          ' 跑来，却忽然停下了脚步',
        ]);
        era.println();
        await tachyon.say_and_wait('………不，现在果然还是算了');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '看了看自己身上汗流浃背湿透的运动服后，不知为何与 ',
          me.get_colored_name(),
          ' 保持了一段距离',
        ]);
        await era.printAndWait('难道说……是在意身上的味道吗？');
        await era.printAndWait([
          '不，如果是那个 ',
          tachyon.get_colored_name(),
          ' 的话……应该不可能吧',
        ]);
      },
    );
  } else if (relation > 525) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          '哼哼哼，',
          callname,
          '，今天跑的如何！多夸一点也没关系哦！',
        ]);
        era.println();
        await era.printAndWait('三十分钟后');
        era.println();
        await tachyon.say_and_wait('………不，也没有必要夸到那种地步……');
      },
      () =>
        tachyon
          .say_and_wait('呼……好累啊……')
          .then(() =>
            tachyon.say_and_wait([callname, '……背我回去休息～～～～']),
          ),
      () =>
        tachyon
          .say_and_wait('只要这样下去……一定可以达到的')
          .then(() => tachyon.say_and_wait('极限的目标……')),
    );
  } else if (relation > 225) {
    buffer.push(
      () =>
        tachyon
          .say_and_wait(
            '哼哼……这样的速度，只要能够继续稳步提升，超越极限绝对没问题',
          )
          .then(() =>
            tachyon.say_and_wait([
              '……没有必要那么急，稍微休息一下也没关系？',
              callname,
              '，研究这种东西，停留在原地就等于退步了，为了提升自我，必须一刻也不松懈的努力才行',
            ]),
          ),
      () =>
        tachyon
          .say_and_wait('呼哈哈哈！就是这样，就是这种速度！')
          .then(() =>
            tachyon.say_and_wait('还要更快，还要更快，直到……超越光速！'),
          ),
      () =>
        tachyon.say_and_wait(
          '用时让我看看……哼哼哼……很好，照这样下去，我们的梦想也就在不远处了！',
        ),
    );
  } else if (relation > 75) {
    buffer.push(
      () => tachyon.say_and_wait('很好，今天的，就是最优解的跑法没错！'),
      () =>
        tachyon.say_and_wait([
          '呼……',
          callname,
          '，数据让我看看……呵呵，很好，很好，比起上次训练又大幅上升了，照这样下去绝对没问题',
        ]),
      () => tachyon.say_and_wait('很好很好，这样研究进度就又前进0.02百分点了'),
    );
  } else {
    buffer.push(
      () => tachyon.say_and_wait('呼，原来如此……今天的实验成果不错'),
      () =>
        tachyon.say_and_wait(
          '这么简单的训练，完成起来毫无难度啊……作为测量实力的对照组吗？',
        ),
      () => tachyon.say_and_wait('理所当然的成果罢了'),
    );
  }
  await get_random_entry(buffer)();
  era.println();
  if (!era.get('status:32:摸鱼') && Math.random() < stamina_ratio * 0.2) {
    await era.waitAnyKey();
    if (relation > 225) {
      await print_event_name('追逐战', tachyon);
      await tachyon.say_and_wait([callname, '！快帮我拦住', tachyon.sex, '！']);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 今天的训练刚结束']);
      await era.printAndWait([
        me.get_colored_name(),
        ' 正想挥挥手示意 ',
        tachyon.get_colored_name(),
        ' 回来，却看见 ',
        tachyon.get_colored_name(),
        ' 追着一名',
        tachyon.uma_sex_title,
        '朝着 ',
        me.get_colored_name(),
        ' 跑来',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        `${tachyon.uma_sex_title}A`,
        '救，救命啊！',
      );
      await tachyon.say_and_wait(
        '别怕……不会有事的！只是想稍微占用一下你的时间，做几个调查，问几个问题，然后……然后……要是能稍微试些药的话……！',
      );
      era.println();
      await era.printAndWait([
        '眼看那名',
        tachyon.uma_sex_title,
        '离 ',
        me.get_colored_name(),
        ' 越来越近',
      ]);
      era.print([me.get_colored_name(), ' 决定……']);
      era.printButton('放任两人通过', 1);
      era.printButton('拦住速子', 2);
      if ((await era.input()) === 1) {
        await say_by_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          '训练员',
          me.adult_sex_title,
          '，为什么只是看着！？',
        ]);
        await tachyon.say_and_wait([
          callname,
          '，为什么不帮我拦住',
          tachyon.sex,
          '！？',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 让开了身子，让两人跑过',
        ]);
        await era.printAndWait(
          '两人同时发出了质疑的喊声，然而质疑的内容却不相同',
        );
        await era.printAndWait([me.get_colored_name(), ' 耸了耸肩']);
        await era.printAndWait([
          '虽然知道 ',
          tachyon.get_colored_name(),
          ' 这么做是不好的，但身为',
          tachyon.sex,
          '的豚鼠又必须帮助',
          tachyon.sex,
          '的实验',
        ]);
        await era.printAndWait('……真是两难啊');
        await era.printAndWait([
          '所以 ',
          me.get_colored_name(),
          ' 决定放弃思考，两不相帮应该就好了吧',
        ]);
        era.drawLine();
        await era.printAndWait([
          '隔天，',
          me.get_colored_name(),
          ' 来到实验室时发现平常桌上摆着的给自己喝的药剂加倍了',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 望向 ',
          tachyon.get_colored_name(),
          '，',
          tachyon.sex,
          '却只是面无表情的盯着 ',
          me.get_colored_name(),
        ]);
        await era.printAndWait('…………没想到，受害的依然是自己啊');
        hook.arg = true;
      } else {
        await era.printAndWait('实验什么的暂且不提');
        await era.printAndWait([
          '今天的训练 ',
          tachyon.get_colored_name(),
          ' 已经跑了够多了，要是再增加的话可能会对身体造成损伤',
        ]);
        era.println();
        await say_by_passer_by_and_wait(`${tachyon.uma_sex_title}A`, [
          '训练员',
          me.adult_sex_title,
          '！谢谢您！',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 拉住了 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '小',
          tachyon.uma_sex_title,
          '越跑越远，',
          tachyon.get_colored_name(),
          ' 看已经没有追上的机会，只能怨恨的瞪着 ',
          me.get_colored_name(),
        ]);
        await era.printAndWait([me.get_colored_name(), ' 心中有种不祥的预感']);
        era.drawLine();
        await era.printAndWait([
          '隔天，',
          me.get_colored_name(),
          ' 来到实验室时发现平常桌上摆着的给自己喝的药剂加倍了',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 望向 ',
          tachyon.get_colored_name(),
          '，',
          tachyon.sex,
          '却只是面无表情的盯着 ',
          me.get_colored_name(),
        ]);
        await era.printAndWait('……………看来昨天的预感是正确的啊');
        hook.arg = false;
      }
    } else {
      await print_event_name('追加实验', tachyon);
      await tachyon.say_and_wait('不够啊，实验数据还缺少一堆……');
      await tachyon.say_and_wait(
        '必须继续才行……你要是不想继续的话就回去吧，我自己来就好',
      );
      era.println();
      era.print([me.get_colored_name(), ' 决定']);
      era.printButton('放任', 1);
      era.printButton('阻止', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait('如果只是纯粹的加练自己或许能够阻止');
        await era.printAndWait('但缺乏实验数据……');
        era.println();
        await me.say_and_wait('确实，挺致命的啊……那么今天再稍微待晚一点吧');
        await tachyon.say_and_wait(
          '……我不是说你可以回去了吗？这不是加练，只是我自己的实验需要数据而已',
        );
        me.say('是啊，所以');
        era.printButton('「实验的时候，没有实验助手可不行吧」', 1);
        era.printButton(
          '「这不是身为训练员，而是我下班后的自由时间，怎么利用也是我的自由不是吗？」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait('…………呵呵');
        await tachyon.say_and_wait('那么，就来帮我纪录数据吧');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 点了点头，看着',
          tachyon.sex,
          '继续跑了起来',
        ]);
        hook.arg = true;
      } else {
        await era.printAndWait('不行');
        await era.printAndWait('无论用什么名目，加练都是不能允许的');
        await era.printAndWait([
          '而且，',
          tachyon.get_colored_name(),
          ' 也知道吧，这样效率是不会提升的，相反地，强行去赶进度只会导致忙中出错',
        ]);
        era.println();
        await tachyon.say_and_wait('…………啧');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 没说什么就回去了',
        ]);
        await era.printAndWait([
          '如果是合理的说服就会乖乖听劝，这也算是',
          tachyon.sex,
          '的优点吧',
        ]);
        hook.arg = false;
      }
    }
  }
};
