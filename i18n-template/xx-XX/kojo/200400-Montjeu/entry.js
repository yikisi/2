module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200400-Montjeu/entry')
) {
  /**
   * @param {CharaTalk} montjeu
   * @returns {TextContent}
   */
  get_visit_notification(montjeu) {
    return [
      '【据说 ',
      {
        color: montjeu.color,
        content: `一名法国的传奇${montjeu.uma_sex_title}`,
      },
      ' 已经准备来到中央交流，也许可以在招待室遇到】',
    ];
  }
};
