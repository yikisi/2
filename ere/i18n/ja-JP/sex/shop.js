module.exports = class extends require('#/i18n/zh-CN/sex/shop') {
  abl_tab = '能力習得';
  talent_tab = '特性変更';
  mark_tab = (has_inmon) => (has_inmon ? '刻印の調整' : '刻印の消去');
  transfer_tab = '因子の採補';
  update_end = '強化を終える';

  jewel_header_template = '%NAME% の因子';
  abl_header_template = '%NAME% の能力';
  talent_header_template = '%NAME% の特性';
  mark_header_template = '%NAME% の刻印';
  inmon_header_template = '%NAME% の淫紋';
  transfer_header = '採補の術';

  price_tip_template = '必要：%PRICE%';
  cond_tip_template = '%COND% %EXP%（現在 %NOW%）';
  multi_cond_tip_template = '%COND% 精液総付着量(ml)（現在 %ALL% = %NOW%）';
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
    '* 能力名を押すと説明。↑/↓ で上げ下げ\n' +
    '** 部位の調教因子が足りないときは、2倍の因子で差額を補える';
  cf_upgrade = '強化';
  cf_downgrade = '弱化';
  get_abl_upgrade_confirm = (chara, abl, upgrade, new_level) => [
    chara,
    ' の ',
    abl,
    ' を',
    upgrade,
    'して ',
    new_level,
    ' にする？ 消費：',
  ];

  bt_add = '特性を得る';
  bt_remove = '特性を消す';
  bt_t_up = '感度を上げる';
  bt_t_down = '感度を下げる';
  milk_other_condition = '[母乳薬剤] による薬物泌乳中（現在：%STATUS%）';
  get_talent_tab_tooltip = (limit) =>
    '* 特性名を押すと説明。後ろのボタンで感度や特性を操作\n' +
    '** 部位の調教因子が足りないときは、2倍の因子で差額を補える\n' +
    `*** 最高感度にできる部位の数：${limit}`;
  cf_add = '取得';
  cf_remove = '消去';
  cf_s_up = '上昇';
  cf_s_down = '低下';
  get_talent_change_confirm = (chara, talent, change) => [
    chara,
    ' の ',
    talent,
    ' 特性を',
    change,
    'する？ 消費：',
  ];
  get_sens_change_confirm = (chara, talent, change) => [
    chara,
    ' の ',
    talent,
    ' を',
    change,
    'させる？ 消費：',
  ];
  milk_slave_warning = '（淫紋の詞条 [乳奴] は取り消される！）';

  ch_cost_meek = '従順因子で反抗刻印を消す';
  ch_cost_pain = '苦痛因子で反抗刻印を消す';
  ch_cost_fear = '恐怖因子で反抗刻印を消す';
  ch_cost_shame = '恥辱因子で反抗刻印を消す';
  clean_hate_tooltip =
    '* 刻印があるとき、対応する因子で反抗刻印を消せる\n** 同じ等級なら、苦痛・恐怖・恥辱のほうが従順より安く済むが、副作用がありうる';
  bt_clean_pain = '従順因子で苦痛刻印を消す';
  bt_clean_shame = '従順因子で恥辱刻印を消す';
  clean_other_tooltip =
    '* 消す刻印が低く、同心刻印が高いほど、従順因子の消費は少ない';
  bt_upgrade_inmon = '淫紋の等級を上げる';
  bt_get_inmon = '快楽刻印を淫紋に変える';
  unlock_inmon_tooltip =
    '* 一心同体の度合い（同心刻印）が高いほど、淫紋の強化費は安い';
  sticker_tooltip = '淫紋シールには詞条を付けられない';
  inmon_slave_template = '現在の詞条：%SLAVE%';
  inmon_slave_desc_template = '効果：%DESC%';
  inmon_plugin_header = '使えるプラグイン';
  inmon_plugin_tooltip =
    '* 購入で解除したプラグインは、以降従順因子を消費しない\n** 同じ系統の効果は一度に一つだけ';
  get_inmon_warning =
    '淫紋を刻んで相手を隷属させるのは極めて不道徳で、社会的評価にも大きく響く！ 続けていい？';
  new_option_header = '新しい淫紋詞条を選ぶ';
  change_option_tooltip =
    '* 詞条の切り替えには従順因子 1,000\n** 詞条の解除は無料';
  get_clean_hate_confirm = (chara, jewel, hate) => [
    chara,
    ' の ',
    jewel,
    ' で ',
    hate,
    ' を1段階消す？ 消費：',
  ];
  get_clean_other_confirm = (chara, jewel, mark) => [
    chara,
    ' の ',
    jewel,
    ' で ',
    mark,
    ' を1段階消す？ 消費：',
  ];
  get_get_inmon_confirm = (chara, m_pleasure, m_inmon) => [
    chara,
    ' の ',
    m_pleasure,
    ' を ',
    m_inmon,
    ' に変える？ 消費：',
  ];
  get_upgrade_inmon_confirm = (chara, m_inmon, new_inmon) => [
    chara,
    ' の ',
    m_inmon,
    ' を ',
    new_inmon,
    ' に強化する？ 消費：',
  ];
  get_change_option_confirm = (chara, option) => [
    chara,
    ' の淫紋詞条を ',
    option,
    ' に切り替える？ 消費',
  ];
  get_load_plugin_confirm = (chara, plugin) => [
    chara,
    ' に ',
    plugin,
    ' を解除して装着する？ 消費：',
  ];
  clean_slave_option_confirm = '詞条を取り消していい？';
  s_milk_warning_man = '男性は乳を上納できない';
  s_preg_warning_man = '男性は妊娠できない';
  s_milk_warning_milk = '[母乳体質] だけが乳を上納できる';
  s_preg_warning_plugin = '不妊の加護を受けている';
  s_inherit_warning_race = '%UMA% だけが因子を上納できる';
  s_assi_warning_dup = 'すでに助奴が一名いる';

  bt_transfer = '%NAME% の %JEWEL% を %YOU% へ移す';
  transfer_tab_tooltip =
    '* キャラの部位因子と従順因子 10,000 を、%YOU% の因子 10 に換えられる\n' +
    '** キャラの苦痛・恐怖・恥辱因子 10,000 を、%YOU% の従順因子 1 に換えられる';
  get_transfer_confirm = (chara, cost, all, you, you_get) => [
    chara,
    ' の ',
    cost,
    '（合計 ',
    all,
    '）を ',
    you,
    ' の ',
    you_get,
    ' に換える？',
  ];
};
