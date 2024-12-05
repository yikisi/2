const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { race_enum } = require('#/data/race/race-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,number,FukuEventMarks,RaceStartParams):Promise>} */
const handlers = {};

handlers[race_enum.begin_race] = async (kitaru, me, callname, edu_weeks) => {
  if (edu_weeks > 48) {
    return true;
  }
  await print_event_name('迎接出道战', kitaru);
  await era.printAndWait([
    kitaru.get_colored_name(),
    ' 参加出道赛的日子终于到来了。',
  ]);
  await era.printAndWait([
    '从平日训练时的数据来看，名叫 ',
    kitaru.get_colored_name(),
    ' 的赛',
    kitaru.get_uma_sex_title(),
    '除了面对逃马容易焦躁之外，其余的能力均在同期中上。',
  ]);
  await era.printAndWait([
    '在出示了证件之后，',
    me.get_colored_name(),
    ' 被许可进入了 ',
    kitaru.get_colored_name(),
    ' 的赛前休息室。',
  ]);
  await kitaru.say_and_wait([callname, '！！！']);
  await era.printAndWait([
    '在看到 ',
    me.get_colored_name(),
    ' 走进房间后 ',
    kitaru.get_colored_name(),
    ' 兴奋地冲 ',
    me.get_colored_name(),
    ' 跑了过来。',
  ]);
  await era.printAndWait(['倒是出乎 ', me.get_colored_name(), ' 的意料。']);
  if (era.get('flag:当前声望') >= 500) {
    await era.printAndWait([
      '印象中大部分赛',
      kitaru.get_uma_sex_title(),
      '这个时候都会紧张的不得了，但是 ',
      kitaru.get_colored_name(),
      ' 却是一副兴奋不已的样子。',
    ]);
  } else {
    await era.printAndWait([
      '听前辈们说，大部分赛',
      kitaru.get_uma_sex_title(),
      '这个时候都会紧张的不得了，但是 ',
      kitaru.get_colored_name(),
      ' 却是一副兴奋不已的样子。',
    ]);
  }
  await era.printAndWait([
    me.get_colored_name(),
    ' 上下打量了一番待兼福来，',
    kitaru.sex,
    '看起来兴奋不已，一如',
    kitaru.sex,
    '曾经提到过的全身充满了灵力时的表现。',
  ]);
  era.printButton('「运势不错？」', 1);
  await era.input();
  if (era.get('status:56:凶') === 1) {
    await kitaru.say_and_wait('勉勉强强吧……不过出道战大概没问题就是啦。');
  } else {
    await kitaru.say_and_wait('嗯！现在我可是有白兴大人附身的呢！');
  }
  await kitaru.say_and_wait(
    '况且祂派来的神使也在我身边，我和那时候可不一样了！',
  );
  era.printButton('「那时候？」', 1);
  await era.input();
  await era.printAndWait('似乎是没想到自己会不小心说出来。');
  await era.printAndWait([
    '本来满脸堆笑的 ',
    kitaru.get_colored_name(),
    ' 突然顿住了，表情变得有些复杂。',
  ]);
  await kitaru.say_and_wait([
    '在我',
    kitaru.get_bigger_sibling_sex_title(),
    '……总之……',
  ]);
  await era.printAndWait([
    kitaru.get_colored_name(),
    ' 深吸了几口气，随后继续讲了下去。',
  ]);
  await kitaru.say_and_wait(
    '当时是我有生以来第一次想要抽签！结果因为没有零钱，只好放弃的那一天！',
  );
  await kitaru.say_and_wait('不过和那次不一样！我现在有个强而有力的同伴呢！');
  await era.printAndWait([
    '话毕，',
    me.get_colored_name(),
    '  熟悉的，',
    kitaru.get_colored_name(),
    '  的笑容再次出现在了',
    kitaru.sex,
    '的脸上。',
  ]);
};

handlers[race_enum.aoba_sho] = async (kitaru, me, callname) => {
  await print_event_name('迎接青叶赏', kitaru);
  await era.printAndWait('青叶赏乃是日本德比的预选赛。');
  await era.printAndWait([
    '因此许多想借此获取日本德比出走资格的赛',
    kitaru.get_uma_sex_title(),
    '都会参加这比赛。',
  ]);
  await era.printAndWait(
    '光是在赛前展示阶段的其他选手散发而出的气势便和出道战大不相同。',
  );
  if (era.get('flag:当前声望') >= 500) {
    await era.printAndWait([
      '即使对于身经百战的 ',
      me.get_colored_name(),
      ' 而言，也带来了不少重压。',
    ]);
  } else {
    await era.printAndWait([
      '哪怕对作为训练员的 ',
      me.get_colored_name(),
      '，也带来了不少重压。',
    ]);
  }
  era.drawLine({ content: '东京赛马场 休息室门前' });
  era.printButton('推开门', 1);
  await era.input();
  await era.printAndWait([
    '再次进入赛前休息室，希望能见到同上次出道战时一样的 ',
    kitaru.get_colored_name(),
    '……',
  ]);
  await kitaru.say_and_wait('呼……哈！呼……哈！');
  await era.printAndWait([
    '事与愿违，像是呼吸不上来一样，',
    kitaru.sex,
    '大口地喘着气。',
  ]);
  era.printButton('「需要我给你一个纸袋吗？」', 1);
  await era.input();
  await kitaru.say_and_wait('啊哈哈……没事的！没事的！');
  await kitaru.say_and_wait('就连赛前的占卜不是也说我现在是大吉吗？');
  await kitaru.say_and_wait([
    '白兴大人……',
    callname,
    '……还有',
    kitaru.get_bigger_sibling_sex_title(),
    '……',
  ]);
  await kitaru.say_and_wait('没事的！一定会没事的！');
  await era.printAndWait([
    '不应该……',
    kitaru.get_colored_name(),
    ' 的表现过于应激了，就算用单纯的赛前紧张来解释也完全说不通。',
  ]);
  await kitaru.say_and_wait('好了好了！没问题的，我们之后还在菊花赏上夺胜呢！');
  await era.printAndWait([
    '似乎是察觉到了 ',
    me.get_colored_name(),
    ' 的担心，',
    kitaru.get_colored_name(),
    ' 尝试转开了话题。',
  ]);
  await kitaru.say_and_wait('对……对，为了之后的菊花赏，我会全力以赴的！');
  await era.printAndWait([
    '过于明显的自我暗示，希望对于 ',
    kitaru.get_colored_name(),
    ' 而言是有效的。',
  ]);
};

handlers[race_enum.toky_yus] = async (kitaru, me, callname) => {
  await print_event_name('迎接日本德比', kitaru);
  await era.printAndWait([
    '在 ',
    kitaru.get_colored_name(),
    ' 的强烈要求下，维持了原定于日本德比的出走计划。',
  ]);
  await era.printAndWait([
    '近乎所有同期的优秀赛',
    kitaru.get_uma_sex_title(),
    '都报名参加了这场比赛，从人气排名来看，',
    kitaru.get_colored_name(),
    ' 只是那些被媒体评价为重在参与的，不起眼的一位。',
  ]);
  await era.printAndWait(
    '也不只有一家媒体，抨击了其位于青叶赏突然失速的表现。',
  );
  era.drawLine({ content: '东京赛马场 休息室门前' });
  era.printButton('推开门', 1);
  await era.input();
  await era.printAndWait([kitaru.sex, '正站在房间内，']);
  await era.printAndWait(
    '让人第一眼以为是水手服的衣物，却有着如巫女服般故意裸露出双肩的设计，赤红的领子如强调般地落在撑出明显形状的挺拔间，',
  );
  await era.printAndWait(
    '下身则是堪堪能遮住其安产形臀部的百褶裙与勾勒出其修长双腿的白色丝袜，还有代表着其巫女身份的绘马，念珠，背后是象征着好运的招财猫',
  );
  await era.printAndWait([
    '这便是名叫 ',
    kitaru.get_colored_name(),
    ' 的赛',
    kitaru.get_uma_sex_title(),
    '的决胜服，可爱，元气，性感，神秘，一切都在这一身服装之中得到了完美的结合。',
  ]);
  era.printButton('「没问题？」', 1);
  await era.input();
  await kitaru.say_and_wait('虽然很想说没问题……但……');
  await kitaru.say_and_wait('光是在展示环节听着粉丝们的声援，就开始紧张了。');
  await kitaru.say_and_wait(['但……', callname, '！']);
  await era.printAndWait([
    '橘发的',
    kitaru.get_teen_sex_title(),
    '深吸一口气，回过头来冲 ',
    me.get_colored_name(),
    ' 尽可能的比了个笑容。',
  ]);
  await kitaru.say_and_wait('所谓最幸运的马赢德比呢！');
  await kitaru.say_and_wait([
    '要论幸运这一块！有白兴大人和 ',
    callname,
    ' 双重加持的我，可是无敌的！',
  ]);
  await era.printAndWait([
    kitaru.sex,
    '向 ',
    me.get_colored_name(),
    ' 比了一个大拇指，自上次立下约定后，',
    me.get_colored_name(),
    ' 能明显感觉到 ',
    kitaru.get_colored_name(),
    ' 的态度转变了许多。',
  ]);
  await era.printAndWait([
    '至少和 ',
    me.get_colored_name(),
    ' 在一起的时候，脸上的微笑没那么刻板了。',
  ]);
  era.printButton('「我可不希望你燃尽啊」', 1);
  await era.input();
  era.printButton('「平安回来！」', 1);
  await era.input();
  await kitaru.say_and_wait('嗯！');
  await kitaru.say_and_wait(['我答应过 ', callname, ' 的！']);
  if (era.get('love:56') >= 50) {
    await kitaru.say_and_wait(['不过 ', callname, ' 也给我些开运能量吧！']);
    await era.printAndWait([
      '这样说着，穿着决胜服的 ',
      kitaru.get_colored_name(),
      ' 忽然从面前抱住了 ',
      me.get_colored_name(),
      ' 的身体。',
    ]);
    await era.printAndWait([
      '蓬松的橙色头发在 ',
      me.get_colored_name(),
      ' 的胸前蹭着。',
    ]);
    await era.printAndWait([
      '过了好一会儿，心满意足的 ',
      kitaru.get_colored_name(),
      ' 才抬起头看着 ',
      me.get_colored_name(),
      '。',
    ]);
  }
  await kitaru.say_and_wait([callname, ' 知道吗？']);
  await kitaru.say_and_wait('在仪式中，言语可是有着很重的分量呢！');
  await kitaru.say_and_wait('所以承诺过的事情！我一定会做到的！');
  await era.printAndWait([
    '话毕，调整了一下自己招财猫背包的背带的 ',
    kitaru.get_colored_name(),
    ' 转身走向赛场。',
  ]);
};

handlers[race_enum.kobe_hai] = async (kitaru, me, callname) => {
  await print_event_name('迎接神户新闻赏', kitaru);
  await era.printAndWait([
    '严肃到近乎面无表情的 ',
    kitaru.get_colored_name(),
    ' 正坐在休息室的长椅上。',
  ]);
  await era.printAndWait([
    '过于正式的坐姿倒是让贴在体操服上的号码布弯曲的弧度变得更加明显，穿着白色长筒袜的双腿紧紧并拢在一起，在大腿根处勒出一道诱人的曲线。',
  ]);
  await era.printAndWait([
    '再加上……',
    me.get_colored_name(),
    ' 一想到这家伙平时经常脱线的样子，',
    me.get_colored_name(),
    ' 的笑声抑制不住的从嘴角漏出来。',
  ]);
  await kitaru.say_and_wait([callname, ' 笑什么？']);
  await era.printAndWait([
    kitaru.get_colored_name(),
    ' 仍是强装着正经问着 ',
    me.get_colored_name(),
    '，不过嘴角还是明显的抽动了一下。',
  ]);
  era.printButton('「很紧张吗？」', 1);
  await era.input();
  await kitaru.say_and_wait('不，毕竟夏季合宿准备了那么久……');
  await era.printAndWait('扯了扯两下胸口的号码布，试图分散自己的注意力。');
  await era.printAndWait([
    '不过当 ',
    me.get_colored_name(),
    ' 走过去坐在 ',
    kitaru.get_colored_name(),
    ' 的身边时，',
    kitaru.sex,
    '原本严肃的表情还是被打破了。',
  ]);
  await kitaru.say_and_wait('唔……还是有一点的。');
  await kitaru.say_and_wait(
    '明明知道更难的应该还在后头，没想到现在就有些害怕了。',
  );
  await era.printAndWait([
    '歪着身子靠在 ',
    me.get_colored_name(),
    ' 的肩膀上，',
    kitaru.get_colored_name(),
    ' 呼吸缓和了几分，如此近的距离 ',
    me.get_colored_name(),
    ' 也能闻到',
    kitaru.sex,
    '那股神社般清冷的体香。',
  ]);
  await kitaru.say_and_wait('嗅……嗅……');
  await kitaru.say_and_wait([
    '听 ',
    sys_get_colored_callname(56, 5),
    ' 说过，能感受到互相味道好闻，是两人的相性很好的证明……',
  ]);
  await kitaru.say_and_wait('有点冷静下来了呢……');
  await kitaru.say_and_wait(['话说，', callname, ' 对于约定是怎么看的呢？']);
  await era.printAndWait([
    '没等 ',
    me.get_colored_name(),
    ' 回答，',
    kitaru.get_teen_sex_title(),
    '自顾自地说了下去。',
  ]);
  await kitaru.say_and_wait(
    '在我看来，做了约定的双方，就会互相把自己命运中的一部分和对方绑在一起。',
  );
  await kitaru.say_and_wait([
    '所以啊，和',
    kitaru.get_bigger_sibling_sex_title(),
    '做了约定的我，踏上了本该属于',
    kitaru.sex,
    '的道路，为此当然要好好表现才行。',
  ]);
  await kitaru.say_and_wait('呼……');
  era.printButton('「倒是希望之后能看见属于福来的道路。」', 1);
  await era.input();
  await kitaru.say_and_wait('啊！');
  await kitaru.say_and_wait('这样吗！？');
  await kitaru.say_and_wait('呼……还是先完成眼前的事情吧。');
  await kitaru.say_and_wait('总之 是时候出发了……');
  await kitaru.say_and_wait(['等着我吧 ', callname, '！']);
  await kitaru.say_and_wait('为了打开通向菊花赏的大门，我会全力以赴的！');
};

handlers[race_enum.kiku_sho] = async (kitaru, me, callname) => {
  await print_event_name('迎接菊花赏', kitaru);
  await kitaru.say_and_wait('终于……和承诺中的一样……还是走到了这一步啊！');
  await kitaru.say_and_wait('在拥有众多神社与佛寺的京都！');
  await kitaru.say_and_wait('以菊花为象征的重要比赛！');
  await era.printAndWait([
    '这是 ',
    kitaru.get_colored_name(),
    ' 第一次挑战3000米的比赛，这种炼狱般的长距离。',
  ]);
  await era.printAndWait(['理所当然的，', kitaru.sex, '看起来有些紧张。']);
  await era.printAndWait([
    '从最开始和',
    kitaru.sex,
    '确立下菊花赏的目标之后，',
    me.get_colored_name(),
    ' 便能感受到',
    kitaru.sex,
    '对于此的执念，和',
    kitaru.get_bigger_sibling_sex_title(),
    '的约定，和 ',
    me.get_colored_name(),
    ' 的约定，支撑着名为 ',
    kitaru.get_colored_name(),
    ' 的',
    kitaru.get_teen_sex_title(),
    '走到现在这一步。',
  ]);
  await era.printAndWait(['如今，', kitaru.sex, '的目标就在眼前。']);
  await kitaru.say_and_wait(['那个，', callname, '！']);
  era.printButton('「怎么了」', 1);
  await era.input();
  await kitaru.say_and_wait('能握住我的手吗？');
  await era.printAndWait([
    kitaru.get_teen_sex_title(),
    '有些扭捏的看向了 ',
    me.get_colored_name(),
    '。',
  ]);
  await era.printAndWait([
    '突如其来的请求，或许又是 ',
    kitaru.get_colored_name(),
    ' 临时想出的另一个仪式。',
  ]);
  era.printButton('伸手', 1);
  await era.input();
  await era.printAndWait([
    '赛',
    kitaru.get_uma_sex_title(),
    '略高的体温，自',
    kitaru.sex,
    '的掌心传来，',
    me.get_colored_name(),
    ' 发现 ',
    kitaru.get_colored_name(),
    ' 急促的呼吸转缓了许多。',
  ]);
  await kitaru.say_and_wait('虽然……现在可能不是说这个的时候。');
  await kitaru.say_and_wait([
    '即使在',
    kitaru.get_bigger_sibling_sex_title(),
    '去世后，承诺替',
    kitaru.sex,
    '实现在菊花赏上奔跑的愿望，对我来说也不过是奢望罢了。',
  ]);
  await kitaru.say_and_wait([
    '如今居然能走到这一步，',
    callname,
    ' 对我来说，真的真的，和天神派来的使者别无二致！',
  ]);
  await kitaru.say_and_wait('呼……');
  await kitaru.say_and_wait('欸嘿嘿！');
  await kitaru.say_and_wait('果然啊，说出来就好多了！');
  await kitaru.say_and_wait(['那么，', callname, '，我出发了！']);
  await kitaru.say_and_wait('请静待我……我们向神明们呈上胜利吧！');
};

handlers[race_enum.kink_sho] = async (kitaru, me, callname, _, edu_marks) => {
  await print_event_name('迎接金號赏', kitaru);
  await kitaru.say_and_wait('呼哇……真是时隔了好久之后的比赛。');
  era.printButton('「准备的怎么样？」', 1);
  await era.input();
  await kitaru.say_and_wait('马马虎虎啦！');
  await kitaru.say_and_wait('唔！没有什么特别的感觉呢……');
  await kitaru.say_and_wait('幸运缠身的我，只要奔跑就会一直赢下去吧？');
  await era.printAndWait([
    '穿着体操服的 ',
    kitaru.get_colored_name(),
    ' 笑意盈盈的看着 ',
    me.get_colored_name(),
    '。',
  ]);
  if (era.get('love:56') > 75) {
    await kitaru.say_and_wait('对了对了！');
    await kitaru.say_and_wait([callname, '！再陪我做一个开运的仪式吧！']);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 还未反应过来的时候，用手轻轻捧起了 ',
      me.get_colored_name(),
      ' 的脸。',
    ]);
    await me.say_and_wait('唔！');
    await era.printAndWait([
      '通常来讲会固守齿后的小舌，这次却一反常态的侵入 ',
      me.get_colored_name(),
      ' 的口腔，送上属于 ',
      kitaru.get_colored_name(),
      ' 的涎液。',
    ]);
    await kitaru.say_and_wait('啾～');
    await era.printAndWait(
      '直到由于通知选手入闸，而不得不停止这一次时间长的有些离谱的激吻。',
    );
    await kitaru.say_and_wait(['好了！', callname, '！我出发了！']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 的脸上红云浮动，让 ',
      me.get_colored_name(),
      ' 不禁怀疑这家伙到底放了多少心思在跑步上。',
    ]);
    begin_and_init_ero(0, 56);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(56, part_enum.mouth),
      false,
    );
    end_ero_and_train();
    edu_marks.kink_shoKISS = 1;
  }
  era.printButton('「还是要认真一点吧？」', 1);
  await era.input();
  await kitaru.say_and_wait(['欸，', callname, '！']);
  await kitaru.say_and_wait('明明带给我如此好运的就是你啊！');
  await kitaru.say_and_wait('你只需要坐那里看着就行！');
  await kitaru.say_and_wait('大吉的我只要随便跑跑就能赢了！');
  await era.printAndWait([
    '漠然，乃至于有些冷淡的态度，似乎比赛对',
    kitaru.sex,
    '而言是什么完全无关的事情一样。',
  ]);
  await era.printAndWait([
    '只是在服从 ',
    me.get_colored_name(),
    ' 的命令踏上赛场。',
  ]);
  await kitaru.say_and_wait('好了好了，不用再说了！');
  await era.printAndWait([
    '也许在菊花赏上，随着 ',
    kitaru.get_colored_name(),
    ' 的执念一同献祭掉的，还有什么别的东西。',
  ]);
};

