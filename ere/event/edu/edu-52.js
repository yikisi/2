const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(HookArg,Record<string,*>,EventObject):Promise<*>>} */
const handlers = {};

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-52/week-start-1'),
  require('#/event/edu/edu-events-52/week-start-2'),
  require('#/event/edu/edu-events-52/week-start-3'),
  require('#/event/edu/edu-events-52/week-start-4'),
  require('#/event/edu/edu-events-52/week-start-5'),
].forEach((f) => f(week_start_handlers));

const loop1 = require('#/event/edu/edu-events-52/week-start-loop-1');
const loop2 = require('#/event/edu/edu-events-52/week-start-loop-2');
const loop3 = require('#/event/edu/edu-events-52/week-start-loop-3');

week_start_handlers[95 + 46] = async (
  urara,
  me,
  in_urara,
  callname,
  edu_marks,
  event_object,
) => {
  switch (edu_marks.loop) {
    case 2:
      await loop1(urara, me, in_urara, callname);
      await era.saveData(52);
      add_event(event_hooks.week_end, event_object);
      break;
    case 1:
      await loop2(urara, me, in_urara, callname);
      await era.saveData(52);
      add_event(event_hooks.week_end, event_object);
      break;
    case 0:
      if (await loop3(urara, me, in_urara, callname)) {
        edu_marks.sbuff = 1;
        await era.printAndWait([
          { isBr: true },
          urara.get_colored_name(),
          ' 能从粉丝的支持中获取更强的力量了！',
        ]);
      } else {
        edu_marks.loop = 2;
        await era.saveData(52);
        add_event(event_hooks.week_end, event_object);
      }
  }
};

