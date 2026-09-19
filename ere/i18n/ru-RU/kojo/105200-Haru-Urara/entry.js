const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105200-Haru-Urara/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/105200-Haru-Urara/rec-52.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/105200-Haru-Urara/daily-52.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ru-RU/kojo/105200-Haru-Urara/edu-52.js'));
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/105200-Haru-Urara/love-52.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/ru-RU/kojo/105200-Haru-Urara/ero-52.js'));
  basement = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/105200-Haru-Urara/base-52.js'),
  );

  notify_fan_reward = (urara, fan) => [
    urara.get_colored_name(),
    ' — число фанатов выросло на ',
    fan,
    '!',
  ];
  notify_break_loop = (urara) => [
    urara.get_colored_name(),
    ' черпает из поддержки фанатов ещё больше силы!',
  ];
  notify_bs_dance = (urara) => [
    'Говорят, ',
    urara.get_colored_name(),
    ' после уроков одна репетирует танцы… в следующий раз, выходя в одиночку, стоит заглянуть',
  ];
  notify_os_all_like = (urara) => [
    'Слышно, ',
    urara.get_colored_name(),
    ' в последнее время часто ходит в маленький парк у академии… в следующий раз, выходя в одиночку, стоит обратить внимание',
  ];
  notify_bs_stair =
    'Говорят, среди учеников ходит байка про число ступенек… в следующий раз, идя в кабинет директора в одиночку, стоит быть внимательнее';
  notify_bs_mother =
    'Говорят, у кабинета директора в последнее время ошивается незнакомец… в следующий раз, идя туда в одиночку, стоит подойти';
  notify_sa_vs =
    'Говорят, недавно ученики устраивают во внутреннем дворе школы поединки на руках… в следующий раз, выходя в одиночку, стоит обратить внимание';
  notify_bs_challenge =
    'Говорят, ученики затеяли особое испытание; в следующий раз, действуя в одиночку, стоит обратить внимание…';
  notify_bs_park = (urara, you) => [
    urara.get_colored_name(),
    ' в последнее время хочет вместе с ',
    you.get_colored_name(),
    ' сходить на торговую улицу…',
  ];
  notify_back_school_event = (urara, you) => [
    urara.get_colored_name(),
    ' в последнее время, кажется, хочет вместе с ',
    you.get_colored_name(),
    ' выйти куда-нибудь…',
  ];

  echo = (c) => `Эхо(${c})`;
  echo_desc = (_, g_buff, d_buff) =>
    `???「Если понять друг друга, реальность тоже отзовётся.» На скачке: ${[
      g_buff > 0 ? ` пригодность к траве+ ${g_buff}` : '',
      d_buff > 0 ? ` пригодность к средней и длинной+ ${d_buff}` : '',
    ]
      .filter((e) => e)
      .join(',')}.`;

  fans_buff = 'Поддержка фанатов';

  achieve_track_aim_template = 'Фанаты: %COUNT%';

  edu_aim_1 = 'Классический год, до 3-й недели июля: фанаты';
  edu_aim_2 = 'Классический год, до 3-й недели ноября: фанаты';
  edu_aim_3 = 'До выпускного года: фанаты';

  report_arim_kin = (urara) => [
    {
      color: urara.color,
      content:
        'Конец года в Накаяме, весенняя сакура в полном цвету! Arima Kinen! В центре сцены славы —',
    },
    urara,
    { color: urara.color, content: '!!!' },
  ];
};
