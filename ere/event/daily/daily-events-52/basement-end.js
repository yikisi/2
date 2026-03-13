const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const { buff_colors } = require('#/data/color-const');

module.exports = async () => {
  const callname = sys_get_callname(52, 0),
    m_call_u = sys_get_callname(0, 52),
    in_urara = get_chara_talk(52, chara_colors[1]),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);

  await era.printAndWait(['……']);
  await era.printAndWait([
    '现在是什么时间？距离上次问时间又过多久了？在不分昼夜的密室中，',
    me.get_colored_name(),
    ' 失去了时间概念。',
  ]);
  await era.printAndWait(['只是，现在时间还重要吗？']);
  await era.printAndWait([
    '原本阴暗的室内被温柔的暖光填满，充满生活感的家装摆满了房间，一侧的墙上还挂起了亮着自然光的假窗。',
  ]);
  await era.printAndWait([
    '床边的书桌上放着电脑与文件，房间中央的矮桌上摆着零食与果盘，甚至在另一面墙边还隔出了独立的卫浴……',
  ]);
  await era.printAndWait([
    '环顾着周围布置得如正常起居室般温馨明亮的环境，',
    me.get_colored_name(),
    ' 只觉得有些恍惚。',
  ]);
  await urara.say_and_wait(['嘿嘿～这里就像两人的小家一样呢！']);
  await era.printAndWait(['最初就像玩笑般的话语，如今却逐渐变成了现实。']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 不知道 ',
    urara.get_colored_name(),
    ' 是如何向别人解释',
    urara.sex,
    '的训练员去了哪里，也不知道 ',
    urara.get_colored_name(),
    ' 从哪搬来的家具，甚至是接来了水电。',
  ]);
  await era.printAndWait([
    '原本应是很重要的问题，但现在只要伸手就能抚摸到小',
    urara.uma_sex_title,
    '柔顺的粉色长发，这些似乎也都无所谓了。',
  ]);
  await era.printAndWait([
    '靠在 ',
    me.get_colored_name(),
    ' 的身边安然睡去的 ',
    urara.get_colored_name(),
    '，在梦中不知不觉间挂起了幸福的笑容。',
  ]);
  await era.printAndWait([
    '总想离开最后却选择放弃的训练员，与选择监禁又逐渐变得温柔的',
    urara.uma_sex_title,
    '，到底是谁驯化了谁呢？',
  ]);
  await era.printAndWait(['这个答案，或许也只有在此处的二人自己知道了。']);
  await urara.say_and_wait([callname, '、', callname, '，今天是……']);
  await era.printAndWait([
    '不知何时，从小憩中醒来的 ',
    urara.get_colored_name(),
    ' 正仰头看着自己依靠的人，重新变得清澈明亮的双瞳正绽开着樱色。',
  ]);

  era.printButton('「是……该出门的日子吗？」', 1);
  await era.input();

  await urara.say_and_wait([
    '嗯，今天是要带 ',
    callname,
    ' 出去散心晒太阳的日子哦？',
  ]);
  await era.printAndWait([
    '不怕「爱人」逃跑吗？这样的问题已经不会再有了。如果真的想要离开，',
    me.get_colored_name(),
    ' 早就走掉无数次了。',
  ]);
  await era.printAndWait([
    '再次久违的站在人来人往的街道上，两人间仅仅只是十指相扣，就仿佛比手铐或锁链更加牢固。',
  ]);
  await era.printAndWait([
    '看着 ',
    urara.get_colored_name(),
    ' 如春花盛开般的笑颜在蓝天下恢复如初，不知道第多少次的恍惚感再次冲上了 ',
    me.get_colored_name(),
    ' 的额头。',
  ]);
  await era.printAndWait(['其实，有些事一直都是明白的吧？']);
  await era.printAndWait([
    '温柔的',
    urara.sex,
    '选择「监禁」是为了什么，以背德的身体与 ',
    me.get_colored_name(),
    ' 相融的无数个浑浊的夜又是为了什么。',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 不只是想要独占，',
    urara.sex,
    '依旧想要纠正、甚至是保护自己的训练员。',
  ]);
  await era.printAndWait([
    urara.sex,
    '只是真心的希望 ',
    me.get_colored_name(),
    ' 能因',
    urara.sex,
    '而幸福，被名为 ',
    urara.get_colored_actual_name(),
    ' 的小',
    urara.uma_sex_title,
    '爱着自己的训练员而幸福；',
  ]);
  await era.printAndWait([
    '所以',
    urara.sex,
    '也希望训练员能真心地看向自己，所以名为 ',
    urara.get_colored_actual_name(),
    ' 的小',
    urara.uma_sex_title,
    '不愿再将 ',
    me.get_colored_name(),
    ' 交给任何人。',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 早就不想再责怪',
    urara.sex,
    '的训练员了，',
    urara.sex,
    '从来不想的伤害过 ',
    me.get_colored_name(),
    '，',
    urara.sex,
    '只是希望 ',
    me.get_colored_name(),
    ' 能一直留在',
    urara.sex,
    '身边。',
  ]);
  await era.printAndWait(['或许，这样也不错……']);
  await era.printAndWait([
    '即使故事的走向称不上美好，但依旧能为互相束缚两人留下幸福的结局。',
  ]);

  era.printButton(`「或许，我一直都爱着${m_call_u}吧。」`, 1);
  await era.input();

  await era.printAndWait([
    '这并非理所当然的宣言，爱上谁从来都不是理所当然，只是如今的 ',
    me.get_colored_name(),
    ' 更加确信了一件曾经总是遗忘的事。',
  ]);
  await era.printAndWait([
    '或许曾经名为 ',
    me.actual_name,
    ' 的',
    me.sex,
    '，喜欢过很多人、很多个',
    urara.uma_sex_title,
    '，但如今，选择已经没有了意义。',
  ]);
  await era.printAndWait([
    '因为站在 ',
    me.get_colored_name(),
    ' 身边的这名小小的',
    urara.uma_sex_title,
    '，愿意不留余地的成为 ',
    me.get_colored_name(),
    ' 的全部。',
  ]);
  await era.printAndWait([
    '正因如此，今天将会是个特别的日子，而小',
    urara.uma_sex_title,
    '也已经像曾经决定变成坏孩子那般下定了决心。',
  ]);
  await urara.say_and_wait([callname, '，我，想好了哦——']);
  await era.printAndWait([
    '不知是不是听到了 ',
    me.get_colored_name(),
    ' 的轻声呢喃，小小的',
    urara.uma_sex_title,
    '发出了这样的宣言。',
  ]);
  await urara.say_and_wait([
    '虽然总觉得有些舍不得，但是我们一起从那里搬出来，去可以好好晒太阳的地方住吧！',
  ]);

  era.printButton('「但是……」', 1);
  await era.input();

  await urara.say_and_wait([
    callname,
    ' 和乌拉拉，早就不需要那样的关系了对吧？',
  ]);
  await urara.say_and_wait([
    '乌拉拉，早就不是小孩子了哦？所以 ',
    callname,
    ' 也赶上来吧？这里的阳光很舒服哦！',
  ]);
  await era.printAndWait([
    '耀眼的阳光洒在 ',
    me.get_colored_name(),
    ' 的脸上，从身侧抱住 ',
    me.get_colored_name(),
    '，',
    urara.get_colored_name(),
    ' 的笑容同阳光一样明媚。',
  ]);
  await era.printAndWait(['果然，已经没什么好但是的了……']);
  await era.printAndWait([
    '「罪无可赦的犯人」被监禁在了最自由的，名为「',
    urara.get_colored_actual_name(),
    ' 的爱」的「监狱」之中——',
  ]);
  await era.printAndWait([
    '这会是世界上最幸福的「无期徒刑」吗？现在的 ',
    me.get_colored_name(),
    ' 还不知道答案。',
  ]);
  await era.printAndWait([
    '接下来，站在阳光下的 ',
    me.get_colored_name(),
    ' 会用余生与最爱 ',
    me.get_colored_name(),
    ' 的「小小狱警」一起，写下这本会永远继续下去的「狱中回忆」。',
  ]);

  era.drawLine();
  await in_urara.say_as_unknown_and_wait([
    '……唉，如果',
    urara.sex,
    '希望如此，那这就是最好的结局吧，只是总觉得有些便宜您了。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '不过我也并非心胸狭隘的人，只是有些许不痛快。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '您还记得最初与乌拉拉立下的约定都有哪些吗？您是否省略了太多事情呢？',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '我不打算跟您闹别扭，但以这样虚幻的结尾做结是否有些草率了？',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '如果还有机会下次再见的话，请您给我打起十二分的精神。',
  ]);

  await print_event_name(
    [{ color: buff_colors[3], content: '无期的自由' }],
    urara,
  );
};
