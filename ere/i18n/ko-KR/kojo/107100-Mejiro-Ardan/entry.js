module.exports = class extends (
  require('#/i18n/zh-CN/kojo/107100-Mejiro-Ardan/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/rec-71.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/daily-71.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/edu-71.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/107100-Mejiro-Ardan/love-71.kojo');

  achieve_track_aim_template_1 = '트레이닝 실패 횟수：%COUNT%';
  achieve_track_aim_template_2 = '최상 이외의 컨디션으로 완주한 횟수：%COUNT%';

  sick = '병환';
  sick_desc = '트레이닝과 경기에 참여할 수 없다.';
};
