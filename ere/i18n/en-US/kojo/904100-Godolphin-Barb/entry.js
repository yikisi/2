module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904100-Godolphin-Barb/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/904100-Godolphin-Barb/rec-341.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/904100-Godolphin-Barb/love-341.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/en-US/kojo/904100-Godolphin-Barb/ero-341.kojo');

  buff = 'Love';
  buff_desc = (buff, buff2) =>
    `Team members' Wit training effectiveness +${buff}%; skill points earned from training +${buff2}%.`;

  bt_pray = '「Goddess, have mercy on me...」';
};
