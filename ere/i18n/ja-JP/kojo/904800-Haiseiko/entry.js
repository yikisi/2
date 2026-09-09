module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904800-Haiseiko/entry')
) {
  get_achieve_track_aim = (honour) => ['G1勝利で名声を得る：', honour];

  buff = 'レース場のアイドル';
  buff_desc = (buff) =>
    buff
      ? '絶好調のチームメンバーのトレーニング成功率と効果が上がる。'
      : '絶好調のチームメンバーのトレーニング成功率と効果が少し上がる。';

  /**
   * @param {CharaTalk} haiseiko
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(haiseiko, you) {
    return [
      '【伝説の',
      { color: haiseiko.color, content: haiseiko.uma_sex_title },
      ' が ',
      you.get_colored_name(),
      ' の事績に興味を持っているらしい。応接室で会えるかもしれない】',
    ];
  }
};
