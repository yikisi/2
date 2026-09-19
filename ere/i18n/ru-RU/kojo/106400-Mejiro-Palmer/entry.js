module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ru-RU/kojo/106400-Mejiro-Palmer/rec-64.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ru-RU/kojo/106400-Mejiro-Palmer/daily-64.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ru-RU/kojo/106400-Mejiro-Palmer/edu-64.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ru-RU/kojo/106400-Mejiro-Palmer/love-64.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ru-RU/kojo/106400-Mejiro-Palmer/ero-64.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/ru-RU/kojo/106400-Mejiro-Palmer/base-64.kojo');

  aim_desc = 'Классический год, до 2-й недели июня, 1-е место в G3+';

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} you
   * @param {number} security_level
   */
  get_basement_info(pama, you, security_level) {
    switch (security_level) {
      case 1:
        return [
          pama.get_colored_name(),
          ' тихо сидит рядом с ',
          you.get_colored_name(),
          ', но беспокойно уходит от взгляда ',
          you.get_colored_name(),
          '; цель — ',
          pama.sex,
          '…',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          ' смотрит на ',
          you.get_colored_name(),
          ': лицо неспокойно, а руку всё равно не отпускает…',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          ' всё смотрит на ',
          you.get_colored_name(),
          ' и улыбается двусмысленно…',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          ': на лице лёгкая, плывущая улыбка, и взгляд отводить не собирается…',
        ];
      case 5:
        return [
          'Тихое ожидание, взгляд без пауз и… ',
          pama.get_colored_name(),
          ': улыбка без злости…',
        ];
    }
    return [];
  }
};
