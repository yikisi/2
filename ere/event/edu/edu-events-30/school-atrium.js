const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{flags:wait_flag})>} handlers */
module.exports = (handlers) => {
  handlers[47 + 46] = async (rice, me, callname, self_name, flags) => {
    const bourbon = get_chara_talk(26);
    await print_event_name('劲敌的不幸', rice);
    await era.printAndWait([
      '经过 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 后，',
      rice.get_colored_name(),
      ' 的身边出现了某些变化。',
    ]);
    await era.printAndWait([
      '赛',
      rice.get_uma_sex_title(),
      'A「啊、是米浴酱！」',
    ]);
    await rice.say_and_wait(['咦……咦！？在叫、', self_name, ' 吗？']);
    await era.printAndWait([
      '赛',
      rice.get_uma_sex_title(),
      'B「不用那么紧张的！呼呼，上次的 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 真精彩啊！」',
    ]);
    await era.printAndWait([
      '赛',
      rice.get_uma_sex_title(),
      'A「嗯嗯！真的有种被感动到了的感觉！」',
    ]);
    await era.printAndWait([
      '赛',
      rice.get_uma_sex_title(),
      'B「真的真的！那个时候的米浴同学。咕……超认真的样子太帅了！」',
    ]);
    await rice.say_and_wait(['欸欸欸？说 ', self_name, ' 帅气什么的……']);
    await era.printAndWait('所以今后，也要加油哦！我们也会应援米浴酱的。');
    await rice.say_and_wait('欸！？嗯……嗯！！');
    await me.say_and_wait('能够有应援真的是太高兴了。');
    await rice.say_and_wait(['啊，', callname, '？']);
    await rice.say_and_wait([
      '哪、哪里……是 ',
      sys_get_colored_callname(30, 26),
      ' 实在是太厉害了所以才来跟 ',
      self_name,
      ' 打招呼而已。',
    ]);
    await rice.say_and_wait([
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 上的掌声也是，因为有 ',
      sys_get_colored_callname(30, 26),
      ' 在——',
    ]);
    await me.say_and_wait(['因为你是', rice.sex, '的对手嘛。']);
    await rice.say_and_wait(['呜呜……啊，连 ', callname, ' 都抬举过头了啦……']);
    await rice.say_and_wait('不过，帅气吗？欸嘿嘿……');
    era.drawLine();
    await era.printAndWait('——但是第二天，状况发生了转变。');
    era.printButton(`「${sys_get_callname(0, 30)}？」`, 1);
    await era.input();
    await rice.say_and_wait('……不要靠近啦！');
    await era.printAndWait([
      '赛',
      rice.get_uma_sex_title(),
      'A「……米浴同学，果然……会在意的吧。」',
    ]);
    await era.printAndWait([
      '赛',
      rice.get_uma_sex_title(),
      'B「呀～那是肯定的吧。换做是我的话也会觉得讨厌的。」',
    ]);
    await era.printAndWait([
      '赛',
      rice.get_uma_sex_title(),
      'B「因为那个完美无缺的波旁同学，在和自己比赛之后……怎么说……」',
    ]);
    await era.printAndWait('教学楼旁的阴影下。');
    await rice.say_and_wait(['……唔……为什么，', self_name, ' 一直，都是这样？']);
    await rice.say_and_wait('总是给周围人带来不幸，给别人带来麻烦！');
    await me.say_and_wait(['……', sys_get_callname(0, 30), '。']);
    await rice.say_and_wait([callname, '……！']);
    await rice.say_and_wait([
      '……不行啊！靠近 ',
      self_name,
      ' 的话，会变得不幸的。',
    ]);
    await rice.say_and_wait([
      sys_get_colored_callname(30, 26),
      '，一直以来无论再怎么艰苦的训练都……没有受过伤啊？',
    ]);
    await rice.say_and_wait([
      '但是都是因为 ',
      self_name,
      '……因为 ',
      self_name,
      ' 成了',
      rice.sex,
      '的对手……',
    ]);
    await rice.say_and_wait('3年里最重要的时期就这么被毁了……');
    await me.say_and_wait('这是从本人那里听说的吗？');
    await rice.say_and_wait(['……就算没有听见，', self_name, ' 也知道的。']);
    await rice.say_and_wait(['因为……', self_name, ' 是……']);
    await me.say_and_wait('原来没有听说啊。');
    await rice.say_and_wait(['欸！？', callname, '？']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 带着 ',
      rice.get_colored_name(),
      ' 去医务室找到了 ',
      bourbon.get_colored_name(),
      '。',
    ]);
    await bourbon.say_and_wait('……');
    await rice.say_and_wait('……');
    era.printButton('「这么突然，真是抱歉。」', 1);
    await era.input();
    await bourbon.say_and_wait('不会，这一天里他人探望的行为已经习惯了。');
    await bourbon.say_and_wait('所以来这里是干什么呢？');
    await rice.say_and_wait('！……对、对不起。对不起……对不起……！');
    await rice.say_and_wait([
      '都是 ',
      self_name,
      ' 的关系……让你受伤了，浪费掉了这么重要的时期。',
    ]);
    await bourbon.say_and_wait('不好意思。');
    await bourbon.say_and_wait([
      '为什么要道歉？无法推测出我的受伤和 ',
      sys_get_colored_callname(26, 30),
      ' 之间有什么因果关系。',
    ]);
    await rice.say_and_wait([
      '但是……在 ',
      self_name,
      ' 成为你的对手之前都没有受伤过的啊！',
    ]);
    await bourbon.say_and_wait(
      '理解不能。受伤的发生率是一定的，因此认为那个理论没有物理根据。',
    );
    await bourbon.say_and_wait(
      '倒不如说，如果你主张你会招来不幸，那就应该由我来验证。',
    );
    await rice.say_and_wait([
      '让、',
      sys_get_colored_callname(30, 26),
      ' 来？',
    ]);
    await bourbon.say_and_wait('嗯，我把你当成了竞争对手。');
    await bourbon.say_and_wait([
      '那是因为我很期待，在 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 中感受到了成长的可能性。',
    ]);
    await bourbon.say_and_wait(
      '如果有了你这个竞争对手，我可以预见更大的成长。',
    );
    await bourbon.say_and_wait(
      '并且和你一起的话，存在达成史上最高的比赛——『奇迹』的可能性。',
    );
    await bourbon.say_and_wait([
      '我的不幸和 ',
      sys_get_colored_callname(26, 30),
      ' 无关。',
    ]);
    await rice.say_and_wait('……');
    await bourbon.say_and_wait([
      sys_get_colored_callname(26, 30),
      ' 是让我不幸的存在吗？还是说是呼唤奇迹的存在？',
    ]);
    await rice.say_and_wait('……那个……');
    await era.printAndWait([
      '———很长的一段时间，',
      rice.get_colored_name(),
      ' 都在默默地接受着 ',
      bourbon.get_colored_name(),
      ' 的视线。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 5, 0], 0);
  };

  handlers.teach = async (rice, me, callname, self_name, flags) => {
    const zob_zoy = get_chara_talk(47);
    await print_event_name('名指导', rice);
    await rice.say_and_wait('哼……哼、哼……♪');
    await zob_zoy.say_and_wait([self_name, ' 好像很高兴的样子呢。']);
    await zob_zoy.say_and_wait('有发生什么好事吗？');
    await rice.say_and_wait(['嗯……和你说哦，', self_name, ' 在课堂上跑赛道。']);
    await rice.say_and_wait('跑出比之前更好的成绩了！');
    await rice.say_and_wait('因为昨天学到了新的跑法，所以，这也是——');
    await zob_zoy.say_and_wait(['多亏了……', callname, ' 吗？']);
    await rice.say_and_wait('咦……咦咦，为什么会知道！？');
    await zob_zoy.say_and_wait('呵呵，抱歉。');
    await zob_zoy.say_and_wait('因为我在半夜看书的时候，偶尔……');
    await zob_zoy.say_and_wait([
      '会听到你一脸幸福地讲梦话，说『谢谢你，',
      callname,
      '……』',
    ]);
    await rice.say_and_wait('呜、呜啊、哇啊啊，好丢脸！');
    await zob_zoy.say_and_wait('对不起，我没有取笑你的意思。');
    await zob_zoy.say_and_wait(
      '我只是觉得能让你如此感激，一定是个很棒的训练员。',
    );
    await rice.say_and_wait(['唔、嗯！', callname, '，是最棒的训练员哦！']);
    await era.printAndWait([
      '之后，',
      rice.get_colored_name(),
      ' 不断说着 ',
      me.get_colored_name(),
      ' 有多好，讲了好一阵子。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(30, [0, 0, 0, 0, 10], 10);
  };
};
