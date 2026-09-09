module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904100-Godolphin-Barb/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/904100-Godolphin-Barb/rec-341.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/904100-Godolphin-Barb/love-341.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/904100-Godolphin-Barb/ero-341.kojo');

  buff = '愛';
  buff_desc = (buff, buff2) =>
    `チームメンバーの賢さトレーニング効果+${buff}%。トレーニングで得るスキルPt+${buff2}%。`;

  bt_pray = '「神よ、どうか憐れみを……」';
};
