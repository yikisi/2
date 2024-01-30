const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');

const print_ero_page = require('#/page/page-ero');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_border } = require('#/data/ero/orgasm-const');
const GoldShipEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-7');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

const color_7 = require('#/data/chara-colors')[7];

/** @type {Record<string,function(HookArg,*,EventObject):Promise<*>>} */
const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-7/week-start');

/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  const gold_ship = get_chara_talk(7);
  era.print([gold_ship.get_colored_name(), ' 的训练顺利结束了！']);
  era.println();
  if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
    await era.waitAnyKey();
    await print_event_name(
      [{ color: color_7[1], content: '额外的自主训练' }],
      gold_ship,
    );

    await era.printAndWait(`今天，与 ${gold_ship.name} 的训练总算结束了。`);
    era.println();

    await gold_ship.say_and_wait('辛苦了——！拜拜，拜拜！');
    era.println();

    await era.printAndWait(
      `${gold_ship.name} 伸了个懒腰便小跑着离开——然后又跑了回来。`,
    );
    era.println();

    await gold_ship.say_and_wait('好嘞，来追加训练！我现在嗨得不行啊！');
    await gold_ship.say_and_wait(
      `${sys_get_callname(
        7,
        0,
      )}你该不会不知道什么叫追加训练吧？大雄消息真不灵通啊——`,
    );
    await gold_ship.say_and_wait(
      '追加训练就是追加训练的简称啦——是遍布全宇宙一千万人的阿船圈中特别流行的玩意！',
    );
    await gold_ship.say_and_wait(
      '身为我的训练员，你应该更深入研究一下这个的说。',
    );

    era.printButton('「那我们可不能跟不上潮流呢。」', 1);
    era.printButton('「不对，现在的流行是CD（Cool Down）！」', 2);
    hook.arg = (await era.input()) === 1;
    if (hook.arg) {
      await gold_ship.say_and_wait(
        `好！很有精神！${era.get('callname:7:0')} 队员，随我来——！`,
      );
      era.println();
      await era.printAndWait('你们在夕阳下也一直奔跑着。');
    } else {
      await gold_ship.say_and_wait(
        'CD……？那啥玩意，很火的？在训练员圈里很火……？',
      );
      await gold_ship.say_and_wait('CD就是冷却的意思吗……嘿！那不简单吗！');
      await gold_ship.say_and_wait(
        '边吃着刨冰边CD就好了！简称『Cool Down CD』！',
      );
      era.println();
      await era.printAndWait('于是你们好好地休息了一番。');
    }
    era.println();
  }
};

