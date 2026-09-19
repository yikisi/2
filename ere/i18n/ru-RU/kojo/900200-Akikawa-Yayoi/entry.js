module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900200-Akikawa-Yayoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/900200-Akikawa-Yayoi/rec-302.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ru-RU/kojo/900200-Akikawa-Yayoi/daily-302.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ru-RU/kojo/900200-Akikawa-Yayoi/love-302.kojo');

  chairman = 'Я твой босс';
  chairman_desc =
    'Права директора безграничны; именной набор умамусумэ через академию дешевле на 25% славы.';

  npc_talk = '「Болтовня! Скучно — пришла к тебе поиграть!」';
  npc_sex = '「Секс! Хочу тебя трахнуть!」';
  npc_out = '「Свидание! Пойдём прогуляемся!」';
  get_npc_celebration = (celebration) =>
    `「Праздник! ${celebration} с праздником!」`;
  npc_func =
    '「Протест! На Тренировочном поле нет любимой, которую хочется тренировать!」';
  npc_bye = '「Пока! Пошла-пошла!」';
};
