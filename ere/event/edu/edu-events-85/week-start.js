const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const say_by_mother = require('#/event/edu/edu-events-85/say-by-mother');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} handlers */
module.exports = (handlers) => {
  handlers[35] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('华丽的最高杰作', ruby);
    let relation_change;
    await era.printAndWait([
      '在反复训练的某一天，拜读了【华丽一族】书信的 ',
      me.get_colored_name(),
      '，正准备和 ',
      ruby.get_colored_name(),
      ' 一起造访第一家的老宅。',
    ]);
    await era.printAndWait([
      '为了和',
      ruby.sex,
      '建立信赖关系，首先应该了解',
      ruby.sex,
      '所重视的东西。',
    ]);
    await era.printAndWait(['然而在 ', me.get_couple_title(), ' 动身前……']);
    await ruby.say_and_wait('不好意思，临时更改一下行程。');
    await era.printAndWait([
      '在没有被告知事态的情况下，',
      me.get_colored_name(),
      ' 被带到的是某酒店的房间。',
      me.get_colored_name(),
      ' 换上了房间里准备好的西装。',
    ]);
    await ruby.say_and_wait('可以准备再华丽一点的领带吗？');
    await say_by_passer_by('管家', [
      '知道了，',
      ruby.sex_code === 1 ? '少爷' : '小姐',
      '。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 上下打量了 ',
      me.get_colored_name(),
      ' 一番，就闭着眼睛转过脸去。',
    ]);
    era.printButton(`「${m_call_r}？」`, 1);
    await era.input();
    await ruby.say_and_wait('失礼，我说晚了。');
    await ruby.say_and_wait('母亲大人，听说我的训练员要来老家，特意赶过来了。');
    await me.say_and_wait('哈啊？', true);
    era.drawLine();
    await era.printAndWait([
      '在赛',
      ruby.uma_sex_title,
      '界无人不知，留下了一场场华丽之战的',
      ruby.uma_sex_title,
      '……',
    ]);
    await say_by_mother([
      '初次见面，',
      r_call_m,
      '。我是第一红宝石的',
      ruby.sex_code === 1 ? '父亲' : '母亲',
      '。',
    ]);
    await era.printAndWait([
      '眼前的这个',
      ruby.uma_sex_title,
      '，无论是堪称恐怖的美丽感，还是',
      ruby.sex,
      '的容貌、气场，样子简直就像——',
    ]);
    era.printButton('（变大了的第一红宝石）', 1);
    await era.input();
    await say_by_mother(['在机场听说 ', r_call_m, ' 要来，突然之间很抱歉。']);

    era.printButton('「没有那种事」', 1);
    await era.input();
    await say_by_mother([
      '这段时间，',
      ruby.sex_code === 1 ? '儿子' : '女儿',
      ' 都承蒙你的关照了。',
    ]);
    era.printButton(`「我才是，受了${ruby.sex}很多照顾。」`, 1);
    await era.input();
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '父亲' : '母亲',
      '大人，这之后也有安排吧？我和您一起。',
    ]);
    await say_by_mother('嗯～有吗……');
    await me.say_and_wait('！', true);
    await era.printAndWait([
      me.get_colored_name(),
      ' 被 ',
      ruby.get_colored_name(),
      ' 的母亲凝视着。那是其作为华丽一族的极致，想要看清 ',
      me.get_colored_name(),
      ' 这个人的眼神。',
    ]);
    await era.printAndWait('其中蕴含着足以穿透人心的魄力。');
    await era.printAndWait([
      '这时，',
      me.get_colored_name(),
      ' 的脑中想起了测试时的那一天。',
    ]);
    await ruby.used_to_say_and_wait(
      '没错。请不要忘记这份身姿。若您有盯上的目标存在，那就必须做出相称的行为举止。',
    );
    await ruby.say_and_wait('唯有如此，有朝一日才能成为自己想成为的模样', true);
    await era.printAndWait('还有，那一抹微笑。');
    await era.printAndWait([
      '既然是',
      ruby.sex,
      '的训练员，那么和',
      ruby.sex,
      '并肩而立时，当然要挺胸抬头。',
    ]);
    await say_by_mother('————');
    await say_by_mother('你知道我的跑步吧。');
    era.printButton('点头', 1);
    await era.input();
    await say_by_mother('这样啊。');
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '父亲' : '母亲',
      '大人，还有事……',
    ]);
    await say_by_mother('不，已经结束了。');
    await say_by_mother([r_call_m, '，之后就任凭你判断了。']);
    await say_by_mother(['请你不要忘记，', ruby.sex, '是怎样的孩子。']);
    await ruby.say_and_wait('————!', true);
    await say_by_mother('万分抱歉，我要去车站了，还有下一个安排。');
    await say_by_mother('我们家的历史，请在那些书里……和露比的口中慢慢了解。');
    await say_by_mother([
      r_call_m,
      '，我们家的小',
      ruby.sex_code === 1 ? '伙子' : '姑娘',
      '就烦请你费心了。',
    ]);
    await era.printAndWait([
      '送别 ',
      ruby.get_colored_name(),
      ' 的',
      ruby.sex_code === 1 ? '父亲' : '母亲',
      '，',
      me.get_colored_name(),
      ' 看了很多藏书后回到了特雷森学院。',
    ]);
    era.printButton(
      `「你的${ruby.sex_code === 1 ? '父亲' : '母亲'}，很厉害呢。」`,
      1,
    );
    era.printButton(
      `「${m_call_r} 的${ruby.sex_code === 1 ? '爸爸' : '妈妈'}，比 ${m_call_r} 还要厉害呢。」`,
      2,
    );
    if ((await era.input()) === 1) {
      relation_change = 3;
    } else {
      relation_change = 5;
    }
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '父亲' : '母亲',
      '大人是华丽一族的『结晶』，如今也是一族台面上的象征。',
    ]);
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '父亲' : '母亲',
      ruby.sex,
      '，对你……',
    ]);
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('不，没什么。');
    await ruby.say_and_wait([
      '你刚才问：『在你眼里',
      ruby.sex_code === 1 ? '父亲' : '母亲',
      '是怎样一位',
      ruby.uma_sex_title,
      '』吧。',
    ]);
    await ruby.say_and_wait('答案是，最为华丽的。');
    await ruby.say_and_wait('看了现役时代的比赛录像的话，任谁都会这么想的。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的眼睛一瞬间放出了光芒。',
    ]);
    await era.printAndWait([
      '说起来，',
      ruby.sex,
      '一知道要和母亲见面，就马上安排 ',
      me.get_colored_name(),
      ' 换了服装。',
    ]);
    era.printButton(
      `「你很尊敬你${ruby.sex_code === 1 ? '父亲' : '母亲'}呢。」`,
      1,
    );
    await era.input();
    await ruby.say_and_wait([
      '是的，作为我前进路上最专业、最辉煌的典范，我很尊敬',
      ruby.sex,
      '。',
    ]);
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '父亲' : '母亲',
      '伟大的轨迹……是我为了今后一族的繁荣必须效法的。',
    ]);
    await era.printAndWait([
      '为什么要选择三重宝冠路线……',
      me.get_colored_name(),
      ' 感受到了 ',
      ruby.get_colored_name(),
      ' 超越家族历史的绝不单纯的意图。',
    ]);
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      85,
      [0, 0, 5],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(85, 0, relation_change) || flags.wait_flag;
  };

  handlers[47] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('因此、不能松懈', ruby);
    let relation_change = 0,
      love_change = 0;
    await era.printAndWait('训练场');
    await ruby.say_and_wait([r_call_m, '，重新开始吧。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 从 ',
      ruby.get_colored_name(),
      ' 那里得知，',
      ruby.sex,
      '的脚天生有问题。',
    ]);
    await era.printAndWait(
      '正确地讲是【脚的形状有问题，暂时对比赛没有障碍。】',
    );
    await era.printAndWait([
      '因此，起初并没有特意向 ',
      me.get_colored_name(),
      ' 报告。',
    ]);
    await era.printAndWait([
      '但是，在被 ',
      me.get_colored_name(),
      ' 问到的时候也没有隐瞒。',
    ]);
    await era.printAndWait([
      '这是跑步时负荷很大的部分，',
      me.get_colored_name(),
      ' 觉得不是那么简单就能解决的问题。',
    ]);
    era.printButton('「真的，不要紧吗？」', 1);
    await era.input();
    await ruby.say_and_wait('当然没有问题，而且父母……');
    await ruby.say_and_wait('父母、还有周围的大家，都给予了很多的帮助。');
    await era.printAndWait([
      '一瞬间，',
      ruby.get_colored_name(),
      ' 的表情变得相当……劳苦。',
    ]);
    era.printButton('「是天生的？」', 1);
    await era.input();
    await ruby.say_and_wait('是的，出生的时候就被医生宣告可能没法跑了。');
    await ruby.say_and_wait('但是，父母为了我，用尽所有手段献身面对问题。');
    era.printButton('「所以你才有这样的热望啊。」', 1);
    await era.input();
    await ruby.say_and_wait('不这样做不行的吧？');
    await ruby.say_and_wait([
      '——因为是作为『华丽一族』的赛',
      ruby.uma_sex_title,
      '出生而享受生命的。',
    ]);
    await ruby.say_and_wait(
      '其结果是，学会了优化用脚方式的姿势跑步，现在也改变了。',
    );
    await ruby.say_and_wait('医生也说，现在的身体可以承受激烈的比赛。');
    await ruby.say_and_wait('如果，万分之一……');
    era.printButton('「现在先集中精神训练。」', 1);
    era.printButton('「可以给我看看你的脚吗？」', 2);
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('嗯。在自己确信没有问题前，先锻炼身体。');
      await ruby.say_and_wait('要完成的使命已经决定了。');
      await ruby.say_and_wait('话有点说得太多了，我去跑道。');
      await era.printAndWait('训练顺利结束了。');
    } else {
      await ruby.say_and_wait('动机不纯——看起来也不是。');
      await ruby.say_and_wait('你知道在公共场合做这种事意味着什么吗？');
      era.printButton('蹲下身子。', 1);
      await era.input();
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('至少，去那边的椅子……');
      await era.printAndWait([
        me.get_colored_name(),
        ' 细细地检查了 ',
        ruby.get_colored_name(),
        ' 双脚的每一寸。',
      ]);
      await era.printAndWait([
        '鬼使神差的，',
        me.get_colored_name(),
        ' 拉起一处丝袜，「啪」的松手。',
      ]);
      await era.printAndWait([
        '又惊又羞的',
        ruby.sex_code === 1 ? '小少爷' : '大小姐',
        '咬着下唇瞪着 ',
        me.get_colored_name(),
        '，就在 ',
        me.get_colored_name(),
        ' 准备好挨骂的时候。',
      ]);
      await ruby.say_and_wait('帮我把鞋子穿好。');
      await era.printAndWait([
        '之后 ',
        me.get_couple_title(),
        ' 顺利地完成了训练。',
      ]);
      relation_change = 3;
      love_change = 1;
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(85, [5], 0, undefined, true);
    flags.wait_flag =
      sys_like_chara(85, 0, relation_change, true, love_change) ||
      flags.wait_flag;
  };

  handlers[47 + 19] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('只是凝视着前方', ruby);
    await era.printAndWait([
      '针对2400米的 ',
      race_infos[race_enum.yush_him].get_colored_name(),
      '，',
      ruby.get_colored_name(),
      ' 正在进行耐力训练。',
    ]);
    era.printButton('「感觉如何？」', 1);
    await era.input();
    await ruby.say_and_wait('没有问题。');
    era.printButton('「真的不要紧吗？」', 1);
    await era.input();
    await ruby.say_and_wait('嗯。');
    await ruby.say_and_wait('单纯的，体力不足。');
    await ruby.say_and_wait('希望您能多提出一些增强体力的训练方案。');
    await ruby.say_and_wait('那么，我再去跑一圈。');
    await me.say_and_wait('耐力不足吗……', true);
    await era.printAndWait('确实，也有那个原因。');
    await era.printAndWait([
      '但是，更像是有其他无可奈何的东西阻挡在',
      ruby.sex,
      '面前，那就是——',
    ]);
    era.printButton('跑法。', 1);
    era.printButton('适性。', 2);
    await era.input();
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 看来，「适性」本身没有好坏之分。',
    ]);
    await era.printAndWait('……只是，根据瞄准的方向不同，它会变成障壁。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的目标比赛有很多是中长距离，',
      ruby.sex,
      '踏上这条路，一定会面对很多阻碍。',
    ]);
    await era.printAndWait('这个阶段还说不准，只能先反复进行耐力训练。');
    await era.printAndWait('如果能做出成果，再以此为基础制定新的训练计划。');
    era.drawLine();
    await ruby.print_and_wait('转眼，时间来到了放学后。');
    await ruby.say_and_wait(
      '2400米，对我来说可能有点严酷。是在我适性外的。',
      true,
    );
    await ruby.say_and_wait(
      [r_call_m, ' 应该是这样推测的，我也感觉到了。'],
      true,
    );
    await ruby.say_and_wait('不甘……');
    await ruby.say_and_wait(
      [
        '一定要挑战 ',
        race_infos[race_enum.yush_him].get_colored_name(),
        '，取得母亲未能达成的胜利。',
      ],
      true,
    );
    await ruby.say_and_wait('一族的存在，就是这样一步步积累的。', true);
    await say_by_passer_by('管家', [
      ruby.sex_code === 1 ? '少爷' : '小姐',
      '，我来接你了。',
    ]);
    await ruby.say_and_wait('对不起，预定我要变更。');
    await ruby.say_and_wait('因为要自主练习，之后的事情就交给你了。');
    await say_by_passer_by(
      '管家',
      '我明白了。不用在意这边的事情，请集中精神训练。',
    );
    await ruby.say_and_wait('嗯。');
    await ruby.say_and_wait('必须前进。');
    flags.wait_flag = get_attr_and_print_in_event(85, [0, 5], 0);
  };

  handlers[47 + 29] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:85:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return false;
    }
    await print_event_name('夏季合宿（经典年）', ruby);
    await era.printAndWait([
      '在轻微的慢跑中，',
      ruby.get_colored_name(),
      ' 跌倒了。',
    ]);
    era.printButton('「没事吧！？」', 1);
    await era.input();
    await ruby.say_and_wait('只是被沙子绊倒了，没有问题。');
    era.printButton('「受伤了吗？」', 1);
    await era.input();
    await ruby.say_and_wait('没有的事。');
    await era.printAndWait('好像真的没有问题，但是……');
    await era.printAndWait([
      '从夏季集训开始起，',
      ruby.get_colored_name(),
      ' 每日每日紧逼着自己。',
    ]);
    await era.printAndWait([
      '只为了在之后的 ',
      race_infos[race_enum.shuk_sho].get_colored_name(),
      ' 上拿出成果。',
    ]);
    await era.printAndWait([
      '难得来了海边，于是 ',
      me.get_colored_name(),
      ' 想着……',
    ]);
    era.printButton('「抓凤蝶」（力量+10）', 1);
    era.printButton('「那么，锻炼耐久吧」（根性+10）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await ruby.say_and_wait('理解不能。');
      era.printButton('「是这里特有的种类哦，华丽的，和你很般配。」', 1);
      await era.input();
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('破茧成蝶，或许我并配不上它。');
      await era.printAndWait([
        '在 ',
        ruby.get_colored_name(),
        ' 抓凤蝶期间，小洋伞由 ',
        me.get_colored_name(),
        ' 代劳打着。',
      ]);
      await era.printAndWait([
        '阴影下对着凤蝶露出笑颜的',
        ruby.teen_sex_title,
        '，终于有了点这个年纪',
        ruby.child_sex_title,
        '该有的样子。',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        85,
        [0, 0, 10],
        0,
        undefined,
        true,
      );
      flags.wait_flag = sys_like_chara(85, 0, 5) || flags.wait_flag;
    } else {
      await ruby.say_and_wait([
        '是因为 ',
        race_infos[race_enum.yush_him].get_colored_name(),
        ' 上，我那不成气候的奔跑吧。',
      ]);
      await era.printAndWait([
        '果然，',
        ruby.get_colored_name(),
        ' 对于中距离的适性，远不如短英。',
      ]);
      await era.printAndWait(['速度即是优势，也是', ruby.sex, '最大的弱点。']);
      await era.printAndWait([
        me.get_colored_name(),
        ' 继续以锻炼耐力为中心，让 ',
        ruby.get_colored_name(),
        ' 进行了艰苦的练习。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(85, [0, 0, 0, 10], 0);
    }
  };

  handlers[95 + 29] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:85:位置') !== era.get('cflag:0:位置')
    ) {
      cb();
      return false;
    }
    const miracle = get_chara_talk(93);
    await print_event_name('夏季合宿（资深年）', ruby);
    await era.printAndWait([
      '夏季集训开始了。对跑比赛的',
      ruby.uma_sex_title,
      '来说是个非常重要的季节。',
    ]);
    await era.printAndWait([
      '为了不浪费宝贵的时间，',
      me.get_colored_name(),
      ' 已然做好了完全准备。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 设计了内容十分紧凑且负荷高的训练菜单，并且配合其强度做好冷却和按摩的准备。',
    ]);
    await era.printAndWait([
      '已经事先告知 ',
      ruby.get_colored_name(),
      ' 该做些什么，因此训练过程显得寡淡无味，但是——',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 看着十分显著的训练成果沾沾自喜。',
    ]);
    await era.printAndWait([
      '身为 ',
      ruby.get_colored_name(),
      ' 的训练员，能够把任务恰当地完成让 ',
      me.get_colored_name(),
      ' 倍感自豪。',
    ]);
    await ruby.say_and_wait(
      '今日也感谢您全程一直在旁辅佐。那么，为了更衣我先失陪了。',
    );
    await era.printAndWait([
      ruby.sex,
      '那未成熟又青涩的雪白身躯，像是倒映在水中的一轮明月，散发着青春无限的魅力光彩。那是一种能够让人抛开理智，坠入罪恶的危险诱惑。',
    ]);
    era.printButton('放开矜持，投入这片深渊。', 1, {
      disabled:
        era.get('love:85') < 75 ||
        era.get('cflag:0:性别') !== 1 ||
        era.get('cflag:85:性别') !== 0,
    });
    era.printButton('即便训练结束了，仍有一些我能做的事情。', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 双手环绕，从后面搂住 ',
        ruby.get_colored_name(),
        ' 的纤腰。',
        ruby.get_colored_name(),
        ' 惊呼一声后，整个头都羞的低了下去。',
      ]);
      await era.printAndWait([
        '这幅羞赧的模样真是太可爱了，',
        me.get_colored_name(),
        ' 将',
        ruby.sex,
        '的头转过来，将嘴唇贴在',
        ruby.sex,
        '的小嘴上。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 吓了一跳，妄图从 ',
        me.get_colored_name(),
        ' 身上跳起来，多亏 ',
        me.get_colored_name(),
        ' 抱得紧，没让小姑娘得逞。',
      ]);
      await era.printAndWait([
        '一道轻吻，霎时将 ',
        me.get_colored_name(),
        ' 数日隐忍的欲火给点燃了。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的右手本扶在 ',
        ruby.get_colored_name(),
        ' 的腰上，这时已不由自主地伸入了',
        ruby.sex,
        '的泳衣，往',
        ruby.sex,
        '微隆的胸部前进。',
      ]);
      await era.printAndWait([
        '马上，',
        me.get_colored_name(),
        ' 就摸到那对秀气的乳房，用食指和中指轻轻夹着顶端的乳头搓揉。',
      ]);
      await ruby.say_and_wait(['呀！', r_call_m, '……']);
      await era.printAndWait([
        '一阵深吻之后，',
        me.get_colored_name(),
        ' 的舌头慢慢离开了那张淡薄的樱唇。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 喘着呼吸红着俏脸仰视着 ',
        me.get_colored_name(),
        '，只有一条透明闪亮的银丝，作为 ',
        me.get_colored_name(),
        ' 与',
        ruby.sex,
        '之间的联系。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的动作没有停止，在 ',
        ruby.get_colored_name(),
        ' 反应过来之前，左手又划入了泳装的下摆，在',
        ruby.sex,
        '的胯下游走。',
      ]);
      await ruby.say_and_wait('现在不行！要是发出声音被谁看到，事情就大条了！');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 用手肘轻轻往 ',
        me.get_colored_name(),
        ' 小腹一推，',
        ruby.uma_sex_title,
        '的力道让 ',
        me.get_colored_name(),
        ' 呛得不停咳嗽。',
      ]);
      era.printButton('「啊啊啊啊！好痛啊，痛死了！」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 假装无辜的受害者，故意趁机缩进身体把 ',
        ruby.get_colored_name(),
        ' 搂进怀里，当然手指也更加伸入。',
      ]);
      await era.printAndWait([
        '见 ',
        ruby.get_colored_name(),
        ' 抖着身子不再抵抗，',
        me.get_colored_name(),
        ' 微微一笑，把',
        ruby.sex,
        '拉到了旁边的小树林里。',
      ]);
      await era.printAndWait([
        '又是一阵拥吻后，就试着退下',
        ruby.sex,
        '的泳衣。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 双眼明亮，不想错过一刻欣赏这幅迷人幼体的机会。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 将 ',
        ruby.get_colored_name(),
        ' 按倒，在',
        ruby.sex,
        '雪白的肌肤上裸泳，滑过一片又一片透着粉红的洁白凝脂。',
      ]);
      await ruby.say_and_wait('嗯……啊！');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 平时凛然的表情，现在已经完全消失无踪，取而代之的则是灿若蔷薇的无限柔情。',
      ]);
      await era.printAndWait([
        '这幅惹人心动的模样让 ',
        me.get_colored_name(),
        ' 开始意乱神迷，',
        me.get_colored_name(),
        ' 吻着',
        ruby.sex,
        '胸前玲珑秀气的乳房，牙齿一口咬住前端突起的娇嫩果实。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 紧咬嘴唇，忍受着 ',
        me.get_colored_name(),
        ' 带来的刺激。',
      ]);
      await era.printAndWait([
        '就当 ',
        me.get_colored_name(),
        ' 吮着小巧乳头，想接着继续最终阶段时，一旁传来了 ',
        miracle.get_colored_name(),
        ' 的声音。',
      ]);
      await miracle.say_and_wait([
        sys_get_colored_callname(93, 85),
        '，你在训练吗？',
      ]);
      await era.printAndWait([
        '这时 ',
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 魂都给吓飞了，',
        me.get_colored_name(),
        ' 让 ',
        ruby.get_colored_name(),
        ' 赶紧随便找个理由打发',
        ruby.sex,
        '走。',
      ]);
      await era.printAndWait([ruby.get_colored_name(), ' 不得已只好说。']);
      await ruby.say_and_wait([
        sys_get_colored_callname(85, 93),
        '，我在休息，有什么话明天在说吧。',
      ]);
      await era.printAndWait([
        '说完轻颦薄怒地瞪了 ',
        me.get_colored_name(),
        ' 一眼。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 杵在 ',
        ruby.get_colored_name(),
        ' 的身上哭笑不得，静静等到 ',
        miracle.get_colored_name(),
        ' 离去。',
      ]);
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      end_ero_and_train();
    }
  };

  handlers[95 + 43] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('「华丽一族」的训练员', ruby);
    await era.printAndWait([
      '在训练场旁，正在休息的 ',
      ruby.get_colored_name(),
      ' 突然向 ',
      me.get_colored_name(),
      ' 搭话。',
    ]);
    await ruby.say_and_wait('您的话到底为什么……作为『训练员』的本分是……');
    era.printButton('「不，这是『我』的使命。」', 1);
    await era.input();
    await era.printAndWait([
      '作为「华丽」一族，展示最耀眼的光辉，那就是 ',
      ruby.get_colored_name(),
      ' 的梦想。',
    ]);
    await era.printAndWait([
      '实现赛',
      ruby.uma_sex_title,
      '的梦想——训练员工作的本质可能就是这个。',
    ]);
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('这样啊，我明白了。');
    await era.printAndWait('担当露出的微笑，似乎有点……玩味。');
    flags.wait_flag = get_attr_and_print_in_event(85, [5, 0, 5, 0, 0], 0);
  };

  handlers.rose_master = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('华丽的历史伟业', ruby);
    await era.printAndWait('第一家宅邸');
    await era.printAndWait([
      '「华丽一族」，听到这个名字时，人们就会想起某位',
      ruby.uma_sex_title,
      '……',
    ]);
    await era.printAndWait([
      '在历史上刻下了辉煌功绩的稀世名',
      ruby.uma_sex_title,
      '们……',
    ]);
    await era.printAndWait([
      '继承了',
      ruby.sex,
      '们的血脉，让其绽放出更大的花朵——',
    ]);
    await era.printAndWait([ruby.get_colored_name(), '。']);
    await era.printAndWait([
      ruby.sex,
      '，便是如今作为「华丽一族」象征的',
      ruby.uma_sex_title,
      '。',
    ]);
    await ruby.say_and_wait('让您久等了。');
    await ruby.say_and_wait('所有的报告都完成了。');
    era.printButton('「你家人们的意思是？」', 1);
    await era.input();
    await ruby.say_and_wait('『请用那双脚继续前进』……和那个人一起。');
    await era.printAndWait([ruby.get_colored_name(), ' 结束了三年的赛跑。']);
    await era.printAndWait([
      '为了报告之后的打算，',
      me.get_colored_name(),
      ' 和 ',
      ruby.get_colored_name(),
      ' 来到了华丽一族老家。',
    ]);
    await era.printAndWait([
      '「用自己的脚绽放最耀眼的光辉」',
      ruby.sex,
      '的说法好像被接受了。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 对 ',
      me.get_colored_name(),
      ' 歪着头。',
    ]);
    await ruby.say_and_wait('您在做什么呢？');
    era.printButton('「我在看肖像画。」', 1);
    era.printButton('「我在看你。」', 2, { disabled: era.get('love:85') < 75 });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '最开始拜访宅邸的时候，重压几乎要让 ',
        me.get_colored_name(),
        ' 的膝盖弯曲。',
      ]);
      await era.printAndWait('如今已经可以如品茶般欣赏画作了。');
      await era.printAndWait([
        '毕竟 ',
        me.get_colored_name(),
        ' 也算是做出了不少的贡献。',
      ]);
      await ruby.say_and_wait([r_call_m, '……']);
      await ruby.say_and_wait('请让我，重新申明一下。');
      await ruby.say_and_wait([
        '这三年间，',
        me.get_colored_name(),
        ' 很出色地承担了指导者的职责。',
      ]);
      await ruby.say_and_wait(
        '我想，成为我的训练员，一定会面对连绵不断的艰难辛苦。',
      );
      await ruby.say_and_wait('但是，你真的努力了，成长了。');
      await ruby.say_and_wait('做的很棒，我为你感到由衷的骄傲。');
      era.printButton('「我才是，非常感谢。」', 1);
      await era.input();
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        '今后，我作为『华丽一族』的象征，必须一直是闪耀的存在。',
      );
      await ruby.say_and_wait('那么，我们商量一下今后的打算吧？');
      era.printButton('「……」', 1);
      await era.input();
      await ruby.say_and_wait('您怎么了？');
      era.printButton('「我可以吗？」', 1);
      await era.input();
      await ruby.say_and_wait('！');
      await ruby.say_and_wait('难以理解。');
      await ruby.say_and_wait(['决定我的事情，不是 ', r_call_m, ' 的职责吗？']);
      await ruby.say_and_wait('那么，请尽快。时间是有限的。');
      await ruby.say_and_wait('而且……');
      await ruby.say_and_wait('我的画像旁边没有你的话，我会很为难的……');
      await era.printAndWait('今后也有很多课题等着我们，请千万不要忘记。');
      era.println();
      flags.wait_flag = sys_like_chara(85, 0, 5);
    } else {
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('抱我。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 听话地抱起 ',
        ruby.get_colored_name(),
        ' 小小的身体。',
      ]);
      await ruby.say_and_wait('……嗯。');
      await ruby.say_and_wait('到时候我们就这样拍照吧。');
      flags.wait_flag = sys_love_uma(85, 2);
    }
  };
};