handlers[event_hooks.school_atrium] = async (
  hook,
  extra_flag,
  event_object,
) => {
  if (era.get('flag:当前互动角色') !== 7) {
    add_event(hook.hook, event_object);
    return;
  }
  const gold_ship = get_chara_talk(7),
    me = get_chara_talk(0),
    event_marks = new GoldShipEventMarks(),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:7:育成回合计时');
  if (edu_weeks === 47 + 3) {
    await print_event_name(
      [{ color: color_7[1], content: '母亲比神还要强编' }],
      gold_ship,
    );

    const chara_45 = get_chara_talk(45);

    await era.printAndWait('？？？「沉睡于海底的黄金之船……」', {
      color: color_7[1],
    });
    await era.printAndWait('？？？「如今正是觉醒的时候……」', {
      color: color_7[1],
    });
    await era.printAndWait('？？？「发挥你的力量到达前无古人的境界吧……」', {
      color: color_7[1],
    });
    era.println();

    await gold_ship.say_and_wait('……嗯？刚才那是什么声音……？');
    era.println();

    era.printButton('「终于开始幻听了？」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '我听到了自称神的声音，还是说那是小金船我体内的第二人格？',
    );
    era.println();
    era.printButton('「我给你预约一下心理专家好了……」', 1);
    await era.input();

    await gold_ship.say_and_wait('不是啦，那家伙要我去什么『伊甸园』来着……');
    era.println();

    await era.printAndWait(
      `经典三冠首战的皋月赏就快到了，还是不要想布丁吧……但 ${gold_ship.name} 还是自顾自地一溜烟冲出去寻找那个所谓的『伊甸园』了。`,
    );
    era.println();

    await gold_ship.say_and_wait('I AM GODSHIP（我是神金船）——！');
    era.println();

    await era.printAndWait(
      `${me.name} 只能发挥自己在室内变向过弯的速度勉强跟在 ${
        gold_ship.name
      } 身后一段距离——然后${
        gold_ship.sex
      }一头撞到了另一位${gold_ship.get_uma_sex_title()}身上，又被跟随在后的 ${
        me.name
      } 夹到了中间。`,
    );
    era.println();

    await gold_ship.say_and_wait('我……我看到……金星……金星上有公园……');
    await gold_ship.say_and_wait('不对，你是谁！竟然能承受我神金船的冲击……！');
    await chara_45.say_and_wait(
      `哎呀哎啊，你好，${gold_ship.name} 同学。今天也很精神呢。！`,
    );
    era.println();

    await era.printAndWait(
      `竟然能承受如此巨大的冲击力，实在是奶……不对，实在是耐性超群的${chara_45.get_uma_sex_title()}！`,
    );
    era.println();

    era.printButton('「看来，哪怕是神也敌不过妈妈啊……」', 1);
    await era.input();

    await era.printAndWait(
      `${me.name} 在向 ${chara_45.name} 致歉后，把昏头转向的 ${gold_ship.name} 拖回了训练室。`,
    );
    era.println();

    get_attr_and_print_in_event(7, new Array(5).fill(3), 45) &&
      (await era.waitAnyKey());
  } else if (edu_weeks === 95 + 41) {
    const festa = get_chara_talk(49);
    await print_event_name(
      [{ color: color_7[1], content: '认真对决编' }],
      gold_ship,
    );

    await era.printAndWait(`引导 ${me.name} 与黄金船前往伊甸园的神秘人物……`);
    era.println();

    await era.printAndWait(
      '那个人应该是为了让黄金船鼓起出赛干劲才如此大费周章吧。不管怎么样，只要能转换成黄金船的原动力……那就是三赢的局面呢。',
    );
    era.println();

    era.printButton('（所以这些家伙又在干什么啊……）', 1);
    await era.input();

    await era.printAndWait(
      `${
        me.name
      } 的眼前站着两个栩栩如生的${gold_ship.get_uma_sex_title()}雕像……但与其说是栩栩如生，不如说就是本人。`,
    );
    era.println();

    await gold_ship.say_and_wait('……');
    await festa.say_and_wait('……');
    era.println();

    await era.printAndWait(
      '二人伫立在人来人往的中庭，虽然一动不动，不过反而甚是显眼。',
    );
    era.println();

    await festa.say_and_wait('……');
    await gold_ship.say_and_wait('……');
    era.println();

    await era.printAndWait(
      `也许是又在进行什么莫名其妙的对决了吧，什么不能动挑战之类的。这时候，${me.name} 想到了有趣的事情。`,
    );
    era.println();

    era.printButton('「呜哇，老大不小了还在玩木头人啊。」', 1);
    await era.input();

    await gold_ship.say_and_wait('……');
    await festa.say_and_wait('……！');
    era.println();

    era.printButton('「对了，要不要趁这个机会做点恶作剧呢～？」', 1);
    await era.input();

    await festa.say_and_wait('……呣！');
    await gold_ship.say_and_wait('……');
    era.println();

    era.printButton('「哎唷，那不是旅程同学吗！」', 1);
    if (
      era.get('cflag:49:招募状态') === recruit_flags.yes &&
      era.get('love:49') >= 50
    ) {
      era.printButton('爱抚二人腰间敏感的地方。', 2);
    }
    const ret = await era.input();

    if (ret === 1) {
      await festa.say_and_wait('妈的，被看到了吗？！……你骗我！');
      await gold_ship.say_and_wait('好，是我赢了！！');
      await festa.say_and_wait(
        '靠！可恶的黄金船！你行！下次就在我擅长的领域堂堂正正地打倒你！',
      );
      await gold_ship.say_and_wait('哈！那我就在终点旁边等着你了！');
    } else {
      await festa.say_and_wait('……你♡！');
      await gold_ship.say_and_wait('……♡');
      era.println();

      await era.printAndWait(
        `${me.name} 刻意的抚摸弄得二人心里焦躁万分，渐趋激烈的呼吸以及香唇里吐出的些许娇声，随着 ${me.name} 的双手逐渐往禁区推进而变得更加急促，胜负的结果已经不再重要了……`,
      );

      era.set(
        'cflag:49:性欲',
        Math.max(era.get('cflag:49:性欲'), lust_border.want_sex),
      );
      begin_and_init_ero(0, 7, 49);
      await print_ero_page(7);
      end_ero_and_train();
    }

    get_attr_and_print_in_event(7, [0, 0, 0, 5, 0], 0) &&
      (await era.waitAnyKey());
  } else if (event_marks.heroine_red === 1) {
    event_marks.heroine_red++;
    await print_event_name(
      [{ color: color_7[1], content: '主角的红色！' }],
      gold_ship,
    );

    await era.printAndWait(`某天，${me.name} 走在中庭，看到——`);
    await era.printAndWait(`身穿决胜服的 ${gold_ship.name}。`);
    era.println();

    await gold_ship.say_and_wait(
      `啊，你不是 ${me.actual_name} 吗。今天也要精神地用鳃呼吸哦。`,
    );
    era.printButton('「……比起那个，你为啥穿着决胜服？」', 1);
    await era.input();
    await gold_ship.say_and_wait('这个是为了获得红色的主角之力。');
    await gold_ship.say_and_wait(
      '你那什么表情啊？仔细想想吧，小时候看的战队英雄、热血漫画的主角都是一身红色的对吧？',
    );
    await gold_ship.say_and_wait(
      '穿红色的家伙就是主角，而且一定会获得最后的胜利！',
    );
    era.println();

    await era.printAndWait(
      `虽然有所偏差，但 ${gold_ship.name} 说得倒没错……但要不要借这个机会教育教育一下呢？`,
    );
    era.printButton('「世界上也有很多种红色。」', 1);
    era.printButton('「要贯彻自己的信念！」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await gold_ship.say_and_wait('你说世上也有香艳的红色和反派的红色？！');
      await gold_ship.say_and_wait('这样啊，原来是我小瞧了红色的力量……');
      await gold_ship.say_and_wait(
        '我从一开始，就已经获得了能担当主角，也能担当反派的力量了！',
      );
      await gold_ship.say_and_wait('而且……还附带香艳属性魅力没法挡哦♥');
      era.println();

      await era.printAndWait(
        `${gold_ship.name} 留下魅惑的眼神，兴奋地离开了。`,
      );
      era.println();

      get_attr_and_print_in_event(7, [0, 0, 0, 0, 20], 0) &&
        (await era.waitAnyKey());
    } else {
      await gold_ship.say_and_wait(
        `说得对啊！老${gold_ship.sex_code - 1 ? '娘' : '子'}，参上！`,
      );
      era.println();

      await era.printAndWait(`${gold_ship.name} 活力四射地离开了。`);
      era.println();

      get_attr_and_print_in_event(7, [0, 0, 0, 20, 0], 0) &&
        (await era.waitAnyKey());
    }
  } else if (event_marks.sudden_look_back === 1) {
    event_marks.sudden_look_back++;
    await print_event_name(
      [{ color: color_7[1], content: '阿船的突然追忆过去篇！' }],
      gold_ship,
    );

    await era.printAndWait(
      `饿了。想来食堂里的拉面似乎备受好评的样子，${me.name} 便决定前往特雷森食堂治一治腹中饥饿。`,
    );
    era.println();

    await era.printAndWait(
      `在途中，${me.name} 远远看去便认出了在中庭坐着的黄金船。阳光自摇曳的枝叶间洒落到沉默的美人身上，熠熠生辉。`,
    );
    era.println();

    await gold_ship.say_and_wait(`啊，是 ${me.actual_name}。`);
    era.println();

    era.printButton('你在这干嘛啊？不吃饭吗？', 1);
    await era.input();

    await era.printAndWait('怎么说呢，我在回忆往事。');
    await gold_ship.say_and_wait(
      '很久以前的一个风雪夜，幼小的我为了给家中的螺丝工厂补贴生意，于是独自在街上卖金属球棒……',
    );
    era.println();

    era.printButton('倒是打螺丝啊。', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '不过，在中途我就被彻骨的冷风冻得不成人形，都已经冷得哭出来了。',
    );
    await gold_ship.say_and_wait(
      `然后……一位改变我命运的${gold_ship.get_uma_sex_title()}出现了。`,
    );
    await gold_ship.say_and_wait(
      `${gold_ship.sex}来到我的面前，向我递出了一碗温暖的拉面汤底泡饭。`,
    );
    era.println();

    era.printButton('你要不要听听看你现在到底在讲什么？', 1);
    await era.input();

    await gold_ship.say_and_wait(
      `${
        gold_ship.sex
      }是这么对我说的：『我虽然也是${gold_ship.get_uma_sex_title()}，但不擅长跑步，于是现在开了一家拉面店，你也要记得自由地选择人生的目标哦。』`,
    );
    await gold_ship.say_and_wait(
      `那个${gold_ship.get_uma_sex_title()}对我说的话让我意识到了，原来我是可以不继承老家的螺丝工厂的！`,
    );
    era.println();

    await era.printAndWait(
      '不为他人所左右，坚决走出自己的道路……这一点确实十分的黄金船啊。',
    );
    era.println();

    era.printButton('「试着重现当时的汤头吧？」', 1);
    era.printButton('「到当时的地方再看看吧？」', 2);
    const ret = await era.input();

    if (ret === 1) {
      await gold_ship.say_and_wait('重现汤底……我做得到吗？');
      await gold_ship.say_and_wait(
        '……哼，历经锻炼后的我怎么会做不到呢？我还记得那个放了一堆大蒜的味道！',
      );
      await gold_ship.say_and_wait(`随我来！`);
      era.println();

      await era.printAndWait(
        `${me.name} 被黄金船带到了食堂厨房，二人在众目睽睽下抢占一角研究起来拉面汤底。`,
      );
      era.println();

      await gold_ship.say_and_wait(
        '好！完成了！全是大蒜的拉面！我们一起试味吧！',
      );
      era.println();

      era.printButton('「辣死人啦————！！大蒜放太多了根本不能吃！」', 1);
      await era.input();

      await era.printAndWait(
        `${me.name} 与黄金船事后检讨，认为当天之所以能顺利咽下那么重口味的汤泡饭是因为天气寒冷的极端案例。`,
      );
    } else {
      await gold_ship.say_and_wait('当时的地方……没错了！我记得是在河堤边！');
      await gold_ship.say_and_wait('假如一切如常的话，那个拉面摊子应该还在！');
      era.println();

      await era.printAndWait(
        `${me.name} 被黄金船带到河堤寻找神秘的拉面摊子，一直到了晚上都颗粒无收……`,
      );
    }
    era.println();

    await era.printAndWait(
      `之后的某天，${me.name} 在训练员室一直待到了晚上。身为黄金船的训练员，为${gold_ship.sex}管理粉丝信件也是自己的要务。${me.name} 机械式地翻开了其中一张信件，上头写着一些意味深长的话……`,
    );
    era.println();

    await era.printAndWait(
      '？？？「看来你确实有自由自在地选择自己的道路嘛，我也会一直守望着你的哦。」',
    );
    era.println();

    era.printButton('这封信，就给阿船看看吧……', 1);
    await era.input();

    await era.printAndWait(
      `信件上只有这些句子，上款下款从缺。但 ${me.name} 不禁想到了黄金船关于那个充满了大蒜味的，寒冬故事。`,
    );
    era.println();

    if (ret === 1) {
      // TODO 技能 『天赋异禀（切れ者）』
      get_attr_and_print_in_event(7, [0, 10, 0, 0, 10], 0) &&
        (await era.waitAnyKey());
    } else {
      // TODO 技能『天赋异禀（切れ者）』
      get_attr_and_print_in_event(7, [20, 0, 0, 0, 0], 0) &&
        (await era.waitAnyKey());
    }
  }
  return true;
};

