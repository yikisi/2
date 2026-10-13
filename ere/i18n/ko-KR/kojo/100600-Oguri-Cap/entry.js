module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100600-Oguri-Cap/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/rec-6.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/daily-6.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/edu-6.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/100600-Oguri-Cap/love-6.kojo');

  aim_desc = '1~6월 G1 레이스에서 3착 이내';

  cinderella = '신데렐라';
  cinderella_desc =
    '턴 시작 시 스트레스가 우울 이하로 자동 감소하고, 의욕이 저조 이상으로 자동 상승한다.';
  latecomer = '늦게 온 자';
  latecomer_desc =
    '클래식급부터 육성을 시작하며, 클래식 3관(사츠키상, 일본 더비, 국화상)에는 출전할 수 없다.';
  transfer = (timer) => `전학생 (${timer})`;
  transfer_desc = (timer) => `${timer}턴 동안 트레이닝 효과+100%.`;

  report_arim_kin(oguri) {
    return [
      oguri,
      { color: oguri.color, content: ' 1착!' },
      oguri,
      { color: oguri.color, content: ' 1착!' },
      oguri,
      { color: oguri.color, content: ' 1착!' },
      oguri,
      {
        color: oguri.color,
        content: ' 1착! 오른손을 높이 치켜든 승자, 슈퍼 우마무스메 ',
      },
      oguri,
      { color: oguri.color, content: '！' },
    ];
  }

  palace_race = '모의·일본 더비';
};
