const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(HookArg,*):Promise<boolean|void>>} */
const handlers = {};

handlers[event_hooks.select] = () => {
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25);
  if (era.get('status:25:沉睡')) {
    era.print([
      '……',
      coffee.get_colored_name(),
      ' 现在睡得很沉，眼睫毛一抖一抖的，是在做什么梦吗？',
    ]);
  } else {
    const talk_arr = [
      `${callname}，我在这里。`,
      '……嗯，就像平常那样。',
      `今天也……麻烦 ${callname} 了。`,
    ];
    coffee.say(get_random_entry(talk_arr));
  }
};

handlers[event_hooks.good_morning] = () => {
  const talk_arr = [];
  if (era.get('base:25:体力') < era.get('maxbase:25:体力') * 0.45) {
    talk_arr.push(
      '我好像……不太能勉强自己了……',
      '请给我一些时间……让我喝杯咖啡。',
      '脚好重……就像是扎根了一样……',
    );
  } else {
    talk_arr.push(
      '为了……追上那孩子。',
      '为了抓住星星，或许我能飞到天上去……！',
      '要追逐的影子……我已经看清了。',
      '……我们开始吧，朋友也是这么说的……',
      '龙有翅膀，而我有咖啡……呵呵。',
    );
  }
  get_chara_talk(25).say(get_random_entry(talk_arr));
};

handlers[event_hooks.good_night] = async (hook) => {
  const awake = 2 * sys_check_awake(25) + sys_check_awake(0),
    callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0);
  if (awake === 3) {
    const check = get_custom_check(25).is_want_make_love();
    if (check) {
      era.print([
        '今天的事项结束了，',
        me.get_colored_name(),
        ' 准备像往常一样送 ',
        coffee.get_colored_name(),
        ' 回',
        coffee.sex,
        '的宿舍。正当 ',
        me.get_colored_name(),
        ' 动身时，衣袖却被 ',
        coffee.get_colored_name(),
        ' 拉住了。',
      ]);
      era.print([
        '回头看去，恰好与 ',
        coffee.get_colored_name(),
        ' 湿漉漉的眼睛四目相对。',
      ]);
      coffee.say([callname, '，我已经申请好外宿了，所以……']);
      era.print([
        coffee.sex,
        '并没有把话讲完，但意思已经很明确了，',
        me.get_colored_name(),
        ' 决定——',
      ]);
      if (check !== 2) {
        era.printButton('答应', 1);
        era.printButton('拒绝', 2);
      }
      if (check === 2 || (await era.input()) === 1) {
        era.print([
          '轻轻地将 ',
          coffee.get_colored_name(),
          ' 搂入怀中，从扑腾在脸上的耳朵中 ',
          me.get_colored_name(),
          ' 感受到了 ',
          coffee.get_colored_name(),
          ' 内心的欣喜。',
        ]);
        await coffee.say_and_wait([callname, '……今晚，请多指教……']);
        hook.arg = 1;
      } else {
        era.print('——抱歉。');
        era.print([
          '从 ',
          me.get_colored_name(),
          ' 脸上，',
          coffee.get_colored_name(),
          ' 看到了这般神色。',
        ]);
        coffee.say([callname, '，今天太累了吧……今晚，请好好休息……']);
        era.print([
          coffee.get_colored_name(),
          ' 脸上的些许失望并没有逃过 ',
          me.get_colored_name(),
          ' 的眼睛，但还是下次再补偿',
          coffee.sex,
          '吧……',
        ]);
        hook.arg = 0;
      }
    } else {
      era.print([
        '繁忙的一天结束，',
        me.get_colored_name(),
        ' 把 ',
        coffee.get_colored_name(),
        ' 送到了美浦宿舍的门口。',
      ]);
      coffee.say(['麻烦你了，', callname, '……我和朋友，都是。']);
    }
  } else if (awake === 1) {
    era.print([
      '突然感觉衣摆被谁拉了拉，往身后看去，',
      coffee.get_colored_name(),
      ' 在不远处休息用的椅子上睡着了。不好打扰',
      coffee.sex,
      '的休息，',
      me.get_colored_name(),
      ' 用外套盖在',
      coffee.sex,
      '身上将',
      coffee.sex,
      '公主抱起来，送回了学生宿舍。',
    ]);
  } else {
    coffee.say([
      callname,
      '？……啊，睡着了，太过操劳了吗……晚安，',
      callname,
      '，愿你做一个无貘的好梦。',
    ]);
  }
};

