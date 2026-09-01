const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100300-Tokai-Teio/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/rec-3.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/daily-3.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/edu-3.js'));
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/love-3.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/ero-3.js'));
  basement = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/base-3.js'),
  );

  notify_leg_hurt = (teio, s_hurt) => [
    '【',
    teio.get_colored_name(),
    ' получает ',
    s_hurt,
    '!】',
  ];

  hurt = 'Травма ноги!';
  hurt_desc =
    'Тяжёлая травма ноги, неизлечимая, не под силу даже трём богиням; эффект тренировок -20%, предел выносливости и сил -200, расход +10%, набор стресса +10%, в целевом забеге не первое место: -5 к славе, вне призовых: +25% стресса, -10 к славе.';

  report_arim_kin = (teio) => [
    teio,
    { color: teio.color, content: ', чудесное возвращение!' },
  ];
  report_long_dis = (teio) => [
    {
      color: teio.color,
      content: 'За предел, к самому краю мира —',
    },
    teio,
    {
      color: teio.color,
      content: ' берёт ещё одну победу!',
    },
  ];
};
