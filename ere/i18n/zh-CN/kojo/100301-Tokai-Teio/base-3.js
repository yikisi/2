/**
 * @file 东海帝王 - 地下室
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} another
   * @param {CharaTalk} you
   */
  first_time(another, you) {
    era.print([
      '宿舍外，',
      you.get_colored_name(),
      ' 正好遇到了 ',
      another.get_colored_name(),
      '，与',
      another.sex,
      '愉快交谈了一段时间。',
    ]);
    era.print([
      '但是 ',
      you.get_colored_name(),
      ' 没有注意到，不远处有一双眼睛一直在注视着你们，而随着 ',
      you.get_colored_name(),
      ' 和',
      another.sex,
      '的互动时间越来越长，说的事情越来越靠近私人生活，笑声越来越大；那双瞳孔也抖动着，逐渐转暗……',
    ]);
    era.println();

    era.print(['它们主人的双手手紧紧捏住周围的物体，攥得指节发白。']);
    era.println();

    era.print([you.get_colored_name(), ' 转头，然后猛然睁开眼睛。']);
    era.print(['是现实？还是梦境？']);
    era.print([
      you.get_colored_name(),
      ' 发觉自己躺在一张装饰带点孩子气的双人床上……',
    ]);
    era.print(['眼前是陌生的天花板……']);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async flatter(teio, you, callname) {
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait([
        '抱歉，',
        callname,
        '，但不管怎样，我都不想你离开我……',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 试图用老样子哄自家的担当，但显然无用。',
      ]);
      era.println();

      await teio.say_and_wait([callname, ' 啊……现在由帝王大人做主哟。']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async ask_release_agree(teio, you, callname) {
    era.printButton('「已经玩够了吧，帝王。该放我出去了。」', 1);
    era.printButton('「帝王大人……我知道了，请让我走吧。」', 2);
    await era.input();

    await teio.say_and_wait('……哈。');
    await era.printAndWait([
      '跨坐在你对面椅子上的小',
      teio.uma_sex_title,
      '身体前倾，整个人探了过来，蓝黑色的双眸一眨不眨地盯着 ',
      you.get_colored_name(),
      '，仿佛一对墨色的门扉，吞没任何试图探入的光芒。',
    ]);
    await teio.say_and_wait('竟然说出这种话……我的训练员啊。');
    await era.printAndWait([
      you.get_colored_name(),
      ' 感到头皮发麻，但是仍不愿在此时示弱，回瞪着',
      teio.sex,
      '，心中抱有一丝希望，想在如今扭曲的虹膜后找到自己爱护的那个孩子。',
    ]);
    await era.printAndWait([
      '经历了仿佛长达半个世纪的对视，',
      teio.get_colored_name(),
      ' 垂下了头。',
    ]);
    await teio.say_and_wait(['对不起……', callname, '，我做错了。']);
    await teio.say_and_wait('门……现在是开着的，随你喜欢吧。');
    await era.printAndWait([
      '说完，',
      teio.sex,
      '便抱住自己的双腿转过身去，侧朝着 ',
      you.get_colored_name(),
      '，让开了路。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 朝门口走去，余光中却看到那个 ',
      you.get_colored_name(),
      ' 曾认识的',
      teio.child_sex_title,
      '正在颤抖着身体——',
    ]);
    era.printButton('放着不管', 1);
    era.printButton(`带${teio.sex}一起`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 没有浪费一点时间，迅速迈向自由的世界——至于',
        teio.sex,
        '？是时候给点教训了。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 没有犹豫，挪向那个缩成一团的身影，伸出手轻轻抚摸着',
        teio.sex,
        '的头，再从发辫根部一路向下，经过脊背，最终抵达尾稍，小',
        teio.uma_sex_title,
        '的身体一开始抖得更剧，后来逐渐平息下来。',
      ]);
      await era.printAndWait([
        '靠得更近，双手摸向',
        teio.sex,
        '的鬓角，屈指示意其转过头来，慢慢地，一张熟悉的脸庞现了出来，',
        you.get_colored_name(),
        ' 看着那双被泪水洗净的天蓝色瞳孔，不禁笑了。',
      ]);
      await you.say_and_wait('回去吧，一起。');
      await teio.say_and_wait('呜……');
      await era.printAndWait([
        teio.sex,
        '抹着脸，一只手小心又紧紧地抓住 ',
        you.get_colored_name(),
        ' 的袖口，滑到地面上，跌跌撞撞地走在前面，引 ',
        you.get_colored_name(),
        ' 出去。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async ask_release_reject(teio, you) {
    era.printButton('「已经玩够了吧，帝王。该放我出去了。」', 1);
    era.printButton('「帝王大人……我知道了，请让我走吧。」', 2);
    await era.input();

    await teio.say_and_wait('……哈。');
    await era.printAndWait([
      '跨坐在你对面椅子上的小',
      teio.uma_sex_title,
      '身体前倾，整个人探了过来，蓝黑色的双眸一眨不眨地盯着 ',
      you.get_colored_name(),
      '，仿佛一对墨色的门扉，吞没任何试图探入的光芒。',
    ]);
    await teio.say_and_wait('竟然说出这种话……我的训练员啊。');
    await era.printAndWait([
      you.get_colored_name(),
      ' 感到头皮发麻，但是仍不愿在此时示弱，回瞪着',
      teio.sex,
      '，心中抱有一丝希望，想在如今扭曲的虹膜后找到自己爱护的那个孩子。',
    ]);
    await teio.say_and_wait('训练员啊……');
    await era.printAndWait([
      teio.sex,
      '歪着头笑了笑——',
      you.get_colored_name(),
      ' 已经看过这个动作很多遍，但却仿佛第一次见到面前的这只',
      teio.sex_code === 1 ? '雄兽' : '雌兽',
      '。',
    ]);
    await teio.say_and_wait('你教过我的吧……不要对现实抱有太多幻想。');
    await era.printAndWait([
      '虽然 ',
      you.get_colored_name(),
      ' 不清楚自己在期待什么，但现状显而易见。',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   * @param {number} security_level
   * @param {string} cur_time
   */
  async ask_time(teio, you, callname, security_level, cur_time) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 向 ',
      teio.get_colored_name(),
      ' 询问了当前时间……',
    ]);
    const buffer = [];
    if (security_level > 3 - era.get('status:3:腿伤')) {
      buffer.push(() =>
        teio.say_and_wait(
          '有些东西还是不知道比较好呢……嘻嘻，似乎您把我当小孩子的时候很喜欢说这句话哟。',
        ),
      );
    } else {
      buffer.push(
        () => teio.say_and_wait('在一起的时间啊……是一生呢❤️'),
        () =>
          teio.say_and_wait([
            cur_time,
            '～呼……呵呵，不要急嘛，',
            callname,
            ' 是能耐得住气的大人，对吧',
          ]),
      );
      if (era.get('status:3:腿伤') > 0) {
        buffer.push(() =>
          teio.say_and_wait([
            cur_time,
            '……明明还没过多久，已经忍受不了我了吗，',
            callname,
            '？',
          ]),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_success(teio, you) {
    await era.printAndWait('如何……不可……');
    await era.printAndWait([
      you.get_colored_name(),
      '对现在的情形思来想去，脑中模拟了各种状况和计划，总觉得不行或已经被证明过无用。',
      you.get_colored_name(),
      ' 睁开双眼，打算用最简单也是最直接的办法——正面击败那位将 ',
      you.get_colored_name(),
      ' 幽禁于此的',
      { color: teio.color, content: '帝王' },
      '。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '回想起在训练员生涯中向担当提出过的各种用肌肉发力的法门，深吸一口气，准备再次亲身实践。',
    ]);
    era.println();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_escape(teio, you) {
    await teio.say_and_wait(['这什么啊，开玩笑的吧……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' 的惯用手切在',
      teio.sex,
      '的后颈上。',
    ]);
    await era.printAndWait([
      teio.sex,
      '抬起一只手，搭在 ',
      you.get_colored_name(),
      ' 的肩膀处，嘴唇张开，似要说些什么，但还是身子一软，倒了下去。',
    ]);
    await era.printAndWait([
      '成为胜者的 ',
      you.get_colored_name(),
      ' 小心扶住',
      teio.sex,
      '的身子，让',
      teio.sex,
      '贴墙而坐，转身面对锁好的大门。',
    ]);
    await era.printAndWait([
      '是时候了……这么长时间的监禁，沉淀，战斗，是该有个结果了。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 从贴身衣物里摸出偷偷用软泥拓下的，',
      teio.get_colored_name(),
      ' 的指纹印，摸向了记忆中锁的位置。',
    ]);
    await era.printAndWait([
      '如果 ',
      you.get_colored_name(),
      ' 的计算没错……这样就能出去了。',
    ]);
    era.println();
    await era.printAndWait([
      '提示音突然响起，',
      you.get_colored_name(),
      ' 不禁吓了一跳——还好，只是开锁的自动声反应。',
      you.get_colored_name(),
      ' 长出一口气，向着光明的外界走去……',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_prison(teio, you) {
    await teio.say_and_wait(['这什么啊，开玩笑的吧……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' 的惯用手切在',
      teio.sex,
      '的后颈上。',
    ]);
    await era.printAndWait([
      teio.sex,
      '抬起一只手，搭在 ',
      you.get_colored_name(),
      ' 的肩膀处，嘴唇张开，似要说些什么，但还是身子一软，倒了下去。',
    ]);
    await era.printAndWait([
      '成为胜者的 ',
      you.get_colored_name(),
      ' 小心扶住',
      teio.sex,
      '的身子，让',
      teio.sex,
      '贴墙而坐，转身面对锁好的大门。',
    ]);
    await era.printAndWait([
      '是时候了……这么长时间的监禁，沉淀，战斗，是该有个结果了。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 从贴身衣物里摸出偷偷用软泥拓下的，',
      teio.get_colored_name(),
      ' 的指纹印，摸向了记忆中锁的位置。',
    ]);
    await era.printAndWait([
      '如果 ',
      you.get_colored_name(),
      ' 的计算没错……这样就能出去了。',
    ]);
    era.println();
    await era.printAndWait([
      '提示音响起，咔哒一声，门再度反锁。',
      you.get_colored_name(),
      ' 心知不妙，后撤数步，吐一口气，屈膝发力，奋起平生之力，集全身重量狠狠冲撞到门上。',
    ]);
    era.println();

    await era.printAndWait([
      '巨声回荡在地下的空间里，',
      you.get_colored_name(),
      ' 被震了回来，眼冒金星，刚刚和',
      teio.uma_sex_title,
      '对抗留下的伤痛似乎也同时发作，',
      you.get_colored_name(),
      ' 喘着粗气，重心一沉便不由自主地坐了下去，视线恰好对上自家担当那张昏睡的脸。',
    ]);
    era.println();

    await era.printAndWait([
      teio.sex,
      '看上去就和那个 ',
      you.get_colored_name(),
      ' 熟知的',
      teio.uma_sex_title,
      '一样。',
    ]);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' 苦笑一声，伸手刮去',
      teio.sex,
      '睫毛上的液滴，不再反抗，接受了 ',
      you.get_colored_name(),
      ' 现在的命运。',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async battle_fail(teio, you, callname) {
    await era.printAndWait('如何……不可……');
    await era.printAndWait([
      you.get_colored_name(),
      '对现在的情形思来想去，脑中模拟了各种状况和计划，总觉得不行或已经被证明过无用。',
      you.get_colored_name(),
      ' 睁开双眼，打算用最简单也是最直接的办法——正面击败那位将 ',
      you.get_colored_name(),
      ' 幽禁于此的',
      { color: teio.color, content: '帝王' },
      '。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '回想起在训练员生涯中向担当提出过的各种用肌肉发力的法门，深吸一口气，准备再次亲身实践。',
    ]);
    era.println();
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait([callname, '？对，对不起！但，不要再离开我了……']);
    } else {
      await teio.say_and_wait([callname, '？！你没事吧……竟然想出这种法子……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 被',
        teio.teen_sex_title,
        '轻松摆平，看样子',
        teio.sex,
        '的惊讶要更甚于愤怒。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_success(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 闭着眼，佯装入眠，聚精会神地思考现在的状况。',
    ]);
    await era.printAndWait([
      '显然，现在难以期待救援，不如指望自己。而以 ',
      you.get_colored_name(),
      ' 担当目前的精神状态……',
      you.get_colored_name(),
      ' 没有说服',
      teio.sex,
      '放走自己的自信，正面对抗……也不是什么好选择。',
    ]);
    await era.printAndWait(['那么，方法就只有一个了。']);
    await era.printAndWait([
      you.get_colored_name(),
      ' 用训练员的头脑布置了战术，以身入局，等待时机。',
    ]);
    await era.printAndWait([
      '细碎的足音靠近，一道气息飘过，窸窸窣窣的除衣声响起……',
    ]);
    await era.printAndWait([
      '就是现在！',
      you.get_colored_name(),
      ' 由静转动，整个人从床铺上一跃而起，双手分开，去揪',
      teio.sex,
      '的头发和尾巴——',
    ]);
    era.println();
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait(['啊——']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '反应奇快，身体却慢了一瞬，便让 ',
        you.get_colored_name(),
        ' 一个不慎，扑到并抱住了',
        teio.sex,
        '的小腿，两个人一同跌回松软的铺卧上……',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……请不要离开我……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' 看着',
        teio.sex,
        '，想说什么，但还是没有张嘴。',
      ]);
      await era.printAndWait([
        '训练员与',
        you.sex,
        '的担当',
        teio.uma_sex_title,
        '对视良久，默契地都转过头去。',
      ]);
      era.println();

      await teio.say_and_wait(['……我放你出去就是了。']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '牵着 ',
        you.get_colored_name(),
        ' 走向门外，一声极细但又清晰的话语传到 ',
        you.get_colored_name(),
        ' 的耳边。',
      ]);
      era.println();

      await teio.say_and_wait(['对不起。']);
    } else {
      await teio.say_and_wait(['呀！']);
      era.println();

      await era.printAndWait([
        '许久未闻的',
        teio.teen_sex_title,
        '本音尖叫响起，',
        teio.sex,
        '被 ',
        you.get_colored_name(),
        ' 制住，地位再次反转。',
      ]);
      era.println();

      await teio.say_and_wait(['……', callname, '。']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' 以结合了熟练按摩和情爱挑逗手法的摸索来回应',
        teio.sex,
        '，',
        teio.sex,
        '逐渐脱力，声音转为喘息……',
      ]);
      era.println();

      await teio.say_and_wait(['没有……钥匙……我没……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' 明白了',
        teio.sex,
        '的意思，顶着',
        teio.sex,
        '来到门前，顺势推门。',
      ]);
      era.println();

      await era.printAndWait(['轻而易举地，门开了……']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_fail(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 闭着眼，佯装入眠，聚精会神地思考现在的状况。',
    ]);
    await era.printAndWait([
      '显然，现在难以期待救援，不如指望自己。而以 ',
      you.get_colored_name(),
      ' 担当目前的精神状态……',
      you.get_colored_name(),
      ' 没有说服',
      teio.sex,
      '放走自己的自信，正面对抗……也不是什么好选择。',
    ]);
    await era.printAndWait(['那么，方法就只有一个了。']);
    await era.printAndWait([
      you.get_colored_name(),
      ' 用训练员的头脑布置了战术，以身入局，等待时机。',
    ]);
    await era.printAndWait([
      '细碎的足音靠近，一道气息飘过，窸窸窣窣的除衣声响起……',
    ]);
    await era.printAndWait([
      '就是现在！',
      you.get_colored_name(),
      ' 由静转动，整个人从床铺上一跃而起，双手分开，去揪',
      teio.sex,
      '的头发和尾巴——',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 以一个滑稽的姿势倒在床上。',
    ]);
    era.println();

    await teio.say_and_wait([callname, '……你做什么呢。']);
    era.println();

    await era.printAndWait([
      '结果似乎只是差点逗笑了担当，并且加强了',
      teio.sex,
      '的警惕心。',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  find_escape(teio, you) {
    era.print(['不知为何，', teio.get_colored_name(), ' 已经离开有段时间了。']);
    era.print([
      '是去上课？训练？参加活动？还是说——一想到这里 ',
      you.get_colored_name(),
      ' 头就更大了——对学校的管理人员编造谎言来解释自己的失踪？',
    ]);
    era.print([
      '可不能再拖延了，',
      you.get_colored_name(),
      ' 心想，等待救援不如自己抓住机会逃跑。',
    ]);
    era.println();
    era.print([
      you.get_colored_name(),
      ' 轻推房门——这次居然没锁！',
      you.get_colored_name(),
      ' 大喜，跨出门槛，又不禁轻抚胸口，试图让激动狂跳的心脏安静些，以免惊动了黑暗……',
    ]);
    teio.say('哎……');
    era.print(['霎时间，刚刚还在奔涌的血液凝固了。']);
    era.print([
      '一个温热又带着清香的身子贴了过来，一对纤细但有力的手臂环抱住了 ',
      you.get_colored_name(),
      ' 的腰胯，使 ',
      you.get_colored_name(),
      ' 动弹不得。',
    ]);
    teio.say(
      '明明以前还用过这招来检查我自主训练时会不会偷懒……大人的伎俩，呵呵。',
    );
    era.print([
      '地位逆转的现在，',
      you.get_colored_name(),
      ' 只能被',
      teio.sex,
      '架着回到了屋内，等待着「惩罚」……',
    ]);
  },
};
