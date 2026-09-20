module.exports = class extends require('#/i18n/zh-CN/race/inherit') {
  addition_jewel = ' (+%COUNT%)';
  gene_available_template = 'あと %COUNT% 回継承できる';

  ui_inherit_enabled = '因子継承が可能';
  select_inherit_or_god = '因子継承の時期だ。行う？';
  sig_inherit = '因子継承！';
  sig_god = '普通にお参りする';

  get_jewel_list = (pink, blue, white) => [pink, ' ・ ', blue, ' ・ ', white];

  header_template = '%NAME% に因子を継承';
  get_gene_list = (genes) => ['因子能力：', ...genes];
  list_header = '因子能力一覧';
  hd_name = '名称';
  hd_learnt = '習得';
  hd_count = '数量';
  hd_price = '価格';
  bt_learn = '習得';
  bt_convert = '余った因子をスキルPtに換える';
  inherit_tip =
    '* 担当の因子が足りないときは、差額の2倍を払って継承を助けられる';

  bt_select_chara = '継承するキャラを選ぶ';
  not_enough_chara_tip = '【継承できるキャラが2人以上必要】';

  bt_remove_genes = '因子能力をすべて忘れる';
  player_genes_limit_tip_template =
    '* ウマ娘トレーナーが継承できる因子能力は最大 %COUNT% 個';

  inherit_chara_header = '因子を継承できるキャラ';

  have_inherited = '継承済み';
  select_chara_tip =
    '* 2人同時に選ばないと因子継承は始まらない\n** 継承された側は、継承した側の育成が終わるまで再育成できない！';

  get_inherit_success = (chara, jewels) => [
    '継承成功！',
    chara,
    ' は次を得た：',
    { isBr: true },
    ...jewels,
  ];

  remove_genes_confirm =
    '因子能力をすべて忘れる？ すでに上がった能力上限は消えない';
  get_remove_genes_result = (you) => [
    '【',
    you,
    ' は因子能力をすべて忘れた……適性、継承能力、継承スキルは消えた】',
  ];
  convert_jewels_confirm_template = '余った因子をスキルPt %PT% に換える？';

  get_inherit_result = (chara, attr_or_adapt, result) => [
    chara,
    ' の ',
    attr_or_adapt,
    ' はいま ',
    result,
  ];

  get_price_info = (jewel_name, cost, all) => [jewel_name, '×', cost, '/', all];
  get_price_info_additional = (jewel_name, cost, you, you_cost, you_all) => [
    ...this.get_price_info(jewel_name, cost, cost),
    '（',
    you,
    ' の ',
    ...this.get_price_info(jewel_name, you_cost, you_all),
    '）',
  ];
  get_inherit_confirm = (price, chara, gene, available_info) => [
    ...price,
    ' を使って ',
    chara,
    ' に',
    ...gene,
    'を継承する？',
    available_info,
  ];
};