handlers[event_hooks.out_start] = async (hook, extra_flag, event_object) => {
  if (era.get('flag:当前互动角色') !== 7) {
    add_event(hook.hook, event_object);
    return;
  }
  const gold_ship = get_chara_talk(7),
    me = get_chara_talk(0);
  await print_event_name(
    [{ color: color_7[1], content: '阿船流约会' }],
    gold_ship,
  );

  await era.printAndWait(
    `某天，${me.name} 与 ${gold_ship.name} 偶然在校门附近碰个正着——`,
  );
  era.println();

  await gold_ship.say_and_wait('嘎！气死我嘞！');
  await gold_ship.say_and_wait(
    `${sys_get_callname(7, 0)}，佐敦那家伙竟然说我不懂怎么约会啊啊啊！`,
  );
  await gold_ship.say_and_wait(
    `你反正也闲着没事吧？！现在跟老${
      gold_ship.sex_code - 1 ? '娘' : '子'
    }去约会啦！`,
  );
  era.println();

  await era.printAndWait(`结果被${gold_ship.sex}强行拉到大街上约会去了……`);
  await era.printAndWait(
    '经过一天的胡闹后，你们二人来到归程的公园里稍事休息。',
  );
  era.println();

  await gold_ship.say_and_wait('呼～我也有点累了。之后要干嘛好？');
  era.printButton('「我去买饮料吧。」', 1);
  era.printButton('「延长赛！比到我赢为止！。」', 2);
  const ret = await era.input();
  if (ret === 1) {
    await era.printAndWait(
      `${me.name} 为 ${gold_ship.sex} 买了饮料，然后两人一起慢慢地走回宿舍去了。`,
    );
    era.println();

    get_attr_and_print_in_event(7, [0, 20, 0, 0, 0], 0) &&
      (await era.waitAnyKey());
  } else {
    await era.printAndWait(
      `${me.name} 与 ${gold_ship.name} 的奇妙游戏还在继续……`,
    );
    era.println();

    get_attr_and_print_in_event(7, [0, 0, 20, 0, 0], 0) &&
      (await era.waitAnyKey());
  }
  return true;
};

