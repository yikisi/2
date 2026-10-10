module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106100-King-Halo/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/106100-King-Halo/rec-61.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/106100-King-Halo/daily-61.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/106100-King-Halo/edu-61.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/106100-King-Halo/love-61.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/106100-King-Halo/ero-61.kojo');

  gu_mild = '자포자기・경증';
  gu_mild_desc =
    '내가 무슨 일류야… 컨디션 상한이 두 단계 내려간다.\n단거리·마일 경기에서 우승하면 사라지고, 패배하면 악화된다. 삼년이 끝날 때까지 이 상태라면…';

  gu_moderate = '자포자기・중등도';
  gu_moderate_desc =
    '난 아무것도 남지 않았어… 컨디션 상한이 세 단계 내려간다.\n단거리·마일 경기에서 우승하면 완화되고, 패배하면 악화된다. 삼년이 끝날 때까지 이 상태라면…';

  gu_serve = '자포자기・중증';
  gu_serve_desc =
    '제발, 이 모든 걸 끝내 줘! 컨디션 상한이 네 단계 내려간다.\n단거리·마일 경기에서 우승하면 완화되고, 패배하면… 삼년이 끝날 때까지 이 상태라면…';
};
