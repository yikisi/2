module.exports = class extends require('#/i18n/zh-CN/race/inherit') {
  addition_jewel = ' (+%COUNT%)';
  gene_available_template = '%COUNT% inheritances remaining';

  ui_inherit_enabled = 'Spark Inheritance available';
  select_inherit_or_god = 'Spark Inheritance is available! Proceed?';
  sig_inherit = 'Inherit Sparks!';
  sig_god = 'Pay respects as usual';

  get_jewel_list = (pink, blue, white) => [pink, ' · ', blue, ' · ', white];

  header_template = 'Inherit Sparks for %NAME%';
  get_gene_list = (genes) => ['Spark effects:', ...genes];
  list_header = 'Spark Effect List';
  hd_name = 'Name';
  hd_learnt = 'Learned';
  hd_count = 'Quantity';
  hd_price = 'Price';
  bt_learn = 'Learn';
  bt_convert = 'Convert remaining Sparks into Skill Points (SP)';
  inherit_tip =
    '* If a character does not have enough Sparks to inherit an effect, you can pay twice the shortfall to cover the difference';

  bt_select_chara = 'Select Legacies';
  not_enough_chara_tip = '[At least two eligible Legacies are required]';

  bt_remove_genes = 'Forget All Spark Effects';
  player_genes_limit_tip_template =
    '* Umamusume Trainers can inherit up to %COUNT% Spark effects';

  inherit_chara_header = 'Eligible Legacies';

  have_inherited = 'Already inherited';
  select_chara_tip =
    '* Select two Legacies to begin Spark Inheritance\n** Selected Legacies cannot begin another Career until the inheriting character completes their Career!';

  get_inherit_success = (chara, jewels) => [
    'Inheritance successful!',
    chara,
    ' received:',
    { isBr: true },
    ...jewels,
  ];

  remove_genes_confirm =
    'Forget all Spark effects? Increased stat caps will remain';
  get_remove_genes_result = (you) => [
    '[',
    you,
    ' forgot all Spark effects... All Aptitudes, inherited stats, and inherited Skills are gone]',
  ];
  convert_jewels_confirm_template =
    'Convert the remaining Sparks into %PT% Skill Points (SP)?';

  get_inherit_result = (chara, attr_or_adapt, result) => [
    chara,
    "'s ",
    attr_or_adapt,
    ' is now ',
    result,
  ];

  get_price_info = (jewel_name, cost, all) => [jewel_name, '×', cost, '/', all];
  get_price_info_additional = (jewel_name, cost, you, you_cost, you_all) => [
    ...this.get_price_info(jewel_name, cost, cost),
    ' (with ',
    you,
    "'s ",
    ...this.get_price_info(jewel_name, you_cost, you_all),
    ')',
  ];
  get_inherit_confirm = (price, chara, gene, available_info) => [
    'Use ',
    ...price,
    ' to have ',
    chara,
    ' inherit ',
    ...gene,
    '?',
    available_info,
  ];
};
