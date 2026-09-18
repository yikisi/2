module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/900800-Light-Hello/rec-308.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ru-RU/kojo/900800-Light-Hello/edu-308.kojo');

  dreamer = 'Первопроходец мечты';
  dreamer_desc = (buff) =>
    buff
      ? 'Когда член команды выходит на скачку Большой сцены, награда славой +100%; когда выходит она сама или потомки — +200%.'
      : 'Когда она сама или потомки выходят на скачку Большой сцены, награда славой +100%.';

  dreamer_junior = 'Наследник мечты';
  dreamer_junior_desc = (buff) =>
    `На скачке Большой сцены награда славой +${buff}%.`;
};
