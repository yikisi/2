module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900300-Otonashi-Etsuko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900300-Otonashi-Etsuko/rec-303.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/900300-Otonashi-Etsuko/love-303.kojo');

  reporter = '専属記者';
  reporter_desc = (buff) => `名声取得+${buff}%、名声低下-${buff}%。`;

  npc_func = '許可を増やす（募集）';
};