handlers[event_hooks.talk] = async () => {
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25);
  if (era.get('status:25:沉睡')) {
    await era.printAndWait([
      '……仔细地观察着睡梦中 ',
      coffee.get_colored_name(),
      ' 的脸庞，像人偶一般的白皙精致的面孔彻底放松了下来，发出了细细的鼻息声。',
    ]);
  } else {
    let talk_arr;
    switch (era.get('cflag:25:干劲')) {
      case -2:
        talk_arr = [
          `${callname}，『他们』来了……！不要离开我的身边……！`,
          '状态，很不好……感觉会被影子……吞噬。',
        ];
        break;
      case -1:
        talk_arr = [
          `${callname}……抱歉，现在的状态不太好……要是能有一杯咖啡的话……`,
          '说不定……我们经历的这一切，都只是海市蜃楼般的梦……',
        ];
        break;
      case 0:
        talk_arr = [
          '我没法倒转时间……唯一能做的，就是尽力做到最好。',
          '……你好像很容易被他们缠上……如果有什么奇怪的事，请马上告诉我。',
        ];
        break;
      case 1:
        talk_arr = [
          '从小时候开始，朋友就在我身边了……一直都在追逐着朋友的背影的我，总有一天，一定会……',
          '朋友现在在哪吗……？呵呵，看看背后怎么样。',
          '刚刚，你的影子自己动起来了……呵呵，开玩笑的。',
        ];
        break;
      case 2:
        talk_arr = [
          '鲸鱼长出七色的翅膀飞向青金石的天空……呵呵，梦里的世界还真是有趣。',
          `${callname}，你现在……嗯，状态不错，看来是不会遇上他们。`,
          '这是为了今天所选的特别咖啡……如缟玛瑙一般艳丽……可以的话，来一起品尝吧？',
        ];
    }
    await coffee.say_and_wait(get_random_entry(talk_arr));
  }
};

handlers[event_hooks.office_gift] = async () => {
  await get_chara_talk(25).say_and_wait(
    Math.random() < 0.5
      ? `这是……给我的吗？感谢你的礼物，${sys_get_callname(25, 0)}。`
      : '给我的，礼物……？啊，朋友！请不要擅自打开！',
  );
};

handlers[event_hooks.office_cook] = async () => {
  const coffee = get_chara_talk(25);
  const me = get_chara_talk(0);
  await coffee.say_and_wait([
    '今天就做炖牛肉如何，',
    sys_get_callname(25, 0),
    '……？',
  ]);
  await era.printAndWait([
    coffee.get_colored_name(),
    ' 令人意外地擅长料理，',
    me.get_colored_name(),
    ' 在一旁几乎没有插手的余地。',
  ]);
};

handlers[event_hooks.office_study] = async () => {
  await get_chara_talk(25).say_and_wait([
    '原来如此……',
    sys_get_callname(25, 0),
    '，比看上去要厉害呢……',
  ]);
  await era.printAndWait('这算是被夸奖了吗……');
};

handlers[event_hooks.office_rest] = async () => {
  const callname = sys_get_callname(25, 0);
  await get_chara_talk(25).say_and_wait(
    Math.random() < 0.5
      ? `${callname} 知道咖啡树的花语吗？那就是『一起休息吧』，据说是从休息的时候会喝咖啡这种地方来的……`
      : `${callname}，你有感受过别人的心跳声吗？心脏弹奏出的声音，据说有诱人入眠的功效……那么，${callname}，现在请让我把耳朵贴在胸前吧……`,
  );
};

