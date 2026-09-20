module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904000-Darley-Arabian/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/904000-Darley-Arabian/rec-340.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/904000-Darley-Arabian/love-340.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/904000-Darley-Arabian/ero-340.kojo');

  buff = '望';
  buff_desc = (buff) =>
    `チームメンバーのスピードとパワーのトレーニング効果+${buff}%。`;

  bt_pray = '「ああ、女神さま、お助けください——」';
};
