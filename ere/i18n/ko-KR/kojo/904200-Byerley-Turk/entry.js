module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904200-Byerley-Turk/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/904200-Byerley-Turk/rec-342.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/904200-Byerley-Turk/love-342.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/904200-Byerley-Turk/ero-342.kojo');

  buff = '믿음';
  buff_desc = (buff) => `팀원의 스태미나·근성 트레이닝 효과+${buff}%。`;

  bt_pray = '「여신님, 도와주세요.」';
};
