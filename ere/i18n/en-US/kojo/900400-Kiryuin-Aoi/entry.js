module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900400-Kiryuin-Aoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/900400-Kiryuin-Aoi/rec-304.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/en-US/kojo/900400-Kiryuin-Aoi/daily-304.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/en-US/kojo/900400-Kiryuin-Aoi/edu-304.kojo');

  buff = 'Trainer Dynasty';
  buff_desc = (buff) =>
    `Trainer titles grant one additional tier of training success and effectiveness bonuses; training effectiveness while supervising +${buff}%.`;

  npc_talk_about_trainer = 'Discuss Trainer Duties';
  npc_talk_about_meek = 'Discuss Happy Meek';
};
