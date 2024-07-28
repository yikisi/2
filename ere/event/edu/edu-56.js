/* eslint-disable max-lines */
const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const event_hooks = require('#/data/event/event-hooks');
const { race_enum } = require('#/data/race/race-const');
const era = require('#/era-electron');

const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');
const { get_random_value } = require('#/utils/value-utils');
const handlers = {};
const color0 = require('#/data/chara-colors').chara_colors[0];
const { buff_colors } = require('#/data/color-const');

const EroParticipant = require('#/data/ero/ero-participant');

const { part_enum } = require('#/data/ero/part-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { add_event } = require('#/event/queue');
const palace = require('#/event/snippets/palace');
const palace_relation = require('#/event/snippets/palace-relation');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

handlers[event_hooks.race_start] = async (hook, extra_flag) => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  let temp = 0;
  const FUKU = new FukuEventMarks();
  const edu_weeks = era.get('cflag:56:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('迎接出道战', MF);
    //race_infos[race_enum.hope_sta].get_colored_name(),
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 参加出道赛的日子终于到来了。`,
    ]);
    await me.print_and_wait([
      `从平日训练时的数据来看，名叫 `,
      MF.get_colored_name(),
      ` 的赛${MF.get_uma_sex_title()}除了面对逃马容易焦躁之外，其余的能力均在同期中上。`,
    ]);
    await me.print_and_wait([
      `在出示了证件之后， `,
      me.get_colored_name(),
      ` 被许可进入了 `,
      MF.get_colored_name(),
      ` 的赛前休息室。`,
    ]);
    await MF.say_and_wait('训练员！！！');
    await me.print_and_wait([
      `在看到 `,
      me.get_colored_name(),
      ` 走进房间后 `,
      MF.get_colored_name(),
      ` 兴奋地冲 `,
      me.get_colored_name(),
      ` 跑了过来。`,
    ]);
    await me.print_and_wait([`倒是出乎 `, me.get_colored_name(), ` 的意料。`]);
    if (era.get(`flag:当前声望`) >= 500) {
      await me.print_and_wait([
        `印象中大部分赛${MF.get_uma_sex_title()}这个时候都会紧张的不得了，但是 `,
        MF.get_colored_name(),
        ` 却是一副兴奋不已的样子。`,
      ]);
    } else {
      await me.print_and_wait([
        `听前辈们说，大部分赛${MF.get_uma_sex_title()}这个时候都会紧张的不得了，但是 `,
        MF.get_colored_name(),
        ` 却是一副兴奋不已的样子。`,
      ]);
    }
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 上下打量了一番待兼福来，${MF.sex}看起来兴奋不已，一如${MF.sex}曾经提到过的全身充满了灵力时的表现。`,
    ]);
    era.printButton('「运势不错？」', 1);
    await era.input();
    if (era.get('status:56:凶') === 1) {
      await MF.say_and_wait('勉勉强强吧......不过出道战大概没问题就是啦。');
    } else {
      await MF.say_and_wait('嗯！ 现在我可是有白兴大人附身的呢！');
    }
    await MF.say_and_wait('况且祂派来的神使也在我身边，我和那时候可不一样了！');
    era.printButton('「那时候?」', 1);
    await era.input();
    await me.print_and_wait(`似乎是没想到自己会不小心说出来。`);
    await me.print_and_wait([
      `本来满脸堆笑的 `,
      MF.get_colored_name(),
      ` 突然顿住了，表情变得有些复杂。`,
    ]);
    await MF.say_and_wait('在我姐姐……总之……');
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 深吸了几口气，随后继续讲了下去。`,
    ]);
    await MF.say_and_wait(
      `当时是我有生以来第一次想要抽签！结果因为没有零钱，只好放弃的那一天！`,
    );
    await MF.say_and_wait(`不过和那次不一样！我现在有个强而有力的同伴呢！`);
    await me.print_and_wait([
      `话毕， `,
      me.get_colored_name(),
      `  熟悉的， `,
      MF.get_colored_name(),
      `  的笑容再次出现在了${MF.sex}的脸上。`,
    ]);
    return;
  }

  if (extra_flag.race === race_enum.aoba_sho && edu_weeks < 78) {
    await print_event_name('迎接青叶赏', MF);
    await me.print_and_wait(`青叶赏乃是日本德比的预选赛。`);
    await me.print_and_wait(
      `因此许多想借此获取日本德比出走资格的赛${MF.get_uma_sex_title()}都会参加这比赛。`,
    );
    await me.print_and_wait(
      `光是在赛前展示阶段的其他选手散发而出的气势便和出道战大不相同。`,
    );
    if (era.get(`flag:当前声望`) >= 500) {
      await me.print_and_wait([
        `即使对于身经百战的 `,
        me.get_colored_name(),
        ` 而言,也带来了不少重压。`,
      ]);
    } else {
      await me.print_and_wait([
        `哪怕对作为训练员的 `,
        me.get_colored_name(),
        ` ,也带来了不少重压。`,
      ]);
    }
    era.drawLine({ content: '东京赛马场 休息室门前' });
    era.printButton('「推开门」', 1);
    await era.input();
    await me.print_and_wait([
      `再次进入赛前休息室，希望能见到同上次出道战时一样的 `,
      MF.get_colored_name(),
      ` ……`,
    ]);
    await MF.say_and_wait(`呼……哈！呼……哈！`);
    await me.print_and_wait(
      `事与愿违，像是呼吸不上来一样，${MF.sex}大口地喘着气。`,
    );
    era.printButton('「需要我给你一个纸袋吗？」', 1);
    await era.input();
    await MF.say_and_wait(`啊哈哈……没事的！没事的！`);
    await MF.say_and_wait(`就连赛前的占卜不是也说我现在是大吉吗？`);
    await MF.say_and_wait(`白兴大人……训练员……还有姐姐……`);
    await MF.say_and_wait(`没事的！一定会没事的！`);
    await me.print_and_wait([
      `不应该…… `,
      MF.get_colored_name(),
      ` 的表现过于应激了，就算用单纯的赛前紧张来解释也完全说不通。`,
    ]);
    await MF.say_and_wait('好了好了！没问题的，我们之后还在菊花赏上夺胜呢！');
    await me.print_and_wait([
      `似乎是察觉到了 `,
      me.get_colored_name(),
      ` 的担心， `,
      MF.get_colored_name(),
      ` 尝试转开了话题。`,
    ]);
    await MF.say_and_wait('对……对, 为了之后的菊花赏, 我会全力以赴的!');
    await me.print_and_wait([
      `过于明显的自我暗示，希望对于  `,
      MF.get_colored_name(),
      `  而言是有效的。`,
    ]);
    return;
  }

  if (extra_flag.race === race_enum.toky_yus && edu_weeks < 95) {
    await print_event_name('迎接日本德比', MF);
    await me.print_and_wait([
      `在 `,
      MF.get_colored_name(),
      ` 的强烈要求下，维持了原定于日本德比的出走计划。`,
    ]);
    await me.print_and_wait([
      `近乎所有同期的优秀赛马娘都报名参加了这场比赛，从人气排名来看， `,
      MF.get_colored_name(),
      ` 只是那些被媒体评价为重在参与的，不起眼的一位。 `,
    ]);
    await me.print_and_wait(
      `也不只有一家媒体，抨击了其位于青叶赏突然失速的表现。`,
    );
    era.drawLine({ content: '东京赛马场 休息室门前' });
    era.printButton('（推开门）', 1);
    await era.input();
    await me.print_and_wait(`${MF.sex}正站在房间内，`);
    await me.print_and_wait(
      `让人第一眼以为是水手服的衣物，却有着如巫女服般故意裸露出双肩的设计，赤红的领子如强调般地落在撑出明显形状的挺拔间， `,
    );
    await me.print_and_wait(
      `下身则是堪堪能遮住其安产形臀部的百褶裙与勾勒出其修长双腿的白色丝袜，还有代表着其巫女身份的绘马，念珠，背后是象征着好运的招财猫`,
    );
    await me.print_and_wait([
      `这便是名叫 `,
      MF.get_colored_name(),
      ` 的赛马娘的决胜服，可爱，元气，性感，神秘，一切都在这一身服装之中得到了完美的结合。`,
    ]);
    era.printButton('「没问题？」', 1);
    await era.input();
    await MF.say_and_wait(`虽然很想说没问题……但……`);
    await MF.say_and_wait(`光是在展示环节听着粉丝们的声援，就开始紧张了。`);
    await MF.say_and_wait(`但……训练员!`);
    await me.print_and_wait([
      `橘发的少女深吸一口气，回过头来冲 `,
      me.get_colored_name(),
      ` 尽可能的比了个笑容。`,
    ]);
    await MF.say_and_wait(`所谓最幸运的马赢德比呢！`);
    await MF.say_and_wait(
      `要论幸运这一块！有白兴大人和训练员双重加持的我，可是无敌的！`,
    );
    await me.print_and_wait([
      `${MF.sex}向 `,
      me.get_colored_name(),
      ` 比了一个大拇指，自上次立下约定后， `,
      me.get_colored_name(),
      ` 能明显感觉到 `,
      MF.get_colored_name(),
      ` 的态度转变了许多。`,
    ]);
    await me.print_and_wait([
      `至少和 `,
      me.get_colored_name(),
      ` 在一起的时候，脸上的微笑没那么刻板了。`,
    ]);
    era.printButton('「我可不希望你燃尽啊」', 1);
    await era.input();
    era.printButton('「平安回来！」', 1);
    await era.input();
    await MF.say_and_wait(`嗯！`);
    await MF.say_and_wait(`我答应过训练员的!`);
    if (era.get('love:56') >= 50) {
      await MF.say_and_wait(`不过训练员也给我些开运能量吧！`);
      await me.print_and_wait([
        `这样说着,穿着决胜服的 `,
        MF.get_colored_name(),
        ` 忽然从面前抱住了 `,
        me.get_colored_name(),
        ` 的身体。`,
      ]);
      await me.print_and_wait([
        `蓬松的橙色头发在 `,
        me.get_colored_name(),
        ` 的胸前蹭着。`,
      ]);
      await me.print_and_wait([
        `过了好一会儿，心满意足的 `,
        MF.get_colored_name(),
        ` 才抬起头看着你。`,
      ]);
    }
    await MF.say_and_wait(`训练员知道吗？`);
    await MF.say_and_wait(`在仪式中，言语可是有着很重的分量呢！`);
    await MF.say_and_wait(`所以承诺过的事情！我一定会做到的！`);
    await me.print_and_wait([
      `话毕，调整了一下自己招财猫背包的背带的 `,
      MF.get_colored_name(),
      ` 转身走向赛场。`,
    ]);

    return;
  }
  if (extra_flag.race === race_enum.kobe_hai && edu_weeks < 48 * 3) {
    await print_event_name('迎接神户新闻赏', MF);
    era.drawLine({ content: '神户赛马场 休息室内' });
    await me.print_and_wait([
      `严肃到近乎面无表情的 `,
      MF.get_colored_name(),
      ` 正坐在休息室的长椅上。`,
    ]);
    await me.print_and_wait([
      `过于正式的坐姿倒是让贴在体操服上的号码布弯曲的弧度变得更加明显，穿着白色长筒袜的双腿紧紧并拢在一起，在大腿根处勒出一道诱人的曲线。`,
    ]);
    await me.print_and_wait([
      `再加上…… `,
      me.get_colored_name(),
      ` 一想到这家伙平时经常脱线的样子， `,
      me.get_colored_name(),
      ` 的笑声抑制不住的从嘴角漏出来。`,
    ]);
    await MF.say_and_wait('训练员笑什么？');
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 仍是强装着正经问着 `,
      me.get_colored_name(),
      ` ，不过嘴角还是明显的抽动了一下。`,
    ]);
    era.printButton('「很紧张吗？」', 1);
    await era.input();
    await MF.say_and_wait('不，毕竟夏季合宿准备了那么久……');
    await me.print_and_wait('扯了扯两下胸口的号码布，试图分散自己的注意力。');
    await me.print_and_wait([
      `不过当 `,
      me.get_colored_name(),
      ` 走过去坐在 `,
      MF.get_colored_name(),
      ` 的身边时，她原本严肃的表情还是被打破了。`,
    ]);
    await MF.say_and_wait('唔.....还是有一点的。');
    await MF.say_and_wait(
      '明明知道更难的应该还在后头，没想到现在就有些害怕了。',
    );
    await me.print_and_wait([
      `歪着身子靠在 `,
      me.get_colored_name(),
      ` 的肩膀上， `,
      MF.get_colored_name(),
      ` 呼吸缓和了几分，如此近的距离 `,
      me.get_colored_name(),
      ` 也能闻到她那股神社般清冷的体香。`,
    ]);
    await MF.say_and_wait(`嗅……嗅……`);
    await MF.say_and_wait([
      `听 `,
      sys_get_colored_callname(56, 5),
      ` 说过，能感受到互相味道好闻，是两人的相性很好的证明……`,
    ]);
    await MF.say_and_wait(`有点冷静下来了呢……`);
    await MF.say_and_wait('话说，训练员对于约定是怎么看的呢？');
    await me.print_and_wait([`没等你回答，少女自顾自地说了下去。`]);
    await MF.say_and_wait(
      '在我看来，做了约定的双方，就会互相把自己命运中的一部分和对方绑在一起。',
    );
    await MF.say_and_wait(
      '所以啊，和姐姐做了约定的我，踏上了本该属于她的道路，为此当然要好好表现才行。',
    );
    await MF.say_and_wait('呼……');
    era.printButton('「倒是希望之后能看见属于福来的道路。」', 1);
    await era.input();
    await MF.say_and_wait('啊！');
    await MF.say_and_wait('这样吗！？');
    await MF.say_and_wait('呼……还是先完成眼前的事情吧。');
    await MF.say_and_wait('总之 是时候出发了……');
    await MF.say_and_wait('等着我吧训练员！');
    await MF.say_and_wait('为了打开通向菊花赏的大门，我会全力以赴的！');
    return;
  }

  if (extra_flag.race === race_enum.kiku_sho && edu_weeks < 48 * 3) {
    await print_event_name('迎接菊花赏', MF);
    era.drawLine({ content: '京都赛马场 休息室内' });
    await MF.say_and_wait(`终于……和承诺中的一样……还是走到了这一步啊！`);
    await MF.say_and_wait(`在拥有众多神社与佛寺的京都！`);
    await MF.say_and_wait(`以菊花为象征的重要比赛！`);
    await me.print_and_wait([
      `这是 `,
      MF.get_colored_name(),
      ` 第一次挑战3000米的比赛，这种炼狱般的长距离。`,
    ]);
    await me.print_and_wait(`理所当然的，她看起来有些紧张。`);
    await me.print_and_wait([
      `从最开始和她确立下菊花赏的目标之后， `,
      me.get_colored_name(),
      ` 便能感受到她对于此的执念，和姐姐的约定，和 `,
      me.get_colored_name(),
      ` 的约定，支撑着名为 `,
      MF.get_colored_name(),
      ` 的少女走到现在这一步。`,
    ]);
    await me.print_and_wait(`如今，她的目标就在眼前。`);
    await MF.say_and_wait(`那个,训练员！`);
    era.printButton('「怎么了」', 1);
    await era.input();
    await MF.say_and_wait(`能握住我的手吗？`);
    await me.print_and_wait([
      `少女有些扭捏的看向了 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await me.print_and_wait([
      `突如其来的请求，或许又是 `,
      MF.get_colored_name(),
      ` 临时想出的另一个仪式。`,
    ]);
    era.printButton('(伸手)', 1);
    await era.input();
    await me.print_and_wait([
      `赛马娘略高的体温，自她的掌心传来， `,
      me.get_colored_name(),
      ` 发现 `,
      MF.get_colored_name(),
      ` 急促的呼吸转缓了许多。`,
    ]);
    await MF.say_and_wait(`虽然……现在可能不是说这个的时候。`);
    await MF.say_and_wait(
      `即使在姐姐去世后，承诺替她实现在菊花赏上奔跑的愿望，对我来说也不过是奢望罢了。`,
    );
    await MF.say_and_wait(
      `如今居然能走到这一步，训练员对我来说，真的真的，和天神派来的使者别无二致！`,
    );
    await MF.say_and_wait(`呼……`);
    await MF.say_and_wait(`欸嘿嘿！`);
    await MF.say_and_wait(`果然啊，说出来就好多了！`);
    await MF.say_and_wait(`那么，训练员，我出发了！`);
    await MF.say_and_wait(`请静待我……我们向神明们呈上胜利吧！`);
    return;
  }

  if (extra_flag.race === race_enum.kink_sho && edu_weeks < 48 * 3) {
    await print_event_name('迎接金號赏', MF);
    era.drawLine({ content: '中京赛马场 休息室内' });
    await MF.say_and_wait(`呼哇……真是时隔了好久之后的比赛。`);
    era.printButton('「准备的怎么样？」', 1);
    await era.input();
    await MF.say_and_wait(`马马虎虎啦！`);
    await MF.say_and_wait(`唔！没有什么特别的感觉呢……`);
    await MF.say_and_wait(`幸运缠身的我，只要奔跑就会一直赢下去吧？`);
    await me.print_and_wait([
      `穿着体操服的 `,
      MF.get_colored_name(),
      ` 笑意盈盈的看着 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    if (era.get('love:56') > 75) {
      await MF.say_and_wait(`对了对了！`);
      await MF.say_and_wait(`训练员！再陪我做一个开运的仪式吧！`);
      await me.print_and_wait([
        `在 `,
        me.get_colored_name(),
        ` 还未反应过来的时候，用手轻轻捧起了 `,
        me.get_colored_name(),
        ` 的脸。`,
      ]);
      await me.say_and_wait(`唔!`);
      await me.print_and_wait([
        `通常来讲会固守齿后的小舌，这次却一反常态的侵入 `,
        me.get_colored_name(),
        ` 的口腔，送上属于 `,
        MF.get_colored_name(),
        ` 的涎液。`,
      ]);
      await MF.say_and_wait(`啾~`);
      await me.print_and_wait(
        `直到由于通知选手入闸，而不得不停止这一次时间长的有些离谱的激吻。`,
      );
      await MF.say_and_wait(`好了！训练员！我出发了！`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 的脸上红云浮动，让 `,
        me.get_colored_name(),
        ` 不禁怀疑这家伙到底放了多少心思在跑步上。`,
      ]);
      begin_and_init_ero(0, 56);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      end_ero_and_train(0, 56);
      FUKU.kink_shoKISS = 1;
    }
    era.printButton('「还是要认真一点吧？」', 1);
    await era.input();
    await MF.say_and_wait(`欸，训练员！`);
    await MF.say_and_wait(`明明带给我如此好运的就是你啊！`);
    await MF.say_and_wait(`你只需要坐那里看着就行！`);
    await MF.say_and_wait(`大吉的我只要随便跑跑就能赢了！`);
    await me.print_and_wait(
      `漠然，乃至于有些冷淡的态度，似乎比赛对她而言是什么完全无关的事情一样。`,
    );
    await me.print_and_wait([
      `只是在服从 `,
      me.get_colored_name(),
      ` 的命令踏上赛场。`,
    ]);
    await MF.say_and_wait(`好了好了，不用再说了！`);
    await me.print_and_wait([
      `也许在菊花赏上，随着 `,
      MF.get_colored_name(),
      ` 的执念一同献祭掉的，还有什么别的东西。`,
    ]);
    return;
  }

  if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks < 48 * 3 &&
    edu_weeks >= 48 * 2
  ) {
    await print_event_name('迎接宝冢纪念', MF);
    era.drawLine({ content: '阪神赛马场 休息室内' });
    await MF.say_and_wait(`通向荣耀的参拜道路本来应该已经中断！`);
    await MF.say_and_wait(`但是,大家大大小小的愿望一个又一个汇聚起来！`);
    await MF.say_and_wait(`替我再次开辟出那条道路了！`);
    await MF.say_and_wait(`宝冢纪念！`);
    await MF.say_and_wait(`我绝对不会辜负他们的,训练员！`);
    await MF.say_and_wait(`我会跑出一场最棒的比赛给大家看！`);
    era.printButton('已经没事了？', 1);
    await era.input();
    await MF.say_and_wait(
      `是的！之前我只是背着姐姐的愿望，靠着大大小小的开运道具前行。`,
    );
    await MF.say_and_wait(
      `但现在的我，还背负着许多粉丝的愿望！比之前强太多了！`,
    );
    await MF.say_and_wait(`还有最重要的，自己想要获胜的心情！`);
    await MF.say_and_wait(`这场仪式……`);
    await MF.say_and_wait(`不……比赛,我不会依靠运气,而是用我自己的意志去跑！`);
    era.printButton('听起来有点太耍帅了呢？', 1);
    era.printButton('保持这个势头向前冲吧！', 2);
    temp = await era.input();
    if (temp === 1) {
      await MF.say_and_wait(`说，说的也算呢~这样太夸张了，太夸张了……`);
    } else if (temp === 2) {
      await MF.say_and_wait(`嗯！……尽管就连我自己都觉得有点太夸张了。`);
    }
    await MF.say_and_wait(
      `不过！我的心情可是货真价实的！这次签筒里会抽出什么!`,
    );
    await MF.say_and_wait(`是由我自己决定！`);
    return;
  }

  if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 48 * 2) {
    await print_event_name('迎接有马纪念', MF);
    era.drawLine({ content: '中山赛马场 地下通道' });
    await me.print_and_wait([
      `少有的陪着 `,
      MF.get_colored_name(),
      ` 一起走到了通向跑道的地下通道内。`,
    ]);
    await me.print_and_wait(
      `出口如同被选中的人才能通过的怪物之口，而每当马娘被出口的阳光所吞噬时。`,
    );
    await me.print_and_wait(
      `粉丝们的声援就会在远处响起，就像吃到美味佳肴后满意地咆哮的怪物的声音一样。`,
    );
    await me.print_and_wait(
      `观众们的欢呼声叠加在一起，连地下通道的墙壁都发生了震动。`,
    );
    await me.print_and_wait([
      `直到 `,
      me.get_colored_name(),
      ` 看见走在前方的 `,
      MF.get_colored_name(),
      ` 如从梦中被惊醒一般的停滞了一下。`,
    ]);
    era.printButton('还好吗？', 1);
    await era.input();
    await MF.say_and_wait(`唔！`);
    await MF.say_and_wait(`……真的来到了有马纪念啊！`);
    await MF.say_and_wait(`一路上给不少人添麻烦了……`);
    era.printButton('那为了他们，拿下今天的胜利吧！', 1);
    await era.input();
    await MF.say_and_wait(`嗯！`);
    await me.print_and_wait([
      `大家都已经入场了，地下通道内只剩下了 `,
      me.get_colored_name(),
      ` 和 `,
      MF.get_colored_name(),
      ` 。`,
    ]);
    await MF.say_and_wait(`对了！`);
    await MF.say_and_wait(`那个.....想要运气的支援呢！`);
    if (era.get(`love:56`) < 50) {
      await me.print_and_wait(
        `带着炽热体温的橙发马娘扑进了 `,
        me.get_colored_name(),
        ` 的胸膛，耳朵抽动着拍了几下 `,
        me.get_colored_name(),
        ` 的脸。`,
      );
    } else {
      await me.print_and_wait([
        `凝视了片刻后， `,
        me.get_colored_name(),
        ` 的手还是绕过了 `,
        MF.get_colored_name(),
        ` 的侧颈，抚着她的后脑，低头吻住了她的嘴。`,
      ]);
      await me.print_and_wait(`在明知可能会被其他选手看见的场合交换起唾液来。`);
      era.println();
      await era.printAndWait(`路人马娘A「真是肉麻……」`);
      era.println();
    }
    await MF.say_and_wait(`呼……这下感觉眼里都能流出神签来呢！`);
    await me.print_and_wait([
      `如此近的距离， `,
      me.get_colored_name(),
      ` 发现她双瞳中的星星变得更加的明亮了。`,
    ]);
    await MF.say_and_wait(`那我出发了，训练员！`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 目送着 `,
      MF.get_colored_name(),
      ` 穿过地下马道，越过怪物的嘴，被天空降下的白色光芒所笼罩。`,
    ]);
    await me.print_and_wait(`在轰轰烈烈喧嚣声的伴随下走进了闸门。`);
    era.drawLine({ content: '中山赛马场 马闸内' });
    await MF.print_and_wait(
      `之前，我一直以为，只要幸运站在我这一边，我就能走到这一步！`,
    );
    await MF.print_and_wait(
      `不过，单凭幸运是无法来到这里的！是许许多多的缘分指引我前来的！`,
    );
    await MF.print_and_wait(`把自己投射在我身上，为我加油的粉丝们！`);
    await MF.print_and_wait(`同期的伙伴！`);
    await MF.print_and_wait(`过世的姐姐！`);
    await MF.print_and_wait(`还有一直拼命培育我的训练员！`);
    await MF.print_and_wait(`我今天不会向神明祈祷。`);
    await MF.print_and_wait(`今天——`);
    await MF.print_and_wait(`是由我成为神明——成为白兴大人！`);
    await MF.print_and_wait(`我要成为带给大家幸福的福娘！`);
    return;
  } else if (FUKU.tattoo === 1) {
    FUKU.tattoo = 2;
    await print_event_name(`不合时宜的发情`, MF);
    era.drawLine({ content: '赛前休息室' });
    await MF.say_and_wait(`唔……`);
    await MF.say_and_wait(`训练员……`);
    await me.print_and_wait([
      `捂着小腹的 `,
      MF.get_colored_name(),
      ` 弓着背站在 `,
      me.get_colored_name(),
      ` 的面前，泛红的脸颊显露出一股发情般的恍惚。`,
    ]);
    await MF.say_and_wait(`训练员……要……好想要……`);
    await me.print_and_wait([
      `为什么会突然这样子， `,
      me.get_colored_name(),
      ` 不禁有些慌乱。`,
    ]);
    await me.print_and_wait([
      `可还没等 `,
      me.get_colored_name(),
      ` 细想， `,
      MF.get_colored_name(),
      ` 已经半跪着跌在了地上。`,
    ]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 看见她拉起了自己衣服的下摆，已经泛着绯红的小腹处，那个由你画上的淫纹正不合时宜的发着粉红色的微光。`,
    ]);
    await me.print_and_wait([
      `毫无疑问，这正是让 `,
      MF.get_colored_name(),
      ` 现在从身体到内心都完全进入做爱状态的罪魁祸首。`,
    ]);
    await MF.say_and_wait(`训练员……抱歉……`);
    await me.print_and_wait([
      `坐在长椅上的 `,
      me.get_colored_name(),
      ` 看着 `,
      MF.get_colored_name(),
      ` 膝行着来到你的双腿之间,然后这只发情母马自觉地趴在了你的胯部。`,
    ]);
    await me.print_and_wait([
      `只是隔着布料散发处的气味, 就给了占卜师小姐的小腹重重的一击。`,
    ]);
    await me.print_and_wait([
      `淫纹催生着 `,
      MF.get_colored_name(),
      ` 的身体散发出甜香的荷尔蒙气息，魅惑的神态也让 `,
      me.get_colored_name(),
      ` 下身的凸起愈发鼓胀。`,
    ]);
    await MF.say_and_wait(`唔呼！`);
    await me.print_and_wait([
      `张开微红的唇瓣，雪白的贝齿咬在 `,
      me.get_colored_name(),
      ` 裤子的拉链上将其慢慢拉开，被解开了约束的粗大胀红肉茎从西装裤中蹦出。`,
    ]);
    await MF.say_and_wait(`肉棒先生……你好……`);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 贪婪地嗅着 `,
      me.get_colored_name(),
      ` 下体发出的性臭味，而后急不可耐的用舌尖吻上了肉棒的前端。`,
    ]);
    await MF.say_and_wait(`咕啾!`);
    await me.print_and_wait([
      `自铃口溢出的粘液被 `,
      MF.get_colored_name(),
      ` 的舌尖舔去，又将肉茎整个吞入口中，晶莹的涎水在肉棒进出间从赛马娘选手的嘴角滴落，为双唇的粉红抹上一层釉彩。`,
    ]);
    await me.print_and_wait([
      `鼓出了肉棒的形状的两腮配合着咕啾咕啾的粘稠吸吮声，说不定隔着门都能听见。`,
    ]);
    await MF.say_and_wait(`唔嗯！`);
    await me.print_and_wait([
      `看来内裤的布料忠实的履行了自己的职责， `,
      MF.get_colored_name(),
      ` 下身的衣物倒是没什么异样，但逐渐乏力的双腿还是说明了 `,
      MF.get_colored_name(),
      ` 的小腹对她发出的催促。`,
    ]);
    await MF.say_and_wait(`嘶……!`);
    await me.print_and_wait([
      `如乞食的金鱼吞入饵食，深吻一般让龟头抵着喉咙的软肉，姣好的脸颊也因为龟冠的强行闯入而不得不向两边鼓凸，喉咙发出摄食般咕咕的吞咽声音。`,
    ]);
    await MF.say_and_wait(`咕呃……!`);
    await me.print_and_wait([
      `琼鼻抵在 `,
      me.get_colored_name(),
      ` 的阴毛丛中，让将要踏上赛场的 `,
      MF.get_colored_name(),
      ` 肺部充满属于 `,
      me.get_colored_name(),
      ` 的气味。`,
    ]);
    await me.print_and_wait(`噗咻！`);
    await me.print_and_wait([
      `尽管窒息感让眼泪涌出眼角，被你刻下了淫纹的 `,
      MF.get_colored_name(),
      ` 却依然死死的抵着 `,
      me.get_colored_name(),
      ` 的胯下，让又腥又臭的气味被马娘灵敏的味蕾和鼻腔不断放大。`,
    ]);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 的小舌被继续胀大的肉棒压的扁平，喉头的软肉也参与了对龟头的按摩。`,
    ]);
    await MF.say_and_wait(`哈……哈……`);
    await me.print_and_wait([
      `肉棒在湿热紧致的口穴进进出出，伴随着阵阵激烈的吸力， `,
      me.get_colored_name(),
      ` 抵达了射精的终点`,
    ]);
    await MF.say_and_wait(`咕哈！`);
    await me.print_and_wait([
      `些许嘴角溢出的精液被未卜先知的占卜师小姐捧在了掌心，急不可耐的继续送入嘴中。`,
    ]);
    await MF.say_and_wait(`咕嘟！`);
    await me.print_and_wait([
      `间或涌出的残精也一起伴随着喉咙蠕动的吞咽声入腹。`,
    ]);
    await me.print_and_wait([
      `适时的，通知选手的声音响起，她才慢慢的从你的胯下站起，用食指撇去了嘴角的精液与几根卷曲的阴毛,而后伸出舌尖将它们卷入口腔。`,
    ]);
    await me.print_and_wait([
      `直到此时， `,
      MF.get_colored_name(),
      ` 的瞳孔才恢复些许清明。`,
    ]);
    await MF.say_and_wait(`呼……`);
    await MF.say_and_wait(`好多了……`);
    await MF.say_and_wait(`真是的！训练员的淫纹控制太不熟练了！`);
    await me.print_and_wait([
      `带上些责骂的语气， `,
      MF.get_colored_name(),
      ` 缓缓从地上站了起来，白色长筒袜的上端已经沾染了些内裤没有拦住的外溢穴汁。`,
    ]);
    await MF.say_and_wait(`不过，在吞下训练员精液之后，莫名觉得很精神呢！`);
    await MF.say_and_wait(`能发挥的更好也不一定？`);
    await me.print_and_wait([
      `在仔细打理了一下自己的外表，确保不会被别人看出异常后， `,
      MF.get_colored_name(),
      ` 才离开了赛前等候室。`,
    ]);
    get_attr_and_print_in_event(56, [0, 10, 0, 0, 0], 0);
    await era.waitAnyKey();
    return;
  } else {
    let message = [];
    const MF = get_chara_talk(56);
    const me = get_chara_talk(0);
    const sex_mark = era.get('mark:56:淫纹'),
      sex_happy = era.get(`mark:56:欢愉`),
      sex_love = era.get(`mark:56:同心`);

    if (sex_mark > 1) {
      message.push(async () => {
        MF.say('……幸好我的决胜服不是露肚子的。');
        me.print(
          `不过因为赛前激动而一并产生效果的淫纹，散发出的粉色光芒还是隐约可见。`,
        );
      });
    }
    if (sex_happy > 1) {
      message.push(async () => {
        MF.say('唔……非常，非常期待比赛之后的奖励呢！');
        me.print([
          `因为比赛而禁欲了一段时间 `,
          MF.get_colored_name(),
          ` ，只是想到这里身体就微微开始发抖。`,
        ]);
      });
    }
    if (sex_love > 1) {
      message.push(async () => {
        MF.say(`之后……命定之人明白的吧！`);
        MF.say(`唔！`);
        me.print([
          `踮起脚尖，在 `,
          me.get_colored_name(),
          ` 脸颊上轻轻啄了一下， `,
          MF.get_colored_name(),
          ` 向赛场走去。`,
        ]);
      });
    }

    if (FUKU.begin_race_end < 8) {
      message.push(async () => {
        MF.say(`……我拜请白兴大人，祂的伟力谅必能给我开辟出道路！`);
        me.print([
          `念着不知从哪里听到的祷词， `,
          MF.get_colored_name(),
          ` 的身影消失在赛场的入口处。`,
        ]);
      });
      message.push(async () => {
        MF.say(`……群星移动到了正确的位置呢！`);
        me.print([
          `将水晶球塞回招财猫背包里， `,
          MF.get_colored_name(),
          ` 的身影消失在赛场的入口处。`,
        ]);
      });
    } else {
      message.push(async () => {
        MF.say_and_wait('请训练员等待并心怀希望吧！');
        MF.say_and_wait('我会尽全力拿下胜利的！');
      });
    }

    let randomIndex_racestart = Math.floor(Math.random() * message.length);
    message[randomIndex_racestart]();
    return;
  }
};

handlers[event_hooks.race_end] = async (hook, extra_flag) => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const edu_weeks = era.get('cflag:56:育成回合计时');
  const FUKU = new FukuEventMarks();
  const races = era.get('cflag:56:育成成绩');
  let temp = 0;
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战结束后·参拜开始', MF);
    await MF.say_and_wait('太好了！我跑完了啦哦！');
    await me.print_and_wait([
      `第一个冲过终点线后， `,
      MF.get_colored_name(),
      ` 正在赛道上庆祝着，摆出了双手举向天空的姿势。`,
    ]);
    await MF.say_and_wait('训练员！灵验万分！比赛顺利！');
    if (era.get('status:56:凶') === 1) {
      await MF.say_and_wait(`就算是凶，有白兴大人加持的我还是赢下来了呢！`);
    } else {
      await MF.say_and_wait(`果然是大吉！连白兴大人都附在了我身上！`);
    }
    await MF.say_and_wait('一下子就结束了呢！');
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 仔细回想了一下方才 `,
      MF.get_colored_name(),
      ` 的表现，她的状态很好。`,
    ]);
    await me.print_and_wait(`平日里的教导她都有用上。`);
    await me.print_and_wait(`和选拔赛时的笨拙姿态完全不同。`);
    await me.print_and_wait(
      `如果照这个进步速度下去，菊花赏获胜也不是没有可能。`,
    );
    await MF.say_and_wait('训练员！');
    await MF.say_and_wait(
      '感觉状态很好！未来的菊花赏肯定没有问题！下一场比赛是什么呢？',
    );
    await MF.say_and_wait('要不要用占卜决定？');
    await MF.say_and_wait('呜！');
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 今日又挨了一记来自于 `,
      me.get_colored_name(),
      ` 的铁爪。`,
    ]);
    era.printButton('「青叶赏！」', 1);
    await era.input();
    await MF.say_and_wait('诶！青叶赏！');
    await MF.say_and_wait('那不是要到很远了吗？');
    await me.print_and_wait(`的确如此。`);
    await me.print_and_wait([
      `但考虑到 `,
      MF.get_colored_name(),
      ` 的距离适性，以及她的目标是经典三冠之一的菊花赏。`,
    ]);
    await me.print_and_wait([
      `况且 `,
      me.get_colored_name(),
      ` 也需要更多的时间了解这位状况游移不定的赛马娘。`,
    ]);
    await me.print_and_wait(`青叶赏会是一个不错的选择。`);
    FUKU.begin_race_end = 1;
    return;
  }

  if (
    extra_flag.race === race_enum.aoba_sho &&
    edu_weeks < 95
    //  &&  extra_flag.rank != 1
  ) {
    await print_event_name('青叶赏结束·影中的福', MF);
    await me.print_and_wait([
      `开始， `,
      MF.get_colored_name(),
      ` 的走位和步态控制都很优秀，尽管平日里的她是一个脱线的性格，但 `,
      me.get_colored_name(),
      ` 的教导，${MF.sex}还是有铭记于心的。`,
    ]);
    await me.print_and_wait([
      `比赛进入了末盘， `,
      MF.get_colored_name(),
      ` 也开始加速了，和几位领放选手的距离在迅速缩短。`,
    ]);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 展现出的末脚能力颇为优秀，几马身的差距转瞬即逝。`,
    ]);
    await me.print_and_wait(`直到……`);
    if (extra_flag.rank != 1) {
      await me.print_and_wait([
        `解说:「是失速了吗？ `,
        MF.get_colored_name(),
        ` 的速度突然下降了」`,
      ]);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 听见广播里如此解说。`,
      ]);
      await me.print_and_wait([
        `在 `,
        MF.get_colored_name(),
        ` 以一种几近踉跄的跑姿冲过终点线之后， `,
        me.get_colored_name(),
        ` 几乎是一步没停的冲向了赛场，在和周围待命的医生确认没有问题之后，直接抱着${MF.sex}来到了休息室。`,
      ]);
    } else {
      await me.print_and_wait([
        `解说:「发生什么了吗？ `,
        MF.get_colored_name(),
        ` 跑姿出现了明显的变形。」`,
      ]);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 听见广播里如此解说。`,
      ]);
      await me.print_and_wait([
        `确实如此...... `,
        MF.get_colored_name(),
        ` 在逼近那位领放选手之后，跑姿变得越来越不稳，而脸上的表情也变得越发的狰狞起来。`,
      ]);
      await me.print_and_wait([
        `尽管凭着硬实力， `,
        MF.get_colored_name(),
        ` 还是第一名冲线，不过末脚的时机，步伐，抢位意识，完全没有，似乎方才 `,
        MF.get_colored_name(),
        ` 只是凭着作为赛马娘的本能在奔跑一样。`,
      ]);
      await me.print_and_wait([
        `在 `,
        MF.get_colored_name(),
        ` 以一种几近踉跄的跑姿冲过终点线之后， `,
        me.get_colored_name(),
        ` 几乎是一步没停的冲向了赛场，在和周围待命的医生确认没有问题之后，直接抱着${MF.sex}来到了休息室。`,
      ]);
    }

    era.drawLine({ content: '东京赛马场 休息室内' });
    await MF.say_and_wait(`欸嘿嘿！都说没事的了!`);
    await me.print_and_wait(
      `赛后，坐在休息室里的福来,正双脚赤裸的坐在椅子上。`,
    );
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 不放心，还是让${MF.sex}脱下鞋袜仔细检查，也就是进行触诊。`,
    ]);
    await me.print_and_wait(
      `裸露在外的白润由于比赛之后微微泛着红，而脚掌的弧线顺滑而流畅，足趾则因突然暴露在空气中而微微颤抖着。`,
    );
    await me.print_and_wait([
      `不过 `,
      me.get_colored_name(),
      ` 并没有多少心思去欣赏待兼福来的双足，只是再三确认刚才的情况并非骨折或者是扭伤。`,
    ]);
    await me.print_and_wait(`但是，如果不是肉体上的问题话……`);
    era.printButton('（回忆）', 1);
    await era.input();
    await me.print_and_wait([
      `似曾相识，开始选拔赛的时候也有类似的情况，只不过， `,
      me.get_colored_name(),
      ` 当时只当成是 `,
      MF.get_colored_name(),
      ` 对冲刺时机的掌握并不熟练。`,
    ]);
    era.printButton('「发生了什么？」', 1);
    await era.input();
    await MF.say_and_wait(`啊……`);
    era.printButton('「就是刚才末盘时。」', 1);
    await era.input();
    await me.print_and_wait(`原本还算是欢快的${MF.sex}再次陷入了沉默。`);
    await MF.say_and_wait(`唔……`);
    await MF.say_and_wait(`不要……`);
    await me.print_and_wait(`${MF.sex}双唇紧抿，几乎要咬出血来。`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 鲜少在这位赛马娘口中听到过拒绝。`,
    ]);
    era.printButton('（停止追问，并就现有的情报分析）', 1);
    era.printButton('（尝试以更为柔和的口吻继续追问）', 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait(
        `对了，和出道战不同,选拔赛和这次的青叶赏有一个共通点。`,
      );
      await me.print_and_wait([
        `以逃跑为跑法的马娘数量与强度均高于平均线,而 `,
        MF.get_colored_name(),
        ` 都是在终盘和逃马的对抗中出现此状。`,
      ]);
      await me.print_and_wait([
        `结合 `,
        MF.get_colored_name(),
        ` 平日里的一些表现。`,
      ]);
      await me.print_and_wait(`非常不妙……`);
      await me.print_and_wait(`触景生情，以及选择性遗忘，典型的PTSD症状。`);
    } else if (temp === 2) {
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 尝试以更为柔和的口吻，继续追问，直到……`,
      ]);
      await MF.say_and_wait(`不！不！不是我的错！`);
      await MF.say_and_wait(`求你了！`);
      await me.print_and_wait(
        `马耳向后背的几乎是要插入自己的脑袋中，原本明亮的双眼染上了浑浊。`,
      );
      await era.printAndWait(`啊啊啊啊啊！！！！！`, {
        align: 'center',
        color: get_gradient_color(MF.color, '#ff0000', 0.5),
        fontSize: '24px',
        fontWeight: 'bold',
      });
      await era.printAndWait(`砰！`, {
        align: 'center',
        color: 'red',
        fontSize: '36px',
        fontWeight: 'bold',
      });
      await me.print_and_wait([
        `结结实实的一下，陷入应激状态的 `,
        MF.get_colored_name(),
        ` 给了 `,
        me.get_colored_name(),
        ` 一拳。`,
      ]);
      await me.print_and_wait([
        `幸好，在看到 `,
        me.get_colored_name(),
        ` 倒在地上的同时，马娘原本浑浊的双眼总算恢复了清明。`,
      ]);
      await MF.say_and_wait(`啊啊啊！非常抱歉！`);
      await MF.say_and_wait(`训练员！没事吧！我现在就去叫医生！`);
      await me.print_and_wait([
        `并无大碍？ `,
        me.get_colored_name(),
        ` 也的确得到了自己想要知道的东西。`,
      ]);
      await me.print_and_wait(
        `惊跳反应增强，伴随着攻击性行为的出现，典型的PTSD症状。`,
      );
    }

    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 陷入了沉思，精神上的缺陷远比肉体上的问题更加棘手。`,
    ]);

    era.set('status:56:PTSD', 1);
    era.printMultiColumns([
      {
        content: [` `, MF.get_colored_name(), `  发现对赛跑患有了PTSD。`],
        type: 'text',
      },
    ]);

    era.set('status:56:凶', 1);
    era.set('cflag:56:干劲', -2);
    era.set('status:56:大吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:中吉', 0);
    FUKU.begin_race_end = 2;
    return;
  }

  if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 // &&    extra_flag.rank != 1
  ) {
    await print_event_name('日本德比结束·曙光初现', MF);
    await MF.print_and_wait(
      `进入了终盘, 大家开始冲刺了, 位于前方的逃马也开始了加速！`,
    );
    await MF.print_and_wait(`头好疼……`);
    await MF.say_and_wait(`不……不要!`);
    await MF.print_and_wait(`那一天，我看见留着橙色长发的赛马娘开始了冲刺。`);
    await MF.say_and_wait(`不要！`);
    await MF.print_and_wait(`砰 ！！！`);
    await MF.print_and_wait(
      `裸露在外的骨头，歪斜的栏杆，还有被染成了红色的草地。`,
    );
    await MF.say_and_wait(`不要啊！`);
    await MF.print_and_wait(`如落海底，如坠冰窟，双脚陷入了泥潭之中。`);
    await me.print_and_wait([
      `解说:「  `,
      MF.get_colored_name(),
      ` ， `,
      MF.get_colored_name(),
      ` 又要失速了吗？」`,
    ]);
    await MF.say_and_wait(`训练员……可能要让你失望了。`);
    await MF.print_and_wait([`直到我看见靠在栏杆上的赛马娘张开了嘴。`]);
    await MF.print_and_wait(`? ? ? : 「阿福……」`);
    await MF.print_and_wait(`? ? ? : 「让我们做个约定吧。」`);
    await MF.print_and_wait(`? ? ? : 「将来要看到阿福在菊花赏上奔跑哦！」`);
    await MF.say_and_wait(`姐姐？`);
    await MF.say_and_wait(`唔……约定。 `);
    await MF.say_and_wait(`对, 约定……我答应过训练员的!  `);
    await MF.say_and_wait(`平安归来！`);
    await MF.say_and_wait(`现在, 是向神明献上奔跑的时候了！`);
    await me.print_and_wait(`解说:「 不，好快！好快啊！她开始冲刺了！ 」`);
    await MF.say_and_wait(`有训练员在身边的我，可是大吉啊！`);
    era.drawLine({ content: '东京赛马场 休息室内' });
    await MF.say_and_wait(`呼……训练员, 我冲出来了！`);
    await MF.say_and_wait(`呃！我还活着了！总之现在，超幸福！超满足的啦！`);
    await MF.say_and_wait(`福气满满！`);
    era.printButton('「辛苦了，谢谢你！」', 1);
    await era.input();
    await MF.say_and_wait(`欸，也不用这么说啦！`);
    await MF.say_and_wait(`我只是做了自己能做的事情而已！`);
    await MF.say_and_wait(`我从影子中逃出来了哦！`);
    era.printButton('「那么下一场是菊花赏？」', 1);
    await era.input();
    await MF.say_and_wait(`要跑菊花赏！`);
    await MF.say_and_wait(`是的！菊花赏！`);
    await MF.say_and_wait(`虽然可能有些困难啦......`);
    await MF.say_and_wait(`但是相信我和训练员一定没问题的！`);

    era.set('status:56:PTSD', 0);
    era.printMultiColumns([
      {
        content: [` `, MF.get_colored_name(), `  的PTSD暂时失去了。`],
        type: 'text',
      },
    ]);
    FUKU.begin_race_end === 3;

    era.set('status:56:凶', 0);
    era.set('status:56:大吉', 1);
    era.set('cflag:56:干劲', 2);

    return;
  }

  if (
    extra_flag.race === race_enum.kobe_hai &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`神户新闻赏·绑定`, MF);
    await me.print_and_wait([
      `解说:「 `,
      MF.get_colored_name(),
      ` 能追赶上吗？」`,
    ]);
    await me.print_and_wait(`解说:「好快！好快！太快了！」`);
    await me.print_and_wait(`解说:「五马身！三马身! 一马身！」`);
    await me.print_and_wait(`解说:「超越了！」`);
    await me.print_and_wait([
      `解说:「获胜者是 `,
      MF.get_colored_name(),
      ` ！」`,
    ]);
    await me.print_and_wait(
      `没有恐惧，没有犹豫，而是将自己平日里的训练，积攒下来的努力，在终盘的时候全部都释放出来。`,
    );
    await me.print_and_wait(`非常好，不是吗？`);
    era.drawLine({ content: '阪神赛马场 休息室内' });
    await MF.say_and_wait(`呼！！！`);
    era.printButton('「幸苦了！」', 1);
    await era.input();
    await MF.say_and_wait(`嗯！`);
    await MF.say_and_wait(`终于，我现在也算是完全脱敏了吧！？`);
    await MF.say_and_wait(`那么，之后就是菊花赏了吧！`);
    if (era.get('love:56') >= 50) {
      await me.print_and_wait([
        `没等 `,
        me.get_colored_name(),
        ` 回答， `,
        MF.get_colored_name(),
        ` 就已经跳到了 `,
        me.get_colored_name(),
        ` 的身上。`,
      ]);
      await me.print_and_wait([
        `坐在了 `,
        me.get_colored_name(),
        ` 的腿上，等着 `,
        me.get_colored_name(),
        ` 用毛巾开始擦拭起她汗津津的头发。`,
      ]);
      await me.print_and_wait([
        `终于，在察觉到怀中马娘的臀部开始不安分的磨蹭起来的时候， `,
        me.get_colored_name(),
        ` 拍了一下 `,
        MF.get_colored_name(),
        ` 的头，示意她安静下来。`,
      ]);
      await MF.say_and_wait(`哎呀！`);
    }
    await me.print_and_wait([
      `绕过 `,
      MF.get_colored_name(),
      ` 的毛茸茸尾巴，伸手从一旁的公文包中取出了为 `,
      MF.get_colored_name(),
      ` 设计的菊花赏训练计划。`,
    ]);
    await MF.say_and_wait(`哦！果然，训练员早就有准备了吧！`);
    era.printButton('「害怕了吗？」', 1);
    era.printButton('「可别到时候掉链子呀！」', 2);
    await era.input();
    if (temp === 1) {
      await MF.say_and_wait(`当然！`);
    } else {
      await MF.say_and_wait(`怎么会！`);
    }
    await MF.say_and_wait(`属于姐姐的参拜道路，我会替她走完的！`);

    FUKU.begin_race_end = 4;
    return;
  }

  if (
    extra_flag.race === race_enum.kiku_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`菊花赏结束·命运的半途`, MF);
    await me.print_and_wait(`马群进入了第四弯道，比赛也将进入终局。`);
    await me.print_and_wait([
      `然而 `,
      MF.get_colored_name(),
      ` 的踪迹仍匿于马群间， `,
      me.get_colored_name(),
      ` 只能从那抹若隐若现的亮橙色推测出 `,
      MF.get_colored_name(),
      ` 的大概位置。`,
    ]);
    await me.print_and_wait([
      `能发挥出 `,
      MF.get_colored_name(),
      ` 优秀爆发力的差行跑法本就对时机把握苛刻，胜利与败北往往只差一线之隔。`,
    ]);
    await me.print_and_wait([
      `这场比赛，对于 `,
      MF.get_colored_name(),
      ` 而言，会是大凶吗？`,
    ]);
    await me.print_and_wait([`解说:「第四弯道过后，接下来就是最后的直线……」`]);
    await me.print_and_wait([`被堵住了吗？然而终点已近在咫尺。`]);
    await me.print_and_wait([
      `观察，调整，决定，与行动，现在这个循环唯有身处漩涡中心的 `,
      MF.get_colored_name(),
      ` 本人才能完成，观众席上的 `,
      me.get_colored_name(),
      ` 帮不上忙。`,
    ]);
    await me.print_and_wait([`想要祈祷，这个念头不知怎么的冒了出来。`]);
    await me.print_and_wait([
      `或许， `,
      me.get_colored_name(),
      ` 此刻的无力感，一如姐姐夭折那一天时的 `,
      MF.get_colored_name(),
      ` 。`,
    ]);
    await me.print_and_wait([`不......现在还有身为训练员能帮的上忙的事情。`]);
    era.printButton('「阿福！！！」', 1);
    await era.input();
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 声嘶力竭的嘶吼起来。 `,
    ]);
    await me.print_and_wait([
      `不知高速奔跑中的 `,
      MF.get_colored_name(),
      ` 能否听到 `,
      me.get_colored_name(),
      ` 的呼喊，但胜利的天平，确确实实的向她那边倾斜了。`,
    ]);
    await me.print_and_wait([
      `仿佛圣人开海一般，又或者说像阿拉伯的少年以咒语打开门扉一般，那道橙色的闪电劈开了马群。`,
    ]);
    await me.print_and_wait([
      `解说:「——是待兼！ `,
      MF.get_colored_name(),
      ` ！福气仍将继续到来吗？！！」`,
    ]);
    await me.print_and_wait([
      `解说:「冲线了！自神户之后！！！福气也来到了菊花的舞台！！！」`,
    ]);
    era.drawLine({ content: '京都竞马场 菊花赏结束后' });
    await MF.say_and_wait(`训练员先生！！`);
    await MF.say_and_wait(`我……我赢了！赢了哦……！`);
    await me.print_and_wait([
      `训练室内，幸福不已的 `,
      MF.get_colored_name(),
      ` 扑到了 `,
      me.get_colored_name(),
      ` 的怀里，与 `,
      me.get_colored_name(),
      ` 紧紧相拥。`,
    ]);
    await me.print_and_wait([
      `赛马娘长距离赛跑后的炽热体温，还有胸前的弹软触感，隔着汗湿的水手服，通过拥抱传给了 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    if (era.get('love:56') >= 50) {
      await MF.say_and_wait(`这可都是多亏了命定之人呢！`);
      await me.print_and_wait([
        `如此说着，她抬起头，用那如琥珀一般的眸子看着 `,
        me.get_colored_name(),
        ` 。`,
      ]);
      await MF.say_and_wait(`对了！`);
      await MF.say_and_wait(`也要给命定之人点奖励才行呢！`);
      await me.print_and_wait([
        `而后，在 `,
        me.get_colored_name(),
        ` 骤惊的眼瞳中, 她略掂脚尖，二人的嘴唇交叠在了一起。`,
      ]);
      await me.print_and_wait([
        `不可思议系少女的清冷体香混着散在空气中的微腥汗气充斥着 `,
        me.get_colored_name(),
        ` 的嗅觉。`,
      ]);
      await me.print_and_wait(`舌尖互抵，而又再次相触。`);
      await me.print_and_wait([
        `唇分之后， `,
        me.get_colored_name(),
        ` 看见少女的小舌头在唇边舔了舔，吸入几丝唾液。`,
      ]);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 还是第一次见 `,
        MF.get_colored_name(),
        ` 如此主动。`,
      ]);
      begin_and_init_ero(0, 56);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      end_ero_and_train(0, 56);
    }
    await me.print_and_wait([
      `在菊花赏上获胜了，名叫 `,
      MF.get_colored_name(),
      ` 的少女，实现了自己的执念，在追寻自己幸福的命运之路上踏出了一大步。`,
    ]);
    await me.print_and_wait(`但她下一步，又该往何处去呢？`);
    FUKU.begin_race_end = 5;
    return;
  }

  if (extra_flag.race === race_enum.kink_sho && edu_weeks < 48 * 3) {
    if (
      extra_flag.rank === 1 &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1)
    ) {
      // 并且菊花赏胜利

      await print_event_name('金號赏结束·被凭依者', MF);
      await MF.say_and_wait(
        `轻松的取得了胜利，就像是和训练员约定的一样。`,
        true,
      );
      await MF.say_and_wait(`想向姐姐报告我现在的状态。`, true);
      await MF.say_and_wait(`我已经是一位优秀的赛马娘了哦！`);
      await MF.say_and_wait(`在姐姐的墓前，我对着她的墓碑这样说着。`, true);
      await MF.say_and_wait(`训练员有没有什么想说的？`);
      await MF.say_and_wait(
        `我看见训练员先生双手合十，认真的侧脸只能看到微动的嘴唇。`,
        true,
      );
      await me.say_and_wait(`福来的姐姐，谢谢你，一直以来照顾着她！`);
      await MF.say_and_wait(`嗯，姐姐一定会为我高兴的吧！`, true);
      era.drawLine({ content: '一段时间后 特雷森的宿舍内' });
      await MF.say_and_wait(`……`);
      await MF.say_and_wait(`是吗？`, true);
      await MF.say_and_wait(`青叶赏,日本德比,神户新闻赏,菊花赏,金號赏……`, true);
      await MF.say_and_wait(`驱使我跑到现在的到底是什么呢？`, true);
      await MF.say_and_wait(`姐姐……`);
      await MF.say_and_wait(
        `只是偶然一瞥，窗户变成了镜子，映出了独自站着的我。`,
        true,
      );
      await MF.say_and_wait(`身高比以前高了，头发也变长了。`, true);
      await MF.say_and_wait(`比起第一次遇到训练员时，更加成熟的模样。`, true);
      await MF.say_and_wait(`简直和照片中的姐姐别无二致。`, true);
      await MF.say_and_wait(`那……我呢？`, true);
      await MF.say_and_wait(`训练员……`);
      await MF.say_and_wait(`被凭依的空壳……`);
      await MF.say_and_wait(
        `莫名的恶心感涌上心头，胃和肠子像是绞成了一团。`,
        true,
      );
      era.drawLine({ content: `次日 ${me.actual_name}的办公室` });
      era.printButton('「空壳？」', 1);
      await era.input();
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 喃喃地念着 `,
        MF.get_colored_name(),
        ` 告诉的这个结论，那个认为自己被姐姐的灵魂凭依上的少女，正不安的站在屋内的一角。`,
      ]);
      await MF.say_and_wait(`对啊，我好像的确变得不太像是自己。`);
      await MF.say_and_wait(`该说，我只是借出身体而已，让执念附上来吗？`);
      await MF.say_and_wait(`因为我其实什么也没有想嘛。`);
      await MF.say_and_wait(`只是随意地顺势发展而已。`);
      await MF.say_and_wait(`这样子……真的算我赢了吗？`);
      await MF.say_and_wait(`……`);
      await MF.say_and_wait(`要是在两年前，我说不定会很高兴呢！`);
      await MF.say_and_wait(`但是一想到……`);
      await me.print_and_wait(`少女颤抖的声音逐渐变得如雾般朦胧不清。`);
      era.printButton('「阿福？」', 1);
      await era.input();
      await MF.say_and_wait(`抱歉……`);
      await MF.say_and_wait(`让我静一静。`);
      era.set('status:56:PTSD', 1);
      era.printMultiColumns([
        {
          content: [` `, MF.get_colored_name(), `  的PTSD再度复发了。`],
          type: 'text',
        },
      ]);
    } else if (
      extra_flag.rank != 1 &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1)
    ) {
      await MF.say_and_wait(`咦……我输了……?`);
      await MF.say_and_wait(`我的运气，居然没效……?`);
      await MF.say_and_wait(`这是骗人的吧！这不可能发生的！我的运气是.....！`);
      await MF.say_and_wait(`训练员！这是个噩梦对吧！`);
      await MF.say_and_wait(`明明，明明在你身边的我应该是大吉才对的！`);
      era.printButton('「这是现实......」', 1);
      await era.input();
      await MF.say_and_wait(`怎么会，我还以自己已经脱胎换骨了！`);
      await MF.say_and_wait(`要是被神明抛弃……我……我……!`);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 默默的走上前,将快要哭出来的 `,
        MF.get_colored_name(),
        ` 拥入怀中。`,
      ]);
      await MF.say_and_wait(`呜呜呜……训练员……`);
      era.drawLine({ content: `次日 ${me.actual_name}的办公室` });
      era.printButton('「空壳？」', 1);
      await era.input();
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 喃喃地念着 `,
        MF.get_colored_name(),
        ` 告诉的这个结论，那个少女，正不安的站在屋内的一角。`,
      ]);
      await MF.say_and_wait(`对啊，我好像的确变得不太像是自己。`);
      await MF.say_and_wait(`该说，我只是借出身体而已，让执念附上来吗？`);
      await MF.say_and_wait(`因为我其实什么也没有想嘛。`);
      await MF.say_and_wait(`只是随意地顺势发展而已。`);
      await MF.say_and_wait(`这样子……我真的跑出来了吗？`);
      await MF.say_and_wait(`……`);
      await me.print_and_wait(`少女颤抖的声音逐渐变得如雾般朦胧不清。`);
      era.printButton('「阿福？」', 1);
      await era.input();
      await MF.say_and_wait(`抱歉……`);
      await MF.say_and_wait(`让我静一静。`);
      era.set('status:56:PTSD', 1);
      era.printMultiColumns([
        {
          content: [` `, MF.get_colored_name(), `  的PTSD再度复发了。`],
          type: 'text',
        },
      ]);
    }

    era.set('status:56:凶', 1);
    era.set('cflag:56:干劲', -2);
    era.set('status:56:大吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:中吉', 0);
    FUKU.begin_race_end = 6;
    return;
  }

  if (
    extra_flag.race === race_enum.takz_kin &&
    edu_weeks < 3 * 48 &&
    edu_weeks >= 48 * 2 &&
    extra_flag.rank == 1
  ) {
    await print_event_name('宝冢纪念结束·复苏', MF);
    await me.print_and_wait([
      `看台上，那犹如建御雷神才能发出的巨大欢呼声，宣告了 `,
      MF.get_colored_name(),
      ` 的胜利。`,
    ]);
    await me.print_and_wait(`正所谓，事在人为，有志者，事竟成。`);
    await me.print_and_wait([
      `走出低谷后的大复活， `,
      MF.get_colored_name(),
      ` 今日的表现，正是这句话的完美写照。`,
    ]);
    await era.println();
    era.drawLine({ content: '阪神赛马场 休息室内' });
    await MF.say_and_wait(`训练员！我赢了！我赢了！`);
    era.printButton('「嗯! 粉丝们也很高兴呢!」', 1);
    await era.input();
    await MF.say_and_wait(`那我们下一场比赛是什么呢 ？`);
    await MF.say_and_wait(`还是趁着夏季合宿这段时间好好想一下吧。`);
    await MF.say_and_wait(`对了，训练员！`);
    era.printButton('「怎么了？」', 1);
    await era.input();
    await MF.say_and_wait(`关于自己的道路要怎么走，我似乎有一点眉目了！`);
    await me.say_and_wait(`能告诉我吗？`);
    await MF.say_and_wait(`唔……目前只是有点模糊不清的预感而已啦！`);
    if (era.get('love:56') >= 75 && FUKU.kink_shoKISS === 1) {
      await MF.say_and_wait(`不过那条路一定得有训练员吧！`);
      await me.print_and_wait([
        `说完这番话后，因为运动完而脸颊酡红的 `,
        MF.get_colored_name(),
        ` 环抱住了 `,
        me.get_colored_name(),
        ` 的腰。`,
      ]);
      await me.print_and_wait(
        `故意扯的有些松垮的决胜服，半遮半掩的露出她精致分明的锁骨，与随着呼吸颤动的乳肉。`,
      );
      await me.print_and_wait(
        `再向下，是正不断交叠摩擦的湿漉漉白丝和逐渐被卷进双腿间的蓝色百褶裙。`,
      );
      await MF.say_and_wait(`那个……训练员……`);
      await MF.say_and_wait(
        `金號赏的事情，真的很抱歉，还对训练员说出那样的话……`,
      );
      await MF.say_and_wait(`如果想的话……就，把我当作是赔罪的祭品吧…… `);
      era.printButton('（接受）', 1);
      era.printButton('（拒绝）', 2);
      temp = await era.input();
      if (temp === 1) {
        begin_and_init_ero(0, 56);
        era.set('flag:当前位置', location_enum.restroom);
        await me.print_and_wait([
          `把得胜回来的 `,
          MF.get_colored_name(),
          ` 壁咚在了墙角。`,
        ]);
        await MF.say_and_wait(`训练员！`);
        await me.print_and_wait(
          `大口的呼吸起湿漉漉白丝，乳间与腋下的香甜气味。`,
        );
        await me.print_and_wait(
          `配合着休息室内屏幕里解说员小姐的点评，一起品鉴起今日优胜马娘的久经锻炼的肉体。`,
        );
        await me.print_and_wait(
          `在喘息声中扛起了福来的右腿，自打小就开始锻炼神乐舞的她柔韧度出色。`,
        );
        await me.print_and_wait([
          `肉棒抵着和褪下的内裤拉出了丝线的穴口， `,
          me.get_colored_name(),
          ` 的担当下意识的想要挣扎，却又想起了自己今天作为祭品的身份而作罢。`,
        ]);
        await me.print_and_wait(
          `插入了，腰间的悬挂着的绘马配合的如祈福般发出了声响。`,
        );
        await me.print_and_wait([
          `毫无怜惜的抽插，不理会 `,
          MF.get_colored_name(),
          ` 如何用染满了欲望的声线求饶。`,
        ]);
        await me.print_and_wait([
          `然后在里面直接射出来，报复般的让这个总是不让人省心的担当子宫被 `,
          me.get_colored_name(),
          ` 的精液填满。`,
        ]);
        await me.print_and_wait(
          `直到让她水手服下的平坦小腹略微鼓起，才想起来这家伙一会儿还要去参加胜者舞台而停手。`,
        );
        await me.print_and_wait([
          `而后的LIVE环节，明明极少出错的 `,
          MF.get_colored_name(),
          ` 接连出现了几个失误。`,
        ]);
        await me.print_and_wait(
          `LIVE还未过半，新换上的舞台服就已经被汗水浸透，胸腹之间的衣料隐隐透出水痕，而短裙里颤抖双腿间流下的液滴，和沿着下巴滴落的汗水一起落在舞台上。`,
        );
        era.set('status:56:短效避孕药', 1);
        era.add('exp:56:阴道高潮次数', 2);
        era.add('exp:0:阴茎高潮次数', 2);
        era.add('exp:0:射精量', 10);
        end_ero_and_train(0, 56);
      } else {
        await me.print_and_wait([
          `拒绝了， `,
          me.get_colored_name(),
          ` 看着 `,
          MF.get_colored_name(),
          ` 莫名变得气鼓鼓的走向了LIVE的候场房间。`,
        ]);
      }
    }
    FUKU.begin_race_end = 8;
    return;
  }

  if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks < 3 * 48 &&
    edu_weeks >= 48 * 2
  ) {
    if (extra_flag.rank === 1) {
      await print_event_name('有马纪念结束后·福来今至', MF);
      await MF.print_and_wait([
        `从前，有一位赛马娘，叫 `,
        MF.get_colored_name(),
        ` 。`,
      ]);
      await MF.print_and_wait(
        `她一点才华都没有，是个贪心无比，只想靠幸运往上爬的女孩子。`,
      );
      await MF.print_and_wait(`不过，这样的她却在有马纪念称霸了！`);
      await MF.print_and_wait(`没错……她付出了一切！`);
      await MF.print_and_wait(
        `那个女孩变成了神明，她跳脱马的境界，进入了神域，然后变成了一道白光……`,
      );
      era.drawLine({ content: '中山赛马场 地下通道' });
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 在赛后如此对 `,
        me.get_colored_name(),
        ` 布道着。`,
      ]);
      await MF.say_and_wait(`训练员！我们成功了喔！`);
      await MF.say_and_wait(`你觉得幸福吗 ？`);
      await MF.say_and_wait(`你很庆幸自己负责的担当是我的吧？`);
      era.printButton('「那是当然了!」', 1);
      await era.input();
      await MF.say_and_wait(`呜啊！我就想听这句话！`);
      await me.say_and_wait(`唔！？`);
      await me.print_and_wait([
        `激动不已的 `,
        MF.get_colored_name(),
        ` 径直扑进了 `,
        me.get_colored_name(),
        ` 的怀中，毫无顾忌的将身上的汗水洒在了 `,
        me.get_colored_name(),
        ` 的衬衣上。`,
      ]);
      await me.print_and_wait([
        `马娘比赛后湿热的甜腻体味被 `,
        me.get_colored_name(),
        ` 吸入，而胸前的那对乳肉被挤压的柔软感觉由于运动后的体温更是明显。`,
      ]);
      await me.print_and_wait([
        `过于的亲密的动作以至于受到了其他选手和训练员的侧目， `,
        me.get_colored_name(),
        ` 只得拍了拍 `,
        MF.get_colored_name(),
        ` 的背，示意她赶紧停下来。`,
      ]);
      await MF.say_and_wait(`好，就以这个气势去接受胜利者的访谈吧！`);
      era.drawLine({ content: '有马纪念后的采访现场' });
      await MF.say_and_wait(`今天！我必须在这里说这句话才行！`);
      await MF.say_and_wait(`在菊花的舞台之后！福气也来到中山了！`);
      await MF.say_and_wait(`只要衷心希望，福气就会到来！`);
      await MF.say_and_wait(`只要心怀希望，幸运就一定会到来！`);
      await MF.say_and_wait(`那么！祝各位有个好年！`);
      await me.print_and_wait([
        `在无数聚光灯和镜头前，说出这番话的 `,
        MF.get_colored_name(),
        ` 以她标志性双手伸向天空的动作作为收尾，将幸福传递到了所有将愿望寄托在她身上的粉丝们。`,
      ]);
      await me.print_and_wait([
        `而站在她身后一同接受采访的 `,
        me.get_colored_name(),
        ` ，之后也与为众人祈愿的 `,
        MF.get_colored_name(),
        ` 一起登上了许多家媒体的报纸。`,
      ]);
    }

    FUKU.begin_race_end = 10;
    return;
  }
  // 通用比赛文本

  if (FUKU.tattoo === 2 && extra_flag.rank === 1) {
    FUKU.tattoo++;
    await print_event_name(`预热完毕`, MF);
    era.set('flag:当前位置', location_enum.restroom);
    await me.print_and_wait([
      `漂亮的夺下了第一的 `,
      MF.get_colored_name(),
      ` 在离开观众视线的那一刻，如释重负般的跌入了 `,
      me.get_colored_name(),
      ` 的怀中。`,
    ]);
    await MF.say_and_wait(`结……结束了……`);
    `,me.get_colored_name(),`;
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 在闻到 `,
      me.get_colored_name(),
      ` 的气味之后，紧绷的身体才放松下来。`,
    ]);
    await MF.say_and_wait(`${me.actual_name}……${me.actual_name}`);
    await me.say_and_wait(`好烫！`);
    await me.print_and_wait([
      `运动后的温度，发情时的温度，嗅到自己命定之人后的兴奋温度，通过这紧紧的拥抱分享给了你。`,
    ]);
    await me.print_and_wait([
      `白丝的狐狸小姐在 `,
      me.get_colored_name(),
      ` 的胸膛上撒娇般的蹭动着`,
    ]);
    await me.print_and_wait([`马娘A：「那个他们两个人在干什么？」`]);
    await me.print_and_wait([`马娘B：「胜者的庆祝仪式吧？」`]);
    await me.print_and_wait([
      `较暗的地下通道内， `,
      me.get_colored_name(),
      `  看到些许粉色微光从 `,
      MF.get_colored_name(),
      ` 小腹的衣物中透出。`,
    ]);
    await me.print_and_wait([
      `一刻都不敢多待，  `,
      me.get_colored_name(),
      `  抱着 `,
      MF.get_colored_name(),
      ` 去到了选手休息室。`,
    ]);
    await MF.say_and_wait([`……忍不住了！`]);
    await me.print_and_wait([`被情欲冲昏的脑袋已经完全失去组织语言的能力。`]);
    await me.print_and_wait([
      `在腹中的精液，口腔残留的对 `,
      me.get_colored_name(),
      ` 精液味道还未完全消散的比赛半途时，湿润感，酥酥的麻痒感，以及隐隐约约的钝痛感就不断折磨着 `,
      MF.get_colored_name(),
      ` 。`,
    ]);
    await me.print_and_wait([`砰！`]);
    await me.print_and_wait([
      `  `,
      me.get_colored_name(),
      `  反手关上门，将 `,
      MF.get_colored_name(),
      ` 壁咚在门上。`,
    ]);
    await me.print_and_wait([
      `汗湿的衣服有些难脱，不断升腾起来的湿热白气带着 `,
      MF.get_colored_name(),
      ` 的好闻味道一个劲的往  `,
      me.get_colored_name(),
      `  鼻子里钻。`,
    ]);
    await MF.say_and_wait(`唔……`);
    await me.print_and_wait([
      `橙色的马尾悄悄地盘上了  `,
      me.get_colored_name(),
      `  的腰。`,
    ]);
    await MF.say_and_wait(`快来吧……命定之人……`);
    await quick_into_sex(56);
    return;
  }

  if (extra_flag.rank === 1) {
    await print_event_name('比赛获胜', MF);
    await MF.say_and_wait(`Happy come come ！ 福气来了哦！`);
    await MF.say_and_wait(
      `哎呀呀！多亏了训练员！多亏了白兴大人！多亏了被神明眷顾着的我啊！`,
    );
    era.printButton(`没错！`, 1);
    era.printButton(`不要得意忘形！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      if (era.get('love:56') < 75) {
        await MF.say_and_wait(`呜呼！那要怎么庆祝呢？`);
        await MF.say_and_wait(`去吃苹果派怎么样？`);
        await me.print_and_wait([
          `于是晚上和 `,
          MF.get_colored_name(),
          ` 一起吃了撒上了肉桂和糖粉的苹果派。`,
        ]);
      } else {
        await MF.say_and_wait(`那个，训练员能凑近一点吗？`);
        await MF.say_and_wait(`嘿！`);
        await me.print_and_wait([
          `橙色的团子自觉的跳到了 `,
          me.get_colored_name(),
          ` 的怀里，而后她肆无忌惮的在 `,
          me.get_colored_name(),
          ` 的衣服上留下她的气味。`,
        ]);
        await MF.say_and_wait(`欸嘿嘿，命定之人的气味！`);
      }
    } else {
      await MF.say_and_wait(`唔！说的也是呢！`);
      await MF.say_and_wait(`那么，训练员请收下这个吧！`);
      await me.print_and_wait(`从自己背着的招财猫背包里掏出了一个护身符。`);
      await MF.say_and_wait(`这可是！凝结着胜者好运的护身符呢！`);
      await MF.say_and_wait(`之后训练员还会收到许多的！`);
    }
    return;
  } else if (extra_flag.rank <= 5) {
    await print_event_name('入着', MF);
    await MF.say_and_wait(`呜……本来以为会赢的。`);
    await MF.say_and_wait(`下次！下次一定会没有问题的！`);
    await me.print_and_wait([
      `比赛失利的 `,
      MF.get_colored_name(),
      ` 失落了一小下后就立刻恢复了她的乐天状态。`,
    ]);
    return;
  } else if (extra_flag.rank <= 10) {
    await print_event_name('落败', MF);
    await MF.say_and_wait(`输……输了?`);
    await me.print_and_wait([
      `都没撑到走回休息室， `,
      MF.get_colored_name(),
      ` 就已经在 `,
      me.get_colored_name(),
      ` 的怀里大声的哭了起来。`,
    ]);
    await me.print_and_wait([
      `贴着 `,
      me.get_colored_name(),
      ` 胸口的双耳，缠着 `,
      me.get_colored_name(),
      ` 左腿的尾巴，她像是要把整个人融到 `,
      me.get_colored_name(),
      ` 的怀里一样死死地搂抱着 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await me.print_and_wait(
      `不知为何，明明如此狼狈的场景连胜者都投来了羡慕的目光。`,
    );
    return;
  }
};

