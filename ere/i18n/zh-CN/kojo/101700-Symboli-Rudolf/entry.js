const { proxy_kojo_js } = require('#/i18n/tools');

// GENERATED START
class I18nKojo101700 {
  static _ = new I18nKojo101700();
  recruit = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/rec-17.js'),
  );
  daily = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/daily-17.js'),
  );
  edu = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/edu-17.js'),
  );
  love = proxy_kojo_js(
    require('#/i18n/zh-CN/kojo/101700-Symboli-Rudolf/love-17.js'),
  );
  // GENERATED END

  notify_get_worse = (luna) => [
    luna.get_colored_name(),
    ' 的精神状态变得更糟了……',
  ];

  pa_button = '日月交替';
  pa_notify_keep = (chara) => [
    '下周 ',
    chara.get_colored_name(),
    ' 将尝试保持 ',
    chara.get_colored_name(),
    ' 形态……',
  ];
  pa_notify_transform = (chara, aim) => [
    '下周 ',
    chara.get_colored_name(),
    ' 将尝试转换为 ',
    aim.get_colored_name(),
    ' 形态……',
  ];
  notify_punish_for_important = (emperor, race) => [
    emperor.get_colored_name(),
    ' 对 ',
    race,
    ' 的失利极为不满……',
  ];
  notify_punish_for_avoid = (emperor, race) => [
    emperor.get_colored_name(),
    ' 对在 ',
    race,
    ' 的缺席极为不满……',
  ];

  self_destruct = '自毁';
  self_destruct_desc =
    '对宿命的抗拒使其陷入自我毁灭；训练成功率-5%，训练效果-8%，参赛时属性-5%。';

  crush = '迷恋';
  crush_desc = '对你的汹涌心意已无法再遮掩与克制；初始爱慕+40，爱慕获取+20%。';

  emperor = '皇帝';
  emperor_desc =
    '君临于此处，跪下；训练成功率+5%，训练效果+4%，参赛时属性+2%，每七回合以此形态活动获得一层[精神损伤]。';

  intention = '心术';
  intention_desc = '不必揣度，只需臣服；好感获取-20%，爱慕上限为40。';

  moral_damage = (c) => `精神损伤${c === 1 ? '' : `(${c})`}`;
  moral_damage_desc = (c, debuff, buff) =>
    `露娜训练效果-${debuff}%，皇帝训练效果+${buff}%${c < 6 ? '；6层[精神损伤]获得[神经衰弱]' : ''}。`;

  r_fallen = '神经衰弱';
  fallen = '神经衰弱！';
  fallen_desc = '已无可挽回……露娜参赛时属性-8%。';

  report_kiku_sho = (luna) => [
    { color: luna.color, content: '红色的大朵鲜花在京都的阴云下盛放！' },
  ];
}

module.exports = I18nKojo101700;
