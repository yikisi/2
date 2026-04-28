/**
 * @file 奇锐骏 - 育成
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

module.exports = {
  crazy_fan_end: (() => {
    const title = '月亮并未升起';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} title 玩家头衔
     */
    const f = async (acute, you, title) => {
      await era.printAndWait('失败本身并不可耻，只需要再次爬起来便好了。');
      await era.printAndWait([you.get_colored_name(), ' 对这句格言深信不疑。']);
      await era.printAndWait([
        '绯闻、伤病、过失、谣言，漆黑之物盘踞于 ',
        you.get_colored_name(),
        ' 与 ',
        acute.get_colored_name(),
        ' 的上空。',
      ]);
      await era.printAndWait([
        '但即便如此，',
        you.get_colored_name(),
        ' 也始终相信，只要在下一场的比赛中获胜，胜利的荣光将吹散一切阴影。',
      ]);
      await era.printAndWait([
        '为此，傍晚时分，',
        you.get_colored_name(),
        ' 离开了特雷森，来到了商店街采购着训练的用具。',
      ]);
      await era.printAndWait([
        '人们认出了 ',
        you.get_colored_name(),
        '，',
        title,
        '训练员的 ',
        you.get_colored_name(),
        '，嘲弄、鄙夷、秽语，声声不绝。',
      ]);
      await era.printAndWait([
        '说实话，',
        you.get_colored_name(),
        ' 并不想搭理他们，可他们的敌意依旧对 ',
        you.get_colored_name(),
        ' 的采购产生了妨碍。等 ',
        you.get_colored_name(),
        ' 走出店时，天色已暗。',
      ]);
      await era.printAndWait([
        '本来，',
        you.get_colored_name(),
        ' 可以沿大路回到特雷森。',
      ]);
      await era.printAndWait([
        '本来，',
        you.get_colored_name(),
        ' 可以不用走入那个小巷。',
      ]);
      await era.printAndWait('本来——');
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');

      await acute.print_and_wait(
        '等我赶到时，小巷里只有一柄小刀一面白布、一摊血迹。',
      );
      await acute.print_and_wait('以及，一个溅上血迹、被踩烂了一边的蛋糕盒。');
      await acute.print_and_wait(
        '倾斜而出的蛋糕粘在了犯人的脚底，从白布身旁，延续至小巷以外。',
      );
      await acute.print_and_wait(
        '我沿着蛋糕的踪迹，走到了小巷以外，见到了一个双手被拷住，即将被送入警车之中的酒鬼。',
      );
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('那一夜，商店街的霓虹灯光之下。');
      await acute.print_and_wait([
        '月亮，',
        { color: 'red', content: '并未升起。' },
      ]);
      era.println();
      await era.printAndWait([
        '被愤怒的粉丝报复，',
        you.get_colored_name(),
        ' 迎来了结局。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