handlers[event_hooks.week_start] = async (hook, _, event_object) => {
  let temp = 0;

  const races = era.get('cflag:56:育成成绩');
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.week_start, event_object);
    return;
  }

  const FUKU = new FukuEventMarks();
  const MF = get_chara_talk(56);
  const SL = get_chara_talk(2);
  const MT = get_chara_talk(62);
  const MB = get_chara_talk(74);

  const me = get_chara_talk(0);
  const edu_weeks = era.get('cflag:56:育成回合计时');
  const love = era.get('love:56');

  if (
    era.get('cflag:56:育成回合计时') < 48 * 3 - 1 &&
    era.get('status:56:运势依赖') === 1 &&
    FUKU.fortune_week === 0
  ) {
    FUKU.fortune_week = 1;
    await print_event_name('吉凶占卜', MF);
    //random 0-3
    let luck = Math.floor(Math.random() * 4);
    // random 0-4
    let luck_way = Math.floor(Math.random() * 6);
    // 塔罗 灵摆 卦象 星象 数字命理
    let luck_ways = ['塔罗', '灵摆', '卦象', '星象', '数字命理', '骰子'];
    //
    let luck_result = ['小吉', '中吉', '大吉', '凶'];

    if (era.get('status:56:PTSD') === 1) {
      luck = 3;
    }
    era.println();
    // era.print([` `,MF.get_colored_name(),` 尝试用 ${luck_ways[luck_way]} 进行了占卜，结果是 ${luck_result[luck]} `]);
    //  const color_7 = require('#/data/chara-colors').chara_colors[7];

    era.print([
      ` `,
      MF.get_colored_name(),
      ` 尝试用 `,
      { color: color0[1], content: luck_ways[luck_way] },
      ` 进行了占卜，结果是 `,
      { color: color0[1], content: luck_result[luck] },
    ]);

    era.println();
    era.println();
    await era.waitAnyKey();

    if (luck === 2) {
      era.set('status:56:大吉', 1);
      era.set('status:56:中吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:PTSD') != 1) {
        era.set('cflag:56:干劲', 2);
      }
    }
    if (luck === 1) {
      era.set('status:56:中吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:PTSD') != 1) {
        era.set('cflag:56:干劲', 1);
      }
    }
    if (luck === 0) {
      era.set('status:56:小吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:中吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:PTSD') != 1) {
        era.set('cflag:56:干劲', 0);
      }
    }
    if (luck === 3) {
      era.set('status:56:凶', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:中吉', 0);
      // random 0 1
      switch (get_random_value(0, 1)) {
        case 0:
          era.set('cflag:56:干劲', -1);
          break;
        case 1:
          era.set('cflag:56:干劲', -2);
      }
    }

    return;
  }

  if (edu_weeks === FUKU.RECTIME) {
    FUKU.RECTIME = -1;
    await print_event_name(`窥视命运的少女`, MF);
    era.drawLine({ content: '特雷森学院 田径场' });
    await MF.say_and_wait(`训练员！我做完了哦！`);
    await me.print_and_wait([
      `不远处，刚做完一组训练的 `,
      MF.get_colored_name(),
      ` 正冲 `,
      me.get_colored_name(),
      ` 挥着手，那种过于热情的喊声引来不少其他赛${MF.get_uma_sex_title()}的侧目。`,
    ]);
    await me.print_and_wait(
      `在这几日的相处中，除了过于依赖开运道具之外，${MF.sex}可以称得上是一个开朗，外向，总之，几乎所有的元气系相关的正面词汇都能往${MF.sex}身上贴。`,
    );
    await me.print_and_wait(`但……`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 能发现 `,
      MF.get_colored_name(),
      ` 身上对于占卜，命运，运气等过于明显的偏执。`,
    ]);
    await me.print_and_wait(
      `所谓占卜，大部分的人只是当作茶余饭后的谈资或者笑料而已。`,
    );
    await me.print_and_wait([
      `可 `,
      MF.get_colored_name(),
      ` 并不这么想，从工作日中的训练，到假期里的出游地点，${MF.sex}都会用${MF.sex}凝聚完运气的占卜后只有${MF.sex}自己才能解读的答案来做出决定。`,
    ]);
    await me.print_and_wait([
      `或许正是因为如此，在某一次的占卜中被${MF.sex}认定为${MF.sex}命定之人的 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await me.print_and_wait([
      `${MF.sex}对于 `,
      me.get_colored_name(),
      ` 有着同那些还在磨合期的担当组合们，完全不同的信任态度。`,
    ]);
    await me.print_and_wait([
      `似乎，${MF.sex}认准了 `,
      me.get_colored_name(),
      ` 就是${MF.sex}口中那位白兴大人派来的使者。`,
    ]);
    await me.print_and_wait(`接下来，还有一个重要的事项需要确定`);
    era.printButton('「待兼福来同学，关于将来的目标……」', 1);
    await era.input();
    await me.print_and_wait(
      `目标，也可以说成是赛${MF.get_uma_sex_title()}奔跑目的，愿望。`,
    );
    await me.print_and_wait(`具体的像是经典三冠，春秋连霸，乃至凯旋门。`);
    await me.print_and_wait(
      `或是更为宽泛的，单纯的为了胜利，抑或追寻某位偶像的道路。`,
    );
    await me.print_and_wait(`乃至更为抽象的，证明自己的存在，价值。`);
    await MF.say_and_wait(`目标吗……`);
    era.printButton(
      `「像是将来要跑什么比赛，或者是想要成为怎样的赛${MF.get_uma_sex_title()}。」`,
      1,
    );
    await era.input();
    await MF.say_and_wait(`欸！我没什么特别的目标啦！`);
    await MF.say_and_wait(`只要能一直保持现在的幸运就好了！`);
    await MF.say_and_wait(`不过……`);
    await MF.say_and_wait(`如果一定要说的话……菊花赏或许不错呢？`);
    await me.print_and_wait([
      `面前的 `,
      MF.get_colored_name(),
      ` 听起来是在开玩笑，但表情却是认真无疑。`,
    ]);
    era.printButton(`「有什么理由吗？」`, 1);
    await era.input();
    await MF.say_and_wait(`唔……`);
    await MF.say_and_wait([
      `是名叫 `,
      MF.get_colored_name(),
      ` 的${MF.get_teen_sex_title()}！为了实现幸福！成为神明！命运中的必经之路！`,
    ]);
    await me.print_and_wait([
      `沉思片刻之后，少女用她那一如往常过于夸张的说辞回答了 `,
      me.get_colored_name(),
      ` ，但${MF.sex}的眼神却是真诚无比的。`,
    ]);
    await me.print_and_wait(`话说回来，要在3000米的菊花赏获胜吗？`);
    await me.print_and_wait(`所谓最强的马赢菊花赏。`);
    await me.print_and_wait(
      `这个目标，对于${MF.sex}来说，是不是太过于遥远了呢`,
    );
    await me.print_and_wait(`还是先一步一步来，以出道战胜利为目标吧！`);

    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 14) {
    await print_event_name(`入局`, MF);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 几乎是在对她一无所知的情况下，和 `,
      MF.get_colored_name(),
      ` 签下契约的。`,
    ]);
    await me.print_and_wait([
      `好在随着时间推进， `,
      me.get_colored_name(),
      ` 对她的了解也在逐步扩展到赛跑之外的地方。`,
    ]);
    await me.print_and_wait([
      `比如那间 `,
      me.get_colored_name(),
      ` 与 `,
      MF.get_colored_name(),
      ` 相遇的神社，正巧是由她们家运营的。`,
    ]);
    await MF.say_and_wait(`欸！训练员很感兴趣吗？`);
    await MF.say_and_wait(`今天我恰好也要去工作呢！`);
    await me.print_and_wait([
      `反正今日也无训练安排。 `,
      me.get_colored_name(),
      ` 索性在福来的邀请下，陪着她去处理神社的相关事务。`,
    ]);
    await me.print_and_wait(
      `即使是休息日，此间神社也如当初与福来相见时那般冷清。`,
    );
    await me.print_and_wait([
      `不过 `,
      MF.get_colored_name(),
      ` 的热情倒是没有受到丝毫影响，换上了巫女服的她颇为认真的处理着从简单的清扫到折出御币在内的各项工作。`,
    ]);
    await me.print_and_wait([
      `已是黄昏，今日仍无参拜客的到来，可 `,
      me.get_colored_name(),
      ` 的那位担当却仍一脸期待的看着参拜客必经的鸟居。`,
    ]);
    await me.print_and_wait(`以及……今天一整天下来，似乎见到的神职人员就只有——`);
    era.printButton('「待兼福来？」', 1);
    await era.input();
    await MF.say_and_wait(`欸！训练员？`);
    era.printButton('「平时这里就你一个人？」', 1);
    await era.input();
    await MF.say_and_wait(`嗯！`);
    await MF.say_and_wait(
      `当然新年，以及特殊节日的时候，我们还是会雇一些人过来帮忙就是的啦!`,
    );
    await MF.say_and_wait(`偶尔妈妈也会来……`);
    await me.print_and_wait(`讲到这里，马娘细长的双耳蔫了下去。`);
    await MF.say_and_wait(`毕竟在我记忆里……`);
    await MF.say_and_wait(`这里就没什么人来的样子。`);
    await me.print_and_wait([
      `有些无奈的冲 `,
      me.get_colored_name(),
      ` 耸了耸肩，看来她并不想让  `,
      me.get_colored_name(),
      `  因为这件事儿同情她。`,
    ]);
    await MF.say_and_wait(`好啦！训练员不用想法子安慰我啦！`);
    await MF.say_and_wait(`唔呀！`);
    await me.print_and_wait([
      `看起来像是突然想到了什么，  `,
      MF.get_colored_name(),
      `  整个人像是炸毛的小猫一样跳了起来，恢复了那欢喜的表情。`,
    ]);
    await MF.say_and_wait(
      `对啊！正是因为如此，当时能找到这里来的训练员很厉害呢！`,
    );
    await me.print_and_wait(
      `在她又发表几句对运势的看法后，时间也到了该回去的时候了。`,
    );
    await MF.say_and_wait(
      `那么！我去后面换一下衣服！一会儿我们一起回特雷森吧！`,
    );
    await me.print_and_wait([
      `这样说着，  `,
      MF.get_colored_name(),
      `  向本殿旁的小房间走去。`,
    ]);
    era.drawLine({ content: '几分钟后' });
    await me.print_and_wait(`哐！`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 听到了象征参拜的钟声响起，这说明有客人来了。`,
    ]);
    await me.print_and_wait([`不过 `, MF.get_colored_name(), ` 还没回来。`]);
    await me.print_and_wait([
      `看来这下只能由 `,
      me.get_colored_name(),
      ` 出去接待了。`,
    ]);
    await me.print_and_wait(`环顾四周，除了还在摇晃的铜钟外，并没看到人影。`);
    await me.print_and_wait(`塞钱箱的掷币口处，倒是卡了什么东西。`);
    era.printButton('（检查赛钱箱）', 1);
    await era.input();
    await me.say_and_wait(`奇怪，怎么会有……`);
    await me.print_and_wait(`塞钱箱的上面莫名的放着一张泛黄的报纸残页。`);
    await me.print_and_wait(
      `内容看起来是当地报社拍摄的几张记录此间神社日常的照片。`,
    );
    await me.print_and_wait([
      `人山人海的参拜客，神职人员的笑脸，还有正被他们围着的……两只  `,
      MF.get_colored_name(),
      `  ？`,
    ]);
    era.printButton('（不对，年纪对不上）', 1);
    await era.input();
    await me.print_and_wait([
      `看起来是一对姐妹，年长的姐姐正握着年幼妹妹的手。`,
    ]);
    await me.print_and_wait([
      `年纪稍小的那位  `,
      me.get_colored_name(),
      `  可以从耳饰确认是  `,
      MF.get_colored_name(),
      `  无疑，但她身边的那一位是……?`,
    ]);
    era.printButton('（姐姐吗？）', 1);
    await era.input();
    await me.print_and_wait([
      `不过之前从来没有听  `,
      MF.get_colored_name(),
      `  说过她还有一个姐姐。`,
    ]);
    await MF.say_and_wait(`欸！训练员先生站在那里做什么呢？`);
    await me.print_and_wait([
      `换好了校服的 `,
      MF.get_colored_name(),
      ` 出现在了  `,
      me.get_colored_name(),
      `  的身后。`,
    ]);
    era.printButton('（给待兼福来看）', 1);
    era.printButton('（不给）', 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait([
        `然而，正当  `,
        me.get_colored_name(),
        `  想把刚刚捡到到的报纸残页给她看时。`,
      ]);
      await me.print_and_wait([`突如起来的一阵风卷过，响起了纸张的撕裂声。`]);
      await me.print_and_wait([
        `那张残页只在  `,
        me.get_colored_name(),
        `  的手中留下了极小的一块残片，其余被风卷入半空，在  `,
        me.get_colored_name(),
        `  和 `,
        MF.get_colored_name(),
        ` 的面前化成了更细小的碎块，向远方四散开来。`,
      ]);
      get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    } else {
      await me.print_and_wait([
        `然而，正当  `,
        me.get_colored_name(),
        `  想把刚刚捡到到的报纸残页藏起来时。`,
      ]);
      await me.print_and_wait([`突如起来的一阵风卷过，响起了纸张的撕裂声。`]);
      await me.print_and_wait([
        `那张残页只在  `,
        me.get_colored_name(),
        `  的手中留下了极小的一块残片，其余被风卷入半空，在  `,
        me.get_colored_name(),
        `  和 `,
        MF.get_colored_name(),
        ` 的面前化成了更细小的碎块，向远方四散开来。`,
      ]);
      get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 20);
    }
    // 描写
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 28) {
    await print_event_name(`橱窗里的既视感`, MF);
    // TODO 差分 吗？
    await me.print_and_wait([
      `出道战就此结束，代表着${me.actual_name}和 `,
      MF.get_colored_name(),
      ` 的两人三足算是正式启程了。`,
    ]);
    await me.print_and_wait([
      `作为胜利的奖励， `,
      me.get_colored_name(),
      ` 答应陪着${MF.sex}去商店街采购新的开运道具。`,
    ]);
    await me.print_and_wait([
      `已经不记得是第几次在呼声中奔向  `,
      MF.get_colored_name(),
      `  ，光是背包里那颗价格不菲的水晶球就压着你喘不过气来。`,
    ]);
    await me.print_and_wait([
      `提着大包小包的 `,
      me.get_colored_name(),
      ` 扶着墙，汗流浃背之时，却发觉  `,
      MF.get_colored_name(),
      `  的下一声却迟迟没有传来。`,
    ]);
    era.printButton('（抬起头）', 1);
    await era.input();
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 入定般地站在体育用品店的橱窗前，只有偶尔甩动几下的马尾能证明她并不是雕塑之类的死物。`,
    ]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 顺着${MF.sex}的目光看过去。`,
    ]);
    await me.print_and_wait(`是体育用品店的橱窗，里面的电视机正放着录像。`);
    await me.print_and_wait([
      `作为训练员的 `,
      me.get_colored_name(),
      ` 立刻认出来其上播放的内容是史上有名的逃马赛马娘的领放剪辑。`,
    ]);
    era.printButton('「待兼福来？」', 1);
    await era.input();
    await MF.say_and_wait('……');
    era.printButton('「待兼福来！你还好吗？」', 1);
    await era.input();
    await MF.say_and_wait(`啊！没事没事，训练员！`);
    await MF.say_and_wait(`欸嘿！看的有些太入迷了！`);
    await MF.say_and_wait(`我们继续去下一个灵点吧！`);
    await me.print_and_wait([
      `不对，`,
      me.get_colored_name(),
      ` 能感觉的到 `,
      MF.get_colored_name(),
      ` 这次转移话题的行为过于刻意了，况且……`,
    ]);
    await me.print_and_wait([
      `抛开 `,
      MF.get_colored_name(),
      ` 的主要跑法是差行这点先不谈，那种表情也并非和其它赛${MF.get_uma_sex_title()}一样单纯因为看到了别人奔跑的感同身受的开心或是兴奋，而是……`,
    ]);
    // await me.print_and_wait(`那种想要保持微笑，但又因为不断涌上来的悲伤而冲击出的呆滞。`);
    await me.print_and_wait(`呆滞？不，倒不如说是标准到了极点的微笑。`);
    era.printButton('「刚才发生了什么事？」', 1);
    era.printButton('「怎么了吗？」', 2);
    await era.input();
    await MF.say_and_wait(`……那个`);
    await MF.say_and_wait(`就是觉得有些既视感啦！`);
    era.printButton('「既视感？」', 1);
    await era.input();
    await MF.say_and_wait('就是……就是……');
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 看见  `,
      MF.get_colored_name(),
      `  的眼神变得有些游离不定，晃了几下脑袋。`,
    ]);
    await MF.say_and_wait(
      '想到了我的姐姐啦！以前和她一起并走的时候，她总是像电视里那些逃马一样把我甩开了好大好大的一段距离呢！',
    );
    era.printButton('「听起来你的姐姐是位很优秀的赛马娘吧？」', 1);
    await era.input();
    await MF.say_and_wait('是的……只是……');
    await me.print_and_wait([
      `近乎是从喉咙里强行挤出来的回答，  `,
      MF.get_colored_name(),
      `  背过去的耳朵像要插到脑袋里一样。`,
    ]); // 紧张
    await MF.say_and_wait(`去世了……`);
    await MF.say_and_wait(`对……去世了……`);
    era.printButton('「抱歉」', 1);
    await era.input();
    await MF.say_and_wait(`诶诶！抱歉的应该是我才对，又说了这么奇怪的话。`);
    await MF.say_and_wait(`和训练员在一起的时候，老是容易得意忘形呢！`);
    await MF.say_and_wait(`唔……`);
    await me.print_and_wait([
      `之后  `,
      MF.get_colored_name(),
      `  草草的找借口结束了这次庆祝活动， `,
      me.get_colored_name(),
      `  独自一人提着那堆采购来的开运物品回到了自己的办公室。`,
    ]);
    FUKU.window = 1;
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3]);
    get_skills_and_print_in_event(56, [200791]);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 35) {
    await print_event_name(`旋风扫净`, MF); // 可以改成事件链
    // TODO 差分
    await me.print_and_wait([
      `如往常一样，`,
      me.get_colored_name(),
      ` 在去往办公室的路上。`,
    ]);
    await me.print_and_wait(`「砰！！！」`);
    await me.print_and_wait(`直到在路过赛马娘宿舍的时候，听到了一声巨响。`);
    era.printButton('（分辨一下声音的方向）', 1);
    era.printButton('（无视）', 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait([
        `虽然 `,
        me.get_colored_name(),
        ` 的听力比不上那些赛${MF.get_uma_sex_title()}，但在宁静的早上定位这突兀声响的方位对 `,
        me.get_colored_name(),
        ` 而言不难。`,
      ]);
      await MT.print_and_wait(`「呜呜……」`);
      await me.print_and_wait(`某位${MF.get_uma_sex_title()}发出的哀叹。`);
      await MF.print_and_wait(`「啊啊啊！万分抱歉!」`);
      await me.print_and_wait([
        `以及，毫无疑问是 `,
        MF.get_colored_name(),
        ` 的声音。`,
      ]);
      await me.print_and_wait([
        `当 `,
        me.get_colored_name(),
        ` 还在犹豫着要不要给${MF.sex}打个电话的时候， `,
        me.get_colored_name(),
        ` 看到宿舍门口蹦出了一个熟悉的家伙。`,
      ]);
    } else if (temp === 2) {
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 大概能猜到，一定是自己那令人不省心的担当又整出了什么乱子。`,
      ]);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 加快脚步，打算趁着这件事被学生会那帮人发现前先溜走。`,
      ]);
      await me.print_and_wait([
        `直到 `,
        me.get_colored_name(),
        ` 感觉到衣服被身后什么人扯住了。`,
      ]);
    }
    await MF.say_and_wait(`啊哈哈！`);
    await MF.say_and_wait(`太好了！`);
    await MF.say_and_wait(`是训练员${me.get_adult_sex_title()}！`);
    await me.say_and_wait(`唉……`);
    era.printButton('「需要帮忙吗？」', 1);
    era.printButton('「又闯祸了？」', 2);
    temp = await era.input();
    if (temp === 1) {
      await MF.say_and_wait(`喔喔！看来今天是大吉呢！`);
      await MF.say_and_wait(
        `乐于助人的训练员${me.get_adult_sex_title()}在灾难之后突然出现！`,
      );
    } else if (temp === 2) {
      await MF.say_and_wait(`呜欸！不愧是我的命定之人！一下子就猜中了！`);
      await MF.say_and_wait(
        `不过训练员一定会帮忙的吧！我们可是一莲托生的关系呢！`,
      );
      await me.print_and_wait([
        `拗不过 `,
        MF.get_colored_name(),
        ` ， `,
        me.get_colored_name(),
        ` 还是点了点头`,
      ]);
    }
    await MF.say_and_wait(`那个……总之先过来吧！`);
    await me.print_and_wait([
      `在保安的诧异目光下，${MF.sex}不由分说的把 `,
      me.get_colored_name(),
      ` 拉进了宿舍！`,
    ]);
    await me.print_and_wait([
      `一打开门，闯入 `,
      me.get_colored_name(),
      ` 眼帘的就是一座由杂物堆积而成的大山。`,
    ]);
    await MT.say_and_wait(`救……`);
    if (era.get('cflag:62:招募状态') === 1) {
      await MT.say_and_wait(`训练员先生……救救我！`);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 的另一位担当正被埋在下面。`,
      ]);
    } else {
      await me.print_and_wait(`${MF.sex}的室友正被压在下面。`);
    }
    era.printButton('「这座垃圾山是？」', 1);
    temp = await era.input();
    await MF.say_and_wait(`才不是垃圾山呢！`);
    await MF.say_and_wait(`这些是！我一直以来收集的开运物品啦！`);
    await MF.say_and_wait(
      `或许照着这个势头增长下去，特雷森学院有一天会被吞噬也不一定！`,
    );
    await MF.say_and_wait(`啊,上面那句不是占卜而是我的猜测。`);
    await MF.say_and_wait(`好了好了！训练员帮我想想有什么地方放吧！`);
    await me.print_and_wait([
      `各种 `,
      me.get_colored_name(),
      ` 叫得出名字的，或叫不出名字的杂物，小玩意混在这座大山里，甚至还包括些明显是最近才买的纪念品。`,
    ]);
    await me.print_and_wait(`倒不如说现在才倒本来就是已经是大吉中的大吉了。`);
    await me.print_and_wait([
      `名叫 `,
      MF.get_colored_name(),
      ` 的赛${MF.get_uma_sex_title()}，意外的有很严重的囤积癖。`,
    ]);
    await me.print_and_wait(`果然，答案只有一个了。`);
    era.printButton('「扔掉吧……」', 1);
    temp = await era.input();
    await MF.say_and_wait(`欸？`);
    await MF.say_and_wait(`欸！！！！！！`);
    era.drawLine({ content: '特雷森学院 宿舍后的焚化炉' });
    await me.print_and_wait([
      `面对着堆积如山的开运物品, `,
      me.get_colored_name(),
      ` 决定从哪个开始呢？`,
    ]);
    let a = 0,
      b = 0,
      c = 0;
    do {
      if (a === 0) {
        era.printButton('(看起来平平无奇的瓶盖)', 1);
      }
      if (b === 0) {
        era.printButton('(损坏颇为严重的人偶)', 2);
      }
      if (c === 0) {
        era.printButton('(写有【大愿成就】的御守)', 3);
      }
      temp = await era.input();
      if (temp === 1) {
        a = 1;
        await MF.say_and_wait(`这个，这个是我第一次一下子就拧开的瓶盖！`);
        await MF.say_and_wait(`求你了！绝对不行啊！`);
      } else if (temp === 2) {
        b = 1;
        await MF.say_and_wait(`呜！那是我差点被三轮车压到时替我受难的人偶！`);
        await MF.say_and_wait(`扔掉它的话我会遭大厄运的！`);
      } else if (temp === 3) {
        c = 1;
        await MF.say_and_wait(
          `啊！那是我小学的时候！带领我进入球技校园八强的御守！`,
        );
        await MF.say_and_wait(`从它开始绝对不行！`);
      }
    } while (a === 0 || b === 0 || c === 0);
    await MF.say_and_wait(`呜呜！ 果然哪个都不行啊！`);
    await MF.say_and_wait(`我恳求你！训练员，能不能不要扔掉！我什么都会做的！`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 不得不把拼命摩擦着双手的 `,
      MF.get_colored_name(),
      ` 从焚化炉前拉走。`,
    ]);
    await me.print_and_wait(`看来得好好考虑一下怎么处理这些东西了。`);
    get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 30);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 38) {
    await print_event_name(`收容！开运物品`, MF);
    era.drawLine({ content: `${me.actual_name}的自宅` });
    await MF.say_and_wait(`训练员先生真是太好了！`);
    await me.print_and_wait([
      `在一番思量之下， `,
      me.get_colored_name(),
      `  想出了一个或许可行的解决办法——`,
    ]);
    await me.print_and_wait([
      `就是让  `,
      MF.get_colored_name(),
      ` 把东西暂存到 `,
      me.get_colored_name(),
      ` 家里。`,
    ]);
    await me.print_and_wait([
      `  `,
      me.get_colored_name(),
      `  看着 `,
      MF.get_colored_name(),
      ` 正一个一个的用${MF.sex}那些形态各异的开运道具填满了  `,
      me.get_colored_name(),
      `  的屋子四处。`,
    ]);
    await me.print_and_wait(
      `那种异常兴奋的姿态,不像是${MF.get_uma_sex_title()}，倒像是正在标记着自己领地的小动物。`,
    );
    await MF.say_and_wait(`欸嘿嘿！真是有些抱歉了！`);
    await MF.say_and_wait(
      `所以收集开运道具可是我从……一直以来保持的习惯呢！！！`,
    );
    await MF.say_and_wait(`在我成神前！都会一直坚持下去吧！`);
    await me.print_and_wait(
      `${MF.sex}似乎斟酌了一下，随后装作不经意地跳过了那个${MF.sex}本想说出来的时间点。`,
    );
    await me.print_and_wait(`……就和出道战的那时候一样`);
    await MF.say_and_wait(`话说，今后也能经常来训练员的家里看看吗？`);
    await me.print_and_wait([
      `看着正在  `,
      me.get_colored_name(),
      `  家客厅中雀跃不已的 `,
      MF.get_colored_name(),
      ` ，无奈地点了点头。`,
    ]);
    await MF.say_and_wait(`欸——不要露出那种表情吗？`);
    await MF.say_and_wait(`撒！那训练员有什么想麻烦阿福的吗！我会不遗余力的！`);
    await me.print_and_wait([
      `似乎是知道自己的行为的确给 `,
      me.get_colored_name(),
      ` 添了不少的麻烦，橙发的${MF.get_teen_sex_title()}做出了${MF.sex}标志性的动作，绷直的白皙双臂伸向天花板，期待着 `,
      me.get_colored_name(),
      ` 的回答。`,
    ]);
    await me.print_and_wait([
      `有什么能麻烦 `,
      MF.get_colored_name(),
      ` 的吗？`,
    ]);
    await me.print_and_wait(
      `嗯……只要${MF.sex}不给自己添麻烦就是最大的帮助了。`,
    );
    await me.print_and_wait(`不过，这或许是个进一步了解她的好机会。`);
    await me.print_and_wait([
      `比如，${MF.sex}经常提及的那位白兴大人, 对于 `,
      MF.get_colored_name(),
      ` 而言，似乎远不只是普通的信仰那么简单。`,
    ]);
    await MF.say_and_wait(`诶！想更多的了解白兴大人！`);
    await MF.say_and_wait(`唔……`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 看见${MF.sex}像是想起了什么一样，皱了皱眉头，呼吸变得有些急促。`,
    ]);
    era.printButton('「实在不愿意的话……」', 1);
    temp = await era.input();
    await MF.say_and_wait(`不不不不不！`);
    await MF.say_and_wait(`只是今天还不是大吉啦！我需要先准备一下！`);
    FUKU.lock_luck_item = 1;
    get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 30);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks == 42) {
    await print_event_name(`所谓白兴大人`, MF);
    await me.print_and_wait(`白兴大人`);
    await me.print_and_wait([
      `这位神明几乎整天被挂在 `,
      MF.get_colored_name(),
      ` 的嘴边。`,
    ]);
    await me.print_and_wait([
      `训练的好坏，天气的转变，乃至是地球的转动，都能被 `,
      MF.get_colored_name(),
      ` 以某种形式和${MF.sex}口中的白兴大人关联到一起。`,
    ]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 询问过很多次，得到的却是${MF.sex}语焉不详的描述。`,
    ]);
    await me.print_and_wait(`直到有一天……`);
    await me.say_and_wait('所以，我也算开运道具吗？！');
    await MF.say_and_wait('欸！可是有着承蒙关照之人能带来幸运的说法呢！');
    await era.printAndWait([
      `在她几近恳求的态度下， `,
      me.get_colored_name(),
      ` 只好答应了和她一起出门开运的请求。`,
    ]);
    await MF.say_and_wait('首先是粗点心店吧！就在这里占卜一下训练员的运势！');
    await MF.say_and_wait(`大吉！`);
    await MF.say_and_wait(`开了一个好头呢！`);
    await MF.say_and_wait(`然后是那家杂货店！`);
    await MF.say_and_wait(`这个达摩看起来很好的样子！`);
    await MF.say_and_wait(`哦！原来眼睛已经被画上了吗？`);
    await era.printAndWait(`忙碌了差不多一天，几乎逛遍了商店街的每一个角落。`);
    await MF.say_and_wait(
      `欸嘿，果然还是应该来神社收尾啊！拍拍手祈愿，感谢这一天平安无事！`,
    );
    await MF.say_and_wait(`……`);
    await MF.say_and_wait(`唔,该做的都做完了呢！`);
    await MF.say_and_wait(`训练员！我准备好了！`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 看见她突然底下了头，随后，像是下定了什么决心似的，望向了 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await MF.say_and_wait(`训练员一直不是很好奇白兴大人的事情吗...？`);
    await MF.say_and_wait(`其实，那个是姐姐告诉我的神明！`);
    await me.print_and_wait(
      `用双手捂着脑袋，将那本就乱糟糟的橙发弄的更加混乱，就像是强迫着自己回忆一样。`,
    );
    await MF.say_and_wait(
      `记得小时候，我经常被拿去和事事都能做好的姐姐相比较。`,
    );
    await MF.say_and_wait(`那时我跑的很慢，甚至连闸门都不敢出。`);
    await MF.say_and_wait(
      `但姐姐和我不同，她是位很优秀的逃马呢！连特雷森都对她发出过邀请哦！`,
    );
    await MF.say_and_wait(
      `为了安慰我，姐姐会给我做每次都是大吉的占卜，还有就是各种开运物品！`,
    );
    await MF.say_and_wait(
      `还有白兴大人的加持！姐姐告诉我，只要有白兴大人的加持，就能变得幸运！`,
    );
    await MF.say_and_wait(`所以，我一直都在相信着白兴大人！`);
    await MF.say_and_wait(`直到……`);
    await MF.say_and_wait(`直到后面她去世了。`); // TODO 我在想要不要这里加一条。
    await MF.say_and_wait(`而……`);
    await MF.say_and_wait(
      `她总是说，让白兴大人多多庇佑我，但……也许正是白兴大人没有庇佑她`,
    );
    await MF.say_and_wait(`有时我在想，是不是因为……要是我……`);
    await me.print_and_wait([
      `先是眼角出现了些许泪光，而后一滴，两滴，泪珠断断续续的叩响了 `,
      MF.get_colored_name(),
      ` 脚下的石板路。`,
    ]);
    await MF.say_and_wait(`抱歉……自顾自的说了这么多,训练员一定觉得我很烦吧……`);
    era.printButton('(递出纸巾)', 1);
    await era.input();
    await MF.say_and_wait(`嗯……`);
    await MF.say_and_wait(`谢谢……`);
    await me.print_and_wait([
      `在擦干眼泪之后， `,
      MF.get_colored_name(),
      ` 狠狠地甩了几下头,而后再次尝试露出往日的笑容。`,
    ]);
    await MF.say_and_wait(`不能哭……不能哭……`);
    await MF.say_and_wait(`姐姐最喜欢看见我的笑容了……`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 听见 `,
      MF.get_colored_name(),
      ` 在不停地喃喃自语，而后又几乎是自责，乃至愧疚般的扯着自己的耳朵与尾巴。`,
    ]);
    await me.print_and_wait(`少女近乎疯狂的，想要逃避掉自己正在哭泣的现实。`);
    await MF.say_and_wait(`唔！`);
    era.printButton('(伸出手)', 1);
    await era.input();
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 将她拥入怀中，尝试让她冷静下来，不断流出的泪水，以至于让 `,
      me.get_colored_name(),
      ` 的胸口都湿了一大片。`,
    ]);
    await me.print_and_wait([``]);
    await me.print_and_wait([
      `寂寥无人的神社中， `,
      me.get_colored_name(),
      ` 默默地抚摸着 `,
      MF.get_colored_name(),
      ` 的头发，直到${MF.sex}的颤抖渐渐平息。`,
    ]);

    sys_change_motivation(56, -3);
    get_skills_and_print_in_event(56, [200831]);
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();

    return;
  } else if (edu_weeks === 52) {
    await print_event_name(`仪式理论`, MF);
    await me.print_and_wait(`随着青叶赏日期的逼近，训练的强度也逐渐降了下来。`);
    await me.print_and_wait([
      `靠在栏杆上，望着那些正在训练场上挥洒汗水的赛马娘们， `,
      me.get_colored_name(),
      ` 若有所思。`,
    ]);
    await me.print_and_wait(`赛马娘踏上赛场的理由有很多。`);
    await me.print_and_wait([`而 `, MF.get_colored_name(), ` ……`]);
    await me.print_and_wait([` `, me.get_colored_name(), ` 记得她说过的话。`]);
    await MF.say_and_wait(
      [
        `是名叫待兼福来的${MF.get_teen_sex_title()}！为了实现幸福！成为神明！命运中的必经之路！`,
      ],
      true,
    );
    await me.print_and_wait(`那对于菊花赏的莫名执念，究竟是因为什么？`);
    await me.print_and_wait([
      `怀着疑问的  `,
      me.get_colored_name(),
      `  在帮着那家伙擦完汗之后，再次向 `,
      MF.get_colored_name(),
      ` 提出了这个问题。`,
    ]);
    await MF.say_and_wait(`诶……我也不太记得了。`);
    await MF.say_and_wait(`大概是和某人的约定吧。`);
    await me.print_and_wait([
      `自上次在神社里的痛哭之后，`,
      me.get_colored_name(),
      ` 再也没有和  `,
      MF.get_colored_name(),
      `  聊过有关于姐姐，甚至尽力避免涉及家庭的相关话题。`,
    ]);
    await me.print_and_wait([
      `不过，对于赛马娘而言，为何奔跑可是至关重要的事情，考虑到  `,
      MF.get_colored_name(),
      `  的交际圈，能和她立下约定的会是......? `,
    ]);
    era.printButton('「和姐姐吗？」', 1);
    era.printButton('「和白兴大人吗？」', 2);
    temp = await era.input();
    await MF.say_and_wait(`也许吧……唔。`);
    await MF.say_and_wait(
      `除非刻意去想，否则童年的记忆总像是蒙上了一层雾那样。`,
    );
    await MF.say_and_wait(`话说，训练员有听过类似的事情吗？`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 将吸满了汗的热腾腾毛巾搭在了一旁，按住了试图挑起来的 `,
      MF.get_colored_name(),
      ` 。`,
    ]);
    era.printButton('「什么事情？」', 1);
    temp = await era.input();
    await MF.say_and_wait(`赛马娘通过献祭变成神明什么的？`);
    await me.print_and_wait(
      `本来在提到姐姐后略有不快的面容，突然变得的明快起来。`,
    );
    await me.print_and_wait([
      `话题的突然转向令 `,
      me.get_colored_name(),
      ` 丝毫摸不着头脑。`,
    ]);
    era.printButton('「献祭？」', 1);
    temp = await era.input();
    await MF.say_and_wait(
      `就是那种向神明呈上礼品的仪式啦！对于赛马娘而言，毫无疑问的就是赛跑后的胜利呢！`,
    );
    await MF.say_and_wait(
      `不是也有书本提到赛跑本来就是献给三女神的舞蹈什么的嘛！`,
    );
    await MF.say_and_wait(`之前在家里阁楼的藏书中瞥见过……`);
    await MF.say_and_wait(
      `至少对我而言，仪式的道路中有菊花赏，这我毫无疑问的能够确定哦！`,
    );
    await me.print_and_wait([
      `这样说着，给周围的环境无形中添了几分秘氛的 `,
      MF.get_colored_name(),
      ` 继续去训练了。`,
    ]);
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks == 65) {
    await print_event_name(`门槛前`, MF);
    era.drawLine({ content: `特雷森学院 ${me.actual_name}的办公室` });
    await me.print_and_wait(
      `休息日，${me.actual_name}正坐在办公室里，若有所思`,
    );
    await me.print_and_wait([
      `最开始，只是出于训练员的责任感而和 `,
      MF.get_colored_name(),
      ` 签订了担当契约。`,
    ]);
    await me.print_and_wait([
      `但这位少女却远比 `,
      me.get_colored_name(),
      ` 想象的要麻烦， `,
      me.get_colored_name(),
      ` 就像是撞上了卡律布狄斯的船长，被扯进了几乎是看不见底的麻烦漩涡中。`,
    ]);
    await me.print_and_wait(
      `尤其是青叶赏后，${MF.sex}的情绪变得越来越不稳定。`,
    );
    await me.print_and_wait([
      `不仅是在训练中，平日里的 `,
      MF.get_colored_name(),
      ` 也变得越发的不安。`,
    ]);
    await me.print_and_wait(
      `即使是面对邀请来并走的逃马同学，${MF.sex}也会在终盘前就失速。`,
    );
    // 无声铃鹿的差分 需要吗？
    if (era.get('cflag:2:招募状态') === 1) {
      await SL.say_and_wait(`训练员，福来同学没事吧？`);
      await me.print_and_wait([
        `队伍里的其他成员也对 `,
        MF.get_colored_name(),
        ` 现在的状况有所注意。`,
      ]);
    }
    await me.print_and_wait(`那么，现在该怎么办呢？`);
    era.printButton('（继续前行吧）', 1);
    await era.input();
    await me.print_and_wait([
      `不会有别的答案了吧，毕竟，那家伙可是管 `,
      me.get_colored_name(),
      ` 叫做命定之人啊。`,
    ]);
    await me.print_and_wait(`是时候开始工作了……`);
    await me.print_and_wait(
      `PTSD，即创伤后应激障碍，通常的病因是个体经历、目睹或遭遇到一个或多个涉及自身或他人的实际死亡。`,
    );
    await me.print_and_wait(
      `出于保护机制，大脑会自动屏蔽事发时的记忆，或用虚构加以替换，即所谓的选择性遗忘，不能回忆起与创伤有关的事件细节。`,
    );
    await me.print_and_wait([
      `而平时的 `,
      MF.get_colored_name(),
      ` 才能保持少女的活泼，只有提到与她姐姐相关的事物时才会流露出悲伤正是因为如此。`,
    ]);
    await me.print_and_wait([
      `继续据此推测，当时赛场上的情景，配合着赛跑本就紧张的高压，一定触发了 `,
      MF.get_colored_name(),
      ` 的应激。`,
    ]);
    await me.print_and_wait(`即创伤性再体验症状。`);
    await me.print_and_wait([
      `那么，童年时的 `,
      MF.get_colored_name(),
      ` ，究竟经历了什么?`,
    ]);
    await me.print_and_wait([
      `如果是涉及到赛马娘的事故话，当地的报纸应该会有相关报道。而 `,
      MF.get_colored_name(),
      ` 曾经也透露过姐姐受到特雷森邀请的事实。`,
    ]);
    await me.print_and_wait([
      `调查开始， `,
      me.get_colored_name(),
      ` 决定从……`,
    ]);
    era.printButton('（翻阅旧报纸）', 1);
    era.printButton('（查阅特雷森的过往新生档案）', 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait(
        `快十年前的一张报纸，提到了一位马娘在训练的过程中因事故去世，由于是当地神社宫司的女儿，在当时引起了一阵不小的风波。`,
      );
      await me.print_and_wait(
        `这大概也解释了为何神社的参拜客会比其他地方少那么多。`,
      );
      await me.print_and_wait([
        `在那张事故现场的照片上， `,
        me.get_colored_name(),
        ` 看到了一个熟悉的身影。`,
      ]);
      await me.print_and_wait([
        `当时出事的时候， `,
        MF.get_colored_name(),
        ` 也在场，她亲眼看着自己的姐姐用逃马在终盘时的冲刺速度撞在了护栏上。`,
      ]);
      await me.print_and_wait([
        `尽管大脑的保护机制将真实的记忆埋于其下，但在全神贯注的青叶赏赛场上，终盘前的逃马冲刺时那似曾相识的画面，还是引发了 `,
        MF.get_colored_name(),
        ` 的心病。`,
      ]);
    } else if (temp === 3) {
      await me.print_and_wait(`分支选项制作中`);
    } else if (temp === 2) {
      await me.print_and_wait([
        `照片上是和 `,
        MF.get_colored_name(),
        ` 有着几分神似的长发马娘。`,
      ]);
      await me.print_and_wait(`优秀的逃马，连特雷森都对她发出过邀请`);
      await me.print_and_wait([
        `而现在，得益于特雷森还算不错的文件备份意识，那封邀请信的复印件及相关材料正躺在 `,
        me.get_colored_name(),
        ` 的手中。`,
      ]);
      await me.print_and_wait(
        `一位以菊花赏为目标的逃马……可惜后面由于训练时的意外丧生。`,
      );
      await me.print_and_wait([
        `当时出事的时候， `,
        MF.get_colored_name(),
        ` 也在场，她亲眼看着自己的姐姐用逃马在终盘时的冲刺速度撞在了护栏上。`,
      ]);
      await me.print_and_wait([
        `尽管大脑的保护机制将真实的记忆埋于其下，但在全神贯注的青叶赏赛场上，终盘前的逃马冲刺时那似曾相识的画面，还是引发了 `,
        MF.get_colored_name(),
        ` 的心病。`,
      ]);
    }
    await era.println();
    await me.print_and_wait(`「咚！咚！咚！」`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 听见办公室的门响了。`,
    ]);
    era.printButton('「请进！」', 1);
    temp = await era.input();
    await me.print_and_wait([
      `门开了，那位给 `,
      me.get_colored_name(),
      ` 带来了不少麻烦的担当，正怯生生的站在门口，如一只担惊受怕的小狐狸，`,
    ]);
    await MF.say_and_wait(`训练员！`);
    await MF.say_and_wait(`那个，这个是送给训练员的开运道具! `);
    await me.print_and_wait([
      `带着明显的歉意，一枚的橙色的御守放在了 `,
      me.get_colored_name(),
      ` 的桌子上。`,
    ]);
    await MF.say_and_wait(`我……我想说……`);
    await MF.say_and_wait(`总之！青叶赏的事情非常抱歉！！！ `);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 揉了揉她冲 `,
      me.get_colored_name(),
      ` 低下的头，直到她的马耳再次欢欣的敲打着 `,
      me.get_colored_name(),
      ` 的手背。`,
    ]);
    await me.print_and_wait(`气氛再次如往常一样变得融洽了起来。`);
    await MF.say_and_wait(`那训练员！下一次比赛的训练安排？ `);
    await me.print_and_wait([
      `按计划，本来是该继续出走日本德比的，但是 `,
      MF.get_colored_name(),
      ` 现在这个情况，或许正常完赛都会是问题。`,
    ]);
    await MF.say_and_wait(`是要取消吗？！ `); // TODO 心理学检定的差分
    await me.print_and_wait([
      `她定然是从 `,
      me.get_colored_name(),
      ` 变得沉默的表情中察觉到了什么，眼瞳里闪烁着不安。`,
    ]);
    era.printButton('（点头）', 1);
    temp = await era.input();
    await me.print_and_wait([
      `「可能要取消」 `,
      me.get_colored_name(),
      ` 这么告诉了她`,
    ]);
    await MF.say_and_wait(`欸欸欸！ `);
    await MF.say_and_wait(`没问题, 绝对没问题的！ `);
    await MF.say_and_wait(`我可以参加比赛的！ `);
    await me.print_and_wait([
      `可以说是谄媚的往 `,
      me.get_colored_name(),
      ` 这边靠拢，不断地对 `,
      me.get_colored_name(),
      ` 说着恳求的话语。`,
    ]);
    await me.print_and_wait([
      `这真的是 `,
      MF.get_colored_name(),
      ` 吗? 倒更像是救助站里尽力在新主人面前表现自己的宠物？`,
    ]);
    era.printButton('「阿福，你在害怕什么吗？」', 1);
    temp = await era.input();
    await MF.say_and_wait(`诶！`);
    await MF.say_and_wait(`不是的！ `);
    await MF.say_and_wait(`我只是……那个…… `);
    await MF.say_and_wait(`唉……`);
    await MF.say_and_wait(
      `训练员一定觉得我很没用吧, 总是吵吵嚷嚷的，现在，现在快连比赛都跑不了了。 `,
    );
    if (sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 2) {
      //担当数是否大于2
      await MF.say_and_wait(`比你的其他担当差了那么多…… `);
    } else {
      await MF.say_and_wait(`第一位担当就是我这样的马娘，是大凶吧。`);
    }
    await MF.say_and_wait(`训练员是姐姐之后，第二个愿意认可我的人……`);
    await MF.say_and_wait(`但我这么没用……`);
    await MF.say_and_wait(`我，我真的很害怕……`);
    await MF.say_and_wait(`训练员也会像是姐姐一样，抛下我一个人吗？`);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 的声音，像是从冰窟中传来。`,
    ]);
    await me.print_and_wait([
      `尽管已临近夏季，但此时，办公室内空气却冻得 `,
      me.get_colored_name(),
      ` 皮肤发脆，仿佛玻璃上都结了霜。`,
    ]);
    era.printButton('「阿福，你还记得我们最开始见面时的仪式吗？」', 1);
    temp = await era.input();
    await me.print_and_wait([` `, me.get_colored_name(), ` 伸出了手`]);
    await MF.say_and_wait(`嗯，拉钩仪式！ `);
    await MF.say_and_wait(`是姐姐教给我的哦，当时和她约定好了……`);
    await MF.say_and_wait(`当时在青叶赏的终盘上……我全想起来了……`);
    await MF.say_and_wait(`连我现在要去菊花赏的目标，也是和她的约定呢。`);
    await me.print_and_wait([
      `和姐姐的约定，难怪 `,
      MF.get_colored_name(),
      ` 会对菊花赏如此看重。`,
    ]);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 的话语声逐渐低了下来，直到变成了那种因为抑制哭泣而变得嘶哑的声音，`,
    ]);
    await me.print_and_wait([
      `早有研究表明，处在高压环境下的人们更容易表现出迷信的行为，为的是尽力让事情回到自己的掌控中。`,
    ]);
    await me.print_and_wait([
      `对于 `,
      MF.get_colored_name(),
      ` 而言，早夭的姐姐，因丧女后而变得有些严厉的母亲，神社充斥着的神秘主义氛围。`,
    ]);
    await me.print_and_wait([
      `姐姐日常用来安慰她的白兴大人，毫无疑问成了她紧握的救命稻草。`,
    ]);
    await me.print_and_wait([
      `而她平日里还能维持那个开朗乐观的表象，只是偶尔会在与 `,
      me.get_colored_name(),
      ` 相处的时候露出一点不对劲来，就已经算是大吉了。`,
    ]);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 注视着你，泛着泪光的失焦眸子，又像是在祈求着不知等在何处的白兴大人的答复。`,
    ]);
    await me.print_and_wait([
      `那么，毫无疑问，现在该是 `,
      me.get_colored_name(),
      ` 把自己的担当拉回现实中的时候了。`,
    ]);
    era.printButton('「不会的！」', 1);
    temp = await era.input();
    era.printButton('「阿福，我不会抛弃你的！」', 1);
    temp = await era.input();
    era.printButton('「和最开始一样，做个约定吧！」', 1);
    temp = await era.input();
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 尽力从把右手从 `,
      MF.get_colored_name(),
      ` 的紧握中挣脱，而后握拳，伸出了自己的小拇指。`,
    ]);
    era.printButton(
      '「当你陷入困惑，陷入痛苦时，请想起我，我会与你一同承担，让我也成为你奔跑的理由之一吧！」',
      1,
    );
    temp = await era.input();
    await MF.say_and_wait(`呜……`);
    await MF.say_and_wait(`训练员……`);
    await me.print_and_wait([
      `她颤颤巍巍地伸出了小拇指，完成了当初神社前别无二致的拉钩仪式。`,
    ]);
    await MF.say_and_wait(`诶嘿……`);
    await me.print_and_wait([
      `琥珀色的瞳光摇晃着，倒映出了 `,
      me.get_colored_name(),
      ` 注视着她的眼眸。`,
    ]);
    era.printButton('「怎么了！」', 1);
    temp = await era.input();
    await me.print_and_wait([
      `她望着 `,
      me.get_colored_name(),
      ` 那过于严肃的表情, 突然破涕为笑。`,
    ]);
    await MF.say_and_wait(
      `没……那个……只是在想……当时占卜出的命定之人是训练员真是太好了！`,
    );
    await MF.say_and_wait(
      `命定之人都这样说了，如果我还宣布日本德比停止出走，不就和参拜不带上祭品没什么两样吗？ `,
    );
    await MF.say_and_wait(`训练员！请相信我吧！ `);
    get_attr_and_print_in_event(56, [7, 0, 7, 7, 0], 0);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks == 68) {
    await print_event_name(`开运投射`, MF);
    era.drawLine({ content: `特雷森学院 训练场` });
    await me.print_and_wait([
      `训练的休息时间， `,
      me.get_colored_name(),
      ` 和 `,
      MF.get_colored_name(),
      ` 靠在栏杆上，有一搭没一搭的聊着。`,
    ]);
    await MF.say_and_wait(`呃……菊花赏……不管怎么想都觉得不行。`);
    await MF.say_and_wait(`从来没有跑过那么长的距离。`);
    await MF.say_and_wait(`不过在那之前，还得跑神户新闻杯。`);
    await MF.say_and_wait(`毕竟，之前的粉丝数，跑菊花赏有点勉强......`);
    era.printButton('「看起来很不安啊？」', 1); // TODO 差分
    await era.input();
    await MF.say_and_wait(`嗯……`);
    await MF.say_and_wait(`占卜不出结果呢……`);
    await MF.say_and_wait(`不过这是和我姐姐的约定！我一定会实现的！`);
    await MF.say_and_wait(`我用拉勾仪式向她保证过的！`);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 在日本德比终盘的冲刺令 `,
      me.get_colored_name(),
      ` 难忘，似乎${MF.sex}完全走出了自己内心的困境。`,
    ]);
    await me.print_and_wait(
      `况且，这种终盘爆发力，倘若利用好的话，势必能成为她出奇制胜的关键。`,
    );
    era.printButton('「可以继续训练了？」', 1); // TODO 差分
    await era.input();
    await MF.say_and_wait(`诶！`);
    await MF.say_and_wait(`嗯……毕竟有训练员陪着我嘛！`);
    await MF.say_and_wait(`训练员是我最强的开运物品哦！`);
    await MF.say_and_wait(`只要命定之人在身边的话！我应该会是无敌的吧！`);
    await me.print_and_wait(`看起来像是开玩笑？`);
    await me.print_and_wait([
      `不， `,
      me.get_colored_name(),
      ` 能确定，${MF.sex}说出这番话的时候是真心的。`,
    ]);
    await me.print_and_wait(`PTSD的疗法之一是精神分析疗法。`);
    await me.print_and_wait(
      `该疗法的理论框架之一是依恋理论，内容大概是解释了各种感情上的联结和纽带。`,
    );
    await me.print_and_wait([
      `如果 `,
      me.get_colored_name(),
      ` 推论正确的话， `,
      MF.get_colored_name(),
      ` ，正在逐步的，把包括 `,
      me.get_colored_name(),
      ` 在内的各项开运物品视为她走到现在的精神支柱，即自我意愿的投射。`,
    ]);
    await me.print_and_wait(`这……应该是好事吧？ `);
    get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 20);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks == 76) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:56:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name(`夏季合宿（经典年）`, MF);

    await me.print_and_wait([
      `炎热的夏季，和 `,
      MF.get_colored_name(),
      ` 一起坐上了前往夏季合宿场所的长途大巴。`,
    ]);
    await me.print_and_wait([
      `脖颈处传来马耳细腻舒服温暖的触感， `,
      MF.get_colored_name(),
      ` 正因为疲倦而靠在 `,
      me.get_colored_name(),
      ` 的肩膀上。`,
    ]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 开始思考起她之后的训练计划起来。`,
    ]);
    await era.waitAnyKey();
    //不知道写什么，不然单纯的就是水了
    return;
  } else if (edu_weeks == 79) {
    await print_event_name(`坠入凡间的星`, MF);
    era.drawLine({ content: `无人岛 沙滩上` });
    await me.print_and_wait([
      `今天，是 `,
      me.get_colored_name(),
      ` 约好了和 `,
      MF.get_colored_name(),
      ` 一起出游的日子。`,
    ]);
    await me.print_and_wait([
      `自乘船抵达此处开始， `,
      MF.get_colored_name(),
      ` 就一直拉着 `,
      me.get_colored_name(),
      ` 在这座并不算大的岛屿上四处乱逛着。`,
    ]);
    await me.print_and_wait([
      `目标是菊花赏的${MF.sex}自然耐力不会差到哪里去，短短几个小时下来， `,
      me.get_colored_name(),
      ` 已经累的不行。`,
    ]);
    await me.print_and_wait(`转眼已是黄昏，是时候该回去了。`);
    await me.print_and_wait(`不过…… `);
    await MF.say_and_wait(`训练员！这边这边！`);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 反倒是愈发的热情了起来。`,
    ]);
    await me.print_and_wait([
      `即使是对于 `,
      MF.get_colored_name(),
      ` 而言，能从今天来到此处就一直保持如此的热情也是颇为罕见的。`,
    ]);
    era.printButton('「好了，该说说看你想干什么了吧？」', 1); // TODO 差分
    await era.input();
    await MF.say_and_wait(`欸嘿嘿！果然是训练员！`);
    await MF.say_and_wait(`一下子就看出来了呢！`);
    await MF.say_and_wait(`那个！今晚有流星雨呢！`);
    await MF.say_and_wait(`想和训练员一起看！`);
    era.printButton('「直接说出来不好吗？」', 1); // TODO 差分
    await era.input();
    await MF.say_and_wait(`呜……要是被训练员拒绝的话，我今天一天都会是大凶了！`);
    era.drawLine({ content: `无人岛 几个小时后` });
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 简单搭起来的营火噼啪作响。`,
    ]);
    await MF.say_and_wait(`喔喔喔！训练员快看！流星雨来了呢！`);
    await MF.say_and_wait(
      `据说，我当时还在妈妈的肚子里的时候，爸爸妈妈也来这里看过流星雨呢！`,
    );
    await MF.say_and_wait(`所以！今天的我不是待兼福来！而是待兼星来！`);
    await MF.say_and_wait(`欸，对了，看流星雨要搭配什么仪式吗？`);
    era.printButton('「奔跑」', 1);
    era.printButton('「许愿」', 2);
    temp = await era.input();
    if (temp === 1) {
      await MF.say_and_wait(`的确如此呢！`);
      await MF.say_and_wait(`能就此获得星空之力也说不定。`);
      await me.print_and_wait([
        `她褪下了鞋袜开始了奔跑，白皙的双脚在奔跑的过程中击打出水花，而后又被身后摆动不已的马尾拂过，以至于让些许甩出的水滴落在了 `,
        me.get_colored_name(),
        ` 的裤腿上。`,
      ]);

      get_attr_and_print_in_event(56, [25, 0, 0, 0, 0], 0);
      await era.waitAnyKey();
    } else if (temp === 2) {
      await MF.say_and_wait(`许愿吗？`);
      await MF.say_and_wait(`嗯……我知道了！`);
      await MF.say_and_wait(`虽然我好像没有什么特别的愿望。`);
      await me.print_and_wait(`她闭上了双眼，双手合十`);
      await me.print_and_wait(
        `橙发少女在营火光芒的照耀下，竟如教堂彩绘玻璃上那些圣光庇佑的修女般圣洁。`,
      );
      get_attr_and_print_in_event(56, undefined, 20);
      await era.waitAnyKey();
    }
    if (era.get('love:56') >= 49) {
      era.drawLine({ content: `一段时间后` });
      if (temp === 1) {
        await me.print_and_wait([
          `奔跑结束后，有些脱力的 `,
          MF.get_colored_name(),
          ` 躺在了 `,
          me.get_colored_name(),
          ` 的怀里，她今天穿着的衬衣已经在刚才的仪式中湿透了，其下因为激烈运动而有些泛红的乳肉若隐若现。`,
        ]);
        await me.print_and_wait([
          `怕她着凉，于是 `,
          me.get_colored_name(),
          ` 把自己的外套脱下来盖在了她的身上。`,
        ]);
        await MF.say_and_wait(`欸嘿嘿，训练员的气味呢。`);
        await me.print_and_wait([
          `她蹭了蹭 `,
          me.get_colored_name(),
          ` 的胸口， `,
          me.get_colored_name(),
          ` 能感受到她乱糟糟的头发划过胸口时的触感。`,
        ]);
      } else if (temp === 2) {
        await me.print_and_wait([
          `结束了祈祷的修女躺在了 `,
          me.get_colored_name(),
          ` 的怀里， `,
          me.get_colored_name(),
          ` 能感受到她乱糟糟的头发划过胸口时的触感。`,
        ]);
        await me.print_and_wait([
          `以及她胸前的那对柔软偶尔挤压着 `,
          me.get_colored_name(),
          ` 时的感觉，似乎她本人倒是完全没有意识到此刻的自己多么的有诱惑力。`,
        ]);
      }
      await MF.say_and_wait(`那个，我今天还有一个愿望哦。`);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 看见 `,
        MF.get_colored_name(),
        ` 的脸微微泛红，不知是否是因为今天的活动过于兴奋了。`,
      ]);
      await MF.say_and_wait(`我想……`);
      era.printButton('「唔！」', 1);
      temp = await era.input();
      await me.print_and_wait([
        `一天下来过于疲倦的 `,
        me.get_colored_name(),
        ` 来不及反应。`,
      ]);
      await me.say_and_wait(`咕……`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 柔软的双唇，和 `,
        me.get_colored_name(),
        ` 的重叠在了一起。`,
      ]);
      begin_and_init_ero(0, 56);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      await me.print_and_wait(
        `唇间溢出的吐息和唾液，带着${MF.sex}的热度与味道`,
      );
      await MF.say_and_wait(`哈……`);
      await MF.say_and_wait(`和，和训练员Kiss了呢！`);
      await MF.say_and_wait(`呼……`);
      await me.print_and_wait([
        `结束之后，${MF.sex}的吐息拂过 `,
        me.get_colored_name(),
        ` 的耳边。`,
      ]);
      end_ero_and_train();
      if (era.get('love:56') > 49 || era.get(`exp:56:性交次数`) > 0) {
        await me.print_and_wait([`要顺势做点什么吗？`]);
        era.printButton('（推倒待兼福来）', 1);
        era.printButton('（算了吧）', 2);
        temp = await era.input();
        if (temp === 1) {
          quick_into_sex(56);
        } else if (temp === 2) {
          get_attr_and_print_in_event(56, [1, 1, 1, 1, 1], 0);
        }
      }
      await era.waitAnyKey();
    }

    return;
  } else if (edu_weeks == 86) {
    await print_event_name(`两世之间`, MF);
    await me.print_and_wait([
      `距离菊花赏只剩下一周了， `,
      me.get_colored_name(),
      ` 能感觉到， `,
      MF.get_colored_name(),
      ` 这段时间变得愈发狂热起来。`,
    ]);
    await me.print_and_wait(
      `虽然往常的训练项目${MF.sex}也会认真执行，但是现在的${MF.sex}就像是一张弦绷的过紧的弓。`,
    );
    await me.print_and_wait([
      `赛前超负荷训练可是大凶， `,
      me.get_colored_name(),
      ` 决定给她放两天假。`,
    ]);
    await MF.say_and_wait(`但是但是！菊花赏已经近在眼前啦！`);
    await MF.say_and_wait(`唔，那训练员陪我出去逛逛吧。`);
    await MF.say_and_wait(`正巧，也一直有想和训练员一起去拜访的地方呢。`);
    era.drawLine({ content: `市郊墓园 通向深处的小路` });
    await me.print_and_wait(`乘着公交车，来到了郊外的墓园。`);
    await me.print_and_wait([
      `随着越发的进入墓园深处，一向欢快的 `,
      MF.get_colored_name(),
      ` 也平静了下来，和周围的环境一同变得肃穆。`,
    ]);
    await MF.say_and_wait(`到了，就是这里。`);
    await me.print_and_wait(`柏树下，在一座并不算小的墓碑前，待兼福停了下来。`);
    await me.print_and_wait([
      `其上的黑白照片中的马娘，和 `,
      MF.get_colored_name(),
      ` 有几分神似，不过倒是留了显得更成熟的长发。`,
    ]);
    await MF.say_and_wait(`嗯……我的姐姐。`);
    await MF.say_and_wait(
      `不过之前总是不想来，即使是妈妈的要求也会尝试拒绝掉。`,
    );
    await MF.say_and_wait(`现在来看应该潜意识的害怕才对。`);
    await me.print_and_wait(`她自顾自地说着。`);
    era.printButton('「需要留你一个人静静吗？」', 1);
    temp = await era.input();
    await MF.say_and_wait(`欸！`);
    await MF.say_and_wait(`不用了！`);
    await MF.say_and_wait(`训练员在这里陪着我就好了！`);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 的声音中，有些许的颤抖。`,
    ]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 看见她的双手紧紧的握在一起，指甲几乎要插进了掌心。`,
    ]);
    await me.print_and_wait(`而后，她缓缓上前。`);
    await MF.say_and_wait(`那个，姐姐，我带着我现在的训练员来看你了……`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 听着 `,
      MF.get_colored_name(),
      ` 对着那方墓碑倾诉着，也许算不上多么庄重，甚至是有些轻松，那种语气就像${MF.sex}的姐姐仍存活于世一样。`,
    ]);
    await me.print_and_wait([
      `从如何与 `,
      me.get_colored_name(),
      ` 相见，到日本德比，再到赢下神户新闻赏， `,
      me.get_colored_name(),
      ` 听着 `,
      MF.get_colored_name(),
      ` 向${MF.sex}去世的姐姐转述着 `,
      me.get_colored_name(),
      ` 和她的经历。`,
    ]);
    era.drawLine({ content: `一段时间后` });
    await MF.say_and_wait(`下周就是菊花赏了呢！ `);
    await MF.say_and_wait(`真是花了好长时间才完完整整的想起来呢……`);
    await MF.say_and_wait(`姐姐， 我会像约好的那样夺下胜利的！`);
    get_skills_and_print_in_event(56, [200841]);
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();
    return;
  } else if (
    edu_weeks === 88 &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1)
  ) {
    await print_event_name(`神化`, MF);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 和 `,
      MF.get_colored_name(),
      ` 一起在办公室里享受着菊花赏后难得的休憩时间。`,
    ]);
    await me.print_and_wait(`菊花赏结束后，紧绷的弦总算得以放松。`);
    await MF.say_and_wait(`训练员,下一场比赛该选什么呢？`);
    era.printButton(`「阿福有什么想跑的吗?」`, 1);
    await era.input();
    await MF.say_and_wait(`唔……`);
    await me.print_and_wait([
      `从姐姐的阴影中走了出来,也实现了想要在菊花赏上奔跑的愿望,但此时的 `,
      MF.get_colored_name(),
      ` ,反倒是显得有些迷惘。`,
    ]);
    await me.print_and_wait([
      `本来懒趴趴的躺在沙发上 `,
      MF.get_colored_name(),
      ` 晃晃悠悠站了起来。`,
    ]);
    await me.print_and_wait(
      `在办公室的沙发上凭借马娘优秀的平衡踱步着，穿着白色织物的玲珑双足交替着踏在沙发上。`,
    );
    //TODO 无声铃鹿的类比
    if (era.get('cflag:2:招募状态') === 1) {
      await me.print_and_wait(`一边摸着下巴一边转着圈。`);
      await me.print_and_wait([
        `思考时的这种独特动作倒让 `,
        me.get_colored_name(),
        ` 想起了自己另一位名叫`,
        SL.get_colored_name(),
        `的担当。`,
      ]);
    }
    await MF.say_and_wait(`硬要说的话，我好像没有什么特别想跑的比赛呢？`);
    await MF.say_and_wait(`直接连着把日本杯和有马纪念都拿下？`);
    era.printButton('「太离谱了吧！」', 1);
    temp = await era.input();
    await MF.say_and_wait(`那就听训练员的指令吧？`);
    await me.print_and_wait([
      `颇为平静的说出了这番话，就像比赛似乎和她是什么无关的事情一样。`,
    ]);
    await MF.say_and_wait(`哈……`);
    await me.print_and_wait([
      `打了个哈欠，名叫 `,
      MF.get_colored_name(),
      ` 的赛马娘，径直向后栽倒在了办公室中央那堆积成山的开运道具中。`,
    ]);
    await me.print_and_wait(`哗啦！`);
    await me.print_and_wait([
      `几个不知装着什么的纸盒被躺倒的 `,
      MF.get_colored_name(),
      ` 挤到了一旁。`,
    ]);
    await me.print_and_wait([
      `略微调整几下，直到能舒舒服服地躺在那赛后亲自采购回来的杂物堆中，`,
      MF.get_colored_name(),
      ` 望向了 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await MF.say_and_wait(`运势到达了极点的我，定能向你呈上胜利！`);
    await MF.say_and_wait(`赶紧下指示吧！带给我幸运的命定之人！`);
    await me.print_and_wait([
      `也许即使是刀山火海， `,
      MF.get_colored_name(),
      ` 也会因为作为她最强开运物品的 `,
      me.get_colored_name(),
      ` 一句能获得大吉的指示，而毫不犹豫的跳进去吧？`,
    ]);
    era.printButton(`「明年的……金鯱赏？」`, 1);
    temp = await era.input();
    await MF.say_and_wait(`明年春天的？训练员选了一场非常遥远的比赛呢。`);
    await me.print_and_wait([
      `躺在开运道具堆上的少女用慵懒的声线回答了 `,
      me.get_colored_name(),
      ` ，而后传来几声呼噜声，她便酣睡了过去。`,
    ]);
    await me.print_and_wait([
      `的确是一场遥远的比赛，但对于今年赛程如此密集的 `,
      MF.get_colored_name(),
      ` ，休息一段时间后再开始是必要的。`,
    ]);
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 106) {
    await print_event_name(`不稳定星等`, MF);
    await me.print_and_wait([
      `接连获得胜利的 `,
      MF.get_colored_name(),
      ` 在金號赏后受到了电视台采访的邀请。`,
    ]);
    await me.print_and_wait([
      `在赛马娘中出身平平无奇的 `,
      MF.get_colored_name(),
      ` 在青叶赏的糟糕表现之后，还能接连取下包括菊花赏在内的几场重赏的冠军，她也算是跑进了众人的视野中。`,
    ]);
    await me.print_and_wait([
      `推不掉，毕竟相较于同期早早就宣称是以挑战速度极限的栗毛赛马娘，还是来自于目白家的长距离赛马娘，除了赛场，胜者live以外，偶尔会在神社露面的 `,
      MF.get_colored_name(),
      ` 可称得上是神秘。`,
    ]);
    await me.print_and_wait(
      `作为她的训练员，理所应当的需要陪她一起接受采访，况且……`,
    );
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 想起了她在金號赏后的表现，似乎在那次比赛之后，意识到什么的 `,
      MF.get_colored_name(),
      ` 又回到了那个不稳定的精神状态。`,
    ]);
    era.drawLine({ content: `演播室内` });
    await MF.say_and_wait(`嗯，是的`);
    await MF.say_and_wait(`也许吧`);
    await MF.say_and_wait(`……`);
    await me.print_and_wait([
      `在赛后的采访中， `,
      MF.get_colored_name(),
      ` 回答的颇为勉强，多亏了 `,
      me.get_colored_name(),
      ` 打的圆场，才让话题风向往着 `,
      MF.get_colored_name(),
      ` 是一个冷静而沉默寡言的马娘导去。`,
    ]);
    await me.print_and_wait([
      `冷静，沉默寡言会和 `,
      MF.get_colored_name(),
      ` 关联到一起？真是令 `,
      me.get_colored_name(),
      ` 难以想象。`,
    ]);
    await me.print_and_wait([
      `好在眼看着这场考验就要抵达尽头， `,
      me.get_colored_name(),
      ` 已经开始计划着之后针对 `,
      MF.get_colored_name(),
      ` 的疗愈方案。`,
    ]);
    await me.print_and_wait(`不对！`);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 被汗浸润的橘发贴在额头上，马耳像是受惊了般竖起来。`,
    ]);
    await me.print_and_wait(`必须要叫停了，然而下一个问题已近被抛了出来。`);
    await me.print_and_wait([`女主持人:「那么，我想问一下…… 」`]);
    await me.print_and_wait([
      `女主持人:「 `,
      MF.get_colored_name(),
      ` 选手目前是为了什么在奔跑呢？ 」`,
    ]);
    await MF.say_and_wait(`为什么`, true);
    await MF.say_and_wait(`胜利吗？`, true);
    await MF.say_and_wait(`奖金吗？`, true);
    await MF.say_and_wait(`还是别的什么？`, true);
    await MF.say_and_wait(`姐姐？`);
    await me.print_and_wait([`女主持人:「嗯？抱歉，能再说一遍吗？」 `]);
    await MF.say_and_wait(`但是……`, true);
    await MF.say_and_wait(`但是我已经跑出来了啊！！！！！`);
    await era.printAndWait(`不不不不不！！！！!`, {
      align: 'center',
      color: get_gradient_color(MF.color, '#ff0000', 0.5),
      fontSize: '24px',
      fontWeight: 'bold',
    });
    await MF.say_and_wait(`唔！`);
    await me.print_and_wait([
      `在昏迷的 `,
      MF.get_colored_name(),
      ` 向后栽倒在地上前， `,
      me.get_colored_name(),
      `  冲了上去，及时扶住了她。`,
    ]);
    await me.print_and_wait([`采访中断。`]);
    era.drawLine({ content: `几天后` });
    await me.print_and_wait([`检查并无大碍，只是需要多休息。`]);
    await MF.say_and_wait(`抱歉，又麻烦训练员了。`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 听着沙发上病怏怏的 `,
      MF.get_colored_name(),
      ` 对 `,
      me.get_colored_name(),
      ` 说着抱歉。`,
    ]);
    await me.print_and_wait(
      `是啊，光是处理在演播室昏迷导致的舆论爆炸，就让你这几天焦头烂额。`,
    );
    await me.print_and_wait([
      `晕倒在演播室的 `,
      MF.get_colored_name(),
      ` ，无疑把 `,
      me.get_colored_name(),
      ` 推上了风口浪尖。`,
    ]);
    await me.print_and_wait([
      `不过，眼下更重要的，还是愈发变得不稳定的 `,
      MF.get_colored_name(),
      ` 。`,
    ]);
    era.set('status:56:凶', 1);
    era.set('status:56:大吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:中吉', 0);
    sys_change_motivation(56, -3);
    get_skills_and_print_in_event(56, [200851]);
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 107) {
    await print_event_name(`落入鲸鱼之腹`, MF);
    await me.print_and_wait([
      `在那次采访之后, `,
      MF.get_colored_name(),
      ` 陷入了低沉。`,
    ]);
    await me.print_and_wait(`今天甚至还翘掉了训练。`);
    await me.print_and_wait(`放不下心。`);
    await me.print_and_wait([
      `虽然${MF.sex}已经给 `,
      me.get_colored_name(),
      ` 留了不用担心她的消息，但是那种不安感还是在 `,
      me.get_colored_name(),
      ` 心中挥之不去。`,
    ]);

    //理论上来说，这里应该有差分
    await MB.say_as_unknown(`福来吗？……没见到呢。`);
    await MT.say_as_unknown(`诶！今天她早上出宿舍就没见过了。`);
    await SL.say_as_unknown(`抱歉……待兼福来的训练员，我也没见到。`);

    await me.print_and_wait([
      `接连询问了几个同学也没得到担当的下落，如果是 `,
      MF.get_colored_name(),
      ` ，现在最有可能会去哪里？ `,
    ]);
    await me.print_and_wait(
      `不，不会是她经常参拜的神社，也不会是学校那些学生们常去的枯树洞。`,
    );
    era.drawLine({ content: `市郊墓园` });
    await me.print_and_wait(
      `橘色的赛马娘正对着那方代表着她已逝姐姐的墓碑发着呆。`,
    );
    era.printButton(`「待兼福来？」`, 1);
    await era.input();
    await MF.say_and_wait(`……训练员！`);
    await MF.say_and_wait(`果然还是被找到了吗?`);
    await MF.say_and_wait(`欸嘿嘿……？`);
    era.printButton(`（使用铁爪)`, 1);
    await era.input();
    await MF.say_and_wait(`啊呜！`);
    await me.print_and_wait([
      `被 `,
      me.get_colored_name(),
      ` 拍到头的少女发出了一声悲鸣。`,
    ]);
    era.printButton(`「需要帮助吗？」`, 1);
    await era.input();
    await MF.say_and_wait(`诶，不用啦！`);
    await MF.say_and_wait(`你看，我现在好多啦！`);
    era.printButton(`「实际呢？」`, 1);
    era.printButton(`「说实话。」`, 2);
    await era.input();
    await MF.say_and_wait(`很害怕……`);
    era.printButton(`「害怕？」`, 1);
    await era.input();
    await MF.say_and_wait(`……嗯。`);
    await MF.say_and_wait(
      `占卜和挑选良辰吉日，真的都很好啊，它们总是在背后为我助力……`,
    );
    await MF.say_and_wait(`从那时起，就一直如此。`);
    await me.print_and_wait([
      `伸手抚摸着大理石墓碑的表面， `,
      MF.get_colored_name(),
      ` 眼中的星星蒙上了一层阴霾。`,
    ]);
    await MF.say_and_wait(`我自打很小的时候，就开始相信占卜了。`);
    await MF.say_and_wait(
      `就这样，大吉之日的我碰到了训练员，强撑着一直往答应姐姐的菊花赏走了下去。`,
    );
    await MF.say_and_wait(
      `本来以为夺下菊花赏之后，只要有着命定之人和开运物品的陪伴，我就会幸福的吧？`,
    );
    await MF.say_and_wait(
      `结果在金鯱赏之后，发现自己还是以前那个缩在姐姐影子里的小马娘。`,
    );
    await MF.say_and_wait(
      `完全不知道为什么要成为赛马娘，只是凭着命定之人的指示踏上赛场罢了……`,
    );
    await MF.say_and_wait(`是不是就此退役比较好呢？`);
    era.printButton(`「为什么？」`, 1);
    await era.input();
    await MF.say_and_wait(`对啊！`);
    await me.print_and_wait(
      `她点了点头，失去高光的星星瞳呆滞地望着墓园里的湖面。`,
    );
    await MF.say_and_wait(
      `没有目标，完全辜负了粉丝，乃至训练员愿望的，被神灵舍弃了的我！`,
    );
    await MF.say_and_wait(
      `就该去当池子里的碎藻，载浮载沉，最后被吞入鱼腹才对啊！`,
    );
    await MF.say_and_wait(`说起来，训练员为什么会支持我到现在呢？`);
    await MF.say_and_wait(`明明我总是犯错，还经常得寸进尺……`);
    era.printButton(`「因为喜欢福来的奔跑」`, 1);
    era.printButton(`「想要实现福来的愿望」`, 2);
    await era.input();
    await MF.say_and_wait(`欸！！！！！！`);
    era.printButton(`「我说了什么奇怪的话吗 ?」`, 1);
    await era.input();
    await MF.say_and_wait(`没有！只是在想……要是我也能说出这样帅气的话就好了。`);
    await MF.say_and_wait(`可光是决定自己下一步要怎么走就分身乏术了。`);
    era.printButton(`「是这样吗？」`, 1);
    await era.input();
    await MF.say_and_wait(`欸？`);
    era.printButton(`「不过，我觉得阿福你也很厉害喔！」`, 1);
    await era.input();
    await MF.say_and_wait(`唔！`);
    era.printButton(`「你是能从别人给你的东西中找出合适的答案的人。」`, 1);
    await era.input();
    await me.print_and_wait(`面前马娘的双耳摆动了起来。`);
    era.printButton(`「我说的没错吧？」`, 1);
    await era.input();
    await MF.say_and_wait(`训练员……`);
    await MF.say_and_wait(`谢谢你，就算只是安慰人的话，我也很开心了。`);
    await MF.say_and_wait(`……明明我也让训练员和支持自己的粉丝们失望了。`);
    era.printButton(`「那么在宝冢纪念上给大家赔罪吧！」`, 1);
    await era.input();
    await MF.say_and_wait(`嗯！`);
    await MF.say_and_wait(`嗯？啊啊啊，不行，绝对不行的啊！`);
    await MF.say_and_wait(`宝冢纪念——不就是必须要粉丝投票后才能参加的比赛吗？`);
    await me.print_and_wait([
      `安慰着声音正不断变大的 `,
      MF.get_colored_name(),
      ` ， `,
      me.get_colored_name(),
      ` 开始替她思考起粉丝感谢祭拉票的办法。`,
    ]);
    await era.println();
    era.set('status:56:PTSD', 0);
    era.printMultiColumns([
      {
        content: [` `, MF.get_colored_name(), `  的PTSD暂时失去了。`],
        type: 'text',
      },
    ]);
    get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 120) {
    await print_event_name(`无愿之愿`, MF);
    era.drawLine({ content: `待兼福来家的神社` });
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 如往常一样，站在神社的摇铃前`,
    ]);
    await MF.say_and_wait(`呼呼！那么，接下来该许愿了！`);
    await MF.say_and_wait(`希望未知的下一场比赛……`);
    await MF.say_and_wait(
      `欸！不管是什么，总之神明只需要看着我就好了，我会自己完成的！`,
    );
    await MF.say_and_wait(`来许个别的愿望吧……`);
    await me.print_and_wait(
      `然而在低头思索了一阵之后，原本静心凝神的少女突然发出了她标志性的怪叫声。`,
    );
    await MF.say_and_wait(`呃 ！ 咦咦~？唉呀？`);
    await me.print_and_wait(`随后一溜烟冲出了神社。`);
    era.drawLine({ content: `${me.actual_name}的办公室内` });
    await me.print_and_wait([
      `橙发的少女火急火燎地推开了 `,
      me.get_colored_name(),
      ` 办公室的门，冲了进来。`,
    ]);
    era.printButton(`「怎么了？」`, 1);
    await era.input();
    await MF.say_and_wait(`训练员！大事不好了！`);
    await MF.say_and_wait(`身为占卜之子的我！竟然没有愿望可以许！`);
    await MF.say_and_wait(`好缘分，想实现的愿望什么的，都已经实现了。`);
    await MF.say_and_wait(`是不是又和当时菊花赏结束后一样呢？`);
    era.printButton(`「那不是表现你现在很满足吗？」`, 2);
    await era.input();
    await MF.say_and_wait(`满足？`);
    await MF.say_and_wait(
      `嗯……的确欸，未来的目标有了点眉头，训练员也待在我身边，还有一群支持自己的粉丝。`,
    );
    await MF.say_and_wait(`粉丝……`);
    await MF.say_and_wait(
      `对了！训练员，我想用一场比赛，来好好回应那些支持我走到现在的粉丝！`,
    );
    await MF.say_and_wait(`训练员有什么建议吗？`);
    era.printButton(`「同样由粉丝投票决定的有马纪念？」`, 1);
    era.printButton(`「连着拿下日本杯和有马纪念？」`, 2);
    temp = await era.input();
    if (temp === 2) {
      await MF.say_and_wait(`啊啦，不要再调笑我了！`);
      await MF.say_and_wait(
        `我知道当时说的有些过于夸张了，不过，单论有马纪念的话，还是没问题的！`,
      );
      await MF.say_and_wait(`决定了！就有马纪念吧！`);
    }
    era.drawLine({ content: `待兼福来家的神社` });
    await MF.say_and_wait(
      `上一次的宝冢纪念，我是因为跟信徒一样的粉丝大发慈悲才能够参加的。`,
    );
    await MF.say_and_wait(`而这次我想靠自己的力量好好拉票，然后参加比赛。`);
    await MF.say_and_wait(
      `我想把许多的愿望全都集合起来，在年底的中山一次实现。`,
    );
    await MF.say_and_wait(`在自己的愿望实现后，这次轮到我来带给大家快乐了！`);
    await MF.say_and_wait(`只要我在有马纪念中获胜，大家也能获得幸福吧？`);
    await me.print_and_wait([
      `目光转向了 `,
      me.get_colored_name(),
      ` ，她的神情看起来十分坦然，如果说是被神佛宠爱的赛马娘也不为过吧。`,
    ]);
    era.printButton(`「是啊。」`, 1);
    era.printButton(`「一定吧！」`, 1);
    await era.input();
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 点了点头表示赞同。`,
    ]);
    await MF.say_and_wait(`仔细想想，在神明面前，也并不是只有许愿呢！`);
    await me.print_and_wait(
      `橙发的少女向前踏出了一步，尽管还是穿着校服，神态却逐渐变得和作法时的巫女一样庄严。`,
    );
    await MF.say_and_wait(`坐镇于此地的神明啊！请收下我的誓约吧！`);
    await MF.say_and_wait(`我绝对！会在有马纪念中获胜！`);
    await MF.say_and_wait(`这是为了把幸福送给让我对自己重拾信心的人们！`);
    await me.print_and_wait(`严肃凛然的声音在黄昏的逢魔时刻的回荡。`);
    await me.print_and_wait(`却意外让人觉得神圣。`);
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();
    return;
  } else if (edu_weeks === 95 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:56:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name(`夏季合宿（资深年）`, MF);
    await me.print_and_wait([
      `炎热的夏季，和 `,
      MF.get_colored_name(),
      ` 一起坐上了前往夏季合宿场所的长途大巴。`,
    ]);
    await me.print_and_wait([
      `脖颈处传来马耳细腻舒服温暖的触感， `,
      MF.get_colored_name(),
      ` 正因为疲倦而靠在 `,
      me.get_colored_name(),
      ` 的肩膀上。`,
    ]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 开始思考起她之后的训练计划起来。`,
    ]);
    await era.waitAnyKey();

    return;
  } else if (
    edu_weeks === 126 &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1)
  ) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:56:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    } else {
      await print_event_name(`林中参拜`, MF);
      await me.print_and_wait([
        `今天是盂兰盆节的最后一天，按习俗是将纸灯放入河中漂流，指引逝去亲人返回黄泉的日子。`,
      ]);
      await me.print_and_wait([
        `夜晚，勉强能分辨出来路的树林中，身着浅绿色浴衣的 `,
        MF.get_colored_name(),
        ` 扒开了挡路的树枝，露出了一处人迹罕至的河岸。`,
      ]);
      await me.print_and_wait([
        `夏合宿地点旁的河流，已有些许暖橙色的灯火浮在其上。`,
      ]);
      await MF.say_and_wait([`那么，最后一天的仪式，就在这里进行吧！`]);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 将肩膀上扛着的布袋放下，弄出了一阵重物坠地的明显声响。`,
      ]);
      era.printButton(`「今天的计划是？」`, 1);
      era.printButton(`「这里面是？」`, 2);
      temp = await era.input();
      await MF.say_and_wait([`是这样的！`]);
      await MF.say_and_wait([`我想借着这次机会，顺带和过去的我告别！`]);
      await me.print_and_wait([`她打开了那个布袋，里面是各式的开运物品。`]);
      await me.print_and_wait([
        `一些先前在福来宿舍见过的，部分是曾放在你办公室的，而菊花赏买回来的那些东西则占了一大部分。`,
      ]);
      await MF.say_and_wait([
        `唔……现在宿舍和训练室那边应该只留下了100多个的样子！`,
      ]);
      await MF.say_and_wait([
        `至于放在训练员家里的！就送${me.actual_name}了！`,
      ]);
      era.printButton(`「还是很多呀……」`, 1);
      era.printButton(`「那我就满怀感激的收下了！」`, 2);
      temp = await era.input();
      if (temp === 1) {
        await MF.say_and_wait([`啊！明明已经精挑细选了好久才选出这些的！`]);
        await me.print_and_wait([
          `被你指出问题之后的少女有些气鼓鼓地瞪了 `,
          me.get_colored_name(),
          ` 一眼。`,
        ]);
      } else {
        await MF.say_and_wait([
          `本来想把水晶球也送给训练员的！不过之后说不定还有要用的时候！`,
        ]);
      }
      await era.println();
      await me.print_and_wait([
        `小旗帜，带着折痕的扑克牌，木制的人偶就这样被掷入了河中，混入暖橙色的灯火一起向着下游流去。`,
      ]);
      await MF.say_and_wait([`欸！话说这样会不会污染环境啊！`]);
      await me.print_and_wait([
        `在 `,
        me.get_colored_name(),
        ` 告诉 `,
        MF.get_colored_name(),
        ` ，已经事先通知了负责人，所以下游会有阻拦网收集并集中焚烧后，少女总算可以放心的放流起她的开运物品来。`,
      ]);
      era.drawLine({ content: `一段时间后` });
      await MF.say_and_wait([`那么，就用这盏纸灯作为今天的结束吧？`]);
      await me.print_and_wait([
        `被火光暖成橙色的方形纸灯浮在水面上，可灯却像是被钉死了一样在河中浮着。`,
      ]);
      await MF.say_and_wait([`哈……`]);
      await me.print_and_wait([`无论如何，已是午夜，是时候该回去了。`]);
      await me.print_and_wait([
        `看来犯迷糊的 `,
        MF.get_colored_name(),
        ` 不怎么记得路的样子，她那随着迷路而愈发焦急的步伐让身为人类的 `,
        me.get_colored_name(),
        ` 有些跟不上。`,
      ]);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 的担当近乎发狂一般的撞开前面挡路的枝杈，浅绿色的浴衣在黑暗的森林中若隐若现， `,
        me.get_colored_name(),
        ` 要跟丢了。`,
      ]);
      era.printButton(`「待兼福来！」`, 1);
      era.printButton(`「等一下！」`, 2);
      temp = await era.input();
      await me.print_and_wait(
        `然而无论你怎么喊，跑在前面的马娘却似没听到般继续往树林的深处奔去。`,
      );
      await me.print_and_wait(
        `声音在漆黑的林中回响，目光所及范围内，现在只剩下了 `,
        me.get_colored_name(),
        ` 一人。`,
      );
      await me.print_and_wait([
        `扶着一旁的树干， `,
        me.get_colored_name(),
        ` 气喘吁吁的肺总算得以休息，但是……现在该怎么办？`,
      ]);
      await me.print_and_wait([`哗啦！`]);
      await me.print_and_wait([
        `有树叶被掀开的声音自身后传来，会是 `,
        MF.get_colored_name(),
        ` 吗？不过，听说这附近也有熊出没……担当不在身边的 `,
        me.get_colored_name(),
        ` ，是不是该躲一下比较好？`,
      ]);
      await MF.say_as_unknown_and_wait(`喂！`);
      await MF.say_as_unknown_and_wait([
        ``,
        me.get_colored_actual_name(),
        `先生！`,
      ]);
      await MF.say_as_unknown_and_wait(`在这里！`);
      await me.print_and_wait([
        `回头看去，笑意盈盈的 `,
        MF.get_colored_name(),
        ` 正站在你的身后。`,
      ]);
      await MF.say_and_wait(`那么！为了防止你再次掉队。`);
      await MF.say_and_wait(`请握住我的手吧！`);
      era.printButton(`（伸手）`, 1);
      era.printButton(`（当然是伸手了）`, 2);
      temp = await era.input();
      era.drawLine({ content: `一段时间后` });
      await me.print_and_wait([
        `看样子是被带回到了大路上， `,
        me.get_colored_name(),
        ` 和 `,
        MF.get_colored_name(),
        ` 走着走着，眼前出现了一个分岔路口。`,
      ]);
      await MF.say_and_wait(`那么！走这边怎么样？`);
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 身旁的 `,
        MF.get_colored_name(),
        ` ，指向了左边的路口。`,
      ]);
      era.printButton(`（走左边）`, 1);
      era.printButton(`（走右边）`, 2);
      let direction = 0;
      temp = await era.input();
      while (temp === 2) {
        direction = direction + 1;
        await me.print_and_wait([
          ` `,
          me.get_colored_name(),
          ` 与 `,
          MF.get_colored_name(),
          ` 走着走着，眼前出现了一个分岔路口。`,
        ]);
        await MF.say_and_wait(`那么！走这边怎么样？`);
        await me.print_and_wait([
          ` `,
          me.get_colored_name(),
          ` 身旁的 `,
          MF.get_colored_name(),
          ` ，指向了左边的路口。`,
        ]);
        era.printButton(`（走左边）`, 1);
        era.printButton(`（走右边）`, 2);
        temp = await era.input();
        if (direction === 3) {
          await me.print_and_wait([
            `兜兜转转，总算是走出来了，远处宿舍楼的灯光依稀可见……`,
          ]);
          return;
        }
      }
      if (temp === 1) {
        await me.print_and_wait([
          `树木变得稀疏，视野所及之处总算是变得明亮了起来，直到 `,
          me.get_colored_name(),
          ` 的眼前出现了一片废墟。`,
        ]);
        await me.print_and_wait([
          `爬满了绿蔓的鸟居，正立于这片残骸上，看样子是某个废弃了许久的神社。`,
        ]);
        await MF.say_and_wait(`啊啦啦，真的很好运呢！`);
        await MF.say_and_wait(`没想到这里还有如此特殊的能量之地。`);
        await me.print_and_wait([
          ` `,
          MF.get_colored_name(),
          ` 牵着 `,
          me.get_colored_name(),
          ` 的手跨过了倒塌的拜殿屋顶。`,
        ]);
        await MF.say_and_wait(`唔！感觉灵力非常的充裕呢！`);
        await MF.say_and_wait([
          `那么，`,
          me.get_colored_actual_name(),
          `先生，有什么想要我占卜的吗？`,
        ]);
        era.printButton(`（该回去了吧？）`, 1);
        era.printButton(`（能问个问题吗？）`, 2, {
          disabled: era.get('love:56') < 75,
        }); // 好感度解锁
        temp = await era.input();
        if (temp === 1) {
          await MF.say_and_wait(`这样吗？`);
          await MF.say_and_wait(`那就回去吧！`);
          await me.print_and_wait([
            `之后， `,
            MF.get_colored_name(),
            ` 和 `,
            me.get_colored_name(),
            ` 回去了，看来 `,
            MF.get_colored_name(),
            `  累的不行，躺下就呼呼大睡。`,
          ]);
          await era.waitAnyKey();
          return;
        }
        await MF.say_and_wait(`当然啦，什么都可以！`);
        await me.print_and_wait([
          `面前的马娘，单论外表，样子的确和 `,
          me.get_colored_name(),
          ` 的担当一模一样，连笑的方式也没有差别。`,
        ]);
        await me.print_and_wait([
          `但是，从无声无息地出现在 `,
          me.get_colored_name(),
          ` 的背后，称呼的突然变化，到把 `,
          me.get_colored_name(),
          ` 引到这里，违和感数不胜数。`,
        ]);
        era.printButton(`「你是谁？」`, 1);
        temp = await era.input();
        await MF.say_and_wait(`……啊哈哈。不愧是那孩子的训练员/引路人。`);
        await me.print_and_wait([
          `以 `,
          MF.get_colored_name(),
          ` 的身姿出现的少女，微微笑着。`,
        ]);
        await me.print_and_wait([
          `明明就站在 `,
          me.get_colored_name(),
          ` 的面前开口说话，但她的答复却像是直接出现在 `,
          me.get_colored_name(),
          ` 的意识中一样。`,
        ]);
        await MF.say_and_wait(
          `抱歉借用了自家巫女/你担当的身体，不过，自从她找到了命定之人，就想抽空来聊聊呢。`,
        );
        await MF.say_and_wait(`嗯……你看起来倒是不怎么惊讶的样子`);
        era.printButton(`（毕竟我是待兼福来的训练员）`, 1);
        era.printButton(`（这种事情出现在她身上，也不算离奇吧？）`, 2); // 好感度解锁
        temp = await era.input();
        await MF.say_and_wait(`啊啦！`);
        await MF.say_and_wait(
          `话虽如此，在她姐姐去世前，她也并不热衷于占卜和咒术，以前啊，总是追着她姐姐的后背走，每次有什么事都叫她。`,
        );
        await MF.say_and_wait(`很麻烦吧？`);
        era.printButton(`（点头）`, 1);
        era.printButton(`「的确，我也经常一有事就被那家伙叫来叫去」`, 2);
        temp = await era.input();
        await me.print_and_wait([
          `注视着她明明在看着 `,
          me.get_colored_name(),
          ` ，却又好像凝视着什么遥远地方的双瞳， `,
          me.get_colored_name(),
          ` 做出了回答。`,
        ]);
        if (
          sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 2
        ) {
          await MF.say_and_wait(`帮助她了却了菊花赏的约定，真的很厉害。`);
        } else {
          await MF.say_and_wait(`第一位担当就能拿下菊花赏，真的很厉害。`);
        }
        await MF.say_and_wait(
          `作为被她信仰的神明大人，我倒觉得自己挺失败的，明明自己有个灵力如此出众的巫女。`,
        );
        await MF.say_and_wait(
          `却没能在她最需要的时候出现，也没能在她最痛苦的时候开导她，只能偶尔在她的梦中出现，给她一些提示的样子。`,
        );
        await MF.say_and_wait(`呜呜呜……还是信众太少了呀，。`);
        await MF.say_and_wait(
          `不过，人多起来的话，我也没办法一直关注着她吧，是好事也不一定？`,
        );
        await me.print_and_wait([
          `凭依在 `,
          me.get_colored_name(),
          ` 担当身上的神明，说到这开始下意识地揉着自己的头发，该说是和 `,
          MF.get_colored_name(),
          ` 一个模子刻出来的吗？`,
        ]);
        await MF.say_and_wait([` `, me.get_colored_actual_name(), ` 先生`]);
        era.printButton(`「在？」`, 1);
        era.printButton(`「什么事？」`, 2);
        temp = await era.input();
        await MF.say_and_wait([
          ` `,
          me.get_colored_name(),
          ` 是她的训练员真是太好了！`,
        ]);
        await me.print_and_wait(
          `被自家神灵操控着身体的待兼福来眨了几下眼睛，之后脱力般地倒入了你的怀里。`,
        );
        let str = `这孩子就拜托你了，她的命中注定之人`;
        let message = [];
        for (let i = 1; i <= str.length; i++) {
          message = str.slice(0, i);
          era.print('<' + message + `>`, {
            align: 'center',
            color: MF.color,
            fontSize: '36px',
            fontWeight: 'bold',
          });
          await era.delay(150);
          if (i != str.length) {
            await era.clear(1);
          }
        }

        era.set('status:56:稳定', 1);
        era.printMultiColumns([
          {
            content: [` `, MF.get_colored_name(), `  的身体微微发热。`],
            type: 'text',
          },
        ]);
        get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
        await era.waitAnyKey();
      }
    }

    await era.waitAnyKey();
    return;
  } else if (
    edu_weeks === 132 &&
    check_aim_race(races, race_enum.kiku_sho, 1, 1)
  ) {
    await print_event_name(`每个人的天命`, MF);
    era.drawLine({ content: `市郊墓园` });
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 看见自己橘色头发的担当轻抚着大理石墓碑的表面。`,
    ]);
    await me.print_and_wait([
      `和菊花赏前那次一样，在低声轻语了一阵后， `,
      MF.get_colored_name(),
      ` 转过身来冲 `,
      me.get_colored_name(),
      ` 点了点头。`,
    ]);
    era.printButton(`「该回去了吗？」`, 1);
    await era.input();
    await MF.say_and_wait(`……嗯。`);
    await me.print_and_wait([
      `即使走出了墓园， `,
      MF.get_colored_name(),
      ` 也没恢复那个往常欢快的样子。`,
    ]);
    era.printButton(`「怎么了？」`, 1);
    await era.input();
    await MF.say_and_wait(
      `拿下菊花赏，走出了姐姐的阴影，还有和训练员在一起的日子。`,
    );
    await MF.say_and_wait(`这三年对我来说简直就像是梦一样。`);
    await me.print_and_wait([
      `说完这番话的少女再次陷入了沉默， `,
      me.get_colored_name(),
      ` 们二人就这样走在返程的路上，看着道路两侧如 `,
      MF.get_colored_name(),
      ` 发色般的枫叶不停落下。`,
    ]);
    await me.print_and_wait([
      `直到 `,
      me.get_colored_name(),
      ` 察觉到她拉了拉 `,
      me.get_colored_name(),
      ` 的衣袖。`,
    ]);
    await MF.say_and_wait(`对了！`);
    await MF.say_and_wait(`训练员！之前提到的自己今后的目标！`);
    await MF.say_and_wait(
      `关于怎么获得自己今后最强最大的大吉级幸福，我已经完全想好了！`,
    );
    era.printButton(`「是什么呢？」`, 1);
    era.printButton(`「能告诉我吗？」`, 2);
    temp = await era.input();
    if (temp === 2) {
      await MF.say_and_wait(`当然没问题！`);
    }
    await MF.say_and_wait(`那就是——继续这样追逐着运势跑下去！`);
    await MF.say_and_wait(`不过可不是和之前一样只是一味的怨天尤人！`);
    await MF.say_and_wait(`而是无论运势无论如何都会去面对的样子！`);
    await MF.say_and_wait(`该说的话，就是享受命运为我准备的每一道菜吗？`);
    era.printButton(`「说出了很帅的话呢！」`, 1);
    era.printButton(`「听起来很帅呢！」`, 2);
    await era.input();
    await MF.say_and_wait(`欸！`);
    await MF.say_and_wait(`正是如此！`);
    await me.print_and_wait([
      `到了兴奋之处的 `,
      MF.get_colored_name(),
      ` 索性跑了起来，为素白色的冬日染上了一丝活力。`,
    ]);
    if (era.get('love:56') >= 75) {
      await me.print_and_wait([
        `似乎是突然想到了什么，眼看着就要跑出视线的 `,
        MF.get_colored_name(),
        ` 再次冲了回来，拉住了 `,
        me.get_colored_name(),
        ` 的手。`,
      ]);
      await MF.say_and_wait(`对了！训练员！`);
      await MF.say_and_wait(`你也要呆着我的身边才行啊！`);
    }
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 蹦蹦跳跳的跑在了 `,
      me.get_colored_name(),
      ` 的身前 , 笑容再次回到了她的脸上。`,
    ]);
    await me.print_and_wait(
      `明亮橙发在秋日空中翻飞的落叶中若影若现，闪耀着金色的光芒。`,
    );
    await me.print_and_wait([
      `有马纪念就在眼前， `,
      MF.get_colored_name(),
      ` 也在这个时候找到了属于自己的道路。`,
    ]);
    await me.print_and_wait(
      `相信无论接下来的签筒中会有什么样的结果，她都能坦然接受吧？`,
    );
    // 失去了自卑
    era.set('talent:56:自信程度', 0);
    era.printMultiColumns([
      {
        content: [` `, MF.get_colored_name(), `  不再 [自卑] 了！`],
        type: 'text',
      },
    ]);
    get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    await era.waitAnyKey();

    return;
  } else if (edu_weeks === 143 + 9) {
    await palace(MF, me);

    if (FUKU.good_end === 1 && love > 75 && era.get(`cflag:56:殿堂`) === 2) {
      // 并且进殿堂
      await print_event_name('两个世界的主人', MF);
      await me.print_and_wait(
        `有马纪念上的表演为神社带来的人气来的快，去的也快。`,
      );
      await me.print_and_wait([
        `神社再次变回了如 `,
        me.get_colored_name(),
        ` 最初遇见 `,
        MF.get_colored_name(),
        ` 时寂寥无人的样子。`,
      ]);
      await me.print_and_wait(
        `若要说有什么不同的话，也许就是参拜客多了许多以菊花赏为目标的赛马娘吧。`,
      );
      await me.print_and_wait(`以及……`);
      await MF.say_and_wait(`幸苦了，训练员！`);
      await me.print_and_wait([
        `穿着巫女的装束的 `,
        MF.get_colored_name(),
        ` 抓住了 `,
        me.get_colored_name(),
        ` 的胳膊。`,
      ]);
      await MF.say_and_wait(`让你做这些杂务真是不好意思……`);
      await me.print_and_wait([
        `本来只是应对因为有马纪念突然增加的参拜客，但来神社帮忙的这一习惯还是被 `,
        me.get_colored_name(),
        ` 保留了下来。`,
      ]);
      await me.print_and_wait([
        `毕竟 `,
        MF.get_colored_name(),
        ` 的闪光系列赛才刚刚结束，不知下一位合拍的担当会在什么时候遇见。`,
      ]);
      await MF.say_and_wait(`去休息一下吧！`);
      await me.print_and_wait(
        `并肩走在夕阳照耀下的神社，巫女的木屐在石板路上哒哒响着。`,
      );
      await me.print_and_wait([
        `直到眼前的 `,
        MF.get_colored_name(),
        ` 停下了脚步。`,
      ]);
      await me.print_and_wait([
        `面前是熟悉的塞钱箱，最早， `,
        me.get_colored_name(),
        ` 便是和 `,
        MF.get_colored_name(),
        ` 在这里遇见的。`,
      ]);
      await MF.say_and_wait(`说起来，训练员先生再过几个月就要迎来新担当了吧。`);
      await MF.say_and_wait(`需要我帮你祈福一下吗？`);
      era.printButton(`（点头）`, 1);
      era.printButton(`（摇头）`, 2);
      temp = await era.input();
      if (temp === 1) {
        await me.print_and_wait(
          `她尝试挥动了一下御币，却又迅速的停了下来，眉头紧皱。`,
        );
        await MF.say_and_wait(
          `……果然，如果是为了这个的话，完全没法全心全意啊。`,
        );
      } else if (temp === 2) {
        await MF.say_and_wait(`猜到了！`);
        await MF.say_and_wait(`不过，要是训练员同意我大概也不会做吧。`);
      }
      await me.print_and_wait([
        `又陷入了沉默，直到不断落下的残阳为 `,
        MF.get_colored_name(),
        ` 披上了金色的头纱。`,
      ]);
      await me.print_and_wait([
        `将御币放在一旁的塞钱箱上， `,
        MF.get_colored_name(),
        ` 打破了沉默。`,
      ]);
      await MF.say_and_wait(`训练员听说过逢魔时刻吗？`);
      era.printButton(`（点头）`, 1);
      era.printButton(`（摇头）`, 2);
      temp = await era.input();
      await MF.say_and_wait(
        `嗯！也就是黄昏时分，据说这是两世交汇的时刻，也是神魔最容易干涉人间的时刻。`,
      );
      await MF.say_and_wait(`这样的话……`);
      await MF.say_and_wait(
        `跨越了有马纪念的考验，进入了殿堂，勉勉强强算是成为了神明的我。`,
      );
      await MF.say_and_wait(`不知道能不能借此实现自己的愿望呢？`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 紧握的右手伸到了 `,
        me.get_colored_name(),
        ` 的面前，而后，伸出了她的小拇指。`,
      ]);
      await me.print_and_wait([
        `是 `,
        me.get_colored_name(),
        ` 熟悉的，拉钩仪式的邀请。`,
      ]);
      await MF.say_and_wait(`今后，会陪我一直走下去吧？`);
      await MF.say_and_wait(`我的训练员……`);
      await MF.say_and_wait(`我的命定之人……`);
      await MF.say_and_wait(`以及……`);
      await me.print_and_wait(
        `少女的声音逐渐变得细若蚊鸣，绯红随着温暖的夕阳染上了她的脸颊。`,
      );
      await me.print_and_wait(`她抬起头来，瞳中星光闪烁。`);
      await MF.say_and_wait(`我的爱人。`);
      era.println();

      await era.waitAnyKey();
    } else {
      await palace_relation(MF, me);
    }

    return;
  }
};

handlers[event_hooks.week_end] = async () => {
  let temp = 0;
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const edu_weeks = era.get('cflag:56:育成回合计时');
  if (edu_weeks === 144) {
    //  await print_event_name(`骰子已经掷下`,MF);
    await print_event_name(`了局`, MF);
    await me.print_and_wait([
      `和 `,
      MF.get_colored_name(),
      ` 充满了怪力乱神的三年总算是要结束了，也该把物色新担当的计划提上日程了。`,
    ]);
    await me.print_and_wait([`不过，在那之前，还有些事情要忙。`]);
    await me.print_and_wait([
      `这三年中存放在办公室里的，存放在你家里的，经过 `,
      MF.get_colored_name(),
      ` 放流后仍剩下一些的开运道具，也该物归原主了，简单的同楼下 `,
      MF.get_colored_name(),
      ` 的妈妈问了声好， `,
      me.get_colored_name(),
      ` 踏入了福来家的阁楼。`,
    ]);
    await MF.say_and_wait(`啊！训练员先生，总算是来了！`);
    await me.print_and_wait([
      `盘坐在木质的地板上的 `,
      MF.get_colored_name(),
      ` ，被阁楼中的泛黄古籍与各式古物所包围。`,
    ]);
    await me.print_and_wait([
      `不过，看她熟练的穿进穿出的样子，倒不如说这里是属于她的领域才对。`,
    ]);
    await MF.say_and_wait(`之后把这些东西就放在这里吧！`);
    await me.print_and_wait([
      `她开始有序的把那些经过筛选后的物品摆在空余的架子上，和一旁章鱼脸的雕像，荧光的偏三方八面体之类的奇怪物品并列在一起。`,
    ]);
    await me.say_and_wait(`好多东西呢`);
    await MF.say_and_wait(`嗯，不止有我自己收集的东西。`);
    await MF.say_and_wait(
      `有些参拜客放在神社除祟的但之后没有拿回去的东西，之后也会流落到这里来。`,
    );
    await MF.say_and_wait(`所以就算是上个世纪的东西也有可能在里面找到哦！`);
    await me.print_and_wait([
      `看来 `,
      MF.get_colored_name(),
      ` 的囤积癖居然是家族遗传。`,
    ]);
    await me.print_and_wait([
      `整理继续，房间里静的只能听见 `,
      MF.get_colored_name(),
      ` 的脚步声。`,
    ]);
    await MF.say_and_wait(`话说，我同命定之人的契约已经结束了。`);
    await me.print_and_wait([
      `在 `,
      me.get_colored_name(),
      ` 试图辨认出一旁古籍上文字来打发时间的时候，架子后突然传来 `,
      MF.get_colored_name(),
      ` 的声音，过了好久，她才说出另一句话。`,
    ]);
    await MF.say_and_wait(`那个，命定之人之后的打算是什么呢？`);
    era.printButton('继续以训练员的身份干下去吧?', 1);
    era.printButton('已经有在计划招募新担当了', 2);
    temp = await era.input();
    if (temp === 1) {
      await MF.say_and_wait(`嗯……毫不意外呢`);
    } else if (temp === 2) {
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 从架子缝隙中看见 `,
        MF.get_colored_name(),
        ` 的耳朵抽动了一下。`,
      ]);
    }
    await me.say_and_wait(`那福来呢？`);
    await MF.say_and_wait(`大概……继承家里的神社？`);
    await MF.say_and_wait(`毕竟这三年下来，神社的香火甚至比以前还旺呢。`);
    await MF.say_and_wait(`去读大学也有可能？`);
    await MF.say_and_wait(
      `我应该能申请到密斯卡托尼克大学的民俗学吧，进入特雷森的大学部也不是什么困难的事情。`,
    );
    await me.print_and_wait(`就这样自顾自的推演着，马尾一下一下的拍打着。`);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 变得认真了许多，平日里那种不正经的样子也消失了。`,
    ]);
    await MF.say_and_wait(`唉……`);
    await MF.say_and_wait(`总之，还是先等殿堂的评选结果出来后再说吧。`);
    await me.print_and_wait([`她将一颗水晶球从架子上取了下来，用布包好。`]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 记得这是她在出道战之后，恳求了好久 `,
      me.get_colored_name(),
      ` 才同意买的奖励。`,
    ]);
    await MF.say_and_wait(`命定之人，请把这个摆在你的办公室里吧。`);
    await MF.say_and_wait(
      `毕业后,就算我不在训练员先生身边了，我相信它也会给你带来好运的 ！`,
    );
    await me.print_and_wait([
      `之后听着 `,
      MF.get_colored_name(),
      ` 逐个介绍起那些物品的历史。`,
    ]);
    await me.print_and_wait([`或许就这样悠闲的等到殿堂评选结果出来也不错。`]);

    await era.waitAnyKey();
  }

  return;
};

