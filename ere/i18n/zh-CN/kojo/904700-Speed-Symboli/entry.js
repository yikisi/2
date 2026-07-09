// GENERATED START
class I18nKojo904700 {
  static _ = new I18nKojo904700();

  // GENERATED END
  buff = '远征先驱';
  buff_desc = (buff) =>
    buff
      ? '干劲极佳的队伍成员训练成功率和效果上升。'
      : '干劲极佳的队伍成员训练成功率和效果稍微上升。';

  /**
   * @param {CharaTalk} speed
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(speed, you) {
    return [
      '【据说 ',
      { color: speed.color, content: `一名传奇${speed.uma_sex_title}` },
      ' 对 ',
      you.get_colored_name(),
      ' 的事迹很感兴趣，也许可以在招待室遇到】',
    ];
  }
}

module.exports = I18nKojo904700;
