module.exports = class extends (
  require('#/i18n/zh-CN/kojo/104400-Sweep-Tosho/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/104400-Sweep-Tosho/rec-44.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/104400-Sweep-Tosho/daily-44.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/104400-Sweep-Tosho/edu-44.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/104400-Sweep-Tosho/love-44.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/104400-Sweep-Tosho/ero-44.kojo');

  agreement = "대마법사의 약속";
  agreement_desc =
    "무언가 중요한 약속인 듯하다. 약속을 지키기 위해 컨디션이 상승했다.";

  cuckold = "「마법광」";
  cuckold_desc = "「왜, 왜 마법광이라고 부르면 안 되는 건데!」";

  report_takz_kin_s = (sweep) => [
    sweep,
    ", 정말 ",
    sweep,
    "인가요?!!!",
    "수많은 강자들의 벽을 넘어, ",
    sweep,
    "가 타카라즈카 기념을 거머쥐었습니다!",
    "이 놀라운 승리는 분명 『기적』의 증명입니다!!",
  ];
  report_eliz_cup_s = (sweep) => [
    sweep,
    "! 바로 ",
    sweep,
    "입니다!",
    "수많은 실력자를 꺾고 우승을 차지했습니다! 정말 강합니다!",
    "이 엄청난 충격, 설마 정말로 『마법』인가요!?",
  ];
};
