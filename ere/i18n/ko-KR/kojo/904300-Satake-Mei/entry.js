module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904300-Satake-Mei/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/904300-Satake-Mei/rec-343.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/904300-Satake-Mei/love-343.kojo');

  dream_chaser = '꿈을 쫓는 자';
  dream_chaser_desc = (buff) =>
    buff
      ? '팀원이 해외 원정에서 받는 악영향이 절반으로 줄어든다.'
      : '팀원이 해외 원정에서 받는 악영향이 줄어든다.';
};
