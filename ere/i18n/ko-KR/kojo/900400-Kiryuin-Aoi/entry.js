module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900400-Kiryuin-Aoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/900400-Kiryuin-Aoi/rec-304.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/900400-Kiryuin-Aoi/daily-304.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/900400-Kiryuin-Aoi/edu-304.kojo');

  buff = '트레이너 명가';
  buff_desc = (buff) =>
    `트레이너 칭호의 트레이닝 성공률·효과 보정이 1단계 상승하며, 지켜볼 때 트레이닝 효과+${buff}%.`;

  npc_talk_about_trainer = '트레이너 업무 이야기';
  npc_talk_about_meek = '해피 미쿠 이야기';
};
