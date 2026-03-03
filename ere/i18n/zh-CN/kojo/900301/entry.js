class I18nKojo900301 {
  /** @type {KojoFile} */
  recruit = require('#/i18n/zh-CN/kojo/900301/rec-303.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/zh-CN/kojo/900301/love-303.kojo');

  reporter = '专访记者';
  reporter_desc = (buff) => `声望获取+${buff}%，声望下降-${buff}%。`;

  npc_func = '给予更多许可（招募）';
}

module.exports = I18nKojo900301;
