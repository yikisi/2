module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/en-US/kojo/900100-Hayakawa-Tazuna/daily-301.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/900100-Hayakawa-Tazuna/love-301.kojo');

  assist = 'Personal Assistant';
  assist_desc = (buff, you) =>
    `Own stamina and energy costs +${buff}%; ${you}  stamina and energy costs -${buff}%.`;
};
