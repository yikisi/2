const era = require('#/era-electron');

const { join_list } = require('#/utils/list-utils');

const { race_difficulty } = require('#/data/race/race-const');

const { __, i18n } = require('#/i18n/selector');

/** @type {{[d]:()=>boolean,k:string,l:string,o:{l:string,v}[]}[]} */
const options = [
  {
    k: '训练难度',
    l: 'new_game.set_train_diff',
    o: [
      { l: 'new_game.set_td_0', v: 25 },
      { l: 'new_game.set_td_1', v: 0 },
      { l: 'new_game.set_td_2', v: -25 },
    ],
  },
  {
    k: '训练加成',
    l: 'new_game.set_train_buff',
    o: [
      { l: 'new_game.set_tb_0', v: 25 },
      { l: 'new_game.set_tb_1', v: 0 },
      { l: 'new_game.set_tb_2', v: -25 },
    ],
  },
  {
    k: '比赛难度',
    l: 'new_game.set_race_diff',
    o: [
      { l: 'new_game.set_rd_0', v: race_difficulty.easy },
      { l: 'new_game.set_rd_1', v: race_difficulty.normal },
      { l: 'new_game.set_rd_2', v: race_difficulty.hard },
    ],
  },
  {
    k: '可能伤病',
    l: 'new_game.set_hurt',
    o: [
      { l: 'new_game.set_ht_0', v: 0 },
      { l: 'new_game.set_ht_1', v: 1 },
    ],
  },
  {
    k: '压力获取',
    l: 'new_game.set_pressure',
    o: [
      { l: 'new_game.set_ps_0', v: 0 },
      { l: 'new_game.set_ps_1', v: 1 },
    ],
  },
  {
    k: '道具价格',
    l: 'new_game.set_money_price',
    o: [
      { l: 'new_game.set_mp_0', v: -50 },
      { l: 'new_game.set_mp_1', v: 0 },
      { l: 'new_game.set_mp_2', v: 100 },
    ],
  },
  {
    k: '宝珠消耗量',
    l: 'new_game.set_sex_skill_price',
    o: [
      { l: 'new_game.set_sp_0', v: -50 },
      { l: 'new_game.set_sp_1', v: 0 },
      { l: 'new_game.set_sp_2', v: 100 },
    ],
  },
  {
    k: '因子消耗量',
    l: 'new_game.set_race_skill_price',
    o: [
      { l: 'new_game.set_sp_0', v: -50 },
      { l: 'new_game.set_sp_1', v: 0 },
      { l: 'new_game.set_sp_2', v: 100 },
    ],
  },
  {
    k: '游戏结束',
    l: 'new_game.set_game_over',
    o: [
      { l: 'new_game.set_go_0', v: 0 },
      { l: 'new_game.set_go_1', v: 1 },
      { l: 'new_game.set_go_2', v: 2 },
      { l: 'new_game.set_go_3', v: 3 },
    ],
  },
  {
    k: '回合声望惩罚',
    l: 'new_game.set_honour',
    o: [
      { l: 'new_game.set_hn_0', v: 1 },
      { l: 'new_game.set_hn_1', v: 0 },
      { l: 'new_game.set_hn_2', v: -1 },
    ],
  },
  {
    d: () => era.get('cflag:0:模版角色') > 0,
    k: '声望不足替换',
    l: 'new_game.set_honour_empty',
    o: [
      { l: 'new_game.set_he_0', v: 0 },
      { l: 'new_game.set_he_1', v: 1 },
    ],
  },
  {
    k: '角色性别',
    l: 'new_game.set_chara_sex',
    o: [
      { l: 'new_game.set_cs_0', v: 0 },
      { l: 'new_game.set_cs_1', v: 1 },
      { l: 'new_game.set_cs_2', v: 10 },
      { l: 'new_game.set_cs_3', v: 99 },
    ],
  },
  {
    k: '马娘初始好感',
    l: 'new_game.set_relation',
    o: [
      { l: 'relation_4', v: 225 },
      { l: 'relation_3', v: 150 },
      { l: 'relation_2', v: 75 },
      { l: 'relation_1', v: 0 },
      { l: 'relation_0', v: -100 },
    ],
  },
  {
    k: '好感上升加成',
    l: 'new_game.set_relation_buff',
    o: [
      { l: 'new_game.set_diff_easy', v: 50 },
      { l: 'new_game.set_diff_normal', v: 0 },
      { l: 'new_game.set_diff_hard', v: -50 },
    ],
  },
  {
    k: '回合好感惩罚',
    l: 'new_game.set_relation_change',
    o: [
      { l: 'new_game.set_rc_0', v: 5 },
      { l: 'new_game.set_rc_1', v: 0 },
      { l: 'new_game.set_rc_2', v: -10 },
    ],
  },
  {
    k: '马娘初始爱慕',
    l: 'new_game.set_love',
    o: [
      { l: 'love_0', v: 0 },
      { l: 'love_2', v: 25 },
      { l: 'love_3', v: 50 },
    ],
  },
  {
    k: '爱慕上升加成',
    l: 'new_game.set_love_buff',
    o: [
      { l: 'new_game.set_diff_normal', v: 0 },
      { l: 'new_game.set_diff_easy', v: 50 },
    ],
  },
  {
    k: '回合爱慕惩罚',
    l: 'new_game.set_love_change',
    o: [
      { l: 'new_game.set_lc_0', v: 0 },
      { l: 'new_game.set_lc_1', v: 1 },
    ],
  },
  {
    k: '不忠惩罚',
    l: 'new_game.set_unfaith',
    o: [
      { l: 'new_game.set_uf_0', v: 0 },
      { l: 'new_game.set_uf_1', v: 1 },
    ],
  },
  {
    k: '极端行为限制',
    l: 'new_game.set_extreme',
    o: [
      { l: 'new_game.set_eb_0', v: 0 },
      { l: 'new_game.set_eb_1', v: 1 },
      { l: 'new_game.set_eb_2', v: 2 },
      { l: 'new_game.set_eb_3', v: 3 },
    ],
  },
  {
    k: '自带特性',
    l: 'new_game.set_talent',
    o: [
      { l: 'new_game.set_tt_0', v: 1 },
      { l: 'new_game.set_tt_1', v: 0 },
      { l: 'new_game.set_tt_2', v: -1 },
      { l: 'new_game.set_tt_3', v: -4 },
    ],
  },
  {
    k: '性技自主学习',
    l: 'new_game.set_abl_update',
    o: [
      { l: 'new_game.set_au_0', v: 0 },
      { l: 'new_game.set_au_1', v: 1 },
    ],
  },
  {
    k: '强奸抵抗',
    l: 'new_game.set_resist',
    o: [
      { l: 'new_game.set_rs_0', v: 0 },
      { l: 'new_game.set_rs_1', v: 1 },
    ],
  },
  {
    k: '道具影响',
    l: 'new_game.set_ero_item',
    o: [
      { l: 'new_game.set_ei_0', v: 0 },
      { l: 'new_game.set_ei_1', v: -25 },
    ],
  },
  {
    d: () => true,
    k: '目白城风格',
    l: 'new_game.set_mejiro_style',
    o: [
      { l: 'new_game.set_ms_0', v: 0 },
      { l: 'new_game.set_ms_1', v: 1 },
    ],
  },
  {
    k: '后代爱慕限制',
    l: 'new_game.set_child_love',
    o: [
      { l: 'new_game.set_cl_0', v: 0 },
      { l: 'new_game.set_cl_1', v: 1 },
    ],
  },
  {
    k: '马娘身高',
    l: 'new_game.set_height',
    o: [
      { l: 'new_game.set_hg_0', v: 0 },
      { l: 'new_game.set_hg_1', v: 1 },
      { l: 'new_game.set_hg_2', v: 2 },
    ],
  },
  {
    k: '新手教学',
    l: 'new_game.set_guide',
    o: [
      { l: 'new_game.set_gd_0', v: 0 },
      { l: 'new_game.set_gd_1', v: 1 },
    ],
  },
];

