module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102100-Tamamo-Cross/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/rec-21.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/daily-21.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/edu-21.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/love-21.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/102100-Tamamo-Cross/ero-21.kojo');

  aim_desc_1 = '클래식급 3월 전까지 OP 이상 경기에서 1착';
  aim_desc_2 = '시니어급 전까지 G3 이상 경기에서 1착';

  flash = '섬광';
  flash_desc = '하얀 번개. 모든 경기에 참가할 수 있다.';

  lightning = '낙뢰';
  lightning_desc =
    '전류 약화. 트레이닝 효과-20%, 체력·기력 상한-200, 소모+10%, 스트레스 획득+10%.';

  thundercloud = '뇌운';
  thundercloud_desc = '폭풍 전야. 현재는 OP 등급 경기에만 참가할 수 있다.';

  pilot = '선도';
  pilot_desc =
    '막 모습을 드러낸 번개. 현재는 OP-G3 등급 경기에만 참가할 수 있다.';

  spartan = '스파르타식';
  spartan_desc = '트레이닝 효과+20%, 체력·기력 소모+5%.';

  uma_first = '우마무스메 우선';
  uma_first_desc = '매 턴 컨디션이 자동으로 상승하고 체력·기력 소모-10%.';

  report_tenn_spr = (tama) => [
    {
      color: tama.color,
      content:
        '이름 그대로 하얀 번개가 경기장을 밝힌다! 누가 감히 날 얕보겠어!',
    },
    tama,
    {
      color: tama.color,
      content: '！',
    },
  ];
};
