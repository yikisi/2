/**
 * @file 曼城茶座 - 地下室
 * @author Necroz
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  welcome(coffee, you, callname) {
    era.print([
      '……',
      you.get_colored_name(),
      ' 缓缓睁开了眼睛，仿佛是被随手丢在床上的姿势让 ',
      you.get_colored_name(),
      ' 感觉不太好受，脑袋也有些疼的发胀。',
    ]);
    era.print([
      '还未等 ',
      you.get_colored_name(),
      ' 对眼前陌生的天花板进行评价，熟悉的面孔便出现在 ',
      you.get_colored_name(),
      ' 的视线中。',
    ]);
    era.println();

    coffee.say(['……早安，', callname, '，不过现在已经到了中午也说不定……']);
    coffee.say(['为什么会在这里醒来……吗？']);
    coffee.say([
      '今天我找遍了特雷森也没能找到 ',
      callname,
      '，最后是在朋友的引导下才发现了你的所在地……',
    ]);
    coffee.say(['……如果这样回答的话，你会愿意相信吗？']);
    era.println();

    era.print([
      '感受着仍带有些许疼痛的后脑勺，',
      coffee.get_colored_name(),
      ' 的这番说辞显然无法让 ',
      you.get_colored_name(),
      ' 信服。',
    ]);
    era.println();

    coffee.say(['……最近，', callname, ' 和我独处的时间越来越少了吧……']);
    era.println();

    era.print([
      coffee.get_colored_name(),
      ' 轻柔地按压着 ',
      you.get_colored_name(),
      ' 的太阳穴，在耳边低沉道。',
    ]);
    era.println();

    coffee.say([
      '……我明白 ',
      callname,
      ' 你的难处，作为特雷森学园的训练员一定很累吧？',
    ]);
    coffee.say([
      '……不过就算再累，也不能忘记我们的约定……想逃的话，关于追逐这一点，我还是比较有自信的……',
    ]);
    coffee.say(['……就在这里休息一段时间，缓解疲劳怎么样？']);
    coffee.say([
      '我一开始对你说的，也确实不是谎话……把 ',
      callname,
      ' 带来这里的，并不是『我』……不过我也没反对就是了……',
    ]);
    coffee.say(['那么……在我满足之前，还请暂时待在这里……']);
    era.println();

    era.print([
      coffee.get_colored_name(),
      ' 话音落下，地下室的阴冷也随之蔓延而来……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async ask_release_agree(coffee, you, callname) {
    await coffee.say_and_wait(['想出去，吗……']);
    era.println();

    await era.printAndWait([
      '听到 ',
      you.get_colored_name(),
      ' 的请求，',
      coffee.get_colored_name(),
      ' 露出了有些苦恼的表情。',
    ]);
    era.println();

    await coffee.say_and_wait([
      '可以哦……',
      callname,
      ' 来到这里本身就是意外，我也差不多感到满足了……',
    ]);
    await coffee.say_and_wait(['门就在那……请自便……']);
    await coffee.say_and_wait(['开门……？门从来就没有上过锁……']);
    era.println();

    await era.printAndWait(['真的假的……']);
    await era.printAndWait([
      you.get_colored_name(),
      ' 试着扭动门把手，咔嚓一声，门就这么被轻易打开了。',
    ]);
    await era.printAndWait([
      '……这一刻 ',
      you.get_colored_name(),
      ' 感觉之前的解锁经历仿佛是在做梦。',
    ]);
    era.println();

    await coffee.say_and_wait(['……', callname, '。']);
    era.println();

    await era.printAndWait([coffee.get_colored_name(), ' 的声音从背后传来。']);
    era.println();

    await coffee.say_and_wait(['请务必……务必记住我们的约定……']);
    await coffee.say_and_wait([
      '下一次，说不定……就是我亲自把 ',
      callname,
      ' 你带来这里了……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {boolean} is_first 是否是第一次请求释放被拒绝
   */
  async ask_release_reject(coffee, you, callname, is_first) {
    if (is_first) {
      await coffee.say_and_wait([
        '可以哦……毕竟从一开始就不是我把 ',
        callname,
        ' 带来这里的……',
      ]);
      era.println();

      await era.printAndWait(['吱呀一声，那扇日思夜想的门就这么自己打开了。']);
      await era.printAndWait([
        '看着门外通向外界的楼梯，',
        you.get_colored_name(),
        ' 兴奋得都快要哭了出来，立马向门外走去。',
      ]);
      await era.printAndWait(['三步并作两步，转过一个个拐角……']);
      await you.say_and_wait(['咦……'], true);
      await you.say_and_wait(['楼梯，是不是有点太长了？'], true);
      era.println();

      await era.printAndWait(['逃离地下室的兴奋劲一过，头脑渐渐冷静了下来。']);
      await you.say_and_wait(['我……到底在楼梯间待了多久？'], true);
      await era.printAndWait([
        '伴随着这个念头，',
        you.get_colored_name(),
        ' 突然发现，那股在地下室内一直缠绕着 ',
        you.get_colored_name(),
        ' 的阴冷，从未在 ',
        you.get_colored_name(),
        ' 身边消失。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 发了疯似的向上不断奔去，大脑麻醉着自己——或许只是自己的错觉、或许特雷森里真的有这么深的地下室呢？',
      ]);
      await era.printAndWait([
        '终于，',
        you.get_colored_name(),
        ' 一脚踩空，从楼梯上滚落，直到撞上墙壁才停下。',
      ]);
      era.println();

      await era.printAndWait(['奇怪……明明摔下了楼梯，但是却完全不疼……']);
      await era.printAndWait([
        '抬起头来，向楼梯下方看去，地下室的大门敞开，与自己离开时没有丝毫变化。',
      ]);
      await era.printAndWait(['明明已经走了很久，一下子就回到了地下室门前……']);
      await era.printAndWait(['回去吧、回去吧——耳边似乎传来了低语。']);
      await era.printAndWait([
        '沉默许久，',
        you.get_colored_name(),
        ' 还是回到了地下室内。',
      ]);
      era.println();

      await coffee.say_and_wait(['欢迎回来，', callname, '……']);
      era.println();

      await era.printAndWait([
        '仿佛早已预料到了结局，',
        coffee.get_colored_name(),
        ' 面带微笑，静静地看着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(['身后的门缓缓关闭。']);
    } else {
      await coffee.say_and_wait([callname, '……你想，再试一次吗？']);
      era.println();

      await era.printAndWait([
        '回想起上次的经历，',
        you.get_colored_name(),
        ' 不寒而栗。',
      ]);
      era.println();

      await coffee.say_and_wait(['呵呵……我还没有满足呢，', callname, '……']);
    }
  },
  /**
   * @param {CharaTalk} coffee
   * @param {string} cur_time
   */
  async ask_time(coffee, cur_time) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait(['时间吗……现在是 ', cur_time]);
      await coffee.say_and_wait('不用担心，时间十分充裕……');
    } else {
      await coffee.say_and_wait([cur_time, '……怎么了吗？']);
      await coffee.say_and_wait('要是有什么要紧的事……有『人』可以代劳');
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async battle_success(coffee, you) {
    await era.printAndWait([
      '心中默念一句抱歉，',
      you.get_colored_name(),
      ' 径直把 ',
      coffee.get_colored_name(),
      ' 推倒在了床上。',
    ]);
    await era.printAndWait(['在对方期待的眼神中，将双手放在了白皙的脖颈上……']);
    era.println();
    await era.printAndWait(['……成功了。']);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 从一开始就没有反抗，甚至还把手搭在了 ',
      you.get_colored_name(),
      ' 的小臂上。',
    ]);
    await era.printAndWait([
      '也许',
      coffee.sex,
      '觉得这是在进行激烈的事前活动吧……',
    ]);
    await era.printAndWait(['亲手把爱着自己的担当掐晕……这可真是……']);
    await era.printAndWait(['…………总之先逃出去。']);
  },
  /** @param {CharaTalk} you 玩家 */
  async battle_escape(you) {
    await era.printAndWait([
      '经过一段时间的摸索，',
      you.get_colored_name(),
      ' 终于发现，其实门根本就没有上锁。',
    ]);
    await era.printAndWait([
      '每当 ',
      you.get_colored_name(),
      ' 尝试转动门把手时，一股强大力量就会同时死死地抓住另一侧的门把手。',
    ]);
    await era.printAndWait([
      '能无声无息做到这种事的存在……',
      you.get_colored_name(),
      ' 只知道一个。',
    ]);

    era.printButton('「朋友……是你吧？」', 1);
    await era.input();

    await era.printAndWait(['没有回应。']);

    era.printButton('「没能及时关注到茶座的状况是我的错……」', 1);
    era.printButton(
      '「但就这么把我关在地下室里也不是办法，请给我改正的机会……！」',
      2,
    );
    await era.input();

    await era.printAndWait(['把手自己转动了起来，门随之缓缓打开。']);
    era.println();

    era.printButton('「谢谢你，我——」', 1);
    await era.input();

    await era.printAndWait([
      '没等 ',
      you.get_colored_name(),
      ' 把感谢的话语说完，',
      you.get_colored_name(),
      ' 就被狠狠地一脚踢出了门外，然后门就「嘭」的一声关上了。',
    ]);
    await era.printAndWait([
      '揉了揉屁股，',
      you.get_colored_name(),
      ' 走出了地下室。',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async battle_prison(coffee, you, callname) {
    await era.printAndWait([
      '这样的锁，',
      you.get_colored_name(),
      ' 完全没有见过……',
    ]);
    await era.printAndWait([
      '明明应该到了能解开的位置，可门把手仍旧像被焊死一般纹丝不动。',
    ]);
    await era.printAndWait(['……', you.get_colored_name(), ' 只好暂时放弃。']);
    era.println();
    await coffee.say_and_wait([callname, '，发泄完了的话……该轮到我了……']);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async battle_fail(coffee, you, callname) {
    await era.printAndWait([
      '心中默念一句抱歉，',
      you.get_colored_name(),
      ' 径直把 ',
      coffee.get_colored_name(),
      ' 推倒在了床上。',
    ]);
    await era.printAndWait(['在对方期待的眼神中，将双手放在了白皙的脖颈上……']);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 低估了',
      coffee.uma_sex_title,
      '的体质。',
    ]);
    await era.printAndWait([
      '直到 ',
      you.get_colored_name(),
      ' 用光力气，',
      coffee.get_colored_name(),
      ' 也没能如 ',
      you.get_colored_name(),
      ' 想象般晕厥过去。',
    ]);
    await era.printAndWait([
      '湿润的目光、潮红的面庞……很明显是被 ',
      you.get_colored_name(),
      ' 弄发情了……',
    ]);
    era.println();

    await coffee.say_and_wait([callname, '，发泄完了的话……该轮到我了……']);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {boolean} is_back 曼城茶座是刚回来还是刚醒来
   */
  find_escape(coffee, you, callname, is_back) {
    era.print(['可恶，这锁怎么这么难开！']);
    era.print([
      '在 ',
      you.get_colored_name(),
      ' 专心致志地对付门上的锁时，一张脸出现在 ',
      you.get_colored_name(),
      ' 脸旁。',
    ]);
    era.println();

    coffee.say([callname, '……你在做什么？']);
    era.println();

    era.print('茶座？！');
    if (is_back) {
      era.print(['什么时候回来的，明明一直在门前啊！']);
    } else {
      era.print(['什么时候醒过来的，这下完蛋了……']);
    }
    era.print([
      you.get_colored_name(),
      ' 被吓了一跳，腿一软，若不是 ',
      coffee.get_colored_name(),
      ' 恰好把 ',
      you.get_colored_name(),
      ' 搀扶住，怕是要直接跪坐在地上。',
    ]);
    era.println();

    coffee.say(['请不要做奇怪的事……我会很困惑的……']);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async flatter(coffee, you) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 主动靠近 ',
        coffee.get_colored_name(),
        '，抚摸着',
        coffee.sex,
        '柔顺的长发。',
      ]);
      await era.printAndWait([
        '这似乎对 ',
        coffee.get_colored_name(),
        ' 很受用，找了个舒适的姿势靠在 ',
        you.get_colored_name(),
        ' 肩上，发丝散发的微香使 ',
        you.get_colored_name(),
        ' 有些失神。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 向 ',
        coffee.get_colored_name(),
        ' 说了些情话，肉麻的程度让 ',
        you.get_colored_name(),
        ' 自己也有些脸红。',
      ]);
      await era.printAndWait([
        '就算说这些，也是没用的——',
        coffee.get_colored_name(),
        ' 的眼神透露出这样的信息。',
      ]);
      await era.printAndWait([
        '……不过从',
        coffee.sex,
        '身后摇晃着的尾巴可以看出事实并非如此。',
      ]);
    }
  },
  /**
   * 限定从PlanB速子地下室救出玩家
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
   */
  async rescue_from_tachyon(coffee, you, callname, c_call_t) {
    await coffee.say_and_wait('事到如今才愿意表露心声吗……这副模样，太难看了……');
    await coffee.say_and_wait('非议、质疑、谴责……咒骂……');
    await coffee.say_and_wait([
      '因为你的一意孤行……',
      callname,
      ' 遭到了多少困难、度过了多少无眠的夜晚……',
    ]);
    await coffee.say_and_wait([
      you.sex,
      '不是你的牺牲品、更不是你实现梦想的『豚鼠』……是你亲手抛下了',
      you.sex,
      '……',
    ]);
    await coffee.say_and_wait([
      '一直陪伴着 ',
      callname,
      ' 的人是我……',
      c_call_t,
      '……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async strike_success(coffee, you) {
    await era.printAndWait(['不可思议……']);
    await era.printAndWait([
      '在 ',
      you.get_colored_name(),
      ' 突然的手刀攻击下，',
      coffee.get_colored_name(),
      ' 轻哼了一声，倒在了地上。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 检查了 ',
      coffee.get_colored_name(),
      ' 的状态，确实是晕倒了。',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      '有这么脆弱吗……还是说，有人在帮助自己？',
    ]);
    await era.printAndWait(['……总之先逃出去吧。']);

    await era.printAndWait(['地下室的阴冷似乎消散了一点。']);
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 曼城茶座对玩家的称呼
   */
  async strike_fail(coffee, you, callname) {
    await era.printAndWait(['就是现在！']);
    await era.printAndWait([
      '趁 ',
      coffee.get_colored_name(),
      ' 不备，',
      you.get_colored_name(),
      ' 一个手刀结结实实地砍在了',
      coffee.sex,
      '的后颈上……',
    ]);
    await era.printAndWait(['成功了……吗？']);
    era.println();

    await coffee.say_and_wait([callname, '……']);
    era.println();

    await era.printAndWait([
      '手臂还未抽开，就被 ',
      coffee.get_colored_name(),
      ' 牢牢抓住。',
    ]);
    era.println();

    await coffee.say_and_wait([
      '如果对方不是爱着你的我……这样攻击',
      coffee.uma_sex_title,
      '，可是非常危险的……',
    ]);
    await coffee.say_and_wait(['……不过，我也不能对这种行为视而不见……']);
    await coffee.say_and_wait(['谁才是对方的所有物这一点，需要再次予以说明……']);
    era.println();

    await era.printAndWait([
      '地下室的阴冷攀上了 ',
      you.get_colored_name(),
      ' 的四肢，',
      you.get_colored_name(),
      ' 的知觉也随之凝结……',
    ]);
  },
};
