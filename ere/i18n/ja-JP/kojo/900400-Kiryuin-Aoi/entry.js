module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900400-Kiryuin-Aoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/rec-304.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/daily-304.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/edu-304.kojo');

  buff = 'トレーナー名門';
  buff_desc = (buff) =>
    `トレーナー称号のトレーニング成功率・効果補正が1段階上がり、見守り時のトレーニング効果+${buff}%。`;

  npc_talk_about_trainer = 'トレーナーの仕事の話';
  npc_talk_about_meek = 'ハッピーミークの話';
};
