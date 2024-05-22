const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const NNEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-60');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

const handlers = {};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.week_start] = async (hook, _, event_object) => {
  const chara_talk = get_chara_talk(60),
    edu_weeks = era.get('cflag:60:育成回合计时');
  if (edu_weeks === 47 + 1 || edu_weeks === 95 + 1) {
    await print_event_name('新年', chara_talk);
    await chara_talk.say_and_wait(
      `${era.get('callname:60:0')}，不写点新年题词吗？`,
    );
    await era.printAndWait('优秀素质一边说着，一边递来毛笔和纸。');
    await era.printAndWait(
      '新年题词——即使将自己对新一年的期待和祝福寄托与纸上，因此，要写的是——',
    );
    era.printButton('「健康」', 1);
    era.printButton('「变强」', 2);
    era.printButton('「多才」', 3);
    if (era.get('love:60') >= 75) {
      era.printButton('「多子」', 4);
    }
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        `健康啊……看来 ${era.get(
          'callname:60:0',
        )} 也到这个年纪了呢腰酸背痛什么的很烦人对吧？${era.get(
          'callname:60:60',
        )} 懂的——`,
      );
      await chara_talk.say_and_wait(
        `嗯？不是写给自己的？那是……？诶？！我？不、那个……${era.get(
          'callname:60:0',
        )}，比起自己更关注我啊……呜！说这种话就太犯规了！${era.get(
          'callname:60:0',
        )} 也是我也是，都要快快乐乐的度过这新的一年啊！`,
      );
      const to_print = sys_change_attr_and_print(60, '体力', 300);
      if (to_print) {
        era.println();
        await era.printAndWait([
          chara_talk.get_colored_name(),
          ' 的 ',
          ...to_print,
        ]);
      }
    } else if (ret === 2) {
      await chara_talk.say_and_wait(
        `变强啊～${era.get(
          'callname:60:0',
        )}，意外的热血呢？还是说心理年龄比看上去的要……哈哈哈，开个玩笑……`,
      );
      await chara_talk.say_and_wait(
        `嗯？不是写给自己的？那是……？诶？！我？不、那个……${era.get(
          'callname:60:0',
        )}，比起自己更关注我啊……呜！说这种话就太犯规了！${era.get(
          'callname:60:0',
        )} 也是我也是，都要快快乐乐的度过这新的一年啊！`,
      );
      era.println();
      get_attr_and_print_in_event(60, new Array(5).fill(10), 0);
      await era.waitAnyKey();
    } else if (ret === 4) {
      await chara_talk.say_and_wait(
        `多、多子么？${era.get(
          'callname:60:0',
        )} 也真是的，一大早就开始说这么大胆的话题……不过要是 ${era.get(
          'callname:60:0',
        )} 想的话……我也可以哦？要不然……就从现在开始吧？`,
      );
      await era.printAndWait(
        '面色绯红的优秀素质一步步向身前靠近，看来一场大战在所难免……',
      );
      await quick_into_sex(60);
    } else {
      await chara_talk.say_and_wait(
        `多才吗？确实呢，有更多才能的人也更会招${chara_talk.get_child_sex_title()}子喜欢对吧，${era.get(
          'callname:60:0',
        )} 也到这个年龄了呢，也是时候该考虑考虑自己的${
          chara_talk.sex
        }了……虽然这话由我说挺奇怪呢，哈哈哈哈……`,
      );
      await chara_talk.say_and_wait(
        `嗯？不是写给自己的？那是……？诶？！我？不、那个……${era.get(
          'callname:60:0',
        )}，比起自己更关注我啊……呜！说这种话就太犯规了！${era.get(
          'callname:60:0',
        )} 也是我也是，都要快快乐乐的度过这新的一年啊！`,
      );
      era.println();
      get_attr_and_print_in_event(60, undefined, 70);
      await era.waitAnyKey();
    }
    era.set('cflag:60:节日事件标记', 0);
  } else if (edu_weeks === 47 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:60:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('夏季合宿', chara_talk);
    await era.printAndWait(
      '从今天开始「夏季集训」──为了提升实力的强化训练即将展开。',
    );
    await chara_talk.say_and_wait('好热……');
    await chara_talk.say_and_wait(
      '太阳公公真是有精神。对于活在阴影里的我来说太过耀眼了……',
    );
    await chara_talk.say_and_wait(
      '害我瞬间就开始担心自己能不能平安撑到最后了。',
    );
    era.printButton('「还得参加「小仓纪念」，非加油不可啊」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '不是啦，问题就在这啊。竟然要在集训中途去比赛，行程也太丰富了。',
    );
    await chara_talk.say_and_wait(
      '这里离小仓又那么远，交通时间会让训练量减少……',
    );
    await chara_talk.say_and_wait(
      '我会被原本就远在天边的那些选手们狠狠甩开的──',
    );
    era.printButton('「那我们一路冲刺到小仓吧！」', 1);
    await era.input();
    await chara_talk.say_and_wait(
      '啊，不错耶不错耶！跑过去还可以当作训练，一石二鸟。',
    );
    await chara_talk.say_and_wait(
      '反正再远也不过1000公里左右吧？好的好的，轻轻松松──',
    );
    await chara_talk.say_and_wait('哪有可能这样说啊──不要突然出馊主意啊。');
    await chara_talk.say_and_wait('我看你这个训练员其实很期待吧……');
    await era.printAndWait(
      `于是${get_chara_talk(0).name}与优秀素质的热血夏季集训就这么开始了。`,
    );
    await chara_talk.say_and_wait('啊，还请适度热血就好，那麻烦多指教咯──');
    era.println();
    get_attr_and_print_in_event(
      60,
      new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 10 : 0)),
      30,
    );
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:60:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('夏季合宿', chara_talk);
    await era.printAndWait(
      '又到了集训的季节。优秀素质不同于去年，展现了积极的态度。',
    );
    await era.printAndWait(
      '为了迎接「天皇赏（秋）」……以及之后即将挑战的「有马纪念」──',
    );
    await chara_talk.say_and_wait('天皇赏秋么……');
    await era.printAndWait(`${chara_talk.sex}开始了正视自己的热血夏天！`);
    era.println();
    get_attr_and_print_in_event(
      60,
      new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 5 : 0)),
      0,
    );
    await era.waitAnyKey();
  } else if (edu_weeks === 47 + 48 || edu_weeks === 95 + 48) {
    era.println();
    sys_like_chara(60, 0, 50) && (await era.waitAnyKey());
  } else {
    throw new Error('unsupported');
  }
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.week_end] = async (hook, _, event_object) => {
  const chara_talk = get_chara_talk(60),
    edu_weeks = era.get('cflag:60:育成回合计时');
  if (edu_weeks === 47 + 32 || edu_weeks === 95 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:60:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('夏季集训结束', chara_talk);

    await era.printAndWait(
      '今天是夏日合宿的最后一天。作为留念，学园组织了一场盛大的烟火表演',
    );
    await era.printAndWait(
      '和优秀素质一起，肩并肩站在海滩上，看着一朵朵烟花在海面上绽放',
    );
    await chara_talk.say_and_wait(
      `——夏天，结束了呢。怎么说呢，真是青春啊——但我又不是那种形象就是了。不过，${era.get(
        'callname:60:0',
      )}——`,
    );
    await era.printAndWait(
      `身旁的优秀素质感叹着，但烟花的爆破声让${chara_talk.sex}的声音听着模糊不清。`,
    );
    await era.printAndWait(
      `尝试着追问${chara_talk.sex}最后的话语，但却被优秀素质微微的一笑一笔带过。`,
    );
    await era.printAndWait('与优秀素质的夏日合宿，就这样结束了。');
    era.println();
    sys_like_chara(60, 0, 50) && (await era.waitAnyKey());
  }
};

