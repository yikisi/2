module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/900600-Kashimoto-Riko/rec-306.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/en-US/kojo/900600-Kashimoto-Riko/daily-306.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/en-US/kojo/900600-Kashimoto-Riko/edu-306.kojo');

  buff = 'Iron-Faced Director';
  buff_desc = (buff) =>
    `Trainer titles grant one additional tier of training success and effectiveness bonuses; training effectiveness while supervising +${buff}%.`;

  select_talk_about = 'Who would you like to discuss?';

  npc_talk_about_trainer = 'Ask About Trainer Duties';
  npc_talk_about_uma = 'Discuss the Trainees';
};
