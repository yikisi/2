module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100200-Silence-Suzuka/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/rec-2.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/daily-2.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/edu-2.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/love-2.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/100200-Silence-Suzuka/ero-2.kojo');

  debuff1 = '괴로움';
  debuff1_desc = '의욕 상한이 1단계 낮아진다.';

  debuff2 = '실의';
  debuff2_desc = '의욕 상한이 2단계 낮아진다.';

  debuff3 = '다리의 오래된 상처';
  debuff3_desc = '정해진 종착점.';

  report_begin_race = (suzuka) => [
    suzuka,
    { color: suzuka.color, content: '의 멋진 첫 승리!' },
  ];
};