handlers[event_hooks.school_rooftop] = async (
  hook,
  extra_flag,
  event_object,
) => {
  if (era.get('flag:当前互动角色') !== 7) {
    add_event(hook.hook, event_object);
    return;
  }
  const gold_ship = get_chara_talk(7),
    festa = get_chara_talk(49),
    me = get_chara_talk(0);
  await print_event_name(
    [{ color: color_7[1], content: '来认真一决胜负！' }],
    gold_ship,
  );
  await era.printAndWait(
    `${me.name} 与 ${gold_ship.name} 一起在天台享受着小休……这段时间本来应该就这样毫无波澜地度过的——但 ${me.name} 看到了 ${festa.name}。`,
  );
  era.println();

  await festa.say_and_wait('……哟，你们今天心情也挺好的嘛。');
  await gold_ship.say_and_wait(`${era.get('callname:7:49')}……！！`);
  era.println();

  await era.printAndWait(
    `刹那间！你们的血液冻结了！是 ${festa.name} 身上那股赌徒的气势，让那 ${gold_ship.name} 都被压倒了吔……！！`,
  );
  era.println();

  await festa.say_and_wait(
    '哼哼……不要露出这种表情嘛，你们这样会让我很想马上来对决一把的。',
  );
  await gold_ship.say_and_wait('对决……？！');

  era.printButton('「庆典，你在说什么……！」', 1);
  await era.input();

  await festa.say_and_wait('当然是……');
  era.println();
  era.printButton('「限定猜拳……！」', 1);
  era.printButton('「皇帝牌……！」', 2);
  if (
    era.get('cflag:49:招募状态') === recruit_flags.yes &&
    era.get('love:49') >= 50
  ) {
    era.printButton('「……性爱♡」', 3);
  }
  let ret = await era.input();
  if (ret === 3) {
    await era.printAndWait(
      `${me.name} 与黄金船被突如其来的做爱邀请惊呆在原地，但中山庆典眼中的欲火说明她已经迫不及待了……`,
    );
    era.println();
    await festa.say_and_wait(
      '我说，光是想像就已经让我下面都濡湿了……快来跟我决胜负吧♡♡♡',
    );
    era.set(
      'cflag:49:性欲',
      Math.max(era.get('cflag:49:性欲'), lust_border.want_sex),
    );
    begin_and_init_ero(0, 7, 49);
    await print_ero_page(49);
    end_ero_and_train();
  } else {
    await era.printAndWait(
      ret === 1
        ? '限定猜拳……！！使用卡牌以猜拳的方式夺取对手生命的可怕游戏……稍有不慎就会落入深渊！！'
        : '皇帝牌……！！使用卡牌以比大小的方式来决定生死的可怕游戏……稍有不慎就会落入深渊！！',
    );
    era.println();
    await era.printAndWait(
      `糟糕……以${
        era.get('cflag:7:性别') - 1 && era.get('cflag:49:性别') - 1
          ? '她'
          : '他'
      }们的性格，等搞定之后午饭都要凉透了！怎么办，该阻止吗……？！`,
    );
    era.printButton('「不，就由我来顶上吧！」', 1);
    era.printButton('「加油啊……！」', 2);
    ret = await era.input();
    if (ret === 1) {
      await festa.say_and_wait('什么？没想到你竟然还挺勇的嘛……有趣！');
      await festa.say_and_wait('好！今天我就陪你玩玩！');
      await gold_ship.say_and_wait('喂喂不是吧？！就我一个被排挤了？！');
      era.println();

      await era.printAndWait(`${me.name} 使出了浑身解数，总算绝处逢生……`);
      await era.printAndWait('但午休还是在不知不觉间过去了！');
      era.println();

      get_attr_and_print_in_event(
        7,
        undefined,
        0,
        JSON.parse('{"体力":100}'),
      ) && (await era.waitAnyKey());
    } else {
      if (Math.random() < 0.5) {
        await era.printAndWait(
          `${gold_ship.name} 使出了浑身解数，总算绝处逢生……`,
        );
        await era.printAndWait('但午休还是在不知不觉间过去了！');
        era.println();

        get_attr_and_print_in_event(7, undefined, 60) &&
          (await era.waitAnyKey());
        // TODO 获得技能『非根干距离〇』
      } else {
        await era.printAndWait(
          `${gold_ship.name} 使出了浑身解数，但还是没赢过 ${festa.name}……`,
        );
        await era.printAndWait('而且午休还是在不知不觉间过去了！');
        era.println();

        get_attr_and_print_in_event(7, undefined, 15) &&
          (await era.waitAnyKey());
        era.set('status:7:摸鱼', 1);
      }
    }
  }
  return true;
};

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-7/race-end');

