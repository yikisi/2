class I18nInheritShop {
  static _ = new I18nInheritShop();

  addition_jewel = ' (+%COUNT%)';
  gene_available_template = '还可以继承 %COUNT% 次';

  ui_inherit_enabled = '可进行因子继承';
  select_inherit_or_god = '可以因子继承了！要进行吗？';
  sig_inherit = '因子继承！';
  sig_god = '普通拜谒就好';

  get_jewel_list = (pink, blue, white) => [pink, ' · ', blue, ' · ', white];

  header_template = '为 %NAME% 继承因子';
  get_gene_list = (genes) => ['因子能力：', ...genes];
  list_header = '因子能力列表';
  hd_name = '名称';
  hd_learnt = '习得';
  hd_count = '数量';
  hd_price = '价格';
  bt_learn = '学习';
  bt_convert = '将剩余因子转换为技能点数';
  inherit_tip =
    '* 角色的因子不足以继承因子能力时，可以支付双倍差额帮助角色继承因子能力';

  bt_select_chara = '选择继承角色';
  not_enough_chara_tip = '【需要有两名以上可以继承的角色】';

  bt_remove_genes = '遗忘所有因子能力';
  player_genes_limit_tip_template = '* 马娘训练员最多继承 %COUNT% 个因子能力';

  inherit_chara_header = '可继承因子的角色';

  have_inherited = '已被继承';
  select_chara_tip =
    '* 必须同时选中两个角色才能开始因子继承\n** 被继承的角色在继承角色结束育成前无法重新育成！';

  get_inherit_success = (chara, jewels) => [
    '继承成功！',
    chara,
    ' 获得了：',
    { isBr: true },
    ...jewels,
  ];

  remove_genes_confirm = '遗忘所有因子能力吗？已提高的属性上限不会消失';
  get_remove_genes_result = (you) => [
    '【',
    you,
    ' 遗忘了所有因子能力……所有适性、继承属性与继承技能都消失了】',
  ];
  convert_jewels_confirm_template = '将剩余因子转换成 %PT% 点技能点数吗？';

  get_inherit_result = (chara, attr_or_adapt, result) => [
    chara,
    ' 的 ',
    attr_or_adapt,
    ' 现在是 ',
    result,
  ];

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
    ...price,
    ' 为 ',
    chara,
    ' 继承',
    ...gene,
    '吗？',
    available_info,
  ];
}

module.exports = I18nInheritShop;
