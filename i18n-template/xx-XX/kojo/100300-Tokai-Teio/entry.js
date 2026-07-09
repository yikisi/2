const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100300-Tokai-Teio/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/rec-3.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/daily-3.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/edu-3.js'));
  love = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/love-3.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/ero-3.js'));
  basement = proxy_kojo_js(
    require('#/i18n/xx-XX/kojo/100300-Tokai-Teio/base-3.js'),
  );

  notify_leg_hurt = (teio, s_hurt) => [
    '【',
    teio.get_colored_name(),
    ' 罹患了 ',
    s_hurt,
    '！】',
  ];

  hurt = '腿伤！';
  hurt_desc =
    '严重腿伤，无法根治，即使是三女神；训练效果-20%，体力精力上限-200，消耗+10%，压力获取+10%，目标赛事一着以外-5声望，未入着+25%压力、-10声望。';

  report_arim_kin = (teio) => [
    teio,
    { color: teio.color, content: '，奇迹的复活！' },
  ];
  report_long_dis = (teio) => [
    {
      color: teio.color,
      content: '超越极限，奔向世界的尽头——',
    },
    teio,
    {
      color: teio.color,
      content: ' 再夺一胜！',
    },
  ];
};
