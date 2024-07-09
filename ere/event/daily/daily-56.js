const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const event_hooks = require('#/data/event/event-hooks');
const era = require('#/era-electron');
const { get_custom_check } = require('#/event/check/check-factory');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const quick_into_sex = require('#/event/snippets/quick-into-sex');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum } = require('#/data/race/race-const');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,

  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const sys_filter_chara = require('#/system/sys-filter-chara');
const handlers = {};
const { location_enum } = require('#/data/locations');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const get_gradient_color = require('#/utils/gradient-color');
handlers[event_hooks.office_gift] = async function () {
  let message = [];
  const MF = get_chara_talk(56);

  const love = era.get('love:56');

  message.push(async function () {
    await MF.say_and_wait(`喔————！`);
    await MF.say_and_wait(`我会把它摆在床头的！`);
  });
  message.push(async function () {
    await MF.say_and_wait(`非常感谢！`);
    await MF.say_and_wait(`回礼的话，训练员有什么想要的吗？`);
  });

  message.push(async function () {
    await MF.say_and_wait(`占卜不出来训练员送了什么呢！`);
    await MF.say_and_wait(`得等到回去才能打开呀……`);
  });

  if (love >= 75) {
    message.push(async function () {
      await MF.say_and_wait(`如果训练员想的话！`);
      await MF.say_and_wait(`回礼是小福本人也可以喔！`);
    });
  }

  let randomIndex_gift = Math.floor(Math.random() * message.length);
  await message[randomIndex_gift]();
};

handlers[event_hooks.talk] = async () => {
  let message = [];
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const sex_mark = era.get('mark:56:淫纹');
  const sex_happy = era.get(`mark:56:欢愉`);
  const sex_love = era.get(`mark:56:同心`);

  const FUKU = new FukuEventMarks();

  //MF.say
  if (sex_mark === 1) {
    message.push(async function () {
      await me.print_and_wait([
        `她对`,
        me.get_colored_name(),
        `指了指自己被画上了淫纹的小腹。`,
      ]);
      await MF.say_and_wait(`那个，训练的时候总是害怕被别人看见呢……`);
    });
  } else if (sex_mark >= 2) {
    message.push(async function () {
      await me.print_and_wait([
        `环顾四周后， `,
        MF.get_colored_name(),
        ` 冲`,
        me.get_colored_name(),
        `拉起了衣服的下摆，露出了自己的小腹。`,
      ]);
      await me.print_and_wait(
        `冒着粉光的纹路，忠实的履行着自己在少女身上的职责。`,
      );
    });
  }

  if (sex_happy === 1 || sex_mark === 1) {
    message.push(async function () {
      await MF.say_and_wait('那个，训练员先生在训练结束之后有时间吗？');
    });
  } else if (sex_happy === 2 || sex_mark === 2) {
    message.push(async function () {
      await me.print_and_wait([
        `明显的绯红挂在 `,
        MF.get_colored_name(),
        ` 脸上，用双手隔着运动外套按压起自己的小腹。`,
      ]);
      await MF.say_and_wait('唔，都是训练员的错啦！');
    });
  } else if (sex_happy === 3 || sex_mark === 3) {
    message.push(async function () {
      await me.print_and_wait([
        `在 `,
        MF.get_colored_name(),
        ` 愈发过分的要求下给了她一个吻。`,
      ]);
      await MF.say_and_wait(`咕……`);
      await me.print_and_wait([
        `她的指尖若有若无地在`,
        me.get_colored_name(),
        `的胯部附近游动。`,
      ]);
    });
  }

  if (sex_love === 1) {
    message.push(async function () {
      await me.print_and_wait([
        `嚷嚷着开运之类的话语， `,
        MF.get_colored_name(),
        ` 扑到了`,
        me.get_colored_name(),
        `的身上。`,
      ]);
    });
  } else if (sex_love >= 2) {
    message.push(async function () {
      await MF.say_and_wait('一心同体！训练员，我会永远在你身边的！');
    });
  }

  if (era.get('base:56:体力') < era.get('maxbase:56:体力') * 0.45) {
    if (get_random_value(0, 1)) {
      message.push(async function () {
        await MF.say_and_wait('今日，休息为吉……');
      });
    } else {
      message.push(async function () {
        await me.print_and_wait(`星星瞳变得暗淡了`);
        await me.print_and_wait(`是时候让她歇一歇了`);
      });
    }
  }
  switch (era.get('cflag:56:干劲')) {
    case -2:
      message.push(async function () {
        await MF.say_and_wait(
          `占卜运势倒数第一……抽签又抽到大凶……还遇到黑猫横跨面前，我，我不行了！`,
        );
      });
      break;
    case -1:
      message.push(async function () {
        await MF.say_and_wait(`我抽签抽到凶了……会有噩运发生吗？`);
      });
      break;
    case 0:
      message.push(async function () {
        await MF.say_and_wait(`今天的运势也是不好不坏呢……`);
        await MF.say_and_wait(`普普通通的也不错？`);
      });
      break;
    case 1:
      message.push(async function () {
        await MF.say_and_wait(`准备工作和占卜都完成了，让我们开始吧……`);
      });
      break;
    case 2:
      message.push(async function () {
        await MF.say_and_wait(
          `训练员听我说！我现在的运势是超越了大吉的超吉呢！`,
        );
        MF.say_and_wait(`呵呵呵，现在的我是超无敌的！`);
      });
  }

  let randomIndex_talk = Math.floor(Math.random() * message.length);
  await message[randomIndex_talk]();

  era.drawLine();
  // 5 choose on

  switch (FUKU.luck_train) {
    case 1:
      await me.print_and_wait([
        `看见了 `,
        MF.get_colored_name(),
        ` 留在桌面上的纸条。`,
      ]);
      await MF.print_and_wait('对了，今天似乎速度训练是吉哦！');
      break;
    case 2:
      await me.print_and_wait([
        `看见了 `,
        MF.get_colored_name(),
        ` 留在桌面上的纸条。`,
      ]);
      await MF.print_and_wait('今天的吉项是耐力训练哦！');
      break;
    case 3:
      await me.print_and_wait([
        `看见了 `,
        MF.get_colored_name(),
        ` 留在桌面上的纸条。`,
      ]);
      await MF.print_and_wait('力量训练看起来不错的样子！');
      break;
    case 4:
      await me.print_and_wait([
        `看见了 `,
        MF.get_colored_name(),
        ` 留在桌面上的纸条。`,
      ]);
      await MF.print_and_wait('根性训练会不会适合一点！');
      break;
    case 5:
      await me.print_and_wait([
        `看见了 `,
        MF.get_colored_name(),
        ` 留在桌面上的纸条。`,
      ]);
      await MF.print_and_wait('智力训练乃是大吉！');
      break;
  }
};
handlers[event_hooks.select] = function () {
  let message = [];
  const MF = get_chara_talk(56);
  const sex_mark = era.get('mark:56:淫纹'),
    sex_happy = era.get(`mark:56:欢愉`),
    sex_love = era.get(`mark:56:同心`),
    relation = era.get(`relation:56:0`);
  //MF.say
  if (sex_mark === 3) {
    message.push(function () {
      MF.say('为参拜客们祈福的时候，淫纹偶尔会不合时宜的发热……');
    });
  } else if (sex_mark === 2) {
    message.push(function () {
      MF.say('又发光了，是不是该多穿一件比较……哈……好热……');
    });
  } else if (sex_mark === 1) {
    message.push(function () {
      MF.say('淫纹……像是故事里那些恶堕情节一样呢……');
    });
  }

  if (sex_happy === 1 || sex_mark === 1) {
    message.push(function () {
      MF.say('训练员！那个……今天晚上怎么样？');
    });
  } else if (sex_happy === 2 || sex_mark === 2) {
    message.push(function () {
      MF.say('该说看到训练员，身体就会起反应吗？');
    });
  } else if (sex_happy === 3 || sex_mark === 3) {
    message.push(function () {
      MF.say('该换条内裤了……');
      MF.say(`唔……训练员又在明知故问了。`);
    });
  }

  if (sex_love === 1) {
    message.push(function () {
      MF.say('每天睁开眼睛就能见到训练员先生，该说这就是大吉吗！');
    });
  } else if (sex_love === 2) {
    message.push(function () {
      MF.say('训练员！要来一个阿福的开运拥抱吗？');
    });
  } else if (sex_love === 3) {
    message.push(function () {
      MF.say('看见我和训练员这样黏在一起，白兴大人一定会很开心的！');
    });
  }

  if (relation > 376 && Math.random() < 0.5) {
    message.push(function () {
      MF.say('果然,训练员就是我命中注定的人呢！占卜和我的心都是这么说的!');
    });
  } else if (relation > 376) {
    message.push(function () {
      MF.say('我完全信任训练员! 毕竟是命中注定的人嘛！');
    });
  }

  if (relation < 376 && Math.random() < 0.5) {
    message.push(function () {
      MF.say('只要相信占卜和训练员！一定会没问题的！');
    });
  } else if (relation < 376) {
    message.push(function () {
      MF.say('训练员今天的旨意是什么呢？！');
    });
  }

  let randomIndex_select = Math.floor(Math.random() * message.length);
  message[randomIndex_select]();
};
handlers[event_hooks.good_morning] = async function () {
  let message = [];
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const sex_mark = era.get('mark:56:淫纹'),
    sex_happy = era.get(`mark:56:欢愉`),
    relation = era.get(`relation:56:0`);
  const love = era.get('love:56');

  if (era.get('base:56:体力') <= era.get('maxbase:56:体力') / 3) {
    message.push(async function () {
      MF.say(`今日的运势……好累啊`);
      me.print([
        ``,
        me.get_colored_name(),
        `来到训练场的时候，看见 `,
        MF.get_colored_name(),
        ` 已经躺在了草地上。`,
      ]);
    });

    message.push(async function () {
      MF.say(`无所谓了……只要是命定之人的要求，我会尽力去做的。`);
      me.print([
        ` `,
        MF.get_colored_name(),
        ` 笑着对`,
        me.get_colored_name(),
        `挥了挥手，但是尾巴却明显的垂在了双腿间。`,
      ]);
    });
    let randomIndex_goodmorning = Math.floor(Math.random() * message.length);
    message[randomIndex_goodmorning]();
    return;
  }

  if (era.get('cflag:56:干劲') < 0) {
    message.push(async function () {
      MF.say(`唔……`);
      me.print([
        `趴在栏杆上的 `,
        MF.get_colored_name(),
        ` 在看到`,
        me.get_colored_name(),
        `的时候象征性摆了摆耳朵。`,
      ]);
    });

    message.push(async function () {
      MF.say(`早……训练员先生。`);
      me.print([` `, MF.get_colored_name(), ` 的心情看起来不是很好的样子。`]);
    });
    let randomIndex_goodmorning = Math.floor(Math.random() * message.length);
    message[randomIndex_goodmorning]();
    return;
  }

  if (sex_happy === 1 || sex_mark === 1) {
    message.push(async function () {
      MF.say('唔！早晨的训练员先生也很精神呢！');
      MF.say('只是被训练员这么盯着就有些兴奋起来了呢……');
    });
  } else if (sex_happy === 2 || sex_mark === 1) {
    message.push(async function () {
      MF.say('哈……哈啊！');
      MF.say('双腿有些发软……只是被训练员先生盯着就这样了……');
    });
  } else if (sex_happy === 3 || sex_mark === 3) {
    message.push(async function () {
      MF.say('想要……训练员先生……');
      me.print([
        `这样说着，带着晨跑完略高体温的少女抱住了`,
        me.get_colored_name(),
        `。`,
      ]);
    });
  }

  if (love > 75 && relation > 400) {
    message.push(async function () {
      MF.say(`哈啊……起的稍稍有点早呢！`);
      me.print([
        `在`,
        me.get_colored_name(),
        `面前伸了一个懒腰，她运动外套下的胸部像是被重点突出一般强调着自己的存在。`,
      ]);
    });

    message.push(async function () {
      MF.say(`果然！每天只有看见命定之人才能安心呢`);
      MF.say(`训练员先生也是这么想的吗？`);
      me.print([
        `挽住了`,
        me.get_colored_name(),
        `的手臂，她栗色的细长马耳敲打着`,
        me.get_colored_name(),
        `的肩膀。`,
      ]);
    });

    message.push(async function () {
      MF.say(`占卜出来训练员今天会有桃花运呢！`);
      MF.say(`你看，我不是出现在你身边了吗？`);
      me.print([
        `踮起脚尖，她呼出的气流拍打在`,
        me.get_colored_name(),
        `的脖颈上。`,
      ]);
    });

    message.push(async function () {
      MF.say(`今天训练员先生不能离开我身边哦！`);
      MF.say(`因为！占卜出来今天的开运道具就是小福我哦！`);
    });

    message.push(async function () {
      me.print([
        ` `,
        MF.get_colored_name(),
        ` 靠在栏杆上背对着`,
        me.get_colored_name(),
        `……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。`,
      ]);
      MF.say(`欸嘿，被训练员先生看见了吗？`);
      me.print(
        `露出如狐狸般魅惑的笑容，少女不慌不忙的整理起自己的裙摆，被白色内裤包裹的臀部清晰可见，`,
      );
    });

    if (love > 89 && relation > 400) {
      message.push(async function () {
        me.print([
          ` `,
          MF.get_colored_name(),
          ` 靠在栏杆上背对着`,
          me.get_colored_name(),
          `……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。`,
        ]);
        MF.say(`那个……训练员喜欢吗？`);
        me.print(
          `伴随着如妖狐般的魅惑笑容，少女甚至稍稍提起了裙摆，明显略紧的黑色内裤在福来的安产臀部上勒出诱惑的沟壑。`,
        );
      });
      message.push(async function () {
        me.print([
          ` `,
          MF.get_colored_name(),
          ` 靠在栏杆上背对着`,
          me.get_colored_name(),
          `……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。`,
        ]);
        MF.say(`那个……训练员喜欢吗？`);
        me.print(
          `伴随着如妖狐般的魅惑笑容，少女甚至稍稍提起了裙摆，半包着福来安产形臀部白色蕾丝内裤透出其下的肉色。`,
        );
      });
      message.push(async function () {
        me.print([
          ` `,
          MF.get_colored_name(),
          ` 靠在栏杆上背对着`,
          me.get_colored_name(),
          `……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。`,
        ]);
        MF.say(`那个……训练员喜欢吗？`);
        me.print([
          `伴随着如妖狐般的魅惑笑容，少女甚至稍稍提起了裙摆，由几根修长布料组成的情趣内裤近乎完全露出了 `,
          MF.get_colored_name(),
          ` 的臀肉 。`,
        ]);
      });

      message.push(async function () {
        me.print([
          ` `,
          MF.get_colored_name(),
          ` 靠在栏杆上背对着`,
          me.get_colored_name(),
          ` ……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。`,
        ]);
        MF.say(`咿呀！！！`);
        me.print([
          `趁着 `,
          MF.get_colored_name(),
          ` 还没发现 `,
          me.get_colored_name(),
          ` 使坏般的拍了一下，让少女抑制不住地发出了可爱的叫声。`,
        ]);
      });
    }
  }

  if (love >= 50 && relation >= 226) {
    message.push(async function () {
      MF.say(`我的命定之人！今天的训练计划是什么呢？`);
      me.print([`这样说着，她的尾巴缠在了`, me.get_colored_name(), `的腿上。`]);
    });
    message.push(async function () {
      MF.say(`话说！训练结束之后可以和我一起去摆摊吗？`);
      // MF.say(`恰好怒涛今天没空呢！`);
      MF.say([`恰好 `, sys_get_colored_callname(56, 58), ` 今天没空呢！`]);
    });
    message.push(async function () {
      MF.say([
        `训练员先生如果需要改运的话，我应该还是比 `,
        sys_get_colored_callname(56, 98),
        ` 擅长一点的！`,
      ]);
      me.print([
        ` `,
        MF.get_colored_name(),
        ` 有些气鼓鼓的对最近的流言做出了回应。`,
      ]);
    });
    message.push(async function () {
      MF.say(`今天试着给训练员做了早餐哦！`);
      MF.say(`虽然味道可能没那么好就是啦。`);
      me.print([
        ` `,
        MF.get_colored_name(),
        ` 冲`,
        me.get_colored_name(),
        `举起了手中提着的餐盒。`,
      ]);
    });
    message.push(async function () {
      MF.say(`那个，训练员先生！`);
      MF.say(`结束后一起去商店街吃晚饭怎么样？`);
    });

    message.push(async function () {
      me.print([
        ` `,
        MF.get_colored_name(),
        ` 靠在栏杆上背对着`,
        me.get_colored_name(),
        `……丝毫没有注意到自己的校服裙子在栏杆上卷起来了。`,
      ]);
      MF.say(`欸！色狼训练员！`);
      me.print([
        `在出言提醒之前，`,
        me.get_colored_name(),
        `还是由于脚步声被发现了，脸上泛着红晕的少女，意外冷静的整理起自己的裙摆。`,
      ]);
    });
  } else if (love < 50 || relation < 226) {
    message.push(async function () {
      MF.say('唔……需要我来占卜一下去哪里训练比较好吗？');
    });

    message.push(async function () {
      MF.say('早上好！训练员先生，今天的训练计划是什么呢？');
    });
    message.push(async function () {
      MF.say(`训练员先生！今天的运势需要我占卜一下吗？`);
    });
  }

  if (relation >= 226) {
    message.push(async function () {
      MF.say(`今天运势很不错呢！那么……`);
      MF.say(`……烦请训练员尽情使驭我吧！`);
      me.print([
        `模仿着电视里学到的样子，她向`,
        me.get_colored_name(),
        `行了一个不算太标准的鞠躬礼。`,
      ]);
    });

    message.push(async function () {
      MF.say(`达摩摩在振动，看来我今天的灵力很充裕呢！`);
      me.print([
        `她冲`,
        me.get_colored_name(),
        `指了指自己左耳挂着的红色达摩。`,
      ]);
    });

    message.push(async function () {
      MF.say(`我已经事先占卜过了！`);
      MF.say(`训练员先生今天的运势是大吉哦！`);
    });
  }

  let randomIndex_goodmorning = Math.floor(Math.random() * message.length);
  message[randomIndex_goodmorning]();
};
handlers[event_hooks.good_night] = async function (hook) {
  const MF = get_chara_talk(56),
    me = get_chara_talk(0);
  me.print([
    `繁忙的一天结束了，把 `,
    MF.get_colored_name(),
    ` 送到了学生宿舍门口。`,
  ]);
  let check = get_custom_check(56).is_want_make_love();
  let message = [];
  if (sys_check_awake(0) && sys_check_awake(56) && check) {
    message.push(async function () {
      me.print([
        `刚想像往常一样告别，却看见 `,
        MF.get_colored_name(),
        ` 一反常态的握住了`,
        me.get_colored_name(),
        `的手。`,
      ]);
      MF.say(`那个！因为占卜到了今天为吉，所以外宿申请什么的已经做好了……`);
      me.print([
        `面色红润的 `,
        MF.get_colored_name(),
        ` 磨蹭着膝盖，用指尖捏着`,
        me.get_colored_name(),
        `的衣服。`,
      ]);
      me.print(`已经变成了爱心的星星瞳热切地看着你。`);
      era.printButton('（接受）', 1);
      era.printButton('（拒绝）', 2);
      hook.arg = (await era.input()) === 1;
    });

    message.push(async function () {
      me.print([
        `刚想像往常一样告别，却看见 `,
        MF.get_colored_name(),
        ` 一反常态的握住了`,
        me.get_colored_name(),
        `的手。`,
      ]);
      MF.say(`那个……`);
      me.print([
        `面色红润的 `,
        MF.get_colored_name(),
        ` 拉开了运动外套的拉链，跃入眼中的两颗丰润乳球，随着她愈发不稳的站姿害羞地摇动着。`,
      ]);
      MF.say(`训练员明白的吧……？`);
      me.print([
        `已经变成了爱心的星星瞳热切地看着`,
        me.get_colored_name(),
        `。`,
      ]);
      era.printButton('（接受）', 1);
      era.printButton('（拒绝）', 2);
      hook.arg = (await era.input()) === 1;
    });

    //    return;
  } else if (era.get('love:56') >= 75) {
    message.push(async function () {
      me.print([
        `趁`,
        me.get_colored_name(),
        `不注意， `,
        MF.get_colored_name(),
        ` 突然抱住了`,
        me.get_colored_name(),
        `。`,
      ]);
      MF.say(`啾……`);
      MF.say(`得逞了呢！`);
      me.print([
        `在`,
        me.get_colored_name(),
        `反应过来之前， `,
        MF.get_colored_name(),
        ` 已经跑进了宿舍。`,
      ]);
      me.print(`唇上还留着她的香甜气味`);
    });

    message.push(async function () {
      MF.say(`和训练员在一起的时间，总是过的这么快呢!`);
      me.print([
        `对上了满脸笑容的 `,
        MF.get_colored_name(),
        ` ，突然地向`,
        me.get_colored_name(),
        `吻去`,
      ]);
      me.print(`吸引了不少其他马娘的指指点点。`);
    });
  } else if (era.get('love:56') >= 50) {
    message.push(async function () {
      MF.say(`明天见！`);
      me.print([
        `在冲上来给了`,
        me.get_colored_name(),
        `一个引人注目的拥抱之后， `,
        MF.get_colored_name(),
        ` 跑进了宿舍。`,
      ]);
    });
  } else {
    message.push(async function () {
      MF.say(`今天也辛苦了！`);
      me.print([`她向`, me.get_colored_name(), `挥了挥手，小跑进了宿舍。`]);
    });
  }

  let randomIndex_goodnight = Math.floor(Math.random() * message.length);
  await message[randomIndex_goodnight]();

  return true;
};

