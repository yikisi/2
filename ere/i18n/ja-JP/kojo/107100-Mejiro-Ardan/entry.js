module.exports = class extends (
  require('#/i18n/zh-CN/kojo/107100-Mejiro-Ardan/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/rec-71.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/daily-71.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/edu-71.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/107100-Mejiro-Ardan/love-71.kojo');

  achieve_track_aim_template_1 = 'トレーニング失敗回数：%COUNT%';
  achieve_track_aim_template_2 = '絶好調以外で完走した回数：%COUNT%';

  sick = '病気';
  sick_desc = 'トレーニングと出走ができない';
};
