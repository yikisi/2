const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/200500-Treve/entry') {
  recruit = proxy_kojo_js(require('#/i18n/ja-JP/kojo/200500-Treve/rec-205.js'));
  daily = proxy_kojo_js(require('#/i18n/ja-JP/kojo/200500-Treve/daily-205.js'));
  edu = proxy_kojo_js(require('#/i18n/ja-JP/kojo/200500-Treve/edu-205.js'));
  love = proxy_kojo_js(require('#/i18n/ja-JP/kojo/200500-Treve/love-205.js'));
  ero = proxy_kojo_js(require('#/i18n/ja-JP/kojo/200500-Treve/ero-205.js'));

  aim_desc = 'その他のG1を5鞍 1着';

  get_rec_enable_notification(treve) {
    return [
      '【中央へ交流に来た ',
      { color: treve.color, content: '優秀なフランスの幼駒' },
      ' がいるらしい。トレーニング場で出会えるかもしれない】',
    ];
  }
};
