/**
 * @file 玩家 - 日常
 * @author 雞雞
 * @author 黑奴队长（改编）
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} you 玩家 */
  async office_cook(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自在训练员室里做饭，偶尔奖励自己一些油炸食品吧。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async office_rest(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自在训练员室里休息，脑子放空着度过了一段时间。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async office_game(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自在训练员室里打游戏，希望不会被领导发现。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async school_atrium(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到中庭，无所事事地度过了一段时间。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async school_rooftop(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到天台，想着要不要无视「无烟校园」的警示牌来根烟。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_r_fishing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到河边钓鱼，希望不要空军。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_r_walking(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到河边散步，无所事事地度过了一段时间。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_arcade(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到商店街街机厅，玩些什么打发时间呢？',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_drawing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到商店街抽奖，来抽点好东西吧！',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_ktv(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到商店街卡拉OK，为什么要做这么无聊的事呢……',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_movie(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到商店街看电影，在人群中格格不入的感觉挥之不去。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_ero_item(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到商店街，径直走向了那家不起眼的粉红的小店……',
    ]);
  },
  /**
   * @param {CharaTalk} you 玩家
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(you, dice) {
    await printAndWait([you.get_colored_name(), ' 独自来到神社祈福。']);
    if (dice < 0.5) {
      await printAndWait('抽到了吉利的签文！此行不虚。');
    } else {
      await printAndWait('抽到了不吉的签文！这几天夹起尾巴做人吧……');
    }
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_restaurant(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到车站附近吃饭，最喜欢的那家店还是熟悉的味道。',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_shopping(you) {
    await printAndWait([
      you.get_colored_name(),
      ' 独自来到车站附近逛商场，检查一下购物清单吧。',
    ]);
  },
};