handlers[event_hooks.office_prepare] = async () => {
  const callname = sys_get_callname(25, 0);
  if (era.get('love:25') < 75) {
    await get_chara_talk(25).say_and_wait('为了追上朋友……我会拼尽全力的……！');
  } else {
    await get_chara_talk(25).say_and_wait(
      Math.random() < 0.5
        ? `为了追上朋友，还有 ${callname}……我会拼尽全力的……！`
        : `能够有今天的成长，都是因为 ${callname} 你，所以我也……`,
    );
  }
};

handlers[event_hooks.office_game] = async () => {
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25);
  await coffee.say_and_wait([callname, '，我是不会输的……！']);
  await era.printAndWait([coffee.get_colored_name(), ' 燃起了莫名的胜负心。']);
};

handlers[event_hooks.school_atrium] = async () => {
  const callname = sys_get_callname(25, 0);
  const me = get_chara_talk(0);
  const coffee = get_chara_talk(25);
  if (!(await select_action_in_atrium())) {
    await coffee.say_and_wait('朋友，我一定会超越你的……！');
  } else {
    if (era.get('love:25') < 75) {
      await coffee.say_and_wait([callname, '，在特雷森里果然还是……']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 有些慌乱地四处张望，在学校里约会对',
        coffee.sex,
        '还是太勉强了吗……',
      ]);
    } else {
      await coffee.say_and_wait([callname, '，接下来我们去哪……']);
      await era.printAndWait([
        '不顾周围的',
        coffee.get_uma_sex_title(),
        '和训练员的目光，',
        coffee.get_colored_name(),
        ' 紧紧抱着 ',
        me.get_colored_name(),
        ' 的手臂，在耳边说道。',
      ]);
    }
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  const callname = sys_get_callname(25, 0);
  const coffee = get_chara_talk(25);
  if (Math.random() < 0.5) {
    await coffee.say_and_wait([
      callname,
      '，今天的午餐是三明治配上咖啡，请用……',
    ]);
    await era.printAndWait([
      '在 ',
      coffee.get_colored_name(),
      ' 的注视下美味的享用了午餐。',
    ]);
  } else {
    await coffee.say_and_wait([callname, ' 做的苹果派，非常的美味……']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 一边吃着苹果派，一边小口地品尝着咖啡，真是符合 ',
      coffee.get_colored_name(),
      ' 的搭配……',
    ]);
  }
};

handlers[event_hooks.out_river] = async (hook) => {
  const callname = sys_get_callname(25, 0);
  const coffee = get_chara_talk(25);
  const me = get_chara_talk(0);
  hook.arg = !!(await select_action_around_river());
  if (hook.arg) {
    await era.printAndWait([
      '与 ',
      coffee.get_colored_name(),
      ' 一起在河堤边散步……',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait(
        '……ねえ私に気つﾞいて，This is my love song ♪……',
      );
      await era.printAndWait([
        '听到了身边传来的小声哼唱，',
        coffee.get_colored_name(),
        ' 貌似很开心的样子。',
      ]);
    } else {
      await era.printAndWait(
        '突然感觉手被冰冰凉凉的东西抓住了，转头一看却什么都没有。',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 没有反应，也就是说是朋友吗，总感觉有点习惯了……',
      ]);
      await era.printAndWait(
        '正这么想着时，另一只手也被抓住了，只不过是暖暖的。',
      );
      await era.printAndWait([
        '微微扭头，可以看到 ',
        coffee.get_colored_name(),
        ' 白皙的手，',
        coffee.sex,
        '低着头，看不出表情。',
      ]);
      await era.printAndWait('……就这样走下去吧。');
    }
  } else {
    await era.printAndWait([
      '与 ',
      coffee.get_colored_name(),
      ' 一起去河边钓鱼……',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, '，很擅长钓鱼啊……']);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 似乎很喜欢这种平静的消磨时间方式，尽管手中并没有拿着鱼竿，但仍愉快地坐在身边陪伴。',
      ]);
      await era.printAndWait([
        '……不过总感觉',
        coffee.sex,
        '时不时都会看过来。',
      ]);
    } else {
      await coffee.say_and_wait([callname, '，这条河里充满了『他们』呢……']);
      await era.printAndWait('啊？是开玩笑吧？');
      await era.printAndWait([
        '但看着在水波中却如死水一般静止不动的鱼标，',
        me.get_colored_name(),
        ' 还是往 ',
        coffee.get_colored_name(),
        ' 身边靠了靠……',
      ]);
    }
  }
};

