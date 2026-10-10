module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900300-Otonashi-Etsuko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/900300-Otonashi-Etsuko/rec-303.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/900300-Otonashi-Etsuko/love-303.kojo');

  reporter = '전속 기자';
  reporter_desc = (buff) => `명성 획득+${buff}%, 명성 하락-${buff}%.`;

  npc_func = '더 많은 권한 부여(영입)';
};
