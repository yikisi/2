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
      '은(는) 트레이닝실에서 혼자 요리를 하며, 스스로에게 주는 작은 보상으로 튀김을 먹었다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async office_rest(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 트레이닝실에서 혼자 쉬며, 머릿속을 비우고 시간을 보냈다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async office_game(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 트레이닝실에서 혼자 게임을 하며, 상사에게 들키지 않기를 바랐다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async school_atrium(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 안뜰에 와 할 일 없이 시간을 죽였다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async school_rooftop(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 옥상에 올라와, 금연 경고판을 무시하고 담배 한 대 피울까 고민했다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_r_fishing(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 강가에 낚시하러 간다. 한 마리도 못 낚는 일만은 피하고 싶다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_r_walking(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 강가를 산책하며 별달리 할 일 없이 한동안 시간을 보냈다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_arcade(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가의 게임 센터로 간다. 뭘 하며 시간을 보낼까.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_drawing(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가에서 경품 추첨을 한다. 좋은 게 나와라!',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_ktv(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가의 노래방으로 간다. 이런 따분한 일을 왜 하고 있는 걸까……',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_movie(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가의 영화관으로 간다. 사람들 사이에서 겉도는 기분을 도무지 떨칠 수 없다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_ero_item(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 상점가로 가서 눈에 띄지 않는 작은 분홍색 가게로 곧장 향했다……',
    ]);
  },
  /**
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈願の出目。0〜1 の小数で、小さいほど良い
   */
  async o_c_pray(you, dice) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 신사에 기도하러 간다.',
    ]);
    if (dice < 0.5) {
      await printAndWait('길한 운세가 나왔다! 온 보람이 있었다.');
    } else {
      await printAndWait(
        '흉한 운세가 나왔다! 며칠 동안은 몸을 사리며 조용히 지내자……',
      );
    }
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_restaurant(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 역 앞에서 식사한다. 좋아하는 가게는 언제나 같은 맛이었다.',
    ]);
  },
  /** @param {CharaTalk} you プレイヤー */
  async o_s_shopping(you) {
    await printAndWait([
      you.get_colored_name(),
      '은(는) 혼자 역 앞 백화점을 둘러보며 살 물건 목록을 확인한다.',
    ]);
  },
};
