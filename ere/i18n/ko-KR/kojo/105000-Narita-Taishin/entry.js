module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105000-Narita-Taishin/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/105000-Narita-Taishin/rec-50.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/105000-Narita-Taishin/daily-50.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/105000-Narita-Taishin/edu-50.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/105000-Narita-Taishin/love-50.kojo');

  notify_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    '에게 ',
    s_debuff,
    ' 발생!】',
  ];

  notify_remove_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    '의 ',
    s_debuff,
    ' 증상이 완치되었습니다】',
  ];

  notify_love_event_50 =
    '(아직은 이르다. 선을 넘는 행동은 하지 않는 게 좋겠어……)';

  swim_up = '역류를 거슬러';
  swim_up_desc =
    '완전히 얕보였네! 경기 중 지지 않으려는 의지로 모든 기본 능력의 발휘가 향상된다.';

  debuff = '폐출혈';
  debuff_desc =
    '체력·기력 상한-300, 컨디션 상한이 두 단계 내려간다. 부상과 질병이 나으면 자연적으로 회복된다.';

  frog = '몽롱함';
  frog_desc = '트레이닝 효과-100%. 경기에 참가할 수 없다.';

  new_goal = '재기';
  new_goal_desc = '트레이닝 효과+10%.';

  together = '너와 함께';
  together_desc = '트레이닝 효과+5%.';

  resist = '냉담한 거절';
  resist_desc =
    '갑작스러운 스킨십은 좋아하지 않는다. 선을 넘지 않는 편이 좋다. 하지만 계기만 생긴다면……';
};