handlers[event_hooks.out_church] = async function () {
  // 改成占卜会决定你担当心情的好坏。
  const MF = get_chara_talk(56),
    me = get_chara_talk(0);
  await me.print_and_wait(`和担当一起来到了她们家的神社。`);
  await MF.say_and_wait(`那么，是求签的时候了！`);
  await MF.say_and_wait(`我看看！今天的运势是！`);
  await MF.say_and_wait(`白兴大人~白兴大人~`);
  await era.printAndWait([
    ` `,
    MF.get_colored_name(),
    ` 以其独创的手法摇着签筒，伴随着吟唱的祷词，一条纸签从签筒中滑落。`,
  ]);
  await MF.say_and_wait(`嘿！`);
  let luck = get_random_value(0, 3);
  // test here
  if (era.get('status:56:创伤后应激障碍') === 1) {
    luck = 3;
  }
  switch (luck) {
    case 0:
      await era.printAndWait(`(小吉！)`);
      await MF.say_and_wait(`还不错！`);
      break;
    case 1:
      await era.printAndWait(`(中吉！)`);
      await MF.say_and_wait(`哦！`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 对`,
        me.get_colored_name(),
        `露出了笑容。`,
      ]);
      break;

    case 2:
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          ` `,
          MF.get_colored_name(),
          ` 将纸签交给了`,
          me.get_colored_name(),
          `并示意念出上面的字。在听到大吉之后，她露出惊喜的神情扑到`,
          me.get_colored_name(),
          `的身上。`,
        ]);
        await MF.say_and_wait(`把好运也分给我一点吧！训练员！`);
        await me.print_and_wait([
          ` `,
          MF.get_colored_name(),
          ` 紧紧抱住了`,
          me.get_colored_name(),
          `的腰，让 `,
          me.get_colored_name(),
          ` 得以感受到她的体温和心跳。`,
        ]);
      } else {
        await MF.say_and_wait(`哇！大吉！`);
        await MF.say_and_wait(`训练员！你看到了吗？`);
        await era.printAndWait(
          `倒不如说，对于此间神社的巫女而言，抽不出大吉才是一件奇怪的事。`,
        );
      }
      break;
    case 3:
      await era.printAndWait('（凶）');
      await MF.say_and_wait(`唔……`);
      await era.printAndWait([
        `就在`,
        me.get_colored_name(),
        `思考该如何安慰她的时候，一阵疾风吹来，将 `,
        MF.get_colored_name(),
        ` 手中的纸签卷走。`,
      ]);
      await MF.say_and_wait(`白兴大人保佑……`);
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 盯着飞走的纸签喃喃自语，`,
        me.get_colored_name(),
        `不知道该说些什么。`,
      ]);
      break;
  }

  if (era.get('status:56:运势依赖') === 1 || era.get('status:56:稳定') != 1) {
    if (luck === 2) {
      era.set('status:56:大吉', 1);
      era.set('status:56:中吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);

      if (era.get('status:56:创伤后应激障碍') != 1) {
        era.set('cflag:56:干劲', 2);
      }
    }
    if (luck === 1) {
      era.set('status:56:中吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:创伤后应激障碍') != 1) {
        era.set('cflag:56:干劲', 1);
      }
    }
    if (luck === 0) {
      era.set('status:56:小吉', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:中吉', 0);
      era.set('status:56:凶', 0);
      if (era.get('status:56:创伤后应激障碍') != 1) {
        era.set('cflag:56:干劲', 0);
      }
    }
    if (luck === 3) {
      era.set('status:56:凶', 1);
      era.set('status:56:大吉', 0);
      era.set('status:56:小吉', 0);
      era.set('status:56:中吉', 0);

      // random 0 1
      switch (get_random_value(0, 1)) {
        case 0:
          era.set('cflag:56:干劲', -1);
          break;
        case 1:
          era.set('cflag:56:干劲', -2);
      }
    }
  }
};

handlers[event_hooks.out_river] = async (hook) => {
  const ret = await select_action_around_river(),
    MF = get_chara_talk(56),
    me = get_chara_talk(0);

  hook.arg = !!ret;
  let message = [];

  console.log(`daily-56.js:ret:${ret}`);

  if (ret === 0) {
    message.push(async function () {
      await MF.say_and_wait('……');
      await era.printAndWait([
        ` `,
        me.get_colored_name(),
        ` 看着正聚集会神地盯着水面的 `,
        MF.get_colored_name(),
        ` 。`,
      ]);
      await era.printAndWait([
        `难得安静下来的 `,
        MF.get_colored_name(),
        ` 展现出了与平时截然不同的一面。`,
      ]);
      await era.printAndWait([
        ` `,
        me.get_colored_name(),
        ` 甚至可以在她庄严肃穆外表上捕捉到一丝神性`,
      ]);
    });

    message.push(async function () {
      await MF.say_and_wait('钓鱼算是七分运气的事情呢！');
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 一边说着一边将鱼饵放入水中。`,
      ]);
    });

    message.push(async function () {
      await MF.say_and_wait('会不会钓上来什么有意思的东西呢!');
      await MF.say_and_wait('就像是神话故事里那样！');
    });

    let randomIndex = Math.floor(Math.random() * message.length);
    await message[randomIndex]();
  } else if (ret === 100) {
    message.push(async function () {
      await MF.say_and_wait(`据说，流动的水能够阻拦灵体的活动！`);
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 一边在前面走着，一边同`,
        me.get_colored_name(),
        `科普一些不知从哪里听来的知识。`,
      ]);
      await MF.say_and_wait(`训练员先生有在听吗？`);
    });
    message.push(async function () {
      await MF.say_and_wait(`据说，白兴大人曾经掌管着一天里的一个时辰呢！`);
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 一边在前面走着，一边同`,
        me.get_colored_name(),
        `科普一些不知从哪里听来的知识。`,
      ]);
      await MF.say_and_wait(`训练员先生有在听吗？`);
    });
    message.push(async function () {
      await MF.say_and_wait(
        `据说，能量之地的形成和持续不断的集体信念有关系呢！`,
      );
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 一边在前面走着，一边同`,
        me.get_colored_name(),
        `科普一些不知从哪里听来的知识。`,
      ]);
      await MF.say_and_wait(`训练员先生有在听吗？`);
    });

    if (era.get('love:56') >= 50) {
      message.push(async function () {
        await MF.say_and_wait(`唔！有点凉呢！`);
        await era.printAndWait([
          `褪下鞋袜的 `,
          MF.get_colored_name(),
          ` 将裸足伸入水中，自然地浸出细腻诱人的光泽`,
        ]);
        await MF.say_and_wait(`训练员也要来试试吗！`);
      });
    }
    let randomIndex = Math.floor(Math.random() * message.length);
    await message[randomIndex]();
  }
};
handlers[event_hooks.out_shopping] = async (hook) => {
  const temp = await select_action_in_shopping_street(),
    love = era.get('love:56'),
    MF = get_chara_talk(56),
    me = get_chara_talk(0);

  hook.arg = temp <= 1;
  let message = [];
  let randomIndex = [];
  switch (temp) {
    case 0:
      if (Math.random() < 0.5) {
        await MF.say_and_wait(
          `喔喔喔！果然是大吉呢！一个玩偶上居然挂了这么多！`,
        );
        await era.printAndWait([
          `就在得意忘形的 `,
          MF.get_colored_name(),
          ` 要撞到夹娃娃机的时候，`,
          me.get_colored_name(),
          `眼疾手快地拉住了她。`,
        ]);
        await MF.say_and_wait(`欸嘿~抱歉！`);
        await era.printAndWait([
          `看着 `,
          MF.get_colored_name(),
          ` 的样子，`,
          me.get_colored_name(),
          `不禁笑了出来。`,
        ]);
      } else {
        await MF.say_and_wait(
          `唔！新出的格斗游戏吗？要试试双人对战吗，训练员？`,
        );
        await era.printAndWait([
          `在连着输了几个回合后， `,
          MF.get_colored_name(),
          ` 如同未卜先知般的操作让`,
          me.get_colored_name(),
          `不得不投降。`,
        ]);
        await MF.say_and_wait(`啊啦,多亏白兴大人的保佑呢！`);
      }
      break;
    case 1:
      await MF.say_and_wait('训练员，那边有抽奖欸！');
      if (love > 49) {
        await era.printAndWait([
          `无需多言，`,
          me.get_colored_name(),
          `和 `,
          MF.get_colored_name(),
          ` 一起走到了抽奖摊位前。`,
        ]);
        await MF.say_and_wait('让训练员分我一点好运吧！');
        await era.printAndWait([
          `而后温暖的感觉与弹性的触感一同传来， `,
          MF.get_colored_name(),
          ` 抱住了`,
          me.get_colored_name(),
          `的胳膊，一副不肯放开的样子。`,
        ]);
        await MF.say_and_wait('欸嘿~！');
        await era.printAndWait([
          `仿佛没有察觉到自己的双乳已经和`,
          me.get_colored_name(),
          `的手臂发生了挤压， `,
          MF.get_colored_name(),
          ` 将手伸入了箱子中。`,
        ]);
      } else {
        await era.printAndWait([
          `在 `,
          MF.get_colored_name(),
          ` 的强烈要求下，`,
          me.get_colored_name(),
          `不得不和她来到了摊位前。`,
        ]);
        await MF.say_and_wait('啊啊啊！白兴大人保佑！');
        await MF.say_and_wait('哈！');
        await era.printAndWait([
          ` `,
          MF.get_colored_name(),
          ` 将手伸入了箱子中。`,
        ]);
      }
      // 温泉旅行之后会补充
      break;
    case 2:
      if (love > 49) {
        message.push(async function () {
          await MF.say_and_wait('呼...哈！我唱的如何！');
          await era.printAndWait([
            `在接连几首歌下来之后的 `,
            MF.get_colored_name(),
            ` 气喘吁吁的看着`,
            me.get_colored_name(),
            `，期冀着评价。`,
          ]);
          await era.printAndWait(
            `被汗浸透的洁白衬衣，其下的丰满乳肉若隐若现。`,
          );
        });

        message.push(async function () {
          await MF.say_and_wait('哈...哈！我唱的如何！');
          await era.printAndWait([
            `在接连几首歌下来之后的 `,
            MF.get_colored_name(),
            ` 气喘吁吁的看着`,
            me.get_colored_name(),
            `，期冀着评价。`,
          ]);
          await era.printAndWait(
            `裙摆到白色长筒袜之间的绝对领域，泛着被汗水浸湿的油光。`,
          );
        });
      } else {
        message.push(async function () {
          await era.printAndWait(
            `对于${MF.name}而言，卡拉OK的难度远不及神社里那些需要又唱又跳的祭祀舞蹈。`,
          );
          await MF.say_and_wait('训练员，你也来一首吧！');
        });
      }

      randomIndex = Math.floor(Math.random() * message.length);
      await message[randomIndex]();
      break;
    case 3:
      await era.printAndWait(
        `在一阵毫无复现可能的占卜动作之后， `,
        MF.get_colored_name(),
        ` 指向了其中的一张宣传海报。`,
      );

      message.push(async function () {
        await me.print_and_wait(`主打不可名状恐怖的民俗恐怖片。`);
        await me.print_and_wait([
          `结束后，双腿发软的 `,
          MF.get_colored_name(),
          ` 煞有介事的告诉 `,
          me.get_colored_name(),
          ` 驱除怨灵的技巧`,
        ]);
      });
      message.push(async function () {
        await me.print_and_wait(`背景发生在异星的科幻片。`);
        await MF.say_and_wait(`唔！该说男主的预言能力很让人羡慕吗？`);
      });
      message.push(async function () {
        await me.print_and_wait(`烧脑向的推理片。`);
        await MF.say_and_wait(`……和占卜的结果一样呢？`);
      });
      if (era.get('love:56') >= 50) {
        message.push(async function () {
          await me.print_and_wait(`甜腻的爱情喜剧`);
          await MF.say_and_wait(`哈哈哈！这种事情我好像也对训练员做过呢！`);
        });
      }
      randomIndex = Math.floor(Math.random() * message.length);
      await message[randomIndex]();
      break;
  }
};

