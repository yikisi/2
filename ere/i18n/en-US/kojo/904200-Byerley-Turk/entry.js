module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904200-Byerley-Turk/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/904200-Byerley-Turk/rec-342.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/904200-Byerley-Turk/love-342.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/en-US/kojo/904200-Byerley-Turk/ero-342.kojo');

  buff = 'Faith';
  buff_desc = (buff) =>
    `Team members' Stamina and Guts training effectiveness +${buff}%.`;

  bt_pray = '「Please help me, Goddess.」';
};
