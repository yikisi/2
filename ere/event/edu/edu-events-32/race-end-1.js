const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    _,
    relation,
  ) => {
    if (era.get('cflag:32:育成回合计时') !== 23 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('研究基础与工作条件', tachyon);
    era.printButton('「跑的太精彩了！就像光一样！」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '不过是实验的验算而已就高兴成这副模样，',
      callname,
      ' 你可真是天真……啊！',
    ]);
    era.printButton('怎么了！', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 看着忽然发出声音的 ',
      tachyon.get_colored_name(),
      '，内心一阵紧张',
    ]);
    await me.say_and_wait('比赛后……难不成，是腿……', true);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 慌忙上前想要确认 ',
      tachyon.get_colored_name(),
      ' 腿的状况，但……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '完蛋完蛋！我忘记回收装在闸门上用来记录出闸速度的仪器了！',
    );
    era.println();
    extra_flag.attr_change = new Array(5).fill(0);
    if (relation > 225) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 叹了口气，原来是因为这个吗',
      ]);
      era.printButton('「没有问题，出闸速度已经记录好了」', 1);
      await era.input();
      await era.printAndWait([
        '虽然不到心灵相通，但身为 ',
        tachyon.get_colored_name(),
        ' 的训练员',
      ]);
      await era.printAndWait([
        '也多少知道',
        tachyon.sex,
        '会需要怎么样的数据，这种事说到底本就不应该在场上奔跑的',
        tachyon.sex,
        '来担心',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '哦哦！干得好啊，',
        callname,
        '！现在就马上来确认吧！',
      ]);
      era.println();
      await era.printAndWait([
        '刚获得的胜利、即将开始的Winning Live，一切的一切都不在 ',
        me.get_couple_title(),
        ' 眼中，彷佛刚才并非跑了场比赛，而只是一场普通的研究一般',
      ]);
      era.println();
      await era.printAndWait([
        me.get_couple_title(),
        ' 不停观看着纪录下来的数据，提出一个又一个的猜想，直到winning live开始，外面传来了急促的敲门声才回过神来',
      ]);
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 3),
      );
    } else {
      await era.printAndWait('什，什么玩意！？');
      await era.printAndWait(
        '在闸门内等待起跑的时候，这个人还有心情去做这种事？',
      );
      await era.printAndWait('不，说到底随便乱在闸门上加感测仪器什么的');
      await era.printAndWait([me.get_colored_name(), ' 不由得感到一阵胃痛']);
      era.println();
      await era.printAndWait([
        '在那之后，为了回收器械 ',
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 潜入了赛场……',
      ]);
      await era.printAndWait([
        '不用说，自然被URA的人发现了，再三道歉后，',
        tachyon.get_colored_name(),
        ' 总算成功回收了器械。一切都十分顺利',
      ]);
      await era.printAndWait([
        '……只是，在回收期间，那些职员看 ',
        me.get_couple_title(),
        ' 的眼光有些刺痛而已',
      ]);
      sys_change_fame(-10);
      await era.printAndWait('\n声望下降了！');
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 6),
      );
    }
  };

  handlers[race_enum.hope_sta] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    _,
    relation,
  ) => {
    await print_event_name('希望', tachyon);
    if (extra_flag.rank === 1) {
      era.printButton('「太强了！」', 1);
      await era.input();
      await era.printAndWait([
        '第一次的G1舞台，哪怕是 ',
        tachyon.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 也还是忍不住为',
        tachyon.sex,
        '捏了把冷汗',
      ]);
      await era.printAndWait([
        '但哪怕是国内最高级的赛事之上，',
        tachyon.sex,
        '表现出的依然是超乎众人的强悍',
      ]);
      era.println();
      await tachyon.say_and_wait('呵呵，这么兴奋什么的，太夸张了');
      era.println();
      await era.printAndWait([
        '下了赛场的 ',
        tachyon.get_colored_name(),
        ' 回到休息室后声音也带着愉悦',
      ]);
      await era.printAndWait([
        '听见这声音，哪怕是 ',
        me.get_colored_name(),
        ' 也明白了',
      ]);
      era.printButton('「实验成功了吧？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '是啊是啊！哎呀，果然好的实验品很重要啊！今天的实验大成功！',
      );
      era.println();
      await era.printAndWait([
        '果然对 ',
        tachyon.get_colored_name(),
        ' 而言，即便是G1的赛事也只是大一点的实验舞台吧',
      ]);
      await era.printAndWait([
        '即便如此，',
        tachyon.sex,
        '还是表现出了压倒众人的跑法',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '比起这种事，赶快回去了，快去准备下场比赛吧！',
      );
      era.println();
      await me.say_and_wait('欸？怎么忽然这么有热情？');
      await me.say_and_wait(
        '虽然觉得不会，但难道觉醒了对比赛的热情了……？',
        true,
      );
      era.println();
      await tachyon.say_and_wait(
        '我脑袋里已经有下场比赛实验的蓝图了！哈哈哈！',
      );
      era.println();
      await era.printAndWait(
        '……算了，不管怎么说，对实验的热情也算是热情觉醒了吧',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的 ',
        race_infos[race_enum.hope_sta].get_colored_name(),
        ' 结束了',
      ]);
    } else {
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        '比赛结束后，',
        me.get_colored_name(),
        ' 看着默默回到选手休息室的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('一路上谁也没有说话');
      await era.printAndWait([
        '这场比赛的落败，对 ',
        me.get_colored_name(),
        ' 还是对',
        tachyon.sex,
        '而言，都是一场重大的打击',
      ]);
      era.println();
      await tachyon.say_and_wait('……实验，失败了啊');
      era.println();
      await era.printAndWait([
        '这场比赛中，',
        tachyon.get_colored_name(),
        ' 的状态明显十分的不对劲……',
      ]);
      await era.printAndWait([
        '虽说一般的人大概看不出来，但今天的表现，并没有展现出',
        tachyon.sex,
        '所拥有的那种……光芒',
      ]);
      await era.printAndWait([
        '从一开始就黯淡的光芒，在比赛进入到后期更是几乎完全熄灭，因此，',
        tachyon.get_colored_name(),
        ' 落败',
      ]);
      era.println();
      await tachyon.say_and_wait('……');
      era.printButton(
        '「……没什么，只是一次实验的失败而已，回去吧，实验哪有一定成功的？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 不由得出言安慰',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '但坐在地上的',
        tachyon.sex,
        '，却不知为何，表情有些奇怪',
      ]);
      await era.printAndWait('不是懊悔，反而……像在忍着什么？');

      era.printButton('「速子……？你的身体……」', 1);
      await era.input();
      if (relation <= 225) {
        await tachyon.say_and_wait('没什么，不用担心……走吧');
        era.println();
        await era.printAndWait([
          '或许，自己还无法打破',
          tachyon.sex,
          '的心防吧',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 没说什么，跟在',
          tachyon.sex,
          '的后头离去',
        ]);
      } else {
        await tachyon.say_and_wait([
          '……没事的，',
          callname,
          '，我的腿……没什么问题，只要下次调整好就没问题了',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 反过来安慰着说道，想使 ',
          me.get_colored_name(),
          ' 放下心来',
        ]);
        await era.printAndWait([
          '想到平时',
          tachyon.sex,
          '胸有成竹的样子，',
          me.get_colored_name(),
          ' 的内心也渐渐平稳了下来',
        ]);
        era.println();
        await tachyon.say_and_wait([
          { content: '…………备选方案吗……或许……', fontSize: '0.75rem' },
        ]);
        era.println();
        await era.printAndWait([
          '只是，',
          tachyon.sex,
          '以为没被听到而喃喃说出的词句，却还是使 ',
          me.get_colored_name(),
          ' 的心再度提了起来',
        ]);
        extra_flag.attr_change = [0, 0, 3, 0, 0];
      }
    }
  };

  handlers[race_enum.hoch_sho] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    _,
    __,
    love,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('对照实验结果分析', tachyon);
    await era.printAndWait([
      '理所当然的，',
      tachyon.get_colored_name(),
      ' 赢下了 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
    ]);
    era.printButton('「好厉害的比赛！」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '呼……呼……呵呵，你的反应真是，每次都这么夸张啊，明明我都没认真跑，怎么就厉害了',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '语气玩味的说道']);
    era.println();
    await me.say_and_wait('一点也不夸张');
    await me.say_and_wait(
      '无论有没有认真跑，速子的跑法都同样的吸引着我，就好比……对了，光电子',
    );
    era.println();
    await tachyon.say_and_wait('光电子……？');
    era.println();
    await me.say_and_wait(
      '打在电极上的光束，无论强弱都能使电极发射出电子，这是频率，也就是规格上的不同而导致的',
    );
    await me.say_and_wait(
      '无论强弱，无论认真与否，速子的跑法对自己而言就是超越次元，唯一能够在电极上打出电子的光芒',
    );
    era.println();
    await tachyon.say_and_wait('……这算什么比喻啊');
    era.println();
    await me.say_and_wait('欸欸……不行吗');
    await me.say_and_wait('明明花了很多时间来想，还挺有自信的……');
    era.println();
    if (love > 75) {
      await tachyon.say_and_wait(
        '不过……你的意思我明白了，也就是说，你戴着只有我能够解锁的贞操带吧？',
      );
      await era.printAndWait('不，这比喻更烂吧……');
    } else {
      await tachyon.say_and_wait(
        '不过……你的意思我明白了，也就是无论跑的如何，只要是我就能让你满意对吧？',
      );
    }
    await me.say_and_wait('不过还是希望速子能认真跑了');
    await era.printAndWait([
      '说到这，',
      me.get_colored_name(),
      ' 忽然想起了 ',
      tachyon.get_colored_name(),
      ' 赛前说的测试……',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……没什么问题，起码，',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 不会有问题',
    ]);
    era.println();
    await era.printAndWait('起码……吗？');
    await era.printAndWait([
      '让人很无法安心下来的词语，使 ',
      me.get_colored_name(),
      ' 也陷入了沉默',
    ]);
    era.println();
    await tachyon.say_and_wait('……不提这个了，快点回去继续实验吧');
    era.println();
    await era.printAndWait([
      '于是，',
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 的 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      ' 结束了',
    ]);
    await era.printAndWait([
      '下个目标 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 就近在眼前了！',
    ]);
    extra_flag.attr_change = [0, 0, 0, 0, 5];
  };

  handlers[race_enum.sats_sho] = async (tachyon, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name([tachyon.get_uma_sex_title(), '的极限'], tachyon);
    await tachyon.say_and_wait([callname, '，你看见了吗？']);
    era.println();
    await era.printAndWait([
      '跑完 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 的 ',
      tachyon.get_colored_name(),
      '，获得了至今为止最为热烈的欢呼声',
    ]);
    await era.printAndWait([
      '观众们兴奋的原因 ',
      me.get_colored_name(),
      ' 也能理解',
    ]);
    await era.printAndWait([
      '今天的 ',
      tachyon.get_colored_name(),
      ' 的表现堪称完美',
    ]);
    await era.printAndWait([
      '不，可以说如果',
      tachyon.get_uma_sex_title(),
      '有极限的话，那必然就是今天的 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait('光一般的速度，光一般的闪耀，光一般的……虚幻');
    era.println();
    await era.printAndWait('仿佛在结束后就要如光一般消散的跑法');
    await era.printAndWait([
      '在冲过终点的瞬间，所有人都不敢出声，哪怕是始终相信着 ',
      tachyon.get_colored_name(),
      ' 实力的自己也一样不敢置信',
    ]);
    await era.printAndWait([
      '那种跑法只能解释成，',
      tachyon.get_uma_sex_title(),
      '这种生物的极限',
    ]);
    await era.printAndWait(
      '是看到的瞬间就会感到「啊啊，这种跑法不可能有人能够超越的」的跑法',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……这个啊，就是我们要超越的极限']);
    era.println();
    await era.printAndWait('将自己定义为极限');
    await era.printAndWait('这是多么傲慢的说法');
    await era.printAndWait(
      '但在看了先前那场比赛后，无论是谁都必须赞同这样的傲慢',
    );
    era.println();
    await tachyon.say_and_wait(
      '……没错，必须要超越这样的速度，才能称之为超越极限，否则，一切就全是空谈',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '说出这句话时，直直盯着你的双眼，等待回答',
    ]);
    await era.printAndWait([
      '这句话的潜意思，相信 ',
      me.get_colored_name(),
      ' 能够明白',
    ]);
    await era.printAndWait('自己有自信，能够超越那样的速度吗？');
    era.printButton('「绝对可以」', 1);
    era.printButton('「因为是速子，所以绝对可以」', 2);
    await era.input();
    await era.printAndWait('可以说是瞬间');
    await era.printAndWait([
      '在领会出 ',
      tachyon.get_colored_name(),
      ' 的含义后，',
      me.get_colored_name(),
      ' 在瞬间便做出了回答',
    ]);
    await era.printAndWait('不用经过思考，无须多加考虑');
    await era.printAndWait([
      '眼前的这名',
      tachyon.get_uma_sex_title(),
      '，拥有超越极限的力量',
    ]);
    await era.printAndWait('这是从第一次见面就已经确信的');
    await era.printAndWait([
      '现在只不过是将 ',
      me.get_colored_name(),
      ' 与',
      tachyon.sex,
      '的目标放在眼前而已',
    ]);
    await era.printAndWait('已经看见目标了，那就必然能够超越');
    era.println();
    await tachyon.say_and_wait('如此快的反应，思考……不，是本能吗？你……');
    era.println();
    await era.printAndWait([
      '不知为何，',
      tachyon.get_colored_name(),
      ' 看着 ',
      me.get_colored_name(),
      ' 露出了有些微妙的表情',
    ]);
    await era.printAndWait([
      '过了一会后，',
      tachyon.sex,
      '仿佛下定了什么决心一般说道',
    ]);
    era.println();
    await tachyon.say_and_wait(['那么，就来试试看吧，', callname, '……']);
    await tachyon.say_and_wait('不过首先，先确认好下一场的比赛吧……');
    await tachyon.say_and_wait([
      '目前可以确认，',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 我能出赛，以此来做准备吧，',
      callname,
    ]);
    era.println();
    await era.printAndWait('……又来了');
    await era.printAndWait([
      '如果要说，',
      tachyon.get_colored_name(),
      ' 身上有任何一点是令 ',
      me.get_colored_name(),
      ' 感到不安的要素，那么就只有这个了',
    ]);
    await era.printAndWait('……仿佛下场比赛便是最后一场一般的，不确定的态度');
    await era.printAndWait([
      '但是，',
      tachyon.get_colored_name(),
      ' 的话，一定能将这一切不确定跨越吧',
    ]);
    await era.printAndWait([me.get_colored_name(), ' 如此乐观的想着']);
    era.println();
    await era.printAndWait([
      '下一场比赛，就决定是 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 了！',
    ]);
    extra_flag.attr_change = [0, 0, 5, 0, 0];
  };

  handlers[race_enum.toky_yus] = async (tachyon, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('实验目的调整', tachyon);
    era.printButton('「速子！太帅了！」', 1);
    await era.input();
    await tachyon.say_and_wait('唔……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 一如既往的想要夸奖 ',
      tachyon.get_colored_name(),
      ' 的跑姿，然而',
    ]);
    era.println();
    await tachyon.say_and_wait('……实验，没有成功啊');
    era.println();
    await era.printAndWait('嗯？');
    await era.printAndWait('明明跑的很精彩，结果实验却没有成功吗');
    era.println();
    await tachyon.say_and_wait([
      sys_get_colored_callname(32, 94),
      '……虽然很让人期待，但',
      tachyon.sex,
      '的可能性与我在寻找的并不相符……果然，还是 ',
      sys_get_colored_callname(32, 25),
      '……',
    ]);
    era.println();
    await era.printAndWait([
      '不知为何，',
      tachyon.get_colored_name(),
      ' 喃喃说着 ',
      me.get_colored_name(),
      ' 听不太懂的话',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……总之，先不说了吧，接下来，就要进入实验的关键点了',
    );
    era.println();
    await era.printAndWait([
      '虽然不太明白，但 ',
      me.get_colored_name(),
      ' 看着 ',
      tachyon.get_colored_name(),
      ' 脸上严肃的表情，整个人也不禁正襟危坐了起来',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '下一场比赛……暂时……还不能确定……我还有些事情需要好好想想',
    );
    era.println();
    await era.printAndWait([
      '充满了不确定的话语，让 ',
      me.get_colored_name(),
      ' 在比赛结束后的欣喜瞬间化为了不安',
    ]);
  };

  handlers[race_enum.kiku_sho] = async (tachyon, me, callname, extra_flag) => {
    if (extra_flag.rank === 1) {
      await print_event_name('会赢的', tachyon);
      const race_history = new RaceHistory(32);
      if (
        check_aim_race(race_history.get(), race_enum.sats_sho, 1, 1) &&
        check_aim_race(race_history.get(), race_enum.toky_yus, 1, 1)
      ) {
        if (race_history.get_values().findIndex((e) => e.rank !== 1) !== -1) {
          await say_by_passer_by_and_wait('解说', [
            '三冠',
            tachyon.get_uma_sex_title(),
            '诞生！同年中的最强！最快最幸运最强的',
            tachyon.get_uma_sex_title(),
            '就是，',
            tachyon.get_colored_name(),
            '！',
          ]);
        } else {
          await say_by_passer_by_and_wait('解说', [
            '无败三冠诞生！历史的车轮再一次的转动了！',
            tachyon.get_colored_name(),
            '，无败三冠达成！',
          ]);
        }
      } else {
        await say_by_passer_by_and_wait('解说', [
          '超越了一众强敌率先越过终点线的是，超光速的',
          tachyon.sex_code - 1 ? '公主' : '王子',
          '，',
          tachyon.get_colored_name(),
          '！菊花赏最强的',
          tachyon.get_uma_sex_title(),
          '，就是 ',
          tachyon.get_colored_name(),
          '！',
        ]);
      }
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 拿下了菊花赏，当之无愧的胜利',
      ]);
      await era.printAndWait(
        '然而，还来不及为胜利而庆祝，便出现了一名造访的不速之客',
      );
    } else {
      await print_event_name('火苗点现', tachyon);
      await print_event_name('火苗点现', tachyon);
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton('「……速子？」', 1);
      await era.input();
      await era.printAndWait([
        '比赛结束，荣光的菊花赏，决出最强',
        tachyon.get_uma_sex_title(),
        '的竞赛',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的负责',
        tachyon.get_uma_sex_title(),
        ' ',
        tachyon.get_colored_name(),
        ' 却败在了这场比赛之上',
      ]);
      await era.printAndWait([
        '在比赛结束进入选手休息室后，',
        me.get_couple_title(),
        ' 两人就一直维持着沉默',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 暗暗看着',
        tachyon.sex,
        '的脸庞，却猜不透',
        tachyon.sex,
        '的心思',
      ]);
      await era.printAndWait('就在沉默的压力累积到极限时……');
      era.println();
      await tachyon.say_and_wait('呵呵……');

      era.printButton('「速子……？」', 1);
      await era.input();
      await tachyon.say_and_wait('明明都觉得不会输的……哎呀，还是被超越了');
      await tachyon.say_and_wait([
        '果然，',
        tachyon.get_uma_sex_title(),
        '的可能性还是只有在比赛中才能探索啊',
      ]);
      await tachyon.say_and_wait('输了输了');
      era.println();
      await era.printAndWait([
        '速子的态度，出乎 ',
        me.get_colored_name(),
        ' 意料之外的轻松',
      ]);
      await era.printAndWait([
        '也是啊……对',
        tachyon.sex,
        '而言，不管怎么说比赛都是实验而已',
      ]);
      await era.printAndWait('实验有成功有失败，比赛也是');
      await era.printAndWait('失败了吸取教训就好');
      era.println();
      await era.printAndWait([
        '虽然这样的态度是否适合比赛还不好说，但最起码可以安心',
        tachyon.sex,
        '大概并没有受到太多影响了',
      ]);
      era.println();
      await era.printAndWait(
        '然而，还来不及为此感到安心，便出现了一名造访的不速之客',
      );
    }
    era.println();
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25),
      c_call_t = sys_get_colored_callname(25, 32),
      coffee_rec = era.get('cflag:25:招募状态') === recruit_flags.yes,
      coffee_love = era.get('love:25');
    await coffee.say_and_wait([c_call_t, '……你今天的跑法……']);
    await tachyon.say_and_wait(['哦呀，', t_call_c, '，怎么了吗？']);
    era.println();
    await era.printAndWait([coffee.get_colored_name()]);
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), ' PlanB的接班人']);
    await era.printAndWait([tachyon.get_colored_name(), ' PlanA的试金石']);
    if (sys_reg_race(25).curr.race === race_enum.kiku_sho) {
      await era.printAndWait([
        '这场菊花赏上，',
        tachyon.get_colored_name(),
        ' 最大的敌人',
      ]);
    }
    if (coffee_rec) {
      await era.printAndWait([
        '同时也是，',
        me.get_colored_name(),
        ' 的另一名负责',
        tachyon.get_uma_sex_title(),
      ]);
    }
    era.println();
    await coffee.say_and_wait([c_call_t, '，你的跑法，和以前不一样了……']);
    await tachyon.say_and_wait(
      '呵呵，有什么问题吗？跑法本不就是不断在进化的吗？',
    );
    await coffee.say_and_wait('没什么……只是，恭喜你，跨越了另一个自己');
    await tachyon.say_and_wait([
      '……另一个自己？等等，',
      t_call_c,
      '！什么意思！',
    ]);
    await coffee.say_and_wait(
      '……究竟是什么意思呢？毕竟我也只是传达朋友说的话而已',
    );
    if (coffee_rec) {
      const c_call_m = sys_get_callname(25, 0);
      if (coffee_love >= 75) {
        await coffee.say_and_wait([
          '还有，就算是负责',
          tachyon.get_uma_sex_title(),
          '…不要占用别人的爱人太久了，',
          c_call_t,
        ]);
        await era.printAndWait([
          '说完后，',
          coffee.get_colored_name(),
          ' 在 ',
          me.get_colored_name(),
          ' 的脸上吻了一下宣示主权',
        ]);
      } else if (coffee_love >= 50) {
        await coffee.say_and_wait([
          '因为今天是特别的日子所以先把 ',
          c_call_m,
          ' 借你一下……等一下要还给我',
        ]);
      } else {
        await coffee.say_and_wait(['对了……等一下记得把 ', c_call_m, ' 还给我']);
      }
    }
    era.println();
    await tachyon.say_and_wait([t_call_c, '！…………啧，走掉了……']);
    await era.printAndWait([
      '没事吧，',
      me.get_colored_name(),
      ' 担心的望着 ',
      tachyon.get_colored_name(),
    ]);
    if (coffee_love >= 75) {
      const love = era.get('love:32');
      if (love < 50) {
        await tachyon.say_and_wait([
          '没什么……话说，',
          callname,
          '，你可真受欢迎啊',
        ]);
      } else if (love < 75) {
        await tachyon.say_and_wait([
          '没什么……话说 ',
          callname,
          '，你的风流债可真多啊',
        ]);
      } else {
        await tachyon.say_and_wait([
          '没什么……比起这个，',
          callname,
          '……你的风流债可真多啊',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 咬牙切齿的回过头来说道',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '必须要好好消毒被 ',
          t_call_c,
          ' 弄脏的地方才行！',
        ]);
        era.println();
        await era.printAndWait([
          '以此为理由，',
          tachyon.sex,
          '不停的亲吻着 ',
          me.get_colored_name(),
          ' 的脸颊，以十倍百倍的数量想压过 ',
          coffee.get_colored_name(),
          ' 刚刚印上的吻',
        ]);
      }
    }
    era.println();
    if (extra_flag.rank === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '总之，无论如何，',
        me.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 荣光的菊花赏结束了',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 的经典战线结束了！',
      ]);
    }
    extra_flag.attr_change = [0, 10];
  };
};
