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
      ' один(а) готовит в комнате тренера — изредка можно наградить себя чем-нибудь жареным.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async office_rest(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) отдыхает в комнате тренера и какое-то время просто сидит с пустой головой.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async office_game(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) сидит за играми в комнате тренера и надеется, что начальство этого не заметит.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async school_atrium(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит во внутренний двор и какое-то время слоняется без дела.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async school_rooftop(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит на крышу и думает, не закурить ли, наплевав на предупреждающую табличку 「кампус без курения」.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_r_fishing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит к реке рыбачить и надеется не остаться без улова.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_r_walking(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит к реке прогуляться и какое-то время слоняется без дела.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_arcade(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит в игровой зал на торговой улице — во что бы сыграть, чтобы убить время?',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_drawing(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит на лотерею на торговой улице — вытянуть бы что-нибудь стоящее!',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_ktv(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит в караоке на торговой улице — зачем вообще заниматься такой скукой…',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_movie(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит в кино на торговой улице — ощущение, что среди толпы не на месте, никак не отпускает.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_ero_item(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит на торговую улицу и прямиком идёт в ту неприметную розовую лавку…',
    ]);
  },
  /**
   * @param {CharaTalk} you 玩家
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(you, dice) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит помолиться в святилище.',
    ]);
    if (dice < 0.5) {
      await printAndWait('Вытянул(а) счастливый жребий! Не зря ходил(а).');
    } else {
      await printAndWait(
        'Вытянул(а) несчастливый жребий! На ближайшие дни лучше поджать хвост и не высовываться…',
      );
    }
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_restaurant(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит поесть у вокзала — в любимом заведении всё тот же знакомый вкус.',
    ]);
  },
  /** @param {CharaTalk} you 玩家 */
  async o_s_shopping(you) {
    await printAndWait([
      you.get_colored_name(),
      ' один(а) приходит побродить по торговому центру у вокзала — свериться бы со списком покупок.',
    ]);
  },
};