handlers[event_hooks.week_start] = async (_, __, event_object) => {
  if (week_start_handlers[event_object.arg]) {
    return await week_start_handlers[event_object.arg](
      get_chara_talk(52),
      get_chara_talk(0),
      get_chara_talk(52, chara_colors[1]),
      sys_get_callname(52, 0),
      new UraraEduMarks(),
      event_object,
    );
  } else if (event_object.arg === 'palace') {
    throw new Error();
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} */
const week_end_handlers = {};

[
  require('#/event/edu/edu-events-52/week-end-1'),
  require('#/event/edu/edu-events-52/week-end-2'),
  require('#/event/edu/edu-events-52/week-end-3'),
  require('#/event/edu/edu-events-52/week-end-4'),
  require('#/event/edu/edu-events-52/week-end-5'),
].forEach((f) => f(week_end_handlers));

handlers[event_hooks.week_end] = async (_, __, event_object) => {
  if (week_end_handlers[event_object.arg]) {
    return await week_end_handlers[event_object.arg](
      get_chara_talk(52),
      get_chara_talk(0),
      get_chara_talk(52, chara_colors[1]),
      sys_get_callname(52, 0),
      new UraraEduMarks(),
      event_object,
    );
  }
};

handlers[event_hooks.train] = () => {
  const talk_arr = [
    '交给我吧！要上了哦！',
    `哦！要上了 ${sys_get_callname(52, 0)}！`,
    '要开始努力了呢！',
    '这次感觉能行！我要开始了！',
    '好！乌拉拉！要加油了！',
  ];
  return get_chara_talk(52).say_and_wait(get_random_entry(talk_arr));
};

handlers[
  event_hooks.train_fail
] = require('#/event/edu/edu-events-52/train-fail');

/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  const urara = get_chara_talk(52);
  era.print([urara.get_colored_name(), ' 的训练顺利结束了！']);
  era.println();
  if (
    !era.get('status:52:摸鱼') &&
    Math.random() < 0.2 * extra_flag.stamina_ratio &&
    extra_flag.train !== attr_enum.intelligence
  ) {
    const callname = sys_get_callname(52, 0),
      me = get_chara_talk(0),
      opera = get_chara_talk(15),
      call_opera_by_urara = sys_get_colored_callname(52, 15);
    await era.waitAnyKey();
    await print_event_name('额外自主训练！', urara);
    await era.printAndWait([
      '在今天的训练结束后，',
      urara.get_colored_name(),
      ' 与 ',
      me.get_colored_name(),
      ' 一同回到训练场的跑道旁边休息。',
    ]);
    await urara.say_and_wait([
      '今天也很努力的在练习呢！',
      callname,
      '，待会一起去食堂……嗯？那里的人是？',
    ]);
    await era.printAndWait([
      '顺着 ',
      urara.get_colored_name(),
      ' 晃动耳朵的方向，',
      me.get_colored_name(),
      ' 看到了另外一位正站在训练场中的身影。',
    ]);
    await urara.say_and_wait([
      '啊！是 ',
      call_opera_by_urara,
      '！',
      call_opera_by_urara,
      ' 也要去休息了吗？',
    ]);
    await era.printAndWait([
      '小',
      urara.get_uma_sex_title(),
      '在对方面前站定，而行事风格戏剧化的霸王也转向了 ',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 的方向。',
    ]);
    await opera.say_and_wait([
      '哦！这不是乌拉拉和 ',
      sys_get_callname(15, 0),
      ' 吗？我正要去练跑！和黄昏之星一起！',
    ]);
    await urara.say_and_wait([
      '和黄昏之星一起练跑？很有 ',
      call_opera_by_urara,
      ' 的风格呢，而且听起来好厉害！',
    ]);
    if (era.get('cflag:15:殿堂')) {
      await opera.say_and_wait(
        '是怎样呢？是为了在繁星下再次擦亮光辉？还是在怠惰后驱散迷惘呢？',
      );
      await urara.say_and_wait(
        '原来如此，乌拉拉也明白的哦！大人也有大人的辛苦呢～',
      );
    } else {
      await opera.say_and_wait(
        '没错！我要用繁星的光辉磨练我的美貌与这双腿！为了明日的闪耀！',
      );
      await urara.say_and_wait([
        '是这样啊，乌拉拉明白了，这么努力的 ',
        call_opera_by_urara,
        ' 果然很了不起！',
      ]);
    }
    await urara.say_and_wait([
      '嗯……那样的话，',
      callname,
      '，时间还有一些，我们也试试看吗？',
    ]);
    era.printButton('「走吧，一起试试看。」', 1);
    era.printButton('「好好休息也很重要哦？」', 2);
    if ((await era.input()) === 1) {
      hook.arg = true;
      await era.printAndWait([
        '在听到 ',
        me.get_colored_name(),
        ' 对 ',
        urara.get_colored_name(),
        ' 的回应后，',
        opera.get_colored_name(),
        ' 也立刻领会精神的打出了响指。',
      ]);
      await opera.say_and_wait([
        `欢迎你！不过我可不会把最闪耀的王座${era.get('love:15') >= 90 ? '和最爱的眷属' : ''}让给你哦——尽全力来拿吧！`,
      ]);
      await urara.say_and_wait([
        '嗯！既然 ',
        call_opera_by_urara,
        ' 这么说了，那乌拉拉也会尽全力赶上去的！',
      ]);
      await opera.say_and_wait([
        '哈──哈哈哈！看来今天的练跑会相当有趣哦！你说是吧，',
        sys_get_callname(15, 0),
        '？',
      ]);
      await era.printAndWait([
        '于是虽然意料之中的没能跟上 ',
        opera.get_colored_name(),
        ' 的步伐，但 ',
        urara.get_colored_name(),
        ' 却顽强的坚持到了加训最后。',
      ]);
    } else {
      hook.arg = false;
      await urara.say_and_wait([
        '诶？是这样吗？我还以为 ',
        callname,
        ' 一定会同意的来着？',
      ]);
      await era.printAndWait([
        '而在 ',
        urara.get_colored_name(),
        ' 提出疑问后，紧接的便是 ',
        opera.get_colored_name(),
        ' 表示理解的劝说。',
      ]);
      await opera.say_and_wait(
        '就是这样！不会休养连光芒也蒙上阴影，我也一样，昨天我悠闲地泡了玫瑰花瓣浴呢！',
      );
      await urara.say_and_wait(
        '哦！我知道了！为了变强我会好好休息的！不过，玫瑰花瓣浴……？',
      );
      await era.printAndWait([
        '最终，在 ',
        opera.get_colored_name(),
        ' 承诺稍后会分',
        urara.sex,
        '一些玫瑰后，',
        urara.get_colored_name(),
        ' 也在和 ',
        opera.get_colored_name(),
        ' 挥手告别后拉着 ',
        me.get_colored_name(),
        ' 向食堂跑去……',
      ]);
    }
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} */
const office_prepare_handlers = {};

require('#/event/edu/edu-events-52/office-prepare')(office_prepare_handlers);

handlers[event_hooks.office_prepare] = async (hook, _, event_object) => {
  if (!office_prepare_handlers[event_object.arg]) {
    return false;
  }
  const flags = { wait_flag: false };
  if (
    await office_prepare_handlers[event_object.arg](
      get_chara_talk(52),
      get_chara_talk(0),
      sys_get_callname(52, 0),
      flags,
      event_object,
    )
  ) {
    return false;
  }
  flags.wait_flag && (await era.waitAnyKey());
  return true;
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} */
const school_atrium_handlers = {};

require('#/event/edu/edu-events-52/school-atrium')(school_atrium_handlers);

handlers[event_hooks.school_atrium] = async (hook, _, event_object) => {
  if (!school_atrium_handlers[event_object.arg]) {
    return false;
  }
  const flags = { wait_flag: false };
  if (
    await school_atrium_handlers[event_object.arg](
      get_chara_talk(52),
      get_chara_talk(0),
      sys_get_callname(52, 0),
      flags,
      event_object,
    )
  ) {
    return false;
  }
  flags.wait_flag && (await era.waitAnyKey());
  return true;
};

handlers[
  event_hooks.out_start
] = require('#/event/edu/edu-events-52/out-start');

handlers[
  event_hooks.out_church
] = require('#/event/edu/edu-events-52/out-church');

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} */
const out_shopping_handlers = {};

