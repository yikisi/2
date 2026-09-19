module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900200-Akikawa-Yayoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/900200-Akikawa-Yayoi/rec-302.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/en-US/kojo/900200-Akikawa-Yayoi/daily-302.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/900200-Akikawa-Yayoi/love-302.kojo');

  chairman = "I'm Your Boss";
  chairman_desc =
    'The chair has unlimited authority; academy-designated recruits cost 25% less reputation.';

  npc_talk = '「CHAT! I was bored, so I came to see you!」';
  npc_sex = '「SEX! I want to fuck you!」';
  npc_out = '「DATE! Let us go out together!」';
  get_npc_celebration = (celebration) => `「CELEBRATE! Happy ${celebration}!」`;
  npc_func = '「PROTEST! None of my favorites are at the training grounds!」';
  npc_bye = '「FAREWELL! Time to go!」';
};