handlers[event_hooks.office_rest] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.office_rest, event_object);
    return;
  }

  return;
};

handlers[event_hooks.out_station] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.out_station, event_object);
    return;
  }
};

handlers[event_hooks.talk] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.talk, event_object);
    return;
  }
};

handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  const MF = get_chara_talk(56);

  const FUKU = new FukuEventMarks();

  era.print([MF.get_colored_name(), ' 的训练顺利结束了！']);
  era.println();

  if (extra_flag.train + 1 === FUKU.luck_train) {
    /*wait_flag =
    get_attr_and_print_in_event(56, [25, 0, 0, 0, 0], 0) || wait_flag;*/
    // add to the train
    await MF.say_and_wait(`是契合运势的选择呢！`, MF);
    let luck_add = [1, 1, 1, 1, 1];
    // luck_add[extra_flag.train] = Math.floor(Math.random() * 16 + 5);
    // random 0 -15
    get_attr_and_print_in_event(56, luck_add, 0);
  }

  return true;
};

handlers[event_hooks.out_church] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.out_church, event_object);
    return;
  }

  const FUKU = new FukuEventMarks();

  if (FUKU.shrine_keeper === 1) {
    //await print_event_name(`神社的大危机`, MF);
  }
};

handlers[event_hooks.out_start] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.out_start, event_object);
    return;
  }
  const MF = get_chara_talk(56);

  const me = get_chara_talk(0);

  const FUKU = new FukuEventMarks();
  const love = era.get('love:56');
  let temp = 0;
  if (FUKU.hot_line === 1) {
    FUKU.hot_line++;
    await print_event_name(`热线电话`, MF);
    await me.print_and_wait([
      `被兴冲冲的 `,
      MF.get_colored_name(),
      ` 拉着在旧校区里四处乱转。`,
    ]);
    await MF.say_and_wait(`训练员！`);
    await MF.say_and_wait(`据说！只要拨打这个电话号码！就可以获得开运能量哦！`);
    await me.print_and_wait([
      `看起来纤细的手臂却使出了难以抗衡的力量锁着 `,
      me.get_colored_name(),
      ` 的胳膊，杜绝了 `,
      me.get_colored_name(),
      ` 想要逃跑的念头。`,
    ]);
    era.drawLine({ content: `一段时间后` });
    await MF.say_and_wait(`呼……`);
    await me.print_and_wait([
      `总算是到了 `,
      MF.get_colored_name(),
      ` 认为合适的时候，天色已暗，窗户透出的阳光在走廊泛黄的墙壁上打出光斑。`,
    ]);
    await me.print_and_wait([
      `不过……完全比不上 `,
      me.get_colored_name(),
      ` 担当双瞳中因兴奋而几乎要满溢出来的光彩就是了。`,
    ]);
    await MF.say_and_wait(`那么，训练员先生！开始拨打电话吧！`);
    await me.print_and_wait([
      `站在被事先挑选好的仪式地点，也就是被老旧课桌椅围绕的教室正中， `,
      MF.get_colored_name(),
      ` 拿起了电话。`,
    ]);
    let a = 0,
      b = 0,
      c = 0;
    do {
      if (a === 0) {
        era.printButton(`(拨打电话)`, 1);
      }
      if (b === 0) {
        era.printButton(`(询问电话号码的细节)`, 2);
      }
      if (c === 0) {
        era.printButton(`(看一下周围的情况)`, 3);
      }
      temp = await era.input();
      if (temp === 1) {
        a = 1;
        await me.print_and_wait(`嘟……嘟……`);
        era.drawLine({ content: `几秒钟后` });
        break;
      } else if (temp === 2) {
        b = 1;
        await MF.say_and_wait(`嗯……我在一个论坛上看到的。`);
        await me.print_and_wait(`歪了歪头，似乎并不觉得自己的行为有什么不妥。`);
      } else if (temp === 3) {
        c = 1;
        await me.print_and_wait(`过于安静了，甚至窗外偶有几声鸟鸣传入。`);
        await me.print_and_wait(`太阳要下山了……`);
      }
    } while (a === 0 || b === 0 || c === 0);

    await me.print_and_wait(`叮铃铃……叮铃铃……`);
    await MF.say_and_wait(`诶！？`);
    await MF.say_and_wait(`那个……训练员，你听见了吗？`);
    await me.print_and_wait(`听起来像是座机的铃声。`);
    await me.print_and_wait(
      `声音应该是从隔壁教室传来的，在空荡荡的教学楼内回荡着。`,
    );
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 和 `,
      MF.get_colored_name(),
      ` 来到走廊上朝那间课室内看去。`,
    ]);
    await MF.say_and_wait(`真真真的假的！`);
    await me.print_and_wait(`布满灰尘的讲台上突兀的放着一台老式电话座机。`);
    await me.print_and_wait(
      `红色外壳泛着树脂的光泽，本应该是拨号盘的地方却被一块黑色旋钮替代。`,
    );
    await me.print_and_wait(
      `这个电话似乎就凭空出现在那里，在不接任何线路的情况下响着。`,
    );
    await MF.say_and_wait(`现现现在……该怎么办？`);
    if (love >= 50) {
      await me.print_and_wait([
        `橙发的少女整个人像是树獭一样抱住了 `,
        me.get_colored_name(),
        ` 的腰，颤抖地指着那个还在不断发出响声的通讯设备。`,
      ]);
    } else {
      await me.print_and_wait([
        `橙发的少女颤抖地捏着 `,
        me.get_colored_name(),
        ` 的衣角，惊恐地指着那个还在不断发出响声的通讯设备。`,
      ]);
    }

    (a = 0), (b = 0), (c = 0);
    do {
      if (a === 0) {
        era.printButton(`(接电话)`, 1);
      }
      if (b === 0) {
        era.printButton(`(让待兼福来接)`, 2);
      }
      if (c === 0) {
        era.printButton(`(离开)`, 3);
      }
      temp = await era.input();
      if (temp === 1) {
        a = 1;

        era.printButton(`「喂？」`, 1);
        era.printButton(`「你好？」`, 2);
        temp = await era.input();
        await me.print_and_wait(`……#&A%……`);
        await me.print_and_wait([
          `似乎有应答声传来，不过 `,
          me.get_colored_name(),
          ` 没法确定。`,
        ]);
        era.printButton(`「喂？」`, 1);
        era.printButton(`「你好？」`, 2);
        temp = await era.input();
        await me.print_and_wait(`...@&*#...&&￥...`);
        await me.print_and_wait(`话筒里充斥着杂音和宛如倒放磁带的撕拉声。`);
        era.printButton(`（挂断）`, 1);
        era.printButton(`「喂？」`, 2);
        let str = `照顾好待兼福来  ${me.actual_name}训练员`;
        temp = await era.input();
        if (temp === 1) {
          await me.print_and_wait([
            `当 `,
            me.get_colored_name(),
            ` 正打算放下话筒的时候，如同电脑合成般的声音自那一头传来……`,
          ]);
          await era.println();
          let message = [];
          for (let i = 1; i <= str.length; i++) {
            message = str.slice(0, i);
            era.replaceText(`<` + message + `>`, {
              align: 'center',
              color: MF.color,
              fontSize: '36px',
              fontWeight: 'bold',
            });

            await era.delay(150);
          }
          /*
           for (let i = 1; i <= str.length; i++) {
            message = str.slice(0, i);
            era.print(`<`+message+`>`,{align: 'center',
                color: MF.color,
                fontSize: '36px',
                fontWeight: 'bold',});
             await era.delay(150);
            if (i != str.length){
              await era.clear(1);
            }
          }*/

          await me.print_and_wait(`嘟……嘟……`);
          await me.print_and_wait(`被挂断了……`);
          await era.println();
          get_skills_and_print_in_event(56, [201222]);
        } else if (temp === 2) {
          await me.print_and_wait(`如同电脑合成般的声音自那一头传来……`);
          await era.println();
          let message = [];
          for (let i = 1; i <= str.length; i++) {
            message = str.slice(0, i);
            era.replaceText(`<` + message + `>`, {
              align: 'center',
              color: MF.color,
              fontSize: '36px',
              fontWeight: 'bold',
            });

            await era.delay(150);
          }
          /*
          for (let i = 1; i <= str.length; i++) {
            message = str.slice(0, i);
            era.print(`<`+message+`>`,{align: 'center',
                color: MF.color,
                fontSize: '36px',
                fontWeight: 'bold',});
             await era.delay(150);
            if (i != str.length){
              await era.clear(1);
            }
          }*/

          await era.println();
          await me.print_and_wait(`嘟……嘟……`);
          await me.print_and_wait(`被挂断了……`);
          get_skills_and_print_in_event(56, [201222]);
        }
        await era.waitAnyKey();
        break;
      } else if (temp === 2) {
        b = 1;
        await MF.say_and_wait(`欸！这样吗！！！`);
        await me.print_and_wait([
          ` `,
          MF.get_colored_name(),
          ` 颤颤巍巍的握起了电话。`,
        ]);
        await MF.say_and_wait(`……欸！？`);
        await me.print_and_wait(
          `似乎是对电话那头出现的人有些意外， `,
          MF.get_colored_name(),
          ` 面露惊诧。`,
        );
        await MF.say_and_wait(`嗯……是的…….`);
        await MF.say_and_wait(`……嗯，训练员，我的训练员也在！`);
        await MF.say_and_wait(`……我知道了。`);
        await me.print_and_wait([
          ` `,
          me.get_colored_name(),
          ` 看见 `,
          MF.get_colored_name(),
          ` 挂断了电话，眼眶周围有些发红`,
        ]);
        await me.print_and_wait(
          `之后也没能问出来电话那头是谁，她就像完全忘了这件事一样。`,
        );
        //     sys_like_chara(56, 0, 20);
        /*     wait_flag =
          get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0) || wait_flag; */

        get_skills_and_print_in_event(56, [201542]);
        await era.waitAnyKey();
        break;
      } else if (temp === 3) {
        await MF.say_and_wait(`是是是……我也觉得，这有点……`);
        await era.drawLine({ content: `一段时间后` });
        await me.print_and_wait(`叮铃铃……叮铃铃……`);
        await MF.say_and_wait(`诶！？怎么又走回来了啊！！！！`);
        await me.print_and_wait([
          ` `,
          MF.get_colored_name(),
          ` 的惊呼声在走廊里回荡。`,
        ]);
      }
    } while (a === 0 || b === 0 || c === 0);

    return true;
  }

  if (FUKU.love25 === 1) {
    FUKU.love25++;
    await print_event_name(`恋心初动`, MF);
    await me.print_and_wait([
      `某个假日， `,
      MF.get_colored_name(),
      ` 正思考着最近发生的事情。`,
    ]);
    await MF.say_and_wait(`唔，想到训练员先生心跳会加速是什么的预兆呢？`, true);
    await MF.say_and_wait(`嗯……一定是大吉的状况吧！`, true);
    await MF.say_and_wait(
      `果然啊！训练员先生和占卜结果说的一样，是我的命定之人！`,
      true,
    );
    await MF.say_and_wait(`哼哼，我的占卜是不会有错的！`, true);
    await MF.say_and_wait(
      `那么，之后也一直遵循下去就能找到属于自己的幸福吧？`,
      true,
    );
    await MF.say_and_wait(`是这样吗……？`, true);
    await MF.say_and_wait(
      `明明训练员给出的指示有时和占卜出的结果完全不一致，那为什么我还会……`,
      true,
    );
    era.printButton('「待兼福来？」', 1);
    await era.input();
    await MF.say_and_wait(`啊！训练员先生，没想到能在这里见到你！`);
    await MF.say_and_wait(`诶！我吗？`);
    await MF.say_and_wait(
      `唔……通过灵摆占卜到，这里是一个很适合想事情的地点哦！`,
    );
    await MF.say_and_wait(`训练员是要去干什么呢？`);
    era.printButton('（回答）', 1);
    await era.input();
    await MF.say_and_wait(`喔！正好，那一起去吧！`);
    await MF.say_and_wait(`嗯！为什么？`);
    await MF.say_and_wait(`是……是因为……`);
    await me.print_and_wait(
      `似乎是自己也不知道为什么会突然说出这番话来，有些着急的少女居然开始下意识的捋着自己的耳朵来。`,
    );
    era.printButton('「占卜的结果？」', 1);
    await era.input();
    await MF.say_and_wait(`对的对的！`);
    await me.print_and_wait([
      `看来是察觉到了 `,
      me.get_colored_name(),
      ` 似笑非笑的目光， `,
      MF.get_colored_name(),
      ` 的脸颊泛起了些微的绯红。`,
    ]);
    await MF.say_and_wait(`总之就是能开运啦！`);
    await me.print_and_wait(
      `之后在她的死缠烂打之下，不得不同意了一起去购买日用品的要求。`,
    );
    await era.waitAnyKey();
    return true;
  }
};