[
  require('#/event/edu/edu-events-52/out-shopping-1'),
  require('#/event/edu/edu-events-52/out-shopping-2'),
  require('#/event/edu/edu-events-52/out-shopping-3'),
].forEach((f) => f(out_shopping_handlers));

handlers[event_hooks.out_shopping] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 52) {
    add_event(hook.hook, event_object);
    return false;
  }
  if (!out_shopping_handlers[event_object.arg]) {
    return false;
  }
  const flags = { wait_flag: false };
  await out_shopping_handlers[event_object.arg](
    get_chara_talk(52),
    get_chara_talk(0),
    get_chara_talk(52, chara_colors[1]),
    sys_get_callname(52, 0),
    new UraraEduMarks(),
    flags,
    event_object,
  );
  flags.wait_flag && (await era.waitAnyKey());
  return true;
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},{loc:number},EventObject):Promise<*>>} */
const back_school_handlers = {};

[
  require('#/event/edu/edu-events-52/back-school-1'),
  require('#/event/edu/edu-events-52/back-school-2'),
].forEach((f) => f(back_school_handlers));

handlers[event_hooks.back_school] = async (hook, extra_flag, event_object) => {
  if (!back_school_handlers[event_object.arg]) {
    return false;
  }
  const flags = { wait_flag: false };
  if (
    await back_school_handlers[event_object.arg](
      get_chara_talk(52),
      get_chara_talk(0),
      sys_get_callname(52, 0),
      flags,
      extra_flag,
      event_object,
    )
  ) {
    return false;
  }
  flags.wait_flag && (await era.waitAnyKey());
  return true;
};

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,HookArg):Promise<*>>} */
const race_start_handlers = {};

[
  require('#/event/edu/edu-events-52/race-start-1'),
  require('#/event/edu/edu-events-52/race-start-2'),
].forEach((f) => f(race_start_handlers));

/**
 * @param {HookArg} hook
 * @param {{race:number}} extra_flag
 */
