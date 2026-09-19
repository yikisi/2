module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900400-Kiryuin-Aoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/900400-Kiryuin-Aoi/rec-304.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ru-RU/kojo/900400-Kiryuin-Aoi/daily-304.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ru-RU/kojo/900400-Kiryuin-Aoi/edu-304.kojo');

  buff = 'Династия тренеров';
  buff_desc = (buff) =>
    `Бонус титула тренера к шансу и эффекту тренировки на ступень выше; при присмотре эффект тренировки +${buff}%.`;

  npc_talk_about_trainer = 'Поговорить о работе тренера';
  npc_talk_about_meek = 'Поговорить о Хэппи Мик';
};
