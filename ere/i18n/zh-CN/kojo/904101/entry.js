class I18nKojo904101 {
  /** @type {KojoFile} */
  recruit = require('#/i18n/zh-CN/kojo/904101/rec-341.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/zh-CN/kojo/904101/love-341.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/zh-CN/kojo/904101/ero-341.kojo');

  buff = '爱';
  buff_desc = (buff, buff2) =>
    `队伍成员智力训练效果+${buff}%，从训练中获得的技能点数+${buff2}%。`;

  bt_pray = '「神啊，请您垂怜……」';
}

module.exports = I18nKojo904101;
