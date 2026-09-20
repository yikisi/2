const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105200-Haru-Urara/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105200-Haru-Urara/rec-52.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105200-Haru-Urara/daily-52.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ja-JP/kojo/105200-Haru-Urara/edu-52.js'));
  love = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105200-Haru-Urara/love-52.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/ja-JP/kojo/105200-Haru-Urara/ero-52.js'));
  basement = proxy_kojo_js(
    require('#/i18n/ja-JP/kojo/105200-Haru-Urara/base-52.js'),
  );

  notify_fan_reward = (urara, fan) => [
    urara.get_colored_name(),
    ' のファン数が ',
    fan,
    ' 増えた！',
  ];
  notify_break_loop = (urara) => [
    urara.get_colored_name(),
    ' は、ファンの応援からより強い力を得られるようになった！',
  ];
  notify_bs_dance = (urara) => [
    '放課後、',
    urara.get_colored_name(),
    ' がひとりでダンスの練習をしているらしい……次にひとりで出かけるときは、様子を見てみよう',
  ];
  notify_os_all_like = (urara) => [
    '最近、',
    urara.get_colored_name(),
    ' が学園近くの小さな公園へよく行くらしい……次にひとりで出かけるときは、気にかけてみよう',
  ];
  notify_bs_stair =
    '生徒の間で、階段の段数にまつわる怪談があるらしい……次にひとりで理事長室へ行くときは、気にかけてみよう';
  notify_bs_mother =
    '理事長室の近くに、最近見知らぬ人が出没しているらしい……次にひとりで理事長室へ行くときは、接触してみよう';
  notify_sa_vs =
    '最近、中庭で腕相撲の勝負を始める生徒がいるらしい……次にひとりで出かけるときは、気にかけてみよう';
  notify_bs_challenge =
    '最近、生徒たちが特別な挑戦をしているらしい。次にひとりで行動するときは、気にかけてみよう……';
  notify_bs_park = (urara, you) => [
    urara.get_colored_name(),
    ' は最近、',
    you.get_colored_name(),
    ' と商店街へ行きたいと思っている……',
  ];
  notify_back_school_event = (urara, you) => [
    urara.get_colored_name(),
    ' は最近、',
    you.get_colored_name(),
    ' と一緒に外出したがっているようだ……',
  ];

  echo = (c) => `残響(${c})`;
  echo_desc = (_, g_buff, d_buff) =>
    `？？？「分かり合えれば、現実も共鳴する。」出走時：${[
      g_buff > 0 ? `芝適性+${g_buff}` : '',
      d_buff > 0 ? `中・長距離適性+${d_buff}` : '',
    ]
      .filter((e) => e)
      .join('、')}。`;

  fans_buff = 'ファンの応援';

  achieve_track_aim_template = 'ファン数：%COUNT%';

  edu_aim_1 = 'クラシック級 7月第3週まで ファン数';
  edu_aim_2 = 'クラシック級 11月第3週まで ファン数';
  edu_aim_3 = 'シニア級まで ファン数';

  report_arim_kin = (urara) => [
    {
      color: urara.color,
      content:
        '年の瀬の中山、春の桜が満開！有馬記念！栄誉の舞台の中央に立つのは——',
    },
    urara,
    { color: urara.color, content: '！！！' },
  ];
};
