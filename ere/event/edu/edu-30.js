/**
 * @file 米浴 - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const rice_out_shopping = require('#/event/edu/edu-events-30/out-shopping');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-30/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-30/week-end')(week_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,RaceEndParams)>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-30/race-end')(race_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{flags:wait_flag})>} */
const school_atrium_handlers = {};

require('#/event/edu/edu-events-30/school-atrium')(school_atrium_handlers);

module.exports = class extends CustomizedEdu {
  async office_rest(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg !== 'letter') {
      return;
    }
    const self_name = sys_get_callname(30, 30);
    await print_event_name('粉丝信', rice);
    await era.printAndWait([
      '某天，',
      rice.get_colored_name(),
      ' 收到了粉丝信。',
    ]);
    await rice.say_and_wait(['给 ', self_name, ' 的，粉丝信……']);
    await me.say_and_wait('太好了呢。');
    await rice.say_and_wait('嗯、嗯！');
    await rice.say_and_wait('不过……');
    await era.printAndWait([self_name, ' 看似开心的表情，变得有些不安。']);
    await me.say_and_wait('怎么了？');
    await rice.say_and_wait([self_name, ' 偶尔会忍不住想。']);
    await rice.say_and_wait([
      '支持 ',
      self_name,
      ' 的人，会不会因此变得不幸。',
    ]);
    await rice.say_and_wait([
      self_name,
      ' 不想要这样，明明不愿意这么想，却还是……',
    ]);
    await rice.say_and_wait([callname, '，', self_name, ' 该怎么做才好？']);
    await me.say_and_wait('看看粉丝信的内容吧。');
    await rice.say_and_wait('内容，嗯……');
    await me.say_as_unknown_and_wait([
      rice.get_colored_name(),
      ' 在比赛中努力的样子，带给了我许多勇气。',
    ]);
    await me.say_as_unknown_and_wait([
      '只要看着 ',
      rice.get_colored_name(),
      ' 的笑容，每次都会感觉到内心变得温暖。',
    ]);
    await me.say_as_unknown_and_wait([
      rice.get_colored_name(),
      ' 努力的样子……',
      rice.get_colored_name(),
      ' 的笑容……',
    ]);
    await rice.say_and_wait('这样啊，原来有人，会因此感到高兴呢。');
    await rice.say_and_wait([callname, '，我会更加、更加努力的！']);
    await rice.say_and_wait([
      '努力让支持 ',
      self_name,
      ' 的人，都能感到开心。',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      ' 的眼中彷佛燃起了充满干劲的火焰！',
    ]);
    sys_change_motivation(30, 1) && (await era.waitAnyKey());
    return true;
  }

  async office_study(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg !== 'dance') {
      return;
    }
    const self_name = sys_get_callname(30, 30);
    await print_event_name('舞蹈课', rice);
    await rice.say_and_wait('一、二，一、二，这里要将脚——');
    await rice.say_and_wait('呀啊！');
    await rice.say_and_wait('啊呜呜，又失败了……得再多练习才行……');
    await me.say_and_wait('你很努力呢。');
    await rice.say_and_wait(['呜啊！？', callname, '！？被、被你看到了……']);
    await rice.say_and_wait([
      '对不起，那个……',
      self_name,
      ' 本来想趁没人在的时候练习。',
    ]);
    await me.say_and_wait('为什么一个人练习？');
    await rice.say_and_wait('因为，之前全班一起上课的时候，舞蹈室……停电了');
    await rice.say_and_wait([
      '大家的课就此中断。大概，是因为 ',
      self_name,
      ' 害的……',
    ]);
    await rice.say_and_wait([
      self_name,
      ' 不想再给大家添麻烦，所以正在自己一个人练习。',
    ]);
    await rice.say_and_wait([
      callname,
      ' 也是，现在待在这里，说不定会给你添什么麻烦……',
    ]);
    era.printButton('「我在会让你觉得困扰吗？」（耐力+10，根性+10）', 1);
    era.printButton('「尽管添麻烦吧！」（智力+10，技能点数+10）', 2);
    if ((await era.input()) === 1) {
      await rice.say_and_wait([
        '怎、怎么会！',
        callname,
        ' 不会让我觉得困扰的！',
      ]);
      await me.say_and_wait('那就让我帮你的忙吧。');
      await rice.say_and_wait([callname, '……']);
      await rice.say_and_wait('谢谢。');
      await rice.say_and_wait([
        self_name,
        ' 如果有跳不好的地方，希望 ',
        callname,
        ' 可以说出来。',
      ]);
      await me.say_and_wait('一起加油吧。');
      await rice.say_and_wait('嗯！');
      await era.printAndWait([
        '之后，',
        me.get_colored_name(),
        ' 和 ',
        rice.get_colored_name(),
        ' 一起，彻底将',
        rice.sex,
        '不拿手的舞步练习了一番。',
      ]);
      get_attr_and_print_in_event(30, [0, 10, 0, 10, 0], 0) &&
        (await era.waitAnyKey());
    } else {
      await rice.say_and_wait([
        '呜欸！？怎么能这样，我不想造成 ',
        callname,
        ' 的困扰！',
      ]);
      await me.say_and_wait([self_name, ' 一个人烦恼才会让我觉得困扰。']);
      await rice.say_and_wait([callname, '……']);
      await rice.say_and_wait('可以陪我一起，讨论练习中的问题吗？');
      await me.say_and_wait('当然可以！');
      await rice.say_and_wait('谢谢你！其实，有一个很困难的舞步……');
      await era.printAndWait([
        '之后直到很晚，',
        me.get_colored_name(),
        ' 都在陪 ',
        rice.get_colored_name(),
        ' 讨论舞蹈练习的问题。',
      ]);
      get_attr_and_print_in_event(30, [0, 0, 0, 0, 10], 10) &&
        (await era.waitAnyKey());
    }
    return true;
  }

  async out_church(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg !== 95 + 1) {
      return;
    }
    const self_name = sys_get_callname(30, 30);
    era.set('cflag:30:节日事件标记', 0);
    await print_event_name('新年参拜', rice);
    await era.printAndWait([
      '新年的第一天，',
      me.get_colored_name(),
      ' 收到 ',
      rice.get_colored_name(),
      ' 的邀请，一起前往新年参拜。',
    ]);
    await rice.say_and_wait([
      callname,
      '，',
      self_name,
      '，想好了一个愿望哦。',
    ]);
    await rice.say_and_wait(['所以想让 ', callname, ' 听一听，可以吗？']);
    await me.say_and_wait('不去和神明许愿，而是告诉我吗？');
    await rice.say_and_wait(['嗯！这个愿望，不和 ', callname, ' 说是不行的。']);
    await rice.say_and_wait([
      self_name,
      '，想参加下次的 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '。',
    ]);
    await me.say_and_wait('为什么？');
    await rice.say_and_wait('……因为，想要变得更强。');
    await rice.say_and_wait('不继续向前迈进的话是不行的。');
    await rice.say_and_wait('已经说过……不能再害怕了。');
    await me.say_and_wait('你做好了觉悟呢。');
    await rice.say_and_wait([self_name, ' 发现了，光只有想是不行的。']);
    await rice.say_and_wait(
      '为了不让……眼前的人感到悲伤，得要先付出行动……才可以。',
    );
    await era.printAndWait([
      rice.get_colored_name(),
      ' 从新年开始，就制定了新的目标，',
    ]);
    await era.printAndWait([
      '为了不辜负',
      rice.sex,
      '的这股干劲，',
      me.get_colored_name(),
      ' 和 ',
      rice.get_colored_name(),
      ' 把新年的抱负写上了绘马。',
    ]);
    await rice.say_and_wait(['神明大人，', self_name, ' 会加油的。']);
    await rice.say_and_wait(['能和 ', callname, ' 一起来参拜真是太好了！']);
    await rice.say_and_wait(['呼呼，接下来轮到 ', callname, ' 了呢。']);
    await rice.say_and_wait([
      self_name,
      ' 也会一起祈求的，希望神明能帮忙实现愿望……',
    ]);
    era.print([me.get_colored_name(), ' 的愿望是……']);
    era.printButton(
      `「希望 ${sys_get_callname(0, 30)} 永远健健康康的。」（耐力+20，好感+5）`,
      1,
    );
    era.printButton(
      `「希望能一直支持 ${sys_get_callname(0, 30)} 跑下去。」（全属性+5，爱慕+2）`,
      2,
    );
    era.printButton('「我想要力量……！」（技能点数+30）', 3);
    let wait_flag;
    switch (await era.input()) {
      case 1:
        await rice.say_and_wait('！');
        await rice.say_and_wait([
          '嘿嘿，好的。',
          self_name,
          ' 会注意，不让 ',
          callname,
          ' 担心。',
        ]);
        await era.printAndWait([
          '在新年参拜的摊贩补充了营养后，',
          me.get_colored_name(),
          ' 和 ',
          rice.get_colored_name(),
          ' 便开始进行训练。',
        ]);
        wait_flag = get_attr_and_print_in_event(30, [0, 20], 0);
        wait_flag = sys_like_chara(30, 0, 5) || wait_flag;
        era.set('status:30:伤病', Math.floor(era.get('status:30:伤病') / 2));
        break;
      case 2:
        await rice.say_and_wait([
          '呵呵，说这么温柔的话，',
          self_name,
          ' 会很伤脑浆的。',
        ]);
        await rice.say_and_wait([
          '真的是，没有时间哭泣了。',
          self_name,
          ' 得好好加油才行……',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 和 ',
          rice.get_colored_name(),
          ' 静静地对视了一阵子，便开始着手训练。',
        ]);
        wait_flag = get_attr_and_print_in_event(30, [5, 5, 5, 5, 5], 0);
        wait_flag = sys_love_uma(30, 5) || wait_flag;
        break;
      case 3:
        await rice.say_and_wait('力量……这个、那个啊……');
        await rice.say_and_wait([self_name, ' 也可以来帮忙吗？']);
        await rice.say_and_wait('那个，肌肉锻炼啦、并跑啦……');
        await me.say_and_wait('并不是那个意思来着。');
        await rice.say_and_wait('呜欸？');
        await rice.say_and_wait([
          '但是，如果真的有什么 ',
          self_name,
          ' 可以帮忙的事，请告诉我。',
        ]);
        await rice.say_and_wait([
          self_name,
          '，为了 ',
          callname,
          ' 的话，什么事情都可以……会来帮忙的。',
        ]);
        await era.printAndWait([
          '……',
          me.get_colored_name(),
          ' 感受到了 ',
          rice.get_colored_name(),
          ' 体贴的心意，回到了学校。',
        ]);
        wait_flag = get_attr_and_print_in_event(30, undefined, 30);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(rice, me, callname, hook, extra_flag, event_object) {
    return await rice_out_shopping(rice, me, callname, event_object);
  }

  async race_end(rice, me, callname, hook, extra_flag) {
    const self_name = sys_get_callname(30, 30);
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        rice,
        me,
        callname,
        self_name,
        extra_flag,
      ))
    ) {
      if (extra_flag.rank === 1) {
        const edu_marks = new RiceEduMarks();
        if (!edu_marks.love && era.get('love:30') >= 75) {
          edu_marks.love = 1;
          await print_event_name('热恋', rice);
          await era.printAndWait([
            rice.get_colored_name(),
            ' 结束了C位的LIVE后，',
            me.get_colored_name(),
            ' 和',
            rice.sex,
            '的心情都十分愉悦。',
          ]);
          await era.printAndWait([
            '但是，现在的 ',
            rice.get_colored_name(),
            '，正带着妖艳的目光，迈出可爱又急促的小步伐向 ',
            me.get_colored_name(),
            ' 奔来。',
          ]);
          await me.say_and_wait('嗯……');
          await era.printAndWait([
            '身着胜负服的 ',
            rice.get_colored_name(),
            ' 兴奋地双手抱住 ',
            me.get_colored_name(),
            ' 两侧的腹部。',
          ]);
          await era.printAndWait([
            rice.sex,
            '带着不可思议的表情抬头仰望 ',
            me.get_colored_name(),
            '，眼中的艳丽满溢而出。',
          ]);
          await rice.say_and_wait([
            callname,
            '，',
            self_name,
            ' 做了什么坏事吗？',
          ]);
          await rice.say_and_wait(['为什么……不抱着 ', self_name, ' 呢？']);
          await era.printAndWait([
            '敌不过 ',
            rice.get_colored_name(),
            ' 湿润起来的眼神，',
            me.get_colored_name(),
            ' 紧紧抱住了少女娇小的身躯。',
          ]);
          await era.printAndWait([
            '时间流逝，觉得差不多该换衣服解散的 ',
            me.get_colored_name(),
            '，抓住了 ',
            rice.get_colored_name(),
            ' 的肩膀。',
          ]);
          await era.printAndWait([
            rice.get_colored_name(),
            ' 恋恋不舍地摩挲了下 ',
            me.get_colored_name(),
            ' 的手指，说了声回头见便走向更衣室。',
          ]);
          await era.printAndWait([
            '以前无论做什么都小心翼翼，战战兢兢的 ',
            rice.get_colored_name(),
            '，现在却像小恶魔一样和 ',
            me.get_colored_name(),
            ' 亲昵。',
          ]);
          await era.printAndWait([
            'LIVE之后的一次训练后，',
            rice.get_colored_name(),
            ' 穿着体操服向 ',
            me.get_colored_name(),
            ' 走来。',
          ]);
          await era.printAndWait([
            rice.get_colored_name(),
            ' 把体操服号码牌的部分压在 ',
            me.get_colored_name(),
            ' 身上，享受着 ',
            me.get_colored_name(),
            ' 的气味。',
          ]);
          await era.printAndWait([
            '心想有女儿的父亲大概是这种心情吧？更用力地回抱住',
            rice.sex,
            '。',
          ]);
          await me.say_and_wait([
            '很痒哦，',
            sys_get_colored_callname(0, 30),
            '。',
          ]);
          await rice.say_and_wait('诶？');
          await era.printAndWait([
            me.get_colored_name(),
            ' 催促 ',
            rice.get_colored_name(),
            ' 去换衣服。',
          ]);
          await era.printAndWait([
            '目送',
            rice.sex,
            '步履蹒跚的身影，',
            me.get_colored_name(),
            ' 深切认识到 ',
            me.get_couple_title(),
            ' 之间的关系产生了某种变化。',
          ]);
          await era.printAndWait([
            '最近，',
            rice.get_colored_name(),
            ' 对 ',
            me.get_colored_name(),
            ' 的亲昵之举逐渐过激。',
          ]);
          await era.printAndWait([
            '搂抱、亲吻、拉着 ',
            me.get_colored_name(),
            ' 的手不小心摸了摸胸部，这些甚至不会让 ',
            me.get_colored_name(),
            ' 觉得有问题了。',
          ]);
        } else {
          await print_event_name('比赛胜利', rice);
          await rice.say_and_wait([
            '太棒、太棒了，',
            callname,
            '。',
            self_name,
            ' 赢了呢……',
          ]);
          await me.say_and_wait('再抬头挺胸一点吧。');
          await rice.say_and_wait('抬头挺胸？那个……');
          await rice.say_and_wait('而且，还拿到了第一！真的要满含感激地收下！');
          await rice.say_and_wait([
            '哼、哼哼！像这样吗？',
            self_name,
            ' 有抬头挺胸了吗？',
          ]);
          era.printButton('「我对你感到骄傲哦。」', 1);
          era.printButton('「下次也要赢哦。」', 2);
          if ((await era.input()) === 1) {
            await rice.say_and_wait([
              '对 ',
              self_name,
              ' 感到骄傲？总、总觉得有点难为情……',
            ]);
            await rice.say_and_wait([
              '不过，能够让 ',
              callname,
              ' 觉得骄傲，',
              self_name,
              ' 也觉得很高兴……',
            ]);
            await rice.say_and_wait('虽然很高兴，又觉得难为情……');
            await rice.say_and_wait([
              '唔唔，',
              self_name,
              ' 有点，搞不清楚了～',
            ]);
          } else {
            await rice.say_and_wait(
              '嗯、嗯！下次的比赛也要赢，这样才能让大家感到高兴。',
            );
            await rice.say_and_wait([
              '所以，',
              callname,
              '。再麻烦你多指教 ',
              self_name,
              ' 训练了！',
            ]);
          }
        }
      } else if (extra_flag.rank <= 5) {
        await print_event_name('比赛入着', rice);
        await rice.say_and_wait([
          '呼……太好了。',
          self_name,
          '，有好好努力了哦……',
        ]);
        await rice.say_and_wait('下次，想拿到第一名呢……开、开玩笑的，呵呵。');
        era.printButton('「你很努力呢。」', 1);
        era.printButton('「下次要拿第一名！」', 2);
        if ((await era.input()) === 1) {
          await rice.say_and_wait(['嗯、嗯！谢谢你，', callname, '！']);
          await rice.say_and_wait([
            '不过 ',
            self_name,
            ' 觉得，是因为和 ',
            callname,
            ' 在一起，才能这么努力。',
          ]);
          await rice.say_and_wait([
            '虽然 ',
            self_name,
            ' 自己一个人很没用，但只要在一起就能更努力……',
          ]);
        } else {
          await rice.say_and_wait('那、那个……嗯、嗯……下次会努力的！');
          await rice.say_and_wait('果、果然，还是要以第一名为目标呢……');
          await rice.say_and_wait('得要更加努力才行！');
        }
      } else {
        await print_event_name('比赛败北', rice);
        await rice.say_and_wait(['呜呜……', self_name, ' 输了……']);
        await rice.say_and_wait([
          '对不起，',
          self_name,
          ' 让 ',
          callname,
          ' 失望了吧……',
        ]);
        era.printButton('「下次还有机会。」', 1);
        era.printButton('「来探讨输掉的原因吧」', 1);
        if ((await era.input()) === 1) {
          await rice.say_and_wait(['那个……嗯。', callname, ' 说的没错。']);
          await rice.say_and_wait([
            self_name,
            ' 下次一定会赢的。',
            callname,
            '，要好好看着 ',
            self_name,
            ' 哦。',
          ]);
        } else {
          await rice.say_and_wait(
            '原因……也对，只是一股劲地努力，还是会再输掉。',
          );
          await rice.say_and_wait('找出输掉的原因，活用在下一次的比赛。');
          await rice.say_and_wait(
            '就算再怎么没用，一直沮丧下去的话，只会一直都这么没用。',
          );
          await rice.say_and_wait([
            self_name,
            ' 要找到这次输掉的原因。然后，下一次想要赢！',
          ]);
          await era.printAndWait([
            '后来 ',
            me.get_couple_title(),
            ' 重新检讨这次比赛落败的因素。。',
          ]);
          await era.printAndWait([
            rice.get_colored_name(),
            ' 不可思议地情绪高涨。',
          ]);
        }
      }
    }
  }

  async race_start(rice, me, callname, hook, extra_flag) {
    const self_name = sys_get_callname(30, 30),
      buffer = [
        async () => {
          await rice.say_and_wait('唔唔……唔唔……');
          era.printButton('状况不好吗？', 1);
          await era.input();
          await me.say_and_wait('状况不好吗？');
          await rice.say_and_wait('咦？不、不是的。只是，有点紧张而已……');
          await rice.say_and_wait('不过，已经不要紧了。');
          await rice.say_and_wait([
            '像这样和 ',
            callname,
            ' 说话，就觉得很安心。',
          ]);
          await rice.say_and_wait([
            self_name,
            ' 会加油的，要好好看着 ',
            self_name,
            ' 哦，',
            callname,
            '！',
          ]);
          extra_flag.motivation_change = 1;
        },
        () =>
          rice.say_and_wait(['再来就只要尽力奔跑，没错吧？', callname, '！']),
        () => rice.say_and_wait([self_name, ' 会努力跑完全程的！要加油——喔！']),
        () =>
          rice.say_and_wait([
            '都还没开始跑，',
            self_name,
            ' 就预感会是一场好比赛。',
            self_name,
            ' 今天，特别地期待！',
          ]),
        () => rice.say_and_wait('呼，好……！还没到开始时间吗？'),
        () =>
          rice.say_and_wait(
            '开、开始发抖了……那个，哥哥大人。米浴可以，稍微握一下你的手吗？',
          ),
        () => rice.say_and_wait('因为想带给大家幸福……米浴会全力奔跑的！'),
      ];
    const handler = get_random_entry(buffer);
    await print_event_name(
      buffer.indexOf(handler) === 0 ? '武者震' : '参赛之前',
      rice,
    );
    await handler();
  }

  async school_atrium(rice, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(event_hooks.school_atrium, event_object);
      return;
    }
    if (!school_atrium_handlers[event_object.arg]) {
      return;
    }
    const flags = { wait_flag: false };
    await school_atrium_handlers[event_object.arg](
      rice,
      me,
      callname,
      sys_get_callname(30, 30),
      flags,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return true;
  }

  async train() {
    await get_chara_talk(30).say_and_wait(
      get_random_entry(['要加油……喔！', '嗯，走吧！', '好期待……']),
    );
  }

  async train_fail(rice, me, callname, hook, extra_flag) {
    await get_chara_talk(30).say_and_wait(
      Math.random() < 0.5 ? '唔唔……' : '唔……？',
    );
    return await super.train_fail(rice, me, callname, hook, extra_flag);
  }

  async train_success(rice, me, callname, hook, extra_flag) {
    era.print([
      rice.get_colored_name(),
      ' 的 ',
      attr_names[extra_flag.train],
      ' 训练顺利成功了……',
    ]);
    if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
      await era.waitAnyKey();
      const me = get_chara_talk(0),
        callname = sys_get_callname(30, 0),
        self_name = sys_get_callname(30, 30);
      await print_event_name('额外自主训练', rice);
      await era.printAndWait([
        '和 ',
        rice.get_colored_name(),
        ' 一起完成训练之后——',
      ]);
      await rice.say_and_wait(['咦？', callname, ' 还不回去吗？']);
      era.printButton('「得为明天的训练做准备。」', 1);
      era.printButton(`「看 ${sys_get_callname(0, 30)} 看入迷了。」`, 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait([
          callname,
          '……为了 ',
          self_name,
          '，还要继续工作吗？',
        ]);
      } else {
        await rice.say_and_wait(['呜啊啊啊，', callname, '！']);
      }
      await me.say_and_wait([
        sys_get_colored_callname(0, 30),
        ' 先回去休息吧。',
      ]);
      await rice.say_and_wait('……嗯，我知道了。');
      await rice.say_and_wait(['再见，', callname, '。']);
      era.drawLine();
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 完成了明天训练的准备工作，踏上归途的时候。',
      ]);
      await era.printAndWait([
        '在训练场上，你看到了还在奔跑的 ',
        rice.get_colored_name(),
        ' 的身影。',
      ]);
      await rice.say_and_wait('哈啊……哈啊……还、还能……');
      await rice.say_and_wait([self_name, ' 还可以继续，不努力的话……']);
      await me.say_and_wait('自主训练？');
      await rice.say_and_wait(['啊……', callname, '。']);
      await rice.say_and_wait('被你看见了呢……');
      await rice.say_and_wait([
        callname,
        ' 为了 ',
        self_name,
        ' 而在努力。这样的话，',
        self_name,
        ' 也得加把劲才行！',
      ]);
      era.printButton('「那就陪你再稍微训练一下吧。」', 1);
      era.printButton('「有这份心意就很高兴了。」', 2);
      if ((await era.input()) === 1) {
        await rice.say_and_wait(['嗯，谢谢你，', callname, '！']);
      } else {
        await rice.say_and_wait('有这份心意就很高兴了。');
        await rice.say_and_wait([
          '唔……但是，',
          self_name,
          ' 也想帮上 ',
          callname,
          ' 的忙。',
        ]);
      }
      await era.printAndWait([
        '之后，',
        me.get_colored_name(),
        ' 在一旁看着 ',
        rice.get_colored_name(),
        ' 进行额外的训练。',
      ]);
      era.drawLine({ content: '训练结束后' });
      era.printButton('「一个人回去真寂寞呢——」', 1);
      await era.input();
      await rice.say_and_wait('欸？');
      await rice.say_and_wait(['这是说……要和 ', self_name, ' 一起吗？']);
      await rice.say_and_wait([self_name, ' 这就去换衣服！请稍微，等一下。']);
      await era.printAndWait([
        '之后，',
        me.get_colored_name(),
        ' 和换好了衣服的 ',
        rice.get_colored_name(),
        ' 一起踏上了回家的路。',
      ]);
      hook.arg = true;
    }
  }

  async week_end(rice, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await week_end_handlers[event_object.arg](
          rice,
          me,
          callname,
          sys_get_callname(30, 30),
          flags,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async week_start(rice, me, callname, hook, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await week_start_handlers[event_object.arg].call(
          this,
          rice,
          me,
          callname,
          sys_get_callname(30, 30),
          flags,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }
};
