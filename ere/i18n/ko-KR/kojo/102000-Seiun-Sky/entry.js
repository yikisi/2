module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102000-Seiun-Sky/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ko-KR/kojo/102000-Seiun-Sky/rec-20.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ko-KR/kojo/102000-Seiun-Sky/daily-20.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ko-KR/kojo/102000-Seiun-Sky/edu-20.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ko-KR/kojo/102000-Seiun-Sky/love-20.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ko-KR/kojo/102000-Seiun-Sky/ero-20.kojo');

  radiant = (c) => `생기 충만${c > 1 ? `(${c})` : ''}`;
  radiant_desc = (c) =>
    `체력·기력 상한+${50 * c}(단계당+50), 트레이닝에서 얻는 스킬 포인트+${c}(단계당+1). 최대 10단계이며 매주 두 단계 감소한다.`;

  easy_go = (c) => `자유분방${c > 1 ? `(${c})` : ''}`;
  easy_go_desc = (c) =>
    `체력·기력 소모-${5 * c}%(단계당-5%), 트레이닝 효과-${5 * c}%(단계당-5%). 최대 10단계이며 트레이닝·학습 이외의 활동 시 한 단계, 낮잠이나 낚시 시 두 단계 감소한다.`;

  jess = '보이지 않는 족쇄';
  jess_desc = '트레이닝 효과+100%, 체력·기력 소모+100%. 빈둥거리지 않는다.';

  soft_be = '영원한 자유';
  soft_be_desc =
    '이제 더는 노력하지 않아도 된다. 트레이닝과 경기에 참여할 수 없다.';
};
