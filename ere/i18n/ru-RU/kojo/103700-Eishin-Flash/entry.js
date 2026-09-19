const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103700-Eishin-Flash/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103700-Eishin-Flash/rec-37.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103700-Eishin-Flash/daily-37.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103700-Eishin-Flash/edu-37.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/ru-RU/kojo/103700-Eishin-Flash/love-37.js'),
  );

  notify_black_treasure = (flash) => [
    flash.get_colored_name(),
    ' 好像对这里很关注的样子……下次独自出行偶遇的时候问问吧',
  ];

  weak = '虚弱';
  week_desc = '干劲上限下降一阶段。';

  derby = '荣耀德比';
  derby_desc = '参赛时属性+50%。';

  distracted = '分心';
  distracted_desc = '训练成功率-5%';

  duty = '必行之事';
  duty_desc = '训练成功率+5%';
};