handlers[event_hooks.out_station] = async (hook) => {
  hook.arg = await select_action_in_station(56);
  const FUKU = new FukuEventMarks();
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  let temp = 0;
  let message = [];
  switch (hook.arg) {
    case 0:
      message.push(async function () {
        await MF.say_and_wait(`训练员，那家店的苹果派看起来很不错的样子！`);
        await MF.say_and_wait(`要试试吗？`);
      });
      message.push(async function () {
        await MF.say_and_wait(`现在是吃饭的吉时呢！`);
        await MF.say_and_wait(`要一起去吃吗？`);
      });

      break;
    case 1:
      message.push(async function () {
        await MF.say_and_wait(`唔！感觉过于庄重的服饰不是很适合我呢！`);
        await MF.say_and_wait(`当然！巫女服除外啦！`);
        await MF.say_and_wait(`这件怎么样？`);
        // random from 0-5
        temp = get_random_value(0, 3);
        switch (temp) {
          case 0:
            await me.print_and_wait([
              `穿着带着可爱花纹的连衣裙，从更衣室出来后的 `,
              MF.get_colored_name(),
              ` 如此询问`,
              me.get_colored_name(),
              `。`,
            ]);
            await me.print_and_wait(`有些清凉的着装露出了她诱人的白皙双肩。`);
            await MF.say_and_wait(`喂！训练员在看哪里呢？`);
            break;
          case 1:
            await me.print_and_wait([
              `如上班族一般的衬衫配着领带，从更衣室出来后的 `,
              MF.get_colored_name(),
              ` 如此询问`,
              me.get_colored_name(),
              `。`,
            ]);
            await me.print_and_wait(
              `双腿换上了符合职场风格的黑色丝袜，恰到好处的丹数使其微微透着肉色。`,
            );
            await MF.say_and_wait(`喂！训练员在看哪里呢？`);
            break;
          case 2:
            await me.print_and_wait([
              `用于正式场合的礼服，从更衣室出来后的 `,
              MF.get_colored_name(),
              ` 如此询问`,
              me.get_colored_name(),
              ``,
            ]);
            await me.print_and_wait(
              `礼服的裙摆在她的转身中扬起，露出的腿环在肉感的大腿上勒出了明显的痕迹。`,
            );
            await MF.say_and_wait(`喂！训练员在看哪里呢？`);
            break;
          case 3:
            await me.print_and_wait([
              `不知道从哪里翻出来的旗袍，从更衣室出来后的 `,
              MF.get_colored_name(),
              ` 如此询问`,
              me.get_colored_name(),
              ``,
            ]);
            await me.print_and_wait([
              `颇为修身的旗袍，隐约可以听到胸部布料的哀嚎悲鸣。`,
            ]);
            await MF.say_and_wait(`喂！训练员在看哪里呢？`);
            break;
        }
      });
      message.push(async function () {
        await MF.say_and_wait(`嘿！`);
        await MF.say_and_wait(`握手术！`);
        await MF.say_and_wait(`据说能把运气传递给别人呢！`);
        await me.print_and_wait(`之后在其他人的注视下像情侣一样越靠越紧。`);
      });

      if (era.get('love:56') >= 50 && era.get('exp:56:接吻次数')) {
        message.push(async function () {
          await MF.say_and_wait(`那个……训练员！`);
          await MF.say_and_wait(`啾!`);
          await me.print_and_wait([
            ` `,
            MF.get_colored_name(),
            ` 亲了`,
            me.get_colored_name(),
            `一下。`,
          ]);
          await me.print_and_wait(
            `与其说是接吻、不如说是把嘴唇和嘴唇撞在了一起。`,
          );
        });
      }

      break;

    case 2:
      /*
            处理第一次路过理发店时的事件，以及附带的发型切换，以及发型切换后的对话 总之要留一个换回最开始发型的选项
            1.初始发型
            2.长直发
            */

      if (era.get('love:56') < 75) {
        message.push(async function () {
          await MF.say_and_wait(`想要看我留长发的样子吗？`);
          await MF.say_and_wait(`……抱歉`);
          await era.printAndWait([
            `在路过发廊的时候， `,
            MF.get_colored_name(),
            ` 支支吾吾的绕过了这个被`,
            me.get_colored_name(),
            `提起的话题`,
          ]);
        });
      } else {
        if (FUKU.haircut === 0) {
          // 是的，这里没有拆到edu里面
          FUKU.haircut = 1;
          await print_event_name(`福来的发型`, MF);
          await me.print_and_wait([
            `再一次和 `,
            MF.get_colored_name(),
            ` 路过了商店街的发廊。`,
          ]);
          await me.print_and_wait(
            `路过店门时，目光不由自主的在那些海报停留了几眼。`,
          );
          await MF.say_and_wait(`欸！训练员在看什么呢？`);
          await me.print_and_wait([
            ` `,
            MF.get_colored_name(),
            ` 顺着`,
            me.get_colored_name(),
            `的目光看去，在见到海报上那些有着精心保养发型的马娘模特后，她下意识的摸了摸自己日常乱糟糟的发型。`,
          ]);
          await MF.say_and_wait(`啊啦！我平时倒是没有特别关注过自己的发型……`);
          await MF.say_and_wait([
            ``,
            sys_get_colored_callname(56, 62),
            ` ，`,
            sys_get_colored_callname(56, 74),
            ` ，`,
            sys_get_colored_callname(56, 2),
            ` 的发型……`,
          ]);
          await MF.say_and_wait([
            ``,
            sys_get_colored_callname(56, 58),
            ` 倒是和我差不多`,
          ]);
          await me.print_and_wait([
            `的确，`,
            me.get_colored_name(),
            `的担当 `,
            MF.get_colored_name(),
            ` 似乎本身就属于那种不怎么注意头发打理的，全凭马娘自身发质特有的韧性维持了一个大概的稳定的状态而已。`,
          ]);
          await MF.say_and_wait(`话说，训练员想看我留长发的样子吗？`);
          await MF.say_and_wait(
            `小学的时候倒是试着留过长发，但照镜子的时候，总是会想到照片里的姐姐`,
          );
          await MF.say_and_wait(`不过，如果训练员喜欢的话！`);
          await me.print_and_wait([
            `看来 `,
            MF.get_colored_name(),
            ` 似乎被`,
            me.get_colored_name(),
            `无心的行为勾起了莫名的危机感。`,
          ]);
          await me.print_and_wait([
            `那么，`,
            me.get_colored_name(),
            `有什么想要让她尝试的发型呢？`,
          ]);
          era.printButton('（齐肩直发）', 1);
          era.printButton('（垂到腰的长直发）', 2);
          era.printButton('（现在的发型就很适合福来）', 3);
          temp = await era.input();
          switch (temp) {
            case 1:
              era.set(`cstr:56:后发`, `齐肩直发`);
              await me.print_and_wait([
                `在`,
                me.get_colored_name(),
                `的建议下， `,
                MF.get_colored_name(),
                ` 换成了齐肩的直发。`,
              ]);
              await MF.say_and_wait(`怎么样？`);
              await me.print_and_wait([
                ` `,
                MF.get_colored_name(),
                ` 侧过头来看着`,
                me.get_colored_name(),
                `，柔顺的齐肩长发泛着蜂蜜般的橙黄色光芒。`,
              ]);
              break;
            case 2:
              era.set(`cstr:56:后发`, `长直发`);
              era.set(`cflag:56:头发长度`, 2);
              await me.print_and_wait([
                `在`,
                me.get_colored_name(),
                `的建议下， `,
                MF.get_colored_name(),
                ` 换成了垂到腰部的长直发。`,
              ]);
              await MF.say_and_wait(`长发……果然还是有些不习惯呢！`);
              await me.print_and_wait([
                ` `,
                MF.get_colored_name(),
                ` 不经意地用手指拢住垂到腰侧的发丝。`,
              ]);
              await me.print_and_wait(`这样看来的确变得稳重了许多。`);
              break;
            case 3:
              await me.print_and_wait([
                `在`,
                me.get_colored_name(),
                `的建议下， `,
                MF.get_colored_name(),
                ` 没有改变自己的发型。`,
              ]);
              await MF.say_and_wait(`嗯！果然还是这样比较好！`);
              await me.print_and_wait([
                `看着 `,
                MF.get_colored_name(),
                ` 的样子，`,
                me.get_colored_name(),
                `不禁伸手试了试她蓬松橙发的柔软触感。`,
              ]);
              break;
          }

          return;
        }

        await me.print_and_wait([
          `要带 `,
          MF.get_colored_name(),
          ` 去发廊吗？`,
        ]);
        era.printButton('（是）', 1);
        era.printButton('（否）', 2);
        temp = await era.input();
        if (temp === 1) {
          await MF.say_and_wait(`训练员，又想我换发型了吗？`);
          if (era.get(`cstr:56:后发`) === `长直发`) {
            await me.print_and_wait([
              `留着如瀑布般顺直的橙色长发的 `,
              MF.get_colored_name(),
              ` 回过头来看着`,
              me.get_colored_name(),
              `。`,
            ]);
          } else if (era.get(`cstr:56:后发`) === `齐肩直发`) {
            await me.print_and_wait([
              ` `,
              MF.get_colored_name(),
              ` 回过头来看着`,
              me.get_colored_name(),
              `，优雅的橙色发丝垂在肩头。`,
            ]);
          } else if (era.get(`cstr:56:后发`) === `外翼式`) {
            await me.print_and_wait([
              ` `,
              MF.get_colored_name(),
              ` 回过头来看着`,
              me.get_colored_name(),
              `，粉颊边被香汗黏住了些发丝。`,
            ]);
          }
          await me.print_and_wait([
            `那么，`,
            me.get_colored_name(),
            `有什么想要让她尝试的发型呢？`,
          ]);
          era.printButton('（齐肩直发）', 1);
          era.printButton('（垂到腰的长直发）', 2);
          era.printButton('（最开始的发型）', 3);
          temp = await era.input();
          switch (temp) {
            case 1:
              era.set(`cstr:56:后发`, `齐肩直发`);
              await me.print_and_wait([
                `在`,
                me.get_colored_name(),
                `的建议下， `,
                MF.get_colored_name(),
                ` 换成了齐肩的直发。`,
              ]);
              await MF.say_and_wait(`怎么样？`);
              await me.print_and_wait([
                ` `,
                MF.get_colored_name(),
                ` 侧过头来看着`,
                me.get_colored_name(),
                `，柔顺的齐肩长发泛着蜂蜜般的橙黄色光芒。`,
              ]);
              break;
            case 2:
              era.set(`cstr:56:后发`, `长直发`);
              era.set(`cflag:56:头发长度`, 2);
              await me.print_and_wait([
                `在`,
                me.get_colored_name(),
                `的建议下， `,
                MF.get_colored_name(),
                ` 换成了垂到腰部的长直发。`,
              ]);
              await MF.say_and_wait(`长发……果然还是有些不习惯呢！`);
              await me.print_and_wait([
                ` `,
                MF.get_colored_name(),
                ` 不经意地用手指拢住垂到腰侧的发丝。`,
              ]);
              await me.print_and_wait(`单看外表而言的确变得稳重了许多。`);
              break;
            case 3:
              await me.print_and_wait([
                `在`,
                me.get_colored_name(),
                `的建议下， `,
                MF.get_colored_name(),
                ` 没有改变自己的发型。`,
              ]);
              await MF.say_and_wait(`嗯！果然还是这样比较好！`);
              await me.print_and_wait([
                `看着 `,
                MF.get_colored_name(),
                ` 的样子，`,
                me.get_colored_name(),
                `不禁伸手试了试她蓬松橙发的柔软触感。`,
              ]);
              break;
          }
          return;
        }
      }
      message.push(async function () {
        await MF.say_and_wait(`喔！是新的占卜道具哦！`);
        await era.printAndWait([
          ``,
          me.get_colored_name(),
          `看着 `,
          MF.get_colored_name(),
          ` 指着那个以历代名马娘为题材的塔罗牌。`,
        ]);
      });

      break;
  }

  let randomIndex_station = Math.floor(Math.random() * message.length);
  await message[randomIndex_station]();
};
handlers[event_hooks.school_atrium] = async function (hook) {
  hook.arg = await select_action_in_atrium(56);
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const edu_weeks = era.get('cflag:56:育成回合计时');
  if (hook.arg === 0) {
    let message = [];

    message.push(async function () {
      await MF.say_and_wait(
        `希望白兴大人能听到我的祈祷，让我今天的运势变得更好吧！`,
      );
      if (edu_weeks > 120) {
        await MF.say_and_wait(`唔！d当然要是没有的话，我也是会努力的就是啦！`);
      }
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 对着深不见底的枯树洞喊到。`,
      ]);
    });

    if (edu_weeks > 42) {
      //判断 所谓白兴大人
      message.push(async function () {
        await MF.say_and_wait(`姐姐！我一定会成为一名优秀的赛马娘的！`);
        await MF.say_and_wait(`请你……呜……你一定要好好看着啊！`);
        if (era.get('love:56') >= 75) {
          await MF.say_and_wait(`还有……我也找到了能陪我一起走下去的人！`);
          await MF.say_and_wait(`不用再担心我了！`);
        }
      });
    }

    let randomIndex_school_atr = Math.floor(Math.random() * message.length);
    await message[randomIndex_school_atr]();
  } else {
    let message = [];

    message.push(async function () {
      await MF.say_and_wait(`要和我拜访学校内的能量之地吗？`);
      await era.printAndWait([
        `循着 `,
        MF.get_colored_name(),
        ` 的指引，`,
        me.get_colored_name(),
        `和她一起在学校内走了遍。`,
      ]);
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 的目的有没有达成不知道，但是遭到了自家担当尾抱的`,
        me.get_colored_name(),
        `成了今天特雷森论坛的热门话题。`,
      ]);
    });

    if (era.get('love:56') >= 75) {
      message.push(async function () {
        await me.print_and_wait([
          ` `,
          MF.get_colored_name(),
          ` 挽起了`,
          me.get_colored_name(),
          `的手臂，经过一位又一位学生。`,
        ]);
        await MF.say_and_wait(`被许多人看着呢……`);
        await era.printAndWait([
          `话是这么说，不过`,
          me.get_colored_name(),
          `发现 `,
          MF.get_colored_name(),
          ` 的行为更为大胆了。`,
        ]);
      });
    }
    let randomIndex_school_atr = Math.floor(Math.random() * message.length);
    await message[randomIndex_school_atr]();
  }
};

handlers[event_hooks.office_study] = async () => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const sp = get_chara_talk(1);
  let message = [];
  /*
    await MF.say('呜！上次的考试！');
    await MF.say('差点就要补考了！多亏白兴大人的保佑！');
    await era.printAndWait(`在没收了${MF.name}的占卜用铅笔后，${me.name}开始帮她规划出下次考试的重点。 `,);
    await era.printAndWait(`不过话说回来，为什么同样使用了占卜用铅笔，${sp.name}就需要补考呢？`,);*/

  // 这里需要补一个待兼福来的阁楼事件 // 需要吗？
  message.push(async function () {
    await MF.say('上次，差点就要补考了！多亏白兴大人的保佑！');
    await era.printAndWait([
      `在没收了 `,
      MF.get_colored_name(),
      ` 的占卜用铅笔后，`,
      me.get_colored_name(),
      `开始帮她规划出下次考试的重点。 `,
    ]);
    await era.printAndWait([
      `不过话说回来，为什么同样使用了占卜用铅笔，`,
      sp.get_colored_name(),
      `就需要补考呢？`,
    ]);
  });
  message.push(async function () {
    await MF.say('欸！我可是有书道段位的！');
    await MF.say_and_wait(`所以这方面我还是很擅长的！ `);
  });

  message.push(async function () {
    await MF.say('训练员先生！这幅怎么样？');
    await era.printAndWait([
      `这样说着，少女冲`,
      me.get_colored_name(),
      `举起了那幅蕴含着神意般的线条艺术。`,
    ]);
  });
  message.push(async function () {
    await MF.say_and_wait(`唔！在赛跑之外的地方，训练员先生也懂不少呢！`);
  });

  message.push(async function () {
    /*
      await MF.say([`小时候经常在阁楼里躲着生气的妈妈。`]);
      await MF.say_and_wait([`无聊的时候读了不少乱七八糟的书，没想到现在能用上！`]);*/
    await MF.say([`哦！这一本啊！`]);
    await MF.say_and_wait([`以前躲在阁楼上的时候读到过！`]); // 要询问待兼福来关于阁楼的事情吗？
  });

  message.push(async function () {
    await MF.say([`这本杂志，训练员先生有兴趣吗？`]);
    await era.printAndWait([
      ` `,
      MF.get_colored_name(),
      ` 指着面前那本《The Rhode Island Journal of Astronomy》的占卜专栏。`,
    ]);
  });

  message.push(async function () {
    await MF.say([`蓝型，绿型？......没听过的概念呢？`]);
    await era.printAndWait([
      ` `,
      MF.get_colored_name(),
      ` 指着那本封面上有着浅蓝色五角星标志的书本询问你。`,
    ]);
  });

  let randomIndex_ofs = Math.floor(Math.random() * message.length);
  await message[randomIndex_ofs]();
  await era.println();
};

handlers[event_hooks.office_rest] = async () => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const love = era.get('love:56');

  if (love > 49) {
    await me.say_and_wait(`好了吗？阿福`);
    await MF.say_and_wait(`嗯——嗯～`);
    await era.printAndWait([
      `名叫 `,
      MF.get_colored_name(),
      ` 的，栗毛的团子，正趴在`,
      me.get_colored_name(),
      `的身上`,
    ]);
    await era.printAndWait([
      ``,
      me.get_colored_name(),
      `正依着她的请求，顺起自己担当马娘毛茸茸的头发。`,
    ]);
    await era.printAndWait([
      `偶尔指尖掠过 `,
      MF.get_colored_name(),
      ` 敏感的耳朵根部时，她的身体就会微微颤抖。`,
    ]);
    await MF.say_and_wait(`呼呼……训练员……`);
    await era.printAndWait(`看来距离她休息够还有好久`);
  } else {
    await MF.say_and_wait(`呼……呼……`);
    await era.printAndWait([
      ` `,
      MF.get_colored_name(),
      ` 难得的安静了下来，如寺庙中的佛像般陷入了入定的状态。`,
    ]);
    await era.printAndWait([
      ``,
      me.get_colored_name(),
      `则开始准备起先前二人一起买回来的苹果。`,
    ]);
  }
};

