module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904300-Satake-Mei/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/904300-Satake-Mei/rec-343.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/904300-Satake-Mei/love-343.kojo');

  dream_chaser = '夢を追う者';
  dream_chaser_desc = (buff) =>
    buff
      ? 'チームメンバーの海外遠征の悪影響が半減する。'
      : 'チームメンバーの海外遠征の悪影響が軽くなる。';
};
