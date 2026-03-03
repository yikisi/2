class I18nKojo200501 {
  aim_desc = '5 场其他 G1 比赛 1着';

  /**
   * @param {CharaTalk} treve
   * @returns {TextContent}
   */
  get_rec_enable_notification(treve) {
    return [
      '【据说有 ',
      { color: treve.color, content: '一名优秀的法国幼驹' },
      ' 已经来到中央交流，也许可以在训练场遇到】',
    ];
  }
}

module.exports = I18nKojo200501;
