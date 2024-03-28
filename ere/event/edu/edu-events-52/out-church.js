const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 52) {
    add_event(hook.hook, event_object);
    return false;
  }
  const callname = sys_get_callname(52, 0),
    in_urara = get_chara_talk(52, chara_colors[1]),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  await print_event_name('新年参拜', urara);
  era.set('cflag:52:节日事件标记', 0);
  await in_urara.say_as_unknown_and_wait(
    '嗯！虽然并没什么好说的，但是顺利的与乌拉拉进入资深级恭喜了哦？',
  );
  await in_urara.say_as_unknown_and_wait(
    '……怎么了？感觉变了是您的错觉罢了，我什么也没变哦？',
  );
  era.drawLine();
  await era.printAndWait([
    '站在正月里熙熙攘攘的人潮中，',
    me.get_colored_name(),
    ' 在神社长长的阶梯下等待着约好一同参拜的同伴到来。',
  ]);
  await era.printAndWait([
    '今天的 ',
    urara.get_colored_name(),
    ' 难得迟到了，虽然离约定时间仅过了几分钟，但若是平常玩心尚重的',
    urara.sex,
    '一般都能在外出中到得更早。',
  ]);
  await era.printAndWait([
    '不会是被新年的人流堵在路上了吧？虽然倒不担心',
    urara.get_uma_sex_title(),
    '会被挤住，可 ',
    urara.get_colored_name(),
    ' 找不到路的话……',
  ]);
  await era.printAndWait([
    '但正当 ',
    me.get_colored_name(),
    ' 准备原路返回去寻找担当时，却又立刻在不远处听到了',
    urara.get_teen_sex_title(),
    '熟悉的清脆呼唤声。',
  ]);
  await urara.say_and_wait([callname, '！我在这边！乌拉拉在这边哦！']);
  await era.printAndWait([
    '趁着 ',
    me.get_colored_name(),
    ' 回头找寻的空隙，一股红白相间的樱色春风就赶在气温转暖前吹进了 ',
    me.get_colored_name(),
    ' 的怀中。',
  ]);
  await era.printAndWait([
    '低头看去，身着红粉相间的节日正装，',
    urara.get_colored_name(),
    ' 正冲 ',
    me.get_colored_name(),
    ' 开心地笑着，一双绽放着樱花的瞳孔闪闪发光。',
  ]);

  urara.say([
    '嘿嘿～因为大家说最好正式一点，所以今天准备的有点久！',
    callname,
    ' 觉得怎么样？',
  ]);
  era.printButton('「嗯，乌拉拉今天很漂亮哦！」（好感+20）', 1);
  era.printButton('「嗯，我又被乌拉拉迷住了！」（爱慕+10）', 2);
  const ret = await era.input();
  if (ret === 1) {
    await urara.say_and_wait([
      '嘿嘿～真的吗？我在大家的帮助下收拾了很久哦！',
      callname,
      ' 也觉得开心真是太好了！',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 开心地在你面前旋转展示着自己，宽袖与长裙也像小鸟的羽翼般随之跃动着。',
    ]);
    await urara.say_and_wait([
      '不过竟然是漂亮不是可爱呢，难道在 ',
      callname,
      ' 终于觉得乌拉拉变得像个大人了吗？',
    ]);

    era.printButton(
      '「答错了哦？因为并不是变得像大人，而是乌拉拉不论何时都比『大人们』漂亮得多啊。」',
      1,
    );
    await era.input();
  } else {
    await urara.say_and_wait('对吧！我在大家的帮助下收拾了很久呢……诶？诶诶——');
    await era.printAndWait([
      '听到了意想不到的答案，',
      urara.get_colored_name(),
      ' 先是愣了一下，随后急忙用正装的宽袖遮住了自己变得羞红的脸颊。',
    ]);
    await urara.say_and_wait([
      '训、 ',
      callname,
      ' 不要再说乌拉拉听不懂的话了……虽然很开心！但乌拉拉也不是小孩子了……',
    ]);

    era.printButton(
      '「对不起啦，我以后会注意的，不过我并没有在和乌拉拉开玩笑哦？」',
      1,
    );
    await era.input();
  }
  await era.printAndWait([
    '随后，牵着 ',
    urara.get_colored_name(),
    ' 变得害羞的小手，',
    me.get_colored_name(),
    ' 与担当一同踏上了前往神社祈福的漫长阶梯。',
  ]);
  await era.printAndWait([
    '但随着不断向上，',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 都注意到了周遭的变化——先不说别的，神社的台阶，有这么长吗？',
  ]);
  await era.printAndWait(
    '神社的阶梯很高众所皆知，但在平常的印象中，似乎还不至于一眼望不见头尾。',
  );
  await era.printAndWait(
    '而不知从何时起，周围原本熙熙攘攘的参拜者们逐渐消失了，而周围的树林则愈发细密起来。',
  );
  await era.printAndWait(
    '有些树上甚至过早的挂起了新叶，完全不像在寒风未消的季节中会出现的景象。',
  );
  await era.printAndWait(
    '虽然日常祈福时奇妙现象也时有发生，但今天的变化却异常明显。',
  );
  await era.printAndWait(
    '可以肯定的是，这样的变化并非出于恶意，甚至还抹去了两人在攀登时会感受到的疲惫。',
  );
  await era.printAndWait([
    '但就算如此，这坡道未免也变得太长了。仰视着前方高到无聊的笔直之路，',
    me.get_colored_name(),
    ' 深深地叹了口气。',
  ]);
  await era.printAndWait(
    '现在调头回去吗？可就算回去恐怕也是没完没了的台阶，怎么办……',
  );
  await era.printAndWait([
    '可就在 ',
    me.get_colored_name(),
    ' 苦恼着下一步要怎么做时，一旁的 ',
    urara.get_colored_name(),
    ' 却主动向 ',
    me.get_colored_name(),
    ' 抛出了意想不到的话题。',
  ]);
  await urara.say_and_wait([
    callname,
    '，其实乌拉拉知道哦？以乌拉拉最初的样子，是没办法靠自己来到特雷森的。',
  ]);
  await era.printAndWait([
    '仿佛被突如其来的这么一句击中了后脑，',
    me.get_colored_name(),
    ' 差点一脚踩空从阶梯上滑下去。',
  ]);
  await era.printAndWait([
    '在 ',
    urara.get_colored_name(),
    ' 刚开口时 ',
    me.get_colored_name(),
    ' 想到了小',
    urara.get_uma_sex_title(),
    '的一万种搭话模式，但唯独没想到竟然能是严肃又沉重的话题。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 紧张地看向身边的 ',
    urara.get_colored_name(),
    '，但此时的',
    urara.sex,
    '却正安静地望着比视线的尽头更高的地方。',
  ]);
  await urara.say_and_wait(
    '妈妈以前告诉过我，神社的阶梯之所以建得这么高，是为了更接近神明呢！',
  );
  await urara.say_and_wait(
    '神明果然住得好高好高呢，不过妈妈还说过，要拜访别人最好能准备表明心意的伴手礼呢。',
  );
  await era.printAndWait([
    '将向上的视线转回身旁，乖巧地牵着大人的手，',
    urara.get_colored_name(),
    ' 带着安静可爱的笑容向 ',
    me.get_colored_name(),
    ' 发起了邀请。',
  ]);
  await urara.say_and_wait([
    '虽然乌拉拉好像说得有点晚了，但 ',
    callname,
    ' 愿意现在听听乌拉拉说说以前的事情吗？',
  ]);
  await era.printAndWait([
    '与 ',
    urara.get_colored_name(),
    ' 若有所思的目光对视后，从中读出了什么的 ',
    me.get_colored_name(),
    ' 也轻轻点了点头。',
  ]);
  era.drawLine();
  await urara.print_and_wait([
    '看不见的朋友，',
    callname,
    ' 知道吗？没错，大家都说，那是只有孤独的孩子们才会遇见的朋友。',
  ]);
  await urara.print_and_wait(
    '很奇妙吧？而且虽然大家总说看不见的朋友只是幻想，但乌拉拉觉得或许并不是那样。',
  );
  await urara.print_and_wait(
    '嗯！虽然乌拉拉的朋友一直很多，但乌拉拉也有一个看不见的朋友哦？和乌拉拉长得一模一样的！',
  );
  await urara.print_and_wait([
    '但是和大家说的朋友总是友好的不一样的是，',
    urara.sex,
    '总是挂着一副悲伤的表情，只会远远的看着乌拉拉。',
  ]);
  await urara.print_and_wait([
    '不能就这样放着',
    urara.sex,
    '不管，所以这样想着，乌拉拉就主动去找',
    urara.sex,
    '了，还带',
    urara.sex,
    '去了很多地方。',
  ]);
  await urara.print_and_wait([
    '从那之后，我们就变成了形影不离的朋友，虽然',
    urara.sex,
    '还会经常不开心，但也逐渐露出了更多笑容。',
  ]);
  await urara.print_and_wait([
    '直到有一天，朋友突然对乌拉拉说，乌拉拉有什么愿望呢？只要说出来，',
    urara.sex,
    '都会尽力帮乌拉拉实现。',
  ]);
  await urara.print_and_wait([
    '所以乌拉拉对朋友说，希望总是露出悲伤的表情的',
    urara.sex,
    '，有一天也能收获不再悲伤的幸福就好了！',
  ]);
  await urara.print_and_wait(
    '但是听到乌拉拉回答的朋友，却露出了比以往更加忧郁的表情……',
  );
  await in_urara.say_as_unknown_and_wait(
    '对不起，唯独这个愿望只有我自己做不到，因为我的幸福，就是希望乌拉拉能幸福……',
  );
  await urara.say_and_wait(
    '嗯……那这样的话，就试着让乌拉拉更幸福好啦！那样的话，你就能开心起来了对吧？',
  );
  await in_urara.say_as_unknown_and_wait(
    '那乌拉拉希望的幸福是？是被人所爱？还是安心的生活？还是……',
  );
  await urara.say_and_wait(
    '大家看到我的奔跑都会笑起来，所以希望大家都能看到希望，然后露出开心的笑容哦！',
  );
  await urara.print_and_wait([
    '结果听到乌拉拉的愿望之后朋友吓了一大跳呢，但是',
    urara.sex,
    '还是接下了乌拉拉的愿望。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '我明白了，时间还有很多，我会找到协力者，让乌拉拉能够写下『我们的故事』。',
  );
  await urara.print_and_wait(
    '而在那之后，就是在乌拉拉更大一些时，妈妈突然送我去特雷森上学的事情了。',
  );
  await urara.print_and_wait([
    '在往后啊……诶嘿嘿～乌拉拉就在训练场里遇见了倒下的 ',
    callname,
    ' 呢！',
  ]);
  await urara.print_and_wait(
    '不过不过！在来到特雷森后，即使总是跑不赢，但乌拉拉还是一下子明白了很多事情！',
  );
  await urara.print_and_wait(
    '妈妈送乌拉拉到特雷森的时候，刚好是春天，所以乌拉拉明白了，自己应该是幸运的。',
  );
  await urara.print_and_wait(
    '因为乌拉拉很幸运，所以能跟随春天到来；因为大家认为春天是美好的，所以春天总会让大家露出笑容。',
  );
  await urara.print_and_wait(
    '所以乌拉拉苦恼过的，看不见的朋友是不是幻想、和乌拉拉在不在一个世界，其实都不重要！',
  );
  await urara.print_and_wait(
    '因为只要能给予大家相信的希望，那一切应该都会是有意义的，大家也都能露出笑容。',
  );
  await urara.print_and_wait([
    '所以就像 ',
    callname,
    ' 看到的那样，乌拉拉最后，还是选择用奔跑来完成和朋友的约定呢！',
  ]);
  era.drawLine();
  await era.printAndWait([
    '以小',
    urara.get_uma_sex_title(),
    '的笑容做结，不知不觉中，',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 终于走到了比往常漫长太多的阶梯顶端。',
  ]);
  await era.printAndWait([
    '原来如此，这就是 ',
    urara.get_colored_name(),
    ' 和「',
    urara.sex,
    '」的关系，',
    urara.get_colored_name(),
    ' 可能省略了很多细节，但大致已经明了了。',
  ]);
  await era.printAndWait([
    '只是，就算答应要帮 ',
    urara.get_colored_name(),
    ' 实现愿望，',
    urara.sex,
    '却在套用自己对幸福的定义，这是什么强掌控欲家长啊。',
  ]);
  await era.printAndWait([
    '穿过朱红的鸟居，',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 走入了明明在旺季空无一人，却并不显得诡异的神社院内。',
  ]);

  era.printButton(
    '「不过虽然再提就有点婆妈了……乌拉拉认为自己能来到中央特雷森，是因为那位『看不见的朋友』吗？」',
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '那个应该是妈妈做了什么吧？听邻里的大家说，妈妈年轻时是很厉害的中央赛马娘。',
  );
  await urara.say_and_wait(
    '而且在带我去特雷森前，妈妈也刚从中央回来，再加上乌拉拉那时连入学测试都没做……',
  );
  await era.printAndWait(
    '嚯，竟然答得毫不犹豫啊，而且这个答案也是出人意料的有点吓人……',
  );
  await urara.say_and_wait(
    '但是也不全对，因为妈妈也是唯一一个觉得乌拉拉看不见的朋友存在的人。',
  );
  await urara.say_and_wait([
    '所以或许是妈妈也能看到乌拉拉的朋友，并和',
    urara.sex,
    '聊过也说不定！',
  ]);
  await era.printAndWait([
    '与 ',
    me.get_colored_name(),
    ' 一同将硬币扔入钱箱，摇响绳上的铃铛，',
    urara.get_colored_name(),
    ' 继续微笑着小声说道。',
  ]);
  await urara.say_and_wait(['不过 ', callname, ' 有时候……确实很婆妈呢！']);

  era.printButton('「乌拉拉？！」', 1);
  await era.input();

  await era.printAndWait([
    me.get_colored_name(),
    ' 差点就在后退一步时一脚滑倒，但总之没有在神明大人和担当的见证下现个大眼。',
  ]);
  await era.printAndWait([
    '可恶，怎么现在就连 ',
    urara.get_colored_name(),
    ' 也会这么想了？而且',
    me.get_phy_sex_title(),
    '婆妈一点有什么错！',
  ]);
  await urara.say_and_wait([
    '嘿嘿～要到写愿望的环节了啊！',
    callname,
    ' 没问题吗？',
  ]);

  era.printButton('「没、没问题啊，因为乌拉拉的训练员已经是大人了啊……」', 1);
  await era.input();

  await era.printAndWait([
    '总算稳住了自己作为成年人的形象，',
    me.get_colored_name(),
    ' 接过 ',
    urara.get_colored_name(),
    ' 递来的另一支笔。',
  ]);

  const attr_change = new Array(5).fill(0);
  let pt_change = 0;
  urara.say(['所以，', callname, ' 想要许下什么愿望呢？']);
  era.printButton('「总之还是祝愿周围人都身体健康？」（耐力+30）', 1);
  era.printButton('「事业有成……大体上是这个意思？」（全属性+5）', 2);
  era.printButton('「愿在新的一年里轻松克服困难吧？」（技能点数+35）', 3);
  switch (await era.input()) {
    case 1:
      attr_change[attr_enum.endurance] = 30;
      break;
    case 2:
      attr_change.fill(5);
      break;
    case 3:
      pt_change = 35;
  }
  await era.printAndWait([
    '快速写完了一开始就想好的内容，放下手中的笔，',
    me.get_colored_name(),
    ' 转向了还在聚精会神地写着愿望的 ',
    urara.get_colored_name(),
    '。',
  ]);

  era.printButton('「乌拉拉在许下的什么愿望呢？」', 1);
  await era.input();

  urara.say('嗯！我的话有很多想许的东西，但只选一件的话果然还是——');
  era.printButton('更远的距离（中&长距离适性提升）', 1);
  era.printButton('尝试草地（草地适性提升）', 2);
  if ((await era.input()) === 1) {
    await urara.say_and_wait(
      '因为有马距离很长呢，所以『想要能跑得更远一点』！',
    );
    new UraraEduMarks().dad++;
  } else {
    await urara.say_and_wait(
      '因为有马纪念是草地，所以『想在草地上跑得更快』！',
    );
    new UraraEduMarks().gad++;
  }

  await era.printAndWait([
    '观看着 ',
    urara.get_colored_name(),
    ' 一笔一划地写出意想不到的愿望，',
    me.get_colored_name(),
    ' 有些欣慰的同时心情也有点复杂。',
  ]);

  era.printButton('「……意外的认真啊，是因为定下目标所以有干劲吗？」', 1);
  await era.input();

  await urara.say_and_wait([
    '没错哦！不过 ',
    callname,
    ' 应该不会在今天回去后，马上就拉着我训练吧？',
  ]);
  await era.printAndWait([
    '听到 ',
    urara.get_colored_name(),
    ' 欲望明确的暗示，将两人的愿望挂好的 ',
    me.get_colored_name(),
    ' 转头露出了大人在恶作剧时狡猾的笑容。',
  ]);

  era.printButton(
    '「本来是不会的，不过乌拉拉这么热情的话……现在的阶梯变长了不少哦？」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '才怪，就算是 ',
    urara.get_colored_name(),
    ' 没这么热情，利用地形的训练也会顺势就开始哦？',
  ]);
  await urara.say_and_wait([
    '诶——不要现在就开始嘛 ',
    callname,
    '！不要这样利用神明的一片好意啦！',
  ]);
  await urara.say_and_wait(
    '就算没办法到神社下面的摊贩那边玩了，至少让乌拉拉在神社里再转转吧——',
  );
  await era.printAndWait([
    '撒娇也不可以！因为 ',
    urara.get_colored_name(),
    ' 是好孩子，而好孩子的撒娇并不管用哦！',
  ]);

  era.printButton(
    '「好！那么为了满足让乌拉拉去摊贩那里玩的愿望，要跑起来了！注意脚下哦？」',
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '怎么这样！神明会生气的啦！明明还想回去一起吃年糕和饼干的——',
  );
  await era.printAndWait([
    '虽然眼泪汪汪的说着，但 ',
    urara.get_colored_name(),
    ' 还是在抹了把眼角后有些委屈的跟上了 ',
    me.get_colored_name(),
    ' 率先跳下台阶的步伐。',
  ]);
  await era.printAndWait([
    '这就不对了哦？因为是为了 ',
    urara.get_colored_name(),
    ' 未来的一着，所以就连神明大人也会默许吧。',
  ]);
  await era.printAndWait([
    '不过这样的话，只要愿意继续前进愿望就一定会实现，而充满希望的',
    urara.sex,
    '也算未来可期对吧？',
  ]);
  await era.printAndWait([
    '望向身后即将从前人身旁掠过的红粉相间的樱色，',
    me.get_colored_name(),
    ' 脸上的笑容也逐渐转变为欣慰。',
  ]);
  await era.printAndWait(
    '不论哪个方面都更能近一步，新年的参拜，这不是很棒吗？',
  );
  era.drawLine();
  await in_urara.say_as_unknown_and_wait(
    '乌拉拉和您说了许多奇怪的话呢，但是上次我做的也差不多过分，所以我原谅您了！',
  );
  await in_urara.say_as_unknown_and_wait(
    '怎样，偶尔学着『乌拉拉』的方式说话？诶、不像？唔……您这个人……',
  );
  await in_urara.say_as_unknown_and_wait(
    '嗯？我的态度变了？才没有哦，我都说过了是您的错觉——',
  );
  await in_urara.say_as_unknown_and_wait(
    '咳、抱歉，因为难得是新年，我也有点兴奋过头了。',
  );
  await in_urara.say_as_unknown_and_wait(
    '只是呢，『掌控欲强』，您不也是吗？按照乌拉拉的话来说，觉得开心不就好了吗？',
  );
  await in_urara.say_as_unknown_and_wait('还有，神社的事，那也不是我做的哦？');
  era.println();
  let wait_flag = get_attr_and_print_in_event(
    52,
    attr_change,
    pt_change,
    undefined,
    true,
  );
  wait_flag =
    sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
    wait_flag;
  wait_flag && (await era.waitAnyKey());
  return true;
};
