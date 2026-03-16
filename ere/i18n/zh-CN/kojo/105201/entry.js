const proxy_kojo_js = require('#/i18n/proxy');

// GENERATED START
class I18nKojo105201 {
  recruit = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105201/rec-52.js'));
  daily = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105201/daily-52.js'));
  edu = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105201/edu-52.js'));
  love = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105201/love-52.js'));
  ero = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105201/ero-52.js'));
  basement = proxy_kojo_js(require('#/i18n/zh-CN/kojo/105201/base-52.js'));
  // GENERATED END

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

module.exports = I18nKojo105201;
