module.exports = class extends (
  require('#/i18n/zh-CN/kojo/107100-Mejiro-Ardan/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/107100-Mejiro-Ardan/rec-71.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/107100-Mejiro-Ardan/daily-71.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/107100-Mejiro-Ardan/edu-71.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/107100-Mejiro-Ardan/love-71.kojo');

  sick = '生病';
  sick_desc = '不能训练与参赛';

  achieve_track_aim_template_1 = '训练失败次数：%COUNT%';
  achieve_track_aim_template_2 = '以非极佳干劲完赛次数：%COUNT%';
};
