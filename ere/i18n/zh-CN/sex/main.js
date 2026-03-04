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
    '前',
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
}

module.exports = I18nSex;
