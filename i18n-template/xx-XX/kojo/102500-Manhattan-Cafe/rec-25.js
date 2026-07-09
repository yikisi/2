/**
 * @file 曼城茶座 - 招募
 * @author Necroz
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_start(coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 注意到了一位黑发的',
      coffee.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '但当 ',
      you.get_colored_name(),
      ' 试图接近的时候，却找不到',
      coffee.sex,
      '的身影了，仿佛',
      coffee.sex,
      '从未存在一般。',
    ]);
    await you.say_and_wait('是眼花了吗？还是回去休息一下吧', true);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async goto_playground(coffee, you) {
    await era.printAndWait(
      '福无双至，祸不单行。人倒霉起来总是这样的，不是吗？',
    );
    await era.printAndWait([
      '起了个大早前往训练场物色担当',
      coffee.uma_sex_title,
      '的 ',
      you.get_colored_name(),
      ' 不出意料的一无所获，拖着疲惫的身体回到宿舍倒头就睡。醒来后，却摸遍全身也找不到自己的手机。',
    ]);
    await era.printAndWait('回去找手机吧，还能怎么办呢。');
    await era.printAndWait([
      '来到训练场时天已经完全黑下去了，',
      you.get_colored_name(),
      ' 本以为要花上好一会儿才能找到手机，却发现在不远处的草地上，有着细碎夺目的光点在闪烁。',
    ]);
    await era.printAndWait([
      '总有一种被引导的感觉——',
      you.get_colored_name(),
      ' 抱着莫名的感觉走上前去，发现那正是 ',
      you.get_colored_name(),
      ' 遗失的手机。',
    ]);
    era.printButton('「运气……该说还不错？」', 1);
    await era.input();
    await era.printAndWait('嗖————');
    await era.printAndWait([
      '没等 ',
      you.get_colored_name(),
      ' 庆幸许久，不知什么事物带着一阵风从 ',
      you.get_colored_name(),
      ' 肩旁擦过。环顾四周，借着清冷的月光，',
      you.get_colored_name(),
      ' 却什么也没看到。',
    ]);
    era.printButton('「这是……」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 感觉到一股寒意从四肢向躯干袭来，寒意侵蚀过的部位变得逐渐僵硬。',
      you.get_colored_name(),
      ' 想要移动，但手脚似乎被寒气所压制，身体就像是生锈的机器一般，难以动弹。尽管不断告诉自己不要胡思乱想，脑海里仍不自主地涌现出从各种地方听来的特雷森鬼怪传闻，这使 ',
      you.get_colored_name(),
      ' 恐惧万分。',
    ]);
    await coffee.say_as_unknown_and_wait('那个……');
    await era.printAndWait([
      '从背后传来的声音瞬间打碎了这种局面，在刹那间恢复行动能力的 ',
      you.get_colored_name(),
      ' 连忙大口呼吸着新鲜空气。强忍着想要拔腿就跑的恐惧感转过头来，一个喘着气的似乎是刚跑完步停下的',
      coffee.uma_sex_title,
      '正在后面看着 ',
      you.get_colored_name(),
      '。',
    ]);
    await coffee.say_as_unknown_and_wait(
      '我看到你在这站了很久，担心是不是有什么问题……',
    );
    await era.printAndWait([
      '站了很久？',
      you.get_colored_name(),
      ' 借着月光看向手表，分针指针已经在表盘上旋转了四分之一圈还要多，居然已经过去了快20分钟了吗？',
    ]);
    await coffee.say_and_wait([
      '是朋友先发现的你……我正在和朋友跑步，在',
      coffee.sex,
      '突然改变了方向后，才看到了你……',
    ]);
    await era.printAndWait([
      '不管怎么说，都是对方和',
      coffee.sex,
      '的朋友帮了 ',
      you.get_colored_name(),
      '。在表达了感谢后 ',
      you.get_colored_name(),
      ' 说明了自己的身份和来意，并询问对方朋友的位置以向',
      coffee.sex,
      '表达谢意。',
    ]);
    await coffee.say_as_unknown_and_wait('朋友的话，不就在你身边吗……？');
    await era.printAndWait([
      '眼前黑长直发及腰的纤细',
      coffee.uma_sex_title,
      '瞥了眼 ',
      you.get_colored_name(),
      ' 身边的空地，歪了歪脑袋，此时 ',
      you.get_colored_name(),
      ' 才发觉',
      coffee.sex,
      '从刚才开始视线似乎就一直死死保持在自己身上，这种审视一般的态度令 ',
      you.get_colored_name(),
      ' 感觉有点怪异。',
    ]);
    await era.printAndWait([
      '黑发',
      coffee.uma_sex_title,
      '头上的白色呆毛随着',
      coffee.sex,
      '的呼吸微微摇晃，',
      you.get_colored_name(),
      ' 的心情也随之不断起伏。',
    ]);
    await era.printAndWait([
      '在这种地方居然还有心思开玩笑，真是个奇怪的',
      coffee.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '……真的是玩笑吗？亲身经历的灵异事件令 ',
      you.get_colored_name(),
      ' 不由得远离了那块空地几步。',
    ]);
    era.printButton('「……请问，这是什么玩笑吗？」', 1);
    await era.input();
    await coffee.say_as_unknown_and_wait([
      '……才不是什么玩笑……而且，这位训练员',
      you.adult_sex_title,
      '……',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      '逐渐向 ',
      you.get_colored_name(),
      ' 走来，这时 ',
      you.get_colored_name(),
      ' 才看清楚',
      coffee.sex,
      '的样貌：在',
      coffee.uma_sex_title,
      '中也称得上美人的精致面孔；白皙得缺少血色的肌肤；从额间垂下的、将那精致面孔分割的黑色长发；而最让 ',
      you.get_colored_name(),
      ' 印象深刻的，便是',
      coffee.sex,
      '黯黄色的双眸。',
    ]);
    await coffee.say_as_unknown_and_wait(
      '请马上和我一起离开这里，已经有东西盯上过你了，就在刚才……',
    );
    await era.printAndWait([
      coffee.teen_sex_title,
      '的低语伴随着忽起的夜风传入 ',
      you.get_colored_name(),
      ' 耳中，身边的黑暗隐约传来阵阵嬉笑，就算在此之后 ',
      you.get_colored_name(),
      ' 与这位',
      coffee.uma_sex_title,
      '一同安全的离开了训练场，这个夜晚也已深深刻入了 ',
      you.get_colored_name(),
      ' 的脑海中。',
    ]);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_again(coffee, you) {
    await era.printAndWait([
      '自那晚后又过了几天，那位训练场上的黑发',
      coffee.uma_sex_title,
      '的身影和话语始终萦绕在 ',
      you.get_colored_name(),
      ' 的脑海中，直到选拔赛开始后，',
      you.get_colored_name(),
      ' 才在名单上第一次看到了',
      coffee.sex,
      '的名字——',
      coffee.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '匆匆赶到时 ',
      coffee.get_colored_name(),
      ' 的选拔赛已经结束了，虽然没能亲眼目睹，但在揭示板上名列前茅的名字也足以说明',
      coffee.sex,
      '的实力。',
    ]);
    await era.printAndWait([
      '穿过身边熙攘的人群，在赛后休息区，',
      you.get_colored_name(),
      ' 看到了',
      coffee.sex,
      '的身影。',
    ]);
    era.print([you.get_colored_name(), ' 该怎么办？']);
    era.printButton('走上前去（尝试招募）', 1);
    era.printButton('还是算了（放弃招募）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '那天晚上的经历使 ',
        you.get_colored_name(),
        ' 感到恐惧，但好奇还是战胜了恐惧，',
        you.get_colored_name(),
        ' 走上前去。',
      ]);
      await era.printAndWait([
        coffee.sex,
        '的身影藏匿在同期的',
        coffee.uma_sex_title,
        '和前来招募的训练员之中，尽管在选拔赛最后名列前茅，却似乎没有人来招募',
        coffee.sex,
        '的样子。',
      ]);
      era.printButton(
        `「你好，${coffee.name}同学，选拔赛成绩很不错，恭喜你。」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait([
        '……非常感谢，那天的训练员',
        you.adult_sex_title,
        '……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 也认出了 ',
        you.get_colored_name(),
        '，但似乎对 ',
        you.get_colored_name(),
        ' 前来交谈有点惊讶，呆呆地点了点头。',
      ]);
      era.printButton('「虽然有点多管闲事，但没人来招募你吗？」', 1);
      await era.input();
      await coffee.say_and_wait('……暂时，没有。');
      await era.printAndWait('两人就此陷入了沉默。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起刚才查询过的有关 ',
        coffee.get_colored_name(),
        ' 的资料：',
      ]);
      await era.printAndWait([
        '从别的',
        coffee.uma_sex_title,
        '和一些曾对',
        coffee.sex,
        '感过兴趣的训练员口中可以得知，',
        coffee.get_colored_name(),
        ' 总是说着些奇怪的话，主要包含了一些没人知道的人或事，也经常有人看到',
        coffee.sex,
        '像是在追逐着什么的身影。曾有一名经验丰富的训练员试过和',
        coffee.sex,
        '接触，从那位训练员离开时紧皱的眉头可以看出并不顺利。于是，',
        coffee.get_colored_name(),
        ' 便被打上了问题儿童的标签，成为了训练员们都不太愿意接手的存在。',
      ]);
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 不这么认为，回想起那天晚上的经历还有',
        coffee.sex,
        '口中的【朋友】，其中一定另有隐情。',
      ]);
      await era.printAndWait('还是先换个话题吧。');
      era.printButton(
        '「那天晚上的事，真的非常感谢，如果没有你的帮助的话，恐怕……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '那天晚上在夜色的遮掩下 ',
        you.get_colored_name(),
        ' 没有注意到，但 ',
        coffee.get_colored_name(),
        ' 似乎十分不擅长接受别人的感谢。',
        you.get_colored_name(),
        ' 直白的感谢让 ',
        coffee.get_colored_name(),
        ' 愣了愣，身后的尾巴左右摇摆的节奏顿时一乱，过了好一会儿才向 ',
        you.get_colored_name(),
        ' 作出回复。',
      ]);
      await coffee.say_and_wait(
        '只是顺手之举而已……比起这个，还是不要靠近我比较好……',
      );
      await era.printAndWait(['不要靠近', coffee.sex, '，为什么？']);
      await era.printAndWait([
        '这下轮到 ',
        you.get_colored_name(),
        ' 愣住了，嘴里为了延续话题而准备的语句因这个带着排斥感的回复硬生生咽了回去。',
      ]);
      await era.printAndWait([
        '没等 ',
        you.get_colored_name(),
        ' 的疑问出口，',
        coffee.get_colored_name(),
        ' 在留下一句「抱歉」后便侧身离开了人群。',
      ]);
      await era.printAndWait([
        '看着',
        coffee.sex,
        '独自离去的背影，',
        you.get_colored_name(),
        ' 的疑问也随之转化为感叹。',
      ]);
      era.printButton(`（怎么回事，这个${coffee.uma_sex_title}……）`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 有点体会到了「问题儿童」四字在特雷森的含金量。',
      ]);
      await era.printAndWait([
        '在 ',
        coffee.get_colored_name(),
        ' 离开后，',
        you.get_colored_name(),
        ' 无心再关注选拔赛，在几位不错的',
        coffee.uma_sex_title,
        '进行交流无果后，先一步离开了特雷森。',
      ]);
    } else {
      await era.printAndWait([
        '那天晚上的经历是 ',
        you.get_colored_name(),
        ' 一生的噩梦，恐惧还是使 ',
        you.get_colored_name(),
        ' 停下了脚步，转身离开了。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_final(coffee, you, callname) {
    await era.printAndWait([
      '伴着夕阳，',
      you.get_colored_name(),
      ' 独自一人走在着忧愁的归家路上，脑子里装满的全是今天的各种郁闷，也因此 ',
      you.get_colored_name(),
      ' 这时才注意到，就在刚才转过某个拐角之后，身边的世界已经发生了变化。',
    ]);
    era.printButton('「不太对劲……」', 1);
    await era.input();
    await era.printAndWait(
      '比以往更加昏黄的夕阳从身后照射着大地，身边熟悉的景色在这片暮色中如同老电影般给人以失真感，脚下的影子——',
    );
    await era.printAndWait('不对，影子不见了！');
    await era.printAndWait([
      '额间瞬时冒起冷汗，',
      you.get_colored_name(),
      ' 一瘸一拐地走到路边的围墙旁并用背贴着墙壁来为有些发软的双腿提供支撑。',
    ]);
    await era.printAndWait(
      '向道路两旁望去，似乎没什么变化，还能看到远处的人影与特雷森，如果就这么拼尽全力跑回特雷森的话……',
    );
    await era.printAndWait([
      '想到就去做，',
      you.get_colored_name(),
      ' 一不做二不休地向着特雷森的方向奔去。',
    ]);
    await era.printAndWait([
      '但结果并不如 ',
      you.get_colored_name(),
      ' 想象般美好，不知道该不该感谢怪谈故事提供的经验，在看到眼前的第三个相同广告牌后，',
      you.get_colored_name(),
      ' 不得不接受了遭遇鬼打墙的现实并退回了刚在待过的墙边。',
    ]);
    await era.printAndWait(
      '夕阳仍在不断下沉，身边的景象变得愈发怪异，早已倒闭的街边商铺内传出了丝丝细语，路旁的垃圾桶内正有黑色长发向外冒出，远处的特雷森也在这愈深的暮色中变得模糊且扭曲起来。',
    );
    await era.printAndWait([you.get_colored_name(), ' 感觉就要坚持不住了。']);
    await coffee.say_and_wait('训练……，能听……声音吗？');
    await era.printAndWait(['是 ', coffee.get_colored_name(), ' 的声音。']);
    await era.printAndWait([
      '虽然只与',
      coffee.sex,
      '见过两次面，虽然模糊且断续，但 ',
      you.get_colored_name(),
      ' 清楚的记得',
      coffee.sex,
      '独特的低沉又带有一丝沙哑的声音。',
      coffee.sex,
      '在哪？',
    ]);
    await era.printAndWait([
      '仿佛抓住了救命稻草一般，',
      you.get_colored_name(),
      ' 抬头四处张望。',
    ]);
    await coffee.say_and_wait([
      '训练员',
      you.adult_sex_title,
      '，你已……另一个世界，我是借……朋友才能与你沟……',
    ]);
    era.printButton('「另一个世界……我已经死了吗？」', 1);
    await era.input();
    await coffee.say_and_wait([
      '不……时间……落日前都有机会……训练员',
      you.adult_sex_title,
      '，我无法直接帮到你……冷静……幻觉迷惑，它们也无法直接……找到应对的方法，就一定……',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 的声音渐渐消失了，但 ',
      you.get_colored_name(),
      ' 也重新振作了起来。',
    ]);
    await era.printAndWait([
      '强打起精神尽可能的忽视身边的怪异情景，',
      you.get_colored_name(),
      ' 思考着一切的开端——影子。',
    ]);
    await era.printAndWait([
      '对，影子，这是目前唯一发生在 ',
      you.get_colored_name(),
      ' 身上的异变。',
      you.get_colored_name(),
      ' 抬起手看了一眼，指缝间的阴影依旧存在，身上的衣褶也在光线的对比下十分明显，失去的只是从脚下蔓延出去的、全身的影子。',
    ]);
    await era.printAndWait('或者说，是代表着精神或灵魂意义上的「影子」？');
    await era.printAndWait([
      '结合 ',
      coffee.get_colored_name(),
      ' 口中「另一个世界」的描述，也许现在身处的正是某种鬼怪制造出的隔绝世界，而影子的消失便是此刻被其束缚的标志。',
    ]);
    await era.printAndWait(
      '既然已经整理好了头绪，接下来便是破局逃生的方法了，时间还剩……',
    );
    await era.printAndWait('远处，夕阳将近碰触地平线，只剩下几分钟了。');
    await era.printAndWait([
      '全身都能感受到心脏的剧烈跳动，肾上腺素也终于随着血液布满全身，',
      you.get_colored_name(),
      ' 深呼吸了一口气，闭上了眼睛。',
    ]);
    await era.printAndWait(
      '如果说有光才有影的话，那么精神上影子消失了，是不是该闭上心灵的窗户呢。',
    );
    await era.printAndWait([
      '顺着记忆中的路线，',
      you.get_colored_name(),
      ' 闭着眼睛快步向特雷森的方向走去。',
    ]);
    await era.printAndWait([
      '男人的怒骂声、女人的尖叫声、孩童的哭泣声、老人的悲叹声，种种声音糅杂成一根麻绳般钻进了 ',
      you.get_colored_name(),
      ' 的耳中，',
      you.get_colored_name(),
      ' 感受到了这片空间的恶意。',
    ]);
    await era.printAndWait([
      '忍住想要睁开双眼以获得安全感的欲求，',
      you.get_colored_name(),
      ' 加快了速度。',
    ]);
    await era.printAndWait([
      '结果出乎意料的顺利，这个怪异确实不能直接对 ',
      you.get_colored_name(),
      ' 做什么。',
    ]);
    await era.printAndWait([
      '在耳边传来某种东西破碎的声音后一切归于清净，',
      you.get_colored_name(),
      ' 睁开了眼睛。天已经黑了下去，一旁的行人奇怪地看了几眼在他们眼中这个一直站在路边发呆的怪人。',
    ]);
    await era.printAndWait('低头看去，影子老老实实地待在脚下。');
    await era.printAndWait('看来是结束了。');
    await coffee.say_and_wait(['欢迎回来，训练员', you.adult_sex_title, '……']);
    await era.printAndWait([coffee.get_colored_name(), ' 的声音从身后传来。']);
    await era.printAndWait([
      '回头看去，',
      coffee.sex,
      '手上拿着一个已经破裂开来的护身符，在离 ',
      you.get_colored_name(),
      ' 不到两米的位置观察着 ',
      you.get_colored_name(),
      ' 的状况。',
    ]);
    era.printButton('「又被你救了一次啊……」', 1);
    await era.input();
    await era.printAndWait([coffee.get_colored_name(), ' 摇了摇头。']);
    await coffee.say_and_wait([
      '请不要对我这样说，是训练员先生你凭借自己的意志找到回来的方法的……不如说，我对训练员',
      you.adult_sex_title,
      '你这次陷入危险也有责任……',
    ]);
    await coffee.say_and_wait([
      '训练员',
      you.adult_sex_title,
      '你，对他们的诱惑比我预想的还要大……我原本以为那天晚上是我把它们引来的，但……如果能早点发现的话，也许今天的事就不会发生了……',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 能理解 ',
      coffee.get_colored_name(),
      ' 之前的意思了，以为问题出自',
      coffee.sex,
      '自己身上而不想牵扯上别人，所以才让 ',
      you.get_colored_name(),
      ' 不要靠近',
      coffee.sex,
      '吗，真是个好孩子啊……',
    ]);
    era.printButton('「所以，之后我还会遇到类似的事件……对吗？」', 1);
    await era.input();
    await coffee.say_and_wait('有可能……');
    await coffee.say_and_wait('但，但是！我会继续帮助你的，所以，请不要……');
    await era.printAndWait([
      '似乎是担心 ',
      you.get_colored_name(),
      ' 会惊慌，',
      coffee.get_colored_name(),
      ' 连忙补充上后面一句。',
    ]);
    await era.printAndWait([
      '看着眼前突然变得有些急切的',
      coffee.uma_sex_title,
      '，',
      you.get_colored_name(),
      ' 的心中却意外的没有多少对未来的恐惧。是这次成功脱险让 ',
      you.get_colored_name(),
      ' 胆子变大了？还是对 ',
      coffee.get_colored_name(),
      ' 和',
      coffee.sex,
      '口中的「朋友」有着莫名的信心？',
    ]);
    await era.printAndWait([
      '总之，',
      you.get_colored_name(),
      ' 想到了一种可能，并将其分享给了眼前的',
      coffee.teen_sex_title,
      '。',
    ]);
    era.printButton('「既然接受了你的照顾，那我也必须拿出对等的回报……」', 1);
    era.printButton(
      '「我来当你的训练员，怎么样？别看我这样，在训练上我还是有几分心得的。」',
      2,
    );
    await era.input();
    await era.printAndWait([
      '听到这一意料之外的招募请求后，',
      coffee.get_colored_name(),
      ' 惊讶地瞪大了眼睛，随后又突然意识到什么似的看向了一旁无人的角落。在一段时间的沉默后，',
      coffee.teen_sex_title,
      '做出了回复。',
    ]);
    await coffee.say_and_wait([
      '那么，训练员',
      you.adult_sex_title,
      '……你能帮我追上那孩子吗？追上我的……朋友？',
    ]);
    await era.printAndWait([
      '朋友，',
      you.get_colored_name(),
      ' 又一次从 ',
      coffee.get_colored_name(),
      ' 口中听到了这个词。',
    ]);
    await era.printAndWait([
      '亲身接受过灵异事件洗礼的 ',
      you.get_colored_name(),
      ' 自然不会认为这是',
      coffee.sex,
      '臆想出来的存在，更何况从',
      coffee.sex,
      '口中 ',
      you.get_colored_name(),
      ' 也得知，朋友是从危险中帮助过 ',
      you.get_colored_name(),
      ' 两次的存在。',
    ]);
    await era.printAndWait('那么，答案很明确了。');
    era.printButton(
      `「尽管试试吧……！不管是朋友也好，还是其他强大的${coffee.uma_sex_title}，我都会带着你去超越的！」`,
      1,
    );
    await era.input();
    await coffee.say_and_wait(['……好的！那么请多关照，', callname, '！']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 向 ',
      you.get_colored_name(),
      ' 伸出了手，',
      coffee.sex,
      '第一次在 ',
      you.get_colored_name(),
      ' 眼前露出了笑容，黯黄色的瞳眸也染上了光彩。',
    ]);
    await era.printAndWait('咚——');
    await era.printAndWait([
      '当 ',
      you.get_colored_name(),
      ' 也伸出手，与 ',
      coffee.get_colored_name(),
      ' 握手的一刹那，某种东西不轻不重地拍打在了 ',
      you.get_colored_name(),
      ' 的肩上，让 ',
      you.get_colored_name(),
      ' 不由得打了个踉跄。',
    ]);
    await era.printAndWait('——拜托你了。');
    await era.printAndWait([
      '尽管 ',
      you.get_colored_name(),
      ' 没有听到任何人的声音，但从中却感受了这样的情感。',
    ]);
    await era.printAndWait([
      '这就是朋友吗？',
      you.get_colored_name(),
      ' 四处张望，仍无法看到对方的身影。',
    ]);
    await era.printAndWait([
      '看来接下来要与',
      coffee.sex,
      '度过一段奇妙的时光了。',
    ]);
  },
};
