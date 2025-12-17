const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (coffee, me, callname) => {
    const tachyon = get_chara_talk(32);
    await print_event_name('漆黑的猎犬', coffee);
    await era.printAndWait([
      '成功招募 ',
      coffee.get_colored_name(),
      ' 后，',
      me.get_colored_name(),
      ' 与 ',
      coffee.get_colored_name(),
      ' 相约来到训练场进行跑步测试。',
    ]);
    await era.printAndWait([
      '说起来，尽管当上了 ',
      coffee.get_colored_name(),
      ' 的训练员，但这还是第一次亲眼看见',
      coffee.sex,
      '的奔跑。虽说通过录像反复观看了几次',
      coffee.sex,
      '的选拔赛，始终还是差了点什么。',
    ]);
    await era.printAndWait(
      '连担当的选拔赛都没看过就进行招募的训练员，也算是特雷森第一人了吧……',
    );
    await era.printAndWait([
      '不远处，已经就位的 ',
      coffee.get_colored_name(),
      ' 朝 ',
      me.get_colored_name(),
      ' 挥了挥手，',
      me.get_colored_name(),
      ' 收起了思绪，专心观察起 ',
      coffee.get_colored_name(),
      ' 的动作。',
    ]);
    await era.printAndWait([
      '哨响过后，',
      coffee.get_colored_name(),
      ' 从起跑位冲出。',
    ]);
    era.printButton('「嗯……起步并不算很快，果然是适合追和差吗。」', 1);
    await era.input();
    await era.printAndWait([
      '给 ',
      coffee.get_colored_name(),
      ' 做出的要求是按照',
      coffee.sex,
      '自己的节奏来跑，并想象其他',
      coffee.get_uma_sex_title(),
      '在场的情况。',
    ]);
    await era.printAndWait([
      '保持着自己的节奏，',
      coffee.get_colored_name(),
      ' 轻柔而缓和地迈开脚步，顺利度过了中盘，来到了最后的冲刺点。',
    ]);
    await era.printAndWait('——嘭。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 的眼睛告诉了 ',
      me.get_colored_name(),
      ' 应该听到的声音。',
    ]);
    await era.printAndWait([
      '朝着终点，',
      coffee.get_colored_name(),
      ' 的身子向下一俯，随着脚下刹那飞溅出的泥土，如离弦的箭般直插前方。这非同一般的爆发力在瞬间便死死吸引住 ',
      me.get_colored_name(),
      ' 的目光。',
    ]);
    await era.printAndWait([
      '仿佛是逐兔的猎犬、又像是饥渴的苍鹫，',
      me.get_colored_name(),
      ' 无法将这样狂野的步伐与那个沉默清冷的',
      coffee.get_child_sex_title(),
      '联系在一起。',
    ]);
    await era.printAndWait('但……');
    await era.printAndWait('太美了。');
    await era.printAndWait([
      '看着那如漆黑的猎犬般撕裂终点线的身姿，',
      me.get_colored_name(),
      ' 不由得这样想到。',
    ]);
    era.println();
    if (era.get('cflag:32:招募状态') === recruit_flags.yes) {
      const c_call_t = sys_get_colored_callname(25, 32),
        t_call_c = sys_get_colored_callname(32, 25);
      await tachyon.say_and_wait(['哟，', sys_get_callname(32, 0), '。']);
      await era.printAndWait([
        '熟悉的声音传来，',
        me.get_colored_name(),
        ' 回头看去，',
        tachyon.get_colored_name(),
        ' 正站在身后。',
      ]);
      await tachyon.say_and_wait([
        '你的新担当就是 ',
        t_call_c,
        ' 吗？真是凑巧啊，哈哈哈。',
      ]);
      await tachyon.say_and_wait([
        t_call_c,
        ' 的目的是追上无人能看见的假想朋友。嗯，一般人确实难以理解。而我呢，追求的则是赛',
        coffee.get_uma_sex_title(),
        '的极限……更要超越极限，不止步于单纯的胜利。',
      ]);
      await tachyon.say_and_wait(
        '作为我们这样的怪人组合的训练员，你也真是难办啊。',
      );
      await coffee.say_and_wait([c_call_t, '……你在做什么？']);
      await era.printAndWait([
        '测试结束的 ',
        coffee.get_colored_name(),
        ' 回到了 ',
        me.get_colored_name(),
        ' 身边，不太高兴地看着 ',
        me.get_colored_name(),
        ' 身旁的 ',
        tachyon.get_colored_name(),
        '。',
      ]);
      await tachyon.say_and_wait([
        '哎呀，你看起来好像不是很高兴呢 ',
        t_call_c,
        '……但我们之间的交集肯定是会越来越深的，毕竟我们是同一个训练员手下的担当',
        coffee.get_uma_sex_title(),
        '嘛，你说是吧？训 · 练 · 员 · 君？',
      ]);
      await coffee.say_and_wait([
        '训练员君……',
        c_call_t,
        ' 也是你的担当吗？',
        callname,
        '……',
      ]);
      await era.printAndWait([
        '这下麻烦了，没想到',
        coffee.sex,
        '们两人认识，而且貌似还不太对付的样子……',
      ]);
      await tachyon.say_and_wait([
        '拜拜啦，两位。今后我们可要多多彼此关照。而且我对你期望很高喔，',
        t_call_c,
        '。期待你——在与我不同的意义上。',
      ]);
      await era.printAndWait([
        '当 ',
        me.get_colored_name(),
        ' 还在想着怎么向 ',
        coffee.get_colored_name(),
        ' 说明时，',
        tachyon.get_colored_name(),
        ' 留下一句意义深长的话便离开了。',
      ]);
      era.printButton('「这家伙……真是……」', 1);
      await era.input();
      await coffee.say_and_wait([
        callname,
        '……暂时就别想 ',
        c_call_t,
        ' 的事了。现在的你，是我的训练员……对我们来说更重要的，是要追上朋友。就这么单纯……对吧？',
      ]);
      await era.printAndWait([
        '没错，',
        coffee.sex,
        '是 ',
        coffee.get_colored_name(),
        '，与其他赛',
        coffee.get_uma_sex_title(),
        '无关。',
      ]);
    }
    await era.printAndWait([
      '整理好思绪，',
      me.get_couple_title(),
      ' 开始了今天的训练。',
    ]);
  };

  handlers[28] = async (coffee, me, callname, flags) => {
    await print_event_name('灵障', coffee);
    await coffee.say_and_wait([callname, '……我今天……感觉身体很沉重……']);
    await era.printAndWait([
      '正在训练的 ',
      coffee.get_colored_name(),
      ' 在 ',
      me.get_colored_name(),
      ' 身边停下了脚步，缓缓说道。',
    ]);
    await era.printAndWait([
      '「我的身体不太好」——以前',
      coffee.sex,
      '曾这么对 ',
      me.get_colored_name(),
      ' 说过，',
      me.get_colored_name(),
      ' 一开始也只是简单的当作身体原因看待。',
    ]);
    await era.printAndWait([
      '而在这之前也偶尔会发生这样的情况，',
      me.get_colored_name(),
      ' 没太在意，吩咐',
      coffee.sex,
      '去好好休息，别勉强自己后……',
    ]);
    await era.printAndWait('——沙、沙沙沙……');
    await era.printAndWait([
      '地面的沙子突然发生了异变。在 ',
      coffee.get_colored_name(),
      ' 所经之处，留下了像是拖着重物走过的痕迹。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 连忙喊住快要倒下的',
      coffee.sex,
      '，将',
      coffee.sex,
      '送去了医务室。',
    ]);
    era.drawLine();
    await coffee.say_and_wait(
      '我的体重……从来没见过这么大的数字……到底发生了什么……',
    );
    await era.printAndWait([
      '在医务室进行了简单的检查，却没有发现任何问题，直到 ',
      coffee.get_colored_name(),
      ' 尝试性地走上体重秤后，那触目惊心的数字着实把 ',
      me.get_colored_name(),
      ' 吓到了。',
    ]);
    await era.printAndWait([
      coffee.sex,
      '的体重大幅增加，远远超过了正常情况下的波动范围。',
    ]);
    await coffee.say_and_wait(
      '而且今天……觉得身体像纸一样……好像全身都干巴巴的……呃呜！？',
    );
    await era.printAndWait('——叽叽、啪嚓！');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 话音未落，伴随着微小的碎裂声，剧烈的痛苦爬上了 ',
      coffee.get_colored_name(),
      ' 略显苍白的面孔。',
    ]);
    era.printButton('「怎么了！？」', 1);
    await era.input();
    await era.printAndWait([
      '扶稳突然站不住的 ',
      coffee.get_colored_name(),
      '，却顿时感觉',
      coffee.sex,
      '的身体变轻了，但暂时管不了这点了。',
      me.get_colored_name(),
      ' 的视线向下看去，难道是',
      coffee.sex,
      '的脚出问题了！？',
    ]);
    await coffee.say_and_wait('我的……脚指甲……');
    await era.printAndWait([
      '急忙脱下',
      coffee.sex,
      '的鞋子，',
      coffee.sex,
      '干巴巴的趾甲上出现了裂痕，像是开了个小小的洞。',
    ]);
    await coffee.say_and_wait(
      '今天的体重，突然变得好重，现在又突然感觉好轻……难怪我一直感觉没有力气……脚趾甲会裂开，应该也是太干了的关系……',
    );
    era.printButton('「修剪趾甲并杀菌消毒吧。」', 1);
    await era.input();
    await coffee.say_and_wait('咦……还有……这种方法吗？');
    await era.printAndWait([
      '用专用的治疗药剂和补强剂将',
      coffee.sex,
      '的趾甲固定。虽然状况看起来还没糟到需要中止训练和比赛，但是长期这样下去的话……',
    ]);
    await coffee.say_and_wait([
      callname,
      '，你真的很厉害……我已经感觉好上一些了……',
    ]);
    await era.printAndWait([
      '话说回来，',
      coffee.sex,
      '这样激烈的体重变化，莫非是……',
    ]);
    era.printButton('「……平常的食欲怎么样？」', 1);
    await era.input();
    await coffee.say_and_wait(
      '食欲……有时候的确会感觉特别旺盛。好像我的胃变成了无底洞一样……无论我怎么吃，吃再多都得不到饱足感……所以只能放空脑袋地一直吃……相对地，有时候也会有完全吃不下。就算我想要硬塞点东西到嘴里，手也完全不听使唤……',
    );
    await coffee.say_and_wait('但那些……并不是属于我自己的意志……');
    await era.printAndWait([
      '原来',
      coffee.sex,
      '一直都忍受着这样的异常吗？遭受着这番磨难，却仍愿意主动涉险帮助自己……',
    ]);
    era.printButton('「下次身体出现异状的时候，记得拍照给我。」', 1);
    await era.input();
    await coffee.say_and_wait('拍照，我明白了，我会记得拍照给你……可是……');
    era.drawLine();
    await era.printAndWait([
      '几天后，',
      coffee.get_colored_name(),
      ' 传来了照片。',
    ]);
    await era.printAndWait([
      '但……完全看不出',
      coffee.sex,
      '拍了什么，照片上只映照着一些奇怪的图案。',
    ]);
    await coffee.say_and_wait(
      '怎么拍都会变成那样，所以我也没办法拍受伤的部位给你看……从以前起，就是如此，大概注定无解了……我的身体恐怕……会一直这样……',
    );
    era.printButton('「你只要记得告诉我就好！」', 1);
    await era.input();
    await coffee.say_and_wait('告诉你……？每一次，都要吗？');
    era.printButton('「嗯，我来负责治疗！」', 1);
    await era.input();
    await coffee.say_and_wait([
      '谢谢你，',
      callname,
      '……有你在……感觉，稍微安心了。',
    ]);
    await era.printAndWait([
      '之后，',
      me.get_colored_name(),
      ' 活用毕生所学的知识，加上随时做好万全的准备，总算让 ',
      coffee.get_colored_name(),
      ' 可以过上普通的生活。但是……这根本超出了「身体不太好」的等级。',
    ]);
    await era.printAndWait('果然是灵异事件吗……');
    await era.printAndWait([
      '想到这里，',
      me.get_colored_name(),
      ' 不禁对未来感到一丝担忧。',
    ]);
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      [0, 10],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(25, -1) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(25, 0, 25, true, 3) || flags.wait_flag;
  };

  handlers[47 + 1] = async (coffee, me, callname, flags) => {
    era.set('cflag:25:节日事件标记', 0);
    await print_event_name('新年的抱负', coffee);
    await era.printAndWait([
      '伴随着新年的到来，',
      coffee.get_colored_name(),
      ' 也晋升到了经典级。',
    ]);
    await era.printAndWait([
      '通常这种时候，一般的训练员都会和担当',
      coffee.get_uma_sex_title(),
      '讨论彼此的远大抱负，但是……',
    ]);
    await coffee.say_and_wait(
      '现在……依我的身体状况，还没办法说出什么了不起的抱负……',
    );
    await coffee.say_and_wait('希望今年……至少可以成长得能紧跟在朋友的后面……');
    await era.printAndWait([
      coffee.sex,
      '天生体质虚弱这点依旧没能得到改善，离目标仍相当遥远。即使如此，',
      me.get_colored_name(),
      ' 还是希望让',
      coffee.sex,
      '在心情上积极乐观些。',
    ]);
    era.printButton('「要不要出门转换一下心情？」', 1);
    await era.input();
    await coffee.say_and_wait('出门……话虽如此，应该去哪呢……');
    era.printButton(`让${coffee.sex}体验如鱼得水的感受（耐力+20）`, 1);
    era.printButton(`让${coffee.sex}好好享受一杯咖啡（体力+400）`, 2);
    era.printButton('「去外面闲逛吧」（技能点数+30）', 3);
    switch (await era.input()) {
      case 1:
        await coffee.say_and_wait(
          '如鱼得水……？虽然不太懂，但要是能把杂念像鱼吐泡泡一样吐出来的话……或许也不错吧……',
        );
        await era.printAndWait([
          '于是带着 ',
          coffee.get_colored_name(),
          '，',
          me.get_couple_title(),
          ' 来到了水族馆。',
          coffee.sex,
          '非常专注地盯着水槽里的鱼……',
        ]);
        await coffee.say_and_wait(
          '……这些鱼，面对无止尽的水压，却都只是静静地忍受呢……',
        );
        await coffee.say_and_wait('我也得像它们一样……变得更坚强才行……');
        await era.printAndWait([
          coffee.sex,
          '似乎跟鱼的感受产生共鸣，从而稍微学会了忍耐。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          25,
          [0, 20],
          0,
          undefined,
        );
        break;
      case 2:
        await coffee.say_and_wait(
          '咖啡……说得也是，咖啡的香气总是能让我忘记一切……',
        );
        await coffee.say_and_wait(
          '那我们就去那间咖啡厅吧……虽然我平时都是自己一个人去的……',
        );
        await era.printAndWait([
          '在 ',
          coffee.get_colored_name(),
          ' 的带领下，',
          me.get_couple_title(),
          ' 来到了一间小小的咖啡厅。',
          coffee.sex,
          '熟络地坐在了常坐的座位上……',
        ]);
        await coffee.say_and_wait([
          callname,
          '……你知道喝咖啡的步骤吗？在这间店里有它品尝咖啡的顺序……',
        ]);
        await coffee.say_and_wait(
          '首先，要享受空气中飘扬的香气……再点上一杯当季的咖啡……',
        );
        await era.printAndWait([
          coffee.sex,
          '一点一点地将咖啡含在口中再吞下，尽情享受了咖啡的美味。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(25, undefined, 0, [400]);
        break;
      case 3:
        await coffee.say_and_wait(
          '……我不太喜欢到处闲逛……会让我有种像要被人潮吞没、消失的感觉……',
        );
        await coffee.say_and_wait([
          '不过……说得也是。如果 ',
          callname,
          '……也在的话……',
        ]);
        await era.printAndWait([
          '于是带着 ',
          coffee.get_colored_name(),
          '，',
          me.get_couple_title(),
          ' 来到了特雷森附近的街道。',
          coffee.sex,
          '好奇地四处张望路边的店铺的橱窗……',
        ]);
        await coffee.say_and_wait(
          '没想到……还挺有趣的呢……有好多没看过的家具和衣服……',
        );
        await coffee.say_and_wait('啊，是古老的赛风壶……还有古董咖啡杯……');
        await era.printAndWait([
          '平时不会逛街的 ',
          coffee.get_colored_name(),
          '，因为发现了一些没看过的东西，内心似乎也多了些启发。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(25, undefined, 20);
    }
  };

  handlers[47 + 6] = async (coffee, me, callname, flags) => {
    await print_event_name('转变', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 曾遭遇无数怪异现象侵扰，但经过努力不懈地照护后，总算让',
      coffee.sex,
      '的成绩达到了及格范围。',
    ]);
    await coffee.say_and_wait(
      '体重……还是会一下变重一下变轻……但成绩却逐渐稳定了。',
    );
    await coffee.say_and_wait([
      '这都要归功于 ',
      callname,
      '……虽然离目标还非常远。',
    ]);
    await coffee.say_and_wait('别说目标了……就连……');
    await era.printAndWait([
      '猜想着',
      coffee.sex,
      '原本想说的话，但 ',
      me.get_colored_name(),
      ' 实在是摸不透',
      coffee.sex,
      '的想法。',
    ]);
    era.printButton('「下一个目标想定在哪里？」', 1);
    await era.input();
    await era.printAndWait([
      '以',
      coffee.sex,
      '的状态来说，要在春季的经典级赛事里跑赢或许很困难，但也不希望',
      coffee.sex,
      '因此自我设限。',
    ]);
    await era.printAndWait([
      '要是能先询问出 ',
      coffee.get_colored_name(),
      ' 的意见，通过',
      coffee.sex,
      '的回答，应该能稍微明白',
      coffee.sex,
      '的想法才对。',
    ]);
    if (era.get('cflag:32:招募状态') === 1) {
      await coffee.say_and_wait([
        '……',
        sys_get_colored_callname(25, 32),
        ' 也会参加的，',
        race_infos[race_enum.hoch_sho].get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        race_infos[race_enum.hoch_sho].get_colored_name(),
        '……这是 ',
        get_chara_talk(32).get_colored_name(),
        ' 通向经典三冠之路上，重要的一场比赛。',
      ]);
    } else {
      await coffee.say_and_wait([
        '……',
        race_infos[race_enum.hoch_sho].get_colored_name(),
        '。',
      ]);
    }
    era.printButton('「能问一下你的理由吗？」', 1);
    await era.input();
    await coffee.say_and_wait('其实……并不是我的意愿。但是朋友一直这么要求……');
    await coffee.say_and_wait('要我『去跑这一趟』，如果不去跑的话……');
    await era.printAndWait([
      '不去跑的话？',
      me.get_colored_name(),
      ' 挺直了背，等待着 ',
      coffee.get_colored_name(),
      ' 的下一句话。',
    ]);
    await coffee.say_and_wait(
      '会怎么样……我也不知道。朋友就只是这样告诉我……但或许会有可怕的事发生……',
    );
    await era.printAndWait([me.get_colored_name(), ' 叹了口气，靠回椅背上。']);
    await era.printAndWait([
      '看来',
      coffee.sex,
      '已经下定决心了——尽管这并不出于',
      coffee.sex,
      '自己的意愿，但单纯的以训练员的角度来看的话……',
    ]);
    if (era.get('cflag:32:招募状态') === 1) {
      era.printButton('「去和爱丽速子一较高下吧！」', 1);
      await era.input();
    } else {
      era.printButton('「尽管努力去跑吧！」', 1);
      await era.input();
    }
    await coffee.say_and_wait('……是！无论是谁……我都会将其超越……');
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      new Array(5).fill(6),
      20,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(25, 0, 15) || flags.wait_flag;
  };

  handlers[47 + 17] = async (coffee, me, callname, flags) => {
    await print_event_name('放弃与否', coffee);
    await era.printAndWait([
      '对于 ',
      coffee.get_colored_name(),
      ' 来说，',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 并不是实现',
      coffee.sex,
      '目标的必选项。',
    ]);
    await era.printAndWait([
      '——话虽如此，一生一次的德比，对',
      coffee.sex,
      '来说依旧是充满诱惑的。',
    ]);
    await era.printAndWait([
      '为了测试 ',
      coffee.get_colored_name(),
      ' 到底能否参加 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '，',
      me.get_couple_title(),
      ' 来到了训练场上。',
    ]);
    await coffee.say_and_wait(['呼、呼……', callname, '，这个单圈时间的话……']);
    await coffee.say_and_wait(
      '德比……是不是就有胜算了？要是能赢的话……一定就能离朋友更近……',
    );
    era.printButton('「身体状况如何？」', 1);
    await era.input();
    await coffee.say_and_wait('……说不上很好……但我这样也不是一天两天的了……');
    await era.printAndWait([
      '该不该让 ',
      coffee.get_colored_name(),
      ' 参加德比……坦白说很难下定论。',
    ]);
    await era.printAndWait([
      '身为训练员的 ',
      me.get_colored_name(),
      '，必须要及时做出选择。',
    ]);
    era.printButton('「……为了身体着想，放弃吧。」', 1);
    era.printButton('「……机会只有一次。」', 2);
    if ((await era.input()) === 1) {
      await coffee.say_and_wait('要……放弃吗……我明白了……');
      await era.printAndWait([
        '不能参加一生一次的德比固然令人遗憾……希望这样的选择能在秋天给 ',
        coffee.get_colored_name(),
        ' 带来顺风的局势吧。',
      ]);
      new CoffeeEduMarks().toky_yus = -1;
    } else {
      await coffee.say_and_wait('我明白了……！我会加油的！一定，要把德比拿下……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 充满了斗志……但希望这样的选择不会给秋天的比赛留下隐患。',
      ]);
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(25, [0, 10], 0);
    flags.wait_flag = sys_like_chara(25, 0, 20) || flags.wait_flag;
  };

  handlers[47 + 29] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:25:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('夏季合宿（经典年）开始', coffee);
    await era.printAndWait([
      '作为特雷森的惯例，',
      me.get_colored_name(),
      ' 与 ',
      coffee.get_colored_name(),
      ' 来到了夏季合宿。',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 原本就不太好的身体在之前的训练和比赛中留下了许多疲劳，得想办法在这段期间内让',
      coffee.sex,
      '恢复才行。',
    ]);
    await era.printAndWait([
      '然而有别于 ',
      me.get_colored_name(),
      ' 的决心的是，该说',
      coffee.sex,
      '们还只是一群学生吗，来到合宿地点的赛',
      coffee.get_uma_sex_title(),
      '们都相当兴奋。',
    ]);
    await coffee.say_and_wait('呵呵呵……好期待，合宿……要去哪里好呢？');
    await coffee.say_and_wait(
      '咦？无人的断崖吗？我想想，深山里被人遗忘的洞窟或许也不错啊，呵呵呵呵……',
    );
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}A`,
      '你、你在跟谁说话啊？茶座～！？让人感觉心里毛毛的诶！',
    );
    await say_by_passer_by_and_wait(`赛${coffee.get_uma_sex_title()}B`, [
      '哈哈哈……不知道为什么，但总觉得有',
      coffee.sex,
      '在就很灵异呢……',
    ]);
    if (era.get('cflag:32:招募状态') === 1) {
      const tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '嗯～比起灵异应该说是神秘才对。对吧？',
        sys_get_callname(32, 0),
        '。',
      ]);
      await era.printAndWait([
        '看着不远处对着空气喃喃自语的 ',
        coffee.get_colored_name(),
        '，站在 ',
        me.get_colored_name(),
        ' 身边的 ',
        tachyon.get_colored_name(),
        ' 擅自打开了话题。',
      ]);
      await tachyon.say_and_wait([
        '虽然我不太清楚你究竟和 ',
        sys_get_colored_callname(32, 25),
        ' 经历过些什么，但比起那些看得见的怪物，果然还是这些看不见的东西更难对付吧。所以我希望你最好能与它们保持距离。',
      ]);
      await tachyon.say_and_wait([
        '对于 ',
        sys_get_colored_callname(32, 25),
        '，我不在乎',
        coffee.sex,
        '那个朋友到底是什么、是不是真的存在，我更在意的',
        coffee.sex,
        '打算做什么。',
      ]);
    } else {
      await era.printAndWait([
        '看着不远处对着空气喃喃自语的 ',
        coffee.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 想到了一件事。',
      ]);
    }
    await era.printAndWait([
      '——朋友，这个帮助过 ',
      me.get_colored_name(),
      ' 数次，但 ',
      me.get_colored_name(),
      ' 却几乎一无所知的存在。',
    ]);
    await era.printAndWait([
      '作为 ',
      coffee.get_colored_name(),
      ' 目标的核心，朋友会是什么样的呢？',
    ]);
    await era.printAndWait(
      '虽然平时没有多余的时间跟精力可以深入了解，但如果是趁夏季合宿这一个机会的话……',
    );
    await coffee.say_and_wait(['…………？', callname, '，怎么了吗？']);
    era.printButton('「这个夏天……我们好好聊一聊吧。」', 1);
    await era.input();
    await coffee.say_and_wait('……我很乐意。');
    await era.printAndWait([
      '去深入了解朋友，肯定也是加深对 ',
      coffee.get_colored_name(),
      ' 了解的方法——',
      me.get_colored_name(),
      ' 如此想到。',
    ]);
  };

  handlers[47 + 30] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:25:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    const tachyon = get_chara_talk(32);
    await print_event_name('Plan B', coffee);
    await era.printAndWait([
      '夏季合宿刚开始的一天，',
      me.get_colored_name(),
      ' 把 ',
      coffee.get_colored_name(),
      ' 叫到了合宿地的一个房间内。',
    ]);
    era.printButton('「有一件与你有关的事……先来看电视吧。」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 茫然地点了点头，在 ',
      me.get_colored_name(),
      ' 的指示下打开了电视。',
    ]);
    await coffee.say_and_wait([
      '…………！？',
      sys_get_colored_callname(25, 32),
      '？',
    ]);
    await era.printAndWait([
      '电视上正在播出的，是 ',
      tachyon.get_colored_name(),
      ' 的新闻发表会。',
    ]);
    await tachyon.print_and_wait(
      '……正如我刚才所言，从今天起，我爱丽速子——将无限期停赛！',
    );
    await say_by_passer_by_and_wait('记者们', '————什么！？');
    await era.printAndWait([
      '作为经典三冠路线中最受瞩目的赛',
      coffee.get_uma_sex_title(),
      '之一，突如其来的宣布……让现场一片哗然。',
    ]);
    await say_by_passer_by_and_wait('记者A', [
      tachyon.get_colored_name(),
      ' ',
      tachyon.get_adult_sex_title(),
      '……你明明在赛事上展露出了极大潜能，为何会做出这样的决定呢！？',
    ]);
    await tachyon.print_and_wait(
      '极大的潜能吗……那甚至都还不是我真正的实力呢。',
    );
    await say_by_passer_by_and_wait(
      '记者B',
      '许多人都认定你会稳稳拿下更多的胜利，究竟是为什么！？',
    );
    await tachyon.print_and_wait(
      '嘛，理由的话，只能说一言难尽。真相总是充满各种因素的，不是吗？',
    );
    await say_by_passer_by_and_wait(
      '记者C',
      '实质上的引退宣言……可以这么理解吗？',
    );
    await tachyon.print_and_wait(
      '这样问也没有意义，毕竟谁都无法确定未来会发生什么。',
    );
    await tachyon.print_and_wait('那么，我要宣布的事情就是这些。');
    await era.printAndWait([
      '随后，',
      tachyon.get_colored_name(),
      ' 便离开了现场，',
      me.get_colored_name(),
      ' 也把电视关上，看向还处在信息过载的 ',
      coffee.get_colored_name(),
      '。',
    ]);
    era.printButton('「简单来说……速子打算放弃比赛了。」', 1);
    await era.input();
    await coffee.say_and_wait('这究竟……到底是为什么……');
    era.printButton(`「这是……我和速子的决定，从今以后${tachyon.sex}将——」`, 1);
    await era.input();
    await tachyon.say_and_wait('关于这点还是由我亲自来解释吧。');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 推开了房间的门，迎上了 ',
      me.get_colored_name(),
      ' 和 ',
      coffee.get_colored_name(),
      ' 的视线。',
    ]);
    await tachyon.say_and_wait([
      '简单来说，便是我从 ',
      sys_get_colored_callname(32, 25),
      '——你的身上发现了新的可能性。',
    ]);
    await coffee.say_and_wait('新的……可能性？');
    await tachyon.say_and_wait([
      '没错，我的目标——抵达乃至于超越赛',
      coffee.get_uma_sex_title(),
      '的极限……但说到底真的需要我本人亲自去实现吗？道路并非只有一条，即便需要验证的真理只有一个，但却存在数条通往终点的道路。',
    ]);
    await coffee.say_and_wait('这是……什么意思？');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 叹了口气，又浮夸地摆了摆手。',
    ]);
    await tachyon.say_and_wait([
      '我都说这么明白了还不懂吗……就是『顾问』啊，『顾问』！',
      sys_get_colored_callname(32, 25),
      '，我要成为你的顾问！',
    ]);
    await coffee.say_and_wait('诶……顾问！？');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 茫然下意识看向 ',
      me.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 点了点头。',
    ]);
    era.printButton('「没错，从今以后速子将担任你的顾问，但同时……」', 1);
    era.printButton(`「你也要承担帮助速子完成${coffee.sex}的目标的责任……」`, 2);
    era.printButton('「现在要征求的，就是茶座你的意见。」', 3);
    await era.input();
    await era.printAndWait([
      '说完，',
      me.get_colored_name(),
      ' 打算留点时间让 ',
      coffee.get_colored_name(),
      ' 思考，但 ',
      tachyon.get_colored_name(),
      ' 并不这么想。',
    ]);
    await tachyon.say_and_wait('在我的帮助下，你就能更快追上你的朋友了哦？');
    await era.printAndWait([
      '追上朋友——这是 ',
      coffee.get_colored_name(),
      ' 最大的愿望，',
      tachyon.get_colored_name(),
      ' 的实力与科学能力是即使对',
      coffee.sex,
      '颇具怨言的 ',
      coffee.get_colored_name(),
      ' 也认可的。',
    ]);
    await era.printAndWait('如果说能更快地追上朋友的话……');
    await coffee.say_and_wait('我还是没办法理解你……但，既然能帮到我的话……');
    await tachyon.say_and_wait(
      '呵呵呵呵……很好，这就对了。那就这么决定了，Plan B，就此开始！',
    );
    await era.printAndWait([
      '获得了 ',
      tachyon.get_colored_name(),
      ' 的助阵后，',
      coffee.get_colored_name(),
      ' 的经典赛事挑战之路会朝着怎样的方向前进呢……',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(25, [0, 0, 0, 0, 10], 0);
  };
};
