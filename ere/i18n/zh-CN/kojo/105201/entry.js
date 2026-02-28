class I18nKojo105201 {
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