handlers[event_hooks.office_study] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.office_study, event_object);
    return;
  }
  const MF = get_chara_talk(56);

  const me = get_chara_talk(0);

  const FUKU = new FukuEventMarks();
  const love = era.get('love:56');
  let temp = 0;
  if (FUKU.god_study === 1) {
    FUKU.god_study++;
    await print_event_name(`神学研讨`, MF);
    await me.print_and_wait([
      `今天的计划是和 `,
      MF.get_colored_name(),
      ` 在办公室里学习，空荡荡的椅子……看来她今天是迟到了。`,
    ]);
    await MF.say_and_wait(`训练员！训练员！`);
    await MF.say_and_wait(`训练员先生！！！`);
    await MF.say_and_wait(`上次问题的答案我找到了哦！`);
    await me.print_and_wait([
      `正当 `,
      me.get_colored_name(),
      ` 打算打电话的时候，吵吵嚷嚷的 `,
      MF.get_colored_name(),
      ` 捧着一本不知道从哪里找来的书籍冲进了房间。`,
    ]);
    await MF.say_and_wait(`就是，有关神社供奉的主神是谁哦！`);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 记得的确问过福来这个问题。`,
    ]);
    await MF.say_and_wait(`你看这里！说是三女神会有多个化身哦！`);
    await MF.say_and_wait(`白兴大人也在呢！`);
    await me.print_and_wait([
      `她冲 `,
      me.get_colored_name(),
      ` 举起了那本泛黄的宽大书籍，里面用颇为煞有介事的手法详细描绘了几位女神的多种化身以及可能的猜想。`,
    ]);
    await MF.say_and_wait(`然后，我回去翻了一下前几任神主的手记！`);
    await MF.say_and_wait(
      `我们神社供奉的，应该是那位化身数量过多的女神，因此才没有一个具体的形象吧！`,
    );
    await MF.say_and_wait(`你看！这里还提出了什么眷族之类的概念。`);
    await MF.say_and_wait(`夏塔克鸟之类的！`);
    era.printButton(`「眷族？」`, 1);
    await era.input();
    await MF.say_and_wait(`嗯！`);
    await MF.say_and_wait(`也就是受到神明眷顾之类的意思啦！`);
    await MF.say_and_wait(`赛马娘也在其中呢！`);
    await me.print_and_wait(
      `头突然有点疼，眼前的橙色马娘隐约变得不真切了起来……`,
    );
    await MF.say_and_wait(`哦！对了！`);
    await me.print_and_wait([
      `想是想到了什么，她握住了 `,
      me.get_colored_name(),
      ` 的手，笑意盈盈的看着 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await MF.say_and_wait(`如果我将来也成为神明了！`);
    await MF.say_and_wait(`我肯定不会忘记给训练员神眷的哦！`);
    await me.print_and_wait([
      `如言出法随般， `,
      me.get_colored_name(),
      ` 的意识再度恢复了清明，缓过来的 `,
      me.get_colored_name(),
      ` 立即催促 `,
      MF.get_colored_name(),
      ` 开始今天的学习计划。`,
    ]);

    get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 10);
    await era.waitAnyKey();
    return true;
  } else if (FUKU.luck_name === 1) {
    FUKU.luck_name++;
    await print_event_name(`带来好运的名字`, MF);
    await me.print_and_wait([
      `由于最近的文化课成绩走势不佳， `,
      MF.get_colored_name(),
      ` 在 `,
      me.get_colored_name(),
      ` 的安排下留在训练室内自习。`,
    ]);
    await me.print_and_wait(`哗啦……`);
    await me.print_and_wait([
      `作为今日监督的 `,
      me.get_colored_name(),
      ` 正打算看看福来学的怎么样了，结果还没进门就听见骰子在桌面上滚动的声音。`,
    ]);
    await me.print_and_wait(`背对着门的少女，看起来正聚精会神的思考着什么。`);
    await MF.say_and_wait(`七福神……`);
    await MF.say_and_wait(`水晶……`);
    await MF.say_and_wait(`灵动……`);
    await MF.say_and_wait(`唔……话说是不是该把‘福来’留下来比较好呢？`);
    await me.print_and_wait(
      `时不时的在草稿纸上涂画着，应该是某件颇为重要的事情吧。`,
    );
    era.printButton(`「学的怎么样了？」`, 1);
    era.printButton(`「在想什么？」`, 2);
    await era.input();
    await MF.say_and_wait(`哎呀呀！来的正好！`);
    await MF.say_and_wait(`训练员先生！`);
    await me.print_and_wait([
      `完全没有因为走神被抓到的不好意思， `,
      MF.get_colored_name(),
      ` 双眼放光地盯着走进来的 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    await MF.say_and_wait(
      `那个，我其实是在想，最近成绩不佳是不是运气问题呢？ `,
    );
    await MF.say_and_wait(`要是改个名会不会好一点？`);
    await MF.say_and_wait(`你看！`);
    await me.print_and_wait([
      `她向 `,
      me.get_colored_name(),
      ` 举起了本该是用于记录演算步骤的草稿纸，上面几乎是密密麻麻的写满了 `,
      MF.get_colored_name(),
      ` 的想到的名字。`,
    ]);
    await MF.say_and_wait(`呜……不过写了这么多，感觉像是在做无用功！`);
    await MF.say_and_wait([`还是 `, MF.get_colored_name(), ` 比较好！`]);
    await me.print_and_wait(`这样说着，面前的橙色团子肉眼可见的瘪了下去。`);
    era.printButton(`（安慰）`, 1);
    era.printButton(`（离开）`, 2);
    temp = await era.input();
    if (temp === 1) {
      await me.say_and_wait(`也不算是无用功了！`);
      await MF.say_and_wait(`欸！为什么？`);
      await me.say_and_wait(`嗯……`);
      await me.print_and_wait([
        `在 `,
        MF.get_colored_name(),
        ` 诘问般的目光中， `,
        me.get_colored_name(),
        ` 下意识说出了一个或许能派的上用处的场景。`,
      ]);
      await me.say_and_wait(`比如像是作为未来孩子的名字？`);
      await MF.say_and_wait(`欸……给孩子的名字？`);
      await MF.say_and_wait(`……`);
      if (love >= 75) {
        await MF.say_and_wait(`说的是和训练员先生的孩子吗？`);
        await MF.say_and_wait(`啊！训练员这么快就想着孩子的事情了？`);
        await MF.say_and_wait(`哎呀！！！`);
        await me.print_and_wait([
          `在敲了几下 `,
          MF.get_colored_name(),
          ` 的脑袋之后，胡思乱想的她总算是能继续学习了。`,
        ]);

        get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 10);
      } else {
        await MF.say_and_wait(`说的是和训练员先生的孩子吗？`);
        await MF.say_and_wait(`啊！！！`);
        await me.print_and_wait([
          `才反应过来自己刚刚说了什么的 `,
          MF.get_colored_name(),
          ` 后知后觉的发出了惊呼。`,
        ]);
        await me.print_and_wait([
          `之后被满脸通红的 `,
          MF.get_colored_name(),
          ` 推出了房间。`,
        ]);

        get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 10);
      }
    } else if (temp === 2) {
      await me.print_and_wait([`让 `, MF.get_colored_name(), ` 继续学习。`]);
      await me.print_and_wait([
        `不知道为什么， `,
        MF.get_colored_name(),
        ` 的心情下降了`,
      ]);

      get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
      sys_change_motivation(56, -1);
    }
  }
  await era.waitAnyKey();
  return true;
};

handlers[event_hooks.office_cook] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.office_cook, event_object);
    return;
  }
  const MF = get_chara_talk(56);

  const me = get_chara_talk(0);

  const FUKU = new FukuEventMarks();

  let temp = 0;

  if (FUKU.miso_fortune === 1) {
    FUKU.miso_fortune++;
    await print_event_name(`味增占卜`, MF);
    await MF.say_and_wait(`那么！训练员！今天来做味增汤占卜吧！`);
    await me.print_and_wait([
      `兴高采烈的 `,
      MF.get_colored_name(),
      ` 将一碗味增汤放在了 `,
      me.get_colored_name(),
      ` 的面前。`,
    ]);
    era.printButton(`（饮用）`, 1);
    era.printButton(`（不饮用）`, 2);
    temp = await era.input();
    if (temp === 2) {
      await MF.say_and_wait(`欸！？`);
      await MF.say_and_wait(`训练员！`);
      await me.print_and_wait([
        `双手合十的少女在 `,
        me.get_colored_name(),
        ` 面前摆出了楚楚可怜的表情，橙色的尾巴也低声下气的垂了下来。`,
      ]);
      await me.print_and_wait(`这下没有办法拒绝吧？`);
      era.printButton(`（饮用）`, 1);
      temp = await era.input();
    }
    await me.say_and_wait(`咕嘟`);
    await me.print_and_wait(
      `或许是由于马娘本身的味觉过于敏感，这碗汤的调味有些过于淡了！`,
    );
    await me.print_and_wait([
      `不过抛开这点不谈，其余的部分鲜中又带着一丝甘甜，看来 `,
      MF.get_colored_name(),
      ` 确实下了不少心思。`,
    ]);
    await MF.say_and_wait(`训练员！味道如何？`);
    await me.print_and_wait([
      `少女黄水晶般的双眼闪闪发光的看着 `,
      me.get_colored_name(),
      ` 。`,
    ]);
    era.printButton(`「有点淡了。」`, 1);
    temp = await era.input();
    await MF.say_and_wait(`欸！`);
    await me.print_and_wait(
      `用指尖直接在刚刚喝完的碗底蘸了一点点汤汁，伸出粉嫩的舌尖舔了舔。`,
    );
    await MF.say_and_wait(`唔！训练员的口味是偏重的呢……`);
    era.printButton(`「占卜的部分呢？」`, 1);
    temp = await era.input();
    await MF.say_and_wait(`哦！你说这个呀！`);
    await me.print_and_wait([
      `她漫不经心地端起 `,
      me.get_colored_name(),
      ` 放下的瓷碗，扫视起碗底。`,
    ]);
    await MF.say_and_wait(`从味增渣的形状来看……这个占卜结果是——`);
    await MF.say_and_wait(`凶！`);
    await me.print_and_wait(`该说是毫不意外吗？`);
    await MF.say_and_wait(
      `所以！为了避免厄运，训练员，要试试小福做的其他菜式吗？`,
    );
    await MF.say_and_wait(`巫女做的佳肴可是会含有神力的呢！`);
    await me.print_and_wait(
      `于是之后接连品尝了过咸的玉子烧，还有稍微带点焦糊的煎鱼。`,
    );
    await me.print_and_wait([
      `看来 `,
      MF.get_colored_name(),
      ` 的厨艺还有很大的提高空间。`,
    ]);
    get_skills_and_print_in_event(56, [201442]);
    await era.waitAnyKey();
    return true;
  }
};

handlers[event_hooks.office_game] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.office_game, event_object);
    return;
  }
  const MF = get_chara_talk(56);

  const me = get_chara_talk(0);

  const FUKU = new FukuEventMarks();

  let temp = 0;
  /*
  console.log('in edu-56-ofg.js-----------------');
  console.log('edu_weeks:',edu_weeks);
  console.log('love:',love);
  console.log('FUKU.RECTIME:',FUKU.fortune_game_duel);
  console.log();
  */

  if (FUKU.fortune_game_duel === 1) {
    FUKU.fortune_game_duel++;
    await print_event_name(`和占卜师的游戏对决！Ⅰ`, MF);
    await me.print_and_wait([
      `该说 `,
      MF.get_colored_name(),
      ` 在游戏，尤其是对抗性较强的类型上的天赋意外的高吗？`,
    ]);
    await me.print_and_wait([
      `自从`,
      me.get_colored_name(),
      `把她带入电子游戏的深坑之后，从开始还能凭借 `,
      MF.get_colored_name(),
      ` 的生疏获得优势，到后面被她几乎是未卜先知般的意识一边倒的碾压。`,
    ]);
    await MF.say_and_wait(`好了好了！训练员在想什么呢？`);
    await me.print_and_wait([
      `又到了打游戏的闲暇时光，坐在游戏机前的担当冲`,
      me.get_colored_name(),
      `举着手柄，用尾巴拍了拍一旁沙发上留给Player2的位置。`,
    ]);
    await me.print_and_wait([
      `两条健康肉感的双腿交叉着搁置在沙发的扶手上,裸露在外的脚趾慵懒的摆动着。`,
    ]);
    await me.print_and_wait([`那么`, me.get_colored_name(), `决定……`]);
    era.printButton(`（双人的格斗向游戏）`, 1);
    era.printButton(`（竞速向的赛车游戏）`, 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait(
        `有来有回,可惜最后还是被击败了……奇怪，怎么会输呢？`,
      );
      await me.print_and_wait([
        `明明最早是`,
        me.get_colored_name(),
        `教 `,
        MF.get_colored_name(),
        ` 打游戏的啊，那个操作意识就算是用马娘的反应速度来解释也说不通。`,
      ]);
    } else if (temp === 2) {
      await me.print_and_wait(`险而又险。`);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `们玩的是竞速赛车游戏，幸好在最后一圈的时候趁着 `,
        MF.get_colored_name(),
        ` 没反应过来超过了她。`,
      ]);
      await me.print_and_wait([
        `话说，她是怎么做到不看后视镜的情况下卡`,
        me.get_colored_name(),
        `赛车位置的呢？`,
      ]);
    }
    // TODO 好感度不够的差分
    await MF.say_and_wait(`唔……大概是占卜师的预感吧。`);
    await me.say_and_wait(`预感？`);
    await MF.say_and_wait(`嗯！`);
    await MF.say_and_wait(`对啊！就是大概能猜到训练员之后会怎么做。`);
    await MF.say_and_wait(`可惜隔着电脑屏幕的其他玩家就不行了……`);
    // get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 30);
    get_skills_and_print_in_event(56, [201432]);
    FUKU.GAME_TIMES++;
    await era.waitAnyKey();
    return true;
  } else if (
    FUKU.fortune_game_duel1 === 1 &&
    era.get(`exp:56:性交次数`) > 3 &&
    era.get('love:56') >= 75
  ) {
    FUKU.GAME_TIMES++;
    FUKU.fortune_game_duel1++;
    FUKU.fortune_game_duel++;
    await print_event_name(`和占卜师的游戏对决！Ⅱ`, MF);
    await MF.say_and_wait(`好欸！！！`);
    await me.print_and_wait([
      `在答应陪她打游戏之后， `,
      MF.get_colored_name(),
      ` 总算是消停了一些。`,
    ]);
    await MF.say_and_wait(`是啊！果然还是要和训练员玩才有意思嘛！`);
    await me.print_and_wait([
      `不过，对于 `,
      MF.get_colored_name(),
      ` 的能力，`,
      me.get_colored_name(),
      `陪她打无疑是自讨苦吃。`,
    ]);
    await MF.say_and_wait(`诶！？`);
    await me.print_and_wait([
      `在提出了不许 `,
      MF.get_colored_name(),
      ` 使用占卜能力之后，她露出了有些不满的表情，看来她并不想放弃自己的些许优势。`,
    ]);
    await MF.say_and_wait(`当然没问题啦！`);
    await me.print_and_wait([
      `奇怪，她只是稍稍思考了一下，就爽快的答应了`,
      me.get_colored_name(),
      `的请求。`,
    ]);
    await me.print_and_wait([`那么`, me.get_colored_name(), `决定……`]);
    era.printButton(`（双人的格斗向游戏）`, 1);
    era.printButton(`（竞速向的赛车游戏）`, 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait([
        `看来之前的失败果然是她那玄之又玄的能力，直到那个由 `,
        MF.get_colored_name(),
        ` 操控的举着船锚的角色在血量所剩无几的情况下被`,
        me.get_colored_name(),
        `逼退到屏幕边缘。`,
      ]);
    } else if (temp === 2) {
      await me.print_and_wait([
        `看来之前的失败果然是她那玄之又玄的能力，凭借着恰当的操作技巧，`,
        me.get_colored_name(),
        `的赛车一直领先在 `,
        MF.get_colored_name(),
        ` 的赛车前面。`,
      ]);
    }
    await me.print_and_wait(`赢定了……吗？`);
    await me.say_and_wait(`唔……`);
    await me.print_and_wait(
      `还在沉睡状态的胯下之物隔着布料突然感受到了某种颇为不妙的触感。`,
    );
    await MF.say_and_wait(`嘿呀！`);
    await me.print_and_wait(`一下，两下，而后是接连不断的轻触。`);
    await me.print_and_wait([``, me.get_colored_name(), `下意识的低头看去，`]);
    await me.print_and_wait([
      ``,
      me.get_colored_name(),
      `的两腿之间， `,
      MF.get_colored_name(),
      ` 的右脚正隔着布料压在上面，裸露在外的圆润脚趾，随着她控制操控摇杆的动作有节奏地轻点着`,
      me.get_colored_name(),
      `那正逐渐抬起头来的肉棒。`,
    ]);
    await MF.say_and_wait(`哈！`);
    await me.print_and_wait([
      `就趁着`,
      me.get_colored_name(),
      `这走神的功夫， `,
      MF.get_colored_name(),
      ` 抓住了机会。`,
    ]);
    await me.print_and_wait(
      `珍珠般的可爱足趾并拢，与绷紧的脚背一起前压，让本就因为布料阻碍而胀的难受的肉棒突然一下受到更大的刺激。`,
    );
    await me.say_and_wait(`喂！待兼福来！`);
    await MF.say_and_wait(`啊啦，训练员失误了呢！`);
    await me.say_and_wait(`嘶……`);
    await me.print_and_wait([
      `受到提醒后 `,
      MF.get_colored_name(),
      ` 反而得寸进尺，`,
      me.get_colored_name(),
      `不禁弓起了背，手中的摇杆在突如其来的刺激下和胯下的肉棒一起随着她的动作颤抖着。`,
    ]);
    if (temp === 1) {
      await me.print_and_wait([
        `在 `,
        MF.get_colored_name(),
        ` 早有准备的一连串招数之后，屏幕恰当的弹出了象征着`,
        me.get_colored_name(),
        `被击败的SLASH！`,
      ]);
    } else if (temp === 2) {
      await me.print_and_wait(
        `漆着赛马娘特色涂装的赛车冲出了护栏，坠入了山谷。`,
      );
    }
    await MF.say_and_wait(`哎呀，训练员输了呢？`);
    await me.print_and_wait([
      `方才还碰着`,
      me.get_colored_name(),
      `下体的脚已经缩了回去。`,
    ]);
    await me.print_and_wait([
      `受困于布料内的肉棒胀的`,
      me.get_colored_name(),
      `有些难受，然而造成这一切的家伙却装着若无其事的看着`,
      me.get_colored_name(),
      `。`,
    ]);
    await MF.say_and_wait(`再来一局吗？`);
    await me.print_and_wait([
      `话语间夹杂些许媚意的 `,
      MF.get_colored_name(),
      ` ，放下了手柄，侧看身子看着你。`,
    ]);
    await me.print_and_wait([
      `衬衫下优美的背部曲线与臀瓣分开的光洁裸腿肆意的展现在 `,
      me.get_colored_name(),
      ` 的面前。`,
    ]);
    await MF.say_and_wait(`还算说……想要惩罚一下小福我呢？`);
    era.printButton(`（是）`, 1);
    era.printButton(`（否）`, 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait([
        ` `,
        me.get_colored_name(),
        ` 站了起来，然而看到 `,
        me.get_colored_name(),
        ` 有所动作的 `,
        MF.get_colored_name(),
        ` 似乎并没有将要受到惩罚的慌乱，反而……`,
      ]);
      await me.print_and_wait([
        `……如果`,
        me.get_colored_name(),
        `没有看错的话，那对眸子在扫过`,
        me.get_colored_name(),
        `下身支起的帐篷时，她吞了下口水。`,
      ]);
      await me.print_and_wait(
        `抓住方才她使坏的小脚，一把将这家伙推倒在了沙发上，而后褪下了自己的裤子，让因为先前福来挑逗而蓄势待发的肉棒伸入了福来的裙摆下。`,
      );
      await MF.say_and_wait(`呀！`);
      await me.print_and_wait(
        `伸手挑开似乎是已经知道了将要面对什么而变得有了些水渍的内裤，肉棒简单蹭了两下发热的穴口，便开始长驱直入。`,
      );
      await me.print_and_wait(`砰！`);
      await MF.say_and_wait(`唔啊！！！`);
      await me.print_and_wait([
        `因为体型差的关系，`,
        MF.get_colored_name(),
        ` 柔软的宫口对于`,
        me.get_colored_name(),
        `的肉棒来说，并不是什么无法触及的地方。`,
      ]);
      await me.print_and_wait(
        `只是第一次撞击，体验到快感的福来就忍不住叫出了声。`,
      );
      await MF.say_and_wait(`哈啊……`);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `的肉棒在小穴内毫不留情的来回抽插，惩罚起这个在方才用脚玩弄它的马娘。`,
      ]);
      await MF.say_and_wait(`哈……哈……`);
      await me.print_and_wait([
        `身下的爱人只是喘着粗气，让红润的臀瓣高高翘起，以配合`,
        me.get_colored_name(),
        `的动作。`,
      ]);
      await me.print_and_wait([
        `双手先是扶着腰，而后上移把玩起那对乳房，再到后来抓着福来的手腕，让她随着`,
        me.get_colored_name(),
        `抽插的动作仰起头来。`,
      ]);
      await MF.say_and_wait(`呀啊！！！`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 的双足直直地绷起，趾尖也因为快感而抽颤起来。`,
      ]);
      await MF.say_and_wait(`要去了呀啊啊哈！！！`);
      await me.print_and_wait(
        `随着精液的注入，占卜师小姐高高的昂起头，让嘴角因为快感而留下的透明涎水顺着洁白的天鹅颈滴落，沾湿了衣襟。`,
      );
      get_skills_and_print_in_event(56, [201431]);
      await era.waitAnyKey();
    }

    return true;
  }
};

