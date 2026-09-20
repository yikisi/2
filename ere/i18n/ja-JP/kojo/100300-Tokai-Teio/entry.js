const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100300-Tokai-Teio/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/rec-3.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/daily-3.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3.js'));
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/love-3.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/ero-3.js'));
  basement = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/base-3.js'),
  );

  notify_leg_hurt = (teio, s_hurt) => [
    '【',
    teio.get_colored_name(),
    ' が ',
    s_hurt,
    ' を発症した！】',
  ];

  hurt = '脚部負傷！';
  hurt_desc =
    '重い脚の怪我。三女神でも完治できない。トレーニング効果-20%、体力・気力上限-200、消費+10%、ストレス取得+10%。目標レースで1着以外は名声-5。着外はストレス+25%、名声-10。';

  report_arim_kin = (teio) => [
    teio,
    { color: teio.color, content: '、奇跡の復活！' },
  ];
  report_long_dis = (teio) => [
    {
      color: teio.color,
      content: '限界を超えて、世界の果てへ——',
    },
    teio,
    {
      color: teio.color,
      content: ' がまた一つ勝った！',
    },
  ];
};
