const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

async function flatter() {
  const callname = sys_get_colored_callname(89, 0),
    grand = get_chara_talk(89),
    me = get_chara_talk(0),
    life_marks = new GrandLifeMarks(),
    no_escape_check =
      era.get('exp:89:监禁次数') === 1 && life_marks.b_find_escape === 0;
  if (life_marks.b_strike) {
    life_marks.b_strike = 0;
    await grand.say_and_wait(['……包、包扎好了，柜子……没想到会倒下。']);
    await grand.say_and_wait([
      '呐，',
      callname,
      '……为什么要保护我呢？明明什么都不做就好了……',
    ]);
    era.println();

    await era.printAndWait([
      '无法说出真相的 ',
      me.get_colored_name(),
      '，谎称这是训练员的职责。',
    ]);
    await era.printAndWait([
      '从 ',
      grand.get_colored_name(),
      ' 满是愧疚的表情来看，',
      me.get_colored_name(),
      ' 的行为似乎很大程度动摇了',
      grand.sex,
      '的决心。',
    ]);
    sys_like_chara(89, 0, 30, false);
  } else if (life_marks.b_battle_fail === 1) {
    life_marks.b_battle_fail++;
    await grand.say_and_wait([
      callname,
      '……要、要休息一下吗，最近……好像很疲惫的样子。',
    ]);
    await grand.say_and_wait(['我、我来给你做膝、膝枕……']);
    era.println();

    await era.printAndWait([
      '顺从 ',
      grand.get_colored_name(),
      ' 害羞的要求，',
      me.get_colored_name(),
      ' 缓缓枕上了',
      grand.teen_sex_title,
      '温暖、柔软、饱满的大腿。',
    ]);
    await era.printAndWait([
      '然而问到原因时，却得到了「吃饭时总是睡着」作为答案，这让 ',
      me.get_colored_name(),
      ' 有些摸不着头脑。',
    ]);
  } else if (no_escape_check && life_marks.b_flatter === 0) {
    await era.printAndWait([
      '对于 ',
      me.get_colored_name(),
      ' 强打精神的讨好，',
      grand.get_colored_name(),
      ' 似乎很是受用，小',
      grand.uma_sex_title,
      '乖巧的坐在床边，像往常一样腼腆的笑着。',
    ]);
    era.println();

    await grand.say_and_wait([
      '只有我们两个人的房间…不知道为什么，总觉得……好怀念啊。',
    ]);
    era.println();

    await era.printAndWait(['穿透了时间的语调，蕴含的是不容忽视的寂寞。']);
    era.println();

    await grand.say_and_wait([
      '以前我一直以为，我们两人之间的日常会一直持续下去。',
    ]);
    await grand.say_and_wait([
      '是从什么时候开始呢……',
      callname,
      ' 的身边……出现了除我以外的人。',
    ]);
    await grand.say_and_wait([
      '因为嫉妒……我对你做出了无法原谅的事情……我们的关系，已经无论如何都回不到过去了吧……',
    ]);
    life_marks.b_flatter++;
  } else if (
    no_escape_check &&
    life_marks.b_flatter === 1 &&
    life_marks.b_ask_release === 4
  ) {
    await grand.say_and_wait([
      '其实……我也后悔过，如果不把 ',
      callname,
      ' 监禁起来就好了。',
    ]);
    await grand.say_and_wait(['……但是……无论如何都不想离开你。']);
    era.println();

    await era.printAndWait([
      grand.get_colored_name(),
      ' 默默低下头，帽檐挡住了表情，但无法掩盖颤抖的指尖。',
    ]);
    era.println();

    await grand.say_and_wait([
      '剥夺你的自由，把你关在这里。我知道你肯定会讨厌这样的我……',
    ]);
    await grand.say_and_wait([
      '但是，我也知道……如果什么都不做，你可能永远都不会回来看我了……！',
    ]);
    await grand.say_and_wait(['求你了……', callname, '……让我留在你的身边……']);
    life_marks.b_flatter++;
  } else if (no_escape_check && life_marks.b_flatter === 2) {
    await grand.say_and_wait(['呐、', callname, '……笑一笑啊……']);
    await grand.say_and_wait(['像这样……看着你一天比一天憔悴……我会受不了的……']);
    await grand.say_and_wait([
      '再像以前那样、摸摸我的头……告诉我你喜欢我的优点啊……',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      ' 强行挤出一个笑容，然而 ',
      grand.get_colored_name(),
      ' 看到后却露出了崩溃的表情。',
    ]);
    era.println();

    await grand.say_and_wait(['不是的……不是这样的……我想要的……不是这样的你……']);
    await grand.say_and_wait(['……早知道……事情、会变成这样……呜……呜呜……呜呜……']);
    life_marks.b_flatter++;
  } else {
    await grand.say_and_wait([
      '……',
      callname,
      '，没必要勉强自己和我说话也可以的……',
    ]);
    await grand.say_and_wait(['现在……到底该怎么做……才能留下你呢……？']);
    era.println();

    await era.printAndWait([
      '曾经努力维系的大人的尊严，与身体一同被轻易地推倒。',
    ]);
    era.println();

    await grand.say_and_wait(['……能被你喜欢的话……只有身体也好。']);
    await grand.say_and_wait([callname, '……我……会好好珍惜你的❤️']);
  }
}

module.exports = flatter;