function get_difficulties() {
  const _ = i18n().new_game;
  return new Array(8).fill(0).map((__, i) => ({
    n: _[`set_dif${i}`],
    d: join_list(
      _[`set_dif${i}_desc`]
        .split('|')
        .map((s) => ({ content: s, display: 'inline-block' })),
      { isDivider: true },
    ),
  }));
}

/** @param {number} theme */
function set_from_theme(theme) {
  switch (theme) {
    case 0:
      era.set('flag:训练难度', options[0].o[0].v);
      era.set('flag:训练加成', options[1].o[0].v);
      era.set('flag:比赛难度', options[2].o[0].v);
      era.set('flag:可能伤病', options[3].o[0].v);
      era.set('flag:马娘初始好感', options[12].o[1].v);
      era.set('flag:马娘初始爱慕', options[15].o[0].v);
      era.set('flag:好感上升加成', options[13].o[1].v);
      era.set('flag:爱慕上升加成', options[16].o[0].v);
      era.set('flag:极端行为限制', options[19].o[0].v);
      era.set('flag:回合声望惩罚', options[9].o[1].v);
      era.set('flag:回合好感惩罚', options[14].o[0].v);
      era.set('flag:回合爱慕惩罚', options[17].o[0].v);
      era.set('flag:游戏结束', options[8].o[0].v);
      era.set('flag:后代爱慕限制', options[25].o[0].v);
      era.set('flag:角色性别', options[11].o[0].v);
      era.set('flag:自带特性', options[20].o[1].v);
      era.set('flag:道具价格', options[5].o[0].v);
      era.set('flag:宝珠消耗量', options[6].o[0].v);
      era.set('flag:因子消耗量', options[7].o[0].v);
      era.set('flag:强奸抵抗', options[22].o[1].v);
      era.set('flag:道具影响', options[23].o[1].v);
      era.set('flag:声望不足替换', options[10].o[0].v);
      era.set('flag:压力获取', options[4].o[0].v);
      era.set('flag:不忠惩罚', options[18].o[1].v);
      era.set('flag:性技自主学习', options[21].o[0].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 0);
      break;
    case 1:
      era.set('flag:训练难度', options[0].o[1].v);
      era.set('flag:训练加成', options[1].o[1].v);
      era.set('flag:比赛难度', options[2].o[1].v);
      era.set('flag:可能伤病', options[3].o[1].v);
      era.set('flag:马娘初始好感', options[12].o[2].v);
      era.set('flag:马娘初始爱慕', options[15].o[0].v);
      era.set('flag:好感上升加成', options[13].o[1].v);
      era.set('flag:爱慕上升加成', options[16].o[0].v);
      era.set('flag:极端行为限制', options[19].o[0].v);
      era.set('flag:回合声望惩罚', options[9].o[2].v);
      era.set('flag:回合好感惩罚', options[14].o[1].v);
      era.set('flag:回合爱慕惩罚', options[17].o[0].v);
      era.set('flag:游戏结束', options[8].o[0].v);
      era.set('flag:后代爱慕限制', options[25].o[0].v);
      era.set('flag:角色性别', options[11].o[0].v);
      era.set('flag:自带特性', options[20].o[1].v);
      era.set('flag:道具价格', options[5].o[1].v);
      era.set('flag:宝珠消耗量', options[6].o[1].v);
      era.set('flag:因子消耗量', options[7].o[1].v);
      era.set('flag:强奸抵抗', options[22].o[1].v);
      era.set('flag:道具影响', options[23].o[1].v);
      era.set('flag:声望不足替换', options[10].o[0].v);
      era.set('flag:压力获取', options[4].o[1].v);
      era.set('flag:不忠惩罚', options[18].o[1].v);
      era.set('flag:性技自主学习', options[21].o[1].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 0);
      break;
    case 2:
      era.set('flag:训练难度', options[0].o[2].v);
      era.set('flag:训练加成', options[1].o[2].v);
      era.set('flag:比赛难度', options[2].o[2].v);
      era.set('flag:可能伤病', options[3].o[1].v);
      era.set('flag:马娘初始好感', options[12].o[2].v);
      era.set('flag:马娘初始爱慕', options[15].o[1].v);
      era.set('flag:好感上升加成', options[13].o[1].v);
      era.set('flag:爱慕上升加成', options[16].o[1].v);
      era.set('flag:极端行为限制', options[19].o[3].v);
      era.set('flag:回合声望惩罚', options[9].o[2].v);
      era.set('flag:回合好感惩罚', options[14].o[2].v);
      era.set('flag:回合爱慕惩罚', options[17].o[0].v);
      era.set('flag:游戏结束', options[8].o[1].v);
      era.set('flag:后代爱慕限制', options[25].o[0].v);
      era.set('flag:角色性别', options[11].o[0].v);
      era.set('flag:自带特性', options[20].o[1].v);
      era.set('flag:道具价格', options[5].o[2].v);
      era.set('flag:宝珠消耗量', options[6].o[2].v);
      era.set('flag:因子消耗量', options[7].o[2].v);
      era.set('flag:强奸抵抗', options[22].o[1].v);
      era.set('flag:道具影响', options[23].o[1].v);
      era.set('flag:声望不足替换', options[10].o[1].v);
      era.set('flag:压力获取', options[4].o[1].v);
      era.set('flag:不忠惩罚', options[18].o[1].v);
      era.set('flag:性技自主学习', options[21].o[1].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 1);
      break;
    case 3:
      era.set('flag:训练难度', options[0].o[2].v);
      era.set('flag:训练加成', options[1].o[2].v);
      era.set('flag:比赛难度', options[2].o[2].v);
      era.set('flag:可能伤病', options[3].o[1].v);
      era.set('flag:马娘初始好感', options[12].o[4].v);
      era.set('flag:马娘初始爱慕', options[15].o[0].v);
      era.set('flag:好感上升加成', options[13].o[2].v);
      era.set('flag:爱慕上升加成', options[16].o[0].v);
      era.set('flag:极端行为限制', options[19].o[1].v);
      era.set('flag:回合声望惩罚', options[9].o[2].v);
      era.set('flag:回合好感惩罚', options[14].o[2].v);
      era.set('flag:回合爱慕惩罚', options[17].o[0].v);
      era.set('flag:游戏结束', options[8].o[3].v);
      era.set('flag:后代爱慕限制', options[25].o[0].v);
      era.set('flag:角色性别', options[11].o[0].v);
      era.set('flag:自带特性', options[20].o[3].v);
      era.set('flag:道具价格', options[5].o[2].v);
      era.set('flag:宝珠消耗量', options[6].o[2].v);
      era.set('flag:因子消耗量', options[7].o[2].v);
      era.set('flag:强奸抵抗', options[22].o[1].v);
      era.set('flag:道具影响', options[23].o[1].v);
      era.set('flag:声望不足替换', options[10].o[1].v);
      era.set('flag:压力获取', options[4].o[1].v);
      era.set('flag:不忠惩罚', options[18].o[0].v);
      era.set('flag:性技自主学习', options[21].o[1].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 1);
      break;
    case 4:
      era.set('flag:训练难度', options[0].o[0].v);
      era.set('flag:训练加成', options[1].o[0].v);
      era.set('flag:比赛难度', options[2].o[0].v);
      era.set('flag:可能伤病', options[3].o[0].v);
      era.set('flag:马娘初始好感', options[12].o[0].v);
      era.set('flag:马娘初始爱慕', options[15].o[2].v);
      era.set('flag:好感上升加成', options[13].o[2].v);
      era.set('flag:爱慕上升加成', options[16].o[1].v);
      era.set('flag:极端行为限制', options[19].o[3].v);
      era.set('flag:回合声望惩罚', options[9].o[2].v);
      era.set('flag:回合好感惩罚', options[14].o[2].v);
      era.set('flag:回合爱慕惩罚', options[17].o[1].v);
      era.set('flag:游戏结束', options[8].o[0].v);
      era.set('flag:后代爱慕限制', options[25].o[1].v);
      era.set('flag:角色性别', options[11].o[0].v);
      era.set('flag:自带特性', options[20].o[1].v);
      era.set('flag:道具价格', options[5].o[1].v);
      era.set('flag:宝珠消耗量', options[6].o[1].v);
      era.set('flag:因子消耗量', options[7].o[1].v);
      era.set('flag:强奸抵抗', options[22].o[1].v);
      era.set('flag:道具影响', options[23].o[1].v);
      era.set('flag:声望不足替换', options[10].o[0].v);
      era.set('flag:压力获取', options[4].o[0].v);
      era.set('flag:不忠惩罚', options[18].o[1].v);
      era.set('flag:性技自主学习', options[21].o[1].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 1);
      break;
    case 5:
      era.set('flag:训练难度', options[0].o[0].v);
      era.set('flag:训练加成', options[1].o[0].v);
      era.set('flag:比赛难度', options[2].o[0].v);
      era.set('flag:可能伤病', options[3].o[0].v);
      era.set('flag:马娘初始好感', options[12].o[1].v);
      era.set('flag:马娘初始爱慕', options[15].o[0].v);
      era.set('flag:好感上升加成', options[13].o[1].v);
      era.set('flag:爱慕上升加成', options[16].o[0].v);
      era.set('flag:极端行为限制', options[19].o[0].v);
      era.set('flag:回合声望惩罚', options[9].o[1].v);
      era.set('flag:回合好感惩罚', options[14].o[0].v);
      era.set('flag:回合爱慕惩罚', options[17].o[0].v);
      era.set('flag:游戏结束', options[8].o[0].v);
      era.set('flag:后代爱慕限制', options[25].o[0].v);
      era.set('flag:角色性别', options[11].o[0].v);
      era.set('flag:自带特性', options[20].o[0].v);
      era.set('flag:道具价格', options[5].o[1].v);
      era.set('flag:宝珠消耗量', options[6].o[0].v);
      era.set('flag:因子消耗量', options[7].o[1].v);
      era.set('flag:强奸抵抗', options[22].o[0].v);
      era.set('flag:道具影响', options[23].o[0].v);
      era.set('flag:声望不足替换', options[10].o[0].v);
      era.set('flag:压力获取', options[4].o[0].v);
      era.set('flag:不忠惩罚', options[18].o[0].v);
      era.set('flag:性技自主学习', options[21].o[0].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 0);
      break;
    case 6:
      era.set('flag:训练难度', options[0].o[0].v);
      era.set('flag:训练加成', options[1].o[0].v);
      era.set('flag:比赛难度', options[2].o[0].v);
      era.set('flag:可能伤病', options[3].o[0].v);
      era.set('flag:马娘初始好感', options[12].o[0].v);
      era.set('flag:马娘初始爱慕', options[15].o[2].v);
      era.set('flag:好感上升加成', options[13].o[2].v);
      era.set('flag:爱慕上升加成', options[16].o[1].v);
      era.set('flag:极端行为限制', options[19].o[2].v);
      era.set('flag:回合声望惩罚', options[9].o[2].v);
      era.set('flag:回合好感惩罚', options[14].o[2].v);
      era.set('flag:回合爱慕惩罚', options[17].o[1].v);
      era.set('flag:游戏结束', options[8].o[0].v);
      era.set('flag:后代爱慕限制', options[25].o[1].v);
      era.set('flag:角色性别', options[11].o[2].v);
      era.set('flag:自带特性', options[20].o[1].v);
      era.set('flag:道具价格', options[5].o[1].v);
      era.set('flag:宝珠消耗量', options[6].o[1].v);
      era.set('flag:因子消耗量', options[7].o[1].v);
      era.set('flag:强奸抵抗', options[22].o[1].v);
      era.set('flag:道具影响', options[23].o[1].v);
      era.set('flag:声望不足替换', options[10].o[1].v);
      era.set('flag:压力获取', options[4].o[0].v);
      era.set('flag:不忠惩罚', options[18].o[1].v);
      era.set('flag:性技自主学习', options[21].o[1].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 1);
      break;
    case 7:
      era.set('flag:训练难度', options[0].o[0].v);
      era.set('flag:训练加成', options[1].o[0].v);
      era.set('flag:比赛难度', options[2].o[0].v);
      era.set('flag:可能伤病', options[3].o[0].v);
      era.set('flag:马娘初始好感', options[12].o[0].v);
      era.set('flag:马娘初始爱慕', options[15].o[2].v);
      era.set('flag:好感上升加成', options[13].o[2].v);
      era.set('flag:爱慕上升加成', options[16].o[1].v);
      era.set('flag:极端行为限制', options[19].o[2].v);
      era.set('flag:回合声望惩罚', options[9].o[2].v);
      era.set('flag:回合好感惩罚', options[14].o[2].v);
      era.set('flag:回合爱慕惩罚', options[17].o[1].v);
      era.set('flag:游戏结束', options[8].o[0].v);
      era.set('flag:后代爱慕限制', options[25].o[1].v);
      era.set('flag:角色性别', options[11].o[1].v);
      era.set('flag:自带特性', options[20].o[1].v);
      era.set('flag:道具价格', options[5].o[1].v);
      era.set('flag:宝珠消耗量', options[6].o[1].v);
      era.set('flag:因子消耗量', options[7].o[1].v);
      era.set('flag:强奸抵抗', options[22].o[1].v);
      era.set('flag:道具影响', options[23].o[1].v);
      era.set('flag:声望不足替换', options[10].o[1].v);
      era.set('flag:压力获取', options[4].o[0].v);
      era.set('flag:不忠惩罚', options[18].o[1].v);
      era.set('flag:性技自主学习', options[21].o[1].v);
      era.set('flag:马娘身高', options[26].o[1].v);
      era.set('flag:读档对话', 1);
  }
  if (era.get('cflag:0:模版角色') > 0) {
    era.set('flag:声望不足替换', options[10].o[0].v);
  }
}

