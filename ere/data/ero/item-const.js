const { part_enum } = require('#/data/ero/part-const');

const item_enum = {
  // 口球
  gag: 0,
  // 夹子（乳樱）
  clamps: 0,
  // 电击器（乳樱）
  electric_stunner: 0,
  // 吸奶器
  milk_pump: 0,
  // 跳蛋（乳核樱菊）
  love_eggs: 0,
  // 伪器（樱菊）
  dildo: 0,
  // 肛塞
  butt_plug: 0,
  // 拉珠
  anal_beads: 0,
  // 眼罩
  blindfold: 0,
  // 项圈
  collar: 0,
  // 全身镜
  mirror: 0,
  // 飞机杯
  artificial_virgin: 0,
};
Object.keys(item_enum).forEach((e, i) => (item_enum[e] = i));

const item_names = [];
item_names[item_enum.anal_beads] = '拉珠';
item_names[item_enum.blindfold] = '眼罩';
item_names[item_enum.butt_plug] = '肛塞';
item_names[item_enum.clamps] = '夹子';
item_names[item_enum.collar] = '项圈';
item_names[item_enum.dildo] = '伪器';
item_names[item_enum.electric_stunner] = '电击器';
item_names[item_enum.gag] = '口球';
item_names[item_enum.love_eggs] = '跳蛋';
item_names[item_enum.milk_pump] = '榨乳器';
item_names[item_enum.mirror] = '全身镜';
item_names[item_enum.artificial_virgin] = '飞机杯';

const item_actions = {};
item_actions[item_enum.anal_beads] = '塞入';
item_actions[item_enum.butt_plug] = '塞上';
item_actions[item_enum.clamps] = '夹上';
item_actions[item_enum.dildo] = '插入';
item_actions[item_enum.gag] = '戴上';
item_actions[item_enum.love_eggs] = {};
item_actions[item_enum.love_eggs][part_enum.breast] = item_actions[
  item_enum.love_eggs
][part_enum.clitoris] = '贴上';
item_actions[item_enum.love_eggs][part_enum.virgin] = item_actions[
  item_enum.love_eggs
][part_enum.anal] = '塞入';
item_actions[item_enum.milk_pump] = '装上';
item_actions[item_enum.artificial_virgin] = '套上';

const medicine_enum = {
  // 马跳Z
  uma_z: 0,
  // 弗隆K
  fron_k: 0,
  // 弗隆P
  fron_p: 0,
  // 母乳药剂
  drug_m: 0,
  // 促排卵药
  drug_p: 0,
  // 短效避孕药
  anti_p_s: 0,
  // 长效避孕药
  anti_p_l: 0,
  // 人奶
  milk_h: 0,
  // 马奶
  milk_u: 0,
};
Object.keys(medicine_enum).forEach((e, i) => (medicine_enum[e] = i));

const medicine_names = [];
medicine_names[medicine_enum.uma_z] = '马跳Z';
medicine_names[medicine_enum.fron_k] = '弗隆K';
medicine_names[medicine_enum.fron_p] = '弗隆P';
medicine_names[medicine_enum.drug_m] = '母乳药剂';
medicine_names[medicine_enum.drug_p] = '促排卵药';
medicine_names[medicine_enum.anti_p_s] = '短效避孕药';
medicine_names[medicine_enum.anti_p_l] = '长效避孕药';
medicine_names[medicine_enum.milk_h] = '人奶';
medicine_names[medicine_enum.milk_u] = '马奶';

module.exports = {
  /**
   * @param {number} item
   * @param {number} part
   * @returns {string}
   */
  get_item_action(item, part) {
    let ret = item_actions[item];
    if (typeof ret === 'object') {
      ret = ret[part];
    }
    return ret;
  },
  item_enum,
  item_names,
  medicine_enum,
  medicine_names,
  tequip_parts: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    '项圈',
    '眼罩',
  ],
};
