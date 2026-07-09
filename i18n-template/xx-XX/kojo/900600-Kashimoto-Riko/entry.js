module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/900600-Kashimoto-Riko/rec-306.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/900600-Kashimoto-Riko/daily-306.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/900600-Kashimoto-Riko/edu-306.kojo');

  buff = '铁面代理';
  buff_desc = (buff) =>
    `训练员头衔对训练成功率与效果加成上升一级，照看时训练效果+${buff}%。`;

  select_talk_about = '要谈论谁的话题？';

  npc_talk_about_trainer = '请教训练员的工作';
  npc_talk_about_uma = '谈起担当们';
};
