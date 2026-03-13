const era = require('#/era-electron');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
module.exports = async (tachyon, me) => {
  await tachyon.say_as_unknown_and_wait('……醒');
  await tachyon.say_as_unknown_and_wait('………醒醒');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 醒来了']);
  await era.printAndWait([
    '被某个声音所唤醒的 ',
    me.get_colored_name(),
    '，发现自己睁开眼睛看见的是一个陌生的天花板',
  ]);
  era.printButton('「这里是哪里？」', 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait('……这里是我的实验室');
  era.println();
  await era.printAndWait([me.get_colored_name(), ' 看向声音传来的方向']);
  await era.printAndWait([
    '眼前是一名栗毛的',
    tachyon.uma_sex_title,
    '，利落的短发以及身上的白大褂说明了',
    tachyon.sex,
    '研究者的身份，',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '用一种审视的眼光看着 ',
    me.get_colored_name(),
    '，不知为何，',
    me.get_colored_name(),
    ' 感到一股毛骨悚然',
  ]);
  era.printButton('「你是谁？」', 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait(
    '这个问题应该是我问你才对……你是什么人？为什么你会躺在我的实验室里？',
  );
  await era.printAndWait(['栗毛', tachyon.uma_sex_title, '说道']);
  await era.printAndWait([
    '这时 ',
    me.get_colored_name(),
    ' 才发现自己还躺在地板上，连忙爬了起来',
  ]);
  era.printButton(`「我是 ${me.actual_name}，是一名训练员」`, 1);
  await era.input();
  await tachyon.say_as_unknown_and_wait(
    '…………哦？那么训练员君，你躺在这里又有何贵干',
  );
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 试着回想在躺在这里前 ',
    me.get_colored_name(),
    ' 究竟在做什么，却怎么也想不出来',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait(
    '…………想不起来就算了吧，不知道为什么我也彷佛丧失了记忆一样，想不起先前自己在做什么……',
  );
  await tachyon.say_as_unknown_and_wait([
    '算了，不提这个，总之，我是 ',
    tachyon.get_colored_name(),
    '，训练员君，请多指教',
  ]);
  era.println();
  await era.printAndWait([tachyon.get_colored_name()]);
};
