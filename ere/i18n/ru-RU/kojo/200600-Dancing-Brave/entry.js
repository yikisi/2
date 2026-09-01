module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200600-Dancing-Brave/entry')
) {
  /**
   * @param {CharaTalk} brave
   * @returns {TextContent}
   */
  get_rec_enable_notification(brave) {
    return [
      '【据说有 ',
      { color: brave.color, content: '一名优秀的法国幼驹' },
      ' 已经来到中央交流，也许可以在训练场遇到】',
    ];
  }
};
