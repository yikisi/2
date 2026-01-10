class I18nKojo1006 {
  /** @type {KojoFile} */
  recruit = require('#/i18n/zh-CN/kojo/1006/rec-6.kojo');

  cinderella = '灰姑娘';
  cinderella_desc = '回合开始时压力自动下降到抑郁以下，干劲自动上升到较差以上';
  latecomer = '迟到者';
  latecomer_desc =
    '育成从经典年开始，无法出赛经典三冠（皋月赏、日本德比、菊花赏）';
  transfer(timer) {
    return `转学生 (${timer})`;
  }
  transfer_desc(timer) {
    return `${timer}回合内训练效果+100%`;
  }

  report_arim_kin(oguri) {
    return [
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！高举右手的胜者，正是超级赛马娘 ' },
      oguri,
      { color: oguri.color, content: '！' },
    ];
  }
}

module.exports = I18nKojo1006;
