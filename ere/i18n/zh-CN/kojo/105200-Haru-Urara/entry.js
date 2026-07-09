const { proxy_kojo_js } = require('#/i18n/tools');

// GENERATED START
class I18nKojo105200 {
  static _ = new I18nKojo105200();
  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105200-Haru-Urara/rec-52.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105200-Haru-Urara/daily-52.js'),
  );
  edu = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105200-Haru-Urara/edu-52.js'));
  love = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105200-Haru-Urara/love-52.js'),
  );
  ero = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105200-Haru-Urara/ero-52.js'));
  basement = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105200-Haru-Urara/base-52.js'),
  );
  // GENERATED END

  notify_fan_reward = (urara, fan) => [
    urara.get_colored_name(),
    ' 的粉丝数增长了 ',
    fan,
    '！',
  ];
  notify_break_loop = (urara) => [
    urara.get_colored_name(),
    ' 能从粉丝的支持中获取更强的力量了！',
  ];
  notify_bs_dance = (urara) => [
    '据说 ',
    urara.get_colored_name(),
    ' 会在放学后独自进行舞蹈练习……下次独自出行的时候注意去看看吧',
  ];
  notify_os_all_like = (urara) => [
    '听说 ',
    urara.get_colored_name(),
    ' 最近经常去学园附近的小公园……下次独自出行的时候注意一下吧',
  ];
  notify_bs_stair =
    '据说学生中有关于阶梯数的怪谈……下次独自前往理事长办公室的时候注意一下吧';
  notify_bs_mother =
    '据说理事长办公室附近最近有陌生人出没……下次独自前往理事长办公室的时候接触一下吧';
  notify_sa_vs =
    '据说最近有些学生会在学校中庭展开掰手腕对决……下次独自出行的时候注意一下吧';
  notify_bs_challenge =
    '据说最近学生们在进行特别的挑战，下次独自行动的时候注意一下吧……';
  notify_bs_park = (urara, you) => [
    urara.get_colored_name(),
    ' 最近想和 ',
    you.get_colored_name(),
    ' 一起去商店街……',
  ];
  notify_back_school_event = (urara, you) => [
    urara.get_colored_name(),
    ' 最近似乎想和 ',
    you.get_colored_name(),
    ' 一起外出……',
  ];

  echo = (c) => `回响(${c})`;
  echo_desc = (_, g_buff, d_buff) =>
    `？？？「若能相互理解，现实也能予以共鸣。」参赛时：${[
      g_buff > 0 ? `草地适性+${g_buff}` : '',
      d_buff > 0 ? `中&长距离适性+${d_buff}` : '',
    ]
      .filter((e) => e)
      .join('，')}。`;

  fans_buff = '粉丝支持';

  achieve_track_aim_template = '粉丝数：%COUNT%';

  edu_aim_1 = '经典年 7 月第 3 周前 粉丝数';
  edu_aim_2 = '经典年 11 月第 3 周前 粉丝数';
  edu_aim_3 = '资深年前 粉丝数';

  report_arim_kin = (urara) => [
    {
      color: urara.color,
      content: '年终的中山，春之樱满开！有马纪念！站在荣誉舞台中央的是——',
    },
    urara,
    { color: urara.color, content: '！！！' },
  ];
}

module.exports = I18nKojo105200;
