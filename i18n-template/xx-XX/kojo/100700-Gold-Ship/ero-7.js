/**
 * @file 黄金船 - 调教
 * @author 雞雞
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} gs 黄金船
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {PrintedSpan} callname 黄金船对玩家的称呼
   */
  async report_preg(gs, you, taste, minoru, callname) {
    await gs.say_and_wait('……');
    era.println();
    await gs.print_and_wait([
      gs.get_colored_name(),
      ' 大咧咧地坐在马桶上，手上拿着一根棒状物，若有所思。',
    ]);
    era.println();
    await gs.print_and_wait(
      '那是验孕棒，通过检测尿液内的荷尔蒙量来测试女性是否怀孕的神奇小道具。',
    );
    era.println();
    const love = era.get('love:7');
    if (love === 100) {
      if (era.get('relation:7:0') > 0) {
        await gs.say_and_wait([
          callname,
          '  会不会承认呢……不过那家伙是个正直的人……',
        ]);
      } else {
        await gs.say_and_wait([callname, '  会不会承认呢……虽然是个混蛋……']);
      }
    } else if (love >= 75) {
      await gs.say_and_wait('造出来了，我们爱情的结晶❤️');
    } else if (love >= 50) {
      await gs.say_and_wait('这样一来，就能绑住那家伙了吧……');
    }
    era.drawLine();
    await gs.say_and_wait(['今天很好天气啊——哦对了！', callname, '，我有了。']);
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      ' 站到 ',
      you.get_colored_name(),
      ' 身旁，用手指了指自己的肚子。',
    ]);
    era.printButton('「晚上才干完第二天就说有了，那有那么快的？」', 1);
    await era.input();
    await gs.say_and_wait(
      '「哦～『才干完』～！不，不开玩笑。你看这根新鲜的验孕棒。」',
    );
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      ' 的脸色意外地严肃认真，',
      you.get_colored_name(),
      ' 半信半疑地接过了验孕棒——验孕棒上显示的结果是阳性，很明显，',
      you.get_colored_name(),
      ' 就是孩子她爸了了。',
    ]);
    era.println();
    await era.printAndWait([
      '让负责马娘怀孕的事不得不向特雷森高层报告，',
      taste.get_colored_name(),
      ' 与 ',
      minoru.get_colored_name(),
      ' 难得地露出了想要杀人的眼神，但她们还是会很负责地协助你们应对将要来临的育儿生活——以及尽力按下一切影响声誉的丑闻。',
    ]);
    era.println();
    await era.printAndWait('当然，做不做得到又是另一回事。');
  },
  /**
   * @param {CharaTalk} gs
   * @param {PrintedSpan} callname
   */
  async have_baby(gs, callname) {
    await gs.say_and_wait([callname, '……']);
    await gs.say_and_wait('虽然我平常都没有怎么好好地表达出来，但是……');
    await gs.say_and_wait('现在的我很幸福哦。');
  },
};
