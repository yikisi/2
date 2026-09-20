module.exports = class extends require('#/i18n/zh-CN/table/mark') {
  name_template = '%NAME%刻印';
  lv_template = 'Lv.%LEVEL%';

  n_pleasure = '快楽';
  n_ero = '淫紋';
  n_meek = '同心';
  n_pain = '苦痛';
  n_shame = '恥辱';
  n_hate = '反抗';

  a_pleasure = '快';
  a_ero = '淫';
  a_meek = '順';
  a_pain = '痛';
  a_shame = '恥';
  a_hate = '反';
  a_iron = '鋼';

  abbr_template = '[%MARK%%LEVEL%]';
  mark_with_level = '%MARK% Lv.%LEVEL%';

  get_mark_with_level_stars = (
    mark_with_level,
    full_stars,
    empty_stars,
    divider = ' ',
  ) => [mark_with_level, divider, full_stars, empty_stars];

  s_title_name = '別称';

  s_t_no = '性処理用の牝馬';
  s_t_milk = '搾乳用の牝馬';
  s_t_pregnant = '繁殖用の牝馬';
  s_t_worker = '献金用の牝馬';
  s_t_inherit = '継承用の牝馬';
  s_t_furniture = '抱き枕用の牝馬';
  s_t_assistant = '陪席用の牝馬';

  s_option_name = '詞条';

  s_o_no = 'なし';
  s_o_milk = '乳奴';
  s_o_pregnant = '孕奴';
  s_o_worker = '金奴';
  s_o_inherit = '珠奴';
  s_o_furniture = '枕奴';
  s_o_assistant = '助奴';

  s_description_name = '効果';

  s_d_no = '-';
  s_d_milk = '毎週、乳を一杯差し出す。';
  s_d_pregnant = '未妊娠時は常に危険日。妊娠率+10%、妊娠進行速度+100%。';
  s_d_worker = '毎週、一定のウマコインを差し出す。';
  s_d_inherit = '毎週、一定の継承因子を差し出す。';
  s_d_furniture =
    '同衾中は睡眠姦と拉致をすべて阻み、休憩時の体力回復を高める。';
  s_d_assistant =
    '既定の助手として、他キャラとの調教に呼び出せる。設定できるのは一名のみ。';
};
