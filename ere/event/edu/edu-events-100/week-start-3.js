const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (acute, me, callname) => {
    era.set('cflag:100:节日事件标记', 0);
    await print_event_name('拳人节 · 特大号追加超量叠放无敌燃烧版', acute);
    const digital = get_chara_talk(19);
    const jordan = get_chara_talk(48);
    const festa = get_chara_talk(49);
    era.println();
    await era.printAndWait([
      '春去秋来，今年已是与 ',
      acute.get_colored_name(),
      ' 相遇的第三年了。',
    ]);
    await era.printAndWait(
      '冬雪消融，春影仍在。掰弄手指掐算时日，情人节的日子又一次迫在眉睫。',
    );
    await era.printAndWait([
      '见识了去年的鸡飞蛋打、放飞理想后，今年，',
      me.get_colored_name(),
      ' 与 ',
      acute.get_colored_name(),
      ' 都各自成长了许多。',
    ]);
    await era.printAndWait([
      '正因如此，情人节当天的傍晚，结束了日常的训练以后。',
      me.get_colored_name(),
      ' 与 ',
      acute.get_colored_name(),
      ' 轻车熟路的来到了自己的休息室。',
    ]);
    await era.printAndWait('打开电源，坐在一起，各自将下身探入床炉之中——');
    era.printButton('「呜啊～～～❤️」', 1);
    await era.input();
    await acute.say_and_wait('啊哈哈～真暖和呢❤️。');
    await era.printAndWait([
      '早已习惯了各自存在的 ',
      me.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      '，相互依偎着，坐在床炉之前。',
    ]);
    era.printButton(
      '「一想到这一周结束了，就要把床炉收起来了什么的……感觉好遗憾啊。」',
      1,
    );
    await era.input();
    await acute.say_and_wait(
      '呼呼呼……毕竟很快气温就要升上去了呢。如果不赶紧收其床炉的话，可是会生出痱子的哦？',
    );
    era.printButton('「唉～～～就不能再晚一点收嘛？」', 1);
    await era.input();
    await acute.say_and_wait([
      '不行哦？要是 ',
      callname,
      ' 变成床炉废人的话，我可是也是会一起颓废的啦～',
    ]);
    era.printButton('「唔……拿自己来施压，这算使诈吧？」', 1);
    await era.input();
    await acute.say_and_wait(['吼吼吼……', callname, ' 哦，可不要怪我卑鄙——']);
    era.printButton('「明明去年你还躲在里面睡着了来着……」', 1);
    await era.input();
    await acute.say_and_wait('阿拉啦……我可什么都听不见哦？');
    await era.printAndWait(
      '在冬雪尚未消融之季，刚刚结束训练回到休息室的二人。就这样相处于床炉之中，一面插科打诨、一面透发着各自的汗水。',
    );
    await acute.say_and_wait('嗯……不过呢，果然还是得先洗个澡呢。');
    await era.printAndWait([
      '一面如是说着，',
      acute.get_colored_name(),
      ' 从床炉中挣脱，站起了身来。',
    ]);
    await acute.say_and_wait([
      '那我先去烧热水了哦，',
      callname,
      '。记得烧好了后早点来洗哦？',
    ]);
    await era.printAndWait([
      '虽然很想告知 ',
      acute.get_colored_name(),
      '，如今的科技进步已使得人们不再需要专门去进行烧洗澡水的工序。',
    ]);
    await era.printAndWait([
      '但 ',
      acute.get_colored_name(),
      ' 似乎还是很钟爱这样的发言——当然，似乎也没有纠正',
      acute.sex,
      '的必要。',
    ]);
    era.printButton('「了解——一路顺风～」', 1);
    await era.input();
    await acute.say_and_wait('还有呢——巧克力放在冰箱里了，记得吃哦？');
    era.printButton('「了解了解～放心吧，我知道啦。」', 1);
    await era.input();
    await era.printAndWait(
      '漫不经心得挥手回应，或许这不太雅观，但对于安心的对象而言，总能暴露出自己最慵懒的一面。',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' 缓缓得走向了洗浴室，关上门、传出了咔哒的声响。',
    ]);
    await era.printAndWait('坐在床炉前，眼神不由自主得瞟向了洗浴室——');
    await era.printAndWait('【咔哒、咔哒——】');
    await era.printAndWait('【哗哗哗～～～～】');
    await era.printAndWait('水声从门缝中传出……');
    await me.say_and_wait('…………', true);
    era.printButton('（真是一点防备都没有啊。）', 1);
    await era.input();
    await era.printAndWait('要不……去看看？');
    await era.printAndWait(
      '从床炉中艰难得爬出，以匍匐的姿态，行邪恶隐秘之事。',
    );
    await era.printAndWait(
      '穿越客厅，爬过客厅前的走廊，来到另一侧的洗浴室前。',
    );
    await era.printAndWait(
      '滴答的水声，正从面前的门缝中传来。仅需轻轻一推，便能遥望山峰的光彩。',
    );
    await me.say_and_wait('当然，这可不是什么变态的行径。', true);
    await me.say_and_wait(
      ['只不过 ', acute.get_colored_name(), ' 每次洗澡，都会洗三十分钟。'],
      true,
    );
    await me.say_and_wait('要我等三十分钟的话，那句只能乖乖的等了。', true);
    await me.say_and_wait(
      [
        '不过要等三十分钟的话，为什么不能在 ',
        acute.get_colored_name(),
        ' 所在的洗浴室门前等呢？',
      ],
      true,
    );
    await me.say_and_wait(
      '这段时间里，因为门没关紧，所以为了帮着关门而不小心看见洗浴室内的情况想必也是很合理的吧～',
      true,
    );
    await me.say_and_wait('噢———！', true);
    await era.printAndWait('却见那仙境之中，云雾缥缈。');
    await era.printAndWait(
      '银河水自天上而来，流双峰、过平湖、入浅葱，终归入那大江流。',
    );
    await era.printAndWait(
      '自古仁者好乐山，白皙之谷、玉粉之峰，白雾飞云渡，唯有苦心人，敢登峰。',
    );
    await era.printAndWait(
      '从来智者喜流水、灰丝发下银河流，滴答玉石化琼髓。唯有真缘人，可品度。',
    );
    await era.printAndWait(
      '此间仙人景，唯得偷光人，平视业以佳、仰望欲更好。怎是一字好得了？',
    );
    await me.say_and_wait('NICE～～～～！', true);
    era.printButton('（那么，靠近一点、再靠近一点……）', 1);
    await era.input();
    await era.printAndWait(
      '然而，就在这时，却听嘎登一声，休息室的大门被打开了——',
    );
    const minoru = get_chara_talk(301);
    await minoru.say_and_wait([me.actual_name, '在吗？这儿有一份你的快件……']);
    await era.printAndWait([
      '大门前，正趴在洗浴室门前的自己，被 ',
      minoru.get_colored_name(),
      ' 一览无余。',
    ]);
    await minoru.say_and_wait('………………');
    await era.printAndWait('哗啦啦啦啦啦～');
    await era.printAndWait('哗啦啦啦啦啦～');
    era.printButton('「………………」', 1);
    await era.input();
    await me.say_and_wait([
      '等等，',
      sys_get_colored_callname(0, 301),
      '，请听我解释。',
    ]);
    await me.say_and_wait('那什么，其实，我这是在……');
    await me.say_and_wait('凿壁偷——');
    await era.printAndWait('【啪！！！！！】');
    await era.printAndWait('清澈而干脆的声音，响彻在整个特雷森之上——');
    era.drawLine();
    await era.printAndWait([
      '三十分钟后，裹着浴袍的 ',
      acute.get_colored_name(),
      '，缓步从洗浴室里走出。',
    ]);
    await acute.say_and_wait([
      '阿拉啦……',
      callname,
      '，你坐在客厅里等了我三十分钟吗？真了不起呢——',
    ]);
    await acute.say_and_wait('不过……你右脸上的这个红印是？');
    era.printButton('「……被蚊子咬的。」', 1);
    await era.input();
    await acute.say_and_wait('那鼻子上的青斑？');
    era.printButton('「……被大号蚊子咬的。」', 1);
    await era.input();
    await acute.say_and_wait('那你头顶上的这个褐红色的液体……是？');
    era.printButton('「……被特大号蚊子咬的。」', 1);
    await era.input();
    await acute.say_and_wait('哦……原来这个季节也有这么大个蚊子啊——');
    await era.printAndWait([
      '若有所思着的 ',
      acute.get_colored_name(),
      '，就这样优哉游哉的走到了冰箱边，取出了一件物品。',
    ]);
    await acute.say_and_wait(
      '那么……为了表扬今天也很听话、很努力，做了一个乖孩子的训练员。给，这是我昨天做的巧克力哦。',
    );
    era.printButton('「……在说这些之前，先把衣服穿上可以吗？」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 倒也不是没有品赏浴袍的余情，只不过是自己刚刚被 ',
      minoru.get_colored_name(),
      '点了「如果再多看一眼裸体就会七窍流血爆体而亡」的穴位。',
    ]);
    await era.printAndWait([
      '出于自己的性命着想，还是让 ',
      acute.get_colored_name(),
      ' 尽早的穿上衣服比较好——',
    ]);
    await acute.say_and_wait(
      '年末礼物？不、不是啦，今天不是情人节吗？是互相送巧克力的日子呢……',
    );
    era.printButton(
      '「不……为什么突然像GalGame一样自顾自地推进话题了啊？而且哪有女主角身披浴袍送情人节巧克力的戏码啊？」',
      1,
    );
    await era.input();
    await acute.say_and_wait(
      '咕噜噜？怎么啦，是不喜欢巧克力吗？那这里还有果冻套装……',
    );
    era.printButton('「唔……倒也不是不喜欢——」', 1);
    await era.input();
    await era.printAndWait('……可恶，这已经算得上是诱惑了吧？');
    await era.printAndWait(
      '在训练员休息室里洗澡，还穿着浴袍在训练员身前晃动，这完全可以算作是「诱惑」了吧？',
    );
    await era.printAndWait([
      '还是说是「那种」吗？「那种」？我愿意≠我同意之类的情况……',
    ]);
    await era.printAndWait([
      '可恶……如果不是因为一时鬼迷心窍被 ',
      minoru.get_colored_name(),
      ' 点了穴道的话，',
      me.get_colored_name(),
      ' 现在必须立刻马上变身红色形态召唤无尽战神……',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait('算了，邪念什么的，还是先点到为止吧。');
    era.printButton('「其实……我也有一样东西要送给你来着。」', 1);
    await era.input();
    await acute.say_and_wait('唔噜姆？');
    await me.say_and_wait(
      '去年的情人节，我也收到了你送的巧克力了不是吗？嘛，虽然是略带惊吓的形式就是了……',
    );
    await me.say_and_wait(
      '本来的话呢，去年的白色情人节自己就应该回礼来着——只不过一直不知道该送些什么。',
    );
    await me.say_and_wait(
      '虽然想过送巧克力来回礼……但你一向不喜欢甜食。可送别的东西，又好像不太适合这个节日……',
    );
    await me.say_and_wait(
      '去年就是因为这个原因，外加上当时比较忙碌的比赛日程。所以就把回礼的事给耽搁了……',
    );
    await me.say_and_wait([
      '所以今年，姑且提前准备好了礼物——那么，祝你节日快乐，',
      acute.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '说罢，',
      me.get_colored_name(),
      ' 将藏在窗帘后的一捧花束取出，赠与了 ',
      acute.get_colored_name(),
      '。',
    ]);
    await acute.say_and_wait('啊……');
    await me.say_and_wait([
      '啊哈哈……这是 ',
      sys_get_colored_callname(0, 49),
      ' 给我的建议啦。虽然跟情人节有点不太契合就是了……怎样，喜欢吗？',
    ]);
    await acute.say_and_wait('……');
    era.printButton(`「……${acute.name}？」`, 1);
    await era.input();
    await acute.say_and_wait('……');
    await era.printAndWait([
      '不知为何，手捧着花束的 ',
      acute.get_colored_name(),
      ' 直接僵在了原地。',
    ]);
    await era.printAndWait(
      '无论如何搭话，也没有太大的回应，就这样等了三十秒左右——',
    );
    await acute.say_and_wait('呜……哇……啊……啊啊啊啊啊！！！');
    await acute.say_and_wait('不得了、不得了啦啊！！！！');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 手捧着花束，就这样直接冲出了休息室。',
    ]);
    await era.printAndWait('……当然，是穿着浴衣。');
    era.drawLine({ content: '校舍' });
    const a_call_j = sys_get_colored_callname(100, 48);
    await acute.say_and_wait([a_call_j, '，', a_call_j, '，不得了啦啊！～']);
    await jordan.say_and_wait([
      '怎么啦，',
      acute.get_colored_name(),
      '——呜啊，你怎么穿着浴衣啊！？',
    ]);
    era.drawLine({ content: '中庭' });
    const a_call_f = sys_get_colored_callname(100, 49);
    await acute.say_and_wait([a_call_f, '，', a_call_f, '，不得了啦啊！～']);
    await festa.say_and_wait([
      '浴袍？……这个花束，是我推荐给 ',
      sys_get_colored_callname(49, 0),
      ' 当给 ',
      acute.get_colored_name(),
      ' 的情人节礼物……原来如此。看来传说中的拳术师，很快就要隐退了啊——',
    ]);
    era.drawLine({ content: '特雷森学园 · 楼道' });
    const a_call_d = sys_get_colored_callname(100, 19);
    await acute.say_and_wait([a_call_d, '，', a_call_d, '，不得了啦啊！～']);
    await digital.say_and_wait([
      '唉唉唉！？穿着浴袍在楼道里乱跑的 ',
      acute.get_colored_name(),
      '！？虽然这个也很尊！但这一幕难道说是！？',
    ]);
    era.drawLine({ content: '天台' });
    await era.printAndWait('拖着残缺的身躯，终于在天台上追上了浴袍的倩影。');
    await acute.say_and_wait([
      callname[0],
      '……',
      callname,
      '，我…我…该怎么做啊？我有点不知如何是好了。',
    ]);
    era.printButton('「总之……先回休息室换上衣服吧？」', 1);
    await era.input();
    await acute.say_and_wait(['哎嘿嘿……抱歉呢，', callname, '。']);
    await acute.say_and_wait(
      '只是啊，在收到这么漂亮的花之后啊，感觉自己的心里也暖和起来了呢……啊，啊，啊啊啊……',
    );
    era.printButton('「即便如此，也不是穿着浴袍在学园里狂奔的理由啦……」', 1);
    await era.input();
    await era.printAndWait('……呼，不过倒也还好。');
    await era.printAndWait([
      '毕竟看',
      acute.sex,
      '这幅样子，应该也不是不喜欢 ',
      me.get_colored_name(),
      ' 送的厉害，只是单纯因为收到了平时没收到的礼物，而受到了一点小小的震撼。',
    ]);
    await era.printAndWait([
      '或许是因为给人的印象很朴素，所以应该没多少人送',
      acute.sex,
      '花吧？',
    ]);
    await acute.say_and_wait(['谢谢呢……', callname, '。']);
    await acute.say_and_wait(
      '没想到我竟然能收到这么漂亮的礼物呢，我会好好保管的。',
    );
    await acute.say_and_wait(
      '嗯…那么相对的回应……唔，好像有点不太对呢。按理说的话，受到礼物后表示感谢是对的，但这次是送出了礼物后然后又收到的回礼的情况呢～',
    );
    await acute.say_and_wait(['唔……总之，太谢谢你了哦，', callname, '。']);
    era.printButton('「啊哈哈……你喜欢就好呢。」', 1);
    await era.input();
    await era.printAndWait([
      '天台之上，身穿浴袍的',
      acute.sex,
      '与头顶正冒着褐红色液体的 ',
      me.get_colored_name(),
      '，互相表达着谢意。',
    ]);
    await era.printAndWait([
      '毫无疑问，这恐怕会将是 ',
      me.get_colored_name(),
      ' 人生当中 ',
      me.get_colored_name(),
      ' 印象最深的情人节了吧。',
    ]);
    await era.printAndWait([
      '总感觉跟 ',
      acute.get_colored_name(),
      ' 待在一起的话，就经常会遇上这种意料之外的惊喜呢——',
    ]);
    era.drawLine({ content: '地下审讯室' });
    await minoru.say_and_wait('最近收到学生举报。');
    await minoru.say_and_wait([
      '说 ',
      acute.get_colored_name(),
      ' 的训练员捧着花束向 ',
      acute.get_colored_name(),
      ' 求婚，然后强迫 ',
      acute.get_colored_name(),
      ' 穿着浴袍在校内狂奔以表示爱意。',
    ]);
    await minoru.say_and_wait(['有这回事吗，', me.actual_name, '训练员']);
    era.printButton('「………………」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 的肉身……已化为了，燃尽的灰——',
    ]);
  };
};
