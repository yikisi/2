module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/rec-306.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/daily-306.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/900600-Kashimoto-Riko/edu-306.kojo');

  buff = '鉄面の代理';
  buff_desc = (buff) =>
    `トレーナー称号のトレーニング成功率・効果補正が1段階上がり、見守り時のトレーニング効果+${buff}%。`;

  select_talk_about = '誰の話をする？';

  npc_talk_about_trainer = 'トレーナーの仕事を聞く';
  npc_talk_about_uma = '担当たちの話';
};
