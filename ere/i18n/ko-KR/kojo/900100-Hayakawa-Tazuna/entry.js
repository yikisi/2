module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900100-Hayakawa-Tazuna/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/900100-Hayakawa-Tazuna/daily-301.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/900100-Hayakawa-Tazuna/love-301.kojo');

  assist = '전속 어시스턴트';
  assist_desc = (buff, you) =>
    `자신의 체력·기력 소모+${buff}%. ${you}의 체력·기력 소모-${buff}%.`;
};