handlers[event_hooks.office_cook] = async () => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const love = era.get('love:56');
  let message = [];

  if (love > 84) {
    message.push(async function () {
      await MF.say_and_wait(`要试试阿福做的味增汤吗！`);
      await MF.say_and_wait(`喜欢的话！每天都可以做给训练员先生哦！`);
    });
  } else if (love > 75) {
    message.push(async function () {
      await MF.say_and_wait(`让我来帮忙吧！这回绝对没问题的！`);
      await me.print_and_wait([
        `看来 `,
        MF.get_colored_name(),
        ` 这段时间学了许多。`,
      ]);
    });
  } else if (love > 49) {
    message.push(async function () {
      await MF.say_and_wait(`呃，这次我在一旁学着就好！`);
      await MF.say_and_wait(`只是想将来可能会有要用的时候！`);
      await me.print_and_wait([
        `望着`,
        me.get_colored_name(),
        `的脸， `,
        MF.get_colored_name(),
        ` 说出了这番话。`,
      ]);
    });
  } else if (love <= 49) {
    message.push(async function () {
      await MF.say_and_wait(`训练员需要的话！我也可以来帮忙！`);
      await me.print_and_wait([
        `在 `,
        MF.get_colored_name(),
        ` 的各种奇思妙想下，做饭的速度反而慢上了许多。`,
      ]);
    });
  }

  let randomIndex_cook = Math.floor(Math.random() * message.length);
  await message[randomIndex_cook]();
};

handlers[event_hooks.school_rooftop] = async () => {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);

  const love = era.get('love:56');
  let message = [];
  message.push(async function () {
    await MF.say_and_wait('喔喔喔喔喔！！！');
    await MF.say_and_wait('训练员的便当看起来很不错啊！');
    await era.printAndWait([
      ` `,
      me.get_colored_name(),
      ` 最终还是没有抵挡住 `,
      MF.get_colored_name(),
      ` 的热切目光，将饭盒推到了她面前。`,
    ]);
  });

  if (love > 50) {
    message.push(async function () {
      await MF.say_and_wait('那个，训练员先生的筷子请借我用一下！');
      await me.print_and_wait(
        ' ',
        me.get_colored_name(),
        '的一次性筷子在，',
        MF.get_colored_name(),
        ' 的手中发出了清脆的响声分开了。',
      );
      await MF.say_and_wait(
        '喔喔！依据这个占卜的话，训练员先生今日的运势看起来很不错呢！',
      );
    });
  }

  if (love > 75) {
    message.push(async function () {
      await MF.say_and_wait('训——练——员！想要！');
      await era.printAndWait([
        ` `,
        MF.get_colored_name(),
        ` 柔软的身体贴在`,
        me.get_colored_name(),
        `的身上,仿佛能滴出水的眼神看着`,
        me.get_colored_name(),
        ``,
      ]);
      await era.printAndWait(`夹起一块肉堵住了她的嘴。`);
      await MF.say_and_wait('唔……这个也不错就是啦！');
    });
  }

  let randomIndex_rooftop = Math.floor(Math.random() * message.length);
  await message[randomIndex_rooftop]();
};

handlers[event_hooks.office_prepare] = async function () {
  let message = [];

  message.push(async function () {
    await get_chara_talk(56).say_and_wait(
      `多谢训练员！开运仪式现在就差一个助手！`,
    );
  });
  message.push(async function () {
    await get_chara_talk(56).say_and_wait(
      `完成这个仪式需要……啊，训练员，能来帮忙太好了！`,
    );
  });
  message.push(async function () {
    await get_chara_talk(56).say_and_wait(
      `训练员！这个请神术的加上你的POW值一定没问题的！`,
    );
  });
  message.push(async function () {
    await get_chara_talk(56).say_and_wait(`置闰仪式？感觉做起来会亮堂堂的……`);
  });
  message.push(async function () {
    await get_chara_talk(56).say_and_wait(
      `联络术，请神术，驱逐术，这个仪式该归到哪一类呢？`,
    );
  });

  let randomIndex_rooftop = Math.floor(Math.random() * message.length);
  await message[randomIndex_rooftop]();
};
handlers[event_hooks.office_game] = async function () {
  /*await get_chara_talk(56).say_and_wait(
    Math.random() < 0.5
        ? `通过写作来心想事成吗？真是有意思的设定。`
        : `亮银色的大气……我的梦里好像也会有类似的情景呢。`,

    );*/

  const MF = get_chara_talk(56);
  let message = [];

  const FUKU = new FukuEventMarks();

  message.push(async function () {
    await MF.say_and_wait(`通过写作来心想事成吗？真是有意思的设定！`);
  });
  message.push(async function () {
    await MF.say_and_wait(`亮银色的大气……我的梦里好像也会有类似的情景呢！`);
  });
  message.push(async function () {
    await MF.say_and_wait(`要是我的灵力也能做到念动移物就好了！`);
  });
  message.push(async function () {
    await MF.say_and_wait(`……意志正在受到考验……唔，正是靠运气的时刻呢！`);
  });

  message.push(async function () {
    await MF.say_and_wait(
      `白蛇神社啊……位置比我们家的神社还偏僻呢,怎么会有参拜客呢!`,
    );
  });
  message.push(async function () {
    await MF.say_and_wait(`命运COOP,看来是同行呢！`);
  });

  if (FUKU.fortune_game_duel >= 1) {
    message.push(async function () {
      await MF.say_and_wait(`呼呼……用占卜来读指令什么的，果然特别好用呢！`);
    });
  }
  let randomIndex_officegame = Math.floor(Math.random() * message.length);
  FUKU.GAME_TIMES++;
  await message[randomIndex_officegame]();
};

handlers[event_hooks.week_start] = async () => {
  const MF = get_chara_talk(56),
    me = get_chara_talk(0),
    punish_level = era.get('flag:惩戒力度');

  await print_event_name('惩戒之后', MF);
  if (punish_level === 1) {
    await MF.say_and_wait(`呜啊！命定之人变成马娘了吗！`);
    await MF.say_and_wait(`不用担心！训练员先生，我会帮你适应的！`);
    await MF.say_and_wait(`话说……还该叫先生吗？`);
    await MF.say_and_wait(`姐姐怎么样？`);
  } else if (punish_level === 2) {
    await MF.say_and_wait(`唔！姐姐想干什么？`);
    await me.print_and_wait([
      ``,
      me.get_colored_name(),
      `想要反抗而使出来的铁爪，却被轻而易举的擒住了。`,
    ]);
    await me.print_and_wait([
      `之后在 `,
      MF.get_colored_name(),
      ` 半强迫的要求下换上了和她如出一辙的服饰。`,
    ]);
  } else if (punish_level === 3) {
    await MF.say_and_wait(`没有关系……`);
    await MF.say_and_wait(`即使是这样，我也不会抛下训练员的……`);
    await MF.say_and_wait(`毕竟是约好的事情嘛……`);
    await MF.say_and_wait(`呼……`);
    await me.print_and_wait([
      `伸手将`,
      me.get_colored_name(),
      `刚洗完澡，湿漉漉的耳朵捋直，擦干，橙色的赛马娘将耳饰戴在了`,
      me.get_colored_name(),
      `的耳朵上。`,
    ]);
    await me.print_and_wait([
      `耳朵似乎是过于敏感了，`,
      me.get_colored_name(),
      ` 的视野中逐渐蒙上了一层水汽。`,
    ]);
    await me.print_and_wait([
      `尾巴认主般的缠在了 `,
      MF.get_colored_name(),
      ` 的腰上……`,
    ]);
    await me.print_and_wait([
      `难以想象，这种事情会发生在以前那个只手就能制服 `,
      MF.get_colored_name(),
      ` 的训练员身上。`,
    ]);
  }
};

