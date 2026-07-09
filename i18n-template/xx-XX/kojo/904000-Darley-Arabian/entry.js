module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904000-Darley-Arabian/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/904000-Darley-Arabian/rec-340.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/904000-Darley-Arabian/love-340.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/xx-XX/kojo/904000-Darley-Arabian/ero-340.kojo');

  buff = '望';
  buff_desc = (buff) => `队伍成员速度与力量训练效果+${buff}%。`;

  bt_pray = '「啊，请帮帮我吧女神大人——」';
};
