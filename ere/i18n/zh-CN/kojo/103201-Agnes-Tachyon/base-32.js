/**
 * @file 爱丽速子 - 地下室
 * @author 幽白書
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  welcome(tachyon, callname) {
    tachyon.say(['呀，', callname, '，醒来了啊。']);
    tachyon.say(['还喜欢吗？我的新实验室。']);
    tachyon.say(['……不要装傻？……呵呵，那么直入正题吧。']);
    tachyon.say(['——', callname, '，我一直很好奇，']);
    tachyon.say([
      '我，是你眼中最具可能性的',
      tachyon.uma_sex_title,
      '，不是吗？',
    ]);
    tachyon.say(['我的跑法，令你炫目，令你疯狂，不是吗？']);
    tachyon.say(['——那么，现在你的眼中，看着的到底是谁？']);
    tachyon.say(['我看不出来……', callname, '，']);
    tachyon.say(['我已经，不能选择没有你的可能性了，']);
    tachyon.say(['但是你的眼中，我却无法看见我的倒影。']);
    tachyon.say([
      '这就是恋爱吗？恋爱原来是如此不公的吗？我已经不能没有你了，你的眼中却还是没有我。',
    ]);
    tachyon.say([
      '……对不起，',
      callname,
      '，但这次的实验可能必须无视你的意愿进行。在我想明白之前，请你暂且，留在这里吧。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ask_release_agree(tachyon, you, callname) {
    await tachyon.say_and_wait(['可以哦。']);
    era.println();
    await era.printAndWait([
      '明明已经做好了被拒绝的准备，没想到 ',
      tachyon.get_colored_name(),
      ' 却答应的如此痛快。',
    ]);
    era.println();

    await tachyon.say_and_wait(['毕竟实验……姑且也算得出结果了，']);
    await tachyon.say_and_wait(['我也并没有一辈子将你束缚在这里的打算。']);
    await tachyon.say_and_wait(['————是啊，要说的话，或许还有一个问题吧。']);
    era.println();

    await era.printAndWait([
      '忽然，',
      tachyon.get_colored_name(),
      '靠近 ',
      you.get_colored_name(),
      ' 的面前，盯着 ',
      you.get_colored_name(),
      ' 的眼睛。',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      '，你曾经说过，我的眼眸有着令人发狂的魔力，',
    ]);
    await tachyon.say_and_wait(['那么……现在的你，还能从中看见那种魔力吗？']);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 眼眸的魅力……是来源于',
      tachyon.sex,
      '对梦想的追求，来源于',
      tachyon.sex,
      '献身于极限的决心。',
    ]);
    await era.printAndWait([
      '那么，现在的 ',
      tachyon.get_colored_name(),
      ' 呢？',
    ]);
    await era.printAndWait(['只醉心于自己，渴求自己的模样确实令人心动，']);
    await era.printAndWait([
      '但是现在的 ',
      tachyon.get_colored_name(),
      '，眼中还有那种，让人愿意为其付出一切的魔力吗？',
    ]);
    await era.printAndWait([you.get_colored_name(), ' 摇了摇头。']);
    era.println();

    await tachyon.say_and_wait(['…………啊，这样啊。']);
    await tachyon.say_and_wait(['那么，最后一个问题也得到解答了，']);
    await tachyon.say_and_wait(['你可以离开了。']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' 将东西整理好，准备离开时，却发现 ',
      tachyon.get_colored_name(),
      ' 背对着自己坐在床边。',
    ]);

    era.printButton('「速子？」', 1);
    era.printButton('「你不走吗？」', 2);
    await era.input();

    await tachyon.say_and_wait(['……呵呵，都这样了，居然还在关心我吗？']);
    await tachyon.say_and_wait(['我没事，我等下也会离开。只是……']);
    await tachyon.say_and_wait(['我不太想，让你看见我此刻———丑陋的眼眸。']);

    await era.printAndWait([you.get_colored_name(), ' 离开了地下室，']);
    await era.printAndWait([
      '从头到尾，',
      tachyon.get_colored_name(),
      ' 都没回过头来。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ask_release_reject(tachyon, callname) {
    await tachyon.say_and_wait([
      callname,
      '，我应该和你说过，这次的实验需要进行的时间会比较长……没说过吗？那我现在说了。',
    ]);
    await tachyon.say_and_wait([
      '我始终不能明白……为什么你会如此执着于其他',
      tachyon.uma_sex_title,
      '，以及——为什么，我会如此执着于这件事。',
    ]);
    await tachyon.say_and_wait([
      '所以，在我想清楚之前，不好意思，但我恐怕无法放你离开。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async battle_prison(tachyon, callname) {
    await tachyon.say_and_wait(['为了获得自由，不惜对自己的爱马下手吗？']);
    await tachyon.say_and_wait([
      '还是说……因为外面有对你而言，比我更重要的人？',
    ]);
    await tachyon.say_and_wait([
      '……真是奇妙的感觉啊，明明原本的我，应该不是会这样疑神疑鬼的人，',
    ]);
    await tachyon.say_and_wait([
      '可以告诉我吗？',
      callname,
      '——你看到的我，现在是什么模样的？',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  find_escape(tachyon, you) {
    tachyon.say(['想出去吗？']);
    era.println();

    era.print([
      tachyon.get_colored_name(),
      ' 轻柔的握住 ',
      you.get_colored_name(),
      ' 放在门把上的手。',
    ]);
    era.println();

    tachyon.say(['……我不会阻拦，但也不会帮助你，']);
    tachyon.say([
      '就像我在努力追寻答案一般，豚鼠君，你也试着靠自己的努力挣脱我的束缚吧。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async strike_success(tachyon, you) {
    await tachyon.say_and_wait(['嗯……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' 动手的速度很快，多亏了 ',
      tachyon.get_colored_name(),
      ' 的药，练出来的体力也已经足够，',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 还没反应过来便被击晕倒地。',
    ]);
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async strike_fail(tachyon) {
    await tachyon.say_and_wait([
      '无法解决问题，于是从出题人开始解决……也是一种解题思路。',
    ]);
    await tachyon.say_and_wait(['然而，你却没有考虑到规格上的差距……']);
    await tachyon.say_and_wait([
      '是平常我的药物让你产生了过度的自信……还是',
      tachyon.uma_sex_title,
      '平时表现的无害化导致你产生了自己能够战胜的错觉？',
    ]);
    await tachyon.say_and_wait([
      '……罢了，既然不明白的话，那么就趁这个机会好好明白吧。',
    ]);
    await tachyon.say_and_wait([
      '将',
      tachyon.uma_sex_title,
      '的素质，',
      tachyon.uma_sex_title,
      '的身体能力，',
      tachyon.uma_sex_title,
      '的性欲……都好好的，铭刻在身上。',
    ]);
  },
};
