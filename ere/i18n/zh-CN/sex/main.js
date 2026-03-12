class I18nSex {
  n_lust = '欲';
  l_mejiro = '一心同体';

  get_call_assistant_confirm = (title, chara) => [
    '要叫 ',
    title,
    ' ',
    chara,
    ' 一起来吗？',
  ];
  get_hd_location = (location, mirror) => [
    '位于 ',
    location,
    ' ',
    mirror,
    ' 前',
  ];
  hd_turn_template = '第 %TURN% 回合';
  rape_notification = '强奸事件发生！';
  raped_notification = '逆强奸事件发生！';
  get_lover_relation = (relation, love) => ['🤝 ', relation, ' · ❤️ ', love];

  n_select_lover = '对手';
  n_select_assistant = '助手';
  get_assistant_info = (assistant) => ['助手：', assistant];

  redo_action_template = '再次 %ACTION%';
  get_action_info = (chara, action) => [chara, ' 的行动：', action];

  stain_header_template = '%NAME% 的身体脏污';
  touch_header_template = '%NAME% 的身体接触';
  sm_header_template = '%NAME% 的身体接触';

  try_end = '尝试结束';
  end_info = '【性事结束了】';

  nipple_clamps = '乳头夹';
  clitoris_clamps = '阴蒂夹';

  // 姿势：
  // <br>二维平面，横轴为床，人于床上从床头转动向床尾，共有四种基本位置：躺（lie）、坐（sit）、站（stand）、反向趴着（rev）
  // <br>再考虑人朝向问题，面朝床尾在二维平面上是顺时针朝向（右回，right），面朝床头在二维平面上是逆时针朝向（左回，left）
  // <br>综合之后一共八种姿势
  m_lie_right = '朝向床头躺着';
  m_lie_left = '朝向床头趴着';
  m_sit_right = '面朝床尾坐着';
  m_sit_left = '面朝床头坐着';
  m_stand_right = '面朝床尾站着';
  m_stand_left = '面朝床头站着';
  m_rev_left = '朝向床尾趴着';
  m_rev_right = '朝向床尾躺着';

  get_sadism_touch_info = (chara) => ['之前虐待了 ', chara];
  get_masochism_touch_info = (chara) => ['之前被 ', chara, ' 虐待'];
  get_item_touch_info = (owner, verb, item) => [
    item,
    '（由 ',
    owner,
    ' ',
    verb,
    '）',
  ];
  get_touch_info = (owner, part) => [owner, ' 的 ', part];
}

module.exports = I18nSex;
