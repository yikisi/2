module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904600-Saint-Lite/entry')
) {
  buff = '三冠传奇';
  buff_desc = (buff) =>
    buff
      ? '干劲极佳的队伍成员训练成功率和效果上升。'
      : '干劲极佳的队伍成员训练成功率和效果稍微上升。';

  /**
   * @param {CharaTalk} lite
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(lite, you) {
    return [
      '【据说 ',
      { color: lite.color, content: `一名传奇${lite.uma_sex_title}` },
      ' 对 ',
      you.get_colored_name(),
      ' 的事迹很感兴趣，也许可以在招待室遇到】',
    ];
  }
};
