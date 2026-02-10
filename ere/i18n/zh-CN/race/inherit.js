class I18nInheritShop {
  addition_jewel = ' (+%COUNT%)';
  gene_available_template = '还可以继承 %COUNT% 次';

  ui_inherit_enabled = '可进行因子继承';
  select_inherit_or_god = '可以因子继承了！要进行吗？';
  sig_inherit = '因子继承！';
  sig_god = '普通拜谒就好';

  get_price_info = (jewel_name, cost, all) => [jewel_name, '×', cost, '/', all];
  get_price_info_additional = (jewel_name, cost, you, you_cost, you_all) => [
    ...this.get_price_info(jewel_name, cost, cost),
    '（与 ',
    you,
    ' 的 ',
    ...this.get_price_info(jewel_name, you_cost, you_all),
    '）',
  ];
  get_inherit_confirm = (price, chara, gene, available_info) => [
    '使用 ',
    price,
    ' 为 ',
    chara,
    ' 继承 ',
    ...gene,
    ' 吗？',
    available_info,
  ];
}

module.exports = I18nInheritShop;