handlers[event_hooks.load_talk] = async function () {
  const MF = get_chara_talk(56);
  const me = get_chara_talk(0);
  const love = era.get('love:56');

  if (era.get('cflag:37:妊娠回合计时')) {
    await MF.print_and_wait([
      `自训练员离开后， `,
      MF.get_colored_name(),
      ` 一直把自己封在家里的藏书室。`,
    ]);
    await MF.say_and_wait(`是的!是的！找到了！`);
    await era.printAndWait(
      [
        MF.get_colored_name(),
        {
          color: get_gradient_color(MF.color, '#ff0000', 0.5),
          content: '「找到了找到了找到了找到了找到了找到了找到了！！！！！」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '24px' },
    );
    await MF.say_and_wait(`献祭需要孩子的血，这样就能追踪到${me.actual_name}`);
    await MF.print_and_wait([
      `摸着自己微微隆起的肚子，披头散发的 `,
      MF.get_colored_name(),
      ` 脸上挂着足以称之为扭曲的微笑。`,
    ]);
  } else if (love < 49) {
    await MF.say_and_wait(`这个闹钟是训练员的开运道具吗？`);
    await MF.say_and_wait(`唔！`);
    await MF.say_and_wait(`我现在就还给你！`);
  } else if (love > 89) {
    await MF.say_and_wait(`离开了……`);
    await MF.say_and_wait(`命定之人……离开了……`);
    await era.printAndWait(
      [
        MF.get_colored_name(),
        {
          color: get_gradient_color(MF.color, '#ff0000', 0.5),
          content: '「不……不要不要不要不要不要不不不不要啊！」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '24px' },
    );
  }
};

handlers[event_hooks.celebration] = async () => {
  const MF = get_chara_talk(56);
  let temp = 0;
  const me = get_chara_talk(0);
  const DT = get_chara_talk(58);
  const edu_weeks = era.get('cflag:56:育成回合计时');
  const FUKU = new FukuEventMarks();
  let ret = 0;
  const cele_check = edu_weeks % 48;

  let races;
  let message = [];
  if (edu_weeks === 47 + 1) {
    // 第一年 新年

    await print_event_name(`选召之人`, MF);
    await me.print_and_wait(`又到了初诣的时候`);
    if (era.get(`flag:当前声望`) >= 500) {
      await me.print_and_wait(
        `依据习惯，特雷森学院的训练员往往会和自己负责的赛${MF.get_uma_sex_title()}一同进行这个仪式。`,
      );
    } else {
      await me.print_and_wait(
        `来自特雷森内部的手册上，清楚无疑的写着，请尽量与自己负责的担当赛${MF.get_uma_sex_title()}一同进行。 `,
      );
    }
    await me.print_and_wait([
      `在事先同 `,
      MF.get_colored_name(),
      ` 约定好了行程之后，她没有向往常那样与 `,
      me.get_colored_name(),
      ` 一同在校园大门前见面之后再前往目的地。`,
    ]);
    await me.print_and_wait(
      `和先前她说的一样，原本寂静冷清的神社此刻终于算是有了些人气，三三两两的参拜客们并在一起，谈笑声不断响起。`,
    );
    await me.print_and_wait(`此间神社巫女为众人祈福的舞蹈开始了。`);
    await me.print_and_wait(`「咚！」`);
    await me.print_and_wait([
      ``,
      me.get_colored_name(),
      `听见鼓声响起，而后是三味线的加入。`,
    ]);
    await me.print_and_wait([
      `表演开始了， `,
      MF.get_colored_name(),
      ` 仍不知所踪。`,
    ]);
    await me.print_and_wait(`「哗啦！」`);
    await me.print_and_wait(
      `然后神乐铃的声音响起，代表着属于此间神社的巫女登场。`,
    );
    await me.print_and_wait(`舞台上的马娘正随着富有韵律感的音乐翩翩起舞。`);
    await me.print_and_wait(
      `即使是如此寒冷的天气，周围人们的欢呼声也是丝毫不减。`,
    );
    await me.print_and_wait(
      `一年以来人们积攒的疲惫与劳累，正随着舞台上那橘发金眼的马娘悄然曼妙的请神舞蹈下悄然脱落，无声无息。`,
    );
    await me.print_and_wait(
      `是啊，所谓马娘，不正是活着的，现人神之类的生灵吗？`,
    );
    await me.print_and_wait([
      `只不过，`,
      me.get_colored_name(),
      `是知道那位正翩翩起舞的现人神的身份的。`,
    ]);
    await me.print_and_wait([
      `那正是迟迟不露面的 `,
      MF.get_colored_name(),
      ` ，随着她手中神乐铃的摇动，清澈的铃声洁净着周围的环境和祈祷者的心灵。`,
    ]);
    await me.print_and_wait([
      `平日里一向脱线的她，居然能露出如此圣严的神态，倒是颇让`,
      me.get_colored_name(),
      `意外的。`,
    ]);
    era.drawLine({ content: `待兼福来家的神社 神乐结束后` });
    await me.print_and_wait(
      `几乎已是凌晨时分，为了自家神社忙前忙后的${MF.name}总算得以有片刻休息。`,
    );
    await MF.say_and_wait('训练员！');
    await me.print_and_wait([
      `那家伙几乎是一刻不停的跑到了`,
      me.get_colored_name(),
      `的面前，带动着巫女服的振袖一摆一摆的`,
    ]);
    await MF.say_and_wait(
      `非常非常抱歉！毕竟是难得的，神社里有点人的时候！忘了应该要提前和训练员先生说一下的！`,
    );
    await MF.say_and_wait(`父亲毕竟是这里的宫司呢，为此我也得好好努力才行！`);
    await MF.say_and_wait(`不过, 作为回报……`);
    await MF.say_and_wait('现在是巫女的单独服务时间哦！');
    era.printButton('「阿福这么说，其他参拜客们不会嫉妒吗？」', 1);
    await era.input();
    await MF.say_and_wait('诶诶！训练员可是受到了白兴大人选召的人啊！');
    await me.print_and_wait(
      `两人安静而单调的脚步声，就在神社中响起，最后二人来到了神社的塞钱箱前。`,
    );
    await MF.say_and_wait(
      `那么！训练员${me.get_adult_sex_title()}的愿望是什么呢！`,
    );
    await MF.say_and_wait(
      `现在的我可是灵力的最顶点呢！无论是什么愿望都会实现的！`,
    );
    await MF.say_and_wait(`甚至能听到白兴大人的声音呢！`);
    await me.print_and_wait([
      `穿着兰花般素白巫女服的 `,
      MF.get_colored_name(),
      ` ，握住了`,
      me.get_colored_name(),
      `的手。`,
    ]);
    era.printButton('「那自然是希望阿福能赢下接下来的青叶赏了」', 1);
    await era.input();
    await MF.say_and_wait('诶……');
    await MF.say_and_wait(`训练员的愿望是这个吗？`);
    await MF.say_and_wait(`我明白了！我会努力的！`);
    await MF.say_and_wait(`那么！训练员再见！可以的话！明天也要来哦！`);
    await me.print_and_wait([
      `目送 `,
      me.get_colored_name(),
      ` 离开之后， `,
      MF.get_colored_name(),
      ` 回去了她位于神社的居所。`,
    ]);
    await me.print_and_wait([
      `不过，当`,
      me.get_colored_name(),
      `迈出神社的朱红鸟居之时，心底莫名响起了一道声音。`,
    ]);
    await me.print_and_wait(`而后，周围的世界几乎被纯白所吞没。`);
    era.drawLine({ content: '？？？' });
    await era.println();
    /* await era.printAndWait(`<选召之人/受选者，你/我们的愿望/旨意是什么？>`,{align: 'center',
      color: MF.color,
      fontSize: '36px',
      fontWeight: 'bold',});*/

    let str = `选召之人/受选者，你/我们的愿望/旨意是什么？`;

    for (let i = 1; i <= str.length; i++) {
      message = str.slice(0, i);
      era.replaceText([`<` + message + `>`], {
        align: 'center',
        color: MF.color,
        fontSize: '36px',
        fontWeight: 'bold',
      });

      await era.delay(150);
    }
    /*
      for (let i = 1; i <= str.length; i++) {
        message = str.slice(0, i);
        era.print(message+`>`,{align: 'center',
            color: MF.color,
            fontSize: '36px',
            fontWeight: 'bold',});
         await era.delay(150);
        if (i != str.length){
          await era.clear(1);
        }
      }*/

    await era.println();
    era.printButton('（激振的气氛）', 1);
    era.printButton('（战栗的气息）', 2);
    era.printButton('（轻微的破绽）', 3);
    ret = await era.input();
    era.println();
    if (ret === 1) {
      await MF.print_and_wait(`五感变得敏锐……`);

      get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
    } else if (ret === 2) {
      await MF.print_and_wait(`轻点脚尖，轻快而又舒适……`);

      get_attr_and_print_in_event(56, [30, 0, 0, 0, 0], 0);
    } else {
      await MF.print_and_wait(`系带解开——窗户外敞——锁像上过油一样转动……`);
      get_attr_and_print_in_event(56, undefined, 40);
    }

    era.set('cflag:56:节日事件标记', 0);
    await era.println();
    await me.print_and_wait([
      `当`,
      me.get_colored_name(),
      `回过神来的时候，已经坐上了返回特雷森的末班车。`,
    ]);
    //sys_love_uma(56, 3);
    await era.waitAnyKey();
    return true;
  } else if (edu_weeks === 95 + 1) {
    // 第二年 新年

    await print_event_name(`神乐`, MF);
    await me.print_and_wait([
      `和去年不同，今年的`,
      me.get_colored_name(),
      `提前收到了 `,
      MF.get_colored_name(),
      ` 的邀请，前往了她们家的神社。`,
    ]);
    await me.print_and_wait(
      `此时神社的人数还不算多，你踏着石阶，再次跨过了那朱红的鸟居。`,
    );
    await me.print_and_wait([
      `而后与上次一样，由远极近，`,
      me.get_colored_name(),
      `的世界被纯白所笼罩。`,
    ]);
    era.drawLine({ content: '？？？' });
    era.printButton('「睁开眼睛」', 1);
    let temp = [];
    temp = await era.input();
    await me.print_and_wait([
      `周围空无一切，柔和的白色光束从不同的角度如审视般地照在`,
      me.get_colored_name(),
      `的身上。`,
    ]);
    era.printButton('「抬起头」', 1);
    temp = await era.input();
    await me.print_and_wait(`纯黑色的倒金字塔，突兀的悬于空中。`);
    await era.println();
    races = era.get('cflag:56:育成成绩');
    if (check_aim_race(races, race_enum.kiku_sho, 1, 1)) {
      let str = `非常好/保持预期，有资格/能力成为她的协助者/伴侣`;

      /* for (let i = 1; i <= str.length; i++) {
          message = str.slice(0, i);
          era.replaceText(`<`+message+`>`,{align: 'center',
              color: MF.color,
              fontSize: '36px',
              fontWeight: 'bold',});

              
          await era.delay(200);
      
      }*/
      for (let i = 1; i <= str.length; i++) {
        message = str.slice(0, i);
        era.print('<' + message + `>`, {
          align: 'center',
          color: MF.color,
          fontSize: '36px',
          fontWeight: 'bold',
        });
        await era.delay(150);
        if (i != str.length) {
          await era.clear(1);
        }
      }
      await era.println();

      str = `你的旨意/愿望是什么？`;
      /* for (let i = 1; i <= str.length; i++) {
          message = str.slice(0, i);
          era.replaceText(`<`+message+`>`,{align: 'center',
              color: MF.color,
              fontSize: '36px',
              fontWeight: 'bold',});

              
          await era.delay(200);
      
      }*/
      for (let i = 1; i <= str.length; i++) {
        message = str.slice(0, i);
        era.print('<' + message + `>`, {
          align: 'center',
          color: MF.color,
          fontSize: '36px',
          fontWeight: 'bold',
        });
        await era.delay(150);
        if (i != str.length) {
          await era.clear(1);
        }
      }

      await era.println();
    } else {
      let str = `低于预期/响应未达标，协助者/伴侣意料之外`;

      /* for (let i = 1; i <= str.length; i++) {
            message = str.slice(0, i);
            era.replaceText(`<`+message+`>`,{align: 'center',
                color: MF.color,
                fontSize: '36px',
                fontWeight: 'bold',});
  
                
            await era.delay(200);
        
        }*/
      for (let i = 1; i <= str.length; i++) {
        message = str.slice(0, i);
        era.print(message + `>`, {
          align: 'center',
          color: MF.color,
          fontSize: '36px',
          fontWeight: 'bold',
        });
        await era.delay(150);
        if (i != str.length) {
          await era.clear(1);
        }
      }
      await era.println();
      str = `参数/可选项还需要优化/替换`;
      /*   for (let i = 1; i <= str.length; i++) {
            message = str.slice(0, i);
            era.replaceText(`<`+message+`>`,{align: 'center',
                color: MF.color,
                fontSize: '36px',
                fontWeight: 'bold',});
  
                
            await era.delay(200);
        
        }*/
      await era.println();
      for (let i = 1; i <= str.length; i++) {
        message = str.slice(0, i);
        era.print(message + `>`, {
          align: 'center',
          color: MF.color,
          fontSize: '36px',
          fontWeight: 'bold',
        });
        await era.delay(150);
        if (i != str.length) {
          await era.clear(1);
        }
      }
    }

    era.printButton('（昂扬的气氛 ）', 1);
    era.printButton('（脉动的气息）', 2);
    era.printButton('（轻微的裂缝）', 3);
    ret = await era.input();
    era.println();
    if (ret === 1) {
      await MF.print_and_wait(`群情激昂……`);

      get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
    } else if (ret === 2) {
      await MF.print_and_wait(`力量上涌，精神鼓舞……`);
      get_attr_and_print_in_event(56, [0, 0, 30, 0, 0], 0);
    } else {
      await MF.print_and_wait(`云朵分离——墙壁碾动——旧伤作痛……`);
      get_attr_and_print_in_event(56, undefined, 30);
    }
    await era.waitAnyKey();
    await era.println();
    if (era.get('love:56') < 49) {
      era.set('cflag:56:节日事件标记', 0);
      await me.print_and_wait([
        `当`,
        me.get_colored_name(),
        `回过神来的时候，`,
        me.get_colored_name(),
        `已经坐上了返回特雷森的末班车。`,
      ]);
      return true;
    }
    await MF.say_and_wait(`喂……`);
    await MF.say_and_wait(`喂……`);
    await MF.say_and_wait(`训练员！`);
    era.printButton('「睁开眼睛」', 1);
    temp = await era.input();
    await MF.say_and_wait(`怎么靠着鸟居睡着了？`);
    await MF.say_and_wait(`小心着凉啊！`);
    era.printButton('「抬起头」', 1);
    temp = await era.input();
    await me.print_and_wait([
      `穿着巫女服的 `,
      MF.get_colored_name(),
      ` 拉住了`,
      me.get_colored_name(),
      `的手，笑意盈盈，黄昏的阳光在其亮橙色的碎发间起舞`,
    ]);
    await me.print_and_wait(
      `今年算是暖冬吧，加上赛马娘本就略高的体温，这巫女服对她而言可能还偏厚了。`,
    );
    await me.print_and_wait(
      `巫女的洁白上衣配着下身鲜红的百褶裙, 白色的长筒袜勾勒出了她柔美的双腿。`,
    );
    await me.print_and_wait(
      `分离式的宽大振袖在风的吹拂下偶尔摆动，让露出的腋下与雪白的侧乳若隐若现。`,
    );
    await me.print_and_wait([
      `那将衣物撑起明显小丘的胸部在她拉扯`,
      me.get_colored_name(),
      `手臂的同时肆意摇晃着。`,
    ]);
    await me.print_and_wait([
      `马娘自身的活力与传统服饰带来的庄重，在这名叫 `,
      MF.get_colored_name(),
      ` 的马娘身上完美的交融在一起。`,
    ]);
    era.printButton('「好美……」', 1);
    temp = await era.input();
    await MF.say_and_wait(`欸！`);
    await MF.say_and_wait(`唔呼呼！训练员迷上了吗？`);
    await MF.say_and_wait(`这可是特地为我的命定之人挑选的哦！`);
    await MF.say_and_wait(`那么，请期待着我今晚的神乐吧！`);
    era.drawLine({ content: `待兼福来家的神社 大殿前` });
    await me.print_and_wait([
      `新年的神社，由于 `,
      MF.get_colored_name(),
      ` 这一年来的精彩表现，神社的参拜客数量也不断增多。`,
    ]);
    await me.print_and_wait(
      `这座因为十几年前的事故而快被众人遗忘的神社，如今又重新焕发出了生机。`,
    );
    await me.print_and_wait(
      `众人们的喧哗声先是达到了最高潮，随后便如退潮般，慢慢散去。`,
    );
    await me.print_and_wait(
      `在万籁俱寂的时候，仿佛看准时机一般，远处的太鼓被奏响，神乐正式开始。`,
    );
    await me.print_and_wait(`乐器的合奏恰到好处。`);
    await me.print_and_wait(`太鼓如关西大汉的吼声令人心情澎湃。`);
    await me.print_and_wait(
      `三味线如月出于东山之上，徘徊于斗牛之间，轻快回旋。`,
    );
    await me.print_and_wait(
      `巫女摇响的神乐铃声则点缀于其间，澄澈，悠远而空灵。`,
    );
    await me.print_and_wait([
      `那声音当中，神殿的正中央，正是 `,
      MF.get_colored_name(),
      ` ，`,
      me.get_colored_name(),
      `的担当 `,
      MF.get_colored_name(),
      ` 。`,
    ]);
    await me.print_and_wait([
      `伴随着旋律，她于庄严而冷肃的空间中飘飞，月光自天井射下，照在 `,
      MF.get_colored_name(),
      ` 饰以清丽淡雅妆容的脸上。`,
    ]);
    await me.print_and_wait(`她挥舞着那把神乐铃，邀请神明与她共舞。`);
    await me.print_and_wait(
      `一曲毕，台上的现人神立于正中央，向四周的民众们行礼。`,
    );
    era.drawLine({ content: '一段时间后' });
    await MF.say_and_wait(`呼……总算结束了啊！`);
    await MF.say_and_wait(`多谢训练员今天来帮忙啦！`);
    await me.print_and_wait([
      `和上次差不多，`,
      me.get_colored_name(),
      `们一直忙到了凌晨时分，直到神社再次回到原来寂寥无人的常态。`,
    ]);
    await me.print_and_wait([
      `不过却也和上次不同……有些疲惫的 `,
      MF.get_colored_name(),
      ` 正靠在`,
      me.get_colored_name(),
      `的肩膀上。`,
    ]);
    await me.print_and_wait([
      `或许是的布料还是有点厚重了， `,
      MF.get_colored_name(),
      ` 裸露在外的白嫩肌肤上香汗淋漓，微张的唇瓣也吐出热气。`,
    ]);
    await me.print_and_wait([
      `巫女服勾勒出她较好的身体曲线，露出的侧乳因为先前的忙碌染上了绯红,随着呼吸起伏着，似乎在诱惑着`,
      me.get_colored_name(),
      `伸手试试触感。`,
    ]);
    era.printButton('（忍耐）', 1);
    era.printButton(`（搂住待兼福来的腰）`, 2, {
      disabled: era.get('love:56') < 75,
    });
    /*
      if(era.get('love:56') >= 75){
        era.printButton('（忍不住了）', 2);
      }*/
    temp = await era.input();
    if (temp === 1) {
      era.set('cflag:56:节日事件标记', 0);
      await me.print_and_wait([
        `强压下自己的欲望，向 `,
        MF.get_colored_name(),
        ` 道别之后，`,
        me.get_colored_name(),
        `坐上了返回特雷森的车。`,
      ]);
      sys_like_chara(56, 0, 5);
      sys_love_uma(56, 3);

      return true;
    } else if (temp === 2) {
      begin_and_init_ero(0, 56);
      await MF.say_and_wait(`诶！诶！训练员…….唔……`);
      await me.print_and_wait([
        `俯下身，低头夺走了她的嘴唇 , 听着 `,
        MF.get_colored_name(),
        ` 从喉咙中挤出的微弱的呻吟。`,
      ]);
      await MF.say_and_wait(`咕……咕……`);
      await MF.say_and_wait(`呼哈……`);
      await me.print_and_wait([
        `唇舌相互纠缠，被`,
        me.get_colored_name(),
        `抱在怀中的 `,
        MF.get_colored_name(),
        ` 难耐似的扭动着身体，些许唾液自她的嘴角流下，落在神社的石板路上。`,
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      await me.print_and_wait([
        `贪婪地将舌头探入她先前还在为众人献上祷词的口中，迎接`,
        me.get_colored_name(),
        `的是她并不熟练的回应`,
      ]);
      await MF.say_and_wait(`咿呀……`);
      await me.print_and_wait(`抱在怀里的担当，发出了下流的声音。`);
      await me.print_and_wait(
        `左手探入了她的巫女服，轻轻掐着她乳房的边缘玩弄着。`,
      );
      await me.print_and_wait([
        `接着又整个搭上，感受着小巧的乳肉在`,
        me.get_colored_name(),
        `的揉捏下变成各种形状。`,
      ]);
      await MF.say_and_wait(`哈……哈啊！`);
      await me.print_and_wait([
        `指尖在柔嫩的乳晕上绕着圈，偶尔用指尖轻点， `,
        MF.get_colored_name(),
        ` 便会配合发出可爱的叫声。`,
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.breast),
        false,
      );
      await MF.say_and_wait(`呀啊！`);
      await me.print_and_wait(
        `舌吻继续，一边将右手抚上了她的大腿，指肚摩檫起了丝袜的布料，发出低微的嘶嘶声。`,
      );
      await me.print_and_wait(
        `一步一步的，划过她的大腿，手探入了温暖的裙摆下。`,
      );
      await me.print_and_wait([
        `湿透了，`,
        me.get_colored_name(),
        `可以感觉得到。`,
      ]);
      await me.print_and_wait([
        `一划过被濡湿内裤勾勒出的阴阜， `,
        MF.get_colored_name(),
        ` 便发出了更加淫荡的声音。`,
      ]);
      await me.print_and_wait([
        `就站在神社石板路的正中间做这种事情，背德感的刺激让`,
        me.get_colored_name(),
        `的欲望进一步高涨。`,
      ]);
      await MF.say_and_wait(`呀，不要……不要在这里……`);
      await me.print_and_wait([
        `只是少女的欲拒还迎罢了， `,
        MF.get_colored_name(),
        ` 虽是说着不情愿，但是并拢的双腿却微微分开，得以让`,
        me.get_colored_name(),
        `的手进一步探入。`,
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          56,
          MF.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await me.print_and_wait(
        `手指插入，穴肉自觉的吸附上来，指节在穴腔内活动时发出粘腻的声响。`,
      );
      await MF.say_and_wait(`唔! `);
      await me.print_and_wait([
        `强烈的刺激让 `,
        MF.get_colored_name(),
        ` 急促的喘息着，双腿夹紧`,
        me.get_colored_name(),
        `的手臂，如触电般的颤抖着。`,
      ]);
      await MF.say_and_wait(`呀呜，训练员！`);
      era.printButton('「这么舒服吗？」', 1);
      ret = await era.input();
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await MF.say_and_wait(`不，不知道啊……嗯呀，哈啊…… `);
      await me.print_and_wait(
        `淫液流出，顺着大腿根部一路往下，在白色的长筒袜上勾勒出淫靡的花纹。`,
      );
      await MF.say_and_wait(`啊，嗯嗯，呀嗯，训练员!`);
      await MF.say_and_wait(`要来了！`);
      await MF.say_and_wait(`去了！${me.actual_name} ! `);
      await me.print_and_wait(
        `在一阵抽搐般的痉挛后，些许爱液还是突破内裤的阻拦涌了出来，神社的石板路上出现了一片明显的水渍。`,
      );
      era.printButton('「继续吗？」', 1);
      ret = await era.input();
      await MF.say_and_wait(`诶……嗯！`);
      await me.print_and_wait(`是时候进行下一步了。`);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `将她抵在了道路旁挂着粗壮注连绳的大树上，这过程中也没有停止玩弄她，水渍一路从石板路的中央断断续续的来到这树前。`,
      ]);
      await me.print_and_wait([
        `像是要对折般抬起 `,
        MF.get_colored_name(),
        ` 匀称的大腿，将阴茎贴在已经湿透的缝隙处，一口气插了进去。`,
      ]);
      era.set('status:56:短效避孕药', 1);
      era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await MF.say_and_wait(`哈啊！`);
      await me.print_and_wait(`巫女发出的呻吟声清晰可辨，回荡在无人的神社中。`);
      await me.print_and_wait([
        `每次抽插， `,
        MF.get_colored_name(),
        ` 的身体上下移动着。手臂带着宽大的振袖上下翻飞着，如同方才神乐般的舞姿。`,
      ]);
      await me.print_and_wait([
        `而后又因对快感的祈求而抱紧了`,
        me.get_colored_name(),
        `，让肉棒得以抽送到更为深处的软肉。`,
      ]);
      await MF.say_and_wait(`哈……${me.actual_name}！`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 全身无力地勉强抱着渴求着自己的${me.actual_name}训练员。`,
      ]);
      await me.print_and_wait(`啪！啪！啪！`);
      await me.print_and_wait(`庄严圣洁的神社内，响起淫荡的啪嗒水声。`);
      await me.print_and_wait(
        `每一次撞击都会带出体内的爱液，浇灌着巫女背靠着的古树。`,
      );
      await me.print_and_wait([
        `本来还对这场淫祀有所拘谨的 `,
        MF.get_colored_name(),
        ` ，也在`,
        me.get_colored_name(),
        `的逐步进攻下开始纵情的扭动着腰。`,
      ]);
      await MF.say_and_wait(`感觉好舒服！嗯嗯唔……！`);
      await me.print_and_wait([
        `露天之下的神社内，`,
        me.get_colored_name(),
        `与 `,
        MF.get_colored_name(),
        ` 如野兽般索求着快感。`,
      ]);
      await me.print_and_wait(`神圣的神社当中，却上演着这么秽亵的一幕。`);
      await me.print_and_wait([
        `或许正是因为这背德的行为， `,
        MF.get_colored_name(),
        ` 的腔壁是难以想象的紧致。`,
      ]);
      await MF.say_and_wait(`哦哦……！好……舒服……！`);
      await me.print_and_wait([
        `每一次摩擦着内侧的腔壁, `,
        me.get_colored_name(),
        `的阴茎都受到极为强烈的刺激。`,
      ]);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 似乎也是如此感觉，每一次要抽出腰，腔内的软肉死死的缠着`,
        me.get_colored_name(),
        `的肉棒。`,
      ]);
      await MF.say_and_wait(`嗯啊……要，要去了……！`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 的背向后弓了过去，蜜穴猛然的紧缩，给`,
        me.get_colored_name(),
        `带来巨量的快感。`,
      ]);
      await me.print_and_wait(`咕哧——咕哧——`);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `的肉棒抵着她的子宫口倾吐起精液，让本就高潮的 `,
        MF.get_colored_name(),
        ` 不断地颤抖着。`,
      ]);
      era.add('exp:56:阴道高潮次数', 1);
      era.add('exp:0:阴茎高潮次数', 1);
      era.add('exp:0:射精量', 20);
      await MF.say_and_wait(`唔呃呃呃呃！！！`);
      await me.print_and_wait(
        `没有抑制自己的呻吟，淫荡的巫女直截了当的叫出声来。`,
      );
      await me.print_and_wait(
        `爱液自交合处不断溢出，在神圣的古树下积起了一滩充满背德欲望的水洼。`,
      );
      await me.print_and_wait(
        `失焦的星星瞳向上翻起，香舌吐出，向此间神社的神灵宣告着这场祭祀的结束。`,
      );

      end_ero_and_train();
      era.set('cflag:56:节日事件标记', 0);
      await era.waitAnyKey();
      return true;
    }
  } else if (edu_weeks === 144) {
    // 第三年 新年

    await print_event_name(`Farewell Matikane……`, MF);
    await me.print_and_wait([
      `也许是最后一次，以 `,
      MF.get_colored_name(),
      ` 的训练员这一身份陪她完成这一次的初诣了。`,
    ]);
    await me.print_and_wait([
      `怀着这样的心情，`,
      me.get_colored_name(),
      `再次来到这座偏远神社的鸟居前。`,
    ]);
    await era.printButton('（迈入鸟居）', 1);

    temp = await era.input();
    await me.print_and_wait(
      `奇怪，并没有以前那种宛如跌落进另一个世界中的错位感。`,
    );
    await MF.say_and_wait(`训练员！`);
    await me.print_and_wait([
      `不过，没等`,
      me.get_colored_name(),
      `细想多久，早早等在参拜道上的 `,
      MF.get_colored_name(),
      ` 便把`,
      me.get_colored_name(),
      `拉进了正在准备迎接新年参拜客的神社内。`,
    ]);
    await era.drawLine();
    await MF.say_and_wait(`对！对！再往左边挂一点。`);
    await DT.say_and_wait(`啊，哦，欸欸欸！！！`);
    await MF.say_and_wait([
      `啊！小心啊，`,
      sys_get_colored_callname(56, 58),
      ` 同学！`,
    ]);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 正有条不紊的指挥着包括`,
      DT.get_colored_name(),
      `在内几位邀请来帮忙的同学装点着新年的神社。`,
    ]);
    await me.print_and_wait(
      `一旁而事先折好的工艺品和等待挂起的灯笼如小山般强调着接下来的工作量会有多大。`,
    );
    await era.printButton('「能独当一面了呢！」', 1);
    temp = await era.input();
    await me.print_and_wait(
      `出言夸赞了一下自己的担当，让站在一旁调度众人的少女双耳微不可察的摆动了一下。`,
    );
    await MF.say_and_wait(`......嗯。`);
    await me.print_and_wait([
      `比划了一下高度， `,
      MF.get_colored_name(),
      ` 示意负责纸灯笼的茶色马娘继续把挂绳拉高一些。`,
    ]);
    await MF.say_and_wait(`记得小时候和姐姐的初诣的时候，那才是人山人海呢！`);
    await MF.say_and_wait(`为此也一直有在准备就是了，这回应该能够用上吧？`);
    await me.print_and_wait([
      `在看着茶色头发的马娘成功把悬于道路上的纸灯笼串起之后，有着温暖发色的马娘转头等待起`,
      me.get_colored_name(),
      `的答复。`,
    ]);
    await era.printButton('（点头）', 1);
    await era.printButton(`「我相信会的。」`, 2);
    temp = await era.input();
    await me.print_and_wait([
      `的确如此，在有马纪念上 `,
      MF.get_colored_name(),
      ` 的漂亮表现与发言惊艳了全国的观众。`,
    ]);
    await me.print_and_wait(
      `社交媒体上早就有不少人的发言想要借着新年的参拜来让这位才在有马纪念中取得优胜的少女为自己带来好运。`,
    );
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 背后的故事也被一些好事的媒体挖了出来，除了对如此乐天的少女居然有着如此沉重过往而感到的反差，更多则是因此而生的感动。`,
    ]);
    await me.say_and_wait(`背负命运奔跑的赛马娘`);
    await me.print_and_wait(
      `想到这里，下意识的念出了最近几张赛马娘期刊上为福来冠上的名号。`,
    );
    await MF.say_and_wait(`欸！！！`);
    await MF.say_and_wait(`有些夸张了！`);
    await MF.say_and_wait(`还有什么少女和她的命定之人之类的花边新闻……`);
    await me.print_and_wait([
      `不知是因为`,
      me.get_colored_name(),
      `提及的那个过于浮夸的称号，还是后面随之想到的一些半真半假的绯闻，原本气定神闲指挥着众人的 `,
      MF.get_colored_name(),
      ` 脸上多了几分绯红。`,
    ]);
    await MF.say_and_wait(`不过，命运啊……我真是被困扰了好久呢！`);
    await MF.say_and_wait(`而且我想……我也已经准备好了……`);
    await era.printButton(`「准备好什么了？」`, 1);

    temp = await era.input();
    await MF.say_and_wait(`那个，训练员先生，明天陪我再去一躺市郊的墓地吧。`);
    await me.print_and_wait([
      `暂时按下了自己好奇的心情，`,
      me.get_colored_name(),
      `开始在福来的指挥下加入了为新年的神社做起准备的队伍中。`,
    ]);
    era.drawLine({ content: '次日 市郊墓园' });
    await me.print_and_wait([
      `同样的柏树下，墓碑旁，名叫`,
      me.get_colored_actual_name(),
      `的训练员身旁站着一位橙色马娘。`,
    ]);
    await me.print_and_wait([
      `前一天晚上的祓禊仪式，果然如`,
      me.get_colored_name(),
      `预料般的那样，前来的参拜客举袖为云。`,
    ]);
    await me.print_and_wait([
      `光是焚烧那些客人们带来的御守，熊手等开运道具，便让 `,
      MF.get_colored_name(),
      ` ，还有她请来的临时巫女忙到了半夜。`,
    ]);
    await me.print_and_wait([
      `记得自己的承诺， `,
      MF.get_colored_name(),
      ` 还是起了一个大早，稀疏纤细的尘埃在冬日的阳光中漂浮游动，大理石制的墓碑如玻璃般闪耀。`,
    ]);
    await me.print_and_wait([
      ``,
      me.get_colored_name(),
      `注意到少女只是呆立在墓碑前，一言不发。`,
    ]);
    await me.say_and_wait(`需要留你一个人静静吗？`);
    await me.print_and_wait([
      ``,
      me.get_colored_name(),
      `再次问出了这个问题，一如第一次被 `,
      MF.get_colored_name(),
      ` 带到此处一样。`,
    ]);
    let spname = me.actual_name[0];
    await MF.say_and_wait(
      `不，不用了，${spname}……${me.actual_name}，陪我一会儿吧……`,
    );
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 发出了哽咽，并非平常那种若无其事的淡然。`,
    ]);
    await MF.say_and_wait(`……还记得我昨天说的准备好了吗。`);
    await MF.say_and_wait(
      `笑容，奔跑的执念，最开始的跑步技巧，运营神社的知识，姐姐教给我了许多。`,
    );
    await MF.say_and_wait(
      `倘若灵魂存在的话，把我自己的躯壳献给姐姐也不是什么不可以的事情！`,
    );
    await me.print_and_wait([
      `几乎是低吼着说出这番话的 `,
      MF.get_colored_name(),
      ` ，望着姐姐的黑白照片，三年来变得成熟了许多的侧脸几乎和照片中的马娘无异。`,
    ]);
    await MF.say_and_wait(
      `但是，姐姐肯定不会愿意，以及……训练员也不会愿意的吧。`,
    );
    await MF.say_and_wait(`……准备好，让姐姐离开了！`);
    await MF.say_and_wait(
      `但这并不是遗忘，而是告别……我，我准备好跑出属于自己的命运了！`,
    );
    await MF.say_and_wait(
      `我站在这里，训练员站在身旁看着我，就像是阳光洒在我的脸上……`,
    );
    await MF.say_and_wait(`姐姐，我现在很幸福呢……`);
    await me.print_and_wait(
      `阵风拂来，树叶的沙沙响声悠扬空灵，如同福来昨晚奏响的神乐......`,
    );
    await era.waitAnyKey();
    return true;
  } else if (edu_weeks === 101) {
    // 第二年 情人节
    await print_event_name(`圣瓦伦汀的局外人`, MF);
    await me.print_and_wait(
      `圣瓦伦汀之日的特雷森学院，一如既往的被微妙的桃色氛围所笼罩。`,
    );
    await me.print_and_wait(
      `空气如饱含汁水般甜蜜，充斥巧克力的甜腻味道与赛马娘们不自觉散发出的荷尔蒙味道。`,
    );
    await me.print_and_wait(
      `而情人节的主角自然是各位训练员了，这似乎成为了校内，乃至社会上的约定俗成。`,
    );
    era.printButton('「真是奇怪。」', 1);
    temp = await era.input();
    if (sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 2) {
      await me.print_and_wait([
        `今天一天品尝了不少担当送`,
        me.get_colored_name(),
        `的巧克力，也有可能是担当本身。`,
      ]);
      await me.print_and_wait([
        `然而 `,
        MF.get_colored_name(),
        ` 还是没有出现。`,
      ]);
    } else {
      await me.print_and_wait([
        `不过，`,
        me.get_colored_name(),
        `似乎是那个例外。`,
      ]);
      await me.print_and_wait([
        `今天一天没见到 `,
        MF.get_colored_name(),
        ` 。`,
      ]);
    }

    if (era.get('love:56') >= 75) {
      await me.print_and_wait([
        `一直等到了晚上，也没有收到任何来自 `,
        MF.get_colored_name(),
        ` 的消息。`,
      ]);
      await me.print_and_wait([
        `短信……没有消息，电话……也没有接通，`,
        me.get_colored_name(),
        `甚至询问了她的舍友，她并没有向舍友透露自己今天的行程。`,
      ]);
      await me.print_and_wait(`有些失落的回到了家中。`);
      era.set('flag:当前位置', location_enum.home);
      era.drawLine({ content: `${me.actual_name}的自宅` });
      await me.print_and_wait(
        `靠在沙发上，静看电子钟的数位屏显示的时间愈发逼近0点。`,
      );
      await me.print_and_wait([
        `有些失望……当`,
        me.get_colored_name(),
        `无意间扫过几件 `,
        MF.get_colored_name(),
        ` 送给`,
        me.get_colored_name(),
        `的开运物品时，`,
        me.get_colored_name(),
        `如此想着。`,
      ]);
      era.printButton('「聆听检定」', 1);
      temp = await era.input();

      let max = 90;
      let min = 65;
      era.println();
      let result = Math.floor(Math.random() * (max - min + 1)) + min;
      if (result > 60) {
        await me.print_and_wait(
          `出目:` + result + `/？？` + `\n `,
          me.get_colored_name(),
          ` 的聆听检定: 失败`,
        );
        await me.print_and_wait(`没听见什么，天气倒是让人昏昏欲睡。`);
      }
      await me.print_and_wait([
        `就当`,
        me.get_colored_name(),
        `要在沙发上沉沉睡去时，窗户那边似乎有插销声响起，而后……`,
      ]);
      await MF.say_and_wait(`呼啊！`);
      await me.print_and_wait(`眼前出现了一抹熟悉的栗色身影。`);
      await me.print_and_wait([
        `不知何时， `,
        MF.get_colored_name(),
        ` 出现在了`,
        me.get_colored_name(),
        `的面前，而更令`,
        me.get_colored_name(),
        `感到躁动的则是她糟糕的姿势。`,
      ]);
      await me.print_and_wait([
        `橘色头发的少女正骑在`,
        me.get_colored_name(),
        `的腰间，`,
        me.get_colored_name(),
        `能察觉到她被裙子遮住的臀部摩擦`,
        me.get_colored_name(),
        `裤子布料的声音。`,
      ]);
      await me.print_and_wait([
        `应该只是 `,
        MF.get_colored_name(),
        ` 一贯的无距离感行为吧？`,
      ]);
      await MF.say_and_wait(`训练员，情人节快乐！`);
      await me.print_and_wait(
        `声音带着剧烈运动之后特有的一丝疲倦，刚刚说出那番话的时也是气喘吁吁的，看来是一路跑过来的。`,
      );
      await me.print_and_wait(
        `而校服上，甚至于是她橘黄色的头发上也沾了不少的棕色污渍，从她身上那股浓郁的香气来看，应该在制作过程中不小心撒上去的巧克力。`,
      );
      await me.print_and_wait([
        `她从背后拿出了一个带着折皱的礼盒，放在了`,
        me.get_colored_name(),
        `的胸口上。`,
      ]);
      await MF.say_and_wait(`请看！`);
      await MF.say_and_wait(`这是我花了一天时间为你摘下来的星星哦！`);
      await me.print_and_wait(
        `打开了礼盒，里面是整整十二个象征着星座的巧克力，份量对于一个人来说无论如何都有些过多了。`,
      );
      era.printButton('「要我一个人吃完吗？」', 1);
      temp = await era.input();
      await MF.say_and_wait(`不行啦~这种东西就是要只吃自己的星座才会有趣啊！`);
      await MF.say_and_wait(`你看，我是双子座的。`);
      await MF.say_and_wait(`北河二和北河三加起来刚好是其他的两倍大呢！`);
      await MF.say_and_wait(`唔……果然，第一次做，份量把握的不太好……`);
      await MF.say_and_wait(`好在及时赶上了，差点就错过了今天的情人节呢！`);
      era.printButton('「辛苦了！」', 1);
      temp = await era.input();
      await MF.say_and_wait(`就是说啊……所以呢！`);
      await MF.say_and_wait(`那个~ 我想拜托你一件事情！`);
      await MF.say_and_wait(`如果你不介意的话，可以两个人一起吃它吗？`);
      await MF.say_and_wait(`就是……感情很好的各吃一半这样。`);
      await me.print_and_wait([
        `随着话语愈发向着不符合师生关系的情况发展， `,
        MF.get_colored_name(),
        ` 的面色也愈发的绯红起来。`,
      ]);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `看着那盒摊开放在`,
        me.get_colored_name(),
        `胸口的巧克力，一丝欲望自心底升起。`,
      ]);
      era.printButton('「想要奖励吗？」', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('（只是吃下巧克力）', 2);
      temp = await era.input();
      if (temp === 1) {
        await MF.say_and_wait(`欸！？`);
        await me.print_and_wait(`这么询问着，右手则捏住了她腰侧的软肉。`);
        await me.print_and_wait([
          `后知后觉的意识到了自己此时的姿势和所谓的骑乘位没什么两样，少女的面色更加的红润，尾巴有意无意地拍了几下`,
          me.get_colored_name(),
          `的腿。`,
        ]);
        await me.print_and_wait(`随后是细若蚊鸣的回应传来。`);
        await MF.say_and_wait(`……想`);
        era.printButton('「大点声哦！？」', 1);
        temp = await era.input();
        await MF.say_and_wait(`唔.....巧克力还没吃呢……`);
        await me.print_and_wait([
          `听到回答，`,
          me.get_colored_name(),
          `松开右手。`,
        ]);
        await me.print_and_wait(`啪！`);
        await MF.say_and_wait(`咿呀！`);
        await me.print_and_wait([
          ``,
          me.get_colored_name(),
          `的手指拢齐，并作成手掌，以不轻不重的力道，极快地在少女挺翘的臀部上打了一下。`,
        ]);
        await me.print_and_wait(`随着洁白臀肉的抖动，酥麻的快感传递开来。`);
        await me.print_and_wait([
          `接下来，趁着少女分神的瞬间，`,
          me.get_colored_name(),
          `伸出双手，和骑在自己身上的少女的双手相扣。`,
        ]);
        era.printButton('「那你喂我。」', 1);
        temp = await era.input();
        await MF.say_and_wait(`欸！可是……`);
        await me.print_and_wait([
          `少女柔若无骨的双手被`,
          me.get_colored_name(),
          `握着，自然是没有办法用手喂`,
          me.get_colored_name(),
          `的。`,
        ]);
        await MF.say_and_wait(`我明白了……`);
        await me.print_and_wait(`毕竟是占卜师，悟性自然是不差的。`);
        await me.print_and_wait(`她像一只可爱的小狗狗一样，缓缓的俯下身子。`);
        await me.print_and_wait([
          `衔起了一块巧克力，抿紧嘴唇轻轻的送到了`,
          me.get_colored_name(),
          `的嘴边。`,
        ]);
        await me.print_and_wait(`咔嚓。`);
        await me.print_and_wait(
          `巧克力被从中间分开，如先前所说的一样二人各吃一块。`,
        );
        await me.print_and_wait([
          `碎屑落在了`,
          me.get_colored_name(),
          `的身上，又被少女小心地用舌尖拭去。`,
        ]);
        await me.print_and_wait([
          ` `,
          MF.get_colored_name(),
          ` 的脸上布满了娇艳欲滴的绯红，有不少顺着纤细的脖颈蔓延，将挺拔的锁骨都涂满了颜色。`,
        ]);
        await me.print_and_wait([
          `本来处于半躺状态的`,
          me.get_colored_name(),
          `趁着少女对付巧克力的分神，坐了起来。`,
        ]);
        await MF.say_and_wait(`咕！`);
        await me.print_and_wait([
          `撬开了 `,
          MF.get_colored_name(),
          ` 的口腔，半融化的巧克力液随着舌头一起挺入她的口腔。`,
        ]);
        await MF.say_and_wait(`唔哈……`);
        await me.print_and_wait(
          `舌头在她的口腔中游走，将巧克力的味道和少女的唾液混合在一起，在搅动间发出浓稠的淫靡声响。`,
        );
        await MF.say_and_wait(`咕……`);
        await me.print_and_wait([
          `先是北河二，再是北河三，象征着 `,
          MF.get_colored_name(),
          ` 的两块巧克力就这样化作混着双方唾液的液体进入二人腹中。`,
        ]);
        await me.print_and_wait([
          `而身前已经在方才可可味的激吻中被`,
          me.get_colored_name(),
          `弄到有些失神的 `,
          MF.get_colored_name(),
          ` ，正满足地喘息着。`,
        ]);
        await me.print_and_wait(
          `时不时吐出来的小舌头上还粘着些许融化的巧克力，黑色与粉色互相交叠。`,
        );
        await MF.say_and_wait(`训练员……想要！`);
        await quick_into_sex(56);
      } else if (temp === 2) {
        await me.print_and_wait([
          `不能辜负 `,
          MF.get_colored_name(),
          ` 的好心。`,
        ]);
        await me.print_and_wait([
          ``,
          me.get_colored_name(),
          `认真的吃起了巧克力。`,
        ]);
        sys_change_attr_and_print(0, '体力', 300);
        sys_change_attr_and_print(56, '体力', 300);
      }
    } else if (era.get('love:56') < 75) {
      await me.print_and_wait([
        `直到晚上，接到了来自 `,
        MF.get_colored_name(),
        ` 的电话。`,
      ]);
      await MF.say_and_wait(`那个，能在学校附近的公园见一面吗？`);
      era.drawLine({ content: '公园' });
      await me.print_and_wait([
        `等了好一会儿，才看到从入口处匆忙跑过来的 `,
        MF.get_colored_name(),
        ` 。`,
      ]);
      await MF.say_and_wait(`啊！训练员，不好了！不好了！`);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `见着橘色头发的少女焦急的向`,
        me.get_colored_name(),
        `跑过来。`,
      ]);
      await me.print_and_wait(
        `校服上沾了不少的棕色污渍，细闻可以感受到她身上沾染着的浓郁巧克力香气。`,
      );
      era.printButton('「怎么了？」', 1);
      temp = await era.input();
      await MF.say_and_wait(`因为星星实在太多，星座们全都掉出来了呢！`);
      await MF.say_and_wait(`你看！`);
      await me.print_and_wait([
        `她把藏在背后的礼盒向`,
        me.get_colored_name(),
        `递上。`,
      ]);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `配合的露出了惊喜的表情。`,
      ]);
      era.printButton('(接过礼盒)', 1);
      temp = await era.input();
      await MF.say_and_wait(`开玩笑的啦！`);
      await MF.say_and_wait(`这是我费劲心思制作的十二星座巧克力。`);
      await MF.say_and_wait(`今天可是情人节啊！`);
      await MF.say_and_wait(`身为喜欢占卜的人，自然要认真的过节才行!`);
      await me.print_and_wait([
        `在她热切的目光下，`,
        me.get_colored_name(),
        `打开了礼盒。`,
      ]);
      await me.print_and_wait(
        `整整十二个象征着星座的巧克力，尽管做工有些粗糙，但少女的心意确实的蕴含在其中，除了份量对于一个人来说无论如何都有些过多了。`,
      );
      era.printButton('「要我一个人吃完吗？」', 1);
      temp = await era.input();
      await MF.say_and_wait(`不行啦~这种东西就是要只吃自己的星座才会有趣啊！`);
      await MF.say_and_wait(`你看，我是双子座的。`);
      await MF.say_and_wait(`北河二和北河三加起来刚好是其他的两倍大呢！`);
      await MF.say_and_wait(`唔……果然，第一次做，份量把握的不太好……`);
      await MF.say_and_wait(`好在及时赶上了，差点就错过了今天的情人节呢！`);
      era.printButton('「辛苦了！」', 1);
      temp = await era.input();
      await MF.say_and_wait(`就是说啊……所以呢！`);
      await MF.say_and_wait(`那个~ 我想拜托你一件事情！`);
      await MF.say_and_wait(`如果你不介意的话，可以两个人一起吃它吗？`);
      await me.print_and_wait(
        `指了指盒中看起来有些粗糙的手工巧克力，少女的脸颊有些若有若无的绯红。`,
      );
      await MF.say_and_wait(`就是……感情很好的各吃一半这样。`);
      await me.print_and_wait([
        `似乎是无自觉的说出了似乎有些不符合师生关系的发言， `,
        MF.get_colored_name(),
        ` 双手合十的看着`,
        me.get_colored_name(),
        `。`,
      ]);
      era.printButton('(点头)', 1);
      temp = await era.input();
      await me.print_and_wait([
        `之后和 `,
        MF.get_colored_name(),
        ` 一起食用了巧克力，`,
      ]);
      sys_change_attr_and_print(0, '体力', 300);
      sys_change_attr_and_print(56, '体力', 300);
      await MF.say_and_wait(`呼啊！比想象中还要甜呢！`);
      await MF.say_and_wait(`训练员，祝你情人节快乐！`);
    }

    era.set('cflag:56:节日事件标记', 0);
    await era.waitAnyKey();

    return true;
  } else if (edu_weeks === 109) {
    //粉丝感谢祭

    await print_event_name(`背负众人愿望的少女`, MF);
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 在先前采访上的糟糕表现，引来了不少媒体的抨击。`,
    ]);
    await MF.say_and_wait(`唔啊！训练员。真的没有问题吗？`);
    await MF.say_and_wait(`那个，我记得那些报纸上都说我……`);
    await me.say_and_wait([
      `…… `,
      MF.get_colored_name(),
      ` 的表现实在让人看不下去……`,
    ]);
    await me.say_and_wait([`……缺乏运动员的骄傲与回应粉丝的精神……`]);
    await me.say_and_wait([`……并不热爱比赛……`]);
    await MF.say_and_wait(`啊！没必要说出来吧！`);
    await MF.say_and_wait(`不过……算了，毕竟我就是那样没错。`);
    await MF.say_and_wait(`真的，很刺耳……刺耳到感觉耳朵快掉下来了。`);
    await MF.say_and_wait(`怕是我一上场，就会吃到鸡蛋雨吧……`);
    era.printButton('「好了，该上场了！」', 1);
    temp = await era.input();
    era.printButton('「相信我，不会有问题的！」', 1);
    temp = await era.input();
    await me.print_and_wait([
      ``,
      me.get_colored_name(),
      `在先前的调查中发现，社交媒体上， `,
      MF.get_colored_name(),
      ` 的粉丝们并没有因为她在采访上的表现而放弃她。`,
    ]);
    await me.print_and_wait([
      `反而是在她的粉丝群中，有一些人在`,
      me.get_colored_name(),
      `的引导下，开始为她的参赛资格投票。`,
    ]);
    await MF.say_and_wait(`唔！如果训练员你这么说的话……`);
    await MF.say_and_wait(
      `总之！如果我在粉丝的骂声中去往了天国，我的水晶球就交给你了！`,
    );
    await me.print_and_wait([
      `带着几分踏上刑场的悲壮， `,
      MF.get_colored_name(),
      ` 向前走去。`,
    ]);
    era.drawLine({ content: '一段时间后' });
    await me.print_and_wait([
      ` `,
      MF.get_colored_name(),
      ` 正站在饰以URA徽记的采访背景墙前。`,
    ]);
    await me.print_and_wait([
      `女主持人:「 `,
      MF.get_colored_name(),
      ` 小姐，你愿意告诉我们你春季的目标吗 ?」`,
    ]);
    await MF.say_and_wait(`咕啊！上来就问这种问题吗？`);
    await me.print_and_wait([
      `虽然早就预料到了 `,
      MF.get_colored_name(),
      ` 会有这样的反应，`,
      me.get_colored_name(),
      `还是无奈地扶了扶额。`,
    ]);
    await me.print_and_wait([
      `从先前自己私下调查的情况来看， `,
      MF.get_colored_name(),
      ` 的粉丝并没有因为她在采访上的表现而放弃她。`,
    ]);
    era.printButton('「你就说给他们听吧。」', 1);
    temp = await era.input();
    await me.print_and_wait([
      `将手放在少女的肩膀上，稍稍用力将还在不断抗拒的她推到了主持人的话筒前。`,
    ]);
    await MF.say_and_wait(`唔！确定嘛……好吧。`);
    await MF.say_and_wait(`各位，本人在这个春季的目标！`);
    await MF.say_and_wait(`与其说是目标，不如说是梦想吧——！`);
    await MF.say_and_wait(`是参加宝冢纪念！`);
    await me.print_and_wait([
      `似乎是自己都没察觉到会这么顺利的说出来， `,
      MF.get_colored_name(),
      ` 的脸上先是惊讶，而后如等待审判般的低了下头。`,
    ]);
    await MF.say_and_wait(`咦？`);
    era.printButton('（鼓掌）', 1);
    temp = await era.input();
    await me.print_and_wait(`台下响起了一阵掌声。`);
    await MF.say_and_wait(`鼓掌？为什么呢？`);
    await me.print_and_wait(`粉丝A:「加油啊！待兼福来！」`);
    await me.print_and_wait(`粉丝B:「我会去帮你投票的！一定要出赛啊！」`);
    await MF.say_and_wait(`大家是怎么了？明明那次的采访那么糟糕…… `);
    await me.print_and_wait(
      `粉丝A:「啊！实在是太惨了呢，不过这就是待兼福来呀。」`,
    );
    await me.print_and_wait(
      `粉丝B:「人偶尔也是会迷惘的嘛，该说会有种亲切感吗？」`,
    );
    await MF.say_and_wait(`亲切感……所以大家还没有放弃我吗？`);
    await me.print_and_wait(
      `粉丝C:「才不会放弃你呢！在菊花赏上的表现那么拼命，真是令人难忘！」`,
    );
    await me.print_and_wait(`粉丝D:「是啊！宝冢纪念一定要加油啊！」`);
    await MF.say_and_wait(`是的……是的……!`);
    await MF.say_and_wait(`我会再挑战一次看看的！`);
    await me.print_and_wait([
      `就算遭到了神明的舍弃，也会被粉丝们捡回来，在投票结果公布后，`,
      MF.get_colored_name(),
      ` 勉强获得了宝冢纪念的参赛资格。`,
    ]);
    era.set('cflag:56:节日事件标记', 0);
    FUKU.fans_thank++;

    era.printMultiColumns([
      {
        content: [` `, MF.get_colored_name(), `  失去了运势依赖。`],
        type: 'text',
      },
    ]);

    era.set('status:56:运势依赖', 0);
    era.set('status:56:大吉', 0);
    era.set('status:56:中吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:凶', 0);
    await era.waitAnyKey();
    return true;
  } else if (cele_check === 39) {
    // 通用万圣节
    await print_event_name(`万圣节`, MF);
    await me.print_and_wait(
      `万圣节的夜晚，特雷森学院连同周围的商店街一起被装饰成了万圣节应有的样子。`,
    );
    await me.print_and_wait(
      `在巨大蝙蝠挂饰和南瓜头的阴影下，各位赛马娘们也像是粉丝感谢祭那样摆起了摊。`,
    );
    await MF.say_and_wait(`啊！是训练员！`);
    await MF.say_and_wait(`HAPPY HALLOWEEN！`);
    await me.print_and_wait([
      `处于`,
      me.get_colored_name(),
      `担当的占卜小屋内，看着坐在占卜桌后面的 `,
      MF.get_colored_name(),
      ` 穿着一身为万圣节特意准备的装束。`,
    ]);
    await me.print_and_wait(
      `以纯黑为主色调的修女服，用白色作为点缀，朴素又透着十足的纯洁感。`,
    );
    await me.print_and_wait(
      `而鲜明的橘发与星星瞳则恰到好处的抵消了庄重服饰带来的压抑，反倒是若有若无的透露出一丝狐狸般魅惑的气调。`,
    );
    await MF.say_and_wait(`啊啦啦啦！`);
    await MF.say_and_wait(`很少见吧！`);
    await MF.say_and_wait(
      `本来还想把这里的装扮也弄的和告解室一样的，可惜没有时间了！`,
    );
    era.printButton('「这身装扮很适合你呢。」', 1);
    await era.input();
    await MF.say_and_wait(`嗯！应该都是神职人员的缘故吧！`);
    await MF.say_and_wait(`那么！训练员，有什么想对小福忏悔的吗？`);
    await me.print_and_wait([
      `做了一个双手相握的动作，修女十字架般的双瞳盯着`,
      me.get_colored_name(),
      `。`,
    ]);
    era.printButton('（发糖）', 1);
    era.printButton(`（亲吻待兼福来）`, 2, {
      disabled: era.get('love:56') < 50,
    });
    let temp = 0;
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait([
        `把事先准备好的糖果递给了 `,
        MF.get_colored_name(),
        ` 之后，在修女的祈祷声中回去了。`,
      ]);
    } else if (temp === 2) {
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `的身体稍稍前倾，心领神会的 `,
        MF.get_colored_name(),
        ` 也随之把椅子往前搬了一点。`,
      ]);
      await MF.say_and_wait(`嗯，咕呜！`);
      await me.print_and_wait([
        `两人的舌头交缠在一起，担当的舌尖在`,
        me.get_colored_name(),
        `口中游走，带着万圣节不同糖果的味道。`,
      ]);
      await MF.say_and_wait(`哈!`);
      await me.print_and_wait(`唾液拉成的丝线落在修女服上。`);
      await MF.say_and_wait(`.....训练员。`);
      await MF.say_and_wait(`呜……有些太大胆了呢。`);
    }
    era.set('cflag:56:节日事件标记', 0);
    await era.waitAnyKey();
    return true;
  } else if (edu_weeks === 143) {
    //圣诞节 差分，分为有马纪念胜利与未胜利。
    races = era.get('cflag:56:育成成绩');
    if (FUKU.begin_race_end < 10) {
      await print_event_name(`摘下胜利之星`, MF);
      era.drawLine({ content: `${me.actual_name}的办公室` });
      await me.print_and_wait(
        `距离有马纪念只剩下几天，不过在那之前，率先到来的是同样是一年一度的圣诞节。`,
      );
      await me.print_and_wait(
        `圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。`,
      );
      await me.print_and_wait([
        `还在研究着有马纪念战术的`,
        me.get_colored_name(),
        `听见窗户传来声响。`,
      ]);
      await MF.say_and_wait(`嘿！`);
      await me.print_and_wait([
        `循着声音的方向看了过去。`,
        me.get_colored_name(),
        `那令人不省心的担当正背着一个大布袋，正尝试通过窗户挤进屋内。`,
      ]);
      await me.print_and_wait(
        `那包不知道是什么的东西突然被狭窄的窗户卡住，直到在马娘的怪力下逐渐变形。`,
      );
      await MF.say_and_wait(`哎呀！`);
      await me.print_and_wait(
        `随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。`,
      );
      await me.print_and_wait(`本来平淡无奇的办公室转瞬充满了圣诞节的气息。`);
      await MF.say_and_wait(`当当！待兼圣诞来！`);
      await MF.say_and_wait(`训练员有没有觉得很惊喜呢？`);
      era.printButton('「没事吧?」', 1);
      temp = await era.input();
      await MF.say_and_wait(`欸！没事的！`);
      await MF.say_and_wait(`哦，对了对了，有个东西要给训练员呢！`);
      await me.print_and_wait([
        `在洒在地上的物品中一阵翻找后， `,
        MF.get_colored_name(),
        ` 拿起了一个包装意外精美的盒子。`,
      ]);
      await MF.say_and_wait(`锵锵！——盒子里装的是，树龄千年的圣诞树！`);
      await MF.say_and_wait(`虽然不过是迷你模型而已了。`);
      await me.print_and_wait(
        `可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。`,
      );
      await MF.say_and_wait(`欸！怎么会！`);
      await MF.say_and_wait(
        `呼……如果这样的话，就只能麻烦训练员陪我出门一趟了。`,
      );
      era.drawLine({ content: `特雷森校园 天台` });
      await me.print_and_wait([
        `来到了和 `,
        MF.get_colored_name(),
        ` 常去的天台，冬季的寒风吹着`,
        me.get_colored_name(),
        `有些发抖，不过她却是一点都不在意。`,
      ]);
      await MF.say_and_wait(`好了！训练员，请把手中的圣诞树对着天空举起来吧！`);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。`,
      ]);
      await MF.say_and_wait(`你看！这样是不是就像是装满了天上的星星呢！`);
      await MF.say_and_wait(`好浪漫喔！`);
      era.printButton('「比较想要实体的星星。」', 1);
      temp = await era.input();
      await MF.say_and_wait(`欸！天上的星星也不行吗？`);
      await me.print_and_wait(`在听到这句话的同时，橘发的少女顿时低下了头。`);
      era.printButton('「用有马纪念的胜利之星来装饰吧！」', 1);
      temp = await era.input();
      await MF.say_and_wait(`喔！有马纪念！`);
      await MF.say_and_wait(`呜哇！原来还有这招，我甘拜下风！`);
      era.printButton('「那就这么说定了？」', 1);
      temp = await era.input();
      await MF.say_and_wait(`嗯！……是，是的……我什么都答应。！`);
      await MF.say_and_wait(`那个，今天的训练员真的好有魄力啊！`);
      await MF.say_and_wait(`该说让人看着就心跳加速吗……`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。`,
      ]);
      await me.print_and_wait([
        `不过眼看着有马纪念就要到了，`,
        me.get_colored_name(),
        `还是压下了自己逐渐膨胀的欲望。`,
      ]);
      await me.print_and_wait([
        `还没有星星可以装在圣诞树的顶端 , 和 `,
        MF.get_colored_name(),
        ` 一起去拿下最后的星星吧。`,
      ]);
      await me.print_and_wait(`要是有马纪念之后再来庆祝圣诞节或许会比较好吧。`);
      //  era.set('cflag:56:节日事件标记', 0);
      //
    } else if (
      FUKU.begin_race_end === 10 &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      // 差分，分为有马纪念未进行

      await print_event_name(`名叫待兼福来的星星`, MF);
      era.drawLine({ content: `${me.actual_name}的办公室` });
      await me.print_and_wait([
        `有马纪念结束了，不过在和 `,
        MF.get_colored_name(),
        ` 的契约结束之前，率先到来的是同样是一年一度的圣诞节。`,
      ]);
      await me.print_and_wait(
        `圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。`,
      );
      await me.print_and_wait([
        `还在办公室忙碌着年终报告的`,
        me.get_colored_name(),
        `听见窗户传来声响。`,
      ]);
      await MF.say_and_wait(`嘿！`);
      await me.print_and_wait([
        `循着声音的方向看了过去， `,
        MF.get_colored_name(),
        ` 正背着一个大布袋，正尝试通过窗户挤进屋内。`,
      ]);
      await me.print_and_wait(
        `那包不知道是什么的东西被狭窄的窗户卡住，直到在马娘的怪力下逐渐变形。 `,
      );
      await MF.say_and_wait(`哎呀！`);
      await me.print_and_wait(
        `随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。`,
      );
      await me.print_and_wait(`本来平淡无奇的办公室转瞬充满了圣诞节的气息。`);
      await MF.say_and_wait(`当当！待兼圣诞来！`);
      await MF.say_and_wait(`训练员有没有觉得很惊喜呢？`);
      era.printButton('「没事吧?」', 1);
      temp = await era.input();
      await MF.say_and_wait(`欸！没事的！`);
      await MF.say_and_wait(`哦，对了对了，有个东西要给训练员呢！`);
      await me.print_and_wait([
        `在洒在地上的物品中一阵翻找后， `,
        MF.get_colored_name(),
        ` 拿起了一个包装意外精美的盒子。`,
      ]);
      await MF.say_and_wait(`锵锵！——盒子里装的是，树龄千年的圣诞树！`);
      await MF.say_and_wait(`虽然不过是迷你模型而已了。`);
      await me.print_and_wait(
        `可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。`,
      );
      await MF.say_and_wait(`欸！怎么会！`);
      await MF.say_and_wait(
        `呼……如果这样的话，就只能麻烦训练员陪我出门一趟了。`,
      );
      era.drawLine({ content: `特雷森校园 天台` });
      await me.print_and_wait([
        `来到了和 `,
        MF.get_colored_name(),
        ` 常去的天台，冬季的寒风吹着`,
        me.get_colored_name(),
        `有些发抖，不过 `,
        MF.get_colored_name(),
        ` 却是一点都不在意。`,
      ]);
      await MF.say_and_wait(`好了！训练员，请把手中的圣诞树对着天空举起来吧！`);
      await me.print_and_wait([
        ``,
        me.get_colored_name(),
        `照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。`,
      ]);
      await MF.say_and_wait(`你看！这样是不是就像是装满了天上的星星呢！`);
      await MF.say_and_wait(`好浪漫喔！`);
      if (era.get('love:56') < 75) {
        await me.print_and_wait([
          `庆祝一阵后，和 `,
          MF.get_colored_name(),
          ` 回去了。`,
        ]);
        era.set('cflag:56:节日事件标记', 0);
        return true;
      }

      era.printButton('「比较想要实体的星星。」', 1);
      temp = await era.input();
      await MF.say_and_wait(`欸！天上的星星也不行吗？`);
      await me.print_and_wait(`在听到这句话的同时，橘发的少女顿时低下了头。`);
      era.printButton(`「比如……名叫待兼福来的星星就不错呢！」`, 1);
      temp = await era.input();
      await MF.say_and_wait(`欸！我吗？`);
      await me.print_and_wait([
        `被叫到名字少女转过头来看着`,
        me.get_colored_name(),
        `，十字星状的瞳孔中闪烁着北极星般的明亮光芒。`,
      ]);
      await MF.say_and_wait(`呜哇！原来还有这招，我甘拜下风！`);
      await MF.say_and_wait(`那个，今天的训练员真的好有魄力啊！`);
      await MF.say_and_wait(`该说让人看着就心跳加速吗……`);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。`,
      ]);
      await me.print_and_wait([
        `下意识的伸出手，只是搭在 `,
        MF.get_colored_name(),
        ` 的身上，对她的身体早就知根知底的`,
        me.get_colored_name(),
        `便发现了她即使是对马娘而言也有些略高的体温。`,
      ]);
      await me.print_and_wait(`先是隔着校服抚摸着肩膀。 `);
      await MF.say_and_wait(`……欸。`);
      await MF.say_and_wait(`训练员先生！`);
      await me.print_and_wait([
        `顺势滑下后轻捏两下乳房,  `,
        MF.get_colored_name(),
        ` 便配合的发出了一声轻微的呻吟。`,
      ]);
      await MF.say_and_wait(`呜……`);
      await MF.say_and_wait(`那里很敏感的……`, true);
      await me.print_and_wait([
        `继续往下，指腹划过腰间，明明隔着冬季的厚重校服， `,
        MF.get_colored_name(),
        ` 却像是被电到了般颤抖起来。`,
      ]);
      await MF.say_and_wait(`…….哈。`);
      await MF.say_and_wait(`好久没有被命定之人这样触摸了啊……`, true);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 的吐息变得更加湿润而荡漾。`,
      ]);
      await me.print_and_wait([
        `眼前,清秀的面颊完全被赤色红潮浸染，双眼眸光流转、泪水盈盈的福来对`,
        me.get_colored_name(),
        `投来了期待的目光。`,
      ]);
      await MF.say_and_wait(`好想要……`, true);
      era.printButton('（一言不发的回去）', 1);
      era.printButton('（抱起待兼福来）', 2);
      temp = await era.input();

      if (temp === 1) {
        await me.print_and_wait([
          `没有理会不知道在期待着什么的 `,
          MF.get_colored_name(),
          ` ，`,
          me.get_colored_name(),
          `转身离开了天台。`,
        ]);
        era.set('cflag:56:节日事件标记', 0);
        return true;
      }

      begin_and_init_ero(0, 56);
      era.set('status:56:短效避孕药', 1);
      await me.print_and_wait([
        `为了应对有马纪念， `,
        MF.get_colored_name(),
        ` 与`,
        me.get_colored_name(),
        `早就禁欲了许久。`,
      ]);
      await me.print_and_wait(
        `而如果用一场酣畅淋漓的性爱来作为奖励的话，或许是个不错的选择。`,
      );
      await MF.say_and_wait(`欸啊！`);
      await me.print_and_wait([
        `用公主抱的姿势把双腿发软的 `,
        MF.get_colored_name(),
        ` 抱在怀中, 福来纤细的藕臂搂住了`,
        me.get_colored_name(),
        `的脖子。`,
      ]);
      await MF.say_and_wait(`训练员的气味……`, true);
      await MF.say_and_wait(`好热……`, true);
      await me.print_and_wait([
        `不过只是走到天台入口的路程， `,
        MF.get_colored_name(),
        ` 便按捺不住的把脸埋在`,
        me.get_colored_name(),
        `的胸口，交叠在一起的双腿越来越过分的摩擦着，直到裙下的糟糕气味传入`,
        me.get_colored_name(),
        `的鼻腔。`,
      ]);
      era.printButton(`（抱起待兼福来）`, 1);
      temp = await era.input();
      await MF.say_and_wait(`嗯……`, true);
      await me.print_and_wait([
        `明明没有开口，不过`,
        me.get_colored_name(),
        `还是看出了怀中担当的意愿。`,
      ]);
      await me.print_and_wait(`关上了通向天台的大门，将寒风阻拦在外。`);
      await me.print_and_wait(`楼梯口的空间并不算大。`);
      await me.print_and_wait([
        `让怀中的 `,
        MF.get_colored_name(),
        ` 背对着`,
        me.get_colored_name(),
        `扶着内侧的水泥墙壁，把她的校服裙子拉起，露出内裤。`,
      ]);
      await MF.say_and_wait(`唔，这个姿势，完全看不见训练员……`, true);
      await me.print_and_wait(
        `那片布料湿的仿佛能滴下水来，已经快在在双腿不断的交替摩擦间拧成了一股线。`,
      );
      era.printButton('分开双腿', 1);
      temp = await era.input();
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 听话的执行了的命令，双腿大大的分开，在伸手拉下内裤的时候，小穴与分离的布料拉起粘稠的丝线。`,
      ]);
      await me.print_and_wait(
        `而后手指伸入，柔软的嫩肉无法对其形成一分一毫的抵抗。`,
      );
      await MF.say_and_wait(`哈……哈啊`);
      await me.print_and_wait([
        `开始还小心翼翼的，直到在 `,
        MF.get_colored_name(),
        ` 愈发过分的呻吟声下，让剩下的半根手指毫不怜惜的一起进入。`,
      ]);
      await MF.say_and_wait(`唔呜？！`);
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await me.print_and_wait([
        `剥开包皮，玩弄起肿胀的阴蒂，莫大的快感从 `,
        MF.get_colored_name(),
        ` 的尾椎末侧升起，电流沿着脊背流向全身`,
      ]);
      await MF.say_and_wait(`咦呀呀呀呀呀呀！`);
      await me.print_and_wait(
        `象征着高潮的水流也随之涌出,洒在天台入口处的水泥地上。`,
      );
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          56,
          MF.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await await me.print_and_wait([
        `被掀起的冬季校服短裙半掩着的雪臀，在 `,
        MF.get_colored_name(),
        ` 的痉挛下不断的颤动着。`,
      ]);
      era.printButton('伸手', 1);
      temp = await era.input();
      await MF.say_and_wait(`咿呀！`);
      await me.print_and_wait([
        `首先是揉搓，而后，在 `,
        MF.get_colored_name(),
        ` 愈发可爱的呻吟声下，变成了对待无机物般下手不知轻重的揉捏，肆意地变幻出淫荡的形状。`,
      ]);
      await me.print_and_wait(
        `象征着高潮的水流也随之涌出,洒在天台入口处的水泥地上。`,
      );
      await MF.say_and_wait(`训练员……`);
      await me.print_and_wait([
        `在 `,
        MF.get_colored_name(),
        ` 的催促下，是时候进入正戏了。`,
      ]);
      await me.print_and_wait(`脱下裤子，露出了已经勃起的阴茎。`);
      await MF.say_and_wait(`嗯……`);
      await me.print_and_wait([
        `似乎是察觉到了逐渐逼近的火热，饥渴的小穴一开一合的对`,
        me.get_colored_name(),
        `的阴茎发出了邀请。`,
      ]);
      await me.print_and_wait(`然后，粗大的肉棒长驱直入。`);
      await me.print_and_wait(`小穴内的爱液和穴内的空气一起被无情的挤出。`);
      await me.print_and_wait(
        `属于成年男性级别的肉棒霸占了穴内所有的空间，在少女的私密地带横行霸道。`,
      );
      await MF.say_and_wait(`小穴一缩一缩的，包裹着训练员的肉棒。`, true);
      await me.print_and_wait(`砰！`);
      await me.print_and_wait([
        `沉闷的撞击声从 `,
        MF.get_colored_name(),
        ` 的小穴深部传来`,
      ]);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 本想大声的叫出来，却又在`,
        me.get_colored_name(),
        `的示意下，把声音压了下去。`,
      ]);
      await MF.say_and_wait(`连自己小穴“啧啧”的淫靡吮吸声都能听见。`, true);
      await me.print_and_wait([
        `尽管这么想着， `,
        MF.get_colored_name(),
        ` 双腿还是愈发的分开，让站立后入的体位更加的标准。`,
      ]);
      await me.print_and_wait(
        `环状的粉红穴肉在肉棒的冲击下，如同被采蜜的花朵般随风抽搐荡漾着。`,
      );
      await MF.say_and_wait(`这么激烈的话，要，要去了啊~~~`, true);
      await MF.say_and_wait(`去了去了啊！！！`);
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await me.print_and_wait([
        `将脱力的爱人翻了一个面，水泥墙壁的冰凉刺激让 `,
        MF.get_colored_name(),
        ` 失神的星星瞳重新对焦。`,
      ]);
      await me.print_and_wait([
        `这次是对面立位，`,
        me.get_colored_name(),
        `得以欣赏着平日里元气的马娘在性爱中的表情。`,
      ]);
      await MF.say_and_wait(`砰~砰~`);
      await me.print_and_wait(`淫靡的交合声回响在天台楼梯口的狭小空间内。`);
      await MF.say_and_wait(`太激烈！太激烈了！`, true);
      await MF.say_and_wait(`要，要去了啊~`);
      await me.print_and_wait(`压抑着的娇媚声音终于泄了出来。`);
      await me.print_and_wait([
        `话是这么说，可橙色的尾巴却如同有自我意识般缠在了`,
        me.get_colored_name(),
        `的腿，配合着纠缠地越发紧密的小穴，背叛般的告诉了主人此刻接近高潮的状态。`,
      ]);
      await MF.say_and_wait(`要去了啊！！！)`);
      era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
      era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await me.print_and_wait(`稍稍前倾，龟头径直抵着子宫口倾吐起精液。`);
      await me.print_and_wait(`从小穴和肉棒交合处漏出了点点白浊。`);
      era.add('exp:56:阴道高潮次数', 3);
      era.add('exp:0:阴茎高潮次数', 3);
      era.add('exp:0:射精量', 60);
      await MF.print_and_wait(`之后又持续了多久呢？`);
      await MF.print_and_wait(
        `不过我第二天醒来的时候, 发现自己睡在了训练员家里的床上。`,
      );
      end_ero_and_train();
      era.set('cflag:56:节日事件标记', 0);
    }

    return true;
  } else if (cele_check === 29) {
    let temp = 0;
    await print_event_name('庙会', MF);
    await me.print_and_wait([
      `今天和 `,
      MF.get_colored_name(),
      ` 参加了夏季合宿时的庙会。`,
    ]);
    await me.print_and_wait([
      `身着淡绿色浴衣的 `,
      MF.get_colored_name(),
      ` 正走在`,
      me.get_colored_name(),
      `的前面，宽大但并不算厚重的浴衣给元气的她添了不少优雅的气息。`,
    ]);
    await me.print_and_wait([
      `露着洁白脚背的木屐，随着 `,
      MF.get_colored_name(),
      ` 的轻块步伐发出清脆的声音。`,
    ]);
    await me.print_and_wait([
      `少女带着妩媚的微笑看着`,
      me.get_colored_name(),
      `，侧着身子，本就优美的臀股曲线更加的突出。`,
    ]);
    await MF.say_and_wait(`怎么样！训练员！`);
    era.printButton(`（搂住待兼福来的腰）`, 1, {
      disabled: era.get('love:56') < 75,
    });
    era.printButton('（喜欢）', 2);
    temp = await era.input();
    if (temp === 1) {
      await me.print_and_wait([
        `伸手搭在了 `,
        MF.get_colored_name(),
        ` 的腰上，少女的身体些微颤抖。`,
      ]);
      await me.print_and_wait([
        `橙色的马尾反倒是自觉的竖起，像是拥抱恋人般系在`,
        me.get_colored_name(),
        `的手臂上。`,
      ]);
      await MF.say_and_wait(`欸！`);
      await me.print_and_wait(
        `而后，抬手在她结实又圆润的臀部上轻拍了一下，少女配合的发出了可爱的叫声。`,
      );
      await MF.say_and_wait(`咿！`);
      await me.print_and_wait(
        `顺着臀沟向里慢慢移动，探入她的双腿之间，隔着内裤挑逗般地反复触碰着她的敏感部位。`,
      );
      await MF.say_and_wait(`周围……周围有人……咿呀！`);
      await me.print_and_wait(`想要出声制止，却又因为下身的刺激说不出话。`);
      await me.print_and_wait([
        `只得更加的依靠在`,
        me.get_colored_name(),
        `的怀里，寄希望于周围的人以为她和训练员只是有些过于紧密的情侣罢了。`,
      ]);
      await MF.say_and_wait(`唔！`);
      await me.print_and_wait([
        `伴随着故意压低的轻呼，湿热黏腻的感觉自`,
        me.get_colored_name(),
        `的指尖的布料处传来。`,
      ]);
      await me.print_and_wait([
        ` `,
        MF.get_colored_name(),
        ` 已经完全瘫在了`,
        me.get_colored_name(),
        `的怀里，双腿微微颤抖着，那瞳孔里的星星也覆上一层水雾。`,
      ]);
      await MF.say_and_wait(`训练员……可以的……`);
      await me.print_and_wait([
        `抱着 `,
        MF.get_colored_name(),
        ` ，`,
        me.get_colored_name(),
        `踏入了一旁无人的树林。`,
      ]);
      await quick_into_sex(56);
    } else if (temp === 2) {
      await me.print_and_wait([
        `得到`,
        me.get_colored_name(),
        `夸奖之后的少女，连着转了好几个圈，惹得不少人向你们投来目光。`,
      ]);
      await me.print_and_wait([
        `就算穿着如此精致典雅的衣服，她还是那个会一惊一乍的 `,
        MF.get_colored_name(),
        ` 没错。`,
      ]);
      await era.waitAnyKey();
    }

    era.set('cflag:3:节日事件标记', 0);
    return true;
  }
  //TODO:第一年以及通用的情人节事件，不一定会写
  else {
    throw new Error();
  }
};
/**
 * 待兼福来的日常事件，id=56
 *
 * @author Alex
 */
module.exports = {
  /**
   * @param {HookArg} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(hook, extra_flag, event_object) {
    if (
      (event_object && hook.hook !== event_hooks.week_start) ||
      !handlers[hook.hook]
    ) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[hook.hook](hook, extra_flag));
  },
};
