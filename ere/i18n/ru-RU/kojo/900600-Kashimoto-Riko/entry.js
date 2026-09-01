module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/900600-Kashimoto-Riko/rec-306.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ru-RU/kojo/900600-Kashimoto-Riko/daily-306.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ru-RU/kojo/900600-Kashimoto-Riko/edu-306.kojo');

  buff = 'Железный зам';
  buff_desc = (buff) =>
    `Бонус титула тренера к шансу и эффекту тренировки на ступень выше; при присмотре эффект тренировки +${buff}%.`;

  select_talk_about = 'О ком поговорим?';

  npc_talk_about_trainer = 'Расспросить о работе тренера';
  npc_talk_about_uma = 'Поговорить о подопечных';
};
