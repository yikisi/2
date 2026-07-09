// GENERATED START
class I18nKojo200400 {
  static _ = new I18nKojo200400();

  // GENERATED END
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
}

module.exports = I18nKojo200400;
