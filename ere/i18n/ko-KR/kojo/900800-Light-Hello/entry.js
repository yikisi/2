module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/900800-Light-Hello/rec-308.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/900800-Light-Hello/edu-308.kojo');

  dreamer = '꿈의 개척자';
  dreamer_desc = (buff) =>
    buff
      ? '팀원이 그랜드 라이브에 출전할 때 명성 보상+100%. 자신과 후손은 +200%.'
      : '자신과 후손이 그랜드 라이브에 출전할 때 명성 보상+100%.';

  dreamer_junior = '꿈의 계승자';
  dreamer_junior_desc = (buff) => `그랜드 라이브 출전 시 명성 보상+${buff}%.`;
};
