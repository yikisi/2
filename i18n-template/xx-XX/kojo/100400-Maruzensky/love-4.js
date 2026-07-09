/**
 * @file 丸善斯基 - 爱慕
 * @author 黑奴一号
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {PrintedSpan} m_call_m 丸善斯基对摩耶重炮的称呼
   * @param {PrintedSpan} m_call_t 丸善斯基对骏川缰绳的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async 49(maru, you, callname, m_call_m, m_call_t, y_call_m) {
    await maru.print_and_wait('最近总觉得缺了点什么。');
    await maru.print_and_wait([
      maru.get_colored_name(),
      ' 最近在烦恼着，虽然和往日一样注视着可爱后辈们的成长，期待',
      maru.couple_title,
      '能够追上自己。',
    ]);
    await maru.print_and_wait([
      '也和 ',
      callname,
      ' 一起确认过训练的成果，但还是有些萎靡不振呢。',
    ]);
    await maru.print_and_wait([
      '这点没有逃过',
      callname,
      '的双眼，虽然不知道原因，但离下一场比赛还有时间，所以要让训练员看看情况。',
    ]);
    await maru.print_and_wait([
      '似乎是平时多有照顾后辈们的功劳，',
      maru.get_colored_name(),
      ' 最近很困扰，在',
      maru.uma_sex_title,
      '们自建的小小圈子里悄悄传开了。',
    ]);
    await maru.print_and_wait([
      '随着时间的不断推移，就连 ',
      m_call_t,
      ' 也多次询问训练员 ',
      maru.get_colored_name(),
      ' 的情况。',
    ]);
    await maru.print_and_wait([
      '直到有一天，在自助餐厅聊天的时候，',
      m_call_m,
      '向 ',
      maru.get_colored_name(),
      ' 询问有关恋爱的话题。',
    ]);
    await maru.say_and_wait(['……原来是这样吗，谢谢你，', m_call_m, '。']);
    era.println();
    await maru.print_and_wait([
      maru.get_colored_name(),
      ' 意识到了自己对训练员的好感。',
    ]);
    await maru.print_and_wait(['把 ', callname, ' 约出来吧']);
    era.drawLine();
    await era.printAndWait([
      '某一天的清早，当 ',
      you.get_colored_name(),
      ' 进入训练员室，打开鞋柜时，发现有一封淡蓝色的信封。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 轻轻地将信封拿了过来，手感很不错，没有封死，折叠部分故意留了一个小缝。',
    ]);
    await era.printAndWait('拆开信封，里面只有一行文字');
    await era.printAndWait([maru.elder_sibling_sex_title, '我在天台等你哦～']);
    await era.printAndWait(
      '午时也就是十一点到一点之间吗？不管怎样，先把这封信收起来吧。',
    );
    await era.printAndWait([
      '11点整，',
      you.get_colored_name(),
      ' 到了特雷森学院的天台。',
    ]);
    await era.printAndWait([
      '阳光洒满了整个天台，微风轻柔地吹拂着 ',
      you.get_colored_name(),
      ' 的头发。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 开始搜索着将 ',
      you.get_colored_name(),
      ' 叫到天台的神秘人。突然，通往天台的门被关上了。',
    ]);
    era.printButton('「不会是遇到茶座所说的灵异事件了吧」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 颤抖着握住了门把手，用尽全力打开。',
    ]);
    await era.printAndWait([
      '出乎 ',
      you.get_colored_name(),
      ' 的意料，门被打开了。',
    ]);
    await era.printAndWait('通向天台的阶梯一如既往的沉默。');
    era.printButton('「究竟是谁在恶作剧」', 1);
    await era.input();
    await era.printAndWait([
      '能在短短几秒之间关上门，能做到的话只有',
      maru.uma_sex_title,
      '了吧？',
    ]);
    await era.printAndWait([
      '是遇到想要找到担当训练员却害羞的内向',
      maru.uma_sex_title,
      '了吗？',
    ]);
    await era.printAndWait([
      '怀念的香气传来，让 ',
      you.get_colored_name(),
      ' 回忆起了夏天的气息。',
    ]);
    await era.printAndWait([
      '似乎这份香气的主人就在附近不远，',
      you.get_colored_name(),
      ' 开始顺着这份唯一的线索寻找。',
    ]);
    await era.printAndWait([
      '不过沮丧的现实时，',
      you.get_colored_name(),
      ' 将天台仔仔细细搜索了一遍，还是没有见到这份香气的主人。',
    ]);
    era.printButton('「难不成？！」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 将目光投向天台的蓄水池上，有位',
      maru.uma_sex_title,
      '正坐在蓄水池上。',
    ]);
    await era.printAndWait([
      '白色的连衣裙，带着温柔的表情看着操场上的',
      maru.uma_sex_title,
      '们。',
    ]);
    era.printButton(`${y_call_m}？`, 1);
    await era.input();
    await maru.say_and_wait([callname, '，终于发现我了吗。']);
    era.printButton('「这样翘着腿的话裙子下的胖次就露出来了哦？」', 1);
    await era.input();
    await maru.say_and_wait('呀！变态！色狼！H！');
    await era.printAndWait([
      maru.get_colored_name(),
      ' 慌忙遮住裙摆，从蓄水池跳到了天台上。',
    ]);
    await maru.say_and_wait([
      '本来还想表现得更加',
      maru.elder_sibling_sex_title,
      '一点，不过没想到',
      callname,
      '会这么色。',
    ]);
    era.printButton('「这么好的天气干脆在这里开午餐会议吧」', 1);
    await era.input();
    await maru.say_and_wait(
      '嗯～虽然是个好主意，不过还有更重要的事情要先做呢。',
    );
    await maru.say_and_wait(['……', callname, '，可以和我约会吗？']);
    era.printButton('「如果约会的时候更加温柔一点的话我就同意」', 1);
    await era.input();
    await maru.say_and_wait('嗯！那么就说定了！');
    await era.printAndWait([
      maru.get_colored_name(),
      ' 满脸通红地看着 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      '这份崭新的情感会像被埋进土里的种子一样顺利发芽吧。',
    );
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {PrintedSpan} m_call_t 丸善斯基对骏川缰绳的称呼
   */
  async '74-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait([callname, '，这次干脆试下在泳池约会吧？']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' 躺在沙发上看着手中的漫画对正在计划下次训练事项的 ',
      you.get_colored_name(),
      ' 建议着。',
    ]);
    await era.printAndWait([
      '自从天台答应与 ',
      maru.get_colored_name(),
      ' 约会开始，双方的关系也更加亲密了。',
    ]);
    await era.printAndWait([
      '在闲暇聊天时，完成每日的预定计划期间，',
      you.get_colored_name(),
      ' 隐约感觉',
      maru.sex,
      '更加在意 ',
      you.get_colored_name(),
      ' 了。',
    ]);
    era.printButton('「为什么是泳池」', 1);
    await era.input();
    await maru.say_and_wait([
      '少女漫画的话是这么写的，主人公入学后意外遇到了对',
      maru.sex,
      '有好感的帅气训练员。',
    ]);
    await maru.say_and_wait(
      '然后因为同队的名门大小姐喜欢训练员，然而训练员却似乎更加关注主人公。',
    );
    await maru.say_and_wait(
      '出于身为青梅竹马且定下婚约的矜持，名门大小姐向主人公发出了在皋月赏一决胜负的挑战。',
    );
    await maru.say_and_wait(
      '因为名门压倒性的强大，主人公在训练员的鼓励下在泳池展开特训。',
    );
    await maru.say_and_wait(
      '本就有好感的两位在泳池里发生了心跳不停的意外！最后在泳池中心接吻了。',
    );
    await era.printAndWait([maru.sex, '从沙发上坐直然后指着手中的少女漫画。']);
    await maru.say_and_wait([callname, '不觉得这样很浪漫吗？']);
    era.printButton('「听上去蛮不错的样子」', 1);
    await era.input();
    await maru.say_and_wait('是嘛～就是这样，所以明天的话就在泳池约会吧');
    era.printButton('「游泳馆太早的话不开门吧」', 1);
    await era.input();
    await maru.say_and_wait(['之后会和', m_call_t, '说一下的，这点不用担心。']);
    era.printButton(`约会时间太久的话不会有${maru.uma_sex_title}过来吗？`, 1);
    await era.input();
    await maru.say_and_wait([
      '一大早的话',
      maru.uma_sex_title,
      '们都在晨跑呢，而且游泳课的话明天10点之前都没有。',
    ]);
    await maru.say_and_wait([callname, '还有想问的问题吗？']);
    era.printButton('「暂时没有了。」', 1);
    await era.input();
    await maru.say_and_wait([
      '那就商量好了！能与我这样的温柔大',
      maru.elder_sibling_sex_title,
      '约会的话',
      callname,
      '晚上不要兴奋的睡不着哦♪',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' 摸了摸 ',
      you.get_colored_name(),
      ' 的头，然后走出了训练室，',
      you.get_colored_name(),
      ' 开始无比期待明天的约会。',
    ]);
  },
  /**
   * 丸善斯基在水池约了训练员
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async '74-2'(maru, you, callname, y_call_m) {
    await you.say_and_wait('水还很冷');
    await era.printAndWait([
      you.get_colored_name(),
      ' 单膝跪在池边，伸手摸到的水凉飕飕的。',
    ]);
    await era.printAndWait([
      '早上6点，性急的太阳照得满地都是阳光，但早晨的游泳池没有一丝生气，只有 ',
      you.get_colored_name(),
      ' 和朋友以上恋人未满的 ',
      maru.get_colored_name(),
      ' 两人而已。',
    ]);
    await era.printAndWait(
      '虽然试图拉近二人之间的关系，不过似乎总是因为各种各样的缘故迟迟未能将这段情感升温。',
    );
    await maru.say_and_wait([callname, '看这边⭐']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' 换上了泳装向 ',
      you.get_colored_name(),
      ' 挥了挥手，然后摆动手脚做着准备运动。',
    ]);
    await era.printAndWait(
      '凸显出了曼妙曲线的泳衣在湛蓝色的水面上反射出了银色的轮廓。',
    );
    await maru.say_and_wait('嗯。像这样安静的气氛也不错呢。');
    await era.printAndWait([
      '不久之前，',
      maru.get_colored_name(),
      ' 约 ',
      you.get_colored_name(),
      ' 在天台见面，总算是确定了双方的关系。',
    ]);
    await maru.say_and_wait(
      '总算是找到二人独处的空间了呢，这么早的话小特他们还在睡觉吧？',
    );
    await maru.say_and_wait([callname, '♪不下来一起游泳吗？']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' 在水池中心处呼唤着 ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([
      '虽然对普通人类来说水温处在一个比较微妙的地步，不过对于体温稍比人类要高的',
      maru.uma_sex_title,
      '来说也许刚刚好吧？',
    ]);
    await maru.say_and_wait([callname, '！不下来一起游泳吗？']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' 的邀请打破了 ',
      you.get_colored_name(),
      ' 的思考',
    ]);
    era.printButton('「这里看的话很养眼哦」（升级关系）', 1);
    era.printButton('我突然想起还有事情要做（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait([
        callname,
        '真是好色呢～不过坦率的',
        callname,
        '我也喜欢哦♪',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        ' 朝 ',
        you.get_colored_name(),
        ' 的方向飞吻后一头扎进水中。',
      ]);
      await era.printAndWait([
        '在清澈见底的水里',
        maru.sex,
        '的身影像鱼儿一样欢快的游动。',
      ]);
      era.printButton(`${y_call_m} 很擅长游泳啊`, 1);
      await era.input();
      await era.printAndWait([
        '正当',
        maru.sex,
        '准备浮出水面向下一个目标前进时，',
        maru.sex,
        '的身体却不自觉地僵硬了',
      ]);
      era.printButton('「难道是抽筋了吗？」', 1);
      await era.input();
      await era.printAndWait([
        '眼下的情况危急到容不下更多的思考了，',
        you.get_colored_name(),
        ' 迅速跳进泳池中向奋力挣扎着探出头的',
        maru.sex,
        '游去。',
      ]);
      era.printButton('「坚持住我马上过来！」', 1);
      await era.input();
      await era.printAndWait([
        '虽然 ',
        you.get_colored_name(),
        ' 对游泳也不是很擅长，但 ',
        you.get_colored_name(),
        ' 还是尽力向',
        maru.sex,
        '游去。',
      ]);
      era.printButton('「！？」', 1);
      await era.input();
      await maru.say_and_wait([callname, '没事的。']);
      await era.printAndWait(['似乎是被', maru.sex, '骗了。']);
      await maru.say_and_wait('……对不起，我做得是不是有点过分了。');
      await era.printAndWait('开这种玩笑真是过分。');
      await maru.say_and_wait([
        '实在抱歉，不过',
        callname,
        '总算下来了，而且，从这个视角看去的话，气氛也不错吧？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 在看到 ',
        maru.get_colored_name(),
        ' 平安无事的时候心里总算松了一口气。姑且不论气氛如何，这份宁静的感觉确实很少见。',
      ]);
      await era.printAndWait(
        '因为刚才的风波剧烈波动的水面，现在也恢复了平静。',
      );
      era.printButton('「好冷」', 1);
      await era.input();
      await era.printAndWait([
        '虽然对',
        maru.uma_sex_title,
        '来说水温刚好，不过对普通人类的话还是偏凉了。',
      ]);
      await maru.say_and_wait([
        '那么',
        maru.elder_sibling_sex_title,
        '给你温暖一下吧？',
      ]);
      era.printButton('「才不yao」', 1);
      await era.input();
      await era.printAndWait([
        maru.get_colored_name(),
        ' 不容分说就抱住了还在闹别扭的 ',
        you.get_colored_name(),
        '，"实际上都是 ',
        maru.get_colored_name(),
        ' 的错吧？"虽然这么想着',
      ]);
      await era.printAndWait([
        '不过在感受到',
        maru.sex,
        '的体温时，这份不满也消失的一干二净了。',
      ]);
      await maru.say_and_wait('在这种令人脸红心跳的气氛中，不打算做些什么吗？');
      await era.printAndWait([
        maru.get_colored_name(),
        ' 暗示的已经很明显了，于是 ',
        you.get_colored_name(),
        ' 也环住了',
        maru.sex,
        '的脖颈，慢慢靠近',
        maru.sex,
        '的脸颊。',
      ]);
      await maru.say_and_wait('跟漫画里的情节一模一样呢♪');
      await era.printAndWait([
        you.get_colored_name(),
        ' 将舌头强行塞进',
        maru.sex,
        '的口腔，',
        maru.sex,
        '也没有做过多的反抗，温柔的接受了这份不满。',
      ]);
      await era.printAndWait(
        '虽然泳池的水温依然很低，但你们的周围就像春天一样温暖。',
      );
      await maru.say_and_wait([
        '我家隔壁还有一个空房间很久没有用了，',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '唇齿分开之后，你们离开泳池，在用干毛巾擦拭自己身体时， ',
        maru.get_colored_name(),
        ' 突然向 ',
        you.get_colored_name(),
        ' 提出了建议。',
      ]);
      era.printButton('「那么还请多多指教了」', 1);
      await era.input();
      await era.printAndWait([
        '我这边才是多多指教呢。',
        callname,
        '今天晚上就把行李搬过来吧♪',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 开始和 ',
        maru.get_colored_name(),
        ' 同居了',
      ]);
    } else {
      await maru.say_and_wait([callname, '真讨厌！那我自己一个人先游了。']);
      era.drawLine();
      await era.printAndWait('叮铃铃！！！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 被闹钟吵醒了，似乎做了一个奇怪的梦',
      ]);
      era.printButton('「还是准备今天的训练计划吧」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 打了一个哈欠，试图将刚才的奇怪梦境忘记。',
      ]);
      await maru.say_as_unknown_and_wait('一直犹豫的话最后是会后悔的喔。');
      await era.printAndWait([
        '心底响起的另一个声音在对 ',
        you.get_colored_name(),
        ' 说。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {PrintedSpan} m_call_t 丸善斯基对骏川缰绳的称呼
   */
  async '89-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait(
      '我喜欢你对我说的那句「『追逐着风的丸善斯基真快乐啊』。',
    );
    await maru.say_and_wait(
      '真是讨厌，明明年龄大我几岁。但是行为举止却像个高中生一样。',
    );
    await maru.say_and_wait([
      '……不过，正是因为这样，所以',
      callname,
      '才额外可爱呢。',
    ]);
    await maru.say_and_wait([
      '第一次见面的时候，我就把你当成比我小几岁的',
      you.younger_sibling_sex_title,
      '。',
    ]);
    await maru.say_and_wait(
      '所以才下意识将你抱进怀里摸了摸头，看到你满脸通红的样子才放开了手。',
    );
    await maru.say_and_wait('真是不好意思呢，不过我也不会道歉的，哼～');
    await maru.say_and_wait(
      '当你满脸兴奋地聊着我跑步时露出的笑容时，我真的非常很高兴。',
    );
    await maru.say_and_wait([
      '在和你签订合同的那个晚上，我就约',
      m_call_t,
      '一起去附近的酒吧庆祝呢。',
    ]);
    await maru.say_and_wait([
      '在听完我一脸兴奋的向',
      maru.sex,
      '描述的你的模样。',
    ]);
    await maru.say_and_wait([
      '『看来是遇到了相性不错的训练员呢』，摇晃着酒杯的',
      maru.sex,
      '晕乎乎地附和着。',
    ]);
    await maru.say_and_wait(
      '『比起比赛上的荣耀，其实我更喜欢享受着风的快乐呢。』虽然嘴上是这么说',
    );
    await maru.say_and_wait('不过心底里还是默默期待着你能不能追上我的背影呢');
    await maru.say_and_wait('第一次训练的时候，你看起来很紧张一样。');
    await maru.say_and_wait('不仅装着训练员的正式装束还和我握手。');
    await maru.say_and_wait('……从上往下数第二颗扣子扣错了。');
    await maru.say_and_wait('在被指出来的时候慌慌张张解开扣子满脸通红的样子。');
    await maru.say_and_wait([
      '就像一个小我几岁的',
      you.younger_sibling_sex_title,
      '站在我面前说着"',
      maru.elder_sibling_sex_title,
      '我现在是大人了"。',
    ]);
    await maru.say_and_wait([
      '这么可爱的',
      you.younger_sibling_sex_title,
      '不摸摸头鼓励的话那就可惜了呢。',
    ]);
    await maru.say_and_wait([
      '哎呀，下意识又把你当成',
      you.younger_sibling_sex_title,
      '看待了呢。',
    ]);
    await maru.say_and_wait('在之后，我们完成了一个接一个的目标。');
    await maru.say_and_wait('不知不觉间，你现在住在了我的隔壁房间。');
    await maru.say_and_wait('每天早上叫你起床也成了我的日课。');
    await maru.say_and_wait(
      '看着你嗯嗯的应了两声后又翻了个身打算继续睡的时候。',
    );
    await maru.say_and_wait('『现在是起床时间了』。');
    await maru.say_and_wait('无视你的抗议将你和被子强行分开。');
    await maru.say_and_wait('你打着哈欠开始今天的计划的时候。');
    await maru.say_and_wait('就像微风吹拂着我的心田一样。');
    await maru.say_and_wait('每一天都是好天气。');
    await maru.say_and_wait('训练的时候也是一样。');
    await maru.say_and_wait('每次都被我的身影俘获了呢');
    await maru.say_and_wait('紧张地记录着每次训练的时间，挑战着一个又一个极限');
    await maru.say_and_wait('每当我打破之前的记录时，你像孩子一样欢呼雀跃。');
    await maru.say_and_wait('那份孩子气的模样……真想把你抱在怀里摸摸头呢');
    await maru.say_and_wait('虽然也有遇到风停止的时候');
    await maru.say_and_wait('因为训练失误受伤的时候，被你搀扶着到保健室的时候');
    await maru.say_and_wait(
      '你在我旁边聊着最近学院发生的趣事试图分散我的痛苦时。',
    );
    await maru.say_and_wait(
      '枯燥的时光就像被小塔甩在后面的汽车一样无影无踪了。',
    );
    await maru.say_and_wait(
      '新年的问候，粉丝感谢祭时的祝福，一起看过的日落，在圣诞节的约定。',
    );
    await maru.say_and_wait('像一条看不见的丝带，将我和你紧紧地束缚在了一起。');
    await maru.say_and_wait([
      '不知不觉间，',
      callname,
      '也从一个需要照顾的',
      you.younger_sibling_sex_title,
      '君变成了一个可靠的成年人了呢',
    ]);
    await maru.say_and_wait('这段宝石般璀璨的记忆，我会永远珍惜的。');
    await maru.say_and_wait('……差不多也要正视心底的这段感情呢。');
    await maru.say_and_wait([
      '虽然我也有身为',
      maru.elder_sibling_sex_title,
      '的矜持，向后辈们分享着时尚的潮流与作为',
      maru.elder_sibling_sex_title,
      '的智慧。',
    ]);
    await maru.say_and_wait([
      '不过在我最喜欢最喜欢的',
      callname,
      '面前，达咩！',
    ]);
    await maru.say_and_wait(
      '时尚的潮流永远在变换，但这么可爱的训练员只有一个。',
    );
    await maru.say_and_wait(['那么，差不多该把', callname, '约出来了吧']);
    await maru.say_and_wait([
      '不管',
      callname,
      '是不是喜欢我，我都永远喜欢着你。',
    ]);
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async '89-2'(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      maru.get_colored_name(),
      ' 同居已经有一段时间了。',
    ]);
    await era.printAndWait('起床，吃饭然后一起上学。');
    await era.printAndWait(
      '在出门前互相检查各自的仪表有无缺漏，然后开车一起到学院。',
    );
    await era.printAndWait([
      '在',
      maru.sex,
      '上课的这段时间，',
      you.get_colored_name(),
      ' 开始按照下次比赛的标准制定下午的训练计划，有时遇到难题也会去请教更加资深的训练员。',
    ]);
    await era.printAndWait([
      '天台已经成了 ',
      you.get_colored_name(),
      ' 们默契的据点，在 ',
      you.get_colored_name(),
      ' 踏完天台最后一个台阶的时候，穿着校服的 ',
      maru.get_colored_name(),
      ' 已经在那里等 ',
      you.get_colored_name(),
      ' 了。',
    ]);
    await era.printAndWait([
      '天气晴朗的时候，你们向下俯瞰着校园中成群结队的',
      maru.uma_sex_title,
      '们聊着今天在学院中发生的趣事。',
    ]);
    await era.printAndWait(
      '阴雨连绵的时候，你们则会在训练室靠着沙发相互依偎着。',
    );
    await era.printAndWait([
      '当黄昏的最后一缕阳光照射在 ',
      maru.get_colored_name(),
      ' 的裙摆上时，',
      you.get_colored_name(),
      ' 整理好了最后一份文件，与在门外等候多时的',
      maru.sex,
      '一起回到公寓中。',
    ]);
    await era.printAndWait([
      '晚上伴随着哗哗的流水声以及从电视上搞笑艺人传来的笑声，',
      you.get_colored_name(),
      ' 将炒好的菜倒入盘中。',
    ]);
    await era.printAndWait([
      '在简单的饭前问候后，',
      you.get_colored_name(),
      ' 默默听着',
      maru.sex,
      '略带自豪的说着小特',
      maru.couple_title,
      '很快就会超过',
      maru.sex,
      '了，一边将萝卜送入口中。',
    ]);
    await era.printAndWait([
      '在互道晚安之后，',
      you.get_colored_name(),
      ' 好不容易才将想要和 ',
      you.get_colored_name(),
      ' 睡在一间房间的 ',
      maru.get_colored_name(),
      ' 劝回自己的房间。',
    ]);
    await era.printAndWait([
      '熄灯前随手拿起 ',
      maru.get_colored_name(),
      ' 向 ',
      you.get_colored_name(),
      ' 推荐的少女漫画翻上几页，然后睡觉。',
    ]);
    await era.printAndWait(
      '平静的日子像晴朗天空中漂浮着的白云，时间也在白云漫无目的的漂浮过程中变得缓慢了。',
    );
    await maru.say_and_wait([
      callname,
      '，这周日我们去海边吧，好久没有到海边去玩了。',
    ]);
    await era.printAndWait([
      '在某天的晚餐上，',
      maru.sex,
      '向 ',
      you.get_colored_name(),
      ' 提出了去海边的请求。',
    ]);
    era.printButton('「海边吗？好久没去了。」', 1);
    await era.input();
    await maru.say_and_wait(
      '上次去海边的时候还是夏季合宿在理事长那边的海滩呢，不过这次希望只有你和我两个人一起。',
    );
    era.printButton('「周日也没什么事情需要处理的，那就一起出发吧」', 1);
    await era.input();
    await maru.say_and_wait('太好了♪那我也去准备一下去海边的东西吧。');
    era.printButton(
      `（${y_call_m} 只有在这时候才会表现出天真无邪的一面啊）`,
      1,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 将最后一块青菜塞入口中想着。',
    ]);
    era.println();
    await era.printAndWait([
      '时间很快在 ',
      you.get_colored_name(),
      ' 和 ',
      maru.get_colored_name(),
      ' 的期盼中到了星期日。',
    ]);
    await era.printAndWait([
      '在小特的疾驰下，',
      you.get_colored_name(),
      ' 比预定的时间还要早的来到了这里。',
    ]);
    await era.printAndWait(
      '虽说不是旅游的旺季，但这片海滩还是有很多游客慕名前来。',
    );
    await maru.say_and_wait([callname, '，我穿这身的话这么样？']);
    await era.printAndWait([
      you.get_colored_name(),
      ' 接过 ',
      maru.get_colored_name(),
      ' 手中的袋子，看着里面的比基尼泳装。',
    ]);
    await maru.say_and_wait('接下来整片海滩的目光都要聚焦在我的身上了呢。');
    await era.printAndWait([
      you.get_colored_name(),
      ' 想着 ',
      maru.get_colored_name(),
      ' 穿着泳装的样子，莫名开始期待起来了。',
    ]);
    await maru.say_and_wait([callname, '，我们在沙滩上见咯。']);
    await era.printAndWait([
      '在更衣室前 ',
      you.get_colored_name(),
      ' 暂时和 ',
      maru.get_colored_name(),
      ' 分别开来。',
    ]);
    era.println();
    await maru.say_and_wait(['锵锵♪', callname, '这身怎么样？']);
    // Do not translate this
    era.printWholeImage('姥爷_泳_半身', {
      width: 8,
      offset: 8,
    });
    await era.printAndWait([
      maru.get_colored_name(),
      ' 像是炫耀一般的看着 ',
      you.get_colored_name(),
      '。',
    ]);
    era.printButton('「莫名感觉很不爽」', 1);
    await era.input();
    await maru.say_and_wait([
      callname,
      '是想独占这么好的',
      maru.sex_code === 1 ? '男朋友' : '女朋友',
      '吧♪哼哼。',
    ]);
    await era.printAndWait(
      '你们找了一处人少的地方支起了遮阳伞，今天的天气额外的舒适呢。',
    );
    await maru.say_and_wait([
      callname,
      '可以帮我涂下防晒霜吗？就放在篮子里面。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 从篮子里将防晒霜拿了出来，倒了一点在手上然后均匀地涂抹在了',
      maru.sex,
      '的背上。',
    ]);
    await maru.say_and_wait('非常感谢。');
    await era.printAndWait([
      '不断抖动着的耳朵随着音乐的节奏打着节拍，',
      you.get_colored_name(),
      ' 突然想要对',
      maru.sex,
      '恶作剧。',
    ]);
    era.printButton(`悄悄靠近${maru.sex}的耳朵大喊一声（暂不升级）`, 1);
    era.printButton('……不，还是算了（升级关系）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 悄悄靠近了',
        maru.sex,
        '的耳朵，尚不知接下来会发生什么惨烈事件的',
        maru.sex,
        '还在疑惑为什么手的动作停了下来。',
      ]);
      era.printButton('「哇！」', 1);
      await era.input();
      await maru.say_and_wait('呀！');
      await era.printAndWait([
        maru.get_colored_name(),
        ' 吓得身体猛地一抖，半晌后才回过神来。',
      ]);
      await maru.say_and_wait([callname, '！']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' 深呼吸正试图平复自己的心情。',
      ]);
      era.printButton(
        `因为 ${y_call_m} 的耳朵看起来很吸引人，所以忍不住就想恶作剧了。`,
        1,
      );
      await era.input();
      await maru.say_and_wait([
        '哈啊～',
        callname,
        '还真像个小孩子一样。你还会对其他人做这种事情吗？',
      ]);
      era.printButton('「只对你做过罢了」', 1);
      await era.input();
      await maru.say_and_wait('也就是说我很荣幸成为你第一个牺牲品了吗？');
      era.printButton('「啊，不是，你听我解释。」', 1);
      await era.input();
      await maru.say_and_wait('我也要让你尝尝看我刚才受到的惊吓！');
      era.printButton('「呜啊啊啊啊啊！」', 1);
      await era.input();
      await era.printAndWait([
        '接下来你花了很久时间才让',
        maru.sex,
        '完全消气。',
      ]);
    } else {
      await era.printAndWait([
        '在两种激烈思想的斗争下，',
        you.get_colored_name(),
        ' 最后还是放弃整蛊的想法，转而专心给 ',
        maru.get_colored_name(),
        ' 进行按摩。',
      ]);
      await era.printAndWait('带着潮湿气息的风从海面来到了大地之上。');
      await era.printAndWait('留恋着沙滩久久不愿离去。');
      await maru.say_and_wait(['风停了呢，', callname, '。']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' 久久地注视着那片大海。',
      ]);
      await maru.say_and_wait('……。在日落之后，月亮也要升起来了。');
      await era.printAndWait(['忽然', maru.sex, '开口了。']);
      era.printButton('「不论日升月落，风都会悄然起舞。」', 1);
      await era.input();
      await maru.say_and_wait(['……', callname, '，再可以靠近一点吗？']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' 将整个身体重量压在了 ',
        you.get_colored_name(),
        ' 的手臂上，',
        you.get_colored_name(),
        ' 紧紧地握住了',
        maru.sex,
        '的手。',
      ]);
      await era.printAndWait('你们默默地看着月亮升到了半空之中。');
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async 99(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      maru.get_colored_name(),
      ' 经历了种种困难之后，终于确认了彼此的心意。',
    ]);
    await era.printAndWait([
      '从 ',
      maru.get_colored_name(),
      ' 那里拿到了要提交给政府机关的文件后，在各自需要填写的地方珍重的填写上了自己的名字。',
    ]);
    await era.printAndWait(
      '约定好了婚礼举行的时间后，按照习俗你们暂时不能见面。',
    );
    await era.printAndWait([
      '婚礼的前一天晚上 ',
      you.get_colored_name(),
      ' 迟迟无法入睡，索性拿过放在床边的 ',
      you.get_colored_name(),
      ' 与',
      maru.sex,
      '合影的相册。',
    ]);
    await you.say_and_wait('这是出道战胜利后在萨莉亚庆祝时拍下的照片', true);
    await era.printAndWait([
      '不擅长使用手机的',
      maru.sex,
      '更喜欢通过拍照的方式留下 ',
      you.get_colored_name(),
      ' 与',
      maru.sex,
      '之间的回忆，',
      you.get_colored_name(),
      ' 翻开了第二页。',
    ]);
    await you.say_and_wait(
      ['这是帮', maru.sex, '去车展拿小塔模型时的照片'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' 抬起头瞥了一眼放在柜子上的小塔模型后划到了下一页。',
    ]);
    await you.say_and_wait('这是训练失败的时候在医务室拍下的照片', true);
    await era.printAndWait([
      maru.get_colored_name(),
      ' 听着放在旁边的怀旧歌曲正在休养，',
      maru.sex,
      '的耳朵正随着音乐的节奏打着节拍。',
    ]);
    await you.say_and_wait(
      [
        '当时的',
        maru.sex,
        '还是没有放下',
        maru.elder_sibling_sex_title,
        '的架子吗',
      ],
      true,
    );
    await era.printAndWait([
      '莫名感到烦躁的 ',
      you.get_colored_name(),
      ' 索性让书页哗啦啦的翻动，最后停留在了 ',
      you.get_colored_name(),
      ' 与',
      maru.sex,
      '在夏季合宿时一起拍下的照片。',
    ]);
    await you.say_and_wait(
      [maru.sex, '那个时候就已经将我视为比较亲密的人了吗'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' 看见 ',
      you.get_colored_name(),
      ' 被',
      maru.sex,
      '拉着手臂强行拍下的合影，慌乱的 ',
      you.get_colored_name(),
      ' 和',
      maru.sex,
      '的笑容形成了鲜明的对比。',
    ]);
    await you.say_and_wait('那时为了避免奇怪的绯闻真是花了好大的力气啊', true);
    await era.printAndWait('叹了口气心情不错的翻到了下一页');
    await era.printAndWait([
      '穿着冬季衣服的 ',
      you.get_colored_name(),
      ' 和',
      maru.sex,
      '在离这里不远的山上拍下的合影',
    ]);
    await you.say_and_wait(
      ['当时和', maru.sex, '约定了明年圣诞时一同在桦树林道散步'],
      true,
    );
    await era.printAndWait([
      '正当 ',
      you.get_colored_name(),
      ' 准备翻到下一页时。',
    ]);
    await era.printAndWait('咚咚咚');
    era.printButton(`${y_call_m}？！`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 打开了房门，穿着日常服装的',
      maru.sex,
      '站在门口。',
    ]);
    await maru.say_and_wait('这么美好的夜晚一起去兜风吧');
    era.printButton('「嗯，一起出发吧」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 紧紧握住了 ',
      maru.get_colored_name(),
      ' 的手，一起向小塔停放的地方跑去。',
    ]);
    await maru.say_and_wait([callname, '，我能遇见你真是太好了，谢谢你。']);
    await era.printAndWait('在寂静的深夜公路上又刮起了一阵潮湿的自然风。');
  },
};