handlers[race_enum.takz_kin] = async (kitaru, me, callname, edu_weeks) => {
  if (edu_weeks < 96) {
    return true;
  }
  await print_event_name('迎接宝冢纪念', kitaru);
  await kitaru.say_and_wait('通向荣耀的参拜道路本来应该已经中断！');
  await kitaru.say_and_wait('但是，大家大大小小的愿望一个又一个汇聚起来！');
  await kitaru.say_and_wait('替我再次开辟出那条道路了！');
  await kitaru.say_and_wait('宝冢纪念！');
  await kitaru.say_and_wait(['我绝对不会辜负他们的，', callname, '！']);
  await kitaru.say_and_wait('我会跑出一场最棒的比赛给大家看！');
  era.printButton('「已经没事了？」', 1);
  await era.input();
  await kitaru.say_and_wait(
    '是的！之前我只是背着',
    kitaru.get_bigger_sibling_sex_title(),
    '的愿望，靠着大大小小的开运道具前行。',
  );
  await kitaru.say_and_wait(
    '但现在的我，还背负着许多粉丝的愿望！比之前强太多了！',
  );
  await kitaru.say_and_wait('还有最重要的，自己想要获胜的心情！');
  await kitaru.say_and_wait('这场仪式……');
  await kitaru.say_and_wait(
    '不……比赛，我不会依靠运气，而是用我自己的意志去跑！',
  );
  era.printButton('「听起来有点太耍帅了呢？」', 1);
  era.printButton('「保持这个势头向前冲吧！」', 2);
  if ((await era.input()) === 1) {
    await kitaru.say_and_wait('说，说的也算呢～这样太夸张了，太夸张了……');
  } else {
    await kitaru.say_and_wait('嗯！……尽管就连我自己都觉得有点太夸张了。');
  }
  await kitaru.say_and_wait(
    '不过！我的心情可是货真价实的！这次签筒里会抽出什么！',
  );
  await kitaru.say_and_wait('是由我自己决定！');
};

