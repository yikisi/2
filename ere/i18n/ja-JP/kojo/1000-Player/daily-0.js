/**
 * @file プレイヤー - 日常
 * @author 雞雞
 * @author 黑奴队长（改编）
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} you プレイヤー */
  async office_cook(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりでトレーナー室で料理をする。たまには自分へのご褒美に、揚げ物でも作ろう。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async office_rest(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりでトレーナー室で休み、頭を空っぽにしてしばらく時を過ごした。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async office_game(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりでトレーナー室でゲームをする。上司に見つからないといいが。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async school_atrium(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで中庭へ行き、特にすることもなくしばらく時を過ごした。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async school_rooftop(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで屋上へ上がり、「禁煙学園」の看板を無視して一服するか考える。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_r_fishing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで川辺へ釣りに行く。ボウズだけは避けたいところだ。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_r_walking(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで川辺を散歩し、特にすることもなくしばらく時を過ごした。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_arcade(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街のゲームセンターへ行く。何をやって暇をつぶそうか。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_drawing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街のくじ引きへ行く。いいものが当たれ！',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_ktv(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街のカラオケへ行く。こんな退屈なことを、なぜしているのだろう……',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_movie(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街の映画館へ行く。人混みの中で浮いている感じが、どうしても拭えない。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_ero_item(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで商店街へ行き、目立たないピンクの小さな店へ真っ直ぐ向かった……',
    ]);
  },
  /**
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈願の出目。0〜1 の小数で、小さいほど良い
   */
  async o_c_pray(you, dice) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで神社へ祈願に行く。',
    ]);
    if (dice < 0.5) {
      await printAndWait('吉のおみくじが出た！ 来た甲斐はあった。');
    } else {
      await printAndWait(
        '凶のおみくじが出た！ この数日は尻尾を巻いておとなしくしていよう……',
      );
    }
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_restaurant(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで駅前で食事をする。お気に入りの店は、いつもの味のままだった。',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_shopping(you) {
    await printAndWait([
      you.get_colored_name(),
      ' はひとりで駅前のデパートを歩き、買い物リストを確認する。',
    ]);
  },
};