handlers[event_hooks.out_church] = async (hook, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 7) {
    add_event(hook.hook, event_object);
    return;
  }
  const gold_ship = get_chara_talk(7),
    me = get_chara_talk(0);
  await print_event_name(
    [{ color: color_7[1], content: '新年参拜' }],
    gold_ship,
  );

  await gold_ship.say_and_wait('阿训——！我又来啦！');
  await gold_ship.say_and_wait('怎么样？！怎么样怎么样怎么样？！');
  era.println();

  await era.printAndWait(
    `出乎意料地，${gold_ship.name} 并没有穿着普通的学校制服，而是一袭黑色的时尚衣裳。`,
  );
  era.println();

  await gold_ship.say_and_wait('这是本船我亲自设计、亲自缝制的登台服装哦！');
  await gold_ship.say_and_wait('目标可是在巴黎时装周上走秀呢！');
  era.println();

  era.printButton('「要说美不美，确实美……」', 1);
  await era.input();

  await era.printAndWait(
    `${gold_ship.sex}嘿嘿笑着，挽住了 ${me.name} 的手臂，丰满的乳房随之压在 ${me.name} 上。`,
  );
  era.println();

  await gold_ship.say_and_wait('那～明天我们就穿着盛装华服去神社过年吧！');
  era.println();

  era.printButton('「……咦？我也要穿吗？」', 1);
  await era.input();

  await era.printAndWait(
    `隔天，${me.name} 被强行套上了豪华的武士铠甲，与穿着西洋贵妇风的黄金船在当地的神社一起被好奇的群众团团围住了。`,
  );
  era.println();

  await era.printAndWait(
    `与 ${gold_ship.name} 一起度过的第二年新年也让人完全不省心。`,
  );
  era.println();
  let wait_flag = sys_like_chara(7, 0, 10);
  sys_change_pressure(7, -2500);
  wait_flag = sys_change_motivation(7, 1) || wait_flag;
  wait_flag && (await era.waitAnyKey());
  era.set('cflag:7:节日事件标记', 0);
  return true;
};

/**
 * 黄金船的育成事件
 *
 * @author 雞雞
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