handlers[event_hooks.out_church] = async () => {
  const me = get_chara_talk(0);
  const callname = sys_get_callname(25, 0);
  const coffee = get_chara_talk(25);
  await era.printAndWait([
    '在与 ',
    coffee.get_colored_name(),
    ' 外出时路过了神社。',
  ]);
  await coffee.say_and_wait(['嗯……', callname, '，能进去看看吗？']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 同意了 ',
    coffee.get_colored_name(),
    ' 的请求。',
  ]);
  await era.printAndWait('进入神社后，里面的人并不是很多。');
  await era.printAndWait([
    coffee.get_colored_name(),
    ' 进入神社后就在寻找着什么，最终在抽签台停了下来，招呼 ',
    me.get_colored_name(),
    ' 过去。',
  ]);
  await coffee.say_and_wait([
    callname,
    '……等会儿抽签之后可能会发生一些奇妙的事情，请不要感到惊慌。',
  ]);
  await era.printAndWait([
    '身经百战的 ',
    me.get_colored_name(),
    ' 点了点头，在旁边看着 ',
    coffee.get_colored_name(),
    ' 抽了一签，结果是——',
  ]);
  if (Math.random() < 0.5) {
    await era.printAndWait('是大吉。');
    if (era.get('love:25') >= 75) {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 似乎松了一口气，但还没等 ',
        me.get_colored_name(),
        ' 上前祝贺，眼前就出现了一股奇妙的画面。',
      ]);
      await era.printAndWait([
        '主角是 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        '，从年纪上来看似乎要比现在年长好几岁，所在地是一个陌生的房间。',
      ]);
      await era.printAndWait('但这都不是关键。');
      await era.printAndWait([
        '因为眼前的 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 身上不着片缕，正在房间里激烈地做爱。',
      ]);
      if (me.sex_code > 0 && coffee.sex_code - 1) {
        await era.printAndWait([
          '微弱的阳光透过窗户照射在两人身上，身上的汗水在阳光的映衬下散发着微微金光。不过这个描述实际上不存在任何神圣感，因为此时的 ',
          coffee.get_colored_name(),
          ' 正被 ',
          me.get_colored_name(),
          ' 从身后激烈抽插着小穴，打桩的速度让此时正在被动观看活春宫的 ',
          me.get_colored_name(),
          ' 自己都感到心惊肉跳。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 的表情更是与平时判若两人，眼角的泪水汗水与某种奇怪的液体痕迹……好吧就是精液，混合在一起，舌头无力地从口中垂下，随着身体的前后摇摆不断晃荡。',
        ]);
      }
      await era.printAndWait([
        '就这样 ',
        me.get_colored_name(),
        ' 观看了自己与 ',
        coffee.get_colored_name(),
        ' 的无声做爱实况，期间还换了好几个姿势，最后以 ',
        coffee.get_colored_name(),
        ' 的高潮余韵脸作为结束……',
      ]);
      await era.printAndWait([
        '神社中的 ',
        me.get_colored_name(),
        ' 与满脸通红的 ',
        coffee.get_colored_name(),
        ' 四目相对，又慢慢移开，两人都沉默无声。',
      ]);
      await era.printAndWait([
        '与 ',
        coffee.get_colored_name(),
        ' 的关系因为奇怪的方式变好了……',
      ]);
    } else {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 似乎松了一口气，但还没等 ',
        me.get_colored_name(),
        ' 上前祝贺，眼前就出现了一股奇妙的画面。',
      ]);
      await era.printAndWait([
        '主角是 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        '，从年纪上来看似乎和现在差别不大，身上仍穿着训练员的制服和特雷森校服，所在地则是熟悉的训练员室。',
      ]);
      await era.printAndWait('但这都不是关键。');
      await era.printAndWait([
        '眼前的 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 正互相紧贴着坐在训练员室的沙发上，',
        me.get_colored_name(),
        ' 从背后怀抱着 ',
        coffee.get_colored_name(),
        '，脸紧紧地迈进了 ',
        coffee.get_colored_name(),
        ' 的侧脖，似乎正在大口呼吸着 ',
        coffee.get_colored_name(),
        ' 身上的味道，不安分的双手在 ',
        coffee.get_colored_name(),
        ' 的胸前和腿间肆虐。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 则露出了一副湿漉漉的表情，身上的校服七零八落，通红的脸上写满了情欲与期待。',
      ]);
      await era.printAndWait('这怎么看都是马上要发生点什么了啊！');
      await era.printAndWait([
        '就在 ',
        coffee.get_colored_name(),
        ' 的衣服准备完全被脱下来的时候，眼前的画面消失了。',
      ]);
      await era.printAndWait([
        '神社中的 ',
        me.get_colored_name(),
        ' 与满脸通红的 ',
        coffee.get_colored_name(),
        ' 四目相对，沉默无声。',
      ]);
      await era.printAndWait([
        '与 ',
        coffee.get_colored_name(),
        ' 的关系因为奇怪的方式变好了……',
      ]);
    }
  } else {
    await era.printAndWait('……是大凶。');
    if (era.get('love:25') >= 50) {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 显得有些失落，但还没等 ',
        me.get_colored_name(),
        ' 上前安慰，眼前就出现了一股奇妙的画面。',
      ]);
      await era.printAndWait([
        '主角是 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        '，从年纪上来看似乎和现在差别不大，身上仍穿着训练员的制服和特雷森校服，所在地则是熟悉的训练员室。',
      ]);
      await era.printAndWait('但这都不是关键。');
      await era.printAndWait([
        '眼前的 ',
        me.get_colored_name(),
        ' 似乎正在和 ',
        coffee.get_colored_name(),
        ' 吵架，',
        me.get_colored_name(),
        ' 的脸上保持着冷漠，而 ',
        coffee.get_colored_name(),
        ' 则满脸泪痕，两人旁边的桌子上似乎摆放着什么照片——',
      ]);
      await era.printAndWait([
        '还没等 ',
        me.get_colored_name(),
        ' 看清楚照片的内容，眼前的画面就突兀的消失了。',
      ]);
      await era.printAndWait([
        '神社中的 ',
        me.get_colored_name(),
        ' 刚回过神来就看见 ',
        coffee.get_colored_name(),
        ' 面无表情地将手上的签撕得粉碎，不知从身上何处掏出来一个打火机直接把碎片烧得一干二净，期间还伴随着不知道是不是幻觉的微弱哀嚎声。',
      ]);
      await era.printAndWait([
        '在回去的路上 ',
        me.get_colored_name(),
        ' 试探性地问几次 ',
        coffee.get_colored_name(),
        ' 刚才发生的是什么，但都被 ',
        coffee.get_colored_name(),
        ' 糊弄过去了。',
      ]);
      await era.printAndWait([
        '所以到底发生了什么，',
        me.get_colored_name(),
        ' 百思不得其解。',
      ]);
    } else {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 显得有些失落，',
        me.get_colored_name(),
        ' 上前安慰了一下',
        coffee.sex,
        '。',
      ]);
      await era.printAndWait([
        '在回特雷森的路上，',
        coffee.get_colored_name(),
        ' 一直没有说话，',
        me.get_colored_name(),
        ' 也识趣的没有去打扰',
        coffee.sex,
        '。',
      ]);
      await era.printAndWait('神社的秘密就等下一次再说吧。');
    }
  }
};

