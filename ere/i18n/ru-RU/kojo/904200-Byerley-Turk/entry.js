module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904200-Byerley-Turk/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/904200-Byerley-Turk/rec-342.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ru-RU/kojo/904200-Byerley-Turk/love-342.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ru-RU/kojo/904200-Byerley-Turk/ero-342.kojo');

  buff = '信';
  buff_desc = (buff) => `队伍成员耐力与根性训练效果+${buff}%。`;

  bt_pray = '「请帮帮我吧，女神大人。」';
};
