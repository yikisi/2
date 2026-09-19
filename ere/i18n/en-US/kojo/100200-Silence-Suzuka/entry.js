module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100200-Silence-Suzuka/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/100200-Silence-Suzuka/rec-2.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/en-US/kojo/100200-Silence-Suzuka/daily-2.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/en-US/kojo/100200-Silence-Suzuka/edu-2.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/100200-Silence-Suzuka/love-2.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/en-US/kojo/100200-Silence-Suzuka/ero-2.kojo');

  debuff1 = 'Downcast';
  debuff1_desc = 'Maximum motivation capped 1 stage lower.';

  debuff2 = 'Disheartened';
  debuff2_desc = 'Maximum motivation capped 2 stages lower.';

  debuff3 = 'Old Leg Injury';
  debuff3_desc = 'The fated finish line.';

  report_begin_race = (suzuka) => [
    suzuka,
    { color: suzuka.color, content: ' charges to a dominant maiden victory!' },
  ];
};
