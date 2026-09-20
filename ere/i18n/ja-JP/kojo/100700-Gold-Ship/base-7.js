/**
 * @file ゴールドシップ - 地下室
 * @author 雞雞
 */
const era = require('#/era-electron');

const chara_colors = require('#/data/chara-colors').chara_colors[7];

module.exports = {
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   */
  async ask_release_agree(gs, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' が帰りたいと切り出すと、椅子の背に凭れて ',
      you.get_colored_name(),
      ' と一緒にゲームしていた ',
      gs.get_colored_name(),
      ' は、眉を寄せた。',
    ]);
    era.println();
    await gs.say_and_wait('あーー？');
    await gs.say_and_wait(
      'ここ水清くて砂やわらかくて風涼しくて水ひんやり、なんでわざわざ外に出る必要あんの？',
    );
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      ' は少し考え、気が進まなそうに呟いた。',
    ]);
    era.println();
    await gs.say_and_wait('まったく、手がかかるやつだ……');
    await gs.say_and_wait('じゃあ、市場で買い物済ませたら戻るとするか。');
    await gs.say_and_wait([
      {
        color: chara_colors[1],
        content: 'あ、そうだ……生きてるウナギに赤飯がいい！',
      },
    ]);
    era.println();
    await era.printAndWait([
      'そのあと ',
      gs.get_colored_name(),
      ' は、やっと地上に出られた ',
      you.get_colored_name(),
      ' に、うまい晩飯を一食ぶん追加で奢らせてから、ようやく正式に解放してくれた。',
    ]);
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   */
  async ask_release_reject(gs, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' が帰りたいと切り出すと、椅子の背に凭れて ',
      you.get_colored_name(),
      ' と一緒にゲームしていた ',
      gs.get_colored_name(),
      ' は、眉を寄せた。',
    ]);
    era.println();
    await gs.say_and_wait('あーー？');
    await gs.say_and_wait(
      'ここ水清くて砂やわらかくて風涼しくて水ひんやり、なんでわざわざ外に出る必要あんの？',
    );
    era.println();
    await era.printAndWait([
      'たぶんこの話を避けたいのだろう、',
      gs.get_colored_name(),
      ' は一瞬で、画面の激しい戦況へ意識を戻した。',
    ]);
    era.println();
    await gs.say_and_wait('くだんねえこと言ってないで、虫の巣の暴君を倒せよ！');
    await gs.say_and_wait('ああああ範囲技くらった——！');
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      ' が飽きたくなるまで、ここからは出られそうにない。',
    ]);
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {string} cur_time 現在時刻
   * @param {number} security_level ゴールドシップの警戒レベル
   */
  async ask_time(gs, you, cur_time, security_level) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      gs.get_colored_name(),
      ' に、いまの時刻を尋ねた……',
    ]);
    era.println();
    await gs.say_and_wait([
      { color: chara_colors[1], content: 'イマナンジ？' },
    ]);
    if (security_level > 3) {
      await gs.say_and_wait('カジノに時計がねえ理由、知ってるか？');
      await gs.say_and_wait('知らない？ じゃあ、いま知ったな。');
    } else {
      await gs.say_and_wait([
        { color: chara_colors[1], content: 'トゥトゥ～～' },
      ]);
      await gs.say_and_wait([
        {
          color: chara_colors[1],
          content: `ただいまの時刻は～～${cur_time}～～`,
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   */
  find_escape(gs, you) {
    era.print([
      you.get_colored_name(),
      ' は落ち着かない足取りで、暗い通路を進んでいく……',
    ]);
    era.println();
    gs.say([{ color: chara_colors[1], content: 'ふっ……はっ……ふっ……はっ……' }]);
    era.println();
    era.print([
      '出口の手前で、',
      you.get_colored_name(),
      ' は荒い息遣いを聞いた。',
    ]);
    era.print('その大きさたるや、わざと演じてるんじゃないかと思えるほどだ。');
    era.print([
      'そして目を刺す赤い光が灯る。なんと黒仮面に赤い光剣、ダースベイダー風の ',
      gs.get_colored_name(),
      ' が、もうずっと待ち構えていたのだァ！',
    ]);
  },
};
