module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904700-Speed-Symboli/entry')
) {
  buff = '遠征の先駆';
  buff_desc = (buff) =>
    buff
      ? '絶好調のチームメンバーのトレーニング成功率と効果が上がる。'
      : '絶好調のチームメンバーのトレーニング成功率と効果が少し上がる。';

  /**
   * @param {CharaTalk} speed
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(speed, you) {
    return [
      '【伝説の',
      { color: speed.color, content: speed.uma_sex_title },
      ' が ',
      you.get_colored_name(),
      ' の事績に興味を持っているらしい。応接室で会えるかもしれない】',
    ];
  }
};
