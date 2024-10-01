const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (tachyon, me, callname) => {
  await print_event_name('Tachyon', tachyon);
  await tachyon.say_and_wait([callname, '，可以喊一下我的名字吗？']);
  era.println();

  await era.printAndWait(['名字？']);
  await era.printAndWait([
    me.get_colored_name(),
    ' 好奇地望着 ',
    tachyon.get_colored_name(),
    '。',
  ]);
  await era.printAndWait([
    '今天一进训练员室，就被 ',
    tachyon.get_colored_name(),
    ' 強迫压在沙发上。',
  ]);
  await era.printAndWait([
    '接着',
    tachyon.sex,
    '拉出了用来写训练计画的小白板，一副老师要开始讲课的模样，这……不知道又是玩哪一出。',
  ]);
  era.println();

  await tachyon.say_and_wait(['好啦，快点快点，喊一下。']);

  era.printButton('「爱丽速子」', 1);
  await era.input();

  await era.printAndWait([
    tachyon.get_colored_name(),
    '，自己独一无二的爱马的名字。',
  ]);
  await era.printAndWait([
    '听见后，',
    tachyon.get_colored_name(),
    ' 眯起了眼睛，仿佛十分受用的样子',
  ]);
  era.println();

  await tachyon.say_and_wait(['嗯……不错']);
  await tachyon.say_and_wait(['那么……你知道速子（tachyon）是什么意思吗？']);
  era.println();

  await era.printAndWait(['速子？']);

  era.printButton('「不知道……」', 1);
  era.printButton('「是……超光速的粒子吧？」', 2);

  if ((await era.input()) === 1) {
    await tachyon.say_and_wait(
      '唔……身为我的豚鼠最起码这种事情要掌握在心里才行哦。',
    );
  } else {
    await tachyon.say_and_wait('没错，算你及格吧。');
  }

  await tachyon.say_and_wait([
    '速子，是一种以超越光速的速度，在虚数时间内航行的粒子。',
  ]);
  await tachyon.say_and_wait([
    '在狭义相对论中，速子具有类空的四维动量和虚数的相对时间，是一种与一般物质交互作用不明显而目前无法被侦测的假想粒子，假设根据电磁辐射机制来看的话……',
  ]);

  era.printButton('「等、等等！」', 1);
  await era.input();

  await tachyon.say_and_wait(['肃静，', callname, '，让我说完。']);
  era.println();

  await era.printAndWait([
    '看着 ',
    tachyon.get_colored_name(),
    ' 在白板上写下的各种公式导致有些头昏脑胀的 ',
    me.get_colored_name(),
    ' 连忙想要暂停消化一下。',
  ]);
  await era.printAndWait([
    '但 ',
    tachyon.get_colored_name(),
    ' 拍了拍白板，依旧故我的继续说了下去。',
  ]);
  era.println();

  await tachyon.say_and_wait([
    '然后……因为类时与类空的区别，因此速子的存在有两个无法跨越的障碍。',
  ]);
  era.println();

  await era.printAndWait(['说到这，', tachyon.get_colored_name(), ' 顿了顿。']);
  await era.printAndWait([
    '身为好学生，老师明显在卖关子的时候就该适时的提问吧。',
  ]);
  await era.printAndWait([
    '不知不觉，',
    me.get_colored_name(),
    ' 也有些进入角色了。',
  ]);

  era.printButton('「障碍？」', 1);
  await era.input();

  await tachyon.say_and_wait(['没错……假设速子真的存在的话，会碰到的限制。']);
  await tachyon.say_and_wait([
    '简单来讲，就是……『无法与光速下的物质进行接触』，以及『无法降低到光速之下』，首先先从第一个开始说起，无法接触的原因是对因果律的违背……',
  ]);
  era.println();

  await era.printAndWait([tachyon.get_colored_name(), ' 继续开始了说明']);
  await era.printAndWait([
    '但 ',
    me.get_colored_name(),
    ' 的脑袋已经没有停留在',
    tachyon.sex,
    '那些令人感受到大脑被知识强奸的难懂解析。',
  ]);
  era.println();

  await era.printAndWait([
    '由于 ',
    tachyon.get_colored_name(),
    ' 的关系，就算知道速子指的是超光速粒子的tachyon，却还是会忍不住想到在身旁的 ',
    tachyon.get_colored_name(),
    '。',
  ]);
  await era.printAndWait([
    '渐渐的，',
    me.get_colored_name(),
    ' 的脑海中忽然浮现出一幅画面。',
  ]);
  era.println();

  await era.printAndWait([
    '在某个光速之上的世界，光速以下的物质无法抵达的空间中。',
  ]);
  await era.printAndWait([
    '在这连时间都会被嫌弃太过缓慢的世界中，唯一存在的',
    { color: tachyon.color, content: '速子' },
    '。',
  ]);
  await era.printAndWait([
    '无法与光速之下的世界进行交互，只能以超光速的形式存在的',
    { color: tachyon.color, content: '速子' },
    '。',
  ]);
  await era.printAndWait(['绝对的速度，绝对的孤独。']);
  era.println();

  await tachyon.say_and_wait(['…………']);
  era.println();

  await era.printAndWait([
    '不知不觉，',
    me.get_colored_name(),
    ' 发现作为背景音存在的讲解分析声不知何时已经停下。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 回过神来，才发现 ',
    tachyon.get_colored_name(),
    ' 正盯着自己，不知道已经这么看了多久。',
  ]);
  era.println();

  await tachyon.say_and_wait([callname, ' ？在想什么呢？']);

  era.printButton('「没什么……」', 1);
  era.printButton('「只是觉得这样的话，速子好孤独啊……」', 2);
  await era.input();

  await era.printAndWait([
    '在 ',
    tachyon.get_colored_name(),
    ' 的提问下，',
    me.get_colored_name(),
    ' 吐出了自己的想法。',
  ]);
  await era.printAndWait([
    '某种意义上，以前的 ',
    tachyon.get_colored_name(),
    ' 也有点像这样。',
  ]);
  await era.printAndWait([
    '由于过度的才智，导致身边的人无法看见与',
    tachyon.sex,
    '相同的世界。',
  ]);
  await era.printAndWait([
    '孤立于世界，眼中只有自己目标的',
    { color: tachyon.color, content: 'Tachyon' },
    '。',
  ]);
  await era.printAndWait([
    '然而……哪怕是这样的 ',
    tachyon.get_colored_name(),
    ' 都还是能够与人接触，被人影响。',
  ]);
  await era.printAndWait([
    '要是连物理上的空间都被隔绝，那么',
    { color: tachyon.color, content: '速子' },
    '……',
  ]);
  await era.printAndWait([
    '不，明明在讨论的是超光速粒子而不是 ',
    tachyon.get_colored_name(),
    ' 不是吗？',
  ]);
  await era.printAndWait([
    '这样离题，',
    tachyon.get_colored_name(),
    ' 会生气的吧？',
  ]);
  era.println();

  await era.printAndWait([
    me.get_colored_name(),
    ' 已经做好了在 ',
    tachyon.get_colored_name(),
    ' 故作生气的微斥后被其纠正想法的准备。',
  ]);
  await era.printAndWait(['但……']);
  era.println();

  await tachyon.say_and_wait(['哦？', callname, '，你是这样想的吗？']);
  era.println();

  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 平静地说着，将白板推开，朝着坐在沙发上的 ',
    me.get_colored_name(),
    ' 靠近。',
  ]);
  await era.printAndWait([
    '黯沉的红色眼眸望着 ',
    me.get_colored_name(),
    '，一如既往的，读不懂',
    tachyon.sex,
    '究竟在想些什么。',
  ]);
  era.println();

  await tachyon.say_and_wait([
    '可是，如果说那就是跨越极限的代价呢？如果说，假设而已……失去现有的一切，变成绝对的孤独，就是超越极限需要付出的东西……你能够接受吗，',
    callname,
    '？',
  ]);
  era.println();

  await era.printAndWait(['奇怪。']);
  await era.printAndWait(['好奇怪。']);
  await era.printAndWait([
    '明明和 ',
    tachyon.get_colored_name(),
    ' 之间的距离没有变近，也没有变远。',
  ]);
  await era.printAndWait([
    '但眼前的 ',
    tachyon.get_colored_name(),
    ' 忽然给了人一种错觉。',
  ]);
  await era.printAndWait(['似近似远。']);
  await era.printAndWait(['近的伸手就能触摸。']);
  await era.printAndWait(['远的下一秒就会遁离尘世。']);
  await era.printAndWait(['不过比起这些，现在更重要的应该是做出回答才对吧？']);
  await era.printAndWait(['仔细想想……']);
  era.println();

  await era.printAndWait([me.get_colored_name(), ' 认为……']);

  era.printButton('「可以」（升级关系）', 1);
  era.printButton('「不行」（暂不升级）', 2);

  if ((await era.input()) === 1) {
    await era.printAndWait(['如果说，超越极限的代价便是如此……']);
    await era.printAndWait([
      '那么，身为支持其实验的人，应该要做的就是肯定',
      tachyon.sex,
      '的决定，并且目送',
      tachyon.sex,
      '通往自己的目标。',
    ]);
    await era.printAndWait(['这是自己作为「豚鼠」的责任。']);
    await era.printAndWait([
      '所以，',
      me.get_colored_name(),
      ' 会选择尊重 ',
      tachyon.get_colored_name(),
      ' 的做法。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 这样和 ',
      tachyon.get_colored_name(),
      ' 说明了。',
    ]);
    era.println();

    await tachyon.say_and_wait(['…………是这样吗？这就是你的选择吗？']);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 依旧没有表露出',
      tachyon.sex,
      '的想法，语气还是一样平淡。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 不由得有些担心，自己是不是说错了什么。',
    ]);
    await era.printAndWait(['但是，选择已经做出了。']);
    era.println();

    era.printButton('「身为速子的豚鼠，应该如此……」', 1);
    era.printButton('「……但是，我会努力去追上速子的！」', 1);
    await era.input();

    await era.printAndWait([
      '自己不应该去阻止 ',
      tachyon.get_colored_name(),
      ' 的成长。',
    ]);
    await era.printAndWait([
      '不如说，正好相反，自己应该努力去追上 ',
      tachyon.get_colored_name(),
      ' 才对。',
    ]);
    await era.printAndWait(['如果说，超越光速代表的是永恒的孤独。']);
    await era.printAndWait([
      '那么自己要做的，就是让',
      tachyon.sex,
      '不再孤独。',
    ]);
    await era.printAndWait([
      '哪怕只有自己一人，也要尽力陪伴在',
      tachyon.sex,
      '身边。',
    ]);
    await era.printAndWait([
      '这是自己身为 ',
      tachyon.get_colored_name(),
      ' 的「豚鼠」，以及……身为 ',
      tachyon.get_colored_name(),
      ' 的恋人，内心的愿望。',
    ]);
    era.println();

    await tachyon.say_and_wait(['…………']);
    await tachyon.say_and_wait(['这么说来，我似乎还没说过呢。']);
    await tachyon.say_and_wait(['我的选择———']);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的表情平静得令人感到害怕。',
    ]);
    await era.printAndWait(['仿佛暴风雨前的海面一般平静。']);
    era.println();

    await tachyon.say_and_wait(['我会选择跨越那条线，超越光速，超越极限———']);
    era.println();

    await era.printAndWait(['啊啊，果然如此。']);
    await era.printAndWait([
      '这就是 ',
      me.get_colored_name(),
      ' 所憧憬的',
      tachyon.get_uma_sex_title(),
      '该做出的回答。',
    ]);
    await era.printAndWait(['不能说意外，只能说理所当然。']);
    await era.printAndWait(['但是……心中那股淡淡的失落，又是从何而来？']);
    await era.printAndWait([
      '只是，',
      tachyon.get_colored_name(),
      ' 的话还没说完',
    ]);
    era.println();

    await tachyon.say_and_wait(['————和你，一起。']);
    era.println();

    await era.printAndWait(['忽然。']);
    await era.printAndWait(['那种暴风雨前的宁静反转。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 发觉了自己先前的比喻有些失当。',
    ]);
    await era.printAndWait(['不是暴风雨前的宁静，而是——深海。']);
    await era.printAndWait(['不是风雨欲来，而是自身已经深陷其中。']);
    era.println();

    await tachyon.say_and_wait(['两人一起跨越极限———成为速子（Tachyon）。']);
    era.println();

    await era.printAndWait([
      '不由得的，',
      me.get_colored_name(),
      ' 点头答应。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 望着',
      tachyon.sex,
      '的双眼，如光闪烁。',
    ]);
    await era.printAndWait([
      '仿佛误入深海的小鱼，在被深海鱼吞噬前最后看见的诱饵光芒。',
    ]);

    era.drawLine();

    await tachyon.print_and_wait(['我盯着', me.sex, '的双眼。']);
    await tachyon.print_and_wait(['里面是一知半解的迷茫。']);
    await tachyon.print_and_wait(['心中半是恼怒，半是庆幸。']);
    await tachyon.print_and_wait(['为什么', me.sex, '就是不能明白？']);
    await tachyon.print_and_wait(['也还好，', me.sex, '依旧没有明白。']);
    era.println();

    await tachyon.print_and_wait(['不是只有', me.sex, '也好。']);
    await tachyon.print_and_wait(['而是只要', me.sex, '就好。']);
    await tachyon.print_and_wait(['自己不害怕孤独。']);
    await tachyon.print_and_wait([
      '自己只害怕，身边不再有',
      me.sex,
      '的身影。',
    ]);
    await tachyon.print_and_wait(['所以……']);
    era.println();

    await tachyon.print_and_wait(['极限的彼方。']);
    await tachyon.print_and_wait(['没有其他人能够到达的，超越光速的尽头。']);
    await tachyon.print_and_wait(['还有……']);
    await tachyon.print_and_wait([
      '除了自己二人以外，再不会有任何人打扰的世界。',
    ]);
    era.println();

    await tachyon.say_and_wait(
      ['哪怕是超光速的彼方，哪怕肉体和精神都燃烧殆尽……'],
      true,
    );
    await tachyon.say_and_wait('也要永远，永远的陪在我身边哦？', true);
    await tachyon.say_and_wait(['我亲爱的 ', callname, '❤️'], true);

    await sys_love_uma_in_event(32);
  } else {
    await era.printAndWait([
      '如果说，要放 ',
      tachyon.get_colored_name(),
      ' 一个人度过孤独的永恒，那么自己绝对不会允许。',
    ]);
    await era.printAndWait([
      '但是……如果在天秤的另一端放上的，却是 ',
      tachyon.get_colored_name(),
      ' 的梦想呢？',
    ]);
    await era.printAndWait([
      '或者说，这种永恒，难道不正是 ',
      tachyon.get_colored_name(),
      ' 在追求的一切吗？',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '一定是知道这些，并且在了解的基础上，才会提出追逐极限的目标的吧',
    ]);
    await era.printAndWait([
      '那么身为',
      tachyon.sex,
      '的 ',
      callname,
      '，身为',
      tachyon.sex,
      '的爱人……',
    ]);
    await era.printAndWait(['难道不应该支持自', tachyon.sex, '去追逐梦想吗？']);
    era.println();

    await era.printAndWait(['所以……']);

    era.printButton('「我拒绝」', 1);
    await era.input();

    await era.printAndWait([
      '豚鼠的责任，或许已经尽到了，那么，身为 ',
      tachyon.get_colored_name(),
      ' 的爱人，应该尽的责任呢？',
    ]);
    await era.printAndWait([
      '身为与',
      tachyon.sex,
      '两人三脚，共同前进，在经历了种种后，才好不容易获得了开花结果的恋情的自己……',
    ]);
    await era.printAndWait([
      '能够允许这样的结局吗？能够允许与 ',
      tachyon.get_colored_name(),
      ' 的天人永隔吗？',
    ]);
    await era.printAndWait(['答案当然是……否。']);

    era.printButton('「哪怕自私也好。」', 1);
    era.printButton('「我也想让速子永远待在我身边。」', 2);
    await era.input();

    await era.printAndWait(['害怕对方离去。']);
    await era.printAndWait(['仅仅是如此自私的理由。']);
    await era.printAndWait(['现在的自己已经无法适应了。']);
    await era.printAndWait(['晚上睡前没有要为了谁而准备的便当。']);
    await era.printAndWait(['早上到实验室时无法看见那个忙碌于实验的背影。']);
    await era.printAndWait(['中午无法看见某人可爱可怜的讨饭模样。']);
    await era.printAndWait(['下午训练时无法看见那绚烂的跑姿。']);
    await era.printAndWait([
      '现在的自己，已经再也无法回到以前那样无趣的日子了。',
    ]);
    await era.printAndWait(['所以，所以。']);

    era.printButton('「如果可以……我希望可以和速子一起抵达超光速的彼方。」', 1);
    era.printButton('「但是……如果没有办法的话……」', 2);
    await era.input();

    await era.printAndWait(['因为害怕自己无法跨越那条线。']);
    await era.printAndWait(['所以希望抓住', tachyon.sex, '的手。']);
    await era.printAndWait(['让', tachyon.sex, '停留在光速以下的世界。']);
    await era.printAndWait(['为了自己而留下。']);
    era.println();

    await tachyon.say_and_wait(['…………']);
    await tachyon.say_and_wait(['…………呵呵。']);
    era.println();

    await era.printAndWait(['平静的笑容。']);
    await era.printAndWait(['不解其意的笑。']);
    await era.printAndWait(['令人不由得心生畏惧。']);
    await era.printAndWait([tachyon.sex, '的回答，究竟……']);
    era.println();

    await tachyon.say_and_wait(['这就是……你的答案吗？']);
    await tachyon.say_and_wait(['……你果然，总是能打破我的预期啊……']);
    era.println();

    await era.printAndWait([tachyon.sex, '究竟在想些什么呢？']);
    await era.printAndWait([
      '现在这个瞬间，',
      tachyon.sex,
      '的笑到底是嘲笑，还是耻笑，又或者只是因为自己打破了期待而露出了欣喜的笑容呢？',
    ]);
    era.println();

    await tachyon.say_and_wait(['那么……为了我亲爱的 ', callname, '。']);
    await tachyon.say_and_wait(['我会，永远，永远，留在这里陪伴你的。']);

    era.drawLine();

    await tachyon.print_and_wait(['心里的感情，难以形容。']);
    await tachyon.print_and_wait([
      '但整体来讲，应该是名为欢喜的情绪更占上风吧。',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '总是能超出自己预想的人，这一次再度的，在好的方向达成了自己的期望。',
    ]);
    await tachyon.print_and_wait([
      '原本以为如果是',
      me.sex,
      '的话，一定会说出什么为了速子的梦想，自己愿意放弃之类的蠢话。',
    ]);
    await tachyon.print_and_wait(['真是……']);
    await tachyon.print_and_wait([
      '一想到这种可能，',
      tachyon.get_colored_name(),
      ' 就忍不住泄气。',
    ]);
    await tachyon.print_and_wait(['为什么，', me.sex, '总是不能明白呢？']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，是个欲望很强的',
      tachyon.get_uma_sex_title(),
      '。',
    ]);
    await tachyon.print_and_wait(['二择一？不，', tachyon.sex, '两个都要。']);
    await tachyon.print_and_wait(['如果', me.sex, '真的说出那种话的话。']);
    await tachyon.print_and_wait([
      '那么哪怕行为强硬，哪怕要从某人的身边将',
      me.sex,
      '夺走。',
    ]);
    await tachyon.print_and_wait([
      tachyon.sex,
      '也会任性妄为的，将',
      me.sex,
      '掠夺到那光速以上，只有二人能够一起度过的世界。',
    ]);
    await tachyon.print_and_wait(['但是……']);
    era.println();

    await tachyon.print_and_wait(['如果说，这个人。']);
    await tachyon.print_and_wait(['这个纯真到可爱的 ', callname, ' 竟然……']);
    await tachyon.print_and_wait(['稀有的表现出了自己的贪欲，自己的欲望。']);
    await tachyon.print_and_wait([
      '想要让 ',
      tachyon.get_colored_name(),
      ' 留在身边的欲望。',
    ]);
    await tachyon.print_and_wait([
      '想要强迫 ',
      tachyon.get_colored_name(),
      ' 放弃梦想的欲望。',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '已经离不开',
      me.sex,
      '的自己，也只能，心甘情愿的任其摆布了。',
    ]);
    await tachyon.print_and_wait([
      '隶属与被隶属的关系，到底是何时发生反转的呢？',
    ]);
    await tachyon.print_and_wait(['不，不是反转……']);
    await tachyon.print_and_wait(['在束缚的同时，却也被其束缚。']);
    await tachyon.print_and_wait(['啊啊，这一定，就是名为爱的感情吧。']);
    await tachyon.print_and_wait([
      callname,
      ' 爱着 ',
      tachyon.get_colored_name(),
      '，',
      tachyon.get_colored_name(),
      ' 也爱着 ',
      callname,
      '。',
    ]);
    await tachyon.print_and_wait([
      '没有什么超光速以上的世界，极限之外更是什么也没有……',
    ]);
    await tachyon.print_and_wait([
      '只有，彼此相爱着的普通人及普通',
      tachyon.get_uma_sex_title(),
      '，仅此而已。',
    ]);
    era.set('cflag:32:爱慕暂拒', 99);
  }
};
