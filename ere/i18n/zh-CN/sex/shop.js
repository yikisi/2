class I18nJewelShop {
  static _ = new I18nJewelShop();

  abl_tab = '能力学习';
  talent_tab = '特性变更';
  mark_tab = (has_inmon) => (has_inmon ? '刻印定制' : '刻印消除');
  transfer_tab = '因子采补';
  update_end = '结束升级';

  jewel_header_template = '%NAME% 的因子';
  abl_header_template = '%NAME% 的能力';
  talent_header_template = '%NAME% 的特性';
  mark_header_template = '%NAME% 的刻印';
  inmon_header_template = '%NAME% 的淫纹';
  transfer_header = '采补之术';

  price_tip_template = '需要：%PRICE%';
  cond_tip_template = '%COND% %EXP% (当前 %NOW%)';
  multi_cond_tip_template = '%COND% 总沾染精液量(ml) (当前 %ALL% = %NOW%)';
  jewel_price_template = '%JEWEL%×%COUNT%';
  price_splitter = ' + ';

  get_price_info = (jewel_name, cost, all, chara) => [
    jewel_name,
    '：',
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
    '* 点击能力名显示说明，或者点击 ↑/↓ 升/降级能力\n' +
    '** 角色身体部位的调教因子不足所需时，可以以两倍的因子补足差额';
  cf_upgrade = '升级';
  cf_downgrade = '降级';
  get_abl_upgrade_confirm = (chara, abl, upgrade, new_level) => [
    '要将 ',
    chara,
    ' 的 ',
    abl,
    ' ',
    upgrade,
    ' 为 ',
    new_level,
    ' 吗？花费：',
  ];

  bt_add = '获取特性';
  bt_remove = '消除特性';
  bt_t_up = '增加感度';
  bt_t_down = '降低感度';
  milk_other_condition =
    '处于 [母乳药剂] 导致的药物泌乳情况下 (当前：%STATUS%)';
  get_talent_tab_tooltip = (limit) =>
    '* 点击特性名显示说明，或者点击之后的按钮升降感度/获取或消除特性\n' +
    '** 角色身体部位的调教因子不足所需时，可以以两倍的因子补足差额\n' +
    `*** 可获取最高级敏感度的部位数量：${limit}`;
  cf_add = '获取';
  cf_remove = '消除';
  cf_s_up = '提升';
  cf_s_down = '降低';
  get_talent_change_confirm = (chara, talent, change) => [
    '要为 ',
    chara,
    ' ',
    change,
    ' ',
    talent,
    ' 特性吗？花费：',
  ];
  get_sens_change_confirm = (chara, talent, change) => [
    '要 ',
    change,
    ' ',
    chara,
    ' 的 ',
    talent,
    ' 吗？花费：',
  ];
  milk_slave_warning = '（会取消淫纹词条 [乳奴]！）';

  ch_cost_meek = '使用顺从因子消除反抗刻印';
  ch_cost_pain = '使用痛苦因子消除反抗刻印';
  ch_cost_fear = '使用恐惧因子消除反抗刻印';
  ch_cost_shame = '使用羞耻因子消除反抗刻印';
  clean_hate_tooltip =
    '* 在获得刻印的情况下，可以使用相应因子消除反抗刻印\n** 在刻印等级相同的情况下，使用痛苦、恐惧、羞耻三种因子消除反抗刻印的价格比顺从更低，但是可能存在副作用';
  bt_clean_pain = '使用顺从因子消除苦痛刻印';
  bt_clean_shame = '使用顺从因子消除羞耻刻印';
  clean_other_tooltip =
    '* 要消除的刻印等级越低，同心刻印的等级越高，消耗的顺从因子越低';
  bt_upgrade_inmon = '提升淫纹等级';
  bt_get_inmon = '将欢愉刻印转换为淫纹';
  unlock_inmon_tooltip =
    '* 一心同体的程度（同心刻印的等级）越高，淫纹的升级费用越低';
  sticker_tooltip = '淫纹贴纸不能设置词条';
  inmon_slave_template = '当前词条：%SLAVE%';
  inmon_slave_desc_template = '效果：%DESC%';
  inmon_plugin_header = '可用插件';
  inmon_plugin_tooltip =
    '* 插件通过购买解锁后不再花费顺从因子\n** 同类效果的插件一次只能装载一个';
  get_inmon_warning =
    '刻印淫纹以奴役对方是一种极不道德的行为，对社会评价极为不利！请确认是否继续？';
  new_option_header = '选择新淫纹词条';
  change_option_tooltip =
    '* 切换词条需要 1,000 顺从因子\n** 取消词条无任何花销';
  get_clean_hate_confirm = (chara, jewel, hate) => [
    '要用 ',
    chara,
    ' 的 ',
    jewel,
    ' 消除一级 ',
    hate,
    ' 吗？花费：',
  ];
  get_clean_other_confirm = (chara, jewel, mark) => [
    '要用 ',
    chara,
    ' 的 ',
    jewel,
    ' 消除一级 ',
    mark,
    ' 吗？花费：',
  ];
  get_get_inmon_confirm = (chara, m_pleasure, m_inmon) => [
    '将 ',
    chara,
    ' 的 ',
    m_pleasure,
    ' 转换为 ',
    m_inmon,
    ' 吗？花费：',
  ];
  get_upgrade_inmon_confirm = (chara, m_inmon, new_inmon) => [
    '将 ',
    chara,
    ' 的 ',
    m_inmon,
    ' 升级为 ',
    new_inmon,
    ' 吗？花费：',
  ];
  get_change_option_confirm = (chara, option) => [
    '将 ',
    chara,
    ' 的淫纹词条切换为 ',
    option,
    ' 吗？花费',
  ];
  get_load_plugin_confirm = (chara, plugin) => [
    '要为 ',
    chara,
    ' 解锁并装载 ',
    plugin,
    ' 吗？花费：',
  ];
  clean_slave_option_confirm = '确定要取消词条吗？';
  s_milk_warning_man = '男性不能上贡乳汁';
  s_preg_warning_man = '男性不能怀孕';
  s_milk_warning_milk = '只有 [母乳体质] 才能上贡乳汁';
  s_preg_warning_plugin = '已受到不孕之加护';
  s_inherit_warning_race = '只有%UMA%能上贡因子';
  s_assi_warning_dup = '已经有了一名助奴';

  bt_transfer = '将 %NAME% 的 %JEWEL% 转换给 %YOU%';
  transfer_tab_tooltip =
    '* 角色的 10,000 个部位因子与顺从因子，可以转换为 %YOU% 的 10 个因子\n' +
    '** 角色的 10,000 个痛苦、恐惧、羞耻因子，可以转换为 %YOU% 的 1 个顺从因子';
  get_transfer_confirm = (chara, cost, all, you, you_get) => [
    '将 ',
    chara,
    ' 的 ',
    cost,
    '（总共 ',
    all,
    '）转换为 ',
    you,
    ' 的 ',
    you_get,
    ' 吗？',
  ];
}

module.exports = I18nJewelShop;
