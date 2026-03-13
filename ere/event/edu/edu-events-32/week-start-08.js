const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 29] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('短暂歇息', tachyon);
    await tachyon.say_and_wait('夏日集训，然后……');
    if (edu_marks.plan_b) {
      await tachyon.say_and_wait([
        '然后再下一步……就是 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 了',
      ]);
      await tachyon.say_and_wait(
        '嗯，以世界的顶点作为巅峰的目标……呵呵，这真是，再适合不过了啊',
      );
    } else {
      era.println();
      await tachyon.say_and_wait([
        '然后再下一步……就是年底的 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 了',
      ]);
      await tachyon.say_and_wait(
        '嗯，以最具有影响力的比赛作为我们理论的结束……呵呵，这真是，再适合不过了啊',
      );
    }
    era.printButton('「不过，在这之前……」', 1);
    era.printButton('「还是先好好享受一番吧」', 2);
    await era.input();
    await era.printAndWait('阳光，沙滩，比基尼');
    await era.printAndWait(['还有 ', tachyon.get_colored_name(), ' 的泳装']);
    await era.printAndWait([tachyon.get_colored_name(), ' 的，泳装']);
    era.println();
    if (love >= 50 && tachyon.sex_code - 1) {
      await tachyon.say_and_wait(
        '只是看看……就够了吗？难道不想，亲自体验上手吗？',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 前倾望着 ',
        me.get_colored_name(),
        ' 的双眼，等待着某人主动踏出一步',
      ]);
      era.printButton('伸手去摸', 1);
      era.printButton('拒绝', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 忍不住伸手，朝向 ',
          tachyon.get_colored_name(),
          ' 胸前，那两条敷衍的细布完全装不下的果实',
        ]);
        era.println();
        await tachyon.say_and_wait('嗯……❤');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 发出了低吟，但瞳中的情绪却没什么变化',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 不由得陷入紧张，是自己的技术不够好吗？',
        ]);
        era.println();
        await era.printAndWait('不管怎么努力，都还是会被说更用力一些');
        await era.printAndWait([
          '说到底本来想用人类的力道去满足',
          tachyon.uma_sex_title,
          '就是难以做到的事吧……',
        ]);
        await era.printAndWait([
          '此时，你忽然发现，在泳装的下方，有着两颗先前没有，或者说没有那么明显的突起',
        ]);
        await era.printAndWait([
          '或许是作为速通的作弊按纽吧，鬼使神差的，你按下了圆润的球体上唯一的突起',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '等……咿！',
          callname,
          '！那里，那里不行！',
        ]);
        era.println();
        await era.printAndWait([
          '前面被指使了那么久，现在哪有说停就停的道理，',
          me.get_colored_name(),
          ' 不问不顾继续逮着尖顶的位置欺负',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '我……是我错了……刚刚不该那么说……不要，不要再按了……不行，不可以……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的反应比 ',
          me.get_colored_name(),
          ' 想象的还要大上许多',
        ]);
        await era.printAndWait([
          '不由得产生了好奇心的 ',
          me.get_colored_name(),
          ' 忽然童心大发，想测试看看怎么做 ',
          tachyon.get_colored_name(),
          ' 的反应才会最为激烈',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '……哈啊……哈啊……']);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 稍稍放松了手上的动作，在以为已经脱离危险的豚鼠小姐放松警惕后……',
        ]);
        era.println();
        await tachyon.say_and_wait('咿——————去，去了');
        era.println();
        await era.printAndWait('如压榨奶牛挤奶一般，用力的向下一拉');
        await era.printAndWait([
          '伴随全身不住的颤抖，',
          tachyon.get_colored_name(),
          ' 翻着白眼，向前倒下，压在了 ',
          me.get_colored_name(),
          ' 的身子上',
        ]);
        era.println();
        await tachyon.say_and_wait('欸嘿嘿……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 轻轻抚摸着 ',
          tachyon.get_colored_name(),
          ' 的背部，缓解',
          tachyon.sex,
          '的全身痉挛',
        ]);
        era.printButton('「真是没用啊，只是捏了捏乳头就去了吗？」', 1);
        era.printButton(
          `「比起赛${tachyon.uma_sex_title}，不如说是繁殖用的母马更合适吧」`,
          2,
        );
        await era.input();
        await era.printAndWait([
          '听见 ',
          me.get_colored_name(),
          ' 侮辱性的话语，',
          tachyon.get_colored_name(),
          ' 又抖了抖身子，被',
          tachyon.sex,
          '压在身下的 ',
          me.get_colored_name(),
          ' 感受到了微微的暖意从',
          tachyon.sex,
          '的股间流出',
        ]);
        begin_and_init_ero(0, 32);
        set_palam_to_max(32, part_enum.breast);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(32, part_enum.breast),
          false,
        );
        set_palam_to_max(32, part_enum.masochism);
        await quick_make_love(
          new EroParticipant(0, part_enum.abuse),
          new EroParticipant(32, part_enum.masochism),
          false,
        );
        end_ero_and_train(true);
      }
    } else if (relation >= 225 && tachyon.sex_code - 1) {
      await tachyon.say_and_wait(
        '怎么？看得这么入迷？呵呵，作为对帮助实验的奖励，再多看一些也没关系哦',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 扭了扭身子，更加凸显了胸前的硕大',
      ]);
    } else if (relation > 0 && relation <= 225) {
      era.println();
      await tachyon.say_and_wait(
        '呵，就这么喜欢这种露出度高的衣服吗？……不，这种情况风阻变小，确实有可能增加速度……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 说到一半又陷入了自己的沉思',
      ]);
      await era.printAndWait([
        '至于泳装对跑步的加成……',
        me.get_colored_name(),
        ' 看了看',
        tachyon.sex,
        '那不工整的热裤和凉鞋……',
        me.get_colored_name(),
        ' 想，问题应该不在泳装上吧',
      ]);
    } else {
      await tachyon.say_and_wait(
        '……我不会要求你必须和我一样以理性至上，但至少收收你那发情猴子一样的眼神',
      );
    }
  };

  handlers[95 + 31] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (edu_marks.plan_b) {
      const coffee = get_chara_talk(25);
      await print_event_name('再度闪耀的光子', tachyon);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 独自在沙滩上奔跑着',
      ]);
      await era.printAndWait('与前一年的此时仿佛似曾相似的场景');
      await era.printAndWait([
        '想到这，',
        tachyon.get_colored_name(),
        ' 忽然停下脚步',
      ]);
      era.println();
      await era.printAndWait('此时此刻，恰如彼时彼刻');
      era.println();
      await tachyon.say_and_wait('……你来了啊');

      era.printButton('「我来了」', 1);
      await era.input();
      await tachyon.say_and_wait('你不该来的');

      era.printButton('「但我还是来了」', 1);
      era.println();
      await era.printAndWait([
        '明明没有提前约定过，',
        me.get_colored_name(),
        ' 却还是在隔了一年后的这一天，再一次来到这片沙滩上',
      ]);
      era.println();
      await tachyon.say_and_wait('……好了，别闹了，说正事');
      era.println();
      await era.printAndWait([
        '不愿意配合 ',
        me.get_colored_name(),
        ' 继续接梗下去的 ',
        tachyon.get_colored_name(),
        ' 马上想要进入正题，却被打断了发言',
      ]);
      era.printButton('「比起那个」', 1);
      era.printButton('「可以先跑一趟让我看看吗？」', 2);
      await era.input();
      era.drawLine();
      await era.printAndWait('比起去年的这个时候');
      await era.printAndWait([
        '恢复训练的 ',
        tachyon.get_colored_name(),
        '，跑法自然不可与昨日同比',
      ]);
      await era.printAndWait('但是，差的却不只是训练的程度');
      era.println();
      await era.printAndWait(
        '如同去年，明明是久未锻炼下，形不成形的跑法，却还是闪烁着令人着迷的光芒一般',
      );
      await era.printAndWait([
        '如今的 ',
        tachyon.get_colored_name(),
        '，闪耀着 ',
        me.get_colored_name(),
        ' 曾见过的最耀眼的光芒',
      ]);
      await era.printAndWait(['亮的令人不由得产生一种错觉']);
      await era.printAndWait('———亮的哪怕此刻熄灭，也不会有任何一点遗憾一般');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 结束之后，我会退出闪耀系列赛',
      ]);
      era.println();
      await era.printAndWait('不是暂停，而是退出，换句话说就是退役');
      await era.printAndWait('一旦退出，将不再有任何挽回的机会');
      era.println();
      await tachyon.say_and_wait(
        '我的腿……勉强撑了半年下来，也已经差不多知足了',
      );
      await tachyon.say_and_wait([
        '天皇赏春，还有宝冢纪念……然后，最后的凯旋门赏',
      ]);
      await tachyon.say_and_wait([
        '……所以最后我想问你，',
        callname,
        '……你不后悔吗？',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 说的话让 ',
        me.get_colored_name(),
        ' 开始回忆',
      ]);
      await era.printAndWait('后悔，后悔什么？');
      await era.printAndWait([
        '后悔让 ',
        tachyon.get_colored_name(),
        ' 在宝冢纪念发挥全力？',
      ]);
      await era.printAndWait([
        '后悔在天春前的晚上没有阻止 ',
        tachyon.get_colored_name(),
        '？',
      ]);
      await era.printAndWait('后悔选择了Plan B？');
      await era.printAndWait([
        '还是……后悔招募了 ',
        tachyon.get_colored_name(),
        '？',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 将问题问出口，',
        tachyon.get_colored_name(),
        ' 沉默了一会',
      ]);
      await era.printAndWait('随后，开口回答');
      era.println();
      await tachyon.say_and_wait('……都有');
      await tachyon.say_and_wait([
        '不后悔吗？找了我这么一个难搞，出尔反尔，三心二意的',
        tachyon.uma_sex_title,
        '当负责人',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait([
          '要是当初只负责了 ',
          sys_get_colored_callname(32, 25),
          ' 就好了～之类的？',
        ]);
        era.println();
        await era.printAndWait(
          '虽然听起来像在询问，但给人的感觉却更接近于吃醋的闹脾气',
        );
      }
      era.println();
      await era.printAndWait([
        '听',
        tachyon.sex,
        '这么说，',
        me.get_colored_name(),
        ' 认真的回忆了一下',
      ]);
      await era.printAndWait([
        '想起宝冢纪念时，脑袋里只能回想起 ',
        tachyon.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 的巅峰对决',
      ]);
      await era.printAndWait([
        '想起天皇赏春时，只能回想起 ',
        coffee.get_colored_name(),
        ' 诡谲的跑法以及……',
        tachyon.get_colored_name(),
        ' 那再次绽放的闪光',
      ]);
      await era.printAndWait([
        '想起选择了Plan B的那天……真心希望 ',
        tachyon.get_colored_name(),
        ' 可以安稳平安的心情',
      ]);
      await era.printAndWait([
        '最后，想起那天在训练场，被',
        tachyon.sex,
        '的跑法灼伤双眼，留下永远无法愈合的伤痕的那天',
      ]);
      era.printButton('「不后悔」', 1);
      era.printButton('「后悔，后悔没早一点认识速子」', 2);
      await era.input();
      await tachyon.say_and_wait('……哼哼，这样啊');
      await tachyon.say_and_wait('那么，就继续跟着我吧……');
      await tachyon.say_and_wait([
        '一起登上世界的巅峰，然后我会让你看见研究的成果———最能令人满意的，属于 ',
        tachyon.get_colored_name(),
        ' 的跑法！',
      ]);
      await era.printAndWait('跑出至今为止，最令人满意，最令人眩目的跑法');
      await era.printAndWait(
        '让一直关注着自己的，身边最大的粉丝满意的一场比赛',
      );
      await era.printAndWait('不知不觉，唇间有些干燥');
      await era.printAndWait('期待着更加精彩的比赛，期待着更加璀璨的姿态');
      await era.printAndWait([
        '身为偶像的',
        tachyon.sex,
        '都已经如此开口了，被其跑法所迷诱的豚鼠，除了同意，还有什么话能说呢',
      ]);
      era.printButton('「上吧，速子」', 1);
      await era.input();
      await era.printAndWait('过去不会后悔，现在如此，未来也将如此');
      await era.printAndWait(['两人踏向了法国———凯旋门赏']);
      flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 20, 10], 0);
      flags.wait_flag = sys_love_uma(32, 5) || flags.wait_flag;
    } else {
      await print_event_name('他人的可能性', tachyon);
      await era.printAndWait('阳光，沙滩');
      await era.printAndWait([
        '以及在沙滩上奔跑着的',
        tachyon.uma_sex_title,
        '们',
      ]);
      era.printButton('「真是青春啊」', 1);
      await era.input();
      await say_by_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '……看着眼前的场景居然能说出这种话来，训练员',
        me.get_adult_sex_title(),
        '您也……真不愧是速子前辈的训练员啊',
      ]);
      era.println();
      await era.printAndWait([
        '夏日的沙滩上，正在进行着',
        tachyon.uma_sex_title,
        '间的追逐战',
      ]);
      await era.printAndWait('仿佛鬼抓人一般');
      await era.printAndWait(
        '明明是以一对多，但不知为何惧怕并逃跑的却是人多的一方',
      );
      await era.printAndWait([
        '而被惧怕着的一方，赫然是今年上半年风头最盛的',
        tachyon.uma_sex_title,
        '，也是 ',
        me.get_colored_name(),
        ' 的负责',
        tachyon.uma_sex_title,
        '，',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        '哦呀哦呀……这可真是，现在的孩子连良药苦口的道理都不明白了吗',
      );
      await say_by_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '……如果，只是苦的程度也就算了',
      );
      await say_by_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '速子前辈的药……虽然味道不错，虽然不错，但是……！',
      );
      await say_by_passer_by_and_wait(
        tachyon.uma_sex_title + 'D',
        '身体发光什么的……这种事真的太丢人了！',
      );
      era.println();
      await era.printAndWait('…………欸？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着眼前的',
        tachyon.uma_sex_title,
        '们……虽然因为阳光的关系不太明显，但确实在手臂肩膀或者腿的位置散发着微弱的光芒',
      ]);
      await era.printAndWait('不过，为什么发光的都是些奇怪的地方');
      await era.printAndWait([
        '嗯？怎么还有个',
        tachyon.uma_sex_title,
        '大腿内侧在……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……这种药的效果，是让血流加速的部位发光，而且药效应该只有训练的那一个小时有效，',
      );
      await tachyon.say_and_wait(
        '但副作用是会加速兴奋情况下被触碰位置的蛋白质UMA—A的活性，而血流加速发光的原理就是透过对UMA—A',
      );
      era.drawLine();
      await tachyon.say_and_wait(
        '总而言之，就是……与心上人，或者会使自己心跳加速的人身体接触，才会发光',
      );
      era.println();
      await era.printAndWait('啊，原来如此');
      await era.printAndWait('这下能够明白肩膀手臂发光的原因了');
      await era.printAndWait('……等等，那大腿内侧的……');
      await era.printAndWait([
        me.get_colored_name(),
        ' 看',
        tachyon.sex,
        '忽然羞红了脸的模样，已经领悟了一切',
      ]);
      await era.printAndWait('……现在的孩子玩的真花啊');
      era.println();
      await tachyon.say_and_wait(
        '总之……这种药，主要还是辅佐作用，必须要结合持之以恒的训练才能有效',
      );
      await say_by_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '我……我们会好好训练的！真的不会偷懒！所以药什么的……',
      );
      await tachyon.say_and_wait(
        '呵呵，那可不行，两者结合才能达到最佳的提升效果，所以……乖乖喝下去吧！',
      );
      era.println();
      await era.printAndWait([
        '眨眼间，',
        tachyon.get_colored_name(),
        ' 便趁着',
        tachyon.uma_sex_title,
        '们放松警惕时一个箭步冲到了其中一名',
        tachyon.uma_sex_title,
        '面前，以迅雷不及掩耳的速度将药灌入',
        tachyon.sex,
        '的口中',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '就让你们瞧瞧吧……以 ',
        callname,
        ' 为对象训练出来的灌药能力！哈哈哈哈哈哈！',
      ]);
      await say_by_passer_by_and_wait(tachyon.uma_sex_title + 'B', '咿呀———');
      await say_by_passer_by_and_wait(tachyon.uma_sex_title + 'C', '咕哇————');
      era.println();
      await era.printAndWait([
        '再怎么说，也是身为G1级',
        tachyon.uma_sex_title,
        '，也是 ',
        me.get_colored_name(),
        ' 认可的最快的',
        tachyon.uma_sex_title,
        '，这些还未完全发育成的后辈当然不是 ',
        tachyon.get_colored_name(),
        ' 的对手',
      ]);
      await era.printAndWait('不过几分钟的时间，整个沙滩已经尸横遍野');
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '速……速子前辈怎么，好像变了个人一样',
      );
      era.println();
      await era.printAndWait([
        '这么说来，为了后辈们眼中的形象好方便实验，',
        tachyon.get_colored_name(),
        ' 一般在后辈们面前都是维持着装出来的成熟前辈样来着',
      ]);
      await era.printAndWait([
        '要说的话，眼前这副模样才是 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '的本性才对',
      ]);
      await era.printAndWait(['不过……', tachyon.sex, '说的也没错']);
      era.printButton('「速子确实……改变了很多呢」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 想起了前几天 ',
        tachyon.get_colored_name(),
        ' 说的话',
      ]);
      await tachyon.used_to_say_and_wait(
        '想要变得和速子前辈一样强……那些孩子这么和我说了哦！',
      );
      await tachyon.used_to_say_and_wait([
        '来吧！',
        callname,
        '！为了那些孩子，必须要努力调配最适合',
        tachyon.sex,
        '们的药出来才行！',
      ]);
      await era.printAndWait(['不是，「为了实验，让', tachyon.sex, '们试药」']);
      await era.printAndWait(['不是，「为了', tachyon.sex, '们，而调配药物」']);
      await say_by_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '果然是这样吧……以前那个温柔的速子前辈到底去哪里了……',
      );
      era.println();
      await tachyon.say_and_wait('哦呀～～这里不还有一匹小马驹吗？');
      await say_by_passer_by_and_wait(tachyon.uma_sex_title + 'A', '咿！！！');
      era.println();
      await era.printAndWait([
        '看着最后躲在 ',
        me.get_colored_name(),
        ' 身旁的小',
        tachyon.uma_sex_title,
        '也被 ',
        tachyon.get_colored_name(),
        ' 按倒灌药，这场沙滩上的残忍实验总算以 ',
        tachyon.get_colored_name(),
        ' 的完胜作为结局',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '好了，',
        callname,
        '，开始我们今天的实验吧',
      ]);
      await era.printAndWait('但只有这点，是不会改变的');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 始终还是追求着极限以及突破极限的',
        tachyon.uma_sex_title,
      ]);
      era.printButton('「那么，今天的实验主题是？」', 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……你应该知道吧，最近 ',
          sys_get_colored_callname(32, 2),
          ' 似乎学会了在水上跑步的方法',
        ]);
        await era.printAndWait('…………欸？');
        era.println();
        await tachyon.say_and_wait(
          '根据计算，只要能够以超过30m每秒的速度在水上奔跑，确实是可以达到类似于轻功点水的效果',
        );
        era.println();
        await era.printAndWait('……不是，30m？每秒？');
        await era.printAndWait('不知何时，自己的腰上已经被绑上了一条绳子');
        await era.printAndWait([
          '而 ',
          tachyon.get_colored_name(),
          ' 坐上了海边的水上摩托',
        ]);
        await me.say_and_wait('……为什么你是水上摩托我却要在水上跑啊！？');
        era.println();
        await tachyon.say_and_wait(['加油吧，', callname, '，你一定可以的']);
        era.println();
        await era.printAndWait('话音刚落，整个人便飞了出去');
        await era.printAndWait([
          '轻功水上飘有没有成功不知道，但据看见那道风景线的小',
          tachyon.uma_sex_title,
          '们所说，倒是像打水漂时在水面上弹跳的石子',
        ]);
      } else {
        await tachyon.say_and_wait('今天的话……来点有意思的实验吧');
        era.println();
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 当着一群后辈们的面前，牵住了 ',
          me.get_colored_name(),
          ' 的手',
        ]);
        era.printButton('「速……速子？」', 1);
        await era.input();
        await era.printAndWait([
          '原本趴在地上装死的后辈们忽然抬起眼睛盯着 ',
          me.get_couple_title(),
          ' 两人',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 将脸贴近 ',
          me.get_colored_name(),
          ' 的耳朵，悄悄说道',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '之前不是说过吗，想要进行对于观众，或者说粉丝的观察',
        );
        await tachyon.say_and_wait([
          '现在是对于情感挑动方面的探查……举例来讲，要是我在这里亲你一下，',
          tachyon.sex,
          '们的反应会如何呢？',
        ]);
        era.println();
        await era.printAndWait([
          '或许是因为阳光太过炙热，导致 ',
          me.get_colored_name(),
          ' 竟然有些不敢抬头去看 ',
          tachyon.get_colored_name(),
          ' 此时的眼神',
        ]);
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 的唇凑近了 ',
          me.get_colored_name(),
          ' 的脸庞，由于身体的遮挡，看上去就仿佛真的亲上去了一般',
        ]);
        await era.printAndWait([
          '一旁围观的',
          tachyon.uma_sex_title,
          '们发出了小小的惊呼',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '真是……不可思议。',
          callname,
          '，不知道为什么，听见',
          tachyon.sex,
          '们的声音之后，我感觉自己似乎更有行动的欲望了',
        ]);
        await tachyon.say_and_wait(
          '是卡里古拉效应吗？由于在公共场所进行这样的事会使人感到害羞，因此反而增加了行为的欲望',
        );
        era.println();
        await tachyon.say_and_wait('啾❤');
        era.println();
        await era.printAndWait('亲上去了');
        await era.printAndWait('连说服自己的借口都没有了');
        era.println();
        await tachyon.say_and_wait(
          '那么……还要不要继续呢？让我们听听看，观众的感想吧❤',
        );
        era.println();
        await era.printAndWait([
          '说到最后一句是，',
          tachyon.get_colored_name(),
          ' 的音量忽然放大',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 转头看向沙滩，却看见一张张因眼前景色而满脸通红的稚嫩脸庞',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '看来……大家都很喜欢呢，这不是你宝冢时跟我说过的吗？粉丝服务……之类的？',
        ]);
        era.println();
        await era.printAndWait([
          '不妙啊，当初劝 ',
          tachyon.get_colored_name(),
          ' 的话竟然变成迴力镖了吗',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 抱住了 ',
          me.get_colored_name(),
          ' 的身体，顺势向前将 ',
          me.get_colored_name(),
          ' 压在了沙滩上',
        ]);
        era.println();
        await tachyon.say_and_wait('还想……继续吗？');
        era.printButton('「不想」', 1);
        era.printButton('「……不想」', 2);
        await era.input();
        await era.printAndWait(
          '再怎么说，即便退一万步来讲，在这么多人面前，还是太过头了吧',
        );
        await era.printAndWait([
          '而且仔细看了一眼，其实 ',
          tachyon.get_colored_name(),
          ' 的脸庞也有淡淡的微红……虽然不知道是因为害羞还是兴奋就是了',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '那么……就麻烦你跟这些小',
          tachyon.uma_sex_title,
          '们收集兴奋时的数据了',
        ]);
        era.println();
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 从 ',
          me.get_colored_name(),
          ' 身上爬了起来',
        ]);
        era.println();
        await tachyon.say_and_wait('如果还想继续的话……记得带着数据回来找我❤');
        era.println();
        await era.printAndWait([
          '没有放低音量的暗示话语，使周围',
          tachyon.uma_sex_title,
          '们又发出了阵阵的惊呼',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 摸摸鼻子，这下数据收集虽然容易，但之后不管回去不回去都得有人说闲话了啊',
        ]);
      }
      flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 5, 10], 0);
    }
  };
};
