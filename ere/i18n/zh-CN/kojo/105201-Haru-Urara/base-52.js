/**
 * @file 春乌拉拉 - 地下室
 * @author 99
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async first_prison(urara, inner_urara, you, callname) {
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait('唉，您啊……为什么会变成这样呢？');
    await inner_urara.say_as_unknown_and_wait([
      '不过值得庆幸，乌拉拉不会对训练员',
      urara.uma_sex_title,
      '（您）过于残酷，和别人不一样呢……',
    ]);
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      ' 疑惑地从床上起，身下是陌生的床铺，眼前也只有阴暗的屋顶，但身边却持续着断断续续的呜咽声。',
    ]);
    await era.printAndWait([
      '察觉到 ',
      you.get_colored_name(),
      ' 的醒来，在床边缩成一团的小',
      urara.uma_sex_title,
      '急忙无力地撑起耳朵，揉搓着哭红的小脸与 ',
      you.get_colored_name(),
      ' 背身相向。',
    ]);
    await urara.say_and_wait([
      '对不起，但是这一次就好！可以留下来吗？之后乌拉拉会变回好孩子的！所以……！',
    ]);
    await era.printAndWait([
      '即使泪水不停滴在蜷起的膝上，即使话语如不加掩饰的陷阱，',
      urara.teen_sex_title,
      '依旧没能如愿变得「卑劣」。',
    ]);
    await era.printAndWait(['至少，密室半掩的大门并没有锁。']);

    era.println();

    await inner_urara.say_as_unknown_and_wait([
      '……哈啊……那么训练员',
      you.adult_sex_title,
      '（您）的选择是——',
    ]);
    era.printButton('留在这里', 1);
    era.printButton('转身离开', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '慢慢贴近小',
        urara.uma_sex_title,
        '的背后，',
        you.get_colored_name(),
        ' 从身后握住了',
        urara.sex,
        '冰凉的小手。',
      ]);
      await urara.say_and_wait([
        '诶？',
        callname,
        ' 愿意留下来……真的吗？乌拉拉，真的可以做个坏孩子吗……？',
      ]);
      await era.printAndWait([
        '胡乱抹了抹哭花的脸颊，在泪水中露出笑颜的 ',
        urara.get_colored_name(),
        ' 反身将 ',
        you.get_colored_name(),
        ' 轻柔地扑倒在身下。',
      ]);
      await urara.say_and_wait([
        '那，今天、明天、后天也……不对，那样就太任性了，所以只要现在就好了，对吧……？',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '显而易见的，虽然您被带到这里，但',
        urara.sex,
        '没能下定决心，总之您好好享受即可。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '不过在离开时，把乌拉拉哄睡比较好哦？',
        urara.sex,
        '可是为今天哭了很久呢。',
      ]);
    } else {
      await era.printAndWait([
        '没再看向 ',
        urara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 默默站起身，头也不回地走向房间尽头的大门。',
      ]);
      await urara.say_and_wait([
        '……乌拉拉知道了，当坏孩子是不行的，对不起……但是，把 ',
        callname,
        ' 让给别人……',
      ]);
      await urara.say_and_wait([
        '但是，哪怕只是身边的一个位置……',
        callname,
        '，如果有下次、如果有下次的话……！',
      ]);
      await era.printAndWait([
        '随着被推开的厚重门扉那沉闷的回弹声，没能得到回应的小',
        urara.uma_sex_title,
        '，被抛在了千疮百孔的昏暗中。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '……是不是太好说话了？『下决心变得卑鄙』，对',
        urara.sex,
        '来说还是太难了……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '您也做得有点过了，您应该知道，乌拉拉以后真要做点什么，我一般不会站在您这边哦？',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  welcome(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      '果然这档子事，只有第一次和无数次……而且连选择权都没有。',
    );
    inner_urara.say_as_unknown(
      '不过您也别太焦虑，来都来了，享受一下乌拉拉的任性如何？',
    );
    era.drawLine();
    era.print([
      '从陌生又熟悉的房间中醒来，',
      you.get_colored_name(),
      ' 所处的昏暗意外的温暖，而躺在 ',
      you.get_colored_name(),
      ' 身侧的 ',
      urara.get_colored_name(),
      ' 泛红的樱瞳热切又粘稠。',
    ]);
    urara.say([
      '乌拉拉果然变成坏孩子了，但是既然要做坏孩子，不如更任性一些，所以 ',
      callname,
      '……',
    ]);
    urara.say([
      '这次多陪我一下吧，而且……是 ',
      callname,
      ' 没有拒绝权的那种哦？',
    ]);
    era.print([
      '不等 ',
      you.get_colored_name(),
      ' 的回答，小',
      urara.uma_sex_title,
      '的双臂便用力将 ',
      you.get_colored_name(),
      ' 抱在了身下，稚嫩的笑脸也逐渐染上了绯红。',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      '抱歉，乌拉拉还是变成坏孩子了，这样我也没有办法了。',
    ]);
    inner_urara.say_as_unknown([
      '若您想做点什么的话，大部分情况我都会睁一只眼闭一只眼，好好享受吧？',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async ask_release_agree(urara, inner_urara, you, callname) {
    await era.printAndWait([
      '只要 ',
      you.get_colored_name(),
      ' 的看法有据可依，',
      urara.get_colored_name(),
      ' 多半都会认同。即使是身处囹圄之中，这般微妙的默契也依旧成立。',
    ]);
    await urara.say_and_wait([
      '嗯！没关系的，',
      callname,
      ' 这样说，也是为了乌拉拉对吧？那我现在也不能继续任性了……',
    ]);
    await urara.say_and_wait([
      callname,
      '，出去乌拉拉暂时没办法保护你了，所以要小心一点哦！明天见吧……？',
    ]);
    await era.printAndWait([
      '强忍着眼泪没有落下，',
      urara.get_colored_name(),
      ' 轻揉着泛红的眼角，恋恋不舍地为 ',
      you.get_colored_name(),
      ' 打开了门上的机关。',
    ]);
    await era.printAndWait([
      '望着阴影中神情落寞的小',
      urara.uma_sex_title,
      '，一瞬间 ',
      you.get_colored_name(),
      ' 竟又涌起一丝想要继续陪',
      urara.sex,
      '的念头？',
    ]);
    await era.printAndWait([
      '但此刻留下已并无可能。拖着变得沉重无比的步伐，',
      you.get_colored_name(),
      ' 走向了有些空虚的「自由」……',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '但是就像乌拉拉说的那样，还是小心一点，不要随随便便的回到这里比较好哦？',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async ask_release_reject(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '太短暂了哦？暂时忘掉那些琐事吧，至少现在我不会让您轻易开口。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '不管是您想要追求什么，对我来说都不不比『乌拉拉的当下』更重要呢。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '好，暂时放弃出去的想法吧，现在您可以呼吸了。',
    ]);
    await era.printAndWait([
      '随着宣言结束，令人窒息的力量放开了 ',
      you.get_colored_name(),
      ' 刚想发声的喉咙，但被人盯住背后的冰冷感却爬上了脖颈。',
    ]);
    await era.printAndWait([
      '用余光瞥向身后，色调灰黑而透明、几乎与环境融为一体的「',
      inner_urara.get_colored_actual_name(),
      '」，正用冰冷的眼神回应着 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(['除了计策与借口，耐心也是必不可少的……']);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {string} cur_time 当前时间
   */
  async ask_time(urara, callname, cur_time) {
    await urara.say_and_wait([
      '诶？啊，稍等一下……现在的时间是 ',
      cur_time,
      '。',
    ]);
    await urara.say_and_wait([
      callname,
      ' 是想起了重要的事吗？对不起哦，乌拉拉平时没办法守时，现在也没考虑到这点……',
    ]);
    await urara.say_and_wait([
      '但好不容易留下来，再多陪陪乌拉拉可以吗？乌拉拉还……',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  back_basement(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      '果然这档子事，只有第一次和无数次……而且连选择权都没有。',
    );
    inner_urara.say_as_unknown(
      '不过您也别太焦虑，来都来了，享受一下乌拉拉的任性如何？',
    );
    era.drawLine();
    era.print([
      '从陌生又熟悉的房间中醒来，',
      you.get_colored_name(),
      ' 从温暖的昏暗中起身，却发现房间中空无一人。',
    ]);
    era.print([
      '而正当 ',
      you.get_colored_name(),
      ' 疑惑主谋是谁，视线尽头的门后却传来了细碎的脚步声，随后是开锁的声音。',
    ]);
    urara.say([callname, '，你醒了呢！嘿嘿……这次也要多陪陪我哦？']);
    era.print([
      '看到那名樱粉色的小主谋蹦蹦跳跳又强而有力地笑着扑过来，',
      you.get_colored_name(),
      ' 刚醒来的意识又一阵天旋地转。',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      '抱歉，乌拉拉还是变成坏孩子了，这样我也没有办法了。',
    ]);
    inner_urara.say_as_unknown([
      '若您想做点什么的话，大部分情况我都会睁一只眼闭一只眼，好好享受吧？',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async battle_escape(urara, inner_urara, you) {
    await era.printAndWait([
      '用尽全力甩开 ',
      urara.get_colored_name(),
      ' 的纠缠，',
      you.get_colored_name(),
      ' 拖着沉重的身体来到了最后一道机关前。',
    ]);
    await era.printAndWait([
      '万幸剩余的精力依旧能支撑 ',
      you.get_colored_name(),
      ' 逃离这里。推开沉重的大门，',
      you.get_colored_name(),
      ' 向远处象征自由的光点踏出一步。',
    ]);
    await era.printAndWait([
      '离开房间的瞬间，一股没来由的恶寒随着直传入脑中的低吟从身后攀上了 ',
      you.get_colored_name(),
      ' 的脊背。',
    ]);
    await era.printAndWait([
      '回头的瞬间，',
      you.get_colored_name(),
      ' 仿佛看到另一个 ',
      inner_urara.get_colored_name(),
      ' 正站在门边，散发出的怨怒冷得发寒。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '所以，我们的主人公就这样不负责任的逃跑了，可喜可贺？',
    ]);
    await inner_urara.say_as_unknown_and_wait(['……跑吧，这次算我没能逮到你。']);
    await era.printAndWait([
      '顶着刺痛脊背的视线，',
      you.get_colored_name(),
      ' 拼命逃出了地下室，直到倒在坚实的地面上才算结束。',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async battle_prison(urara, inner_urara, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 意外顺利的摆脱了 ',
      urara.get_colored_name(),
      ' 的纠缠，来到了最后一重机关前。只要解除这个机关，就能——',
    ]);
    await you.say_and_wait('……');
    await era.printAndWait([
      '可惜僵在原地的 ',
      you.get_colored_name(),
      '，终究是无论多少次都没办法解开这道简单到残酷的机关：',
    ]);
    await era.printAndWait([
      '与紧闭的厚重门扉相比，「',
      callname,
      '」与「乌拉拉」的合照上，两人的笑颜如阳光下的蝉翼般单薄脆弱。',
    ]);
    await era.printAndWait(['紧随其后的，是「魔鬼的嘲弄」。']);
    await inner_urara.say_as_unknown_and_wait([
      '很简单哦，训练员只需要抓住门把，把这张合照，从乌拉拉那边扯开就可以了。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '嗯～在犹豫吗？但这对会对乌拉拉运用暴力的您来说，也没什么大不了的吧？',
    ]);
    await era.printAndWait([
      '凝视着照片中的笑脸，',
      you.get_colored_name(),
      ' 还是无力地收回了颤抖的手，而耳边的诅咒也在一声冷哼后随之消散了。',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   * @param {boolean} is_back 春乌拉拉是刚回来还是刚醒来
   */
  find_escape(urara, inner_urara, you, callname, is_back) {
    if (is_back) {
      era.print([
        '趁着 ',
        urara.get_colored_name(),
        ' 不在，',
        you.get_colored_name(),
        ' 本想赶快逃离这里，但就在 ',
        you.get_colored_name(),
        ' 因重重机关而焦头烂额时，门却突然打开了。',
      ]);
      urara.say([
        '诶？',
        callname,
        ' 连这个都解不开吗？明明乌拉拉已经离开一段时间了，却没能逃走呢！',
      ]);
      era.print([
        '大门缓缓地将光亮关在了外侧，',
        urara.teen_sex_title,
        '娇小纯真的面容也随着昏暗的笼罩而沾染上了一丝戏谑与嘲弄。',
      ]);
    } else {
      era.print([
        '趁着 ',
        urara.get_colored_name(),
        ' 还没醒来，',
        you.get_colored_name(),
        ' 决定逃离这里，但在 ',
        you.get_colored_name(),
        ' 因重重机关而焦头烂额时，身后却传来了',
        urara.teen_sex_title,
        '的声音。',
      ]);
      urara.say([
        '诶？',
        callname,
        ' 还没有解开吗？明明乌拉拉都睡醒了哦？',
        callname,
        ' 脑力比乌拉拉还弱很多吗？',
      ]);
      era.print([
        '静静地站在背后观察着 ',
        you.get_colored_name(),
        ' 的无用功，',
        urara.teen_sex_title,
        '娇小纯真的面容在昏暗中沾染着一丝戏谑与嘲弄。',
      ]);
    }
    urara.say([
      callname,
      ' 愣住了呢，但是不用想辩解什么哦？因为我并没有生气哦？',
    ]);
    era.print([
      '像个小大人般，在 ',
      you.get_colored_name(),
      ' 面前站定的 ',
      urara.get_colored_name(),
      ' 像教育淘气学生的老师般，向 ',
      you.get_colored_name(),
      ' 投出了「饶有兴趣」的眼神。',
    ]);
    era.print([
      '虽然这样轻松地说着，但接下来的相处时间里，笑容中没有笑意的 ',
      urara.get_colored_name(),
      ' 还是与 ',
      you.get_colored_name(),
      ' 贴得更紧了。',
    ]);
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  async flatter(urara, you, callname) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait([
        '诶？',
        callname,
        ' 是真心的吗？不过只要愿意说我就很开心，所以……咕啾～哈嗯～～',
      ]);
      await urara.say_and_wait([
        '嘿嘿～是给 ',
        callname,
        ' 的奖励，如果训练员能更喜欢乌拉拉一点就更好了！',
      ]);
      await era.printAndWait([
        '脸颊红晕的垮坐上 ',
        you.get_colored_name(),
        ' 的膝盖，小',
        urara.uma_sex_title,
        '以潮湿粘稠的深吻堵住了 ',
        you.get_colored_name(),
        ' 的甜言蜜语。',
      ]);
    } else {
      await urara.say_and_wait([
        '诶？啊！我明白 ',
        callname,
        ' 的意思，而且就算不是真心的也没关系，因为乌拉拉也有错。',
      ]);
      await urara.say_and_wait([
        '乌拉拉能和 ',
        callname,
        ' 在一起就很幸福，但只要一想到外面的事，就会变得很不安……',
      ]);
      await urara.say_and_wait([
        '既然现在 ',
        callname,
        ' 愿意，那……乌拉拉也能暂时忘掉烦恼了，对吧？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 春乌拉拉对玩家的称呼
   */
  get_up(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      '果然这档子事，只有第一次和无数次……而且连选择权都没有。',
    );
    inner_urara.say_as_unknown(
      '不过您也别太焦虑，来都来了，享受一下乌拉拉的任性如何？',
    );
    era.drawLine();
    era.print([
      '从陌生又熟悉的房间中醒来，顺着身旁的温热看去，小',
      urara.uma_sex_title,
      '即使在睡梦中依旧紧紧地环着 ',
      you.get_colored_name(),
      ' 的身体。',
    ]);
    era.print([
      '似乎也被 ',
      you.get_colored_name(),
      ' 的苏醒所影响，散着长发的 ',
      urara.get_colored_name(),
      ' 也逐渐在昏暗中睁开了湿润却缺少光彩的樱瞳。',
    ]);
    urara.say([
      '啊～',
      callname,
      '，睡得好吗？现在是什么时间来着？再躺一会儿吧？嘿嘿～啾嗯～～～',
    ]);
    era.print([
      '翻身压住 ',
      you.get_colored_name(),
      ' 的身体，不等人开口，',
      urara.teen_sex_title,
      '就用柔软的唇与舌，温柔又不容拒绝地堵住了嘴边的话语。',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      '抱歉，乌拉拉还是变成坏孩子了，这样我也没有办法了。',
    ]);
    inner_urara.say_as_unknown([
      '若您想做点什么的话，大部分情况我都会睁一只眼闭一只眼，好好享受吧？',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async strike_success(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '就是这样，训练员',
      you.adult_sex_title,
      '（您）通过偷袭小担当的方式，成功逃离了地下室……唉……',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……您还真下得去手，但既然您做出这样的选择，我也没什么好评论的。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '真不知道哪点需要您用这样的方式，但是也罢，我也暂时不想看到您的脸了。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……别担心，我会帮您安慰好乌拉拉的，会恢复原样的，全部……',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「春乌拉拉」
   * @param {CharaTalk} you 玩家
   */
  async strike_fail(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '就是这样，训练员',
      you.adult_sex_title,
      '（您）期望能偷袭小担当，结果不出所料的被打晕过去。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'GAME OVER 后的什么什么道场……没有那种东西，就算有也没有建设性意见哦？',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '您也仔细想想，乌拉拉怎么说也是一直维持在上升期的',
      inner_urara.uma_sex_title,
      '，这个结果并不奇怪吧？',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '最后……抱歉，虽然您先错在先，但乌拉拉下手没轻没重这件事，我会好好说',
      inner_urara.sex,
      '的……',
    ]);
  },
};
