module.exports = class extends require('#/i18n/zh-CN/sex/shop') {
  abl_tab = 'Ability Study';
  talent_tab = 'Trait Change';
  mark_tab = (has_inmon) => (has_inmon ? 'Mark Custom' : 'Mark Removal');
  transfer_tab = 'Factor Siphon';
  update_end = 'Finish Upgrade';

  jewel_header_template = "%NAME%'s Factors";
  abl_header_template = "%NAME%'s Abilities";
  talent_header_template = "%NAME%'s Traits";
  mark_header_template = "%NAME%'s Marks";
  inmon_header_template = "%NAME%'s Lewd Crest";
  transfer_header = 'Siphon Art';

  price_tip_template = 'Cost: %PRICE%';
  cond_tip_template = '%COND% %EXP% (now %NOW%)';
  multi_cond_tip_template =
    '%COND% total semen contact (ml) (now %ALL% = %NOW%)';
  jewel_price_template = '%JEWEL%x%COUNT%';
  price_splitter = ' + ';

  get_price_info = (jewel_name, cost, all, chara) => [
    jewel_name,
    ': ',
    ...this.get_addition_price_info(cost, all, chara),
  ];
  get_addition_price_info = (cost, all, chara) => [
    cost,
    '/',
    all,
    ' (',
    chara,
    ')',
  ];

  bt_upgrade = '↑';
  bt_downgrade = '↓';

  abl_tab_tooltip =
    '* Tap an ability name for details, or tap ↑/↓ to raise/lower it\n' +
    '** If a body-part training factor is short, the gap can be filled at double cost with other factors';
  cf_upgrade = 'Upgrade';
  cf_downgrade = 'Downgrade';
  get_abl_upgrade_confirm = (chara, abl, upgrade, new_level) => [
    upgrade,
    ' ',
    chara,
    "'s ",
    abl,
    ' to ',
    new_level,
    '? Cost: ',
  ];

  bt_add = 'Gain Trait';
  bt_remove = 'Remove Trait';
  bt_t_up = 'Raise Sensitivity';
  bt_t_down = 'Lower Sensitivity';
  milk_other_condition =
    'Under drug lactation from [Milk Medicine] (now: %STATUS%)';
  get_talent_tab_tooltip = (limit) =>
    '* Tap a trait name for details, or use the buttons to adjust sensitivity / gain or remove traits\n' +
    '** If a body-part training factor is short, the gap can be filled at double cost with other factors\n' +
    `*** Body parts that can reach max sensitivity: ${limit}`;
  cf_add = 'Gain';
  cf_remove = 'Remove';
  cf_s_up = 'Raise';
  cf_s_down = 'Lower';
  get_talent_change_confirm = (chara, talent, change) => [
    change,
    ' the ',
    talent,
    ' trait for ',
    chara,
    '? Cost: ',
  ];
  get_sens_change_confirm = (chara, talent, change) => [
    change,
    ' ',
    chara,
    "'s ",
    talent,
    '? Cost: ',
  ];
  milk_slave_warning = '(Will cancel Lewd Crest entry [Milk Slave]!)';

  ch_cost_meek = 'Spend Meek factors to clear Rebellion mark';
  ch_cost_pain = 'Spend Pain factors to clear Rebellion mark';
  ch_cost_fear = 'Spend Fear factors to clear Rebellion mark';
  ch_cost_shame = 'Spend Shame factors to clear Rebellion mark';
  clean_hate_tooltip =
    '* With marks acquired, matching factors can clear Rebellion\n** At equal mark levels, Pain, Fear, and Shame cost less than Meek to clear Rebellion, but may have side effects';
  bt_clean_pain = 'Spend Meek factors to clear Pain mark';
  bt_clean_shame = 'Spend Meek factors to clear Shame mark';
  clean_other_tooltip =
    '* Lower target mark level and higher One-Heart mark level mean fewer Meek factors spent';
  bt_upgrade_inmon = 'Raise Lewd Crest level';
  bt_get_inmon = 'Convert Pleasure mark into Lewd Crest';
  unlock_inmon_tooltip =
    '* Higher Unity level (One-Heart mark) lowers Lewd Crest upgrade cost';
  sticker_tooltip = 'Lewd Crest stickers cannot set entries';
  inmon_slave_template = 'Current entry: %SLAVE%';
  inmon_slave_desc_template = 'Effect: %DESC%';
  inmon_plugin_header = 'Available plugins';
  inmon_plugin_tooltip =
    '* Once unlocked by purchase, plugins no longer cost Meek factors\n** Only one plugin of the same effect type can be loaded at a time';
  get_inmon_warning =
    'Branding someone with a Lewd Crest to enslave them is deeply immoral and tanks public opinion! Continue?';
  new_option_header = 'Choose a new Lewd Crest entry';
  change_option_tooltip =
    '* Switching entries costs 1,000 Meek factors\n** Clearing an entry is free';
  get_clean_hate_confirm = (chara, jewel, hate) => [
    'Spend ',
    chara,
    "'s ",
    jewel,
    ' to clear one level of ',
    hate,
    '? Cost: ',
  ];
  get_clean_other_confirm = (chara, jewel, mark) => [
    'Spend ',
    chara,
    "'s ",
    jewel,
    ' to clear one level of ',
    mark,
    '? Cost: ',
  ];
  get_get_inmon_confirm = (chara, m_pleasure, m_inmon) => [
    'Convert ',
    chara,
    "'s ",
    m_pleasure,
    ' into ',
    m_inmon,
    '? Cost: ',
  ];
  get_upgrade_inmon_confirm = (chara, m_inmon, new_inmon) => [
    'Upgrade ',
    chara,
    "'s ",
    m_inmon,
    ' to ',
    new_inmon,
    '? Cost: ',
  ];
  get_change_option_confirm = (chara, option) => [
    'Switch ',
    chara,
    "'s Lewd Crest entry to ",
    option,
    '? Cost',
  ];
  get_load_plugin_confirm = (chara, plugin) => [
    'Unlock and load ',
    plugin,
    ' for ',
    chara,
    '? Cost: ',
  ];
  clean_slave_option_confirm = 'Clear the entry?';
  s_milk_warning_man = 'Males cannot offer milk';
  s_preg_warning_man = 'Males cannot become pregnant';
  s_milk_warning_milk = 'Only [Lactation] can offer milk';
  s_preg_warning_plugin = 'Already under Infertility Ward';
  s_inherit_warning_race = 'Only %UMA% can offer factors';
  s_assi_warning_dup = 'Already have one assistant slave';

  bt_transfer = "Convert %NAME%'s %JEWEL% to %YOU%";
  transfer_tab_tooltip =
    "* A character's 10,000 part factors and Meek factors convert into 10 factors for %YOU%\n" +
    "** A character's 10,000 Pain, Fear, or Shame factors convert into 1 Meek factor for %YOU%";
  get_transfer_confirm = (chara, cost, all, you, you_get) => [
    'Convert ',
    chara,
    "'s ",
    cost,
    ' (total ',
    all,
    ') into ',
    you,
    "'s ",
    you_get,
    '?',
  ];
};