handlers[event_hooks.out_shopping] = async (hook) => {
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0),
    temp = await select_action_in_shopping_street();
  hook.arg = temp <= 1;
  switch (temp) {
    case 0:
      if (Math.random() < 0.5) {
        await era.printAndWait([
          '和 ',
          coffee.get_colored_name(),
          ' 一起开始了夹娃娃……',
        ]);
        await era.printAndWait([
          '两人对着娃娃机里的 ',
          coffee.get_colored_name(),
          ' 玩偶反复尝试但还是失败，正准备放弃时，玩偶突然自己动了起来，跳入了落物口。',
        ]);
        await coffee.say_and_wait(['是朋友……应该还回去吗，', callname, '？']);
        await era.printAndWait('为了不让工作人员困惑，最后还是把玩偶带走了。');
      } else {
        await era.printAndWait([
          '和 ',
          coffee.get_colored_name(),
          ' 一起进行街机对战……',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 似乎并不是很擅长这种游戏，屏幕里',
          coffee.sex,
          '的角色被打得无法还手，就在 ',
          me.get_colored_name(),
          ' 准备按下最后一击时——没、没反应？',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 的人物突然停在了屏幕中央，很快就被反应过来的 ',
          coffee.get_colored_name(),
          ' 啪啪几下打死了。',
        ]);
        await era.printAndWait('……又是朋友？');
        await era.printAndWait([
          '侧身看了看对面的 ',
          coffee.get_colored_name(),
          '，',
          coffee.sex,
          '似乎并没有发现发生了什么，正在为自己的胜利而露出微笑。',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 挺开心的，不也挺好吗？',
        ]);
      }
      break;
    case 1:
      await coffee.say_and_wait('抽奖，吗……会抽到什么呢？啊，朋友你不许捣乱！');
      break;
    case 2:
      if (Math.random() < 0.5) {
        await coffee.say_and_wait('唱歌吗？我不是很擅长……');
        await era.printAndWait([
          '虽然一开始不太情愿，但在鼓励下 ',
          coffee.get_colored_name(),
          ' 还是放声开唱了。',
        ]);
      } else {
        await era.printAndWait([
          '在 ',
          coffee.get_colored_name(),
          ' 面前唱着歌，',
          coffee.get_colored_name(),
          ' 微笑着打着拍子。',
        ]);
      }
      break;
    case 3:
      await coffee.say_and_wait('看电影的话，《特雷森的五夜后宫》怎么样？');
      await era.printAndWait([
        '和 ',
        coffee.get_colored_name(),
        ' 进行了恐怖电影的观看，但在 ',
        coffee.get_colored_name(),
        ' 身边总感觉对这种电影害怕不起来……',
      ]);
  }
};

