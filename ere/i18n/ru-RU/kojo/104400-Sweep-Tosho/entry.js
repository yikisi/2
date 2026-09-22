module.exports = class extends (
  require('#/i18n/zh-CN/kojo/104400-Sweep-Tosho/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/104400-Sweep-Tosho/rec-44.kojo');

  agreement = 'Обещание великой волшебницы';
  agreement_desc =
    'Похоже, это важное обещание. Она полна решимости сдержать его.';

  cuckold = '«Фетиш на магию»';
  cuckold_desc = '«Почему, ну почему это нельзя назвать фетишем на магию?!»';

  report_takz_kin_s = (sweep) => [
    sweep,
    ', это ',
    sweep,
    '?!',
    'Обойдя всех фаворитов, ',
    sweep,
    ' выигрывает Такарадзука Кинэн!',
    'Такую ошеломляющую победу иначе как «чудом» не назовёшь!',
  ];
  report_eliz_cup_s = (sweep) => [
    sweep,
    '! Это ',
    sweep,
    '!',
    'Она обошла всех фаворитов и стала чемпионкой! Невероятная мощь!',
    'Какое потрясение! Неужели это и впрямь «магия»?!',
  ];
};
