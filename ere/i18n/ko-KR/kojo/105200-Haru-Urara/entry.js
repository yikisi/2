const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105200-Haru-Urara/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105200-Haru-Urara/rec-52.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105200-Haru-Urara/daily-52.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105200-Haru-Urara/edu-52.js'));
  love = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105200-Haru-Urara/love-52.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105200-Haru-Urara/ero-52.js'));
  basement = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/105200-Haru-Urara/base-52.js'),
  );

  notify_fan_reward = (urara, fan) => [
    urara.get_colored_name(),
    '의 팬 수가 ',
    fan,
    '명 늘었다!',
  ];
  notify_break_loop = (urara) => [
    urara.get_colored_name(),
    '가 팬들의 응원에서 더 큰 힘을 얻을 수 있게 되었습니다!',
  ];
  notify_bs_dance = (urara) => [
    '방과 후, ',
    urara.get_colored_name(),
    '가 혼자 춤 연습을 한다고 합니다… 다음에 혼자 외출할 때 찾아가 봅시다',
  ];
  notify_os_all_like = (urara) => [
    '최근, ',
    urara.get_colored_name(),
    '가 학원 근처의 작은 공원에 자주 간다고 합니다… 다음에 혼자 외출할 때 살펴봅시다',
  ];
  notify_bs_stair =
    '학생들 사이에 계단 수에 관한 괴담이 돈다고 합니다… 다음에 혼자 이사장실에 갈 때 살펴봅시다';
  notify_bs_mother =
    '요즘 이사장실 근처에 낯선 사람이 나타난다고 합니다… 다음에 혼자 이사장실에 갈 때 만나 봅시다';
  notify_sa_vs =
    '요즘 일부 학생들이 학원 중앙 정원에서 팔씨름 대결을 한다고 합니다… 다음에 혼자 외출할 때 살펴봅시다';
  notify_bs_challenge =
    '요즘 학생들이 특별한 도전을 한다고 합니다. 다음에 혼자 행동할 때 살펴봅시다…';
  notify_bs_park = (urara, you) => [
    urara.get_colored_name(),
    '가 요즘 ',
    you.get_colored_name(),
    '과(와) 함께 상점가에 가고 싶어 합니다…',
  ];
  notify_back_school_event = (urara, you) => [
    urara.get_colored_name(),
    '가 요즘 ',
    you.get_colored_name(),
    '과(와) 함께 외출하고 싶은 듯합니다…',
  ];

  echo = (c) => `메아리(${c})`;
  echo_desc = (_, g_buff, d_buff) =>
    `???「서로 이해할 수 있다면 현실도 공명할 수 있다.」 경기 중: ${[
      g_buff > 0 ? `잔디 적성+${g_buff}` : '',
      d_buff > 0 ? `중거리·장거리 적성+${d_buff}` : '',
    ]
      .filter((e) => e)
      .join(', ')}.`;

  fans_buff = '팬들의 응원';

  achieve_track_aim_template = '팬 수: %COUNT%';

  edu_aim_1 = '클래식급 7월 3주 차 전까지 팬 수';
  edu_aim_2 = '클래식급 11월 3주 차 전까지 팬 수';
  edu_aim_3 = '시니어급 전까지 팬 수';

  report_arim_kin = (urara) => [
    {
      color: urara.color,
      content:
        '연말의 나카야마에 봄의 벚꽃이 만개합니다! 아리마 기념! 영광의 무대 한가운데에 선 주인공은―',
    },
    urara,
    { color: urara.color, content: '!!!' },
  ];
};
