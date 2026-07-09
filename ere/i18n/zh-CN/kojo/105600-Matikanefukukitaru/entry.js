const { proxy_kojo_js } = require('#/i18n/tools');

// GENERATED START
class I18nKojo105600 {
  static _ = new I18nKojo105600();
  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/rec-56.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/daily-56.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/edu-56.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/love-56.js'),
  );
  ero = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/105600-Matikanefukukitaru/ero-56.js'),
  );
  // GENERATED END

  dependency = '运势依赖';
  dependency_desc = '今天的运势是什么呢？';

  daikichi = '大吉';
  daikichi_desc =
    '灵力满溢！训练成功率+10%，所有训练效果+5%，好感获取+10%，参赛时属性+5%';

  chuukichi = '中吉';
  chuukichi_desc = '好运气呢！训练成功率+5%，所有训练效果+5%，参赛时属性+3%';

  shoukichi = '小吉';
  shoukichi_desc = '总之不坏！训练成功率+5%，参赛时属性+1%';

  kyou = '凶';
  kyou_desc =
    '这个时候去安慰福来的话？训练成功率-10%，所有训练效果-10%，参赛时属性-10%，好感获取+20%';

  ptsd = 'PTSD';
  ptsd_desc =
    '不得不去面对的阴影。训练成功率-10%，所有训练效果-10%，参赛时属性-10%，干劲上限-3';

  antei = '稳定';
  antei_desc =
    '训练员在身边的话，毫无疑问的是大吉呢！训练成功率+10%，所有训练效果+5%，好感获取+10%，参赛时属性+5%';

  achieve_track_aim_template = '以极佳干劲参与 G2 以上比赛数：%COUNT%';
}

module.exports = I18nKojo105600;
