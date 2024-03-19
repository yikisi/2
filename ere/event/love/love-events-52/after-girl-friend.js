const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @author 99
 *
 * @param {CharaTalk} me
 * @param {CharaTalk} urara
 * @param {CharaTalk} in_urara
 * @param {number} relation
 */
module.exports = async (me, urara, in_urara, relation) => {
  await print_event_name('逐渐明了的爱意', urara);
  new UraraLifeMarks().girl_friend = 1;
  await in_urara.say_as_unknown_and_wait(
    '就算遮遮掩掩，感情也总有一天会开花结果。',
  );
  await in_urara.say_as_unknown_and_wait(
    '那么处于现在进行时的您，现在请听题——',
  );
  await in_urara.say_as_unknown_and_wait('乌鸦，为什么像写字台呢？');
  era.drawLine();
  await urara.print_and_wait([
    '看到靠在角落的长椅上睡着了的 ',
    me.get_colored_name(),
    '，一路跑来的乌拉拉小心地收起了脚步声。',
  ]);
  await urara.say_and_wait('诶？训练员昨晚又没休息好吗？那么轻轻地……');
  await urara.print_and_wait([
    '压低声音悄悄来到 ',
    me.get_colored_name(),
    ' 身边，乌拉拉也坐到长椅上，在安静等待的同时注视着 ',
    me.get_colored_name(),
    ' 平静的侧颜。',
  ]);
  await urara.print_and_wait([
    '身体逐渐升温，温热的情感再次占据了高处，因相遇以来逐渐被填满的经历，现在的乌拉拉已充分理解了这份悸动为何。',
  ]);
  await urara.say_and_wait(
    '仔细想想的话，现在的训练员好像第一次相遇时的样子，总感觉很有缘分呢。',
  );
  await urara.print_and_wait([
    '缓缓地靠近熟睡中的 ',
    me.get_colored_name(),
    '，将耳朵搭在 ',
    me.get_colored_name(),
    ' 的身上，乌拉拉聆听着 ',
    me.get_colored_name(),
    ' 的呼吸与心跳。',
  ]);
  await urara.print_and_wait([
    me.get_colored_name(),
    ' 的担当又想起了与 ',
    me.get_colored_name(),
    ' 初次相遇时，',
    me.get_colored_name(),
    ' 因为努力过头而倒下的那天。',
  ]);
  await urara.print_and_wait([
    '只是这次相遇的再现中，不管是身体还是心灵，乌拉拉都最初相比发生了彻底的改变。',
  ]);
  era.println();
  if (relation > 75) {
    await urara.say_and_wait(
      '以前的时候还不懂，但现在呢，我果然喜欢着训练员。',
    );
    await urara.print_and_wait([
      '安心地倚靠在 ',
      me.get_colored_name(),
      ' 的身边，乌拉拉像是找到归路的孩子般悄悄抱住了沉睡中的 ',
      me.get_colored_name(),
      '。',
    ]);
    await urara.print_and_wait([
      '小',
      urara.get_uma_sex_title(),
      '比人类略高的体温伴随着象征爱意的拥抱，将熟悉的温暖注入了 ',
      me.get_colored_name(),
      ' 的身体。',
    ]);
    await urara.print_and_wait([
      '因为训练员改变了乌拉拉的奔跑，因为训练员让乌拉拉获得了一着的喜悦；',
    ]);
    await urara.print_and_wait([
      '因为训练员改变了乌拉拉的生活，因为训练员让乌拉拉发现了更多的爱，所以……',
    ]);
    await urara.say_and_wait('今后也让我一直、一直喜欢着你吧——');
  } else {
    await urara.say_and_wait('训练员，我可以一直信任你的对吧？');
    await urara.print_and_wait([
      '用湿润的眼神注视着还在沉睡中的 ',
      me.get_colored_name(),
      '，乌拉拉的口中喃喃着不期待被回答的疑问。',
    ]);
    await urara.print_and_wait([
      '小',
      urara.get_uma_sex_title(),
      '只是在劝说着自己稍微鼓起勇气，继续贴近这位令',
      urara.sex,
      '感到些许不安的仰慕者。',
    ]);
    await urara.print_and_wait([
      '就像',
      urara.sex,
      '最初的奔跑，即使可能不会被重视，',
      urara.sex,
      '也想全心全意拥抱这份不安稳的爱意。',
    ]);
    await urara.print_and_wait([
      '哪怕',
      urara.sex,
      '也只是含苞待放的年龄，哪怕这份感情或许会被随意丢弃，哪怕最后 ',
      me.get_colored_name(),
      ' 会……',
    ]);
    await urara.say_and_wait('不要现在就醒来哦——');
  }
  era.println();
  await urara.say_and_wait('啾……');
  await urara.print_and_wait([
    '带着热恋中纯真',
    urara.get_teen_sex_title(),
    '的羞涩与勇气，来自担当的轻吻落在了将醒之际的 ',
    me.get_colored_name(),
    ' 的额头之上。',
  ]);
  await urara.print_and_wait([
    '并非是多么激烈的表达，借着成长所学的乌拉拉将',
    urara.sex,
    '理解到的「真正的爱意」献给了 ',
    me.get_colored_name(),
    '。',
  ]);
  await urara.print_and_wait([
    '而在熟悉的芳香中缓缓醒来的 ',
    me.get_colored_name(),
    '，也清楚的感受到了担当轻柔但厚重的爱意。',
  ]);

  era.printButton('「……！」', 1);
  await era.input();

  await urara.say_and_wait('诶嘿嘿～还是让训练员看到了啊，对不起哦训练员！');
  await urara.print_and_wait([
    '被 ',
    me.get_colored_name(),
    ' 发现的乌拉拉，就像恶作剧的孩子般露出了被揭穿的羞涩笑意，此刻爬上',
    urara.get_teen_sex_title(),
    '脸颊的微润娇羞也比任何时候都更加惹人怜爱。',
  ]);
  await urara.say_and_wait(
    '虽然没办法好好描述，果然这样最适合现在我对训练员的心情哦！',
  );
  await urara.print_and_wait([
    '面对面坐在 ',
    me.get_colored_name(),
    ' 的大腿上，还有些笨拙的小恋人向 ',
    me.get_colored_name(),
    ' 认真地宣誓着自己的情感。',
  ]);
  await urara.say_and_wait(
    '想对训练员亲口说的事……虽然现在没办法好好表达，但我以后一定可以做到的！',
  );
  await urara.say_and_wait('所以训练员，再等等我、再等等乌拉拉吧！');
  await urara.print_and_wait([
    '努力的向 ',
    me.get_colored_name(),
    ' 倾诉着有感而发的话语，尚未完全长大的女孩倾诉着还无法完整形容的爱意。',
  ]);
  await urara.print_and_wait([
    '但就算没能将一切都好好表达，乌拉拉想要传递出的感情，此刻的 ',
    me.get_colored_name(),
    ' 也早已了然于心。',
  ]);

  era.printButton('「我明白的，正因如此我也期待着乌拉拉。」', 1);
  await era.input();

  await urara.print_and_wait([
    '主动牵起',
    urara.get_teen_sex_title(),
    '的手，直视着那对湿润的樱瞳， ',
    me.get_colored_name(),
    ' 也不假思索的对乌拉拉给予了「大人的承诺」。',
  ]);
  await urara.print_and_wait([
    '今天彼此，以及从今往后的彼此，或许现在才刚刚开始。',
  ]);

  const love_30 =
      (era.get('cflag:30:招募状态') === recruit_flags.yes &&
        era.get('love:30')) >= 75,
    love_61 =
      (era.get('cflag:61:招募状态') === recruit_flags.yes &&
        era.get('love:61')) >= 75;
  if (love_30 || love_61) {
    era.println();
    await urara.print_and_wait([
      '只是，在训练员',
      me.get_adult_sex_title(),
      '移开视线的瞬间，小',
      urara.get_uma_sex_title(),
      '纯洁的笑容中闪过了一丝难以察觉的暗色。',
    ]);
    await urara.print_and_wait([
      '凝视着最喜欢的人的侧脸，',
      urara.get_teen_sex_title(),
      '的脑海中却在最不合时宜的时刻浮现出了最不合时宜的景象。',
    ]);
    await urara.print_and_wait([
      '那是小小的',
      urara.sex,
      '最不愿记起，但在每次被揭开时就会被揪紧胸口、缠住双腿，只得目送他人远去时的记忆。',
    ]);
    if (love_30) {
      era.println();
      const callname_30 = sys_get_colored_callname(52, 30);
      await urara.say_and_wait(
        [
          callname_30,
          ' 也是这样喜欢着训练员，那 ',
          callname_30,
          ' 也一定会对训练员这样做吧！这样对训练员表达……喜欢？',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          '与训练员走在一起的『',
          callname_30,
          '』、与训练员亲近的『',
          { color: callname_30.color, content: '米浴同学', fontWeight: 'bold' },
          '』、与训练员身影相叠的『',
          { color: callname_30.color, content: '黑色的——', fontWeight: 'bold' },
          '』……！',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          '但 ',
          callname_30,
          ' 才不是那样，',
          callname_30,
          ' 是大家的『英雄』啊！',
          urara.sex,
          '已经得到训练员的约定了才对……',
        ],
        true,
      );
    }
    if (love_61) {
      era.println();
      const callname_61 = sys_get_colored_callname(52, 61);
      await urara.say_and_wait(
        [
          callname_61,
          ' 果然喜欢着训练员，或许真的比起还很幼稚的乌拉拉更适合站在训练员身边，但是……',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          '露出从未见过的神情的『',
          callname_61,
          '』、与训练员相拥的『',
          { color: callname_61.color, content: '圣王同学', fontWeight: 'bold' },
          '』、与训练员逐渐贴近的『',
          { color: callname_61.color, content: '三流的——', fontWeight: 'bold' },
          '』……！',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          '不对！才不是这样的！',
          callname_61,
          ' 比任何人都要优秀！',
          callname_61,
          ' 比任何人都配得上训练员才对……',
        ],
        true,
      );
    }
    if (love_30 && love_61) {
      era.println();
      await urara.say_and_wait(
        '那两人果然都喜欢着训练员……但是好难受……难受的头疼……难受的想吐……',
        true,
      );
      await urara.say_and_wait(
        '但是乌拉拉为什么要感到难受，乌拉拉不应该开心吗？',
        true,
      );
      await urara.say_and_wait(
        '乌拉拉为什么想要诅咒最好的朋友们呢……可是嫉妒的话，后来者的乌拉拉才没有资格不是吗……？',
        true,
      );
    }
    era.println();
    await urara.say_and_wait(
      '想要从后方插进来，想要破坏好友喜欢的心情、真正做着坏事的坏心眼家伙是……？',
      true,
    );
    await urara.say_and_wait(
      '感觉好像忘记了什么，明明不应该是这样的，但是训练员说会等着乌拉拉！但是训练员……！',
      true,
    );

    era.printButton('「乌拉拉？怎么了？是身体不舒服吗？」', 1);
    await era.input();

    await era.printAndWait([
      '听到 ',
      me.get_colored_name(),
      ' 的呼唤，乌拉拉脸上本就不易察觉的混沌轻若鸿毛的消散了。',
    ]);
    await era.printAndWait([
      '但并不美丽，也总有一天会用根茎啃食',
      urara.get_teen_sex_title(),
      '心灵的黑色种子，已然在乌拉拉的内心中埋下了。',
    ]);
    await urara.say_and_wait('对不起……但是乌拉拉已经……');
    await era.printAndWait([
      '乌拉拉上前牵住了 ',
      me.get_colored_name(),
      ' 伸出的手，在开朗地笑容下，充满劣等感的歉意消失在了两人背后的风中……',
    ]);
  }
};
