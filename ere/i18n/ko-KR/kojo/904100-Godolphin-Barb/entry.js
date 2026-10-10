module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904100-Godolphin-Barb/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/904100-Godolphin-Barb/rec-341.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/904100-Godolphin-Barb/love-341.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/904100-Godolphin-Barb/ero-341.kojo');

  buff = '사랑';
  buff_desc = (buff, buff2) =>
    `팀원의 지능 트레이닝 효과+${buff}%. 트레이닝으로 얻는 스킬 Pt+${buff2}%。`;

  bt_pray = '「신이시여, 부디 자비를……」';
};
