const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 15] = async (tachyon, me, callname, flags) => {
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('闪烁的光子', tachyon);
    await era.printAndWait('夜间的训练场');
    await era.printAndWait('理应无人，理应不该有人的这个时间点……');
    era.println();
    await tachyon.say_and_wait('……哈哈，人可真多啊……');
    era.println();
    await era.printAndWait('意外的，赛场上充满了自主训练的人');
    await era.printAndWait([
      '由于G1战线的开始，感到紧张的',
      tachyon.get_uma_sex_title(),
      '们自作主张的训练也是这个时期特雷森的常见风景线啊',
    ]);
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', [
      '啊，速子前……欸，训练员',
      me.get_adult_sex_title(),
      '！？',
    ]);
    era.println();
    await era.printAndWait([
      '一名看见了 ',
      tachyon.get_colored_name(),
      ' 想上来打招呼的后辈，看到隐藏在',
      tachyon.sex,
      '背后的 ',
      me.get_colored_name(),
      '，立马僵住了步伐',
    ]);
    await era.printAndWait('毕竟再怎么说，自主训练还是不被鼓励的行为……');
    await era.printAndWait([
      '不过，陪着负责',
      tachyon.get_uma_sex_title(),
      '主动来自主训练的 ',
      me.get_colored_name(),
      ' 也没什么资格责备',
      tachyon.sex,
      '们吧',
    ]);
    era.printButton('「嘘」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 苦笑着对',
      tachyon.sex,
      '比了个嘘的手势，',
      tachyon.sex,
      '也悟性很高的装作没看到 ',
      me.get_colored_name(),
      '，继续和 ',
      tachyon.get_colored_name(),
      ' 说着话',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '速子前辈！我今年也进入经典赛了！皋月赏好可惜～～没办法参赛，但德比我会加油的！',
    );
    await tachyon.say_and_wait('呵呵，那要好好努力了');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '可恶～～因为本格化的太晚，所以训练员让我回避了皋月赏……有没有办法能够加快本格化的速度呢',
    );
    await tachyon.say_and_wait(
      '还是顺其自然发展比较好……强迫发育无论如何都会留下隐患……',
    );
    era.println();
    await era.printAndWait([
      '和后辈谈话时的 ',
      tachyon.get_colored_name(),
      '，温和的出乎 ',
      me.get_colored_name(),
      ' 的意料',
    ]);
    await era.printAndWait([
      '甚至让人有点难以相信这是 ',
      tachyon.get_colored_name(),
      ' 会说出的话',
    ]);
    await era.printAndWait('……不过仔细想想，却又是情理之中');
    await era.printAndWait([
      '最看重可能性的 ',
      tachyon.get_colored_name(),
      '，是绝对不可能会容许，为了一时的成绩而牺牲',
      tachyon.get_uma_sex_title(),
      '的可能性的',
    ]);
    await era.printAndWait('尤其对方还是拥有更宽广可能性的后辈');
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '啊……时间也不早了，速子前辈！我先回去了！',
    );
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', [
      '另外……天皇赏春，虽然茶座前辈很强，但我相信速子前辈一定会赢的！',
    ]);
    era.println();
    await era.printAndWait(['满怀憧憬的', tachyon.sex, '，眼神中闪烁着光芒']);
    era.drawLine();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 很强，这是理所当然的',
    ]);
    await era.printAndWait([
      '哪怕不加上 ',
      tachyon.get_colored_name(),
      ' 和自己的辅助，',
      coffee.get_colored_name(),
      ' 都很强',
    ]);
    await era.printAndWait([
      '正常竞争的情况 ',
      tachyon.get_colored_name(),
      ' 都必须经过一番苦战',
    ]);
    await era.printAndWait('除此之外……');
    if (attr_names.findIndex((e) => era.get(`base:32:${e}`) < 1200) === -1) {
      await era.printAndWait([
        '虽然能力上足够，但在比赛经验上，以及几个月没踏上赛场的 ',
        tachyon.get_colored_name(),
        ' 绝对不如 ',
        coffee.get_colored_name(),
      ]);
    } else {
      await era.printAndWait([
        '能力上，现在的 ',
        tachyon.get_colored_name(),
        ' 甚至不如皋月和德比时的',
        tachyon.sex,
      ]);
    }
    await era.printAndWait('哪怕尽力想要恢复，能力却还是有限');
    era.println();
    await era.printAndWait([
      '更何况，',
      tachyon.get_colored_name(),
      ' 参赛的目的……不是为了赢下比赛',
    ]);
    await era.printAndWait([
      '只是为了让 ',
      coffee.get_colored_name(),
      ' 能够登上更高的顶点',
    ]);
    await era.printAndWait('可以说，不是输赢都不重要，而是……不能赢，不希望赢');
    await era.printAndWait([
      '要是赢了就代表 ',
      tachyon.get_colored_name(),
      ' 的梦想，最后的希望 ',
      coffee.get_colored_name(),
      ' 也败给 ',
      tachyon.get_colored_name(),
      ' 的极限了',
    ]);
    await era.printAndWait('所以……');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait('所以，很难回答吧');
    await era.printAndWait('能对信赖自己的后辈说出这种话吗？');
    await era.printAndWait(['说，天皇赏春一定赢不下来']);
    await era.printAndWait(
      '对着眼神中的憧憬由于忽然冻结的气氛渐渐转为困惑的后辈，真的说得出口吗？',
    );
    era.println();
    await era.printAndWait([
      '理论上这个时候应该站出来帮 ',
      tachyon.get_colored_name(),
      ' 解围的 ',
      me.get_colored_name(),
      '，不知为何却钉在原地无法动弹，无法开口',
    ]);
    await era.printAndWait([
      '或许是因为 ',
      me.get_colored_name(),
      ' 也在等待一个答案',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '，真的不在乎胜负吗？',
    ]);
    await era.printAndWait('真的甘愿拱手让出胜利吗？');
    await era.printAndWait('有办法在自己重视的可能性面前说出放弃吗？');
    era.println();
    await era.printAndWait('不知道过去了多久');
    await era.printAndWait([
      '在其他自主训练的',
      tachyon.get_uma_sex_title(),
      '们都已回去，沉默已经变成夜的常态',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      t_call_c,
      ' ',
      tachyon.sex,
      '，真的是个很强的对手',
    ]);
    era.println();
    await era.printAndWait('……也是');
    await era.printAndWait('这才是理所当然的');
    era.println();
    await era.printAndWait([
      '说到底，万一 ',
      tachyon.get_colored_name(),
      ' 真的认真想拿下这场胜负，那么最头疼的人应该是自己才对',
    ]);
    await era.printAndWait([
      '说到底最初会答应这种闹剧般的提议，不就是因为这是对 ',
      coffee.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 双赢的方案',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 获得荣光，',
      tachyon.get_colored_name(),
      ' 获得',
      tachyon.sex,
      '想要的实验结果',
    ]);
    await era.printAndWait([
      '万一 ',
      tachyon.get_colored_name(),
      ' 现在改卜，那么将陷于两难中的，就变成 ',
      me.get_colored_name(),
      ' 了',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '但是……我会赢。不管 ',
      t_call_c,
      ' ',
      tachyon.sex,
      '多强都一样，赢的会是我',
    ]);
    era.println();
    await era.printAndWait('！');
    await era.printAndWait('居然……是回马枪吗');
    await era.printAndWait('这下，可不妙了啊……');
    await era.printAndWait([
      '哪怕只是敷衍后辈的话，这样的回答都一定说明了 ',
      tachyon.get_colored_name(),
      ' 的心已经发生动摇了',
    ]);
    await era.printAndWait('更何况，如果只是敷衍，那前面又何必沉默那么久');
    await era.printAndWait('这样的话……自己该怎么办才好');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 的 ',
      sys_get_callname(25, 0),
      '，',
      tachyon.get_colored_name(),
      ' 的 ',
      callname,
    ]);
    await era.printAndWait('到底该怎么选择？');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '是！我那天绝对会去给速子前辈加油的！',
    );
    era.println();
    await era.printAndWait([
      '欢快的脚步声离开，留下 ',
      me.get_couple_title(),
      ' 两人继续在寂静的训练场上，星空作伴',
    ]);
    era.println();
    await era.printAndWait([
      '要是选择 ',
      tachyon.get_colored_name(),
      ' 的话，当初选择了Plan B的自己又算什么？',
    ]);
    if (era.get('love:25') >= 50) {
      await era.printAndWait([
        '要是还继续帮助 ',
        tachyon.get_colored_name(),
        ' 的话，对得起自己竭尽全力支持的那名',
        tachyon.get_teen_sex_title(),
        '吗？对得起',
        tachyon.sex,
        '泡的咖啡吗？',
      ]);
    }
    era.println();
    await era.printAndWait([
      '所以，应该要帮助 ',
      coffee.get_colored_name(),
      ' 吧',
    ]);
    await era.printAndWait([
      '所以，应该和 ',
      tachyon.get_colored_name(),
      ' 确认吧，确认',
      tachyon.sex,
      '说的不过是应付后辈用的场面话而已',
    ]);
    await era.printAndWait('所以……这种情况下，内心是不该感到喜悦的吧？');
    era.println();
    await era.printAndWait('为什么，此刻内心会如此喜悦');
    await era.printAndWait('难道说，自己当初真心想选择的，其实是Plan A吗？');
    await era.printAndWait([
      '难道说，自己帮助 ',
      coffee.get_colored_name(),
      '，是违背本心的行为',
    ]);
    await era.printAndWait('……不，只有这个，自己可以断言绝非如此');
    await era.printAndWait(
      '那为什么……明明应该是无比让人纠结的事，自己的心却怎么也无法平缓心跳',
    );
    await era.printAndWait([
      '不由自主的，',
      me.get_colored_name(),
      ' 开口问道',
    ]);
    era.printButton('「速子……刚刚说的，不是认真的吧？」', 1);
    era.printButton('「速子……刚刚说的，当然是开玩笑的吧？」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '当然了，计较输赢那是小孩子的权利……我们需要的，只有实验的数据，仅此而已',
    );
    await era.printAndWait('话语会骗人');
    await era.printAndWait('声音会骗人');
    await era.printAndWait('自诩永远理性的人，会为了自己的利益骗人');
    await era.printAndWait('但……感动不会');
    era.println();
    await era.printAndWait([
      '这句话有几成真几成假，',
      me.get_colored_name(),
      ' 不得而知',
    ]);
    await era.printAndWait([
      '但……',
      tachyon.sex,
      '目光中，几个月前几乎消失的光芒',
    ]);
    await era.printAndWait([
      '令 ',
      me.get_colored_name(),
      ' 灼目，陷入感动却已经熄灭的光芒',
    ]);
    await era.printAndWait('在今夜，又亮起了微弱的火光');
    flags.wait_flag = get_attr_and_print_in_event(32, undefined, 10);
  };

  handlers[95 + 18] = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
  ) => {
    edu_marks.tenn_spr = 0;
    await print_event_name('重新绽放的光子', tachyon);
    await era.printAndWait('不能再这样下去了');
    await era.printAndWait([
      '在 ',
      tachyon.get_colored_name(),
      ' 不知道第几次回避与 ',
      me.get_colored_name(),
      ' 的对话后，',
      me.get_colored_name(),
      ' 下定了决心',
    ]);
    await era.printAndWait('虽然训练都有来，也都正常的做着实验');
    await era.printAndWait([
      '但只要一停下来，想与',
      tachyon.sex,
      '谈论天春时的事情就会马上逃离现场',
    ]);
    await era.printAndWait('无论何时何地，甚至哪怕是实验中也是');
    era.println();
    await era.printAndWait('这样下去不行');
    await era.printAndWait([
      '看着',
      tachyon.sex,
      '的表情，一天比一天衰败，甚至畏缩',
    ]);
    await era.printAndWait([tachyon.get_colored_name(), ' 不应该是这样']);
    await era.printAndWait([tachyon.get_colored_name(), ' 不可以是这样']);
    era.println();
    await era.printAndWait('明明好不容易寻回了眼中的光');
    await era.printAndWait('却因为这种事情熄灭什么的，绝对不行');
    await era.printAndWait('逃避的原因，大概也能理解');
    if (relation <= 75) {
      await era.printAndWait('虽然还有一部分不得而知');
    }
    await era.printAndWait('因此……');
    era.printButton(`必须要对${tachyon.sex}说清楚才行`, 1);
    await era.input();
    era.drawLine();
    const t_call_c = sys_get_colored_callname(32, 25);
    await tachyon.print_and_wait('……已经逃避了几周了');
    await tachyon.print_and_wait(['自天春结束以来，一直在躲着', me.sex]);
    await tachyon.print_and_wait('躲着那个，为了我牺牲一切的人');
    await tachyon.print_and_wait([
      '理性而言，继续负责一名不想跑步，没有未来的',
      tachyon.get_uma_sex_title(),
      '，这是毫无意义，浪费名额资源及时间的行为',
    ]);
    await tachyon.print_and_wait([
      '感性而言，是将',
      me.sex,
      '的梦想，将',
      me.sex,
      '所着迷的跑法毁掉，于此之上还要求',
      me.sex,
      '配合什么荒谬的Plan B，牺牲梦想去配合',
      me.sex,
      '人',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '即便如此，',
      me.sex,
      '还是义无反顾的跟了上来',
    ]);
    await tachyon.print_and_wait('为了我的研究，自愿当实验品');
    await tachyon.print_and_wait([
      '为了我的任性，带着 ',
      t_call_c,
      ' 一起被卷入其中',
    ]);
    await tachyon.print_and_wait([
      '因此作为交换，想让',
      me.sex,
      '和 ',
      t_call_c,
      ' 获得声誉，作为微不足道的补偿',
    ]);
    await tachyon.print_and_wait('但是……');
    era.println();
    await tachyon.say_and_wait('……嗯？');
    era.println();
    await tachyon.print_and_wait([
      '今天也一样，刻意避开了与',
      me.sex,
      '的对话，躲避除去必要情况以外的交流，回到实验室前',
    ]);
    await tachyon.print_and_wait('但……已经有人在实验室外等待着自己了');
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await tachyon.print_and_wait('不要');
    await tachyon.print_and_wait('不行');
    await tachyon.print_and_wait('不是现在');
    era.println();
    await tachyon.print_and_wait('明明很简单');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 只要在宝冢纪念输掉就好',
    ]);
    await tachyon.print_and_wait(['只要在宝冢纪念让出胜利，就可以重新……']);
    era.println();
    await tachyon.print_and_wait('不，已经没有办法了');
    await tachyon.print_and_wait('奔跑的本能无法抑制');
    await tachyon.print_and_wait('这只不过是自欺欺人，逃避现实的做法');
    era.println();
    await tachyon.print_and_wait('眼前的身影站在走道的正中央');
    await tachyon.print_and_wait('全身颤抖……也是，肯定会愤怒的吧');
    await tachyon.print_and_wait('犯了错之后还不停逃避的蠢货');
    await tachyon.print_and_wait('算了，已经做好觉悟了');
    await tachyon.print_and_wait('将一切的怒气……发泄出来吧');
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.drawLine();
    const coffee = get_chara_talk(25);
    await era.printAndWait('首先，该说什么呢？');
    await era.printAndWait([
      '应该先说出口吧，告诉',
      tachyon.sex,
      '，自己并没有责怪的意思',
    ]);
    await era.printAndWait([
      '说到底，因为对手放水才获得的胜利，那种胜利 ',
      coffee.get_colored_name(),
      ' ',
      tachyon.sex,
      '是绝对不会高兴的',
    ]);
    await era.printAndWait([
      '帮助 ',
      coffee.get_colored_name(),
      ' 抵达更高的巅峰，这一目的并没有被毁坏',
    ]);
    await era.printAndWait([
      '不如说，前面觉得可以把 ',
      coffee.get_colored_name(),
      ' 完全握在手中揉捏的想法，那也太过傲慢了',
    ]);
    await era.printAndWait(
      '接下来，继续拼尽全力的参加比赛，互相砥砺，才是Plan B最好的执行方式',
    );
    await era.printAndWait('所以……');
    await era.printAndWait('没错，就这么说吧');
    era.printButton('「速子……」', 1);
    era.printButton('「天皇赏跑的，真的太厉害了！」', 2);
    await era.input();
    await tachyon.say_and_wait('……欸？');
    era.println();
    await era.printAndWait('没错');
    await era.printAndWait('比起那些理论道理，还是这样的话语更适合自己');
    await era.printAndWait([
      '痴迷于 ',
      tachyon.get_colored_name(),
      ' 的跑法，并且愿意为其牺牲一切的豚鼠',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 不知为何，忽然直直地盯着自己的双眼',
    ]);
    await era.printAndWait('如同第一次见面时一样，也和皋月赏、德比前一样');
    await era.printAndWait([
      '到底自己的眼睛是什么颜色的，能让',
      tachyon.sex,
      '每次都发出那样的感叹呢',
    ]);
    era.println();
    await tachyon.say_and_wait('……可是，这样的话，Plan B……');
    era.printButton(
      `「必须要速子放水才能胜利的茶座，真的有可能超越${tachyon.get_uma_sex_title()}的极限吗？」`,
      1,
    );
    await era.input();
    await tachyon.say_and_wait('……');
    era.println();
    await era.printAndWait('是因为对梦想的盲目吗？');
    await era.printAndWait(['还是对 ', coffee.get_colored_name(), ' 的执着']);
    await era.printAndWait([
      '导致 ',
      tachyon.get_colored_name(),
      ' 似乎遗忘了最重要的事',
    ]);
    if (love >= 75) {
      await era.printAndWait([
        '这样看来婚后或许 ',
        tachyon.get_colored_name(),
        ' 会是意外溺爱孩子的性格也说不定',
      ]);
    }
    era.println();
    await tachyon.say_and_wait([
      '……这是，',
      tachyon.get_colored_name(),
      ' 的训练员的说法吧？那 ',
      coffee.get_colored_name(),
      ' 的训练员怎么办',
    ]);
    if (relation <= 75) {
      era.println();
      await era.printAndWait([
        '……一时的震惊让 ',
        me.get_colored_name(),
        ' 忘记言语',
      ]);
      await era.printAndWait([
        '无法明白的 ',
        tachyon.get_colored_name(),
        ' 逃离自己的原因',
      ]);
      await era.printAndWait([
        '如果是对 ',
        coffee.get_colored_name(),
        ' 抱有罪恶感也就算了，为什么要躲避自己',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '……在为自己担心……？',
      ]);
    }
    await era.printAndWait([
      '那么，',
      coffee.get_colored_name(),
      ' 的训练员，应该对此做出回应吧',
    ]);
    era.printButton('「很不甘心……没能带着茶座取得胜利」', 1);
    era.printButton('「所以，宝冢茶座绝对会变得比现在更强来超越速子！」', 2);
    await era.input();
    await tachyon.say_and_wait('……不甘心……吗？');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 咀嚼着话语，但是，要说的还没说完',
    ]);
    era.printButton('「但是，身为速子的训练员！」', 1);
    era.printButton('「绝不会让速子输给茶座的，宝冢一定也是速子的胜利！」', 2);
    await era.input();
    await era.printAndWait('没有错');
    await era.printAndWait([
      '这就是，',
      tachyon.get_colored_name(),
      ' 的训练员『以及』',
      coffee.get_colored_name(),
      ' 的训练员做出的回答',
    ]);
    await era.printAndWait('理由？天春的时候不就说过了吗？');
    await era.printAndWait(['因为自己，深深的爱着', tachyon.sex, '们的跑法']);
    if (love >= 75 && era.get('love:25') >= 75) {
      await era.printAndWait(['因为自己，深深的爱着', tachyon.sex, '们']);
    }
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await era.printAndWait('低声的呼唤');
    await era.printAndWait('然后是令人紧张的沉默');
    await era.printAndWait('在不知道多久的沉默过后……');
    era.println();
    await tachyon.say_and_wait(['……', callname, '，你就这么喜欢我的跑法吗？']);
    era.println();
    await era.printAndWait('答案自不用说，脸上的表情和眼神已经说明了一切');
    era.println();
    await tachyon.say_and_wait('…………那么，有兴趣，陪我多走几段路吗？');
    await tachyon.say_and_wait('陪我，来趟法国的浪漫之旅吧');
    era.println();
    await era.printAndWait('……欸？');
    flags.wait_flag = get_attr_and_print_in_event(32, undefined, 10);
    flags.wait_flag = sys_change_motivation(32, 1) || flags.wait_flag;
    sys_reg_race(32).curr = {
      race: race_enum.takz_kin,
      week: era.get('flag:当前回合数') + 6,
    };
  };

  handlers[95 + 32] = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name('换位实验', tachyon);
    await era.printAndWait('于是，愉快的夏日集训时间也过去了');
    await era.printAndWait([
      me.get_couple_title(),
      ' 准备跟着学园的巴士回到学校',
    ]);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '速……速子前辈！请，请等一下！',
    );
    era.println();
    await era.printAndWait('嗯？');
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 同时疑惑的回头，看向了髮间有着巨大流星的小',
      tachyon.get_uma_sex_title(),
    ]);
    era.println();
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', [
      '今年秋天……我会出赛 ',
      race_infos[race_enum.kobe_hai].get_colored_name(),
      '……速子前辈……到时候可以来为我加油吗！',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '加油……吗？',
    );
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '是的！希望速子前辈能看看我的跑步的模样！',
    );
    era.println();
    await era.printAndWait([
      race_infos[race_enum.kobe_hai].get_colored_name(),
      '……是九月下旬的比赛，如果只是观赛的话，也不至于影响到什么重要的事',
    ]);
    await era.printAndWait([
      '所以一切的问题就是，',
      tachyon.get_colored_name(),
      ' 愿意与否了',
    ]);
    era.println();
    await tachyon.say_and_wait('嗯……可以啊，那个时候，目前还没有其他安排');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '真的吗！太好了！我会努力赢下来的！',
    );
    era.println();
    await era.printAndWait([
      '小',
      tachyon.get_uma_sex_title(),
      '兴奋的站起身来，完全看不出像是刚被强行灌完药的模样一溜烟的跑走了',
    ]);
    era.println();
    await tachyon.say_and_wait('……真是耀眼啊，这些孩子们的可能性');
    era.printButton('「怎么一副好像老人家的口吻」', 1);
    era.printButton('「但是在我眼中，速子才是最闪耀的！」', 2);
    await era.input();
    if (love >= 75) {
      await tachyon.say_and_wait(
        '是吗？那么……你要一直看着我才行啊，因为我的可能性，已经离不开你了♡',
      );
      await era.printAndWait([
        '夏季集训结束，接下来是 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '！……不过在这之前，是 ',
        race_infos[race_enum.kobe_hai].get_colored_name(),
        ' 的观战！',
      ]);
    } else if (love >= 50) {
      await tachyon.say_and_wait('那么……就好好看着吧，我的可能性能抵达的地方');
    } else if (relation >= 225) {
      await tachyon.say_and_wait(
        '呵呵，这是当然，那些孩子要超越我还早的很呢！',
      );
    } else if (relation >= 0) {
      await tachyon.say_and_wait('我说你……不说这种肉麻的话是会死吗？');
    } else {
      await tachyon.say_and_wait('被你这种人期待……真是令人讨厌啊');
    }
  };

  handlers[95 + 35] = async (tachyon, me, callname, flags) => {
    await print_event_name('因素·旁观者设置', tachyon);
    await tachyon.say_and_wait(
      '不过仔细想想……这大概是我第一次在观众席看比赛吧',
    );
    era.println();
    await era.printAndWait(['今天是神户新闻杯']);
    await era.printAndWait([
      '是 ',
      tachyon.get_colored_name(),
      ' 受后辈之邀来观赛的日子',
    ]);
    era.printButton('「毕竟主要都是自己上场跑呢」', 1);
    era.printButton('「毕竟主要都是看比赛录像呢」', 2);
    await era.input();
    await era.printAndWait([
      '对 ',
      tachyon.get_colored_name(),
      ' 而言，除了自己的比赛外，应该就没有需要到赛场的情况了',
    ]);
    await era.printAndWait(
      '比赛数据分析什么的，比起在观众席上看，看比赛结束后的录象能得到的数据还更多一些',
    );
    await era.printAndWait(
      '因此今天确实是第一次，或者说第一次以观众的身份而非研究角度来观看比赛',
    );
    era.println();
    await tachyon.say_and_wait('……实际在现场的感觉……果然很吵啊');
    era.println();
    await say_by_passer_by_and_wait('粉丝A', '加油！');
    await say_by_passer_by_and_wait('粉丝B', '一定要赢啊！');
    await say_by_passer_by_and_wait('粉丝C', [
      '神户新闻杯虽然说是菊花赏的先行赛，但实际上2400米和阪神赛场举办这两点对菊花赏而言都不算是对菊花赏检验的效果……',
    ]);
    await say_by_passer_by_and_wait('粉丝C', [
      '……因此其实很难说在神户新闻杯胜出的',
      tachyon.get_uma_sex_title(),
      '就一定能赢下菊花赏',
    ]);
    await say_by_passer_by_and_wait('粉丝D', '怎么忽然说这个');
    era.println();
    await tachyon.say_and_wait('这就是平常我比赛前观众席上的场景吗？');
    era.printButton('「差不多吧，甚至更热闹一点」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '……也是，毕竟是G1。嘛，虽然能理解他们的心情，不过这个时候加油也是没用的吧',
    );
    era.printButton('「有没有用……不是这样算的」', 1);
    era.printButton('「看下去就知道了」', 2);
    await era.input();
    await tachyon.say_and_wait('看下去什么的……哦？开始入闸了');
    era.drawLine();
    await tachyon.print_and_wait('那孩子进入闸门了');
    await tachyon.print_and_wait([
      '但说实话，这场比赛对 ',
      tachyon.get_colored_name(),
      ' 而言，其实需要关注的点不多',
    ]);
    await tachyon.print_and_wait('具有可能性的那孩子，必然是重中之重');
    await tachyon.print_and_wait(
      '……但除此之外，这场比赛不过是经典级限定的G2赛事',
    );
    era.println();
    await tachyon.say_and_wait('可以说，没有输掉的可能性吧');
    era.println();
    await tachyon.print_and_wait('赛前人气也是理所当然的第一人气');
    await tachyon.print_and_wait('天时地利人和，不可能输');
    await tachyon.print_and_wait('赛前分析胜率高达97.46%');
    era.println();
    await tachyon.print_and_wait('然而……');
    era.println();
    await say_by_passer_by_and_wait('观众A', '不要输！');
    await say_by_passer_by_and_wait('观众B', [
      '加油！还有机会！从外侧超',
      tachyon.sex,
      '啊！',
    ]);
    await say_by_passer_by_and_wait('观众C', '不要放弃！一定可以追上！');
    era.println();
    await tachyon.print_and_wait([
      '为什么还在为后面的',
      tachyon.get_uma_sex_title(),
      '加油',
    ]);
    await tachyon.print_and_wait('明显，已经追不上了不是吗');
    await tachyon.print_and_wait('……不明白');
    await tachyon.print_and_wait([
      '不，能够理解，虽然徒劳但还是想要为自己支持的',
      tachyon.get_uma_sex_title(),
      '发出喊声，这种事情自己还是能够理解的',
    ]);
    await tachyon.print_and_wait(
      '虽然说是疯狂科学家，但自己也不是什么不懂人性的机器人',
    );
    await tachyon.print_and_wait('但，为什么自己……');
    era.println();
    await say_by_passer_by_and_wait('解说', [
      '追上来了！现在后面的',
      tachyon.get_uma_sex_title(),
      '追上来了！',
    ]);
    era.println();
    await tachyon.say_and_wait('！');
    await tachyon.say_and_wait('……加油');
    await tachyon.say_and_wait('加油！不要输啊！');

    era.printButton('「！」', 1);
    await era.input();
    await say_by_passer_by_and_wait(
      '解说',
      '冲—————线！第一名的是一号一闸—————',
    );
    era.drawLine();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的应援声，被淹没在全场的喝采及加油声',
    ]);
    await era.printAndWait([
      '全场能够听见的恐怕只有在',
      tachyon.sex,
      '身边的 ',
      me.get_colored_name(),
      '，以及……',
    ]);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '前辈！我听见你的加油声了！谢谢前辈的应援……那个时候，感觉全身忽然涌起了力量！',
    );
    era.println();
    await tachyon.say_and_wait('……呵呵，跑的很不错，未来还要继续努力下去');
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', '是！');
    era.println();
    await era.printAndWait([
      '神户新闻杯结束，',
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 离开了赛场',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……虽然理论上已经确定，但实际以场外人……或者，以当事人的身份来看，还是第一次',
    );
    await tachyon.say_and_wait(
      '无论是其他孩子，还是那孩子，最后都……真的超越极限了',
    );
    era.println();
    await era.printAndWait([
      '今天的比赛上，好几名',
      tachyon.get_uma_sex_title(),
      '都是',
    ]);
    await era.printAndWait('超越了极限');
    await era.printAndWait([
      '超越了在赛前测出的，',
      tachyon.sex,
      '们的理论最大速度',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '，你还记得之前粉丝感谢祭时的事吗？',
    ]);

    era.printButton('「速子是想着获得回报而为那孩子应援的吗？」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), ' 没有回答，只是反问了句']);
    era.println();
    await tachyon.say_and_wait('……呵呵');
    await tachyon.say_and_wait('不是因为想被人听见，想产生互动的行为……');
    await tachyon.say_and_wait(
      '而是纯粹，将自己的心情、情绪发泄出来而高喊出声',
    );
    await tachyon.say_and_wait('换句话说，就是『感动』');
    await tachyon.say_and_wait([
      '观众被',
      tachyon.get_uma_sex_title(),
      '感动而发出欢呼，',
      tachyon.get_uma_sex_title(),
      '也被观众感动而超越自己的极限……',
    ]);
    await tachyon.say_and_wait(
      '明明是好像左脚踩右脚，甚至永动机一样的不合理的概念，却实际的发生了',
    );
    await tachyon.say_and_wait(
      '真的，果然这些都是在实验室里完全体验不到的啊，哈哈哈哈！',
    );

    era.printButton('「这样，算是『喜欢』上比赛了吗」', 1);
    await era.input();
    await tachyon.say_and_wait('……嗯，我也不知道');
    era.println();
    await era.printAndWait('……也是');
    await era.printAndWait('毕竟说到底依然不是自己登上赛场去跑的');
    await era.printAndWait('要说喜欢与不喜欢，或许还是难以说明吧');
    await era.printAndWait([
      '但无论如何，随着神户新闻杯的结束，有马纪念也已经快要进入眼前了',
    ]);
    await era.printAndWait('研究的尽头（Deadline），就在眼前了');
    flags.wait_flag = get_attr_and_print_in_event(32, undefined, 10);
  };

  handlers[95 + 36] = async (tachyon, me, callname, flags) => {
    await print_event_name('决心', tachyon);
    era.println();
    await tachyon.say_and_wait('哈啊……哈啊……');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 在法国的训练场上奔跑着',
    ]);
    await tachyon.print_and_wait(['这几天是', callname, '回日本的日子']);
    era.println();
    await tachyon.say_and_wait(['接着就是，世界的最高峰，凯旋门赏……']);
    era.println();
    await tachyon.print_and_wait(['现在', me.sex, '应该还在疑惑吧']);
    await tachyon.print_and_wait(['到底为什么要选择凯旋门赏']);
    await tachyon.print_and_wait([
      '抵达极限的彼方，这是 ',
      tachyon.get_colored_name(),
      ' 的梦想',
    ]);
    await tachyon.print_and_wait([
      tachyon.sex,
      '也一直以为，自己能够为了这个目标赌上一切，只要能够抵达，无论那个人是不是自己都无所谓',
    ]);
    await tachyon.print_and_wait([
      '……但是，',
      tachyon.sex,
      '其实并没有自己想的那么无所谓',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '本质上，',
      tachyon.sex,
      '还是想要奔跑的',
      tachyon.get_uma_sex_title(),
    ]);
    await tachyon.print_and_wait([
      '但是，',
      tachyon.sex,
      '也不想放弃超越极限的梦想',
    ]);
    await tachyon.print_and_wait(
      '那么，该怎么办呢，该怎么做才有两全其美的办法',
    );
    await tachyon.print_and_wait([
      '很简单，只要，',
      tachyon.get_colored_name(),
      ' 成为「极限」就好',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '所以才选择 ',
      race_infos[race_enum.prix_lat].get_colored_name(),
    ]);
    await tachyon.print_and_wait('选择世界的最高峰，最能代表极限的赛事');
    await tachyon.print_and_wait([
      '在这个舞台上，以自身来定义，',
      tachyon.get_uma_sex_title(),
      '的极限',
    ]);
    era.println();
    await tachyon.say_and_wait('……呵呵');
    era.println();
    await tachyon.print_and_wait('在想到超越众人，化身极限的时候');
    await tachyon.print_and_wait('身体忍不住的发热');
    era.println();
    await tachyon.say_and_wait('果然，还是渴望奔跑的啊……我');
    era.println();
    await tachyon.print_and_wait('决心已经燃起');
    await tachyon.print_and_wait('那么便抛开一切，专注于眼前的胜利吧');
    flags.wait_flag = get_attr_and_print_in_event(32, new Array(5).fill(5), 0);
  };
};
