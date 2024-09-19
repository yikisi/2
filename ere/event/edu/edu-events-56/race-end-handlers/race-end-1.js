const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,FukukitaruEduMarks,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    if (edu_weeks > 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('参拜开始', kitaru);
    await kitaru.say_and_wait('太好了！我跑完了啦哦！');
    await era.printAndWait([
      '第一个冲过终点线后，',
      kitaru.get_colored_name(),
      ' 正在赛道上庆祝着，摆出了双手举向天空的姿势。',
    ]);
    await kitaru.say_and_wait([callname, '！灵验万分！比赛顺利！']);
    if (era.get('status:56:凶') === 1) {
      await kitaru.say_and_wait('就算是凶，有白兴大人加持的我还是赢下来了呢！');
    } else {
      await kitaru.say_and_wait('果然是大吉！连白兴大人都附在了我身上！');
    }
    await kitaru.say_and_wait('一下子就结束了呢！');
    await era.printAndWait([
      me.get_colored_name(),
      ' 仔细回想了一下方才 ',
      kitaru.get_colored_name(),
      ' 的表现，',
      kitaru.sex,
      '的状态很好。',
    ]);
    await era.printAndWait(['平日里的教导', kitaru.sex, '都有用上。']);
    await era.printAndWait('和选拔赛时的笨拙姿态完全不同。');
    await era.printAndWait(
      '如果照这个进步速度下去，菊花赏获胜也不是没有可能。',
    );
    await kitaru.say_and_wait([callname, '！']);
    await kitaru.say_and_wait(
      '感觉状态很好！未来的菊花赏肯定没有问题！下一场比赛是什么呢？',
    );
    await kitaru.say_and_wait('要不要用占卜决定？');
    await kitaru.say_and_wait('呜！');
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 今日又挨了一记来自于 ',
      me.get_colored_name(),
      ' 的铁爪。',
    ]);
    era.printButton('「青叶赏！」', 1);
    await era.input();
    await kitaru.say_and_wait('诶！青叶赏！');
    await kitaru.say_and_wait('那不是要到很远了吗？');
    await era.printAndWait('的确如此。');
    await era.printAndWait([
      '但考虑到 ',
      kitaru.get_colored_name(),
      ' 的距离适性，以及',
      kitaru.sex,
      '的目标是经典三冠之一的菊花赏。',
    ]);
    await era.printAndWait([
      '况且 ',
      me.get_colored_name(),
      ' 也需要更多的时间了解这位状况游移不定的赛',
      kitaru.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait('青叶赏会是一个不错的选择。');
    edu_marks.begin_race_end = 1;
  };
};
