module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900300-Otonashi-Etsuko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/900300-Otonashi-Etsuko/rec-303.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ru-RU/kojo/900300-Otonashi-Etsuko/love-303.kojo');

  reporter = 'Журналистка эксклюзивов';
  reporter_desc = (buff) => `Прирост славы +${buff}%, падение славы −${buff}%.`;

  npc_func = 'Дать больше разрешений (набор)';
};
