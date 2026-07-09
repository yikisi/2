module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900400-Kiryuin-Aoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/900400-Kiryuin-Aoi/rec-304.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/900400-Kiryuin-Aoi/daily-304.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/900400-Kiryuin-Aoi/edu-304.kojo');

  buff = '训练员世家';
  buff_desc = (buff) =>
    `训练员头衔对训练成功率与效果加成上升一级，照看时训练效果+${buff}%。`;

  npc_talk_about_trainer = '谈起训练员的工作';
  npc_talk_about_meek = '谈起 快乐米可';
};
