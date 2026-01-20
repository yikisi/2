const proxy_kojo_js = require('#/i18n/proxy');

class I18nKojo100301 {
  recruit = proxy_kojo_js(require('#/i18n/zh-CN/kojo/100301/rec-3'));
  love = proxy_kojo_js(require('#/i18n/zh-CN/kojo/100301/love-3'));

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
}

module.exports = I18nKojo100301;
