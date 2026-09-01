module.exports = class extends require('#/i18n/zh-CN/race/inherit') {
  addition_jewel = ' (+%COUNT%)';
  gene_available_template = 'Можно наследовать ещё %COUNT% раз';

  ui_inherit_enabled = 'Доступно наследование факторов';
  select_inherit_or_god = 'Можно наследовать факторы! Сделать это?';
  sig_inherit = 'Наследовать факторы!';
  sig_god = 'Просто помолиться';

  get_jewel_list = (pink, blue, white) => [pink, ' · ', blue, ' · ', white];

  header_template = 'Наследование факторов для %NAME%';
  get_gene_list = (genes) => ['Способности факторов: ', ...genes];
  list_header = 'Список способностей факторов';
  hd_name = 'Название';
  hd_learnt = 'Изучено';
  hd_count = 'Число';
  hd_price = 'Цена';
  bt_learn = 'Изучить';
  bt_convert = 'Обменять оставшиеся факторы на очки навыков';
  inherit_tip =
    '* Если факторов не хватает, можно доплатить двойную разницу и всё равно унаследовать';

  bt_select_chara = 'Выбрать доноров';
  not_enough_chara_tip =
    '【Нужно минимум два персонажа, от которых можно наследовать】';

  bt_remove_genes = 'Забыть все способности факторов';
  player_genes_limit_tip_template =
    '* Тренер-умамусумэ может унаследовать не больше %COUNT% способностей';

  inherit_chara_header = 'Кого можно наследовать';

  have_inherited = 'Уже унаследована';
  select_chara_tip =
    '* Чтобы начать наследование факторов, нужно выбрать сразу двух персонажей\n** Доноров нельзя воспитывать заново, пока наследующий персонаж не завершит воспитание!';

  get_inherit_success = (chara, jewels) => [
    'Наследование успешно! ',
    chara,
    ' получила: ',
    { isBr: true },
    ...jewels,
  ];

  remove_genes_confirm =
    'Забыть все способности факторов? Уже поднятые потолки параметров останутся';
  get_remove_genes_result = (you) => [
    '【',
    you,
    ' забыл(а) все способности факторов… все пригодности, унаследованные параметры и навыки исчезли】',
  ];
  convert_jewels_confirm_template =
    'Обменять оставшиеся факторы на %PT% очков навыков?';

  get_inherit_result = (chara, attr_or_adapt, result) => [
    chara,
    'У ',
    attr_or_adapt,
    ' сейчас ',
    result,
  ];

  get_price_info = (jewel_name, cost, all) => [jewel_name, '×', cost, '/', all];
  get_price_info_additional = (jewel_name, cost, you, you_cost, you_all) => [
    ...this.get_price_info(jewel_name, cost, cost),
    ' (и у ',
    you,
    ': ',
    ...this.get_price_info(jewel_name, you_cost, you_all),
    ')',
  ];
  get_inherit_confirm = (price, chara, gene, available_info) => [
    'Потратить ',
    ...price,
    ' чтобы ',
    chara,
    ' унаследовала ',
    ...gene,
    '? ',
    available_info,
  ];
};