/**
 * @param {HookArg} hook
 * @param {{args:*,fumble:boolean,train:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  if (extra_flag.train === attr_enum.intelligence) {
    throw new Error();
  }
  extra_flag['args'] = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;

  const MF = get_chara_talk(56);

  const me = get_chara_talk(0);

  const FUKU = new FukuEventMarks();

  let temp = 0;

  if (FUKU.fortune_train_fail === 0 && era.get('love:56') > 75) {
    // 第一次训练失败固定会弹出来的事件。
    FUKU.fortune_train_fail++;
    await print_event_name('触诊', MF);
    await me.print_and_wait([
      `以公主抱的姿势将训练失败的 `,
      MF.get_colored_name(),
      ` 送到保健室，好在她并没有受伤，不过例行的检查还是需要的。`,
    ]);
    await me.print_and_wait([
      `过程中，察觉到了 `,
      me.get_colored_name(),
      ` 正位于她肩胛和腿弯处的手,  `,
      MF.get_colored_name(),
      ` 的脸上显出了些许酡红。`,
    ]);
    await me.print_and_wait([
      `坐在保健室的洁白床铺边缘，自知给 `,
      me.get_colored_name(),
      ` 添乱了的少女有些局促不安的盯着地板，在令人难以忍受的寂静中等着校医的出现。`,
    ]);
    await MF.say_and_wait(`那个，训练员……`);
    await me.print_and_wait(
      `校医多半是有什么棘手的病人要照顾，毕竟特雷森每天训练失败的赛马娘可是数不胜数，那么初步的足部检查，也就是触诊，只能由 `,
      me.get_colored_name(),
      ` 做了。`,
    );
    era.printButton('「脱下来」', 1);
    temp = await era.input();
    await MF.say_and_wait(`欸！训练员先生是要！`);
    await me.print_and_wait([
      `强忍着 `,
      MF.get_colored_name(),
      ` 过于吵闹的反应， `,
      me.get_colored_name(),
      ` 指了指她脚上穿着的运动鞋。`,
    ]);
    era.printButton('（脱下鞋子）', 1);
    temp = await era.input();
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 弯下腰，解开鞋带，将她的运动鞋缓缓脱下，而后，被白色过膝袜裹住，透出些许肉色的玉足，在 `,
      me.get_colored_name(),
      ` 面前绷直了脚尖。`,
    ]);
    era.printButton('「袜子也要脱掉」', 1);
    temp = await era.input();
    await MF.say_and_wait(`那个！训练员……`);
    await MF.say_and_wait(`这个的话，我自己来就好了。`);
    await me.print_and_wait([
      `面颊发红的 `,
      MF.get_colored_name(),
      ` 坐在床边，先屈起左脚踩在了床面，虽然已经尽力遮掩，但百褶裙下的风光还是展露了出来。`,
    ]);
    await me.print_and_wait([
      `裙摆的缝隙里，隐约可以窥探到那被蓝白色胖次包裹的小肉臀，此刻正因为坐在床铺上的缘故而微微显得扁圆。`,
    ]);
    await me.print_and_wait([
      `拈起在大腿上勒出痕迹的丝袜边缘，向外拉起，顺着肌肉的优美曲线向下经过小腿，露出圆润洁白的大腿，一寸一寸的向下卷着，腿肉跟着轻轻颤动，直到双腿的丝袜都变成小小的一团。`,
    ]);
    await MF.say_and_wait(`那，训练员先生……下，下一步呢？`);
    await me.print_and_wait([
      `明显变得害羞的 `,
      MF.get_colored_name(),
      ` 低着头，双脚自顾自地交叠在一起，互相来回磨蹭，粉嫩的脚趾也互相拨弄着晃来晃去。`,
    ]);
    era.printButton('（伸手）', 1);
    temp = await era.input();
    await me.print_and_wait([
      `属于 `,
      MF.get_colored_name(),
      ` 的，因为害羞而略微蜷曲着的脚，准确来说是右足进入了 `,
      me.get_colored_name(),
      ` 的手中。`,
    ]);
    await MF.say_and_wait(`啊呀…….`);
    await me.print_and_wait([
      `相当优美的弯曲足弓，娇嫩的足趾，透着运动后的红润， `,
      me.get_colored_name(),
      ` 用手指顺着足底到脚踝的部位抚摸过去，感叹着外表与普通人类无异的双足却能在奔跑时承受如此大的加速度。`,
    ]);
    await MF.say_and_wait(`咿呀……呼……`);
    await me.print_and_wait([
      `急促的喘气声自 `,
      MF.get_colored_name(),
      ` 的口中漏出。`,
    ]);
    await me.print_and_wait([
      `明明到了这一步就可以确定 `,
      MF.get_colored_name(),
      ` 没有任何问题了，但是……`,
    ]);
    await me.print_and_wait(`还要继续吗？`);
    era.printButton('（结束）', 1);
    era.printButton('（继续）', 2);
    temp = await era.input();
    if (temp === 2) {
      await me.print_and_wait([
        `继续向上，指腹蹭过带着些许回弹的小腿肚，膝盖上的肌腱，在到其上的大腿。`,
      ]);
      await MF.say_and_wait(`唔嗯……`);
      await me.print_and_wait([
        `大腿股先是和男人肌肤相亲而展现出的僵硬，而后 `,
        MF.get_colored_name(),
        ` 又意识到是自己命定之人正在抚摸而放松开来的柔软。`,
      ]);
      await MF.say_and_wait(`哈啊！`);
      await me.print_and_wait([
        `用指腹确认着肌肉组的状态，又按摩般揉捏着，似乎已经跨越了触诊的界线， `,
        MF.get_colored_name(),
        ` 的呼吸也染上了桃色氛围特有的湿润与荡漾。`,
      ]);
      await MF.say_and_wait(`嗯……哈啊！`);
      await me.print_and_wait([
        `在 `,
        me.get_colored_name(),
        ` 不知道是不是不小心碰到她大腿根部的时候， `,
        MF.get_colored_name(),
        ` 发出了一声惊呼，于是 `,
        me.get_colored_name(),
        ` 终于抬起头来，与她四目相对。`,
      ]);
      await me.print_and_wait([
        `察觉到 `,
        me.get_colored_name(),
        ` 视线的 `,
        MF.get_colored_name(),
        ` 像是被吓了一跳的样子，试图用侧发遮住自己赤红的脸颊，却又因为平日那凌乱的发型而失败。`,
      ]);
      await MF.say_and_wait(`训，训练员先生。`);
      await me.print_and_wait(
        `开始只是浅红的面颊现在完全被赤色的红潮侵染，或许是为了配合 `,
        me.get_colored_name(),
        ` 触诊的动作，本是端坐在病床上的 `,
        MF.get_colored_name(),
        ` 身体已经完全瘫扭着，衬衣未遮掩住的皮肤位置也泛着红色。`,
      );
      await MF.say_and_wait(`唔……哈啊！嗯……那个，训练员先生？`);
      era.printButton('「……嗯？福来？没事吧？」', 1);
      temp = await era.input();
      await MF.say_and_wait(`是、是的……那个，我没事的……`);
      await MF.say_and_wait([`所以，训练员先生……没问题吧？`]);
      await me.print_and_wait([
        `正慢慢给自己左脚穿上过膝袜的 `,
        MF.get_colored_name(),
        ` 抬起头来望着 `,
        me.get_colored_name(),
        ` 不知是否是错觉，脸上似乎带着几分若有若无的期待。`,
      ]);
      await me.print_and_wait(`还要继续吗？`);
      era.printButton('（结束）', 1);
      era.printButton('（握住待兼福来的脚）', 2, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton(`（推到待兼福来）`, 3, {
        disabled: era.get('love:56') < 75,
      });
      temp = await era.input();
      if (temp === 2) {
        await MF.say_and_wait([`训练员……唔❤!？`]);
        await me.print_and_wait([
          `在面前马娘的惊呼声中握住了她左脚的脚踝，然后高高举起，在 `,
          MF.get_colored_name(),
          ` 成功地因为 `,
          me.get_colored_name(),
          ` 这突然举动而彻底放弃表情管理变得满面潮红时，将那裹着纤薄白丝的足心，隔着裤子放在了 `,
          me.get_colored_name(),
          ` 绷起的小帐篷上。`,
        ]);
        await MF.say_and_wait(`啊，训练员，难道现在要在这里......`);
        await MF.say_and_wait(`......用脚做吗？`);
        await me.print_and_wait([
          `大概是察觉到了你的意思，病床上的栗毛马娘抬起头询问着 `,
          me.get_colored_name(),
          ` 的意思。`,
        ]);
        await MF.say_and_wait([`哦......好的，那训练员，帮忙盯着点门口。`]);
        await MF.say_and_wait([`因为，担心自己一会儿还会不会有这个余裕。`]);
        await me.print_and_wait([
          `在得到许可之后，在先前的触诊结束后还来不及穿上过膝袜的右足，用裸露在外的脚趾拉开了 `,
          me.get_colored_name(),
          ` 的裤链。`,
        ]);
        await me.print_and_wait([`滋啦~`]);
        await MF.say_and_wait(`好大......`);
        await me.print_and_wait([
          ` `,
          MF.get_colored_name(),
          ` 的小声比划着的口型应该是这么说的。`,
        ]);
        await me.print_and_wait([
          `接下来，用套着白丝过膝袜的左脚，和另一只触感完全不同的裸足组成足穴。`,
        ]);
        await me.print_and_wait([
          `在粗大的肉竿上缓缓地套弄着，蹭弄着肉棒杆身上每一条隆起的青筋。`,
        ]);
        await me.print_and_wait([
          `直到舒展的足趾间已能拉出些透明而粘稠的淫丝。`,
        ]);
        await MF.say_and_wait(`嗯......哈啊！`);
        await me.print_and_wait([
          `不过，速度还是太慢了，这样不知道什么时候才能射出来。`,
        ]);
        era.printButton(`（握住双脚）`, 1);
        temp = await era.input();
        await MF.say_and_wait(`唔唔！……`);
        await me.print_and_wait([
          `原本撑着床铺的 `,
          MF.get_colored_name(),
          ` 突然失去平衡的向后倾倒，取而代之的，只有左腿穿着被先走汁弄的黏糊糊的白色过膝袜的一对美足，被 `,
          me.get_colored_name(),
          ` 托着脚踝高高举起，搭在了肉棒上。`,
        ]);
        await MF.say_and_wait(`训练员，太，太突然了！`);
        await me.print_and_wait([
          `压低声音呵斥着 `,
          me.get_colored_name(),
          ` ，但几近失去理智的 `,
          me.get_colored_name(),
          ` 没有在意。`,
        ]);
        await me.print_and_wait([
          `像是对待什么用完即弃的杯子般随意地使用着 `,
          MF.get_colored_name(),
          ` 的双足。`,
        ]);
        await me.print_and_wait([
          `在粗大的肉茎上包络成一个异色的圆，随着 `,
          me.get_colored_name(),
          ` 的双手以远超先前频率的高速在肉棒上套弄着，发出阵阵淫靡的摩擦水声。`,
        ]);
        await MF.say_and_wait(`肉棒大人......好烫~！`);
        await me.print_and_wait([
          `从敏感足心传来的火热触感与浓厚的种子汁气味，让被 `,
          me.get_colored_name(),
          ` 握住双足的 `,
          MF.get_colored_name(),
          ` 像是落入了猎人陷阱中的栗毛狐狸，上半身陷在保健室的床垫里，凭着马娘的柔韧性顺与床铺交织成更高的仰角。`,
        ]);
        await MF.say_and_wait(`命定之人❤这么激烈，脚，好烫~！`);
        await me.print_and_wait([`音量隐约有些失控的趋势。`]);
        era.printButton(`（呵斥）`, 1);
        temp = await era.input();
        await me.say_and_wait([
          `给我小声点！之前触诊的时候，这对下流蹄子早就有反应了吧！`,
        ]);
        await me.print_and_wait([
          `听到了 `,
          me.get_colored_name(),
          ` 的呵斥， `,
          MF.get_colored_name(),
          ` 脸上露出的失态的下流表情，难耐地发出唔唔的沉闷呻吟声。`,
        ]);
        await MF.say_and_wait(`欸嘿嘿......粗暴的命定之人, 也好喜欢~~!`);
        await me.print_and_wait([
          `捏住了 `,
          MF.get_colored_name(),
          ` 想要发颤的脚腕,轻轻用力, 发泄般地使用起这对足穴飞机杯。`,
        ]);
        await MF.say_and_wait([`哈~哈~……哈！`]);
        await MF.say_and_wait([`去了❤去了❤咕……`]);
        await me.print_and_wait([
          `浓白粘稠的精液，以被 `,
          me.get_colored_name(),
          ` 握着的酥麻无力的双足为起点射在了及时并拢的足弓之间，不过还是少数几滴变成了 `,
          MF.get_colored_name(),
          ` 的脸上与衣服上白色的点缀。`,
        ]);
        await me.print_and_wait([
          `浓淍的白浊液体让左腿上的过膝袜颜色变得更深了，而落在右腿上的，则被 `,
          me.get_colored_name(),
          ` 握着 `,
          MF.get_colored_name(),
          ` 的脚腕，控制着勉强还有余力的 `,
          MF.get_colored_name(),
          ` 蹭着自己脱下来的外套上。`,
        ]);
        await me.print_and_wait([`该赶紧收拾了，校医之后要是发现就麻烦了。`]);
        hook.arg = 1;
        if (!era.get('talent:56:神之足')) {
          era.set('talent:56:神之足', 1);
          era.print([
            MF.get_colored_name(),
            ' 具有 ',
            {
              color: buff_colors[2],
              content: '[神之足]',
            },
            ' 了！',
          ]);
        }
        await era.waitAnyKey();
      } else if (temp === 3) {
        era.printButton(`「张开腿。」`, 1);
        temp = await era.input();
        await MF.say_and_wait(`欸！？`);
        await me.print_and_wait([
          `在 `,
          me.get_colored_name(),
          ` 的命令下， `,
          MF.get_colored_name(),
          ` 乖巧地把手放在了大腿两侧。`,
        ]);
        await me.print_and_wait([
          `颤颤巍巍地用手掰开双腿，露出已经在先前的触诊中被 `,
          me.get_colored_name(),
          ` 弄的湿润的内裤。`,
        ]);
        quick_into_sex(56);
        hook.arg = 1;
      }
    }

    await me.print_and_wait([
      `在检查过没有问题之后，嘱咐 `,
      MF.get_colored_name(),
      ` 好好休息。`,
    ]);
    await era.waitAnyKey();
    return;
  }

  if (extra_flag.fumble) {
    await print_event_name('严禁逞强！', MF);
    await me.print_and_wait([
      `带着在训练过程中受伤的 `,
      MF.get_colored_name(),
      ` 来到了保健室。`,
    ]);
    await MF.say_and_wait(`嘶……今天的运势没有想象中的那么顺利呢！`);
    await MF.say_and_wait(`会不会是什么大凶的前兆呢？`);
    await me.print_and_wait([
      `坐在保健室床铺上的 `,
      MF.get_colored_name(),
      ` 揉着自己肿起的患处，露出了如临大敌般的表情。`,
    ]);
    era.printButton('「别想太多！」', 1);
    era.printButton('「干脆趁着休息的时候做个开运仪式？」', 2);
    // era.printButton('（陪着待兼福来到晚上）', 3, { disabled: era.get('love:56') < 75 });
    hook.arg = (await era.input()) === 1;
    if (hook.arg) {
      await me.print_and_wait([
        `说话的同时一边伸手顺着福来那乱糟糟的头发，在 `,
        me.get_colored_name(),
        ` 略微有些粗暴的动作下，少女总算是停止了进一步的胡思乱想。`,
      ]);
      await MF.say_and_wait(`欸！说的也是呢，唔，训练员先生！`);
      await MF.say_and_wait(`接下来我会好好休息的！`);
      await me.print_and_wait([
        `孤单一人坐在洁白床铺上的 `,
        MF.get_colored_name(),
        ` ，有些不舍的目送着 `,
        me.get_colored_name(),
        ` 走出了保健室。`,
      ]);
      hook.arg = 0;
    } else {
      await me.print_and_wait([
        `听到这个建议后，原本病怏怏躺在床铺上 `,
        MF.get_colored_name(),
        ` 眼睛里再次发出光芒。`,
      ]);
      await me.print_and_wait([
        `之后在 `,
        MF.get_colored_name(),
        ` 的指挥下开始布置起仪式所需的场地来，直到保健室内看着像是祭拜什么东西的神龛。`,
      ]);

      if (Math.random() < extra_flag['args'].ratio.fail_again) {
        await me.print_and_wait(`看来是布置仪式时的动作恶化了伤口呢。`);
        await me.print_and_wait([
          ` `,
          me.get_colored_name(),
          ` 陪着待 `,
          MF.get_colored_name(),
          ` 一起受着来自校医的斥责。`,
        ]);
        hook.arg = -1;
      } else {
        await me.print_and_wait(`意外的真的有用！`);
        await me.print_and_wait([
          ` `,
          me.get_colored_name(),
          ` 听着 `,
          MF.get_colored_name(),
          ` 得意洋洋的对保健室新来的病患布道着自己的白兴大人。`,
        ]);
        hook.arg = 1;
      }
    }
  } else {
    await print_event_name('保重身体', MF);
    await me.print_and_wait([
      `再一次的带着在训练过程中受伤的 `,
      MF.get_colored_name(),
      ` 来到了保健室。`,
    ]);
    await MF.say_and_wait(`啊！完全没有预料到呢！`);
    await MF.say_and_wait(`明明神签上写了今天是大吉来着呢！`);
    era.printButton('「好好休息吧！」', 1);
    era.printButton('「不要老是迷信占卜啊！」', 2);
    hook.arg = (await era.input()) === 1;
    if (hook.arg) {
      await MF.say_and_wait(`唔！`);
      await me.print_and_wait([
        `将自己整个人埋在白色的被褥里， `,
        MF.get_colored_name(),
        ` 沉沉的睡去了。`,
      ]);
      hook.arg = 0;
    } else {
      await MF.say_and_wait(`啊！训练员说的也是呢！`);
      if (Math.random() < extra_flag['args'].ratio.fail_again) {
        await me.print_and_wait([
          `不过第二天来保健室看望她的时候， `,
          me.get_colored_name(),
          ` 听见她又提出了新的占卜方式。`,
        ]);
        await me.print_and_wait([
          `看来 `,
          MF.get_colored_name(),
          ` 没怎么吸取教训。`,
        ]);
        hook.arg = -1;
      } else {
        era.drawLine({ content: `次日` });
        await MF.say_and_wait(`哦！训练员先生，我发现问题在哪里了！`);
        await me.print_and_wait([
          ` `,
          me.get_colored_name(),
          ` 有些意外的看着 `,
          MF.get_colored_name(),
          ` 对 `,
          me.get_colored_name(),
          ` 复盘起那天训练她自己究竟犯了什么失误。`,
        ]);
        hook.arg = 1;
      }
    }
  }
};

handlers[event_hooks.crazy_fan_end] = async () => {
  const MF = get_chara_talk(56);

  const me = get_chara_talk(0);

  const FUKU = new FukuEventMarks();

  if (FUKU.be_end_1 != 1) {
    throw new Error();
  } else {
    await me.say_and_wait(`又输了？`);
    await me.print_and_wait([
      `已经不记得是第几次安慰失败后的 `,
      MF.get_colored_name(),
      ` 了，自那次对她来说至关重要的比赛失败后，破裂成无数碎片的自信心再也没有合起来过。`,
    ]);
    await me.print_and_wait([
      `稍稍挪了一下桌面上的文件，以免她的泪水滴在文件上。`,
    ]);
    await me.say_and_wait([`……这次的理由是什么？`]);
    await MF.say_and_wait([`运势不佳。`]);
    await me.print_and_wait([
      `也对， `,
      me.get_colored_name(),
      ` 还能从她的口中听到什么回答，`,
    ]);
    await me.print_and_wait([
      `就算是被她口口生生叫着是命定之人的 `,
      me.get_colored_name(),
      ` ，现在也感觉有些厌烦了。`,
    ]);
    await me.print_and_wait([`该怎么办呢？`]);
    await me.print_and_wait([`自信......自信......自信......`]);
    await me.print_and_wait([
      `面前这家伙明明很强的，为什么，为什么连 `,
      me.get_colored_name(),
      ` 这样一个普通的人类都能把她当成是养殖场里的兔子一样对待，是时候让她意识到这一点了。`,
    ]);
    await me.print_and_wait([
      ` `,
      me.get_colored_name(),
      ` 走到她面前，弯下腰，在她闪躲的目光中，抬起了她的双手，放在了自己的脖颈上。`,
    ]);
    await me.say_and_wait([`感觉到了吗？阿福。`]);
    await MF.say_and_wait([`那个，那个，训练员这回要怎么惩罚我？`]);
    await me.print_and_wait([
      `于是， `,
      me.get_colored_name(),
      ` 在她略微有些期待的目光中回答到。`,
    ]);
    await me.say_and_wait([`试着掐一下我吧！`]);
    await me.print_and_wait([`就是这样，勾起赛马娘埋在心底的支配欲。`]);
    await me.print_and_wait([
      `对一直压制着自己的 `,
      MF.get_colored_name(),
      ` 而言，突然释放出来的结果和随之而来的快感只会更为强烈。`,
    ]);
    await me.print_and_wait([
      `连自己最敬重的训练员都能踩在脚下，理所当然的自卑也就不存在了。`,
    ]);
    await me.print_and_wait([
      `窒息感逐渐涌了上来，在失去意识前，最后记得的是面前 `,
      MF.get_colored_name(),
      ` 带着可爱笑容的俏脸。`,
    ]);
    era.set('talent:56:1050', 1);
    era.set('talent:56:自信程度', 0);
    era.printMultiColumns([
      {
        content: [` `, MF.get_colored_name(), `  不再 [自卑] 了！`],
        type: 'text',
      },
    ]);
    era.printMultiColumns([
      {
        content: [` `, MF.get_colored_name(), `  获得了 [抖S] 了！`],
        type: 'text',
      },
    ]);
    await me.print_and_wait([
      `计划是成功的， `,
      MF.get_colored_name(),
      ` 的确变得强硬了很多，作为差马在红技能的使用上变得愈发熟练，或者说……狠毒？`,
    ]);
    await me.print_and_wait([
      `在推开家里的门前， `,
      me.get_colored_name(),
      ` 想着这件事。`,
    ]);
    await me.print_and_wait([
      `在家里迎接 `,
      me.get_colored_name(),
      ` 的是直截了当的一拳，用手捂着脸颊，逐渐变成朱红色的嘴角正滴下些许带着血的唾液。`,
    ]);
    await me.print_and_wait([
      `抬起头，身前的 `,
      MF.get_colored_name(),
      ` 舔了舔嘴唇，露出了在你眼中仍然如太阳般明亮的笑容。`,
    ]);

    await me.print_and_wait([
      `在她下一脚踢到 `,
      me.get_colored_name(),
      ` 的肚子上前， `,
      me.get_colored_name(),
      ` 突然想起还没有约定今天的安全词是什么。`,
    ]);
    await print_event_name(
      [{ content: '给现人神的祭品', color: buff_colors[3] }],
      MF,
    );
  }
};

/**
 * 待兼福来 - 育成
 *
 * @author Alex
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