handlers[race_enum.arim_kin] = async (kitaru, me, callname, edu_weeks) => {
  if (edu_weeks < 96) {
    return true;
  }
  await print_event_name('迎接有马纪念', kitaru);
  await era.printAndWait([
    '少有的陪着 ',
    kitaru.get_colored_name(),
    ' 一起走到了通向跑道的地下通道内。',
  ]);
  await era.printAndWait([
    '出口如同被选中的人才能通过的怪物之口，而每当',
    kitaru.get_uma_sex_title(),
    '被出口的阳光所吞噬时。',
  ]);
  await era.printAndWait(
    '粉丝们的声援就会在远处响起，就像吃到美味佳肴后满意地咆哮的怪物的声音一样。',
  );
  await era.printAndWait(
    '观众们的欢呼声叠加在一起，连地下通道的墙壁都发生了震动。',
  );
  await era.printAndWait([
    '直到 ',
    me.get_colored_name(),
    ' 看见走在前方的 ',
    kitaru.get_colored_name(),
    ' 如从梦中被惊醒一般的停滞了一下。',
  ]);
  era.printButton('「还好吗？」', 1);
  await era.input();
  await kitaru.say_and_wait('唔！');
  await kitaru.say_and_wait('……真的来到了有马纪念啊！');
  await kitaru.say_and_wait('一路上给不少人添麻烦了……');
  era.printButton('「那为了他们，拿下今天的胜利吧！」', 1);
  await era.input();
  await kitaru.say_and_wait('嗯！');
  await era.printAndWait([
    '大家都已经入场了，地下通道内只剩下了 ',
    me.get_colored_name(),
    ' 和 ',
    kitaru.get_colored_name(),
    '。',
  ]);
  await kitaru.say_and_wait('对了！');
  await kitaru.say_and_wait('那个……想要运气的支援呢！');
  if (era.get('love:56') < 50) {
    await era.printAndWait([
      '带着炽热体温的橙发',
      kitaru.get_uma_sex_title(),
      '扑进了 ',
      me.get_colored_name(),
      ' 的胸膛，耳朵抽动着拍了几下 ',
      me.get_colored_name(),
      ' 的脸。',
    ]);
  } else {
    await era.printAndWait([
      '凝视了片刻后，',
      me.get_colored_name(),
      ' 的手还是绕过了 ',
      kitaru.get_colored_name(),
      ' 的侧颈，抚着',
      kitaru.sex,
      '的后脑，低头吻住了',
      kitaru.sex,
      '的嘴。',
    ]);
    await era.printAndWait('在明知可能会被其他选手看见的场合交换起唾液来。');
    era.println();
    await say_by_passer_by_and_wait(
      `路人${kitaru.get_uma_sex_title()}`,
      '真是肉麻……',
    );
    era.println();
  }
  await kitaru.say_and_wait('呼……这下感觉眼里都能流出神签来呢！');
  await era.printAndWait([
    '如此近的距离，',
    me.get_colored_name(),
    ' 发现',
    kitaru.sex,
    '双瞳中的星星变得更加的明亮了。',
  ]);
  await kitaru.say_and_wait(['那我出发了，', callname, '！']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 目送着 ',
    kitaru.get_colored_name(),
    ' 穿过地下马道，越过怪物的嘴，被天空降下的白色光芒所笼罩。',
  ]);
  await era.printAndWait('在轰轰烈烈喧嚣声的伴随下走进了闸门。');
  era.drawLine({ content: '中山赛马场 马闸内' });
  await kitaru.print_and_wait(
    '之前，我一直以为，只要幸运站在我这一边，我就能走到这一步！',
  );
  await kitaru.print_and_wait(
    '不过，单凭幸运是无法来到这里的！是许许多多的缘分指引我前来的！',
  );
  await kitaru.print_and_wait('把自己投射在我身上，为我加油的粉丝们！');
  await kitaru.print_and_wait('同期的伙伴！');
  await kitaru.print_and_wait(
    '过世的',
    kitaru.get_bigger_sibling_sex_title(),
    '！',
  );
  await kitaru.print_and_wait(['还有一直拼命培育我的 ', callname, '！']);
  await kitaru.print_and_wait('我今天不会向神明祈祷。');
  await kitaru.print_and_wait('今天——');
  await kitaru.print_and_wait('是由我成为神明——成为白兴大人！');
  await kitaru.print_and_wait('我要成为带给大家幸福的福娘！');
};

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {RaceStartParams} extra_flag
 */
