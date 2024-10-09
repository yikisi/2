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
    await grand.say_and_wait(['……包、包扎好了，柜子……没想到会倒下。']);
    await grand.say_and_wait([
      '呐，',
      callname,
      '……为什么要救我？明明什么都不做就可以离开这里……',
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
      grand.get_teen_sex_title(),
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
      grand.get_uma_sex_title(),
      '乖巧的坐在床边，像往常一样腼腆的笑着。',
    ]);
    era.println();

    await grand.say_and_wait(['只有我们的房间……总觉得……好怀念。']);
    era.println();

    await era.printAndWait(['穿透了时间的语调，蕴含的是不容忽视的寂寞。']);
    era.println();

    await grand.say_and_wait(['我……以为我们的日常会一直持续下去。']);
    await grand.say_and_wait([
      '从什么时候开始呢……',
      callname,
      ' 的身边……出现了我以外的人。',
    ]);
    await grand.say_and_wait([
      '因为嫉妒……我对你做出了无法原谅的事情，我们的关系，已经回不去了吧……',
    ]);
    life_marks.b_flatter++;
  } else if (
    no_escape_check &&
    life_marks.b_flatter === 1 &&
    life_marks.b_ask_release >= 4
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
      '剥夺你的自由，把你关在这里。你肯定会讨厌这样的我……',
    ]);
    await grand.say_and_wait([
      '但是……如果什么都不做，你可能永远都不会回来看我了……！',
    ]);
    await grand.say_and_wait(['求你了……', callname, '……为了让我能安心一点……']);
    life_marks.b_flatter++;
  } else if (no_escape_check && life_marks.b_flatter === 2) {
    await grand.say_and_wait(['呐、', callname, '……笑一笑啊……']);
    await grand.say_and_wait(['看着你一天比一天憔悴……那种事情……我不要……']);
    await grand.say_and_wait([
      '像以前那样、摸摸我的头……告诉我你喜欢我的优点啊……',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      ' 强行挤出一个笑容，然而 ',
      grand.get_colored_name(),
      ' 看到后却露出了崩溃的表情。',
    ]);
    era.println();

    await grand.say_and_wait(['不是的……不是这样……我想要的……不是这样的你……']);
    await grand.say_and_wait(['……早知道……事情会变成这样……呜……呜呜……呜呜……']);
    life_marks.b_flatter++;
  } else {
    await grand.say_and_wait(['……', callname, '，很想离开这里呢……']);
    await grand.say_and_wait(['到底怎么做……才能留下你呢……？']);
    era.println();

    await era.printAndWait([
      grand.get_colored_name(),
      ' 自顾自说着，将 ',
      me.get_colored_name(),
      ' 推倒在床上。',
    ]);
    await era.printAndWait([
      '曾经努力维系的大人的尊严，与衣物一同被撕得粉碎。',
    ]);
    era.println();

    await grand.say_and_wait(['……能被你喜欢的话……只有身体也好。']);
    await grand.say_and_wait([callname, '……我……会好好珍惜你的❤️']);
  }
}

module.exports = flatter;
