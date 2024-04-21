const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (tachyon, me, callname) => {
  await era.printAndWait([
    me.get_colored_name(),
    ' 从 ',
    tachyon.get_colored_name(),
    ' 手中接过药剂',
  ]);
  era.println();
  await tachyon.say_and_wait([callname, '……']);
  era.println();
  await era.printAndWait([tachyon.sex, '抬起头来，眼中带着担心']);
  await era.printAndWait([
    '是担心自己把药喝下去吗，还是担心自己……不肯喝下去？',
  ]);
  await era.printAndWait([
    '说实话，就连 ',
    me.get_colored_name(),
    ' 自己都不敢肯定接下来的行为正确与否',
  ]);
  await era.printAndWait([
    '但 ',
    me.get_colored_name(),
    ' 可以保证，接下来的一切绝对都是出自本心',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 将手上的药剂……倒入了一旁的废弃药品处理桶',
  ]);
  era.println();
  await tachyon.say_and_wait('………………啊');
  era.println();
  await era.printAndWait([
    '在 ',
    me.get_colored_name(),
    ' 倾倒试管的过程中，',
    tachyon.get_colored_name(),
    ' 都没有发出任何声音，',
  ]);
  await era.printAndWait([
    '直到 ',
    me.get_colored_name(),
    ' 全部倒完，彷佛一世纪一般长久的时间过去后，',
    tachyon.sex,
    '才发出了小声的一声「啊」，彷佛直到此时才想到，自己应该要做出反应一样',
  ]);
  era.println();
  await tachyon.say_and_wait([callname, '……你知道，这代表着什么吗？']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 将试管倒转，确认里面的药剂已经一滴不剩倒光',
  ]);
  await era.printAndWait([
    '此时，',
    tachyon.get_colored_name(),
    ' 总算组织好了语言，将编织的话语倾泻',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '我的梦想……我所追求的可能性，你的这个选择，意思就是在说，',
  );
  await tachyon.say_and_wait([
    '要我，',
    tachyon.get_colored_name(),
    '，将这一切完全放弃，彻彻底底的放弃，变成一名普通的，和其他的青春期',
    tachyon.get_teen_sex_title(),
    '没有任何差别的……',
  ]);
  await tachyon.say_and_wait([
    '陷入爱河的普通',
    tachyon.get_child_sex_title(),
    '子，你的意思，是要我放弃其他的可能性，选择和你在一起的可能性……',
  ]);
  era.println();
  await era.printAndWait([tachyon.sex, '语速飞快，结结巴巴的说道']);
  await era.printAndWait(
    '彷佛是在劝说自己趁现在快点改变主意，想让自己知道这个决定是多么不明智的一个选择，',
  );
  await era.printAndWait([
    '希望自己能够为了',
    tachyon.sex,
    '而牺牲，但又不想当坏人，所以才如此自私自利无耻的劝告着自己',
  ]);
  era.println();
  await era.printAndWait([
    '但是，与',
    tachyon.sex,
    '相处甚久的 ',
    me.get_colored_name(),
    ' 看得出来，',
    tachyon.sex,
    '话语中隐藏的真实',
  ]);
  await era.printAndWait('结巴的原因是因为害怕，害怕一切都只是自己的误会');
  await era.printAndWait(
    '语速飞快的原因是不想听见反悔，就彷佛小孩子故意把话讲的不清不楚来诱导人答应',
  );
  await era.printAndWait(
    '如同一名在签下合同前，重复诉说契约内容以免当事人反悔的保险推销员一般',
  );
  await era.printAndWait(
    '判断这一切的依据，是明明说着拒绝的话语，却仍在不停晃动的尾巴，',
  );
  await era.printAndWait(
    '直直竖起的耳朵，还有或许自以为没人发现，却十分明显流露在脸上的——安心的神情',
  );
  era.println();
  await tachyon.say_and_wait([
    '你明白吗，',
    callname,
    '……你不是一直想见到可能性的彼方吗？要是这样的话就真的……',
  ]);
  era.println();
  await era.printAndWait('够了');
  await era.printAndWait([
    '虽然说，继续看',
    tachyon.sex,
    '还能虚张声势到什么时候也挺有意思的',
  ]);
  await era.printAndWait([
    '但那样的话之后肯定会被恼羞成怒的',
    tachyon.sex,
    '报复的吧',
  ]);
  await era.printAndWait([
    '因此，',
    me.get_colored_name(),
    ' 思考着，用什么样的方法才能表现出 ',
    me.get_colored_name(),
    ' 最深的觉悟',
  ]);
  era.print([me.get_colored_name(), ' 决定……']);
  era.printButton(`抱住${tachyon.sex}`, 1);
  era.printButton(`亲吻${tachyon.sex}`, 2);
  era.printButton(`轻咬${tachyon.sex}的耳朵`, 3);
  const temp = await era.input();
  await era.printAndWait([tachyon.sex, '的喋喋不休嘎然而止']);
  switch (temp) {
    case 1:
      await era.printAndWait([
        '人在遇见突发现象时，是无法维持住一心二用的，',
        tachyon.get_uma_sex_title(),
        '也是如此',
      ]);
      await era.printAndWait([
        '因此理所当然的，被 ',
        me.get_colored_name(),
        ' 忽然的拥抱惊呆，沉浸于那熟悉的雄性气味，',
      ]);
      await era.printAndWait([
        '尽情享受这份温存的 ',
        tachyon.get_colored_name(),
        '，当然也无法开口继续',
        tachyon.sex,
        '的长篇大论了',
      ]);
      break;
    case 2:
      await era.printAndWait(
        '自古以来流传下来的表达爱意的方法，或许才是既能堵住嘴又能表达感情的最强技能',
      );
      await era.printAndWait([
        tachyon.sex,
        '的唇就如',
        tachyon.sex,
        '本人一般，看似强硬的防线，却在接触的瞬间崩溃，露出了柔软娇嫩的内里。',
      ]);
      await era.printAndWait(
        '坚如壁石的牙城，在舌尖的试探下却是瞬间崩溃，只能任由敌军的长驱直入，',
      );
      await era.printAndWait(
        '看似忠贞的舌头，也在触碰到自己粗长的舌头瞬间化为了小鸟依人，被动的被采撷着',
      );
      break;
    case 3:
      await era.printAndWait('取而代之的是忍不住出口的一声娇吟');
      await era.printAndWait([
        '众所周知，大多数',
        tachyon.get_uma_sex_title(),
        '所特有，与人类不同的器官，都是',
        tachyon.sex,
        '们最为敏感的部位',
      ]);
      await era.printAndWait([
        '因此，谁能责怪 ',
        tachyon.get_colored_name(),
        ' 发出的令人想入非非的娇声呢',
      ]);
      await era.printAndWait([
        '不如说，被 ',
        me.get_colored_name(),
        ' 抱在怀里捏住耳朵，却还能维持站立，不瘫软在 ',
        me.get_colored_name(),
        ' 怀中的 ',
        tachyon.get_colored_name(),
        '，已经相当了不起了',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……不……等等……好痒……']);
      era.println();
      await era.printAndWait([
        '听见了 ',
        tachyon.get_colored_name(),
        ' 那比起拒绝更像是欲迎还拒的声音，',
        me.get_colored_name(),
        ' 变换了手法，以更加粗暴的力道，或揉或搓',
        tachyon.get_uma_sex_title(),
        '那弹性十足，敏感的耳尖',
      ]);
      era.println();
      await tachyon.say_and_wait('咿……等等……不可以……');
      era.println();
      await era.printAndWait([
        '在坚持了足足半分钟后，',
        tachyon.get_colored_name(),
        ' 终于败下阵来，瘫软在 ',
        me.get_colored_name(),
        ' 的怀中',
      ]);
  }
  await era.printAndWait([
    '直到',
    tachyon.sex,
    '完全放弃挣扎，',
    me.get_colored_name(),
    ' 才放开了',
    tachyon.sex,
  ]);
  era.println();
  await tachyon.say_and_wait([callname, '……']);
  era.println();
  await era.printAndWait([
    tachyon.sex,
    '似乎还沉浸于刚才的体验之中，无法回过神来',
  ]);
  await era.printAndWait([
    '而在这个瞬间，',
    me.get_colored_name(),
    ' 开始了自己一生一次的真心话吐露',
  ]);
  era.printButton('「我爱你，爱丽速子」', 1);
  await era.input();
  await tachyon.say_and_wait('！！！！？？？？');
  era.println();
  await era.printAndWait([
    '在听见 ',
    me.get_colored_name(),
    ' 说的话后，',
    tachyon.sex,
    '的尾巴瞬间倒竖了起来，彷佛一只炸毛的猫',
  ]);
  era.println();
  await tachyon.say_and_wait([
    new Array(5).fill(callname.substring(0, 1)).join(''),
    callname,
    '！？你在说什么！？',
  ]);
  era.println();
  await era.printAndWait([
    '哎呀，',
    tachyon.get_colored_name(),
    ' 的耳朵原来不太好吗',
  ]);
  await era.printAndWait('那么，就再多说几遍吧');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 回想起了第一次看见 ',
    tachyon.get_colored_name(),
    ' 的时候',
  ]);
  await era.printAndWait([tachyon.sex, '的跑法，', tachyon.sex, '的虚幻']);
  await era.printAndWait([
    '无论何者都令 ',
    me.get_colored_name(),
    ' 陷入疯狂，着迷于',
    tachyon.sex,
  ]);
  await era.printAndWait(['没错，是「', tachyon.sex, '」']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 回想起了',
    tachyon.sex,
    '的出道赛',
  ]);
  await era.printAndWait(
    '如光一般，理所当然的参加比赛，理所当然的超越一切，理所当然的赢下比赛',
  );
  await era.printAndWait([
    '说出「比赛不过是实验结果的验证」，表情冷峻，甚至以冷酷的态度面对比赛的',
    tachyon.sex,
  ]);
  await era.printAndWait(['没错，是「', tachyon.sex, '」']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 回想起了 ',
    me.get_colored_name(),
    ' 第一次给',
    tachyon.sex,
    '做便当的时候',
  ]);
  await era.printAndWait('想要见证自己的可能性，为此甚至愿意以自身作为实验品');
  await era.printAndWait([
    '期待着超越想象，突破极限的可能性，眼神疯狂的',
    tachyon.sex,
  ]);
  era.println();
  await era.printAndWait(['没错，是「', tachyon.sex, '」']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 回想起了彻夜未眠，通宵实验的',
    tachyon.sex,
  ]);
  await era.printAndWait('为了研究能够奉上身体，为了梦想能够抛弃健康');
  await era.printAndWait([
    '肉体狼狈邋遢，眼神却闪烁着对梦想的向往的',
    tachyon.sex,
  ]);
  await era.printAndWait(['没错，是「', tachyon.sex, '」']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 回想起了第一次一起外出时的',
    tachyon.sex,
  ]);
  await era.printAndWait(['变色高丽菜汁的风波和', tachyon.sex, '的赌气']);
  await era.printAndWait([
    '为了那样的事情而任性，为了夹到的娃娃而感到欣喜，那样的，普通的',
    tachyon.sex,
  ]);
  await era.printAndWait(['没错，是「', tachyon.sex, '」']);
  era.println();
  await era.printAndWait([
    '最后……是眼前，在 ',
    me.get_colored_name(),
    ' 面前的',
    tachyon.sex,
  ]);
  await era.printAndWait([
    '紧张的游移视线，等待着 ',
    me.get_colored_name(),
    ' 的再次开口的',
    tachyon.sex,
  ]);
  await era.printAndWait([
    '原本淡漠感情的双眼，现在已经充满了幸福及爱意的',
    tachyon.sex,
  ]);
  await era.printAndWait([
    '羞红着脸颊，看上去……就是一名彻彻底底沉醉于爱情，只是名普通的',
    tachyon.get_teen_sex_title(),
    '的',
    tachyon.sex,
  ]);
  era.printButton(
    '「我爱你，爱丽速子，我爱的是『你』，而不是你的跑法，你的梦想，你的可能性」',
    1,
  );
  await era.input();
  await era.printAndWait('没有错');
  await era.printAndWait(['一切的主体都在于', tachyon.sex, '']);
  await era.printAndWait([
    '一开始的自己，或许真的只是被',
    tachyon.sex,
    '的跑法及疯狂所吸引',
  ]);
  await era.printAndWait([
    '但如今，',
    tachyon.get_colored_name(),
    ' 这名',
    tachyon.get_uma_sex_title(),
    '在 ',
    me.get_colored_name(),
    ' 心目中的地位，已经胜过了那些',
  ]);
  await era.printAndWait([me.get_colored_name(), ' 的想法也早就已经改变']);
  await era.printAndWait([
    '不是「为了达成 ',
    tachyon.get_colored_name(),
    ' 的梦想，因此任劳任怨」',
  ]);
  await era.printAndWait([
    '而是「为了 ',
    tachyon.get_colored_name(),
    '，能够拼尽自己的一切」',
  ]);
  await era.printAndWait('所以……');
  era.printButton(
    '「就算哪天，你不再奔跑，不想再追求可能性了，我也会一如既往的爱着你」',
    1,
  );
  await era.input();
  await era.printAndWait('说到底，从头到尾就是这么简单的问题');
  await era.printAndWait([
    '就好像「老妈和老婆掉进水里，你会先救哪一个」一样的问题，只是问题的主角换成了「',
    tachyon.get_colored_name(),
    '」和「',
    tachyon.get_colored_name(),
    ' 的才能」',
  ]);
  await era.printAndWait([
    '…………能够把如此简单的问题变得这么复杂，这或许也是',
    tachyon.sex,
    '的本事吧',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 忍不住为',
    tachyon.sex,
    '的麻烦而露出苦笑',
  ]);
  await era.printAndWait('但是，这样就能安心了吧');
  era.println();
  await tachyon.say_and_wait([callname, '……']);
  era.println();
  await era.printAndWait([
    '这么想着的 ',
    me.get_colored_name(),
    ' 看见了',
    tachyon.sex,
    '脸上喜极而泣的泪水，和绽放的笑颜',
  ]);
  await era.printAndWait(['就彷佛大雨过后的大波斯菊一般娇艳']);
  era.drawLine();
  await tachyon.say_and_wait([callname, '～～今天的药来了']);
  era.println();
  await era.printAndWait([
    '第二天，',
    me.get_colored_name(),
    ' 看着明明前一天还说自己已经再也无法进行研究的某名',
    tachyon.get_uma_sex_title(),
    '，',
  ]);
  await era.printAndWait(
    '手上拿着比平时看起来还更不妙的荧光药剂一蹦一跳的进了训练员室',
  );
  era.println();
  await tachyon.say_and_wait(
    '快点快点，今天的药可是至今为止发光类型的集大成，喝下去可以发出两万四千种RGB色哦～～',
  );
  await tachyon.say_and_wait(
    '对了对了，周末要出门做实地实验，所以给我把原本的安排都推掉，听懂了吗？',
  );
  await tachyon.say_and_wait(
    '另外今天的便当早半个小时给我送过来，有个重要的实验要做',
  );
  await tachyon.say_and_wait(
    '所以记得……啊尽量不要送流质的来，会影响实验情况的',
  );
  era.println();
  await era.printAndWait(
    '一进来，兴奋的研究者就开始了关于实验和研究的喋喋不休',
  );
  await era.printAndWait([
    '即便是 ',
    me.get_colored_name(),
    '，看到这一幕也不禁愣神了半天',
  ]);
  await era.printAndWait(
    '当然，不是因为对方的无理要求，要说的话平常的要求比这更无理多了，而是……',
  );
  era.printButton('「说好的无法再研究了呢？」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    ' 还记得，昨天哭的泪眼汪汪，说自己再也无法进行研究，再也无法发现可能性的 ',
    tachyon.get_colored_name(),
    ' 那可怜兮兮的模样',
  ]);
  await era.printAndWait([
    '现在的',
    tachyon.sex,
    '，完全看不出前一天的沮丧和崩溃',
  ]);
  era.println();
  await tachyon.say_and_wait(['……我说的是真的哦，', callname, ' ']);
  await tachyon.say_and_wait(
    '我现在已经没有办法再专注于对自身可能性的研究了，',
  );
  await tachyon.say_and_wait('满脑子无时无刻想的都是你的事情……');
  await tachyon.say_and_wait(
    '就连现在，心里都在想着你高兴的模样、生气的模样、害羞的模样、紧张的模样……',
  );
  await tachyon.say_and_wait('把我变成这样，你可必须负起责任才行啊');
  era.printButton('「对……对不起？」', 1);
  await era.input();
  await era.printAndWait('这，这算自己的错吗？');
  await era.printAndWait('话说被这样直球倾诉爱意，果然还是很羞耻啊……');
  await era.printAndWait('不对，这跟前面说的又有什么关系了');
  await era.printAndWait(
    '还是没解释为什么现在还是一如往常的在做着研究不是吗？',
  );
  era.println();
  await tachyon.say_and_wait('所以啊……我已经无法再只想着自己了');
  await tachyon.say_and_wait(
    '我现在能够想到的一切可能性……都必须要有你陪在身边，今后能思考的，或许也只有『和你』一起的可能性了吧',
  );
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 忽然有些无法明白',
    tachyon.sex,
    '的意思，只能直盯盯的看着 ',
    tachyon.get_colored_name(),
  ]);
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 在 ',
    me.get_colored_name(),
    ' 的注视下，也开始感到有些不自在',
  ]);
  await era.printAndWait(
    '然后，彷佛水坝溃堤一般，原本若无其事的表情在来自爱人注视的最后一根稻草后',
  );
  await era.printAndWait('瞬间化为了满脸泛红的羞耻表情');
  era.println();
  await tachyon.say_and_wait('所以说……就是……周末的实验……可以空出时间来吧……');
  await tachyon.say_and_wait(
    '是为了测试一般人说的，那个，就是，被称为约会的行为对两人的适用程度…………',
  );
  await tachyon.say_and_wait(
    '总之！星期六早上九点，不准迟到！还有要带我的早餐来！就这样！',
  );
  await tachyon.say_and_wait(
    '还有，今天中午的便当……可以的话……尽量弄成方便一口吃的……',
  );
  await tachyon.say_and_wait(
    '那个……想做『啊——嗯』行为在恋人关系中的心跳指数测定……可以吧？',
  );
  era.println();
  await era.printAndWait([
    '看见',
    tachyon.sex,
    '撑着害羞把话说完的模样，',
    me.get_colored_name(),
    ' 不禁失笑',
  ]);
  await era.printAndWait('这种情况下，该怎么回答呢');
  await era.printAndWait('对这名刁蛮、任性妄为，最可爱的疯狂科学家');
  await era.printAndWait([
    '对这名亲爱、惹人怜惜，最挚爱的恋爱',
    tachyon.get_teen_sex_title(),
  ]);
  era.println();
  await me.say_and_wait([
    '是的……我的',
    tachyon.sex_code - 1 ? '公主' : '王子',
    '大人',
  ]);
  await print_event_name('超光速的公主', tachyon);
  await sys_love_uma_in_event(32);
};