handlers[event_hooks.out_station] = async (hook) => {
  const callname = sys_get_callname(25, 0);
  const me = get_chara_talk(0);
  const coffee = get_chara_talk(25);
  hook.arg = await select_action_in_station(25);
  switch (hook.arg) {
    case 0:
      if (Math.random() < 0.5) {
        await coffee.say_and_wait([callname, '，要吃点什么吗？']);
        await era.printAndWait([
          '和 ',
          coffee.get_colored_name(),
          ' 在咖啡馆里享用了咖啡和轻食。',
        ]);
      } else {
        await coffee.say_and_wait('呼……果然，咖啡是最棒的……');
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 捧着咖啡小口地品尝起来。',
        ]);
      }
      break;
    case 1:
      if (Math.random() < 0.5) {
        await era.printAndWait([
          '与 ',
          coffee.get_colored_name(),
          ' 牵着手共同漫步在街道上。',
        ]);
        await era.printAndWait([
          '仿佛是在确实 ',
          me.get_colored_name(),
          ' 的真实性一般，',
          coffee.get_colored_name(),
          ' 时不时轻轻捏住 ',
          me.get_colored_name(),
          ' 的手，',
          coffee.sex,
          '纤细的手指自上而下地划过 ',
          me.get_colored_name(),
          ' 的指尖，带来微微的瘙痒。',
        ]);
        await era.printAndWait([
          '作为回礼，',
          me.get_colored_name(),
          ' 也握紧了',
          coffee.sex,
          '的手',
        ]);
      } else {
        await era.printAndWait([
          '突然感受到一丝柔软，转眼看去，',
          coffee.get_colored_name(),
          ' 抱上了 ',
          me.get_colored_name(),
          ' 的手，微微隆起的胸部正紧贴着 ',
          me.get_colored_name(),
          ' 的手臂。',
        ]);
        await era.printAndWait([
          '原来 ',
          coffee.get_colored_name(),
          ' 也是有一点胸部的啊，',
          me.get_colored_name(),
          ' 不由得这样想到。',
        ]);
        await coffee.say_and_wait([callname, '，你在想什么失礼的事情吗……']);
      }
      break;
    case 2:
      await get_chara_talk(25).say_and_wait(
        Math.random() < 0.5
          ? `${callname}，要买点什么？比如说……咖啡豆？`
          : '速溶咖啡吗……嗯，稍微有点……',
      );
  }
};

