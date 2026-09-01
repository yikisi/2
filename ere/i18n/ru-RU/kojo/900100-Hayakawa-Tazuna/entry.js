module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/ru-RU/kojo/900100-Hayakawa-Tazuna/daily-301.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ru-RU/kojo/900100-Hayakawa-Tazuna/love-301.kojo');

  assist = 'Личный секретарь';
  assist_desc = (buff, you) =>
    `Сама тратит на ${buff}% больше сил и энергии, а ${you} — на ${buff}% меньше.`;
};