handlers[event_hooks.race_start] = async (hook, extra_flag) => {
  const callname = sys_get_callname(52, 0),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  if (
    !race_start_handlers[extra_flag.race] ||
    (await race_start_handlers[extra_flag.race](
      urara,
      me,
      get_chara_talk(52, chara_colors[1]),
      callname,
      new UraraEduMarks(),
      hook,
    ))
  ) {
    if (extra_flag.race < 0) {
      await print_event_name('武者震颤', urara);
      await urara.say_and_wait([
        '哦——！',
        callname,
        '！今天我感觉充满了力量哦！',
      ]);
      await era.printAndWait([
        '站在 ',
        me.get_colored_name(),
        ' 的身边，',
        urara.get_colored_name(),
        ' 兴奋地看着前方。',
      ]);

      era.printButton('「那一会儿要加油上了！」', 1);
      era.printButton('「嗯，让大家看见你的成长。」', 2);
      await era.input();

      await urara.say_and_wait('好！大家的期待，绝对会回应的呦！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' 兴奋地向前一跃，随后冲向了赛场。',
      ]);
    } else {
      await print_event_name('赛前鼓励', urara);
      const talk_arr = [
        '好！要参赛了──！',
        '大家都很厉害的样子！那乌拉拉也不能输！',
        `${callname}！这次也请好好看着我的奔跑吧！`,
        '只要和平常一样去跑就可以了吧？我明白了！',
        `别担心哦 ${callname}，只要拼命去跑一定可以做到的！`,
      ];
      switch (era.get('cflag:52:干劲')) {
        case -1:
          talk_arr.push('虽然能参加很多比赛很开心，但现在身体好重……');
          break;
        case -2:
          talk_arr.push('又要比赛了……我、我会努力的……');
      }
      await get_chara_talk(52).say_and_wait(get_random_entry(talk_arr));
    }
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-52/race-end-1'),
  require('#/event/edu/edu-events-52/race-end-2'),
  require('#/event/edu/edu-events-52/race-end-3'),
].forEach((f) => f(race_end_handlers));

/**
 * @param {HookArg} _
 * @param {{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number}} extra_flag
 */