module.exports = async (kitaru, me, callname, extra_flag) => {
  const edu_marks = new FukuEventMarks(),
    edu_weeks = era.get('cflag:56:育成回合计时');
  if (
    !handlers[extra_flag.race] ||
    (await handlers[extra_flag.race](
      kitaru,
      me,
      callname,
      edu_weeks,
      edu_marks,
      extra_flag,
    ))
  ) {
    if (
      era.get('mark:56:淫纹') &&
      !edu_marks.tattoo &&
      kitaru.sex_code !== 1 &&
      me.sex_code > 0
    ) {
      edu_marks.tattoo = 1;
      await print_event_name('不合时宜的发情', kitaru);
      await kitaru.say_and_wait('唔……');
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '捂着小腹的 ',
        kitaru.get_colored_name(),
        ' 弓着背站在 ',
        me.get_colored_name(),
        ' 的面前，泛红的脸颊显露出一股发情般的恍惚。',
      ]);
      await kitaru.say_and_wait([callname, '……要……好想要……']);
      await era.printAndWait([
        '为什么会突然这样子，',
        me.get_colored_name(),
        ' 不禁有些慌乱。',
      ]);
      await era.printAndWait([
        '可还没等 ',
        me.get_colored_name(),
        ' 细想，',
        kitaru.get_colored_name(),
        ' 已经半跪着跌在了地上。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 看见',
        kitaru.sex,
        '拉起了自己衣服的下摆，已经泛着绯红的小腹处，那个由 ',
        me.get_colored_name(),
        ' 画上的淫纹正不合时宜的发着粉红色的微光。',
      ]);
      await era.printAndWait([
        '毫无疑问，这正是让 ',
        kitaru.get_colored_name(),
        ' 现在从身体到内心都完全进入做爱状态的罪魁祸首。',
      ]);
      await kitaru.say_and_wait([callname, '……抱歉……']);
      await era.printAndWait([
        '坐在长椅上的 ',
        me.get_colored_name(),
        ' 看着 ',
        kitaru.get_colored_name(),
        ' 膝行着来到 ',
        me.get_colored_name(),
        ' 的双腿之间，然后这只发情母马自觉地趴在了 ',
        me.get_colored_name(),
        ' 的胯部。',
      ]);
      await era.printAndWait([
        '只是隔着布料散发处的气味，就给了占卜师小姐的小腹重重的一击。',
      ]);
      await era.printAndWait([
        '淫纹催生着 ',
        kitaru.get_colored_name(),
        ' 的身体散发出甜香的荷尔蒙气息，魅惑的神态也让 ',
        me.get_colored_name(),
        ' 下身的凸起愈发鼓胀。',
      ]);
      await kitaru.say_and_wait('唔呼！');
      await era.printAndWait([
        '张开微红的唇瓣，雪白的贝齿咬在 ',
        me.get_colored_name(),
        ' 裤子的拉链上将其慢慢拉开，被解开了约束的粗大胀红肉茎从西装裤中蹦出。',
      ]);
      await kitaru.say_and_wait('肉棒先生……你好……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 贪婪地嗅着 ',
        me.get_colored_name(),
        ' 下体发出的性臭味，而后急不可耐的用舌尖吻上了肉棒的前端。',
      ]);
      await kitaru.say_and_wait('咕啾！');
      await era.printAndWait([
        '自铃口溢出的粘液被 ',
        kitaru.get_colored_name(),
        ' 的舌尖舔去，又将肉茎整个吞入口中，晶莹的涎水在肉棒进出间从赛',
        kitaru.get_uma_sex_title(),
        '选手的嘴角滴落，为双唇的粉红抹上一层釉彩。',
      ]);
      await era.printAndWait([
        '鼓出了肉棒的形状的两腮配合着咕啾咕啾的粘稠吸吮声，说不定隔着门都能听见。',
      ]);
      await kitaru.say_and_wait('唔嗯！');
      await era.printAndWait([
        '看来内裤的布料忠实的履行了自己的职责，',
        kitaru.get_colored_name(),
        ' 下身的衣物倒是没什么异样，但逐渐乏力的双腿还是说明了 ',
        kitaru.get_colored_name(),
        ' 的小腹对',
        kitaru.sex,
        '发出的催促。',
      ]);
      await kitaru.say_and_wait('嘶……！');
      await era.printAndWait([
        '如乞食的金鱼吞入饵食，深吻一般让龟头抵着喉咙的软肉，姣好的脸颊也因为龟冠的强行闯入而不得不向两边鼓凸，喉咙发出摄食般咕咕的吞咽声音。',
      ]);
      await kitaru.say_and_wait('咕呃……！');
      await era.printAndWait([
        '琼鼻抵在 ',
        me.get_colored_name(),
        ' 的阴毛丛中，让将要踏上赛场的 ',
        kitaru.get_colored_name(),
        ' 肺部充满属于 ',
        me.get_colored_name(),
        ' 的气味。',
      ]);
      await era.printAndWait('噗咻！');
      await era.printAndWait([
        '尽管窒息感让眼泪涌出眼角，被 ',
        me.get_colored_name(),
        ' 刻下了淫纹的 ',
        kitaru.get_colored_name(),
        ' 却依然死死的抵着 ',
        me.get_colored_name(),
        ' 的胯下，让又腥又臭的气味被',
        kitaru.get_uma_sex_title(),
        '灵敏的味蕾和鼻腔不断放大。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的小舌被继续胀大的肉棒压的扁平，喉头的软肉也参与了对龟头的按摩。',
      ]);
      await kitaru.say_and_wait('哈……哈……');
      await era.printAndWait([
        '肉棒在湿热紧致的口穴进进出出，伴随着阵阵激烈的吸力，',
        me.get_colored_name(),
        ' 抵达了射精的终点',
      ]);
      await kitaru.say_and_wait('咕哈！');
      await era.printAndWait([
        '些许嘴角溢出的精液被未卜先知的占卜师小姐捧在了掌心，急不可耐的继续送入嘴中。',
      ]);
      await kitaru.say_and_wait('咕嘟！');
      await era.printAndWait([
        '间或涌出的残精也一起伴随着喉咙蠕动的吞咽声入腹。',
      ]);
      await era.printAndWait([
        '适时的，通知选手的声音响起，',
        kitaru.sex,
        '才慢慢的从 ',
        me.get_colored_name(),
        ' 的胯下站起，用食指撇去了嘴角的精液与几根卷曲的阴毛，而后伸出舌尖将它们卷入口腔。',
      ]);
      await era.printAndWait([
        '直到此时，',
        kitaru.get_colored_name(),
        ' 的瞳孔才恢复些许清明。',
      ]);
      await kitaru.say_and_wait('呼……');
      await kitaru.say_and_wait('好多了……');
      await kitaru.say_and_wait([
        '真是的！',
        callname,
        ' 的淫纹控制太不熟练了！',
      ]);
      await era.printAndWait([
        '带上些责骂的语气，',
        kitaru.get_colored_name(),
        ' 缓缓从地上站了起来，白色长筒袜的上端已经沾染了些内裤没有拦住的外溢穴汁。',
      ]);
      await kitaru.say_and_wait([
        '不过，在吞下 ',
        callname,
        ' 精液之后，莫名觉得很精神呢！',
      ]);
      await kitaru.say_and_wait('能发挥的更好也不一定？');
      await era.printAndWait([
        '在仔细打理了一下自己的外表，确保不会被别人看出异常后，',
        kitaru.get_colored_name(),
        ' 才离开了赛前等候室。',
      ]);
      get_attr_and_print_in_event(56, [0, 10, 0, 0, 0], 0) &&
        (await era.waitAnyKey());
    } else {
      let message = [];
      const sex_mark = era.get('mark:56:淫纹'),
        sex_happy = era.get('mark:56:欢愉'),
        sex_love = era.get('mark:56:同心');

      if (sex_mark > 1) {
        message.push(() =>
          kitaru
            .say_and_wait('……幸好我的决胜服不是露肚子的。')
            .then(() =>
              era.printAndWait(
                '不过因为赛前激动而一并产生效果的淫纹，散发出的粉色光芒还是隐约可见。',
              ),
            ),
        );
      }
      if (sex_happy > 1) {
        message.push(() =>
          kitaru
            .say_and_wait('唔……非常，非常期待比赛之后的奖励呢！')
            .then(() =>
              era.printAndWait([
                '因为比赛而禁欲了一段时间 ',
                kitaru.get_colored_name(),
                '，只是想到这里身体就微微开始发抖。',
              ]),
            ),
        );
      }
      if (sex_love > 1) {
        message.push(() =>
          kitaru
            .say_and_wait('之后……命定之人明白的吧！')
            .then(() => kitaru.say_and_wait('唔！'))
            .then(() =>
              era.printAndWait([
                '踮起脚尖，在 ',
                me.get_colored_name(),
                ' 脸颊上轻轻啄了一下，',
                kitaru.get_colored_name(),
                ' 向赛场走去。',
              ]),
            ),
        );
      }

      if (edu_marks.begin_race_end < 8) {
        message.push(() =>
          kitaru
            .say_and_wait('……我拜请白兴大人，祂的伟力谅必能给我开辟出道路！')
            .then(() =>
              era.printAndWait([
                '念着不知从哪里听到的祷词，',
                kitaru.get_colored_name(),
                ' 的身影消失在赛场的入口处。',
              ]),
            ),
        );
        message.push(() =>
          kitaru
            .say_and_wait('……群星移动到了正确的位置呢！')
            .then(() =>
              era.printAndWait([
                '将水晶球塞回招财猫背包里，',
                kitaru.get_colored_name(),
                ' 的身影消失在赛场的入口处。',
              ]),
            ),
        );
      } else {
        message.push(() =>
          kitaru
            .say_and_wait(['请 ', callname, ' 等待并心怀希望吧！'])
            .then(() => kitaru.say_and_wait('我会尽全力拿下胜利的！')),
        );
      }
      await get_random_entry(message)();
    }
  }
};
