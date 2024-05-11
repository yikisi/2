const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { back_school } = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[race_enum.begin_race] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1 || era.get('cflag:25:育成回合计时') >= 48) {
      return true;
    }
    await print_event_name('海市蜃楼', coffee);
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}A`,
      '哈、呼……！大家都辛苦了！是场很精彩的比赛呢！',
    );
    await say_by_passer_by_and_wait(`赛${coffee.get_uma_sex_title()}A`, [
      '那边那位……是叫做 ',
      coffee.get_colored_name(),
      ' 吧？你也辛苦了……',
    ]);
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}A`,
      '呃，咦……没在听吗？那个……',
    );
    await coffee.say_and_wait('…………');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 背对着其他赛',
      coffee.get_uma_sex_title(),
      '，默默地望着远方。',
    ]);
    await era.printAndWait([
      '赶到选手通道的 ',
      me.get_colored_name(),
      ' 在找到 ',
      coffee.get_colored_name(),
      ' 后，走上前去。',
    ]);
    await coffee.say_and_wait(['啊，', callname, '……']);
    era.printButton('「比赛结果如何？」', 1);
    await era.input();
    await coffee.say_and_wait(
      '……我输了，朋友独自一个人跑在最前面，冲过了终点……跑得越来越远……',
    );
    await coffee.say_and_wait(
      '而且看起来很开心的样子，应该是因为能在宽广的地方奔跑吧。但同时……',
    );
    await coffee.say_and_wait(
      '差距……也是至今最大的一次……像是解开了什么束缚般，跑得非常快。',
    );
    await coffee.say_and_wait('……我想追上朋友。但……我该怎么做……');
    await era.printAndWait([
      '从 ',
      coffee.get_colored_name(),
      ' 的叙述来看，「朋友」和',
      coffee.sex,
      '之间速度的差距似乎相当的大……',
    ]);
    await era.printAndWait(
      '既然如此，就算仓促地拟定计划，大概也很难得到成效。这样的话——',
    );
    era.printButton('「暂且不定下赛程，一步步强化自己吧。」', 1);
    await era.input();
    await coffee.say_and_wait('一步步强化……意思是要花很长的时间吗……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 的建议让 ',
      coffee.get_colored_name(),
      ' 感到迟疑，从',
      coffee.sex,
      '沉重的表情看来，脑海里正在进行着激烈的权衡吧。',
    ]);
    await coffee.say_and_wait(
      '……我明白了。既然不能立刻就追上的话，再加上我的体质称不上很健壮……或许这样比较适合。',
    );
    await era.printAndWait('这样就算是达成了共识。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 向',
      coffee.sex,
      '点了点头，并站到',
      coffee.sex,
      '身边，同时发誓要与',
      coffee.sex,
      '一起追逐相同目标。',
    ]);
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}A`,
      '我说，那两个人是不是怪怪的啊……？一直盯着什么都没有的远处诶。',
    );
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}B`,
      '可能他们两个……都是怪人吧。还是不要靠太近比较好……」',
    );
    await era.printAndWait([
      '偶然接触到另一个世界，并被 ',
      coffee.get_colored_name(),
      ' 拯救了的 ',
      me.get_colored_name(),
      '，此刻决定试着去了解只有',
      coffee.sex,
      '了解的世界……并且一步一步地，拿下好成绩。',
    ]);
    extra_flag.relation_change = 15;
    extra_flag.pt_change = 30;
    add_event(back_school, new EventObject(25, cb_enum.edu));
  };

  handlers[race_enum.hoch_sho] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('道标', coffee);
    await era.printAndWait([
      '比赛结束后，',
      me.get_colored_name(),
      ' 马上赶到了选手通道内。',
    ]);
    era.printButton('「茶座！」', 1);
    await era.input();
    await era.printAndWait([
      '听到 ',
      me.get_colored_name(),
      ' 的呼喊后，还在喘着气的 ',
      coffee.get_colored_name(),
      ' 望向了 ',
      me.get_colored_name(),
      ' 的方向，还没能从比赛的疲劳中恢复过来的',
      coffee.sex,
      '脸色比平常还要略显苍白，汗水不断从额上流下。',
    ]);
    await coffee.say_and_wait([
      '呼、呼……',
      callname,
      '、',
      me.get_adult_sex_title(),
      '……咳咳、咳……',
    ]);
    era.printButton('「没事吧！？」', 1);
    await era.input();
    await coffee.say_and_wait('没事的……只是稍微，有点跑得过头了……');
    await era.printAndWait([
      '这次 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '，',
      coffee.get_colored_name(),
      ' 的对手每一个都实力强劲，全程都捏着一把汗的 ',
      me.get_colored_name(),
      ' 直到 ',
      coffee.get_colored_name(),
      ' 最终冲线时才松了一口气。',
    ]);
    await era.printAndWait([
      '但……单纯的胜利并不是 ',
      me.get_couple_title(),
      ' 的目标。',
    ]);
    era.printButton('「朋友怎么样？」', 1);
    await era.input();
    await coffee.say_and_wait('还是没能追上……但是，距离缩短了……！');
    await coffee.say_and_wait('只要继续这样参加比赛下去……总有一天会……');
    await era.printAndWait([
      '从 ',
      coffee.get_colored_name(),
      ' 一直以来的描述来看，朋友无疑是一个十分强的存在……追逐朋友这个目标，和让 ',
      coffee.get_colored_name(),
      ' 获得更好的成绩完美符合。',
    ]);
    await era.printAndWait([
      '从这点来看，让 ',
      coffee.get_colored_name(),
      ' 维持现状继续准备挑战经典三冠路线是最好的选择，但……',
    ]);
    if (sys_reg_race(32).curr === race_enum.hoch_sho) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '你们在这里啊，',
        sys_get_callname(32, 0),
        '，还有 ',
        t_call_c,
        '。',
      ]);
      await era.printAndWait([
        '虽然这次输给了 ',
        coffee.get_colored_name(),
        '，但是 ',
        tachyon.get_colored_name(),
        ' 此刻却比虚弱的 ',
        coffee.get_colored_name(),
        ' 显得更加游刃有余，带着标志性的笑容，',
        coffee.sex,
        '走向了 ',
        me.get_couple_title(),
        ' 两人。',
      ]);
      await tachyon.say_and_wait([
        t_call_c,
        '，你这次——跑得很好，非常好！虽然不行，但很好！意料之外的成功和意料之内的失败是可以相抵的！',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 独自笑了一阵子后，又望向了天空，似乎低声说了些什么。',
      ]);
      await tachyon.say_and_wait('速子——那是……移动得比光速还要快的假想粒子。');
      await tachyon.say_and_wait(
        '但纵使是假想，我也该让大家见识一下，狂热所带来的余光。',
      );
      await tachyon.say_and_wait([
        '在 ',
        race_infos[race_enum.sats_sho].get_colored_name(),
        '，尽情燃烧后，一定能诞生出耀眼的残骸。',
      ]);
      await tachyon.say_and_wait([
        '那么，暂时就这样了。',
        t_call_c,
        '，期待你今后的表现。',
      ]);
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait([
        '和往常一样，',
        tachyon.get_colored_name(),
        ' 在突然出现后，说了些难懂的话，又自顾自地走了，留下看着',
        coffee.sex,
        '远去的身影、陷入沉默的 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        '。',
      ]);
      await coffee.say_and_wait([
        callname,
        '……',
        race_infos[race_enum.sats_sho].get_colored_name(),
        '……我要参加吗？',
      ]);
      await era.printAndWait([
        '从 ',
        tachyon.get_colored_name(),
        ' 的话中想起了什么，',
        coffee.get_colored_name(),
        ' 转头向 ',
        me.get_colored_name(),
        ' 问到。',
      ]);
    }
    era.printButton('「今天的比赛，你应该很吃力吧？」', 1);
    await era.input();
    await coffee.say_and_wait('是的……有点，力不从心……');
    era.printButton('「那么，皋月赏……就暂时放弃吧。」', 1);
    await era.input();
    await era.printAndWait([
      '今天这场激烈的比赛，应该给',
      coffee.sex,
      '瘦弱的身体带来很大的负担。虽说已经看清今后该挑战的路线，但要这么快挑战G1赛事对',
      coffee.sex,
      '还是太勉强了。',
    ]);
    await coffee.say_and_wait('那么……德比……');
    await era.printAndWait([
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 的确是一场 ',
      me.get_colored_name(),
      ' 希望 ',
      coffee.get_colored_name(),
      ' 能拿下的比赛。但若真要以德比为下一个目标，那',
      coffee.sex,
      '是否撑得过，将会成为一场豪赌……',
    ]);
    await coffee.say_and_wait([
      '……抱歉，',
      callname,
      '……都是因为我……这么没用的关系……',
    ]);
    await coffee.say_and_wait(
      '我不想……利用你的温柔……而且……这么关键的一战……咳咳……',
    );
    await era.printAndWait([
      '轻拍 ',
      coffee.get_colored_name(),
      ' 的背部，让',
      coffee.sex,
      '稍微缓一缓。',
    ]);
    era.printButton(
      `「挑战秋季的 ${race_infos[race_enum.stli_kin].name_zh} 吧。」`,
      1,
    );
    await era.input();
    await coffee.say_and_wait([
      race_infos[race_enum.stli_kin].get_colored_name(),
      '……',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 的前哨战吗……要隔那么久……',
    ]);
    await coffee.say_and_wait('可是……这样的话……至少德比还是……');
    era.printButton('「德比的话视情况再决定吧。」', 1);
    await era.input();
    await coffee.say_and_wait('视情况……好的，那就如果情况允许的话，再……');
    await era.printAndWait([
      '就这样，下一个目标定在了 ',
      race_infos[race_enum.stli_kin].get_colored_name(),
      '，',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 则视情况允许再参加。',
    ]);
    extra_flag.attr_change = new Array(5).fill(10);
    extra_flag.attr_change[get_random_value(0, 4)] = 0;
    extra_flag.pt_change = 35;
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.toky_yus] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('屹立', coffee);
    await say_by_passer_by_and_wait('解说员', [
      coffee.get_colored_name(),
      ' 称霸德比──！！不灭的摩天大楼，在此屹立！',
    ]);
    await say_by_passer_by_and_wait('解说员', [
      '然而',
      coffee.sex,
      '不要紧吗？看起来耗尽了体力，连脚步都无法走稳……但',
      coffee.sex,
      '仍然为对',
      coffee.sex,
      '怀抱梦想的人们实现了宿愿——！！',
    ]);
    await era.printAndWait([
      '选手通道内，',
      coffee.get_colored_name(),
      ' 踉踉跄跄地走向 ',
      me.get_colored_name(),
      '。',
    ]);
    await coffee.say_and_wait(['训练员……', me.get_adult_sex_title(), '……']);
    era.printButton('「你做得很好，茶座……」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 倒在了 ',
      me.get_colored_name(),
      ' 的怀中，精疲力尽的模样让 ',
      me.get_colored_name(),
      ' 感到无比心疼，但',
      coffee.sex,
      '还是成功拿下了胜利。',
    ]);
    await coffee.say_and_wait('呼、哈……');
    era.printButton('「接下来就好好休息吧。」', 1);
    era.printButton('「训练强度也要适当降低。」', 2);
    await era.input();
    await coffee.say_and_wait('好的……');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 取得了 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 的优胜，长久以来的努力总算是得到了最好的结果。同时，在 ',
      me.get_colored_name(),
      ' 竭尽全力地照护下，',
      coffee.sex,
      '的身体恢复情况喜人，应该也有望在秋季取得好成绩……',
    ]);
    extra_flag.attr_change = new Array(5).fill(0);
    extra_flag.attr_change[get_random_value(0, 4)] = 20;
    extra_flag.base_change = JSON.parse('{"体力":-250}');
    extra_flag.pt_change = 45;
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.stli_kin] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('过渡', coffee);
    era.printButton('「辛苦了，茶座！」', 1);
    await era.input();
    await era.printAndWait([
      '和往常一样，',
      me.get_colored_name(),
      ' 早早地来到了选手通道内来等候 ',
      coffee.get_colored_name(),
      '。',
    ]);
    await coffee.say_and_wait(['哈、呼、哈……', callname, '。我成功了……']);
    await coffee.say_and_wait('虽然过程并不轻松……但我的脚……还留有余力。');
    await era.printAndWait([
      '跑出优秀表现后的',
      coffee.sex,
      '仍带有一丝虚弱。但身体方面，在经过夏天的锻炼后，似乎变得比之前健壮得多。',
    ]);
    await era.printAndWait([
      '但绝不能就此而放松，因为一个月后，便是至关重要的——',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '。',
    ]);
    extra_flag.attr_change = new Array(5).fill(6);
    extra_flag.attr_change[get_random_value(0, 4)] = 0;
    extra_flag.pt_change = 35;
    extra_flag.relation_change = 20;
  };

  handlers[race_enum.kiku_sho] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('收获', coffee);
    await say_by_passer_by_and_wait('解说员', [
      coffee.get_colored_name(),
      '！',
      coffee.sex,
      '势如破竹地超越众人，率先冲过了终点！',
    ]);
    await say_by_passer_by_and_wait('观众们', '喔哦哦哦哦哦哦哦！！！！！」');
    await say_by_passer_by_and_wait('解说员', [
      coffee.sex,
      '那飞快的步伐……不，是惊异的步伐！令现场所有人都看得目瞪口呆……！',
    ]);
    await era.printAndWait([
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 上，',
      coffee.get_colored_name(),
      ' 用前所未有的稳健步伐，抵达了终点。',
    ]);
    await era.printAndWait(
      '春天、夏天……这段时间日积月累的努力，终于在此刻开花结果了。',
    );
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 露出了难得的兴奋表情，穿过选手通道，来到 ',
      me.get_colored_name(),
      ' 身边。',
    ]);
    await coffee.say_and_wait(
      '训练员……！朋友……！刚才……就在我的眼前……！我从来没在比赛中距离那么近过……！',
    );
    era.printButton('「恭喜，那有看清楚脸吗？」', 1);
    await era.input();
    await coffee.say_and_wait('还没有……但今天跑完了全程，却一点都不觉得辛苦……');
    await coffee.say_and_wait('这就是我……这就是现在的我吗……');
    await era.printAndWait([
      coffee.sex,
      '的语气里充满了难以置信。而 ',
      me.get_colored_name(),
      ' 也能从',
      coffee.sex,
      '的话中看出，一直以来对 ',
      coffee.get_colored_name(),
      ' 的身体造成不良影响的怪异，应该是消失了。',
    ]);
    await coffee.say_and_wait([callname, '……接下来的目标是？']);
    await era.printAndWait('从兴奋中平复了过来，也是时候决定接下来的目标了。');
    era.printButton('「……有马纪念吧。」', 1);
    await era.input();
    await coffee.say_and_wait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '……那 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '，要放弃掉吗？',
    ]);
    await era.printAndWait([
      '选择 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '，主要的原因是想让 ',
      coffee.get_colored_name(),
      ' 好好休息。',
    ]);
    await era.printAndWait([
      '尽管',
      coffee.sex,
      '现在的身体状况已经有了明显的改善，但高强度的比赛还是存在很大隐患。',
    ]);
    await era.printAndWait([
      '除此之外，看过今天的比赛后，',
      me.get_colored_name(),
      ' 可以看出 ',
      coffee.get_colored_name(),
      ' 应该更适合长距离的赛事。虽然 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 只相差了100米……但有时却正是这看似很多的100米决定了胜负。',
    ]);
    await era.printAndWait([
      '在向 ',
      coffee.get_colored_name(),
      ' 作出解释后，',
      coffee.sex,
      '没有反驳，而是向前一步，握住了 ',
      me.get_colored_name(),
      ' 的手。',
    ]);
    await coffee.say_and_wait([
      '我……相信 ',
      callname,
      '。因为有 ',
      callname,
      ' 在……我才能有现在的成绩，能这么靠近朋友……',
    ]);
    if (check_tachyon_plan_b()) {
      const c_call_t = sys_get_colored_callname(25, 32),
        t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '呵呵呵、哈哈哈！很好很好，太好了。',
        t_call_c,
        '，你跑得太棒了！',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 此时才慢悠悠地从观众席赶到。',
      ]);
      await tachyon.say_and_wait([
        '完全和我预想的一样！不愧是我选中的Plan B！没有错吧，',
        t_call_c,
        '！？',
      ]);
      await coffee.say_and_wait([
        c_call_t,
        '……我还是不能完全信任你……但还是感谢你对我的帮助。',
      ]);
      await era.printAndWait([
        '说完，',
        coffee.get_colored_name(),
        ' 拉着 ',
        me.get_colored_name(),
        ' 的手扭头打算离开。在离开之际 ',
        me.get_colored_name(),
        ' 回头看了 ',
        me.get_colored_name(),
        ' 的另一个担当',
        coffee.get_uma_sex_title(),
        '——',
        tachyon.get_colored_name(),
        '，',
        coffee.sex,
        '仍像往常一样，脸上挂着富有余裕的笑容。',
      ]);
      await era.printAndWait([
        '只是，在 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 都没有注意到的地方，',
        tachyon.get_colored_name(),
        ' 露出了转瞬即逝的失落。',
      ]);
    }
    extra_flag.attr_change = new Array(5).fill(6);
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };
};