handlers[event_hooks.race_end] = async (_, extra_flag) => {
  const callname = sys_get_callname(52, 0),
    me = get_chara_talk(0),
    urara = get_chara_talk(52),
    key = `${extra_flag.race}_${era.get('cflag:52:育成回合计时')}`;
  if (race_end_handlers[extra_flag.race] || race_end_handlers[key]) {
    return await (race_end_handlers[extra_flag.race] || race_end_handlers[key])(
      urara,
      me,
      get_chara_talk(52, chara_colors[1]),
      callname,
      extra_flag,
      new UraraEduMarks(),
    );
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜！', urara);
    let talk_arr = [
      `嗯？诶……太棒了！赢了！${callname}！看到了吗？我赢了呦！`,
      '哇啊……！我拿到一着了！我真的拿到一着了！',
      '我成功了哦！拿到一着的话，就是说大家的期待都传达到了！',
      `${callname}！看到了吗？我刚才有嗖——的一声冲过终点哦！`,
      `果然就像平常的时候一样就好了！这次我也赢了哦 ${callname}！`,
      '做到了……我做到了哦！我真的做到了哦！',
    ];
    await urara.say_and_wait(get_random_entry(talk_arr));
    era.drawLine();
    await era.printAndWait([
      '抹掉脸上的汗水，',
      urara.get_colored_name(),
      ' 在比赛结束后立刻一路小跑地冲到了 ',
      me.get_colored_name(),
      ' 所等候的围栏前面。',
    ]);
    await era.printAndWait([
      '在众人的欢呼声中扬起蓄满阳光的小脸，小',
      urara.get_uma_sex_title(),
      '对送出毛巾和水的 ',
      me.get_colored_name(),
      ' 露出了胜利的笑容。',
    ]);
    await urara.say_and_wait(
      '嘿嘿～刚才好像都听到叔叔们在喊万岁的声音了，乌拉拉真的有那么厉害吗？',
    );

    await urara.say_and_wait([
      '对了，',
      callname,
      '！刚才看到了吗？乌拉拉好像赢了哦！',
    ]);
    era.printButton('「没错，乌拉拉做到了，今天是第一名！」', 1);
    era.printButton('「大家很开心哦？不过接下来还有更要紧的事！」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '得到 ',
        me.get_colored_name(),
        ' 的肯定，',
        urara.get_colored_name(),
        ' 开心地摇起耳朵和尾巴，可爱的笑脸变得更加灿烂了。',
      ]);
      await urara.say_and_wait(
        '果然是这样！那么为了大家的笑容，我下次也一定要拿下一着！',
      );
      await urara.say_and_wait([
        callname,
        ' 也是哦！因为现在的 ',
        callname,
        ' 笑起来的样子也非常好看！',
      ]);
      await era.printAndWait(
        '在胜利之后闪闪发光的樱瞳中，此刻正微笑的映照着所有人的笑容。',
      );
    } else {
      await era.printAndWait([
        '迅速擦掉脸上的汗水，',
        urara.get_colored_name(),
        ' 用力竖起耳朵，脸上的笑容也更加坚定了。',
      ]);
      await urara.say_and_wait(
        '嗯！我也是这么觉得！因为乌拉拉也还跑得不太够哦！',
      );
      await urara.say_and_wait([
        callname,
        '，接下来要跑什么比赛，可以让乌拉拉期待一下吗？',
      ]);
      await era.printAndWait([
        '在胜利之后闪闪发光的樱瞳中，',
        me.get_colored_name(),
        ' 看到其中的火苗比以往更加旺盛。',
      ]);
    }
    era.drawLine();
    talk_arr = [
      `Live要开始了哦！${callname} 很期待吗？我也很期待哦！`,
      '一会一定要看着我哦！我也会努力跳舞的！',
      '大家看上去都准备好了！我也兴奋起来了哦！',
    ];
    if (era.get('love:52') >= 75) {
      talk_arr.push(
        `我也会不输给的大家的！绝对、绝对能好好迷住 ${callname} 的！`,
      );
    }
    if (era.get('love:52') === 100) {
      talk_arr.push(`${callname}！待会在舞台上也要一直看着乌拉拉哦！`);
    }
    await urara.say_and_wait(get_random_entry(talk_arr));
  } else if (extra_flag.rank <= 5) {
    await print_event_name('竞赛上榜！', urara);
    const talk_arr = [
      '大家都很厉害呢！但下次我一定不会输的！',
      '虽然没能拿到一着，但果然很开心呢！下次再来跑吧！',
      `嘿嘿～这次没能拿到一着，我会继续努力的，${callname} 也别伤心哦！`,
    ];
    switch (extra_flag.rank) {
      case 2:
        talk_arr.push(`看到了吗 ${callname}！我竟然是第二名哦──！`);
        break;
      case 3:
        talk_arr.push('我是第三名！很厉害吧！');
    }
    await urara.say_and_wait(get_random_entry(talk_arr));
    await era.printAndWait([
      '在大家的祝贺声中，',
      urara.get_colored_name(),
      ' 依旧面带笑容地快步跑到了 ',
      me.get_colored_name(),
      ' 所在的围栏旁边。',
    ]);
    await urara.say_and_wait(
      '嘿嘿～跟大家比赛果然很开心，而且真的能感觉到自己变强了！',
    );
    await urara.say_and_wait('虽然现在的乌拉拉距离拿下一着果然还是不够呢……');

    await urara.say_and_wait([callname, ' 觉得怎么样？我这次只差一点了！']);
    era.printButton('「辛苦了乌拉拉，已经做得很不错了。」', 1);
    era.printButton('「先休息一下吧，这次感觉怎么样？」', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait([
        '谢谢 ',
        callname,
        '！但是这次总感觉有点可惜，是差在哪里了？',
      ]);
      await urara.say_and_wait(
        '不过按照现在的节奏努力下去，我下次应该能拿到第一名吧！',
      );
    } else {
      await urara.say_and_wait(
        '这次跑得很开心！而且能逐渐追上大家了，但是还差一点！',
      );
      await urara.say_and_wait([
        '但是现在就问 ',
        callname,
        ' 的意见好像太早了，那回去之后？',
      ]);
    }
    era.printButton('「就是这样，回去之后一起思考下次对策吧。」', 1);
    await era.input();

    await urara.say_and_wait(
      '嗯！我知道了！乌拉拉也会更加努力，为了下次的一着！',
    );
  } else if (extra_flag.rank <= 10) {
    await print_event_name('竞赛失败！', urara);
    await urara.say_and_wait(
      get_random_entry([
        '大家都很厉害呢！但下次我一定不会输的！',
        '虽然没能拿到一着，但果然很开心呢！下次再来跑吧！',
        `嘿嘿～这次没能拿到一着，我会继续努力的，${callname} 也别伤心哦！`,
      ]),
    );
    await era.printAndWait([
      '摇摇晃晃地来到 ',
      me.get_colored_name(),
      ' 身边，不知是否是疲惫所致，',
      urara.get_colored_name(),
      ' 沾满汗水的笑容似乎有些勉强。',
    ]);
    await urara.say_and_wait('结果这次又跑输了呢，总觉得有些不好意思了……');
    await urara.say_and_wait(
      '就在我觉得『今天的大家都好快～』的时候，下一瞬间就被超越了！',
    );
    await urara.say_and_wait(
      '不过我也听到了哦？对乌拉拉的加油声一直没停下过！',
    );

    await urara.say_and_wait(
      '虽然我努力跑到终点了，但是乌拉拉到底有没有回应大家的期待呢……',
    );
    era.printButton('「别灰心，这次其实做得还不错。」', 1);
    era.printButton('「下次就拿出成果来回应他们吧。」', 2);
    await era.input();

    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 的帮助下用毛巾抹干脸上的汗水，小',
      urara.get_uma_sex_title(),
      '伴随着 ',
      me.get_colored_name(),
      ' 的鼓励用力点了点头。',
    ]);
    await urara.say_and_wait(
      '没错！只是一次失败而已，还能继续跑的话就没问题，下次比赛要努力取胜了哦！',
    );
    await era.printAndWait([
      '在下一场奔跑到来前，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 立下了「下次一定要超越大家」的约定。',
    ]);
    await urara.say_and_wait(
      '嘿嘿～大家说习惯失败算不上好事，但至少乌拉拉还可以继续跑下去！',
    );
  } else {
    await print_event_name('下次不会输了！', urara);
    await urara.say_and_wait('奔跑真开心啊，但果然稍微有些不甘心呢……');

    await era.printAndWait([
      '失落的贴在 ',
      me.get_colored_name(),
      ' 的身边，今天的 ',
      urara.get_colored_name(),
      ' 好像因为比赛失利而失去了以往的笑脸。',
    ]);
    await urara.say_and_wait('乌拉拉又输了啊……我还以为这次一定没问题的……');
    await urara.say_and_wait(
      '虽然比赛很快乐，但拿到第一名的心情果然是不一样的！',
    );
    await urara.say_and_wait('心里有些热又有些闷，如果能再去跑一次就好了……');

    urara.say([callname, '，这个时候要怎么才能赢呢？']);
    era.printButton('「调整好心态，下次把不甘赢回来。」', 1);
    era.printButton('「别着急，总之回去后就开始训练吧。」', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait(
        '嗯！只要把不开心化为斗志就好了，大家都是这么说的！',
      );
      await urara.say_and_wait([
        '在跑赢之前绝对不可以松懈！',
        callname,
        ' 也一起来调整坏习惯吧！',
      ]);
      await era.printAndWait([
        '结果在回去后，为了互相督促，',
        me.get_colored_name(),
        ' 的零食也被 ',
        urara.get_colored_name(),
        ' 削减了。',
      ]);
    } else {
      await urara.say_and_wait(
        '说的也是，只要现在开始努力，下次一定可以跑赢！',
      );
      await urara.say_and_wait([
        '所以 ',
        callname,
        '，现在快点回去吧！快点的话说不定今天就能继续训练哦？',
      ]);
      await era.printAndWait([
        '结果在回去后，',
        urara.get_colored_name(),
        ' 真的立刻拉着 ',
        me.get_colored_name(),
        ' 进行了追加训练。',
      ]);
    }
  }
};

handlers[
  event_hooks.crazy_fan_end
] = require('#/event/edu/edu-events-52/crazy-fan-end');

/**
 * 春乌拉拉的育成事件
 *
 * @author 99
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