async function page_settings() {
  let flag_default = true;
  let flag_setting = false;
  let theme;
  era.set('flag:新手教学', Number(!era.get('global:新手教学')));
  era.set('flag:目白城风格', options[24].o[1].v);
  set_from_theme((theme = 1));

  const difficulties = get_difficulties();

  while (flag_default) {
    await era.clear();
    const buffer = [];
    buffer.push({
      config: { content: i18n().new_game.set_diff_header },
      type: 'divider',
    });
    difficulties.slice(0, 4).forEach((e, i) => {
      buffer.push(
        {
          accelerator: i,
          config: { width: 3 },
          content: e.n,
          type: 'button',
        },
        {
          config: { width: 21 },
          content: e.d,
          type: 'text',
        },
      );
    });
    buffer.push(
      {
        accelerator: 98,
        config: {
          buttonType: era.get('flag:新手教学') > 0 ? 'warning' : 'info',
        },
        content: i18n().new_game.set_guide,
        type: 'button',
      },
      {
        content: [{ isBr: true }, i18n().new_game.set_ng_tooltip],
        type: 'text',
      },
    );
    buffer.push(
      {
        accelerator: 10,
        config: { align: 'center', width: 12 },
        content: i18n().new_game.set_detail,
        type: 'button',
      },
      {
        accelerator: 99,
        config: { align: 'center', width: 12 },
        content: i18n().ui_back_title,
        type: 'button',
      },
    );
    era.printMultiColumns(buffer);
    const ret = await era.input();
    switch (ret) {
      case 10:
        flag_default = false;
        flag_setting = true;
        break;
      case 98:
        era.set('flag:新手教学', 1 - era.get('flag:新手教学'));
        break;
      case 99:
        return true;
      default:
        set_from_theme(ret);
        return false;
    }
  }

  while (flag_setting) {
    await era.clear();
    const buffer = [];
    buffer.push([
      { config: { content: i18n().new_game.set_mode_header }, type: 'divider' },
      ...difficulties.map((d, i) => {
        return {
          accelerator: i,
          config: {
            buttonType: theme === i ? 'warning' : 'info',
            width: 3,
          },
          content: d.n,
          type: 'button',
        };
      }),
    ]);
    if (difficulties[theme]) {
      buffer[0].push({
        config: { align: 'center' },
        content: difficulties[theme].d,
        type: 'text',
      });
    }
    buffer.push(
      [
        {
          config: { content: i18n().new_game.set_option_header },
          type: 'divider',
        },
      ],
      [],
    );
    options.forEach((g, i) => {
      const val = era.get(`flag:${g.k}`);
      const disabled = g.d ? g.d() : false;
      buffer.push([
        {
          type: 'text',
          content: __(g.l),
          config: { width: 4 },
        },
        ...g.o.map((o, j) => ({
          accelerator: 100 + i * 10 + j,
          config: {
            buttonType: val === o.v ? 'warning' : 'info',
            disabled,
            title: __(`${o.l}_desc`, () => void 0),
            width: 4,
          },
          content: __(o.l),
          type: 'button',
        })),
      ]);
    });
    buffer.at(-1).push(
      {
        accelerator: 998,
        config: { align: 'right', offset: 4, width: 4 },
        content: i18n().new_game.set_next,
        type: 'button',
      },
      {
        accelerator: 999,
        config: { align: 'right', width: 4 },
        content: i18n().ui_back_title,
        type: 'button',
      },
    );
    era.printInColRows(...buffer);

    const ret = await era.input({ hideInput: true });
    switch (ret) {
      case 998:
        flag_setting = false;
        break;
      case 999:
        return true;
      default:
        if (ret >= 100) {
          const selected_index = ret % 10;
          const option = options[(ret - 100 - selected_index) / 10];
          era.set(`flag:${option.k}`, option.o[selected_index].v);
        }
    }
    set_from_theme((theme = ret));
  }
  return false;
}

module.exports = page_settings;
