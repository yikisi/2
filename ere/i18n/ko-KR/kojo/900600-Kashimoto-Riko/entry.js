module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900600-Kashimoto-Riko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/rec-306.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/daily-306.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/900600-Kashimoto-Riko/edu-306.kojo');

  buff = '철면의 대리';
  buff_desc = (buff) =>
    `트레이너 칭호의 트레이닝 성공률·효과 보정이 1단계 상승하며, 지켜볼 때 트레이닝 효과+${buff}%.`;

  select_talk_about = '누구에 대해 이야기할까?';

  npc_talk_about_trainer = '트레이너 업무에 관해 묻기';
  npc_talk_about_uma = '담당들 이야기';
};
