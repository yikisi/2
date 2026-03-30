/**
 * @file 东海帝王 - 调教
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} call_t 玩家对东海帝王的称呼
   */
  async talk_with_hurt(teio, you, call_t) {
    await teio.say_and_wait('……');
    await you.say_and_wait('……');
    await you.print_and_wait(
      '情欲燃起，反倒不想说话，而是搂在一起，耳鬓厮磨，用唇吻和气息互相交流。',
    );
    await you.print_and_wait([
      '每当接触到',
      teio.sex,
      '的肌肤，',
      call_t,
      ' 的身体便瞬间发紧，似乎想把我留住，让彼此贴近的时间延长。',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {boolean} success 调情是否成功
   */
  async lure(teio, you, success) {
    await you.print_and_wait([
      '看着面前的可爱生物，不由自主地将',
      teio.sex,
      '抱在怀里，伸手调弄',
      teio.sex,
      '的秀发，抚摸',
      teio.sex,
      '的头。',
    ]);
    await teio.say_and_wait('干嘛……又把人当小孩子……');
    if (success || era.get(`tcvar:${teio.id}:发情`) > 0) {
      await you.print_and_wait('虽然这么说……不过尾巴倒是摇了起来呢。');
      await you.print_and_wait('似乎是想让继续的样子。');
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async switch(teio, you, callname) {
    await teio.say_and_wait([callname, '！你又欺负我——']);
    await you.print_and_wait([
      '看见眼前鼓起腮帮的小马不禁一笑，双手把住',
      teio.sex,
      '幼嫩的肩膀，一转将',
      teio.sex,
      '举起……',
    ]);
    await teio.say_and_wait('欸？');
    await you.print_and_wait('天旋地转……');
    await you.say_and_wait('现在，是你的时间了。');
    await you.print_and_wait('坏笑着告诉还有些发愣的担当。');
    await you.say_and_wait([
      '帝王老师，',
      you.actual_name,
      ' 同学等着被你教育呢。',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async pet_anal(teio, you, callname) {
    if (Math.random() >= 0.5) {
      await you.print_and_wait([
        '在每日不断，且之前特意的清理后，一扇可爱干净小门显现在面前。',
      ]);
      await you.print_and_wait([
        '升起一股恶作剧心态，伸出手指，开始在这隐秘之处打转，时不时还试图撬锁。',
      ]);
      await teio.say_and_wait(['呀……呜，', callname, '！']);
      await you.print_and_wait('……似乎并不是拒绝，反而带了一丝欢愉和催促。');
      await you.print_and_wait([
        '难道说，这位帅气的小',
        teio.sex_code === 1 ? '王子' : '公主',
        '……那里很敏感？',
      ]);
    } else {
      await teio.say_and_wait(['呜呜……']);
      await you.print_and_wait([
        '对',
        teio.sex,
        '而言，这样的待遇确实有点卑鄙了。',
      ]);
      await you.print_and_wait('不过才管不了那么多……');
      await you.print_and_wait('倒不如说，这样才有欺负的价值。');
      await you.print_and_wait('带上一个防护套，轻轻地叩开门扉……');
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async prepare_anal(teio, you) {
    await teio.say_and_wait(['……']);
    await you.print_and_wait([
      '面色赤红的',
      teio.teen_sex_title,
      '一反常态，不发一语。',
    ]);
    await you.print_and_wait(['拎起尾巴，仔细观赏着那处秘密地点。']);
    await you.print_and_wait(['娇俏的臀瓣抖动着，粉嫩干净的孔洞敞开了……']);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async ask_foot_job_with_hurt(teio, you, callname) {
    await teio.say_and_wait([
      '真抱歉啊……',
      callname,
      '，我在这方面帮不了你呢。',
    ]);
    await you.print_and_wait([
      '半是自责半是恼火的叹息传到耳中，感觉似乎做错了什么。',
    ]);
    await you.say_and_wait(['那么，就来弥补吧。']);
    await you.print_and_wait([
      '不等',
      teio.sex,
      '再做什么反应，轻轻托起',
      teio.sex,
      '的足跟，手指摩挲着嫩滑的皮肤，随后将脸贴了上去。',
    ]);
    await teio.say_and_wait(['——！']);
    await you.print_and_wait([
      '事先护理和清洗过的',
      teio.uma_sex_title,
      '小脚迅速升温。',
    ]);
    await you.print_and_wait([
      '暗笑着将一只手伸到下体处，双眼直视着自家担当，当着',
      teio.sex,
      '的面自顾自玩弄起那里来。',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tail_job(teio, you, is_first) {
    if (is_first) {
      await teio.say_and_wait(['咕……这种……']);
      await you.print_and_wait([
        '这个请求可能是有点出格，不过',
        teio.sex,
        '只是脸红了一下，还是答应了……',
      ]);
      await you.print_and_wait(['而且似乎很感兴趣的样子。']);
      await you.print_and_wait([
        '顺滑水灵的马尾瞬间缠上了挺起的性器部分，突如其来的刺激让我差点交出来。',
      ]);
      await teio.say_and_wait(['嘿嘿……']);
      await you.print_and_wait([
        teio.sex,
        '的眼睛亮了起来，用全力摆弄尾巴骚扰着那最敏感的地方。',
      ]);
    } else {
      await you.print_and_wait(['动作正变得粗暴……或者说是熟练。']);
      await teio.say_and_wait(['哇……弄湿了……']);
      await you.print_and_wait([
        '毕竟尾巴在被淫靡的汁液刷得黏糊糊之后，总能从这让毛发亮晶晶的保养品中领会到什么的。',
      ]);
      await you.print_and_wait(['而且……还不只这些……']);
      await you.print_and_wait([
        '尾巴一弹一卷，垂在上方的马尾束辫也被缠绕其中，双螺旋绞合着那里。',
      ]);
      await you.print_and_wait([
        '小',
        teio.uma_sex_title,
        '似乎自己还没注意到——自己的尾腺还分泌出了发情的麝香味，更加挑起在场生物的欲望。',
      ]);
      await you.print_and_wait(['呼吸不觉间更加粗重了……']);
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async preg_report(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 低头看着手里的报告，接受了里面显示的信息，抬头望向坐在窗前的担当。',
      ]);
      await era.printAndWait([
        '夕阳斜照入室，照在',
        teio.sex,
        '抚摸着自己小腹的手上，又打在',
        teio.sex,
        '轻轻摆动，略显无力的小腿上。',
      ]);
      await teio.say_and_wait(['训练员……训练员啊。']);
      await era.printAndWait([
        teio.sex,
        '笑了笑，指了指自己的肚子，对 ',
        you.get_colored_name(),
        ' 招招手。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 下定了决心，踩着影子走了过去。',
      ]);
      await era.printAndWait('你们，是一家人。');
    } else {
      await teio.say_and_wait(['训练员训练员——']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 还没反应过来发生了什么，就下意识张开双臂抱住了惊慌失措跑过来的自家担当，愣了一会才看懂',
        teio.sex,
        '捧在手里的那份文件。',
      ]);
      await era.printAndWait(['是这样吗……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 目光下移，盯着',
        teio.sex,
        '的小腹。',
      ]);
      await you.say_and_wait(['那里就是，', teio.sex, '和我的……'], true);
      await era.printAndWait([
        you.get_colored_name(),
        ' 怀里的东西抽动了一下，',
        you.get_colored_name(),
        ' 回过神来，对上了自家担当那双眼睛。',
        teio.sex,
        '也回望着 ',
        you.get_colored_name(),
        '，神色逐渐温和成熟起来。',
      ]);
      await era.printAndWait([
        '好吧，',
        you.get_colored_name(),
        ' 想，以后要做的计划不止包括训练了。',
      ]);
    }
  },
};
