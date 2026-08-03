module.exports = class extends require('#/i18n/zh-CN/sex/main') {
  n_lust = 'Lust';
  l_mejiro = 'Unity';

  get_call_assistant_confirm = (title, chara) => [
    'Call ',
    title,
    ' ',
    chara,
    ' over too?',
  ];
  get_hd_location = (location, mirror) => [
    'At ',
    location,
    ', before the ',
    mirror,
  ];
  hd_turn_template = 'Turn %TURN%';
  rape_notification = 'Rape event triggered!';
  raped_notification = 'Reverse rape event triggered!';
  get_lover_relation = (relation, love) => ['🤝 ', relation, ' · ❤️ ', love];

  n_select_lover = 'Partner';
  n_select_assistant = 'Assistant';
  get_assistant_info = (assistant) => ['Assistant: ', assistant];

  redo_action_template = 'Again: %ACTION%';
  get_action_info = (chara, action) => [chara, "'s action: ", action];

  stain_header_template = "%NAME%'s Body Stains";
  touch_header_template = "%NAME%'s Body Contact";
  sm_header_template = "%NAME%'s Body Contact";

  st_act_vagina_filter = 'Hide vaginal commands';
  st_act_anal_filter = 'Hide anal commands';
  st_act_sm_filter = 'Hide SM commands';
  st_act_pet_filter = 'Hide caress commands';
  st_act_breast_filter = 'Hide no-milk titjobs';
  st_act_ask_filter = 'Hide request commands';
  st_act_force_filter = 'Hide force commands';
  st_simpler_report = 'Compact session report';

  try_end = 'Try to end';
  end_info = '[The act is over]';

  nipple_clamps = 'Nipple clamps';
  clitoris_clamps = 'Clit clamps';

  // poses:
  // 2D plane, bed as X-axis; person rotates from headboard toward footboard
  // four base poses: lie / sit / stand / reverse prone (rev)
  // facing footboard = clockwise (right); facing headboard = counterclockwise (left)
  // eight poses total
  m_lie_right = 'Lying toward the headboard';
  m_lie_left = 'Prone toward the headboard';
  m_sit_right = 'Sitting facing the footboard';
  m_sit_left = 'Sitting facing the headboard';
  m_stand_right = 'Standing facing the footboard';
  m_stand_left = 'Standing facing the headboard';
  m_rev_left = 'Prone toward the footboard';
  m_rev_right = 'Lying toward the footboard';

  get_sadism_touch_info = (chara) => ['Previously abused ', chara];
  get_masochism_touch_info = (chara) => ['Previously abused by ', chara];
  get_item_touch_info = (owner, verb, item) => [
    item,
    ' (',
    verb,
    ' by ',
    owner,
    ')',
  ];
  get_touch_info = (owner, part) => [owner, "'s ", part];

  get_got_param_info = (chara, pname, has, got, total, limit) => [
    chara,
    "'s ",
    pname,
    ': ',
    has,
    ' + ',
    got,
    ' → ',
    total,
    '/',
    limit,
  ];
  get_got_jewel_info = (chara, jname, has, got, _new, total) => [
    chara,
    ' gained ',
    jname,
    ': ',
    has,
    ' + ',
    got,
    ' → ',
    _new,
    ' (',
    total,
    ')',
  ];
  get_got_jewel_info_oot = (chara, jname, has, got, total) => [
    chara,
    ' gained ',
    jname,
    ': ',
    has,
    ' + ',
    got,
    ' → ',
    total,
  ];
  get_got_mark_info = (chara, mark) => [chara, ' gained ', mark, '!'];
  get_hp_tp_change = (chara, change_info) => [chara, "'s ", ...change_info];

  orgasm_2 = 'Double orgasm';
  orgasm_3 = 'Triple orgasm';
  orgasm_4 = 'Quad orgasm';
  orgasm_5 = 'Penta orgasm';
  orgasm_m = 'Multi orgasm';

  result_title = 'Session Results';
  jewel_header_template = "%NAME%'s Factors";
  mark_header_template = "%NAME%'s Marks";
  attr_header_template = "%NAME%'s Attributes";
  orgasm_header_template = "%NAME%'s Orgasms";
  no_change = 'No change';

  get_jewel_info_start = (self_protect) => [
    self_protect,
    ' Self-Defense factors canceled against other factors:',
  ];
  get_jewel_row_start = (jewel_name) => [jewel_name, ': '];
  jewel_has = 'Had';
  jewel_got = 'Gained';
  jewel_lose = 'Canceled';
  jewel_total = 'Total';

  get_mark_row = (mark_name, old, new_level) => [
    mark_name,
    ': ',
    old,
    ' → ',
    new_level,
  ];

  get_orgasm_count = (count) => ['Orgasmed ', count, ' times this session'];
  get_special_orgasm_count = (count) => [
    'Special orgasms: ',
    count,
    ', including:',
  ];
  get_special_orgasm_detail = (orgasm, count) => [orgasm, ' x', count];
  orgasm_detail_start = 'Breakdown:';
  get_part_orgasm(part, count, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push(part, ' orgasmed ', count, ' times');
      if (unknown_count) {
        ret.push(', but felt nothing for ', unknown_count, ' of them');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_breast_orgasm(
    count,
    unknown_count,
    nipple_count,
    uk_nipple_count,
    unsatisfied_desc,
  ) {
    const ret = [];
    if (count) {
      ret.push('Breasts orgasmed ', count, ' times');
      if (unknown_count) {
        ret.push(', but felt nothing for ', unknown_count, ' of them');
      }
      if (nipple_count) {
        ret.push('; ', nipple_count, ' climaxed as stored milk sprayed out');
        if (uk_nipple_count) {
          ret.push(', with ', uk_nipple_count, ' going completely unnoticed');
        }
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_penis_orgasm(count, semen, unknown_count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push('Came ', count, ' times, shooting ', semen, ' semen');
      if (unknown_count) {
        ret.push(', but felt nothing for ', unknown_count, ' of them');
      }
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_spirit_orgasm(cause, count, unsatisfied_desc) {
    const ret = [];
    if (count) {
      ret.push('Orgasmed from ', cause, ' ', count, ' times');
    }
    if (unsatisfied_desc) {
      if (ret.length > 0) {
        ret.push('; ');
      }
      ret.push(unsatisfied_desc);
    }
    return ret;
  }
  get_squirt_info = (squirt) => ['Squirted ', squirt, ' times'];
  get_secretion_info = (secretion) => ['Secreted juices: ', secretion];

  orgasm_event_start = 'During this session:';
  get_lose_virginity = (virgin, unsatisfied_desc) =>
    unsatisfied_desc
      ? ['Lost ', virgin, ', ', unsatisfied_desc]
      : ['Lost ', virgin];

  lust_down_plus = 'Lust was released in a big way!';
  lust_down = 'Lust was mostly worked off';
  lust_up = 'Lust only built up further...';

  pressure_down_plus = 'Stress was greatly relieved!';
  pressure_down = 'Nerves eased a little';

  get_milk_info = (milk) => ['Sprayed ', ...this.get_milk_amount(milk)];
  get_drink_info = (liquid_list) => ['Drank ', ...liquid_list];
  get_cum_in_womb_info = (semen) => [
    'Took ',
    ...this.get_semen_amount(semen),
    ' in the pussy',
  ];
  get_cum_in_anal_info = (semen) => [
    'Took ',
    ...this.get_semen_amount(semen),
    ' in the ass',
  ];
  get_milk_amount = (milk) => [milk, ' milk'];
  get_semen_amount = (semen) => [semen, ' semen'];
  get_secretion_amount = (secretion) => [secretion, ' semen'];

  get_wound_info = (parts) => [
    parts,
    ' were stretched open... that has to hurt',
  ];

  no_orgasm = 'No orgasm occurred';
};
