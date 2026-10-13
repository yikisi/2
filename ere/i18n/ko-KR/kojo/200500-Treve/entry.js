const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/200500-Treve/entry') {
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/rec-205.js'));
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/daily-205.js'));
  edu = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/edu-205.js'));
  love = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/love-205.js'));
  ero = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/ero-205.js'));

  aim_desc = '다른 G1 경기 5회에서 1착';

  get_rec_enable_notification(treve) {
    return [
      '【안내: ',
      { color: treve.color, content: '프랑스의 뛰어난 신예' },
      '가 중앙 교류를 위해 왔다고 합니다. 트레이닝장에서 만날 수 있을지도 모릅니다】',
    ];
  }
};
