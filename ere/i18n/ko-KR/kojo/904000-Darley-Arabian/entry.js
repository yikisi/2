module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904000-Darley-Arabian/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/904000-Darley-Arabian/rec-340.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/904000-Darley-Arabian/love-340.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/904000-Darley-Arabian/ero-340.kojo');

  buff = '희망';
  buff_desc = (buff) => `팀원의 스피드·파워 트레이닝 효과+${buff}%。`;

  bt_pray = '「아아, 여신님, 도와주세요——」';
};
