module.exports = class extends require('#/i18n/zh-CN/race/inherit') {
  addition_jewel = ' (+%COUNT%)';
  gene_available_template = '앞으로 %COUNT%회 계승 가능';

  ui_inherit_enabled = '인자 계승 가능';
  select_inherit_or_god = '인자 계승이 가능합니다! 진행하시겠습니까?';
  sig_inherit = '인자 계승!';
  sig_god = '평범한 방문으로 하겠습니다';

  get_jewel_list = (pink, blue, white) => [pink, ' ・ ', blue, ' ・ ', white];

  header_template = '%NAME%에게 인자 계승';
  get_gene_list = (genes) => ['인자 능력: ', ...genes];
  list_header = '인자 능력 리스트';
  hd_name = '이름';
  hd_learnt = '습득';
  hd_count = '보유';
  hd_price = '가격';
  bt_learn = '습득';
  bt_convert = '남은 인자를 스킬 포인트로 변환';
  inherit_tip =
    '* 우마무스메의 인자가 부족할 경우, 트레이너가 부족분의 2배를 지불하여 계승을 도울 수 있습니다.';

  bt_select_chara = '계승 캐릭터 선택';
  not_enough_chara_tip = '계승해줄 캐릭터가 최소 둘 이상 필요합니다……';

  bt_remove_genes = '모든 인자 능력 망각';
  player_genes_limit_tip_template =
    '* 우마무스메 트레이너는 최대 %COUNT%개의 인자 능력을 계승할 수 있습니다';

  inherit_chara_header = '인자계승 가능 캐릭터';

  have_inherited = '이미 계승됨';
  select_chara_tip =
    '* 두 캐릭터를 동시에 선택해야 인자 계승을 시작할 수 있습니다\n** 계승해준 캐릭터는 계승받은 캐릭터의 육성이 완료될 때까지 다시 육성할 수 없습니다!';

  get_inherit_success = (chara, jewels) => [
    '계승 성공! ',
    chara,
    '의 계승 결과: ',
    { isBr: true },
    ...jewels,
  ];

  remove_genes_confirm =
    '모든 인자 능력을 망각하시겠습니까? (상승한 능력치 상한은 유지됩니다)';
  get_remove_genes_result = (you) => [
    '【',
    you,
    '은(는) 모든 인자 능력을 망각했습니다…… 모든 적성, 계승 능력치 및 계승 스킬이 소멸되었습니다……】',
  ];
  convert_jewels_confirm_template =
    '남은 인자를 %PT% 스킬 포인트로 변환하시겠습니까?';

  get_inherit_result = (chara, attr_or_adapt, result) => [
    chara,
    '의 ',
    attr_or_adapt,
    '은(는) 현재 ',
    result,
  ];

  get_price_info = (jewel_name, cost, all) => [jewel_name, '×', cost, '/', all];
  get_price_info_additional = (jewel_name, cost, you, you_cost, you_all) => [
    ...this.get_price_info(jewel_name, cost, cost),
    '（',
    you,
    '의 ',
    ...this.get_price_info(jewel_name, you_cost, you_all),
    '）',
  ];
  get_inherit_confirm = (price, chara, gene, available_info) => [
    '확인:',
    ...price,
    '을(를) 사용해 ',
    chara,
    '에게 ',
    ...gene,
    '을(를) 계승할까요?',
    available_info,
  ];
};
