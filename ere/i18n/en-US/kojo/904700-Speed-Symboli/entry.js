module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904700-Speed-Symboli/entry')
) {
  buff = 'Expedition Pioneer';
  buff_desc = (buff) =>
    buff
      ? 'Increases training success rate and effectiveness for team members in top form.'
      : 'Slightly increases training success rate and effectiveness for team members in top form.';

  /**
   * @param {CharaTalk} speed
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(speed, you) {
    return [
      '【Word is that ',
      { color: speed.color, content: `a legendary ${speed.uma_sex_title}` },
      ' has taken an interest in ',
      you.get_colored_name(),
      "'s achievements. Perhaps you can meet in the reception room.】",
    ];
  }
};
