module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904800-Haiseiko/entry')
) {
  get_achieve_track_aim = (honour) => ['从 G1 赛事获胜中争得声望：', honour];

  buff = '赛场偶像';
  buff_desc = (buff) =>
    buff
      ? '干劲极佳的队伍成员训练成功率和效果上升。'
      : '干劲极佳的队伍成员训练成功率和效果稍微上升。';

  /**
   * @param {CharaTalk} haiseiko
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(haiseiko, you) {
    return [
      '【据说 ',
      { color: haiseiko.color, content: `一名传奇${haiseiko.uma_sex_title}` },
      ' 对 ',
      you.get_colored_name(),
      ' 的事迹很感兴趣，也许可以在招待室遇到】',
    ];
  }
};
