module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100200-Silence-Suzuka/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/rec-2.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/daily-2.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/edu-2.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/love-2.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/100200-Silence-Suzuka/ero-2.kojo');

  debuff1 = 'つらい';
  debuff1_desc = 'やる気上限が1段階下がる。';

  debuff2 = '失意';
  debuff2_desc = 'やる気上限が2段階下がる。';

  debuff3 = '古傷の脚';
  debuff3_desc = '定められた終点。';

  report_begin_race = (suzuka) => [
    suzuka,
    { color: suzuka.color, content: ' が鮮やかに初勝利！' },
  ];
};