handlers[
  event_hooks.school_atrium
] = require('#/event/edu/edu-events-60/school-atrium');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.out_start] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 60) {
    add_event(hook.hook, event_object);
    return;
  }
  const chara_talk = get_chara_talk(60),
    edu_weeks = era.get('cflag:60:育成回合计时'),
    me = get_chara_talk(0);
  if (edu_weeks === 95 + 10) {
    const mcqueen_talk = get_chara_talk(13);
    const ryan_talk = get_chara_talk(27);
    await print_event_name('内恰 in 目白', chara_talk);

    await era.printAndWait('今天优秀素质不会出现。因为──');
    await era.printAndWait(
      '「有马纪念」后，优秀素质向目白麦昆与目白莱恩请教了实力如此坚强的原因。',
    );
    await era.printAndWait(
      `今天${chara_talk.sex}受到两位邀请，去学习坚强的原因了。──或许可以说是去目白家留学一天吧。`,
    );
    await era.printAndWait(
      `优秀素质个性很认真。${chara_talk.sex}一定会带着收获回来吧。${me.name} 这么相信着，决定默默等${chara_talk.sex}回来──`,
    );
    era.drawLine();
    await mcqueen_talk.say_and_wait(
      '──刚刚那杯大吉岭茶果然连香味都不一样。滋味相当丰富。',
    );
    await ryan_talk.say_and_wait(
      '据说从头到尾都是手工制茶呢！专家的技术果然值得信任。',
    );
    await chara_talk.say_and_wait('……请问──这是什么状况？为什么在喝茶？');
    await chara_talk.say_and_wait('我还以为我们会去训练赛道……');
    await mcqueen_talk.say_and_wait(
      '喝完后当然会去。不过品尝红茶也是例行公事的一部分。',
    );
    await chara_talk.say_and_wait('例行公事……？');
    await mcqueen_talk.say_and_wait('今天我们想让内恰同学看看我们平常的样子。');
    await ryan_talk.say_and_wait(
      '就是这样！不过时间也差不多了，我们去训练吧！',
    );
    await chara_talk.say_and_wait('啊，好、好的……！');
    era.drawLine();
    await mcqueen_talk.say_and_wait('呼……呼……呼……');
    await ryan_talk.say_and_wait('欢迎回来，麦昆！接下来要做什么？');
    await mcqueen_talk.say_and_wait('……当然是再跑一圈了。');
    await mcqueen_talk.say_and_wait(
      '跟刚刚比起来，第十圈的速度有点变慢了……对吧？',
    );
    await ryan_talk.say_and_wait('啊哈哈！好啊，就跑到你满意为止吧！');
    await mcqueen_talk.say_and_wait('是，我出发了！');
    await chara_talk.say_and_wait('呼……呼……呼啊……！');
    await ryan_talk.say_and_wait('哦，内恰，欢迎回来！麦昆正好刚起跑呢！');
    await chara_talk.say_and_wait(
      `我看到了……${mcqueen_talk.sex}还要继续跑吗……！？`,
    );
    await ryan_talk.say_and_wait(
      `与其说还要，应该说是还不满足？毕竟${mcqueen_talk.sex}说『想提升速度』嘛`,
    );
    await chara_talk.say_and_wait(
      `${mcqueen_talk.sex}的持久力明明都那么优秀了，竟然还想更加精进吗……`,
    );
    await ryan_talk.say_and_wait(
      `……我想麦昆${mcqueen_talk.sex}啊，无论再怎么强，都不会满足于目前的自己。`,
    );
    await ryan_talk.say_and_wait(
      `那孩子的目标就是如此高远。所以${mcqueen_talk.sex}才会一直努力不懈。`,
    );
    await ryan_talk.say_and_wait('一直看着那样的身影，会觉得自己也该加油呢。');
    await chara_talk.say_and_wait('……唔～～～～我也再去跑……！');
    await ryan_talk.say_and_wait('啊哈哈哈！真是不服输！路上小心哦──！');
    era.drawLine();
    await chara_talk.say_and_wait('──今天非常感谢两位！');
    await ryan_talk.say_and_wait('哎呀──结果害你这一整天都在陪我们训练了呢。');
    await chara_talk.say_and_wait('不，这样正好！');
    await chara_talk.say_and_wait('……我终于明白了。我过去真的都只想着自己呢──');
    await chara_talk.say_and_wait(
      '你们两位都好好地看着对方。互相认可对方的强劲，互相竞争。',
    );
    await chara_talk.say_and_wait('但是我……却只会妄想获得别人的那份坚强。');
    await chara_talk.say_and_wait(
      '我老是只看着自己不足的地方……从没想过自己有哪些才能。',
    );
    await mcqueen_talk.say_and_wait('……所以？');
    await chara_talk.say_and_wait(
      '我打算更认真地正视这些事。正视其他人……也正视自己。',
    );
    await ryan_talk.say_and_wait('嗯，很好！这一定会成为内恰变强的助力！');
    await chara_talk.say_and_wait('那个……最后可以再请教一件事吗？');
    await chara_talk.say_and_wait('为什么两位愿意帮我的忙呢？');
    await mcqueen_talk.say_and_wait('……因为我们有贵族义务啊。');
    await ryan_talk.say_and_wait('噗哈！你在掩饰害羞吗？');
    await ryan_talk.say_and_wait(
      '真正的原因呢，是想跟坚强的你对决，好让自己变得更强！',
    );
    await ryan_talk.say_and_wait(
      '──因为我们也打算参加下一次的『宝冢纪念』嘛！',
    );
    await chara_talk.say_and_wait('……唔！');
    await mcqueen_talk.say_and_wait(
      '呵呵，表情很棒呢。那么下次就在阪神再见啦。',
    );
    await chara_talk.say_and_wait('嗯……！');
    era.drawLine();
    await era.printAndWait(
      `隔天 ${me.name} 见到优秀素质时，${chara_talk.sex}脸上的表情看起来神清气爽。`,
    );
    await chara_talk.say_and_wait('我……想赢过那两人。──在『宝冢纪念』上！');
    era.println();
    get_attr_and_print_in_event(60, [0, 5, 0, 5, 0], 0);
    await era.waitAnyKey();
    return true;
  }
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.out_shopping] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 60) {
    add_event(hook.hook, event_object);
    return;
  }
  const nature = get_chara_talk(60),
    event_marks = new NNEduMarks(),
    me = get_chara_talk(0);
  if (event_marks.hard_work_trainer === 1) {
    event_marks.hard_work_trainer++;
    await print_event_name(
      `${era.get('callname:60:60')} 与辛苦的训练员`,
      nature,
    );

    await era.printAndWait('连续好几天行程满满的工作终于告一段落……');
    await era.printAndWait(
      `${me.name} 想买点美味的食物来犒赏自己，拖着沉重的身体前往商店街时──`,
    );
    await nature.say_and_wait('不好意思，那位训练员，请稍等一下！');
    era.printButton('「内恰……？」', 1);
    await era.input();
    await nature.say_and_wait(
      '唉──我是有听说你工作很忙啦，但没想到你埋头苦干到累成这样啊。',
    );
    await nature.say_and_wait(
      `真拿你没办法，让 ${era.get(
        'callname:60:60',
      )} 招待你一顿吧。快点，过来这里。`,
    );
    await nature.say_and_wait(
      '现在还在开店准备中，不会有客人来。你就坐在最里面的卡拉OK桌吧。',
    );
    await nature.say_and_wait(
      `这间店的老板娘我认识。跟她说明缘由后，她说可以借我用。`,
    );
    await era.printAndWait(`优秀素质带 ${me.name} 来到某间店的角落`);
    await nature.say_and_wait(
      `那么，${era.get(
        'callname:60:0',
      )} 想点些什么呢？什么都可以点哦？只要是我能做的的话`,
    );
    era.println();
    era.printButton('「随便什么都行，我好饿……」', 1);
    if (era.get('love:60') >= 75) {
      era.printButton('「内恰……」', 2);
    }
    let ret = await era.input();
    if (ret === 1) {
      await nature.say_and_wait(
        '真是的……你等一下，我简单煮点东西。……虽然我不保证味道啦。',
      );
      await era.printAndWait(
        `几分钟后，优秀素质端了${nature.sex}做的炒饭来给 ${me.name}。`,
      );
      era.printButton('「量这么多，没问题吗？」', 1);
      await era.input();
      await nature.say_and_wait('反正老板娘也跟我说『尽情招待他吧』了嘛。');
      await nature.say_and_wait('来吧来吧，趁热快点吃吧。');
      await era.printAndWait(
        `端上来的炒饭外观跟味道都很有模有样，好吃到让 ${me.name} 的筷子……不，是让 ${me.name} 的汤匙停不下来。`,
      );
      await nature.say_and_wait(
        '你太夸张了啦。我只是从小就帮妈妈的忙，所以才会煮啦。',
      );
      await nature.say_and_wait('……呃，你吃得好快！已经吃完了吗！？');
      era.printButton('「因为很好吃，不知不觉就吃完了」', 1);
      await era.input();
      await nature.say_and_wait(
        '没关系没关系，你刚刚真的很饿对吧？我去整理厨房，把盘子给我吧。',
      );
      await era.printAndWait(
        `${me.name}目送着优秀素质的背影看${nature.sex}走远。`,
      );
      await era.printAndWait(
        '不知是否因为刚吃饱，突然感到一阵困意，意识也逐渐远去──',
      );
      await nature.say_and_wait('……啦……啦啦……♪');
      await nature.say_and_wait('呜哇！我该不会吵醒你了吧？');
      era.printButton('「……那首歌是？」', 1);
      await era.input();
      await nature.say_and_wait(
        '其实我也不太清楚，是以前妈妈在柜台忙时常唱的歌。',
      );
      await nature.say_and_wait(
        '我回想起以前的事情，就忍不住哼了起来……抱歉咯。',
      );
      era.printButton('「我反倒想继续听下去呢」', 1);
      await era.input();
      await nature.say_and_wait(
        `你又来了～不用对 ${era.get('callname:60:60')} 说这种客套话啦。`,
      );
      era.printButton(
        '「但我是真的喜欢内恰的歌声，有这副歌喉，演唱会也没问题了呢！」',
        1,
      );
      await era.input();
      await nature.say_and_wait('哼、哼～是吗？训练员果然品味特殊呢。');
      await nature.say_and_wait(
        '……不过，你不是说『好听』倒是让我安心了。『喜欢』这个词真是方便呢。',
      );
      await nature.say_and_wait(
        '因为这样就不会被拿去跟谁比较，害谁失望，自己也不会对不符合期待的自己失望了。',
      );
      await nature.say_and_wait('啊哈哈。真抱歉，我说话这么不可爱。');
      era.printButton('「我也喜欢这样的内恰哦」', 1);
      await era.input();
      await nature.say_and_wait('笨……笨蛋！');
      await nature.say_and_wait('那种话要是说太多次，可是会失去意义的哦？');
      await era.printAndWait('店家「你借用完了吗，内恰？」');
      await nature.say_and_wait('老板娘，谢谢你啊。真的帮了大忙呢。');
      await era.printAndWait(
        '店家「旁边这位就是传闻中的训练员对吧？我常听内恰提起你──」',
      );
      await nature.say_and_wait('真是的──！不用说那些啦！我们走吧，训练员！');
      era.printButton('「传闻……？」', 1);
      await era.input();
      await nature.say_and_wait('我、们、走、吧！');
      await era.printAndWait(
        `就这样，在老板娘温暖的眼光目送下、${me.name}和优秀素质离开了店里。`,
      );
      era.println();
      sys_like_chara(60, 0, 50) && (await era.waitAnyKey());
    } else {
      await nature.say_and_wait('诶……诶？！我吗？');
      await era.printAndWait(
        '听到回答后，优秀素质惊讶的脸庞上迅速染上了一丝绯红',
      );
      await nature.say_and_wait(
        '虽然是说过不会有客人来……但这里再怎么说也是别人的店里耶……',
      );
      era.printButton('「内恰不是说什么都可以吗？」', 1);
      await era.input();
      await nature.say_and_wait('咕……虽然是这样……但是……');
      await nature.say_and_wait(
        '呜……我知道了……成年人的压力和疲劳通过这种事，能得到有效释放对吧……',
      );
      await era.printAndWait(
        `优秀素质咬了咬嘴唇，像是下定了什么决心一般，走到瘫坐在沙发上的 ${me.name} 面前，然后将娇软的躯体整个俯趴在 ${me.name} 身上，并在耳边低语到：`,
      );
      await nature.say_and_wait(
        '太激烈的可不行哦……衣服和房间清理起来会很麻烦的……',
      );
      await nature.say_and_wait('还有，会被阿姨发现的……');
      await era.printAndWait(
        `当然，至于 ${me.name} 听没听进去，那就是另外一回事了……`,
      );
      sys_change_lust(0, lust_from_palam);
      sys_change_lust(60, lust_from_palam);
      await quick_into_sex(60);
    }
  } else if (event_marks.grass_baseball === 1) {
    event_marks.grass_baseball++;
    await print_event_name('用草地棒球声援！', nature);

    await nature.say_and_wait('会场是这里吗？哦～确实聚集着人潮呢～');
    await nature.say_and_wait(
      '不过，你竟然会答应帮忙打草地棒球……明明训练员的工作就够忙了。',
    );
    await era.printAndWait(
      `其实是前几天，商店街的人们邀请 ${me.name}，因此 ${me.name} 决定参加草地棒球。`,
    );
    era.printButton('「毕竟大家总是很支持你嘛」', 1);
    await era.input();
    await nature.say_and_wait('唉，大家确实是对我很好啦……');
    await nature.say_and_wait('……不过，唉……别拼命过头，弄伤自己喔～？');
    await nature.say_and_wait('你平常就已经很拼命了……');
    await era.printAndWait('就这样，商店街草地棒球对抗赛终于拉开序幕。');
    era.drawLine();
    await era.printAndWait('两队互不相让，比分保持0比0，战况渐渐白热化。');
    await nature.say_and_wait(
      '哇，战况越来越激烈了～……不过，训练员看起来精疲力尽耶。',
    );
    await nature.say_and_wait(
      '不偏心地说，你已经很努力了，差不多该换人上场了吧。',
    );
    era.printButton('「我还能继续！……」', 1);
    await era.input();
    await nature.say_and_wait(
      '唉，真热血。……啊，我懂了。有我的照料，你就会努力下去吧。',
    );
    await nature.say_and_wait('我去拿喝的过来，请乖乖坐在这里喔～？');
    await nature.say_and_wait('真是的……我看看，执行委员会的帐篷在……');
    await era.printAndWait(
      `商店街的大叔「哎呀～就差一点。虽然${me.sex}很努力，但迟迟没办法得分……」`,
    );
    await nature.say_and_wait('喔，他们在聊训练员的事……？', true);
    await era.printAndWait(
      '商店街的阿姨「肯定很紧张吧。毕竟是来帮忙的，身边都是不认识的人……」',
    );
    await era.printAndWait(
      `商店街的大叔「嗯……有没有办法让${me.sex}打起精神呢？」`,
    );
    await nature.say_and_wait('总觉得……听起来好熟悉的情况呢……', true);
    await era.printAndWait(
      '这番对话，让优秀素质不禁想起了自己在比赛时收到的大家的声援打气……',
    );
    await nature.say_and_wait(
      '在背后推了我一把，促使我努力下去的人就是大家和训练员……',
      true,
    );
    await nature.say_and_wait('不该光顾着担心，这次我要──', true);
    era.drawLine();
    await era.printAndWait(
      `终于来到九局下半。在只要打出一分就宣告结束的情况下，轮到 ${me.name} 上场打击。`,
    );
    await era.printAndWait(
      '眼前站在投手丘的大叔曾是闯进甲子园的板凳球员，球技一流。',
    );
    await era.printAndWait(
      `${me.name} 已经被逼得打出两好球，眼看就要到此为止时──`,
    );
    await nature.say_and_wait('加油──！');
    era.printWholeImage(`${era.get('cstr:60:头像')}_应援_半身`, {
      width: 8,
      offset: 8,
    });
    await era.printAndWait(
      '回头一看，不知什么时候换上了啦啦队服的内恰正在观众席上',
    );
    await era.printAndWait(`竭尽全力地为 ${me.name} 声援着`);
    await nature.say_and_wait('别输啊，训练员！再一球！打出去就赢了！');
    await nature.say_and_wait('振作起来！振作！大家一起喊！');
    await era.printAndWait('众人「耶～！Go Fight Win！」');
    await nature.say_and_wait('加、加油！训练员！');
    await era.printAndWait(
      `优秀素质害羞地大声为 ${me.name} 加油，还有${nature.sex}身边的人也是。一定要回应他们的心意……！`,
    );
    era.printButton('「喝啊啊──！！」', 1);
    await era.input();
    await nature.say_and_wait('上啊──！！');
    await era.printAndWait('铿──！');
    await nature.say_and_wait(
      '好耶～！成功了！训练员好厉害！全垒打！是再见全垒打！',
    );
    era.drawLine();
    era.printButton('「谢谢你帮我加油！」', 1);
    era.printButton('「多亏有你为我加油！」', 2);
    if (era.get('love:60') >= 75) {
      era.printButton('「内恰～！谢谢你～！」', 3);
    }
    let ret = await era.input();
    if (ret === 1) {
      await nature.say_and_wait('唔……被这么热烈的目光盯着看，感觉好难为情……');
      await nature.say_and_wait(
        '……该道谢的人是我才对。谢谢你一直为我加油打气。',
      );
      await nature.say_and_wait(
        '总之，今后也会继续加油的……啊～说了一点也不像我会说的话，真是的～！',
      );
      await era.printAndWait(
        `优秀素质虽然感到害羞，却发自内心地为 ${me.name} 加油。这一天 ${me.name} 留下了无可取代的宝贵回忆！`,
      );
      era.println();
      get_attr_and_print_in_event(60, [0, 20, 0, 0, 0], 20);
      sys_change_motivation(60, 1);
      await era.waitAnyKey();
      // TODO 无畏之心+1
    } else if (ret === 2) {
      await nature.say_and_wait(
        `不不不，别那么说。${era.get(
          'callname:60:0',
        )} 已经很努力了，这是靠你自己的努力跟实力得来的。不过……`,
      );
      await era.printAndWait('优秀素质害羞地撇开视线');
      await nature.say_and_wait(
        '帮你加油很有成就感。下次打棒球的时候，我再去加油好了……随便说的啦。',
      );
      await era.printAndWait(
        `${me.name} 感受到彼此之间深刻的情谊，真是美好的一天！`,
      );
      era.println();
      get_attr_and_print_in_event(60, [0, 20, 20, 0, 0], 20);
      await era.waitAnyKey();
      // TODO 无畏之心+1
    } else {
      await nature.say_and_wait('呃，别喊那么大声～这样很引人注目的！');
      await era.printAndWait(`优秀素质涨红了脸颊，回应着 ${me.name} 的呼喊`);
      await nature.say_and_wait('真是的～我要去换衣服了！');
      era.printButton('「换衣服的事可以晚一点吗？」', 1);
      await era.input();
      await nature.say_and_wait(
        '怎么了啦？这身衣服穿着很羞人啊，而且独占周围凉飕飕的……',
      );
      await era.printAndWait(
        `优秀素质抱怨着停下脚步，转过身来面对着 ${me.name}`,
      );
      era.printButton('「那个……这副打扮的内恰实在太可爱了……」', 1);
      await era.input();
      await nature.say_and_wait('唔！哈？这样突然袭击很犯规耶……');
      await era.printAndWait('意料之外的话语让优秀素质一时间手足无措');
      era.printButton('「……性欲……有点压制不住了……」', 1);
      await era.input();
      await nature.say_and_wait('……你你你你突然间又在说什么啊啊啊啊！');
      await era.printAndWait('连续的突袭让优秀素质失声大叫了出来，');
      await era.printAndWait('但突然意识到这样招来了商店街各位的瞩目后，');
      await era.printAndWait('连忙向四周陪笑，然后又转过头来');
      await era.printAndWait('以只有二人能听到的音量娇嗔到');
      await nature.say_and_wait(
        `色鬼 ${era.get('callname:60:0')}！怎么能在这种地方说这种话啊！`,
      );
      era.printButton('「可是内恰的打扮实在太色了……」', 1);
      await era.input();
      await nature.say_and_wait('呜喵喵喵喵！我知道了！不要再说了！');
      await era.printAndWait(
        `满面潮红的内恰拼命挥舞着双手阻止 ${me.name} 说下去`,
      );
      await nature.say_and_wait(
        `咕……让 ${era.get('callname:60:0')} 兴奋成这样，也是我的错呢`,
      );
      await nature.say_and_wait(
        '我会负起责任处理好的啦……但再怎么说也不能在这里做吧？',
      );
      era.printButton('「去更衣室吧」', 1);
      await era.input();
      await nature.say_and_wait('那不是也很容易暴露嘛！');
      era.printButton('「那就拜托你叫小声点了」', 1);
      await era.input();
      await nature.say_and_wait(
        `那算什么嘛！等……${era.get('callname:60:0')}？！`,
      );
      await era.printAndWait(
        `${me.name} 不等优秀素质反对，就一把横抱起${nature.sex}冲进了更衣室，反锁上了隔间。`,
      );
      await era.printAndWait('非常幸运似乎没有人看到这一幕');
      await era.printAndWait('而隔间内翻云覆雨的战斗即将打响……');
      sys_change_lust(0, lust_from_palam);
      sys_change_lust(60, lust_from_palam);
      // 拉拉队服
      await quick_into_sex(60);
    }
  } else {
    return false;
  }
  return true;
};

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
handlers[event_hooks.back_school] = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 60) {
    add_event(hook.hook, event_object);
    return;
  }
  const nice_nature = get_chara_talk(60),
    edu_event_marks = new NNEduMarks(),
    me = get_chara_talk(0);
  if (edu_event_marks.see_fish !== 1) {
    return false;
  }
  edu_event_marks.see_fish++;
  await print_event_name('去看鱼吧', nice_nature);
  await era.printAndWait(`在 ${me.name} 跟优秀素质一同回程的路上──`);
  await nice_nature.say_and_wait('我说，反正还有时间……那个………………要去看鱼吗？');
  await nice_nature.say_and_wait(`是卖鱼的阿姨啦，她叫我们『一起去看看』。`);
  era.printButton('「当然可以啊」', 1);
  await era.input();
  await nice_nature.say_and_wait('……很好，那我们走吧。');
  era.drawLine();
  await era.printAndWait(
    `${me.name} 本来以为是鱼贩那有卖${nice_nature.sex}想要的鱼，结果跟着${nice_nature.sex}来到目的地后……`,
  );
  await nice_nature.say_and_wait(
    '哦哦～在游耶在游耶～～一整群看起来好好吃的鱼～～',
  );
  era.printButton('「没想到是来水族馆……！！」', 1);
  await era.input();
  await nice_nature.say_and_wait('……啊哈。');
  await nice_nature.say_and_wait(
    '啊──好啦好啦！我知道啦。应该有更好的邀请方法吧～你是不是这样想？',
  );
  await nice_nature.say_and_wait(
    `那个嘛，${era.get('callname:60:60')} 可没办法可爱地邀请人──`,
  );
  await nice_nature.say_and_wait(
    '不过啊，难得阿姨送了门票，叫我们两人好好放松……',
  );
  await nice_nature.say_and_wait('我绝对不是存心要骗你的。我说真的。');
  era.printButton('「谢谢你邀请我来」', 1);
  await era.input();
  await nice_nature.say_and_wait('哦……哦哦……这就是大人的从容吗？真有一套……');
  await nice_nature.say_and_wait('好吧，嗯。既然你不在意就好。');
  await nice_nature.say_and_wait(
    '所以说，虽然也算不上赔罪啦……但我们去看训练员想看的东西吧！',
  );
  await nice_nature.say_and_wait(
    '我查了一下，发现有很多有趣的展示呢。真不愧是约……出门玩的热门地点呢。',
  );
  await nice_nature.say_and_wait(
    '有水母展、魟鱼……鲷鱼……每种看起来都相当好吃呢。',
  );
  await nice_nature.say_and_wait('啊，走标准行程的话可以去看海豚秀之类的？');
  await nice_nature.say_and_wait('……不对，跟我去看那么可爱的表演也不太对吧。');
  await nice_nature.say_and_wait(
    `好吧，就交给 ${era.get('callname:60:0')} 决定了！你想看什么？`,
  );
  era.println();
  era.printButton('「海豚秀」', 1);
  era.printButton('「……极度恐怖．可怕鱼展览！！」', 2);
  const ret = await era.input();
  if (ret === 1) {
    await nice_nature.say_and_wait('……我说啊。你有在听我说话吗？');
    era.printButton('「有哦」', 1);
    await era.input();
    await nice_nature.say_and_wait('嗯，我知道。但我不是那个意思哦？');
    await nice_nature.say_and_wait(
      '不对，好吧……毕竟我也说了啊～说我会配合你。',
    );
    await nice_nature.say_and_wait(
      '知道啦知道啦。既然你觉得看了可以放松的话，嗯。',
    );
    await nice_nature.say_and_wait(
      '我是不会做出『呀啊～』那种可爱反应的，这点就请多包容啦──',
    );
    era.drawLine();
    await nice_nature.say_and_wait(
      '哦哦，好有活力的海豚呢～……咦？噗哇！？等一下，水！有水──',
    );
    await nice_nature.say_and_wait('嘎呀啊啊啊──！！？');
    await nice_nature.say_and_wait('可恶……那道水花太犯规了吧。');
    await nice_nature.say_and_wait('原来海豚秀是这么惊悚刺激的娱乐吗……');
    await nice_nature.say_and_wait(
      '真是的……何止是『呀啊～』，害我根本从丹田喊出来了。',
    );
    era.printButton('「看得真开心呢」', 1);
    await era.input();
    await nice_nature.say_and_wait(
      '呵呵……嗯，是啊。看来这种玩法比较适合我呢。',
    );
    await era.printAndWait(
      `${me.name}跟优秀素质在水族馆一起度过快乐时光，好好地放松了一番。`,
    );
  } else {
    await nice_nature.say_and_wait('咦～听起来很有趣嘛！');
    await nice_nature.say_and_wait(
      '而且竟然说是『极度恐怖』呢。到底有多恐怖？让我们见识一下实力吧～',
    );
    await era.printAndWait(`就这样，${me.name}跟优秀素质一起到了展示区……`);
    await nice_nature.say_and_wait('可！');
    era.printButton('「……可？」', 1);
    await era.input();
    await nice_nature.say_and_wait('可、爱、到、不、行！！');
    await nice_nature.say_and_wait(
      '呜哇啊啊～～～！！这什么！圆滚滚的双眼！是叫『扁面蛸』啊～',
    );
    await nice_nature.say_and_wait('呀啊～～～～');
    await nice_nature.say_and_wait('──啊！！');
    era.printButton('「看你这么开心，真是太好了」', 1);
    await era.input();
    await nice_nature.say_and_wait(
      '太……太犯规了吧！说什么极度恐怖，结果都是这么可爱的生物！',
    );
    await nice_nature.say_and_wait('可恶…………好可爱。');
    era.printButton('「那边的鱼也很不赖……」', 1);
    await era.input();
    await nice_nature.say_and_wait('呜哇，真的耶！丑到很可爱～～！');
    await era.printAndWait(
      `${me.name}跟优秀素质在水族馆一起度过快乐时光，好好地放松了一番。`,
    );
  }
  era.println();
  get_attr_and_print_in_event(60, [0, 0, 0, 10, 10], 20) &&
    (await era.waitAnyKey());
  return true;
};

handlers[event_hooks.race_end] = require('#/event/edu/edu-events-60/race-end');

/**
 * 优秀素质的育成事件
 *
 * @author 红红火火恍惚
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage！');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
