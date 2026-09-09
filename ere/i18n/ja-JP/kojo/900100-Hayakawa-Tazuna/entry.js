module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900100-Hayakawa-Tazuna/daily-301.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/900100-Hayakawa-Tazuna/love-301.kojo');

  assist = '専属アシスタント';
  assist_desc = (buff, you) =>
    `自身の体力・気力消費+${buff}%。${you} の体力・気力消費-${buff}%。`;
};