handlers[event_hooks.basement_end] = async () => {
  const callname = sys_get_callname(25, 0);
  const coffee = get_chara_talk(25);
  await era.printAndWait([
    coffee.get_colored_name(),
    ' 的训练员已经失踪好几天了。警方搜遍了学园的每一个角落，却依然没有发现任何线索。',
  ]);
  await era.printAndWait([
    '作为其担当',
    coffee.get_uma_sex_title(),
    '——',
    coffee.get_colored_name(),
    ' 成为了第一嫌疑人。但在经过详尽的调查和问询后，很快便排除了',
    coffee.sex,
    '的嫌疑。',
  ]);
  await era.printAndWait('现如今，调查工作仍在持续进行……');
  await era.printAndWait(
    '在美浦宿舍，一双黯黄色的眼睛正看着窗外来来往往的警察。',
  );
  await coffee.say_and_wait([
    { color: buff_colors[3], content: `——大家都在找你哦，${callname}……` },
  ]);
  await coffee.say_and_wait([
    { color: buff_colors[3], content: '但他们是找不到你的。' },
  ]);
  await coffee.say_and_wait([{ color: buff_colors[3], content: '因为……' }]);
  await coffee.say_and_wait([
    {
      color: buff_colors[3],
      content: `${callname}，是只有我能看见的『朋友』。`,
    },
  ]);
  await era.printAndWait([
    '缓缓拉上窗帘，在漆黑的房间内，',
    coffee.get_colored_name(),
    ' 将身后浑浑噩噩的灵体拥入怀中。',
  ]);
  await print_event_name(
    [{ content: '新的「朋友」', color: buff_colors[3] }],
    coffee,
  );
};

handlers[
  event_hooks.celebration
] = require('#/event/daily/daily-events-25/celebration');

/**
 * 曼城茶座的日常事件，id=25
 *
 * @author Necroz
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    if (event_object || !handlers[stage_id.hook]) {
      throw new Error('unsupported hook!');
    }
    return (await handlers[stage_id.hook](stage_id, extra_flag)) !== undefined;
  },
};
