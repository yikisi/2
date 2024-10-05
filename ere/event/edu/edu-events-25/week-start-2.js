const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const palace = require('#/event/snippets/palace');
const palace_relation = require('#/event/snippets/palace-relation');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[95 + 19] = async (coffee, me, callname, flags) => {
    await print_event_name('别离', coffee);
    await era.printAndWait([
      '在与 ',
      coffee.get_colored_name(),
      ' 进行讨论过后，',
      me.get_couple_title(),
      ' 正式决定前往国外远征——参加法国G1赛事 ',
      race_infos[race_enum.prix_lat].get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 今天将从这个机场出发，而 ',
      me.get_colored_name(),
      ' 也将陪同，两个人一起面对这个挑战。',
    ]);
    await coffee.say_and_wait([
      '走吧，',
      callname,
      '。为了到天空的另一端追上朋友……',
    ]);
    era.printButton('「……先等一下。」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 歪了歪脑袋看向 ',
      me.get_colored_name(),
      '，不太清楚 ',
      me.get_colored_name(),
      ' 在临行前想做什么。',
    ]);
    await me.say_and_wait('前往法国远征非同小可，在出发前有必要再次理清状况……');
    await me.say_and_wait(
      '国外场地和国内完全不同，再加上环境变化和长时间旅途，有必要确定你的身体状况……',
    );
    await coffee.say_and_wait('事到如今，再考虑这些的话……我也……');
    era.printButton('阻止', 1);
    await era.input();
    await me.say_and_wait('最后，暂时抛弃我作为训练员的身份……我不想你去。');
    await coffee.say_and_wait(
      '……为什么？我们……明明约定好了，不是吗？……要一同为了追上朋友而走下去？',
    );
    await me.say_and_wait('茶座……你的事项永远都是我的优先项……');
    await me.say_and_wait(
      '为了实现茶座你的梦想，即使会随着这个梦想一同殒落我也心甘情愿……',
    );
    await me.say_and_wait(
      '但……这是一场无法回头的赌局。要是一旦失败，你的竞赛生涯也就……结束了。',
    );
    await era.printAndWait(
      '如果两人一路以来累积的努力，最终全都是为了换来「结束」的话……',
    );
    await era.printAndWait([
      '如果为了追梦，',
      coffee.get_colored_name(),
      ' 必须失去其他的一切的话……',
    ]);
    await era.printAndWait([
      '那么 ',
      coffee.get_colored_name(),
      ' 的成功和将来，比所谓的梦想更为重要。',
    ]);
    era.printButton('「所以，国外远征……还是取消吧。」', 1);
    await era.input();
    await coffee.say_and_wait('…………');
    await coffee.say_and_wait('这样啊……那么……');
    if (era.get('love:25') > 75) {
      await coffee.say_and_wait('该说再见了……我的爱人……');
    } else {
      await coffee.say_and_wait(['该说再见了……', callname, '……']);
    }
    era.println();
    await coffee.say_and_wait(
      '我本以为……只有你会不一样……只有你正视了我的梦想……只有你走进了我的世界……',
    );
    await coffee.say_and_wait('可到头来……只是我的一厢情愿吗……');
    era.println();
    await coffee.say_and_wait('没事的……没关系。接下来……我一个人也可以……');
    await coffee.say_and_wait('没事的……没关系。只是回到原本的状态而已……');
    await coffee.say_and_wait('我一定会追上朋友的。所以——');
    era.println();
    await coffee.say_and_wait('……再见。');
    era.println();
    await era.printAndWait([
      '毫不留情地作出告别，留下背影转身而去。',
      coffee.get_colored_name(),
      ' 用含血的话语打算切断 ',
      me.get_couple_title(),
      ' 之间的关系——不，不只是话语含血。',
    ]);
    await era.printAndWait([
      '不知何时起，',
      coffee.get_colored_name(),
      ' 的脚趾渗出了血，',
      coffee.sex,
      '伸出手的手指也渗着血。',
    ]);
    era.println();
    await coffee.say_and_wait('为什么动不了……我……的脚……');
    await coffee.say_and_wait('……为什么？明明我……非去不可的……');
    await coffee.say_and_wait('不去的话，朋友会……');
    await coffee.say_and_wait('朋友会……消失的……');
    await coffee.say_and_wait('就算动不了，我也……！！');
    if (new CoffeeEduMarks().horse) {
      era.println();
      await era.printAndWait(['——阻止', coffee.sex, '。']);
      await era.printAndWait([
        '莫名的意念再一次出现在 ',
        me.get_colored_name(),
        ' 的脑海——但不用说 ',
        me.get_colored_name(),
        ' 也是会这么做的……！',
      ]);
    }
    era.println();
    if (check_tachyon_plan_b()) {
      const tachyon = get_chara_talk(32),
        t_call_c = sys_get_colored_callname(32, 25);
      await era.printAndWait([
        '没等 ',
        me.get_colored_name(),
        ' 冲上前去，一个意料之外的人出现在了 ',
        coffee.get_colored_name(),
        ' 身边，抓住了',
        coffee.sex,
        '颤抖着的肩膀。',
      ]);
      await tachyon.say_and_wait([
        '真是难看啊，',
        t_call_c,
        '。你就这么想参加 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 吗？',
      ]);
      await coffee.say_and_wait('……！？');
      era.printButton('「速子！？你怎么会在这？」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 不知为何偷偷跟随来到了机场，在旁观 ',
        me.get_couple_title(),
        ' 的对话后，选择了加入现场。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 冲上前去，阻止了 ',
        coffee.get_colored_name(),
        ' 的强行移动，一只手穿过腋下，另一只手搂起双腿，将',
        coffee.sex,
        '公主抱了起来。',
      ]);
      await tachyon.say_and_wait(
        '什么叫『我怎么会在这』啊，关心自己的实验对象的动向，这不是理所当然的吗？',
      );
      await coffee.say_and_wait('……你明明什么都不懂……却一直非要横插一脚……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 在 ',
        me.get_colored_name(),
        ' 怀中稍作挣扎后便放弃，然后对着 ',
        tachyon.get_colored_name(),
        ' 挤出一句话来。',
      ]);
      await tachyon.say_and_wait(
        '都这副模样了还要强行参赛吗，所以才说你难看啊……',
      );
      await tachyon.say_and_wait([
        '既然你无论如何都要参加 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '——那么我来替你参加如何？',
      ]);
      await coffee.say_and_wait('……你说，什么？');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的发言把 ',
        me.get_colored_name(),
        ' 怀中的 ',
        coffee.get_colored_name(),
        ' 震惊到了，',
        coffee.sex,
        ' 可从来没听说过这件事。',
      ]);
      await tachyon.say_and_wait([
        '科学家可从来不会做无谓的事情，参加 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 自有我的安排……哦，但是 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        ' 我也是会参加的。',
      ]);
      await tachyon.say_and_wait(
        '而且，我对你口中的朋友也一直很感兴趣。就由我来替你追上朋友，如何？',
      );
      await coffee.say_and_wait('为什么……朋友竟然，同意了……');
      await coffee.say_and_wait('而且身体的异样……也渐渐恢复了……');
      await coffee.say_and_wait('但是……但是我……今后、该怎么办……');
      await coffee.say_and_wait('呜、呜呜呜……呜呜呜……');
      await era.printAndWait([
        '抱着哭泣的 ',
        coffee.get_colored_name(),
        '，',
        me.get_couple_title(),
        ' 三人一同踏上了返回特雷森的路途。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的国外远征在出发前一刻取消，下一个目标将改回国内的 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '而 ',
        tachyon.get_colored_name(),
        '，将在 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        ' 结束后，前往法国参加 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '。',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 冲上前去，阻止了 ',
        coffee.get_colored_name(),
        ' 的强行移动，一只手穿过腋下，另一只手搂起双腿，将',
        coffee.sex,
        '公主抱了起来。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 没有在 ',
        me.get_colored_name(),
        ' 怀中挣扎，仿佛灵魂抽离了身体一般……过了许久，',
        coffee.sex,
        '才重新有了反应。',
      ]);
      await coffee.say_and_wait('看来……没有办法了……');
      await coffee.say_and_wait(['只能依 ', callname, ' 所言……取消远征了……']);
      await coffee.say_and_wait('但是……但是我……今后、该怎么办……');
      await coffee.say_and_wait('呜、呜呜呜……呜呜呜……');
      await era.printAndWait([
        '抱着哭泣起来的 ',
        coffee.get_colored_name(),
        '，',
        me.get_colored_name(),
        ' 踏上了返回特雷森的路途。',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的国外远征在出发前一刻取消，下一个目标将改回国内的 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '。',
      ]);
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      [0, 10],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(25, -1) || flags.wait_flag;
  };

  handlers[95 + 29] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:25:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('夏季合宿（资深年）开始', coffee);
    await era.printAndWait('前往夏季合宿的大巴上。');
    await era.printAndWait([
      '在经过这次夏季合宿后等待 ',
      coffee.get_colored_name(),
      ' 的便是 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '，尽管现在距离11月看似还很遥远，但若是掉以轻心就要处于劣势了，更别说还有未确定是否参加的 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '。',
    ]);
    await era.printAndWait('所以，这次夏季合宿的主要目标就是好好休养——');
    era.printButton('「——明白了吗，茶座？……茶座？」', 1);
    await era.input();
    await era.printAndWait([
      '坐在 ',
      me.get_colored_name(),
      ' 身边的 ',
      coffee.get_colored_name(),
      ' 不知何时把头靠在了 ',
      me.get_colored_name(),
      ' 的肩膀上，静静地睡着了，身体随着车辆的行驶微微晃动。',
    ]);
    await era.printAndWait([
      '轻轻调整坐姿，让',
      coffee.sex,
      '睡得更舒服一些。',
    ]);
    await coffee.say_and_wait('………………呜嗯……');
    await era.printAndWait('真是可爱的睡相。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 也萌生起了睡意，与 ',
      coffee.get_colored_name(),
      ' 相依睡去……',
    ]);
  };

  handlers[143 + 1] = async (coffee, me) => {
    await print_event_name('静谧的继承者', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 在闪耀系列赛中最初的三年里获得了极大的成功。',
    ]);
    await era.printAndWait([
      '眼前林立的奖杯宛如高楼耸立的街道。然而',
      coffee.sex,
      '的活跃表现并未止步于此——',
    ]);
    await coffee.say_and_wait('今天……也有好多客人……那么……你想商量的事是……？');
    await era.printAndWait([
      '在不知不觉间，因为在赛场上的身姿……',
      coffee.get_colored_name(),
      ' 受到了许多赛',
      coffee.get_uma_sex_title(),
      '的仰慕。',
    ]);
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}A`,
      '那个～茶座同学……我想请教该如何才能在泥地跑好，我总是跑不好……',
    );
    await coffee.say_and_wait('泥地……这样啊……');
    await coffee.say_and_wait('我觉得……不要用力过度会比较好。');
    await coffee.say_and_wait('就像在沙子里……摆动钟摆那样……');
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}B`,
      '再来到我！下次我打算挑战逃马的跑法，请问有没有什么诀窍呢！？',
    );
    await coffee.say_and_wait('逃马……虽然我不太擅长……');
    await coffee.say_and_wait(
      '但最重要的……是心态……看你将重心放在哪里……跑法，不过是心态的展现……',
    );
    await coffee.say_and_wait('这样……有稍微给你们一些灵感了吗？');
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}们`,
      '有！非常感谢！！',
    );
    await coffee.say_and_wait('那你们……要喝杯咖啡再走吗？');
    await say_by_passer_by_and_wait(
      `赛${coffee.get_uma_sex_title()}们`,
      '……要！',
    );
    await era.printAndWait([
      '面对着众多',
      coffee.get_uma_sex_title(),
      '的提问，',
      coffee.get_colored_name(),
      ' 却能给所有人都提出充满灵性的建议，并且确实帮到',
      coffee.sex,
      '们。',
    ]);
    await era.printAndWait([
      '这点连身为训练员的 ',
      me.get_colored_name(),
      ' 都自愧不如。',
    ]);
    era.drawLine();
    await coffee.say_and_wait([
      '哈啊、哈啊……',
      sys_get_callname(25, 0),
      '……可以麻烦你再监督我跑一次吗？',
    ]);
    await coffee.say_and_wait(
      '我今天想要尝试新的跑法。希望可以……提供给别人当参考……',
    );
    era.printButton('「是为了后辈们吗？」', 1);
    await era.input();
    await coffee.say_and_wait(
      '是的……我最近总会想，虽然追上在前方的朋友的确很重要……',
    );
    await coffee.say_and_wait([
      '可是同时……对在后方追着自己的赛',
      coffee.get_uma_sex_title(),
      '们给予支持也很重要。',
    ]);
    await coffee.say_and_wait(
      '我……并不像朋友那么快……但即使如此，还是希望能默默地给予帮助……',
    );
    await coffee.say_and_wait([
      '静静地张开双手……到了未来的某天，让自己变得能够帮助所有的赛',
      coffee.get_uma_sex_title(),
      '……',
    ]);
    await era.printAndWait('——咻。');
    await era.printAndWait([
      '突然，',
      me.get_colored_name(),
      ' 眼前似乎有什么东西飞快的经过，虽然从未见过，但 ',
      me.get_colored_name(),
      ' 脑海中……却浮现出「朋友」二字。',
    ]);
    era.printButton('「……茶座，朋友现在在哪？」', 1);
    await era.input();
    await coffee.say_and_wait('朋友的话，不就在……诶？不见了……');
    await era.printAndWait('——咻。');
    era.printButton(`「茶座，你……就是赛${coffee.get_uma_sex_title()}的……」`, 1);
    await era.input();
    await era.printAndWait([
      '仿佛听见了……「种子」的声音。名为赛',
      coffee.get_uma_sex_title(),
      '种子的声音不断在耳边回绕……',
    ]);
    await era.printAndWait([
      '没错，',
      coffee.sex,
      '——',
      coffee.get_colored_name(),
      ' 就是——',
    ]);
    era.drawLine();
    await era.printAndWait([
      '有一个关于某位赛',
      coffee.get_uma_sex_title(),
      '的寓言故事。',
    ]);
    await era.printAndWait([
      '据说那名赛',
      coffee.get_uma_sex_title(),
      '拥有近乎究极的速度，并且和 ',
      coffee.get_colored_name(),
      ' 长得十分相似。',
    ]);
    await era.printAndWait([
      '或许 ',
      coffee.get_colored_name(),
      ' ',
      coffee.sex,
      '……一直都在一场梦里。',
    ]);
    await era.printAndWait([
      '一场那位究极的赛',
      coffee.get_uma_sex_title(),
      '出现在眼前，并期待着 ',
      coffee.get_colored_name(),
      '「成为',
      coffee.sex,
      '，然后超越',
      coffee.sex,
      '」的梦……',
    ]);
  };

  handlers.palace = async (coffee, me, callname) => {
    await palace(coffee, me);
    const races = new RaceHistory(25).get();
    if (
      check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1) &&
      era.get('relation:25:0') > 375 &&
      era.get('love:25') >= 75
    ) {
      era.drawLine();
      era.set('flag:当前位置', location_enum.gate);
      await print_event_name('乐园', coffee);
      era.set('flag:当前位置', location_enum.office);
      await coffee.print_and_wait([
        '如同万花筒一般、散发着绚烂光芒的天空与大地，如同梦幻一般、洋溢着金色光泽的巨大齿轮……',
      ]);
      await coffee.print_and_wait('这里……是梦的世界吗？');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' 环顾四周，眼前的景色却不会让',
        coffee.sex,
        '感到陌生。',
      ]);
      era.println();
      await coffee.print_and_wait([
        '在无数个夜晚，',
        coffee.sex,
        '曾在这梦幻的世界中探索：',
        coffee.sex,
        '见到过飞身扑向彩虹的飞行鲸鱼，见到过有着宝石般绚丽翅膀的巨龙，也见到过那个日夜追逐、被',
        coffee.sex,
        '称呼为「朋友」的存在。',
      ]);
      await coffee.print_and_wait([
        '那么今天，',
        coffee.sex,
        '又将见到什么呢？',
      ]);
      era.println();
      await coffee.print_and_wait(
        '一道身影如同波浪般在眼前浮现，黑色的长发、白色翘起的流星、熟悉的决胜服……',
      );
      era.println();
      await coffee.say_and_wait(['你是……']);
      era.println();
      await coffee.print_and_wait([
        '听到了询问声，来客转过头来， ',
        coffee.get_colored_name(),
        ' 看到的是一个仿佛照镜子般、与自己一模一样的',
        coffee.get_uma_sex_title(),
        '。',
      ]);
      era.println();
      await coffee.print_and_wait('——朋友。');
      await coffee.print_and_wait([
        '第一时间出现在 ',
        coffee.get_colored_name(),
        ' 脑海中的，便是这个词。',
      ]);
      era.println();
      await coffee.print_and_wait(['——但', coffee.sex, '不是朋友。']);
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' 可以肯定，对方不是朋友也不是怪异，而是一个和自己一样活生生的存在、一个出现在自己梦中的人。',
      ]);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「……看到了和自己一样的存在，你不感到惊讶吗？」',
      );
      era.println();
      await coffee.print_and_wait(['——连嗓音也与自己一模一样。']);
      era.println();
      await coffee.say_and_wait(['……我在这里见到过和自己类似的人，你呢？']);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「或许是职业的原因，让我习惯了照镜子吧……这里就只有你一个人吗？」',
      );
      era.println();
      await coffee.say_and_wait([
        '……除了我，偶尔还会有朋友，但看到别的人还是第一次……稍微聊聊怎么样，能够相遇也是一种缘分……',
      ]);
      era.println();
      await coffee.print_and_wait([
        '另一个茶座「缘分吗……真是适合我们',
        coffee.get_uma_sex_title(),
        '的词汇，我们',
        coffee.get_uma_sex_title(),
        '不就是被命运所引导的存在吗？」',
      ]);
      era.println();
      await coffee.print_and_wait([
        '——该怎么说呢……虽然和自己长得一模一样，但性格上微妙的有些不同。',
      ]);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「……命运，真是麻烦啊……擅自就把我们束缚起来。」',
      );
      era.println();
      await coffee.say_and_wait(
        '……是啊。回想起来，我可能也一直被束缚着吧……追上朋友、超越朋友，或许也正是因为命运的引导。',
      );
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「你的目标，便是超越追不上的朋友吗？',
      );
      era.println();
      await coffee.say_and_wait(['……很奇怪吧……']);
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「不，我们很相似呢……我想要寻找『乐园』，前往不可抵达的乐土……但太过遥远了，就算知道方向，却连目光都不可能触及……」',
      );
      era.println();
      await coffee.say_and_wait(
        '嗯，我也是……朋友，是会引领我去往幸福的人，过去的我为此而渴望追上朋友……可我越是追赶，朋友就跑得越快……',
      );
      era.println();
      await coffee.print_and_wait(
        '另一个茶座「过去的你……意思是现在的你已经追上朋友了吗？」',
      );
      era.println();
      await coffee.say_and_wait('不……我已经不需要引领了……');
      era.println();
      await coffee.print_and_wait([
        '梦的世界中，光芒逐渐暗淡下来，是梦就要醒来了吗？',
      ]);
      era.println();
      await coffee.print_and_wait([
        '另一个茶座「……看来就要在此别过了。再见，这边 ',
        coffee.get_colored_name(),
        ' ',
        coffee.get_adult_sex_title(),
        '。」',
      ]);
      era.println();
      await coffee.say_and_wait([
        '你也是，请保重，那边 ',
        coffee.get_colored_name(),
        ' ',
        coffee.get_adult_sex_title(),
        '……',
      ]);
      era.drawLine();
      era.printButton('醒了吗，茶座，你好像做了个梦？', 1);
      await era.input();
      era.println();
      await coffee.print_and_wait([
        '再次睁开双眼，出现 ',
        coffee.get_colored_name(),
        ' 眼前的便是最熟悉的面孔……一副时刻陪伴在自己左右、代表着幸福的面孔。',
      ]);
      await coffee.print_and_wait([
        '——记得……自己是因为陪 ',
        callname,
        ' 熬夜太累，所以睡着了？',
      ]);
      era.println();
      await coffee.say_and_wait([
        '是的……一个，很有意思的梦……有时间的话，就跟 ',
        callname,
        ' 讲讲吧……',
      ]);
      era.println();
      await coffee.print_and_wait(
        '——我不会去寻找什么乐园，因为……我已经在最幸福的地方了。',
      );
    } else {
      await palace_relation(coffee, me);
    }
  };
};
