module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904600-Saint-Lite/entry')
) {
  buff = 'Triple Crown Legend';
  buff_desc = (buff) =>
    buff
      ? 'Increases training success rate and effectiveness for team members in top form.'
      : 'Slightly increases training success rate and effectiveness for team members in top form.';

  /**
   * @param {CharaTalk} lite
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(lite, you) {
    return [
      '【Word is that ',
      { color: lite.color, content: `a legendary ${lite.uma_sex_title}` },
      ' has taken an interest in ',
      you.get_colored_name(),
      "'s achievements. Perhaps you can meet in the reception room.】",
    ];
  }
};
