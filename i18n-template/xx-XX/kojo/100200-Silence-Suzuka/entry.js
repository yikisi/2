module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100200-Silence-Suzuka/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/100200-Silence-Suzuka/rec-2.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/100200-Silence-Suzuka/daily-2.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/100200-Silence-Suzuka/edu-2.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/100200-Silence-Suzuka/love-2.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/xx-XX/kojo/100200-Silence-Suzuka/ero-2.kojo');

  debuff1 = '难过';
  debuff1_desc = '干劲上限下降一阶段。';

  debuff2 = '失意';
  debuff2_desc = '干劲上限下降两阶段。';

  debuff3 = '陈旧腿伤';
  debuff3_desc = '命定的终点。';

  report_begin_race = (suzuka) => [
    suzuka,
    { color: suzuka.color, content: ' 强势夺下首胜！' },
  ];
};
