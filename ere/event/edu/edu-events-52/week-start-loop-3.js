const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const PseudoUma = require('#/data/race/model/pseudo-uma');
const { race_enum } = require('#/data/race/race-const');
const { base_attr_list } = require('#/data/train-const');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {CharaTalk} in_urara
 * @param {string} callname
 */
module.exports = async (urara, me, in_urara, callname) => {
  await print_event_name(
    [
      '「大家」的祈愿、',
      { color: me.color, content: `「${me.actual_name}」` },
      '的祈愿',
    ],
    urara,
  );
  await urara.say_and_wait([
    callname,
    '，做好先过去的准备了吗？乌拉拉随后就到！所以今天一定要把',
    urara.sex,
    '带回来哦！',
  ]);
  era.drawLine();

  era.printButton('「今天天气不是很好啊，坐在这里是有什么烦恼吗？」', 1);
  await era.input();

  await era.printAndWait([
    '站在一片灰白的空间中不断向前走着，',
    me.get_colored_name(),
    ' 最终在一片广阔的草场上找到了那名小小的身影。',
  ]);
  await era.printAndWait(
    '不过说起来自己还是第一次能够进到这里，真神奇啊，明明刚才还在女神像前来着……',
  );
  await era.printAndWait([
    '只是这里的主人似乎极度抗拒着来客，无视了胡言乱语的寒暄的',
    urara.sex,
    '，在 ',
    me.get_colored_name(),
    ' 靠近的瞬间从草地上弹了起来。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '……您是怎么来到这里的？一个两个都是，为什么就是不愿意留下来……',
  );
  await era.printAndWait([
    '向本不可能出现在这里的「入侵者」投来愤恨的眼神，面前的小',
    urara.uma_sex_title,
    '正带着不安向 ',
    me.get_colored_name(),
    ' 质问道。',
  ]);

  era.printButton(
    '「这里是你的世界，外面的循环也是你造成的，所以两边至少是相连的，总有办法对吧？」',
    1,
  );
  await era.input();

  await me.say_and_wait(
    '也就是说如果客人想来的话，主人只要有一点允许的念头，客人就会如你所愿的出现在这里……',
  );
  await era.printAndWait([
    '说着简单到仿佛是解开儿童益智玩具的谜题般，',
    me.get_colored_name(),
    ' 无奈地耸了耸肩。',
  ]);
  await in_urara.say_as_unknown_and_wait('我是问您怎么知道的……');

  era.printButton(
    '「乌拉拉请三女神稍微询问了一下，就这么简单，所以我稍微做了些准备就进来了……」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '虽然的确完全不清楚 ',
    urara.get_colored_name(),
    ' 是怎么问的，反正不管是',
    urara.uma_sex_title,
    '的事还是三女神的事都不用整得那么明白对吧？',
  ]);
  await era.printAndWait([
    '实在有些无法招架对方透着怀疑的尖锐视线，',
    me.get_colored_name(),
    ' 默默地移开了目光。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '这次又把别人的爱当成入室抢劫的撬锁工具了？您还真是个消费别人感情的人渣……！',
  );

  era.printButton(
    '「我还没说呢怎么你自己就……呜哇！好好好！别打了我错了，让我仅限这次可以吗？」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '差点就在陌生的地方挨马踢，在极限距离闪过了',
    urara.uma_sex_title,
    '的袭击的 ',
    me.get_colored_name(),
    ' 感觉自己的魂都要吓掉了。',
  ]);
  await era.printAndWait(
    '不过好在身处这个没有警察来衡量秩序的世界里，对主人赶紧道歉还是有用的。',
  );
  await in_urara.say_as_unknown_and_wait(
    '您又是这样，强硬地撬开别人的心、强迫别人接受他人的意义的家伙难道不卑鄙吗？',
  );

  era.printButton(
    '「或许是这样，但那又如何？乌拉拉也给了我能够站在这里的『意义』啊。」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '面对直白的 ',
    me.get_colored_name(),
    '，「',
    urara.sex,
    '」也沉默了。一切尽在不言之中，因为最初的相遇就是如此。',
  ]);
  await era.printAndWait([
    '如果没有遇见 ',
    urara.get_colored_name(),
    '，',
    me.get_colored_name(),
    ' 估计直到现在都没法从那天的迷茫中得到答案，也不会来到这里。',
  ]);
  await era.printAndWait([
    '如果没有「',
    urara.sex,
    '」的选择，',
    urara.get_colored_name(),
    ' 不会遇见 ',
    me.get_colored_name(),
    '，自然三年中的二人三足故事也不会写到这里。',
  ]);
  await era.printAndWait([
    '但更加追根溯源，大概最初的开始，是在 ',
    urara.get_colored_name(),
    '「强硬地」将一个孤僻的人拉进生活的那一刻吧。',
  ]);
  await era.printAndWait([
    '叹了口气，',
    me.get_colored_name(),
    ' 试探地蹲在了沉默地坐回了灰白二色的草地上的小',
    urara.uma_sex_title,
    '旁边。',
  ]);

  era.printButton(
    '「那说点不一样的，在准备来见你的日子里，虽然时间没向前，但乌拉拉过得还挺开心的。」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '结果呢？在休息够了之后，您还要是推着',
    urara.sex,
    '前进吗？',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '明明就连乌拉拉都知道了，我会把故事的完结抓在自己手里？',
  );
  await era.printAndWait([
    '似乎是不愿去看 ',
    me.get_colored_name(),
    ' 的脸，「',
    urara.sex,
    '」折起耳朵，生硬地将头拧到了与 ',
    me.get_colored_name(),
    ' 相反的方向。',
  ]);

  era.printButton('「现在我们还坐在这里，正是因为你没法完结这个故事啊。」', 1);
  await era.input();

  await era.printAndWait([
    '尽管看不见表情，但现在',
    urara.sex,
    '的身体确实像被雷击中一般颤抖起来。看来说中了。',
  ]);
  await era.printAndWait([
    '虽然不知道',
    urara.sex,
    '是怎么做到的，但将时间循环也正是因为',
    urara.sex,
    '做不到真正的创造出想要的世界。',
  ]);
  await era.printAndWait(
    '就算能够依靠着对某物的执念将时间停在三年的最后，也不可能实现真正停滞的世界。',
  );
  await era.printAndWait(
    '因为明天的到来是连三女神都无法阻止的，日复一日的躲藏什么也做不到。',
  );
  await era.printAndWait([
    '而现在做过头的「',
    urara.sex,
    '」，已经除了让自己默默消失外，没有其他办法停下循环了。',
  ]);

  era.printButton('「——我说得没错吧？」', 1);
  await era.input();
  era.printButton('「『春乌拉拉』。」', 1);
  era.printButton('「『春乌拉拉』。」', 2);
  era.printButton('「『春乌拉拉』。」', 3);
  await era.input();

  await era.printAndWait(
    '真是，嘴硬也得有个限度啊，这样做根本不会让任何人开心，而且也绝对不是能解决问题的办法。',
  );
  await era.printAndWait([
    '不过虽然早就猜到了，但女神的玩笑还真是够大的，竟然在一个世界里塞了性格完全相反的两个 ',
    urara.get_colored_actual_name(),
    '。',
  ]);
  await era.printAndWait([
    '或者说为了让不管什么都怯于相信的小',
    urara.uma_sex_title,
    '更幸福一些？管它呢，今天的主要任务是带',
    urara.sex,
    '回去啊。',
  ]);

  era.printButton(
    '「所以说，就算是把事情弄得一团糟，也没必要这样做对吧？大家都还等着你回去呢。」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '……哈？大家在等我？您也精神错乱了吗？知道我的人明明只有——',
  );
  await era.printAndWait(
    '话音尚未落下，无数的声音就突然从空间的外侧涌入其中，灰白的草原一时间仿佛变得门庭若市。',
  );
  await era.printAndWait([
    '那是就连一直躲在 ',
    urara.get_colored_name(),
    ' 背后的「',
    urara.sex,
    '」都听过无数次的，来自最熟悉的人们的指引声。',
  ]);
  await era.printAndWait(
    '特雷森的同学们、商店街的大家、应援会的各位、再到不那么熟悉的来自各地的支持者的声音……',
  );
  await era.printAndWait(
    '仿佛要剥开昏暗的天幕，又像在为某人的奔跑而助威，温柔却又响亮的声音们震荡着整片草场。',
  );

  era.printButton(
    '「既然你也是乌拉拉，那你不是最清楚这里的沟通方式吗？这里不止是你一个人的世界吧？」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '面对被震撼到慌忙起身的「',
    urara.sex,
    '」，',
    me.get_colored_name(),
    ' 不紧不慢地从口袋中抽出了自己的手机。',
  ]);
  await era.printAndWait([
    '这里是「',
    urara.get_colored_name(),
    '的世界」，按照 ',
    urara.get_colored_name(),
    ' 收获的祝福，只要还有一个人想着 ',
    urara.get_colored_name(),
    '，那',
    urara.sex,
    '哪里都去得了。',
  ]);
  await era.printAndWait([
    '虽然现在比起让小',
    urara.uma_sex_title,
    '「通往胜利」，可能更像是 ',
    urara.get_colored_name(),
    ' 要亲手「打破心房」吧。',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 会因支持',
    urara.sex,
    '的大家而变强，所以也能反馈给喜欢着',
    urara.sex,
    '的大家一些只有',
    urara.sex,
    '能感受到的东西。',
  ]);
  await era.printAndWait([
    '所以哪怕没有记忆，大家在以前也隐约意识到了名为「',
    urara.get_colored_actual_name(),
    '」的小',
    urara.uma_sex_title,
    '似乎有着另外一面。',
  ]);
  await era.printAndWait([
    '于是在 ',
    me.get_colored_name(),
    ' 的支持下，',
    urara.get_colored_name(),
    ' 在这次的循环中奔走着，把「',
    urara.sex,
    '」的事分享给了愿意帮助',
    urara.sex,
    '的所有人。',
  ]);
  await era.printAndWait([
    '所以不管另一个',
    urara.sex,
    '躲在哪里，',
    urara.get_colored_name(),
    ' 都能顺应着「大家的祈愿」找到心灵的最深处。',
  ]);
  await era.printAndWait([
    '果然只要给予时间，一切改变都能变得顺理成章，而 ',
    urara.get_colored_name(),
    ' 和',
    urara.sex,
    '的训练员也超级幸运啊。',
  ]);

  era.printButton(
    '「当然，既然大家都愿意相信『乌拉拉』，那我作为训练员也一定得帮帮场子啊。」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '拿出了曾经在无意间凑出的最后一点质变的要素，在「',
    urara.sex,
    '」的面前，',
    me.get_colored_name(),
    ' 笑着按下了电话录音的播放键。',
  ]);
  era.drawLine();
  await era.printAndWait([
    '做完热身运动，整理好身上的决胜服，站在灰白色空间的入口长廊中，',
    urara.get_colored_name(),
    ' 开始了今日的奔跑。',
  ]);
  await era.printAndWait([
    '前面的路一定比有马的赛道还要长得多吧，虽然只是 ',
    urara.get_colored_name(),
    ' 的直觉而已，因为',
    urara.sex,
    '还是很害怕。',
  ]);
  await urara.say_and_wait(
    '但是你害怕的，究竟是会受伤的『乌拉拉』，还是什么会都无法做到的『乌拉拉』呢？',
  );
  await era.printAndWait([
    '在仅有一人的比赛中，',
    urara.get_colored_name(),
    ' 就像在与看不见的朋友对话般，向前方空无一物的灰白小声地提出着反问。',
  ]);
  await era.printAndWait([
    '明明不会有人告诉 ',
    urara.get_colored_name(),
    ' 答案，但四周指引着 ',
    urara.get_colored_name(),
    ' 的回音却仿佛在回应着 ',
    urara.get_colored_name(),
    ' 的话语。',
  ]);
  await era.printAndWait(
    '那是大家的祈愿声，随着前方被不断地照亮，越来越多的声音也都出现在赛场的两旁。',
  );
  await urara.say_and_wait(
    '努力不一定有结果，也有可能在改变的路上失去一切，乌拉拉是知道的哦？',
  );
  await urara.say_and_wait(
    '但选择冷眼旁观而裹足不前却一定是没有结果的，只是明白道理也没办法让人成为大人。',
  );
  await urara.say_and_wait(
    '跑得更快的方法，只有把眼泪擦干，并亲手给擦破的膝盖贴上创可贴才行……',
  );
  await urara.say_and_wait(
    '所以就算要与别人争抢唯一的机会，也不要胆怯，因为——',
  );
  await era.printAndWait([
    '在两侧一闪而过的身影中，',
    urara.get_colored_name(),
    ' 看到了永远会在比赛时站在观众席的最高处守望着',
    urara.sex,
    '的那个人。',
  ]);
  await era.printAndWait([
    '以及一条即使在大家各有不同的祈愿声中，依旧如同就在 ',
    urara.get_colored_name(),
    ' 的耳边般清晰可闻「电话录音」。',
  ]);
  await era.printAndWait(
    '前方不知行进了多久的灰白逐渐被亮光所剥离，无数的光斑也如路标般在空中飞舞着。',
  );
  await era.printAndWait([
    '驱动着不知跑了多久但仍然斗志高昂的身体，',
    urara.get_colored_name(),
    ' 带着一着得胜的笑容撞向了前方破碎的镜面——',
  ]);
  era.drawLine();
  await era.printAndWait([
    callname,
    ' 的声音「因为大家虽然没有那么坚强，但也不会有乌拉拉担心的那么脆弱。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「不可否认，这条路的确很残酷：有为了家人而前进的人，有为了温饱而奔跑的人；」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「有人承载的梦想比山峦都要沉重，而有人则想要守护与重要之人的约定……」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「就像有人说的那样，只要站上赛场，拿到胜利，就没办法让所有人都露出笑容。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「能让所有人都觉得『满意』的，说到底只有跑在最后而已。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「但就算如此，大家所祈愿的『幸福与希望』，也绝不是能被别人轻易定夺的。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「即使摔倒无数次，每个人都依旧有追求幸福的权利，而希望的定义也各有不同。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「乌拉拉所做的绝对不是在伤害别人，所以不要觉得自己的理想轻如鸿毛。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「『',
    urara.get_colored_actual_name(),
    '』承载着大家的笑容，是独属于',
    urara.sex,
    '的重量，是没法被其他任何人背负的。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「绝不是输了也无所谓，也不会为了成全他人而放弃自己的梦想。」',
  ]);
  await era.printAndWait([
    callname,
    ' 的声音「所以请去尽情的奔跑，带着大家的希望，也带着乌拉拉自己想要取胜的信念——」',
  ]);
  era.drawLine();
  await in_urara.say_as_unknown_and_wait('……！');
  await era.printAndWait(
    '蒙灰的幻境在瞬间褪去，空间的碎片如暴雪般在空间中掠过，并在消失无踪后露出了被覆盖的原貌。',
  );
  await era.printAndWait([
    '无数的色彩为「',
    urara.sex,
    '」灰暗的眼眸点起了反光，在万里无云的青空下，',
    urara.sex,
    '不可思议的环顾着周围的改变、',
  ]);
  await era.printAndWait(
    '这里并非是任何一场重要的比赛，但这里依旧是一切的原点——这里是特雷森的训练场。',
  );

  era.printButton(
    `「所以啊，${urara.sex}一定会来到这里的，长出了真正的羽翼的，『无敌的春乌拉拉』。」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    '伴随着 ',
    me.get_colored_name(),
    ' 的话语，从视野的尽头飞身跃入跑道的，是一抹如春风般的樱色。',
  ]);
  await era.printAndWait([
    '站在另一个自己面前，眼中绽放着花朵的小',
    urara.uma_sex_title,
    '露出了温暖的笑容。',
  ]);
  await urara.say_and_wait(
    '对不起，稍微来晚了！今天的乌拉拉，终于找到你了呢！',
  );
  await urara.say_and_wait(
    '好啦，我们已经商量好平安脱困的对策了哦？大家都在等着你呢，一起回去吧！',
  );
  await era.printAndWait([
    '就像不知要如何面对小',
    urara.uma_sex_title,
    '的微笑，「',
    urara.sex,
    '」胆怯的向后退去，却又被眼前的人牵住了双手。',
  ]);
  await era.printAndWait([
    '低头看着紧紧拉住自己的两只分别来自 ',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 的两只手，孤独的「',
    urara.sex,
    '」的声音逐渐颤抖起来。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '……为什么又要做到这一步呢？明明只要我消失，一切也就结束了……',
  );
  await urara.say_and_wait(
    '不对哦！一味地沉默与妥协才不是真正的结束，那样只会把大家的心都困住而已！',
  );
  await urara.say_and_wait(
    '而且乌拉拉也不会让你消失！帮助自己的朋友不是理所当然的吗？',
  );
  await era.printAndWait([
    '看着眼前不愿放手的两位最重要的两人，「',
    urara.sex,
    '」就像在故事的结局时终于下定决心的主角般咬紧嘴唇。',
  ]);
  await era.printAndWait([
    '尽管再想要表达什么，故事的主角也不会一直消沉的躲在幕后的。',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '果然你们，就是一群没办法放着不管的笨蛋……',
  );
  await era.printAndWait([
    '用力的甩开牵住自己的手，「',
    urara.sex,
    '」维持着自己最后倔强与面前的他们拉开了距离。',
  ]);
  await era.printAndWait(
    '在一阵嘎吱作响的金属声中，锈迹斑驳到只剩灰白二色的闸门出现在了一旁赛道起点的位置。',
  );
  await era.printAndWait([
    '而在闸门前，黑色的眼神逐渐锐利的小',
    urara.uma_sex_title,
    '也拉紧了与另一个自己相同，色泽却无比陈旧的决胜服。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '既然如此坚持的话，那就请您和',
    urara.sex,
    '，让我任性到最后吧——',
  ]);
  await in_urara.say_as_unknown_and_wait('因为，我也是『春乌拉拉』啊！');
  era.drawLine();
  await urara.say_and_wait(
    '没想到是和自己比赛呢！嗯！不如说正因为是和自己战斗，所以乌拉拉不会输！',
  );
  await urara.say_and_wait([
    '要入闸了呢！没关系，我会把',
    urara.sex,
    '带回来的，因为乌拉拉也好好地许下自己的愿望了哦！',
  ]);

  era.printButton(`「就是这样，让${in_urara.sex}也听听你的祈愿吧！」`, 1);
  await era.input();

  await urara.say_and_wait('哦！乌拉拉GO——！');
  const chara = sys_get_chara_pseudo(52);
  const p = new PseudoUma(
    -1,
    '「春乌拉拉」',
    in_urara.color,
    chara.motivation,
    new Array(5)
      .fill(0)
      .map((_, i) => Math.min(era.get(`base:52:${5 + i}`), 1200)),
    chara.style,
    [...chara.adapt_style_list],
    [...chara.adapt_distance_list],
    [...chara.adapt_ground_list],
    chara.list_skill.map((e) => e.data),
  );
  p.legend = true;
  await simulation_game_in_event(chara, [p], race_enum.arim_kin);
  if (chara.rank.curr !== 1) {
    return false;
  }
  await in_urara.print_and_wait(
    '在无限延伸的赛道上，随着飞翔的樱粉色将黯淡对手逐渐甩在身后，胜负已成定局。',
  );
  await in_urara.print_and_wait([
    '果然自己完全比不上身经百战的',
    urara.sex,
    '啊，就算再努力地向前伸出手，也无法再触及前方的',
    urara.sex,
    '分毫……',
  ]);
  await in_urara.print_and_wait([
    '望着前方曾经幼稚又弱小的「另一个自己」消失在视野之中，',
    urara.teen_sex_title,
    '逐渐失去了对速度的掌控。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '没想到在我看不见的地方……',
    urara.sex,
    '已经能飞得这么高了……',
  ]);
  await in_urara.print_and_wait(
    '尽管因成长而破损的心灵并不会自我愈合，只能用名为「变得坚强」的创可贴遮盖伤口——',
  );
  await in_urara.print_and_wait(
    '但能够并愿意借助他人的目光将自己重塑为期望中的英雄，亦是一种勇敢。',
  );
  await in_urara.print_and_wait([
    '就像 ',
    urara.get_colored_name(),
    ' 总是会摔倒，也经常贴满了创可贴，但依旧能够倔强奔跑的双腿那般。',
  ]);
  await in_urara.print_and_wait([
    '名为 ',
    urara.get_colored_actual_name(),
    ' 的',
    urara.uma_sex_title,
    '的确并不坚强，',
    urara.sex,
    '只是，因为自己选择的改变而越来越坚强了而已。',
  ]);
  await in_urara.print_and_wait([
    '所以如今变得坚强的',
    urara.sex,
    '接受了这一切，并再次踏上了那条最遥不可及的赛道。',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '原来现在的',
    urara.sex,
    '不需要再被保护，而我也已经，不再被需要了……',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '果然您永远都是对的啊，我就是个又无能、控制欲又强的坏家长与坏朋友……',
  );
  await in_urara.print_and_wait([
    '而尽管胜负已分，但赛道却仍然在无穷无尽的向前延伸着，取代终点的，则是从后方逐渐袭来的破碎。',
  ]);
  await in_urara.print_and_wait(
    '因为在先前肆意修改了太多的东西，所以在最后，也只有在默默的被黑暗吞噬一条路可走。',
  );
  await in_urara.say_as_unknown_and_wait(
    '对不起骗了你们，我已经没办法回去了，但这样，应该就没事了……',
  );
  await in_urara.say_as_unknown_and_wait('好好说再见之类的，就下次再做吧……');
  await in_urara.print_and_wait([
    '面对身后步步紧逼的「结局」，孤僻的',
    urara.teen_sex_title,
    '松掉了本就见底的毅力，结束了只剩一人的比赛——',
  ]);

  era.printButton(
    '「所以我说你啊！既然是完整的故事，那不管内容有多糟，都要对结局负责啊！',
    1,
  );
  await era.input();
  era.printButton('「现在！跑起来！春乌拉拉！」', 1);
  await era.input();
  await in_urara.print_and_wait('这声呐喊到底是在为谁应援，或许并不需要答案。');
  await in_urara.print_and_wait([
    '因为与 ',
    me.get_colored_name(),
    ' 在最后一刻的尽全力呐喊一同赶到的，是一只娇小但足够重新提供温暖与力量的手。',
  ]);
  await in_urara.print_and_wait([
    '前方在瞬间被重新照亮，',
    urara.teen_sex_title,
    '的正前方传来了本以为再也不会听到的，来自另一个自己的呼喊声。',
  ]);
  await in_urara.print_and_wait(
    '向自己伸出援手的，是明明也已经濒临极限，却依旧没有放弃笑容的樱粉色。',
  );
  await urara.say_and_wait('别放弃，就差一点了！');
  await in_urara.print_and_wait(
    '不是所谓的牵绊，也不需要特别的言语，而是更纯粹的，发自内心的，犹如春日之花的某种情感。',
  );
  await in_urara.print_and_wait(
    '众人的声音从两侧响起，不知何时身后的塌陷已越来越远，训练场的简易看台上早已座无虚席。',
  );
  await in_urara.print_and_wait([
    '奔跑中的一切似乎都慢了下来，而被 ',
    urara.get_colored_name(),
    ' 带领的',
    urara.sex,
    '也终于看清了周围幻影中的全貌：',
  ]);
  await in_urara.print_and_wait(
    '一直聚在一起的「黄金世代」和「霸王世代」，正一如既往的守在好友的比赛旁；',
  );
  await in_urara.print_and_wait([
    '与 ',
    get_chara_talk(26).get_colored_name(),
    ' 和成群的同学站在一起的 ',
    get_chara_talk(30).get_colored_name(),
    '，怀中笔墨尚新的绘本上正印着樱粉色的插画；',
  ]);
  await in_urara.print_and_wait(
    '商店街和应援会的各位与来自各地未曾谋面的人们，在训练员的带领下拉起了比赛时最熟悉的横幅；',
  );
  await in_urara.print_and_wait([
    '还有一位虽然依旧步履艰难，但却同样带着笑容站在观众席的最前排，跟随着',
    urara.couple_title,
    '向前的',
    urara.uma_sex_title,
    '……',
  ]);
  await in_urara.print_and_wait([
    '在无数人的祝福声中，',
    urara.sex,
    '紧紧地抓住了微弱的呼救声尽头的、另一个自己向前伸出的手。',
  ]);
  await urara.say_and_wait(
    '因为听到了你说不想离开的声音，所以乌拉拉终于抓住你了……',
  );
  await urara.say_and_wait('我不会离你远去的……和乌拉拉——一起来吧！');
  await in_urara.say_as_unknown_and_wait(
    '但是你们也不用回应我的，你们不需要一个……',
  );

  era.printButton(
    '「我们从来没有否定过你啊，最初保护乌拉拉的人，让我们聚在一起的人，不都是你吗？」',
    1,
  );
  await era.input();

  era.drawLine();
  await era.printAndWait([
    '在一同跨越终点板后，奔跑逐渐变为在赛场上的漫步，而站在前方的 ',
    me.get_colored_name(),
    ' 也早已等候多时。',
  ]);
  await urara.say_and_wait([
    '嗯！乌拉拉和 ',
    callname,
    '，其实一直以来都非常感谢你哦？',
  ]);
  await urara.say_and_wait(
    '而且我们也一直都是呢！只是一个人的话，大家什么都做不到哦？',
  );
  await era.printAndWait([
    '为了今天的「奇迹」，',
    urara.get_colored_name(),
    ' 到底发动了多少人，大概早就没有了统计的意义。',
  ]);
  await era.printAndWait(
    '可能每个人都是每个人路边的谈资，每个人都是每个人生命中的过客，大家都是什么都做不到的繁星。',
  );
  await era.printAndWait(
    '但正因如此，只要愿意相连成缀，哪怕只是短暂闪耀的星火，依旧能够持续的点亮整个夜空。',
  );
  await era.printAndWait([
    '当下的大家被名为「',
    urara.get_colored_actual_name(),
    '」的',
    urara.teen_sex_title,
    '相连，并还在不断编织的故事，或许就是能驱散黑暗的奇迹。',
  ]);

  era.printButton(
    '「你从一开始，就从旁观者变成了改变者啊，还有啊……这里晴空万里不是吗？」',
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '嗯！虽然时机不太对，但乌拉拉觉得你其实一直值得收下感谢哦！',
  );
  await me.say_and_wait(
    '——谢谢你开启了这个故事，让渺小的彼此相遇，现在，我们会接你回家。',
  );
  await era.printAndWait(
    '从身体的颤抖，再到带着鼻音的呜咽，最后再变为不再掩饰的泪水。',
  );
  await in_urara.say_as_unknown_and_wait('你们……你们……真的全都是……');
  await era.printAndWait([
    '在所有人面前含糊不清的抱怨着，灰白色调的小',
    urara.uma_sex_title,
    '发出了最丢人、但也最开心的放声哭泣。',
  ]);
  await era.printAndWait(
    '拒绝别人的信任，无比激烈的厌世，终其原因是没法原谅胆小到一无是处的自己。',
  );
  await era.printAndWait(
    '但强行将痛苦剥离，因恐惧而把真实的自我藏在心底视而不见，换来的只会是虚无又沉重的空包袱。',
  );
  await era.printAndWait(
    '在无数次跌倒并感受到疼痛之后，即使满身伤痕也终究是能够变得更勇敢。',
  );
  await era.printAndWait([
    '要放上拼图的最后一块碎片吗？那渺小到不能再渺小的、名为「',
    urara.get_colored_actual_name(),
    '」的',
    urara.uma_sex_title,
    '的故事？',
  ]);
  await era.printAndWait('是时候，与反复无常的自己和解了。');
  await era.printAndWait([
    '哭泣的',
    urara.teen_sex_title,
    '猛地扑进微笑的',
    urara.teen_sex_title,
    '身前，而微笑的',
    urara.teen_sex_title,
    '轻柔地将哭泣的',
    urara.teen_sex_title,
    '揽入怀中。',
  ]);
  await era.printAndWait([
    '两名「',
    urara.get_colored_actual_name(),
    '」的倒影重叠，互相在崭新的阳光融为一体下，随后周围的一切又开始逐渐消融。',
  ]);
  await era.printAndWait([
    '或许，那就是连奇迹都能实现的样子吧。在被光芒包围之前，',
    me.get_colored_name(),
    ' 也在无意间露出了安心的笑容。',
  ]);
  era.drawLine();
  await era.printAndWait([
    '这是「',
    urara.get_colored_actual_name(),
    ' 的祈愿」，也是「所有人的祈愿」——',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 愿望是——在绝不会轻易完结的未来中，想要为了大家的笑容，一直跑下去。',
  ]);
  era.drawLine();
  await era.printAndWait([
    '枕在 ',
    urara.get_colored_name(),
    ' 怀中，',
    me.get_colored_name(),
    ' 从俯首微笑的三女神像前醒来。平静如常的特雷森中，身边的担当面带微笑地等待着 ',
    me.get_colored_name(),
    '。',
  ]);
  await urara.say_and_wait(['接下来要来做什么呢？', callname, '！']);
  era.rmData(52);
  era.println();
  const attr_change = new Array(5).fill(0);
  attr_change[get_random_entry(base_attr_list)] = 10;
  let wait_flag = false;
  wait_flag =
    get_attr_and_print_in_event(52, attr_change, 45, undefined, true) ||
    wait_flag;
  wait_flag = sys_change_motivation(52, 1) || wait_flag;
  wait_flag && (await era.waitAnyKey());
  return true;
};
