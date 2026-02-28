class I18nKojo101701 {
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

module.exports = I18nKojo101701;
