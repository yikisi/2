module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904800-Haiseiko/entry')
) {
  get_achieve_track_aim = (honour) => [
    'Reputation earned from G1 victories: ',
    honour,
  ];

  buff = 'Racing Idol';
  buff_desc = (buff) =>
    buff
      ? 'Increases training success rate and effectiveness for team members in top form.'
      : 'Slightly increases training success rate and effectiveness for team members in top form.';

  /**
   * @param {CharaTalk} haiseiko
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_visit_notification(haiseiko, you) {
    return [
      '【Word is that ',
      {
        color: haiseiko.color,
        content: `a legendary ${haiseiko.uma_sex_title}`,
      },
      ' has taken an interest in ',
      you.get_colored_name(),
      "'s achievements. Perhaps you can meet in the reception room.】",
    ];
  }
};
