module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904600-Saint-Lite/entry')
) {
  buff = '三冠の伝説';
  buff_desc = (buff) =>
    buff
      ? '絶好調のチームメンバーのトレーニング成功率と効果が上がる。'
      : '絶好調のチームメンバーのトレーニング成功率と効果が少し上がる。';

  /**
   * @param {CharaTalk} lite
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(lite, you) {
    return [
      '【伝説の',
      { color: lite.color, content: lite.uma_sex_title },
      ' が ',
      you.get_colored_name(),
      ' の事績に興味を持っているらしい。応接室で会えるかもしれない】',
    ];
  }
};
