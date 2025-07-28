const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.arim_kin] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
  ) => {
    if (era.get('cflag:32:育成回合计时') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    const coffee = get_chara_talk(25);
    if (!edu_marks.plan_b) {
      await print_event_name('超越极限', tachyon);
      await tachyon.say_and_wait('哈啊……哈啊……');
      era.println();
      await tachyon.print_and_wait('脚步沉重，迟钝');
      await tachyon.print_and_wait('原因……很清楚');
      await tachyon.print_and_wait('来自身后的猎犬散发出了强烈的压迫感');
      era.println();
      await tachyon.print_and_wait([
        '在 ',
        sys_get_colored_callname(32, 25),
        ' 奔跑时，无论是前后的',
        tachyon.get_uma_sex_title(),
        '都会感受到的极强压迫力',
      ]);
      await tachyon.print_and_wait([
        '和',
        tachyon.sex,
        '的朋友在内，都是自己的科学无法解释的东西',
      ]);
      era.println();
      await tachyon.say_and_wait('……来了！');
      era.println();
      await tachyon.print_and_wait([coffee.get_colored_name(), ' 追在身后']);
      await tachyon.print_and_wait([
        '后颈汗毛竖立，仿佛能够感受到',
        tachyon.sex,
        '的鼻息一般',
      ]);
      await tachyon.print_and_wait('就是现在，就在这里');
      era.println();
      await tachyon.print_and_wait([
        '如果说 ',
        tachyon.get_colored_name(),
        ' 拥有的是超越次元的速度',
      ]);
      await tachyon.print_and_wait([
        '那么 ',
        coffee.get_colored_name(),
        ' 就是跨越次元的弔诡',
      ]);
      await tachyon.print_and_wait(
        '不知会从何出现，仿佛从镜中世界穿越而来的异形身姿',
      );
      era.println();
      await tachyon.print_and_wait([
        '那漆黑的幻影，瞬间超越了 ',
        tachyon.get_colored_name(),
      ]);
      era.drawLine();
      await coffee.say_and_wait('……抱歉');
      era.println();
      await coffee.print_and_wait('为了实现自己的梦想，而将他人的梦想踢落');
      await coffee.print_and_wait('更何况，对方还是……');
      await coffee.print_and_wait('是什么呢？');
      await coffee.print_and_wait(
        '朋友？宿敌？天生相克的存在？研究者和实验品？',
      );
      await coffee.print_and_wait([
        '将最后一个选项甩出脑袋后，',
        coffee.get_colored_name(),
        ' 继续向前奔驰',
      ]);
      await coffee.print_and_wait(
        '在通往梦想的道路上，即便是再深的感情，顶多也就只能化作这样一句抱歉',
      );
      era.println();
      await coffee.print_and_wait(
        '只要跨越此处，接下来，下个目标，就是「那个身影」……！',
      );
      era.println();
      await coffee.print_and_wait(['但是，', coffee.sex, '漏判了一个可能性']);
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '，还留有余力的可能性',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '，一开始就没有用尽全力的可能性',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '，在等待的就是这个时机的可能性',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        '前方的',
        tachyon.get_uma_sex_title(),
        '是……跑在最前头的逃',
        tachyon.get_uma_sex_title(),
        '，以及 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        '最适合 ',
        tachyon.get_colored_name(),
        ' 的位置，仿佛在实验室里一般舒适的位置',
      ]);
      await tachyon.print_and_wait('就是现在，就在这里');
      era.println();
      await tachyon.print_and_wait('时间停滞了，世界改变了');
      era.println();
      await tachyon.print_and_wait('眼前是无穷无尽无垠的黑色空间');
      await tachyon.print_and_wait('充满了算式的数理公式');
      era.println();
      await tachyon.print_and_wait([
        '想要超越 ',
        coffee.get_colored_name(),
        '——变量宿敌已添加',
      ]);
      await tachyon.print_and_wait('最适合自己的环境——变量跑位已添加');
      await tachyon.print_and_wait('锻炼及天赋的结合——变量速度已添加');
      await tachyon.print_and_wait('然后是……');
      era.println();
      await tachyon.print_and_wait('从身后，感觉到了一丝暖意及红茶的香味');
      await tachyon.print_and_wait([
        '但 ',
        tachyon.get_colored_name(),
        ' 没有回头',
      ]);
      await tachyon.print_and_wait('不需要回头，因为那是对对方的不信任');
      await tachyon.print_and_wait([
        '看着前方，然后……等待对方，相信',
        me.sex,
        '必然会追上自己，与自己同行',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '冒着热气的红茶被摆放在 ',
        tachyon.get_colored_name(),
        ' 的面前',
      ]);
      await tachyon.print_and_wait('宛如日常的实验室一般');
      await tachyon.print_and_wait('一切都是如此理所当然');
      era.println();
      await tachyon.print_and_wait([
        me.sex,
        '会理所当然的陪伴在 ',
        tachyon.get_colored_name(),
        ' 身旁',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 理所当然的会解决面前一切难题',
      ]);
      era.println();
      await tachyon.say_and_wait('最后的解就是这个……');
      era.println();
      await tachyon.print_and_wait('在宛如黑板的空间中画下U=MA2的公式');
      await tachyon.print_and_wait('瞬间，黑暗的空间中，所有算式发出光芒');
      await tachyon.print_and_wait([
        '这就是，',
        tachyon.get_colored_name(),
        ' 的最终解',
      ]);
      await say_by_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        ' 追上来了！',
        tachyon.get_colored_name(),
        ' 追上来了！',
      ]);
      await say_by_passer_by_and_wait('解说', [
        '最前面的逃',
        tachyon.get_uma_sex_title(),
        '已经后继无力，最后的激战果然还是这两人！',
      ]);
      await say_by_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！几乎并排冲入最终直线！',
      ]);
      if (check_aim_race(RaceHistory.get(25).get(), race_enum.kiku_sho, 1, 1)) {
        await say_by_passer_by_and_wait('解说', [
          '『最强的',
          tachyon.get_uma_sex_title(),
          '』，与『最快的',
          tachyon.get_uma_sex_title(),
          '』，要在这里决出胜负！',
        ]);
      }
      await tachyon.print_and_wait('啊啊');
      await tachyon.print_and_wait('明明是在比赛');
      await tachyon.print_and_wait('却感觉……如此畅快');
      era.println();
      await tachyon.print_and_wait('与自己认可的劲敌');
      await tachyon.print_and_wait('发挥出自己的全力');
      await tachyon.print_and_wait('但是……还不够');
      era.printButton('「超越极限吧！」', 1);
      await era.input();
      await tachyon.print_and_wait('随着接受过的几次采访');
      await tachyon.print_and_wait([
        '超越极限似乎已经成为 ',
        tachyon.get_colored_name(),
        ' 的粉丝口中，超越「',
        tachyon.get_colored_name(),
        ' 最强」、「',
        tachyon.get_colored_name(),
        ' 必胜」等的口号了',
      ]);
      await tachyon.print_and_wait([
        '但即便是如此杂乱的助威声，与',
        me.sex,
        '的话语相比，听起来都是那么模糊',
      ]);
      era.println();
      await tachyon.print_and_wait('嗯，没错');
      await tachyon.print_and_wait('就是现在');
      era.println();
      await tachyon.print_and_wait('比起领域更上一层的极限');
      await tachyon.print_and_wait('超越极限吧');
      await tachyon.print_and_wait([
        '超越',
        tachyon.get_uma_sex_title(),
        '的极限',
      ]);
      await tachyon.print_and_wait([
        '超越 ',
        tachyon.get_colored_name(),
        ' 的极限',
      ]);
      await tachyon.print_and_wait('超越一切，然后，在这之后');
      await tachyon.print_and_wait('朝着更加遥远的彼方—————伸手');
      await say_by_passer_by_and_wait('解说', [
        '冲————线！破，破纪录了！年度的总决赛！是 ',
        tachyon.get_colored_name(),
        '！打破纪录，在今日称霸中山赛场的是 ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait('结束了');
      await tachyon.print_and_wait('结束……了？');
      era.println();
      await tachyon.print_and_wait('应该是，结束了吧');
      await tachyon.print_and_wait('毕竟揭示版上都排出成绩了');
      await tachyon.print_and_wait(
        '但是，身体的热意却丝毫不像比赛已经结束一样',
      );
      await tachyon.print_and_wait('肾上腺素仿佛沸腾一般还在源源不绝产出');
      era.println();
      await say_by_passer_by_and_wait('观众A', '做到了啊！');
      era.println();
      await tachyon.print_and_wait(
        '忽然的喊声，使自己在吓了一跳的同时回归现实',
      );
      await say_by_passer_by_and_wait('观众B', '真的，真的打破记录了啊！');
      await say_by_passer_by_and_wait('观众C', '好样的！');
      era.println();
      await tachyon.print_and_wait('整个会场欢声雷动');
      await tachyon.print_and_wait('……简直，比胜利的自己还要兴奋啊');
      era.println();
      await tachyon.print_and_wait('应该，要做出回应的吧');
      await tachyon.print_and_wait('不管怎么说，应该要做出社会性的表达');
      await tachyon.print_and_wait('……不，这只是纯粹，对支援者的感谢');
      await tachyon.print_and_wait('应该要表现出来才对');
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.print_and_wait('挣扎了半天');
      await tachyon.print_and_wait('也只能勉强抬手');
      await tachyon.print_and_wait('仿佛整个人依然活在梦里一般');
      era.println();
      await tachyon.print_and_wait('只是');
      await tachyon.print_and_wait('光是这样，便足以掀起巨浪般的欢声了');
      era.drawLine();
      era.printButton('「速子……那就是……！」', 1);
      await era.input();
      await era.printAndWait('不敢做出定论');
      await era.printAndWait('没有人会敢对自己从没见过的东西做出定论');
      await era.printAndWait(
        '如果为真的话，那么，这将是从未有人抵达过的领域————',
      );
      era.println();
      await era.printAndWait('…………');
      era.printButton('「……速子？」', 1);
      await era.input();
      await era.printAndWait('仿佛还没从梦中惊醒一般');
      await era.printAndWait([
        '虽然很难描述，但眼前的 ',
        tachyon.get_colored_name(),
        '，就好像在梦游一般',
      ]);
      await era.printAndWait(['这种情况下，应该唤醒', tachyon.sex, '的吧？']);
      await era.printAndWait('但是，要怎么做呢？');
      await era.printAndWait(
        '毕竟连自己都忍不住怀疑，眼前的这些只是一场梦而已',
      );
      await era.printAndWait(
        '如此漫长的三年，在今天终于以最完美的实验成果画下尾声',
      );
      era.println();
      await tachyon.say_and_wait('…………呵呵');
      await tachyon.say_and_wait('哈哈哈哈哈哈哈！');
      era.println();
      await era.printAndWait('如果说前一秒发出的笑声是让人欣慰总算回过神来');
      await era.printAndWait(
        '那么，后一秒的狂笑便是使人怀疑是否是脑袋出问题了',
      );
      await era.printAndWait([
        '正当 ',
        me.get_colored_name(),
        ' 担忧的想上前检查时……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '你看到了吗？……你看到了吧！',
        callname,
        '！',
      ]);
      await tachyon.say_and_wait(
        '这就是，实验的成果……我带你看见了！这就是，极限之后的世界！',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 想起去年十一月时 ',
        tachyon.get_colored_name(),
        ' 说过的话',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait(
        '作为报酬，我会让你看见更加宽广的世界',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '真的做到了']);
      await era.printAndWait('每一场比赛，都在距离目标更近一步');
      await era.printAndWait('然后现在');
      await era.printAndWait('两人真的看见了更宽广的，极限后的世界');
      era.printButton('「嗯……我们真的，做到了」', 1);
      await era.input();
      await era.printAndWait([
        '这是 ',
        me.get_colored_name(),
        ' 第一次看见，世界上竟然还有比 ',
        tachyon.get_colored_name(),
        ' 的跑法更加闪耀的东西',
      ]);
      await era.printAndWait([
        '那就是，此时 ',
        tachyon.get_colored_name(),
        ' 脸上露出的笑容',
      ]);
    }
    add_event(
      event_hooks.week_end,
      new EventObject(32, cb_enum.edu).set_arg('ending'),
    );
  };
};
