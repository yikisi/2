const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const { buff_colors } = require('#/data/color-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

module.exports = async () => {
  const callname = sys_get_callname(52, 0),
    in_urara = get_chara_talk(52, chara_colors[1]),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);

  await era.printAndWait(
    '这场结束地过于唐突的旅途意味着什么，现在或许已经没有任何追究的意义了。',
  );
  await era.printAndWait([
    '因为 ',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 都清楚，两人分开的结局或许本不应出现在这里。',
  ]);
  await era.printAndWait([
    '攥紧行李箱的拉杆，',
    urara.get_colored_name(),
    ' 发出了本不应从',
    urara.sex,
    '的身边出现的轻声叹息。',
  ]);
  await era.printAndWait([
    '尽管大家并不怪 ',
    urara.get_colored_name(),
    '，甚至还在说训练员也辛苦了，但是 ',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 都知道故事本不应如此。',
  ]);
  await era.printAndWait([
    '就算转学手续已经办理结束，这依旧是对大家保密的不辞而别，这场送别也只有 ',
    me.get_colored_name(),
    ' 一人到场。',
  ]);
  await era.printAndWait([
    '只是即使如此，身边的小',
    urara.uma_sex_title,
    '依旧善解人意的反过来安抚着精神不振的 ',
    me.get_colored_name(),
    '。',
  ]);
  const race_history = RaceHistory.get(52);
  if (race_history.check_begin()) {
    await urara.say_and_wait([
      '没关系的，就算没办法再奔跑乌拉拉也会有办法的！倒是 ',
      callname,
      ' 没关系吗？',
    ]);
    await era.printAndWait([
      '虽然说着安慰别人的话，但 ',
      urara.get_colored_name(),
      ' 的脸上也难掩失落。',
    ]);
    await era.printAndWait([
      '自从在那场比赛跌倒之后，虽然身体一切正常，但 ',
      urara.get_colored_name(),
      ' 却过早地失去了',
      urara.uma_sex_title,
      '的能力。',
    ]);
    await era.printAndWait([
      '于是，无法接受此事的人们将矛头指向了没能在最后保护到',
      urara.sex,
      '的 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '但针对个人的情绪，终究会随着时间前进消散。所以面对 ',
      urara.get_colored_name(),
      ' 的担忧，',
      me.get_colored_name(),
      ' 只是沉默地摇摇头。',
    ]);
    await urara.say_and_wait([
      '……如果 ',
      callname,
      ' 真是这样想的，那 ',
      urara.get_colored_name(),
      ' 也不需要太担心呢，大家也是，明明我本来也没法参加有马啊……',
    ]);
    await urara.say_and_wait(
      race_history.get_result(47 + 48)?.race === race_enum.arim_kin
        ? '但是如果能再去一次，就好了啊……'
        : '不过，如果能去一次，哪怕一次也好呢……',
    );
  } else {
    await urara.say_and_wait([
      '没关系的 ',
      callname,
      '，不用担心，只是回到了地方而已，我还会继续奔跑的！',
    ]);
    await era.printAndWait([
      '但 ',
      me.get_colored_name(),
      ' 知道，就算安慰别人的话语再怎开朗，脸上的失落也无法隐藏，',
      urara.get_colored_name(),
      ' 也是一样。',
    ]);
    await era.printAndWait([
      '即使如此，为了掩饰伤感，也为了不让 ',
      me.get_colored_name(),
      ' 过于伤心，小',
      urara.uma_sex_title,
      '还是强迫自己断断续续地说着。',
    ]);
    await urara.say_and_wait([
      '很多人说 ',
      callname,
      ' 只是想骗乌拉拉，但是我知道 ',
      callname,
      ' 没有错，是乌拉拉跑得太慢而已。',
    ]);
    await urara.say_and_wait(
      '只是就这样回去，妈妈会对说些什么呢？虽然她从来没有对乌拉拉生过气……',
    );
    await urara.say_and_wait(
      '如果在离开之前，乌拉拉也能拿到一次第一名就好了……',
    );
  }
  era.println();
  await era.printAndWait([
    '望见远处逐渐进站的电车，',
    urara.get_colored_name(),
    ' 强忍着泪水，故作坚强的松开了抓住 ',
    me.get_colored_name(),
    ' 衣角的小手。',
  ]);
  await era.printAndWait([
    '之后，小',
    urara.uma_sex_title,
    '忍耐到最后的泪水还是无法抑制地提前洒了出来。',
  ]);
  era.println();
  if (era.get('love:52') >= 50) {
    await era.printAndWait([
      '一枚带着泪水咸味的轻吻落在了 ',
      me.get_colored_name(),
      ' 的嘴唇上，在 ',
      me.get_colored_name(),
      ' 身前踮着脚的 ',
      urara.get_colored_name(),
      ' 已经哭成了泪人。',
    ]);
    await urara.say_and_wait([
      '对不起，',
      callname,
      '，我们应该还能再见的，但是……乌拉拉还是想要这样做……',
    ]);
    await urara.say_and_wait('好难受啊……但是乌拉拉明明该好好说再见才对……');
  } else {
    await urara.say_and_wait([
      '……乌拉拉果然还是想和 ',
      callname,
      '……看到更前方的……',
    ]);
    await urara.say_and_wait([
      '但是这样不行……明明都要离开了，我不应该说这些的，对不起哦，',
      callname,
      '……',
    ]);
    await urara.say_and_wait([
      '所以，谢谢你来送我，再见了哦，',
      callname,
      '……',
    ]);
  }
  era.println();
  await era.printAndWait([
    '带着不舍中断自己的告别，',
    urara.get_colored_name(),
    ' 压住哭声，不敢回头地跑向了不会多做等待的列车。',
  ]);
  await era.printAndWait([
    '聚集的人群随着列车离开而散去，陌生的人流抛下感情的累赘，将 ',
    me.get_colored_name(),
    ' 则被人流抛下，被独自撇在了空无一人的站台上。',
  ]);
  await era.printAndWait([
    '喧闹散尽，周围也安静得仿佛整个世界都随着这趟车离 ',
    me.get_colored_name(),
    ' 而去。',
  ]);
  await era.printAndWait([
    '虽然说的是「再见」，但即便没有依据，现在小',
    urara.uma_sex_title,
    '的离去，恐怕也等同于「再也不见」。',
  ]);
  await era.printAndWait([
    '自己回去后要怎么面对商店街的大家？要怎么去面对 ',
    urara.get_colored_name(),
    ' 的好友们？',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 在最初时是那么信任 ',
    me.get_colored_name(),
    '，甚至对愿意帮助自己的「可靠大人」怀有小小的',
    urara.teen_sex_title,
    '情愫。',
  ]);
  await era.printAndWait([
    '但是如今看着',
    urara.sex,
    '失去笑容的背影消失在车厢中，',
    me.get_colored_name(),
    ' 却一句挽留的话都说不出来。',
  ]);
  await era.printAndWait([
    '或许现在的 ',
    me.get_colored_name(),
    ' 会让 ',
    urara.get_colored_name(),
    ' 觉得很失望；或许现在的 ',
    urara.get_colored_name(),
    ' 已经不喜欢 ',
    me.get_colored_name(),
    ' 了；或许',
    urara.sex,
    '……',
  ]);
  await era.printAndWait([
    '但就算「或许」堆积如山，也没有一个能够留住小',
    urara.uma_sex_title,
    '的分毫，更不可能逆转',
    urara.sex,
    '离开的事实。',
  ]);
  await era.printAndWait([
    '不愿去看远去的列车，仿佛又逃回了原点的 ',
    me.get_colored_name(),
    ' 艰难的闭上了眼睛……',
  ]);
  era.drawLine();
  await in_urara.say_as_unknown_and_wait('……');
  await in_urara.say_as_unknown_and_wait([
    '但是很抱歉呢，讨人厌的',
    me.adult_sex_title,
    '（您），我不会让故事就这么结束的。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '我不打算生您的气，但也不接受乌拉拉现在的结局。',
  );
  await in_urara.say_as_unknown_and_wait(
    '还有机会下次再见的话，请您给我打起十二分的精神。',
  );
  await print_event_name(
    [{ color: buff_colors[3], content: '离开的春天' }],
    urara,
  );
};
