module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904100-Godolphin-Barb/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/904100-Godolphin-Barb/rec-341.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/904100-Godolphin-Barb/love-341.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/xx-XX/kojo/904100-Godolphin-Barb/ero-341.kojo');

  buff = '爱';
  buff_desc = (buff, buff2) =>
    `队伍成员智力训练效果+${buff}%，从训练中获得的技能点数+${buff2}%。`;

  bt_pray = '「神啊，请您垂怜……」';
};
