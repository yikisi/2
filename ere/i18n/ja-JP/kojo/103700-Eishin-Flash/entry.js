const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103700-Eishin-Flash/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/rec-37.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/daily-37.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/edu-37.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/love-37.js'),
  );

  notify_black_treasure = (flash) => [
    flash.get_colored_name(),
    ' は、ここのことが気になっているらしい……次にひとりで出かけて出会ったとき、聞いてみよう',
  ];

  weak = '虚弱';
  week_desc = 'やる気上限が1段階下がる。';

  derby = '栄光のダービー';
  derby_desc = '出走時の能力+50%。';

  distracted = '散漫';
  distracted_desc = 'トレーニング成功率-5%';

  duty = '為すべきこと';
  duty_desc = 'トレーニング成功率+5%';
};
