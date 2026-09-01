module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106100-King-Halo/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/106100-King-Halo/rec-61.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ru-RU/kojo/106100-King-Halo/daily-61.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ru-RU/kojo/106100-King-Halo/edu-61.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ru-RU/kojo/106100-King-Halo/love-61.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ru-RU/kojo/106100-King-Halo/ero-61.kojo');

  gu_mild = 'Отчаяние · лёгкое';
  gu_mild_desc =
    'Какая из меня первоклассная… потолок боевого духа падает на две ступени.\nПосле победы в спринте или mile — сходит, после поражения — тяжелеет. Если к концу третьего года всё ещё это…';

  gu_moderate = 'Отчаяние · среднее';
  gu_moderate_desc =
    'У меня ничего не осталось… потолок боевого духа падает на три ступени.\nПосле победы в спринте или mile — слабеет, после поражения — тяжелеет. Если к концу третьего года всё ещё это…';

  gu_serve = 'Отчаяние · тяжёлое';
  gu_serve_desc =
    'Прошу, пусть это закончится! Потолок боевого духа падает на четыре ступени.\nПосле победы в спринте или mile — слабеет, после поражения… Если к концу третьего года всё ещё это…';
};
