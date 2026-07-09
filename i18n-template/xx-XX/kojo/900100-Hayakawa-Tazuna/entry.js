module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/900100-Hayakawa-Tazuna/daily-301.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/900100-Hayakawa-Tazuna/love-301.kojo');

  assist = '私人助理';
  assist_desc = (buff, you) =>
    `自身体力与精力消耗+${buff}%，使 ${you}  的体力与精力消耗-${buff}%。`;
};
