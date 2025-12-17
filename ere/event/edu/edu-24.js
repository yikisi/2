/**
 * @file 摩耶重炮 - 育成
 * @author 黑奴二号
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { attr_enum, fumble_result } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-24/week-start-1'),
  require('#/event/edu/edu-events-24/week-start-2'),
].forEach((f) => f(week_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-24/week-end')(week_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} */
const office_study_handlers = {};

require('#/event/edu/edu-events-24/office-study')(office_study_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} */
const school_atrium_handlers = {};

require('#/event/edu/edu-events-24/school-atrium')(school_atrium_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} */
const back_school_handlers = {};

require('#/event/edu/edu-events-24/back-school')(back_school_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} */
const out_start_handlers = {};

require('#/event/edu/edu-events-24/out-start')(out_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceStartParams):Promise>} */
const race_start_handlers = {};

require('#/event/edu/edu-events-24/race-start')(race_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-24/race-end-1'),
  require('#/event/edu/edu-events-24/race-end-2'),
].forEach((f) => f(race_end_handlers));

module.exports = class extends CustomizedEdu {
  async back_school(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (back_school_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await back_school_handlers[event_object.arg](
        maya,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
      flags.wait_flag && (await era.waitAnyKey());
    }
  }

  async office_study(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (office_study_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await office_study_handlers[event_object.arg](maya, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async out_church(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 95 + 1) {
      return;
    }
    era.set('cflag:24:节日事件标记', 0);
    let wait_flag = false;
    await print_event_name('新年参拜', maya);
    await era.printAndWait([
      '命运的第三年。',
      maya.get_colored_name(),
      ' 今年将挑战资深级。',
    ]);
    era.printButton('「资深级」', 1);
    await era.input();
    await era.printAndWait('──今年一定会是关键的一年。');
    await maya.say_and_wait(['嘿嘿♪', callname, '，别摆出严肃的表情～♪']);
    await maya.say_and_wait('我们可是难得来到神社约会哦？要露出笑容☆');
    era.printButton('「你还真悠哉呢」', 1);
    await era.input();
    await maya.say_and_wait('啊哈哈，因为我很开心嘛！');
    await maya.say_and_wait('哼哼。人家呢，已经决定好今年的目标了♪');
    await maya.say_and_wait([
      '我一定要超越',
      maya.sex,
      '……超越拿出全力的 ',
      sys_get_colored_callname(24, 16),
      '！',
    ]);
    await maya.say_and_wait('我想了很多很多，不过对我来说──');
    await maya.say_and_wait('──这是我现在最想达成的事情！');
    era.printButton('「你一定能办到的哦」', 1);
    await era.input();
    await maya.say_and_wait('嘻嘻……人家也这么觉得♪');
    await era.printAndWait([
      '──',
      me.get_colored_name(),
      ' 看着',
      maya.sex,
      '的笑容，又一次冒出这个想法。',
    ]);
    era.println();
    era.printButton(
      '（希望' + maya.sex + '能一直保持健康活力）（体力+300）',
      1,
    );
    era.printButton(
      '（希望' + maya.sex + '能学到许多，成长茁壮）（全属性+10）',
      2,
    );
    era.printButton(
      '（希望' + maya.sex + '能成为出色的大人）（技能点数+70）',
      3,
    );
    const ret = await era.input();
    await maya.say_and_wait(['嗯？', callname, '，你有说了什么吗？']);
    era.printButton('「我刚才祈祷了」', 1);
    await era.input();
    switch (ret) {
      case 1:
        await maya.say_and_wait('咦！？狡猾好狡猾！竟然自己一个人先祈祷！');
        await maya.say_and_wait([
          '真是的，重来一次！',
          callname,
          ' 要和我一起祈祷才行！',
        ]);
        await maya.say_and_wait('然后等祈祷完，我们要继续去约会哦♪知道吗☆');
        await era.printAndWait([
          '然后在新年参拜完的回程路上，',
          me.get_couple_title(),
          ' 进行了一场路边摊约会后就回去了。',
        ]);
        wait_flag = get_attr_and_print_in_event(24, [], 0, [300]);
        break;
      case 2:
        await maya.say_and_wait('哈哈，你又摆出那种表情。');
        era.printButton('「……怎样的表情？」', 1);
        await era.input();
        await maya.say_and_wait('嘿嘿，就是……');
        await maya.say_and_wait(
          '一脸『我能为摩耶重炮做什么呢』的表情。还有『我要好好珍惜摩耶重炮』的表情！',
        );
        await maya.say_and_wait('只要看见那种表情，我就会变得精神百倍♪');
        await maya.say_and_wait('呵呵，好！去进行新年第一次的训练吧☆');
        await era.printAndWait([
          '于是这天，',
          me.get_colored_name(),
          ' 就和 ',
          maya.get_colored_name(),
          ' 进行了新年第一次的训练。',
        ]);
        wait_flag = get_attr_and_print_in_event(24, new Array(5).fill(10), 0);
        break;
      case 3:
        await maya.say_and_wait(['呵呵呵……', callname, '，太嫩，你还太嫩了！']);
        await maya.say_and_wait([
          '人家可是要成为出色的成熟',
          maya.get_phy_sex_title(),
          '哦～☆',
        ]);
        era.printButton('「有哪里不同吗？」', 1);
        await era.input();
        await maya.say_and_wait([
          '完全不同啦～！受不了～！！『大人』和『成熟',
          maya.get_phy_sex_title(),
          '』的差别就在……',
        ]);
        await maya.say_and_wait('……差在哪呢。');
        era.printButton('「你果然不懂嘛……」', 1);
        await era.input();
        await maya.say_and_wait(
          '啊哇哇！？才没有，才没有呢！！这两个真的不同啦～！！',
        );
        await era.printAndWait([
          '过了几天，',
          me.get_colored_name(),
          ' 在图书馆看见 ',
          maya.get_colored_name(),
          ' 紧盯着字典。',
        ]);
        wait_flag = get_attr_and_print_in_event(24, [], 70);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_start(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (out_start_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await out_start_handlers[event_object.arg](maya, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async race_end(maya, me, callname, hook, extra_flag) {
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](maya, me, callname, extra_flag))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('竞赛获胜！', maya);
        await maya.say_and_wait('Victory☆胜利的摩耶重炮光荣凯旋！');
        era.printButton('「恭喜！」', 1);
        await era.input();
        await maya.say_and_wait('嘿嘿！有开心吗？？人家的表现有让你心动吗？？');
        era.printButton('「当然有」', 1);
        era.printButton('「还不够」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait('哇☆太好了，太好了！');
          await maya.say_and_wait('不过，人家发现了♪我们还能感到更加心动！');
          await maya.say_and_wait('所、以、说！下场比赛……要做好觉悟哦☆');
        } else {
          await maya.say_and_wait('……！！');
          await maya.say_and_wait([
            '呀☆',
            callname,
            ' 真是太棒了！人家也有同样的想法～！',
          ]);
          await maya.say_and_wait(
            '那个啊那个啊！最后的直线……终点板看起来十分耀眼！',
          );
          await maya.say_and_wait(
            '但是……抵达终点之后，那份耀眼和心动都不见了……',
          );
          await maya.say_and_wait('于是我明白了！人家还能感到更加心动！');
          await maya.say_and_wait([
            '所、以、说！',
            callname,
            '，我还会让你更加更～加心动的♪',
          ]);
        }
      } else if (extra_flag.rank <= 5) {
        await print_event_name('竞赛上榜', maya);
        await maya.say_and_wait([
          '啊，',
          callname,
          '，你终于来了！比赛结束了，我们快走吧～！',
        ]);
        await maya.say_and_wait('然后啊然后啊，我想跟你一起吃赛场的限定甜点♪');
        era.printButton('「在这之前先检讨比赛……」', 1);
        await era.input();
        await maya.say_and_wait(
          '咦？这次的确是输掉了，不过我觉得下次会赢啊？？',
        );
        await maya.say_and_wait(
          '我已经清楚知道大家有多强，还有赛道抢位的方式了♪没事没事！',
        );
        era.printButton('「我很期待」', 1);
        era.printButton('「……来练习吧！」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait(
            '包在我身上☆人家会跑出超乎你期待的表现！毕竟──',
          );
          await maya.say_and_wait('──用好的方式打破期待，这才是成熟的女人……');
          await maya.say_and_wait('书上是这么写的♪');
          await maya.say_and_wait([
            '下次会获胜，让 ',
            callname,
            ' 听我的话！一定会！',
          ]);
        } else {
          await maya.say_and_wait([
            '嗯～既然 ',
            callname,
            ' 都这么说了，我会加油的……',
          ]);
          await maya.say_and_wait([callname, ' 也太担心了吧？？']);
          era.printButton('「因为我希望你拿下第一」', 1);
          await era.input();
          await maya.say_and_wait('……咦？所以说，是为了人家吗？');
          await maya.say_and_wait('呀☆我备受关爱耶！');
          await maya.say_and_wait('我知道了！人家会加油的♪');
        }
      } else if (extra_flag.rank <= 10) {
        await print_event_name('竞赛败北', maya);
        await maya.say_and_wait('啊～输掉了～还以为会赢的说。');
        era.printButton('「因为其他人也很厉害」', 1);
        await era.input();
        await maya.say_and_wait('……其他人？');
        await maya.say_and_wait('紧急情况！不行不行，现在不能讲这种话～～！！');
        await maya.say_and_wait(['我希望 ', callname, ' 眼里只有人家！']);
        await maya.say_and_wait(
          '我说我说！就算那么说，你还是LOVE☆摩耶重炮……对吧！？对不对！！',
        );
        era.printButton('「当然！」', 1);
        era.printButton('「……可能得看你的表现而定」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait('呼……好险……');
          await maya.say_and_wait('……就是那个啊，我下次比赛会拿下第一的。');
          await maya.say_and_wait('所以……要帮我加油哦！');
          await maya.say_and_wait(
            '我一定……绝对会让你觉得人家比其他人还要厉害！',
          );
        } else {
          await maya.say_and_wait(['哼～！', callname, ' 好坏心！']);
          await maya.say_and_wait('好哦！下场比赛我一定会跑出超棒的成绩！');
          await maya.say_and_wait(
            '我要让你知道人家是很棒的女人，比任何人都还要可爱！',
          );
          await maya.say_and_wait('横刀夺爱正合我意！！');
        }
      } else {
        await print_event_name('下次不会输了！', maya);
        await maya.say_and_wait(['又输了……怎么办，', callname, '……人、人家……']);
        era.printButton('「摩耶重炮……」', 1);
        await era.input();
        await maya.say_and_wait('──超～级兴奋的～～！！');
        era.printButton('「咦！？」', 1);
        await era.input();
        await maya.say_and_wait('不知道该怎么说，有种引擎被发动的感觉！');
        await maya.say_and_wait(
          '以为办得到的事情却办不到！人家心跳加速到好像快爆炸了！',
        );
        await maya.say_and_wait('对了！就这么『咻──！』地冲去训练好了！？');
        era.printButton('「你先冷静一下」', 1);
        era.printButton('「来训练吧！」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait('咦────────！？');
          await maya.say_and_wait('引擎已经热开，随时都能起飞了耶！？');
          era.printButton('「紧急起飞是导致失速的原因！」', 1);
          await era.input();
          await maya.say_and_wait('呜呜！的确！这样人家会坠落……！');
          await maya.say_and_wait('好险好险！应该先确实维修好引擎才行……对吧！');
          await era.printAndWait([
            '之后，',
            me.get_colored_name(),
            ' 和 ',
            maya.get_colored_name(),
            ' 一起针对下场比赛进行准备。',
          ]);
        } else {
          await maya.say_and_wait(['呀☆不愧是 ', callname, '！最喜欢你了！']);
          await maya.say_and_wait('好！人家要拿出真本事了！');
          await maya.say_and_wait([
            '我会展现特技飞行，',
            callname,
            '，要小心不要掉下去了……知道吗♪',
          ]);
          await era.printAndWait([
            '就跟自己宣示的一样，',
            maya.get_colored_name(),
            ' 拿出全力投入在训练上……实力更加精湛了！',
          ]);
        }
      }
    }
  }

  async race_start(maya, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](
        maya,
        me,
        callname,
        extra_flag,
      ))
    ) {
      if (
        Math.random() <
        (0.2 * era.get('base:24:体力')) / era.get('maxbase:24:体力')
      ) {
        await print_event_name('竞赛之前', maya);
        await era.printAndWait([
          '赛前去休息室发现……',
          maya.get_colored_name(),
          ' 好像正在脑中模拟比赛。',
        ]);
        await maya.say_and_wait('然后前面的人过来的话，就『咻！』地突破……');
        era.printButton('（……好惊人的集中力）', 1);
        await era.input();
        await maya.say_and_wait(['……咦！？', callname, '！？']);
        await maya.say_and_wait(
          '啊哇哇，吓我一跳！我完全没注意到！怎么会这样！？',
        );
        era.printButton('「你刚才好像很专注」', 1);
        await era.input();
        await maya.say_and_wait('嘿嘿，对啊！人家从刚才心脏就一直跳个不停。');
        await maya.say_and_wait(['不过……接着就换 ', callname, ' 咯！']);
        await maya.say_and_wait('我会让你沉迷于我奔驰的样子的♪');
      } else {
        return await super.race_start(maya, me, callname, hook, extra_flag);
      }
    }
  }

  async school_atrium(maya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, event_object);
      return;
    }
    if (school_atrium_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await school_atrium_handlers[event_object.arg](maya, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async train_fail(maya, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(maya, me, callname, hook, extra_flag);
    }
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.fumble) {
      await print_event_name('严禁逞强！', maya);
      await maya.say_and_wait('嘿嘿，搞砸了～');
      await maya.say_and_wait([
        '不过 ',
        callname,
        ' 也太夸张了啦～明明就不是很严重的伤！',
      ]);
      await maya.say_and_wait(
        '好了，赶快回去训练吧！人家已经是大人了，这点伤不算什么──',
      );
      await maya.say_and_wait('……好痛～～！！');
      era.printButton('「你还好吧！？」', 1);
      await era.input();
      await maya.say_and_wait('我没事……就算很痛，也会说不痛才像个大人。');
      await maya.say_and_wait('所以我才不会说很痛！');
      await maya.say_and_wait('跟小朋友一样，很逊……人家才不要那样～～！');
      era.printButton('「那就要有『大人』的样子」', 1);
      era.printButton('「才不会很逊！」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await maya.say_and_wait('大人的样子……？是指乖乖休息吗？');
        await maya.say_and_wait('原来如此……那样也算『大人』啊。');
        await maya.say_and_wait(
          '……我知道了！人家虽然不会痛，但会像大人一样，乖乖休息的。',
        );
        await maya.say_and_wait('虽然根……根本不会痛……');
        await era.printAndWait('就这样，总算是让摩耶重炮休息了。');
        era.println();
      } else {
        if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
          await maya.say_and_wait('……那个啊，老实说，受伤的地方，超级痛的。');
          await maya.say_and_wait([
            '可是可是，我想认真和 ',
            callname,
            ' 训练……！',
          ]);
          era.printButton('「好好休息，之后再努力吧」', 1);
          await era.input();
          await maya.say_and_wait('……嗯！');
          await era.printAndWait(
            '等待伤势恢复虽然花了不少时间……但总算是恢复健康了。',
          );
        } else {
          await maya.say_and_wait([callname, '……可是……']);
          era.printButton('「硬是逞强让伤势恶化才逊」', 1);
          await era.input();
          await maya.say_and_wait('啊！确实没错！');
          await maya.say_and_wait(
            '……不、不过不要紧的！只是有点痛而已，这点伤不会恶化的──',
          );
          await maya.say_and_wait('唔～～！！好痛────！！');
          await era.printAndWait(
            '硬要装没事却导致伤势恶化，结果变成要休息好几天了……',
          );
        }
      }
    } else {
      await print_event_name('保重身体！', maya);
      await era.printAndWait([
        '摩耶重炮在训练的过程中受了伤，',
        me.get_colored_name(),
        ' 急忙带',
        maya.sex,
        '到保健室。',
      ]);
      await maya.say_and_wait('啊～好痛！这下子可能不能训练了～');
      era.printButton('「乖乖静养吧……！」', 1);
      await era.input();
      await maya.say_and_wait('嗯……是可以啦……');
      await maya.say_and_wait([
        '要是 ',
        callname,
        ' 能照顾我，我说不定会更有精神♪',
      ]);
      era.printButton('「我知道了」', 1);
      era.printButton('「你还是小孩子呢」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await maya.say_and_wait('呀☆真是太好了～！');
        await maya.say_and_wait('那么那么，先用额头帮我量体温……');
        era.printButton('「体温？你是受伤吧？」', 1);
        await era.input();
        await maya.say_and_wait(
          '别在意，别在意！用心跳加速的感觉，让痛痛『咻！』地一声飞走吧──',
        );
        await maya.say_and_wait('啊呜！！！！奇、奇怪？好像真的……很痛。');
        await era.printAndWait([
          '你慌张地照顾得意忘形的摩耶重炮，总算是让',
          maya.sex,
          '乖乖休息了……',
        ]);
        era.println();
      } else if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
        await maya.say_and_wait(['……难道，是不合 ', callname, ' 的喜好吗？']);
        await maya.say_and_wait([
          '那么那么，',
          callname,
          '！人家要做什么你才会『心动』～？',
        ]);
        era.printButton('「看你健康才最让我开心」', 1);
        await era.input();
        await maya.say_and_wait('健康……？只要人家恢复健康，你就会开心了？');
        await maya.say_and_wait('嘿嘿，嘿嘿嘿……嘿嘿嘿嘿嘿！');
        await maya.say_and_wait('我知道了！我会好好地休息，恢复健康的～！');
        await maya.say_and_wait('然后啊然后啊！到时候再一起训练吧☆');
        await era.printAndWait(
          '就跟自己宣示的一样，摩耶重炮好好地休息……健康地继续训练！',
        );
      } else {
        await maya.say_and_wait('咦！？才不是呢！这是『大人』的撒娇方式～！');
        await maya.say_and_wait(
          '怪了，书上明明有写用这招就能『一击穿心☆』的说……',
        );
        await maya.say_and_wait(
          '我懂了！是因为我没有发烧！要是我发烧，一定能像书上那样──',
        );
        era.printButton('「乖、乖、休、息！」', 1);
        await era.input();
        await maya.say_and_wait('呜呜……好啦～～');
        await era.printAndWait([
          '虽然 ',
          maya.get_colored_name(),
          ' 一脸不满，最后还是总算让',
          maya.sex,
          '乖乖休息了……',
        ]);
      }
    }
  }

  async train_success_add(maya, me, callname) {
    await print_event_name('额外的自主训练', maya);
    const teio = get_chara_talk(3);
    await maya.say_and_wait('那个呀！训练也结束了～要不要和人家去个好地方？');
    era.printButton('「好地方是指哪里？」', 1);
    await era.input();
    await maya.say_and_wait(
      '跟你说跟你说！有一个景点，可以看见非常闪亮的夜景──',
    );
    await teio.say_and_wait([
      '嘿哟，嘿哟……咦？是 ',
      sys_get_colored_callname(3, 24),
      '～！',
    ]);
    await maya.say_and_wait([
      '啊，是 ',
      sys_get_colored_callname(24, 3),
      '！嗨！',
    ]);
    await teio.say_and_wait('我正好在找你！我想跟你说，我今天可能会晚点回去！');
    await maya.say_and_wait([
      '呀☆居然会晚归，看来有进展～！',
      sys_get_colored_callname(24, 3),
      ' 是大人了～！',
    ]);
    await teio.say_and_wait([
      '嗯！刚才看了 ',
      sys_get_colored_callname(3, 17),
      ' 的比赛后，我就很想去跑一下！',
    ]);
    await teio.say_and_wait([
      '以 ',
      sys_get_colored_callname(3, 24),
      ' 的方式来说……可能是很闪闪发亮？',
    ]);
    await maya.say_and_wait([
      '哇……！我懂我懂！',
      sys_get_colored_callname(24, 17),
      ' 奔驰的样子真的很帅气！',
    ]);
    await maya.say_and_wait('嗯～～我好像开始兴奋起来了……');
    await maya.say_and_wait([
      callname,
      '，还是别看夜景了！人家现在想要闪闪发亮！',
    ]);
    era.printButton('「我陪你！」', 1);
    era.printButton('「休息也是很重要的」', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait(['嘿嘿，不愧是 ', callname, '！']);
      await teio.say_and_wait('那我们一起并跑练习吧！这样我也比较能激起斗志！');
      await maya.say_and_wait('没问题！我要起飞了☆');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 拿出全力进行了额外训练。',
      ]);
      return true;
    } else {
      await maya.say_and_wait(
        '嗯！说得也是！跟肌肤一样，要休息才会变得充满光泽对吧！',
      );
      await maya.say_and_wait(
        '我知道了！就用闪闪发亮的夜景，来为人家的耀眼充电吧♪',
      );
      await teio.say_and_wait('那我先走了！我会在门禁前回来的～～！');
      await era.printAndWait([
        '于是 ',
        me.get_colored_name(),
        ' 和 ',
        maya.get_colored_name(),
        ' 一起欣赏夜景，让',
        maya.sex,
        '的身体好好地休息了',
      ]);
    }
    return false;
  }

  async week_end(maya, me, callname, hook, extra_flag, event_object) {
    if (!week_end_handlers[event_object?.arg]) {
      return await super.week_end(
        maya,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_end_handlers[event_object.arg](
        maya,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }

  async week_start(maya, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return await super.week_start(
        maya,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_start_handlers[event_object.arg](
        maya,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};
